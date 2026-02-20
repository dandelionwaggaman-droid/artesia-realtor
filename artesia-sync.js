// ═══════════════════════════════════════════════
// SUPABASE SYNC LAYER
// Loaded AFTER supabase CDN + config, BEFORE artesia-data.js
// Provides: hydration, push/delete, real-time, auth
// ═══════════════════════════════════════════════

const _sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ── Table-to-localStorage mapping ──
const STATE_TABLE_MAP = {
  dismissed:           { lsKey: 'artesia-dismissed',           mode: 'object' },
  showings:            { lsKey: 'artesia-showings',            mode: 'object' },
  review_decisions:    { lsKey: 'artesia-review-decisions',    mode: 'object' },
  review_data:         { lsKey: 'artesia-review-data',         mode: 'object' },
  pre_showing:         { lsKey: 'artesia-pre-showing',         mode: 'object' },
  listing_corrections: { lsKey: 'artesia-listing-corrections', mode: 'object' },
  relo_overrides:      { lsKey: 'artesia-relo-overrides',      mode: 'simple' },
  showing_assessments: { lsKey: 'artesia-showing-assessments', mode: 'object' },
  property_cards:      { lsKey: null,                          mode: 'card' },
};

// ═══════════════════════════════════════════════
// DB → JS MAPPERS
// Translate between snake_case DB and existing JS shapes
// ═══════════════════════════════════════════════

function mapZoneFromDB(row) {
  return {
    id: row.id, name: row.name, code: row.code, score: row.score,
    rating: row.rating, desc: row.description, doggyFit: row.doggy_fit,
    clr: row.colors, coords: row.coords
  };
}

function mapListingFromDB(row) {
  return {
    a: row.address, p: row.price, bd: row.beds, ba: Number(row.baths),
    sf: row.sqft_display || '', sfn: row.sqft_num || 0,
    lot: row.lot_display || '', lotn: Number(row.lot_num) || 0,
    t: row.property_type, s: row.status,
    lat: Number(row.lat), lng: Number(row.lng),
    lk: row.listing_url || '',
    photo: row.photo_url || '',
    note: row.note || null,
    noRelo: row.no_relo || false,
    unverified: row.unverified || false,
    verifyNote: row.verify_note || null,
    dreamHome: row.dream_home || false,
    dom: row.dom || null
  };
}

function mapCuldesacFromDB(row) {
  return {
    n: row.name,
    d: row.dead_end_coords,
    c: row.street_coords,
    l: row.length_ft
  };
}

function mapRowToLocalShape(table, row) {
  switch (table) {
    case 'dismissed':
      return { reason: row.reason, ts: row.dismissed_at };
    case 'showings':
      return {
        notes: row.notes || '', questions: row.questions || '',
        flaggedAt: row.flagged_at, status: row.status,
        realtorNotes: row.realtor_notes || '', updatedAt: row.updated_at,
        showOrder: row.show_order || 0,
        sequenceUpdatedAt: row.sequence_updated_at || null,
        bucket: row.strategy_bucket || ''
      };
    case 'review_decisions':
      if (row.status === 'confirmed') return 'confirmed';
      return { status: row.status, reason: row.reason, ts: row.decided_at };
    case 'review_data':
      return {
        action: row.action, checkedReasons: row.checked_reasons || [],
        otherText: row.other_text || '', customNotes: row.custom_notes || '',
        ts: row.reviewed_at
      };
    case 'pre_showing':
      return {
        clientPrefs: row.client_prefs || {}, reloChecks: row.relo_checks || {},
        rentalValue: row.rental_value, ts: row.assessed_at
      };
    case 'listing_corrections':
      return row.corrections;
    default:
      return row;
  }
}

// ═══════════════════════════════════════════════
// HYDRATION: Supabase → localStorage
// ═══════════════════════════════════════════════

async function hydrateFromSupabase() {
  // 1. Fetch static data
  const [zonesRes, listingsRes, nuisanceRes, culdesacRes] = await Promise.all([
    _sb.from('zones').select('*'),
    _sb.from('listings').select('*'),
    _sb.from('nuisance_points').select('*'),
    _sb.from('cul_de_sacs').select('*'),
  ]);

  if (zonesRes.data && zonesRes.data.length > 0) {
    ZONES = zonesRes.data.map(mapZoneFromDB);
  }
  if (listingsRes.data && listingsRes.data.length > 0) {
    LISTINGS = listingsRes.data.map(mapListingFromDB);
  }
  if (nuisanceRes.data && nuisanceRes.data.length > 0) {
    NUISANCE_POINTS = nuisanceRes.data.map(function(r) {
      return { name: r.name, type: r.type, lat: Number(r.lat), lng: Number(r.lng) };
    });
  }
  if (culdesacRes.data && culdesacRes.data.length > 0) {
    CUL_DE_SACS = culdesacRes.data.map(mapCuldesacFromDB);
  }

  // 2. Fetch all user state tables in parallel
  const stateResults = await Promise.all(
    Object.entries(STATE_TABLE_MAP).map(async function([table, config]) {
      const { data } = await _sb.from(table).select('*');
      return { table: table, config: config, data: data || [] };
    })
  );

  // 3. Write each result into localStorage
  for (const result of stateResults) {
    _writeStateToLocalStorage(result.table, result.config, result.data);
  }
}

function _writeStateToLocalStorage(table, config, data) {
  if (config.mode === 'card') {
    for (const row of data) {
      var key = 'artesia-card-' + row.address.replace(/[^a-zA-Z0-9]/g, '_');
      localStorage.setItem(key, JSON.stringify({
        checks: row.checks || {},
        pros: row.pros || [],
        cons: row.cons || [],
        questions: row.questions || [],
        realtorNotes: row.realtor_notes || ''
      }));
    }
  } else if (config.mode === 'simple') {
    if (data.length === 0) return;
    var obj = {};
    for (const row of data) obj[row.address] = row.override_value;
    localStorage.setItem(config.lsKey, JSON.stringify(obj));
  } else {
    if (data.length === 0) return;
    var obj = {};
    for (const row of data) {
      obj[row.address] = mapRowToLocalShape(table, row);
    }
    // For showings: merge with local data to preserve show order when local is newer
    if (table === 'showings') {
      try {
        var local = JSON.parse(localStorage.getItem(config.lsKey) || '{}');
        var localSeqTs = 0, remoteSeqTs = 0;
        Object.keys(local).forEach(function(a) {
          if (local[a].sequenceUpdatedAt > localSeqTs) localSeqTs = local[a].sequenceUpdatedAt;
        });
        Object.keys(obj).forEach(function(a) {
          if (obj[a].sequenceUpdatedAt > remoteSeqTs) remoteSeqTs = obj[a].sequenceUpdatedAt;
        });
        if (localSeqTs > remoteSeqTs) {
          // Local order is newer — keep local showOrder + sequenceUpdatedAt, take everything else from remote
          Object.keys(obj).forEach(function(a) {
            if (local[a]) {
              obj[a].showOrder = local[a].showOrder;
              obj[a].sequenceUpdatedAt = local[a].sequenceUpdatedAt;
            }
          });
        }
      } catch(e) { /* fall through to overwrite */ }
    }
    localStorage.setItem(config.lsKey, JSON.stringify(obj));
  }
}

// Re-fetch a single table and update localStorage
async function hydrateTable(table) {
  var config = STATE_TABLE_MAP[table];
  if (!config) return;
  var { data } = await _sb.from(table).select('*');
  if (!data) return;
  _writeStateToLocalStorage(table, config, data);
}

// ═══════════════════════════════════════════════
// PUSH: localStorage write → Supabase upsert
// ═══════════════════════════════════════════════

async function pushToSupabase(table, row) {
  var { error } = await _sb.from(table).upsert(row, { onConflict: 'address' });
  if (error) console.error('Supabase push error (' + table + '):', error);
}

async function deleteFromSupabase(table, address) {
  var { error } = await _sb.from(table).delete().eq('address', address);
  if (error) console.error('Supabase delete error (' + table + '):', error);
}

// Push a property card (uses address PK)
async function pushCardToSupabase(addr, data) {
  var { error } = await _sb.from('property_cards').upsert({
    address: addr,
    checks: data.checks || {},
    pros: data.pros || [],
    cons: data.cons || [],
    questions: data.questions || [],
    realtor_notes: data.realtorNotes || '',
    updated_at: new Date().toISOString()
  }, { onConflict: 'address' });
  if (error) console.error('Supabase card push error:', error);
}

// ═══════════════════════════════════════════════
// RE-PUSH ALL — backfill Supabase from localStorage
// One-time sync to ensure all local state reaches the DB.
// ═══════════════════════════════════════════════

async function rePushAllState() {
  var errors = 0, pushed = 0;

  // Helper: upsert one row, count errors
  async function _push(table, row) {
    var { error } = await _sb.from(table).upsert(row, { onConflict: 'address' });
    if (error) { errors++; console.error('rePush error (' + table + '):', row.address, error); }
    else pushed++;
  }

  // 1. Showings
  var showings = JSON.parse(localStorage.getItem('artesia-showings') || '{}');
  var showingPromises = Object.keys(showings).map(function(addr) {
    var s = showings[addr];
    return _push('showings', {
      address: addr, notes: s.notes || '', questions: s.questions || '',
      flagged_at: s.flaggedAt, status: s.status || 'requested',
      realtor_notes: s.realtorNotes || '', updated_at: s.updatedAt || null,
      show_order: s.showOrder || 0, sequence_updated_at: s.sequenceUpdatedAt || null,
      strategy_bucket: s.bucket || ''
    });
  });
  await Promise.all(showingPromises);

  // 2. Review data
  var reviewData = JSON.parse(localStorage.getItem('artesia-review-data') || '{}');
  var reviewPromises = Object.keys(reviewData).map(function(addr) {
    var r = reviewData[addr];
    return _push('review_data', {
      address: addr, action: r.action,
      checked_reasons: r.checkedReasons || [],
      other_text: r.otherText || '', custom_notes: r.customNotes || '',
      reviewed_at: r.ts
    });
  });
  await Promise.all(reviewPromises);

  // 3. Review decisions
  var reviewDec = JSON.parse(localStorage.getItem('artesia-review-decisions') || '{}');
  var decPromises = Object.keys(reviewDec).map(function(addr) {
    var d = reviewDec[addr];
    if (d === 'confirmed') return _push('review_decisions', { address: addr, status: 'confirmed', decided_at: Date.now() });
    return _push('review_decisions', { address: addr, status: d.status, reason: d.reason || '', decided_at: d.ts || Date.now() });
  });
  await Promise.all(decPromises);

  // 4. Dismissed
  var dismissed = JSON.parse(localStorage.getItem('artesia-dismissed') || '{}');
  var disPromises = Object.keys(dismissed).map(function(addr) {
    var d = dismissed[addr];
    return _push('dismissed', { address: addr, reason: d.reason || '', dismissed_at: d.ts || Date.now() });
  });
  await Promise.all(disPromises);

  // 5. Pre-showing
  var preShowing = JSON.parse(localStorage.getItem('artesia-pre-showing') || '{}');
  var psPromises = Object.keys(preShowing).map(function(addr) {
    var p = preShowing[addr];
    return _push('pre_showing', {
      address: addr, client_prefs: p.clientPrefs || {},
      relo_checks: p.reloChecks || {}, rental_value: p.rentalValue || null,
      assessed_at: p.ts || null
    });
  });
  await Promise.all(psPromises);

  // 6. Property cards
  var cardKeys = [];
  for (var i = 0; i < localStorage.length; i++) {
    var k = localStorage.key(i);
    if (k && k.startsWith('artesia-card-')) cardKeys.push(k);
  }
  var cardPromises = cardKeys.map(function(key) {
    try {
      var data = JSON.parse(localStorage.getItem(key));
      if (!data || !data.address) return Promise.resolve();
      return _push('property_cards', {
        address: data.address, checks: data.checks || {},
        pros: data.pros || [], cons: data.cons || [],
        questions: data.questions || [], realtor_notes: data.realtorNotes || '',
        updated_at: new Date().toISOString()
      });
    } catch(e) { return Promise.resolve(); }
  });
  await Promise.all(cardPromises);

  console.log('rePushAllState complete: ' + pushed + ' pushed, ' + errors + ' errors');
  return { pushed: pushed, errors: errors };
}

// ═══════════════════════════════════════════════
// REAL-TIME SUBSCRIPTIONS
// ═══════════════════════════════════════════════

function subscribeToChanges(onChangeCallback) {
  var tables = Object.keys(STATE_TABLE_MAP);
  for (var i = 0; i < tables.length; i++) {
    (function(table) {
      _sb.channel('realtime-' + table)
        .on('postgres_changes', { event: '*', schema: 'public', table: table }, function(payload) {
          // Block showings echo entirely during guard window (prevents hydration from overwriting localStorage)
          if (table === 'showings' && typeof _showOrderGuardTs !== 'undefined' && Date.now() - _showOrderGuardTs < 30000) return;
          hydrateTable(table).then(function() {
            if (typeof onChangeCallback === 'function') onChangeCallback(table, payload);
          });
        })
        .subscribe();
    })(tables[i]);
  }
}

// ═══════════════════════════════════════════════
// AUTH — Email + Password (with magic link fallback)
// ═══════════════════════════════════════════════

async function checkAuth() {
  var { data: { session } } = await _sb.auth.getSession();
  if (session) return true;

  // Check for magic link callback (hash fragment from email link)
  if (window.location.hash && window.location.hash.includes('access_token')) {
    // Supabase SDK auto-handles this; wait for session
    await new Promise(function(resolve) { setTimeout(resolve, 1000); });
    var result = await _sb.auth.getSession();
    if (result.data.session) {
      // Clean up URL hash
      history.replaceState(null, '', window.location.pathname + window.location.search);
      return true;
    }
  }

  showLoginOverlay();
  return false;
}

function showLoginOverlay() {
  var overlay = document.createElement('div');
  overlay.id = 'auth-overlay';
  overlay.style.cssText = 'position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;';
  overlay.innerHTML =
    '<div style="background:#1e293b;border:1px solid #334155;border-radius:12px;padding:32px;max-width:380px;width:90%;text-align:center;">' +
      '<h2 style="color:#f1f5f9;margin-bottom:8px;font-size:20px;">Artesia Dashboard</h2>' +
      '<p style="color:#94a3b8;font-size:13px;margin-bottom:20px;">Sign in with your email and password.</p>' +
      '<input id="auth-email" type="email" placeholder="you@example.com" style="width:100%;padding:10px 14px;border:1px solid #475569;border-radius:8px;background:#0f172a;color:#f1f5f9;font-size:14px;margin-bottom:10px;outline:none;" />' +
      '<input id="auth-password" type="password" placeholder="Password" style="width:100%;padding:10px 14px;border:1px solid #475569;border-radius:8px;background:#0f172a;color:#f1f5f9;font-size:14px;margin-bottom:12px;outline:none;" />' +
      '<button id="auth-submit" onclick="_signInWithPassword()" style="width:100%;padding:10px;background:#2563eb;color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;">Sign In</button>' +
      '<p id="auth-msg" style="color:#94a3b8;font-size:12px;margin-top:12px;min-height:18px;"></p>' +
      '<p style="margin-top:16px;"><span onclick="_showMagicLinkMode()" style="color:#60a5fa;font-size:12px;cursor:pointer;text-decoration:underline;">Or sign in with a magic link instead</span></p>' +
    '</div>';
  document.body.appendChild(overlay);
  setTimeout(function() {
    var el = document.getElementById('auth-email');
    if (el) el.focus();
  }, 100);
  // Allow Enter key to submit
  document.getElementById('auth-password').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') _signInWithPassword();
  });
}

async function _signInWithPassword() {
  var email = document.getElementById('auth-email').value.trim();
  var password = document.getElementById('auth-password').value;
  var msg = document.getElementById('auth-msg');
  var btn = document.getElementById('auth-submit');
  if (!email || !password) { msg.style.color = '#f87171'; msg.textContent = 'Please enter email and password.'; return; }
  btn.disabled = true;
  btn.textContent = 'Signing in...';
  var { error } = await _sb.auth.signInWithPassword({ email: email, password: password });
  if (error) {
    msg.style.color = '#f87171';
    msg.textContent = 'Error: ' + error.message;
    btn.disabled = false;
    btn.textContent = 'Sign In';
  } else {
    var ov = document.getElementById('auth-overlay');
    if (ov) ov.remove();
    // Reload to trigger full init
    window.location.reload();
  }
}

function _showMagicLinkMode() {
  var container = document.querySelector('#auth-overlay > div');
  if (!container) return;
  container.innerHTML =
    '<h2 style="color:#f1f5f9;margin-bottom:8px;font-size:20px;">Artesia Dashboard</h2>' +
    '<p style="color:#94a3b8;font-size:13px;margin-bottom:20px;">Enter your email to receive a login link.</p>' +
    '<input id="auth-email" type="email" placeholder="you@example.com" style="width:100%;padding:10px 14px;border:1px solid #475569;border-radius:8px;background:#0f172a;color:#f1f5f9;font-size:14px;margin-bottom:12px;outline:none;" />' +
    '<button id="auth-submit" onclick="_sendMagicLink()" style="width:100%;padding:10px;background:#2563eb;color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;">Send Login Link</button>' +
    '<p id="auth-msg" style="color:#94a3b8;font-size:12px;margin-top:12px;min-height:18px;"></p>' +
    '<p style="margin-top:16px;"><span onclick="showLoginOverlay();document.getElementById(\'auth-overlay\').previousSibling&&document.getElementById(\'auth-overlay\').previousSibling.remove();" style="color:#60a5fa;font-size:12px;cursor:pointer;text-decoration:underline;">Back to password sign in</span></p>';
  document.getElementById('auth-email').focus();
}

async function _sendMagicLink() {
  var email = document.getElementById('auth-email').value.trim();
  var msg = document.getElementById('auth-msg');
  var btn = document.getElementById('auth-submit');
  if (!email) { msg.textContent = 'Please enter your email.'; return; }
  btn.disabled = true;
  btn.textContent = 'Sending...';
  var { error } = await _sb.auth.signInWithOtp({
    email: email,
    options: { emailRedirectTo: window.location.origin + window.location.pathname }
  });
  if (error) {
    msg.style.color = '#f87171';
    msg.textContent = 'Error: ' + error.message;
    btn.disabled = false;
    btn.textContent = 'Send Login Link';
  } else {
    msg.style.color = '#4ade80';
    msg.textContent = 'Check your email for a login link!';
  }
}

// ═══════════════════════════════════════════════
// LAST REFRESH TIMESTAMP
// ═══════════════════════════════════════════════

async function fetchLastRefreshTime() {
  var { data, error } = await _sb
    .from('refresh_log')
    .select('completed_at')
    .eq('status', 'success')
    .order('completed_at', { ascending: false })
    .limit(1)
    .single();
  if (error || !data) return null;
  return data.completed_at;
}

function displayRefreshTime(ts) {
  var el = document.getElementById('update-time');
  if (!el) return;
  if (ts) {
    el.textContent = new Date(ts).toLocaleString('en-US', {
      timeZone: 'America/Denver',
      month: 'short', day: 'numeric', year: 'numeric',
      hour: 'numeric', minute: '2-digit', timeZoneName: 'short'
    });
  } else {
    el.textContent = new Date().toLocaleString('en-US', {
      timeZone: 'America/Denver',
      month: 'short', day: 'numeric', year: 'numeric',
      hour: 'numeric', minute: '2-digit', timeZoneName: 'short'
    }) + ' (manual data)';
  }
}

function subscribeToRefreshLog() {
  _sb.channel('realtime-refresh_log')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'refresh_log' }, function(payload) {
      if (payload.new && payload.new.status === 'success' && payload.new.completed_at) {
        displayRefreshTime(payload.new.completed_at);
        // Re-hydrate listings and changes since they changed
        Promise.all([
          hydrateFromSupabase(),
          fetchListingChanges()
        ]).then(function() {
          if (typeof applyAllStoredCorrections === 'function') applyAllStoredCorrections();
          if (typeof scoreAllListings === 'function') scoreAllListings();
          if (typeof renderListings === 'function') renderListings();
          if (typeof renderNewListingsPanel === 'function') renderNewListingsPanel();
          if (typeof renderStatusChangesPanel === 'function') renderStatusChangesPanel();
        });
      }
    })
    .subscribe();
}

// ═══════════════════════════════════════════════
// LISTING CHANGES — track new & changed listings per refresh
// ═══════════════════════════════════════════════

var LISTING_CHANGES = {};           // address -> array of change objects
var LISTING_CHANGES_REFRESH_ID = null;

async function fetchListingChanges() {
  // Get the latest successful refresh ID
  var { data: latestRefresh, error: refErr } = await _sb
    .from('refresh_log')
    .select('id')
    .eq('status', 'success')
    .order('completed_at', { ascending: false })
    .limit(1)
    .single();

  if (refErr || !latestRefresh) {
    LISTING_CHANGES = {};
    LISTING_CHANGES_REFRESH_ID = null;
    return;
  }

  LISTING_CHANGES_REFRESH_ID = latestRefresh.id;

  // Fetch all changes for that refresh
  var { data: changes, error: chErr } = await _sb
    .from('listing_changes')
    .select('*')
    .eq('refresh_id', latestRefresh.id);

  if (chErr || !changes) {
    LISTING_CHANGES = {};
    return;
  }

  // Group by address
  LISTING_CHANGES = {};
  changes.forEach(function(c) {
    if (!LISTING_CHANGES[c.address]) LISTING_CHANGES[c.address] = [];
    LISTING_CHANGES[c.address].push({
      type: c.change_type,
      field: c.field_name,
      oldVal: c.old_value,
      newVal: c.new_value
    });
  });
}

function isNewListing(addr) {
  var changes = LISTING_CHANGES[addr];
  return changes && changes.some(function(c) { return c.type === 'new_listing'; });
}

function getListingChanges(addr) {
  return LISTING_CHANGES[addr] || [];
}

function hasStatusChange(addr) {
  var changes = LISTING_CHANGES[addr];
  return changes && changes.some(function(c) {
    return c.type === 'status_change' || c.type === 'price_change' ||
           c.type === 'relisted' || c.type === 'delisted' || c.type === 'data_change';
  });
}

function getNewListingAddresses() {
  var result = [];
  for (var addr in LISTING_CHANGES) {
    if (isNewListing(addr)) result.push(addr);
  }
  return result;
}

function getChangedListingAddresses() {
  var result = [];
  for (var addr in LISTING_CHANGES) {
    if (hasStatusChange(addr)) result.push(addr);
  }
  return result;
}

// ═══════════════════════════════════════════════
// RENT ESTIMATES
// ═══════════════════════════════════════════════

var _rentEstimateCache = {};

async function fetchRentEstimate(addr, bedrooms, bathrooms, sqft, force) {
  // Check in-memory cache first (skip if force refresh)
  if (!force && _rentEstimateCache[addr]) return _rentEstimateCache[addr];

  try {
    var response = await fetch(SUPABASE_URL + '/functions/v1/estimate-rent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + SUPABASE_KEY,
      },
      body: JSON.stringify({
        address: addr,
        bedrooms: bedrooms || 0,
        bathrooms: bathrooms || 0,
        sqft: sqft || 0,
        force: !!force,
      }),
    });

    if (!response.ok) {
      var errBody = await response.json().catch(function() { return {}; });
      console.error('Rent estimate ' + response.status + ' for ' + addr + ':', errBody.error || errBody);
      return null;
    }
    var data = await response.json();
    if (data.success && data.estimate) {
      _rentEstimateCache[addr] = data.estimate;
      return data.estimate;
    }
    return null;
  } catch (e) {
    console.error('Rent estimate error for ' + addr + ':', e);
    return null;
  }
}

async function fetchCachedRentEstimates() {
  try {
    var { data, error } = await _sb
      .from('rent_estimates')
      .select('*');
    if (error || !data) return;
    data.forEach(function(r) {
      _rentEstimateCache[r.address] = r;
    });
  } catch (e) {
    console.error('Failed to load cached rent estimates:', e);
  }
}

// ═══════════════════════════════════════════════
// WALK PATHS CACHE (Supabase — single row, forever)
// ═══════════════════════════════════════════════

var _walkPathsCached = null;

async function loadWalkPathsFromDB() {
  try {
    var { data, error } = await _sb.from('walk_paths_cache').select('data').eq('id', 1).single();
    if (!error && data && data.data && data.data.length > 0) {
      _walkPathsCached = data.data;
      return data.data;
    }
  } catch (e) {}
  return null;
}

async function saveWalkPathsToDB(elements) {
  try {
    await _sb.from('walk_paths_cache').upsert({ id: 1, data: elements, fetched_at: new Date().toISOString() });
  } catch (e) { console.warn('Could not save walk paths to DB:', e); }
}

// ═══════════════════════════════════════════════
// LOADING OVERLAY
// ═══════════════════════════════════════════════

function showLoadingOverlay() {
  var overlay = document.createElement('div');
  overlay.id = 'loading-overlay';
  overlay.style.cssText = 'position:fixed;inset:0;z-index:99998;background:rgba(0,0,0,0.7);display:flex;align-items:center;justify-content:center;';
  overlay.innerHTML = '<div style="color:#94a3b8;font-size:16px;">Loading data...</div>';
  document.body.appendChild(overlay);
}

function hideLoadingOverlay() {
  var el = document.getElementById('loading-overlay');
  if (el) el.remove();
}

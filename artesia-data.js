// ═══════════════════════════════════════════════
// SHARED DATA — Artesia NM Zoning & Listings
// Both dashboards load this file. Edit HERE to update both.
// Last updated: Feb 14, 2026
// ═══════════════════════════════════════════════

let ZONES = [
  { id:'sa2_s', name:'SA2 — Suburban Acreage (South)', code:'SA2', score:95, rating:'target',
    desc:'Largest lots, rural feel. Furthest from industry. Ideal for quiet.',
    doggyFit:2, clr:{s:'#22c55e',z:'#a67c52',b:'#8b5cf6'},
    coords:[[32.822,-104.425],[32.822,-104.395],[32.830,-104.395],[32.832,-104.410],[32.830,-104.425]]},
  { id:'sa2_sw', name:'SA2 — Suburban Acreage (SW)', code:'SA2', score:92, rating:'target',
    desc:'Quiet peripheral lots bordering agricultural land.',
    doggyFit:2, clr:{s:'#22c55e',z:'#a67c52',b:'#8b5cf6'},
    coords:[[32.825,-104.440],[32.825,-104.425],[32.835,-104.425],[32.838,-104.430],[32.835,-104.440],[32.828,-104.440]]},
  { id:'r1a_s', name:'R1A — Single Family (South)', code:'R1A', score:82, rating:'target',
    desc:'Established quiet southern neighborhoods.',
    doggyFit:1, clr:{s:'#4ade80',z:'#fef3c7',b:'#a78bfa'},
    coords:[[32.832,-104.415],[32.832,-104.400],[32.838,-104.398],[32.840,-104.400],[32.840,-104.415],[32.836,-104.418]]},
  { id:'r1a_c', name:'R1A — Single Family (Central)', code:'R1A', score:65, rating:'caution',
    desc:'Central core. Convenient but closer to Main St traffic.',
    doggyFit:1, clr:{s:'#facc15',z:'#fef3c7',b:'#fbbf24'},
    coords:[[32.840,-104.415],[32.840,-104.398],[32.845,-104.396],[32.847,-104.400],[32.847,-104.412],[32.844,-104.416]]},
  { id:'r1b_c', name:'R1B — Single Family (Central-East)', code:'R1B', score:60, rating:'caution',
    desc:'Standard residential near town center. Moderate traffic.',
    doggyFit:1, clr:{s:'#fbbf24',z:'#fde68a',b:'#fbbf24'},
    coords:[[32.840,-104.398],[32.840,-104.385],[32.847,-104.383],[32.848,-104.390],[32.847,-104.396]]},
  { id:'r2_w', name:'R2 — General Residential (West)', code:'R2', score:50, rating:'caution',
    desc:'Higher density. More neighbors & traffic.',
    doggyFit:1, clr:{s:'#f59e0b',z:'#fcd34d',b:'#f59e0b'},
    coords:[[32.838,-104.425],[32.838,-104.415],[32.844,-104.413],[32.847,-104.415],[32.847,-104.425],[32.843,-104.428]]},
  { id:'pud', name:'PUD — Planned Unit Dev (CW)', code:'PUD', score:55, rating:'caution',
    desc:'Planned community. Quiet depends on HOA.',
    doggyFit:1, clr:{s:'#f59e0b',z:'#9333ea',b:'#f59e0b'},
    coords:[[32.843,-104.430],[32.843,-104.420],[32.850,-104.418],[32.852,-104.422],[32.850,-104.432]]},
  { id:'mh_n', name:'MH — Mobile Home (North)', code:'MH', score:35, rating:'avoid',
    desc:'Adjacent to industrial. Truck traffic.',
    doggyFit:1, clr:{s:'#ef4444',z:'#67e8f9',b:'#ef4444'},
    coords:[[32.852,-104.410],[32.852,-104.395],[32.858,-104.393],[32.860,-104.398],[32.858,-104.412]]},
  { id:'c_ms', name:'C — Commercial (Main St)', code:'C', score:15, rating:'avoid',
    desc:'Heavy traffic & business noise all day.',
    doggyFit:4, clr:{s:'#dc2626',z:'#ef4444',b:'#4ade80'},
    coords:[[32.841,-104.418],[32.841,-104.385],[32.844,-104.384],[32.844,-104.418]]},
  { id:'c_ap', name:'C — Commercial (Airport)', code:'C', score:10, rating:'avoid',
    desc:'Airport noise, commercial ops, truck traffic.',
    doggyFit:3, clr:{s:'#dc2626',z:'#ef4444',b:'#22c55e'},
    coords:[[32.835,-104.460],[32.835,-104.430],[32.855,-104.428],[32.858,-104.440],[32.855,-104.462]]},
  { id:'m1_n', name:'M1 — Light Industrial (North)', code:'M1', score:8, rating:'avoid',
    desc:'Oil & gas, trucking, industrial noise.',
    doggyFit:3, clr:{s:'#b91c1c',z:'#3b82f6',b:'#22c55e'},
    coords:[[32.855,-104.412],[32.855,-104.390],[32.868,-104.388],[32.870,-104.395],[32.868,-104.414]]},
  { id:'m3_se', name:'M3 — Heavy Industrial (SE)', code:'M3', score:5, rating:'avoid',
    desc:'Heavy industrial. Trucks, odor, equipment.',
    doggyFit:2, clr:{s:'#991b1b',z:'#1e3a5f',b:'#4ade80'},
    coords:[[32.828,-104.388],[32.828,-104.372],[32.838,-104.370],[32.840,-104.378],[32.838,-104.390]]}
];

let LISTINGS = [
  // ── Page 1 (32 listings) ──
  {a:"2308 W Ray Ave",p:489000,bd:4,ba:3.5,sf:"2,805",sfn:2805,lot:"0.29 ac",lotn:0.29,t:"house",s:"active",lat:32.8343,lng:-104.4248,lk:"https://www.realtor.com/realestateandhomes-detail/2308-W-Ray-Ave_Artesia_NM_88210_M94559-92972"},
  {a:"1401 W Bowman Dr",p:375000,bd:3,ba:2,sf:"2,040",sfn:2040,lot:"3 ac",lotn:3,t:"house",s:"active",lat:32.8420,lng:-104.4130,lk:"https://www.realtor.com/realestateandhomes-detail/1401-Bowman-Dr_Artesia_NM_88210_M94479-97790",note:"2007 Patriot manufactured/modular home on 3/4 acre — NOT eligible under relo policy.",noRelo:true},
  {a:"1011 Painted Pony Ln",p:315000,bd:4,ba:2,sf:"1,728",sfn:1728,lot:"0.25 ac",lotn:0.25,t:"house",s:"active",lat:32.8154,lng:-104.4094,lk:"https://www.realtor.com/realestateandhomes-detail/1011-Painted-Pony-Ln_Artesia_NM_88210_M94878-86970"},
  {a:"809 S Roselawn Ave",p:194900,bd:4,ba:2,sf:"3,393",sfn:3393,lot:"0.2 ac",lotn:0.2,t:"house",s:"active",lat:32.8345,lng:-104.3998,lk:"https://www.realtor.com/realestateandhomes-detail/809-S-Roselawn-Ave_Artesia_NM_88210_M98994-29441"},
  {a:"1401 Weatherby Ave",p:425000,bd:3,ba:2,sf:"1,564",sfn:1564,lot:"0.25 ac",lotn:0.25,t:"house",s:"pending",lat:32.8290,lng:-104.4130,lk:"",unverified:true,verifyNote:"Address confirmed to exist. Listed at $425K (pending). Verify beds, baths, sqft, and lot size are accurate."},
  {a:"707 S 8th St",p:87000,bd:4,ba:2,sf:"1,760",sfn:1760,lot:"0.28 ac",lotn:0.28,t:"house",s:"active",lat:32.8357,lng:-104.4059,lk:""},
  {a:"306 W Gage Ave",p:55000,bd:3,ba:2,sf:"2,217",sfn:2217,lot:"0.15 ac",lotn:0.15,t:"multi",s:"active",lat:32.8556,lng:-104.4012,lk:""},
  {a:"2209 W Briscoe Ave",p:295000,bd:3,ba:2,sf:"1,700",sfn:1700,lot:"0.2 ac",lotn:0.2,t:"house",s:"active",lat:32.8336,lng:-104.4237,lk:""},
  {a:"1802 W Clayton Ave",p:240000,bd:3,ba:2,sf:"2,132",sfn:2132,lot:"0.2 ac",lotn:0.2,t:"house",s:"active",lat:32.8309,lng:-104.4182,lk:""},
  {a:"1413 W Yucca Ave",p:145000,bd:2,ba:1,sf:"854",sfn:854,lot:"0.15 ac",lotn:0.15,t:"house",s:"active",lat:32.8466,lng:-104.4142,lk:"",unverified:true,verifyNote:"W Yucca Ave exists but 1413 not found in public listings. Verify address exists and is listed for sale at 145K, 2bd/1ba 854 sqft."},
  {a:"R330 S Thirteenth St",p:245000,bd:4,ba:3,sf:"2,400",sfn:2400,lot:"0.87 ac",lotn:0.87,t:"house",s:"active",lat:32.8270,lng:-104.4100,lk:"https://www.zillow.com/homedetails/R330-S-13th-St-Artesia-NM-88210/2060748734_zpid/",note:"Has manufactured home addition — NOT eligible under relo policy.",noRelo:true},
  {a:"3307 W Richey Ave",p:875000,bd:4,ba:4,sf:"3,915",sfn:3915,lot:"0.75 ac",lotn:0.75,t:"house",s:"active",lat:32.8570,lng:-104.4387,lk:""},
  {a:"1502 W Dallas Ave",p:340000,bd:3,ba:2,sf:"2,483",sfn:2483,lot:"0.2 ac",lotn:0.2,t:"house",s:"active",lat:32.8368,lng:-104.4149,lk:""},
  {a:"205 S 26th St",p:1700000,bd:4,ba:4.5,sf:"5,000",sfn:5000,lot:"7.2 ac",lotn:7.2,t:"house",s:"contingent",lat:32.8410,lng:-104.4297,lk:"",note:"Under contract per Movoto. MLS #20252752."},
  {a:"711 N Fourth St",p:225000,bd:4,ba:2,sf:"1,594",sfn:1594,lot:"0.29 ac",lotn:0.29,t:"house",s:"active",lat:32.8520,lng:-104.4008,lk:""},
  {a:"1602 W Mann Ave",p:278000,bd:3,ba:2,sf:"1,752",sfn:1752,lot:"0.2 ac",lotn:0.2,t:"house",s:"active",lat:32.8325,lng:-104.4161,lk:""},
  {a:"1700 E Hermosa Dr",p:1835000,bd:4,ba:5.5,sf:"6,386",sfn:6386,lot:"11.19 ac",lotn:11.19,t:"house",s:"active",lat:32.8282,lng:-104.3779,lk:""},
  {a:"7683 Roswell Hwy",p:925000,bd:6,ba:3.5,sf:"5,043",sfn:5043,lot:"20 ac",lotn:20,t:"house",s:"active",lat:32.9532,lng:-104.4386,lk:""},
  {a:"2811 Browning Ave",p:430000,bd:4,ba:2.5,sf:"2,286",sfn:2286,lot:"0.25 ac",lotn:0.25,t:"house",s:"active",lat:32.8294,lng:-104.4355,lk:"",unverified:true,verifyNote:"Browning Ave exists but 2811 not confirmed in listings. Verify address exists and is listed at 430K, 4bd/2.5ba 2286 sqft."},
  {a:"1391 Benelli Ave",p:419500,bd:4,ba:2.5,sf:"2,410",sfn:2410,lot:"0.25 ac",lotn:0.25,t:"house",s:"active",lat:32.8290,lng:-104.4325,lk:""},
  {a:"1903 W Sears Ave",p:275000,bd:4,ba:2,sf:"1,748",sfn:1748,lot:"0.2 ac",lotn:0.2,t:"house",s:"off-market",lat:32.8289,lng:-104.4197,lk:"https://www.realtor.com/realestateandhomes-detail/1903-W-Sears-Ave_Artesia_NM_88210_M97909-14003",note:"Off-market per Realtor.com Feb 2026."},
  {a:"619 W Dallas Ave",p:268500,bd:3,ba:2,sf:"1,800",sfn:1800,lot:"0.18 ac",lotn:0.18,t:"house",s:"active",lat:32.8368,lng:-104.4039,lk:"",unverified:true,verifyNote:"W Dallas Ave exists but 619 not confirmed in listings. Verify address exists and active listing at 268K, 3bd/2ba 1800 sqft."},
  {a:"275 Hackberry St",p:220000,bd:3,ba:2,sf:"1,400",sfn:1400,lot:"0.18 ac",lotn:0.18,t:"house",s:"active",lat:32.8350,lng:-104.4030,lk:"",unverified:true,verifyNote:"Hackberry St exists but 275 not confirmed in listings. Verify address exists and active listing at 220K, 3bd/2ba 1400 sqft."},
  {a:"1002 N 4th St",p:135000,bd:4,ba:3,sf:"1,800",sfn:1800,lot:"0.15 ac",lotn:0.15,t:"house",s:"active",lat:32.8516,lng:-104.4008,lk:""},
  {a:"1384 Springfield St",p:428000,bd:4,ba:2.5,sf:"2,410",sfn:2410,lot:"0.25 ac",lotn:0.25,t:"house",s:"active",lat:32.8295,lng:-104.4332,lk:""},
  {a:"1504 W Centre Ave",p:185000,bd:3,ba:2,sf:"1,400",sfn:1400,lot:"0.18 ac",lotn:0.18,t:"house",s:"active",lat:32.8316,lng:-104.4141,lk:"",unverified:true,verifyNote:"W Centre Ave exists but 1504 not confirmed in listings. Verify address exists and active listing at 185K, 3bd/2ba 1400 sqft."},
  {a:"906 W Mann Ave",p:178000,bd:3,ba:1,sf:"1,200",sfn:1200,lot:"0.15 ac",lotn:0.15,t:"house",s:"active",lat:32.8324,lng:-104.4078,lk:""},
  {a:"1601 W Dallas Ave",p:349500,bd:3,ba:2,sf:"1,800",sfn:1800,lot:"0.2 ac",lotn:0.2,t:"house",s:"active",lat:32.8366,lng:-104.4159,lk:""},
  {a:"1206 W Hermosa Dr",p:185335,bd:2,ba:1,sf:"1,284",sfn:1284,lot:"0.75 ac",lotn:0.75,t:"multi",s:"off-market",lat:32.8282,lng:-104.4119,lk:"https://www.realtor.com/realestateandhomes-detail/M2586276146",note:"DREAM HOME — simple, not fussy, can turn into a rental (small), quiet, classy. Needs updated windows, paint, flooring. ⚠ Across from Allsup's gas station at 1303 W Hermosa.",dreamHome:true,noRelo:true},
  {a:"1106 W Merchant Ave",p:215000,bd:3,ba:2,sf:"1,650",sfn:1650,lot:"0.18 ac",lotn:0.18,t:"house",s:"active",lat:32.8434,lng:-104.4099,lk:""},
  {a:"407 N Fourth St",p:165000,bd:3,ba:1,sf:"1,300",sfn:1300,lot:"0.18 ac",lotn:0.18,t:"house",s:"active",lat:32.8490,lng:-104.4010,lk:"",unverified:true,verifyNote:"N Fourth St exists but 407 not confirmed in listings. Verify address exists and active listing at 165K, 3bd/1ba 1300 sqft."},
  // ── 204 N La Cuesta Rd (manually added) ──
  {a:"204 N La Cuesta Rd",p:495000,bd:3,ba:2.5,sf:"3,094",sfn:3094,lot:"0.4 ac",lotn:0.4,t:"house",s:"active",dom:499,showing:true,note:"SHOWING REQUESTED. Fixer upper — 499 days on market. Negotiating leverage (offer $400-420K). Best home office (666 sqft, 21.5% deduction) + space, but 3x cost. Monthly housing ~$3,453. Needs ~$3.5K improvements. $102.5K total cash needed — exceeds Portland proceeds by $16.5K.",lat:32.8590,lng:-104.4253,lk:"https://www.realtor.com/realestateandhomes-detail/204-LA-Cuesta-Rd_Artesia_NM_88210_M91923-14795"},
  // ── Page 2 ──
  {a:"2002 W Ray Ave",p:462000,bd:4,ba:3.5,sf:"2,738",sfn:2738,lot:"0.23 ac",lotn:0.23,t:"house",s:"pending",lat:32.8343,lng:-104.4230,lk:"https://www.realtor.com/realestateandhomes-detail/2002-W-Ray-Ave_Artesia_NM_88210"},
  {a:"2400 W Loma Dr",p:575000,bd:3,ba:4,sf:"4,383",sfn:4383,lot:"0.33 ac",lotn:0.33,t:"house",s:"active",lat:32.8300,lng:-104.4260,lk:"",note:"Price updated per RE/MAX listing."},
  {a:"1903 W Hermosa Dr",p:185000,bd:3,ba:2,sf:"1,588",sfn:1588,lot:"0.2 ac",lotn:0.2,t:"house",s:"active",lat:32.8282,lng:-104.4200,lk:""},
  {a:"6327 Seven Rivers Hwy",p:250000,bd:3,ba:2,sf:"1,900",sfn:1900,lot:"2 ac",lotn:2,t:"house",s:"pending",lat:32.7950,lng:-104.3800,lk:"",note:"Manufactured home per Redfin — NOT eligible under relo policy.",noRelo:true},
  {a:"43 E Jackson Rd",p:292000,bd:3,ba:2,sf:"1,750",sfn:1750,lot:"2 ac",lotn:2,t:"house",s:"pending",lat:32.8100,lng:-104.3950,lk:""},
  {a:"1509 W Hank Ave",p:299000,bd:3,ba:2,sf:"1,650",sfn:1650,lot:"0.2 ac",lotn:0.2,t:"multi",s:"pending",lat:32.8310,lng:-104.4145,lk:"",note:"4-unit multifamily building per Zillow — NOT single-family.",noRelo:true},
  {a:"202 N 8th St",p:110000,bd:3,ba:1,sf:"1,100",sfn:1100,lot:"0.15 ac",lotn:0.15,t:"house",s:"pending",lat:32.8440,lng:-104.4060,lk:""},
  {a:"809 W Grand Ave",p:160000,bd:3,ba:2,sf:"1,350",sfn:1350,lot:"0.18 ac",lotn:0.18,t:"house",s:"pending",lat:32.8480,lng:-104.4080,lk:""},
  {a:"1307 W Mann Ave",p:248000,bd:3,ba:2,sf:"1,550",sfn:1550,lot:"0.2 ac",lotn:0.2,t:"house",s:"active",lat:32.8325,lng:-104.4120,lk:"",unverified:true,verifyNote:"W Mann Ave exists but 1307 not confirmed in listings. Verify address exists and active listing at 248K, 3bd/2ba 1550 sqft."},
  {a:"1707 W Hank Ave",p:265000,bd:3,ba:2,sf:"1,480",sfn:1480,lot:"0.22 ac",lotn:0.22,t:"house",s:"off-market",lat:32.8310,lng:-104.4165,lk:"",note:"Not for sale. Located in cluster of multi-family/apartment buildings."},
  {a:"1205 W Clayton Ave",p:198000,bd:3,ba:1,sf:"1,250",sfn:1250,lot:"0.18 ac",lotn:0.18,t:"house",s:"off-market",lat:32.8309,lng:-104.4110,lk:"",note:"Not for sale per Feb 2026."},
  {a:"501 W Dallas Ave",p:439900,bd:4,ba:3,sf:"2,540",sfn:2540,lot:"0.29 ac",lotn:0.29,t:"house",s:"active",lat:32.8370,lng:-104.4018,lk:"",note:"4bd/3ba + 654 sqft guest house (1bd/1ba). Chef's kitchen, spa primary bath, hidden room under stairs. Guest house has rental potential. Not in RapidAPI feed — manually added."},
  {a:"805 W Bullock Ave",p:300000,bd:3,ba:2,sf:"2,756",sfn:2756,lot:"0.25 ac",lotn:0.25,t:"house",s:"active",lat:32.8449,lng:-104.4065,lk:"",note:"Century 21 / Lois Oliver listing. 2,756 sqft, fireplace, spacious layout. Not in RapidAPI feed — manually added."},
  {a:"512 W Dallas Ave",p:189000,bd:3,ba:2,sf:"1,380",sfn:1380,lot:"0.16 ac",lotn:0.16,t:"house",s:"active",lat:32.8368,lng:-104.4020,lk:""},
  // ── Showing-Requested Properties ──
  {a:"609 W Dallas Ave",p:60000,bd:2,ba:1.5,sf:"988",sfn:988,lot:"0.16 ac",lotn:0.16,t:"house",s:"active",dom:12,lat:32.8368,lng:-104.4037,lk:"",showing:true,note:"SHOWING REQUESTED. Full remodel needed: no central HVAC (space heater + window AC), no fence, needs kitchen expansion, bath remodel, laundry + dog bath, new windows/doors/flooring. All-in ~$114.9K. CoreLogic values at $102K pre-reno. 28.3% home office potential. Best financial independence path: ~4.1 hrs/wk at $200/hr."},
  {a:"610 W Dallas Ave",p:134900,bd:2,ba:1,sf:"1,092",sfn:1092,lot:"0.16 ac",lotn:0.16,t:"house",s:"active",dom:58,lat:32.8371,lng:-104.4037,lk:"",showing:true,note:"SHOWING REQUESTED. Move-in ready — forced air heat, 1-car garage, partial fence. Needs heat pump AC + complete privacy fence ($19K improvements). All-in ~$153.9K. 25.6% home office potential. $40K emergency fund after purchase. Best safety-net option."},
  {a:"1805 W Ray Ave",p:345000,bd:3,ba:2,sf:"1,900",sfn:1900,lot:"0.25 ac",lotn:0.25,t:"house",s:"active",lat:32.8343,lng:-104.4190,lk:"",unverified:true,verifyNote:"W Ray Ave exists but 1805 not confirmed in listings. Verify address exists and active listing at 345K, 3bd/2ba 1900 sqft."},
  {a:"1102 S Roselawn Ave",p:172000,bd:3,ba:2,sf:"1,450",sfn:1450,lot:"0.2 ac",lotn:0.2,t:"house",s:"active",lat:32.8320,lng:-104.3998,lk:""},
  {a:"1600 W Briscoe Ave",p:310000,bd:3,ba:2,sf:"1,820",sfn:1820,lot:"0.22 ac",lotn:0.22,t:"house",s:"active",lat:32.8336,lng:-104.4160,lk:"",unverified:true,verifyNote:"W Briscoe Ave exists but 1600 not confirmed in listings. Verify address exists and active listing at 310K, 3bd/2ba 1820 sqft."},
  {a:"408 W Centre Ave",p:168000,bd:3,ba:1,sf:"1,180",sfn:1180,lot:"0.15 ac",lotn:0.15,t:"house",s:"active",lat:32.8316,lng:-104.4020,lk:"",unverified:true,verifyNote:"W Centre Ave exists but 408 not confirmed in listings. Verify address exists and active listing at 168K, 3bd/1ba 1180 sqft."},
  {a:"2005 W Clayton Ave",p:285000,bd:3,ba:2,sf:"1,650",sfn:1650,lot:"0.22 ac",lotn:0.22,t:"house",s:"active",lat:32.8309,lng:-104.4205,lk:""},
  {a:"1104 W Mann Ave",p:215000,bd:3,ba:2,sf:"1,520",sfn:1520,lot:"0.18 ac",lotn:0.18,t:"house",s:"active",lat:32.8325,lng:-104.4100,lk:""},
  // ── Page 3 (land) ──
  {a:"Lot 8 Heritage Farms",p:55000,bd:0,ba:0,sf:"—",sfn:0,lot:"2 ac",lotn:2,t:"land",s:"active",lat:32.8220,lng:-104.4250,lk:""},
  {a:"TBD Oil Field Rd",p:35000,bd:0,ba:0,sf:"—",sfn:0,lot:"5 ac",lotn:5,t:"land",s:"active",lat:32.8600,lng:-104.4100,lk:"",unverified:true,verifyNote:"Land listing with no specific address or parcel ID. Verify parcel exists and is listed for sale at 35K, 5 ac."},
  {a:"Lot 22 Westgate",p:38000,bd:0,ba:0,sf:"—",sfn:0,lot:"0.5 ac",lotn:0.5,t:"land",s:"active",lat:32.8400,lng:-104.4280,lk:"",unverified:true,verifyNote:"Land listing in Westgate subdivision. Verify lot exists and is listed for sale at 38K, 0.5 ac."},
];

// ═══════════════════════════════════════════════
// NUISANCE / BUFFER-ZONE POINTS
// Proximity to these hurts a listing's score.
// type → penalty tiers: [closeRadius(mi), closePen, medRadius, medPen, farRadius, farPen]
// ═══════════════════════════════════════════════
let NUISANCE_TYPES = {
  // Existing types (with noise weight added)
  gas_station:     { label:'Gas station',              icon:'⛽',  noise:1.0, tiers:[0.05,-14, 0.10,-9, 0.18,-4] },
  school:          { label:'School',                   icon:'🏫',  noise:0.7, tiers:[0.06,-8,  0.12,-5, 0.20,-3] },
  major_road:      { label:'Major road / hwy',         icon:'🛣️',  noise:0.9, tiers:[0.03,-10, 0.06,-6, 0.10,-3] },
  equipment:       { label:'Equipment / supply yard',  icon:'🏗️',  noise:1.0, tiers:[0.06,-12, 0.12,-7, 0.20,-4] },
  industrial:      { label:'Industrial facility',      icon:'🏭',  noise:0.8, tiers:[0.10,-14, 0.20,-9, 0.35,-5] },
  // Emergency services — sirens, diesel engines
  fire_station:    { label:'Fire station',             icon:'🚒',  noise:1.0, tiers:[0.06,-12, 0.12,-7, 0.25,-3] },
  police:          { label:'Police station',           icon:'🚔',  noise:1.0, tiers:[0.05,-10, 0.10,-6, 0.20,-3] },
  hospital:        { label:'Hospital / EMS dispatch',  icon:'🏥',  noise:0.8, tiers:[0.08,-10, 0.15,-6, 0.30,-3] },
  // Childcare — kids playing, drop-off/pick-up traffic
  daycare:         { label:'Daycare / preschool',      icon:'👶',  noise:1.0, tiers:[0.04,-6,  0.08,-3, 0.15,-1] },
  church_daycare:  { label:'Church daycare',           icon:'⛪',  noise:1.0, tiers:[0.04,-6,  0.08,-3, 0.15,-1] },
  afterschool:     { label:'After-school program',     icon:'🧒',  noise:1.0, tiers:[0.04,-5,  0.08,-3, 0.15,-1] },
  // Animals — barking
  dog_boarding:    { label:'Dog boarding / kennel',    icon:'🐕',  noise:1.0, tiers:[0.06,-10, 0.12,-6, 0.25,-3] },
  // Traffic — engine acceleration at stops
  traffic_signal:  { label:'Traffic signal',           icon:'🚦',  noise:0.9, tiers:[0.03,-8,  0.06,-5, 0.10,-2] },
  // School buses — early morning diesel
  school_bus:      { label:'School bus yard',          icon:'🚌',  noise:0.7, tiers:[0.06,-10, 0.12,-6, 0.20,-3] },
  // Rentals — tenant turnover, parties, transient neighbors
  rental_longterm: { label:'Rental (long-term)',       icon:'📋',  noise:0.4, tiers:[0.01,-8,  0.025,-5, 0.06,-2] },
  rental_shortterm:{ label:'Short-term rental (Airbnb)',icon:'🛏️', noise:1.0, tiers:[0.01,-12, 0.025,-7, 0.06,-3] },
  // Environmental hazards — ⚠️ yellow triangle
  hazard:          { label:'Environmental hazard',     icon:'⚠️',  noise:0.1, tiers:[0.10,-12, 0.20,-8, 0.35,-4] },
};

let NUISANCE_POINTS = [
  // ── Gas stations ──
  { name:"Allsup's (Hermosa)",     type:'gas_station', lat:32.8282, lng:-104.4133 },
  { name:"Allsup's (1st & Main)",  type:'gas_station', lat:32.8383, lng:-104.3980 },
  { name:"Allsup's (N 1st St)",    type:'gas_station', lat:32.8550, lng:-104.3980 },
  { name:"Chevron (S 1st St)",     type:'gas_station', lat:32.8340, lng:-104.3975 },
  { name:"Loves Travel Stop",      type:'gas_station', lat:32.8610, lng:-104.3965 },
  // ── Schools ──
  { name:"Central Elementary",     type:'school', lat:32.8405, lng:-104.4040 },
  { name:"Hermosa Elementary",     type:'school', lat:32.8300, lng:-104.4090 },
  { name:"Yucca Elementary",       type:'school', lat:32.8465, lng:-104.4115 },
  { name:"Yeso Elementary",        type:'school', lat:32.8380, lng:-104.4100 },
  { name:"Roselawn Elementary",    type:'school', lat:32.8440, lng:-104.3985 },
  { name:"Zia Intermediate",       type:'school', lat:32.8455, lng:-104.4070 },
  { name:"Park Junior High",       type:'school', lat:32.8510, lng:-104.4125 },
  { name:"Artesia High School",    type:'school', lat:32.8475, lng:-104.4165 },
  { name:"Grand Heights Early Childhood Ctr", type:'school', lat:32.8387, lng:-104.4230 },
  // ── Major roads ──
  { name:"Main St / US-82 (central)",  type:'major_road', lat:32.8420, lng:-104.3990 },
  { name:"Main St / US-82 (south)",    type:'major_road', lat:32.8370, lng:-104.3990 },
  { name:"Main St / US-82 (north)",    type:'major_road', lat:32.8500, lng:-104.3990 },
  { name:"1st St / US-285 corridor",   type:'major_road', lat:32.8420, lng:-104.3975 },
  { name:"13th St (truck route)",       type:'major_road', lat:32.8420, lng:-104.4115 },
  // ── Equipment / supply yards ──
  { name:"Key Energy Services",    type:'equipment', lat:32.8580, lng:-104.4050 },
  { name:"Basic Energy Services",  type:'equipment', lat:32.8570, lng:-104.3960 },
  { name:"C&J Well Services",      type:'equipment', lat:32.8600, lng:-104.4020 },
  // ── Industrial ──
  { name:"Navajo Refinery (HollyFrontier)", type:'industrial', lat:32.8650, lng:-104.4000 },
  { name:"Artesia Gas Plant",               type:'industrial', lat:32.8620, lng:-104.3920 },
  // ── Emergency services — sirens, engines ──
  { name:"Fire Station 1 / Police / EMS (Public Safety Complex)", type:'fire_station', lat:32.8438, lng:-104.4406 },
  { name:"Fire Station 2 / NM State Police", type:'fire_station', lat:32.8451, lng:-104.4051 },
  { name:"Artesia Police Dept",     type:'police', lat:32.8438, lng:-104.4406 },
  { name:"Artesia General Hospital", type:'hospital', lat:32.8496, lng:-104.4112 },
  // ── Daycares / preschools ──
  { name:"Krayola Kids Day Care",   type:'daycare', lat:32.8431, lng:-104.4260 },
  { name:"Learning Ladder ECE",     type:'daycare', lat:32.8387, lng:-104.4175 },
  { name:"Little Castle Learning Ctr", type:'daycare', lat:32.8414, lng:-104.4122 },
  { name:"Artesia Head Start",      type:'daycare', lat:32.8388, lng:-104.4085 },
  { name:"Rita's Day Care",         type:'daycare', lat:32.8460, lng:-104.4230 },
  // ── Church daycares ──
  { name:"Lil Soldiers for Christ", type:'church_daycare', lat:32.8488, lng:-104.4034 },
  { name:"First Presbyterian Child Dev Ctr", type:'church_daycare', lat:32.8415, lng:-104.4010 },
  { name:"ABC & 123 Preschool",     type:'church_daycare', lat:32.8455, lng:-104.4065 },
  // ── After-school programs ──
  { name:"Artesia Recreation Center", type:'afterschool', lat:32.8465, lng:-104.4050 },
  { name:"MLK Recreational Complex",  type:'afterschool', lat:32.8475, lng:-104.4100 },
  // ── Dog boarding / kennel ──
  { name:"Dandy Time Boarding Kennel", type:'dog_boarding', lat:32.8330, lng:-104.4070 },
  // ── Traffic signals — engine acceleration noise ──
  { name:"Main St & 1st St (US-82/US-285)", type:'traffic_signal', lat:32.8424, lng:-104.4033 },
  { name:"Main St & 13th St",               type:'traffic_signal', lat:32.8424, lng:-104.4112 },
  { name:"1st St & Hermosa Dr",             type:'traffic_signal', lat:32.8269, lng:-104.4033 },
  { name:"1st St & Richey Ave",             type:'traffic_signal', lat:32.8591, lng:-104.4033 },
  { name:"Main St & 4th/5th St",            type:'traffic_signal', lat:32.8424, lng:-104.4060 },
  { name:"Main St & 8th St",                type:'traffic_signal', lat:32.8424, lng:-104.4080 },
  { name:"Main St & 10th St",               type:'traffic_signal', lat:32.8424, lng:-104.4093 },
  { name:"Main St & 26th St",               type:'traffic_signal', lat:32.8430, lng:-104.4280 },
  { name:"13th St & Richardson Ave",         type:'traffic_signal', lat:32.8397, lng:-104.4112 },
  // ── School bus yard ──
  { name:"Kaiser Inc (School Bus Contractor)", type:'school_bus', lat:32.8415, lng:-104.4215 },
  // ── Rental properties (long-term) ──
  { name:"Canyonstone Apartments",   type:'rental_longterm', lat:32.8489, lng:-104.4220 },
  { name:"EMLI at Wells of Artesia", type:'rental_longterm', lat:32.8489, lng:-104.4150 },
  { name:"Roselawn Manor",           type:'rental_longterm', lat:32.8365, lng:-104.3985 },
  { name:"Artesia Properties (Senior)", type:'rental_longterm', lat:32.8420, lng:-104.4120 },
  { name:"Artesia Apartments (25th St)", type:'rental_longterm', lat:32.8425, lng:-104.4245 },
  { name:"Rental — S 22nd St",       type:'rental_longterm', lat:32.8290, lng:-104.4215 },
  { name:"Rental — W Briscoe Ave",   type:'rental_longterm', lat:32.8330, lng:-104.4200 },
  { name:"Rental — W Bullock Ave",   type:'rental_longterm', lat:32.8455, lng:-104.4115 },
  { name:"Rental — W Jacobs Ave",    type:'rental_longterm', lat:32.8350, lng:-104.4135 },
  { name:"Rental — W Hermosa Dr",    type:'rental_longterm', lat:32.8470, lng:-104.4030 },
  { name:"Rental — W Chisum Ave",    type:'rental_longterm', lat:32.8510, lng:-104.4075 },
  { name:"Rental — N 9th St",        type:'rental_longterm', lat:32.8440, lng:-104.4060 },
  { name:"Rental — W Runyan Ave",    type:'rental_longterm', lat:32.8380, lng:-104.4145 },
  { name:"Rental — W Dallas Ave",    type:'rental_longterm', lat:32.8500, lng:-104.4055 },
  { name:"Rental — W Quay Ave",      type:'rental_longterm', lat:32.8395, lng:-104.4030 },
  { name:"Rental — W Hank Ave",      type:'rental_longterm', lat:32.8360, lng:-104.4115 },
  // ── Short-term rentals (Airbnb / VRBO) ──
  { name:"Airbnb — Little Blue House (downtown)", type:'rental_shortterm', lat:32.8420, lng:-104.4020 },
  { name:"Airbnb — Grand 2BR w/ Garage",          type:'rental_shortterm', lat:32.8415, lng:-104.4050 },
  { name:"Airbnb — APT 203 (newly built)",         type:'rental_shortterm', lat:32.8430, lng:-104.4060 },
  { name:"Airbnb — Cozy Modern Farmhouse (south)", type:'rental_shortterm', lat:32.8340, lng:-104.4000 },
  { name:"Airbnb — Blue Nest (central)",            type:'rental_shortterm', lat:32.8415, lng:-104.4030 },
  { name:"Airbnb — 3BR Cottage Style (central)",    type:'rental_shortterm', lat:32.8410, lng:-104.4020 },
  // ── Environmental hazards — ⚠️ ──
  { name:"Artesia Wastewater Treatment Plant", type:'hazard', lat:32.8220, lng:-104.3860 },
  { name:"Artesia Water Treatment Facility",   type:'hazard', lat:32.8250, lng:-104.3880 },
  { name:"Eddy County Landfill (S of town)",   type:'hazard', lat:32.8050, lng:-104.3950 },
  // Drycleaners
  { name:"Artesia Cleaners (Main St)",         type:'hazard', lat:32.8420, lng:-104.4020 },
  // Truck yards
  { name:"Loves Truck Yard (N 1st St)",        type:'hazard', lat:32.8610, lng:-104.3960 },
  // Car dealerships
  { name:"Davis Chrysler Dodge (N 1st St)",    type:'hazard', lat:32.8530, lng:-104.3980 },
  { name:"Tate Branch Auto (S 1st St)",        type:'hazard', lat:32.8340, lng:-104.3980 },
  { name:"Desert Sun Motors (Main St)",        type:'hazard', lat:32.8420, lng:-104.4150 },
  // Vehicle mechanics / auto repair
  { name:"Midas Auto (Main St)",               type:'hazard', lat:32.8420, lng:-104.4040 },
  { name:"NAPA Auto Parts & Service",          type:'hazard', lat:32.8430, lng:-104.4010 },
  { name:"Big O Tires (1st St)",               type:'hazard', lat:32.8380, lng:-104.3980 },
];

// ═══════════════════════════════════════════════
// SHARED SCORING ENGINE
// ═══════════════════════════════════════════════
function pointInPoly(lat, lng, poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const yi = poly[i][0], xi = poly[i][1];
    const yj = poly[j][0], xj = poly[j][1];
    if ((yi > lat) !== (yj > lat) && lng < (xj - xi) * (lat - yi) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}

function getZoneScore(lat, lng) {
  for (const z of ZONES) {
    if (pointInPoly(lat, lng, z.coords)) return { score: z.score, zone: z.name, rating: z.rating, code: z.code };
  }
  const isSouth = lat < 32.838;
  const isWest = lng < -104.415;
  const distFromMainSt = Math.abs(lat - 32.842);
  let s = 50;
  if (isSouth) s += 20;
  if (isWest && isSouth) s += 10;
  if (distFromMainSt < 0.003) s -= 15;
  if (lat > 32.855) s -= 25;
  s = Math.max(5, Math.min(98, s));
  const rating = s >= 75 ? 'target' : s >= 40 ? 'caution' : 'avoid';
  return { score: s, zone: 'Estimated', rating, code: '~' };
}

function sqftScore(sfn) {
  if (!sfn || sfn === 0) return 0;
  if (sfn <= 1200) return 15;
  if (sfn <= 1500) return 10;
  if (sfn <= 1800) return 5;
  if (sfn <= 2200) return 0;
  if (sfn <= 3000) return -5;
  return -10;
}

function lotScore(lotn, sfn) {
  if (!lotn || lotn === 0) return -5;
  if (!sfn || sfn === 0) return 0;
  const lotSqft = lotn * 43560;
  const estFootprint = sfn / 1.5;
  const ratio = estFootprint / lotSqft;
  if (ratio < 0.02) return 18;
  if (ratio < 0.04) return 14;
  if (ratio < 0.07) return 10;
  if (ratio < 0.10) return 5;
  if (ratio < 0.15) return 0;
  return -8;
}

function isReloEligible(l) {
  if (l.noRelo) return false;
  if (l.t !== 'house') return false;
  if (l.lotn > 5) return false;
  if (l.s === 'off-market') return false;
  // Condition-based disqualification should use noRelo:true on the listing,
  // not text-matching on notes (which can false-positive on negotiation tips).
  const zs = getZoneScore(l.lat, l.lng);
  if (zs.code === 'C' || zs.code === 'M1' || zs.code === 'M3') return false;
  if (zs.code === 'MH') return false;
  return true;
}

// ── Proximity / buffer-zone penalty ──
function distMiles(lat1, lng1, lat2, lng2) {
  const R = 3958.8;  // Earth radius in miles
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLng/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

function proximityPenalty(lat, lng) {
  let totalPen = 0;
  const nearby = [];
  for (const np of NUISANCE_POINTS) {
    const d = distMiles(lat, lng, np.lat, np.lng);
    const t = NUISANCE_TYPES[np.type];
    if (!t) continue;
    const [r1,p1, r2,p2, r3,p3] = t.tiers;
    let pen = 0;
    if (d <= r1)      pen = p1;
    else if (d <= r2) pen = p2;
    else if (d <= r3) pen = p3;
    if (pen < 0) {
      totalPen += pen;
      nearby.push({ name: np.name, type: np.type, icon: t.icon, label: t.label, dist: d.toFixed(2), pen });
    }
  }
  return { totalPen: Math.max(-40, totalPen), nearby };
}

// ── Flight path proximity scoring ──
function flightPathPenalty(lat, lng) {
  var ATS_LAT = 32.8519, ATS_LNG = -104.4676;   // Artesia Municipal Airport
  var HOSP_LAT = 32.8490, HOSP_LNG = -104.4112;  // Hospital helipad

  function _proj(olat, olng, hdg, dist) {
    var rad = hdg * Math.PI / 180;
    return [olat + dist * Math.cos(rad), olng + dist * Math.sin(rad) / Math.cos(olat * Math.PI / 180)];
  }

  // Shortest distance (miles) from point to line segment
  function _distToSeg(px, py, ax, ay, bx, by) {
    var dx = bx - ax, dy = by - ay;
    var lenSq = dx * dx + dy * dy;
    if (lenSq === 0) return distMiles(px, py, ax, ay);
    var t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / lenSq));
    return distMiles(px, py, ax + t * dx, ay + t * dy);
  }

  // Pre-compute runway approach corridors (extended ~2.5mi from airport)
  var rwy04 = _proj(ATS_LAT, ATS_LNG, 45, 0.04);
  var rwy22 = _proj(ATS_LAT, ATS_LNG, 225, 0.04);
  var rwy13 = _proj(ATS_LAT, ATS_LNG, 135, 0.035);
  var rwy31 = _proj(ATS_LAT, ATS_LNG, 315, 0.035);

  // Hospital helicopter departure routes (~1.5mi)
  var heliN = _proj(HOSP_LAT, HOSP_LNG, 0, 0.025);
  var heliE = _proj(HOSP_LAT, HOSP_LNG, 90, 0.025);
  var heliS = _proj(HOSP_LAT, HOSP_LNG, 180, 0.025);
  var heliW = _proj(HOSP_LAT, HOSP_LNG, 270, 0.025);

  var FLIGHT_PATHS = [
    // Runway approach corridors — louder, fixed-wing
    { a: rwy04, b: rwy22, label: 'Rwy 04/22 flight path', icon: '✈️', tiers: [0.20,-10, 0.40,-6, 0.65,-3] },
    { a: rwy13, b: rwy31, label: 'Rwy 13/31 flight path', icon: '✈️', tiers: [0.20,-10, 0.40,-6, 0.65,-3] },
    // Hospital heli routes — periodic, lower altitude
    { a: [HOSP_LAT,HOSP_LNG], b: [ATS_LAT,ATS_LNG], label: 'Heli route Hospital↔Airport', icon: '🚁', tiers: [0.12,-6, 0.25,-3, 0.40,-1] },
    { a: [HOSP_LAT,HOSP_LNG], b: heliN, label: 'Heli N departure', icon: '🚁', tiers: [0.10,-5, 0.25,-2, 0.40,-1] },
    { a: [HOSP_LAT,HOSP_LNG], b: heliE, label: 'Heli E departure', icon: '🚁', tiers: [0.10,-5, 0.25,-2, 0.40,-1] },
    { a: [HOSP_LAT,HOSP_LNG], b: heliS, label: 'Heli S departure', icon: '🚁', tiers: [0.10,-5, 0.25,-2, 0.40,-1] },
    { a: [HOSP_LAT,HOSP_LNG], b: heliW, label: 'Heli W departure', icon: '🚁', tiers: [0.10,-5, 0.25,-2, 0.40,-1] },
  ];

  // Point sources — airport & helipad themselves
  var FLIGHT_POINTS = [
    { lat: ATS_LAT, lng: ATS_LNG, label: 'Artesia Airport (KATS)', icon: '✈️', tiers: [0.50,-12, 1.0,-7, 1.5,-3] },
    { lat: HOSP_LAT, lng: HOSP_LNG, label: 'Hospital Helipad', icon: '🚁', tiers: [0.15,-8, 0.30,-4, 0.50,-2] },
  ];

  var totalPen = 0;
  var flightNearby = [];

  // Check point proximity (airport, helipad)
  for (var i = 0; i < FLIGHT_POINTS.length; i++) {
    var pt = FLIGHT_POINTS[i];
    var d = distMiles(lat, lng, pt.lat, pt.lng);
    var pen = 0;
    if (d <= pt.tiers[0]) pen = pt.tiers[1];
    else if (d <= pt.tiers[2]) pen = pt.tiers[3];
    else if (d <= pt.tiers[4]) pen = pt.tiers[5];
    if (pen < 0) {
      totalPen += pen;
      flightNearby.push({ name: pt.label, icon: pt.icon, dist: d.toFixed(2), pen: pen });
    }
  }

  // Check path proximity (runway approaches, heli routes)
  for (var j = 0; j < FLIGHT_PATHS.length; j++) {
    var fp = FLIGHT_PATHS[j];
    var d2 = _distToSeg(lat, lng, fp.a[0], fp.a[1], fp.b[0], fp.b[1]);
    var pen2 = 0;
    if (d2 <= fp.tiers[0]) pen2 = fp.tiers[1];
    else if (d2 <= fp.tiers[2]) pen2 = fp.tiers[3];
    else if (d2 <= fp.tiers[4]) pen2 = fp.tiers[5];
    if (pen2 < 0) {
      totalPen += pen2;
      flightNearby.push({ name: fp.label, icon: fp.icon, dist: d2.toFixed(2), pen: pen2 });
    }
  }

  return { totalPen: Math.max(-25, totalPen), nearby: flightNearby };
}

// ── Noise exposure score ──
// Combines noise-weighted nuisance proximity + flight path penalties.
// More negative = noisier. Zero = no noise exposure detected.
function noiseExposure(nearby, flightPen, coverageRatio) {
  var score = 0;
  if (nearby) {
    for (var i = 0; i < nearby.length; i++) {
      var t = NUISANCE_TYPES[nearby[i].type];
      var nw = t && t.noise !== undefined ? t.noise : 0.5;
      score += nearby[i].pen * nw;
    }
  }
  // Flight path noise (weighted at 1.0 — aircraft/heli are loud)
  score += (flightPen || 0);
  // Neighbor proximity — tight lots amplify ambient noise
  var cr = parseFloat(coverageRatio);
  if (!isNaN(cr)) {
    if (cr >= 15) score += -8;       // Packed — windows on windows
    else if (cr >= 10) score += -5;  // Tight — can see neighbors
    else if (cr >= 7) score += -2;   // Moderate
  }
  return Math.round(score * 10) / 10;
}

// ── Dismiss reason options (multi-select checkboxes) ──
const DISMISS_REASONS = [
  { id:'flight_path',   label:'In helicopter / flight path',   icon:'🚁' },
  { id:'manufactured',  label:'Manufactured / modular home',   icon:'🏚️' },
  { id:'nuisance',      label:'Near nuisance point',           icon:'⚠️' },
  { id:'industrial',    label:'Too close to industrial',       icon:'🏭' },
  { id:'road_noise',    label:'Road noise / traffic',          icon:'🛣️' },
  { id:'too_large',     label:'House too large',               icon:'📐' },
  { id:'too_expensive', label:'Over budget',                   icon:'💰' },
  { id:'not_relo',      label:'Not relo eligible',             icon:'🚫' },
  { id:'bad_zone',      label:'Bad zone / area',               icon:'📍' },
  { id:'off_market',    label:'Off-market / unavailable',      icon:'🔒' },
  { id:'neighbors',     label:'Too close to neighbors',        icon:'🏘️' },
  { id:'renovation',    label:'Needs major renovation',        icon:'🔧' },
  { id:'cash_only',     label:'Not mortgage eligible — cash only', icon:'🏦' },
  { id:'cost_too_high', label:'Live-in cost exceeds 30%',      icon:'🚨' },
  { id:'rent_too_low',  label:'Rental estimate too low',       icon:'📉' },
  { id:'other',         label:'Other',                         icon:'📝' },
];

// ── Dismissed-listings helper (persisted in localStorage) ──
const DISMISSED_KEY = 'artesia-dismissed';
function getDismissed() {
  try { return JSON.parse(localStorage.getItem(DISMISSED_KEY)) || {}; } catch { return {}; }
}
function dismissListing(addr, reason) {
  const d = getDismissed();
  d[addr] = { reason: reason || 'Rejected', ts: Date.now() };
  localStorage.setItem(DISMISSED_KEY, JSON.stringify(d));
  if (typeof pushToSupabase === 'function')
    pushToSupabase('dismissed', { address: addr, reason: reason || 'Rejected', dismissed_at: Date.now() });
}
function undismissListing(addr) {
  const d = getDismissed();
  delete d[addr];
  localStorage.setItem(DISMISSED_KEY, JSON.stringify(d));
  if (typeof deleteFromSupabase === 'function')
    deleteFromSupabase('dismissed', addr);
}
function isListingDismissed(addr) {
  return !!getDismissed()[addr];
}


// ═══════════════════════════════════════════════
// SHOWING FLAGS — flag listings for realtor review
// ═══════════════════════════════════════════════
const SHOWINGS_KEY = 'artesia-showings';
function getShowings() {
  try { return JSON.parse(localStorage.getItem(SHOWINGS_KEY)) || {}; } catch { return {}; }
}
function flagForShowing(addr, notes, questions) {
  const all = getShowings();
  const maxOrder = Object.values(all).reduce(function(m, s) {
    return Math.max(m, s.showOrder || 0);
  }, 0);
  all[addr] = {
    notes: notes || '',
    questions: questions || '',
    flaggedAt: Date.now(),
    status: 'requested',
    realtorNotes: '',
    showOrder: maxOrder + 1,
    sequenceUpdatedAt: null
  };
  localStorage.setItem(SHOWINGS_KEY, JSON.stringify(all));
  if (typeof pushToSupabase === 'function')
    pushToSupabase('showings', { address: addr, notes: notes || '', questions: questions || '', flagged_at: Date.now(), status: 'requested', realtor_notes: '', show_order: maxOrder + 1, sequence_updated_at: null });
}
function updateShowingSequence(orderedAddrs) {
  var all = getShowings();
  var now = Date.now();
  orderedAddrs.forEach(function(addr, i) {
    if (all[addr]) {
      all[addr].showOrder = i + 1;
      all[addr].sequenceUpdatedAt = now;
    }
  });
  localStorage.setItem(SHOWINGS_KEY, JSON.stringify(all));
  if (typeof pushToSupabase === 'function') {
    orderedAddrs.forEach(function(addr, i) {
      if (all[addr]) {
        pushToSupabase('showings', {
          address: addr,
          show_order: i + 1,
          sequence_updated_at: now
        });
      }
    });
  }
}
function updateShowingStatus(addr, status, realtorNotes) {
  const all = getShowings();
  if (!all[addr]) return;
  all[addr].status = status;
  if (realtorNotes !== undefined) all[addr].realtorNotes = realtorNotes;
  all[addr].updatedAt = Date.now();
  localStorage.setItem(SHOWINGS_KEY, JSON.stringify(all));
  if (typeof pushToSupabase === 'function')
    pushToSupabase('showings', { address: addr, status: status, realtor_notes: realtorNotes !== undefined ? realtorNotes : all[addr].realtorNotes, updated_at: Date.now(), show_order: all[addr].showOrder || 0, sequence_updated_at: all[addr].sequenceUpdatedAt || null });
}
function updateShowingBucket(addr, bucket) {
  var all = getShowings();
  var s = all[addr];
  if (!s) return;
  s.bucket = bucket || '';
  localStorage.setItem(SHOWINGS_KEY, JSON.stringify(all));
  if (typeof pushToSupabase === 'function')
    pushToSupabase('showings', {
      address: addr, notes: s.notes || '', questions: s.questions || '',
      flagged_at: s.flaggedAt, status: s.status,
      realtor_notes: s.realtorNotes || '', updated_at: Date.now(),
      show_order: s.showOrder || 0, sequence_updated_at: s.sequenceUpdatedAt || null,
      strategy_bucket: bucket || ''
    });
}
function unflagShowing(addr) {
  const all = getShowings();
  delete all[addr];
  localStorage.setItem(SHOWINGS_KEY, JSON.stringify(all));
  if (typeof deleteFromSupabase === 'function')
    deleteFromSupabase('showings', addr);
}
function isShowingFlagged(addr) {
  return !!getShowings()[addr];
}
function getShowingData(addr) {
  return getShowings()[addr] || null;
}

// ── Review decisions helper (persisted in localStorage) ──
const REVIEW_KEY = 'artesia-review-decisions';
function getReviewDecisions() {
  try { return JSON.parse(localStorage.getItem(REVIEW_KEY)) || {}; } catch { return {}; }
}
function confirmReviewListing(addr) {
  const d = getReviewDecisions();
  d[addr] = 'confirmed';
  localStorage.setItem(REVIEW_KEY, JSON.stringify(d));
  if (typeof pushToSupabase === 'function')
    pushToSupabase('review_decisions', { address: addr, status: 'confirmed', decided_at: Date.now() });
}
function rejectReviewListing(addr, reason) {
  const d = getReviewDecisions();
  d[addr] = { status: 'rejected', reason: reason || 'not-real', ts: Date.now() };
  localStorage.setItem(REVIEW_KEY, JSON.stringify(d));
  if (typeof pushToSupabase === 'function')
    pushToSupabase('review_decisions', { address: addr, status: 'rejected', reason: reason || 'not-real', decided_at: Date.now() });
}
function undoReviewDecision(addr) {
  const d = getReviewDecisions();
  delete d[addr];
  localStorage.setItem(REVIEW_KEY, JSON.stringify(d));
  if (typeof deleteFromSupabase === 'function')
    deleteFromSupabase('review_decisions', addr);
}
function isListingConfirmed(addr) {
  const d = getReviewDecisions()[addr];
  return d === 'confirmed' || (d && d.status === 'confirmed');
}
function isListingRejected(addr) {
  const d = getReviewDecisions()[addr];
  if (d === 'rejected') return true;
  if (d && typeof d === 'object' && (d.status === 'rejected' || d.status === 'sold' || d.status === 'wrong-data')) return true;
  return false;
}
function getReviewDecision(addr) {
  const d = getReviewDecisions()[addr];
  if (!d) return null;
  if (typeof d === 'string') return { status: d };
  return d;
}
function getReviewStatus(l) {
  if (!l.unverified) return 'verified';
  const d = getReviewDecision(l.a);
  if (!d) return 'pending-review';
  if (d.status === 'confirmed') return 'confirmed';
  return 'rejected';
}

// ═══════════════════════════════════════════════
// REVIEW WORKFLOW — detailed review data per listing
// ═══════════════════════════════════════════════
const REVIEW_DATA_KEY = 'artesia-review-data';
function getReviewDataAll() {
  try { return JSON.parse(localStorage.getItem(REVIEW_DATA_KEY)) || {}; } catch { return {}; }
}
function getReviewData(addr) {
  return getReviewDataAll()[addr] || null;
}
function saveReviewData(addr, data) {
  const all = getReviewDataAll();
  all[addr] = data;
  localStorage.setItem(REVIEW_DATA_KEY, JSON.stringify(all));
  if (typeof pushToSupabase === 'function')
    pushToSupabase('review_data', { address: addr, action: data.action, checked_reasons: data.checkedReasons || [], other_text: data.otherText || '', custom_notes: data.customNotes || '', reviewed_at: data.ts });
}
function isListingReviewed(addr) {
  const d = getReviewData(addr);
  return d && d.action === 'reviewed';
}

// ═══════════════════════════════════════════════
// CLIENT PREFERENCES — structured list for assessments
// ═══════════════════════════════════════════════
const CLIENT_PREFS = [
  { id: 'quiet',              label: 'Quiet Neighborhood',         icon: '🔇' },
  { id: 'lowTraffic',         label: 'Low Traffic',                icon: '🚗' },
  { id: 'peaceSolitude',      label: 'Peace & Solitude',           icon: '🌅' },
  { id: 'smallFootprint',     label: 'Small Footprint',            icon: '🏠' },
  { id: 'spaceNeighbors',     label: 'Space from Neighbors',       icon: '🌳' },
  { id: 'garageNeighborhood', label: 'Garage Neighborhood',        icon: '🏘️' },
  { id: 'noIndustrial',       label: 'No Industrial',              icon: '🏭' },
  { id: 'noAirport',          label: 'No Airport / Flight Path',   icon: '✈️' },
  { id: 'noSchools',          label: 'No Schools Nearby',          icon: '🏫' },
  { id: 'easilyRentable',     label: 'Easily Rentable',            icon: '🔑' },
];

// ═══════════════════════════════════════════════
// PRE-SHOWING ASSESSMENT — realtor must complete before scheduling
// ═══════════════════════════════════════════════
const PRE_SHOWING_KEY = 'artesia-pre-showing';
function getPreShowingAll() {
  try { return JSON.parse(localStorage.getItem(PRE_SHOWING_KEY)) || {}; } catch { return {}; }
}
function getPreShowingData(addr) {
  const all = getPreShowingAll();
  return all[addr] || { clientPrefs: {}, reloChecks: {}, rentalValue: null, ts: null };
}
function savePreShowingData(addr, data) {
  const all = getPreShowingAll();
  data.ts = Date.now();
  all[addr] = data;
  localStorage.setItem(PRE_SHOWING_KEY, JSON.stringify(all));
  if (typeof pushToSupabase === 'function')
    pushToSupabase('pre_showing', { address: addr, client_prefs: data.clientPrefs || {}, relo_checks: data.reloChecks || {}, rental_value: data.rentalValue, assessed_at: data.ts });
}
function isPreShowingComplete(addr) {
  const d = getPreShowingData(addr);
  const prefsCount = CLIENT_PREFS.length;
  const prefsDone = Object.values(d.clientPrefs).filter(v => v !== null && v !== undefined).length;
  const reloCount = 12; // RELO_CHECKS.length
  const reloDone = Object.values(d.reloChecks).filter(v => v !== null && v !== undefined).length;
  return prefsDone >= prefsCount && reloDone >= reloCount && d.rentalValue !== null && d.rentalValue > 0;
}
function getPreShowingProgress(addr) {
  const d = getPreShowingData(addr);
  const prefsDone = Object.values(d.clientPrefs).filter(v => v !== null && v !== undefined).length;
  const reloDone = Object.values(d.reloChecks).filter(v => v !== null && v !== undefined).length;
  const rentalDone = d.rentalValue !== null && d.rentalValue > 0 ? 1 : 0;
  const total = CLIENT_PREFS.length + 12 + 1; // prefs + relo checks + rental
  const done = prefsDone + reloDone + rentalDone;
  return { done, total, isComplete: isPreShowingComplete(addr) };
}

// ═══════════════════════════════════════════════
// SHOWING ASSESSMENT (during-showing evaluation)
// ═══════════════════════════════════════════════
const SHOWING_ASSESSMENT_KEY = 'artesia-showing-assessments';

// Question types: 'yesno' (YES/NO/OTHER), 'select' (pick one), 'text' (free text, no score)
// Each item has: questions[] for evaluation, plus auto-appended repairNeeded + repairCost fields
// Scores: yesno { yes: N, no: N }, select: array matching opts order. Text items = no score.

const SLEEP_SOUND_CHECKS = [
  { id: 'neighborProximity', label: 'Neighbor proximity', mode: 'pre', detail: 'How close are the nearest houses? Can you hear them from inside?', questions: [
    { id: 'distance', q: 'How close are the nearest houses?', type: 'select', opts: ['Very close', 'Moderate', 'Far apart'], scores: [0, 5, 10] },
    { id: 'canHear', q: 'Can you hear neighbors from inside?', type: 'yesno', scores: { yes: 0, no: 10 } },
  ]},
  { id: 'barkingDogs', label: 'Barking dogs', mode: 'onsite', detail: 'Any dogs barking in the neighborhood during the visit?', questions: [
    { id: 'barking', q: 'Any dogs barking during the visit?', type: 'yesno', scores: { yes: 0, no: 10 } },
    { id: 'howMany', q: 'How many dogs heard?', type: 'select', opts: ['None', '1', '2+'], scores: [10, 3, 0] },
  ]},
  { id: 'acUnits', label: 'A/C units', mode: 'onsite', detail: 'Location and noise level of HVAC condensers — yours and neighbors\'', questions: [
    { id: 'audible', q: 'Can you hear A/C units from inside?', type: 'yesno', scores: { yes: 0, no: 10 } },
    { id: 'neighborUnits', q: 'Neighbor A/C units close to property?', type: 'yesno', scores: { yes: 0, no: 10 } },
  ]},
  { id: 'rvs', label: 'RVs / large vehicles', mode: 'pre', detail: 'RVs, trailers, or commercial vehicles parked nearby?', questions: [
    { id: 'present', q: 'RVs or large vehicles parked nearby?', type: 'yesno', scores: { yes: 0, no: 10 } },
  ]},
  { id: 'windows', label: 'Window sound isolation', mode: 'onsite', detail: 'Close all windows — how much outside noise gets through?', questions: [
    { id: 'noiseThrough', q: 'Outside noise gets through closed windows?', type: 'yesno', scores: { yes: 0, no: 10 } },
    { id: 'sealCondition', q: 'Window seal condition?', type: 'select', opts: ['Good', 'Fair', 'Poor'], scores: [10, 5, 0] },
  ]},
  { id: 'gates', label: 'Gates & fences', mode: 'onsite', detail: 'Squeaky gates, chain-link rattling, foot traffic noise?', questions: [
    { id: 'noisy', q: 'Noisy gates or chain-link rattling?', type: 'yesno', scores: { yes: 0, no: 10 } },
    { id: 'footTraffic', q: 'Foot traffic noise from street/alley?', type: 'yesno', scores: { yes: 0, no: 10 } },
  ]},
  { id: 'sheds', label: 'Sheds & outbuildings', mode: 'onsite', detail: 'Neighbor workshops, compressors, hobby activity nearby?', questions: [
    { id: 'activity', q: 'Neighbor workshops or hobby activity nearby?', type: 'yesno', scores: { yes: 0, no: 10 } },
  ]},
  { id: 'kidsEquipment', label: 'Kids equipment', mode: 'onsite', detail: 'Trampolines, swing sets, basketball hoops nearby?', questions: [
    { id: 'present', q: 'Kids play equipment nearby?', type: 'yesno', scores: { yes: 0, no: 10 } },
  ]},
  { id: 'overheadNoise', label: 'Overhead noise', mode: 'pre', detail: 'Flight paths, highway noise, train tracks, industrial hum?', questions: [
    { id: 'present', q: 'Overhead or ambient industrial noise?', type: 'yesno', scores: { yes: 0, no: 10 } },
    { id: 'source', q: 'Noise source', type: 'text' },
  ]},
  { id: 'trashPickup', label: 'Trash pickup', mode: 'pre', detail: 'How does trash get picked up? Bins or dumpsters? Where are dumpsters? Pickup schedule?', questions: [
    { id: 'method', q: 'Trash collection method', type: 'select', opts: ['Curbside bins', 'Shared dumpster', 'Other'], scores: [10, 3, 5] },
    { id: 'dumpsterClose', q: 'Dumpster close to the home?', type: 'yesno', scores: { yes: 0, no: 10 } },
    { id: 'dumpsterLocation', q: 'Dumpster / bin location', type: 'text' },
    { id: 'pickupDay', q: 'Pickup day & time', type: 'text' },
    { id: 'earlyPickup', q: 'Early morning pickup that could wake you?', type: 'yesno', scores: { yes: 0, no: 10 } },
  ]},
];

const SLEEP_TEMP_CHECKS = [
  { id: 'vents', label: 'Vent locations', mode: 'onsite', detail: 'Where are the vents in the bedroom? Adequate coverage?', questions: [
    { id: 'adequate', q: 'Adequate vent coverage in bedroom?', type: 'yesno', scores: { yes: 10, no: 0 } },
    { id: 'location', q: 'Vent locations', type: 'text' },
  ]},
  { id: 'hvacSystem', label: 'HVAC system', mode: 'onsite', detail: 'Type, age, condition — central air, swamp cooler, wall unit?', questions: [
    { id: 'type', q: 'HVAC type', type: 'select', opts: ['Central air', 'Heat pump', 'Mini-split', 'Swamp cooler', 'Wall unit', 'None'], scores: [10, 10, 8, 4, 3, 0] },
    { id: 'condition', q: 'HVAC condition', type: 'select', opts: ['New/Good', 'Fair', 'Poor/Replace'], scores: [10, 5, 0] },
  ]},
  { id: 'airflow', label: 'Airflow & cross-ventilation', mode: 'onsite', detail: 'Can you create a cross-breeze? Ceiling fans?', questions: [
    { id: 'crossBreeze', q: 'Can you create a cross-breeze?', type: 'yesno', scores: { yes: 10, no: 0 } },
    { id: 'ceilingFans', q: 'Ceiling fans installed?', type: 'yesno', scores: { yes: 5, no: 0 } },
  ]},
  { id: 'ductLocation', label: 'Duct location', mode: 'onsite', detail: 'Where do ducts run? Attic, crawlspace, walls?', questions: [
    { id: 'location', q: 'Duct location', type: 'select', opts: ['Attic', 'Crawlspace', 'Walls', 'None visible'], scores: [5, 5, 8, 3] },
    { id: 'accessible', q: 'Ducts accessible for maintenance?', type: 'yesno', scores: { yes: 5, no: 0 } },
  ]},
  { id: 'ductlessSpot', label: 'Ductless mini-split spot', mode: 'onsite', detail: 'If needed, where could a mini-split go in the bedroom?', questions: [
    { id: 'goodSpot', q: 'Good spot for mini-split if needed?', type: 'yesno', scores: { yes: 5, no: 0 } },
    { id: 'where', q: 'Where?', type: 'text' },
  ]},
  { id: 'windowCoverings', label: 'Window coverings', mode: 'onsite', detail: 'Blinds, curtains, blackout shades? What\'s there / what\'s needed?', questions: [
    { id: 'present', q: 'Window coverings present?', type: 'yesno', scores: { yes: 10, no: 0 } },
    { id: 'blackout', q: 'Blackout capability?', type: 'yesno', scores: { yes: 5, no: 0 } },
  ]},
  { id: 'windowCondition', label: 'Window seal condition', mode: 'onsite', detail: 'Inspect window seals, panes, and frames. Failed seals mean fogging, drafts, and energy loss.', questions: [
    { id: 'paneType', q: 'Window pane type', type: 'select', opts: ['Double pane (insulated)', 'Single pane', 'Triple pane'], scores: [8, 2, 10] },
    { id: 'foggyGlass', q: 'Foggy/hazy between panes? (failed seal)', type: 'yesno', scores: { yes: 0, no: 10 } },
    { id: 'condensation', q: 'Condensation between panes?', type: 'yesno', scores: { yes: 0, no: 10 } },
    { id: 'draftTest', q: 'Feel drafts around closed windows?', type: 'yesno', scores: { yes: 0, no: 10 } },
    { id: 'caulkCondition', q: 'Exterior caulk/sealant condition', type: 'select', opts: ['Intact', 'Cracked/peeling', 'Missing/gaps'], scores: [10, 3, 0] },
    { id: 'weatherstripping', q: 'Weatherstripping intact on operable windows?', type: 'yesno', scores: { yes: 10, no: 0 } },
    { id: 'frameCondition', q: 'Window frame condition', type: 'select', opts: ['Good — no damage', 'Minor wear', 'Rotting/warped/damaged'], scores: [10, 5, 0] },
    { id: 'lockHardware', q: 'Locks and hardware work properly?', type: 'yesno', scores: { yes: 10, no: 0 } },
    { id: 'howMany', q: 'How many windows need repair/replacement?', type: 'text' },
    { id: 'replacementCost', q: 'Estimated window repair/replacement cost ($)', type: 'text' },
  ]},
  { id: 'doorCondition', label: 'Door condition', mode: 'onsite', detail: 'Exterior doors — sealed, weatherstripped, drafty?', questions: [
    { id: 'sealed', q: 'Exterior doors sealed and weatherstripped?', type: 'yesno', scores: { yes: 10, no: 0 } },
    { id: 'condition', q: 'Door condition', type: 'select', opts: ['Good', 'Fair', 'Poor'], scores: [10, 5, 0] },
  ]},
];

const SLEEP_LIGHT_CHECKS = [
  { id: 'streetlights', label: 'Streetlights', mode: 'onsite', detail: 'Are there streetlights that shine into the bedroom windows?', questions: [
    { id: 'shinesIn', q: 'Streetlights shine into bedroom windows?', type: 'yesno', scores: { yes: 0, no: 10 } },
    { id: 'brightness', q: 'Streetlight brightness level', type: 'select', opts: ['None', 'Dim', 'Bright'], scores: [10, 5, 0] },
  ]},
  { id: 'neighborLights', label: 'Neighbor lights', mode: 'onsite', detail: 'Do neighbors have exterior lights, motion lights, or security lights that shine into the property?', questions: [
    { id: 'shinesIn', q: 'Neighbor lights shine into windows?', type: 'yesno', scores: { yes: 0, no: 10 } },
    { id: 'motionLights', q: 'Motion-activated lights nearby?', type: 'yesno', scores: { yes: 0, no: 10 } },
  ]},
  { id: 'headlights', label: 'Headlights', mode: 'onsite', detail: 'Do car headlights from nearby roads or driveways shine into the bedroom?', questions: [
    { id: 'shinesIn', q: 'Headlights shine into bedroom?', type: 'yesno', scores: { yes: 0, no: 10 } },
    { id: 'frequency', q: 'Traffic frequency at night', type: 'select', opts: ['Rare', 'Occasional', 'Frequent'], scores: [10, 5, 0] },
  ]},
  { id: 'bedroomDarkness', label: 'Bedroom darkness', mode: 'onsite', detail: 'Overall — can the bedroom be made sufficiently dark for sleep?', questions: [
    { id: 'darkEnough', q: 'Bedroom dark enough for sleep?', type: 'yesno', scores: { yes: 10, no: 0 } },
    { id: 'blackoutNeeded', q: 'Blackout curtains/shades needed?', type: 'yesno', scores: { yes: 0, no: 10 } },
  ]},
];

const DOG_EVAL_CHECKS = [
  { id: 'fenceExists', label: 'Backyard fence', mode: 'onsite', detail: 'Is there a fence around the backyard?', questions: [
    { id: 'hasFence', q: 'Fence around the backyard?', type: 'yesno', scores: { yes: 10, no: 0 } },
    { id: 'fenceType', q: 'Fence type', type: 'select', opts: ['Wood privacy', 'Chain link', 'Block/masonry', 'Wire', 'None'], scores: [10, 6, 10, 4, 0] },
    { id: 'fenceHeight', q: 'Fence height', type: 'select', opts: ['6ft+', '4-5ft', 'Under 4ft', 'None'], scores: [10, 7, 3, 0] },
  ]},
  { id: 'gateSecure', label: 'Gate secure', mode: 'onsite', detail: 'Is the gate solid, latching, no gaps a dog could squeeze through?', questions: [
    { id: 'secure', q: 'Gate solid and latching?', type: 'yesno', scores: { yes: 10, no: 0 } },
    { id: 'gaps', q: 'Any gaps a dog could squeeze through?', type: 'yesno', scores: { yes: 0, no: 10 } },
  ]},
  { id: 'accessPoints', label: 'Access points', mode: 'onsite', detail: 'How many access points? Where are they? Could a dog escape?', questions: [
    { id: 'count', q: 'Number of access points', type: 'select', opts: ['1', '2', '3+'], scores: [10, 7, 4] },
    { id: 'escapeRisk', q: 'Could a dog escape?', type: 'yesno', scores: { yes: 0, no: 10 } },
    { id: 'where', q: 'Where are they?', type: 'text' },
  ]},
  { id: 'doggyDoor', label: 'Doggy door', mode: 'onsite', detail: 'Is there already a doggy door installed?', questions: [
    { id: 'installed', q: 'Doggy door installed?', type: 'yesno', scores: { yes: 10, no: 0 } },
  ]},
  { id: 'doggyDoorSpot', label: 'Doggy door placement', mode: 'onsite', detail: 'If no doggy door — where could one go? Which door/wall?', questions: [
    { id: 'goodSpot', q: 'Good spot available for doggy door?', type: 'yesno', scores: { yes: 5, no: 0 } },
    { id: 'where', q: 'Where could it go?', type: 'text' },
  ]},
  { id: 'bathingSpot', label: 'Dog bathing spot', mode: 'onsite', detail: 'Where can you bathe the dog? Laundry room, tub, outdoor hose?', questions: [
    { id: 'available', q: 'Dog bathing spot available?', type: 'yesno', scores: { yes: 10, no: 0 } },
    { id: 'where', q: 'Where?', type: 'text' },
  ]},
  { id: 'dogStuffSpot', label: 'Dog stuff storage', mode: 'onsite', detail: 'Good spot for crate, food bins, leashes, toys?', questions: [
    { id: 'available', q: 'Good storage spot for dog stuff?', type: 'yesno', scores: { yes: 10, no: 0 } },
    { id: 'where', q: 'Where?', type: 'text' },
  ]},
  { id: 'fenceCost', label: 'Fence cost estimate', mode: 'pre', detail: 'If no fence, estimated cost to install one', questions: [
    { id: 'estimate', q: 'Estimated fence cost ($)', type: 'text' },
  ]},
  { id: 'dogWalkerCost', label: 'Dog walker cost', mode: 'pre', detail: 'Estimated cost for a regular dog walker in this area?', questions: [
    { id: 'estimate', q: 'Estimated weekly dog walker cost ($)', type: 'text' },
  ]},
];

const PRIVACY_SECURITY_CHECKS = [
  { id: 'feelsPrivate', label: 'Living space feels private', mode: 'onsite', detail: 'Does the home feel private from the street and neighbors?', questions: [
    { id: 'private', q: 'Does the living space feel private?', type: 'yesno', scores: { yes: 10, no: 0 } },
  ]},
  { id: 'windowVisibility', label: 'Window visibility', mode: 'onsite', detail: 'Can others see into your windows from the street or neighboring properties?', questions: [
    { id: 'canSeeIn', q: 'Can others see into your windows?', type: 'yesno', scores: { yes: 0, no: 10 } },
    { id: 'fromWhere', q: 'Visible from where?', type: 'text' },
  ]},
  { id: 'privacyFence', label: 'Privacy fence needed', mode: 'onsite', detail: 'Does the property need a fence around the property line for privacy?', questions: [
    { id: 'needed', q: 'Privacy fence needed?', type: 'yesno', scores: { yes: 0, no: 10 } },
    { id: 'estimate', q: 'Estimated cost ($)', type: 'text' },
  ]},
  { id: 'streetLighting', label: 'Street lighting', mode: 'pre', detail: 'Is there lighting on the street? Well-lit or dark?', questions: [
    { id: 'wellLit', q: 'Street well-lit?', type: 'yesno', scores: { yes: 10, no: 0 } },
    { id: 'level', q: 'Lighting level', type: 'select', opts: ['Well-lit', 'Moderate', 'Dark'], scores: [10, 5, 0] },
  ]},
  { id: 'garagePrivacy', label: 'Garage / carport privacy', mode: 'pre', detail: 'Is there a garage or carport that is visually private?', questions: [
    { id: 'hasGarage', q: 'Garage or carport?', type: 'select', opts: ['Enclosed garage', 'Carport', 'None'], scores: [10, 5, 0] },
    { id: 'private', q: 'Visually private from street?', type: 'yesno', scores: { yes: 10, no: 0 } },
  ]},
  { id: 'presenceVisible', label: 'Presence visibility', mode: 'onsite', detail: 'Will people know when you\'re home? (car visible, lights, etc.)', questions: [
    { id: 'visible', q: 'Will people know when you\'re home?', type: 'yesno', scores: { yes: 0, no: 10 } },
  ]},
  { id: 'neighborFaceTime', label: 'Neighbor face time', mode: 'onsite', detail: 'How much interaction with neighbors when coming and going?', questions: [
    { id: 'level', q: 'Neighbor interaction level', type: 'select', opts: ['None', 'Low', 'High'], scores: [10, 7, 0] },
  ]},
  { id: 'neighborSecurity', label: 'Neighbor security systems', mode: 'pre', detail: 'Do neighbors appear to use Ring doorbells / security cameras / systems?', questions: [
    { id: 'haveSystems', q: 'Neighbors have security systems?', type: 'yesno', scores: { yes: 10, no: 0 } },
  ]},
  { id: 'neighborHabits', label: 'Neighbor habits', mode: 'onsite', detail: 'Signs of smoking or excessive drinking next door? Beer cans, cigarette butts, ashtrays?', questions: [
    { id: 'smokingSigns', q: 'Signs of smoking? (butts, ashtrays, smell)', type: 'yesno', scores: { yes: 0, no: 10 } },
    { id: 'drinkingSigns', q: 'Signs of excessive drinking? (beer cans, bottles)', type: 'yesno', scores: { yes: 0, no: 10 } },
    { id: 'details', q: 'Details', type: 'text' },
  ]},
  { id: 'sexOffenders', label: 'Sex offender proximity', mode: 'pre', detail: 'Registered sex offenders within 1 mile. Auto-checked via Offenders.io.', questions: [
    { id: 'nearbyCount', q: 'Sex offenders within 1 mile', type: 'select', opts: ['0', '1-2', '3-5', '6+'], scores: [10, 5, 2, 0] },
    { id: 'withinHalfMile', q: 'Any within 0.5 miles?', type: 'yesno', scores: { yes: 0, no: 10 } },
  ]},
  { id: 'fbiCrime', label: 'FBI crime rate', mode: 'pre', detail: 'Artesia PD violent & property crime vs national averages. Auto-checked via FBI CDE.', questions: [
    { id: 'violentRate', q: 'Violent crime level', type: 'select', opts: ['Well below average', 'Below average', 'Average', 'Above average'], scores: [10, 7, 4, 0] },
    { id: 'propertyRate', q: 'Property crime level', type: 'select', opts: ['Well below average', 'Below average', 'Average', 'Above average'], scores: [10, 7, 4, 0] },
    { id: 'crimeNotes', q: 'Crime data notes', type: 'text' },
  ]},
];

const FENCE_PLANNING_CHECKS = [
  { id: 'cornerLot', label: 'Corner lot', mode: 'pre', detail: 'Is this a corner lot? Affects gate placement and setback rules.', questions: [
    { id: 'isCorner', q: 'Is this a corner lot?', type: 'yesno', scores: { yes: 0, no: 5 } },
    { id: 'sideStreet', q: 'Side street name / direction', type: 'text' },
  ]},
  { id: 'frontYardSetback', label: 'Front yard within 30ft of curb', mode: 'pre', detail: 'Fences within 30ft of curb must be <3ft if solid, or <30% solid if taller. Max 8ft anywhere.', questions: [
    { id: 'within30', q: 'Fence needed within 30ft of curb?', type: 'yesno', scores: { yes: 0, no: 10 } },
    { id: 'frontFenceType', q: 'Front fence plan', type: 'select', opts: ['No front fence', 'Under 3ft solid', 'Over 3ft open (<30% solid)', 'N/A'], scores: [10, 8, 6, 5] },
  ]},
  { id: 'maxHeight', label: 'Planned fence height', mode: 'pre', detail: 'Max 8ft per Artesia code. 6ft typical for privacy/dog containment.', questions: [
    { id: 'height', q: 'Planned height', type: 'select', opts: ['6 ft', '4 ft', '8 ft (max)', 'Varies by side'], scores: [10, 7, 8, 7] },
  ]},
  { id: 'fenceMaterial', label: 'Fence material', mode: 'pre', detail: 'Allowed: wood, chain link, masonry, metal, vinyl, composite. Prohibited: chicken wire, rope, plastic panels not made for fencing.', questions: [
    { id: 'material', q: 'Planned material', type: 'select', opts: ['Wood privacy', 'Chain link', 'Block/masonry', 'Vinyl/composite', 'Metal', 'Undecided'], scores: [10, 6, 10, 8, 8, 3] },
  ]},
  { id: 'gatesFrontBack', label: 'Access gates (2 required, 36" min)', mode: 'onsite', detail: 'Artesia requires at least 2 access gates of 36"+ width — front and rear (or side on corner lots).', questions: [
    { id: 'frontGateSpot', q: 'Front gate location feasible?', type: 'yesno', scores: { yes: 10, no: 0 } },
    { id: 'rearGateSpot', q: 'Rear/side gate location feasible?', type: 'yesno', scores: { yes: 10, no: 0 } },
    { id: 'frontGateWhere', q: 'Front gate planned location', type: 'text' },
    { id: 'rearGateWhere', q: 'Rear/side gate planned location', type: 'text' },
  ]},
  { id: 'easements', label: 'Easements & right-of-way', mode: 'pre', detail: 'No fence on city property or easements without written consent. Check for utility easements along property lines.', questions: [
    { id: 'hasEasements', q: 'Any easements on property lines?', type: 'yesno', scores: { yes: 0, no: 10 } },
    { id: 'rightOfWay', q: 'Right-of-way conflicts?', type: 'yesno', scores: { yes: 0, no: 10 } },
    { id: 'details', q: 'Easement details', type: 'text' },
  ]},
  { id: 'existingFence', label: 'Existing fence condition', mode: 'onsite', detail: 'Is there existing fencing that can be kept, repaired, or must be replaced?', questions: [
    { id: 'exists', q: 'Existing fence on any side?', type: 'yesno', scores: { yes: 5, no: 0 } },
    { id: 'condition', q: 'Existing fence condition', type: 'select', opts: ['Good — keep', 'Fair — repair', 'Poor — replace', 'None'], scores: [10, 5, 0, 0] },
    { id: 'whichSides', q: 'Which sides have existing fence?', type: 'text' },
  ]},
  { id: 'permitPlan', label: 'Permit requirements', mode: 'pre', detail: 'A building permit is required to erect, construct, enlarge, or modify a permanent fence in Artesia. Apply at Building Inspection / Community Development.', questions: [
    { id: 'permitAware', q: 'Permit requirement noted?', type: 'yesno', scores: { yes: 5, no: 0 } },
    { id: 'permitEstCost', q: 'Estimated permit cost ($)', type: 'text' },
  ]},
  { id: 'fenceCostEstimate', label: 'Total fence cost estimate', mode: 'pre', detail: 'Based on total footage, material, gates, and permit. Include labor if hiring out.', questions: [
    { id: 'materialCost', q: 'Estimated material cost ($)', type: 'text' },
    { id: 'laborCost', q: 'Estimated labor cost ($)', type: 'text' },
    { id: 'totalEstimate', q: 'Total fence estimate ($)', type: 'text' },
  ]},
];

const UTILITY_CHECKS = [
  { id: 'laundryEase', label: 'Easy to do laundry', mode: 'onsite', detail: 'Is the laundry setup convenient? Location, access, workflow?', questions: [
    { id: 'convenient', q: 'Laundry setup convenient?', type: 'yesno', scores: { yes: 10, no: 0 } },
  ]},
  { id: 'laundrySpace', label: 'Laundry space', mode: 'onsite', detail: 'Is there enough space to do laundry easily?', questions: [
    { id: 'enough', q: 'Enough laundry space?', type: 'yesno', scores: { yes: 10, no: 0 } },
  ]},
  { id: 'sortFoldSpot', label: 'Sort / fold area', mode: 'onsite', detail: 'Where will clothes be sorted and folded? Counter, table, bedroom?', questions: [
    { id: 'available', q: 'Sort/fold area available?', type: 'yesno', scores: { yes: 10, no: 0 } },
    { id: 'where', q: 'Where?', type: 'text' },
  ]},
  { id: 'washBasin', label: 'Wash basin', mode: 'onsite', detail: 'Is there a wash basin in the laundry room for hand wash items?', questions: [
    { id: 'present', q: 'Wash basin in laundry room?', type: 'yesno', scores: { yes: 10, no: 0 } },
  ]},
  { id: 'washerDryer', label: 'Washer / dryer condition', mode: 'onsite', detail: 'Does the washer or dryer need to be replaced?', questions: [
    { id: 'washerCondition', q: 'Washer condition', type: 'select', opts: ['Good', 'Fair', 'Needs replacing', 'None'], scores: [10, 5, 0, 0] },
    { id: 'dryerCondition', q: 'Dryer condition', type: 'select', opts: ['Good', 'Fair', 'Needs replacing', 'None'], scores: [10, 5, 0, 0] },
  ]},
  { id: 'dryerVent', label: 'Dryer vent', mode: 'onsite', detail: 'How does the dryer vent? Through wall, roof, window? Clean and clear?', questions: [
    { id: 'ventType', q: 'Dryer vent type', type: 'select', opts: ['Through wall', 'Through roof', 'Window', 'Unknown'], scores: [10, 8, 3, 0] },
    { id: 'clean', q: 'Vent clean and clear?', type: 'yesno', scores: { yes: 10, no: 0 } },
  ]},
  { id: 'waterHeater', label: 'Water heater', mode: 'onsite', detail: 'Tankless or tank? Electric or gas? Age, condition, capacity?', questions: [
    { id: 'type', q: 'Water heater type', type: 'select', opts: ['Tankless', 'Tank', 'None'], scores: [10, 5, 0] },
    { id: 'fuel', q: 'Fuel source', type: 'select', opts: ['Electric', 'Gas', 'Solar'], scores: [5, 5, 10] },
    { id: 'condition', q: 'Condition', type: 'select', opts: ['Good', 'Fair', 'Poor/Replace'], scores: [10, 5, 0] },
  ]},
  { id: 'stove', label: 'Stove / range', mode: 'onsite', detail: 'Electric or gas? Condition? Need to replace?', questions: [
    { id: 'type', q: 'Stove type', type: 'select', opts: ['Gas', 'Electric', 'Induction', 'None'], scores: [8, 5, 10, 0] },
    { id: 'condition', q: 'Condition', type: 'select', opts: ['Good', 'Fair', 'Poor/Replace'], scores: [10, 5, 0] },
  ]},
  { id: 'furnace', label: 'Furnace / heating', mode: 'onsite', detail: 'Electric, gas, or heat pump? Age, condition? Forced air or radiant?', questions: [
    { id: 'type', q: 'Heating type', type: 'select', opts: ['Gas forced air', 'Electric forced air', 'Heat pump', 'Radiant', 'None'], scores: [8, 5, 10, 7, 0] },
    { id: 'condition', q: 'Condition', type: 'select', opts: ['Good', 'Fair', 'Poor/Replace'], scores: [10, 5, 0] },
  ]},
  { id: 'acUnit', label: 'A/C unit', mode: 'onsite', detail: 'Central, swamp cooler, window, or mini-split? Age, condition?', questions: [
    { id: 'type', q: 'A/C type', type: 'select', opts: ['Central air', 'Heat pump', 'Mini-split', 'Swamp cooler', 'Window unit', 'None'], scores: [10, 10, 8, 4, 3, 0] },
    { id: 'condition', q: 'Condition', type: 'select', opts: ['Good', 'Fair', 'Poor/Replace'], scores: [10, 5, 0] },
  ]},
  { id: 'electricalPanel', label: 'Electrical panel', mode: 'onsite', detail: 'Amps? Breaker panel condition? Room for expansion?', questions: [
    { id: 'amps', q: 'Panel amps', type: 'select', opts: ['200A', '150A', '100A', 'Unknown'], scores: [10, 8, 5, 3] },
    { id: 'condition', q: 'Panel condition', type: 'select', opts: ['Good', 'Fair', 'Poor/Replace'], scores: [10, 5, 0] },
    { id: 'expansion', q: 'Room for expansion?', type: 'yesno', scores: { yes: 5, no: 0 } },
  ]},
  { id: 'yardCareLevel', label: 'Yard care needed', mode: 'pre', detail: 'How much yard maintenance will be required? Size, complexity?', questions: [
    { id: 'level', q: 'Yard maintenance level', type: 'select', opts: ['Minimal', 'Moderate', 'High'], scores: [10, 5, 0] },
  ]},
  { id: 'sprinklers', label: 'Sprinkler system', mode: 'onsite', detail: 'Are there sprinklers? Working condition? Coverage?', questions: [
    { id: 'present', q: 'Sprinkler system installed?', type: 'yesno', scores: { yes: 10, no: 0 } },
    { id: 'working', q: 'Working condition?', type: 'select', opts: ['Good', 'Fair', 'Broken', 'N/A'], scores: [10, 5, 0, 0] },
  ]},
  { id: 'grassCare', label: 'Grass / lawn', mode: 'pre', detail: 'Is there grass to cut? How much? Xeriscape or natural?', questions: [
    { id: 'type', q: 'Landscaping type', type: 'select', opts: ['Xeriscape/rock', 'Small lawn', 'Large lawn'], scores: [10, 7, 3] },
  ]},
  { id: 'treeLeaves', label: 'Trees / leaves', mode: 'pre', detail: 'Trees on property? Leaf cleanup needed? Branches overhang?', questions: [
    { id: 'leafCleanup', q: 'Significant leaf cleanup needed?', type: 'yesno', scores: { yes: 0, no: 10 } },
    { id: 'overhang', q: 'Branches overhang roof or fence?', type: 'yesno', scores: { yes: 0, no: 10 } },
  ]},
  { id: 'gardenerCost', label: 'Gardener / lawn service cost', mode: 'pre', detail: 'Estimated cost to hire someone for regular yard maintenance?', questions: [
    { id: 'estimate', q: 'Estimated monthly cost ($)', type: 'text' },
  ]},
  { id: 'housekeeperCost', label: 'Weekly housekeeper cost', mode: 'pre', detail: 'Estimated cost for weekly cleaning based on sqft? Complexity of layout?', questions: [
    { id: 'estimate', q: 'Estimated weekly cost ($)', type: 'text' },
  ]},
  { id: 'airQuality', label: 'Air quality (AQI)', mode: 'pre', detail: 'Current US AQI and particulate matter. Auto-checked via Open-Meteo.', questions: [
    { id: 'aqiLevel', q: 'Air Quality Index level', type: 'select', opts: ['Good (0-50)', 'Moderate (51-100)', 'Unhealthy-Sensitive (101-150)', 'Unhealthy (151+)'], scores: [10, 6, 2, 0] },
    { id: 'dustConcern', q: 'Dust/PM10 concern?', type: 'yesno', scores: { yes: 0, no: 10 } },
    { id: 'aqiNotes', q: 'AQI details', type: 'text' },
  ]},
  { id: 'waterQuality', label: 'Water quality (EPA)', mode: 'pre', detail: 'Lead levels and violations for Artesia Municipal Water. Auto-checked via EPA ECHO.', questions: [
    { id: 'leadLevel', q: 'Lead 90th %ile vs action level', type: 'select', opts: ['Below action level', 'Near action level', 'Above action level'], scores: [10, 4, 0] },
    { id: 'recentViolations', q: 'Violations in last 3 years?', type: 'yesno', scores: { yes: 0, no: 10 } },
    { id: 'waterNotes', q: 'Water quality notes', type: 'text' },
  ]},
  { id: 'fiberInternet', label: 'Fiber internet availability', mode: 'pre', detail: 'Check FCC broadband map: enter address, filter by Fiber technology. Which ISPs report fiber to this address?', questions: [
    { id: 'fiberAvailable', q: 'Fiber internet available at this address?', type: 'yesno', scores: { yes: 10, no: 0 } },
    { id: 'provider', q: 'Fiber ISP(s) available', type: 'text' },
    { id: 'maxDown', q: 'Max download speed (Mbps)', type: 'text' },
    { id: 'maxUp', q: 'Max upload speed (Mbps)', type: 'text' },
    { id: 'altInternet', q: 'Best non-fiber option if no fiber', type: 'text' },
  ]},
];

// ── Relo eligibility checks (Sterling Lexicon Buyer Value Option) ──
const RELO_CHECKS = [
  { id: 'singleFamily', label: 'Single-family detached residence', detail: 'Not condo, townhouse, multi-family, or manufactured' },
  { id: 'permanentFoundation', label: 'Permanent foundation', detail: 'Not mobile, modular, or relocatable structure' },
  { id: 'standardConstruction', label: 'Standard construction materials', detail: 'No log cabin, geodesic dome, shipping container' },
  { id: 'lotSize', label: 'Lot size ≤ 5 acres', detail: 'Required for Buyer Value Option eligibility' },
  { id: 'residentialZoning', label: 'Residential zoning confirmed', detail: 'R1A, R1B, R2, SA2, or PUD only' },
  { id: 'mineralRights', label: 'Mineral rights have NOT been severed', detail: 'Critical for NM — verify with title company' },
  { id: 'clearTitle', label: 'Clear title — no liens or encumbrances', detail: 'Marketable title required for relo company purchase' },
  { id: 'noIncome', label: 'No income-producing features', detail: 'No rental units, commercial ops, oil/gas leases' },
  { id: 'moveInReady', label: 'Move-in ready condition', detail: 'Not fixer-upper or major renovation project' },
  { id: 'noHazardous', label: 'No known hazardous materials', detail: 'No asbestos, lead paint, mold, underground tanks' },
  { id: 'noEnvironmental', label: 'No proximity to environmental hazards', detail: 'Not adjacent to industrial ops, chemical storage' },
  { id: 'noFloodZone', label: 'Not in flood zone', detail: 'Check FEMA flood maps for Eddy County' },
];

// Relo checks as scored assessment items (for showing assessment integration)
const RELO_VERIFICATION_CHECKS = RELO_CHECKS.map(function(c) {
  return {
    id: c.id, label: c.label, mode: 'pre', detail: c.detail,
    questions: [
      { id: 'status', q: c.label, type: 'select',
        opts: ['Verified', 'Failed', 'Unknown'],
        scores: [10, 0, 3] },
    ]
  };
});

function getShowingAssessmentAll() {
  try { return JSON.parse(localStorage.getItem(SHOWING_ASSESSMENT_KEY)) || {}; } catch { return {}; }
}
function getShowingAssessment(addr) {
  const all = getShowingAssessmentAll();
  return all[addr] || { sleepSound: {}, sleepTemp: {}, sleepLight: {}, dogEval: {}, privacySecurity: {}, fencePlanning: {}, utility: {}, reloVerification: {}, overallNotes: '', ts: null };
}
function saveShowingAssessment(addr, data) {
  const all = getShowingAssessmentAll();
  data.ts = Date.now();
  all[addr] = data;
  localStorage.setItem(SHOWING_ASSESSMENT_KEY, JSON.stringify(all));
  if (typeof pushToSupabase === 'function')
    pushToSupabase('showing_assessments', {
      address: addr,
      sleep_sound: data.sleepSound || {},
      sleep_temperature: data.sleepTemp || {},
      sleep_light: data.sleepLight || {},
      dog_evaluation: data.dogEval || {},
      privacy_security: data.privacySecurity || {},
      fence_planning: data.fencePlanning || {},
      utility: data.utility || {},
      relo_verification: data.reloVerification || {},
      overall_notes: data.overallNotes || '',
      assessed_at: data.ts
    });
}
// Count total scorable questions answered across all sections
function getShowingAssessmentProgress(addr) {
  var d = getShowingAssessment(addr);
  var allSections = [
    { checks: SLEEP_SOUND_CHECKS, data: d.sleepSound },
    { checks: SLEEP_TEMP_CHECKS, data: d.sleepTemp },
    { checks: SLEEP_LIGHT_CHECKS, data: d.sleepLight },
    { checks: DOG_EVAL_CHECKS, data: d.dogEval },
    { checks: PRIVACY_SECURITY_CHECKS, data: d.privacySecurity },
    { checks: FENCE_PLANNING_CHECKS, data: d.fencePlanning },
    { checks: UTILITY_CHECKS, data: d.utility },
    { checks: RELO_VERIFICATION_CHECKS, data: d.reloVerification || {} },
  ];
  var done = 0, total = 0;
  for (var s = 0; s < allSections.length; s++) {
    var sec = allSections[s];
    for (var i = 0; i < sec.checks.length; i++) {
      var chk = sec.checks[i];
      var itemData = sec.data[chk.id] || {};
      for (var q = 0; q < chk.questions.length; q++) {
        var qDef = chk.questions[q];
        if (qDef.type === 'text') continue; // text fields don't count toward progress
        total++;
        var ans = itemData[qDef.id];
        if (ans !== undefined && ans !== null && ans !== '') done++;
      }
    }
  }
  return { done: done, total: total };
}

function getShowingAssessmentProgressByMode(addr, mode) {
  var d = getShowingAssessment(addr);
  var allSections = [
    { checks: SLEEP_SOUND_CHECKS, data: d.sleepSound },
    { checks: SLEEP_TEMP_CHECKS, data: d.sleepTemp },
    { checks: SLEEP_LIGHT_CHECKS, data: d.sleepLight },
    { checks: DOG_EVAL_CHECKS, data: d.dogEval },
    { checks: PRIVACY_SECURITY_CHECKS, data: d.privacySecurity },
    { checks: FENCE_PLANNING_CHECKS, data: d.fencePlanning },
    { checks: UTILITY_CHECKS, data: d.utility },
  ];
  var done = 0, total = 0;
  for (var s = 0; s < allSections.length; s++) {
    var sec = allSections[s];
    for (var i = 0; i < sec.checks.length; i++) {
      var chk = sec.checks[i];
      if (mode !== 'all' && chk.mode !== mode) continue;
      var itemData = sec.data[chk.id] || {};
      for (var q = 0; q < chk.questions.length; q++) {
        var qDef = chk.questions[q];
        if (qDef.type === 'text') continue;
        total++;
        var ans = itemData[qDef.id];
        if (ans !== undefined && ans !== null && ans !== '') done++;
      }
    }
  }
  return { done: done, total: total };
}

// Compute score for a single section (0-100)
function _scoreSectionQuestions(checks, data) {
  var earned = 0, max = 0;
  for (var i = 0; i < checks.length; i++) {
    var chk = checks[i];
    var itemData = data[chk.id] || {};
    for (var q = 0; q < chk.questions.length; q++) {
      var qDef = chk.questions[q];
      if (!qDef.scores) continue;
      var ans = itemData[qDef.id];
      if (qDef.type === 'yesno') {
        max += Math.max(qDef.scores.yes, qDef.scores.no);
        if (ans === 'yes') earned += qDef.scores.yes;
        else if (ans === 'no') earned += qDef.scores.no;
        else if (ans === 'other') earned += Math.round((qDef.scores.yes + qDef.scores.no) / 2);
      } else if (qDef.type === 'select' && qDef.scores) {
        var maxQ = 0;
        for (var k = 0; k < qDef.scores.length; k++) { if (qDef.scores[k] > maxQ) maxQ = qDef.scores[k]; }
        max += maxQ;
        if (ans !== undefined && ans !== null && ans !== '') {
          var idx = qDef.opts.indexOf(ans);
          if (idx >= 0 && idx < qDef.scores.length) earned += qDef.scores[idx];
        }
      }
    }
    // Penalty if repairs needed
    if (itemData._repairNeeded === 'yes') earned = Math.max(0, earned - 5);
  }
  return max > 0 ? Math.round((earned / max) * 100) : 0;
}

// Score distances (0-100): further from neighbors/street = better
// Thresholds: 50+ ft = perfect (10), 30-49 ft = good (7), 15-29 ft = ok (4), <15 ft = poor (0)
function _scoreDistance(ft) {
  if (!ft || ft <= 0) return 0;
  if (ft >= 50) return 10;
  if (ft >= 30) return 7;
  if (ft >= 15) return 4;
  return 1;
}
function _scoreDistances(distances) {
  if (!distances) return 0;
  var vals = [distances.street, distances.side1, distances.side2, distances.back];
  var hasAny = false;
  var earned = 0, max = 0;
  for (var i = 0; i < vals.length; i++) {
    max += 10;
    if (vals[i] && vals[i] > 0) { earned += _scoreDistance(vals[i]); hasAny = true; }
  }
  return hasAny && max > 0 ? Math.round((earned / max) * 100) : 0;
}

// Get all section scores + overall
function getShowingAssessmentScores(addr) {
  var d = getShowingAssessment(addr);
  var sleepSound = _scoreSectionQuestions(SLEEP_SOUND_CHECKS, d.sleepSound);
  var sleepTemp = _scoreSectionQuestions(SLEEP_TEMP_CHECKS, d.sleepTemp);
  var sleepLight = _scoreSectionQuestions(SLEEP_LIGHT_CHECKS, d.sleepLight);
  var dog = _scoreSectionQuestions(DOG_EVAL_CHECKS, d.dogEval);
  var privacy = _scoreSectionQuestions(PRIVACY_SECURITY_CHECKS, d.privacySecurity);
  var fence = _scoreSectionQuestions(FENCE_PLANNING_CHECKS, d.fencePlanning);
  var utility = _scoreSectionQuestions(UTILITY_CHECKS, d.utility);
  var relo = _scoreSectionQuestions(RELO_VERIFICATION_CHECKS, d.reloVerification || {});
  var proximity = _scoreDistances(d.distances);
  var sections = [sleepSound, sleepTemp, sleepLight, dog, privacy, fence, utility, relo];
  if (proximity > 0) sections.push(proximity); // only include in overall if measured
  var overall = 0;
  for (var i = 0; i < sections.length; i++) overall += sections[i];
  overall = Math.round(overall / sections.length);
  return { sleepSound: sleepSound, sleepTemp: sleepTemp, sleepLight: sleepLight, dog: dog, privacy: privacy, fence: fence, utility: utility, relo: relo, proximity: proximity, overall: overall };
}

// Sum all repair costs and improvement costs across all sections
function getShowingAssessmentCosts(addr) {
  var d = getShowingAssessment(addr);
  var allSections = [d.sleepSound, d.sleepTemp, d.sleepLight, d.dogEval, d.privacySecurity, d.fencePlanning, d.utility, d.reloVerification || {}];
  var repairTotal = 0, improvementTotal = 0;
  for (var s = 0; s < allSections.length; s++) {
    var sec = allSections[s];
    var keys = Object.keys(sec);
    for (var k = 0; k < keys.length; k++) {
      var item = sec[keys[k]];
      if (!item || typeof item !== 'object') continue;
      var cost = parseFloat(item._repairCost) || 0;
      if (item._repairNeeded === 'yes') repairTotal += cost;
      else if (cost > 0) improvementTotal += cost;
    }
  }
  return { repairs: repairTotal, improvements: improvementTotal, total: repairTotal + improvementTotal };
}

// ═══════════════════════════════════════════════
// LISTING DATA CORRECTIONS (localStorage-persisted)
// ═══════════════════════════════════════════════
const CORRECTIONS_KEY = 'artesia-listing-corrections';
function getListingCorrections() {
  try { return JSON.parse(localStorage.getItem(CORRECTIONS_KEY)) || {}; } catch { return {}; }
}
function saveListingCorrection(addr, corrections) {
  const all = getListingCorrections();
  all[addr] = corrections;
  localStorage.setItem(CORRECTIONS_KEY, JSON.stringify(all));
  if (typeof pushToSupabase === 'function')
    pushToSupabase('listing_corrections', { address: addr, corrections: corrections });
}
function applyCorrection(addr, corrections) {
  const l = LISTINGS.find(x => x.a === addr);
  if (!l) return;
  if (corrections.p !== undefined) l.p = Number(corrections.p);
  if (corrections.s !== undefined) l.s = corrections.s;
  if (corrections.bd !== undefined) l.bd = Number(corrections.bd);
  if (corrections.ba !== undefined) l.ba = Number(corrections.ba);
  if (corrections.sfn !== undefined) { l.sfn = Number(corrections.sfn); l.sf = Number(corrections.sfn).toLocaleString(); }
  if (corrections.lotn !== undefined) { l.lotn = Number(corrections.lotn); l.lot = Number(corrections.lotn) + ' ac'; }
  if (corrections.lk !== undefined) l.lk = corrections.lk;
}
// Corrections to forcibly remove — addresses where stored corrections are known-bad.
// This list is checked every time corrections are applied (in all dashboards),
// preventing Supabase hydration from re-introducing deleted corrections.
const FORCE_REMOVE_CORRECTIONS = [
  '204 N La Cuesta Rd',  // was incorrectly set to off-market via edit modal
];

function applyAllStoredCorrections() {
  const all = getListingCorrections();
  var cleaned = false;
  FORCE_REMOVE_CORRECTIONS.forEach(function(addr) {
    if (all[addr]) {
      delete all[addr];
      cleaned = true;
      if (typeof deleteFromSupabase === 'function') deleteFromSupabase('listing_corrections', addr);
    }
  });
  if (cleaned) localStorage.setItem(CORRECTIONS_KEY, JSON.stringify(all));
  Object.entries(all).forEach(([addr, corr]) => applyCorrection(addr, corr));
}
// NOTE: applyAllStoredCorrections() and scoreAllListings() are called
// by the HTML dashboards AFTER Supabase hydration completes.
// For backwards compatibility (opening HTML files locally without Supabase),
// they also run in the hydrateFromBakedState() fallback below.

// Offender proximity penalty — applied per-property from fetched data
function offenderPenalty(l) {
  var count = l._offenders1mi;
  if (count === undefined || count === null) return 0;
  if (count === 0) return 0;
  if (count <= 2) return -3;
  if (count <= 5) return -8;
  return -15;
}

// Walkability bonus — #1 scoring priority, properties near walkable paths
function walkabilityBonus(l) {
  var dist = l._nearestPath;
  if (dist === undefined || dist === null) return 0;
  var nearby = l._walkPathsNearby || 0;
  // Distance bonus (up to +20): closer = much better
  var distBonus = dist <= 0.05 ? 20 : dist <= 0.1 ? 16 : dist <= 0.15 ? 12 : dist <= 0.25 ? 8 : dist <= 0.5 ? 4 : 0;
  // Network density bonus (up to +10): more paths nearby = better connectivity
  var countBonus = nearby >= 8 ? 10 : nearby >= 5 ? 8 : nearby >= 3 ? 5 : nearby >= 1 ? 2 : 0;
  // Penalty for no walkable paths at all
  var noPaths = (dist > 0.5 && nearby === 0) ? -10 : 0;
  return distBonus + countBonus + noPaths;
}

// Noise penalty — lot density amplifies ambient noise, multiple loud sources compound
function noisePenalty(nearby, lotn, sfn) {
  var pen = 0;
  // Coverage ratio: tight lots amplify ambient noise
  if (lotn && sfn) {
    var cr = (sfn / 1.5) / (lotn * 43560) * 100;
    if (cr >= 15) pen -= 12;       // Packed — windows on windows
    else if (cr >= 10) pen -= 8;   // Tight
    else if (cr >= 7) pen -= 4;    // Moderate
    else if (cr < 4) pen += 5;     // Excellent spacing = quiet bonus
  }
  // Multiple noise sources compound
  if (nearby) {
    if (nearby.length >= 5) pen -= 10;
    else if (nearby.length >= 3) pen -= 5;
    // Extra hit for very loud, very close sources
    for (var i = 0; i < nearby.length; i++) {
      var t = NUISANCE_TYPES[nearby[i].type];
      if (t && t.noise >= 0.9 && parseFloat(nearby[i].dist) < 0.08) pen -= 3;
    }
  }
  return Math.max(-25, pen);
}

// Cost score — affordability as % of take-home, rent viability
function costScore(price) {
  // Monthly live-in cost (mirrors scoreAllListings financial calc)
  var rate = 0.0675, r = rate / 12, n = 360;
  var M = (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  var pitiPerDollar = 0.80 * M + 0.0085 / 12 + 0.004 / 12;
  var piti = price * pitiPerDollar;
  var liveIn = piti + 200 + piti * 0.20;
  var salary = 7960;
  var pct = (liveIn / salary) * 100;
  // Score based on % of income
  if (pct <= 20) return 15;
  if (pct <= 25) return 10;
  if (pct <= 28) return 5;
  if (pct <= 30) return 0;
  if (pct <= 35) return -8;
  if (pct <= 40) return -15;
  return -20;
}

// Rent delta score — how much rent covers (or exceeds) live-in cost
function rentScore(l) {
  if (typeof _rentEstimateCache === 'undefined') return 0;
  var re = _rentEstimateCache[l.a];
  if (!re || !re.rent || re.rent <= 0) return 0;
  var delta = re.rent - (l.monthlyLiveIn || 0);
  // Rent covers more than live-in = great investment
  if (delta >= 200) return 15;
  if (delta >= 100) return 10;
  if (delta >= 0)   return 5;
  if (delta >= -100) return 0;
  if (delta >= -300) return -5;
  return -10;
}

function compositeScore(l) {
  const zs = getZoneScore(l.lat, l.lng);
  let base = zs.score;
  let sf = sqftScore(l.sfn);
  let lt = lotScore(l.lotn, l.sfn);
  const prox = proximityPenalty(l.lat, l.lng);
  const flight = flightPathPenalty(l.lat, l.lng);
  const offPen = offenderPenalty(l);
  const walkB = walkabilityBonus(l);
  const noiseP = noisePenalty(prox.nearby, l.lotn, l.sfn);
  const costS = costScore(l.p);
  const rentS = rentScore(l);
  let total = base + sf + lt + prox.totalPen + flight.totalPen + offPen + walkB + noiseP + costS + rentS;
  total = Math.max(1, Math.min(100, total));
  return { ...zs, score: total, sfBonus: sf, lotBonus: lt, proxPen: prox.totalPen, nearby: prox.nearby, flightPen: flight.totalPen, flightNearby: flight.nearby, offenderPen: offPen, walkBonus: walkB, noisePen: noiseP, costBonus: costS, rentBonus: rentS };
}

// Score all listings (mutates LISTINGS array)
function scoreAllListings() {
  LISTINGS.forEach(l => {
    const r = compositeScore(l);
    l.score = r.score;
    l.zone = r.zone;
    l.rating = r.score >= 75 ? 'target' : r.score >= 40 ? 'caution' : 'avoid';
    l.zoneCode = r.code;
    l.sfBonus = r.sfBonus;
    l.lotBonus = r.lotBonus;
    l.proxPen = r.proxPen;
    l.nearby = r.nearby;
    l.flightPen = r.flightPen;
    l.flightNearby = r.flightNearby;
    l.offenderPen = r.offenderPen;
    l.walkBonus = r.walkBonus;
    l.noisePen = r.noisePen;
    l.costBonus = r.costBonus;
    l.rentBonus = r.rentBonus;
    l.relo = isReloEligible(l);
    if (l.lotn && l.sfn) {
      l.coverageRatio = ((l.sfn / 1.5) / (l.lotn * 43560) * 100).toFixed(1);
      l.spaceLabel = l.coverageRatio < 2 ? 'Rural buffer' :
        l.coverageRatio < 4 ? 'Excellent spacing' :
        l.coverageRatio < 7 ? 'Good spacing' :
        l.coverageRatio < 10 ? 'Moderate' :
        l.coverageRatio < 15 ? 'Tight — can see neighbors' : 'Packed — windows on windows';
    } else {
      l.coverageRatio = '?';
      l.spaceLabel = 'No lot data';
    }
    l.noiseScore = noiseExposure(r.nearby, r.flightPen, l.coverageRatio);
    if (l.score >= 75) {
      const cr = parseFloat(l.coverageRatio);
      l.verdict = isNaN(cr) ? 'Great match — quiet, compact' :
        cr < 7  ? 'Great match — quiet, compact, space from neighbors' :
        cr < 10 ? 'Great match — quiet, compact, moderate spacing' :
        cr < 15 ? 'Great match — quiet, compact, but tight lot' :
                  'Great match — quiet, compact, very tight lot';
    } else if (l.score >= 50) {
      const cr = parseFloat(l.coverageRatio);
      l.verdict = isNaN(cr) ? 'Livable but some trade-offs on noise or space' :
        cr < 10 ? 'Livable — decent spacing but other trade-offs' :
                  'Livable but tight lot and some trade-offs';
    } else {
      l.verdict = 'Not recommended for your preferences';
    }
  });
  // Financial analysis per listing
  // Constants
  var _FIN_RATE = 0.0675;
  var _FIN_R = _FIN_RATE / 12;
  var _FIN_N = 360;
  var _FIN_DOWN = 0.20;
  var _FIN_TAX = 0.0085;
  var _FIN_INS = 0.004;
  var _FIN_HSKP = 200;
  var _FIN_UTIL = 0.20;
  var _FIN_SALARY = 7960;

  // Mortgage constant: payment per $1 of loan
  var _FIN_M = (_FIN_R * Math.pow(1 + _FIN_R, _FIN_N)) / (Math.pow(1 + _FIN_R, _FIN_N) - 1);
  // PITI per $1 of purchase price
  var _FIN_PITI_PER_DOLLAR = (1 - _FIN_DOWN) * _FIN_M + _FIN_TAX / 12 + _FIN_INS / 12;
  // liveIn = PITI * 1.20 + housekeeper  →  price = (targetLiveIn - hskp) / (1.20 * pitiPerDollar)
  function _maxPriceForLiveIn(targetLiveIn) {
    var targetPITI = (targetLiveIn - _FIN_HSKP) / (1 + _FIN_UTIL);
    return Math.round(targetPITI / _FIN_PITI_PER_DOLLAR);
  }

  LISTINGS.forEach(l => {
    var piti = l.p * _FIN_PITI_PER_DOLLAR;
    var utilities = piti * _FIN_UTIL;
    var liveIn = piti + _FIN_HSKP + utilities;
    l.monthlyPI = Math.round(l.p * (1 - _FIN_DOWN) * _FIN_M);
    l.monthlyTax = Math.round((l.p * _FIN_TAX) / 12);
    l.monthlyIns = Math.round((l.p * _FIN_INS) / 12);
    l.monthlyPITI = Math.round(piti);
    l.monthlyLiveIn = Math.round(liveIn);
    l.salaryPct = Math.round((liveIn / _FIN_SALARY) * 100);
    l.salaryWarn = l.salaryPct > 30;
    // Max offer to stay under 30% of income
    l.maxOffer30 = _maxPriceForLiveIn(_FIN_SALARY * 0.30);
    // Max offer for rent feasibility (set later when rent estimates are available)
    l.maxOfferRent = null;
  });

  LISTINGS.sort((a, b) => b.score - a.score);
  LISTINGS.forEach((l, i) => l.rank = i + 1);
}

// Update max rent offer after rent estimates are loaded
function updateRentMaxOffers() {
  if (typeof _rentEstimateCache === 'undefined') return;
  // Recalculate _FIN constants (same as in scoreAllListings)
  var r = 0.0675 / 12, n = 360;
  var M = (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  var pitiPerDollar = 0.80 * M + 0.0085 / 12 + 0.004 / 12;
  LISTINGS.forEach(function(l) {
    var re = _rentEstimateCache[l.a];
    if (re && re.rent > 0) {
      // Max price where live-in <= rent estimate
      var targetPITI = (re.rent - 200) / 1.20;
      l.maxOfferRent = Math.max(0, Math.round(targetPITI / pitiPerDollar));
    }
  });
}

// scoreAllListings() is called by the dashboards after hydration.
// For local/offline fallback, it runs in hydrateFromBakedState() below.

// ═══════════════════════════════════════════════
// DATA CONFIDENCE SCORING
// Flags listings with missing/incomplete data to reduce phantom listings
// ═══════════════════════════════════════════════
function getListingConfidence(l) {
  let score = 0;
  let flags = [];
  const total = 7;
  // Has a real listing link (realtor.com/zillow)?
  if (l.lk && l.lk.length > 10) { score++; } else { flags.push('No listing URL'); }
  // Not flagged as unverified?
  if (!l.unverified) { score++; } else { flags.push('Unverified address'); }
  // Has square footage?
  if (l.sfn && l.sfn > 0) { score++; } else { flags.push('No sqft data'); }
  // Has lot size?
  if (l.lotn && l.lotn > 0) { score++; } else { flags.push('No lot data'); }
  // Has beds/baths?
  if (l.bd > 0 && l.ba > 0) { score++; } else { flags.push('Missing beds/baths'); }
  // Not off-market?
  if (l.s !== 'off-market') { score++; } else { flags.push('Off-market'); }
  // Has GPS coords (non-default)?
  if (l.lat && l.lng) { score++; } else { flags.push('No GPS coords'); }
  const pct = Math.round((score / total) * 100);
  const level = pct >= 85 ? 'high' : pct >= 57 ? 'medium' : 'low';
  return { score, total, pct, level, flags };
}

// ═══════════════════════════════════════════════
// STATE PERSISTENCE — Export/Import + Hydration
// All user decisions persist in localStorage. This section
// provides export/import to survive browser clears & deploys.
// ═══════════════════════════════════════════════
const ALL_STATE_KEYS = [
  'artesia-dismissed',
  'artesia-showings',
  'artesia-review-decisions',
  'artesia-review-data',
  'artesia-pre-showing',
  'artesia-listing-corrections',
  'artesia-relo-overrides'
];

// Collect all card-* keys too
function _getAllCardKeys() {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith('artesia-card-')) keys.push(k);
  }
  return keys;
}

function exportAllState() {
  const state = {};
  ALL_STATE_KEYS.forEach(k => {
    const v = localStorage.getItem(k);
    if (v) state[k] = JSON.parse(v);
  });
  // Include per-listing card data
  _getAllCardKeys().forEach(k => {
    try { state[k] = JSON.parse(localStorage.getItem(k)); } catch(e) {}
  });
  state._exportedAt = new Date().toISOString();
  state._version = 1;
  return state;
}

function importAllState(stateObj) {
  if (!stateObj || typeof stateObj !== 'object') return false;
  let count = 0;
  Object.entries(stateObj).forEach(([k, v]) => {
    if (k.startsWith('_')) return; // skip metadata
    if (k.startsWith('artesia-')) {
      localStorage.setItem(k, JSON.stringify(v));
      count++;
    }
  });
  // Re-apply corrections after import
  applyAllStoredCorrections();
  scoreAllListings();
  // Push imported state to Supabase
  if (typeof pushImportedStateToSupabase === 'function')
    pushImportedStateToSupabase(stateObj);
  return count;
}

function downloadStateAsJSON() {
  const state = exportAllState();
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'artesia-state-' + new Date().toISOString().slice(0, 10) + '.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function uploadStateFromJSON(callback) {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.onchange = function(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(ev) {
      try {
        const data = JSON.parse(ev.target.result);
        const count = importAllState(data);
        if (callback) callback(true, count, data._exportedAt || 'unknown');
      } catch(err) {
        if (callback) callback(false, 0, err.message);
      }
    };
    reader.readAsText(file);
  };
  input.click();
}

// ── BAKED-IN STATE (auto-generated by Export) ──
// If this object has data, it seeds localStorage on first load
// To update: run exportAllState() in console, paste result here
const PERSISTED_STATE = {};

// Hydrate: if localStorage is empty but PERSISTED_STATE has data, seed it
// Also serves as offline fallback when Supabase is not available
(function hydrateFromBakedState() {
  if (!PERSISTED_STATE || Object.keys(PERSISTED_STATE).length === 0) {
    // No baked state — if running without Supabase, score what we have
    if (typeof _sb === 'undefined' && LISTINGS.length > 0) {
      applyAllStoredCorrections();
      scoreAllListings();
    }
    return;
  }
  Object.entries(PERSISTED_STATE).forEach(([k, v]) => {
    if (k.startsWith('_')) return;
    if (!localStorage.getItem(k)) {
      localStorage.setItem(k, JSON.stringify(v));
    }
  });
  // Re-apply corrections after hydration
  applyAllStoredCorrections();
  if (typeof _sb === 'undefined') scoreAllListings();
})();

// Dead-end / cul-de-sac streets (verified from OpenStreetMap)
// n=name, d=dead-end coords, c=street coords, l=length in feet
let CUL_DE_SACS = [
  {n:"10th Street Court",d:[32.83314,-104.40790],c:[[32.83358,-104.40790],[32.83314,-104.40790]],l:161},
  {n:"Benelli Avenue",d:[32.82863,-104.43223],c:[[32.82904,-104.43316],[32.82903,-104.43224],[32.82863,-104.43223]],l:427},
  {n:"Bullock Court",d:[32.83314,-104.40885],c:[[32.83314,-104.40885],[32.83358,-104.40885]],l:158},
  {n:"Cannon Court",d:[32.85280,-104.40503],c:[[32.85234,-104.40504],[32.85280,-104.40503]],l:169},
  {n:"Cedar Lane",d:[32.81034,-104.41599],c:[[32.81034,-104.41599],[32.81033,-104.41258]],l:1041},
  {n:"Dallas Avenue",d:[32.83707,-104.39635],c:[[32.83702,-104.39710],[32.83703,-104.39697],[32.83707,-104.39635]],l:231},
  {n:"Fairview Avenue",d:[32.84879,-104.39807],c:[[32.84879,-104.39807],[32.84879,-104.39821],[32.84878,-104.39990]],l:556},
  {n:"Fairway Drive",d:[32.84899,-104.42987],c:[[32.84899,-104.43141],[32.84899,-104.43033],[32.84899,-104.42987]],l:470},
  {n:"Hank Avenue",d:[32.84705,-104.40476],c:[[32.84703,-104.40403],[32.84705,-104.40476]],l:221},
  {n:"Harrison Court",d:[32.83261,-104.41753],c:[[32.83261,-104.41700],[32.83261,-104.41753]],l:160},
  {n:"Heath Street",d:[32.80996,-104.40406],c:[[32.80996,-104.40406],[32.81546,-104.40403],[32.81715,-104.40403]],l:2619},
  {n:"Heathcliff Court",d:[32.82892,-104.40357],c:[[32.82893,-104.40396],[32.82892,-104.40357]],l:119},
  {n:"Kemp Avenue",d:[32.85647,-104.39867],c:[[32.85647,-104.39867],[32.85647,-104.39882],[32.85648,-104.39990]],l:373},
  {n:"La Cima Road",d:[32.85715,-104.42852],c:[[32.85715,-104.42852],[32.85804,-104.42856],[32.85860,-104.42899]],l:571},
  {n:"Lincoln",d:[32.82805,-104.42727],c:[[32.82928,-104.42734],[32.82914,-104.42728],[32.82805,-104.42727]],l:452},
  {n:"Painted Pony Lane",d:[32.81539,-104.41259],c:[[32.81539,-104.41259],[32.81544,-104.40856],[32.81546,-104.40403]],l:2608},
  {n:"Runyan Avenue",d:[32.82995,-104.39635],c:[[32.82995,-104.39635],[32.82995,-104.39725],[32.82997,-104.39791]],l:474},
  {n:"South Permian Pavilion Loop",d:[32.84506,-104.42985],c:[[32.84506,-104.42985],[32.84504,-104.42781]],l:624},
  {n:"Spruce Lane",d:[32.80892,-104.41602],c:[[32.80892,-104.41602],[32.80891,-104.41259]],l:1046},
  {n:"Steere Road",d:[32.85957,-104.39900],c:[[32.85956,-104.39992],[32.85957,-104.39915],[32.85957,-104.39900]],l:280},
  {n:"Sunset Court",d:[32.84345,-104.42723],c:[[32.84261,-104.42723],[32.84345,-104.42723]],l:306},
  {n:"Villa Drive",d:[32.83633,-104.41999],c:[[32.83632,-104.42131],[32.83633,-104.42012],[32.83633,-104.41999]],l:404},
  {n:"Villa Drive",d:[32.83612,-104.42131],c:[[32.83633,-104.42012],[32.83612,-104.42131]],l:370},
  {n:"Walnut Lane",d:[32.81191,-104.41601],c:[[32.81191,-104.41258],[32.81191,-104.41601]],l:1045},
  {n:"West Centre Court",d:[32.83151,-104.40925],c:[[32.83151,-104.40925],[32.83150,-104.40985]],l:182},
  {n:"Yucca Avenue",d:[32.84769,-104.39807],c:[[32.84769,-104.39807],[32.84769,-104.39828],[32.84770,-104.39990]],l:557}
];

// ═══════════════════════════════════════════════
// PROPERTY CARD DATA (moved from realtor dashboard for shared access)
// ═══════════════════════════════════════════════
function cardKey(addr) { return 'artesia-card-' + addr.replace(/[^a-zA-Z0-9]/g, '_'); }
function getCardData(addr) {
  try { const d = localStorage.getItem(cardKey(addr)); if (d) return JSON.parse(d); } catch(e) {}
  return { checks: {}, pros: [], cons: [], questions: [], realtorNotes: '' };
}
function saveCardData(addr, data) {
  localStorage.setItem(cardKey(addr), JSON.stringify(data));
  if (typeof pushCardToSupabase === 'function')
    pushCardToSupabase(addr, data);
}

// ═══════════════════════════════════════════════
// RELO OVERRIDES (moved from realtor dashboard for shared access)
// ═══════════════════════════════════════════════
const RELO_OVERRIDE_KEY = 'artesia-relo-overrides';
function getReloOverrides() {
  try { return JSON.parse(localStorage.getItem(RELO_OVERRIDE_KEY)) || {}; } catch { return {}; }
}
function setReloOverride(addr, val) {
  const o = getReloOverrides();
  o[addr] = val;
  localStorage.setItem(RELO_OVERRIDE_KEY, JSON.stringify(o));
  if (typeof pushToSupabase === 'function')
    pushToSupabase('relo_overrides', { address: addr, override_value: val });
}
function clearReloOverride(addr) {
  const o = getReloOverrides();
  delete o[addr];
  localStorage.setItem(RELO_OVERRIDE_KEY, JSON.stringify(o));
  if (typeof deleteFromSupabase === 'function')
    deleteFromSupabase('relo_overrides', addr);
}
function getEffectiveRelo(l) {
  const ov = getReloOverrides()[l.a];
  if (ov === 'override-yes') return 'override-yes';
  if (ov === 'confirmed-no') return 'confirmed-no';
  if (l.relo) return 'yes';
  return 'needs-review';
}

// ═══════════════════════════════════════════════
// PUSH IMPORTED STATE TO SUPABASE
// Called after importAllState() to sync imported data to the database
// ═══════════════════════════════════════════════
async function pushImportedStateToSupabase(stateObj) {
  if (typeof _sb === 'undefined') return;
  const tableMap = {
    'artesia-dismissed': { table: 'dismissed', mapper: function(addr, v) { return { address: addr, reason: v.reason, dismissed_at: v.ts }; }},
    'artesia-showings': { table: 'showings', mapper: function(addr, v) { return { address: addr, notes: v.notes, questions: v.questions, flagged_at: v.flaggedAt, status: v.status, realtor_notes: v.realtorNotes, updated_at: v.updatedAt }; }},
    'artesia-review-decisions': { table: 'review_decisions', mapper: function(addr, v) { if (v === 'confirmed') return { address: addr, status: 'confirmed', decided_at: Date.now() }; return { address: addr, status: v.status, reason: v.reason, decided_at: v.ts }; }},
    'artesia-review-data': { table: 'review_data', mapper: function(addr, v) { return { address: addr, action: v.action, checked_reasons: v.checkedReasons, other_text: v.otherText, custom_notes: v.customNotes, reviewed_at: v.ts }; }},
    'artesia-pre-showing': { table: 'pre_showing', mapper: function(addr, v) { return { address: addr, client_prefs: v.clientPrefs, relo_checks: v.reloChecks, rental_value: v.rentalValue, assessed_at: v.ts }; }},
    'artesia-listing-corrections': { table: 'listing_corrections', mapper: function(addr, v) { return { address: addr, corrections: v }; }},
    'artesia-relo-overrides': { table: 'relo_overrides', mapper: function(addr, v) { return { address: addr, override_value: v }; }},
  };
  for (const [key, config] of Object.entries(tableMap)) {
    if (!stateObj[key]) continue;
    const rows = Object.entries(stateObj[key]).map(function([addr, v]) { return config.mapper(addr, v); });
    if (rows.length > 0) {
      await _sb.from(config.table).upsert(rows, { onConflict: 'address' });
    }
  }
  // Push card data
  for (const [key, val] of Object.entries(stateObj)) {
    if (key.startsWith('artesia-card-') && typeof val === 'object') {
      const listing = LISTINGS.find(function(l) { return cardKey(l.a) === key; });
      if (listing) pushCardToSupabase(listing.a, val);
    }
  }
}

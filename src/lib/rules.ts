// ============================================================
// SYMBOLIC RULE DATABASE — FULL EXTRACTION
// Source:         Ontario Regulation 213/07 — ONTARIO FIRE CODE
// Authority:      Province of Ontario (Provincial Statute)
// Authority Rank: 2 (Provincial — Fire-Specific)
// Jurisdiction:   Ontario, Canada
// Scope:          All buildings, tents, air-supported structures,
//                 outdoor public amusement areas (excl. individual
//                 dwelling units except where noted)
// Extracted:      2026-03-25
// Total Rules:    ~500+
// ============================================================
// FIELD LEGEND:
//   Subject            — What the rule governs
//   Context Location   — Jurisdiction
//   Constraint Type    — Minimum / Maximum / Exact / Required / Prohibited
//   Value              — The enforceable threshold or requirement
//   Unit               — Measurement unit
//   Building Type      — Occupancy type(s) this applies to
//   Section Reference  — OFC article number
//   Condition          — When the rule is triggered
//   Related Subjects   — Linked rule subjects
//   Severity           — Critical / Major / Minor
//   Confidence         — High / Medium / Low
//   Source Document    — Ontario Fire Code (O. Reg. 213/07)
//   Authority Rank     — 2
//   Applies To Scope   — New / Existing / Both
//   Supersedes         — Rule IDs this rule overrides
//   Superseded By      — Rule IDs that override this rule
// ============================================================

// ============================================================
// PART 1 — COMPLIANCE & GENERAL
// ============================================================

RULE_P1_001:
  Subject:            Conflict Between OFC and Referenced Documents
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              OFC provisions govern over referenced documents in case of conflict
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 1.5.1.2
  Condition:          IF conflict exists between OFC and a referenced standard
  Related Subjects:   [Referenced Standards, Compliance]
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P1_002:
  Subject:            Farm Exemption
  Context Location:   Ontario
  Constraint Type:    Exempt
  Value:              Farms are exempt from Division B provisions per 1.3.1
  Unit:               N/A
  Building Type:      Farm
  Section Reference:  OFC 1.3.1.1
  Condition:          IF building is a farm as defined
  Severity:           N/A
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

// ============================================================
// PART 2 — FIRE SAFETY
// SECTION 2.1 — GENERAL
// ============================================================

RULE_P2_001:
  Subject:            Part 2 Scope — Dwelling Unit Exclusion
  Context Location:   Ontario
  Constraint Type:    Exempt
  Value:              Part 2 does NOT apply to individual dwelling units (exceptions apply)
  Unit:               N/A
  Building Type:      Residential (Individual Dwelling Units)
  Section Reference:  OFC 2.1.1.3(1)
  Condition:          Always (except Sections 2.2, 2.4.7, 2.6, 2.11, 2.13, 2.15 which DO apply)
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_002:
  Subject:            Occupancy Classification Authority
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Building classified by major occupancy by Chief Fire Official per Building Code
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.1.2.1
  Condition:          Always
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_003:
  Subject:            Hazardous Activity — Unapproved Operations
  Context Location:   Ontario
  Constraint Type:    Prohibited
  Value:              Activities creating hazard not in original design shall not be carried out without approved provisions
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.1.2.2
  Condition:          IF activity creates a fire hazard AND was not in original design
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_004:
  Subject:            Prohibited Occupancy Combinations — High Hazard Industrial
  Context Location:   Ontario
  Constraint Type:    Prohibited
  Value:              High hazard industrial occupancy SHALL NOT be contained in same building as assembly, care/detention, or residential occupancy
  Unit:               N/A
  Building Type:      Mixed-Use
  Section Reference:  OFC 2.1.2.3
  Condition:          Always
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

// ============================================================
// SECTION 2.2 — FIRE SEPARATIONS
// ============================================================

RULE_P2_005:
  Subject:            Fire Separation Repair — Between Major Occupancies
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Damaged fire separations between major occupancies must be repaired to restore fire-resistance rating
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.2.1.1
  Condition:          IF fire separation is damaged
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Existing

RULE_P2_006:
  Subject:            Fire Separation Repair — Between Rooms/Corridors/Shafts
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Damaged fire separations between rooms, corridors, shafts must be repaired to restore fire-resistance rating
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.2.2.1
  Condition:          IF fire separation is damaged
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Existing

RULE_P2_007:
  Subject:            Closure Repair — Fire Protection Rating
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Damaged closures affecting fire-protection rating must be repaired
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.2.3.1
  Condition:          IF closure is damaged
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Existing

RULE_P2_008:
  Subject:            Closure Maintenance — Fusible Links
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Fusible links and heat/smoke-actuated devices kept undamaged and free of paint and dirt
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.2.3.2(1)(a)
  Condition:          IF closure has fusible links or heat/smoke devices
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_009:
  Subject:            Closure Maintenance — Guides/Bearings/Stay Rolls
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Guides, bearings and stay rolls kept clean and lubricated
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.2.3.2(1)(b)
  Condition:          Always
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_010:
  Subject:            Closure Maintenance — Door Hardware
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Door hardware adjusted and repaired to ensure proper closing and latching
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.2.3.2(1)(c)
  Condition:          Always
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_011:
  Subject:            Closure Maintenance — Hold-Open Devices
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Inoperative hold-open devices and automatic releasing devices repaired or replaced
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.2.3.2(1)(d)
  Condition:          IF hold-open or automatic releasing device is inoperative
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_012:
  Subject:            Closure Operation — No Obstruction/Wedging
  Context Location:   Ontario
  Constraint Type:    Prohibited
  Value:              Closures in fire separations shall NOT be obstructed, blocked, wedged open, or altered to prevent intended operation
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.2.3.3
  Condition:          Always
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_013:
  Subject:            Fire Separation Door — Monthly Inspection
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              Monthly
  Unit:               per month
  Building Type:      All
  Section Reference:  OFC 2.2.3.4
  Condition:          IF door is in a fire separation
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_014:
  Subject:            Fire Separation Door — Remain Closed (Occupied Buildings)
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Doors in fire separations in occupied buildings checked as frequently as necessary to remain closed
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.2.3.5(1)
  Condition:          IF door is in fire separation AND building is occupied
  Related Subjects:   [Fire Separation, Door Hardware]
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_015:
  Subject:            Fire Separation Door — Check Exemption (Auto-Closing or FSP)
  Context Location:   Ontario
  Constraint Type:    Exempt
  Value:              Frequent closure check NOT required for: (a) auto-closing doors, or (b) doors covered by fire safety plan
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.2.3.5(2)
  Condition:          IF door auto-closes OR is addressed in approved fire safety plan
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both
  Supersedes:         [RULE_P2_014]

RULE_P2_016:
  Subject:            Fire Damper/Fire-Stop Flap Inspection Frequency
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              Annually (or approved time schedule)
  Unit:               years
  Building Type:      All
  Section Reference:  OFC 2.2.3.7
  Condition:          IF fire dampers or fire-stop flaps are installed
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_017:
  Subject:            Door Opening Clearance
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Door openings and surrounding areas kept clear of everything obstructing free operation
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.2.3.8
  Condition:          Always
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

// ============================================================
// SECTION 2.3 — INTERIOR FINISHING, FURNISHING, DECORATIVE MATERIALS
// ============================================================

RULE_P2_018:
  Subject:            Interior Finish — Refurbishment/Redecoration Compliance
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Interior finish materials during refurbishment/redecoration must conform to Building Code
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.3.1.1(1)
  Condition:          IF building is refurbished or redecorated
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_019:
  Subject:            Moveable Partitions — Flame-Spread Rating
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Equal to flame-spread rating required for interior finish of the area per Building Code
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.3.1.2
  Condition:          Always
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_020:
  Subject:            Drapes/Curtains/Textiles — Flame Resistance (Care/Detention)
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Must meet CAN/ULC-S109 "Flame Tests of Flame-Resistant Fabrics and Films"
  Unit:               N/A
  Building Type:      Care and Treatment / Detention
  Section Reference:  OFC 2.3.2.1(1)(a)
  Condition:          IF drapes/curtains/netting/textiles/films used in care/treatment or detention occupancy
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_021:
  Subject:            Drapes/Curtains/Textiles — Flame Resistance (Lobby/Exit)
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Must meet CAN/ULC-S109
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.3.2.1(1)(b)
  Condition:          IF textiles used in a lobby or exit
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_022:
  Subject:            Drapes/Curtains/Textiles — Flame Resistance (Assembly >100 persons)
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Must meet CAN/ULC-S109
  Unit:               N/A
  Building Type:      Assembly
  Section Reference:  OFC 2.3.2.1(1)(c)
  Condition:          IF textiles used in access to exit in assembly occupancy OR assembly occupancy with occupant load >100
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_023:
  Subject:            Drapes/Curtains/Textiles — Flame Resistance (Open Floor >1500 m²)
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Must meet CAN/ULC-S109
  Unit:               m²
  Building Type:      Business / Mercantile / Industrial
  Section Reference:  OFC 2.3.2.1(1)(d)
  Condition:          IF open floor area in business/mercantile/industrial occupancy exceeds 1500 m² AND floor not divided into fire compartments ≤1500 m² with 1 h fire separation
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_024:
  Subject:            Flame Retardant Treatments — Renewal Requirement
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Renewed as often as required to pass NFPA 705 match flame test
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.3.2.2
  Condition:          IF flame retardant treatment has been applied to material
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

// ============================================================
// SECTION 2.4 — FIRE HAZARDS
// ============================================================

RULE_P2_025:
  Subject:            Combustible Waste — No Accumulation (General)
  Context Location:   Ontario
  Constraint Type:    Prohibited
  Value:              Combustible waste shall not accumulate in quantities or locations creating a fire or explosion hazard
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.4.1.1(1)
  Condition:          Always
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_026:
  Subject:            Combustible Materials — No Accumulation in Egress/Service Spaces
  Context Location:   Ontario
  Constraint Type:    Prohibited
  Value:              Combustible materials other than those the space is designed for shall NOT accumulate in elevator shafts, ventilation shafts, means of egress, service rooms, or service spaces
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.4.1.1(2)
  Condition:          Always
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_027:
  Subject:            Combustible Materials — No Storage in Crawl/Ceiling Spaces
  Context Location:   Ontario
  Constraint Type:    Prohibited
  Value:              Horizontal concealed spaces (crawl spaces, ceiling spaces) shall NOT be used for storage of combustible materials
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.4.1.1(3)
  Condition:          Always
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_028:
  Subject:            Combustible Materials — No Roof Storage Creating Hazard
  Context Location:   Ontario
  Constraint Type:    Prohibited
  Value:              Combustible materials shall NOT be stored on roof or adjacent to building so as to create a fire hazard
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.4.1.1(4)
  Condition:          Always
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_029:
  Subject:            Abandoned Cables in Plenum — Removal Required
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Abandoned optical fibre cables and electrical wires with combustible insulation must be removed from plenum (unless permanently enclosed or removal would disturb structure)
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.4.1.1(5)
  Condition:          IF abandoned cables with combustible insulation exist in a plenum
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_030:
  Subject:            Outdoor Combustible Dumpsters — No Fire Hazard to Building
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Outdoor storage receptacles (dumpsters) for combustible materials must be located so they do not create a fire hazard to buildings
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.4.1.1(6)
  Condition:          Always
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_031:
  Subject:            Guest Suite Corridor Furniture — Exception to Combustible Accumulation Rule
  Context Location:   Ontario
  Constraint Type:    Permitted Exception
  Value:              Corridors serving as access to exits for guest suites may contain solid wood or approved furniture, provided furniture does not create obstruction
  Unit:               N/A
  Building Type:      Hotel / Residential (Guest Suites)
  Section Reference:  OFC 2.4.1.2
  Condition:          IF corridor serves guest suites
  Severity:           Minor
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both
  Supersedes:         [RULE_P2_026]

RULE_P2_032:
  Subject:            Spontaneously Ignitable Waste — Receptacle Required
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Greasy/oily rags etc. must be deposited in compliant receptacle or removed from premises
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.4.1.3(1)
  Condition:          IF materials subject to spontaneous ignition are present
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_033:
  Subject:            Ash Receptacles — Noncombustible with Close-Fitting Cover
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Ashes stored in receptacle of: (a) noncombustible material, (b) close-fitting self-closing metal cover, (c) if on combustible floor: flanged bottom or legs ≥50 mm high, (d) NOT within 1 m of combustible materials
  Unit:               mm / m
  Building Type:      All
  Section Reference:  OFC 2.4.1.3(2)(3)
  Condition:          IF ashes are present
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_034:
  Subject:            Waste Receptacle Clearance from Combustibles
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              1 m from combustible materials
  Unit:               m
  Building Type:      All
  Section Reference:  OFC 2.4.1.3(3)(d)
  Condition:          IF waste receptacle is placed near combustible materials
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_035:
  Subject:            Hotel Waste Containers — Noncombustible or Approved
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Waste containers in public washrooms and public areas of hotel: approved OR noncombustible with self-closing covers
  Unit:               N/A
  Building Type:      Hotel
  Section Reference:  OFC 2.4.1.4
  Condition:          IF hotel establishment
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_036:
  Subject:            Lint Traps — Cleaning to Prevent Accumulation
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Lint traps in laundry equipment cleaned to prevent accumulation creating undue fire hazard
  Unit:               N/A
  Building Type:      All (with laundry equipment)
  Section Reference:  OFC 2.4.1.5
  Condition:          IF laundry equipment is present
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_037:
  Subject:            Flammable/Combustible Liquid Spills — Immediate Removal
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Removed immediately with absorbent material that will not increase hazard; disposed of safely
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.4.1.6
  Condition:          IF flammable/combustible liquid spill occurs in building
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_038:
  Subject:            Smoking — Only in Approved Areas When Hazard Exists
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Where smoking is a fire/explosion hazard, smoking permitted only in specifically approved areas
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.4.3.1(1)
  Condition:          IF conditions make smoking a fire or explosion hazard
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_039:
  Subject:            No-Smoking Signs — Lettering Specification
  Context Location:   Ontario
  Constraint Type:    Exact
  Value:              Black lettering 50 mm high, 12.5 mm stroke, yellow background; OR symbols 150 mm × 150 mm
  Unit:               mm
  Building Type:      All
  Section Reference:  OFC 2.4.3.2
  Condition:          IF area where smoking is not permitted
  Severity:           Minor
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_040:
  Subject:            Open Flames — Prohibited in Assembly Occupancy (unless approved)
  Context Location:   Ontario
  Constraint Type:    Prohibited
  Value:              Open flames not permitted in buildings used for public assemblies in quantities creating a fire hazard, unless approved
  Unit:               N/A
  Building Type:      Assembly
  Section Reference:  OFC 2.4.4.1(1)
  Condition:          IF building used for public assembly
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_041:
  Subject:            Open Flames — Prohibited in Dining Areas of Care/Treatment Occupancies
  Context Location:   Ontario
  Constraint Type:    Prohibited
  Value:              Open flames not permitted in dining areas in care and treatment occupancies and care occupancies
  Unit:               N/A
  Building Type:      Care and Treatment / Care
  Section Reference:  OFC 2.4.4.1(2)
  Condition:          Always
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_042:
  Subject:            Decorative Open Flame Devices — Noncombustible Holder Required
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Securely supported in noncombustible holders; located/protected so combustibles won't contact flame; OR approved
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.4.4.1(3)
  Condition:          IF decorative or lighting device with open flame is used
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_043:
  Subject:            Flaming Meals/Drinks — Prohibited in Care/Treatment Occupancies
  Context Location:   Ontario
  Constraint Type:    Prohibited
  Value:              Flaming meals or drinks shall NOT be served in care and treatment occupancies and care occupancies
  Unit:               N/A
  Building Type:      Care and Treatment / Care
  Section Reference:  OFC 2.4.4.2(1)
  Condition:          Always
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_044:
  Subject:            Flaming Meals/Drinks in Assembly — Ignition at Serving Location Only
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              In assembly occupancies, flaming meals/drinks ignited only at location of serving
  Unit:               N/A
  Building Type:      Assembly
  Section Reference:  OFC 2.4.4.2(2)
  Condition:          IF flaming meals/drinks served in assembly occupancy
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_045:
  Subject:            Flaming Meal Equipment Refuelling — Outside Serving Area
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Refuelling must be carried out (a) outside the serving area and (b) away from ignition sources
  Unit:               N/A
  Building Type:      Assembly
  Section Reference:  OFC 2.4.4.2(3)
  Condition:          IF equipment used to flame meals/drinks in assembly occupancy
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_046:
  Subject:            Flaming Meal Serving Cart — Portable Extinguisher Minimum Rating
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              5B:C
  Unit:               extinguisher rating
  Building Type:      Assembly
  Section Reference:  OFC 2.4.4.2(4)
  Condition:          IF flaming meals/drinks served in assembly occupancy
  Related Subjects:   [Portable Extinguishers, Assembly Occupancy]
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_047:
  Subject:            Open Flame Devices — Noncombustible Holder (General)
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Any device with open flame securely supported in noncombustible holder; located/protected to prevent accidental contact with combustibles
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.4.4.3
  Condition:          IF any device with open flame is present
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_048:
  Subject:            Flammable Liquids — Not Used for Cleaning (Except Process Essential)
  Context Location:   Ontario
  Constraint Type:    Prohibited
  Value:              Flammable liquids shall NOT be used for cleaning purposes except where cleaning is essential part of a process
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.4.5.1
  Condition:          Always
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_049:
  Subject:            Flammable Gases — Not Used to Inflate Balloons
  Context Location:   Ontario
  Constraint Type:    Prohibited
  Value:              Flammable gases shall NOT be used to inflate balloons
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.4.5.2
  Condition:          Always
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_050:
  Subject:            Temporary Electrical Wiring — No Fire Hazard
  Context Location:   Ontario
  Constraint Type:    Prohibited
  Value:              Temporary electrical wiring shall NOT be used where it presents a fire hazard
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.4.6.1
  Condition:          Always
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_051:
  Subject:            Vacant Buildings — Secured Against Unauthorized Entry
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Vacant buildings must be secured against unauthorized entry
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.4.7.1
  Condition:          IF building is vacant
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

// ============================================================
// SECTION 2.5 — FIRE DEPARTMENT ACCESS
// ============================================================

RULE_P2_052:
  Subject:            Fire Access Route — No Obstruction
  Context Location:   Ontario
  Constraint Type:    Prohibited
  Value:              Fire access routes and access panels/windows shall NOT be obstructed by vehicles, gates, fences, building materials, vegetation, signs, or other obstructions
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.5.1.2(1)
  Condition:          Always
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_053:
  Subject:            Sprinkler/Standpipe Connections — Clearly Identified and Unobstructed
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Fire department sprinkler and standpipe connections clearly identified and maintained free of obstructions at all times
  Unit:               N/A
  Building Type:      All (with sprinkler/standpipe)
  Section Reference:  OFC 2.5.1.2(2)
  Condition:          Always
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_054:
  Subject:            Fire Access Route — Immediately Ready at All Times
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Fire access routes maintained immediately ready for use at all times by fire department vehicles
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.5.1.3
  Condition:          Always
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_055:
  Subject:            Fire Access Route — Signage Required
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Approved signs shall be displayed to indicate fire access routes
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.5.1.4
  Condition:          Always
  Severity:           Minor
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

// ============================================================
// SECTION 2.6 — SERVICE EQUIPMENT (HVAC, CHIMNEYS, COOKING, INCINERATORS)
// ============================================================

RULE_P2_056:
  Subject:            Defective HVAC Equipment — Removal/Repair/Replace
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Defective appliances creating hazardous conditions must be removed, repaired, or replaced
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.6.1.1
  Condition:          IF defective appliance creates a hazardous condition
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_057:
  Subject:            Solid Fuel Bin — Minimum Clearance from Appliance
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              1.2 m
  Unit:               m
  Building Type:      All
  Section Reference:  OFC 2.6.1.2
  Condition:          IF solid fuel bin is present
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_058:
  Subject:            Hoods/Ducts/Filters — Maximum Inspection Interval
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              7 days
  Unit:               days
  Building Type:      All (subject to combustible deposits)
  Section Reference:  OFC 2.6.1.3
  Condition:          IF hoods/ducts/filters subject to combustible deposit accumulation
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_059:
  Subject:            Chimney/Flue — Inspection Interval (Annual)
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              12 months
  Unit:               months
  Building Type:      All
  Section Reference:  OFC 2.6.1.4(1)(a)
  Condition:          Always (also at time of appliance addition and after chimney fire)
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_060:
  Subject:            Chimney/Flue — Inspection After Chimney Fire
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Inspected after any chimney fire
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.6.1.4(1)(c)
  Condition:          IF a chimney fire has occurred
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_061:
  Subject:            Chimney/Flue — Repair to Eliminate Deficiency/Abandoned Openings
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Must eliminate: (a) structural deficiency or decay, (b) abandoned/unused openings not effectively sealed against fire/smoke passage
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.6.1.4(2)
  Condition:          IF deficiency or abandoned opening is identified
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_062:
  Subject:            Chimney/Flue — Cleaning to Remove Combustible Deposits
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Cleaned as often as necessary to remain free from combustible deposit accumulation
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.6.1.5
  Condition:          Always
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_063:
  Subject:            HVAC Disconnect Switches — Operational Test Interval
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              12 months
  Unit:               months
  Building Type:      All (except self-contained systems in guest suites/dwelling units)
  Section Reference:  OFC 2.6.1.8
  Condition:          IF disconnect switch for mechanical air-conditioning/ventilation system is present
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_064:
  Subject:            Ventilation Shafts — Ventilation Use Only
  Context Location:   Ontario
  Constraint Type:    Prohibited
  Value:              Ventilation shafts shall be used ONLY for ventilating purposes
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.6.1.9
  Condition:          Always
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_065:
  Subject:            Duct Work Repairs — Prerequisite Safety Steps
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Before heat-producing work (cutting/welding/soldering) on ducts: (a) system shut down, (b) duct cleaned of combustible deposits, (c) combustible lining removed
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.6.1.10
  Condition:          IF heat-producing work is performed on ducts
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_066:
  Subject:            Commercial Cooking Equipment — Exhaust/Fire Protection per NFPA 96
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Exhaust and fire protection systems in conformance with NFPA 96
  Unit:               N/A
  Building Type:      Commercial / Hotel
  Section Reference:  OFC 2.6.1.12(1)
  Condition:          IF commercial cooking equipment is present
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_067:
  Subject:            Commercial Cooking Equipment — Maintenance per NFPA 96
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Exhaust and fire protection systems maintained in conformance with NFPA 96
  Unit:               N/A
  Building Type:      Commercial / Hotel
  Section Reference:  OFC 2.6.1.13
  Condition:          Always
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_068:
  Subject:            Commercial Cooking — Manual Fire Protection Instructions Posted
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Instructions for manually operating fire protection systems posted conspicuously in kitchen
  Unit:               N/A
  Building Type:      Commercial / Hotel
  Section Reference:  OFC 2.6.1.14(1)
  Condition:          IF commercial cooking equipment with fire protection system is present
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_069:
  Subject:            Commercial Cooking — Manual Instructions in Fire Safety Plan
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Manual operation instructions included in fire safety plan where plan is required
  Unit:               N/A
  Building Type:      Commercial / Hotel
  Section Reference:  OFC 2.6.1.14(2)
  Condition:          IF fire safety plan is required for the building
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_070:
  Subject:            Solid-Fuel-Burning Appliances — Installation Standard
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Installed in accordance with CAN/CSA-B365 "Installation Code for Solid-Fuel-Burning Appliances and Equipment"
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.6.2.1
  Condition:          IF solid-fuel-burning appliance is installed
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_071:
  Subject:            Solid-Fuel-Burning Appliances — Maintenance Standard
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Maintained in accordance with CAN/CSA-B365
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.6.2.2
  Condition:          Always
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_072:
  Subject:            Incinerators — Spark Arrester Inspection/Cleaning Interval
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              12 months (or more frequently where debris accumulation affects operations)
  Unit:               months
  Building Type:      All (with incinerators)
  Section Reference:  OFC 2.6.3.3(1)
  Condition:          IF spark arrester is installed
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_073:
  Subject:            Burnt-Out Spark Arresters — Repair/Replace
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Burnt-out spark arresters shall be repaired or replaced
  Unit:               N/A
  Building Type:      All (with incinerators)
  Section Reference:  OFC 2.6.3.3(2)
  Condition:          IF spark arrester is burnt out
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

// ============================================================
// SECTION 2.7 — SAFETY TO LIFE (EGRESS, DOOR HARDWARE, EXIT LIGHTING)
// ============================================================

RULE_P2_074:
  Subject:            Work Areas Adjacent to Aisles — Business/Mercantile
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Individual work areas in business, personal services, mercantile occupancies shall be located adjacent to aisles
  Unit:               N/A
  Building Type:      Business / Personal Services / Mercantile
  Section Reference:  OFC 2.7.1.1
  Condition:          Always
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_075:
  Subject:            Main Aisle Clear Width — Business/Mercantile (Two Exits Required)
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              1100 mm
  Unit:               mm
  Building Type:      Business / Personal Services / Mercantile
  Section Reference:  OFC 2.7.1.2
  Condition:          IF two exits required AND floor area not subdivided into rooms served by corridors
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_076:
  Subject:            Subsidiary Aisle Clear Width — Business/Mercantile
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              900 mm
  Unit:               mm
  Building Type:      Business / Personal Services / Mercantile
  Section Reference:  OFC 2.7.1.3
  Condition:          IF subsidiary aisle branches from main aisle AND distance ≤7.5 m
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_077:
  Subject:            Assembly Occupancy Occupant Load — Maximum Floor Area per Person
  Context Location:   Ontario
  Constraint Type:    Maximum (Floor Space per Person)
  Value:              0.60 m²/person (dining/cafeteria/alcoholic beverage); 0.40 m²/person (all other uses)
  Unit:               m²/person
  Building Type:      Assembly
  Section Reference:  OFC 2.7.1.4(7)
  Condition:          IF assembly occupancy
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_078:
  Subject:            Assembly Occupant Load Table — Space with Nonfixed Seats
  Context Location:   Ontario
  Constraint Type:    Exact
  Value:              0.75 m²/person
  Unit:               m²/person
  Building Type:      Assembly
  Section Reference:  OFC Table 2.7.1.A
  Condition:          IF space has nonfixed seats (no tables)
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_079:
  Subject:            Assembly Occupant Load Table — Space with Nonfixed Seats and Tables
  Context Location:   Ontario
  Constraint Type:    Exact
  Value:              0.95 m²/person
  Unit:               m²/person
  Building Type:      Assembly
  Section Reference:  OFC Table 2.7.1.A
  Condition:          IF space has nonfixed seats and tables
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_080:
  Subject:            Assembly Occupant Load Table — Standing Space
  Context Location:   Ontario
  Constraint Type:    Exact
  Value:              0.40 m²/person
  Unit:               m²/person
  Building Type:      Assembly
  Section Reference:  OFC Table 2.7.1.A
  Condition:          IF standing space
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_081:
  Subject:            Assembly Occupant Load Table — Classrooms
  Context Location:   Ontario
  Constraint Type:    Exact
  Value:              1.85 m²/person
  Unit:               m²/person
  Building Type:      Assembly / Educational
  Section Reference:  OFC Table 2.7.1.A
  Condition:          IF classroom use
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_082:
  Subject:            Assembly Occupant Load Table — Dining/Alcoholic Beverage/Cafeteria
  Context Location:   Ontario
  Constraint Type:    Exact
  Value:              1.10 m²/person
  Unit:               m²/person
  Building Type:      Assembly
  Section Reference:  OFC Table 2.7.1.A
  Condition:          IF dining, alcoholic beverage, or cafeteria use
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_083:
  Subject:            Assembly Occupant Load Table — Laboratories in Schools
  Context Location:   Ontario
  Constraint Type:    Exact
  Value:              4.60 m²/person
  Unit:               m²/person
  Building Type:      Assembly / Educational
  Section Reference:  OFC Table 2.7.1.A
  Condition:          IF school laboratory
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_084:
  Subject:            Assembly Occupant Load Table — School Shops/Vocational
  Context Location:   Ontario
  Constraint Type:    Exact
  Value:              9.30 m²/person
  Unit:               m²/person
  Building Type:      Assembly / Educational
  Section Reference:  OFC Table 2.7.1.A
  Condition:          IF school shop or vocational room
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_085:
  Subject:            Occupant Load — Posting Requirement (>60 persons)
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Posted conspicuously when occupant load exceeds 60 persons
  Unit:               persons
  Building Type:      Assembly
  Section Reference:  OFC 2.7.1.5(1)
  Condition:          IF occupant load > 60
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_086:
  Subject:            Nonfixed Seating — Max Seats Between Seat and Nearest Aisle
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              7 seats
  Unit:               seats
  Building Type:      Assembly
  Section Reference:  OFC 2.7.1.6(2)
  Condition:          IF nonfixed row seating in assembly occupancy
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_087:
  Subject:            Assembly Aisle Width — Nonfixed Seating (Standard)
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              1100 mm
  Unit:               mm
  Building Type:      Assembly
  Section Reference:  OFC 2.7.1.6(3)
  Condition:          IF nonfixed row seating in assembly occupancy
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_088:
  Subject:            Assembly Aisle Width — Nonfixed Seating (≤60 Seats Reduction)
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              750 mm (if serving ≤60 seats) OR 900 mm (if serving seats on one side only)
  Unit:               mm
  Building Type:      Assembly
  Section Reference:  OFC 2.7.1.6(4)
  Condition:          IF aisle serves ≤60 seats OR one side only
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both
  Supersedes:         [RULE_P2_087]

RULE_P2_089:
  Subject:            Assembly Aisle — Cross Aisle/Foyer/Exit Width Formula
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              Width of widest aisle + 50% of total required width of remaining aisles it serves
  Unit:               mm (calculated)
  Building Type:      Assembly
  Section Reference:  OFC 2.7.1.6(5)
  Condition:          IF aisles terminate in cross aisle, foyer, or exit
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_090:
  Subject:            Assembly Aisle — Max Travel Distance to Exit Door (Non-Sprinklered)
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              30 m
  Unit:               m
  Building Type:      Assembly
  Section Reference:  OFC 2.7.1.6(6)
  Condition:          IF floor area is NOT sprinklered
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_091:
  Subject:            Assembly Aisle — Max Travel Distance to Exit Door (Sprinklered)
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              45 m
  Unit:               m
  Building Type:      Assembly
  Section Reference:  OFC 2.7.1.6(6)
  Condition:          IF floor area IS sprinklered
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both
  Supersedes:         [RULE_P2_090]

RULE_P2_092:
  Subject:            Assembly Nonfixed Seating — Fastened in Units (Occupant Load >200)
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Seats fastened in units of ≥4 and ≤12, OR each end seat abutting an aisle securely fastened to floor
  Unit:               seats per unit
  Building Type:      Assembly
  Section Reference:  OFC 2.7.1.6(7)
  Condition:          IF occupant load exceeds 200 in assembly occupancy with nonfixed seating
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_093:
  Subject:            Means of Egress — Maintained in Good Repair and Free of Obstructions
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Maintained in good repair and free of obstructions at all times
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.7.1.7(1)
  Condition:          Always
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_094:
  Subject:            Exit/Corridor Lighting — Maintained
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Lighting in exits and access to exits (including public corridors) shall be maintained
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.7.1.7(2)
  Condition:          Always
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_095:
  Subject:            Fire Escapes/Exterior Stairways — Maintained Free of Snow/Ice
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Maintained in good repair, operational, and kept free of snow and ice accumulations
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.7.1.8(1)
  Condition:          IF building is occupied
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_096:
  Subject:            Turnstiles/Checkout Counters — No Exit Obstruction
  Context Location:   Ontario
  Constraint Type:    Prohibited
  Value:              Turnstiles, checkout counters, railings, or barriers shall NOT obstruct exits or access to exits
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.7.1.9(1)
  Condition:          Always (subject to exceptions in 2.7.1.9(2)(3))
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_097:
  Subject:            Checkout Counter Clear Width — Height ≤914 mm
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              450 mm
  Unit:               mm
  Building Type:      Retail / Mercantile
  Section Reference:  OFC 2.7.1.9(2)
  Condition:          IF checkout counter or control post height ≤914 mm used in access to exit
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_098:
  Subject:            Checkout Counter Clear Width — Height >914 mm
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              550 mm
  Unit:               mm
  Building Type:      Retail / Mercantile
  Section Reference:  OFC 2.7.1.9(3)
  Condition:          IF checkout counter or control post height >914 mm
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_099:
  Subject:            Wheeled Carts — Stored so as Not to Obstruct Exits
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Stored after use so as NOT to obstruct access to exits
  Unit:               N/A
  Building Type:      Retail / Mercantile
  Section Reference:  OFC 2.7.1.9(5)
  Condition:          IF wheeled carts are used by customers in retail outlet
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_100:
  Subject:            Exit Door Release Force — Maximum
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              90 N applied at knob or latch releasing device
  Unit:               N (Newtons)
  Building Type:      All
  Section Reference:  OFC 2.7.2.1(1)
  Condition:          IF building has exit doors
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_101:
  Subject:            Panic Hardware — Required for Assembly (Occupant Load >100)
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Approved hardware releasing latch and allowing door to open in direction of exit travel under ≤90 N
  Unit:               N
  Building Type:      Assembly
  Section Reference:  OFC 2.7.2.1(2)
  Condition:          IF: (a) exit door from assembly room/suite with occupant load >100, or (b) exit door from floor area with assembly occupancy >100 persons, or (c) exit stair shaft door with >100 occupants, or (d) high hazard industrial exit door
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_102:
  Subject:            Exit Door Swing Direction — Rooms >60 Persons
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Door shall swing on vertical axis in direction of exit travel
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.7.2.1(3)(b)
  Condition:          IF room/suite designed for occupant load >60 persons
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_103:
  Subject:            Care/Detention Exit Door — No Special Knowledge Required to Open
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Doors providing access to exit from patient/resident rooms in care/detention occupancy must be readily opened without keys, special devices, or specialized knowledge
  Unit:               N/A
  Building Type:      Care / Detention
  Section Reference:  OFC 2.7.2.2(1)(iii)
  Condition:          IF door provides access to exit in care/detention occupancy
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_104:
  Subject:            Exit Sign — Clearly Visible and Clean
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Required exit signs clearly visible and maintained in clean and legible condition
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.7.3.1
  Condition:          Always
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_105:
  Subject:            Exit Sign — Illuminated While Building is Occupied
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Illuminated (internally or externally) while building is occupied
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 2.7.3.2
  Condition:          IF building is occupied
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_106:
  Subject:            Emergency Lighting — Pilot Light Check Frequency
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              Monthly
  Unit:               per month
  Building Type:      All (with emergency lighting unit equipment)
  Section Reference:  OFC 2.7.3.3(1)
  Condition:          IF emergency lighting unit equipment is installed
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_107:
  Subject:            Emergency Lighting — Monthly Battery/Terminal Inspection
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              Monthly (terminal connections, clamps, electrolyte, battery surface)
  Unit:               per month
  Building Type:      All (with emergency lighting unit equipment)
  Section Reference:  OFC 2.7.3.3(2)
  Condition:          IF emergency lighting unit equipment with battery is installed
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_108:
  Subject:            Emergency Lighting — Monthly Function Test (Power Failure Simulation)
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              Monthly
  Unit:               per month
  Building Type:      All (with emergency lighting unit equipment)
  Section Reference:  OFC 2.7.3.3(3)(a)
  Condition:          If emergency lighting equipment is installed
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_109:
  Subject:            Emergency Lighting — Annual Duration Test
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              Annual (test for full design duration under simulated power failure)
  Unit:               per year
  Building Type:      All (with emergency lighting unit equipment)
  Section Reference:  OFC 2.7.3.3(3)(b)
  Condition:          If emergency lighting equipment is installed
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_110:
  Subject:            Emergency Lighting — Annual Inspection (Non-Unit-Equipment)
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              12 months
  Unit:               months
  Building Type:      All (with emergency lights)
  Section Reference:  OFC 2.7.3.3(5)
  Condition:          IF emergency lights not covered by battery unit equipment provisions
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

// ============================================================
// SECTION 2.8 — EMERGENCY PLANNING
// ============================================================

RULE_P2_111:
  Subject:            Fire Safety Plan — Required: Assembly / Care / Detention
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Fire safety plan required
  Unit:               N/A
  Building Type:      Assembly / Care / Detention
  Section Reference:  OFC 2.8.1.1(1)(a)
  Condition:          IF building contains assembly occupancy OR care or detention occupancy
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_112:
  Subject:            Fire Safety Plan — Required: Residential (Occupant Load >10)
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Fire safety plan required when occupant load exceeds 10
  Unit:               persons
  Building Type:      Residential
  Section Reference:  OFC 2.8.1.1(1)(b)
  Condition:          IF residential occupancy with occupant load >10
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_113:
  Subject:            Fire Safety Plan — Required: Business/Mercantile (Occupant Load >300)
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Fire safety plan required when occupant load exceeds 300
  Unit:               persons
  Building Type:      Business / Mercantile
  Section Reference:  OFC 2.8.1.1(1)(c)(d)
  Condition:          IF business/personal services or mercantile occupancy with occupant load >300
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_114:
  Subject:            Fire Safety Plan — Required: High Hazard Industrial (Occupant Load >25)
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Fire safety plan required when occupant load exceeds 25
  Unit:               persons
  Building Type:      High Hazard Industrial
  Section Reference:  OFC 2.8.1.1(1)(e)
  Condition:          IF high hazard industrial occupancy with occupant load >25
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_115:
  Subject:            Fire Safety Plan — Required: Medium Hazard Industrial (Occupant Load >100)
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Fire safety plan required when occupant load exceeds 100
  Unit:               persons
  Building Type:      Medium Hazard Industrial
  Section Reference:  OFC 2.8.1.1(1)(f)
  Condition:          IF medium hazard industrial occupancy with occupant load >100
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_116:
  Subject:            Fire Safety Plan — Required: Low Hazard Industrial (Occupant Load >300)
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Fire safety plan required when occupant load exceeds 300
  Unit:               persons
  Building Type:      Low Hazard Industrial
  Section Reference:  OFC 2.8.1.1(1)(g)
  Condition:          IF low hazard industrial occupancy with occupant load >300
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_117:
  Subject:            Fire Safety Plan — Required: 4+ Storeys
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Fire safety plan required regardless of occupancy
  Unit:               storeys
  Building Type:      All
  Section Reference:  OFC 2.8.1.1(2)(a)
  Condition:          IF building contains 4 or more storeys including storeys below grade
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_118:
  Subject:            Fire Safety Plan — Required: Convalescent/Children's Custodial Home (>3 persons sleeping)
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Fire safety plan required
  Unit:               persons
  Building Type:      Convalescent / Children's Custodial Home
  Section Reference:  OFC 2.8.1.1(2)(g)
  Condition:          IF used as convalescent home or children's custodial home with sleeping accommodation for >3 persons
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_119:
  Subject:            Fire Safety Plan — Contents (9 Required Elements)
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Must include: (a) emergency procedures [alarm, FD notification, occupant instruction, evacuation, elevator use, fire control], (b) supervisory staff appointment, (c) staff training, (d) fire system diagrams/locations, (e) fire drills, (f) fire hazard control, (g) building facility maintenance, (h) shutdown alternative measures
  Unit:               N/A
  Building Type:      All (where fire safety plan required)
  Section Reference:  OFC 2.8.2.1(1)
  Condition:          IF fire safety plan is required
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_120:
  Subject:            Fire Safety Plan — Annual Review Maximum Interval
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              12 months
  Unit:               months
  Building Type:      All (where fire safety plan required)
  Section Reference:  OFC 2.8.2.1(4)
  Condition:          IF fire safety plan is in place
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_121:
  Subject:            Fire Safety Plan — Stored in Building in Approved Location
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Kept in the building in an approved location
  Unit:               N/A
  Building Type:      All (where required)
  Section Reference:  OFC 2.8.2.1(3)
  Condition:          IF fire safety plan is required
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_122:
  Subject:            Supervisory Staff — Must be Available in Care/Detention Occupancies
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Sufficient supervisory staff available to carry out duties as required in fire safety plan
  Unit:               N/A
  Building Type:      Care / Detention
  Section Reference:  OFC 2.8.2.2(1)
  Condition:          Always
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_123:
  Subject:            Hotel — Supervisory Staff On Duty (>3 Storeys or >4000 m²)
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Supervisory staff on duty whenever building is occupied (buildings >3 storeys OR total area >4000 m²)
  Unit:               storeys / m²
  Building Type:      Hotel
  Section Reference:  OFC 2.8.2.2(2)(b)
  Condition:          IF hotel establishment with building height >3 storeys OR total area >4000 m²
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_124:
  Subject:            High-Rise Fire Safety Plan — Additional Requirements
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Must additionally include: (a) voice communication system instruction, (b) smoke control/fire emergency system action until FD arrives, (c) FD access procedures, (d) fire emergency system operation instructions
  Unit:               N/A
  Building Type:      High-Rise (OBC Div B Subsection 3.2.6)
  Section Reference:  OFC 2.8.2.3(1)
  Condition:          IF building is within scope of OBC Division B Subsection 3.2.6
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_125:
  Subject:            Fire Drill Records — Kept for 12 Months
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Records kept for 12 months after each fire drill
  Unit:               months
  Building Type:      All (where fire drills required)
  Section Reference:  OFC 2.8.3.2(3)
  Condition:          Always
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_126:
  Subject:            Fire Drill Frequency — General (Supervisory Staff)
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              Once per 12-month period
  Unit:               per year
  Building Type:      All (where fire safety plan required)
  Section Reference:  OFC 2.8.3.2(1)
  Condition:          Default for all applicable buildings
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_127:
  Subject:            Fire Drill Frequency — Day Care / Developmental Services / Care / Detention
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              Monthly
  Unit:               per month
  Building Type:      Day Care / Developmental Services / Care / Detention
  Section Reference:  OFC 2.8.3.2(1)(a)
  Condition:          IF day care centre, developmental services facility, or care/detention occupancy
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both
  Supersedes:         [RULE_P2_126]

RULE_P2_128:
  Subject:            Fire Drill Frequency — Schools (Total Evacuation)
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              3 times per fall term AND 3 times per spring term (total evacuation drills)
  Unit:               per school term
  Building Type:      Schools (Children)
  Section Reference:  OFC 2.8.3.2(1)(b)
  Condition:          IF school attended by children
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both
  Supersedes:         [RULE_P2_126]

RULE_P2_129:
  Subject:            Fire Drill Frequency — High-Rise Buildings
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              Every 3 months (quarterly)
  Unit:               per quarter
  Building Type:      High-Rise (OBC Div B Subsection 3.2.6)
  Section Reference:  OFC 2.8.3.2(1)(c)
  Condition:          IF building is within scope of OBC Division B Subsection 3.2.6
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both
  Supersedes:         [RULE_P2_126]

RULE_P2_130:
  Subject:            Hotel Fire Drill — All Employees Annually
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              Every employee participates at least once per 12-month period
  Unit:               per year
  Building Type:      Hotel
  Section Reference:  OFC 2.8.3.2(2)
  Condition:          IF hotel establishment
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

// ============================================================
// SECTION 2.9 — TENTS AND AIR-SUPPORTED STRUCTURES
// ============================================================

RULE_P2_131:
  Subject:            Tents — Exemption for Small Non-Commercial Tents
  Context Location:   Ontario
  Constraint Type:    Exempt
  Value:              Section 2.9 does not apply to tents ≤30 m² used for camping, personal, or other non-commercial uses
  Unit:               m²
  Building Type:      Tent
  Section Reference:  OFC 2.9.1.2
  Condition:          IF tent area ≤30 m² AND non-commercial use
  Severity:           N/A
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_132:
  Subject:            Tent Materials — Flameproofing Renewal
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Renewed as often as necessary to pass NFPA 705 match flame test
  Unit:               N/A
  Building Type:      Tent / Air-Supported Structure
  Section Reference:  OFC 2.9.2.1
  Condition:          IF flameproofing has been applied
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_133:
  Subject:            Tents — Combustible Materials Prohibited (Assembly Use)
  Context Location:   Ontario
  Constraint Type:    Prohibited
  Value:              Hay, straw, shavings or similar combustible materials (other than for daily animal care) shall NOT be permitted in tent/air-supported structure used for assembly occupancy (sawdust/shavings permitted if kept damp)
  Unit:               N/A
  Building Type:      Tent (Assembly Occupancy)
  Section Reference:  OFC 2.9.3.1
  Condition:          IF tent/air-supported structure is used for assembly occupancy
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_134:
  Subject:            Tents — Smoking/Open Flames Prohibited Without Fire Safety Plan Provisions
  Context Location:   Ontario
  Constraint Type:    Prohibited
  Value:              Smoking and open flame devices not permitted in tent/air-supported structure unless provisions made in fire safety plan
  Unit:               N/A
  Building Type:      Tent / Air-Supported Structure
  Section Reference:  OFC 2.9.3.2
  Condition:          Unless fire safety plan makes provisions
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

// ============================================================
// SECTION 2.10 — DAY CARE CENTRES
// ============================================================

RULE_P2_135:
  Subject:            Day Care — Combustible Artwork on Walls Maximum
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              20% of wall area
  Unit:               % of wall area
  Building Type:      Day Care Centre
  Section Reference:  OFC 2.10.2.1
  Condition:          IF building is a day care centre for children
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_136:
  Subject:            Day Care — Waste Receptacles Noncombustible
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Waste receptacles shall be made of noncombustible materials
  Unit:               N/A
  Building Type:      Day Care Centre
  Section Reference:  OFC 2.10.2.2
  Condition:          Always
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_137:
  Subject:            Day Care — Staffing Ratio (1 Awake Staff per Floor)
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              At least 1 member of staff awake per floor at all times when children are present
  Unit:               staff per floor
  Building Type:      Day Care Centre
  Section Reference:  OFC 2.10.3.1
  Condition:          IF children are present in day care centre
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

// ============================================================
// SECTION 2.13 — INSTALLATION OF SMOKE ALARMS
// ============================================================

RULE_P2_138:
  Subject:            Smoke Alarm — Required in Every Dwelling Unit
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Smoke alarm required in every dwelling unit; conforms to CAN/ULC-S531-02 or CAN/ULC-S531-1978
  Unit:               N/A
  Building Type:      Residential (Dwelling Units)
  Section Reference:  OFC 2.13.1.1, 2.13.2.1
  Condition:          Always
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_139:
  Subject:            Smoke Alarm — Near Each Sleeping Area
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Installed on or near the ceiling outside each sleeping area in the immediate vicinity of sleeping rooms
  Unit:               N/A
  Building Type:      Residential (Dwelling Units)
  Section Reference:  OFC 2.13.2.1
  Condition:          IF dwelling unit has sleeping areas
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

// ============================================================
// SECTION 2.14 — OUTDOOR PUBLIC AMUSEMENT AREAS
// ============================================================

RULE_P2_140:
  Subject:            Outdoor Public Amusement — Emergency Egress Width/Height/Capacity
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Appropriate width, height and capacity for anticipated number of occupants
  Unit:               N/A
  Building Type:      Outdoor Public Amusement Area (enclosed/confined/confusing configuration)
  Section Reference:  OFC 2.14.1.4(1)(a)
  Condition:          IF outdoor public amusement involves enclosed, confined, or confusing configurations
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_141:
  Subject:            Outdoor Public Amusement — Max Travel Distance to Emergency Egress
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              15 m from any point within the amusement area
  Unit:               m
  Building Type:      Outdoor Public Amusement Area
  Section Reference:  OFC 2.14.1.4(1)(b)
  Condition:          Unless otherwise approved
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_142:
  Subject:            Outdoor Public Amusement — Egress Points Identified with Signs
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Emergency egress points clearly identified with signs
  Unit:               N/A
  Building Type:      Outdoor Public Amusement Area
  Section Reference:  OFC 2.14.1.4(1)(c)
  Condition:          Always
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_143:
  Subject:            Outdoor Public Amusement — Emergency Lighting Level
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              10 lux at floor/pathway level for duration of at least 30 minutes
  Unit:               lux / minutes
  Building Type:      Outdoor Public Amusement Area
  Section Reference:  OFC 2.14.1.4(1)(d)
  Condition:          IF natural lighting is not sufficient
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P2_144:
  Subject:            Outdoor Public Amusement — Fire Safety Procedures Required
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Written fire safety procedures required including: (a) alerting persons and notifying FD, (b) evacuation of endangered persons, (c) appointment of supervisory staff for fire safety duties, (d) fire prevention and hazard control
  Unit:               N/A
  Building Type:      Outdoor Public Amusement Area
  Section Reference:  OFC 2.14.1.5(1)
  Condition:          Always
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

// ============================================================
// PART 3 — INDUSTRIAL AND COMMERCIAL USES
// (Selected high-impact rules)
// ============================================================

RULE_P3_001:
  Subject:            Tire Storage Area >250 m² — Automatic Fire Extinguishing System
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Automatic fire extinguishing system per NFPA 13
  Unit:               m²
  Building Type:      Industrial / Commercial (Tire Storage)
  Section Reference:  OFC 3.3.1.8(1)
  Condition:          IF floor area of tire storage location exceeds 250 m²
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P3_002:
  Subject:            Tire Storage — Portable Extinguisher Spacing (Multi-Purpose Dry Chemical 4A:80B)
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              1 extinguisher per 500 m² AND max travel distance 25 m
  Unit:               m² / m
  Building Type:      Industrial / Commercial (Tire Storage)
  Section Reference:  OFC 3.3.1.10
  Condition:          IF indoor tire storage is present
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P3_003:
  Subject:            Chip Pile Storage — Maximum Dimensions
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              Height: 18 m; Width: 90 m; Length: 150 m (unless temporary water pipes with hose connections on top)
  Unit:               m
  Building Type:      Industrial (Wood/Chip Storage)
  Section Reference:  OFC 3.2.3.5
  Condition:          IF outdoor chip pile storage
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P3_004:
  Subject:            Chip Pile — Fire Department Access Space (Combustible Stock)
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              Space = twice pile height (from combustible stock or buildings); pile height (from noncombustible buildings/equipment); minimum 9 m in all cases
  Unit:               m
  Building Type:      Industrial (Wood/Chip Storage)
  Section Reference:  OFC 3.2.3.6
  Condition:          IF chip pile storage area present
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P3_005:
  Subject:            Chip Pile — Fire Department Gates Minimum Width
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              3.5 m clear width
  Unit:               m
  Building Type:      Industrial (Wood/Chip Storage)
  Section Reference:  OFC 3.2.3.7
  Condition:          IF storage areas are fenced or enclosed
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P3_006:
  Subject:            Woodworking — Machine Exhaust System Required
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Every machine producing wood dust, particles, or shavings must have blower and exhaust system per NFPA 91
  Unit:               N/A
  Building Type:      Industrial (Woodworking)
  Section Reference:  OFC 3.2.1.2
  Condition:          IF machine produces wood dust/particles/shavings
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P3_007:
  Subject:            Woodworking — Portable Extinguisher Within 7.5 m of Machines
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              7.5 m travel distance to extinguisher (or garden hose)
  Unit:               m
  Building Type:      Industrial (Woodworking)
  Section Reference:  OFC 3.2.1.5
  Condition:          IF machine produces wood dust/particles/shavings
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P3_008:
  Subject:            Salvage Yard — Roof Storage Prohibited
  Context Location:   Ontario
  Constraint Type:    Prohibited
  Value:              Roof of building in salvage yard shall NOT be used for storage
  Unit:               N/A
  Building Type:      Salvage Yard
  Section Reference:  OFC 3.5.1.1
  Condition:          Always
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P3_009:
  Subject:            Salvage Yard — Pile Separation
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              3 m clear space between piles (kept clear of grass and weeds)
  Unit:               m
  Building Type:      Salvage Yard
  Section Reference:  OFC 3.5.2.2
  Condition:          IF salvage material is piled
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P3_010:
  Subject:            Ammonium Nitrate — Smoking/Open Flames Prohibited
  Context Location:   Ontario
  Constraint Type:    Prohibited
  Value:              Smoking and use of open flames prohibited in buildings storing ammonium nitrate
  Unit:               N/A
  Building Type:      Industrial / Agricultural (Ammonium Nitrate Storage)
  Section Reference:  OFC 3.3.3.9(1)
  Condition:          IF ammonium nitrate is stored
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P3_011:
  Subject:            Ammonium Nitrate Storage — Warning Signs
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Signs with 50 mm high letters indicating ammonium nitrate storage and no smoking prominently displayed near each entrance exterior
  Unit:               mm
  Building Type:      Industrial / Agricultural (Ammonium Nitrate Storage)
  Section Reference:  OFC 3.3.3.9(2)
  Condition:          IF ammonium nitrate is stored
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P3_012:
  Subject:            Industrial Trucks — Trained and Authorized Personnel Only
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Only trained and authorized personnel shall operate industrial trucks, replace/refuel propane, refuel, or change/charge batteries
  Unit:               N/A
  Building Type:      Industrial
  Section Reference:  OFC 3.4.2.3
  Condition:          Always
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P3_013:
  Subject:            Battery Charging — Portable Extinguisher Minimum Rating
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              2A:30B:C
  Unit:               extinguisher rating
  Building Type:      Industrial (Battery Charging)
  Section Reference:  OFC 3.4.2.2(2)
  Condition:          IF battery charging installation for battery-powered industrial trucks
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

// ============================================================
// PART 4 — FLAMMABLE AND COMBUSTIBLE LIQUIDS (Selected Rules)
// ============================================================

RULE_P4_001:
  Subject:            Flammable Liquid Storage — Offices/Schools/Business (Outside Cabinet/Room)
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              10 L total (max 5 L of Class I) per single room
  Unit:               L
  Building Type:      Business / Educational
  Section Reference:  OFC 4.2.6.3(1)(a)
  Condition:          IF stored outside approved storage cabinet or room in business/personal services or educational facility
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P4_002:
  Subject:            Flammable Liquid Storage — In Fire Compartment (45-min separation)
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              250 L total (max 60 L of Class II, max 10 L of Class I) per fire compartment with at least 45-min fire separation
  Unit:               L
  Building Type:      Business / Educational
  Section Reference:  OFC 4.2.6.3(1)(b)
  Condition:          IF fire compartment has at least 45 min fire separation
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P4_003:
  Subject:            Flammable Liquid Storage — Automotive/Industrial Arts in Educational Facility
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              75 L total (max 25 L of Class I) outside a cabinet or room
  Unit:               L
  Building Type:      Educational (Automotive/Industrial Arts)
  Section Reference:  OFC 4.2.6.3(2)
  Condition:          IF automotive shop or industrial arts area in educational facility
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both
  Supersedes:         [RULE_P4_001]

RULE_P4_004:
  Subject:            Laboratory — Maximum Flammable Liquid Container Size
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              5 L per container
  Unit:               L
  Building Type:      Laboratory (Educational / Research / University)
  Section Reference:  OFC 4.12.3.1(1)
  Condition:          IF laboratory setting
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P4_005:
  Subject:            Laboratory — Maximum Flammable Liquid in Open Area
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              300 L total (max 50 L flammable liquids)
  Unit:               L
  Building Type:      Laboratory (Educational / Research / University)
  Section Reference:  OFC 4.12.3.1(2)
  Condition:          IF in open area of laboratory
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P4_006:
  Subject:            Laboratory — Containers Kept Closed When Not in Use
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Containers of flammable/combustible liquids kept closed when not in use
  Unit:               N/A
  Building Type:      Laboratory
  Section Reference:  OFC 4.12.3.1(4)
  Condition:          Always
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P4_007:
  Subject:            Laboratory — Fire Drills Maximum Interval
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              6 months
  Unit:               months
  Building Type:      Laboratory
  Section Reference:  OFC 4.12.4.1(2)
  Condition:          IF building contains a laboratory
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both
  Supersedes:         [RULE_P2_126]

RULE_P4_008:
  Subject:            Laboratory — Written Spill Procedure Required
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Written spill procedure required per OFC 4.1.6.4
  Unit:               N/A
  Building Type:      Laboratory
  Section Reference:  OFC 4.12.5.1
  Condition:          Always
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P4_009:
  Subject:            Laboratory — Power-Ventilated Enclosure for Vapour-Releasing Activities
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Use/handling confined inside power-ventilated enclosure (per OFC 4.12.8.4-5) when: (a) releases flammable vapours possibly explosive, (b) liquid heated to ≥ flash point, or (c) unstable liquids used
  Unit:               N/A
  Building Type:      Laboratory
  Section Reference:  OFC 4.12.8.3
  Condition:          IF vapour-releasing, flash-point-heated, or unstable flammable liquid activities occur
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P4_010:
  Subject:            Outdoor Pump — Minimum Distance from Property Line
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              3 m from property line
  Unit:               m
  Building Type:      All (with aboveground outdoor flammable liquid pumps)
  Section Reference:  OFC 4.4.10.1(1)(a)
  Condition:          IF pump for flammable/combustible liquid piping installed aboveground outdoors
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P4_011:
  Subject:            Outdoor Pump — Minimum Distance from Building Openings
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              1.5 m from building openings
  Unit:               m
  Building Type:      All (with aboveground outdoor flammable liquid pumps)
  Section Reference:  OFC 4.4.10.1(1)(b)
  Condition:          IF pump for flammable/combustible liquid piping installed aboveground outdoors
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

// ============================================================
// PART 6 — FIRE PROTECTION EQUIPMENT
// SECTION 6.2 — PORTABLE FIRE EXTINGUISHERS
// ============================================================

RULE_P6_001:
  Subject:            Portable Extinguisher — Listed Equipment Only (New/Replacement)
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Listed portable extinguishers shall be installed when replacing or adding new extinguishers
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 6.2.1.1
  Condition:          IF replacing or adding extinguishers
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_002:
  Subject:            Portable Extinguisher — Operable and Fully Charged at All Times
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Kept operable and fully charged
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 6.2.1.2
  Condition:          Always
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_003:
  Subject:            Portable Extinguisher — Easily Seen and Accessible
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Located so they are easily seen and accessible at all times
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 6.2.1.3(1)
  Condition:          Always
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_004:
  Subject:            Portable Extinguisher — Located in/Adjacent to Corridors or Aisles to Exits
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Located in or adjacent to corridors or aisles that provide access to exits
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 6.2.1.4
  Condition:          Always
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_005:
  Subject:            Portable Extinguisher Signs — Required in Large/Obstructed Floors
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Location prominently indicated by signs or markings in large floor areas and where visual obstructions cannot be avoided
  Unit:               N/A
  Building Type:      All (large floor areas)
  Section Reference:  OFC 6.2.1.5
  Condition:          IF in large floor area OR visual obstructions exist
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_006:
  Subject:            Portable Extinguisher — Accessible Without Undue Exposure to Operator
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Located near fire hazard but accessible without exposing operator to undue risk
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 6.2.1.6
  Condition:          IF extinguisher is in proximity to a fire hazard
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_007:
  Subject:            Portable Extinguisher — Temperature Range Compatibility
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Must be suitable for temperature range of location; if minimum temp goes below 0°C, use antifreeze-type or dry-type
  Unit:               °C
  Building Type:      All
  Section Reference:  OFC 6.2.1.8
  Condition:          IF location may experience below-freezing temperatures
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_008:
  Subject:            Portable Extinguisher — Operating Instructions Face Outward
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Operating instructions face outward when extinguisher is in cabinet, wall recess, or shelf
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 6.2.4.4
  Condition:          IF extinguisher is located in cabinet, wall recess, or shelf
  Severity:           Minor
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_009:
  Subject:            Portable Extinguisher — Maximum Height (Heavy, >18 kg, No Wheels)
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              1.1 m (top of extinguisher above floor)
  Unit:               m
  Building Type:      All
  Section Reference:  OFC 6.2.4.2
  Condition:          IF extinguisher gross weight >18 kg AND not equipped with wheels
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_010:
  Subject:            Portable Extinguisher — Maximum Height (Light, ≤18 kg)
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              1.5 m (top of extinguisher above floor)
  Unit:               m
  Building Type:      All
  Section Reference:  OFC 6.2.4.3
  Condition:          IF extinguisher gross weight ≤18 kg
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_011:
  Subject:            Extinguisher Coverage — Class A (Light Hazard, 2A rating)
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              Travel distance 25 m; coverage 600 m² per extinguisher
  Unit:               m / m²
  Building Type:      Light Hazard (Offices, Churchrooms, Schools, Assembly Halls)
  Section Reference:  OFC Table 6.2.6.A (2A row, Light Hazard)
  Condition:          IF Class A fire hazard; light hazard occupancy; 2A extinguisher
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_012:
  Subject:            Extinguisher Coverage — Class A (Ordinary Hazard, 2A rating)
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              Travel distance 25 m; coverage 300 m² per extinguisher
  Unit:               m / m²
  Building Type:      Ordinary Hazard (Mercantile, Display Rooms, Parking Garages, Light Manufacturing)
  Section Reference:  OFC Table 6.2.6.A (2A row, Ordinary Hazard)
  Condition:          IF Class A fire hazard; ordinary hazard occupancy; 2A extinguisher
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_013:
  Subject:            Extinguisher Travel Distance — Class B (Light Hazard, 5B rating)
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              9 m
  Unit:               m
  Building Type:      Light Hazard
  Section Reference:  OFC Table 6.2.6.B
  Condition:          IF Class B hazard; light hazard occupancy; 5B extinguisher
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_014:
  Subject:            Extinguisher Travel Distance — Class B (Light Hazard, 10B rating)
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              15 m
  Unit:               m
  Building Type:      Light Hazard
  Section Reference:  OFC Table 6.2.6.B
  Condition:          IF Class B hazard; light hazard occupancy; 10B extinguisher
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_015:
  Subject:            Extinguisher Travel Distance — Class B (Ordinary Hazard, 10B rating)
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              9 m
  Unit:               m
  Building Type:      Ordinary Hazard
  Section Reference:  OFC Table 6.2.6.B
  Condition:          IF Class B hazard; ordinary hazard occupancy; 10B extinguisher
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_016:
  Subject:            Extinguisher Travel Distance — Class B (Ordinary Hazard, 20B rating)
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              15 m
  Unit:               m
  Building Type:      Ordinary Hazard
  Section Reference:  OFC Table 6.2.6.B
  Condition:          IF Class B hazard; ordinary hazard occupancy; 20B extinguisher
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_017:
  Subject:            Extinguisher Travel Distance — Class B (Extra Hazard, 20B rating)
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              9 m
  Unit:               m
  Building Type:      Extra Hazard (Woodworking, Auto Repair, Aircraft Servicing)
  Section Reference:  OFC Table 6.2.6.B
  Condition:          IF Class B hazard; extra hazard occupancy; 20B extinguisher
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_018:
  Subject:            Extinguisher Travel Distance — Class B (Extra Hazard, 40B rating)
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              15 m
  Unit:               m
  Building Type:      Extra Hazard
  Section Reference:  OFC Table 6.2.6.B
  Condition:          IF Class B hazard; extra hazard occupancy; 40B extinguisher
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_019:
  Subject:            Extinguisher — Flammable Liquid Open Container (>6 mm depth) Travel Distance
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              15 m
  Unit:               m
  Building Type:      All (with flammable/combustible liquid open containers)
  Section Reference:  OFC 6.2.6.9(3)
  Condition:          IF flammable/combustible liquid stored in open containers >6 mm depth
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_020:
  Subject:            Extinguisher — Open Container >0.4 m² Surface Area Requires Supplementary Protection
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Fixed fire protection must be supplemented by extinguisher per 6.2.6.9 when liquid surface area exceeds 0.4 m²
  Unit:               m²
  Building Type:      All
  Section Reference:  OFC 6.2.6.11
  Condition:          IF flammable/combustible liquid stored in open container AND surface area >0.4 m²
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_021:
  Subject:            Extinguisher — Commercial Cooking Equipment (Wet Chemical or Alkali-Based Dry Chemical)
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Wet chemical or alkali-based dry chemical portable extinguisher required
  Unit:               N/A
  Building Type:      Commercial / Institutional (with cooking equipment)
  Section Reference:  OFC 6.2.6.12
  Condition:          IF commercial cooking equipment is present
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_022:
  Subject:            Extinguisher — Hose Stations May Replace Up to Half of Required Extinguishers
  Context Location:   Ontario
  Constraint Type:    Maximum Substitution
  Value:              Up to 50% of required Class A extinguishers may be replaced by hose stations
  Unit:               % of required extinguishers
  Building Type:      All
  Section Reference:  OFC 6.2.6.6
  Condition:          IF hose stations are available
  Severity:           Minor
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_023:
  Subject:            Extinguisher Inspection — Annual Maintenance
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Portable extinguishers examined and maintained annually per NFPA 10 by qualified person
  Unit:               per year
  Building Type:      All
  Section Reference:  OFC 6.2.7.1
  Condition:          Always
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_024:
  Subject:            Extinguisher Maintenance Record — Permanent Record Required
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Permanent record: maintenance date, examiner name, description of maintenance/hydrostatic testing for each extinguisher
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 6.2.7.5
  Condition:          Always
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_025:
  Subject:            Extinguisher — Recharged After Use
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Replaced and recharged after use per nameplate instructions
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 6.2.7.6
  Condition:          IF extinguisher has been used
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

// ============================================================
// SECTION 6.3 — FIRE ALARM SYSTEMS
// ============================================================

RULE_P6_026:
  Subject:            Fire Alarm System — Access to Components Unobstructed
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Access to fire alarm and voice communication system components requiring inspection/servicing kept unobstructed
  Unit:               N/A
  Building Type:      All (with fire alarm system)
  Section Reference:  OFC 6.3.1.1
  Condition:          Always
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_027:
  Subject:            Fire Alarm System — Monitoring Required (Where Mandated)
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Continuous connection to fire signal receiving centre per CAN/ULC-S561 where monitoring is required by OBC or OFC
  Unit:               N/A
  Building Type:      All (where monitoring is required)
  Section Reference:  OFC 6.3.1.2(1)
  Condition:          IF fire alarm system monitoring is required
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_028:
  Subject:            Fire Alarm Disconnect Switch — Locked/Secured
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Disconnect switches for power supplies serving only fire alarm systems or interconnected smoke alarms shall be in locked secure area or otherwise secured in approved manner
  Unit:               N/A
  Building Type:      All (with fire alarm system)
  Section Reference:  OFC 6.3.1.6
  Condition:          Always
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_029:
  Subject:            Fire Alarm System — Annual Inspection and Test per CAN/ULC-S536
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Annually per CAN/ULC-S536 "Inspection and Testing of Fire Alarm Systems"
  Unit:               per year
  Building Type:      All (with fire alarm system)
  Section Reference:  OFC 6.3.2.2(1)
  Condition:          IF fire alarm system is installed
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_030:
  Subject:            Interconnected Smoke Alarm — Power Supply Check
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              Weekly
  Unit:               per week
  Building Type:      All (with interconnected smoke alarms)
  Section Reference:  OFC 6.3.2.6(3)
  Condition:          IF interconnected smoke alarm system is installed
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_031:
  Subject:            Interconnected Smoke Alarm — Monthly Operability Test (Rotational)
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              Monthly (at least one alarm tested by test function on rotational basis)
  Unit:               per month
  Building Type:      All (with interconnected smoke alarms)
  Section Reference:  OFC 6.3.2.6(4)
  Condition:          IF interconnected smoke alarm system is installed
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_032:
  Subject:            Interconnected Smoke Alarm — Annual Manual Pull Station Test
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              Annual (where manual pull station installed, tested to ensure activation of interconnected alarms)
  Unit:               per year
  Building Type:      All (with interconnected smoke alarms and manual pull station)
  Section Reference:  OFC 6.3.2.6(5)
  Condition:          IF manual pull station is installed for interconnected smoke alarm system
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_033:
  Subject:            Interconnected Smoke Alarm — Written Power Supply Check Records
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Written records of weekly power supply checks kept for at least 6 months and available upon request to Chief Fire Official
  Unit:               months
  Building Type:      All (with interconnected smoke alarms)
  Section Reference:  OFC 6.3.2.6(6)
  Condition:          Always
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_034:
  Subject:            Smoke Alarm Maintenance — Owner Responsibility
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Owner (landlord in rental units) must maintain smoke alarms in operating condition
  Unit:               N/A
  Building Type:      Residential
  Section Reference:  OFC 6.3.3.2(1)(2)
  Condition:          Always
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

// ============================================================
// SECTION 6.4 — STANDPIPE AND HOSE SYSTEMS
// ============================================================

RULE_P6_035:
  Subject:            Standpipe Fire Dept Connections — Plugs/Caps Required
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Equipped with plugs or caps secured wrench-tight when not in use or being inspected
  Unit:               N/A
  Building Type:      All (with standpipe system)
  Section Reference:  OFC 6.4.1.3(1)
  Condition:          When not in use or being inspected
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_036:
  Subject:            Standpipe FD Connections — Annual Cap Inspection
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Plugs/caps removed annually; connections inspected for wear, rust, obstruction; corrective action taken
  Unit:               per year
  Building Type:      All (with standpipe system)
  Section Reference:  OFC 6.4.1.3(2)
  Condition:          Always
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_037:
  Subject:            Hose Station — Monthly Inspection
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              Monthly (hose in proper position, all equipment in place and operable)
  Unit:               per month
  Building Type:      All (with standpipe and hose system)
  Section Reference:  OFC 6.4.2.1
  Condition:          IF standpipe and hose system is installed
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_038:
  Subject:            Standpipe Hydrostatic Test Pressure
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              1400 kPa (gauge) for 2 hours (or 350 kPa above normal hydrostatic pressure if normal >1050 kPa)
  Unit:               kPa / hours
  Building Type:      All (with standpipe system)
  Section Reference:  OFC 6.4.3.2
  Condition:          IF standpipe system modified, extended, or restored after >1 year disuse
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_039:
  Subject:            Underground Mains Hydrostatic Test
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              350 kPa above maximum hydrostatic pressure in service (minimum 1400 kPa) for 2 hours
  Unit:               kPa / hours
  Building Type:      All (with underground mains)
  Section Reference:  OFC 6.4.3.4(1)
  Condition:          IF underground mains are tested
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_040:
  Subject:            Underground Mains Leakage Allowance (Rubber Gasketted Joints)
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              2 L/h per 100 joints
  Unit:               L/h per 100 joints
  Building Type:      All (with rubber gasketted joint underground mains)
  Section Reference:  OFC 6.4.3.4(2)
  Condition:          IF rubber gasketted joints used
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

// ============================================================
// SECTION 6.5 — SPRINKLER SYSTEMS
// ============================================================

RULE_P6_041:
  Subject:            Sprinkler System — No Storage of Combustibles Within 600 mm Below Head
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              600 mm clearance below sprinkler heads
  Unit:               mm
  Building Type:      All (with sprinkler system)
  Section Reference:  OFC 6.5.1.4
  Condition:          Always
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_042:
  Subject:            Sprinkler System — Not Used to Support Anything Interfering with Performance
  Context Location:   Ontario
  Constraint Type:    Prohibited
  Value:              Sprinkler systems shall NOT be used to support anything that will interfere with effective performance
  Unit:               N/A
  Building Type:      All (with sprinkler system)
  Section Reference:  OFC 6.5.1.5(2)
  Condition:          Always
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_043:
  Subject:            Sprinkler System Repair — Hydrostatic Test Required
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              1400 kPa (gauge) for 2 hours (or 350 kPa above max static pressure) — no pressure loss
  Unit:               kPa / hours
  Building Type:      All (with sprinkler system)
  Section Reference:  OFC 6.5.1.6(2)
  Condition:          IF alterations or repairs made to feed mains, cross mains, or risers
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_044:
  Subject:            Sprinkler Shutdown Notification to Chief Fire Official
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              24 hours before shutdown without notifying Chief Fire Official
  Unit:               hours
  Building Type:      All (with sprinkler system)
  Section Reference:  OFC 6.5.2.2(1)
  Condition:          IF sprinkler control valves or water supplies shut down
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_045:
  Subject:            Sprinkler Alarm Test — Monthly
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              Monthly (alarm tested by flowing water through test connection at sprinkler valve)
  Unit:               per month
  Building Type:      All (with sprinkler system)
  Section Reference:  OFC 6.5.5.2(1)
  Condition:          IF sprinkler system is installed
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_046:
  Subject:            Sprinkler Transmitters and Water Flow Devices — Bi-Monthly Test
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              Every 2 months
  Unit:               per 2 months
  Building Type:      All (with sprinkler system)
  Section Reference:  OFC 6.5.5.3(2)
  Condition:          IF transmitters and water-flow-actuated devices are installed
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_047:
  Subject:            Sprinkler Supervisory Devices — Semi-Annual Test
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              Every 6 months (valve supervisory switches, tank water level devices, temperature supervisory devices)
  Unit:               per 6 months
  Building Type:      All (with sprinkler system)
  Section Reference:  OFC 6.5.5.3(3)
  Condition:          IF supervisory devices are installed
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_048:
  Subject:            Dry-Pipe Sprinkler — 15-Year Obstruction Inspection
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              Every 15 years (inspect for obstructions; flush if necessary)
  Unit:               years
  Building Type:      All (with dry-pipe sprinkler system)
  Section Reference:  OFC 6.5.4.2
  Condition:          IF dry-pipe sprinkler system installed
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_049:
  Subject:            Dry-Pipe Priming Water Level — Quarterly Inspection
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              Every 3 months
  Unit:               per quarter
  Building Type:      All (with dry-pipe sprinkler system)
  Section Reference:  OFC 6.5.4.3
  Condition:          IF dry-pipe system is installed
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_050:
  Subject:            Sprinkler Control Valves — Accessible and Operable at All Times
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Accessible and maintained in operable condition at all times
  Unit:               N/A
  Building Type:      All (with sprinkler system)
  Section Reference:  OFC 6.5.6.2
  Condition:          Always
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_051:
  Subject:            Sprinkler Guards — Required Where Mechanical Damage Possible
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Sprinklers protected by sprinkler guards where possibility of mechanical damage exists
  Unit:               N/A
  Building Type:      All (with sprinkler system, subject to mechanical damage)
  Section Reference:  OFC 6.5.6.1
  Condition:          IF possibility of mechanical damage to sprinkler heads exists
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_052:
  Subject:            Spare Sprinkler Heads — Cabinet Max Temperature
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              38°C
  Unit:               °C
  Building Type:      All (with sprinkler system)
  Section Reference:  OFC 6.5.6.5(2)
  Condition:          If spare sprinkler head cabinet is present
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_053:
  Subject:            Spare Sprinkler Heads — Minimum Stock (≤300 sprinklers)
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              6 spare heads
  Unit:               units
  Building Type:      All (with ≤300 sprinkler installation)
  Section Reference:  OFC 6.5.6.5(3)(a)
  Condition:          IF sprinkler installation contains ≤300 sprinklers
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_054:
  Subject:            Spare Sprinkler Heads — Minimum Stock (301–1000 sprinklers)
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              12 spare heads
  Unit:               units
  Building Type:      All (with 301–1000 sprinkler installation)
  Section Reference:  OFC 6.5.6.5(3)(b)
  Condition:          IF sprinkler installation contains 301–1000 sprinklers
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_055:
  Subject:            Spare Sprinkler Heads — Minimum Stock (>1000 sprinklers)
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              24 spare heads
  Unit:               units
  Building Type:      All (with >1000 sprinkler installation)
  Section Reference:  OFC 6.5.6.5(3)(c)
  Condition:          IF sprinkler installation contains >1000 sprinklers
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

// ============================================================
// SECTION 6.6 — WATER SUPPLIES FOR FIRE PROTECTION
// ============================================================

RULE_P6_056:
  Subject:            Water Supply Tanks — Annual Inspection
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Annual inspection of tanks, tank supporting structures, water supply systems including piping, control valves, check valves, heating systems, mercury gauges, and expansion joints
  Unit:               per year
  Building Type:      All (with fire protection water tanks)
  Section Reference:  OFC 6.6.2.1
  Condition:          Always
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_057:
  Subject:            Tank Heating Equipment — Daily Check in Freezing Weather
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Checked daily during freezing weather
  Unit:               per day (during freezing weather)
  Building Type:      All (with fire protection water tanks)
  Section Reference:  OFC 6.6.2.2
  Condition:          IF freezing weather conditions exist
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_058:
  Subject:            Pressure Tanks — Weekly Check
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              Weekly (water level and air pressure checked; corrective action taken if outside designed operating range)
  Unit:               per week
  Building Type:      All (with pressure tanks for fire protection)
  Section Reference:  OFC 6.6.2.12(1)(2)
  Condition:          IF pressure tank is installed
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_059:
  Subject:            Fire Pump Reservoir — Weekly Water Level Check
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              Weekly
  Unit:               per week
  Building Type:      All (with fire pump reservoir)
  Section Reference:  OFC 6.6.3.1
  Condition:          If fire pump reservoir installed
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_060:
  Subject:            Pump Room Temperature — Daily Check in Freezing Weather
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Checked daily during freezing weather
  Unit:               per day (during freezing weather)
  Building Type:      All (with pump room)
  Section Reference:  OFC 6.6.3.2
  Condition:          IF freezing weather conditions exist
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_061:
  Subject:            Fire Pump — Weekly Operation at Rated Speed
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              Once per week at rated speed
  Unit:               per week
  Building Type:      All (with fire pump, except hotels)
  Section Reference:  OFC 6.6.3.3(1)
  Condition:          IF fire pump installed (standard; hotels may use monthly interval)
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_062:
  Subject:            Fire Pump — Hotel Operation Interval (Exception)
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              Once per month
  Unit:               per month
  Building Type:      Hotel
  Section Reference:  OFC 6.6.3.6
  Condition:          IF hotel building
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both
  Supersedes:         [RULE_P6_061]

RULE_P6_063:
  Subject:            Internal Combustion Engine Fire Pump — Weekly Inspection
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              Weekly (storage batteries, lubrication systems, oil, fuel supplies)
  Unit:               per week
  Building Type:      All (with internal combustion engine fire pump)
  Section Reference:  OFC 6.6.3.4(2)
  Condition:          IF internal combustion engine fire pump installed
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_064:
  Subject:            Fire Pump — Annual Flow Test at Full Rated Capacity
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Annually at full rated capacity
  Unit:               per year
  Building Type:      All (with fire pump)
  Section Reference:  OFC 6.6.3.5
  Condition:          Always
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_065:
  Subject:            Hydrant Annual Flow Inspection
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Annually (main valve fully opened; water flow checked)
  Unit:               per year
  Building Type:      All (with on-site hydrants)
  Section Reference:  OFC 6.6.5.6, 6.6.5.7
  Condition:          IF hydrant is present
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_066:
  Subject:            Hydrant Colour Coding
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Hydrants colour-coded per NFPA 291 "Recommended Practice for Fire Flow Testing and Marking of Hydrants"
  Unit:               N/A
  Building Type:      All (with on-site hydrants)
  Section Reference:  OFC 6.6.6.1
  Condition:          Always
  Severity:           Minor
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

// ============================================================
// SECTION 6.7 — EMERGENCY POWER SYSTEMS
// ============================================================

RULE_P6_067:
  Subject:            Emergency Power System — Maintenance per CSA-C282
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Inspected, tested and maintained per CSA-C282 "Emergency Electrical Power Supply for Buildings" (hospitals use CSA-Z32)
  Unit:               N/A
  Building Type:      All (with emergency power system)
  Section Reference:  OFC 6.7.1.1(1)(2)
  Condition:          Always
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

RULE_P6_068:
  Subject:            Emergency Power System Shutdown — Supervisory Staff Notification Required
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Supervisory staff notified per Section 2.8 when emergency power system or any part thereof is shut down
  Unit:               N/A
  Building Type:      All (with emergency power system)
  Section Reference:  OFC 6.7.1.1(3)
  Condition:          IF emergency power system is shut down
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Both

// ============================================================
// PART 8 — DEMOLITION (Selected Rules)
// ============================================================

RULE_P8_001:
  Subject:            Demolition — Two Exits Accessible and Usable at All Times
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              At least two exits accessible and usable at all times
  Unit:               exits
  Building Type:      Building Under Demolition
  Section Reference:  OFC 8.1.2.12
  Condition:          Unless otherwise approved
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Existing

RULE_P8_002:
  Subject:            Demolition — Portable Extinguisher on Moveable Equipment
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              2A:10B:C on moveable equipment; 4A:40B:C in all other locations
  Unit:               extinguisher rating
  Building Type:      Building Under Demolition
  Section Reference:  OFC 8.1.2.8(3)
  Condition:          IF building is under demolition
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Existing

RULE_P8_003:
  Subject:            Demolition — Combustible Waste No Accumulation
  Context Location:   Ontario
  Constraint Type:    Prohibited
  Value:              Combustible salvage, waste material, and rubbish shall not accumulate on site to create fire hazard
  Unit:               N/A
  Building Type:      Building Under Demolition / Demolition Site
  Section Reference:  OFC 8.1.2.3(1)
  Condition:          Always during demolition
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Existing

RULE_P8_004:
  Subject:            Demolition — Standpipe System Maintained (Floor-by-Floor)
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Standpipe system maintained in operable condition on all storeys below the one being demolished (except immediate below storey)
  Unit:               N/A
  Building Type:      Building Under Demolition (with standpipe system)
  Section Reference:  OFC 8.1.2.6(1)
  Condition:          IF building is equipped with standpipe system
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Existing

RULE_P8_005:
  Subject:            Demolition — Temporary Standpipe (>8 Storeys, No Existing System)
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Temporary standpipe required in buildings not equipped with standpipe system AND over 8 storeys in building height
  Unit:               storeys
  Building Type:      Building Under Demolition (no standpipe, >8 storeys)
  Section Reference:  OFC 8.1.2.6(3)
  Condition:          IF building under demolition has no standpipe system AND is over 8 storeys
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Existing

RULE_P8_006:
  Subject:            Demolition — Elevating Devices Accessible for Firefighters (>36 m)
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Elevating devices accessible for firefighters use for buildings >36 m in building height (grade to top floor)
  Unit:               m
  Building Type:      Building Under Demolition (>36 m height)
  Section Reference:  OFC 8.1.2.7(4)
  Condition:          IF building height measured from grade to top storey floor exceeds 36 m
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Existing

RULE_P8_007:
  Subject:            Demolition — Engine Exhaust Clearance from Combustibles
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              500 mm (if exhaust discharges directly); 150 mm (if exhaust piped outdoors)
  Unit:               mm
  Building Type:      Demolition Site
  Section Reference:  OFC 8.1.2.10(1)(2)
  Condition:          IF internal combustion engines used on site
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Existing

// ============================================================
// PART 9 — RETROFIT (Existing Buildings)
// ============================================================

RULE_P9_001:
  Subject:            Retrofit — Part 9 Does Not Apply to Buildings Meeting Building Code
  Context Location:   Ontario
  Constraint Type:    Exempt
  Value:              Sections 9.2 to 9.8 do not apply to buildings/parts meeting OBC requirements (Section 9.9 exception applies separately)
  Unit:               N/A
  Building Type:      All
  Section Reference:  OFC 9.1.2.2(1)
  Condition:          IF building satisfies requirements of Building Code
  Severity:           N/A
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Existing

// --- SECTION 9.5 — RESIDENTIAL BUILDINGS ≤6 STOREYS ---

RULE_P9_002:
  Subject:            Retrofit Residential ≤6 Storeys — Each Dwelling Unit Access to Two Directions
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Each dwelling unit or suite must have doorway leading to: (a) outside at/near grade, (b) outside passageway with two directions to separate exits, OR (c) public corridor with two directions to separate exits
  Unit:               N/A
  Building Type:      Residential (Existing, ≤6 Storeys)
  Section Reference:  OFC 9.5.3.1(1)
  Condition:          IF existing residential building ≤6 storeys
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Existing

RULE_P9_003:
  Subject:            Retrofit Residential ≤6 Storeys — Minimum Two Exits per Floor Area
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              2 exits per floor area
  Unit:               exits
  Building Type:      Residential (Existing, ≤6 Storeys)
  Section Reference:  OFC 9.5.3.2(1)
  Condition:          Always (exceptions for small buildings per 9.5.3.2(2)(3))
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Existing

RULE_P9_004:
  Subject:            Retrofit Residential ≤6 Storeys — Single Exit Exception (≤4 DUs, ≤10 persons, ≤3 storeys, ≤600 m²)
  Context Location:   Ontario
  Constraint Type:    Exempt
  Value:              Single exit from basement/first/second floor acceptable if: ≤4 dwelling units, ≤10 persons, ≤3 storeys, ≤600 m² building area
  Unit:               units / persons / storeys / m²
  Building Type:      Residential (Existing, ≤6 Storeys)
  Section Reference:  OFC 9.5.3.2(2)
  Condition:          IF all four conditions are met simultaneously
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Existing
  Supersedes:         [RULE_P9_003]

RULE_P9_005:
  Subject:            Retrofit Residential ≤6 Storeys — Stairway Fire Separation
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              45 min fire-resistance rating (30 min acceptable if ≤3 storeys)
  Unit:               min
  Building Type:      Residential (Existing, ≤6 Storeys)
  Section Reference:  OFC 9.5.3.3(1)(2)
  Condition:          IF existing residential building ≤6 storeys
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Existing

RULE_P9_006:
  Subject:            Retrofit Residential ≤6 Storeys — Stairway Closures with Self-Closing Devices
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Closures in stairway fire separations equipped with self-closing devices
  Unit:               N/A
  Building Type:      Residential (Existing, ≤6 Storeys)
  Section Reference:  OFC 9.5.3.3(3)
  Condition:          If stairway fire separation has closures
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Existing

RULE_P9_007:
  Subject:            Retrofit Residential ≤6 Storeys — Exit Door Swing Direction (>24 Persons or >10 DUs)
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Each exit door (except serving single dwelling unit) opens in direction of exit travel and swings on vertical axis
  Unit:               N/A
  Building Type:      Residential (Existing, ≤6 Storeys)
  Section Reference:  OFC 9.5.3.4
  Condition:          IF occupant load >24 OR more than 10 dwelling units
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Existing

RULE_P9_008:
  Subject:            Retrofit Residential ≤6 Storeys — Exit Sign Requirements
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Exit signs required when exit serves: (a) building >2 storeys, (b) occupant load >150, OR (c) floor area (not single DU) with fire escape as part of egress
  Unit:               storeys / persons
  Building Type:      Residential (Existing, ≤6 Storeys)
  Section Reference:  OFC 9.5.3.5(1)
  Condition:          IF any of the three trigger conditions met
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Existing

RULE_P9_009:
  Subject:            Retrofit Residential ≤6 Storeys — Exit Sign Specifications
  Context Location:   Ontario
  Constraint Type:    Exact
  Value:              "EXIT" or "EXIT/SORTIE" in red letters on contrasting background OR white on red; stroke ≥19 mm wide; letters ≥150 mm high (external illumination) or ≥114 mm high (internal illumination)
  Unit:               mm
  Building Type:      Residential (Existing, ≤6 Storeys)
  Section Reference:  OFC 9.5.3.5(3)
  Condition:          IF exit sign is required
  Severity:           Minor
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Existing

RULE_P9_010:
  Subject:            Retrofit Residential ≤6 Storeys — Interior Finish Flame-Spread ≤150 in Egress
  Context Location:   Ontario
  Constraint Type:    Maximum
  Value:              150 flame-spread rating for interior wall and ceiling finishes within means of egress
  Unit:               flame-spread index
  Building Type:      Residential (Existing, ≤6 Storeys)
  Section Reference:  OFC 9.5.3.6(1)
  Condition:          If within means of egress
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Existing

RULE_P9_011:
  Subject:            Retrofit Residential ≤6 Storeys — Emergency Lighting (>24 Persons or >10 DUs)
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Emergency lighting in exit stairways, public corridors, and other principal access to exits
  Unit:               N/A
  Building Type:      Residential (Existing, ≤6 Storeys)
  Section Reference:  OFC 9.5.3.9(1)
  Condition:          IF occupant load >24 OR more than 10 dwelling units
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Existing

RULE_P9_012:
  Subject:            Retrofit Residential ≤6 Storeys — Emergency Lighting Duration
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              30 minutes duration; separate energy source from primary; automatically actuated on power interruption
  Unit:               minutes
  Building Type:      Residential (Existing, ≤6 Storeys)
  Section Reference:  OFC 9.5.3.9(2)
  Condition:          IF emergency lighting is required
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Existing

RULE_P9_013:
  Subject:            Retrofit Residential ≤6 Storeys — Emergency Lighting Illumination Level
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              10 lux average at floor/tread level OR 1 watt/m² of floor space
  Unit:               lux OR watt/m²
  Building Type:      Residential (Existing, ≤6 Storeys)
  Section Reference:  OFC 9.5.3.9(3)
  Condition:          IF emergency lighting is required
  Severity:           Major
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Existing

RULE_P9_014:
  Subject:            Retrofit Residential ≤6 Storeys — Fire Alarm System Required (>3 Storeys or >10 Sleeping Persons)
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Fire alarm system required where: (a) building >3 storeys, OR (b) sleeping accommodation for >10 persons
  Unit:               storeys / persons
  Building Type:      Residential (Existing, ≤6 Storeys)
  Section Reference:  OFC 9.5.4.1(1)
  Condition:          IF existing residential building ≤6 storeys with >3 storeys OR >10 sleeping persons
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Existing

RULE_P9_015:
  Subject:            Retrofit Residential ≤6 Storeys — Smoke Alarms in Each Dwelling Unit
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Smoke alarms installed in each dwelling unit and each sleeping room not within a dwelling unit per OBC Art. 3.2.4.21; per CAN/ULC-S531 and CAN/ULC-S553
  Unit:               N/A
  Building Type:      Residential (Existing, ≤6 Storeys)
  Section Reference:  OFC 9.5.4.5
  Condition:          Always
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Existing

RULE_P9_016:
  Subject:            Retrofit Residential ≤6 Storeys — Standpipe System (>4 Storeys, 5th or 6th Used for Residential)
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Standpipe and hose system required in buildings >4 storeys where 5th or 6th storey used for residential occupancy
  Unit:               storeys
  Building Type:      Residential (Existing, ≤6 Storeys, >4 Storeys)
  Section Reference:  OFC 9.5.5.2(1)
  Condition:          IF building is more than 4 storeys AND 5th or 6th storey is residential
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Existing

// --- SECTION 9.5 CONTAINMENT RULES ---

RULE_P9_017:
  Subject:            Retrofit Residential ≤6 Storeys — Suite/Corridor Fire Separation (1 h)
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              1 h fire-resistance rating between suites and public corridors
  Unit:               hours
  Building Type:      Residential (Existing, ≤6 Storeys)
  Section Reference:  OFC 9.5.2.2(1)
  Condition:          IF existing residential building ≤6 storeys
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Existing

RULE_P9_018:
  Subject:            Retrofit Residential ≤6 Storeys — Self-Closing Devices on Suite Doors
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Self-closing devices on doors between suites and public corridors
  Unit:               N/A
  Building Type:      Residential (Existing, ≤6 Storeys)
  Section Reference:  OFC 9.5.2.3
  Condition:          IF door separates suite from public corridor
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Existing

RULE_P9_019:
  Subject:            Retrofit Residential ≤6 Storeys — Incinerator Room Fire Separation
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              45 min fire-resistance rating between incinerator/refuse storage rooms and remainder of building
  Unit:               min
  Building Type:      Residential (Existing, ≤6 Storeys)
  Section Reference:  OFC 9.5.2.12(1)
  Condition:          IF incinerator or refuse storage rooms present
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Existing

RULE_P9_020:
  Subject:            Retrofit Residential ≤6 Storeys — Refuse Storage Room Sprinkler Density
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              Spacing ≤9.5 m² per sprinkler head OR minimum average density 6.5 L/min/m² over room area
  Unit:               m²/head OR L/min/m²
  Building Type:      Residential (Existing, ≤6 Storeys)
  Section Reference:  OFC 9.5.2.12(2)
  Condition:          IF refuse storage room must be sprinklered
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Existing

RULE_P9_021:
  Subject:            Retrofit Residential ≤6 Storeys — Linen/Refuse Chute — Fire Separation (1 h)
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              1 h fire-resistance rating between chute discharge room and remainder of building
  Unit:               hours
  Building Type:      Residential (Existing, ≤6 Storeys)
  Section Reference:  OFC 9.5.2.14(1)
  Condition:          IF linen or refuse chute discharge room present
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Existing

RULE_P9_022:
  Subject:            Retrofit Residential ≤6 Storeys — Chute Automatic Sprinklers Required
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Automatic sprinklers installed in chutes: (a) at top, (b) at alternate floor levels, (c) in room/bin into which chute discharges
  Unit:               N/A
  Building Type:      Residential (Existing, ≤6 Storeys)
  Section Reference:  OFC 9.5.2.14(2)
  Condition:          IF linen or refuse chute is present
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Existing

RULE_P9_023:
  Subject:            Retrofit Residential ≤6 Storeys — Storage Garage Fire Separation
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              45 min fire-resistance rating between storage garage and remainder of building
  Unit:               min
  Building Type:      Residential (Existing, ≤6 Storeys)
  Section Reference:  OFC 9.5.2.15
  Condition:          IF storage garage present in building
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Existing

// --- SECTION 9.6 — RESIDENTIAL >6 STOREYS ---

RULE_P9_024:
  Subject:            Retrofit Residential >6 Storeys — Application Scope
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Section 9.6 applies to existing buildings >6 storeys with: (a) >2 dwelling units, OR (b) sleeping accommodation >10 persons in dormitory, OR (c) boarding/lodging/rooming accommodation >10 persons
  Unit:               storeys / persons / DUs
  Building Type:      Residential (Existing, >6 Storeys)
  Section Reference:  OFC 9.6.1.1(1)
  Condition:          IF existing residential building >6 storeys meeting occupancy thresholds
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Existing

// ============================================================
// PART 9 — HOTELS (Section 9.9) — Selected Rules
// ============================================================

RULE_P9_025:
  Subject:            Hotel Retrofit — Self-Closing Devices on Corridor Doors
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Self-closing devices required on all doors between guest suites and corridors
  Unit:               N/A
  Building Type:      Hotel (Existing)
  Section Reference:  OFC 9.9.2.8(1)
  Condition:          IF hotel establishment
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Existing

RULE_P9_026:
  Subject:            Hotel Retrofit — Fire Separation Between Guest Suites and Corridors
  Context Location:   Ontario
  Constraint Type:    Minimum
  Value:              Fire separation with appropriate fire-resistance rating between guest suites and public corridors
  Unit:               N/A
  Building Type:      Hotel (Existing)
  Section Reference:  OFC 9.9.2.x (multiple)
  Condition:          Always
  Severity:           Critical
  Confidence:         Medium
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Existing

RULE_P9_027:
  Subject:            Hotel Retrofit — Smoke Alarms in Each Guest Suite
  Context Location:   Ontario
  Constraint Type:    Required
  Value:              Smoke alarms installed in each guest suite per CAN/ULC-S531 and CAN/ULC-S553
  Unit:               N/A
  Building Type:      Hotel (Existing)
  Section Reference:  OFC 9.9.4.13
  Condition:          Always
  Severity:           Critical
  Confidence:         High
  Source Document:    Ontario Fire Code (O. Reg. 213/07)
  Authority Rank:     2
  Applies To Scope:   Existing

// ============================================================
// CONFLICT REGISTER
// ============================================================

CONFLICT_001:
  Between:        RULE_P2_087 vs RULE_P2_088
  Description:    Assembly aisle minimum 1100 mm vs reduced 750 mm/900 mm for small sections
  Resolution:     RULE_P2_088 supersedes for aisles serving ≤60 seats (750mm) or one-side serving (900mm)
  Priority:       Most specific condition wins

CONFLICT_002:
  Between:        RULE_P2_126 vs RULE_P2_127/RULE_P2_128/RULE_P2_129/RULE_P4_007
  Description:    Annual fire drill vs. higher-frequency requirements for specific occupancy types
  Resolution:     Most frequent and specific occupancy requirement always supersedes general annual requirement
  Priority:       Most specific occupancy/use rule wins

CONFLICT_003:
  Between:        RULE_P4_001 vs RULE_P4_003
  Description:    10 L max vs 75 L max for flammable liquids in educational buildings
  Resolution:     RULE_P4_003 applies only to automotive/industrial arts areas; RULE_P4_001 elsewhere
  Priority:       Location-specific rule wins

CONFLICT_004:
  Between:        RULE_P6_061 vs RULE_P6_062
  Description:    Fire pump weekly operation vs. monthly for hotels
  Resolution:     RULE_P6_062 (monthly) applies specifically to hotel buildings
  Priority:       Building-type-specific rule wins

CONFLICT_005:
  Between:        RULE_P2_026 vs RULE_P2_031
  Description:    No combustibles in egress corridors vs. furniture allowed in guest suite corridors
  Resolution:     RULE_P2_031 is an explicit exception for hotel guest suite corridors only
  Priority:       Explicit exception wins over general prohibition

// ============================================================
// DEFAULT ASSUMPTIONS
// ============================================================

DEFAULT_001:  Jurisdiction is Ontario unless otherwise specified
DEFAULT_002:  Occupancy type determined by Chief Fire Official per Building Code
DEFAULT_003:  "Approved" means approved by Chief Fire Official unless stated otherwise
DEFAULT_004:  Where conflict between OFC and referenced standard, OFC governs (OFC 1.5.1.2)
DEFAULT_005:  All measurements metric unless otherwise noted
DEFAULT_006:  "Existing" means existing as of November 21, 2007 (OFC effective date) unless section-specific date stated
DEFAULT_007:  Part 9 (Retrofit) applies to existing buildings; Parts 2–8 apply to both new and existing unless otherwise noted
DEFAULT_008:  Where a building spans multiple sections (e.g. residential floors in hotel), the more protective requirement applies

// ============================================================
// END OF RULE DATABASE
// Total Rules: ~300 enforceable clauses extracted
// Document: Ontario Fire Code O. Reg. 213/07 — 244 pages
// Parts Covered: 1, 2 (full), 3 (selected), 4 (selected),
//                6 (full), 8 (selected), 9 (Sections 9.1–9.6, 9.9)
// Parts Partially Covered: 4 (flammable liquid tables need
//   more extraction), 5 (hazardous processes), 7 (high-rise
//   fire emergency systems inspection detail)
// ============================================================
# Content Inventory: Purvi Aero International FZC Brochure

This document catalogues the verified copy and assets extracted from the live site code to serve as the single source of truth for the A4 landscape brochure (~10 pages). 

---

## Brand Styling & Color System (Preserved)
Per the brand guidelines, the brochure will use the project's exact, locked color palette:
*   **Primary (Deep Navy)**: `#000543` / `rgba(14,28,54,1)` (used for primary headers, background blocks)
*   **Secondary (Main Blue)**: `#0071CE` (used for primary buttons, active states, key headings)
*   **Accent (Teal)**: `#00999F` (used for eyebrows, indicators)
*   **Accent (Gold)**: `#B8872A` (used for highlights, category tags, border accents)
*   **Background**: `#FFFFFF`
*   **Text Hierarchy**: Outfit (body/copy) and Rajdhani (headings)

---

## Brochure Sections Content Mapping

### Section 1: Cover
*   **Brand Identity**: Purvi Aero International FZC
*   **Company Slogan**: *"Keeping the World Airborne"*
*   **Core Sub-Heading**: *"Aviation Consumables Supply & Logistics"*
*   **Visual Assets**:
    *   Main Option: Jet engine maintenance photo (`/images/premium_photo-1661885246527-dc13405d3ec6.avif`)
    *   Alternative Option: Aircraft on tarmac silhouette (`/images/premium_photo-1661963090269-dcb0d1929cda.avif`)
*   **Content Gaps**: None.

### Section 2: About / Positioning
*   **Mission Statement** (Extracted from [about/page.jsx](file:///c:/Users/Viral/Desktop/purviaero-international-fzc-master/app/about/page.jsx#L49-L51)):
    > *"To streamline the procurement and transport of shelf-life sensitive aviation chemicals and greases for commercial, regional, and MRO operators worldwide, combining strict spec vetting with efficient UAE-hub logistics."*
*   **Approach / Positioning Copy** (Extracted from [about/page.jsx](file:///c:/Users/Viral/Desktop/purviaero-international-fzc-master/app/about/page.jsx#L28-L30) & [about/page.jsx](file:///c:/Users/Viral/Desktop/purviaero-international-fzc-master/app/about/page.jsx#L65-L68)):
    > *"A UAE-based aviation trading company built to manage the logistical and technical compliance demands of aerospace chemical consumables."*
    > *"We operate as a technical procurement desk. Every chemical list is vetted against OEM maintenance manual specifications before dispatch to prevent parts mismatch and ensure regulatory compliance."*
*   **Operational Scope / Core Differentiators**:
    1.  *Direct OEM Sourcing*: Accessing approved turbine oil, sealant, and paint product lines from verified producers.
    2.  *Shelf-Life Audits*: Strict verification of remaining shelf-life and manufacturing cure-dates on all chemical lots.
    3.  *UAE Logistical Hub*: Fast transit times and cross-border customs handling via Umm Al Quwain Free Zone.
    4.  *Spares Support Desk*: Sourcing rotable components and expendable hardware as a secondary capability.
*   **Content Gaps**: None.

### Section 3: Brands We Support
All logos listed in the manifest ([logos.json](file:///c:/Users/Viral/Desktop/purviaero-international-fzc-master/public/logos.json)) are successfully resolved as vector graphics in [BrandLogos.jsx](file:///c:/Users/Viral/Desktop/purviaero-international-fzc-master/components/BrandLogos.jsx) with no broken paths:
1.  **AeroShell (Shell Aviation)** (Category: Lubricants/Greases)
2.  **Mobil Jet Oil / ExxonMobil** (Category: Lubricants/Greases)
3.  **Castrol Aviation** (Category: Lubricants/Greases)
4.  **Pidilite Industries** (Category: Adhesives/Sealants)
5.  **Loctite (Henkel)** (Category: Adhesives/Sealants)
6.  **3M Aerospace** (Category: Adhesives/Sealants)
7.  **Zip-Chem** (Category: Cleaning/Solvents)
8.  **Brulin** (Category: Cleaning/Solvents)
9.  **Chemtronics** (Category: Cleaning/Solvents)
10. **PPG Aerospace** (Category: Paints/Coatings)
11. **Akzo Nobel Aerospace Coatings** (Category: Paints/Coatings)
12. **Sherwin-Williams Aerospace** (Category: Paints/Coatings)
*   **Content Gaps**: None.

---

### Section 4: Consumables Product Lines (5 Sections)

#### 4A. Lubricants & Greases (Confirmed OEM Supply)
*   **Description**: *"Aeroshell and Shell Aviation product lines — turbine oils, hydraulic fluids, greases, and MIL-SPEC lubricants supplied with full batch traceability and shelf-life monitoring for every unit."*
*   **Key Products / Details**:
    *   Aeroshell Turbine Oils (500 Series)
    *   Aeroshell Greases (multi-purpose, high-temp)
    *   Shell Aviation Hydraulic Fluids
    *   MIL-PRF qualified lubricant grades
    *   Cure-date and expiry tracking per batch
    *   SDS and technical data sheets included
*   **Content Gaps**: None.

#### 4B. Adhesives & Sealants
*   **Description**: *"Structural adhesives, airframe sealants, and epoxy systems for MRO applications. Pidilite Industries product lines — exact product range to be confirmed."*
*   **Key Products / Details**:
    *   Structural adhesives for airframe bonding
    *   Fuel-tank and pressure-cabin sealants
    *   Epoxy systems for composite repair
    *   Sealant kits pre-configured for maintenance events
    *   Batch-level traceability and cure-date monitoring
    *   Cold-chain and temperature-controlled storage
*   **Content Gaps / Flags**: 
    > [!IMPORTANT]
    > **UNCONFIRMED PRODUCT RANGE**: The live site notes: *"Pidilite Industries range (Araldite, M-Seal, Fevicol Industrial, or similar) — specific sub-brand to be confirmed before product names are published."* 
    > **Action Needed**: Please supply the exact sub-brands or product identifiers you wish to list in the brochure.

#### 4C. Cleaning Solvents & Degreasers
*   **Description**: *"Aviation-approved cleaning chemicals and degreasers for component overhaul, engine wash, and line maintenance. Supplier list under final confirmation."*
*   **Key Products / Details**:
    *   Aviation-approved component degreasers
    *   Engine wash and compressor cleaning solutions
    *   Interior cleaning and disinfection chemicals
    *   Hazmat-compliant packaging and labelling
    *   SDS documentation for every product line
    *   Bulk supply with per-unit batch traceability
*   **Content Gaps / Flags**:
    > [!IMPORTANT]
    > **UNCONFIRMED BRANDS**: The live site notes: *"Brand suggestions under review: Zip-Chem, Brulin, Turco, Ardrox. Exact supplier list to be confirmed before publishing."* 
    > **Action Needed**: Please verify which cleaning solvent brands/suppliers should be hardcoded in the brochure content.

#### 4D. Aerospace Paints & Coatings
*   **Description**: *"Topcoats, primers, and specialty coatings for airframe painting, touch-up, and corrosion protection. Major aerospace coatings OEMs — supplier list under final confirmation."*
*   **Key Products / Details**:
    *   Polyurethane topcoats and basecoats
    *   Epoxy and chromate primers
    *   Corrosion-inhibiting coatings
    *   Touch-up paint kits for line maintenance
    *   Spec compliance: Boeing, Airbus, and OEM paint specs
    *   Shelf-life monitoring and batch documentation
*   **Content Gaps / Flags**:
    > [!IMPORTANT]
    > **UNCONFIRMED COATINGS BRANDS**: The live site notes: *"Brand suggestions under review: PPG Aerospace / Desothane, Akzo Nobel Aerospace Coatings, Sherwin-Williams Aerospace. Exact supplier list to be confirmed."* 
    > **Action Needed**: Please confirm the finalized supplier list for the coatings section.

#### 4E. General MRO Chemicals
*   **Description**: *"Primers, corrosion inhibitors, sealant kits, and specialty chemicals that support both scheduled maintenance and unscheduled repair events."*
*   **Key Products / Details**:
    *   Corrosion inhibitor compounds (CICs)
    *   Chromate and non-chromate primer systems
    *   Pre-kitted sealant and adhesive sets
    *   Preservation and storage protection fluids
    *   De-icing and anti-icing fluid supply
    *   Custom kitting for C-check and D-check events
*   **Content Gaps**: None.

---

### Section 5: Quality & Compliance
*   **Core Rationale** (Extracted from [page.jsx](file:///c:/Users/Viral/Desktop/purviaero-international-fzc-master/app/page.jsx#L175-L177)):
    > *"Chemical logistics require compliance steps that general parts brokers omit. We structure dispatch around the preservation requirements of limited-shelf-life materials."*
*   **Compliance Verification Protocols**:
    *   *Shelf-Life Control*: Cure-dates and batch expirations are logged and checked on every inbound and outbound lot.
    *   *Hazmat Dispatch*: Compliant packaging, labelling, and airfreight routing for hazardous chemical classes.
    *   *Trace Documentation*: Manufacturer Certificates of Conformance (CoC) and Safety Data Sheets (SDS) are supplied with all items.
    *   *Specification Vetting*: Pre-dispatch check to match product grades to Airbus, Boeing, or military material standards.
*   **Verification Audit Steps** (Extracted from [page.jsx](file:///c:/Users/Viral/Desktop/purviaero-international-fzc-master/app/page.jsx#L201-L205)):
    1.  Standard Airworthiness Docs (FAA 8130-3 / EASA Form 1 when applicable)
    2.  OEM & Authorized Supplier Vetting Standards
    3.  Batch Traceability & Cure-Date Management
    4.  Hazmat Packaging & Airfreight Logistics Vetting
    5.  Spec-Lock Alignment Reviews
*   **Content Gaps**: None.

### Section 6: Spares & Rotables (Secondary Capability)
*   **Core Statement** (Extracted from [spares/page.jsx](file:///c:/Users/Viral/Desktop/purviaero-international-fzc-master/app/spares/page.jsx#L116-L118)):
    > *"Alongside our primary consumables supply, Purvi Aero sources rotable components, line-replaceable units, and expendable hardware for commercial and regional fleets."*
*   **Rotables & Line Components**:
    *   *Description*: *"Direct support for rotable components and line-replaceable units for commercial and regional platforms. We utilise an audited supplier network to source components with firm airworthiness standing."*
    *   *Capabilities*:
        *   Engine & APU Components (OEM/OH)
        *   Flight Control & Landing Gear Spares
        *   Avionics & Communication Hardware
        *   Interior Components & Galley Spares
        *   Technical Alternate Parity Reviews
        *   FAA 8130-3 / EASA Form 1 Certification
*   **Expendables & Hardware**:
    *   *Description*: *"High-usage expendables and structural hardware for base maintenance and heavy checks (C & D). We focus on line-item granularity and documentation for every fastener, seal, and filter element."*
    *   *Capabilities*:
        *   AN, MS, NAS & Boeing Standard Fasteners
        *   Technical O-Rings, Seals & Gaskets
        *   Pneumatic & Hydraulic Filter Elements
        *   High-Usage Bulk Expendables Packages
        *   Kitting Services for Maintenance Events
        *   Manufacturer CoC Documentation Standards
*   **Fleet / Platform Coverage**:
    *   *Boeing*: 737 Series / 777
    *   *Airbus*: A320 Family / A330
    *   *Regional*: ATR / Dash-8 / Embraer
    *   *Propulsion*: CFM56 / V2500 / PW
*   **Content Gaps**: None.

### Section 7: MRO / Military Credibility Section
*   **Extracted Context**: Sourced from scattered references to "military material standards" and "MIL-SPEC qualified lubricant grades" on the homepage and consumables sections.
*   **Content Gaps / Flags**:
    > [!IMPORTANT]
    > **MISSING CREDIBILITY BLOCK**: There is no dedicated page, route, or text block detailing specific MRO/military authority approvals, defense operator contracts, or military logistics compliance standards.
    > **Proposed Resolution**: We recommend creating a structured page/section draft emphasizing military spec alignment (such as MIL-SPEC/MIL-PRF chemical alignments, high-readiness response, and audited defense logistics support). 
    > **Drafting text for your review**:
    > *   *Operational Focus*: Sourcing and logistics of military-grade aviation chemicals and protective coatings matching DoD specification standard requirements.
    > *   *Key Capabilities*:
    >     *   Strict vetting for US DoD MIL-SPEC / MIL-PRF qualifications.
    >     *   Compliant hazmat logistics, packaging, and military standard trace documentation support.
    >     *   Audited supply routes and support for defense contractor procurement.

### Section 8: Contact / Back Cover
*   **Direct Phone Line (Updated)**: `+971 58 960 3693` (Will be integrated consistently across the cover, pages, and back cover).
*   **Direct RFQ Intake**: `rfq@purviaerointernational.com`
*   **General Enquiries**: `info@purviaerointernational.com`
*   **Corporate Address**: 
    > Warehouse No. (A-02), Block - A, Umm Al Quwain Free Trade Zone, Ahmed Bin Rashid Port, Umm Al Quwain, United Arab Emirates
*   **Priority AOG Support Protocols**:
    *   *Rapid Stock Verification*: Sourcing parts within verified global networks.
    *   *Technical Trace Audit*: Pre-shipping verification of airworthiness certs (FAA 8130-3/EASA Form 1).
    *   *Next-Flight-Out Logistics*: Urgent shipping coordination via NFO or express freight.
*   **Content Gaps**: None.

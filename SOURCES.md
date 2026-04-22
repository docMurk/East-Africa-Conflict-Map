# East Africa Conflict Map — Sources (2021–2026)

Companion sourcing document for the regional/international involvement arrows
in `index.html`. Covers the three active conflicts on the map: **Sudan**,
**Ethiopia** and **Somalia**.

## Source-verification caveat

The citations below were compiled from a deep pass across news, think-tank
and advocacy reporting. **URLs were confirmed against search indices but
have not all been body-verified via WebFetch** (the research pass was rate
limited on fetch). Before publishing any arrow update derived from this
document, a human should click through the primary citation for each new
claim, especially for tier‑3 / high-salience assertions (UAE↔RSF flows,
Iran-SAF drones, Israel–Somaliland recognition, AFRICOM strike counts).

Where a cited document is a UN Panel of Experts report, US Treasury
designation, ICJ filing, or UN Security Council resolution, the document
identifier (e.g. `S/2024/65`, OFAC `jy2772`, UNSCR 2767) is included so the
primary source can be retrieved directly even if a specific URL rots.

## How this document is organized

- Three top-level sections — one per conflict.
- Within each conflict, entries are grouped by **actor** (usually a state).
- Each actor has one entry per **(actor → target, support-type)** arrow,
  matching the convention used by `CONFLICT_DATA.arrows` in `index.html`.
- Multiple events/reports covering the same arrow are **consolidated into a
  single entry with a merged source list** (e.g. Saudi financial flows to
  Somalia in 2022 and 2025 = one arrow, two dated sources).
- Support-type vocabulary mirrors the map: `military`, `diplomatic`,
  `financial`, `trade`, `illicit`.
- Tier reflects salience / evidentiary weight on the same 1–3 scale used in
  the map (1 = reported / alleged, 2 = well-documented, 3 = central to the
  conflict's dynamics).
- Arrow IDs in brackets reference existing arrows in
  `index.html` (`CONFLICT_DATA.arrows.{sudan|ethiopia|somalia}`, lines
  ~572–989). `NEW` marks a proposed new arrow.

## 1. Sudan (SAF vs RSF, Apr 2023 – present)

### United Arab Emirates

**UAE → RSF — military / logistics / drones** — arrow `uae-rsf` — *tier 3,
2023–present.*
Arms, Wing Loong / Chinese drones, FN Herstal rifles, artillery and
satellite comms moved to RSF via Amdjarass (Chad) and Kufra (eastern
Libya). Since mid-2025 UAE has also underwritten Colombian mercenary
recruitment into RSF.
- UN Panel of Experts on Sudan, *Final report* `S/2024/65`, 15 Jan 2024
  (Chad airbridge documented in detail).
- UN Panel of Experts on Sudan, *Final report* `S/2025/239`, Mar 2025
  (Kufra transit, Colombian recruits, continued UAE denials).
- The Sentry, "Blood Gold" briefs, Oct 2025 and Feb 2026.
- Amnesty International, "New weapons fuelling the Sudan conflict",
  May 2025 (FN Herstal + GB50 mortars traced to UAE stockpiles).
- Human Rights Watch, "The Massalit Will Not Come Home", Sep 2024.
- *New York Times*, "A Secret War, Strange New Wounds…", 29 Sep 2023.
- *Wall Street Journal*, "UAE fuels Sudan civil war with weapons,
  mercenaries", 2024.
- Sudan v. UAE, ICJ genocide complicity application, 6 Mar 2025
  (dismissed on jurisdiction May 2025 but factual allegations on the
  public record).

**RSF gold → UAE — illicit** — arrow `uae-rsf-gold` — *tier 3,
2020–present.*
Darfur-origin gold (Jebel ʿAmer, Songo) laundered via Chad, CAR and
South Sudan into Dubai refineries; financing RSF payroll and weapons.
- Global Witness, "Exposing the RSF's secret financial network", 2023.
- Swissaid, "On the trail of African gold", 2024.
- The Sentry, gold-flow dossier update, 2025.
- UN Panel `S/2024/65` §§ on precious metals.

### Egypt

**Egypt → SAF — military** — arrow `egy-saf` — *tier 2, 2023–present.*
Egyptian Air Force strikes from East Oweinat airbase; Bayraktar
Akinci sorties over northern Sudan (Oct 2024); training and shared
intelligence with SAF; early-war deployment of EAF pilots captured at
Merowe.
- Middle East Eye, "Egyptian Akinci drones striking inside Sudan",
  Oct 2024.
- Addis Standard reporting on East Oweinat staging, Oct 2024.
- Al Jazeera English, Sudan war analytical dossier, Oct 2024.
- Reuters, "Egypt walks tightrope as Sudan war rages…", 2024.
- *The Economist*, "Egypt is quietly helping Sudan's army", 2024.

**Egypt → SAF — diplomatic** — arrow `egy-saf-dip` — *tier 3,
2023–present.*
Hosts neighbours-of-Sudan summit; consistently frames RSF as
destabilising militia in AU, Arab League and UN forums; hosts ~1.5M
Sudanese refugees as diplomatic leverage.
- AP, "Egypt hosts Sudan neighbours summit", Jul 2023.
- Cairo Declaration on Sudan, Jul 2023 (full text via Egyptian MFA).

### Iran

**Iran → SAF — military** — arrow `irn-saf` — *tier 2, late-2023–present.*
Mohajer-6 drones supplied after Oct 2023 restoration of ties;
reportedly decisive in SAF's Omdurman / Bahri counter-offensives of
early 2024; possible Ababil / Shahed follow-ons.
- Bloomberg, "Iran supplies drones to Sudan army", 24 Jan 2024.
- Reuters, "Iran restores ties with Sudan", Oct 2023.
- Semafor, Sudan-Iran drone logistics report, Feb 2024.
- *Asharq Al-Awsat*, Mohajer-6 delivery timeline, 2024.

### Turkey

**Turkey → SAF — military** — arrow `tur-saf` — *tier 3 (upgrade from 2),
2024–present.*
TB2 Bayraktar deliveries Nov 2024, followed by reported Akinci package
in 2025; mediation track parallel to arms flow; Suakin concession
revived as long-run leverage.
- Middle East Eye, "Turkey steps up drone support to Sudan army",
  2024.
- *Africa Defense Forum*, "Turkish Akinci drones reshape Sudan air
  war", Mar 2025.
- Reuters, SAF-Türkiye defence MoU coverage, 2024.

### Saudi Arabia

**Saudi Arabia → Sudan — diplomatic (Quad co-host)** — arrow `sau-saf` —
*tier 2, 2023–present; reframe from "→ SAF" to "Quad host / mediator
leaning SAF".*
Co-chaired Jeddah talks (since May 2023) and the Quad process
(KSA + US + UAE + Egypt) announced by State Department in Sep 2025
seeking a three-month humanitarian truce; recognises Port Sudan
administration but not exclusively.
- US Department of State, *Quad Statement on Sudan*, 12 Sep 2025.
- Jeddah Declaration of Commitment to Protect the Civilians of Sudan,
  11 May 2023.
- Reuters, "Saudi, US, UAE, Egypt push Sudan truce", Sep 2025.

### Qatar

**Qatar → SAF — diplomatic / financial** — arrow `qat-saf` — *tier 2,
2023–present.*
Financial and diplomatic cover for Port Sudan administration;
continues humanitarian funding through Qatar Fund for Development;
hosted SAF officials separately from Jeddah track.
- Doha Institute, Sudan war policy paper, 2024.
- Qatar Fund for Development, Sudan portfolio disclosures, 2024–25.

### Eritrea

**Eritrea → SAF — military / training** — arrow `eri-saf` — *tier 2
(upgrade from 1), 2023–present.*
Training of SAF's Eastern Battalion and Beja auxiliaries at Sawa and
Assab; transit and safe haven for anti-RSF fighters in Kassala; part
of Asmara's broader "axis with Cairo" against UAE-backed actors.
- Radio Dabanga, "SAF's Eastern Battalion trained in Eritrea", 2024.
- *MadaMasr*, "Eritrea's quiet re-entry into the Sudan war", 2024.
- Sudan Transparency and Policy Tracker briefs, 2024–25.

### Chad

**Chad → RSF — illicit / transit** — arrow `tcd-rsf` — *tier 3,
2023–present.*
Amdjarass and Am-Djarass airstrips used for UAE-to-RSF cargo flights;
Chadian security establishment has family and commercial ties to RSF
leadership; N'Djamena publicly denies complicity.
- Global Initiative Against Transnational Organized Crime,
  "Chad-Sudan border economy report", 2024.
- *The New Arab*, Amdjarass airbridge investigation, 2024.
- Sudan Tribune, Chad-UAE cargo flight tracker series, 2024–25.
- UN Panel `S/2024/65` §§ on Chad transit.

### Libya (Haftar / LNA)

**Libya (LNA) → RSF — military / transit** — arrow `lby-rsf` — *tier 3
(upgrade from 2), 2024–present; Kufra became the primary RSF supply
route in 2025 after Chad tightened airspace controls.*
Kufra airbase used as staging point for UAE-origin materiel; ground
convoys through southern Libya; Haftar-Hemedti coordination via Saif
al-Islam's circle.
- Libya Observer, Kufra airbase aerial imagery reports, 2024–25.
- Middle East Eye, "How Kufra became Sudan's back door", 2025.
- *The New Arab*, LNA-RSF logistics investigation, 2025.
- UN Panel `S/2025/239` §§ on eastern Libya.

### United States

**US → Sudan — diplomatic + sanctions (both sides)** — arrow `us-saf` —
*tier 2, 2023–present; reframe from "→ SAF" to "mediator + sanctions
on both".*
Co-hosts Jeddah / Quad; OFAC designations on both RSF and SAF
leaderships; December 2024 State Department genocide determination
against RSF in Darfur; humanitarian funding partially restored 2024
then cut under FY26 continuing resolutions.
- US Treasury / OFAC:
  - `sb0330`, sanctions on Colombian-mercenary recruiter network,
    Dec 2024.
  - `jy2772`, designation of Mohamed Hamdan "Hemedti" Dagalo,
    7 Jan 2025.
  - `jy2789`, designation of Abdel Fattah al-Burhan, 16 Jan 2025.
  - `sb0457`, follow-on RSF financier designations, Apr 2026.
- US Department of State, genocide determination on RSF, Dec 2024.

### Russia

**Russia → SAF — military / diplomatic** — arrow `ru-saf` — *tier 2,
2024–present.*
Port Sudan naval-facility MoU re-signed Feb 2025 (~300 personnel, 4
warship berths); quietly frozen in Nov 2025 pending internal Sudanese
political settlement; weapons via state channels supplementing earlier
Wagner flows the other way.
- Sudan Tribune article 305646, Feb 2025 (base agreement).
- Sudan Tribune article 308824, Nov 2025 (freeze).
- TASS / Interfax Russian MFA readouts, 2025.

**Russia (Wagner / Africa Corps) → RSF — illicit / military** — arrow
`ru-rsf` — *tier 2, 2022–present.*
Darfur gold-for-arms pipeline via CAR; Wagner technicians documented
at RSF maintenance depots pre-war; Africa Corps continuity post-2023
reorganisation.
- The Sentry / Source Material, CAR-Wagner-RSF gold documentation,
  2024–25.
- CNN investigation, "Russian mercenaries' role in Sudan", 2023.
- UN Panel `S/2024/65` §§ on CAR routing.

### China

**China → Sudan — trade / energy (neutral-leaning SAF)** — arrow
`cn-neutral` — *tier 2, 2021–present.*
CNPC/Petrodar oil interests; 19 Nov 2025 CNPC force-majeure filing
after Heglig pipeline attacks; continues arms sales to SAF via
third-country channels; opposes UN arms-embargo expansion.
- Sudan Tribune article 307895, Nov 2025 (force majeure).
- Sudan Tribune article 307982, Nov 2025 (CNPC response).
- China-Global South Project, "Beijing's Sudan dilemma", 2025.
- SIPRI arms transfer database 2021–24.

### Kenya — NEW

**Kenya → RSF — diplomatic** — *proposed new arrow `ken-rsf`, tier 2,
2024–present.*
Nairobi hosted Hemedti and RSF political wing; Tasis signing (Feb 2025)
and "Government of Peace and Unity" declaration (Jul 2025) both staged
in Nairobi; strained Kenya-Sudan bilateral relations.
- Sudan Tribune, Tasis signing coverage, Feb 2025.
- Reuters, "Kenya hosts RSF parallel-government signing", Jul 2025.
- ISS Africa, "Why Nairobi is hedging on Sudan", 2025.

### Uganda — NEW

**Uganda → RSF — illicit / transit** — *proposed new arrow `uga-rsf`,
tier 2, 2023–present.*
Entebbe cargo airbridge documented via ADS-B tracking; ~109 flights
between Aug 2023 and mid-2025 by Bar Aviation and linked operators
carrying materiel routed to RSF-held Darfur.
- C4ADS flight-tracking report, 2024.
- Africa Intelligence, Bar Aviation dossier, 2024–25.
- *The New Humanitarian*, Entebbe airbridge investigation, 2025.

### Central African Republic — NEW

**CAR → RSF — illicit / transit** — *proposed new arrow `car-rsf`,
tier 1, 2022–present.*
Bangui and Birao corridor used for Wagner-linked gold/arms exchanges
with RSF; CAR government denies official involvement.
- The Sentry, CAR-Sudan overland routes brief, 2024.
- UN Panel `S/2024/65` §§ on CAR corridor.

### South Sudan — NEW

**South Sudan → SAF — trade / energy** — *proposed new arrow `ssd-saf`,
tier 2, 2023–present.*
Oil pipeline dependency binds Juba to Port Sudan; Heglig tripartite
security agreement (Sudan / South Sudan / China) signed Dec 2025 to
restore flows after RSF sabotage.
- Sudan Tribune, Heglig tripartite coverage, Dec 2025.
- Africa Confidential, South Sudan–SAF oil diplomacy, 2025.

### Israel — NEW

**Israel → SAF — diplomatic** — *proposed new arrow `isr-saf`, tier 1,
2023–present.*
Foreign-minister-to-Burhan channel; envoy Al-Sadig Ismail's Apr 2025
visit to Tel Aviv as part of Abraham Accords follow-on track.
- Haaretz, "Israel quietly backs Burhan", 2024.
- Times of Israel, Al-Sadig Ismail visit readout, Apr 2025.

**Israel → RSF — diplomatic (hedging)** — *proposed new arrow `isr-rsf`,
tier 1, 2019–present.*
Mossad-Hemedti contacts dating to 2020 normalisation talks; continued
low-level engagement as a hedge against SAF's Islamist wing.
- Middle East Eye, Mossad-Hemedti backchannel, 2022, refreshed 2024.
- *Foreign Policy*, "Israel's Sudan double game", 2024.

### Colombia — NEW

**Colombia (private) → RSF — military / mercenary** — *proposed new
arrow `col-rsf`, tier 2, 2024–present.*
A4SI and Fénix Intelligence recruitment of ex-Colombian special-forces
veterans for RSF; OFAC designations and Colombian government criminal
probe.
- OFAC `sb0330`, Dec 2024.
- *El Tiempo* investigative series, 2024–25.
- Colombian Fiscalía General press releases, 2025.
- UN Panel `S/2025/239` §§ on foreign fighters.

### Ethiopia (reported) — NEW

**Ethiopia → RSF — illicit (reported)** — *proposed new arrow `eth-rsf`,
tier 1, 2026, flagged "reported".*
Kurmuk / Blue Nile border allegations of Ethiopian-origin materiel
reaching RSF in Mar 2026; denied by Addis.
- Sudan Tribune, Kurmuk allegations series, Mar 2026.
- Addis Standard rebuttal coverage, Mar 2026.

### Yemen / Houthis (reported) — NEW

**Houthis → SAF — illicit (reported)** — *proposed new arrow `yem-saf`,
tier 1, 2024–present, flagged "reported".*
Unverified reports of Houthi-routed weapons to SAF as ideological
solidarity counter to UAE-RSF axis.
- Ansar Allah statements via Al-Masirah, 2024–25.
- Sudan War Monitor tracking posts, 2024–25.


## 2. Ethiopia (Tigray, Amhara/Fano, Oromia – 2020–present)

### Eritrea

**Eritrea → Federal government — military (historical)** — arrow `eri-fed`
— *tier 3 historically, narrow window to Nov 2020 – Nov 2022; mark as
"historical" in the map caption.*
Eritrean Defence Forces fought alongside ENDF in Tigray 2020–22; drew
down after the Pretoria CoHA but retained enclaves in Irob and northern
Tigray.
- International Commission of Human Rights Experts on Ethiopia (ICHREE),
  *Final report*, Sep 2023 (`A/HRC/54/55`).
- Amnesty International, "Cruel and pervasive: Sexual violence in
  Tigray", 2021.
- HRW, "We Will Erase You", Apr 2022.
- Pretoria Cessation of Hostilities Agreement, 2 Nov 2022.

**Eritrea → TPLF / Debretsion faction — military** — arrow `eri-tplf`,
tier 2, 2024–2026. *As of Apr 2026 the map tints Eritrea with the new
`tplf-leaning` side — TPLF yellow with a gray contested-stripe overlay
(the same hatch Chad wears in Sudan mode) to mark the hedged posture.*
Post-2023 TPLF split between Getachew Reda (Addis-aligned) and
Debretsion Gebremichael (Asmara-leaning); Eritrean logistical and
communications support to the Debretsion wing has grown as Asmara
hedges against a post-Abiy Ethiopia.
- International Crisis Group, "Ethiopia and Eritrea on a collision
  course", 2025.
- Addis Standard reporting on Tigray intra-party split, 2024.
- Africa Confidential, "Asmara's Tigray play", 2025.
- Christian Science Monitor, "Ethiopia–Eritrea conflict", 2 Apr 2026,
  <https://www.csmonitor.com/World/Africa/2026/0402/Ethiopia-Eritrea-conflict>.

**Eritrea → Fano (Amhara militia) — military (alleged)** — *proposed new
arrow `eri-fano`, tier 1, 2024–present, flagged "alleged".*
Unconfirmed reports of Fano commanders training at Sawa / Eritrean
facilities; presented by Ethiopian federal sources, denied by Asmara.
- *The Africa Report*, Fano external-support profile, 2024.
- Addis Standard investigative brief, 2024.
- ICG Ethiopia alert, 2025 (notes as "reported, unverified").

### Turkey

**Turkey → Federal government — military + diplomatic (mediator)** —
arrow `tur-fed` — *tier 2, 2021–present.*
Bayraktar TB2 deliveries 2021–22 central to ENDF's 2022 counter-attack
into Tigray; since 2023 Ankara has pivoted to mediator role — Ankara
Declaration (Ethiopia-Somalia, 12 Dec 2024) is the signature output.
- Reuters, "Turkish drones reshape Tigray war", Dec 2021.
- SIPRI, *Arms transfers to Ethiopia 2021–22*.
- Ankara Declaration on Ethiopia–Somalia, 12 Dec 2024 (Turkish MFA
  text).
- Anadolu Agency, Erdoğan-Abiy-Hassan Sheikh readout, Dec 2024.

### United Arab Emirates

**UAE → Federal government — military / drones** — arrow `uae-fed` —
*tier 3, 2021–2022 (active), 2023–present (residual).*
Wing Loong II / Blue Arrow strikes on TDF columns in 2021; ongoing
financial and diplomatic backing for Abiy post-2022; overlaps with
UAE's Berbera port investment via neighbouring Somaliland.
- *New York Times*, "How a Secret UAE Military Operation Saved Abiy",
  2022.
- *Wall Street Journal*, UAE drone supplies to Ethiopia, 2022.
- SIPRI arms data 2021–22.

### Iran

**Iran → Federal government — military (reported)** — arrow `irn-fed` —
*tier 1, 2021–22, flagged "reported".*
Mohajer-6 drone deliveries and technician presence reported during
Tigray war; Iran-Ethiopia ties have since expanded via BRICS track.
- *Washington Post*, Mohajer-6 sightings in Ethiopia, 2022.
- Bellingcat open-source analysis of Ethiopian drone losses, 2022.

### Egypt

**Egypt → TPLF — diplomatic (alleged support)** — arrow `egy-tplf` —
*tier 1, 2020–2022, flagged "reported".*
GERD-driven Egyptian hostility toward Abiy translated into diplomatic
sympathy for Tigray forces; no confirmed materiel transfers.
- *Foreign Policy*, "Egypt's quiet sympathy for Tigray", 2021.
- ISS Africa GERD-Tigray linkage analysis, 2022.

### Sudan (pre-war government)

**Sudan → TPLF — military / transit (historical)** — arrow `sdn-tplf` —
*tier 2, 2020–2023.*
SAF under Burhan allowed TDF rear bases and supply transit through
al-Fashaga; relationship collapsed after Apr 2023 when TPLF needed
Addis for the Port Sudan track.
- ICG, "Sudan and Ethiopia: border troubles", 2022.
- *The Africa Report*, al-Fashaga analysis, 2021–22.

### United States

**US → Federal government — diplomatic** — arrow `us-fed` — *tier 2,
2020–present.*
AGOA termination effective 1 Jan 2022 over Tigray atrocities; ICHREE
mandate at UN Human Rights Council not renewed Oct 2023 under US
acquiescence; USAID Tigray food-aid corridor paused 2023 over
diversion, cut further 2025; re-engagement under Trump II framed as
"stabilise the Horn".
- USTR, *AGOA eligibility review*, Nov 2021; Proclamation 10327 of
  23 Dec 2021 (effective 1 Jan 2022).
- UN HRC resolution on ICHREE non-renewal, Oct 2023.
- USAID press release on Ethiopia food-aid pause, May 2023.
- US Treasury / OFAC designations on ENDF and Eritrean officials
  during Tigray war, 2021–22.

### China

**China → Federal government — trade / financial / military** — arrow
`cn-fed` — *tier 3, 2021–present.*
Largest bilateral creditor (~$13bn); BRI incl. Addis-Djibouti railway;
debt restructuring concluded 2024 under G20 Common Framework; Wing
Loong I deliveries Sep 2021; continued small-arms sales.
- World Bank / IMF debt reports on Ethiopia, 2023–24.
- Paris Club / G20 Common Framework Ethiopia communique, 2024.
- *Janes*, Wing Loong I deliveries to Ethiopia, Sep 2021.
- SIPRI arms transfer database.

### Russia

**Russia → Federal government — military + nuclear cooperation** — arrow
`ru-fed` — *tier 2 (upgrade from 1), 2021–present.*
Krasukha-4 EW system reportedly deployed Oct 2023; refurbished Su-30K
package announced Jan 2024; Rosatom civil-nuclear MoU plus Rosatom
NDA in Sep 2025; UNSC diplomatic cover during Tigray war.
- *Janes*, Krasukha-4 deployment reporting, Oct 2023.
- TASS / RIA Novosti, Su-30K package, Jan 2024.
- Rosatom press release, Ethiopia civil-nuclear MoU, Sep 2025.
- Russian MFA readouts on UNSC Tigray votes, 2021–22.

### African Union — NEW

**AU → Ethiopia (mediator) — diplomatic** — *proposed new arrow
`au-mediator`, tier 3, 2022–present.*
AU High-Level Panel led by Olusegun Obasanjo delivered the Pretoria
Cessation of Hostilities Agreement (2 Nov 2022); ongoing implementation
monitoring. Central to the Tigray ceasefire that still holds as of 2026.
- Pretoria CoHA, 2 Nov 2022.
- AU Peace and Security Council communiques, 2022–24.
- ICG, "One year on from Pretoria", 2023.

### Israel — NEW

**Israel → Federal government — diplomatic / trade** — *proposed new
arrow `isr-fed`, tier 1, 2021–present.*
Long-standing security cooperation; agricultural and cyber exports;
relatively quiet during Tigray war but sustained engagement through
Abiy administration.
- Israeli MFA Ethiopia country page.
- *Haaretz*, Israel-Ethiopia intelligence cooperation, 2022.


## 3. Somalia (FGS vs al-Shabaab; Somaliland; Puntland – 2021–present)

### Turkey

**Turkey → FGS — military + trade** — arrow `tur-fgs` — *tier 3,
2021–present.*
TAF TURKSOM base in Mogadishu trains Gorgor commando and Haramcad
police units; TB2 strikes since 2022 (Amnesty civilian-casualty report
May 2024); oil/gas seismic concession signed Mar 2024 (TPAO);
Ankara Declaration of 12 Dec 2024 mediated Ethiopia-Somalia MoU
tensions.
- Amnesty International, "Turkish drone strikes kill civilians in
  Somalia", May 2024.
- *Daily Sabah*, TPAO-Somalia oil/gas MoU, Mar 2024.
- Ankara Declaration, 12 Dec 2024 (Turkish MFA text).
- *Africa Defense Forum*, TURKSOM training pipeline, 2023–25.

### United Arab Emirates

**UAE → Somaliland — military / trade** — arrow `uae-sml` — *tier 3,
2017–present.*
DP World Berbera port concession (extended 2022); UAE-funded Berbera
military airbase upgrade; Hargeisa financial and security links.
- DP World, Berbera concession extension press release, 2022.
- *Reuters*, Berbera airbase upgrades, 2022–24.
- Crisis Group, "Somaliland's strategic hedging", 2024.

**UAE → Puntland — military / training** — *proposed new arrow
`uae-puntland`, tier 2, 2012–present; notable 2024–25 operations.*
Puntland Maritime Police Force (PMPF) trained and funded by UAE since
2012; UAE air support to Puntland's Operation Cal-Miskaad / Hilaac
against ISIS-Somalia and al-Shabaab in Bari region 2024–25.
- UN Monitoring Group on Somalia reports, 2013 onward.
- Sahan Research, Puntland anti-ISIS operations briefs, 2024–25.
- Garowe Online operational coverage, 2024–25.

### Ethiopia

**Ethiopia → Somaliland — diplomatic / trade (MoU)** — arrow `eth-sml`
— *tier 3, 2024–present.*
1 Jan 2024 MoU: Ethiopia recognition of Somaliland in exchange for
Berbera sea/naval access; partially rolled back by Ankara Declaration
(12 Dec 2024) but not cancelled. Central to 2024–26 Horn realignment.
- MoU text (Addis-Hargeisa), 1 Jan 2024.
- Ankara Declaration, 12 Dec 2024.
- ICG, "The Horn's new cold war", 2024.
- Reuters coverage of Mogadishu response, Jan–Feb 2024.

### Egypt

**Egypt → FGS — military / diplomatic** — arrow `egy-fgs` — *tier 2,
2024–present.*
2024 security cooperation agreement with Mogadishu; weapons
deliveries ($50M package reported); pitch to join AUSSOM explicitly
aimed at countering Ethiopia; part of Cairo–Asmara–Mogadishu tripartite
track.
- Reuters, "Egypt sends weapons to Somalia", Aug 2024.
- ISS Africa, Egypt-Somalia-Eritrea tripartite paper, 2024.
- Middle East Eye, Cairo's AUSSOM bid, 2024.

### Eritrea

**Eritrea → FGS — diplomatic / training** — arrow `eri-fgs` — *tier 2,
2023–present.*
Asmara hosts Somali officers for training; anchor of Cairo-Asmara-
Mogadishu tripartite aligned against Addis-Hargeisa axis.
- *The Africa Report*, Asmara-Mogadishu rapprochement, 2023.
- ISS Africa, tripartite paper (as above).

### Qatar

**Qatar → FGS — financial / diplomatic** — arrow `qat-fgs` — *tier 2,
2021–present.*
Longstanding political and financial backer of FGS; funds humanitarian
programmes and reconstruction; rivalry backdrop with UAE.
- Qatar Fund for Development, Somalia disclosures, 2021–25.
- ICG, "Gulf rivalries in the Horn", 2022.

### Saudi Arabia

**Saudi Arabia → FGS — financial / diplomatic** — arrow `sau-fgs` —
*tier 2, 2022 and 2025 (consolidated).*
$40M budget support 2022; further commitments in 2025 under Saudi
Arabia's Horn of Africa framework; alignment with Gulf pro-FGS track.
- Saudi Fund for Development disbursements, 2022 and 2025.
- Reuters, Saudi–Somalia budget-support coverage, 2022.
- Arab News, 2025 Horn-of-Africa framework briefs.

### Kenya

**Kenya → FGS — military** — arrow `ken-fgs` — *tier 3, 2021–present.*
KDF remained in AMISOM/ATMIS/AUSSOM through transition; Jubaland
buffer politics; tensions resolved Dec 2024 after Nairobi-Villa
Somalia rapprochement.
- AU PSC communiques on ATMIS–AUSSOM transition, 2023–24.
- Reuters, Kenya-Somalia diplomatic crisis and resolution, 2024.

### Djibouti

**Djibouti → FGS — military** — arrow `dji-fgs` — *tier 2,
2021–present.*
Djiboutian contingent in ATMIS / AUSSOM; host of US Camp Lemonnier
and multiple foreign bases enabling regional operations.
- AU PSC communiques, 2023–25.
- US DoD posture reporting on Camp Lemonnier, 2023–25.

### United States

**US → FGS — military + diplomatic** — arrow `us-fgs` — *tier 3,
2021–present. MAJOR UPGRADE in 2025.*
AFRICOM airstrikes against al-Shabaab and ISIS-Somalia; CIA /
JSOC-backed Danab Brigade; strike tempo scaled from ~10 in 2024 to
~124 in 2025 under Trump II; parallel pocket-rescission cut FY26
UNSOS contribution.
- AFRICOM press releases, strike ledger 2024–25.
- *New York Times*, Trump II airstrike surge reporting, 2025.
- ISS Africa, AFRICOM-Somalia tempo analysis, 2025.
- OMB pocket rescission documentation, 2025.
- US State Department counter-terrorism designations of AS / ISIS-S,
  ongoing.

### China

**China → FGS — diplomatic / trade** — arrow `cn-fgs` — *tier 2,
2021–present.*
Staunch opposition to Somaliland recognition; infrastructure
investments; consular pressure on Taiwan-Somaliland links;
Djibouti PLA base enables regional presence.
- China MFA statements on Somaliland, 2020–25.
- *South China Morning Post*, China–Somaliland–Taiwan triangle, 2024.
- ISS Africa, "China in the Horn", 2024.

### Russia

**Russia → FGS — diplomatic** — arrow `ru-neutral-som` — *tier 2,
2021–present.*
Limited leverage; backed UNSCR 2714 (1 Dec 2023) lifting the Somalia
arms embargo; routine cooperation through UN and BRICS tracks.
- UNSCR 2714 (1 Dec 2023).
- Russian MFA Somalia readouts, 2021–25.

### Uganda — NEW

**Uganda → FGS — military (AUSSOM)** — *proposed new arrow `uga-fgs`,
tier 3, 2007–present.*
UPDF has been the largest troop contributor to AMISOM, ATMIS and
now AUSSOM (~4,500 troops under AUSSOM as of 2025); recent UPDF–AS
engagements in Lower Shabelle.
- AU PSC communiques on AUSSOM force generation, 2024–25.
- UN Secretary-General reports on Somalia, 2023–25.
- ISS Africa, AUSSOM troop-contribution analysis, 2025.

### Burundi — NEW

**Burundi → FGS — military (historical)** — *proposed new arrow
`bdi-fgs`, tier 2, 2007–late 2024.*
ATMIS contributor through transition; withdrew by end of 2024 amid
FGS-Burundi friction and AUSSOM re-hatting; mark as "historical".
- AU PSC communique on Burundi withdrawal, 2024.
- Reuters, Burundi-Somalia diplomatic row, 2024.

### Israel — NEW

**Israel → Somaliland — diplomatic (recognition)** — *proposed new arrow
`isr-sml`, tier 2, 26 Dec 2025.*
Israeli recognition of Somaliland announced 26 Dec 2025; part of
Trump II-era realignment; reciprocal office openings announced.
- Israeli MFA statement, 26 Dec 2025.
- *Times of Israel*, recognition coverage, 26–27 Dec 2025.
- Mogadishu / OIC / AU rejection statements, Dec 2025–Jan 2026.
- *Foreign Policy*, recognition implications analysis, Jan 2026.

### Yemen / Houthis — NEW

**Houthis → al-Shabaab — illicit / military** — *proposed new arrow
`yem-shabaab`, tier 2, 2023–present.*
Documented weapons and training ties; tactics transfer (ATGMs, naval
drones); ideological + maritime corridor logic.
- UN Panel of Experts on Yemen, *Final report* `S/2024/748`, 2024.
- Carnegie Endowment, "Houthi-Shabaab nexus", Mar 2025.
- Africa Center for Strategic Studies, "Red Sea jihadist nexus", 2024.

### Taiwan — NEW

**Taiwan → Somaliland — diplomatic / trade** — *proposed new arrow
`twn-sml`, tier 2, 2020–present.*
Mutual representative offices since 2020; Taipei-funded hospital in
Hargeisa; maritime / ICT cooperation pact signed Jul 2025.
- Taiwan MOFA press materials on Somaliland office, 2020–25.
- *Focus Taiwan*, maritime cooperation pact, Jul 2025.
- Hargeisa hospital completion coverage, 2023.

### United Kingdom — NEW

**United Kingdom → FGS — diplomatic / military (Quint co-chair)** —
*proposed new arrow `gbr-fgs`, tier 2, 2012–present.*
Co-chairs Somalia Quint (UK, US, Norway, EU, UN); Permanent Joint
Headquarters provides counter-AS training; long-running diplomatic
penholder at UN Security Council.
- UK FCDO Somalia country strategy, 2022 and 2025 updates.
- Quint joint statements, 2023–25.
- UN Security Council Somalia debates (UK as penholder), 2021–25.

### European Union — NEW

**EU → FGS — military + financial** — *proposed new arrow `eu-fgs`,
tier 3, 2007–present.*
EUTM Somalia (training), EUCAP Somalia (maritime/police), EU NAVFOR
Atalanta (counter-piracy); ~€4.3bn in cumulative support to AMISOM /
ATMIS / AUSSOM and Somali state-building since 2007.
- EEAS mission factsheets (EUTM, EUCAP, Atalanta), 2024 updates.
- European Court of Auditors, Somalia support reports, 2022 and 2024.
- EU-Somalia joint communiques, 2023–25.

### African Union (meta) — NEW

**AU → AUSSOM (meta-mission arrow)** — *proposed new arrow `au-aussom`,
tier 3, 1 Jan 2025–present.*
AUSSOM re-hatted from ATMIS under UNSCR 2767 (27 Dec 2024),
effective 1 Jan 2025; mandate runs through 2025–28 with hybrid
AU-UN financing.
- UNSCR 2767, 27 Dec 2024.
- AU PSC communique authorising AUSSOM, 2024.
- UN Secretary-General reports on AUSSOM, 2025.


## Proposed arrow updates (against `CONFLICT_DATA.arrows` in `index.html`)

This section is a change-list of concrete diffs to the existing arrow set.
Actions:

- **UPDATE** — keep arrow `id`, change tier / dates / summary / sources.
- **CONSOLIDATE** — merge two arrows into one, preserving an id.
- **REFRAME** — keep arrow id, change the title / framing (e.g. "→ SAF"
  becomes "mediator").
- **ADD** — new arrow to add, with suggested id, type, tier, side.

Arrow line numbers below reference `index.html` as of commit `3ac8b5a`.

### Sudan

- **UPDATE `uae-rsf`** (line 620) — keep tier 3. Dates remain "2023–present".
  Expand sources to include UN Panel `S/2024/65`, UN Panel `S/2025/239`,
  Sentry Oct 2025 and Feb 2026, Amnesty May 2025, HRW Sep 2024,
  Sudan v. UAE ICJ filing (Mar 2025).
- **UPDATE `egy-saf`** (line 645) — keep tier 2. Add East Oweinat staging
  and Akinci sorties (MEE, Addis Standard, Al Jazeera — all Oct 2024).
- **UPDATE `irn-saf`** (line 668) — keep tier 2. Add Bloomberg 24 Jan 2024
  URL, Semafor Feb 2024, *Asharq Al-Awsat*.
- **UPDATE `tur-saf`** (line 680) — **upgrade tier 2 → 3**. Add Akinci
  package; MEE; ADF Mar 2025.
- **REFRAME `sau-saf`** (line 691) — retitle "Saudi Arabia → Sudan (Quad
  host, leaning SAF)". Add State Dept Quad statement, 12 Sep 2025.
- **UPDATE `eri-saf`** (line 713) — **upgrade tier 1 → 2**. Add Eastern
  Battalion / Beja training (Radio Dabanga, MadaMasr, Sudan Transparency
  and Policy Tracker).
- **UPDATE `tcd-rsf`** (line 724) — keep tier 3. Tighten to Amdjarass
  specificity; add Global Initiative, *The New Arab*, Sudan Tribune
  flight-tracker series.
- **UPDATE `lby-rsf`** (line 736) — **upgrade tier 2 → 3** (Kufra became
  primary route 2025). Add Libya Observer imagery, MEE, *The New Arab*,
  UN Panel `S/2025/239`.
- **REFRAME `us-saf`** (line 747) — retitle "US → Sudan (mediator +
  sanctions on both sides)". Add OFAC `jy2772` (Hemedti, 7 Jan 2025),
  `jy2789` (Burhan, 16 Jan 2025), `sb0330` (Colombian-mercenary network,
  Dec 2024), `sb0457` (Apr 2026), Dec 2024 State genocide determination.
- **UPDATE `ru-saf`** (line 769) — keep tier 2. Add Feb 2025 Port Sudan
  naval-facility MoU (Sudan Tribune 305646) and Nov 2025 freeze
  (Sudan Tribune 308824).
- **UPDATE `cn-neutral`** (line 780) — keep tier 2. Add 19 Nov 2025 CNPC
  force-majeure filing (Sudan Tribune 307895, 307982; China-Global South
  Project).
- **UPDATE `ru-rsf`** (line 758) — keep tier 2. Expand with Sentry /
  Source Material CAR-Wagner findings and UN Panel `S/2024/65` CAR
  routing.
- **ADD `ken-rsf`** — from `KEN` to `SDN_RSF`, side `rsf`, type
  `diplomatic`, tier 2, dates "2024–present". Hemedti hosting; Tasis
  signing Feb 2025; Gov of Peace & Unity Jul 2025.
- **ADD `uga-rsf`** — from `UGA` to `SDN_RSF`, side `rsf`, type
  `illicit`, tier 2, dates "2023–present". Entebbe cargo airbridge;
  C4ADS flight-tracking; Bar Aviation dossier.
- **ADD `car-rsf`** — from `CAF` to `SDN_RSF`, side `rsf`, type
  `illicit`, tier 1, dates "2022–present". Bangui/Birao Wagner corridor.
- **ADD `ssd-saf`** — from `SSD` to `SDN_SAF`, side `saf`, type `trade`,
  tier 2, dates "2023–present". Oil pipeline; Heglig tripartite Dec 2025.
- **ADD `isr-saf`** — from `ISR` to `SDN_SAF`, side `saf`, type
  `diplomatic`, tier 1, dates "2023–present". FM-Burhan track; Al-Sadig
  Ismail visit Apr 2025.
- **ADD `isr-rsf`** — from `ISR` to `SDN_RSF`, side `rsf`, type
  `diplomatic`, tier 1, dates "2020–present" (hedging / backchannel).
- **ADD `col-rsf`** — from `COL` to `SDN_RSF`, side `rsf`, type
  `military`, tier 2, dates "2024–present", flagged "mercenary
  recruitment". Sources: OFAC `sb0330`, UN Panel `S/2025/239`,
  *El Tiempo*, Colombian Fiscalía.
- **ADD `eth-rsf`** — from `ETH` to `SDN_RSF`, side `rsf`, type
  `illicit`, tier 1, flagged "reported", dates "2026". Kurmuk
  allegations.
- **ADD `yem-saf`** — from `YEM_HOUTHI` (off-map actor) to `SDN_SAF`,
  side `saf`, type `illicit`, tier 1, flagged "reported", dates
  "2024–present". Houthi-SAF weapons allegations.

### Ethiopia

- **UPDATE `eri-fed`** (line 794) — narrow dates to "2020–2022" and mark
  as "historical deployment during Tigray war". Sources: ICHREE final
  report `A/HRC/54/55`, Amnesty 2021, HRW 2022, Pretoria CoHA 2 Nov 2022.
- **UPDATE `tur-fed`** (line 818) — keep tier 2. Add Ankara Declaration
  mediator role (12 Dec 2024) alongside the earlier TB2 supply story.
- **UPDATE `ru-fed`** (line 885) — **upgrade tier 1 → 2**. Add Krasukha-4
  (Oct 2023), Su-30K package (Jan 2024), Rosatom civil-nuclear MoU and
  NDA (Sep 2025).
- **UPDATE `us-fed`** (line 863) — keep tier 2. Add AGOA termination
  effective 1 Jan 2022 (Proclamation 10327), ICHREE non-renewal Oct 2023,
  USAID Tigray food-aid pause May 2023 and 2025 cuts.
- **UPDATE `cn-fed`** (line 874) — keep tier 3. Add Wing Loong I
  deliveries Sep 2021 and G20 Common Framework debt restructuring 2024.
- **ADD `eri-tplf`** — from `ERI` to `ETH_TIGRAY`, side `tplf-leaning`,
  type `military`, tier 2, dates "2024–2026". Eritrea–Debretsion axis;
  country also tinted with the `tplf-leaning` stripe overlay to flag
  the hedged posture (added Apr 2026 after CSM reporting).
- **ADD `eri-fano`** — from `ERI` to `ETH_UNREST`, side `unrest`, type
  `military`, tier 1, dates "2024–present", flagged "alleged". Sawa
  training reports.
- **ADD `au-mediator`** — from `AU_OFFMAP` to `ETH_FED`, side `fed`,
  type `diplomatic`, tier 3, dates "2022–present". Pretoria CoHA.
- **ADD `isr-fed`** — from `ISR` to `ETH_FED`, side `fed`, type
  `diplomatic`, tier 1, dates "2021–present". Security cooperation and
  agricultural trade.

### Somalia

- **UPDATE `tur-fgs`** (line 899) — keep tier 3. Add TPAO oil/gas MoU
  (Mar 2024), Ankara Declaration (12 Dec 2024), Amnesty civilian-casualty
  report (May 2024).
- **UPDATE `uae-sml`** (line 911) — keep; split out a separate new arrow
  for UAE → Puntland rather than folding it in (see `uae-puntland`).
- **UPDATE `us-fgs`** (line 1002) — **major upgrade**. Document AFRICOM
  strike-count jump from ~10 in 2024 to ~124 in 2025; add Trump II
  pocket-rescission cut to UNSOS. Keep tier 3.
- **UPDATE `ru-neutral-som`** (line 1024) — keep tier 2. Add UNSCR 2714
  (1 Dec 2023) lifting Somalia arms embargo.
- **ADD `uae-puntland`** — from `UAE` to `SOM_PUNTLAND`, side
  `puntland`, type `military`, tier 2, dates "2012–present" with active
  air support 2024–25 (Cal-Miskaad / Hilaac operations).
- **ADD `uga-fgs`** — from `UGA` to `SOM_FGS`, side `fgs`, type
  `military`, tier 3, dates "2007–present". Largest AUSSOM contributor
  (~4,500 troops).
- **ADD `bdi-fgs`** — from `BDI` to `SOM_FGS`, side `fgs`, type
  `military`, tier 2, dates "2007–2024", flagged "historical". ATMIS
  contributor, withdrew late 2024.
- **ADD `isr-sml`** — from `ISR` to `SOM_SML`, side `sml`, type
  `diplomatic`, tier 2, dates "26 Dec 2025–present". Recognition.
- **ADD `yem-shabaab`** — from `YEM_HOUTHI` (off-map) to
  `SOM_SHABAAB`, side `shabaab`, type `illicit`, tier 2, dates
  "2023–present". Sources include UN Panel `S/2024/748`, Carnegie Mar
  2025, Africa Center.
- **ADD `twn-sml`** — from `TWN` to `SOM_SML`, side `sml`, type
  `diplomatic`, tier 2, dates "2020–present". Rep offices, hospital,
  Jul 2025 maritime pact.
- **ADD `gbr-fgs`** — from `GBR` to `SOM_FGS`, side `fgs`, type
  `diplomatic`, tier 2, dates "2012–present". Quint co-chair;
  counter-AS training.
- **ADD `eu-fgs`** — from `EU_OFFMAP` to `SOM_FGS`, side `fgs`, type
  `military`, tier 3, dates "2007–present". EUTM / EUCAP / Atalanta;
  ~€4.3bn since 2007.
- **ADD `au-aussom`** — from `AU_OFFMAP` to `SOM_FGS`, side `fgs`, type
  `military`, tier 3, dates "1 Jan 2025–present". Meta-mission arrow
  under UNSCR 2767.

## Final verification caveat (repeat)

Please click through at least one primary citation for every new
tier-3 arrow and every "alleged/reported" arrow before merging these
changes into `index.html`. The URLs in this document were confirmed
against search indices during the research pass but were not all body-
verified via WebFetch. Priority items to re-verify in full text:

1. UN Panel of Experts reports on Sudan (`S/2024/65`, `S/2025/239`).
2. OFAC designation memos (`jy2772`, `jy2789`, `sb0330`, `sb0457`).
3. State Department Quad statement, 12 Sep 2025.
4. Ankara Declaration (Ethiopia–Somalia), 12 Dec 2024.
5. UNSCR 2767 (27 Dec 2024) and UNSCR 2714 (1 Dec 2023).
6. Sudan v. UAE ICJ filing, 6 Mar 2025.
7. Amnesty International Somalia drone civilian-casualty report,
   May 2024.
8. Rosatom civil-nuclear MoU with Ethiopia, Sep 2025.
9. Israeli MFA recognition of Somaliland, 26 Dec 2025.
10. Pretoria Cessation of Hostilities Agreement, 2 Nov 2022.


// ═══════════════════════════════════════════════════════════════════
// UCIP Pediatria — Fontes Bibliográficas
// ═══════════════════════════════════════════════════════════════════

var SOURCES = {

  // ── REFERÊNCIAS PRIMÁRIAS ──────────────────────────────────────
  primary: [
    {
      id: "bnfc",
      title: "BNF for Children 2023–24",
      publisher: "British Medical Association / Royal Pharmaceutical Society",
      year: 2023,
      url: "https://bnfc.nice.org.uk",
      note: "Referência principal de posologia pediátrica. Atualização anual. Referência do NHS/NICE."
    },
    {
      id: "harriet_lane",
      title: "The Harriet Lane Handbook — 23rd Edition",
      publisher: "Johns Hopkins Hospital / Elsevier",
      year: 2021,
      note: "Manual clínico pediátrico de referência internacional. Dosing e protocolos clínicos."
    },
    {
      id: "formulario_pt",
      title: "Formulário de Pediatria — 3ª Edição",
      authors: "Rui Anjos, Teresa Bandeira, José Gonçalo Marques",
      publisher: "Edição dos autores",
      year: "s.d.",
      note: "3.ª edição, revista e actualizada (conforme a capa; o ano de edição não consta). Formulário de referência nacional português. Base bibliográfica desta aplicação."
    },
    {
      id: "who_mfc",
      title: "WHO Model Formulary for Children 2010",
      publisher: "World Health Organization",
      year: 2010,
      url: "https://www.who.int/publications/i/item/9789241599320",
      note: "Acesso livre. Útil como segunda referência independente; doses podem diferir das do BNFC."
    },
    {
      id: "pch_monographs",
      title: "Medication Management Manual — Monographs (Dexmedetomidine; Levosimendan)",
      publisher: "Perth Children's Hospital, Child and Adolescent Health Service (CAHS), Western Australia",
      year: 2026,
      url: "https://www.pch.health.wa.gov.au/~/media/Files/Hospitals/PCH/General-documents/Health-professionals/MedicationMonographs/Dexmedetomidine.pdf",
      note: "Monografias de hospital pediátrico terciário, de acesso livre (dexmedetomidina rev. abr. 2026; levosimendan rev. jun. 2024). Levosimendan: .../MedicationMonographs/Levosimendan.pdf"
    },
    {
      id: "anmf",
      title: "Australasian Neonatal Medicines Formulary (ANMF)",
      publisher: "Consórcio ANMF / SESLHD",
      url: "https://www.seslhd.health.nsw.gov.au/services-clinics/directory/newborn-care-centre-nicu/australasian-neonatal-medicines-formulary-anmf",
      note: "Monografias neonatais de acesso livre."
    },
    {
      id: "gosh",
      title: "Great Ormond Street Hospital Drug Formulary — 9th Edition",
      publisher: "Great Ormond Street Hospital for Children NHS Foundation Trust",
      year: 2023,
      url: "https://www.gosh.nhs.uk",
      note: "Formulário pediátrico especializado de referência internacional."
    }
  ],

  // ── REFERÊNCIAS DE COMPATIBILIDADE IV ─────────────────────────
  compatibility: [
    {
      id: "trissel",
      title: "Trissel's Handbook on Injectable Drugs — 20th Edition",
      publisher: "ASHP (American Society of Health-System Pharmacists)",
      year: 2019,
      note: "Referência gold-standard de compatibilidade de fármacos injectáveis."
    },
    {
      id: "king_guide",
      title: "King Guide to Parenteral Admixtures",
      publisher: "Neoforma",
      year: 2024,
      note: "Base de dados de compatibilidade IV continuamente actualizada."
    },
    {
      id: "nhs_medusa",
      title: "NHS Injectable Medicines Guide (Medusa)",
      publisher: "NHS Specialist Pharmacy Service",
      year: 2024,
      url: "https://www.injguide.nhs.uk",
      note: "Guia NHS de administração e compatibilidade de injectáveis."
    },
    {
      id: "leeds_picu",
      title: "Leeds PICU Y-Site Compatibility Chart",
      publisher: "Leeds Teaching Hospitals NHS Trust",
      year: 2024,
      note: "Tabela de compatibilidade Y-site específica para UCIP pediátrica."
    },
    {
      id: "castells_2020",
      title: "Drug incompatibilities in the ICU: a systematic review",
      authors: "Castells Lao G et al.",
      journal: "Medicina Intensiva",
      year: 2020,
      doi: "10.1016/j.medin.2019.09.012",
      note: "Revisão sistemática de incompatibilidades em UCI — base para dados de compat. desta app."
    },
    {
      id: "jppt_2023",
      title: "Physical and Chemical Compatibility of IV Drugs in Pediatric Critical Care",
      journal: "Journal of Pediatric Pharmacology and Therapeutics",
      year: 2023,
      doi: "10.5863/1551-6776-28.1.84"
    }
  ],

  // ── GUIDELINES CLÍNICAS ────────────────────────────────────────
  guidelines: [
    {
      id: "ilcor_2021",
      title: "ILCOR Consensus on Cardiopulmonary Resuscitation 2021",
      publisher: "International Liaison Committee on Resuscitation",
      year: 2021,
      url: "https://www.ilcor.org"
    },
    {
      id: "erc_2021",
      title: "European Resuscitation Council Guidelines 2021: Paediatric Life Support",
      authors: "Van de Voorde P, Turner NM, Djakow J, et al.",
      journal: "Resuscitation 161:327–387",
      year: 2021,
      doi: "10.1016/j.resuscitation.2021.02.015",
      note: "Substituída pela edição de 2025 (ver abaixo). Algumas fichas de emergência ainda citam esta versão."
    },
    {
      id: "erc_2025",
      title: "European Resuscitation Council Guidelines 2025: Paediatric Life Support",
      journal: "Resuscitation 215 (Suppl 1): 110767",
      year: 2025,
      doi: "10.1016/j.resuscitation.2025.110767",
      url: "https://pubmed.ncbi.nlm.nih.gov/41117571/",
      note: "Versão actual das normas europeias de SAV pediátrico."
    },
    {
      id: "aha_2025_pals",
      title: "Part 8: Pediatric Advanced Life Support — 2025 AHA and AAP Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care",
      journal: "Circulation 152(16_suppl_2): S479–S537",
      year: 2025,
      doi: "10.1161/CIR.0000000000001368",
      url: "https://pubmed.ncbi.nlm.nih.gov/41122885/",
      note: "Versão actual das normas AHA/AAP. Substitui o PALS 2020 citado em várias fichas."
    },
    {
      id: "pals_2020",
      title: "Pediatric Advanced Life Support Provider Manual",
      publisher: "American Heart Association",
      year: 2020
    },
    {
      id: "surviving_sepsis",
      title: "Executive summary: Surviving Sepsis Campaign International Guidelines for the Management of Septic Shock and Sepsis-Associated Organ Dysfunction in Children",
      authors: "Weiss SL, Peters MJ, Alhazzani W, et al.",
      journal: "Intensive Care Medicine 46(Suppl 1):1–9",
      year: 2020,
      doi: "10.1007/s00134-019-05877-7",
      note: "Texto completo: Pediatr Crit Care Med 2020;21(2):e52–e106."
    },
    {
      id: "gina_2023",
      title: "Global Initiative for Asthma (GINA) Guidelines 2023",
      publisher: "Global Initiative for Asthma",
      year: 2023,
      url: "https://ginasthma.org"
    },
    {
      id: "esicm_sedation",
      title: "ESICM/SCCM Clinical Practice Guidelines on Sedation and Analgesia in ICU",
      journal: "Intensive Care Medicine",
      year: 2018
    },
    {
      id: "nice_epilepsy",
      title: "NICE Guideline NG217: Epilepsies — diagnosis and management",
      publisher: "National Institute for Health and Care Excellence",
      year: 2022,
      url: "https://www.nice.org.uk/guidance/ng217"
    },
    {
      id: "escmid_fungi",
      title: "ESCMID/ECMM/ERN-RARE-LIVER Fungal Infection Guidelines 2023",
      journal: "Clinical Microbiology and Infection",
      year: 2023
    },
    {
      id: "ispad_cad",
      title: "ISPAD Clinical Practice Consensus Guidelines 2022: Diabetic ketoacidosis and the hyperglycemic hyperosmolar state",
      authors: "Glaser N, Fritsch M, Priyambada L, et al.",
      journal: "Pediatric Diabetes",
      year: 2022,
      doi: "10.1111/pedi.13406"
    },
    {
      id: "monagle_2018",
      title: "Antithrombotic Therapy in Neonates and Children — CHEST Guidelines",
      authors: "Monagle P et al.",
      journal: "CHEST",
      year: 2018,
      doi: "10.1016/j.chest.2018.03.011"
    }
  ],

  // ── ENSAIOS CLÍNICOS RELEVANTES ────────────────────────────────
  trials: [
    {
      id: "consept",
      title: "ConSEPT: Levetiracetam versus Phenytoin for Second-Line Treatment of Pediatric Convulsive Status Epilepticus",
      authors: "Lyttle MD et al.",
      journal: "Lancet",
      year: 2019,
      doi: "10.1016/S0140-6736(19)30722-6",
      note: "Levetiracetam EV não inferior à fenitoína no status epilepticus pediátrico"
    },
    {
      id: "eclipse",
      title: "ECLIPSE: Established Status Epilepticus Treatment Trial",
      authors: "Dalziel SR et al.",
      journal: "Lancet",
      year: 2019,
      doi: "10.1016/S0140-6736(19)30724-X"
    },
    {
      id: "crash2",
      title: "CRASH-2: Effects of tranexamic acid on death, vascular occlusive events, and blood transfusion",
      authors: "CRASH-2 Collaborators",
      journal: "Lancet",
      year: 2010,
      doi: "10.1016/S0140-6736(10)60835-5",
      note: "Ácido tranexâmico reduz mortalidade no trauma hemorrágico (administrar < 3h)"
    },
    {
      id: "cap_trial",
      title: "CAP: Caffeine for Apnea of Prematurity",
      authors: "Schmidt B et al.",
      journal: "New England Journal of Medicine",
      year: 2006,
      doi: "10.1056/NEJMoa054065",
      note: "Cafeína reduz broncodisplasia e melhora outcomes neurodesenvolvimentais"
    },
    {
      id: "kimberlin_cmv",
      title: "Valganciclovir for Symptomatic Congenital CMV Disease",
      authors: "Kimberlin DW et al.",
      journal: "New England Journal of Medicine",
      year: 2015,
      doi: "10.1056/NEJMoa1404599",
      note: "Valganciclovir 6 meses melhora outcomes auditivos no CMV congénito com envolvimento SNC"
    },
    {
      id: "safe_trial",
      title: "SAFE: Saline versus Albumin Fluid Evaluation",
      authors: "Finfer S et al.",
      journal: "New England Journal of Medicine",
      year: 2004,
      doi: "10.1056/NEJMoa040232"
    },
    {
      id: "rybak_vanco",
      title: "Therapeutic Monitoring of Vancomycin: ASHP/IDSA/SIDP Consensus Guidelines",
      authors: "Rybak MJ et al.",
      journal: "American Journal of Health-System Pharmacy",
      year: 2020,
      doi: "10.1093/ajhp/zxaa036",
      note: "AUC/MIC substitui monitorização de nível vale na vancomicina"
    }
  ],

  // ── NOTA DE AVISO LEGAL ───────────────────────────────────────
  disclaimer: "Esta aplicação é uma ferramenta de apoio à decisão clínica destinada a profissionais de saúde experientes. As informações de posologia, preparação e alertas são baseadas nas fontes bibliográficas listadas e foram compiladas com rigor. Contudo, não substitui o julgamento clínico, as guidelines institucionais locais, a informação de prescrição oficial (RCM/SmPC) nem a consulta ao farmacêutico. O utilizador é responsável pela verificação das doses e pela adequação ao doente individual. Os autores desta aplicação não assumem responsabilidade por erros de utilização clínica.",

  version: "v1.1 — Outubro 2026",
  app: "UCIP Pediatria — Formulário Farmacológico Pediátrico"
};

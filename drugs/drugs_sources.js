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
      year: "c. 2005",
      note: "Formulário de referência nacional português. Base bibliográfica desta aplicação."
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
      title: "European Resuscitation Council Guidelines 2021",
      publisher: "European Resuscitation Council",
      year: 2021,
      doi: "10.1016/j.resuscitation.2021.02.010"
    },
    {
      id: "pals_2020",
      title: "Pediatric Advanced Life Support Provider Manual",
      publisher: "American Heart Association",
      year: 2020
    },
    {
      id: "surviving_sepsis",
      title: "Surviving Sepsis Campaign: International Guidelines 2020",
      journal: "Intensive Care Medicine",
      year: 2021,
      doi: "10.1007/s00134-021-06398-6"
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
      title: "ISPAD Clinical Practice Consensus Guidelines 2022 — DKA",
      journal: "Pediatric Diabetes",
      year: 2022
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

  version: "v1.0 — Maio 2026",
  app: "UCIP Pediatria — Formulário Farmacológico Pediátrico"
};

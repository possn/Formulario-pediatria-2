// UCIP Pediatria — Oncologia & Suporte
// 7 fármacos
// Fontes: ver drugs_sources.js

var DRUGS_ONCOLOGIA = [
  {
    "id": "acetilcisteina",
    "name": "Acetilcisteína",
    "category": "antidoto",
    "class": "Antídoto paracetamol; mucolítico; precursor glutationa",
    "brands": "Fluimucil Antídoto 200 mg/ml (amp. 10 ml = 2g). Fluimucil 600 mg efervescente.",
    "indication": [
      "Intoxicação por paracetamol — antídoto (indicação MAJOR)",
      "Mucolítico em doenças respiratórias crónicas",
      "Protecção renal em nefropatia de contraste (evidência fraca)"
    ],
    "dose": [
      {
        "ind": "Intoxicação paracetamol — EV (protocolo 3 bolsas)",
        "val": "BOLSA 1: 150 mg/kg em 200 ml SG5% — 60 min; BOLSA 2: 50 mg/kg em 500 ml SG5% — 4 horas; BOLSA 3: 100 mg/kg em 1000 ml SG5% — 16 horas",
        "max": "—",
        "freq": "protocolo sequencial = total 300 mg/kg em ~21h",
        "note": "Iniciar se nível paracetamol acima da linha de tratamento no nomograma de Rumack-Matthew. Útil até 24h (máx. eficácia < 10h)"
      },
      {
        "ind": "Intoxicação paracetamol — oral (alternativa)",
        "val": "CARGA: 140 mg/kg; MANUTENÇÃO: 70 mg/kg oral cada 4h × 17 doses",
        "max": "—",
        "freq": "18 doses total",
        "note": "Dar em bebida gasosa. Evitar carvão activado simultâneo"
      }
    ],
    "prep": "EV: diluir em SG5% (não SF). Estável 24h.",
    "ci": [
      "Hipersensibilidade (relativa — benefício supera risco na intoxicação grave)"
    ],
    "alert": [
      "⚠️ Reacção anafilactóide frequente na 1ª bolsa (~15%) — urticária, broncoespasmo, hipotensão. Tratar com anti-H1 e reduzir velocidade. Retomar após resolução",
      "⚠️ Incompatível com ampicilina, eritromicina, anfotericina B",
      "Monitorizar nível paracetamol, LFTs, INR, creatinina",
      "Se INR > 3 em D2 ou hepatotoxicidade grave — contactar centro de transplante"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24; Prescott LF. Lancet 1979"
  },
  {
    "id": "ondansetron_chemo",
    "name": "Granisetrona",
    "category": "oncologia",
    "src": "added",
    "class": "Antagonista selectivo receptor 5-HT3 — antiemético de alta potência",
    "brands": "Kytril 1 mg comp.; 1 mg/ml EV",
    "indication": [
      "Náuseas e vómitos induzidos por quimioterapia altamente emetogénica",
      "Náuseas e vómitos pós-operatórios refractários"
    ],
    "dose": [
      {
        "ind": "Quimioterapia EV/oral",
        "val": "20–40 mcg/kg/dose EV",
        "max": "3 mg/dose",
        "freq": "30 min antes QT; pode repetir cada 12h",
        "note": "Oral: 1 mg × 2/dia (adulto)"
      }
    ],
    "prep": "EV: diluir em SF ou SG5% 50 ml. Infusão 5 min.",
    "ci": [
      "Prolongamento QT congénito"
    ],
    "alert": [
      "⚠️ Prolongamento QTc — monitorizar ECG se factores de risco",
      "Cefaleias (frequentes — transitórias)",
      "Obstipação"
    ],
    "source": "BNF for Children 2023-24; MASCC/ESMO Antiemetic Guidelines 2023"
  },
  {
    "id": "alopurinol_onco",
    "name": "Alopurinol",
    "category": "oncologia",
    "src": "original",
    "class": "Inibidor xantina oxidase — reduz produção ácido úrico",
    "brands": "Zyloric comp. 100/300 mg",
    "indication": [
      "Prevenção síndrome lise tumoral (SLT) — risco baixo-intermédio",
      "Hiperuricemia por gota (adolescente)",
      "Litíase úrica recorrente"
    ],
    "dose": [
      {
        "ind": "Profilaxia SLT oral",
        "val": "10 mg/kg/dia oral",
        "max": "300 mg/dia",
        "freq": "3 doses/dia; iniciar 1–2 dias antes QT",
        "note": "Hidratação agressiva concomitante"
      },
      {
        "ind": "Adulto / adolescente",
        "val": "300 mg/dia",
        "max": "900 mg/dia",
        "freq": "1–3 doses/dia",
        "note": ""
      }
    ],
    "prep": "Comprimidos podem ser dissolvidos em água.",
    "ci": [
      "Hipersensibilidade (rash frequente)"
    ],
    "alert": [
      "⚠️ Rash cutâneo — suspender imediatamente (pode progredir para SJS/TEN)",
      "⚠️ Interacção com azatioprina/mercaptopurina — reduzir dose 66–75%",
      "⚠️ Insuficiente para SLT alto risco (usar rasburicase)",
      "Monitorizar ácido úrico, creatinina e electrólitos"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; Howard SC. NEJM 2011"
  },
  {
    "id": "rasburicase",
    "name": "Rasburicase",
    "category": "oncologia",
    "src": "added",
    "class": "Urato oxidase recombinante — degrada ácido úrico em alantoína (mais solúvel)",
    "brands": "Fasturtec 1,5 mg; 7,5 mg pó EV",
    "indication": [
      "Síndrome lise tumoral (SLT) alto risco — tratamento e profilaxia",
      "Hiperuricemia refractária associada a neoplasia",
      "Leucemia/linfoma de alto volume tumoral"
    ],
    "dose": [
      {
        "ind": "SLT — EV",
        "val": "0,1–0,2 mg/kg/dia EV",
        "max": "—",
        "freq": "1×/dia × 5–7 dias",
        "note": "Dose única 0,15 mg/kg frequentemente suficiente"
      }
    ],
    "prep": "Reconstituir com tampão fornecido → diluir em SF 50 ml. Infusão 30 min. NÃO agitar. Usar imediatamente.",
    "ci": [
      "Défice G6PD (hemólise grave por H2O2 produzido)",
      "Metahemoglobinemia",
      "Gravidez"
    ],
    "alert": [
      "⛔ DÉFICE G6PD — hemólise grave e fatal. Rastrear antes de administrar em populações de risco (mediterrâneos, africanos, asiáticos)",
      "⚠️ Anafilaxia (2%) — ter adrenalina disponível",
      "⚠️ Amostras de ácido úrico devem ser analisadas imediatamente em gelo (rasburicase degrada urato in vitro à temperatura ambiente)",
      "Superior ao alopurinol no SLT alto risco"
    ],
    "source": "Coiffier B. JCO 2008; Howard SC. NEJM 2011; BNF for Children 2023-24"
  },
  {
    "id": "mesna",
    "name": "Mesna",
    "category": "oncologia",
    "src": "added",
    "class": "Uroprotector — neutraliza metabolitos uroterais da ifosfamida/ciclofosfamida",
    "brands": "Uromitexan amp. 400 mg/4 ml; comp. 400/600 mg",
    "indication": [
      "Profilaxia cistite hemorrágica por ifosfamida — obrigatório",
      "Profilaxia cistite hemorrágica por ciclofosfamida em altas doses"
    ],
    "dose": [
      {
        "ind": "Ifosfamida — EV",
        "val": "20% da dose ifosfamida nos tempos 0, 4h e 8h",
        "max": "—",
        "freq": "3 doses (0h, 4h, 8h após cada dose ifosfamida)",
        "note": "Dose total mesna = 60% da dose ifosfamida"
      },
      {
        "ind": "Ciclofosfamida altas doses",
        "val": "60–160% da dose ciclofosfamida (dividida)",
        "max": "—",
        "freq": "0h, 3h, 6h, 9h após ciclofosfamida",
        "note": ""
      }
    ],
    "prep": "EV: diluir em SF ou SG5%. Compatível com a maioria dos quimioterápicos.",
    "ci": [
      "Hipersensibilidade"
    ],
    "alert": [
      "NÃO é quimioterápico — sem toxicidade sistémica relevante",
      "Náuseas, vómitos (especialmente oral)",
      "Falsos positivos no teste urina para cetonas",
      "Hidratação adequada concomitante essencial"
    ],
    "source": "BNF for Children 2023-24; SIOPE Guidelines"
  },
  {
    "id": "filgrastim",
    "name": "Filgrastim (G-CSF)",
    "category": "oncologia",
    "src": "added",
    "class": "Factor estimulador de colónias granulocíticas recombinante",
    "brands": "Neupogen 300 mcg/ml seringa; Zarzio (biossimilar)",
    "indication": [
      "Neutropenia febril grave pós-quimioterapia",
      "Neutropenia congénita grave (Kostmann)",
      "Mobilização células estaminais para transplante",
      "Profilaxia neutropenia em regimes de alto risco"
    ],
    "dose": [
      {
        "ind": "Neutropenia pós-QT — SC/EV",
        "val": "5–10 mcg/kg/dia SC ou EV",
        "max": "—",
        "freq": "1×/dia; iniciar 24h após QT; manter até RAN > 1000/mcL × 2 dias",
        "note": "Não iniciar < 24h após QT (nem < 24h antes)"
      },
      {
        "ind": "Neutropenia congénita",
        "val": "5 mcg/kg/dia SC",
        "max": "—",
        "freq": "1×/dia; ajustar para RAN 1500–10000/mcL",
        "note": ""
      }
    ],
    "prep": "SC preferido. EV: diluir em SG5% (NÃO SF — precipita). Concentração ≥ 0,2 mcg/ml.",
    "ci": [
      "Leucemia mieloide (relativa — pode estimular clone)"
    ],
    "alert": [
      "⚠️ Dores ósseas (muito frequentes) — tratar com paracetamol/ibuprofeno",
      "⚠️ Esplenomegalia e rutura esplénica (raro — dor abdominal aguda)",
      "⚠️ Síndrome de fuga capilar (raro)",
      "⚠️ NÃO usar em leucemia mielóide aguda sem guideline oncológica",
      "Monitorizar hemograma 2×/semana"
    ],
    "source": "BNF for Children 2023-24; ASCO Guidelines 2015"
  },
  {
    "id": "naltrexona",
    "name": "Naltrexona",
    "category": "antidoto",
    "src": "added",
    "class": "Antagonista opioide de longa duração — oral",
    "brands": "Revia comp. 50 mg",
    "indication": [
      "Prevenção recaída em dependência opioides (adulto/adolescente)",
      "Síndrome de Sotos / comportamentos auto-lesivos em autismo (off-label)",
      "Prurido colestático refractário (off-label pediátrico)"
    ],
    "dose": [
      {
        "ind": "Dependência opioides (adulto)",
        "val": "25 mg 1º dia → 50 mg/dia",
        "max": "50 mg/dia",
        "freq": "1×/dia",
        "note": "Iniciar APENAS após desintoxicação (≥ 7–10 dias sem opioides)"
      },
      {
        "ind": "Prurido colestático (off-label pediátrico)",
        "val": "0,5–1 mg/kg/dia",
        "max": "50 mg/dia",
        "freq": "1×/dia",
        "note": ""
      }
    ],
    "prep": "Oral. Comprimidos podem ser triturados.",
    "ci": [
      "Uso activo de opioides (precipita abstinência aguda grave)",
      "Hepatite aguda / insuf. hepática",
      "Dependência opioides não desintoxicada"
    ],
    "alert": [
      "⛔ PRECIPITA SÍNDROME DE ABSTINÊNCIA AGUDA se doente ainda usar opioides — risco grave",
      "⚠️ Hepatotoxicidade em doses altas",
      "Não usar para analgesia (antagonista — bloqueia efeito analgésico)"
    ],
    "source": "BNF for Children 2023-24; Revia SmPC"
  }
];

// UCIP Pediatria — Emergência & Reanimação
// 8 fármacos
// Fontes: ver drugs_sources.js

var DRUGS_EMERGENCIA = [
{
    "id": "adrenalina",
    "name": "Adrenalina (Epinefrina)",
    "category": "emergencia",
    "class": "Catecolamina — agonista α e β-adrenérgico",
    "brands": "Adrenalina 1:1000 (1 mg/ml)",
    "indication": [
      "Paragem cardiorrespiratória",
      "Anafilaxia grave",
      "Bradicardia sintomática refractária à atropina",
      "Suporte inotrópico/vasopressor (perfusão)"
    ],
    "dose": [
      {
        "ind": "PCR — EV/IO",
        "val": "0,01 mg/kg (= 0,1 ml/kg da solução 1:10000)",
        "max": "1 mg/dose",
        "freq": "cada 3–5 min",
        "note": "Repetir até ROSC. Para obter 1:10000: diluir 1 ml de 1:1000 em 9 ml SF"
      },
      {
        "ind": "PCR — endotraqueal",
        "val": "0,1 mg/kg (= 0,1 ml/kg da 1:1000)",
        "max": "2,5 mg/dose",
        "freq": "única (via ET apenas se sem AV/IO)",
        "note": ""
      },
      {
        "ind": "Anafilaxia — IM",
        "val": "0,01 mg/kg da 1:1000",
        "max": "0,5 mg/dose",
        "freq": "cada 5–15 min se necessário",
        "note": "Via IM face antero-lateral da coxa. EpiPen Jr 0,15 mg (< 25 kg); EpiPen 0,3 mg (≥ 25 kg)"
      },
      {
        "ind": "Suporte vasopressor — perfusão EV",
        "val": "0,05–0,3 mcg/kg/min",
        "max": "1–2 mcg/kg/min (casos extremos)",
        "freq": "contínua",
        "note": "Titular pela TA e clínica. Doses > 0,5 mcg/kg/min: considerar vasopressina adjuvante"
      }
    ],
    "prep": "Perfusão: (0,3 × Peso kg) mg em 50 ml SG5% → 1 ml/h = 0,1 mcg/kg/min. Concentrações até 0,5 mg/ml EV central.",
    "ci": [
      "Não há contra-indicações absolutas na emergência"
    ],
    "alert": [
      "⚠️ Incompatível com bicarbonato de sódio (inactivada)",
      "⚠️ Extravasamento causa necrose — usar acesso central em perfusão",
      "Monitorização ECG contínua obrigatória",
      "Efeitos: taquicardia, HTA, hiperglicemia, hipocaliemia"
    ],
    "source": "ILCOR 2021; ERC Guidelines 2021; WAO Anaphylaxis Guidelines 2020"
  },
{
    "id": "atropina",
    "name": "Atropina",
    "category": "emergencia",
    "class": "Anticolinérgico — antagonista muscarínico",
    "brands": "Atropina 0,5 mg/ml; 1 mg/ml",
    "indication": [
      "Bradicardia sintomática (PCR, pré-intubação)",
      "Bloqueio AV sintomático",
      "Intoxicação por organofosforados/carbamatos",
      "Pré-medicação (redução secreções)"
    ],
    "dose": [
      {
        "ind": "Bradicardia / PCR",
        "val": "0,02 mg/kg EV/IO",
        "max": "0,5 mg (criança); 1 mg (adolescente)",
        "freq": "pode repetir 1x após 5 min",
        "note": "Dose mínima 0,1 mg (doses menores podem causar bradicardia paradoxal)"
      },
      {
        "ind": "Intoxicação organofosforados",
        "val": "0,05 mg/kg EV",
        "max": "sem limite definido",
        "freq": "cada 5–10 min até secar secreções",
        "note": "Titular pelo efeito: secreções, broncoespasmo. Doses muito altas podem ser necessárias"
      },
      {
        "ind": "Pré-intubação",
        "val": "0,02 mg/kg EV",
        "max": "0,5 mg",
        "freq": "dose única 1–2 min antes",
        "note": "Previne bradicardia vagal na laringoscopia, especialmente < 1 ano"
      }
    ],
    "prep": "Administrar não diluída em emergência. Para perfusão: diluir em SF.",
    "ci": [
      "Glaucoma de ângulo fechado (relativa)",
      "Taquicardia não controlada"
    ],
    "alert": [
      "⚠️ Dose mínima 0,1 mg — doses < 0,1 mg podem paradoxalmente causar bradicardia",
      "Efeitos: midríase, retenção urinária, boca seca, hipertermia",
      "Na intoxicação por OFs: doses 10–100× superiores ao normal são frequentes"
    ],
    "source": "ILCOR 2021; BNF for Children 2023-24; Harriet Lane 23rd Ed"
  },
{
    "id": "bicarbonato",
    "name": "Bicarbonato de Sódio",
    "category": "emergencia",
    "class": "Tampão alcalino",
    "brands": "NaHCO3 8,4% (1 mmol/ml); 4,2% (0,5 mmol/ml)",
    "indication": [
      "Acidose metabólica grave (pH < 7,1) com compromisso hemodinâmico",
      "Hipercaliemia grave com alterações ECG",
      "Intoxicação por antidepressivos tricíclicos / salicilatos",
      "PCR prolongada (após ≥ 10 min de suporte)"
    ],
    "dose": [
      {
        "ind": "Acidose / PCR",
        "val": "1 mmol/kg (= 1 ml/kg da sol. 8,4%)",
        "max": "50 mmol/dose",
        "freq": "pode repetir guiado por gasometria",
        "note": "Usar sol. 4,2% em RN e lactentes < 3 meses"
      },
      {
        "ind": "Hipercaliemia grave",
        "val": "1–2 mmol/kg EV em 5–10 min",
        "max": "50 mmol",
        "freq": "dose única (efeito temporário)",
        "note": "Não corrige a hipercaliemia — transloca K+ para célula"
      },
      {
        "ind": "Alcalinização urinária (intox. salicilatos)",
        "val": "1–2 mmol/kg EV",
        "max": "100 mmol",
        "freq": "seguido de perfusão para manter pH urinário 7,5–8",
        "note": ""
      }
    ],
    "prep": "Usar solução 4,2% em RN/lactentes (solução 8,4% é hiperosmolar — risco HIV). Não misturar com cálcio (precipita) nem adrenalina (inactiva).",
    "ci": [
      "Alcalose metabólica",
      "Hipocaliemia não corrigida"
    ],
    "alert": [
      "⚠️ Incompatível com cálcio, adrenalina, dopamina",
      "⚠️ Solução 8,4% em RN — risco de hemorragia intraventricular",
      "⚠️ Não usar na acidose respiratória sem ventilação assegurada (↑CO2)",
      "Causa hipernatremia e hiperosmolaridade — monitorizar",
      "Hipocaliemia após correcção da acidose"
    ],
    "source": "ILCOR 2021; Harriet Lane 23rd Ed; BNF for Children 2023-24"
  },
{
    "id": "calcio_gluconato",
    "name": "Gluconato de Cálcio 10%",
    "category": "emergencia",
    "class": "Electrólito — cálcio",
    "brands": "Gluconato de Cálcio 10% (0,22 mmol Ca²⁺/ml)",
    "indication": [
      "Hipocalcemia sintomática (tetania, convulsões, PCR)",
      "Hipercaliemia grave com alterações ECG (cardioprotecção)",
      "Hipermagnesemia sintomática",
      "Bloqueio de canais de cálcio (intoxicação por BCC)"
    ],
    "dose": [
      {
        "ind": "Hipocalcemia sintomática / PCR",
        "val": "0,5 ml/kg da solução 10% (= 0,11 mmol/kg)",
        "max": "20 ml (2 g)",
        "freq": "EV lento em 5–10 min; repetir se necessário",
        "note": "Na PCR: bólus EV rápido"
      },
      {
        "ind": "Hipercaliemia — cardioprotecção",
        "val": "0,5–1 ml/kg da solução 10%",
        "max": "20 ml",
        "freq": "EV em 5–10 min; efeito dura 30–60 min",
        "note": "Não reduz o K+ sérico — estabiliza membrana cardíaca"
      },
      {
        "ind": "Manutenção hipocalcemia",
        "val": "0,5–1 mmol/kg/dia",
        "max": "—",
        "freq": "perfusão contínua EV central",
        "note": ""
      }
    ],
    "prep": "EV periférico: concentração máxima 10%. EV central: até 20%. NUNCA IM (necrose). Não misturar com bicarbonato (precipita CaCO3).",
    "ci": [
      "Hipercalcemia",
      "Doente digitálico (arritmias)",
      "Nefrolitíase cálcica (relativa)"
    ],
    "alert": [
      "⚠️ Bradicardia e assistolia se infusão rápida — monitorizar ECG",
      "⚠️ Extravasamento causa necrose tecidular grave",
      "⚠️ Incompatível com bicarbonato e fosfatos",
      "⚠️ Potencia toxicidade da digoxina",
      "Preferir cloreto de cálcio na PCR (3× mais Ca²⁺ biodisponível)"
    ],
    "source": "BNF for Children 2023-24; Harriet Lane 23rd Ed; PALS AHA 2020"
  },
{
    "id": "flumazenil",
    "name": "Flumazenil",
    "category": "emergencia",
    "class": "Antagonista benzodiazepínico — bloqueador competitivo receptor GABA-A",
    "brands": "Anexate — ampolas 0,5 mg/5 ml (0,1 mg/ml)",
    "indication": [
      "Reversão de sedação/depressão respiratória por benzodiazepinas",
      "Intoxicação por benzodiazepinas com depressão do SNC",
      "Diagnóstico diferencial coma de causa desconhecida"
    ],
    "dose": [
      {
        "ind": "Reversão sedação/intoxicação BZD",
        "val": "0,01 mg/kg EV em 15 seg",
        "max": "0,2 mg/dose; máx acumulado 1 mg",
        "freq": "Repetir q1 min até resposta; máx 4 doses",
        "note": "Semi-vida 40–80 min — muito mais curta que benzodiazepinas; ressedação frequente. Monitorizar ≥ 2h após última dose"
      }
    ],
    "prep": "EV: administrar não diluído (0,1 mg/ml) ou diluir em SF. Bólus lento 15 seg. Ter material reanimação disponível.",
    "ci": [
      "Intoxicação mista com antidepressivos tricíclicos (pode precipitar convulsões)",
      "Epilepsia em tratamento crónico com BZD (pode precipitar estado de mal epiléptico)",
      "Pressão intracraniana elevada (vasodilatação cerebral)"
    ],
    "alert": [
      "⚠️ Ressedação provável — semi-vida 40 min vs horas para BZD; manter monitorização",
      "⚠️ Pode precipitar síndrome abstinência BZD aguda (convulsões, agitação) em dependentes",
      "⚠️ NÃO reverte depressão por opioides, barbitúricos ou outros hipnóticos",
      "Não usar como diagnóstico de rotina em coma — usar apenas quando BZD documentada ou fortemente suspeita"
    ],
    "source": "BNF for Children 2023-24; Bhatt M et al. Lancet 2017; TOXBASE UK"
  },
  {
    "id": "naloxona_emerg",
    "name": "Naloxona (Emergência)",
    "category": "emergencia",
    "class": "Antagonista opioide — bloqueador competitivo receptores μ, κ, δ",
    "brands": "Narcan — ampolas 0,4 mg/ml (1 ml); 1 mg/ml (2 ml); intranasal 4 mg/0,1 ml",
    "indication": [
      "Depressão respiratória por opioides — emergência",
      "Coma/inconsciência por intoxicação opioide",
      "Apneia neonatal por opioides maternos intraparto",
      "Prurido refractário e retenção urinária por opioides (doses baixas)"
    ],
    "dose": [
      {
        "ind": "Depressão respiratória grave — criança",
        "val": "0,01 mg/kg EV/IO/IM/SC",
        "max": "0,4 mg/dose",
        "freq": "q2–3 min até resposta respiratória adequada (não esperar reversão completa)",
        "note": "Titular para manter FR adequada sem reverter analgesia completa. Infusão: 0,005–0,01 mg/kg/h se recorrência"
      },
      {
        "ind": "Apneia neonatal por opioides maternos",
        "val": "0,01 mg/kg EV/IM/SC",
        "max": "—",
        "freq": "Dose única; repetir se sem resposta em 2–3 min",
        "note": "NÃO administrar a RN de mãe dependente de opioides (precipita abstinência neonatal grave)"
      },
      {
        "ind": "Intranasal (pré-hospitalar/IM indisponível)",
        "val": "0,1 mg/kg IN",
        "max": "4 mg total",
        "freq": "q2–3 min",
        "note": "Absorção IN mais lenta — usar EV/IO se acesso disponível"
      }
    ],
    "prep": "EV: diluir para 0,04 mg/ml (0,4 mg em 10 ml SF) para titulação precisa em criança. Perfusão: 0,4–1 mg em 100 ml SF, titular por resposta.",
    "ci": [
      "Hipersensibilidade à naloxona",
      "Cautela em dependentes de opioides (precipita abstinência aguda grave)"
    ],
    "alert": [
      "⚠️ Semi-vida 60–90 min — mais curta que maioria dos opioides; ressedação frequente, especialmente com metadona ou fentanil LP",
      "⚠️ Reversão demasiado rápida/dose excessiva: dor aguda, hipertensão, edema pulmonar, arritmias, PCR (descrito em adultos)",
      "⚠️ NÃO administrar a RN de mãe em programa de metadona — abstinência neonatal grave",
      "Titular para manter FR > 8/min e SpO2 > 94% — não para acordar completamente",
      "Alternativa à naloxona em prurido opioide: doses muito baixas 0,5–2 μg/kg/h"
    ],
    "source": "BNF for Children 2023-24; PALS AHA 2020; Boyer EW NEJM 2012"
  },
  {
    "id": "sulfato_mg_emerg",
    "name": "Sulfato de Magnésio (Emergência)",
    "category": "emergencia",
    "class": "Electrólito — bloqueador canal Ca²⁺, broncodilatador, anticonvulsivante",
    "brands": "Sulfato de Magnésio 50% (500 mg/ml) — ampolas 10 ml (5 g)",
    "indication": [
      "Broncoespasmo grave refractário a β2 — adjuvante na asma grave",
      "Torsades de pointes — 1ª linha",
      "Convulsões por eclâmpsia / hipomagnesemia",
      "Hipomagnesiemia sintomática grave",
      "Arritmias refractárias associadas a hipomagnesemia"
    ],
    "dose": [
      {
        "ind": "Broncoespasmo grave (asma aguda)",
        "val": "25–75 mg/kg EV em 20 min",
        "max": "2 g",
        "freq": "Dose única; pode repetir 1× se necessário",
        "note": "Reduz internamento em UCI em asma grave (Cochrane 2014, NNT=4 para hospitalização)"
      },
      {
        "ind": "Torsades de pointes / hipomagnesemia grave",
        "val": "25–50 mg/kg EV em 10–20 min",
        "max": "2 g",
        "freq": "Dose única; perfusão manutenção 10–20 mg/kg/h se recorrência",
        "note": ""
      }
    ],
    "prep": "EV: diluir solução 50% em SF ou SG5% até concentração ≤ 20% (200 mg/ml) periférico; ≤ 50% central. NUNCA em bólus rápido (assistolia).",
    "ci": [
      "Bloqueio AV (aprofunda bloqueio)",
      "Insuficiência renal grave (acumulação — toxicidade)",
      "Miastenia gravis (bloqueio neuromuscular)"
    ],
    "alert": [
      "⚠️ Toxicidade por magnésio: hiporreflexia → paralisia respiratória → PCR. Monitorizar reflexo rotuliano",
      "⚠️ Antídoto da toxicidade: gluconato de cálcio 10% 0,2 ml/kg EV",
      "⚠️ Infusão rápida causa hipotensão e rubor facial",
      "Monitorizar magnesiemia se perfusão prolongada (alvo 2–3,5 mmol/L terapêutico)"
    ],
    "source": "BNF for Children 2023-24; Griffiths B et al. Cochrane 2016 (asma); PALS AHA 2020"
  },
  {
    "id": "dextrose_emerg",
    "name": "Glucose 10% / 20% (Hipoglicemia)",
    "category": "emergencia",
    "class": "Substrato energético — carbohidrato",
    "brands": "Glucose 10% 250 ml; Glucose 20% 100 ml; Glucose 50% 20 ml ampola",
    "indication": [
      "Hipoglicemia sintomática grave — emergência",
      "Hipoglicemia neonatal (< 2,6 mmol/L sintomática)",
      "Hipoglicemia em contexto de intoxicação por insulina/sulfonilureias",
      "Manutenção normoglicemia em doente crítico pediátrico"
    ],
    "dose": [
      {
        "ind": "Hipoglicemia sintomática grave — bólus",
        "val": "2 ml/kg de Glucose 10% EV",
        "max": "—",
        "freq": "Bólus; repetir controlo glicemia 15 min",
        "note": "Equivalente a 0,2 g/kg glucose. Em RN/lactente: usar G10%; em criança maior: G10% ou G20% (0,5–1 ml/kg)"
      },
      {
        "ind": "Hipoglicemia — manutenção após bólus",
        "val": "Taxa de infusão de glucose (GIR) 4–8 mg/kg/min",
        "max": "—",
        "freq": "Perfusão contínua; ajustar por glicemia capilar q1–2h",
        "note": "Fórmula GIR: ml/h = GIR(mg/kg/min) × peso(kg) × 60 / [concentração glucose(mg/ml)]"
      }
    ],
    "prep": "Bólus: G10% — administrar EV em 1–3 min. G20% ou G50% APENAS por acesso central (risco esclerose venosa). Proteger da luz se prolongado.",
    "ci": [
      "Hiperosmolaridade grave",
      "Hiperglicemia (obviar causa antes de infundir)",
      "G50% por via periférica"
    ],
    "alert": [
      "⚠️ G50% nunca periférica — extravasamento causa necrose tecidular grave",
      "⚠️ Controlar glicemia 15 min após bólus e q1h durante infusão — risco hiperglicemia rebote",
      "Hipoglicemia recorrente após bólus sugere causa subjacente (hiperinsulinismo, insuf. supra-renal, erros metabólicos)",
      "Em RN: GIR 4–6 mg/kg/min habitual; hiperinsulinismo pode necessitar GIR > 15 mg/kg/min"
    ],
    "source": "BNF for Children 2023-24; Thornton PS et al. Pediatrics 2015 (neonatal hypoglycemia)"
  }
];

// UCIP Pediatria — Emergência & Reanimação
// 6 fármacos
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
    "id": "adenosina",
    "name": "Adenosina",
    "category": "emergencia",
    "class": "Antiarrítmico — agonista dos receptores de adenosina A1",
    "brands": "Adenocor 6 mg/2 ml",
    "indication": [
      "Taquicardia supraventricular paroxística (TSV) — 1ª linha",
      "Diagnóstico diferencial taquicardias de QRS estreito"
    ],
    "dose": [
      {
        "ind": "TSV",
        "val": "0,1 mg/kg EV bólus rápido",
        "max": "6 mg 1ª dose; 12 mg doses seguintes",
        "freq": "Aumentar 0,05–0,1 mg/kg cada 1–2 min se sem resposta",
        "note": "Administrar em acesso EV o mais central possível, seguido imediatamente de flush 5–10 ml SF. Bólus em < 2 seg."
      }
    ],
    "prep": "Não diluir. Bólus rápido seguido de flush SF imediato.",
    "ci": [
      "Bloqueio AV 2º/3º grau (sem pacemaker)",
      "Doença do nódulo sinusal",
      "Asma grave (broncoespasmo)"
    ],
    "alert": [
      "⚠️ Semi-vida ~10 seg — tem de ser administrada MUITO rapidamente e pelo acesso mais central disponível",
      "⚠️ Potenciada por dipiridamol (reduzir dose 75%) e carbamazepina",
      "⚠️ Antagonizada por teofilina/cafeína (pode necessitar doses maiores)",
      "Efeitos transitórios: rubor, dispneia, dor torácica, assistolia momentânea — normal e esperado",
      "Monitorização ECG contínua obrigatória"
    ],
    "source": "PALS Guidelines AHA 2020; BNF for Children 2023-24"
  },
  {
    "id": "amiodarona",
    "name": "Amiodarona",
    "category": "emergencia",
    "class": "Antiarrítmico classe III — bloqueador múltiplos canais",
    "brands": "Cordarone 150 mg/3 ml",
    "indication": [
      "FV/TV sem pulso refractária à desfibrilhação (PCR)",
      "TV com pulso hemodinamicamente instável",
      "TSV refractária à adenosina",
      "Flutter/fibrilhação auricular"
    ],
    "dose": [
      {
        "ind": "PCR (FV/TV sem pulso)",
        "val": "5 mg/kg EV/IO bólus",
        "max": "300 mg",
        "freq": "Pode repetir até 2x (máx. 15 mg/kg total no dia)",
        "note": "Administrar após 3ª desfibrilhação"
      },
      {
        "ind": "TV com pulso / TSV",
        "val": "5 mg/kg EV em 20–60 min",
        "max": "300 mg/dose",
        "freq": "pode repetir até dose total 15 mg/kg/dia",
        "note": "Diluir em SG5%. Monitorização TA contínua — hipotensão frequente"
      },
      {
        "ind": "Manutenção",
        "val": "10–20 mg/kg/dia EV",
        "max": "1200 mg/dia",
        "freq": "perfusão contínua",
        "note": ""
      }
    ],
    "prep": "Diluir sempre em SG5% (precipita com SF). Concentração máxima EV periférico: 2 mg/ml. EV central: até 6 mg/ml.",
    "ci": [
      "Bloqueio AV 2º/3º grau sem pacemaker",
      "Doença do nódulo sinusal",
      "Disfunção tiroideia grave",
      "Hipersensibilidade ao iodo"
    ],
    "alert": [
      "⚠️ Incompatível com SF — usar EXCLUSIVAMENTE SG5%",
      "⚠️ Múltiplas interacções: digoxina (↑ nível 2×), varfarina, fenitoína",
      "⚠️ Toxicidade pulmonar, hepática, tiroideia em uso prolongado",
      "Hipotensão durante infusão — titular velocidade",
      "QTc prolongado — risco torsades de pointes (menor que outros antiarrítmicos Cl III)"
    ],
    "source": "ILCOR 2021; ERC 2021; PALS AHA 2020"
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
  }
];

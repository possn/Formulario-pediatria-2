// UCIP Pediatria — Emergência & Reanimação
// 10 fármacos
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
      "Suporte inotrópico/vasopressor (perfusão)",
      "PCR neonatal — reanimação em sala de partos",
      "Choque séptico neonatal — vasopressor de 1ª linha (SSC Neonatal 2020)",
      "Hipotensão refractária à dopamina",
      "Anafilaxia neonatal",
      "Choque séptico refractário à noradrenalina e dobutamina",
      "Choque anafilático após bólus IM — perfusão de manutenção",
      "Choque cardiogénico com baixo débito e hipotensão grave"
    ],
    "dose": [
      {
        "ind": "PCR — EV/IO",
        "val": "0,01 mg/kg (= 0,1 ml/kg da solução 1:10 000)",
        "max": "—",
        "freq": "Repetir se necessário",
        "note": "Shann (Cardiac arrest). Para 1:10 000: diluir 1 ml de 1:1000 em 9 ml SF. Intervalo entre doses: seguir algoritmo ERC/AHA vigente (não consta do BNFC 2020-21 nem do Shann)."
      },
      {
        "ind": "PCR — endotraqueal (só se sem EV/IO)",
        "val": "0,1 mg/kg (= 0,1 ml/kg da 1:1000)",
        "max": "—",
        "freq": "Repetir se necessário",
        "note": "Shann. Via menos fiável; preferir EV/IO."
      },
      {
        "ind": "Anafilaxia — IM (1.ª linha)",
        "val": "1 mês–5 anos: 150 mcg; 6–11 anos: 300 mcg; 12–17 anos: 500 mcg (300 mcg se pequeno/pré-púbere)",
        "max": "500 mcg/dose",
        "freq": "Repetir cada 5 min conforme TA, pulso e função respiratória",
        "note": "BNFC 2020-21 (p. 143). Face antero-lateral do terço médio da coxa; usar seringa adequada para pequenos volumes. Shann: 0,01 mg/kg (0,01 ml/kg da 1:1000)."
      },
      {
        "ind": "Anafilaxia com dúvida sobre adequação da circulação — EV lenta (uso especializado)",
        "val": "1 mcg/kg (adrenalina 1:10 000 diluída)",
        "max": "50 mcg/dose",
        "freq": "Repetir conforme resposta; se necessárias várias doses, passar a perfusão e parar quando houver resposta",
        "note": "BNFC 2020-21 (p. 143). Shann: 0,05–0,1 ml/kg da 1:10 000 (5–10 mcg/kg) — dose superior à do BNFC; usar a do BNFC salvo decisão especializada."
      },
      {
        "ind": "Hipotensão aguda / choque — perfusão EV",
        "val": "0,05–0,5 mcg/kg/min",
        "max": "1,5 mcg/kg/min",
        "freq": "Contínua; titular à resposta",
        "note": "BNFC 2020-21 (p. 143): início 100 ng/kg/min (RN e criança), ajustar; até 1,5 mcg/kg/min em hipotensão aguda. Shann: 0,05–0,5 mcg/kg/min. Acesso central."
      },
      {
        "ind": "Crupe não controlado com corticoide — nebulizada",
        "val": "400 mcg/kg",
        "max": "5 mg/dose",
        "freq": "Repetir após 30 min se necessário",
        "note": "BNFC 2020-21 (p. 143), 1 mês–11 anos. Efeito dura 2–3 h."
      }
    ],
    "prep": "Perfusão: (0,3 × Peso kg) mg em 50 ml SG5% → 1 ml/h = 0,1 mcg/kg/min. Concentrações até 0,5 mg/ml EV central.",
    "ci": [
      "Não há contra-indicações absolutas na emergência",
      "Não há CI absolutas na emergência neonatal",
      "Taquicardia > 180 bpm (relativa — avaliar)",
      "Hipocaliemia não corrigida (arritmias)",
      "Anestesia com halotano (sensibilização miocárdica)"
    ],
    "alert": [
      "⚠️ Incompatível com bicarbonato de sódio (inactivada)",
      "⚠️ Extravasamento causa necrose — usar acesso central em perfusão",
      "Monitorização ECG contínua obrigatória",
      "Efeitos: taquicardia, HTA, hiperglicemia, hipocaliemia",
      "⚠️ Taquicardia, HTA, vasoconstrição periférica",
      "⚠️ Hiperglicemia e hiperlactacidemia (efeito metabólico)",
      "⚠️ EV central para perfusão contínua",
      "⚠️ VIA CENTRAL EXCLUSIVA — extravasamento causa necrose grave; se extravasamento: fentolamina SC local",
      "⚠️ Taquicardia e arritmias — monitorizar ECG contínuo",
      "⚠️ Hipocaliemia — adrenalina redistribui K⁺ para intracelular; monitorizar e repor",
      "⚠️ Hiperglicemia — inibe libertação de insulina; monitorizar glicemia",
      "Isquemia mesentérica e periférica com doses altas — monitorizar lactato e perfusão"
    ],
    "source": "BNFC 2020-21, Adrenaline/epinephrine (p. 143); Shann Drug Doses (Adrenaline)",
    "review": ["Doses neonatais em sala de partos (EV/IO) removidas por não estarem verificadas no BNFC 2020-21/Shann: consultar algoritmo ERC/ILCOR neonatal vigente. Intervalo e dose máxima em PCR pediátrica: confirmar em ERC/AHA 2025."]
  
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
        "ind": "Bradicardia intra-operatória / controlo de efeitos muscarínicos (EV)",
        "val": "RN: 10–20 mcg/kg; 1 mês–11 anos: 10–20 mcg/kg; 12–17 anos: 300–600 mcg",
        "max": "—",
        "freq": "—",
        "note": "BNFC 2020-21, Atropine sulfate (p. 869)."
      },
      {
        "ind": "Pré-medicação anestésica (EV, imediatamente antes da indução)",
        "val": "RN: 10 mcg/kg; 1 mês–11 anos: 20 mcg/kg; 12–17 anos: 300–600 mcg",
        "max": "600 mcg (mín. 100 mcg em 1 mês–11 anos)",
        "freq": "Dose única",
        "note": "BNFC 2020-21 (p. 869). IM/SC: 10–30 mcg/kg 30–60 min antes (1 mês–11 anos)."
      },
      {
        "ind": "Intoxicação por organofosforados / agente neurotóxico (com pralidoxima)",
        "val": "20 mcg/kg EV",
        "max": "2 mg/dose",
        "freq": "Repetir cada 5–10 min até pele seca e corada, midríase e abolição da bradicardia",
        "note": "BNFC 2020-21 (p. 869). Shann refere regimes mais elevados e perfusão posterior (leitura OCR duvidosa — confirmar no original)."
      },
      {
        "ind": "Bradicardia por sobredosagem de beta-bloqueante",
        "val": "40 mcg/kg EV",
        "max": "3 mg/dose",
        "freq": "—",
        "note": "BNFC 2020-21 (p. 869)."
      },
      {
        "ind": "Bradicardia — reanimação",
        "val": "0,02 mg/kg EV/IO",
        "max": "0,6 mg",
        "freq": "Depois 0,01 mg/kg cada 4–6 h",
        "note": "Shann, Drug Doses (entrada Atropine). Para PCR/bradicardia pediátrica seguir o algoritmo vigente (ERC/AHA) — ver revisão."
      }
    ],
    "prep": "EV emergência: administrar não diluída (0,5 mg/ml ou 1 mg/ml) em bólus rápido 10–30 seg. Para perfusão: diluir em SF ou SG5% a 0,1–0,5 mg/ml. IO: mesma dose que EV. ET (endotraqueal — última opção): 2–3× dose EV diluída em 5 ml SF. Oral: solução extemporânea 0,1 mg/ml.",
    "ci": [
      "Glaucoma de ângulo fechado (relativa)",
      "Taquicardia não controlada"
    ],
    "alert": [
      "⚠️ Dose mínima 0,1 mg — doses < 0,1 mg podem paradoxalmente causar bradicardia",
      "Efeitos: midríase, retenção urinária, boca seca, hipertermia",
      "Na intoxicação por OFs: doses 10–100× superiores ao normal são frequentes"
    ],
    "source": "BNF for Children 2020-21, Atropine sulfate (p. 869); Shann F. Drug Doses",
    "review": ["Fonte citada é ERC 2021 / PALS 2020. Existem versões de 2025 (ERC 2025 e AHA/AAP 2025 — ver ecrã Fontes): confirmar se a dose e o intervalo se mantêm antes de usar em reanimação."]
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
      "PCR prolongada (após ≥ 10 min de suporte)",
      "Acidose metabólica grave no RN (pH < 7,15, BE < -10)",
      "PCR neonatal prolongada (após 10 min de suporte e sem ROSC)"
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
      },
      {
        "ind": "Neonatal — Acidose metabólica — EV",
        "val": "1–2 mmol/kg EV (= 2–4 ml/kg da sol. 4,2%)",
        "max": "—",
        "freq": "em 30–60 min; repetir guiado por gasometria",
        "note": "SEMPRE usar solução 4,2% em RN e prematuros (solução 8,4% é hiperosmolar → risco HIV)"
      },
      {
        "ind": "Neonatal — Hipercaliemia grave",
        "val": "1–2 mmol/kg EV",
        "max": "—",
        "freq": "em 5–10 min (efeito transitório — não corrige K+)",
        "note": ""
      }
    ],
    "prep": "EV: usar solução 4,2% (0,5 mEq/ml) em RN e lactentes (solução 8,4% é hiperosmolar e associada a HIV e necrose cerebral). Em crianças maiores: 8,4% (1 mEq/ml) pode ser usado diluído. Administrar lentamente (não em bólus rápido em RN). ⚠️ NÃO misturar com cálcio (CaCO3), adrenalina, dopamina, noradrenalina, aminoglicosídeos (inactivação) — linha dedicada. Fonte: BNF for Children 2023-24; PALS AHA 2020.",
    "ci": [
      "Alcalose metabólica",
      "Hipocaliemia não corrigida",
      "Acidose respiratória sem ventilação assegurada",
      "Hipocalcemia não corrigida (relativa)"
    ],
    "alert": [
      "⚠️ Incompatível com cálcio, adrenalina, dopamina",
      "⚠️ Solução 8,4% em RN — risco de hemorragia intraventricular",
      "⚠️ Não usar na acidose respiratória sem ventilação assegurada (↑CO2)",
      "Causa hipernatremia e hiperosmolaridade — monitorizar",
      "Hipocaliemia após correcção da acidose",
      "⛔ SOLUÇÃO 8,4% em RN/PREMATURO: risco de HIV por hiperosmolaridade — usar SEMPRE 4,2%",
      "⚠️ Incompatível com cálcio (precipita CaCO3) e adrenalina (inactiva)",
      "⚠️ Paradoxalmente agrava acidose intracelular e cerebral se ventilação inadequada",
      "⚠️ Hipocalcemia após correcção da acidose"
    ],
    "source": "ILCOR 2021; Harriet Lane 23rd Ed; BNF for Children 2023-24; BNF for Children 2023-24; ILCOR NLS 2021; BNFC Neonatal Formulary 9th Ed"
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
      "Bloqueio de canais de cálcio (intoxicação por BCC)",
      "Hipocalcemia neonatal precoce (< 72h) — prematuros, filhos de diabéticas, asfixia",
      "Hipocalcemia neonatal tardia (> 72h) — hipoparatiroidismo, défice vitamina D",
      "Hipercaliemia com alterações ECG",
      "Hipermagnesemia sintomática (por sulfato de magnésio materno)"
    ],
    "dose": [
      {
        "ind": "Hipocalcemia aguda / prevenção de arritmias na hipercaliemia — EV lento",
        "val": "0,11 mmol/kg (= 0,5 ml/kg de gluconato de cálcio 10%)",
        "max": "4,5 mmol (20 ml de gluconato de cálcio 10%)",
        "freq": "Dose única em 5–10 min",
        "note": "BNFC 2020-21 (p. 642), RN e criança. No RN algumas unidades usam 0,46 mmol/kg (2 ml/kg de 10%) segundo prática dos EUA. ECG contínuo."
      },
      {
        "ind": "Hipocalcemia aguda — manutenção (perfusão EV)",
        "val": "RN: 0,5 mmol/kg/dia; 1 mês–1 ano: 1 mmol/kg/dia; 2–17 anos: 8,8 mmol/dia",
        "max": "8,8 mmol/dia",
        "freq": "Perfusão em 24 h, ajustar à resposta",
        "note": "BNFC 2020-21 (p. 642). Passar a via oral assim que possível (risco de extravasamento)."
      }
    ],
    "prep": "EV: pode administrar não diluído (10 mg/ml = 1 mmol Ca²⁺/10 ml) OU diluir em SF/SG5%. Periférico: ≤ 10 mg/ml (1%); Central: até 100 mg/ml. Velocidade máx.: 0,5 mmol/min (5 ml/min de solução 10%). Neonatos: periférico ≤ 10 mg/ml apenas. ⚠️ NUNCA misturar com bicarbonato (CaCO3) ou fosfato (CaHPO4). ⚠️ NUNCA na mesma linha que ceftriaxona em neonatos (precipitação letal).",
    "ci": [
      "Hipercalcemia",
      "Doente digitálico (arritmias)",
      "Nefrolitíase cálcica (relativa)",
      "Digitálico (bradicardia/arritmias)"
    ],
    "alert": [
      "⚠️ Bradicardia e assistolia se infusão rápida — monitorizar ECG",
      "⚠️ Extravasamento causa necrose tecidular grave",
      "⚠️ Incompatível com bicarbonato e fosfatos",
      "⚠️ Potencia toxicidade da digoxina",
      "Preferir cloreto de cálcio na PCR (3× mais Ca²⁺ biodisponível)",
      "⚠️ Extravasamento causa necrose cutânea grave — confirmar acesso EV antes de administrar",
      "⛔ Incompatível com bicarbonato de sódio e fosfato (precipitação)",
      "⚠️ Potencia toxicidade digitálica"
    ],
    "source": "BNFC 2020-21, Calcium gluconate (p. 642)"
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
    "prep": "EV: administrar não diluído (0,1 mg/ml) em bólus lento 15 seg. Para titulação precisa em criança: diluir 0,5 mg em 50 ml SF (0,01 mg/ml). Ter material de reanimação disponível (ressedação provável). Estabilidade após diluição: 24h. Fonte: BNF for Children 2023-24; NHS Medusa 2024.",
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
        "ind": "Hipoglicemia grave em RN (EV)",
        "val": "Bólus inicial 250 mg/kg (2,5 mL/kg de glucose 10%) em 5 min se sintomática grave (perda de consciência/convulsão); depois perfusão 500 mg/kg/h (glucose 10%)",
        "max": "—",
        "freq": "Bólus lento; depois perfusão contínua",
        "note": "BNFC 2020-21, Glucose (p. 638); Shann: 2,5 mL/kg de glucose 10% EV lento, depois aumentar a manutenção em mg/kg/min."
      },
      {
        "ind": "Hipoglicemia na criança (EV)",
        "val": "500 mg/kg (5 mL/kg de glucose 10%) em veia calibrosa; Shann: 2,5 mL/kg de glucose 10% EV lento (ou 0,5 mL/kg de glucose 50%)",
        "max": "—",
        "freq": "Repetir controlo de glicemia após o bólus",
        "note": "BNFC 2020-21 (p. 638): a glucose 10% é irritante — administrar em veia de grande calibre. As duas fontes divergem (250 vs 500 mg/kg): seguir o protocolo da unidade."
      }
    ],
    "prep": "EV: G10% — periférico ou central; administrar em 1–3 min (bólus de emergência). G20% — central preferida (periférico aceitável em emergência absoluta com vigilância rigorosa). G50% — CENTRAL OBRIGATÓRIO (risco de necrose tecidular grave se extravasamento). ⚠️ Verificar glicemia 15 min após bólus. Concentração máxima periférico: G10% (100 mg/ml). Fonte: BNF for Children 2023-24; PALS AHA 2020.",
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
    "source": "BNF for Children 2020-21, Glucose (p. 638); Shann F. Drug Doses",
    "review": ["Removido o GIR 4–8 mg/kg/min e outras alegações sem fonte verificada. Shann (RN): ~4 mg/kg/min (6 g/kg/dia) como manutenção."]
  
  },
{
    "id": "adenosina",
    "name": "Adenosina",
    "category": "emergencia",
    "class": "Antiarrítmico — agonista receptor A1 purinérgico",
    "brands": "Adenocor — ampolas 6 mg/2 ml (3 mg/ml)",
    "indication": [
      "Taquicardia supraventricular paroxística (TSVP) — 1ª linha farmacológica",
      "Taquicardia por reentrada nodal AV (TRNAV)",
      "Taquicardia por via acessória — com cautela em WPW",
      "Diagnóstico diferencial taquicardias complexo largo",
      "TSVP neonatal"
    ],
    "dose": [
      {
        "ind": "TSV — RN",
        "val": "Inicial 150 mcg/kg EV rápido; aumentar em passos de 50–100 mcg/kg",
        "max": "300 mcg/kg/dose única",
        "freq": "Passos cada 1–2 min até terminar a taquicardia",
        "note": "BNFC 2020-21 (p. 84). Bólus rápido seguido de flush de SF."
      },
      {
        "ind": "TSV — 1–11 meses",
        "val": "Inicial 150 mcg/kg EV rápido; aumentar em passos de 50–100 mcg/kg",
        "max": "500 mcg/kg/dose única",
        "freq": "Passos cada 1–2 min até terminar a taquicardia",
        "note": "BNFC 2020-21 (p. 84)."
      },
      {
        "ind": "TSV — 1–11 anos",
        "val": "Inicial 100 mcg/kg EV rápido; aumentar em passos de 50–100 mcg/kg",
        "max": "500 mcg/kg/dose única (máx. 12 mg)",
        "freq": "Passos cada 1–2 min até terminar a taquicardia",
        "note": "BNFC 2020-21 (p. 84)."
      },
      {
        "ind": "TSV — 12–17 anos",
        "val": "3 mg; depois 6 mg; depois 12 mg EV rápido",
        "max": "12 mg/dose",
        "freq": "Intervalo de 1–2 min entre doses",
        "note": "BNFC 2020-21 (p. 84). Transplantados cardíacos são muito sensíveis: não usar doses iniciais mais altas."
      }
    ],
    "prep": "Não diluir — administrar não diluída (3 mg/ml) em bólus IV muito rápido (< 2 segundos), imediatamente seguido de flush SF 5–10 ml rápido pela mesma linha. Usar a veia antecubital ou central — vias periféricas distais inactivam a adenosina por hidrólise antes de atingir o nó AV. Ter monitorizaçõ ECG e suporte de ressuscitação disponíveis.",
    "ci": [
      "Bloqueio AV 2º/3º grau (sem pacemaker)",
      "Síndrome do nódulo sinusal (sem pacemaker)",
      "Asma brônquica grave (broncoespasmo)",
      "WPW com FA/flutter (risco condução rápida via acessória)"
    ],
    "alert": [
      "⚠️ Semi-vida 10 segundos — bólus muito rápido + flush imediato obrigatórios",
      "⚠️ Assistolia transitória esperada — avisar família e ter material de reanimação disponível",
      "⚠️ Broncoespasmo grave em asmáticos — evitar ou usar com extrema cautela",
      "Monitorização ECG contínua e registo de ritmo durante administração",
      "Inactivada pela teofilina e cafeína — pode necessitar dose mais alta em prematuros com cafeína"
    ],
    "source": "BNFC 2020-21, Adenosine (p. 84)",
    "review": ["Esquema 0,1 → 0,2 mg/kg (PALS/ERC) removido por não constar do BNFC 2020-21. Uso fora de licença no diagnóstico de arritmias na criança (BNFC)."]
  
  },
  {
    "id": "amiodarona",
    "name": "Amiodarona EV",
    "category": "emergencia",
    "class": "Antiarrítmico classe III — inibidor canais K⁺, Na⁺, Ca²⁺ + beta-bloqueio",
    "brands": "Cordarone EV — ampolas 150 mg/3 ml (50 mg/ml)",
    "indication": [
      "Fibrilhação ventricular / TV sem pulso — após 3º choque (PCR)",
      "Taquicardia ventricular com pulso hemodinamicamente instável",
      "Taquicardia juncional pós-operatória (JET) — pós-cirurgia cardíaca",
      "Flutter/FA com instabilidade hemodinâmica",
      "TSVP refractária a adenosina"
    ],
    "dose": [
      {
        "ind": "FV / TV sem pulso refractária à desfibrilhação (RCP)",
        "val": "5 mg/kg EV/IO em bólus, em ≥ 3 min (RN e criança)",
        "max": "300 mg/dose",
        "freq": "Dose única; repetições conforme algoritmo de SAV vigente",
        "note": "BNFC 2020-21, Amiodarone hydrochloride (p. 83)."
      },
      {
        "ind": "Arritmias supraventriculares e ventriculares com pulso (hospital/especialista)",
        "val": "Criança: inicial 5–10 mg/kg em 20 min–2 h; depois perfusão 300 mcg/kg/h (5 mcg/kg/min), podendo subir até 1,5 mg/kg/h; RN: 5 mg/kg em 30 min, depois 5 mg/kg cada 12–24 h",
        "max": "1,2 g/dia",
        "freq": "Perfusão contínua ajustada à resposta",
        "note": "BNFC 2020-21 (p. 83). 1,5 mg/kg/h = 25 mcg/kg/min."
      }
    ],
    "prep": "EV: diluir EXCLUSIVAMENTE em SG5% (precipita em SF). Concentração: ≤ 2 mg/ml periférico (acima disto, EV central); até 6 mg/ml em carga central e 18 mg/ml em perfusão contínua central. Linha dedicada; adsorve em PVC — usar polietileno ou vidro.",
    "ci": [
      "Bloqueio AV 2º/3º grau sem pacemaker",
      "Bradicardia sinusal grave",
      "Disfunção tiroideia grave"
    ],
    "alert": [
      "⚠️ Hipotensão com administração rápida — excepção PCR onde bólus é obrigatório",
      "⚠️ Prolonga QT — monitorizar QTc; risco torsades de pointes",
      "⚠️ Interacções múltiplas: aumenta digoxina, varfarina, ciclosporina, fenitoína",
      "⚠️ Tirotoxicidade e hipotiroidismo em uso crónico — monitorizar função tiroideia",
      "Diluir SEMPRE em SG5%, nunca em SF"
    ],
    "source": "BNF for Children 2020-21, Amiodarone hydrochloride (p. 83)",
    "review": ["Removidas da ficha as alegações sem fonte verificável (JET pós-operatória 5–15 mcg/kg/min; máximo cumulativo de 15 mg/kg/dia). Dose em PCR: confirmar no algoritmo ERC/AHA vigente. Via oral: ver ficha \"Amiodarona Oral\"."]
  
  },
  {
    "id": "lidocaina_pcr",
    "name": "Lidocaína EV (Antiarrítmico)",
    "category": "emergencia",
    "class": "Antiarrítmico classe IB — bloqueador canal de sódio",
    "brands": "Lidocaína 1% (10 mg/ml); 2% (20 mg/ml) — ampolas; Xylocard 200 mg/10 ml",
    "indication": [
      "FV/TV sem pulso — alternativa à amiodarona (se não disponível) após 3º choque",
      "Taquicardia ventricular hemodinamicamente estável",
      "Extrassistolia ventricular sintomática frequente",
      "Profilaxia arritmias peri-intubação (dose baixa — uso controverso)"
    ],
    "dose": [
      {
        "ind": "Arritmias ventriculares / TV sem pulso / FV — bólus EV/IO",
        "val": "0,5–1 mg/kg",
        "max": "3 mg/kg por ciclo",
        "freq": "Se perfusão não disponível, repetir com intervalo ≥ 5 min",
        "note": "BNFC 2020-21 (p. 81), RN e 1 mês–11 anos. Shann: 1 mg/kg em 2 min."
      },
      {
        "ind": "Arritmias ventriculares — perfusão EV após o bólus",
        "val": "0,6–3 mg/kg/h",
        "max": "3 mg/kg/h",
        "freq": "Contínua",
        "note": "BNFC 2020-21 (p. 81). Shann: 15–50 mcg/kg/min (0,9–3 mg/kg/h)."
      }
    ],
    "prep": "EV/IO PCR: usar lidocaína 1% (10 mg/ml) directamente em bólus. Perfusão pós-conversão: 600 mg em 250 ml SF (2,4 mg/ml) — taxa 0,5–4 ml/min. Pré-intubação (dose baixa): 1 mg/kg não diluído.",
    "ci": [
      "Bloqueio AV 2º/3º grau",
      "Hipersensibilidade a anestésicos locais tipo amida",
      "Síndrome de Adam-Stokes",
      "WPW com FA (pode acelerar condução via acessória)"
    ],
    "alert": [
      "⚠️ Toxicidade SNC com doses altas: convulsões, obnubilação, paragem respiratória",
      "⚠️ Toxicidade cardíaca: bradicardia, bloqueio, hipotensão — monitorizar ECG",
      "⚠️ Reduzir dose em insuf. hepática e IC (metabolismo hepático reduzido)",
      "Amiodarona preferida em PCR — lidocaína reservada para indisponibilidade ou protocolo específico"
    ],
    "source": "BNFC 2020-21, Lidocaine (p. 81); Shann Drug Doses (Lignocaine)"
  },
  {
    "id": "calcio_cloreto_emerg",
    "name": "Cloreto de Cálcio 10% (Emergência)",
    "category": "emergencia",
    "class": "Electrólito — cálcio iónico de libertação imediata",
    "brands": "Cloreto de Cálcio 10% — ampolas 10 ml (1,36 mEq Ca²⁺/ml)",
    "indication": [
      "PCR com hipercalemia, hipocalcemia documentada ou hipermagnesemia",
      "Hipocalcemia sintomática grave (tetania, convulsões, instabilidade hemodinâmica)",
      "Antídoto de bloqueadores canais de cálcio (intoxicação grave)",
      "Antídoto de hipermagnesemia grave com paragem respiratória",
      "Hipotensão refractária em anafilaxia (coadjuvante)"
    ],
    "dose": [
      {
        "ind": "PCR / emergência hipocalcemia grave",
        "val": "0,2 ml/kg de CaCl2 10% EV em 2–5 min",
        "max": "10 ml (1 g)",
        "freq": "Dose única; repetir conforme ECG e resposta clínica",
        "note": "CaCl2 fornece 3× mais Ca²⁺ iónico que gluconato Ca — preferir em PCR e emergência"
      },
      {
        "ind": "Intoxicação BCC / hipermagnesemia",
        "val": "0,2–0,3 ml/kg EV lento",
        "max": "10 ml",
        "freq": "Repetir q5 min × 3; depois perfusão 0,2–0,4 ml/kg/h",
        "note": ""
      }
    ],
    "prep": "EV CENTRAL OBRIGATÓRIO — solução 10% (100 mg/ml = 1,36 mEq Ca²⁺/ml) extremamente irritante para veias periféricas (necrose). PCR: administrar não diluído em bólus 2–5 min. Perfusão pós-bólus: diluir em SF para ≤ 20 mg/ml. ⚠️ NUNCA misturar com bicarbonato, fosfato ou ceftriaxona. ⚠️ NUNCA por via periférica excepto emergência absoluta sem alternativa (risco necrose tecidular grave).",
    "ci": [
      "Hipercalcemia",
      "Digitálicos — potencia toxicidade da digoxina (usar gluconato Ca em digitalizado)",
      "Via periférica (necrose tecidular grave)"
    ],
    "alert": [
      "⚠️ VIA CENTRAL OBRIGATÓRIA — extravasamento periférico causa necrose grave",
      "⚠️ Bradicardia e PCR com injecção rápida — administrar em 2–5 min (excepto PCR)",
      "⚠️ Potencia toxicidade digoxina — usar gluconato de cálcio se doente digitalizado",
      "⚠️ Nunca misturar com bicarbonato na mesma linha — precipitação imediata"
    ],
    "source": "BNF for Children 2023-24; PALS AHA 2020; DeWitt CR et al. Crit Care Clin 2005",
    "review": ["Fonte citada é ERC 2021 / PALS 2020. Existem versões de 2025 (ERC 2025 e AHA/AAP 2025 — ver ecrã Fontes): confirmar se a dose e o intervalo se mantêm antes de usar em reanimação."]
  }
];

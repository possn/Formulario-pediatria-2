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
      },
      {
        "ind": "Neonatal — PCR — reanimação sala de partos EV/IO",
        "val": "0,01–0,03 mg/kg EV/IO (= 0,1–0,3 ml/kg da sol. 1:10000)",
        "max": "0,03 mg/kg/dose",
        "freq": "cada 3–5 min",
        "note": "Via EV/IO preferida. Via endotraqueal: 0,05–0,1 mg/kg (menos eficaz)"
      },
      {
        "ind": "Choque neonatal — perfusão EV",
        "val": "0,05–0,3 mcg/kg/min",
        "max": "1 mcg/kg/min",
        "freq": "contínua; titular pela TAM",
        "note": "TAM alvo: ≥ 40 mmHg (RN termo); ≥ semanas de gestação em mmHg (prematuro)"
      },
      {
        "ind": "Choque — perfusão contínua",
        "val": "0,05–2 μg/kg/min EV",
        "max": "—",
        "freq": "Perfusão contínua; titular por resposta",
        "note": "Doses baixas (< 0,1 μg/kg/min): efeito β predominante (inotrópico). Doses altas (> 0,3 μg/kg/min): efeito α predominante (vasopressor)"
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
    "source": "ILCOR 2021; ERC Guidelines 2021; WAO Anaphylaxis Guidelines 2020; BNF for Children 2023-24; ILCOR NLS 2021; SSC Neonatal Guidelines 2020; BNF for Children 2023-24; Surviving Sepsis Campaign Pediatric Guidelines 2020; PALS AHA 2020"
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
      },
      {
        "ind": "Neonatal — Hipocalcemia sintomática EV (convulsões, tetania)",
        "val": "1–2 ml/kg da sol. 10% EV lento",
        "max": "10 ml/dose",
        "freq": "em 5–10 min; monitorização ECG contínua",
        "note": "= 0,22–0,45 mmol/kg. Repetir se necessário"
      },
      {
        "ind": "Neonatal — Manutenção / Hipocalcemia assintomática EV",
        "val": "0,5–1 mmol/kg/dia",
        "max": "—",
        "freq": "perfusão contínua EV central; ou dividido em doses cada 6–8h",
        "note": ""
      },
      {
        "ind": "Neonatal — Hipercaliemia — cardioprotecção EV",
        "val": "0,5 ml/kg da sol. 10%",
        "max": "10 ml",
        "freq": "em 5–10 min; efeito transitório",
        "note": ""
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
    "source": "BNF for Children 2023-24; Harriet Lane 23rd Ed; PALS AHA 2020; BNF for Children 2023-24; Jain A. Paediatr Child Health 2010; BNFC Neonatal Formulary 9th Ed"
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
    "source": "BNF for Children 2023-24; Thornton PS et al. Pediatrics 2015 (neonatal hypoglycemia)"
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
        "ind": "TSVP — 1ª dose",
        "val": "0,1 mg/kg EV rápido (< 2 seg)",
        "max": "6 mg",
        "freq": "Dose única; repetir se sem resposta em 1–2 min",
        "note": "Administrar na veia antecubital ou central + flush SF 5–10 ml imediato. Monitorização ECG obrigatória"
      },
      {
        "ind": "TSVP — 2ª dose",
        "val": "0,2 mg/kg EV rápido",
        "max": "12 mg",
        "freq": "Se sem resposta 1–2 min após 1ª dose",
        "note": ""
      },
      {
        "ind": "TSVP neonatal",
        "val": "0,1–0,3 mg/kg EV rápido",
        "max": "6 mg",
        "freq": "Incrementos 0,05 mg/kg q1–2 min",
        "note": "Via umbilical ou central preferida — periférica distal reduz eficácia por inactivação rápida"
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
    "source": "BNF for Children 2023-24; Sanatani S et al. CJC 2017; PALS Guidelines AHA 2020; ERC 2021"
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
        "ind": "PCR — FV/TV sem pulso",
        "val": "5 mg/kg EV/IO em bólus",
        "max": "300 mg/dose",
        "freq": "Após 3º choque; pode repetir após 5º choque. Máx acumulado 15 mg/kg/dia",
        "note": "Em PCR: administrar em bólus rápido"
      },
      {
        "ind": "TV/TSV com pulso",
        "val": "5 mg/kg EV em 20–60 min",
        "max": "300 mg/dose",
        "freq": "1 dose; repetir se necessário até 15 mg/kg/dia",
        "note": "Diluir EXCLUSIVAMENTE em SG5% — precipita em SF"
      },
      {
        "ind": "JET pós-operatória — perfusão contínua",
        "val": "5–15 μg/kg/min",
        "max": "—",
        "freq": "Perfusão contínua EV em SG5%",
        "note": "Associar hipotermia moderada (35–36°C) e sedação"
      }
    ],
    "prep": "EV: diluir EXCLUSIVAMENTE em SG5% (precipita em SF). Concentração: 1–6 mg/ml periférico; até 18 mg/ml central. Linha dedicada; adsorve em PVC — usar polietileno ou vidro.",
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
    "source": "BNF for Children 2023-24; PALS AHA 2020; ERC Guidelines 2021; Saul JP et al. JACC 2005"
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
        "ind": "PCR — FV/TV (alternativa à amiodarona)",
        "val": "1 mg/kg EV/IO bólus",
        "max": "100 mg/dose",
        "freq": "Dose única após 3º choque; pode repetir 0,5 mg/kg q5–10 min (máx 3 mg/kg total)",
        "note": "PALS 2020: amiodarona preferida; lidocaína alternativa aceitável se amiodarona indisponível"
      },
      {
        "ind": "TV com pulso — perfusão manutenção",
        "val": "20–50 μg/kg/min EV",
        "max": "—",
        "freq": "Perfusão contínua após conversão",
        "note": "Iniciar após bólus eficaz"
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
    "source": "BNF for Children 2023-24; PALS AHA 2020; ERC Guidelines 2021; Dorian P et al. NEJM 2002"
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
    "source": "BNF for Children 2023-24; PALS AHA 2020; DeWitt CR et al. Crit Care Clin 2005"
  }
];

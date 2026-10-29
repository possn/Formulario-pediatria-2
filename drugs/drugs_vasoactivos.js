// UCIP Pediatria — Vasoactivos & Inotrópicos
// 7 fármacos
// Fontes: ver drugs_sources.js

var DRUGS_VASOACTIVOS = [
  {
    "id": "dopamina",
    "name": "Dopamina",
    "category": "vasoactivo",
    "class": "Catecolamina — agonista dopaminérgico, β1, α1 (dose-dependente)",
    "brands": "Dopamina 200 mg/5 ml; 40 mg/ml",
    "indication": [
      "Choque séptico / distributivo (2ª linha após adrenalina/noradrenalina)",
      "Choque cardiogénico com hipotensão",
      "Bradicardia sintomática refractária (alternativa à adrenalina)",
      "Choque neonatal / hipotensão arterial sistémica",
      "Disfunção miocárdica pós-asfixia",
      "Hipotensão pós-cirurgia cardíaca neonatal",
      "Choque séptico neonatal"
    ],
    "dose": [
      {
        "ind": "Hipotensão aguda, choque, insuficiência cardíaca, pós-cirurgia cardíaca — criança (perfusão EV)",
        "val": "Inicial 5 mcg/kg/min, ajustar à resposta",
        "max": "20 mcg/kg/min",
        "freq": "Perfusão contínua",
        "note": "BNFC 2020-21, Dopamine hydrochloride (p. 130). Diluir até máx. 3,2 mg/mL em glicose 5% ou NaCl 0,9%; concentrações superiores por cateter venoso central. Incompatível com bicarbonato e soluções alcalinas."
      },
      {
        "ind": "Idem — recém-nascido",
        "val": "Inicial 3 mcg/kg/min, ajustar à resposta",
        "max": "20 mcg/kg/min",
        "freq": "Perfusão contínua",
        "note": "BNFC 2020-21 (p. 130): diluir 30 mg/kg de peso em 50 mL; 0,3 mL/h dá 3 mcg/kg/min."
      }
    ],
    "prep": "EV CENTRAL obrigatório (extravasamento → necrose; antídoto: fentolamina SC local). Diluir em SG5% (preferido) ou SF. Regra dos 3: peso(kg)×3 mg/50 ml SG5% → 1 ml/h = 1 μg/kg/min. Concentração habitual 400–3200 μg/ml conforme restrição de volume. ⚠️ Incompatível com bicarbonato, furosemida, gentamicina na mesma linha. Proteger da luz. Fonte: BNF for Children 2023-24; NHS Medusa 2024.",
    "ci": [
      "Feocromocitoma",
      "FV/TV não tratada",
      "Hipovolemia não corrigida (corrigir primeiro)",
      "Taquiarritmias não controladas"
    ],
    "alert": [
      "⚠️ EV CENTRAL — extravasamento causa necrose grave (tratar com fentolamina local)",
      "⚠️ Incompatível com bicarbonato e alcalinos",
      "⚠️ Evidência actual: adrenalina em baixas doses preferida ao choque séptico pediátrico (Surviving Sepsis Campaign 2020)",
      "Monitorização ECG (arritmias) e TA invasiva",
      "Taquifilaxia após uso prolongado",
      "⚠️ EV CENTRAL OBRIGATÓRIO — necrose grave por extravasamento",
      "⚠️ Taquicardia e arritmias",
      "⚠️ Monitorização ECG e TA invasiva contínuas",
      "Surviving Sepsis Campaign Neonatal 2020: adrenalina preferida em choque séptico neonatal"
    ],
    "source": "BNF for Children 2020-21, Dopamine hydrochloride (p. 130)"
  },
  {
    "id": "dobutamina",
    "name": "Dobutamina",
    "category": "vasoactivo",
    "class": "Catecolamina sintética — agonista β1 predominante",
    "brands": "Dobutamina 250 mg/20 ml",
    "indication": [
      "Disfunção miocárdica / choque cardiogénico",
      "Pós-operatório de cirurgia cardíaca",
      "Suporte inotrópico em sépsis com disfunção miocárdica",
      "Disfunção miocárdica neonatal (pós-asfixia, cardiomiopatia)",
      "Choque cardiogénico neonatal",
      "Insuficiência miocárdica direita em HPPRN",
      "Pós-operatório cardíaco neonatal (adjuvante)"
    ],
    "dose": [
      {
        "ind": "Suporte inotrópico em baixo débito, pós-cirurgia cardíaca, cardiomiopatia, choque — RN e criança",
        "val": "Inicial 5 mcg/kg/min, ajustar para 2–20 mcg/kg/min",
        "max": "20 mcg/kg/min",
        "freq": "Perfusão contínua",
        "note": "BNFC 2020-21, Dobutamine (p. 129): usadas doses tão baixas como 0,5–1 mcg/kg/min. A ficha anterior indicava máx. 40 mcg/kg/min, valor que o BNFC não suporta."
      }
    ],
    "prep": "EV CENTRAL obrigatório. Diluir em SG5%, SF ou LR. Regra dos 3: peso(kg)×3 mg/50 ml → 1 ml/h = 1 μg/kg/min. Concentração 500–2000 μg/ml. ⚠️ NÃO misturar com bicarbonato (inactivação em pH alcalino), cefalosporinas, aminoglicosídeos na mesma linha. Estabilidade: 24h. Fonte: BNF for Children 2023-24; NHS Medusa 2024.",
    "ci": [
      "Cardiomiopatia hipertrófica obstrutiva",
      "Feocromocitoma",
      "Taquiarritmias não controladas"
    ],
    "alert": [
      "⚠️ Pode causar hipotensão se hipovolemia não corrigida (vasodilatador)",
      "⚠️ Taquicardia e arritmias (especialmente > 10 mcg/kg/min)",
      "⚠️ Incompatível com bicarbonato e heparina",
      "Monitorizar ECG e TA contínuos",
      "Taquifilaxia após 72h de uso — considerar alternativas",
      "⚠️ Taquicardia (dose-dependente)",
      "⚠️ Hipotensão se hipovolemia (efeito vasodilatador)",
      "Frequentemente associada à dopamina ou adrenalina em choque misto"
    ],
    "source": "BNF for Children 2020-21, Dobutamine (p. 129)"
  },
  {
    "id": "noradrenalina",
    "name": "Noradrenalina (Norepinefrina)",
    "category": "vasoactivo",
    "class": "Catecolamina — agonista α1 predominante + β1",
    "brands": "Noradrenalina 2 mg/ml; 4 mg/4 ml",
    "indication": [
      "Choque séptico (vasopressor de 1ª linha em adultos; 2ª linha após adrenalina em UCIP pediátrica)",
      "Choque vasodilatado / distributivo",
      "Hipotensão refractária"
    ],
    "dose": [
      {
        "ind": "Hipotensão aguda (choque séptico) / choque por vasodilatação excessiva",
        "val": "0,02–0,1 mcg/kg/min, ajustada à resposta",
        "max": "1 mcg/kg/min",
        "freq": "Perfusão contínua",
        "note": "BNFC 2020-21, Noradrenaline/Norepinephrine (p. 131): RN e criança 20–100 ng/kg/min; máx. 1 mcg/kg/min; diluir o concentrado de 1 mg/mL. Shann (Drug Doses): preparação para 0,02–0,2 mcg/kg/min e para 0,1–0,5 mcg/kg/min; via periférica de curta duração 0,05–0,1 mcg/kg/min. Doses acima de 1 mcg/kg/min não constam das fontes disponíveis."
      }
    ],
    "prep": "EV CENTRAL obrigatório. Diluir em SG5% ou SF. Concentração periférica de emergência: ≤ 16 μg/ml com vigilância estrita de flebite (cada 1h). Central habitual: 32–200 μg/ml. Regra dos 3: peso(kg)×0,3 mg/50 ml → 1 ml/h = 0,1 μg/kg/min. Proteger da luz. Antídoto extravasamento: fentolamina 5 mg em 10 ml SF, injectar SC na área. Fonte: BNF for Children 2023-24; NHS Medusa 2024.",
    "ci": [
      "Hipovolemia não corrigida",
      "Oclusão vascular periférica"
    ],
    "alert": [
      "⚠️ EV CENTRAL OBRIGATÓRIO — necrose grave por extravasamento",
      "⚠️ Vasoconstrição periférica intensa — monitorizar perfusão periférica e débito urinário",
      "⚠️ Bradicardia reflexa (por HTA)",
      "Monitorização com linha arterial obrigatória",
      "Associar vasopressina se dose elevada necessária"
    ],
    "source": "BNF for Children 2020-21, Noradrenaline/Norepinephrine (p. 131); Shann F. Drug Doses (preparação)"
  },
  {
    "id": "vasopressina",
    "name": "Vasopressina (ADH)",
    "category": "vasoactivo",
    "class": "Hormona antidiurética — vasopressor não-adrenérgico",
    "brands": "Pitressin 20 UI/ml",
    "indication": [
      "Choque séptico refractário a catecolaminas",
      "Diabetes insípida central (doses baixas)",
      "PCR refractária (dose única — evidência limitada)"
    ],
    "dose": [
      {
        "ind": "Choque vasopléxico refractário",
        "val": "0,0003–0,002 UI/kg/min",
        "max": "0,04 UI/min (adulto)",
        "freq": "perfusão contínua",
        "note": "Doses fixas em adulto: 0,03–0,04 UI/min como adjuvante à noradrenalina"
      },
      {
        "ind": "Diabetes insípida central",
        "val": "0,0003–0,001 UI/kg/min",
        "max": "—",
        "freq": "perfusão; titular pelo débito urinário",
        "note": ""
      }
    ],
    "prep": "EV: diluir em SF ou SG5% para 0,1–1 UI/ml. Via central preferida; periférico aceitável a ≤ 0,4 UI/ml com vigilância. Regra prática: 1–4 UI em 50 ml SF. Estabilidade: 24h a 25°C. ⚠️ Isquemia periférica com doses altas — monitorizar extremidades. Fonte: BNF for Children 2023-24; NHS Medusa 2024.",
    "ci": [
      "Doença coronária grave (relativa)",
      "Insuf. cardíaca grave (relativa)"
    ],
    "alert": [
      "⚠️ Vasoconstrição esplâncnica — risco isquemia intestinal em doses altas",
      "⚠️ Isquemia miocárdica e cutânea",
      "⚠️ Hiponatremia (efeito antidiurético) — monitorizar Na+ seriadamente",
      "Não tem efeito inotrópico — não usar como inotrópico isolado"
    ],
    "source": "BNF for Children 2020-21, Vasopressin (p. 72); Surviving Sepsis Campaign Children 2020",
    "review": ["O BNFC 2020-21 só indica vasopressina para hemorragia digestiva por varizes: 0,3 U/kg (máx. 20 U) em 20–30 min, depois 0,3 U/kg/h (máx. 1 U/kg/h), máx. 72 h. As doses desta ficha para choque vasoplégico e diabetes insípida central não estão no BNFC e não têm fonte verificada neste conjunto de documentos."]

  },
  {
    "id": "levosimendan",
    "name": "Levosimendan",
    "category": "vasoactivo",
    "class": "Inodilatador — sensibilizador de cálcio + inibidor PDE3",
    "brands": "Simdax — ampolas 12,5 mg/5 ml (2,5 mg/ml)",
    "indication": [
      "Insuficiência cardíaca aguda descompensada com baixo débito",
      "Choque cardiogénico refractário a catecolaminas",
      "Desmame da circulação extracorporal (pós-cirurgia cardíaca)",
      "Miocardiopatia dilatada em descompensação aguda"
    ],
    "dose": [
      {
        "ind": "Perfusão contínua EV",
        "val": "0,05–0,2 μg/kg/min",
        "max": "0,2 μg/kg/min",
        "freq": "Perfusão 24–48h (efeito hemodinâmico prolonga-se 1–2 semanas por metabolito activo OR-1896)",
        "note": "Dose de carga 6–12 μg/kg em 10 min (OMITIR se hipotensão — causa hipotensão significativa). Iniciar com 0,1 μg/kg/min"
      }
    ],
    "prep": "EV: diluir EXCLUSIVAMENTE em SG5% (incompatível com SF — precipitação). Concentração: 0,025–0,1 mg/ml. Carga (opcional): 100 μg/ml em SG5%. Manutenção: 50 μg/ml. Proteger da luz — cobrir seringa e linha com papel de alumínio. ⚠️ Incompatível com furosemida e propofol na mesma linha. Fonte: BNF for Children 2023-24; SmPC Simdax.",
    "ci": [
      "Hipotensão grave (PAS < 85 mmHg) sem suporte vasopressor",
      "Obstrução mecânica ao enchimento/esvaziamento (estenose aórtica/mitral grave)",
      "Insuficiência renal grave (TFG < 30 ml/min — acumulação metabolito)",
      "Taquicardia > 120 bpm (taquicardia reflexa potenciada)"
    ],
    "alert": [
      "⚠️ Hipotensão — efeito vasodilatador marcado; associar noradrenalina se necessário",
      "⚠️ Taquicardia reflexa — monitorizar FC; reduzir dose se FC > 120 bpm",
      "⚠️ Hipocaliemia potencia arritmias — repor K⁺ antes de iniciar",
      "Efeito hemodinâmico persiste 7–14 dias após infusão (metabolito activo OR-1896)",
      "Sem taquifilaxia — vantagem sobre catecolaminas em uso prolongado",
      "Evidência pediátrica limitada mas favorável em cirurgia cardíaca congenita"
    ],
    "source": "BNF for Children 2023-24; Egan JR et al. Pediatr Crit Care Med 2006; Roeleveld PP et al. Paediatr Anaesth 2008"
  },
  {
    "id": "terlipressina",
    "name": "Terlipressina",
    "category": "vasoactivo",
    "class": "Análogo sintético da vasopressina — agonista V1 de longa duração",
    "brands": "Glypressin — ampolas 1 mg/8,5 ml (0,1 mg/ml)",
    "indication": [
      "Choque séptico refractário — adjuvante vasopressor (alternativa à vasopressina)",
      "Síndrome hepatorrenal tipo 1 — tratamento específico",
      "Hemorragia varicosa esofágica — vasoconstricção esplâncnica",
      "Hipotensão refractária em PCR (evidência limitada)"
    ],
    "dose": [
      {
        "ind": "Choque séptico refractário",
        "val": "10–20 μg/kg/dose EV",
        "max": "1 mg/dose",
        "freq": "q4–6h bólus; ou perfusão 2–5 μg/kg/h",
        "note": "Alternativa à vasopressina contínua — semivida mais longa (6h vs 10 min)"
      },
      {
        "ind": "Hemorragia varicosa / síndrome hepatorrenal",
        "val": "0,01–0,02 mg/kg/dose EV",
        "max": "1 mg/dose",
        "freq": "q4–6h × 48–72h",
        "note": ""
      }
    ],
    "prep": "EV bólus: reconstituir 0,2 mg/ml em SF; bólus lento 2 min. Perfusão: diluir para 0,1 mg/ml em SF ou SG5%. Estabilidade: 24h a 25°C. Fonte: BNF for Children 2023-24; NHS Medusa 2024.",
    "ci": [
      "Isquemia miocárdica activa",
      "Doença vascular periférica grave",
      "Arritmias graves",
      "Gravidez"
    ],
    "alert": [
      "⚠️ Isquemia intestinal, miocárdica e cutânea — monitorizar sinais de hipoperfusão periférica",
      "⚠️ Hipertensão arterial marcada — monitorizar TA invasiva",
      "⚠️ Bradicardia reflexa — monitorizar ECG",
      "Pallor e dor abdominal durante infusão — sinais de alarme de isquemia esplâncnica",
      "Evidência pediátrica crescente mas ainda limitada vs adultos"
    ],
    "source": "BNF for Children 2020-21, Terlipressin acetate (p. 72); EASL 2018",
    "review": ["BNFC 2020-21 só indica terlipressina para hemorragia por varizes em 12–17 anos: Glypressin 2 mg 4/4 h (reduzir para 1 mg 4/4 h), máx. 48 h; Variquel 1–2 mg inicial, depois 1 mg 4–6/6 h até 72 h. As doses em mcg/kg para crianças mais novas e para choque séptico não têm fonte verificada neste conjunto de documentos."]

  },
  {
    "id": "fenilefrina",
    "name": "Fenilefrina",
    "category": "vasoactivo",
    "class": "Agonista α1-adrenérgico puro — vasopressor",
    "brands": "Phenylephrine — ampolas 10 mg/ml; 50 mg/5 ml (preparação hospitalar)",
    "indication": [
      "Hipotensão vasoplégica sem taquicardia (ex: pós-anestesia, vasoplegia pós-CEC)",
      "Tetralogia de Fallot — crise hipóxica (aumenta resistências sistémicas)",
      "Hipotensão em taquicardia supraventricular (aumenta RVS sem cronotropismo)",
      "Adjuvante vasopressor quando taquicardia limita uso de noradrenalina"
    ],
    "dose": [
      {
        "ind": "Hipotensão aguda — injecção EV lenta",
        "val": "1–11 anos: 5–20 mcg/kg; 12–17 anos: 100–500 mcg",
        "max": "500 mcg/dose",
        "freq": "Repetir após ≥ 15 min se necessário",
        "note": "BNFC 2020-21, Phenylephrine hydrochloride (p. 132)."
      },
      {
        "ind": "Hipotensão aguda — perfusão EV",
        "val": "1–15 anos: inicial 0,1–0,5 mcg/kg/min, ajustar à resposta",
        "max": "—",
        "freq": "Perfusão contínua",
        "note": "BNFC 2020-21 (p. 132). 16–17 anos: até 180 mcg/min inicialmente, reduzir para 30–60 mcg/min."
      },
      {
        "ind": "Hipotensão aguda — IM/SC",
        "val": "1–11 anos: 100 mcg/kg; 12–17 anos: 2–5 mg inicial",
        "max": "5 mg/dose",
        "freq": "A cada 1–2 h (1–11 anos)",
        "note": "BNFC 2020-21 (p. 132)."
      }
    ],
    "prep": "EV bólus: diluir a 100–200 μg/ml em SF (10 mg em 50 ml = 200 μg/ml). Perfusão: 50 mg em 250 ml SF (200 μg/ml). Via periférica aceitável para perfusão de curta duração e bólus; central para perfusão prolongada. Fonte: BNF for Children 2023-24; NHS Medusa 2024.",
    "ci": [
      "Hipertensão grave",
      "Doença coronária severa",
      "Bradicardia grave (bradicardia reflexa intensa com fenilefrina)"
    ],
    "alert": [
      "⚠️ Bradicardia reflexa marcada (reflexo barorreceptor) — monitorizar FC; pode necessitar atropina",
      "⚠️ Reduz débito cardíaco por aumento de pós-carga — evitar em disfunção sistólica grave",
      "Vasoconstricção periférica — monitorizar perfusão de extremidades",
      "Vantagem: sem efeito cronotrópico positivo — útil quando taquicardia é problema"
    ],
    "source": "BNF for Children 2020-21, Phenylephrine hydrochloride (p. 132)",
    "review": ["A ficha anterior indicava bólus 5–10 mcg/kg (máx. 200 mcg) a cada 5–10 min e crise hipóxica de Fallot 10–20 mcg/kg: não correspondem ao BNFC (5–20 mcg/kg, máx. 500 mcg, intervalo ≥ 15 min). A dose para crise de Fallot não tem fonte verificada neste conjunto de documentos."]
  
  }
];

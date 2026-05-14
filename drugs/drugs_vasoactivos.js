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
      "Bradicardia sintomática refractária (alternativa à adrenalina)"
    ],
    "dose": [
      {
        "ind": "Inotrópico / vasopressor",
        "val": "5–20 mcg/kg/min",
        "max": "20 mcg/kg/min",
        "freq": "perfusão contínua",
        "note": "< 5 mcg/kg/min: efeito dopaminérgico (vasodilatação renal — benefício clínico não comprovado). 5–10: inotrópico β1. > 10: vasopressor α1"
      }
    ],
    "prep": "Fórmula prática: (6 × Peso kg) mg em 100 ml SG5% → 1 ml/h = 1 mcg/kg/min. EV CENTRAL obrigatório.",
    "ci": [
      "Feocromocitoma",
      "FV/TV não tratada",
      "Hipovolemia não corrigida (corrigir primeiro)"
    ],
    "alert": [
      "⚠️ EV CENTRAL — extravasamento causa necrose grave (tratar com fentolamina local)",
      "⚠️ Incompatível com bicarbonato e alcalinos",
      "⚠️ Evidência actual: adrenalina em baixas doses preferida ao choque séptico pediátrico (Surviving Sepsis Campaign 2020)",
      "Monitorização ECG (arritmias) e TA invasiva",
      "Taquifilaxia após uso prolongado"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; Surviving Sepsis Campaign 2020; BNF for Children 2023-24"
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
      "Suporte inotrópico em sépsis com disfunção miocárdica"
    ],
    "dose": [
      {
        "ind": "Inotrópico",
        "val": "2,5–20 mcg/kg/min",
        "max": "40 mcg/kg/min",
        "freq": "perfusão contínua",
        "note": "Iniciar com dose baixa e titular. Efeito vasodilatador periférico — pode baixar TA se hipovolémico"
      }
    ],
    "prep": "Fórmula: (6 × Peso kg) mg em 100 ml SG5% → 1 ml/h = 1 mcg/kg/min. EV central.",
    "ci": [
      "Cardiomiopatia hipertrófica obstrutiva",
      "Feocromocitoma"
    ],
    "alert": [
      "⚠️ Pode causar hipotensão se hipovolemia não corrigida (vasodilatador)",
      "⚠️ Taquicardia e arritmias (especialmente > 10 mcg/kg/min)",
      "⚠️ Incompatível com bicarbonato e heparina",
      "Monitorizar ECG e TA contínuos",
      "Taquifilaxia após 72h de uso — considerar alternativas"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
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
        "ind": "Vasopressor",
        "val": "0,05–0,3 mcg/kg/min",
        "max": "1–2 mcg/kg/min (choque refractário)",
        "freq": "perfusão contínua",
        "note": "Titular pela TAM alvo (PAM ≥ 55–65 mmHg ou > percentil 5 para idade)"
      }
    ],
    "prep": "Fórmula: (0,3 × Peso kg) mg em 50 ml SG5% → 1 ml/h = 0,1 mcg/kg/min. EV CENTRAL obrigatório.",
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
    "source": "Surviving Sepsis Campaign 2020; BNF for Children 2023-24"
  },
  {
    "id": "milrinona",
    "name": "Milrinona",
    "category": "vasoactivo",
    "class": "Inibidor da fosfodiesterase-3 — inodilatador",
    "brands": "Corotrop / Primacor 10 mg/10 ml",
    "indication": [
      "Disfunção miocárdica pós-cirurgia cardíaca",
      "Choque cardiogénico com RVS elevada",
      "Hipertensão pulmonar com disfunção VD"
    ],
    "dose": [
      {
        "ind": "Carga (opcional)",
        "val": "50–75 mcg/kg EV em 15–60 min",
        "max": "—",
        "freq": "dose única",
        "note": "⚠️ Monitorização TA rigorosa — hipotensão frequente na carga"
      },
      {
        "ind": "Manutenção",
        "val": "0,25–0,75 mcg/kg/min",
        "max": "1 mcg/kg/min",
        "freq": "perfusão contínua",
        "note": ""
      }
    ],
    "prep": "Diluir em SF ou SG5%. Não misturar com furosemida (precipita). EV central.",
    "ci": [
      "Cardiomiopatia hipertrófica obstrutiva",
      "Estenose aórtica/pulmonar grave",
      "Hipotensão grave não corrigida"
    ],
    "alert": [
      "⚠️ Hipotensão — especialmente com dose de carga em doente hipovolémico",
      "⚠️ Não misturar com furosemida (precipitação imediata)",
      "⚠️ Arritmias ventriculares e supraventriculares",
      "⚠️ Ajuste na insuf. renal (excreção renal 85%)",
      "Efeito inotrópico + vasodilatador — ideal no ventrículo hipertensivo"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
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
    "prep": "Diluir em SF ou SG5%. Concentração 0,1–1 UI/ml. EV central.",
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
    "source": "Surviving Sepsis Campaign 2020; BNF for Children 2023-24"
  },
  {
    "id": "amrinona_milrinona_alt",
    "name": "Levosimendan",
    "category": "vasoactivo",
    "src": "added",
    "class": "Sensibilizador ao cálcio + inibidor PDE3 — inodilatador",
    "brands": "Simdax 2,5 mg/ml conc. para infusão (5 ml amp.)",
    "indication": [
      "Insuficiência cardíaca aguda descompensada refractária a inotrópicos convencionais",
      "Disfunção VD grave pós-cirurgia cardíaca",
      "Choque cardiogénico refractário (off-label pediátrico)"
    ],
    "dose": [
      {
        "ind": "Perfusão EV (pediátrico — off-label)",
        "val": "Carga: 6–12 mcg/kg em 10 min (opcional) → Manutenção: 0,1–0,2 mcg/kg/min",
        "max": "0,2 mcg/kg/min",
        "freq": "perfusão 24h (efeito dura 7–9 dias por metabolito activo)",
        "note": "⚠️ Carga omitida frequentemente — risco de hipotensão. Iniciar directamente a manutenção"
      },
      {
        "ind": "Adulto",
        "val": "0,1 mcg/kg/min × 24h",
        "max": "0,2 mcg/kg/min",
        "freq": "infusão única 24h",
        "note": ""
      }
    ],
    "prep": "Diluir em SG5%. Concentração 0,025 mg/ml (250 ml). EV central preferido.",
    "ci": [
      "Obstrução mecânica saída VE/VD",
      "Insuf. renal grave (TFG < 30)",
      "Hipotensão grave não corrigida",
      "Taquicardia ventricular"
    ],
    "alert": [
      "⚠️ Hipotensão (mais frequente com dose de carga)",
      "⚠️ Taquicardia",
      "⚠️ Hipocaliemia — monitorizar K+",
      "⚠️ Uso off-label em pediatria — evidência limitada",
      "Efeito prolongado por metabolito activo (OR-1896): 7–9 dias"
    ],
    "source": "Egan JR. Pediatr Crit Care Med 2006; Namachivayam P. PCCM 2006; Simdax SmPC"
  },
  {
    "id": "nitroprussiato",
    "name": "Nitroprussiato de Sódio",
    "category": "vasoactivo",
    "src": "original",
    "class": "Vasodilatador directo — dador de NO (arterial + venoso)",
    "brands": "Nipride 50 mg pó EV",
    "indication": [
      "Emergência hipertensiva grave",
      "Redução pós-carga em ICC grave / insuf. valvular aguda",
      "Dissecção aórtica (com betabloqueante)"
    ],
    "dose": [
      {
        "ind": "Perfusão EV",
        "val": "0,3–0,5 mcg/kg/min (início) → 3–4 mcg/kg/min",
        "max": "8–10 mcg/kg/min (máx. 10 min)",
        "freq": "perfusão contínua",
        "note": "Duração máxima: 72h. Dose < 2 mcg/kg/min raramente tóxica"
      }
    ],
    "prep": "Proteger da luz (papel alumínio). Diluir em SG5% APENAS. Concentração 200–1000 mcg/ml. EV central.",
    "ci": [
      "Insuf. hepática grave",
      "Hipotiroidismo (tiocianato agrava)",
      "Deficiência de vitamina B12"
    ],
    "alert": [
      "⛔ TOXICIDADE POR CIANETO — risco em doses > 2 mcg/kg/min > 48–72h. Sintomas: acidose metabólica, elevação SvO2, confusão",
      "⚠️ Monitorizar tiocianato em uso > 48h (nível < 100 mcg/ml)",
      "⚠️ Antídoto: hidroxocobalamina 70 mg/kg EV",
      "⚠️ Proteger solução da luz",
      "⚠️ Hipotensão intensa — linha arterial obrigatória"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
  }
];

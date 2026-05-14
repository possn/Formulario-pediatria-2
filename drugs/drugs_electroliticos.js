// UCIP Pediatria — Electrólitos & Nutrição
// 5 fármacos
// Fontes: ver drugs_sources.js

var DRUGS_ELECTROLITICOS = [
  {
    "id": "potassio",
    "name": "Cloreto de Potássio",
    "category": "electrolitico",
    "class": "Electrólito — potássio",
    "brands": "KCl 7,5% (1 mmol/ml); 15% (2 mmol/ml)",
    "indication": [
      "Hipocaliemia sintomática ou grave (K+ < 2,5 mEq/L)",
      "Manutenção de potássio em soluções EV"
    ],
    "dose": [
      {
        "ind": "Reposição EV (hipocaliemia grave)",
        "val": "0,5–1 mEq/kg EV",
        "max": "40 mEq/dose",
        "freq": "em 1–4h via EV CENTRAL; monitorizar ECG",
        "note": "Velocidade máxima: 0,5 mEq/kg/hora (EV central)"
      },
      {
        "ind": "Manutenção em soros",
        "val": "2–4 mEq/kg/dia",
        "max": "—",
        "freq": "dividido nas soluções EV do dia",
        "note": "Concentração máxima EV periférico: 40 mEq/L"
      }
    ],
    "prep": "⛔ NUNCA administrar EV rápido não diluído — FATAL. Diluir sempre. Concentração máxima EV central: 150–200 mEq/L.",
    "ci": [
      "Hipercaliemia",
      "Anúria"
    ],
    "alert": [
      "⛔ BÓLUS EV RÁPIDO = MORTE — paragem cardíaca em assistolia",
      "⚠️ EV CENTRAL para concentrações > 40 mEq/L",
      "⚠️ Monitorização ECG durante infusão rápida",
      "⚠️ Monitorizar K+ sérico 1–2h após reposição"
    ],
    "source": "BNF for Children 2023-24; Harriet Lane 23rd Ed"
  },
  {
    "id": "glicose",
    "name": "Glucose (Dextrose)",
    "category": "electrolitico",
    "class": "Substrato energético — carboidrato",
    "brands": "Glucose 5%; 10%; 20%; 30%; 50%",
    "indication": [
      "Hipoglicemia",
      "Manutenção energética EV",
      "Veículo para fármacos EV"
    ],
    "dose": [
      {
        "ind": "Hipoglicemia sintomática — EV bólus",
        "val": "200 mg/kg (= 2 ml/kg de SG10%)",
        "max": "5 g/dose",
        "freq": "bólus EV; repetir se necessário",
        "note": "Glicemia alvo ≥ 45 mg/dL (RN) / ≥ 60 mg/dL (criança). Seguir de perfusão GIR 6–8 mg/kg/min"
      },
      {
        "ind": "Manutenção (GIR)",
        "val": "RN: 4–8 mg/kg/min; Lactente: 3–5 mg/kg/min; Criança: 2–3 mg/kg/min",
        "max": "—",
        "freq": "perfusão contínua",
        "note": "GIR (mg/kg/min) = [% glicose × 10 × velocidade (ml/hora)] / (60 × Peso kg)"
      }
    ],
    "prep": "SG10%: padrão para RN. SG50%: diluir sempre — NUNCA EV periférico. Concentração máx. EV periférico: 12,5%.",
    "ci": [
      "Hiperglicemia não controlada",
      "Hiperosmolaridade"
    ],
    "alert": [
      "⛔ SG50% NUNCA EV periférico — necrose tecidular",
      "⚠️ Hiperglicemia em stress/sépsis — monitorizar glicemia",
      "⚠️ Hipocaliemia por insulina endógena (grandes volumes)",
      "⚠️ No TCE: evitar hipoglicemia E hiperglicemia (ambas pioram outcome)"
    ],
    "source": "BNF for Children 2023-24; Harriet Lane 23rd Ed"
  },
  {
    "id": "albumina",
    "name": "Albumina Humana",
    "category": "electrolitico",
    "src": "original",
    "class": "Coloide natural — expansor plasmático + transportador",
    "brands": "Albumina 4%; 20% (50/100 ml); 25%",
    "indication": [
      "Hipoalbuminemia grave sintomática (< 20 g/L)",
      "Expansão volémica (alternativa a cristaloides em sépsis)",
      "Paracentese de grande volume (> 5L)",
      "Síndrome nefrótico com edema grave refractário",
      "Doença hepática grave com ascite"
    ],
    "dose": [
      {
        "ind": "Hipoalbuminemia / Expansão volémica EV",
        "val": "Albumina 4–5%: 10–20 ml/kg EV",
        "max": "—",
        "freq": "conforme resposta clínica",
        "note": "Albumina 20%: 1–2 g/kg (= 5–10 ml/kg) — mais utilizada em edema/hipoalbuminemia"
      },
      {
        "ind": "Paracentese (adulto)",
        "val": "8 g albumina por litro ascite retirado (de 4–5L)",
        "max": "—",
        "freq": "pós-procedimento",
        "note": ""
      }
    ],
    "prep": "Pronto a usar. Filtro de 0,22 mcm recomendado. Administrar em 1–4h.",
    "ci": [
      "Insuf. cardíaca congestiva grave (risco edema)",
      "Anemia grave sem hipovolemia"
    ],
    "alert": [
      "⚠️ Evidência controversa na sépsis — SAFE trial: albumina vs SF igualmente seguros",
      "⚠️ Risco sobrecarga de volume — monitorizar PA, diurese",
      "⚠️ Reacções alérgicas (febre, urticária — raras)",
      "Produto de origem humana — verificar validade"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24; SAFE Study NEJM 2004"
  },
  {
    "id": "magnesio",
    "name": "Sulfato de Magnésio",
    "category": "electrolitico",
    "src": "added",
    "class": "Electrólito — cofactor enzimático, estabilizador membranas",
    "brands": "MgSO4 10% (1g/10ml); 20% (2g/10ml); 50% (1g/2ml)",
    "indication": [
      "Hipomagnesemia sintomática",
      "Asma grave / status asmático refractário",
      "Arritmia por torsades de pointes",
      "Eclampsia / pré-eclampsia grave",
      "Broncoespasmo grave refractário"
    ],
    "dose": [
      {
        "ind": "Hipomagnesemia sintomática EV",
        "val": "0,2 mmol/kg (50 mg/kg da sol. 10%)",
        "max": "2 g",
        "freq": "EV em 20–30 min; repetir se necessário",
        "note": ""
      },
      {
        "ind": "Asma grave / Status asmático EV",
        "val": "40–50 mg/kg EV em 20 min",
        "max": "2 g",
        "freq": "dose única (evidência: MAGNUM trial)",
        "note": "Melhora broncodilatação em asma grave não respondedora"
      },
      {
        "ind": "Torsades de pointes EV",
        "val": "25–50 mg/kg EV rápido",
        "max": "2 g",
        "freq": "bólus; pode repetir",
        "note": ""
      },
      {
        "ind": "Eclampsia (adulto)",
        "val": "4–6 g EV em 15–20 min → 1–2 g/hora",
        "max": "—",
        "freq": "manutenção até 24–48h pós-parto",
        "note": ""
      }
    ],
    "prep": "Diluir sempre antes de administrar EV. Sol. 10% para infusão. Sol. 50% apenas IM.",
    "ci": [
      "Bloqueio AV",
      "Insuf. renal grave (acumulação)"
    ],
    "alert": [
      "⚠️ Toxicidade: perda de reflexos patelares (nível 4–5 mmol/L) → paralisia respiratória (> 6 mmol/L) → paragem cardíaca (> 12 mmol/L)",
      "⚠️ Antídoto: gluconato de cálcio 10% 10 ml EV",
      "⚠️ Monitorizar reflexo patelar, FR e diurese em infusão contínua",
      "⚠️ Hipotensão na infusão rápida"
    ],
    "source": "BNF for Children 2023-24; MAGNUM trial; Harriet Lane 23rd Ed"
  },
  {
    "id": "fosforo",
    "name": "Fosfato de Potássio/Sódio",
    "category": "electrolitico",
    "src": "added",
    "class": "Electrólito — fosfato inorgânico",
    "brands": "Fosfato Dipotássico 1 mmol/ml; Fosfato Monossódico-Dissódico",
    "indication": [
      "Hipofosfatemia grave (< 0,5 mmol/L) ou sintomática",
      "Reposição em síndrome de realimentação",
      "Manutenção em nutrição parentérica"
    ],
    "dose": [
      {
        "ind": "Hipofosfatemia grave EV",
        "val": "0,15–0,25 mmol/kg EV em 6h",
        "max": "0,5 mmol/kg/dose",
        "freq": "repetir conforme nível sérico",
        "note": "Velocidade máxima 0,1 mmol/kg/hora"
      },
      {
        "ind": "Síndrome de realimentação EV",
        "val": "0,5–0,8 mmol/kg/dia EV",
        "max": "—",
        "freq": "perfusão contínua 24h; monitorizar fósforo 12–24h",
        "note": ""
      }
    ],
    "prep": "Diluir sempre em SF ou SG5%. NÃO administrar não diluído. Concentração máxima 0,3 mmol/ml (EV periférico).",
    "ci": [
      "Hiperfosfatemia",
      "Hipocalcemia não corrigida",
      "Hiperparatireoidismo"
    ],
    "alert": [
      "⚠️ Hipocalcemia aguda se reposto rapidamente",
      "⚠️ Hipotensão e arritmias na infusão rápida",
      "⚠️ NÃO misturar com cálcio (precipitação de fosfato de cálcio)",
      "⚠️ Monitorizar Ca2+, K+, Mg2+ e fósforo durante reposição"
    ],
    "source": "BNF for Children 2023-24; Harriet Lane 23rd Ed"
  }
];

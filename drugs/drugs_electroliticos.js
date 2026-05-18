// UCIP Pediatria — Electrólitos & Fluidos
// 12 fármacos
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
      "Manutenção de potássio em soluções EV",
      "Hipocaliemia ligeira-moderada com via oral disponível",
      "Prevenção de hipocaliemia em diuréticos tiazídicos/ansa",
      "Alcalose hipoclorémica hipocaliémica"
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
      },
      {
        "ind": "Reposição hipocaliemia",
        "val": "1–3 mEq/kg/dia PO",
        "max": "4 mEq/kg/dia; 40 mEq/dose",
        "freq": "2–4 doses/dia com refeições",
        "note": "Dose baseada em défice: cada 0,1 mEq/L de queda de K⁺ ≈ défice de 0,3 mEq/kg"
      }
    ],
    "prep": "EV: NUNCA administrar não diluído (FATAL — fibrilhação ventricular). Concentração máxima periférico: 40 mEq/L (0,04 mmol/ml). Concentração máxima central: 80–200 mEq/L (0,08–0,2 mmol/ml). Velocidade máxima: 0,5 mEq/kg/h (periférico); 1 mEq/kg/h (central com monitorização). ⚠️ Monitorizar ECG e K⁺ durante reposição. Oral: solução 7,5% (1 mEq/ml) — tomar com alimentos em sumo. Fonte: BNF for Children 2023-24; NHS Medusa 2024.",
    "ci": [
      "Hipercaliemia",
      "Anúria",
      "Insuficiência renal grave (oligúria)",
      "Obstrução intestinal"
    ],
    "alert": [
      "⛔ BÓLUS EV RÁPIDO = MORTE — paragem cardíaca em assistolia",
      "⚠️ EV CENTRAL para concentrações > 40 mEq/L",
      "⚠️ Monitorização ECG durante infusão rápida",
      "⚠️ Monitorizar K+ sérico 1–2h após reposição",
      "⚠️ Hipercaliemia iatrogénica — monitorizar K⁺ q24–48h durante reposição",
      "Irritação gástrica frequente — tomar sempre com alimentos",
      "Comprimidos LP (Slow-K): não triturar — risco úlcera esofágica",
      "Reposição IV preferida se K⁺ < 2,5 mEq/L ou sintomático"
    ],
    "source": "BNF for Children 2023-24; Harriet Lane 23rd Ed; BNF for Children 2023-24; Gennari FJ NEJM 1998"
  },
  {
    "id": "glicose",
    "name": "Glucose (Dextrose)",
    "category": "electrolitico",
    "class": "Substrato energético — carboidrato",
    "brands": "Glucose 5%; 10%; 20%; 30%; 50%",
    "indication": [
      "Hipoglicemia neonatal — manutenção GIR 4–8 mg/kg/min por perfusão contínua (ajustar por glicemia capilar)",
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
    "prep": "EV: pronto a usar — não diluir. Albumina 4%/5%: via periférica ou central; velocidade 1–2 ml/min (urgência 5–10 ml/min). Albumina 20%/25%: central preferida; velocidade 1 ml/min. Filtro em linha 0,22 μm recomendado. ⚠️ Compatível com solução glicosada e salina mas NÃO misturar com heparina, furosemida, verapamil, propofol. Usar dentro de 4h após abertura. Fonte: BNF for Children 2023-24; NHS Medusa 2024.",
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
    "class": "Electrólito — cofactor enzimático, estabilizador membranas",
    "brands": "MgSO4 10% (1g/10ml); 20% (2g/10ml); 50% (1g/2ml)",
    "indication": [
      "Hipomagnesemia sintomática",
      "Asma grave / status asmático refractário",
      "Arritmia por torsades de pointes",
      "Eclampsia / pré-eclampsia grave",
      "Broncoespasmo grave refractário",
      "Broncoespasmo grave refractário a β2 — adjuvante na asma grave",
      "Torsades de pointes — 1ª linha",
      "Convulsões por eclâmpsia / hipomagnesemia",
      "Hipomagnesiemia sintomática grave",
      "Arritmias refractárias associadas a hipomagnesemia"
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
      },
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
    "prep": "EV: SEMPRE diluir. Concentração periférico: ≤ 20% (200 mg/ml = 0,8 mmol/ml). Concentração central: ≤ 50% (500 mg/ml). Velocidade máxima: 150 mg/min (urgência); habitual < 60 mg/min. ⚠️ NUNCA em bólus rápido (assistolia). IM (emergência sem EV): solução 50% — dolorosa. Solução 10%: preferida para EV em criança (menos irritante). Antídoto toxicidade: gluconato Ca 0,2 ml/kg EV. Fonte: BNF for Children 2023-24; NHS Medusa 2024.",
    "ci": [
      "Bloqueio AV",
      "Insuf. renal grave (acumulação)",
      "Bloqueio AV (aprofunda bloqueio)",
      "Insuficiência renal grave (acumulação — toxicidade)",
      "Miastenia gravis (bloqueio neuromuscular)"
    ],
    "alert": [
      "⚠️ Toxicidade: perda de reflexos patelares (nível 4–5 mmol/L) → paralisia respiratória (> 6 mmol/L) → paragem cardíaca (> 12 mmol/L)",
      "⚠️ Antídoto: gluconato de cálcio 10% 10 ml EV",
      "⚠️ Monitorizar reflexo patelar, FR e diurese em infusão contínua",
      "⚠️ Hipotensão na infusão rápida",
      "⚠️ Toxicidade por magnésio: hiporreflexia → paralisia respiratória → PCR. Monitorizar reflexo rotuliano",
      "⚠️ Antídoto da toxicidade: gluconato de cálcio 10% 0,2 ml/kg EV",
      "⚠️ Infusão rápida causa hipotensão e rubor facial",
      "Monitorizar magnesiemia se perfusão prolongada (alvo 2–3,5 mmol/L terapêutico)"
    ],
    "source": "BNF for Children 2023-24; MAGNUM trial; Harriet Lane 23rd Ed; BNF for Children 2023-24; Griffiths B et al. Cochrane 2016 (asma); PALS AHA 2020"
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
    "prep": "EV: SEMPRE diluir — NUNCA administrar não diluído (risco cristalização intravascular). Diluir em SF ou SG5%. Concentração máxima: 0,3 mmol/ml (periférico); 0,6 mmol/ml (central). Velocidade máxima: 0,5 mmol/kg/h. ⚠️ NUNCA misturar na mesma linha com cálcio (precipitação CaHPO4 FATAL). Verificar compatibilidade em NP (precipitação depende de pH, temperatura, concentração). Fonte: BNF for Children 2023-24; Trissel's 2023.",
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
  },
  {
    "id": "nacl_hipertonico",
    "name": "NaCl 3% (Soro Hipertónico)",
    "category": "electrolitico",
    "class": "Solução salina hipertónica — osmoterapia",
    "brands": "NaCl 3% — preparação hospitalar 100/250 ml; NaCl 20% ampolas 20 ml (para diluição)",
    "indication": [
      "Hipertensão intracraniana aguda — osmoterapia de 1ª linha (alternativa/complemento ao manitol)",
      "Hiponatremia sintomática grave (convulsões, coma)",
      "Hiponatremia crónica profunda com sintomas",
      "Edema cerebral por hiponatremia"
    ],
    "dose": [
      {
        "ind": "HIC aguda / herniation",
        "val": "3–5 ml/kg NaCl 3% EV em 10–20 min",
        "max": "250 ml/dose",
        "freq": "Repetir q4–6h conforme PIC; alvo Na⁺ sérico 145–155 mEq/L",
        "note": "Evidência favorável vs manitol em HIC pediátrica traumática (Hypertonic Saline vs Mannitol meta-analysis)"
      },
      {
        "ind": "Hiponatremia sintomática grave (convulsões)",
        "val": "2–3 ml/kg NaCl 3% EV em 10–15 min",
        "max": "100 ml",
        "freq": "Repetir 1× se sem melhoria; subir Na⁺ 4–6 mEq/L nas primeiras 2h",
        "note": "Após controlo dos sintomas: corrigir lentamente (não > 10–12 mEq/L/24h) — risco mielinólise osmótica"
      }
    ],
    "prep": "EV central obrigatório para concentrações > 3%. NaCl 3% pode ser periférico se urgência e acesso central indisponível — vigiar extravasamento. Preparação: 15 ml NaCl 20% + 85 ml SF = 100 ml NaCl 3%.",
    "ci": [
      "Hipernatremia",
      "Hipervolemia grave (ICC descompensada)",
      "Insuficiência renal oligúrica grave sem diálise"
    ],
    "alert": [
      "⚠️ Correcção rápida de hiponatremia crónica → mielinólise osmótica (síndrome de desmielinização osmótica)",
      "⚠️ Monitorizar Na⁺ q2–4h durante correcção",
      "⚠️ Limite de correcção: < 10–12 mEq/L/24h em hiponatremia crónica; < 18 mEq/L/48h",
      "Para HIC: osmolalidade alvo 310–320 mOsm/kg; Na⁺ alvo 145–155 mEq/L",
      "NaCl 3% recomendado sobre manitol como 1ª linha em HIC pediátrica (BTF Guidelines 2019)"
    ],
    "source": "BNF for Children 2023-24; BTF Pediatric TBI Guidelines 2019; Spasovski G et al. NDT 2014 (hyponatremia)"
  },
  {
    "id": "manitol",
    "name": "Manitol 20%",
    "category": "electrolitico",
    "class": "Diurético osmótico",
    "brands": "Manitol 20% — frascos 250 ml/500 ml",
    "indication": [
      "Hipertensão intracraniana — osmoterapia (HIC traumática e não-traumática)",
      "Edema cerebral agudo",
      "Redução aguda da PIO no glaucoma agudo",
      "Forçar diurése em intoxicações (barbitúricos, salicilatos)"
    ],
    "dose": [
      {
        "ind": "HIC aguda",
        "val": "0,25–1 g/kg EV em 15–30 min",
        "max": "—",
        "freq": "q4–6h; alvo osmolalidade sérica < 320 mOsm/kg",
        "note": "Dose 0,25 g/kg tão eficaz quanto 1 g/kg com menor rebote (James et al.). Monitorizar osmolalidade e Na⁺ antes de cada dose"
      }
    ],
    "prep": "EV: administrar não diluído (20%). Filtro de 5 μm obrigatório (pode cristalizar). Aquecer se cristais visíveis. Via central preferida; periférica aceitável se urgência.",
    "ci": [
      "Anúria por insuficiência renal (acumulação)",
      "Hipernatremia / hiperosmolalidade > 320 mOsm/kg",
      "Insuf. cardíaca descompensada (sobrecarga)",
      "Hemorragia intracraniana activa (relativa)"
    ],
    "alert": [
      "⚠️ Rebote de PIC possível com doses altas e repetidas (fuga para interstício cerebral lesado)",
      "⚠️ Hipotensão por hipovolemia — manter normovolemia",
      "⚠️ Osmolalidade gap > 10 mOsm/kg sugere acumulação — suspender",
      "NaCl 3% é alternativa com evidência crescentemente favorável em PICU",
      "Monitorizar: osmolalidade sérica, Na⁺, balanço hídrico q4–6h"
    ],
    "source": "BNF for Children 2023-24; BTF Pediatric TBI Guidelines 2019; James HE et al. Childs Nerv Syst 1980"
  },
  {
    "id": "calcio_cloreto",
    "name": "Cloreto de Cálcio 10%",
    "category": "electrolitico",
    "class": "Electrólito — cálcio iónico de libertação imediata",
    "brands": "Cloreto de Cálcio 10% — ampolas 10 ml (1,36 mEq Ca²⁺/ml = 136 mg/10 ml)",
    "indication": [
      "PCR com hipercaliemia, hipocalcemia ou hipermagnesemia",
      "Hipocalcemia sintomática grave (tetania, convulsões, PCR)",
      "Antídoto de bloqueadores canais de cálcio (intoxicação)",
      "Antídoto de hipermagnesemia grave",
      "Hipotensão por anafilaxia refractária"
    ],
    "dose": [
      {
        "ind": "PCR / hipocalcemia grave sintomática",
        "val": "0,2 ml/kg CaCl2 10% EV em 2–5 min",
        "max": "10 ml (1 g)",
        "freq": "Dose única; repetir conforme resposta",
        "note": "CaCl2 fornece 3× mais Ca²⁺ iónico que gluconato de cálcio na mesma dose volume — preferir em PCR"
      },
      {
        "ind": "Intoxicação por BCC / hipermagnesemia",
        "val": "0,2–0,3 ml/kg CaCl2 10% EV",
        "max": "10 ml",
        "freq": "Repetir q5 min × 3 se necessário; depois perfusão 0,2–0,4 ml/kg/h",
        "note": ""
      }
    ],
    "prep": "EV central obrigatório (extremamente irritante — necrose tecidular grave se extravasamento periférico). Nunca misturar com bicarbonato (precipita CaCO3).",
    "ci": [
      "Hipercalcemia",
      "Digitálicos (potencia toxicidade da digoxina — usar com extrema cautela)",
      "Via periférica (necrose)"
    ],
    "alert": [
      "⚠️ APENAS via central — extravasamento periférico causa necrose grave",
      "⚠️ Bradicardia e PCR com injecção rápida — administrar lentamente (2–5 min)",
      "⚠️ Potencia toxicidade da digoxina — usar gluconato de cálcio em doente digitalizado",
      "⚠️ Nunca misturar com bicarbonato na mesma via — precipitação imediata"
    ],
    "source": "BNF for Children 2023-24; PALS AHA 2020; DeWitt CR et al. Crit Care Clin 2005 (CCB toxicity)"
  },
  {
    "id": "zinc_oral",
    "name": "Zinco Oral",
    "category": "electrolitico",
    "class": "Oligoelemento essencial",
    "brands": "Granupas Zinco; Zinco Generis — comp 45 mg (zinco elemento); susp magistral 10 mg/ml",
    "indication": [
      "Deficiência de zinco — acrodermatite enteropática, nutrição parentérica prolongada",
      "Diarreia aguda em criança < 5 anos — tratamento adjuvante (OMS)",
      "Síndrome do intestino curto com perdas aumentadas",
      "Doença de Wilson — manutenção (inibe absorção de cobre)"
    ],
    "dose": [
      {
        "ind": "Diarreia aguda (OMS) — < 6 meses",
        "val": "10 mg/dia PO",
        "max": "—",
        "freq": "1 dose/dia × 10–14 dias",
        "note": "≥ 6 meses: 20 mg/dia × 10–14 dias. Reduz duração e severidade de diarreia (Bhutta ZA et al. BMJ 1999)"
      },
      {
        "ind": "Deficiência / suplementação",
        "val": "0,5–1 mg/kg/dia (zinco elemento)",
        "max": "40 mg/dia",
        "freq": "1–2 doses/dia com refeições",
        "note": ""
      }
    ],
    "prep": "Oral: tomar com alimentos para reduzir náusea. Evitar tomar com ferro (inibição competitiva de absorção).",
    "ci": [
      "Hipersensibilidade"
    ],
    "alert": [
      "Náusea e sabor metálico — comuns com doses altas",
      "Doses altas crónicas inibem absorção de cobre (pode usar-se terapeuticamente na doença de Wilson)",
      "Separar administração de ferro e zinco por 2h (absorção competitiva)"
    ],
    "source": "BNF for Children 2023-24; WHO/UNICEF Zinc Supplementation 2004; Bhutta ZA et al. BMJ 1999"
  },
  {
    "id": "tiamina_ev",
    "name": "Tiamina EV (Vitamina B1)",
    "category": "electrolitico",
    "class": "Vitamina B1 — cofactor piruvatodesidroginase e alfa-cetoglutaratodesidroginase",
    "brands": "Thiamine; Benerva EV — ampolas 100 mg/2 ml; 200 mg/2 ml",
    "indication": [
      "Encefalopatia de Wernicke — tratamento e profilaxia em desnutrição",
      "Deficiência de tiamina em UCI/cuidados intensivos — especialmente com glucose EV",
      "Alcoolismo (raro em criança) — reposição",
      "Doente crítico com desnutrição ou má absorção",
      "Acidose láctica de causa desconhecida — teste terapêutico",
      "Doenças metabólicas tiamina-responsivas (MSUD, PDHc)"
    ],
    "dose": [
      {
        "ind": "Encefalopatia de Wernicke / deficiência grave",
        "val": "50–100 mg EV em 30 min (ou IM)",
        "max": "200 mg/dose",
        "freq": "q8h × 2–3 dias; depois 10–20 mg/dia VO",
        "note": "Administrar ANTES de qualquer glucose (glucose agrava Wernicke em deficientes)"
      },
      {
        "ind": "Profilaxia em doente crítico desnutrido",
        "val": "1–2 mg/kg/dia EV/IM",
        "max": "100 mg/dia",
        "freq": "1× /dia",
        "note": ""
      }
    ],
    "prep": "EV: diluir em SF 100 ml. Administrar em 30 min (reacções anafilactóides com infusão rápida). IM: injecção profunda.",
    "ci": ["Hipersensibilidade à tiamina"],
    "alert": [
      "⚠️ NUNCA dar glucose antes de tiamina em doente com suspeita de deficiência — pode precipitar encefalopatia de Wernicke aguda",
      "Anafilaxia rara com administração rápida — infundir lentamente",
      "Acidose láctica refractária inexplicada: sempre considerar deficiência de tiamina e tiamina-teste 100 mg EV"
    ],
    "source": "BNF for Children 2023-24; Galvin R et al. J Neurol Neurosurg Psychiatry 2010; Donnino MW et al. Crit Care Med 2010"
  },
  {
    "id": "vitamina_c_ev",
    "name": "Vitamina C EV (Ácido Ascórbico)",
    "category": "electrolitico",
    "class": "Vitamina antioxidante — cofactor síntese de colagénio e carnitina",
    "brands": "Vitamina C Labesfal EV — ampolas 500 mg/5 ml; 1000 mg/10 ml",
    "indication": [
      "Escorbuto — deficiência grave de vitamina C",
      "Choque séptico — protocolo HAT (Marik protocol) — controverso",
      "Queimaduras extensas — redução de necessidades de fluidos (protocolo Parkland modificado)",
      "Nutrição parentérica — componente vitamínico"
    ],
    "dose": [
      {
        "ind": "Escorbuto",
        "val": "100–300 mg/dia EV/PO",
        "max": "—",
        "freq": "Dividido em 3 doses × 1–3 semanas",
        "note": "Depois manter 30–50 mg/dia por via oral"
      },
      {
        "ind": "Queimaduras extensas (protocolo)",
        "val": "66 mg/kg/h EV nas primeiras 24h",
        "max": "—",
        "freq": "Perfusão contínua 24h",
        "note": "Reduz necessidades de fluidos ~30% e edema de reperfusão (Tanaka et al. 2000) — protocolo não universal"
      }
    ],
    "prep": "EV: diluir em SF ou SG5%. Concentração ≤ 100 mg/ml. Administrar em 30–60 min. ⚠️ Proteger da luz (degradação fotolítica rápida — envolver em alumínio se infusão prolongada). Incompatível com bicarbonato, riboflavina, cobre na mesma linha. Estabilidade: 6h após diluição.",
    "ci": ["Cálculos renais de oxalato (doses altas crónicas)", "Hemocromatose (aumenta absorção de ferro)"],
    "alert": [
      "⚠️ Protocolo Marik (vitamina C + tiamina + hidrocortisona em sépsis) — ensaio CITRIS-ALI não confirmou benefício; não é standard of care",
      "Doses altas (> 1 g/dia) podem causar cálculos de oxalato em susceptíveis",
      "Interferência com glicómetros de glucose (falsos positivos/negativos)",
      "Uso em NP: incluir nas vitaminas multi-dose diárias"
    ],
    "source": "BNF for Children 2023-24; Fowler AA et al. JAMA 2019 (CITRIS-ALI); Tanaka H et al. Arch Surg 2000"
  },
  {
    "id": "selenio_ev",
    "name": "Selénio EV",
    "category": "electrolitico",
    "class": "Oligoelemento essencial — cofactor glutatião peroxidase",
    "brands": "Selenase — ampolas 500 μg/10 ml (50 μg/ml); solução oral 100 μg/ml",
    "indication": [
      "Deficiência de selénio — doente crítico com NP prolongada",
      "Suplementação em sépsis grave (evidência controversa)",
      "Síndromes de malabsorção com NP longa",
      "Cardiomiopatia de Keshan (deficiência endémica)"
    ],
    "dose": [
      {
        "ind": "NP / suplementação — lactente",
        "val": "2–3 μg/kg/dia EV",
        "max": "—",
        "freq": "Incorporado na NP",
        "note": "Criança > 1 ano: 1–2 μg/kg/dia. Adulto: 25–70 μg/dia"
      },
      {
        "ind": "Sépsis grave — protocolo (off-label)",
        "val": "1–2 μg/kg/dia EV",
        "max": "—",
        "freq": "Durante a fase aguda",
        "note": "Evidência insuficiente para recomendação universal — REDOXS trial negativo"
      }
    ],
    "prep": "EV: incorporar na bolsa de NP ou diluir em SF para perfusão separada. Concentração: traço mineral — volumes muito pequenos (50–100 μg em 50–100 ml). Incompatível com soluções de pH extremo. Estabilidade: verificar com a marca.",
    "ci": ["Hipersensibilidade"],
    "alert": [
      "Toxicidade por selénio (selenose) com doses excessivas: queda de cabelo, neuropatia, alho hálito",
      "Monitorizar nível sérico em NP prolongada (> 2 semanas)",
      "Interacção com vitamina C em doses altas — oxidação do selénio (separar na NP)"
    ],
    "source": "BNF for Children 2023-24; Heyland D et al. JAMA 2013 (REDOXS); ESPEN Micronutrient Guidelines 2022"
  }
];

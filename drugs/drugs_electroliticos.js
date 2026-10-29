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
    "source": "BNF for Children 2020-21, Potassium chloride (p. 635)",
    "review": ["O BNFC 2020-21 indica apenas \"dose de acordo com o défice ou as necessidades de manutenção\". As doses fixas desta ficha (0,5–1 mEq/kg, máx. 40 mEq/dose; manutenção 2–4 mEq/kg/dia; velocidades) não têm fonte verificada neste conjunto de documentos; seguir o protocolo local de reposição."]

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
    "source": "BNF for Children 2020-21, Glucose (p. 638); Shann F. Drug Doses",
    "review": ["Mantidos apenas os esquemas de hipoglicemia suportados pelo BNFC e pelo Shann. As taxas de infusão de manutenção por idade (RN 4–8, lactente 3–5, criança 2–3 mg/kg/min) não têm fonte verificada neste conjunto de documentos; Shann refere ~4 mg/kg/min (6 g/kg/dia) no RN."]
  
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
    "source": "Formulário de Pediatria 3ª Ed.; SAFE Study NEJM 2004",
    "review": ["O BNFC 2020-21 não indica dose pediátrica fixa de albumina («consultar a informação do produto»). As doses da ficha (10–20 mL/kg de albumina 4–5%) provêm do Formulário/SAFE e não estão verificadas contra o BNFC."]

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
        "ind": "Hipomagnesemia — EV lento (≥ 10 min)",
        "val": "RN: 100 mg/kg cada 6–12 h; 1 mês–11 anos: 50 mg/kg cada 12 h; 12–17 anos: 1 g cada 12 h",
        "max": "—",
        "freq": "Conforme necessário",
        "note": "BNFC 2020-21 (p. 646). 1 g de sulfato de magnésio ≈ 4 mmol de Mg²⁺."
      },
      {
        "ind": "Hipomagnesemia — manutenção (ex.: nutrição parentérica) — EV ou IM",
        "val": "50–100 mg/kg/dia",
        "max": "5 g/dia",
        "freq": "Diária",
        "note": "BNFC 2020-21 (p. 646)."
      },
      {
        "ind": "Asma aguda grave / deterioração respiratória na anafilaxia — EV, 2–17 anos (não licenciado)",
        "val": "40 mg/kg em 20 min",
        "max": "2 g/dose",
        "freq": "Dose única",
        "note": "BNFC 2020-21 (p. 646)."
      },
      {
        "ind": "Torsades de pointes — EV, criança",
        "val": "25–50 mg/kg em 10–15 min; pode repetir uma vez",
        "max": "2 g/dose",
        "freq": "Consultar protocolo local",
        "note": "BNFC 2020-21 (p. 646)."
      },
      {
        "ind": "Hipertensão pulmonar persistente do RN — EV",
        "val": "200 mg/kg em 20–30 min; depois perfusão 20–75 mg/kg/h até 5 dias, mantendo Mg²⁺ plasmático 3,5–5,5 mmol/L",
        "max": "—",
        "freq": "Perfusão contínua",
        "note": "BNFC 2020-21 (p. 646)."
      },
      {
        "ind": "Hipocalcemia neonatal — IM profunda ou EV, RN",
        "val": "100 mg/kg cada 12 h × 2–3 doses",
        "max": "—",
        "freq": "Cada 12 h",
        "note": "BNFC 2020-21 (p. 646)."
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
    "source": "BNFC 2020-21, Magnesium sulfate (p. 646); Harriet Lane 23rd Ed",
    "review": ["A ficha anterior tinha a dose da asma em 40–50 mg/kg e o intervalo de 25–75 mg/kg; o BNFC 2020-21 indica 40 mg/kg (máx. 2 g). Linha de eclampsia (adulto) removida."]
  
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
    "source": "Harriet Lane 23rd Ed",
    "review": ["O fosfato EV não consta do BNFC 2020-21 (a entrada de fosfato do BNFC refere-se a clisteres). As doses (0,15–0,25 mmol/kg em 6 h; realimentação 0,5–0,8 mmol/kg/dia) provêm do Harriet Lane e não foram verificadas contra as fontes do utilizador."]

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
    "source": "BTF Pediatric TBI Guidelines 2019; Spasovski G et al. NDT 2014 (hyponatremia)",
    "review": ["O NaCl 3% EV em bólus não consta do BNFC 2020-21. As doses (HIC 3–5 mL/kg; hiponatremia sintomática 2–3 mL/kg) provêm das normas BTF 2019 e não foram verificadas contra as fontes do utilizador; confirmar com o protocolo de HTIC do UCIEP."]

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
        "ind": "Edema cerebral — perfusão EV, 1 mês–11 anos",
        "val": "0,25–1,5 g/kg em 30–60 min; pode repetir 1–2 vezes após 4–8 h",
        "max": "—",
        "freq": "Repetir 1–2 vezes cada 4–8 h",
        "note": "BNFC 2020-21 (p. 149). Alvo de osmolalidade sérica < 320 mOsm/L."
      },
      {
        "ind": "Edema cerebral — perfusão EV, 12–17 anos",
        "val": "0,25–2 g/kg em 30–60 min; pode repetir 1–2 vezes após 4–8 h",
        "max": "—",
        "freq": "Repetir 1–2 vezes cada 4–8 h",
        "note": "BNFC 2020-21 (p. 149)."
      },
      {
        "ind": "Edema periférico e ascite — perfusão EV, criança",
        "val": "1–2 g/kg em 2–6 h",
        "max": "—",
        "freq": "—",
        "note": "BNFC 2020-21 (p. 149)."
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
    "source": "BNFC 2020-21, Mannitol (p. 149); Brain Trauma Foundation Pediatric TBI Guidelines 2019",
    "review": ["A ficha anterior tinha 0,25–1 g/kg em 15–30 min a cada 4–6 h; o BNFC 2020-21 indica 30–60 min com repetição 1–2 vezes."]
  
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
    "source": "BNF for Children 2020-21, Calcium chloride (p. 642); PALS AHA 2020",
    "review": ["BNFC 2020-21 (hipocalcemia aguda): \"consultar o RCM\". As doses desta ficha (0,2 mL/kg de CaCl2 10% em PCR, 0,2–0,3 mL/kg em intoxicação por bloqueadores dos canais de cálcio) provêm de PALS/literatura não incluída nos documentos disponíveis — confirmar no algoritmo vigente."]

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
    "source": "BNF for Children 2020-21, Zinc sulfate (p. 668); OMS/UNICEF (diarreia)",
    "review": ["BNFC 2020-21 (carência de zinco, sais efervescentes, em zinco elementar): RN 1 mg/kg/dia; <10 kg 22,5 mg/dia; 10–30 kg 22,5 mg 1–3×/dia; ≥31 kg 45 mg 1–3×/dia. Acrodermatite enteropática: 0,5–1 mg/kg 2×/dia. Doença de Wilson: 1–5 anos 25 mg 2×/dia; 6–15 anos 25–50 mg 3×/dia. A dose da OMS para diarreia (10 mg/dia <6 meses) não consta dos documentos disponíveis."]

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
        "ind": "Doença da urina em xarope de ácer — oral, RN e criança",
        "val": "5 mg/kg/dia, ajustar à resposta",
        "max": "—",
        "freq": "1×/dia",
        "note": "BNFC 2020-21 (p. 678)."
      },
      {
        "ind": "Doenças metabólicas / acidose láctica congénita — oral ou perfusão EV (30 min), RN",
        "val": "50–200 mg 1×/dia (ou dividido em 2–3 doses)",
        "max": "—",
        "freq": "1×/dia",
        "note": "BNFC 2020-21 (p. 678)."
      },
      {
        "ind": "Doenças metabólicas / acidose láctica congénita — oral ou perfusão EV (30 min), criança",
        "val": "100–300 mg 1×/dia (ou dividido em 2–3 doses); oral até 2 g/dia se necessário",
        "max": "2 g/dia (oral)",
        "freq": "1×/dia",
        "note": "BNFC 2020-21 (p. 678)."
      },
      {
        "ind": "Encefalopatia de Wernicke / défice grave (não consta do BNFC)",
        "val": "50–100 mg EV em 30 min (ou IM)",
        "max": "200 mg/dose",
        "freq": "Cada 8 h × 2–3 dias; depois dose de manutenção",
        "note": "Galvin R et al. Eur J Neurol 2010 (adultos); extrapolado."
      }
    ],
    "prep": "EV: diluir em SF 100 ml. Administrar em 30 min (reacções anafilactóides com infusão rápida). IM: injecção profunda.",
    "ci": ["Hipersensibilidade à tiamina"],
    "alert": [
      "⚠️ NUNCA dar glucose antes de tiamina em doente com suspeita de deficiência — pode precipitar encefalopatia de Wernicke aguda",
      "Anafilaxia rara com administração rápida — infundir lentamente",
      "Acidose láctica refractária inexplicada: sempre considerar deficiência de tiamina e tiamina-teste 100 mg EV"
    ],
    "source": "BNFC 2020-21, Thiamine (p. 678); Galvin R et al. Eur J Neurol 2010",
    "review": ["Profilaxia em doente crítico desnutrido (1–2 mg/kg/dia) removida: não consta do BNFC 2020-21."]
  
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
        "ind": "Escorbuto (PO)",
        "val": "1 mês–3 anos: 125–250 mg/dia em 1–2 doses; 4–11 anos: 250–500 mg/dia em 1–2 doses; 12–17 anos: 0,5–1 g/dia em 1–2 doses",
        "max": "—",
        "freq": "1–2×/dia",
        "note": "BNFC 2020-21, Ascorbic acid (p. 680). Shann: 100 mg 8/8 h PO durante 10 dias."
      },
      {
        "ind": "Doenças metabólicas (tirosinemia tipo III, tirosinemia transitória do RN, etc.)",
        "val": "RN: 50–200 mg/dia; criança: 200–400 mg/dia em 1–2 doses (até 1 g/dia)",
        "max": "1 g/dia",
        "freq": "1–2×/dia",
        "note": "BNFC 2020-21 (p. 680)."
      },
      {
        "ind": "Queimaduras",
        "val": "200–500 mg/dia EV, IM, SC ou PO",
        "max": "—",
        "freq": "1×/dia",
        "note": "Shann, Drug Doses (entrada Ascorbic acid)."
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
    "source": "BNF for Children 2020-21, Ascorbic acid (p. 680); Shann F. Drug Doses",
    "review": ["Removida a dose de 66 mg/kg/h nas primeiras 24 h em grandes queimados (protocolo de adultos) e a dose EV para sépsis: não constam das fontes disponíveis."]
  
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
    "source": "Heyland D et al. JAMA 2013 (REDOXS); ESPEN Micronutrient Guidelines 2022",
    "review": ["O selénio EV não consta do BNFC 2020-21 e a dose na sépsia (1–2 mcg/kg/dia) é fora de indicação; não foi verificada contra as fontes do utilizador."]

  }
];

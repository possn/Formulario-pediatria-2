// UCIP Pediatria — Neurologia & Antiepilépticos
// 17 fármacos
// Fontes: ver drugs_sources.js

var DRUGS_ANTIEPILEPTICOS = [
  {
    "id": "diazepam",
    "name": "Diazepam",
    "category": "antiepileptico",
    "class": "Benzodiazepina — potenciador GABA-A",
    "brands": "Valium 10 mg/2 ml. Stesolid 5 mg/2,5 ml (rectal).",
    "indication": [
      "Convulsão aguda — 1ª linha (rectal/intranasal pré-hospitalar)",
      "Status epilepticus — 1ª BZD se sem AV",
      "Abstinência alcoólica (adolescente)",
      "Espasticidade muscular"
    ],
    "dose": [
      {
        "ind": "Convulsão — rectal",
        "val": "0,5 mg/kg",
        "max": "10 mg",
        "freq": "pode repetir 1× após 10 min",
        "note": "< 3 anos: 5 mg. > 3 anos: 10 mg (Stesolid)"
      },
      {
        "ind": "Convulsão — EV",
        "val": "0,3–0,4 mg/kg EV lento",
        "max": "10 mg/dose",
        "freq": "pode repetir 1× após 5 min",
        "note": "Administrar lentamente (< 2 mg/min) — risco apneia"
      },
      {
        "ind": "Convulsão — IM/intranasal",
        "val": "0,3 mg/kg IM",
        "max": "10 mg",
        "freq": "dose única",
        "note": "Absorção IM irregular — preferir lorazepam IM ou midazolam IN"
      }
    ],
    "prep": "EV: não diluir. Pode administrar directamente. Absorção IM errática.",
    "ci": [
      "Depressão respiratória grave",
      "Miastenia gravis",
      "Insuf. hepática grave"
    ],
    "alert": [
      "⚠️ Depressão respiratória — monitorização SpO2 obrigatória",
      "⚠️ Solução EV contém propilenoglicol (tóxico em RN e doses repetidas)",
      "Longa semi-vida activa (20–100h + metabolito activo) — sedação prolongada",
      "Tolerância e dependência com uso crónico"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
  },
  {
    "id": "lorazepam",
    "name": "Lorazepam",
    "category": "antiepileptico",
    "class": "Benzodiazepina — potenciador GABA-A",
    "brands": "Ativan 4 mg/ml; 2 mg/ml",
    "indication": [
      "Status epilepticus — 1ª linha EV/IO (preferida ao diazepam EV)",
      "Convulsão aguda com AV",
      "Sedação por procedimentos"
    ],
    "dose": [
      {
        "ind": "Status epilepticus / convulsão — EV/IO",
        "val": "0,1 mg/kg EV lento",
        "max": "4 mg/dose",
        "freq": "pode repetir 1× após 5–10 min",
        "note": "Preferida ao diazepam EV: duração de acção mais longa (4–6h vs 15–30 min), menor redistribuição"
      },
      {
        "ind": "IM",
        "val": "0,1 mg/kg IM",
        "max": "4 mg",
        "freq": "dose única",
        "note": "Absorção IM boa (ao contrário do diazepam)"
      }
    ],
    "prep": "Conservar no frio. Administrar EV lento (não em bólus rápido). Pode diluir 1:1 em SF.",
    "ci": [
      "Depressão respiratória grave",
      "Miastenia gravis"
    ],
    "alert": [
      "⚠️ Depressão respiratória — monitorização SpO2 e estar preparado para ventilação",
      "Semi-vida 10–20h (sem metabolito activo — vantagem sobre diazepam)",
      "Requer refrigeração — verificar disponibilidade em emergência"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24; APLS Guidelines 2021"
  },
  {
    "id": "fenobarbital",
    "name": "Fenobarbital",
    "category": "antiepileptico",
    "class": "Barbitúrico — potenciador GABA-A",
    "brands": "Luminal 200 mg/ml (amp. 1 ml)",
    "indication": [
      "Status epilepticus — 2ª linha (após BZD)",
      "Epilepsia neonatal — 1ª linha",
      "Epilepsia crónica (2ª linha em crianças)",
      "Convulsões neonatais — 1ª linha (qualquer etiologia)",
      "Encefalopatia hipóxico-isquémica (EHI) — tratamento convulsões e neuroprotecção",
      "Síndrome de abstinência neonatal (NAS/NOWS) — 2ª linha após morfina/metadona",
      "Profilaxia convulsões em EHI grave",
      "Hiperbilirrubinemia neonatal refractária (adjuvante à fototerapia)",
      "Colestase neonatal (estimula fluxo biliar)",
      "Síndrome de Crigler-Najjar tipo II (uso crónico)"
    ],
    "dose": [
      {
        "ind": "Status epilepticus — carga EV",
        "val": "20 mg/kg EV em 20–30 min",
        "max": "40 mg/kg total (adicionar 10–20 mg/kg se sem resposta)",
        "freq": "dose única de carga",
        "note": "Monitorização TA e FR contínuas"
      },
      {
        "ind": "Epilepsia neonatal",
        "val": "20 mg/kg EV em 30 min (carga) → 3–5 mg/kg/dia manutenção",
        "max": "40 mg/kg carga",
        "freq": "manutenção em 1–2 doses/dia",
        "note": "1ª linha em RN"
      },
      {
        "ind": "Manutenção oral/EV",
        "val": "3–5 mg/kg/dia",
        "max": "—",
        "freq": "1–2 doses/dia",
        "note": "Nível sérico terapêutico: 15–40 mcg/ml"
      },
      {
        "ind": "Convulsões neonatais — carga EV",
        "val": "20 mg/kg EV em 15–30 min",
        "max": "40 mg/kg total (2ª dose 10–20 mg/kg se sem resposta)",
        "freq": "dose de carga",
        "note": "Se sem resposta após 40 mg/kg total → considerar fenitoína/levetiracetam/midazolam"
      },
      {
        "ind": "Neonatal — Manutenção EV/oral",
        "val": "3–5 mg/kg/dia",
        "max": "—",
        "freq": "1–2 doses/dia",
        "note": "Iniciar 12–24h após carga. Nível terapêutico: 20–40 mcg/ml"
      },
      {
        "ind": "Neonatal — NAS — oral (2ª linha)",
        "val": "Carga 20 mg/kg oral → manutenção 5 mg/kg/dia",
        "max": "—",
        "freq": "manutenção 2×/dia; desmame 10%/dia quando score NAS controlado",
        "note": ""
      },
      {
        "ind": "Hiperbilirrubinemia — oral",
        "val": "5 mg/kg/dia oral",
        "max": "—",
        "freq": "1–2 doses/dia",
        "note": "Efeito demora 3–7 dias (indução enzimática) — não é de acção imediata. Papel limitado na era da fototerapia LED de alta intensidade"
      },
      {
        "ind": "Colestase neonatal",
        "val": "3–5 mg/kg/dia oral",
        "max": "—",
        "freq": "1 dose/dia",
        "note": ""
      }
    ],
    "prep": "EV: diluir em SF ou SG5%. Concentração máx. 16 mg/ml EV. Velocidade máx. 1 mg/kg/min.",
    "ci": [
      "Porfiria",
      "Depressão respiratória grave",
      "Depressão respiratória grave não monitorizada"
    ],
    "alert": [
      "⚠️ Depressão respiratória especialmente se associado a BZD — ter suporte ventilatório disponível",
      "⚠️ Hipotensão na infusão rápida",
      "⚠️ Indutor enzimático CYP450 — múltiplas interacções (varfarina, esteroides, antiretrovirais)",
      "Sedação prolongada — avaliar nível de consciência",
      "Monitorizar nível sérico",
      "⚠️ Depressão respiratória — monitorização SpO2 e estar preparado para ventilação",
      "⚠️ Sedação prolongada — avaliar nível de consciência",
      "⚠️ Indução enzimática — ↓ bilirrubina (útil) mas ↓ vitamina D e K",
      "Nível sérico: colher 1h após dose EV ou 2h após oral",
      "⚠️ Sedação — monitorizar FR e nível de consciência",
      "⚠️ Efeito não imediato (3–7 dias para indução enzimática)",
      "Papel clínico limitado na hiperbilirrubinemia — fototerapia é o tratamento principal"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24; BNF for Children 2023-24; Volpe JJ. Neurology of the Newborn 6th Ed; ILCOR NNS Guidelines 2021; BNF for Children 2023-24; NICE NG98 Jaundice Guidelines 2016"
  },
  {
    "id": "fenitoina",
    "name": "Fenitoína",
    "category": "antiepileptico",
    "class": "Antiepiléptico — bloqueador canais de Na+",
    "brands": "Hidantoína 50 mg/ml",
    "indication": [
      "Status epilepticus — 2ª linha (após BZD)",
      "Epilepsia focal / generalizada (manutenção)",
      "Arritmias digitálicas (uso raro)"
    ],
    "dose": [
      {
        "ind": "Status epilepticus — carga EV",
        "val": "18–20 mg/kg EV",
        "max": "1500 mg",
        "freq": "velocidade máx. 1 mg/kg/min (0,5 mg/kg/min em RN/cardíaco)",
        "note": "Monitorização ECG e TA obrigatória durante infusão. Diluir em SF (precipita em SG)"
      },
      {
        "ind": "Manutenção EV/oral",
        "val": "5–8 mg/kg/dia (< 1 ano: 8–10 mg/kg/dia)",
        "max": "300 mg/dia",
        "freq": "2–3 doses/dia",
        "note": "Nível terapêutico: 10–20 mcg/ml (total); 1–2 mcg/ml (livre)"
      }
    ],
    "prep": "⚠️ APENAS em SF — precipita em SG5%. Linha dedicada. Não misturar com outros fármacos.",
    "ci": [
      "Bloqueio sinoatrial / AV 2º-3º grau",
      "Síndrome de Adams-Stokes",
      "Bradicardia sinusal"
    ],
    "alert": [
      "⚠️ Cardiotoxicidade na infusão rápida: bradicardia, hipotensão, bloqueio AV",
      "⚠️ Síndrome 'purple glove' — necrose tecidular por extravasamento EV periférico",
      "⚠️ Cinética não-linear (Michaelis-Menten) — pequenas alterações de dose → grandes variações de nível sérico",
      "⚠️ Indutor enzimático CYP450 — múltiplas interacções",
      "Não usar em doença hepática grave; monitorizar LFTs"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
  },
  {
    "id": "levetiracetam",
    "name": "Levetiracetam",
    "category": "antiepileptico",
    "class": "Antiepiléptico — ligação à proteína SV2A da vesícula sináptica",
    "brands": "Keppra 500 mg/5 ml (EV); sol. oral 100 mg/ml; comp. 250/500/750/1000 mg",
    "indication": [
      "Status epilepticus — 2ª linha (alternativa à fenitoína, evidência crescente como 1ª escolha 2ª linha)",
      "Epilepsia focal (1ª ou 2ª linha)",
      "Epilepsia mioclónica juvenil",
      "Epilepsia generalizada"
    ],
    "dose": [
      {
        "ind": "Status epilepticus — carga EV",
        "val": "40–60 mg/kg EV em 5–15 min",
        "max": "3000 mg/dose",
        "freq": "dose única de carga",
        "note": "ConSEPT e ECLIPSE trials 2019: eficácia similar à fenitoína (60% vs 50%) com melhor perfil segurança (sem cardiotoxicidade)"
      },
      {
        "ind": "Epilepsia — dose inicial oral/EV",
        "val": "10 mg/kg/dose × 2/dia",
        "max": "—",
        "freq": "2×/dia",
        "note": "Titular cada 2 semanas"
      },
      {
        "ind": "Epilepsia — dose alvo",
        "val": "20–30 mg/kg/dose × 2/dia",
        "max": "1500 mg/dose (3000 mg/dia)",
        "freq": "2×/dia",
        "note": "Adulto: 500 mg × 2/dia → até 1500 mg × 2/dia"
      }
    ],
    "prep": "EV: diluir em 100 ml SF/SG5%. Administrar em 5–15 min. Biodisponibilidade oral ~100%.",
    "ci": [
      "Hipersensibilidade"
    ],
    "alert": [
      "⚠️ Irritabilidade, labilidade emocional em 10–15% das crianças — clinicamente relevante, pode exigir alteração",
      "Ajuste renal se TFG < 50 ml/min/1,73m²",
      "Vantagens: sem indução enzimática, sem cardiotoxicidade, sem necessidade de monitorização de níveis séricos rotina",
      "Não requer monitorização ECG durante infusão (ao contrário da fenitoína)"
    ],
    "source": "Lyttle MD et al. (ConSEPT). Lancet 2019;393:2178–87; Dalziel SR et al. (ECLIPSE). Lancet 2019;393:2155–64; BNF for Children 2023-24"
  },
  {
    "id": "acido_valproico",
    "name": "Valproato de Sódio",
    "category": "antiepileptico",
    "class": "Antiepiléptico — múltiplos mecanismos (Na+, GABA, Ca²+)",
    "brands": "Depakine Chronosphere; Depakine 400 mg/4 ml (EV)",
    "indication": [
      "Epilepsia generalizada (1ª linha)",
      "Epilepsia mioclónica",
      "Status epilepticus — 2ª linha EV",
      "Profilaxia enxaqueca"
    ],
    "dose": [
      {
        "ind": "Status epilepticus — carga EV",
        "val": "20–40 mg/kg EV em 5–10 min",
        "max": "3000 mg",
        "freq": "dose única",
        "note": "Boa evidência como 2ª linha no SE. Nível terapêutico: 50–100 mcg/ml"
      },
      {
        "ind": "Manutenção oral/EV",
        "val": "15–40 mg/kg/dia",
        "max": "60 mg/kg/dia",
        "freq": "2–3 doses/dia (libertação prolongada: 1–2/dia)",
        "note": ""
      }
    ],
    "prep": "EV: diluir em SF ou SG5%. Velocidade infusão: até 3 mg/kg/min.",
    "ci": [
      "⛔ < 2 ANOS: contraindicado se doença hepática, doença metabólica, epilepsia grave com retardo — risco FATAL de hepatotoxicidade",
      "Disfunção hepática",
      "Doença mitocondrial (Alpers, POLG)",
      "Gravidez (teratogénico — espinha bífida)"
    ],
    "alert": [
      "⛔ HEPATOTOXICIDADE FATAL — risco máximo < 3 anos com politerapia. Monitorizar LFTs",
      "⛔ PANCREATITE aguda — rara mas fatal",
      "⚠️ Hiperamoniemia (encefalopatia) — especialmente com fenobarbital",
      "⚠️ Teratogénese: espinha bífida, atraso cognitivo — EVITAR na gravidez",
      "⚠️ Múltiplas interacções: ↑ lamotrigina, ↑ fenitoína livre, ↑ fenobarbital"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24; Harriet Lane 23rd Ed"
  },
  {
    "id": "fosfenitoina",
    "name": "Fosfenitoína",
    "category": "antiepileptico",
    "class": "Pró-fármaco da fenitoína — dose expressa em Equivalentes de Fenitoína (PE)",
    "brands": "Pro-Epanutin 75 mg/ml (= 50 mg PE/ml). Amp. 10 ml = 500 mg PE.",
    "indication": [
      "Status epilepticus — alternativa à fenitoína EV",
      "Manutenção antiepiléptica EV quando via oral não possível"
    ],
    "dose": [
      {
        "ind": "Status epilepticus — carga EV",
        "val": "15–20 mg PE/kg EV",
        "max": "1500 mg PE",
        "freq": "velocidade máxima 3 mg PE/kg/min (vs 1 mg PE/kg/min da fenitoína)",
        "note": "Conversão completa em 15 min após infusão"
      },
      {
        "ind": "Manutenção",
        "val": "4–8 mg PE/kg/dia EV/IM",
        "max": "—",
        "freq": "2 doses/dia",
        "note": "Nível fenitoína: colher 2h após dose EV"
      }
    ],
    "prep": "Pode diluir em SF OU SG5% (ao contrário da fenitoína — vantagem). Concentração: 1,5–25 mg PE/ml.",
    "ci": [
      "Bloqueio sinoatrial/AV 2º-3º grau",
      "Bradicardia sinusal grave"
    ],
    "alert": [
      "⚠️ Prurido e parestesias durante infusão (por ciclodextrina veículo) — transitórios, não é alergia",
      "⚠️ Monitorização ECG e TA durante infusão (menos cardiotóxico que fenitoína, mas vigilância necessária)",
      "⚠️ EQUIVALÊNCIA: 1,5 mg fosfenitoína = 1 mg PE = 1 mg fenitoína",
      "Vantagem: pode ser administrada IM e em SG5%; menos flebite; ritmo mais rápido"
    ],
    "source": "Abend NS et al. Epilepsia 2019; BNF for Children 2023-24; Pro-Epanutin SmPC"
  },
  {
    "id": "lacosamida",
    "name": "Lacosamida",
    "category": "antiepileptico",
    "src": "added",
    "class": "Antiepiléptico — estabilização inactivação lenta canais Na+",
    "brands": "Vimpat comp. 50/100/150/200 mg; sol. oral 10 mg/ml; EV 200 mg/20 ml",
    "indication": [
      "Epilepsia focal com ou sem generalização secundária",
      "Status epilepticus refractário (EV — off-label crescente)",
      "Adjuvante ≥ 4 anos"
    ],
    "dose": [
      {
        "ind": "Epilepsia focal oral/EV (4–17 anos)",
        "val": "INÍCIO 2 mg/kg/dia → ALVO 4–8 mg/kg/dia",
        "max": "400 mg/dia (adulto)",
        "freq": "2 doses/dia",
        "note": "Aumentar 2 mg/kg/dia por semana"
      },
      {
        "ind": "Status epilepticus refractário EV",
        "val": "5 mg/kg EV em 15 min",
        "max": "300 mg",
        "freq": "dose de carga; pode repetir",
        "note": "Evidência crescente como alternativa ao valproato/fenitoína no SE refractário"
      }
    ],
    "prep": "EV: diluir em SF, SG5% ou LR. Concentração 10 mg/ml. Infusão 15–60 min.",
    "ci": [
      "Bloqueio AV 2º/3º grau (relativa)"
    ],
    "alert": [
      "⚠️ Prolongamento PR — monitorizar ECG na titulação",
      "Tonturas, diplopia, ataxia (dose-dependentes)",
      "Boa tolerabilidade — sem indução enzimática",
      "Alternativa útil quando valproato/fenitoína contra-indicados"
    ],
    "source": "BNF for Children 2023-24; Wusthoff CJ. Epilepsia 2021"
  },
  {
    "id": "topiramato",
    "name": "Topiramato",
    "category": "antiepileptico",
    "src": "added",
    "class": "Antiepiléptico — múltiplos mecanismos (Na+, GABA, glutamato, ANIC)",
    "brands": "Topamax comp. 25/50/100/200 mg; sprinkles 15/25 mg",
    "indication": [
      "Epilepsia focal refractária (adjuvante ≥ 2 anos)",
      "Epilepsia generalizada (Lennox-Gastaut, West)",
      "Síndrome de Dravet (adjuvante)",
      "Profilaxia enxaqueca (> 12 anos)"
    ],
    "dose": [
      {
        "ind": "Epilepsia — dose inicial oral",
        "val": "0,5–1 mg/kg/dia",
        "max": "—",
        "freq": "2 doses/dia; aumentar 0,5–1 mg/kg/semana",
        "note": ""
      },
      {
        "ind": "Epilepsia — dose alvo",
        "val": "5–9 mg/kg/dia",
        "max": "400 mg/dia",
        "freq": "2 doses/dia",
        "note": "Titular lentamente para minimizar efeitos cognitivos"
      }
    ],
    "prep": "Cápsulas sprinkle podem ser abertas e misturadas em alimentos moles (não mastigar).",
    "ci": [
      "Nefrolitíase recorrente (relativa)",
      "Glaucoma (relativa)"
    ],
    "alert": [
      "⚠️ Efeitos cognitivos: lentificação, dificuldade de palavra ('dopiramato') — titular lentamente",
      "⚠️ Nefrolitíase (2–4%) — hidratação adequada",
      "⚠️ Hipohidrose e hipertermia (crianças) — vigilância em clima quente",
      "⚠️ Perda de peso (monitorizar crescimento em crianças)",
      "⚠️ Acidose metabólica hiperclorémica — monitorizar bicarbonato"
    ],
    "source": "BNF for Children 2023-24; Harriet Lane 23rd Ed"
  },
  {
    "id": "vigabatrina",
    "name": "Vigabatrina",
    "category": "antiepileptico",
    "src": "added",
    "class": "Antiepiléptico — inibidor irreversível GABA transaminase (↑GABA)",
    "brands": "Sabril comp. 500 mg; pó sachets 500 mg",
    "indication": [
      "Espasmos infantis (Síndrome de West) — especialmente associados a esclerose tuberosa",
      "Epilepsia focal refractária (adjuvante)"
    ],
    "dose": [
      {
        "ind": "Espasmos infantis",
        "val": "INÍCIO 50 mg/kg/dia → até 150 mg/kg/dia",
        "max": "150 mg/kg/dia",
        "freq": "2 doses/dia",
        "note": "Resposta esperada em 2 semanas; se sem resposta descontinuar"
      },
      {
        "ind": "Epilepsia focal (adjuvante)",
        "val": "40–80 mg/kg/dia",
        "max": "3 g/dia",
        "freq": "2 doses/dia",
        "note": ""
      }
    ],
    "prep": "Dissolver o pó em água ou sumo antes de administrar.",
    "ci": [
      "Neuropatia óptica prévia",
      "Campos visuais alterados"
    ],
    "alert": [
      "⛔ DEFEITO DO CAMPO VISUAL permanente e irreversível em 30–50% dos doentes — avaliação oftalmológica de base e a cada 6 meses",
      "⚠️ Sedação, comportamento anormal",
      "⚠️ Anomalias de sinal MRI reversíveis em lactentes (síndrome de mielinização transitória)",
      "Uso limitado por toxicidade ocular — preferir para espasmos infantis onde benefício supera risco"
    ],
    "source": "BNF for Children 2023-24; NICE Guidelines Epilepsy 2022"
  },
  {
    "id": "oxcarbazepina",
    "name": "Oxcarbazepina",
    "category": "antiepileptico",
    "src": "added",
    "class": "Antiepiléptico — bloqueador canais Na+ (análogo da carbamazepina)",
    "brands": "Trileptal comp. 150/300/600 mg; susp. 60 mg/ml",
    "indication": [
      "Epilepsia focal — 1ª ou 2ª linha (≥ 1 mês)",
      "Epilepsia focal com generalização secundária"
    ],
    "dose": [
      {
        "ind": "Dose inicial oral",
        "val": "8–10 mg/kg/dia",
        "max": "600 mg/dia inicial",
        "freq": "2 doses/dia",
        "note": "Aumentar 10 mg/kg/semana"
      },
      {
        "ind": "Dose alvo",
        "val": "30–46 mg/kg/dia",
        "max": "2400 mg/dia",
        "freq": "2 doses/dia",
        "note": "Nível terapêutico (10-OH-CBZ): 3–35 mcg/ml"
      }
    ],
    "prep": "Suspensão: agitar antes de usar. Pode misturar com água.",
    "ci": [
      "Hipersensibilidade à carbamazepina (reacção cruzada 25–30%)"
    ],
    "alert": [
      "⚠️ HIPONATREMIA — mais frequente que com carbamazepina. Monitorizar Na+ sérico",
      "⚠️ Reacção alérgica cutânea (HLA-B*1502 em asiáticos — risco Steven-Johnson)",
      "Menos interacções que carbamazepina (indutor enzimático mais fraco)",
      "Boa tolerabilidade cognitiva"
    ],
    "source": "BNF for Children 2023-24; Harriet Lane 23rd Ed"
  },
  {
    "id": "stiripentol",
    "name": "Stiripentol",
    "category": "antiepileptico",
    "src": "added",
    "class": "Antiepiléptico — potenciador GABA-A + inibidor CYP enzimas",
    "brands": "Diacomit caps. 250/500 mg; pó sachets 250/500 mg",
    "indication": [
      "Síndrome de Dravet — adjuvante (com valproato + clobazam)",
      "Aprovado especificamente para Dravet — uso muito específico"
    ],
    "dose": [
      {
        "ind": "Dravet — adjuvante oral",
        "val": "50 mg/kg/dia",
        "max": "3000 mg/dia",
        "freq": "2–3 doses/dia com refeições",
        "note": "Iniciar 50 mg/kg/dia. Inibidor potente CYP3A4/CYP2C19 — reduzir clobazam 25% e valproato"
      }
    ],
    "prep": "Cápsulas ou pó dissolvido em água/sumo. Tomar com refeições.",
    "ci": [
      "Uso sem valproato + clobazam no Dravet"
    ],
    "alert": [
      "⚠️ Inibidor CYP3A4 e CYP2C19 — ↑↑ níveis clobazam e valproato. Reduzir doses adjuvantes",
      "⚠️ Anorexia, perda de peso (monitorizar crescimento)",
      "⚠️ Sedação, ataxia",
      "Medicamento órfão — uso exclusivo em Síndrome de Dravet confirmada"
    ],
    "source": "BNF for Children 2023-24; Wirrell EC. Epilepsia 2017"
  },
  {
    "id": "canabidiol",
    "name": "Canabidiol (CBD) — Epidyolex",
    "category": "antiepileptico",
    "class": "Fitocanabinoide — mecanismo multifactorial (modulação Ca²⁺, serotoninérgico, GPR55)",
    "brands": "Epidyolex — solução oral 100 mg/ml",
    "indication": [
      "Síndrome de Dravet — adjuvante (aprovação EMA/FDA ≥ 2 anos)",
      "Síndrome de Lennox-Gastaut — adjuvante (aprovação EMA/FDA ≥ 2 anos)",
      "Esclerose tuberosa complexa — crises associadas (aprovação EMA 2021)",
      "Síndrome CDKL5 — uso off-label com evidência crescente"
    ],
    "dose": [
      {
        "ind": "Dravet / Lennox-Gastaut / esclerose tuberosa",
        "val": "Início: 2,5 mg/kg/dose PO × 2/dia (5 mg/kg/dia)",
        "max": "10–20 mg/kg/dia (máx 20 mg/kg/dia na ETC)",
        "freq": "q12h com alimentos gordurosos (aumenta absorção 3–4×)",
        "note": "Titular: aumentar 2,5 mg/kg/dose (5 mg/kg/dia) a cada semana até resposta ou efeito adverso"
      }
    ],
    "prep": "Oral: solução 100 mg/ml — seringa de dosagem incluída. Tomar SEMPRE com alimentos ricos em gordura para maximizar biodisponibilidade.",
    "ci": [
      "Insuficiência hepática moderada a grave (ajuste de dose)",
      "Hipersensibilidade"
    ],
    "alert": [
      "⚠️ Hepatotoxicidade — TFH antes e a 1, 3, 6 meses; risco aumentado se valproato concomitante (sinergismo hepatotóxico)",
      "⚠️ Interacção major com valproato: aumenta metabolito tóxico 4-EN-VPA — reduzir valproato se combinados",
      "⚠️ Interacção com clobazam: aumenta norclobazam 3–4× — sonolência e sedação aumentadas",
      "Sonolência, diminuição apetite, diarreia — efeitos adversos mais frequentes",
      "Substância controlada em Portugal — prescrição obrigatoriamente por neurologista pediátrico",
      "Epidyolex ≠ produtos de canábis medicinal — formulação padronizada e aprovada"
    ],
    "source": "BNF for Children 2023-24; Devinsky O et al. NEJM 2017 (Dravet); Thiele EA et al. Lancet 2018 (LGS); EMA Epidyolex EPAR 2019"
  },
  {
    "id": "brivaracetam",
    "name": "Brivaracetam",
    "category": "antiepileptico",
    "class": "Análogo do levetiracetam — ligação a SV2A com 10–30× maior afinidade",
    "brands": "Briviact — comp 10/25/50/75/100 mg; solução oral 10 mg/ml; EV 50 mg/5 ml",
    "indication": [
      "Epilepsia focal com ou sem generalização secundária — adjuvante ≥ 4 anos",
      "Alternativa ao levetiracetam se efeitos comportamentais intoleráveis",
      "Status epilepticus refractário — EV (uso off-label pediátrico)"
    ],
    "dose": [
      {
        "ind": "Adjuvante — epilepsia focal (≥ 4 anos)",
        "val": "1 mg/kg/dia PO",
        "max": "4 mg/kg/dia (200 mg/dia)",
        "freq": "q12h; iniciar com 0,5 mg/kg/dia",
        "note": "Pode substituir levetiracetam 1:1 (mg por mg) se switch necessário por comportamento"
      },
      {
        "ind": "EV — SE refractário",
        "val": "1–2 mg/kg EV em 15 min",
        "max": "100 mg/dose",
        "freq": "q12h EV; converter para oral quando possível",
        "note": "EV=oral em biodisponibilidade — conversão directa 1:1"
      }
    ],
    "prep": "EV: diluir em SF, SG5% ou RL. Administrar em 15 min. Oral: solução 10 mg/ml compatível com SNG.",
    "ci": ["Hipersensibilidade a levetiracetam ou brivaracetam (reactividade cruzada possível)"],
    "alert": [
      "Menores efeitos comportamentais que levetiracetam (agitação, irritabilidade) — preferir se LEV mal tolerado",
      "Sonolência e tonturas — efeitos mais frequentes",
      "Ajuste em insuficiência hepática (reduzir 50% em moderada, evitar em grave)",
      "Interacção com fenitoína/carbamazepina (indutores CYP2C19 — reduzem brivaracetam)"
    ],
    "source": "BNF for Children 2023-24; Riesgo R et al. Epileptic Disord 2018; EMA Briviact SmPC 2022"
  },
  {
    "id": "perampanel",
    "name": "Perampanel",
    "category": "antiepileptico",
    "class": "Antagonista não-competitivo AMPA — receptor glutamato",
    "brands": "Fycompa — comp 2/4/6/8/10/12 mg; suspensão oral 0,5 mg/ml",
    "indication": [
      "Epilepsia focal — adjuvante ≥ 4 anos",
      "Crises tónico-clónicas generalizadas — ≥ 7 anos",
      "Síndrome de Dravet e Lennox-Gastaut — off-label com evidência"
    ],
    "dose": [
      {
        "ind": "Epilepsia focal / TCG — adjuvante",
        "val": "Início: 2 mg PO à noite",
        "max": "12 mg/noite (sem indutores); 16–20 mg/noite (com indutores CYP3A4)",
        "freq": "1 dose/dia ao deitar (sedação nocturna)",
        "note": "Titular: aumentar 2 mg/semana. Com indutores (carbamazepina, fenitoína, oxcarbazepina): dobrar a dose"
      }
    ],
    "prep": "Oral: comprimidos ou suspensão 0,5 mg/ml. Tomar ao deitar para minimizar sedação.",
    "ci": [
      "Psicose activa ou história de comportamento agressivo grave (relativa — monitorizar)",
      "Hipersensibilidade"
    ],
    "alert": [
      "⚠️ Comportamento agressivo, irritabilidade, pensamentos hostis — monitorizar humor, especialmente adolescentes",
      "⚠️ Indutores CYP3A4 (carbamazepina, oxcarbazepina, fenitoína, rifampicina) reduzem perampanel 50–67% — aumentar dose",
      "Tonturas e sonolência — muito frequentes; administração nocturna minimiza impacto",
      "Substância controlada (Lista II em Portugal) — risco de abuso baixo mas registado"
    ],
    "source": "BNF for Children 2023-24; French JA et al. Epilepsia 2012; Steinhoff BJ et al. Epilepsia 2013"
  },
  {
    "id": "midazolam_in",
    "name": "Midazolam Intranasal / Bucal (SE agudo)",
    "category": "antiepileptico",
    "class": "Benzodiazepina — potenciador GABA-A",
    "brands": "Buccolam — solução oromucosa 2,5/5/7,5/10 mg; Midazolam 5 mg/ml ampola (off-label IN)",
    "indication": [
      "Status epilepticus agudo — 1ª linha pré-hospitalar ou sem acesso EV",
      "Crise prolongada (> 5 min) em criança com epilepsia conhecida",
      "Substituição de diazepam rectal em contexto domiciliar/escolar"
    ],
    "dose": [
      {
        "ind": "SE agudo — bucal (Buccolam aprovado)",
        "val": "< 3 meses: 0,3 mg/kg; 3m–1a: 2,5 mg; 1–5a: 5 mg; 5–10a: 7,5 mg; ≥ 10a: 10 mg",
        "max": "10 mg",
        "freq": "Dose única; repetir 1× após 10 min se sem resposta",
        "note": "Eficácia equivalente ao diazepam EV (Appleton R et al. Lancet 2008)"
      },
      {
        "ind": "SE agudo — intranasal (off-label)",
        "val": "0,2–0,3 mg/kg IN",
        "max": "10 mg",
        "freq": "Dose única; 0,5 mg/dose por narina usando atomizador MAD",
        "note": "Solução 5 mg/ml — concentração suficiente para volume IN mínimo. Onset 5–10 min"
      }
    ],
    "prep": "Bucal: Buccolam pronto a usar — aplicar entre gengiva e bochecha. IN: usar atomizador nasal MAD com midazolam 5 mg/ml.",
    "ci": [
      "Depressão respiratória grave",
      "Idade < 3 meses sem monitorização"
    ],
    "alert": [
      "⚠️ Depressão respiratória — ter material de suporte ventilatório disponível",
      "⚠️ Flumazenil como antídoto se necessário (0,01 mg/kg EV)",
      "Buccolam: solução aprovada para uso pediátrico pré-hospitalar — preferir ao diazepam rectal",
      "Via IN absorção rápida e reprodutível — alternativa valiosa quando IV indisponível"
    ],
    "source": "BNF for Children 2023-24; Appleton R et al. Lancet 2008; NICE CG137 Epilepsies 2022"
  },
  {
    "id": "clobazam",
    "name": "Clobazam",
    "category": "antiepileptico",
    "class": "Benzodiazepina 1,5 — potenciador GABA-A (menor sedação que 1,4-BZD)",
    "brands": "Frisium — comp 10 mg; solução oral 1 mg/ml",
    "indication": [
      "Epilepsia focal e generalizada — adjuvante",
      "Síndrome de Lennox-Gastaut — componente drop attacks",
      "Síndrome de Dravet — adjuvante (sinergia com valproato)",
      "Crises catameniais — uso intermitente peri-menstrual"
    ],
    "dose": [
      {
        "ind": "Epilepsia — adjuvante",
        "val": "Início: 0,1 mg/kg/dia PO",
        "max": "1 mg/kg/dia (60 mg/dia)",
        "freq": "2 doses/dia; dose maior à noite",
        "note": "Titular semanalmente. Dose de manutenção habitual: 0,3–0,5 mg/kg/dia"
      }
    ],
    "prep": "Oral: comprimidos ou solução 1 mg/ml. Tomar com ou sem alimentos.",
    "ci": [
      "Miastenia gravis",
      "Insuf. respiratória grave",
      "Dependência de álcool/BZD (cruzada)"
    ],
    "alert": [
      "⚠️ Tolerância com uso prolongado — eficácia pode diminuir após semanas/meses",
      "⚠️ Dependência e síndrome de abstinência — não retirar abruptamente",
      "⚠️ Interacção com canabidiol: clobazam aumenta norclobazam 3× — reduzir clobazam se combinados",
      "Sedação inferior às BZD 1,4 (diazepam, lorazepam) — vantagem em uso crónico",
      "Substância psicotrópica — prescrição especial"
    ],
    "source": "BNF for Children 2023-24; Sankar R Epilepsia 2012; Ng YT et al. Neurology 2011 (LGS)"
  }
];

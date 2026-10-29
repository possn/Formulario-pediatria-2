// UCIP Pediatria — Antibióticos
// 35 fármacos
// Fontes: ver drugs_sources.js

var DRUGS_ANTIBIOTICOS = [
  {
    "id": "amoxicilina_clav",
    "name": "Amoxicilina/Ácido Clavulânico",
    "category": "antibiotico",
    "class": "Penicilina + inibidor β-lactamase",
    "brands": "Augmentin; Clavamox; solução oral 400/57 mg/5 ml; EV 1000/200 mg",
    "indication": [
      "Infecções respiratórias (OMA, sinusite, pneumonia — ambulatório)",
      "Infecções pele/partes moles",
      "Infecções urinárias",
      "Mordeduras animais/humanas"
    ],
    "dose": [
      {
        "ind": "EV — infecções por estirpes produtoras de beta-lactamase",
        "val": "RN e 1–2 meses: 30 mg/kg cada 12 h; 3 meses–17 anos: 30 mg/kg cada 8 h",
        "max": "1,2 g/dose",
        "freq": "Cada 12 h (< 3 meses) ou cada 8 h; em < 3 meses preferir perfusão",
        "note": "BNFC 2020-21 (p. 370). Doses expressas em amoxicilina-clavulanato (total)."
      },
      {
        "ind": "Oral — suspensão 125/31",
        "val": "RN e 1–11 meses: 0,25 ml/kg 3×/dia (dobrar se grave); 1–5 anos: 0,25 ml/kg 3×/dia ou 5 ml 3×/dia",
        "max": "—",
        "freq": "3×/dia",
        "note": "BNFC 2020-21 (p. 370). 12–17 anos (comprimidos): 250/125 mg cada 8 h, até 500/125 mg cada 8 h se grave."
      }
    ],
    "prep": "EV: reconstituir 600 mg em 10 ml SWFI; 1,2 g em 20 ml SWFI. Diluir em SF ou SG5% até concentração ≤ 40 mg/ml (amoxicilina). Administrar em 30 min. Periférico: ≤ 40 mg/ml. Estabilidade: preparar fresco — estável apenas 20 min à T ambiente após diluição. Oral: suspensão 125/5 ml ou 250/5 ml — reconstituir com água, refrigerar, usar em 7 dias.",
    "ci": [
      "Alergia a penicilinas",
      "Mononucleose infecciosa (rash)"
    ],
    "alert": [
      "⚠️ Verificar alergia — reacção cruzada com cefalosporinas em ~1–2%",
      "⚠️ Icterícia colestática (especialmente formulações com ácido clavulânico)",
      "Diarreia frequente — pode usar probiótico",
      "Ajuste renal se TFG < 30 ml/min"
    ],
    "source": "BNFC 2020-21, Co-amoxiclav (p. 370)",
    "review": ["Doses EV da ficha anterior (100–200 mg/kg/dia de amoxicilina, até 12 g/dia) removidas: excedem largamente o BNFC 2020-21. Esquemas orais de maior dose (40–90 mg/kg/dia, DGS) por confirmar."]
  
  },
  {
    "id": "ceftriaxona",
    "name": "Ceftriaxona",
    "category": "antibiotico",
    "class": "Cefalosporina 3ª geração",
    "brands": "Rocephin 500 mg; 1 g; 2 g pó",
    "indication": [
      "Meningite bacteriana — 1ª linha",
      "Sépsis grave / bacteriemia",
      "Pneumonia hospitalar",
      "Infecções urinárias complicadas",
      "Infecções intra-abdominais (+ metronidazol)"
    ],
    "dose": [
      {
        "ind": "Infecções graves (pneumonia, intra-abdominal, ITU complicada) — EV",
        "val": "RN < 15 dias: 20–50 mg/kg/dia; RN 15–28 dias: 50–80 mg/kg/dia; 1 mês–11 anos < 50 kg: 50–80 mg/kg/dia; ≥ 50 kg e 12–17 anos: 1–2 g/dia",
        "max": "4 g/dia (criança); 2 g/dose ≥ 50 kg",
        "freq": "1 dose/dia; extremo superior em casos graves",
        "note": "BNFC 2020-21 (p. 343). IM profunda: mesmas doses."
      }
    ],
    "prep": "EV: reconstituir 1 g em 10 ml SWFI (100 mg/ml); diluir em SF, SG5% ou Lactato Ringer. Concentração para infusão: ≤ 40 mg/ml periférico; ≤ 100 mg/ml central. Administrar em 30 min (≥ 60 min se dose > 50 mg/kg ou para reduzir flebite). ⚠️ NUNCA misturar com solução contendo cálcio EV na mesma linha (precipitação letal em neonatos). Estabilidade: 24h a 25°C; 48h a 4°C após reconstituição.",
    "ci": [
      "Alergia a cefalosporinas",
      "RN < 41 sem corrigidas com icterícia ou hiperbilirrubinemia (desloca bilirrubina da albumina)",
      "Não misturar com cálcio em RN (precipitação fatal)"
    ],
    "alert": [
      "⛔ NÃO administrar simultâneamente com soluções contendo cálcio em RN — precipitação pulmonar/renal FATAL",
      "⚠️ Colelitíase/barro biliar (sais de Ca²+ de ceftriaxona) — reversível após suspensão",
      "⚠️ Diarreia associada a Clostridioides difficile",
      "Boa penetração LCR — opção preferida na meningite"
    ],
    "source": "BNFC 2020-21, Ceftriaxone (p. 343)",
    "review": ["Dose de meningite (100 mg/kg/dia em 2 doses) retirada: o BNFC 2020-21 não tem secção própria de meningite para a ceftriaxona (máx. 80 mg/kg/dia, 4 g/dia); confirmar em protocolo local."]
  
  },
  {
    "id": "vancomicina",
    "name": "Vancomicina",
    "category": "antibiotico",
    "class": "Glicopeptídeo",
    "brands": "Vancocin 500 mg; 1 g pó EV",
    "indication": [
      "Infecções por MRSA",
      "Endocardite por Staphylococcus / Enterococcus",
      "Meningite por MRSA / S. pneumoniae resistente",
      "Infecções graves por gram-positivos resistentes a β-lactâmicos",
      "Sépsis neonatal tardia por Staphylococcus coagulase-negativo (MRSE) — muito frequente em prematuros com cateter",
      "MRSA neonatal",
      "Meningite por gram-positivos resistentes",
      "Enterocócica resistente"
    ],
    "dose": [
      {
        "ind": "EV — 1 mês–11 anos",
        "val": "10–15 mg/kg",
        "max": "60 mg/kg/dia (doses superiores não recomendadas)",
        "freq": "Cada 6 h, ajustar por níveis plasmáticos",
        "note": "BNFC 2020-21 (p. 349). Duração conforme tipo e gravidade da infecção. 12–17 anos: 15–20 mg/kg (máx. 2 g/dose) cada 8–12 h."
      },
      {
        "ind": "EV — RN (uso sob aconselhamento especializado)",
        "val": "15 mg/kg; < 29 sem IGc: cada 24 h; 29–35 sem: cada 12 h; ≥ 35 sem: cada 8 h",
        "max": "—",
        "freq": "Ajustar por níveis plasmáticos",
        "note": "BNFC 2020-21 (p. 349)."
      },
      {
        "ind": "Oral — infecção por C. difficile",
        "val": "RN e 1 mês–11 anos: 10 mg/kg; 12–17 anos: 125 mg (até 500 mg se grave)",
        "max": "2 g/dia (1 mês–11 anos)",
        "freq": "Cada 6 h durante 10 dias",
        "note": "BNFC 2020-21 (p. 349). Sem absorção sistémica por via oral."
      }
    ],
    "prep": "EV: diluir para ≤ 5 mg/ml. Infusão 60 min (para dose ≤ 15 mg/kg) ou 120 min (dose de carga). Linha dedicada.",
    "ci": [
      "Hipersensibilidade à vancomicina"
    ],
    "alert": [
      "⚠️ NEFROTOXICIDADE — monitorizar creatinina e débito urinário. Risco ↑ com aminoglicosídeos",
      "⚠️ SÍNDROME DO HOMEM VERMELHO — rush/hipotensão por infusão rápida. NÃO é alergia. Tratar com anti-histamínico e reduzir velocidade",
      "⚠️ Monitorização farmacocinética (AUC24/MIC) substituiu monitorização simples de nível vale",
      "⚠️ Ototoxicidade (rara com uso actual guidelines)",
      "Ajuste rigoroso na insuf. renal",
      "⚠️ NEFROTOXICIDADE — amplificada com aminoglicosídeos. Monitorizar creatinina",
      "⚠️ SÍNDROME HOMEM VERMELHO (rubor, prurido, hipotensão) — infusão demasiado rápida. NÃO é alergia. Reduzir velocidade e pré-medicar com anti-H1",
      "⚠️ Ototoxicidade (rara com guidelines actuais)",
      "⚠️ Monitorização farmacocinética obrigatória em RN — farmacocinética muito variável"
    ],
    "source": "BNFC 2020-21, Vancomycin (p. 349)",
    "review": ["Dose de carga, alvos de AUC/vale e esquema neonatal «cada 18 h» (anteriores) removidos por não constarem do BNFC 2020-21: confirmar em protocolo local / Rybak 2020."]
  
  },
  {
    "id": "meropenem",
    "name": "Meropenem",
    "category": "antibiotico",
    "class": "Carbapenemo",
    "brands": "Meronem 500 mg; 1 g pó",
    "indication": [
      "Infecções graves por gram-negativos multirresistentes",
      "Sépsis nosocomial / bacteriemia",
      "Meningite bacteriana (alternativa à ceftriaxona em resistentes)",
      "Infecções intra-abdominais graves",
      "Febre neutropénica de alto risco"
    ],
    "dose": [
      {
        "ind": "Infecção / septicémia nosocomial — EV",
        "val": "RN < 7 dias: 20 mg/kg cada 12 h; RN 7–28 dias: 20 mg/kg cada 8 h; 1 mês–11 anos < 50 kg: 10–20 mg/kg cada 8 h; ≥ 50 kg e 12–17 anos: 0,5–1 g cada 8 h",
        "max": "1 g/dose",
        "freq": "Cada 8 h (RN < 7 dias: cada 12 h)",
        "note": "BNFC 2020-21 (p. 337)."
      },
      {
        "ind": "Infecção grave (RN)",
        "val": "40 mg/kg; < 7 dias: cada 12 h; 7–28 dias: cada 8 h",
        "max": "—",
        "freq": "—",
        "note": "BNFC 2020-21 (p. 337)."
      },
      {
        "ind": "Meningite / fibrose quística (exacerbações)",
        "val": "1 mês–11 anos < 50 kg: 40 mg/kg; ≥ 50 kg e 12–17 anos: 2 g; RN: 40 mg/kg (< 7 dias cada 12 h; 7–28 dias cada 8 h)",
        "max": "2 g/dose",
        "freq": "Cada 8 h",
        "note": "BNFC 2020-21 (p. 337)."
      }
    ],
    "prep": "EV: reconstituir 500 mg em 10 ml SWFI (50 mg/ml); 1 g em 20 ml. Diluir em SF ou SG5%. Concentração: 1–20 mg/ml (infusão padrão 30 min); ≤ 50 mg/ml para bólus EV (administrar em 5 min). Infusão prolongada (3h): diluir a ≤ 10 mg/ml em SF — melhor PK/PD para MIC > 2 mg/L. Estabilidade CRÍTICA: SF 4h a 25°C; 24h a 4°C. SG5%: usar imediatamente (degradação rápida).",
    "ci": [
      "Hipersensibilidade a carbapenemos",
      "Alergia a β-lactâmicos (reacção cruzada < 1%)"
    ],
    "alert": [
      "⚠️ Convulsões (raro — mais com imipenem; meropenem menos epileptogénico)",
      "⚠️ Abaixa o limiar convulsivante — cuidado em doentes epilépticos",
      "⚠️ Nefrotoxicidade em doses altas",
      "Reservar para organismos resistentes — preservar para evitar resistências",
      "Ajuste renal obrigatório"
    ],
    "source": "BNFC 2020-21, Meropenem (p. 337)"
  },
  {
    "id": "gentamicina",
    "name": "Gentamicina",
    "category": "antibiotico",
    "class": "Aminoglicosídeo",
    "brands": "Gentamicina 40 mg/ml",
    "indication": [
      "Sépsis neonatal — 1ª linha (associada a ampicilina)",
      "Infecções urinárias graves por gram-negativos",
      "Endocardite (sinergia com β-lactâmicos)",
      "Sépsis grave gram-negativo (associada)",
      "Sépsis neonatal — 1ª linha em associação com ampicilina",
      "Infecção urinária por gram-negativos",
      "Meningite neonatal gram-negativo (associada a cefotaxima)"
    ],
    "dose": [
      {
        "ind": "Septicémia, meningite, endocardite, pneumonia nosocomial — criança (EV, dose única diária)",
        "val": "Inicial 7 mg/kg 1×/dia; doses seguintes ajustadas pelo nível sérico (não adequado a endocardite/meningite)",
        "max": "—",
        "freq": "1×/dia",
        "note": "BNFC 2020-21, Gentamicin (p. 333). Shann: 1 sem–10 anos 8 mg/kg no dia 1 e depois 6 mg/kg/dia; >10 anos 7 mg/kg no dia 1 e depois 5 mg/kg/dia; nível residual <1,0 mg/L."
      },
      {
        "ind": "Esquema de dose múltipla — criança (IM/EV lento)",
        "val": "1 mês–11 anos: 2,5 mg/kg 8/8 h; 12–17 anos: 2 mg/kg 8/8 h",
        "max": "—",
        "freq": "8/8 h",
        "note": "BNFC 2020-21 (p. 333). Fibrose quística (Pseudomonas): 3 mg/kg 8/8 h."
      },
      {
        "ind": "Sépsis neonatal (intervalo alargado)",
        "val": "RN ≤7 dias: 5 mg/kg 36/36 h; RN 7–28 dias: 5 mg/kg 24/24 h",
        "max": "—",
        "freq": "36/36 h ou 24/24 h",
        "note": "BNFC 2020-21 (p. 333). Shann (5 mg/kg): <1200 g 48 h (0–7 d), 36 h (8–30 d), 24 h (>30 d); 1200–2500 g 36 h (0–7 d), 24 h (>7 d); termo 24 h."
      }
    ],
    "prep": "EV: diluir em SF ou SG5%. Concentração: 1–10 mg/ml periférico; até 25 mg/ml central. Administrar em 30–60 min (NUNCA bólus — bloqueia neuromuscular). Incompatível na mesma linha com penicilinas e cefalosporinas — separar por pelo menos 30 min e lavar linha. Estabilidade: 24h a 25°C após diluição.",
    "ci": [
      "Miastenia gravis",
      "Insuf. renal grave (ajustar dose/intervalo)",
      "Insuf. renal grave (ajustar intervalo)"
    ],
    "alert": [
      "⚠️ NEFROTOXICIDADE — monitorizar creatinina e débito urinário",
      "⚠️ OTOTOXICIDADE (auditiva e vestibular) — irreversível. Evitar uso prolongado",
      "⚠️ Risco ↑ com vancomicina, furosemida, AINEs",
      "Monitorizar nível sérico vale (< 1 mg/L)",
      "Ajuste rigoroso na insuf. renal e RN prematuro",
      "⚠️ OTOTOXICIDADE — irreversível. Evitar > 5–7 dias. Rastreio audiológico",
      "⚠️ Monitorizar nível vale (< 1 mg/L antes da 2ª dose). Ajustar intervalo",
      "⚠️ Risco ↑ com furosemida e vancomicina (evitar associação se possível)"
    ],
    "source": "BNF for Children 2020-21, Gentamicin (p. 333); Shann F. Drug Doses",
    "review": ["Foram retirados o esquema neonatal por idade gestacional (<29, 29–35, ≥36 semanas) e a dose de 2,5 mg/kg 8/8 h para meningite neonatal por Gram-negativos: não constam do BNFC nem do Shann. Para neonatos usar o esquema BNFC/Shann por peso e dias de vida ou o protocolo local."]
  
  },
  {
    "id": "metronidazol",
    "name": "Metronidazol",
    "category": "antibiotico",
    "class": "Nitroimidazol — antibacteriano e antiparasitário",
    "brands": "Flagyl 500 mg/100 ml (EV); comp. 250 mg; susp. 40 mg/ml",
    "indication": [
      "Infecções por anaeróbios (intra-abdominal, cerebral, ginecológica)",
      "Clostridioides difficile (oral — alternativa à vancomicina oral)",
      "Giardíase, amebíase, tricomoníase",
      "Profilaxia cirúrgica (colo/recto)"
    ],
    "dose": [
      {
        "ind": "Oral — infecções anaeróbias",
        "val": "1 mês: 7,5 mg/kg cada 12 h; 2 meses–11 anos: 7,5 mg/kg cada 8 h; 12–17 anos: 400 mg cada 8 h",
        "max": "400 mg/dose (2 meses–11 anos)",
        "freq": "7 dias (10–14 dias em C. difficile)",
        "note": "BNFC 2020-21 (p. 358)."
      },
      {
        "ind": "EV — 2 meses–17 anos",
        "val": "7,5 mg/kg",
        "max": "500 mg/dose",
        "freq": "Cada 8 h; 1 mês: carga 15 mg/kg, depois 7,5 mg/kg cada 8 h",
        "note": "BNFC 2020-21 (p. 358)."
      },
      {
        "ind": "EV — RN",
        "val": "Carga 15 mg/kg; depois 7,5 mg/kg: < 26 sem IGc cada 24 h; 26–34 sem cada 12 h; ≥ 34 sem cada 8 h",
        "max": "—",
        "freq": "7 dias (10–14 dias em C. difficile)",
        "note": "BNFC 2020-21 (p. 358)."
      }
    ],
    "prep": "EV: pronto a usar em frasco (5 mg/ml = 500 mg/100 ml). Não diluir adicionalmente. Administrar em 20–60 min. Proteger da luz durante infusão. Compatível com SF, SG5%; incompatível com bicarbonato na mesma linha. Estabilidade: 24h após abertura do frasco.",
    "ci": [
      "1º trimestre gravidez (relativa)"
    ],
    "alert": [
      "⚠️ Efeito dissulfiram com álcool — evitar álcool durante e 48h após tratamento",
      "Sabor metálico, náuseas frequentes",
      "Neuropatia periférica com uso prolongado",
      "↑ INR com varfarina"
    ],
    "source": "BNFC 2020-21, Metronidazole (p. 358)",
    "review": ["Dose para giardíase (15 mg/kg/dia) removida por não ter sido verificada neste BNFC."]
  
  },
  {
    "id": "aciclovir",
    "name": "Aciclovir",
    "category": "antibiotico",
    "class": "Antiviral — inibidor DNA polimerase viral (HSV, VZV, CMV)",
    "brands": "Zovirax 250 mg pó EV; comp. 200/400/800 mg; susp. 200 mg/5 ml",
    "indication": [
      "Encefalite por HSV — emergência",
      "Infecção neonatal por HSV",
      "Varicela grave / imunodeprimido",
      "Zoster disseminado",
      "Profilaxia em imunodeprimidos"
    ],
    "dose": [
      {
        "ind": "Herpes simples — EV",
        "val": "RN e 1–2 meses: 20 mg/kg; 3 meses–11 anos: 250 mg/m²; 12–17 anos: 5 mg/kg",
        "max": "—",
        "freq": "Cada 8 h; RN/1–2 meses 14 dias (≥ 21 se SNC); restantes ~5 dias",
        "note": "BNFC 2020-21 (p. 440). Confirmar LCR negativo para HSV antes de parar."
      },
      {
        "ind": "Varicela / zoster — EV",
        "val": "RN e 1–2 meses: 10–20 mg/kg; 3 meses–11 anos: 250 mg/m²; 12–17 anos: 5 mg/kg. Imunocomprometido: 500 mg/m² (3 meses–11 anos) ou 10 mg/kg (12–17 anos)",
        "max": "—",
        "freq": "Cada 8 h; ≥ 7 dias (RN/1–2 meses), ~5 dias nos restantes",
        "note": "BNFC 2020-21 (p. 440). Encefalite: RN 10–20 mg/kg cada 8 h durante 10–14 dias."
      },
      {
        "ind": "Varicela / zoster — oral",
        "val": "1–23 meses: 200 mg; 2–5 anos: 400 mg; 6–11 anos: 800 mg 4×/dia; 12–17 anos: 800 mg 5×/dia",
        "max": "—",
        "freq": "4×/dia × 5 dias (12–17 anos: 5×/dia × 7 dias)",
        "note": "BNFC 2020-21 (p. 440)."
      },
      {
        "ind": "Herpes simples — profilaxia no imunocomprometido, oral",
        "val": "1–23 meses: 100–200 mg; 2–17 anos: 200–400 mg",
        "max": "—",
        "freq": "4×/dia",
        "note": "BNFC 2020-21 (p. 440)."
      }
    ],
    "prep": "EV: reconstituir 250 mg em 10 ml SWFI (25 mg/ml); 500 mg em 20 ml. Diluir em SF (concentração ≤ 7 mg/ml — OBRIGATÓRIO para evitar cristalização renal). Concentração máxima ABSOLUTA: 7 mg/ml periférico e central. Administrar em 60 min mínimo (1–2h preferível). ⚠️ Concentrações > 7 mg/ml causam flebite grave e cristalização intratubular renal. Estabilidade: 12h a 25°C após reconstituição.",
    "ci": [
      "Insuf. renal grave (ajustar dose)"
    ],
    "alert": [
      "⚠️ Nefrotoxicidade — hidratar bem e infusão lenta",
      "⚠️ Neurotoxicidade (confusão, tremor) em insuf. renal",
      "Ajuste obrigatório se TFG < 50 ml/min"
    ],
    "source": "BNFC 2020-21, Aciclovir (p. 440)"
  },
  {
    "id": "flucloxacilina",
    "name": "Flucloxacilina",
    "category": "antibiotico",
    "src": "added",
    "class": "Penicilina resistente às penicilinases — antiestafilocócica",
    "brands": "Floxapen 250 mg; 500 mg; 1 g caps/pó EV",
    "indication": [
      "Infecções estafilocócicas MSSA — 1ª linha",
      "Osteomielite / artrite séptica por Staphylococcus",
      "Celulite / impétigo grave",
      "Endocardite estafilocócica MSSA"
    ],
    "dose": [
      {
        "ind": "EV — infecções por estafilococos produtores de beta-lactamase",
        "val": "Criança: 12,5–25 mg/kg; RN: 25 mg/kg",
        "max": "1 g/dose",
        "freq": "Criança cada 6 h; RN < 7 dias cada 12 h, 7–20 dias cada 8 h, 21–28 dias cada 6 h",
        "note": "BNFC 2020-21 (p. 373). IM: 12,5–25 mg/kg cada 6 h (máx. 500 mg)."
      },
      {
        "ind": "EV — endocardite, osteomielite, abcesso cerebral, meningite estafilocócica",
        "val": "Criança: 50 mg/kg; RN: 50–100 mg/kg (osteomielite, abcesso, meningite)",
        "max": "2 g/dose",
        "freq": "Criança cada 6 h; RN conforme idade (12 h, 8 h, 6 h)",
        "note": "BNFC 2020-21 (p. 373)."
      },
      {
        "ind": "Oral",
        "val": "RN: 25 mg/kg; 1 mês–1 ano: 62,5–125 mg; 2–9 anos: 125–250 mg; 10–17 anos: 250–500 mg",
        "max": "—",
        "freq": "4×/dia (RN < 7 dias 2×/dia; 7–20 dias 3×/dia)",
        "note": "BNFC 2020-21 (p. 373). Fibrose quística: 25 mg/kg 4×/dia (máx. 1 g/dose; máx. 4 g/dia)."
      }
    ],
    "prep": "EV: reconstituir 250 mg em 5 ml SWFI; 500 mg em 10 ml; 1 g em 15–20 ml. Diluir em SF. Concentração ≤ 40 mg/ml. Administrar em 15–30 min. ⚠️ Extremamente instável — preparar imediatamente antes e administrar em < 1h após reconstituição (hidrólise rápida do anel beta-lactâmico). Oral: tomar em jejum (30 min antes refeição — absorção reduz 50% com alimentos).",
    "ci": [
      "Alergia a penicilinas",
      "Icterícia/hepatotoxicidade prévia por flucloxacilina"
    ],
    "alert": [
      "⚠️ Hepatotoxicidade colestática (rara) — monitorizar LFTs em tratamentos prolongados",
      "Ineficaz em MRSA",
      "Absorção oral reduzida com alimentos"
    ],
    "source": "BNFC 2020-21, Flucloxacillin (p. 373)"
  },
  {
    "id": "piperacilina_tazobactam",
    "name": "Piperacilina/Tazobactam",
    "category": "antibiotico",
    "class": "Penicilina + inibidor β-lactamase de amplo espectro",
    "brands": "Tazocin 2,25 g; 4,5 g pó EV",
    "indication": [
      "Sépsis nosocomial grave",
      "Infecções por Pseudomonas",
      "Febre neutropénica alto risco",
      "Infecções intra-abdominais",
      "Pneumonia hospitalar grave"
    ],
    "dose": [
      {
        "ind": "Septicémia, pneumonia nosocomial, infecções complicadas urinárias / pele / tecidos moles (EV, perfusão)",
        "val": "RN: 90 mg/kg 8/8 h; 1 mês–11 anos: 90 mg/kg 6–8/8 h; 12–17 anos: 4,5 g 8/8 h (até 6/6 h se grave)",
        "max": "4,5 g por dose (4,5 g 6/6 h)",
        "freq": "6/6 h a 8/8 h",
        "note": "BNFC 2020-21, Piperacillin with tazobactam (p. 362). Doses expressas como associação piperacilina + tazobactam."
      },
      {
        "ind": "Infecção intra-abdominal complicada",
        "val": "2–11 anos: 112,5 mg/kg 8/8 h; 12–17 anos: 4,5 g 8/8 h (até 6/6 h)",
        "max": "4,5 g por dose",
        "freq": "8/8 h",
        "note": "BNFC 2020-21 (p. 362)."
      },
      {
        "ind": "Infecção em doente neutropénico",
        "val": "90 mg/kg 6/6 h",
        "max": "4,5 g por dose",
        "freq": "6/6 h",
        "note": "BNFC 2020-21 (p. 362). A ficha anterior indicava 100 mg/kg/dia, o que é cerca de um quarto da dose do BNFC."
      }
    ],
    "prep": "EV: reconstituir 2,25 g em 10 ml; 4,5 g em 20 ml SWFI ou SF. Diluir em SF ou SG5%. Concentração piperacilina ≤ 45 mg/ml. Infusão padrão: 30 min. Infusão prolongada (4h): mantém > 40% T>MIC vs Pseudomonas resistente — diluir a ≤ 22 mg/ml, manter a 4°C durante infusão. ⚠️ Incompatível com vancomicina (precipitação), aminoglicosídeos, furosemida, midazolam. Estabilidade: SF — 12h a 25°C; 4h em infusão prolongada a 25°C (24h a 4°C).",
    "ci": [
      "Alergia a penicilinas"
    ],
    "alert": [
      "⚠️ Hipocaliemia (monitorizar K+)",
      "⚠️ Neurotoxicidade em doses altas + insuf. renal",
      "Ajuste renal obrigatório se TFG < 40 ml/min"
    ],
    "source": "BNF for Children 2020-21, Piperacillin with tazobactam (p. 362)"
  },
  {
    "id": "cotrimoxazol",
    "name": "Cotrimoxazol (SMZ/TMP)",
    "category": "antibiotico",
    "class": "Sulfonamida + inibidor dihidrofolato redutase",
    "brands": "Bactrim susp. 200/40 mg/5 ml; comp. 400/80 mg; EV 400/80 mg/5 ml",
    "indication": [
      "Pneumonia por Pneumocystis jirovecii (PCP) — 1ª linha",
      "Profilaxia PCP",
      "Nocardiose",
      "Toxoplasmose (alternativa)",
      "ITU por ESBL",
      "Listeria (alternativa)"
    ],
    "dose": [
      {
        "ind": "Infeções suscetíveis — oral",
        "val": "6 sem–5 meses: 120 mg; 6 meses–5 anos: 240 mg; 6–11 anos: 480 mg; 12–17 anos: 960 mg (ou 24 mg/kg)",
        "max": "—",
        "freq": "2×/dia",
        "note": "BNFC 2020-21 (p. 378). Doses de cotrimoxazol total (sulfametoxazol + trimetoprim 5:1)."
      },
      {
        "ind": "Infeções suscetíveis — EV",
        "val": "6 semanas–17 anos: 18 mg/kg (27 mg/kg se grave)",
        "max": "1,44 g/dose",
        "freq": "Cada 12 h",
        "note": "BNFC 2020-21 (p. 378)."
      },
      {
        "ind": "Pneumocystis jirovecii — tratamento",
        "val": "120 mg/kg/dia (cotrimoxazol), oral ou EV",
        "max": "—",
        "freq": "Em 2–4 doses durante 14–21 dias; preferir via oral",
        "note": "BNFC 2020-21 (p. 378); equivale a ≈ 20 mg/kg/dia de trimetoprim."
      },
      {
        "ind": "Pneumocystis jirovecii — profilaxia (oral)",
        "val": "450 mg/m²",
        "max": "960 mg/dose",
        "freq": "2×/dia, 3 dias por semana (consecutivos ou alternados)",
        "note": "BNFC 2020-21 (p. 378); regimes variam — consultar protocolo local."
      }
    ],
    "prep": "EV: diluir 5 ml de ampolação em ≥ 125 ml SF ou SG5% (concentração ≤ 1,6 mg TMP/ml). Administrar em 60–90 min. ⚠️ Concentrações > 1,6 mg/ml TMP causam precipitação do sulfametoxazol. Incompatível com soluções alcalinas. Estabilidade: 6h a 25°C após diluição.",
    "ci": [
      "< 6 semanas (kernicterus)",
      "Insuf. renal grave",
      "Insuf. hepática grave",
      "Défice G6PD (relativa)"
    ],
    "alert": [
      "⚠️ Stevens-Johnson / NET (raro mas grave)",
      "⚠️ Mielossupressão — monitorizar hemograma",
      "⚠️ Hipercaliemia (bloqueia excreção tubular K+)",
      "⚠️ ↑ creatinina (inibe secreção tubular — não é insuf. renal verdadeira)"
    ],
    "source": "BNFC 2020-21, Co-trimoxazole (p. 378)",
    "review": ["Dose de ITU da ficha anterior (6 mg/kg/dia de TMP) removida: usar o esquema de «infeções suscetíveis»."]
  
  },
  {
    "id": "linezolide",
    "name": "Linezolide",
    "category": "antibiotico",
    "src": "added",
    "class": "Oxazolidinona — inibidor síntese proteica 50S (bacteriostático)",
    "brands": "Zyvoxid 600 mg/300 ml (EV); comp. 600 mg; susp. 100 mg/5 ml",
    "indication": [
      "MRSA — alternativa à vancomicina",
      "Infecções por Enterococcus faecium VRE",
      "Pneumonia nosocomial por gram-positivos resistentes",
      "Infecções osteoarticulares por MRSA (boa biodisponibilidade oral)"
    ],
    "dose": [
      {
        "ind": "EV / oral — pneumonia, infeções complicadas de pele e partes moles (início sob supervisão especializada)",
        "val": "RN < 7 dias: 10 mg/kg cada 12 h (até cada 8 h se resposta fraca); RN 7–28 dias: 10 mg/kg cada 8 h; 1 mês–11 anos: 10 mg/kg cada 8 h; 12–17 anos: 600 mg cada 12 h",
        "max": "600 mg/dose",
        "freq": "Ver esquema por idade",
        "note": "BNFC 2020-21 (p. 389)."
      }
    ],
    "prep": "EV: pronto a usar (2 mg/ml em 300 ml). Não diluir adicionalmente. Administrar em 30–120 min. Compatível com SF e SG5%; incompatível com vancomicina (precipitação), ceftriaxona, furosemida. Proteger da luz. Estabilidade: usar dentro do prazo do frasco.",
    "ci": [
      "Uso concomitante com IMAOs",
      "Hipertensão não controlada (efeito serotoninérgico)"
    ],
    "alert": [
      "⚠️ Mielossupressão (trombocitopenia, anemia) — monitorizar hemograma semanal se > 2 semanas",
      "⚠️ Síndrome serotoninérgica com SSRIs/triptanos/tramadol",
      "⚠️ Neuropatia periférica e óptica em uso prolongado (> 4 semanas)",
      "Reservar para organismos resistentes — risco de resistência"
    ],
    "source": "BNFC 2020-21, Linezolid (p. 389)"
  },
  {
    "id": "daptomicina",
    "name": "Daptomicina",
    "category": "antibiotico",
    "src": "added",
    "class": "Lipopeptídeo cíclico — disrupção membrana bacteriana gram-positivos",
    "brands": "Cubicin 350 mg; 500 mg pó EV",
    "indication": [
      "Bacteriemia por S. aureus incluindo MRSA",
      "Endocardite infecciosa direita por S. aureus",
      "Infecções gram-positivas resistentes (MRSA, VRE) — pele/partes moles",
      "NÃO usar em pneumonia (inactivada por surfactante)"
    ],
    "dose": [
      {
        "ind": "Infeções complicadas de pele e partes moles por Gram-positivos — EV",
        "val": "12–23 meses: 10 mg/kg; 2–6 anos: 9 mg/kg; 7–11 anos: 7 mg/kg; 12–17 anos: 5 mg/kg",
        "max": "—",
        "freq": "1×/dia até 14 dias",
        "note": "BNFC 2020-21 (p. 385). Bacteriemia por S. aureus: 12 mg/kg (12–23 m e 2–6 anos), 9 mg/kg (7–11 anos), 7 mg/kg (12–17 anos)."
      }
    ],
    "prep": "EV: reconstituir 350 mg em 7 ml SF ou 500 mg em 10 ml SF (50 mg/ml); girar suavemente sem agitar. Diluir em SF ≤ 20 mg/ml para infusão 30 min; ou bólus 50 mg/ml em 2 min. ⚠️ APENAS em SF (incompatível com SG5% — degrada). Estabilidade: 12h a 25°C; 48h a 4°C.",
    "ci": [
      "Pneumonia (inactivada pelo surfactante pulmonar)"
    ],
    "alert": [
      "⚠️ Rabdomiólise / miopatia — monitorizar CK semanalmente. Suspender se CK > 5× LSN",
      "⚠️ Potenciada por estatinas — suspender estatinas durante tratamento",
      "⚠️ Eosinofilia pulmonar (rara)",
      "Ajuste renal se TFG < 30 ml/min"
    ],
    "source": "BNFC 2020-21, Daptomycin (p. 385)",
    "review": ["Dose < 1 ano (6 mg/kg) removida: o BNFC 2020-21 não indica daptomicina abaixo dos 12 meses."]
  
  },
  {
    "id": "caspofungina",
    "name": "Caspofungina",
    "category": "antibiotico",
    "src": "added",
    "class": "Equinocandina — inibidor síntese β-1,3-glucano (parede fúngica)",
    "brands": "Cancidas 50 mg; 70 mg pó EV",
    "indication": [
      "Candidemia / candidose invasiva — 1ª linha",
      "Aspergilose invasiva refractária ou intolerância a anfotericina",
      "Candida resistente ao fluconazol",
      "Febre neutropénica refractária (terapia empírica)"
    ],
    "dose": [
      {
        "ind": "Aspergilose invasiva, candidíase invasiva, tratamento empírico em neutropenia febril (perfusão EV)",
        "val": "RN e 1–2 meses: 25 mg/m² 1×/dia; 3–11 meses: 50 mg/m² 1×/dia; 1–17 anos: 70 mg/m² no dia 1 (máx. 70 mg), depois 50 mg/m² 1×/dia (máx. 70 mg)",
        "max": "70 mg/dia",
        "freq": "1×/dia",
        "note": "BNFC 2020-21, Caspofungin (p. 405). Pode aumentar para 70 mg/m²/dia (máx. 70 mg) se tolerado e resposta insuficiente, ou com indutores enzimáticos (carbamazepina, dexametasona, fenitoína, rifampicina)."
      }
    ],
    "prep": "EV: aquecer frasco a T ambiente. Reconstituir com 10,5 ml SWFI (5 mg/ml). Diluir em SF ≤ 0,5 mg/ml (70 mg → SF 250 ml). ⚠️ NÃO diluir em SG5% (turvação). ⚠️ NÃO usar solução de albumina. Administrar em 60 min. Incompatível com heparina na mesma linha. Estabilidade: 24h a 25°C.",
    "ci": [
      "Hipersensibilidade a equinocandinas"
    ],
    "alert": [
      "⚠️ Ajuste na insuf. hepática moderada/grave",
      "Poucos efeitos adversos — boa tolerabilidade",
      "↑ ciclosporina (monitorizar níveis)",
      "Rifampicina e outros indutores CYP podem reduzir eficácia"
    ],
    "source": "BNF for Children 2020-21, Caspofungin (p. 405)"
  },
  {
    "id": "voriconazol",
    "name": "Voriconazol",
    "category": "antibiotico",
    "src": "added",
    "class": "Antifúngico azólico de 2ª geração — inibidor CYP51 ergosterol",
    "brands": "Vfend comp. 50/200 mg; pó susp. oral 40 mg/ml; pó EV 200 mg",
    "indication": [
      "Aspergilose invasiva — 1ª linha",
      "Candida não-albicans resistente ao fluconazol",
      "Fusariose e escedosporiose",
      "Profilaxia em doentes de alto risco (transplante medula, neutropenia prolongada)"
    ],
    "dose": [
      {
        "ind": "< 12 anos EV",
        "val": "Carga 9 mg/kg cada 12h × 2 doses → 8 mg/kg cada 12h",
        "max": "350 mg/dose",
        "freq": "cada 12h",
        "note": "Crianças metabolizam mais rápido que adultos — doses proporcionalmente maiores"
      },
      {
        "ind": "< 12 anos oral",
        "val": "9 mg/kg cada 12h",
        "max": "350 mg cada 12h",
        "freq": "cada 12h em jejum",
        "note": ""
      },
      {
        "ind": "≥ 12 anos EV",
        "val": "Carga 6 mg/kg cada 12h × 2 → 4 mg/kg cada 12h",
        "max": "—",
        "freq": "cada 12h",
        "note": ""
      },
      {
        "ind": "≥ 12 anos oral",
        "val": "200 mg cada 12h (> 40 kg); 100 mg cada 12h (< 40 kg)",
        "max": "300 mg cada 12h",
        "freq": "cada 12h em jejum",
        "note": ""
      }
    ],
    "prep": "EV: reconstituir → diluir em SF ou SG5% (máx. 5 mg/ml). Infusão 1–3h. NÃO usar com soluções de bicarbonato.",
    "ci": [
      "Uso com sirolimus, rifampicina, carbamazepina, barbitúricos (reduzem eficácia)",
      "Uso com pimozida, quinidina (↑ QTc)"
    ],
    "alert": [
      "⚠️ Perturbações visuais (fotopsia, visão turva) em 30% — transitórias, reversíveis",
      "⚠️ Hepatotoxicidade — monitorizar LFTs semanalmente",
      "⚠️ Prolongamento QTc",
      "⚠️ Fotossensibilidade e carcinoma espinocelular em uso prolongado — protecção solar obrigatória",
      "⚠️ Inibidor potente CYP2C19/CYP3A4 — múltiplas interacções (ciclosporina, tacrolimus, varfarina)",
      "Monitorização de nível sérico recomendada (alvo: 1–5,5 mg/L)"
    ],
    "source": "BNFC 2020-21, Voriconazole (p. 410: EV 2–11 anos 9 mg/kg cada 12 h × 2, depois 8 mg/kg; 12–14 anos < 50 kg igual; ≥ 50 kg e 15–17 anos 6 mg/kg × 2, depois 4 mg/kg)",
    "review": ["Esquema «≥ 12 anos» da ficha só é válido para ≥ 50 kg (12–14 anos) ou 15–17 anos; 12–14 anos < 50 kg seguem o esquema pediátrico (9 mg/kg → 8 mg/kg). Duração máxima EV: 6 meses."]

  },
  {
    "id": "micafungina",
    "name": "Micafungina",
    "category": "antibiotico",
    "src": "added",
    "class": "Equinocandina — inibidor síntese β-1,3-glucano (parede fúngica)",
    "brands": "Mycamine 50 mg; 100 mg pó EV",
    "indication": [
      "Candidemia e candidose invasiva — alternativa à caspofungina",
      "Profilaxia candidose em transplante de medula óssea",
      "Candidose esofágica"
    ],
    "dose": [
      {
        "ind": "Candidíase invasiva (perfusão EV)",
        "val": "RN e criança <40 kg: 2 mg/kg 1×/dia (≥14 dias), aumentar se necessário para 4 mg/kg; ≥40 kg: 100 mg 1×/dia (≥14 dias), aumentar se necessário para 200 mg",
        "max": "4 mg/kg/dia (<40 kg); 200 mg/dia (≥40 kg)",
        "freq": "1×/dia",
        "note": "BNFC 2020-21, Micafungin (p. 405). Uso em RN sob aconselhamento especializado."
      },
      {
        "ind": "Candidíase esofágica",
        "val": "16–17 anos: <40 kg 3 mg/kg 1×/dia; ≥40 kg 150 mg 1×/dia",
        "max": "—",
        "freq": "1×/dia",
        "note": "BNFC 2020-21 (p. 405)."
      },
      {
        "ind": "Profilaxia em TMO / neutropenia esperada >10 dias",
        "val": "RN e <40 kg: 1 mg/kg 1×/dia; ≥40 kg: 50 mg 1×/dia",
        "max": "50 mg/dia",
        "freq": "1×/dia, ≥7 dias após recuperação de neutrófilos",
        "note": "BNFC 2020-21 (p. 405)."
      }
    ],
    "prep": "EV: reconstituir cada frasco (50 mg ou 100 mg) em 5 ml SF (10 ou 20 mg/ml), girar suavemente sem agitar (evitar espuma). Diluir em SF 100 ml (concentração ≤ 1,5 mg/ml). Administrar em 60 min. ⚠️ Proteger da luz — envolver em papel de alumínio. ⚠️ APENAS em SF — incompatível com SG5%. Estabilidade: 24h a 25°C após reconstituição.",
    "ci": [
      "Hipersensibilidade a equinocandinas"
    ],
    "alert": [
      "⚠️ Hepatotoxicidade (monitorizar LFTs)",
      "⚠️ Risco teórico de tumores hepáticos (dados em animais) — evitar uso prolongado desnecessário",
      "Boa tolerabilidade geral",
      "Sem ajuste renal necessário"
    ],
    "source": "BNF for Children 2020-21, Micafungin (p. 405)"
  },
  {
    "id": "ganciclovir",
    "name": "Ganciclovir / Valganciclovir",
    "category": "antibiotico",
    "src": "added",
    "class": "Antiviral — inibidor DNA polimerase CMV (análogo guanosina)",
    "brands": "Cymevene 500 mg pó EV (ganciclovir); Valcyte comp. 450 mg (valganciclovir oral)",
    "indication": [
      "Doença por CMV em imunodeprimidos (transplantados, VIH)",
      "Retinite por CMV",
      "CMV congénito com envolvimento SNC — indicação major",
      "Profilaxia CMV pós-transplante"
    ],
    "dose": [
      {
        "ind": "CMV congénito (valganciclovir oral)",
        "val": "16 mg/kg/dose oral",
        "max": "—",
        "freq": "2×/dia × 6 meses",
        "note": "Evidência: melhora outcomes auditivos no CMV congénito (Kimberlin 2015)"
      },
      {
        "ind": "CMV — tratamento em imunocomprometidos (EV)",
        "val": "Criança: 5 mg/kg cada 12 h durante 14–21 dias; manutenção 6 mg/kg/dia (5 dias/semana) ou 5 mg/kg/dia",
        "max": "—",
        "freq": "Manutenção só se risco de recidiva",
        "note": "BNFC 2020-21 (p. 443)."
      },
      {
        "ind": "CMV congénito com atingimento do SNC (EV, RN)",
        "val": "6 mg/kg",
        "max": "—",
        "freq": "Cada 12 h durante 6 semanas",
        "note": "BNFC 2020-21 (p. 443)."
      }
    ],
    "prep": "EV: diluir em SF ou SG5% (concentração ≤ 10 mg/ml). Infusão 60 min. Citotóxico — precauções de manuseamento.",
    "ci": [
      "Neutrófilos < 500/mcL (relativa)",
      "Plaquetas < 25000/mcL (relativa)",
      "Gravidez"
    ],
    "alert": [
      "⛔ MIELOSSUPRESSÃO — neutropenia e trombocitopenia frequentes. Hemograma 2×/semana",
      "⚠️ Nefrotóxico — hidratação e monitorização creatinina",
      "⚠️ Teratogénico e potencialmente carcinogénico",
      "⚠️ Ajuste rigoroso na insuf. renal",
      "Monitorizar carga viral CMV (PCR) para guiar duração"
    ],
    "source": "BNFC 2020-21, Ganciclovir (p. 443); valganciclovir oral: por confirmar",
    "review": ["Doses de valganciclovir oral (CMV congénito 16 mg/kg 2×/dia; profilaxia pós-transplante) não verificadas neste BNFC: confirmar no RCM / Kimberlin 2015."]
  
  },
  {
    "id": "cefepime",
    "name": "Cefepime",
    "category": "antibiotico",
    "class": "Cefalosporina 4ª geração",
    "brands": "Maxipime — frascos 500 mg, 1 g, 2 g pó EV",
    "indication": [
      "Sépsis nosocomial / neutropénia febril em oncologia",
      "Pneumonia nosocomial / VAP",
      "Infecções por Pseudomonas aeruginosa (quando piperacilina não disponível)",
      "Meningite bacteriana nosocomial",
      "Infecções urinárias complicadas por Gram negativos resistentes"
    ],
    "dose": [
      {
        "ind": "Infeções por bactérias Gram-positivas e Gram-negativas sensíveis — EV/IM",
        "val": "1 mês: 30 mg/kg cada 8–12 h; 2 meses–17 anos < 41 kg: 50 mg/kg cada 12 h, aumentando se grave",
        "max": "2 g/dose; 50 mg/kg cada 8 h em infeção grave",
        "freq": "Cada 12 h (cada 8 h se grave)",
        "note": "BNFC 2020-21 (p. 346). ≥ 41 kg: 1 g cada 12 h (0,5–1 g em ITU ligeira-moderada); preferir via EV em infeção grave."
      }
    ],
    "prep": "EV: diluir em SF ou SG5%. Concentração 10–40 mg/ml. Administrar em 30 min (padrão) ou 3h (infusão prolongada, vantagem PK/PD para MIC > 4 mg/L).",
    "ci": [
      "Alergia a cefalosporinas",
      "Evitar em doentes com epilepsia não controlada (limiar convulsivante reduzido, especialmente com insuficiência renal)"
    ],
    "alert": [
      "⚠️ Neurotoxicidade (encefalopatia, convulsões, mioclonias) — risco aumentado com acumulação em IR; ajustar dose rigorosamente",
      "⚠️ Não cobre MRSA nem Enterococcus — considerar vancomicina se suspeita",
      "Cobertura de Enterobacteriaceae ESBL variável — preferir meropenem se ESBL documentado",
      "Monitorizar função renal diariamente em doentes críticos"
    ],
    "source": "BNFC 2020-21, Cefepime (p. 346)",
    "review": ["Neutropenia febril e meningite nosocomial (50 mg/kg cada 8 h): doses da ficha anterior ficam por confirmar em protocolo local; o BNFC admite 50 mg/kg cada 8 h (máx. 2 g) em infeção grave."]
  
  },
  {
    "id": "aztreonam",
    "name": "Aztreonam",
    "category": "antibiotico",
    "class": "Monobactâmico",
    "brands": "Azactam — frascos 500 mg, 1 g, 2 g pó EV/IM",
    "indication": [
      "Infecções graves por Gram negativos aeróbios (incluindo Pseudomonas) em doentes com alergia grave a beta-lactâmicos",
      "Pneumonia nosocomial / VAP em alérgicos a penicilinas/cefalosporinas",
      "Sépsis por Gram negativos em contexto de alergia confirmada",
      "Fibromatose cística — exacerbações por Pseudomonas (inalado: Cayston)"
    ],
    "dose": [
      {
        "ind": "Infeções por Gram-negativos incl. Pseudomonas — EV, RN ≤ 7 dias",
        "val": "30 mg/kg cada 12 h",
        "max": "—",
        "freq": "Cada 12 h",
        "note": "BNFC 2020-21 (p. 357)."
      },
      {
        "ind": "Infeções por Gram-negativos — EV, RN 7–28 dias",
        "val": "30 mg/kg cada 6–8 h",
        "max": "—",
        "freq": "Cada 6–8 h",
        "note": "BNFC 2020-21 (p. 357)."
      },
      {
        "ind": "Infeções por Gram-negativos — EV, 1 mês–11 anos",
        "val": "30 mg/kg cada 6–8 h",
        "max": "—",
        "freq": "Cada 6–8 h",
        "note": "BNFC 2020-21 (p. 357)."
      },
      {
        "ind": "Infeções por Gram-negativos — EV, 12–17 anos",
        "val": "1 g cada 8 h ou 2 g cada 12 h",
        "max": "—",
        "freq": "Cada 8–12 h",
        "note": "BNFC 2020-21 (p. 357)."
      },
      {
        "ind": "Infeções graves por Gram-negativos e infeção pulmonar na fibrose quística — EV",
        "val": "2–11 anos: 50 mg/kg cada 6–8 h; 12–17 anos: 2 g cada 6–8 h",
        "max": "2 g/dose (4×/dia)",
        "freq": "Cada 6–8 h",
        "note": "BNFC 2020-21 (p. 357)."
      }
    ],
    "prep": "EV: reconstituir 500 mg em 3 ml SWFI; 1 g em 6 ml; 2 g em 10 ml. Diluir em SF ou SG5%. Concentração ≤ 20 mg/ml para infusão (20–60 min); infusão prolongada (3–4h): concentração ≤ 10 mg/ml. ⚠️ Reactividade cruzada com ceftazidima (mesma cadeia lateral) — usar com cautela em alergia documentada. Estabilidade: 48h a 4°C.",
    "ci": [
      "Alergia a aztreonam — pode haver reactividade cruzada com ceftazidima (mesma cadeia lateral R1)",
      "Não usar em infecções por Gram positivos ou anaeróbios (sem actividade)"
    ],
    "alert": [
      "⚠️ Sem reactividade cruzada clinicamente significativa com penicilinas — seguro em alérgicos a penicilinas/cefalosporinas (excepto ceftazidima)",
      "⚠️ Espectro exclusivamente Gram negativo aeróbio — associar cobertura Gram+ se necessário",
      "Monitorizar função hepática em tratamentos prolongados",
      "Ajuste em insuficiência renal grave (TFG < 10 ml/min): reduzir dose 50%"
    ],
    "source": "BNFC 2020-21, Aztreonam (p. 357); Blumenthal KG et al. JACI 2018 (reatividade cruzada)",
    "review": ["A ficha anterior só tinha 30 mg/kg cada 6–8 h; o BNFC 2020-21 acrescenta 50 mg/kg cada 6–8 h (máx. 2 g) nas infeções graves e a dose a cada 12 h no RN ≤ 7 dias."]
  
  },
  {
    "id": "ampicilina_iv",
    "name": "Ampicilina EV",
    "category": "antibiotico",
    "class": "Aminopenicilina",
    "brands": "Ampicilina Labesfal; Pentrexyl — frascos 500 mg, 1 g, 2 g",
    "indication": [
      "Meningite bacteriana neonatal e pediátrica (+ cefotaxima/gentamicina)",
      "Sépsis neonatal precoce — 1ª linha",
      "Listeria monocytogenes — única beta-lactamina activa",
      "Enterococcus faecalis sensível à ampicilina",
      "Endocardite por Enterococcus (+ gentamicina ou ceftriaxona)",
      "Sépsis neonatal precoce — 1ª linha (associada à gentamicina)",
      "Meningite neonatal por GBS, Listeria monocytogenes",
      "Infecção por Listeria (única penicilina eficaz)",
      "Infecção urinária neonatal"
    ],
    "dose": [
      {
        "ind": "Infecções suscetíveis — EV",
        "val": "RN < 7 dias: 30 mg/kg cada 12 h; RN 7–28 dias: 30 mg/kg cada 8 h; criança: 20–30 mg/kg cada 8 h (máx. 500 mg/dose)",
        "max": "Dose aumentada em infeção grave: RN 60 mg/kg; criança 40–60 mg/kg cada 8 h (máx. 1 g)",
        "freq": "Ver esquema por idade",
        "note": "BNFC 2020-21 (p. 368)."
      },
      {
        "ind": "Meningite por Listeria (com outro antibiótico) — EV",
        "val": "RN < 7 dias: 50–100 mg/kg cada 12 h; RN 7–28 dias: 50–100 mg/kg cada 8 h; criança: 50 mg/kg cada 4–6 h",
        "max": "2 g/dose cada 4 h (criança)",
        "freq": "Ver esquema por idade",
        "note": "BNFC 2020-21 (p. 368)."
      },
      {
        "ind": "Infeção por estreptococo do grupo B / endocardite por enterococo (com outro antibiótico) — EV",
        "val": "RN < 7 dias: 50 mg/kg cada 12 h; RN 7–28 dias: 50 mg/kg cada 8 h; criança: 50 mg/kg cada 4–6 h",
        "max": "2 g/dose cada 4 h (criança)",
        "freq": "Ver esquema por idade",
        "note": "BNFC 2020-21 (p. 368)."
      }
    ],
    "prep": "EV: reconstituir 500 mg em 5 ml SWFI; 1 g em 10 ml. Diluir em SF (NÃO em SG5% — hidrólise). Concentração ≤ 30 mg/ml. Administrar em 15–30 min. ⚠️ INSTABILIDADE CRÍTICA — estável apenas 1h a 25°C após reconstituição (hidrólise rápida). Preparar imediatamente antes de administrar. Incompatível com aminoglicosídeos na mesma linha.",
    "ci": [
      "Alergia a penicilinas",
      "Mononucleose infecciosa (rash maculopapular em 80–100%)"
    ],
    "alert": [
      "⚠️ Instabilidade química elevada após reconstituição — administrar imediatamente",
      "⚠️ Resistência elevada em Enterobacteriaceae (produção de beta-lactamases) — não usar empiricamente para sépsis nosocomial",
      "Cobertura de Listeria e Enterococcus é vantagem clínica única vs. cefalosporinas",
      "Ajuste em insuficiência renal moderada-grave",
      "⚠️ Monitorizar função renal — ajuste rigoroso na insuf. renal neonatal",
      "Rash maculopapular frequente — não é necessariamente alergia verdadeira",
      "Listeria: ÚNICA indicação em que ampicilina é irresubstituível (cefalosporinas ineficazes)"
    ],
    "source": "BNFC 2020-21, Ampicillin (p. 368)",
    "review": ["Esquemas neonatais por idade gestacional (< 30/34 sem) removidos: o BNFC 2020-21 usa apenas a idade pós-natal. Dose de meningite bacteriana não listérica: confirmar em protocolo local."]
  
  },
  {
    "id": "amicacina",
    "name": "Amicacina",
    "category": "antibiotico",
    "class": "Aminoglicosídeo",
    "brands": "Amicasil; Amikin — ampolas 100 mg/2 ml; 250 mg/ml; 500 mg/2 ml",
    "indication": [
      "Sépsis por Gram negativos resistentes (Pseudomonas, Acinetobacter, ESBL) — em combinação",
      "Sépsis neonatal — alternativa à gentamicina quando resistência documentada",
      "Infecções por micobactérias (tuberculose resistente, MAI)",
      "Endocardite por Gram negativos em combinação com beta-lactâmicos"
    ],
    "dose": [
      {
        "ind": "Infecções graves por Gram-negativos resistentes à gentamicina — dose única diária",
        "val": "Criança: 15 mg/kg 1×/dia; ajustar à concentração sérica (não usar em endocardite/meningite)",
        "max": "—",
        "freq": "1×/dia",
        "note": "BNFC 2020-21, Amikacin (p. 332)."
      },
      {
        "ind": "Esquema de dose múltipla",
        "val": "1 mês–11 anos: 7,5 mg/kg 12/12 h; 12–17 anos: 7,5 mg/kg 12/12 h, até 8/8 h se grave",
        "max": "500 mg por dose (8/8 h), 15 g por curso",
        "freq": "12/12 h ou 8/8 h",
        "note": "BNFC 2020-21 (p. 332). Em perfusão ou injecção EV lenta (3–5 min)."
      },
      {
        "ind": "Sépsis neonatal",
        "val": "Intervalo alargado: 15 mg/kg 24/24 h; ou dose de carga 10 mg/kg, depois 7,5 mg/kg 12/12 h",
        "max": "—",
        "freq": "24/24 h ou 12/12 h",
        "note": "BNFC 2020-21 (p. 332)."
      },
      {
        "ind": "Fibrose quística — infecção pulmonar por Pseudomonas",
        "val": "10 mg/kg 8/8 h",
        "max": "500 mg por dose",
        "freq": "8/8 h",
        "note": "BNFC 2020-21 (p. 332)."
      }
    ],
    "prep": "EV: diluir em SF ou SG5%. Concentração ≤ 10 mg/ml periférico; ≤ 25 mg/ml central. Administrar em 30–60 min. ⚠️ NUNCA em bólus — bloqueio neuromuscular. ⚠️ Incompatível na mesma linha com beta-lactâmicos — separar com flush SF. Estabilidade: 24h a 25°C.",
    "ci": [
      "Miastenia gravis",
      "Evitar se disfunção renal severa sem possibilidade de monitorização TDM"
    ],
    "alert": [
      "⚠️ Nefrotoxicidade e ototoxicidade (cóclea > vestibular) — monitorizar creatinina e nível sérico",
      "⚠️ Monitorização TDM obrigatória: Cmax (1h pós-dose) alvo 56–64 mg/L; pré-dose < 1 mg/L",
      "⚠️ Bloqueio neuromuscular potenciado por relaxantes musculares e hipomagnesiemia",
      "Hidratar bem — nefrotoxicidade aumenta com depleção volumétrica",
      "Ototoxicidade pode ser irreversível — avaliar audiograma em tratamentos > 5 dias"
    ],
    "source": "BNF for Children 2020-21, Amikacin (p. 332)",
    "review": ["Removidos 15–22,5 mg/kg (máx. 1500 mg) e o esquema neonatal por IG (<29 sem: 18 mg/kg 48/48 h) que citavam Neofax/Moise-Broder: não verificados neste conjunto de documentos."]
  
  },
  {
    "id": "ciprofloxacina",
    "name": "Ciprofloxacina",
    "category": "antibiotico",
    "class": "Fluoroquinolona 2ª geração",
    "brands": "Ciprobay; Ciprofloxacina Generis — comp 250/500/750 mg; EV 2 mg/ml (100 ml, 200 ml)",
    "indication": [
      "Infecções por Pseudomonas aeruginosa — oral com elevada biodisponibilidade (70–80%)",
      "Exacerbações infecciosas em fibrose quística (Pseudomonas)",
      "Infecções urinárias complicadas por Gram negativos resistentes",
      "Febre entérica (Salmonella typhi) — alternativa a ceftriaxona",
      "Gastrenterite invasiva por Salmonella, Campylobacter (resistência crescente)",
      "Profilaxia pós-exposição a N. meningitidis (dose única)"
    ],
    "dose": [
      {
        "ind": "EV — infecção grave",
        "val": "10 mg/kg/dose EV",
        "max": "400 mg/dose",
        "freq": "q8–12h",
        "note": "Pseudomonas grave: q8h"
      },
      {
        "ind": "Oral",
        "val": "10–20 mg/kg/dose PO",
        "max": "750 mg/dose",
        "freq": "q12h",
        "note": "Biodisponibilidade oral ~70% — step-down precoce EV→oral vantajoso"
      },
      {
        "ind": "Fibrose quística (exacerbação Pseudomonas)",
        "val": "20 mg/kg/dose PO",
        "max": "750 mg/dose",
        "freq": "q12h",
        "note": "Doses mais elevadas justificadas por PK alterada na FC"
      }
    ],
    "prep": "EV: pronto a usar (2 mg/ml em 100/200 ml). Não diluir adicionalmente. Administrar em 60 min (reduz flebite e reacções); 30 min aceitável em urgência. ⚠️ Incompatível com heparina, furosemida, aminofilina — linha separada. Oral: tomar 1h antes ou 2h após antiácidos, ferro, cálcio (quelação). Estabilidade: usar dentro do prazo.",
    "ci": [
      "Idade < 1 ano (risco teórico artropatia — evitar salvo indicação crítica sem alternativa)",
      "Uso rotineiro em < 18 anos sem indicação específica (guideline AAP/EMA)",
      "Epilepsia não controlada (baixa o limiar convulsivante)"
    ],
    "alert": [
      "⚠️ Artropatia em modelos animais — uso pediátrico restrito a indicações sem alternativa eficaz (FDA/EMA)",
      "⚠️ Prolongamento QT — monitorizar ECG se associado a outros QT-prolongadores",
      "⚠️ Resistência crescente em Pseudomonas — confirmar sensibilidade em antibiograma",
      "⚠️ Interacção com antiácidos/sucralfato (absorção oral reduzida — separar 2h)",
      "Tendinopatia/ruptura tendinosa (raro em criança mas documentado)",
      "Ajuste renal se TFG < 30 ml/min"
    ],
    "source": "BNFC 2020-21, Ciprofloxacin (p. 377: EV 10 mg/kg cada 8 h, máx. 400 mg; oral 20 mg/kg cada 12 h, máx. 750 mg; RN EV 10 mg/kg cada 12 h)"
  },
  {
    "id": "clindamicina",
    "name": "Clindamicina",
    "category": "antibiotico",
    "class": "Lincosamida",
    "brands": "Dalacin C — cáps 75/150/300 mg; EV 150 mg/ml (2 ml, 4 ml, 6 ml)",
    "indication": [
      "Infecções por MSSA e MRSA comunidade (CA-MRSA) — pele, partes moles, osteoarticulares",
      "Infecções anaeróbias (abcessos, peritonite, aspiration pneumonia)",
      "Pneumonia por Streptococcus pneumoniae grave (suprime produção de toxinas)",
      "Sépsis por toxina estreptocócica/estafilocócica — adjuvante anti-toxina",
      "Profilaxia cirúrgica em alérgicos a beta-lactâmicos"
    ],
    "dose": [
      {
        "ind": "EV / IM profunda",
        "val": "Criança: 3,75–6,25 mg/kg; até 10 mg/kg em infeção grave",
        "max": "1,2 g/dose (doses > 600 mg só em perfusão EV)",
        "freq": "Cada 6 h (ou dose diária total repartida em 3 tomas)",
        "note": "BNFC 2020-21 (p. 351)."
      },
      {
        "ind": "Oral",
        "val": "RN < 14 dias: 3–6 mg/kg cada 8 h; RN 14–28 dias: 3–6 mg/kg cada 6 h; criança: 3–6 mg/kg",
        "max": "450 mg/dose",
        "freq": "Cada 6 h; celulite/erisipela 7 dias e rever",
        "note": "BNFC 2020-21 (p. 351)."
      }
    ],
    "prep": "EV: diluir em SF ou SG5%. Concentração máx. 18 mg/ml. Administrar em 20–45 min (nunca em bólus — risco hipotensão e colapso). Concentração > 6 mg/ml requer acesso central.",
    "ci": [
      "Colite pseudomembranosa prévia por C. difficile",
      "Não usar em meningite (fraca penetração LCR)"
    ],
    "alert": [
      "⚠️ Colite por C. difficile — risco aumentado; suspender se diarreia significativa e testar toxina",
      "⚠️ Nunca administrar em bólus IV — hipotensão grave documentada",
      "Teste D-zone obrigatório para CA-MRSA antes de usar como monoterapia (resistência induzível a macrólidos pode co-existir)",
      "Excelente penetração óssea — fármaco de eleição em osteoartrite séptica pediátrica",
      "Efeito anti-toxina útil em TSS e fasceíte necrotizante (associar a beta-lactâmico)"
    ],
    "source": "BNFC 2020-21, Clindamycin (p. 351)",
    "review": ["Doses anteriores (EV 10–13 mg/kg cada 6–8 h; oral 7–10 mg/kg) excediam o BNFC 2020-21 e foram removidas."]
  
  },
  {
    "id": "rifampicina",
    "name": "Rifampicina",
    "category": "antibiotico",
    "class": "Rifamicina",
    "brands": "Rifadin — cáps 150/300/600 mg; EV 600 mg pó; susp 20 mg/ml (manipulada)",
    "indication": [
      "Tuberculose — parte obrigatória do esquema HRZE",
      "Profilaxia de contactos de N. meningitidis e H. influenzae tipo b",
      "Sépsis por MRSA ou S. epidermidis em corpo estranho (biofilme) — em combinação",
      "Doença legionella grave — em combinação com macrólido",
      "Brucelose (em combinação com doxiciclina ou cotrimoxazol)"
    ],
    "dose": [
      {
        "ind": "Tuberculose — esquema padrão de 6 meses (com outros fármacos)",
        "val": "15 mg/kg/dia, oral",
        "max": "450 mg/dia (< 50 kg); 600 mg/dia (≥ 50 kg)",
        "freq": "1×/dia durante 6 meses; RN com TB congénita: 15 mg/kg/dia",
        "note": "BNFC 2020-21 (p. 396). Esquema supervisionado intermitente: 15 mg/kg 3×/semana (máx. 900 mg)."
      },
      {
        "ind": "Infeções estafilocócicas graves, brucelose, legionelose (com outros antibióticos) — oral/EV",
        "val": "RN e 1–11 meses: 5–10 mg/kg; 1–17 anos: 10 mg/kg",
        "max": "600 mg/dose",
        "freq": "Cada 12 h",
        "note": "BNFC 2020-21 (p. 396)."
      },
      {
        "ind": "Profilaxia — meningococo (oral)",
        "val": "RN e 1–11 meses: 5 mg/kg; 1–11 anos: 10 mg/kg; 12–17 anos: 600 mg",
        "max": "600 mg/dose",
        "freq": "Cada 12 h durante 2 dias",
        "note": "BNFC 2020-21 (p. 396)."
      },
      {
        "ind": "Profilaxia — Haemophilus influenzae tipo b (oral)",
        "val": "1–2 meses: 10 mg/kg; 3 meses–11 anos: 20 mg/kg; 12–17 anos: 600 mg",
        "max": "600 mg/dose",
        "freq": "1×/dia durante 4 dias",
        "note": "BNFC 2020-21 (p. 396)."
      },
      {
        "ind": "Prurido colestático (fora de licença)",
        "val": "5–10 mg/kg",
        "max": "600 mg/dose",
        "freq": "1×/dia",
        "note": "BNFC 2020-21 (p. 396)."
      }
    ],
    "prep": "EV: reconstituir 600 mg em 10 ml água estéril; diluir em SF 250 ml. Administrar em 3h. Oral: tomar em jejum (1h antes ou 2h após refeição).",
    "ci": [
      "Icterícia obstrutiva",
      "Hipersensibilidade a rifamicinas",
      "Uso concomitante com antiretrovirais (interacção major — consultar ID)"
    ],
    "alert": [
      "⚠️ Indutor potente CYP3A4 e P-glicoproteína — interacções farmacológicas numerosas e graves (antiretrovirais, imunossupressores, anticoagulantes, azóis, corticoides)",
      "⚠️ Coloração alaranjada de urina, lágrimas, suor — avisar doente e família",
      "⚠️ Hepatotoxicidade — monitorizar TGO/TGP mensalmente durante tuberculose",
      "Induz metabolismo próprio (auto-indução) — farmacocinética variável nas primeiras semanas",
      "NUNCA usar em monoterapia (excepto profilaxia) — resistência emerge rapidamente"
    ],
    "source": "BNFC 2020-21, Rifampicin (p. 396)",
    "review": ["Dose de 10–20 mg/kg/dia da ficha anterior (WHO/DGS) substituída pela do BNFC (15 mg/kg/dia); confirmar com a Norma de Tuberculose da DGS em vigor."]
  
  },
  {
    "id": "anfotericina_b_lipo",
    "name": "Anfotericina B Lipossomal",
    "category": "antibiotico",
    "class": "Antifúngico polieno — formulação lipossomal",
    "brands": "AmBisome — frascos 50 mg pó liofilizado",
    "indication": [
      "Candidíase invasiva / candidemia refractária ou com toxicidade a equinocandinas",
      "Aspergilose invasiva — alternativa a voriconazol em crianças < 2 anos ou intolerância",
      "Criptococose meníngea — 1ª linha (+ flucitosina)",
      "Mucormicose — 1ª linha",
      "Leishmaniose visceral — indicação estabelecida",
      "Infecções fúngicas em imunocomprometidos sem identificação etiológica"
    ],
    "dose": [
      {
        "ind": "AmBisome — micoses sistémicas / neutropenia febril refratária",
        "val": "Dose-teste 100 mcg/kg (máx. 1 mg) em 10 min; depois 3 mg/kg/dia (RN: 1 mg/kg/dia, aumentar até 3 mg/kg/dia)",
        "max": "5 mg/kg/dia",
        "freq": "1 dose/dia",
        "note": "BNFC 2020-21 (p. 406). AmBisome não licenciada < 1 mês."
      },
      {
        "ind": "Abelcet — candidíase invasiva grave / aspergilose / criptococose (intolerância ou resistência)",
        "val": "Dose-teste 100 mcg/kg (máx. 1 mg); depois 5 mg/kg",
        "max": "—",
        "freq": "1 dose/dia",
        "note": "BNFC 2020-21 (p. 406)."
      },
      {
        "ind": "Leishmaniose visceral (AmBisome)",
        "val": "1–3 mg/kg/dia durante 10–21 dias (dose cumulativa 21–30 mg/kg), ou 3 mg/kg × 5 dias consecutivos + 1 dose ao dia 6",
        "max": "—",
        "freq": "1 dose/dia",
        "note": "BNFC 2020-21 (p. 406)."
      }
    ],
    "prep": "EV: reconstituir 50 mg com 12 ml SWFI (4 mg/ml). Diluir em SG5% (NÃO SF — precipita) para concentração 0,2–2 mg/ml. Administrar em 2h (1h se tolerado). Filtro 5 μm obrigatório.",
    "ci": [
      "Hipersensibilidade comprovada à anfotericina B ou excipientes",
      "NÃO reconstituir nem diluir em SF (precipitação)"
    ],
    "alert": [
      "⚠️ Nefrotoxicidade — monitorizar creatinina, electrólitos (K⁺, Mg²⁺) diariamente. Repor potássio e magnésio profilaticamente",
      "⚠️ Reacção infusional (febre, calafrios, hipotensão) — pré-medicar com paracetamol e/ou hidrocortisona",
      "⚠️ Anfotericina B lipossomal tem nefrotoxicidade MUITO inferior à formulação desoxicolato — preferir sempre em criança",
      "Hipocaliemia grave pode causar arritmias — monitorizar ECG se K⁺ < 3 mEq/L",
      "Pseudohiponatrémia relatada com formulações lipídicas (interferência no doseamento)"
    ],
    "source": "BNFC 2020-21, Amphotericin (p. 406)",
    "review": ["Dose de mucormicose (5–10 mg/kg/dia) da ficha anterior removida: o BNFC 2020-21 indica máximo de 5 mg/kg/dia; doses superiores só sob decisão especializada (fonte por confirmar)."]
  
  },
  {
    "id": "fluconazol",
    "name": "Fluconazol",
    "category": "antibiotico",
    "class": "Antifúngico azol triazol",
    "brands": "Diflucan; Fluconazol Generis — cáps 50/150/200 mg; EV 2 mg/ml (50 ml, 100 ml); susp 10 mg/ml",
    "indication": [
      "Candidíase mucocutânea (oral, esofágica, vaginal)",
      "Candidíase invasiva / candidemia — step-down oral após equinocandina em doença estável",
      "Profilaxia antifúngica em imunocomprometidos e RNMBP < 1000 g",
      "Criptococose — consolidação e manutenção após indução com anfotericina",
      "Tinea capitis/corporis — alternativa ao griseofulvina"
    ],
    "dose": [
      {
        "ind": "Candidíase invasiva / criptococose (incl. meningite) — EV ou oral",
        "val": "Criança: 6–12 mg/kg/dia; RN < 14 dias: 6–12 mg/kg cada 72 h; RN 14–28 dias: 6–12 mg/kg cada 48 h",
        "max": "800 mg/dose",
        "freq": "1 dose/dia; manter conforme resposta (≥ 8 semanas na meningite criptocócica)",
        "note": "BNFC 2020-21 (p. 407)."
      },
      {
        "ind": "Candidíase mucosa (exceto genital)",
        "val": "1.º dia 3–6 mg/kg; depois 3 mg/kg/dia (criança 1 mês–11 anos); RN < 14 dias: 3 mg/kg cada 72 h; RN 14–28 dias: cada 48 h",
        "max": "100 mg/dose",
        "freq": "7–14 dias (orofaríngea) ou 14–30 dias (outras mucosas)",
        "note": "BNFC 2020-21 (p. 407). 12–17 anos: 50 mg/dia (até 100 mg)."
      },
      {
        "ind": "Profilaxia de infeções fúngicas em imunocomprometidos",
        "val": "Criança: 3–12 mg/kg/dia (12 mg/kg/dia se risco elevado, ex.: pós-TMO); RN < 14 dias: 3–12 mg/kg cada 72 h; RN 14–28 dias: cada 48 h",
        "max": "400 mg/dose",
        "freq": "Iniciar antes da neutropenia e manter 7 dias após recuperação de neutrófilos",
        "note": "BNFC 2020-21 (p. 407)."
      }
    ],
    "prep": "EV: pronto a usar (2 mg/ml). Não diluir adicionalmente. Administrar em 60 min (máximo 10 ml/min). Compatível com SF e SG5%. Estabilidade: usar dentro do prazo do frasco. Oral: biodisponibilidade > 90% — considerar step-down precoce. Suspensão oral 10 mg/ml estável 14 dias a 25°C.",
    "ci": [
      "Hipersensibilidade a azóis",
      "Uso concomitante com terfenadina, astemizol, cisaprida, pimozida (prolongamento QT grave)",
      "Candida krusei e maioria C. glabrata — resistência intrínseca/reduzida"
    ],
    "alert": [
      "⚠️ Inibidor CYP2C9 e CYP3A4 — interacções graves com varfarina, fenitoína, ciclosporina, tacrolímus, sirolímus, midazolam, estatinas",
      "⚠️ Monitorizar QTc se associado a outros QT-prolongadores",
      "Hepatotoxicidade — monitorizar enzimas hepáticas em tratamentos > 1 semana",
      "Ajuste em insuficiência renal (TFG < 50 ml/min): reduzir dose 50%"
    ],
    "source": "BNFC 2020-21, Fluconazole (p. 407)"
  },
  {
    "id": "oseltamivir",
    "name": "Oseltamivir",
    "category": "antibiotico",
    "class": "Inibidor da neuraminidase — antiviral",
    "brands": "Tamiflu — cáps 30/45/75 mg; susp 6 mg/ml",
    "indication": [
      "Influenza A e B — tratamento (iniciar até 48h após início sintomas; benefício maior se iniciado até 24h)",
      "Influenza em doentes de alto risco — < 2 anos, imunodeprimidos, doença cardiopulmonar, obesos",
      "Influenza grave hospitalizada — iniciar independentemente do tempo de evolução",
      "Profilaxia pós-exposição (contacto com caso confirmado, grupo de risco)"
    ],
    "dose": [
      {
        "ind": "Tratamento ≥ 1 ano",
        "val": "Peso-dependente PO: ≤ 15 kg: 30 mg; 15,1–23 kg: 45 mg; 23,1–40 kg: 60 mg; > 40 kg: 75 mg",
        "max": "75 mg/dose",
        "freq": "q12h × 5 dias (influenza sazonal); prolongar a 10 dias em graves / imunodeprimidos",
        "note": "Dose alternativa simplificada: 3–3,5 mg/kg/dose q12h"
      },
      {
        "ind": "RN e lactente < 1 ano",
        "val": "3 mg/kg/dose PO",
        "max": "—",
        "freq": "q12h × 5 dias",
        "note": "Prematuros (< 38 sem corrigidas): 1 mg/kg/dose q12h"
      },
      {
        "ind": "Profilaxia pós-exposição ≥ 1 ano",
        "val": "Mesmas doses de tratamento",
        "max": "75 mg/dose",
        "freq": "1 dose/dia × 10 dias",
        "note": ""
      }
    ],
    "prep": "Oral: suspensão 6 mg/ml — agitar bem antes de usar. Refrigerar após abertura (uso até 17 dias). Se cápsulas para lactentes: abrir cápsula e misturar em 5 ml de líquido açucarado.",
    "ci": [
      "Hipersensibilidade ao oseltamivir",
      "Insuficiência renal grave sem ajuste (TFG < 10 ml/min — dados limitados)"
    ],
    "alert": [
      "⚠️ Eficácia máxima se iniciado ≤ 24–48h — não aguardar confirmação laboratorial em casos graves",
      "⚠️ Resistência ao oseltamivir em H1N1 (H275Y) documentada — alternativa: zanamivir inalado ou peramivir EV",
      "Náuseas e vómitos frequentes — tomar com alimentos",
      "Benefício clínico modesto em imunocompetentes com doença ligeira (redução mediana: 17h de sintomas)",
      "Ajuste em insuficiência renal: TFG 10–30 ml/min — 30 mg/dose q12h (tratamento)"
    ],
    "source": "BNFC 2020-21, Oseltamivir (p. 463: tratamento 5 dias — RN e 1–11 meses 3 mg/kg 2×/dia; 1–12 anos por peso 30/45/60/75 mg 2×/dia; profilaxia 1×/dia durante 10 dias)"
  },
  {
    "id": "trimetoprim",
    "name": "Trimetoprim (isolado)",
    "category": "antibiotico",
    "class": "Inibidor dihidrofolato redutase",
    "brands": "Monotrim — comp 100/200 mg; susp 50 mg/5 ml",
    "indication": [
      "Infecções urinárias não complicadas (profilaxia e tratamento)",
      "Profilaxia ITU recorrente em crianças",
      "Otite média aguda (2ª linha)",
      "Pneumocystis jirovecii (PJP) — profilaxia primária e secundária (alternativa a cotrimoxazol se intolerância a sulfa)"
    ],
    "dose": [
      {
        "ind": "Tratamento ITU",
        "val": "4 mg/kg/dose PO",
        "max": "200 mg/dose",
        "freq": "q12h × 7 dias",
        "note": ""
      },
      {
        "ind": "Profilaxia ITU",
        "val": "2 mg/kg/dose PO",
        "max": "100 mg/dose",
        "freq": "1 dose/dia (noite)",
        "note": "Duração mínima 6 meses; pode prolongar até 2 anos se refluxo vesicoureteral significativo"
      },
      {
        "ind": "Profilaxia PJP",
        "val": "5 mg/kg/dia PO",
        "max": "300 mg/dia",
        "freq": "1 dose/dia ou 3 dias/semana",
        "note": "Quando cotrimoxazol não tolerado por intolerância à sulfa; eficácia ligeiramente inferior"
      }
    ],
    "prep": "Oral: suspensão 50 mg/5 ml (10 mg/ml) — agitar bem; estável 14 dias após abertura. Comprimidos 100/200 mg — podem ser triturados e dissolvidos em água. Tomar com ou sem alimentos. Assegurar hidratação adequada (pode cristalizar nos túbulos renais em doses altas).",
    "ci": [
      "Deficiência de folato documentada (anemia megaloblástica)",
      "Insuficiência renal grave (TFG < 15 ml/min) sem ajuste",
      "Recém-nascidos < 6 semanas (acumulação e risco de kernicterus teórico)"
    ],
    "alert": [
      "⚠️ Resistência crescente de E. coli (30–40% em alguns países) — verificar antibiograma antes de usar para tratamento",
      "Pode aumentar creatinina sérica sem verdadeira redução de TFG (bloqueia secreção tubular de creatinina)",
      "Pode causar hipercaliemia em doses altas (especialmente com IECA/ARA ou insuficiência renal)",
      "Monitorizar hemograma em tratamentos prolongados (megaloblastose, neutropenia)"
    ],
    "source": "NICE NG224 UTI in Children 2022; Garin EH et al. N Engl J Med 2006",
    "review": ["A entrada do BNFC 2020-21 que consegui ler refere apenas toxoplasmose (RN: 50 mg/kg 2×/dia durante 12 meses; 12–17 anos: 1 g 3×/dia na gravidez). As doses de ITU e PJP da ficha não foram verificadas contra o BNFC; ver RCM e NICE NG224."]

  },
  {
    "id": "cefotaxima_iv",
    "name": "Cefotaxima EV",
    "category": "antibiotico",
    "class": "Cefalosporina 3ª geração",
    "brands": "Claforan — frascos 500 mg, 1 g, 2 g",
    "indication": [
      "Meningite bacteriana — 1ª linha (alternativa a ceftriaxona; preferida em < 1 mês e em RN com hiperbilirrubinemia)",
      "Sépsis neonatal tardia",
      "Infecções graves por Gram negativos",
      "Sépsis em criança imunocomprometida",
      "Meningite neonatal (gram-negativos, GBS) — 1ª linha com ampicilina",
      "Sépsis neonatal tardia (> 72h de vida) — alternativa/adjuvante",
      "Infecção por E. coli, Klebsiella e outros gram-negativos",
      "NÃO usar como substituto da ampicilina para Listeria (resistente)"
    ],
    "dose": [
      {
        "ind": "Infecções sensíveis, epiglotite, profilaxia cirúrgica",
        "val": "RN ≤7 dias: 25 mg/kg 12/12 h; 7–20 dias: 25 mg/kg 8/8 h; 21–28 dias: 25 mg/kg 6–8/8 h; criança: 50 mg/kg 8–12/12 h",
        "max": "—",
        "freq": "Ver esquema",
        "note": "BNFC 2020-21, Cefotaxime (p. 342)."
      },
      {
        "ind": "Infecções graves / meningite",
        "val": "RN ≤7 dias: 50 mg/kg 12/12 h; 7–20 dias: 50 mg/kg 8/8 h; 21–28 dias: 50 mg/kg 6–8/8 h; criança: 50 mg/kg 6/6 h",
        "max": "12 g/dia",
        "freq": "Ver esquema",
        "note": "BNFC 2020-21 (p. 342). Fibrose quística (H. influenzae): 50 mg/kg 6–8/8 h, máx. 12 g/dia."
      },
      {
        "ind": "Suspeita de meningite/doença meningocócica antes da transferência (alergia à penicilina)",
        "val": "1 mês–11 anos: 50 mg/kg; 12–17 anos: 1 g",
        "max": "—",
        "freq": "Dose única",
        "note": "BNFC 2020-21 (p. 342)."
      }
    ],
    "prep": "EV: reconstituir 500 mg em 10 ml SWFI; 1 g em 14 ml; 2 g em 20 ml. Diluir em SF ou SG5%. Concentração ≤ 40 mg/ml. Administrar em 30 min (infusão) ou 3–5 min (bólus lento ≤ 20 mg/ml). ⚠️ Em neonatos: NÃO administrar em linha com solução de cálcio EV. Estabilidade: 6h a 25°C; 24h a 4°C.",
    "ci": [
      "Alergia a cefalosporinas",
      "Não usar com cálcio EV em neonatos (mesma linha — risco precipitação)",
      "Hipersensibilidade a cefalosporinas",
      "⛔ NÃO usar com soluções de cálcio em RN — precipitação fatal (FDA Safety Alert 2007)"
    ],
    "alert": [
      "⚠️ Preferir a ceftriaxona em neonatos (hiperbilirrubinemia — ceftriaxona desloca bilirrubina, cefotaxima não)",
      "⚠️ Selecção de Enterobacter/Citrobacter com AmpC se tratamento prolongado",
      "Ajuste em insuficiência renal moderada-grave",
      "⛔ NÃO administrar simultaneamente com cálcio em RN (mesmo via diferente se < 28 dias) — precipitação pulmonar e renal FATAL",
      "⚠️ Ineficaz contra Listeria — manter ampicilina quando Listeria suspeita/confirmada",
      "Preferida à ceftriaxona em RN pela ausência de problemas com cálcio"
    ],
    "source": "BNF for Children 2020-21, Cefotaxime (p. 342)"
  },
  {
    "id": "colistina",
    "name": "Colistina / Polimixina E",
    "category": "antibiotico",
    "class": "Polimixina — disruptor membrana celular bacteriana",
    "brands": "Colistin TEVA; Colobreathe — frascos 1 MUI (Colistimetato de Sódio CMS); inalado 1,66 MUI/caps",
    "indication": [
      "Infecções por Gram negativos multirresistentes (XDR) sem alternativa — último recurso",
      "Acinetobacter baumannii XDR",
      "Pseudomonas aeruginosa pan-resistente",
      "Klebsiella pneumoniae produtora de carbapenemase (KPC) — em combinação",
      "Fibrose quística — Pseudomonas inalada (Colobreathe)"
    ],
    "dose": [
      {
        "ind": "Infeções graves por Gram-negativos aeróbios com opções limitadas — EV",
        "val": "< 41 kg: 75 000–150 000 unidades/kg/dia; ≥ 41 kg: 9 milhões de unidades/dia",
        "max": "9 milhões de unidades/dia",
        "freq": "< 41 kg: 3 doses/dia; ≥ 41 kg: 2–3 doses/dia",
        "note": "BNFC 2020-21 (p. 375): dados muito limitados; consultar o RCM (usar peso magro)."
      },
      {
        "ind": "Infeção pulmonar crónica por Pseudomonas na FQ — nebulizada",
        "val": "1–23 meses: 0,5–1 milhão U 2×/dia (máx. 2 milhões/dia); 2–17 anos: 1–2 milhões U 2–3×/dia",
        "max": "6 milhões de unidades/dia (2–17 anos)",
        "freq": "2–3×/dia",
        "note": "BNFC 2020-21 (p. 375). Pó inalado ≥ 6 anos: 1,66 milhões U 2×/dia."
      }
    ],
    "prep": "EV: reconstituir CMS 1 MUI em 10 ml SWFI; diluir em SF 100 ml. Administrar em 30–60 min. Dose de carga: perfusão 1h.",
    "ci": [
      "Miastenia gravis",
      "Hipersensibilidade à colistina"
    ],
    "alert": [
      "⚠️ NEFROTOXICIDADE — risco muito elevado; monitorizar creatinina e diurese DIARIAMENTE; hidratação adequada",
      "⚠️ NEUROTOXICIDADE — parestesias, ataxia, visão turva; dose-dependente",
      "⚠️ Bloqueia neuromuscular — potenciado por aminoglicosídeos, relaxantes musculares",
      "⚠️ ÚLTIMO RECURSO — resistência emerge rapidamente; consulta obrigatória com Infecciologia/Microbiologia",
      "Monitorizar função renal q12–24h; suspender ou ajustar se creatinina duplicar"
    ],
    "source": "BNFC 2020-21, Colistimethate sodium (p. 375)",
    "review": ["Dose de carga (75 000 U/kg) e manutenção 50 000–75 000 U/kg/dia (Nation 2015) removidas por não constarem do BNFC 2020-21: confirmar em protocolo local."]
  
  },
  {
    "id": "fosfomicina_iv",
    "name": "Fosfomicina EV",
    "category": "antibiotico",
    "class": "Antibiótico bactericida — inibidor MurA (síntese parede celular)",
    "brands": "Fosfocina EV — frascos 1 g, 2 g, 4 g",
    "indication": [
      "Infecções por MRSA em combinação (sinergia com vancomicina/daptomicina)",
      "Infecções por Enterococcus vancomicina-resistente (VRE) — em combinação",
      "Infecções por BGN multirresistentes (incluindo KPC) — combinação",
      "Osteomielite crónica",
      "Meningite por MRSA (boa penetração LCR)"
    ],
    "dose": [
      {
        "ind": "Osteomielite, infeção respiratória nosocomial ou ITU complicada quando 1.ª linha inadequada — EV, RN ≤ 40 sem IG corrigida",
        "val": "100 mg/kg/dia em 2 doses",
        "max": "—",
        "freq": "2 doses/dia",
        "note": "BNFC 2020-21 (p. 386)."
      },
      {
        "ind": "Idem — EV, RN 40–44 sem IG corrigida",
        "val": "200 mg/kg/dia em 3 doses",
        "max": "—",
        "freq": "3 doses/dia",
        "note": "BNFC 2020-21 (p. 386)."
      },
      {
        "ind": "Idem — EV, 1–11 meses (< 10 kg)",
        "val": "200–300 mg/kg/dia em 3 doses; dose alta em infeção grave",
        "max": "—",
        "freq": "3 doses/dia",
        "note": "BNFC 2020-21 (p. 386)."
      },
      {
        "ind": "Idem — EV, 1–11 anos (10–39 kg)",
        "val": "200–400 mg/kg/dia em 3–4 doses; dose alta em infeção grave",
        "max": "—",
        "freq": "3–4 doses/dia",
        "note": "BNFC 2020-21 (p. 386)."
      },
      {
        "ind": "Idem — EV, 12–17 anos (≥ 40 kg)",
        "val": "12–24 g/dia em 2–3 doses; dose alta em infeção grave",
        "max": "8 g/dose",
        "freq": "2–3 doses/dia",
        "note": "BNFC 2020-21 (p. 386)."
      }
    ],
    "prep": "EV: dissolver 1 g em 5 ml SWFI; reconstituir 2–4 g proporcionalmente. Diluir em SF ou SG5% (100–500 ml). Concentração ≤ 20 mg/ml. Administrar em 30–60 min. ⚠️ Carga sódica elevada: 1 g fosfomicina sódica = 0,32 g Na⁺ (≈14 mEq) — monitorizar natremia. Estabilidade: 12h a 25°C.",
    "ci": [
      "Insuficiência renal grave sem diálise (acumulação e carga sódica)",
      "Hipersensibilidade"
    ],
    "alert": [
      "⚠️ Carga sódica elevada — risco hipernatremia e sobrecarga em IC/SIAD; monitorizar Na⁺ e balanço",
      "⚠️ Resistência emerge rapidamente em monoterapia — usar SEMPRE em combinação",
      "Hipocaliemia (mecanismo incerto) — monitorizar K⁺",
      "Excelente penetração no SNC, osso e tecidos — vantagem clínica importante"
    ],
    "source": "BNFC 2020-21, Fosfomycin (p. 386); Pontikis K et al. Int J Antimicrob Agents 2014; ESCMID",
    "review": ["A ficha anterior indicava 100–200 mg/kg/dia (máx. 16–24 g/dia); o BNFC 2020-21 indica 200–400 mg/kg/dia de 1 a 11 anos, divididos em 3–4 doses. Uso reservado a situações em que a 1.ª linha é inadequada."]
  
  },
  {
    "id": "posaconazol",
    "name": "Posaconazol",
    "category": "antibiotico",
    "class": "Antifúngico triazol de 2ª geração — inibidor CYP51 (ergosterol)",
    "brands": "Noxafil — susp oral 40 mg/ml; comp LP 100 mg; EV 18 mg/ml (16,7 ml)",
    "indication": [
      "Profilaxia de infecções fúngicas invasivas (IFI) em imunocomprometidos de alto risco",
      "Aspergilose invasiva refractária ou intolerante ao voriconazol",
      "Mucormicose — terapêutica de manutenção oral após anfotericina",
      "Candidiase oral/esofágica refractária ao fluconazol"
    ],
    "dose": [
      {
        "ind": "Profilaxia IFI — ≥ 2 anos",
        "val": "Comprimidos LP: 300 mg/dia (100–< 40kg) ou baseado em BSA; Suspensão: 200 mg q8h",
        "max": "300 mg/dia (comp LP)",
        "freq": "Comp LP: 1× /dia (após dia 1 de 2 doses); Suspensão: q8h com refeição",
        "note": "Comprimidos LP preferidos (exposição mais consistente). Suspensão: absorção errática — tomar SEMPRE com refeição gordurosa"
      }
    ],
    "prep": "EV: diluir em SF ou SG5%. Linha dedicada com filtro 0,22 μm. Oral: comp LP engolir inteiros; susp agitar bem.",
    "ci": [
      "Uso com sirolímus, ergotamina, pimozida (interacções letais — CYP3A4)",
      "Hipersensibilidade a azóis"
    ],
    "alert": [
      "⚠️ Inibidor potente CYP3A4 — interacções graves: triplica níveis de tacrolímus/ciclosporina/sirolímus; ajuste de 50–75% da dose",
      "⚠️ Prolongamento QT — monitorizar ECG",
      "⚠️ TDM recomendado: nível sérico alvo > 0,7 mg/L (profilaxia) e > 1 mg/L (terapêutica)",
      "Absorção oral muito variável com suspensão (pH gástrico, alimentos, motilidade) — preferir comprimidos LP ou EV em UCI"
    ],
    "source": "Walsh TJ et al. J Clin Oncol 2007; ECMM/ISHAM Mucormycosis Guidelines 2019",
    "review": ["Sem monografia no BNFC 2020-21; citação «BNF for Children 2023-24» removida por não ser verificável. Shann (por m²): profilaxia 200–230 mg/m² (máx. 300 mg) 12H oral com refeição gorda; IV 230 mg/m² 12H no dia 1, depois diário (leitura OCR duvidosa). Doses da ficha por confirmar no RCM."]

  },
  {
    "id": "doxiciclina",
    "name": "Doxiciclina",
    "category": "antibiotico",
    "class": "Tetraciclina de 2ª geração — inibidor síntese proteica ribossomal (30S)",
    "brands": "Vibramycin; Doxiciclina Generis — comp 100 mg; EV 100 mg",
    "indication": [
      "Febre Q (Coxiella) — 1ª linha ≥ 8 anos",
      "Riquetsioses (rickettsia, RMSF) — 1ª linha em TODAS as idades (benefício > risco de manchas dentárias)",
      "Doença de Lyme — alternativa em alergia a amoxicilina ≥ 8 anos",
      "Brucelose — em combinação",
      "Pneumonia atípica (Mycoplasma, Chlamydia) — ≥ 8 anos",
      "Profilaxia malária"
    ],
    "dose": [
      {
        "ind": "Infeções suscetíveis (clamídia, rickettsia, micoplasma) — oral, 8–11 anos < 45 kg (sob aconselhamento especializado)",
        "val": "Dia 1: 4,4 mg/kg/dia em 1–2 doses; depois 2,2 mg/kg/dia em 1–2 doses",
        "max": "—",
        "freq": "1–2 doses/dia",
        "note": "BNFC 2020-21 (p. 381)."
      },
      {
        "ind": "Infeções suscetíveis — oral, 8–11 anos ≥ 45 kg e 12–17 anos",
        "val": "Dia 1: 200 mg/dia; depois 100 mg/dia",
        "max": "—",
        "freq": "1–2 doses/dia",
        "note": "BNFC 2020-21 (p. 381)."
      },
      {
        "ind": "Infeções graves (incl. ITU refratária) — oral, 8–11 anos < 45 kg",
        "val": "Dia 1: 4,4 mg/kg/dia; depois 2,2–4,4 mg/kg/dia em 1–2 doses",
        "max": "—",
        "freq": "1–2 doses/dia",
        "note": "BNFC 2020-21 (p. 381). ≥ 45 kg e 12–17 anos: 200 mg/dia."
      },
      {
        "ind": "Pneumonia adquirida na comunidade — oral, 12–17 anos",
        "val": "200 mg no dia 1; depois 100 mg 1×/dia durante 5 dias no total",
        "max": "—",
        "freq": "1×/dia",
        "note": "BNFC 2020-21 (p. 381)."
      },
      {
        "ind": "Doxiciclina EV (não consta do BNFC)",
        "val": "2,2 mg/kg/dose EV",
        "max": "100 mg/dose",
        "freq": "Cada 12 h",
        "note": "AAP Red Book 2021; em rickettsioses graves a doxiciclina é de 1.ª linha em qualquer idade (Bou Antoun D et al. Pediatrics 2019)."
      }
    ],
    "prep": "PO: engolir com copo cheio de água; não deitar após toma (esofagite). EV: diluir em SF ou SG5%; concentração ≤ 1 mg/ml; administrar em 1–4h.",
    "ci": [
      "< 8 anos — relativa (aceite em riquetsiose grave e curso ≤ 21 dias segundo AAP)",
      "Gravidez (afecta ossos fetais)",
      "Insuf. hepática grave"
    ],
    "alert": [
      "⚠️ Fotossensibilidade — protecção solar obrigatória",
      "⚠️ Quelação com cálcio/alumínio/ferro — separar 2h de antiácidos e suplementos",
      "Manchas dentárias e inibição de crescimento ósseo com cursos prolongados — limitado a cursos curtos em < 8 anos",
      "Esofagite — tomar com abundante água e não deitar 30 min",
      "AAP 2021: doxiciclina é o tratamento de escolha para riquetsiose em QUALQUER idade"
    ],
    "source": "BNFC 2020-21, Doxycycline (p. 381); AAP Red Book 2021",
    "review": ["A ficha anterior usava 2,2 mg/kg/dose a cada 12 h (4,4 mg/kg/dia); o BNFC 2020-21 usa 4,4 mg/kg no dia 1 e 2,2 mg/kg/dia de manutenção nas infeções suscetíveis. A dose EV não consta do BNFC."]
  
  },
{
    "id": "penicilina_g",
    "name": "Penicilina G (Benzilpenicilina) EV",
    "category": "antibiotico",
    "class": "Penicilina natural — inibidor síntese parede celular (PBP1/2/3)",
    "brands": "Penicilina G Sódica — frascos 1 MUI (600 mg); 5 MUI; 10 MUI",
    "indication": [
      "Meningite bacteriana por N. meningitidis confirmada — 1ª linha",
      "Meningite por S. pneumoniae sensível à penicilina (MIC ≤ 0,06 mg/L)",
      "Sépsis meningocócica",
      "Endocardite estreptocócica — Streptococcus viridans, S. bovis",
      "Sífilis congénita e adquirida — 1ª linha absoluta",
      "Difteria, tétano, actinomicose, leptospirose",
      "Erisipela / fasceíte estreptocócica — S. pyogenes"
    ],
    "dose": [
      {
        "ind": "Infecções moderadas sensíveis (EV/IM)",
        "val": "RN ≤7 dias: 25 mg/kg 12/12 h (até 8/8 h); RN 7–28 dias: 25 mg/kg 8/8 h (até 50 mg/kg 8/8 h se grave); criança: 25 mg/kg 6/6 h, até 50 mg/kg 4–6/6 h se grave",
        "max": "2,4 g/dose, 4/4 h",
        "freq": "Ver esquema",
        "note": "BNFC 2020-21, Benzylpenicillin sodium (p. 364). Via EV recomendada em neonatos e lactentes."
      },
      {
        "ind": "Meningite / doença meningocócica (EV)",
        "val": "RN ≤7 dias: 50 mg/kg 12/12 h; RN 7–28 dias: 50 mg/kg 8/8 h; criança: 50 mg/kg 4–6/6 h",
        "max": "2,4 g/dose, 4/4 h",
        "freq": "Ver esquema",
        "note": "BNFC 2020-21 (p. 364)."
      },
      {
        "ind": "Endocardite (EV)",
        "val": "Criança: 25 mg/kg 4/4 h, até 50 mg/kg 4/4 h",
        "max": "2,4 g/dose",
        "freq": "4/4 h",
        "note": "BNFC 2020-21 (p. 364)."
      },
      {
        "ind": "Suspeita de doença meningocócica antes da transferência (EV/IM, dose única)",
        "val": "1–11 meses: 300 mg; 1–9 anos: 600 mg; 10–17 anos: 1,2 g",
        "max": "—",
        "freq": "Dose única",
        "note": "BNFC 2020-21 (p. 364). Não atrasar a transferência."
      }
    ],
    "prep": "EV: diluir em SF ou SG5%. Concentração ≤ 50.000 UI/ml periférico (100.000 UI/ml central). Administrar em 15–30 min. Estável apenas 1h à T ambiente após reconstituição — preparar fresco.",
    "ci": [
      "Alergia grave à penicilina (anafilaxia — reactividade cruzada com cefalosporinas < 1%)",
      "Elevada concentração IV de Na⁺ na formulação sódica — cautela em ICC e IR"
    ],
    "alert": [
      "⚠️ Carga sódica: Penicilina G sódica 1 MUI = 1,7 mEq Na⁺ — monitorizar em ICC e IR",
      "⚠️ Resistência de S. pneumoniae crescente — confirmar MIC; se MIC > 0,06 mg/L usar ceftriaxona",
      "⚠️ Instabilidade após reconstituição — preparar fresco e usar imediatamente",
      "Eliminação renal — ajuste obrigatório se TFG < 30 ml/min"
    ],
    "source": "BNF for Children 2020-21, Benzylpenicillin sodium (p. 364)",
    "review": ["A ficha anterior expressava as doses em UI/kg/dia (meningite 200–300 mil UI/kg/dia; sífilis congénita 50 000 UI/kg/dose). O BNFC 2020-21 usa mg/kg; não foi feita conversão. Dose para sífilis congénita: consultar Nelson 2020 ou o Manual de Neonatologia."]
  
  },
  {
    "id": "cefuroxima",
    "name": "Cefuroxima EV",
    "category": "antibiotico",
    "class": "Cefalosporina 2ª geração",
    "brands": "Zinacef — frascos 250 mg, 750 mg, 1,5 g",
    "indication": [
      "Pneumonia adquirida na comunidade moderada — alternativa amoxicilina/ampicilina",
      "Infecções respiratórias (bronquite, sinusite, otite) — step-down para oral",
      "Infecções urinárias por E. coli e Klebsiella sensíveis",
      "Profilaxia cirúrgica — cirurgia abdominal e ginecológica",
      "Infecções osteoarticulares por Gram+ e Gram- sensíveis"
    ],
    "dose": [
      {
        "ind": "Infeções suscetíveis — EV, RN ≤ 7 dias",
        "val": "25 mg/kg cada 12 h; até 50 mg/kg cada 12 h em infeção grave",
        "max": "—",
        "freq": "Cada 12 h",
        "note": "BNFC 2020-21 (p. 341)."
      },
      {
        "ind": "Infeções suscetíveis — EV, RN 7–20 dias",
        "val": "25 mg/kg cada 8 h; até 50 mg/kg cada 8 h em infeção grave",
        "max": "—",
        "freq": "Cada 8 h",
        "note": "BNFC 2020-21 (p. 341)."
      },
      {
        "ind": "Infeções suscetíveis — EV, RN 21–28 dias",
        "val": "25 mg/kg cada 6 h; até 50 mg/kg cada 6 h em infeção grave",
        "max": "—",
        "freq": "Cada 6 h",
        "note": "BNFC 2020-21 (p. 341)."
      },
      {
        "ind": "Infeções suscetíveis — EV/IM, criança",
        "val": "20 mg/kg cada 8 h (máx. 750 mg/dose); infeção grave e fibrose quística: 50–60 mg/kg cada 6–8 h (máx. 1,5 g/dose)",
        "max": "1,5 g/dose",
        "freq": "Cada 6–8 h",
        "note": "BNFC 2020-21 (p. 341). Celulite/erisipela: mesma dose."
      },
      {
        "ind": "Profilaxia cirúrgica — EV, criança",
        "val": "50 mg/kg (máx. 1,5 g) até 30 min antes; se procedimento de alto risco, 30 mg/kg (máx. 750 mg) cada 8 h até 3 doses",
        "max": "1,5 g",
        "freq": "Dose única + até 3 doses",
        "note": "BNFC 2020-21 (p. 341)."
      }
    ],
    "prep": "EV: reconstituir 750 mg em 8 ml SWFI; 1,5 g em 15 ml. Diluir em SF ou SG5%. Concentração ≤ 30 mg/ml. Administrar em 15–30 min. IM: reconstituir em água para injectáveis (doloroso — lidocaína 1% como solvente reduz dor). Estabilidade: 24h a 4°C.",
    "ci": [
      "Alergia a cefalosporinas",
      "Reacção anafilática prévia a penicilinas (avaliar individualmente)"
    ],
    "alert": [
      "Sem actividade contra MRSA, Enterococcus, Listeria, Pseudomonas",
      "Actividade limitada contra Enterobacteriaceae produtoras de ESBL",
      "Ajuste em IR (TFG < 30 ml/min): reduzir frequência para q12h"
    ],
    "source": "BNFC 2020-21, Cefuroxime (p. 341); IDSA CAP Guidelines 2019",
    "review": ["A ficha anterior tinha 25–50 mg/kg cada 8 h e profilaxia a 30 mg/kg; o BNFC 2020-21 indica 20 mg/kg cada 8 h (máx. 750 mg) e 50–60 mg/kg cada 6–8 h nas infeções graves; profilaxia 50 mg/kg (máx. 1,5 g)."]
  
  },
  {
    "id": "anidulafungina",
    "name": "Anidulafungina",
    "category": "antibiotico",
    "class": "Equinocandina — inibidor síntese β-(1,3)-D-glucano (parede fúngica)",
    "brands": "Ecalta — frascos 100 mg pó",
    "indication": [
      "Candidíase invasiva / candidemia — 1ª linha (junto com caspofungina e micafungina)",
      "Candidíase esofágica refractária ao fluconazol",
      "Alternativa a caspofungina e micafungina — sem ajuste em IR ou IH"
    ],
    "dose": [
      {
        "ind": "Candidíase invasiva — pediátrico",
        "val": "Carga: 3 mg/kg EV dia 1; Manutenção: 1,5 mg/kg/dia",
        "max": "Carga: 200 mg; Manutenção: 100 mg/dia",
        "freq": "1 dose/dia",
        "note": "Dados pediátricos limitados; extrapolação de adultos e PK pediátrica (Benjamin DK 2006). Duração ≥ 14 dias após última hemocultura negativa"
      }
    ],
    "prep": "EV: reconstituir 100 mg em 30 ml SWFI; diluir em SF ou SG5%. Taxa de infusão ≤ 1,1 mg/min (100 mg em ≥ 90 min). NÃO administrar em bólus.",
    "ci": [
      "Hipersensibilidade a equinocandinas",
      "Hipersensibilidade à frutose (excipiente)"
    ],
    "alert": [
      "⚠️ Reacção infusional (rubor, hipotensão, broncoespasmo) se infusão rápida — respeitar taxa ≤ 1,1 mg/min",
      "Vantagem única: sem ajuste em IR, IH ou diálise — ideal em falência orgânica",
      "Sem actividade contra Cryptococcus, Fusarium, mucormicetes",
      "Candida parapsilosis tem MIC naturalmente mais elevada para equinocandinas — monitorizar resposta"
    ],
    "source": "Shann Drug Doses (Anidulafungin: 2–4 mg/kg dia 1, depois 1–2 mg/kg/dia); Pappas PG et al. CID 2016 (IDSA Candida); Benjamin DK et al. Pediatr Infect Dis J 2006"
  }
];

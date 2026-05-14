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
        "ind": "Oral (calculado como amoxicilina)",
        "val": "40–90 mg/kg/dia",
        "max": "3 g/dia amoxicilina",
        "freq": "3 doses/dia (susp. 125/31); 2 doses/dia (susp. 400/57 ou comp 875/125)",
        "note": "OMA em criança < 2 anos ou recorrente: 80–90 mg/kg/dia"
      },
      {
        "ind": "EV grave",
        "val": "100–200 mg/kg/dia (de amoxicilina)",
        "max": "12 g/dia amoxicilina",
        "freq": "3–4 doses/dia",
        "note": ""
      }
    ],
    "prep": "EV: reconstituir e diluir em SF. Administrar em 30 min.",
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
    "source": "BNF for Children 2023-24; DGS Orientação 2019"
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
        "ind": "Meningite / infecção grave",
        "val": "100 mg/kg/dia EV/IM",
        "max": "4 g/dia",
        "freq": "1 dose/dia (ou 2 doses/dia na meningite)",
        "note": "Meningite: 100 mg/kg/dia em 2 doses nos primeiros dias"
      },
      {
        "ind": "Infecções moderadas",
        "val": "50–75 mg/kg/dia",
        "max": "2 g/dia",
        "freq": "1 dose/dia",
        "note": ""
      }
    ],
    "prep": "EV: diluir em SG5% ou SF. Concentração máx. 40 mg/ml (periférico). Administrar em 30 min.",
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
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
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
        "ind": "EV (doseamento por AUC/MIC)",
        "val": "15 mg/kg/dose",
        "max": "750 mg/dose (inicial)",
        "freq": "4 doses/dia (RN: 2–3/dia; < 1 mês: cada 12h)",
        "note": "Dose de carga opcional: 25–30 mg/kg (infecção grave) em 1h. Monitorizar AUC24/MIC alvo 400–600"
      },
      {
        "ind": "Oral (C. difficile — RAREmente usado)",
        "val": "10–40 mg/kg/dia oral",
        "max": "500 mg/dia",
        "freq": "4 doses/dia",
        "note": "Via oral não tem absorção sistémica"
      },
      {
        "ind": "Sépsis / Meningite neonatal EV",
        "val": "< 29 sem (< 14 dias): 15 mg/kg cada 24h; < 29 sem (≥ 14 dias): 15 mg/kg cada 18h; 29–35 sem: 15 mg/kg cada 12h; ≥ 36 sem: 15 mg/kg cada 8h",
        "max": "—",
        "freq": "conforme esquema por IG e idade pós-natal",
        "note": "Monitorização AUC/MIC preferida a monitorização de nível vale isolado (ASHP 2020)"
      },
      {
        "ind": "Neonatal — Ajuste por nível vale (se AUC não disponível)",
        "val": "Alvo vale: 10–15 mg/L (sépsis); 15–20 mg/L (meningite)",
        "max": "—",
        "freq": "colher antes da 4ª dose",
        "note": ""
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
    "source": "Formulário de Pediatria 3ª Ed.; Rybak MJ et al. Am J Health-Syst Pharm 2020; BNF for Children 2023-24; BNF for Children 2023-24; Rybak MJ. AJHP 2020; BNFC Neonatal Formulary 9th Ed"
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
        "ind": "Infecção grave / sépsis",
        "val": "20 mg/kg/dose EV",
        "max": "1 g/dose (2 g em meningite/pseudomonas)",
        "freq": "3 doses/dia",
        "note": "Infusão extendida: 3–4 horas para maximizar %T>MIC (PK/PD — organismos com MIC elevado)"
      },
      {
        "ind": "Meningite",
        "val": "40 mg/kg/dose",
        "max": "2 g/dose",
        "freq": "3 doses/dia",
        "note": ""
      }
    ],
    "prep": "Diluir em SF ou SG5%. Concentração máx. 50 mg/ml. Estabilidade: 4h à temperatura ambiente.",
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
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
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
        "ind": "RN sépsis (dose única diária)",
        "val": "< 29 sem: 5 mg/kg cada 48h; 29–35 sem: 4,5 mg/kg cada 36h; > 35 sem: 4 mg/kg cada 24h",
        "max": "—",
        "freq": "ver esquema",
        "note": "Dose única diária preferida (melhor índice AUC/MIC, menor toxicidade)"
      },
      {
        "ind": "Criança > 1 mês (dose única diária)",
        "val": "5–7 mg/kg/dose",
        "max": "—",
        "freq": "1 vez/dia",
        "note": "Nível vale < 1 mg/L antes da 2ª dose. Ajustar intervalo pela função renal"
      },
      {
        "ind": "Sépsis neonatal — EV (dose única diária)",
        "val": "< 29 sem: 5 mg/kg cada 48h; 29–35 sem: 4,5 mg/kg cada 36h; ≥ 36 sem: 4 mg/kg cada 24h; > 7 dias (≥ 36 sem): 4,5 mg/kg cada 24h",
        "max": "—",
        "freq": "ver esquema por IG",
        "note": "Dose única diária preferida — melhor eficácia (AUC/MIC) e menor toxicidade que doses divididas"
      },
      {
        "ind": "Neonatal — Meningite gram-negativo",
        "val": "2,5 mg/kg cada 8h (dose dividida)",
        "max": "—",
        "freq": "cada 8h × 21 dias (bacilo gram-negativo)",
        "note": "Dose dividida na meningite para melhor penetração LCR"
      }
    ],
    "prep": "EV: diluir em SF. Administrar em 30 min.",
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
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24; BNFC Neonatal Formulary; BNF for Children 2023-24; BNFC Neonatal Formulary 9th Ed"
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
        "ind": "Infecção anaeróbia — EV/oral",
        "val": "7,5 mg/kg/dose",
        "max": "500 mg/dose",
        "freq": "3 doses/dia",
        "note": "Casos graves: 15 mg/kg dose de carga → 7,5 mg/kg 3×/dia"
      },
      {
        "ind": "C. difficile — oral",
        "val": "7,5 mg/kg/dose oral",
        "max": "500 mg/dose",
        "freq": "3 doses/dia × 10 dias",
        "note": "Vancomicina oral é superior em casos graves"
      },
      {
        "ind": "Giardíase",
        "val": "15 mg/kg/dia",
        "max": "750 mg/dia",
        "freq": "3 doses/dia × 5–7 dias",
        "note": ""
      }
    ],
    "prep": "EV: não necessita diluição adicional (já diluído). Administrar em 30–60 min.",
    "ci": [
      "1º trimestre gravidez (relativa)"
    ],
    "alert": [
      "⚠️ Efeito dissulfiram com álcool — evitar álcool durante e 48h após tratamento",
      "Sabor metálico, náuseas frequentes",
      "Neuropatia periférica com uso prolongado",
      "↑ INR com varfarina"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
  },
  {
    "id": "aciclovir",
    "name": "Aciclovir",
    "category": "antibiotico",
    "src": "original",
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
        "ind": "Encefalite HSV / Infecção neonatal EV",
        "val": "20 mg/kg/dose EV",
        "max": "—",
        "freq": "cada 8h × 14–21 dias",
        "note": "Hidratação adequada obrigatória — nefrotóxico"
      },
      {
        "ind": "Varicela grave EV",
        "val": "10–15 mg/kg/dose EV",
        "max": "—",
        "freq": "cada 8h × 7–10 dias",
        "note": ""
      },
      {
        "ind": "Varicela oral (imunocompetente > 2 anos)",
        "val": "20 mg/kg/dose oral",
        "max": "800 mg/dose",
        "freq": "4×/dia × 5 dias",
        "note": "Iniciar < 24h do exantema"
      },
      {
        "ind": "Profilaxia oral",
        "val": "20 mg/kg/dia",
        "max": "400 mg 2×/dia",
        "freq": "2 doses/dia",
        "note": ""
      }
    ],
    "prep": "EV: reconstituir e diluir em SF ou SG5% → concentração ≤ 7 mg/ml. Infusão 60 min. Manter diurese adequada.",
    "ci": [
      "Insuf. renal grave (ajustar dose)"
    ],
    "alert": [
      "⚠️ Nefrotoxicidade — hidratar bem e infusão lenta",
      "⚠️ Neurotoxicidade (confusão, tremor) em insuf. renal",
      "Ajuste obrigatório se TFG < 50 ml/min"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
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
        "ind": "Infecção moderada oral",
        "val": "12,5–25 mg/kg/dose oral",
        "max": "500 mg/dose",
        "freq": "4×/dia (jejum)",
        "note": "Tomar 30 min antes das refeições"
      },
      {
        "ind": "Infecção grave EV",
        "val": "25–50 mg/kg/dose EV",
        "max": "2 g/dose",
        "freq": "4–6×/dia",
        "note": ""
      },
      {
        "ind": "Osteomielite / endocardite",
        "val": "50 mg/kg/dose EV",
        "max": "2 g/dose",
        "freq": "6×/dia × 4–6 semanas",
        "note": ""
      }
    ],
    "prep": "EV: dissolver e diluir em SF. Administrar em 15–30 min.",
    "ci": [
      "Alergia a penicilinas",
      "Icterícia/hepatotoxicidade prévia por flucloxacilina"
    ],
    "alert": [
      "⚠️ Hepatotoxicidade colestática (rara) — monitorizar LFTs em tratamentos prolongados",
      "Ineficaz em MRSA",
      "Absorção oral reduzida com alimentos"
    ],
    "source": "BNF for Children 2023-24; GOSH Drug Formulary 2023"
  },
  {
    "id": "piperacilina_tazobactam",
    "name": "Piperacilina/Tazobactam",
    "category": "antibiotico",
    "src": "original",
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
        "ind": "Infecção grave EV",
        "val": "90 mg/kg/dose (piperacilina)",
        "max": "4,5 g/dose",
        "freq": "3–4×/dia",
        "note": "Infusão extendida 4h melhora %T>MIC contra P. aeruginosa"
      },
      {
        "ind": "Febre neutropénica",
        "val": "100 mg/kg/dia (piperacilina)",
        "max": "16 g piperacilina/dia",
        "freq": "4×/dia",
        "note": ""
      }
    ],
    "prep": "Diluir em SF ou SG5%. Concentração ≤ 45 mg/ml piperacilina. Infusão 30 min (ou 4h extendida).",
    "ci": [
      "Alergia a penicilinas"
    ],
    "alert": [
      "⚠️ Hipocaliemia (monitorizar K+)",
      "⚠️ Neurotoxicidade em doses altas + insuf. renal",
      "Ajuste renal obrigatório se TFG < 40 ml/min"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
  },
  {
    "id": "cotrimoxazol",
    "name": "Cotrimoxazol (SMZ/TMP)",
    "category": "antibiotico",
    "src": "original",
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
        "ind": "Tratamento PCP (calculado em TMP)",
        "val": "15–20 mg TMP/kg/dia EV ou oral",
        "max": "—",
        "freq": "3–4 doses/dia × 21 dias",
        "note": ""
      },
      {
        "ind": "Profilaxia PCP",
        "val": "5 mg TMP/kg/dia oral",
        "max": "160 mg TMP/dia",
        "freq": "1×/dia (3 dias/semana ou diária)",
        "note": ""
      },
      {
        "ind": "ITU oral",
        "val": "6 mg TMP/kg/dia",
        "max": "320 mg TMP/dia",
        "freq": "2 doses/dia × 5–10 dias",
        "note": ""
      }
    ],
    "prep": "EV: diluir 5 ml em 125 ml SF ou SG5%. Infusão 60–90 min.",
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
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
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
        "ind": "< 12 anos EV/oral",
        "val": "10 mg/kg/dose",
        "max": "600 mg/dose",
        "freq": "3×/dia",
        "note": ""
      },
      {
        "ind": "≥ 12 anos EV/oral",
        "val": "600 mg/dose",
        "max": "600 mg/dose",
        "freq": "2×/dia",
        "note": "Biodisponibilidade oral ~100% — transição EV→oral imediata possível"
      }
    ],
    "prep": "EV: pronto a usar (2 mg/ml). Infusão 30–120 min. Compatível com SF e SG5%.",
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
    "source": "BNF for Children 2023-24; GOSH Drug Formulary 2023; Harriet Lane 23rd Ed"
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
        "ind": "< 1 ano",
        "val": "6 mg/kg EV",
        "max": "—",
        "freq": "1×/dia",
        "note": "Dados limitados — off-label"
      },
      {
        "ind": "1–6 anos",
        "val": "9 mg/kg EV",
        "max": "—",
        "freq": "1×/dia",
        "note": ""
      },
      {
        "ind": "7–11 anos",
        "val": "7 mg/kg EV",
        "max": "—",
        "freq": "1×/dia",
        "note": ""
      },
      {
        "ind": "≥ 12 anos",
        "val": "6–10 mg/kg EV",
        "max": "—",
        "freq": "1×/dia",
        "note": "Bacteriemia/endocardite: 6 mg/kg; Infecções complicadas: 8–10 mg/kg"
      }
    ],
    "prep": "Diluir em SF. Concentração ≤ 50 mg/ml. Infusão 30 min ou bólus 2 min.",
    "ci": [
      "Pneumonia (inactivada pelo surfactante pulmonar)"
    ],
    "alert": [
      "⚠️ Rabdomiólise / miopatia — monitorizar CK semanalmente. Suspender se CK > 5× LSN",
      "⚠️ Potenciada por estatinas — suspender estatinas durante tratamento",
      "⚠️ Eosinofilia pulmonar (rara)",
      "Ajuste renal se TFG < 30 ml/min"
    ],
    "source": "BNF for Children 2023-24; Sader HS. Pediatr Infect Dis J 2012"
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
        "ind": "≥ 3 meses EV",
        "val": "70 mg/m² (dose de carga) → 50 mg/m²/dia",
        "max": "70 mg carga; 50 mg/dia manutenção",
        "freq": "1×/dia",
        "note": "Se sem resposta: 70 mg/m²/dia"
      },
      {
        "ind": "Alternativa por peso < 3 meses",
        "val": "25 mg/m²/dia EV",
        "max": "—",
        "freq": "1×/dia",
        "note": "Dados limitados em neonatos"
      }
    ],
    "prep": "Reconstituir com 10,8 ml água estéril → diluir em SF 250 ml. Infusão 60 min. NÃO usar SG5% (precipitação).",
    "ci": [
      "Hipersensibilidade a equinocandinas"
    ],
    "alert": [
      "⚠️ Ajuste na insuf. hepática moderada/grave",
      "Poucos efeitos adversos — boa tolerabilidade",
      "↑ ciclosporina (monitorizar níveis)",
      "Rifampicina e outros indutores CYP podem reduzir eficácia"
    ],
    "source": "BNF for Children 2023-24; ESCMID/ECMM Guidelines 2023"
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
    "source": "BNF for Children 2023-24; ESCMID/ECMM Guidelines 2023; Walsh TJ. CID 2008"
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
        "ind": "Candidemia / invasiva EV (< 30 kg)",
        "val": "2 mg/kg/dia EV",
        "max": "—",
        "freq": "1×/dia",
        "note": "Neonatos/lactentes: 4–10 mg/kg/dia (clearance aumentada)"
      },
      {
        "ind": "Candidemia / invasiva EV (≥ 30 kg)",
        "val": "100 mg/dia EV",
        "max": "200 mg/dia",
        "freq": "1×/dia",
        "note": ""
      },
      {
        "ind": "Profilaxia transplante",
        "val": "1 mg/kg/dia (< 50 kg); 50 mg/dia (≥ 50 kg)",
        "max": "50 mg/dia",
        "freq": "1×/dia",
        "note": ""
      }
    ],
    "prep": "Reconstituir com 5 ml SF → diluir em SF 100 ml. Infusão 60 min. Proteger da luz.",
    "ci": [
      "Hipersensibilidade a equinocandinas"
    ],
    "alert": [
      "⚠️ Hepatotoxicidade (monitorizar LFTs)",
      "⚠️ Risco teórico de tumores hepáticos (dados em animais) — evitar uso prolongado desnecessário",
      "Boa tolerabilidade geral",
      "Sem ajuste renal necessário"
    ],
    "source": "BNF for Children 2023-24; ESCMID Guidelines 2023"
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
        "ind": "CMV grave EV (ganciclovir)",
        "val": "5 mg/kg/dose EV",
        "max": "—",
        "freq": "cada 12h (indução 14–21 dias) → cada 24h (manutenção)",
        "note": ""
      },
      {
        "ind": "Profilaxia pós-transplante (valganciclovir oral)",
        "val": "900 mg/dia (adulto)",
        "max": "900 mg/dia",
        "freq": "1×/dia × 100–200 dias",
        "note": "Dose pediátrica: 7 × SCT × TFGmod (fórmula específica — consultar farmácia)"
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
    "source": "BNF for Children 2023-24; Kimberlin DW. NEJM 2015"
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
        "ind": "Infecção grave / neutropénia febril",
        "val": "50 mg/kg/dose EV",
        "max": "2 g/dose (6 g/dia)",
        "freq": "q8h",
        "note": "Infusão prolongada (3h) para maximizar %T>MIC em microrganismos com MIC elevada (PK/PD)"
      },
      {
        "ind": "Meningite nosocomial",
        "val": "50 mg/kg/dose EV",
        "max": "2 g/dose",
        "freq": "q8h",
        "note": "Boa penetração LCR (~20% sérico)"
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
    "source": "BNF for Children 2023-24; Hayashi Y et al. Pediatr Infect Dis J 2016; IDSA Guidelines Febrile Neutropenia 2010"
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
        "ind": "Infecção grave EV",
        "val": "30 mg/kg/dose EV",
        "max": "2 g/dose (8 g/dia)",
        "freq": "q6–8h",
        "note": "Infecção por Pseudomonas: q6h. Infusão prolongada (3–4h) para PK/PD optimizado"
      }
    ],
    "prep": "EV: reconstituir e diluir em SF ou SG5%. Administrar em 20–60 min. Estável 48h a 4°C.",
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
    "source": "BNF for Children 2023-24; Blumenthal KG et al. JACI 2018 (cross-reactivity data)"
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
        "ind": "Meningite / infecção grave",
        "val": "200–400 mg/kg/dia EV",
        "max": "12 g/dia",
        "freq": "q4–6h",
        "note": "Meningite: 400 mg/kg/dia para maximizar penetração LCR"
      },
      {
        "ind": "Sépsis neonatal precoce (< 7 dias)",
        "val": "50 mg/kg/dose EV",
        "max": "—",
        "freq": "q12h (< 34 sem GA); q8h (≥ 34 sem GA)",
        "note": "Associar gentamicina para sinergia"
      },
      {
        "ind": "Sépsis neonatal tardia (> 7 dias)",
        "val": "50 mg/kg/dose EV",
        "max": "—",
        "freq": "q8h (< 34 sem); q6h (≥ 34 sem)",
        "note": ""
      },
      {
        "ind": "Sépsis neonatal — EV",
        "val": "< 7 dias (< 30 sem): 50 mg/kg cada 12h; < 7 dias (≥ 30 sem): 50 mg/kg cada 8h; ≥ 7 dias: 50 mg/kg cada 6–8h",
        "max": "200 mg/kg/dia",
        "freq": "conforme idade gestacional e pós-natal",
        "note": "Associar gentamicina na sépsis. Meningite: 100 mg/kg/dose cada 6–8h"
      },
      {
        "ind": "Neonatal — Meningite por Listeria EV",
        "val": "100 mg/kg/dose EV",
        "max": "—",
        "freq": "cada 6–8h × 14–21 dias",
        "note": "A única β-lactâmico eficaz em Listeria"
      }
    ],
    "prep": "EV: diluir em SF ou SG5%. Concentração ≤ 30 mg/ml. Administrar em 15–30 min. Estável apenas 1h à temperatura ambiente após reconstituição — preparar fresco.",
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
    "source": "BNF for Children 2023-24; Red Book AAP 2021; Polin RA et al. Pediatrics 2012 (neonatal sepsis); BNF for Children 2023-24; BNFC Neonatal Formulary 9th Ed"
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
        "ind": "Dose única diária (extended interval — crianças > 1 mês)",
        "val": "15–22,5 mg/kg/dose EV",
        "max": "1500 mg/dose",
        "freq": "q24h",
        "note": "Preferir dose única diária (maximiza Cmax/MIC, reduz nefrotoxicidade). Monitorizar nível pré-dose (< 1 mg/L antes da 2ª dose)"
      },
      {
        "ind": "Neonatos < 29 semanas GA",
        "val": "18 mg/kg/dose EV",
        "max": "—",
        "freq": "q48h",
        "note": "Neonatos 29–34 sem: 15 mg/kg q36h. ≥ 35 sem: 15 mg/kg q24h"
      }
    ],
    "prep": "EV: diluir em SF ou SG5% até 10 mg/ml. Administrar em 30–60 min (nunca em bólus — bloqueio neuromuscular). Incompatível com penicilinas na mesma linha.",
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
    "source": "BNF for Children 2023-24; Moise-Broder PA et al. CID 2004; Neofax 2023"
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
    "prep": "EV: não diluir adicionalmente (vem em solução 2 mg/ml). Administrar em 60 min (30 min se urgente). Compatível com SF, SG5%.",
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
    "source": "BNF for Children 2023-24; Bradley JS et al. Pediatrics 2011; AAP Committee on Infectious Diseases 2016"
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
        "ind": "Infecção grave EV",
        "val": "10–13 mg/kg/dose EV",
        "max": "600–900 mg/dose (2700 mg/dia)",
        "freq": "q6–8h",
        "note": "Infecções osteoarticulares graves: 13 mg/kg q6h"
      },
      {
        "ind": "Oral",
        "val": "7–10 mg/kg/dose PO",
        "max": "450 mg/dose",
        "freq": "q6–8h",
        "note": "Biodisponibilidade oral 90% — step-down precoce possível"
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
    "source": "BNF for Children 2023-24; Liu C et al. CID 2011 (MRSA guidelines); Zaoutis TE et al. Pediatrics 2005"
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
        "ind": "Tuberculose",
        "val": "10–20 mg/kg/dia PO/EV",
        "max": "600 mg/dia",
        "freq": "1 dose/dia em jejum",
        "note": "Dose habitual: 15 mg/kg/dia. Parte do esquema 2HRZE/4HR"
      },
      {
        "ind": "Profilaxia meningococo",
        "val": "10 mg/kg/dose PO",
        "max": "600 mg/dose",
        "freq": "q12h × 2 dias",
        "note": "< 1 mês: 5 mg/kg/dose q12h × 2 dias"
      },
      {
        "ind": "Profilaxia Hib",
        "val": "20 mg/kg/dia PO",
        "max": "600 mg/dia",
        "freq": "1 dose/dia × 4 dias",
        "note": ""
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
    "source": "BNF for Children 2023-24; WHO TB Guidelines 2022; DGS Norma Tuberculose 2019"
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
        "ind": "Candidíase / aspergilose invasiva",
        "val": "3–5 mg/kg/dia EV",
        "max": "—",
        "freq": "1 dose/dia",
        "note": "Dose 5 mg/kg/dia para aspergilose. Crianças podem necessitar doses mais altas (5–7 mg/kg) por clearance aumentada"
      },
      {
        "ind": "Mucormicose",
        "val": "5–10 mg/kg/dia EV",
        "max": "—",
        "freq": "1 dose/dia",
        "note": "Doses elevadas (7,5–10 mg/kg) usadas em mucormicose disseminada grave"
      },
      {
        "ind": "Leishmaniose visceral",
        "val": "3 mg/kg/dia EV dias 1–5, 14, 21",
        "max": "—",
        "freq": "Esquema em dias alternados",
        "note": "Dose total 21 mg/kg"
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
    "source": "BNF for Children 2023-24; Pappas PG et al. CID 2016 (IDSA Candida); Patterson TF et al. CID 2016 (Aspergillus)"
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
        "ind": "Candidíase invasiva — tratamento",
        "val": "12 mg/kg/dia EV/PO",
        "max": "800 mg/dia",
        "freq": "1 dose/dia",
        "note": "Dose de carga: 25 mg/kg (máx 800 mg) no dia 1. Apenas para Candida sensível (não C. krusei, C. glabrata com MIC > 8)"
      },
      {
        "ind": "Candidíase mucocutânea",
        "val": "3–6 mg/kg/dia PO",
        "max": "400 mg/dia",
        "freq": "1 dose/dia",
        "note": ""
      },
      {
        "ind": "Profilaxia RNMBP",
        "val": "3–6 mg/kg/dose EV/PO",
        "max": "—",
        "freq": "q48–72h (conforme IG e peso)",
        "note": "Profilaxia em RNMBP < 1000g ou < 28 sem reduz candidíase invasiva (NNT ~9, Cochrane 2016)"
      },
      {
        "ind": "Neonato (ajuste posológico)",
        "val": "6–12 mg/kg/dose",
        "max": "—",
        "freq": "q48–72h (RN < 2 sem); q24h (RN ≥ 2 sem)",
        "note": "Semivida neonatal prolongada (55–90h) — intervalos alargados"
      }
    ],
    "prep": "EV: administrar sem diluição adicional (2 mg/ml pronto). Taxa máx. 10 ml/min. Compatível com SF, SG5%. Oral: tomar com ou sem comida; biodisponibilidade > 90%.",
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
    "source": "BNF for Children 2023-24; Pappas PG et al. CID 2016; Kaufman D et al. Pediatrics 2014 (RNMBP prophylaxis)"
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
    "source": "BNF for Children 2023-24; Jefferson T et al. Cochrane 2014; CDC Influenza Antiviral Guidance 2023"
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
    "prep": "Oral: suspensão 50 mg/5 ml. Tomar com ou sem comida.",
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
    "source": "BNF for Children 2023-24; NICE NG224 UTI in Children 2022; Garin EH et al. N Engl J Med 2006"
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
        "ind": "Meningite bacteriana / infecção grave",
        "val": "50–75 mg/kg/dose EV",
        "max": "2 g/dose (12 g/dia)",
        "freq": "q6–8h (q6h na meningite)",
        "note": "Neonatos: 50 mg/kg q12h (< 7 dias de vida); q8h (7–28 dias). Preferir a ceftriaxona em RN por não deslocar bilirrubina"
      },
      {
        "ind": "Neonatal — Meningite / Sépsis grave EV",
        "val": "< 7 dias: 50 mg/kg cada 12h; 7–28 dias: 50 mg/kg cada 8h; > 28 dias: 50 mg/kg cada 6–8h",
        "max": "200 mg/kg/dia",
        "freq": "conforme idade pós-natal",
        "note": "Meningite gram-negativo: 50 mg/kg cada 6h × ≥ 21 dias"
      },
      {
        "ind": "Neonatal — Sépsis tardia moderada EV",
        "val": "50 mg/kg/dose EV",
        "max": "—",
        "freq": "cada 8–12h (conforme idade)",
        "note": ""
      }
    ],
    "prep": "EV: diluir em SF ou SG5%. Concentração ≤ 40 mg/ml. Administrar em 30 min.",
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
    "source": "BNF for Children 2023-24; Tunkel AR et al. CID 2004; Neofax 2023; BNF for Children 2023-24; FDA Safety Alert 2007; BNFC Neonatal Formulary 9th Ed"
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
        "ind": "Infecção sistémica grave — EV",
        "val": "Dose de carga: 75.000 UI/kg EV (= 5 mg CBA/kg); Manutenção: 50.000–75.000 UI/kg/dia",
        "max": "Carga: 9 MUI; Manutenção: 9 MUI/dia",
        "freq": "Manutenção em 2–3 doses/dia; iniciar 12–24h após carga",
        "note": "SEMPRE usar em combinação (meropenem, rifampicina, fosfomicina) — monoterapia não recomendada. TDM (CSS alvo 2–4 mg/L) em centros com acesso"
      },
      {
        "ind": "Fibrose quística — inalada",
        "val": "1,66–2 MUI inalado",
        "max": "—",
        "freq": "q12h; via DPI (Colobreathe) ou nebulização",
        "note": ""
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
    "source": "BNF for Children 2023-24; Nation RL et al. Lancet Infect Dis 2015; EUCAST/ESCMID Colistin Guidelines 2016"
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
        "ind": "Infecção grave — combinação",
        "val": "100–200 mg/kg/dia EV",
        "max": "16–24 g/dia",
        "freq": "q6–8h",
        "note": "SEMPRE em combinação — monoterapia selecciona resistência rapidamente. Carga sódica elevada (1 g fosfomicina ≈ 0,32 mEq Na⁺) — monitorizar"
      }
    ],
    "prep": "EV: diluir em SF ou SG5% (100–500 ml). Administrar em 30–60 min. Atenção à carga sódica total.",
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
    "source": "BNF for Children 2023-24; Pontikis K et al. Int J Antimicrob Agents 2014; ESCMID Guidelines MDR 2022"
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
    "source": "BNF for Children 2023-24; Walsh TJ et al. J Clin Oncol 2007; ECMM/ISHAM Mucormycosis Guidelines 2019"
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
        "ind": "Infecção sistémica — ≥ 8 anos",
        "val": "2,2 mg/kg/dose PO/EV",
        "max": "100 mg/dose",
        "freq": "q12h",
        "note": "RIQUETSIOSE GRAVE: iniciar imediatamente mesmo em < 8 anos (AAP 2021 — benefício supera manchas dentárias num curso curto)"
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
    "source": "BNF for Children 2023-24; AAP Red Book 2021; Bou Antoun D et al. Pediatrics 2019 (rickettsial)"
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
        "ind": "Meningite bacteriana / sépsis grave",
        "val": "200.000–300.000 UI/kg/dia EV",
        "max": "24 MUI/dia",
        "freq": "q4–6h (EV contínuo ou intermitente)",
        "note": "= 120–180 mg/kg/dia. Em meningite: fraccionado q4h (6 doses) para manter nível acima MIC"
      },
      {
        "ind": "Neonato — sépsis/meningite",
        "val": "100.000–200.000 UI/kg/dia EV",
        "max": "—",
        "freq": "q12h (< 7 dias, prematuro); q8h (7–28 dias); q6h (> 28 dias)",
        "note": ""
      },
      {
        "ind": "Sífilis congénita",
        "val": "50.000 UI/kg/dose EV",
        "max": "—",
        "freq": "q8–12h × 10–14 dias",
        "note": ""
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
    "source": "BNF for Children 2023-24; Tunkel AR et al. CID 2004; ECDC Meningococcal Guidelines 2019"
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
        "ind": "Infecção moderada EV",
        "val": "25–50 mg/kg/dose EV",
        "max": "1,5 g/dose (4,5 g/dia)",
        "freq": "q8h",
        "note": "Pneumonia grave: 50 mg/kg q8h. Step-down oral: cefuroxima axetil 20 mg/kg/dose q12h (máx 500 mg)"
      },
      {
        "ind": "Profilaxia cirúrgica",
        "val": "30 mg/kg EV",
        "max": "1,5 g",
        "freq": "Dose única 30–60 min antes incisão; repetir q4h em cirurgias longas",
        "note": ""
      }
    ],
    "prep": "EV: diluir em SF ou SG5%. Concentração ≤ 30 mg/ml. Administrar em 15–30 min.",
    "ci": [
      "Alergia a cefalosporinas",
      "Reacção anafilática prévia a penicilinas (avaliar individualmente)"
    ],
    "alert": [
      "Sem actividade contra MRSA, Enterococcus, Listeria, Pseudomonas",
      "Actividade limitada contra Enterobacteriaceae produtoras de ESBL",
      "Ajuste em IR (TFG < 30 ml/min): reduzir frequência para q12h"
    ],
    "source": "BNF for Children 2023-24; IDSA CAP Guidelines 2019; Solomkin JS et al. CID 2010"
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
    "source": "BNF for Children 2023-24; Pappas PG et al. CID 2016 (IDSA Candida); Benjamin DK et al. Pediatr Infect Dis J 2006"
  }
];

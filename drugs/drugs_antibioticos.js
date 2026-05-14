// UCIP Pediatria — Antibióticos
// 16 fármacos
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
      "Infecções graves por gram-positivos resistentes a β-lactâmicos"
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
      "Ajuste rigoroso na insuf. renal"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; Rybak MJ et al. Am J Health-Syst Pharm 2020; BNF for Children 2023-24"
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
      "Sépsis grave gram-negativo (associada)"
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
      }
    ],
    "prep": "EV: diluir em SF. Administrar em 30 min.",
    "ci": [
      "Miastenia gravis",
      "Insuf. renal grave (ajustar dose/intervalo)"
    ],
    "alert": [
      "⚠️ NEFROTOXICIDADE — monitorizar creatinina e débito urinário",
      "⚠️ OTOTOXICIDADE (auditiva e vestibular) — irreversível. Evitar uso prolongado",
      "⚠️ Risco ↑ com vancomicina, furosemida, AINEs",
      "Monitorizar nível sérico vale (< 1 mg/L)",
      "Ajuste rigoroso na insuf. renal e RN prematuro"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24; BNFC Neonatal Formulary"
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
  }
];

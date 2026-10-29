// UCIP Pediatria — Cardiovascular & Diuréticos
// 29 fármacos
// Fontes: ver drugs_sources.js

var DRUGS_CARDIOVASCULAR = [
  {
    "id": "furosemida",
    "name": "Furosemida",
    "category": "diuretico",
    "class": "Diurético de ansa — inibidor co-transportador Na-K-2Cl",
    "brands": "Lasix 10 mg/ml",
    "indication": [
      "Edema (ICC, cirrose, síndrome nefrótico)",
      "Hipertensão arterial",
      "Oligúria/sobrecarga hídrica em UCIP",
      "Hipercalcemia"
    ],
    "dose": [
      {
        "ind": "Edema (ICC, doença renal ou hepática), edema pulmonar — EV lento",
        "val": "RN: 0,5–1 mg/kg cada 12–24 h (cada 24 h se IG corrigida < 31 sem); 1 mês–11 anos: 0,5–1 mg/kg cada 8 h; 12–17 anos: 20–40 mg cada 8 h",
        "max": "40 mg/dose e 6 mg/kg/dia (1 mês–11 anos)",
        "freq": "Conforme resposta; doses maiores em edema resistente",
        "note": "BNFC 2020-21 (p. 148). Injecção EV lenta."
      },
      {
        "ind": "Edema — oral",
        "val": "RN: 0,5–2 mg/kg cada 12–24 h; 1 mês–11 anos: 0,5–2 mg/kg 2–3×/dia; 12–17 anos: 20–40 mg/dia, até 80–120 mg/dia em edema resistente",
        "max": "80 mg/dia e 12 mg/kg/dia (1 mês–11 anos)",
        "freq": "2–3×/dia",
        "note": "BNFC 2020-21 (p. 148)."
      },
      {
        "ind": "Edema — perfusão EV contínua",
        "val": "0,1–2 mg/kg/h",
        "max": "—",
        "freq": "Contínua",
        "note": "BNFC 2020-21 (p. 148). Pós-cirurgia cardíaca: iniciar 100 mcg/kg/h e duplicar cada 2 h até diurese > 1 mL/kg/h."
      },
      {
        "ind": "Oligúria por insuficiência renal (TFG < 20 mL/min) — perfusão EV",
        "val": "1 mês–11 anos: 2–5 mg/kg até 4×/dia; 12–17 anos: 250 mg em 1 h, subindo para 500 mg e 1 g conforme resposta",
        "max": "1 g/dia (1 mês–11 anos)",
        "freq": "Ver BNFC p. 148",
        "note": "BNFC 2020-21 (p. 148). Se não houver resposta, provável necessidade de diálise."
      }
    ],
    "prep": "EV: pode administrar não diluído (10 mg/ml) em bólus (≤ 4 mg/min — ototoxicidade) ou diluir em SF (pH alcalino — incompatível com soluções ácidas). Perfusão: 20–50 mg em 50 ml SF (0,4–1 mg/ml). ⚠️ NÃO misturar com milrinona, nicardipina, ciprofloxacina, mid. Oral: solução 4 mg/ml ou 10 mg/ml. Fonte: NHS Medusa 2024.",
    "ci": [
      "Anúria por obstrução",
      "Hipocaliemia grave não corrigida",
      "Hiponatremia grave"
    ],
    "alert": [
      "⚠️ Hipocaliemia — monitorizar K+ e repor",
      "⚠️ Hiponatremia, hipomagnesemia, hipocalcemia",
      "⚠️ Ototoxicidade (risco ↑ com aminoglicosídeos e doses altas)",
      "⚠️ Alcalose metabólica hipoclorémica",
      "Nefrocalcinose em RN prematuro com uso prolongado"
    ],
    "source": "BNFC 2020-21, Furosemide (p. 148); Formulário de Pediatria 3ª Ed.",
    "review": ["A ficha anterior indicava máximo de 6 mg/kg por dose EV; o BNFC 2020-21 dá 6 mg/kg por dia (máx. 40 mg/dose). A perfusão passa de 0,1–0,4 para 0,1–2 mg/kg/h (BNFC)."]
  
  },
  {
    "id": "acido_tranexamico",
    "name": "Ácido Tranexâmico",
    "category": "hemostase",
    "class": "Antifibrinolítico — inibidor competitivo da activação do plasminogénio",
    "brands": "Transamin 500 mg/5 ml; 1000 mg/10 ml",
    "indication": [
      "Hemorragia major / trauma (Golden Hour — evidência classe I)",
      "Cirurgia cardíaca e ortopédica (profilaxia)",
      "Hemofilia (adjuvante)",
      "Epistaxis recorrente",
      "Hemorragia neonatal grave — peri-operatório de cirurgia cardíaca neonatal",
      "Coagulopatia hemorrágica neonatal refractária",
      "Hemorragia peri-operatória significativa em cirurgia neonatal major"
    ],
    "dose": [
      {
        "ind": "Inibição da fibrinólise — EV lento (BNFC)",
        "val": "10 mg/kg 2–3×/dia, em ≥ 10 min",
        "max": "1 g/dose",
        "freq": "2–3×/dia",
        "note": "BNFC 2020-21 (p. 86)."
      },
      {
        "ind": "Inibição da fibrinólise — perfusão EV contínua (BNFC)",
        "val": "45 mg/kg em 24 h",
        "max": "—",
        "freq": "Perfusão contínua",
        "note": "BNFC 2020-21 (p. 86)."
      },
      {
        "ind": "Inibição da fibrinólise — oral (BNFC)",
        "val": "15–25 mg/kg 2–3×/dia",
        "max": "1,5 g/dose",
        "freq": "2–3×/dia",
        "note": "BNFC 2020-21 (p. 86). Epistaxis/mucosas: 5–7 dias."
      },
      {
        "ind": "Hemorragia major / trauma — EV (extrapolado de CRASH-2)",
        "val": "15 mg/kg EV em 10 min, depois 2 mg/kg/h durante 8 h",
        "max": "1 g (carga)",
        "freq": "Iniciar nas primeiras 3 h após o trauma",
        "note": "CRASH-2 (Lancet 2010) em adultos; esquema pediátrico não consta do BNFC 2020-21."
      },
      {
        "ind": "Cirurgia cardíaca com CEC — EV",
        "val": "10 mg/kg pré-CEC + 10 mg/kg durante CEC; alguns protocolos: perfusão 1–3 mg/kg/h",
        "max": "—",
        "freq": "Segundo protocolo",
        "note": "Não consta do BNFC 2020-21; esquema de uso institucional."
      }
    ],
    "prep": "EV: diluir em SF, SG5% ou LR. Concentração ≤ 100 mg/ml. Velocidade máxima: 100 mg/min (bólus de carga); perfusão: diluir 1 g em 100 ml SF (10 mg/ml). ⚠️ Não administrar em bólus rápido (hipotensão).",
    "ci": [
      "Hemorragia subaracnoídea (dados contraditórios — evitar)",
      "Trombose activa (TEP, TVP, AVC isquémico)",
      "Hematúria de origem renal superior (risco obstrução)",
      "Trombose activa (TVP, TEP)",
      "Hematúria de origem renal alta (risco retenção coágulos)",
      "Convulsões activas (doses altas — efeito GABA antagonista)"
    ],
    "alert": [
      "⚠️ Convulsões em doses altas (especialmente cirurgia cardíaca com CEC)",
      "⚠️ Tromboembolismo — risco baixo com doses recomendadas, mas monitorizar",
      "Náuseas e vómitos — reduzir velocidade de infusão",
      "Ajustar na insuf. renal",
      "⚠️ Dose alta (> 100 mg/kg) associada a convulsões — doses neonatais conservadoras (10–15 mg/kg)",
      "⚠️ Risco trombótico em RN de alto risco (policitemia, catéteres, síndrome antifosfolípido materno)",
      "Evidência neonatal limitada — usar apenas em contexto de hemorragia grave com benefício esperado claro"
    ],
    "source": "BNFC 2020-21, Tranexamic acid (p. 86); CRASH-2 Collaborators. Lancet 2010;376:23–32",
    "review": ["O BNFC 2020-21 não inclui esquema específico para trauma nem para cirurgia cardíaca; esses esquemas mantêm-se por extrapolação de CRASH-2 e de protocolos de CEC. A dose oral e a dose EV (10 mg/kg) do BNFC foram acrescentadas."]
  
  },
  {
    "id": "heparina",
    "name": "Heparina Não Fraccionada",
    "category": "hemostase",
    "class": "Anticoagulante — potencia antitrombina III → inibe trombina e factor Xa",
    "brands": "Heparina sódica 5000 UI/ml; 25000 UI/5 ml",
    "indication": [
      "Trombose venosa profunda / tromboembolismo",
      "Linha arterial (permeabilidade)",
      "Circulação extra-corporal (CEC, ECMO)",
      "Coagulação intravascular disseminada (CID)",
      "Síndrome coronário agudo (adolescente)"
    ],
    "dose": [
      {
        "ind": "Tratamento de tromboembolismo (bólus + perfusão EV)",
        "val": "RN ≤35 sem IG corrigida: 50 U/kg, depois 25 U/kg/h; RN: 75 U/kg, depois 25 U/kg/h; 1–11 meses: 75 U/kg, depois 25 U/kg/h; 1–17 anos: 75 U/kg, depois 20 U/kg/h",
        "max": "—",
        "freq": "Perfusão contínua, ajustada ao APTT",
        "note": "BNFC 2020-21, Heparin (unfractionated) (p. 101)."
      },
      {
        "ind": "Tratamento — via subcutânea",
        "val": "250 U/kg 2×/dia, ajustar ao APTT",
        "max": "—",
        "freq": "2×/dia",
        "note": "BNFC 2020-21 (p. 101)."
      },
      {
        "ind": "Profilaxia de trombose (SC)",
        "val": "100 U/kg 2×/dia",
        "max": "5000 U/dose",
        "freq": "2×/dia, ajustar ao APTT",
        "note": "BNFC 2020-21 (p. 101)."
      },
      {
        "ind": "Manutenção de cateter arterial umbilical (RN)",
        "val": "0,5 U/h EV",
        "max": "—",
        "freq": "Perfusão contínua",
        "note": "BNFC 2020-21 (p. 101). Circuitos extracorporais e shunts/stents: \"consultar o RCM / protocolo local\"."
      }
    ],
    "prep": "Perfusão: diluir em SF. Concentrações pediátricas: 0,5–1 UI/ml (flushes); 25 UI/ml (linhas); 100 UI/ml (perfusão UCIP); até 500 UI/ml (central). Seringas de seringa-bomba: tipicamente 50 UI/kg em 50 ml SF (1 UI/kg/ml). ⚠️ Compatível com a maioria dos fármacos mas verificar — heparina inactiva por adsorção a várias superfícies.",
    "ci": [
      "Hemorragia activa não controlada",
      "Trombocitopenia induzida por heparina (HIT)",
      "Cirurgia SNC recente"
    ],
    "alert": [
      "⚠️ TROMBOCITOPENIA INDUZIDA POR HEPARINA (HIT) — queda plaquetária > 50% entre D5–14. Suspender imediatamente",
      "⚠️ Antídoto: PROTAMINA 1 mg/100 UI heparina (máx. 50 mg IV lento)",
      "⚠️ Monitorizar APTT ou anti-Xa 4–6h após início/ajuste",
      "⚠️ Osteoporose em uso prolongado"
    ],
    "source": "BNF for Children 2020-21, Heparin (unfractionated) (p. 101)",
    "review": ["Removidas as doses de ECMO (bólus 50–100 U/kg, perfusão 20–60 U/kg/h, ACT 180–220 s) e a heparina de lavagem de linha (0,5–1 U/mL): o BNFC remete para o RCM/protocolo local; sem fonte verificada neste conjunto."]
  
  },
  {
    "id": "digoxina",
    "name": "Digoxina",
    "category": "cardiovascular",
    "class": "Glicosídeo cardíaco — inibidor Na+/K+ ATPase",
    "brands": "Lanoxin 0,25 mg/ml (EV); 0,05 mg/ml (ped.); comp. 0,25 mg",
    "indication": [
      "Insuficiência cardíaca com FE reduzida (adjuvante)",
      "Fibrilhação auricular com resposta ventricular rápida",
      "Flutter auricular (conversão/controlo de frequência)"
    ],
    "dose": [
      {
        "ind": "Arritmias supraventriculares / insuficiência cardíaca crónica — via oral",
        "val": "Digitalização (3 doses divididas em 24 h): RN <1,5 kg 25 mcg/kg; 1,5–2,5 kg 30 mcg/kg; ≥2,6 kg 45 mcg/kg; 1 mês–1 ano 45 mcg/kg; 2–4 anos 35 mcg/kg; 5–9 anos 25 mcg/kg (máx. 750 mcg/dia); 10–17 anos 0,75–1,5 mg. Manutenção: RN <2,5 kg 4–6 mcg/kg/dia; RN ≥2,6 kg 10 mcg/kg/dia; 1 mês–4 anos 10 mcg/kg/dia; 5–9 anos 6 mcg/kg/dia (máx. 250 mcg/dia); 10–17 anos 62,5–250 mcg/dia",
        "max": "250 mcg/dia (manutenção, 5–9 anos)",
        "freq": "Manutenção em 1–2 doses/dia",
        "note": "BNFC 2020-21, Digoxin (p. 86). Reduzir a dose para metade com amiodarona, dronedarona ou quinino. Pode ser necessária redução se tomou digoxina nas 2 semanas anteriores."
      },
      {
        "ind": "Arritmias supraventriculares / insuficiência cardíaca crónica — perfusão EV",
        "val": "Digitalização (3 doses divididas em 24 h): RN <1,5 kg 20 mcg/kg; 1,5–2,5 kg 30 mcg/kg; ≥2,6 kg 35 mcg/kg; 1 mês–4 anos 35 mcg/kg; 5–9 anos 25 mcg/kg (máx. 500 mcg/dia); 10–17 anos 0,5–1 mg. Manutenção igual à oral",
        "max": "250 mcg/dia (manutenção, 5–9 anos)",
        "freq": "Manutenção em 1–2 doses/dia",
        "note": "BNFC 2020-21 (p. 86). Ao passar de EV para oral pode ser preciso aumentar a dose 20–33%. Shann (alternativa): 15 mcg/kg e 5 mcg/kg 6 h depois, depois 3–5 mcg/kg 12/12 h (EV máx. habitual 200 mcg; oral 250 mcg); nível ≥6 h após a dose 1,0–2,5 nmol/L."
      }
    ],
    "prep": "EV: diluir ≥ 4× em SF ou SG5% para ≤ 50 μg/ml. Administrar em 30 min. Neonatos: preparar solução 10 μg/ml (diluições seriadas obrigatórias — verificar com farmácia). Oral: elixir pediátrico 50 μg/ml. Comprimidos 62,5/125 μg. Concentração máxima EV: 100 μg/ml (central apenas). Fonte: NHS Medusa 2024.",
    "ci": [
      "Cardiomiopatia hipertrófica obstrutiva",
      "Síndrome WPW com FA (via accessória)",
      "Bloqueio AV 2º/3º grau"
    ],
    "alert": [
      "⚠️ JANELA TERAPÊUTICA ESTREITA — toxicidade frequente",
      "⚠️ Toxicidade: náuseas, vómitos, bradicardia, bloqueio AV, arritmias ventriculares, confusão, distúrbios visuais (halos amarelos/verdes)",
      "⚠️ Hipocaliemia, hipomagnesemia e hipercalcemia POTENCIAM toxicidade",
      "⚠️ Interacções: amiodarona, quinidina, eritromicina ↑ nível digoxina",
      "Antídoto: anticorpos antidigoxina (Digibind)"
    ],
    "source": "BNF for Children 2020-21, Digoxin (p. 86); Shann F. Drug Doses"
  },
  {
    "id": "nicardipina",
    "name": "Nicardipina",
    "category": "cardiovascular",
    "class": "Bloqueador canais de cálcio diidropiridínico — anti-hipertensor EV",
    "brands": "Nicardipina 1 mg/ml (amp. 10 ml)",
    "indication": [
      "Emergência hipertensiva em UCIP",
      "Hipertensão grave pós-operatória (cirurgia cardíaca, renal)",
      "HTA por nefropatia"
    ],
    "dose": [
      {
        "ind": "Hipertensão potencialmente fatal ou pós-operatória (uso especializado) — perfusão EV",
        "val": "Inicial 0,5 mcg/kg/min; ajustar à resposta; manutenção 1–4 mcg/kg/min",
        "max": "5 mcg/kg/min (máx. 250 mcg/min na criança)",
        "freq": "Perfusão contínua",
        "note": "BNFC 2020-21, Nicardipine (p. 115): RN e criança."
      }
    ],
    "prep": "EV: diluir em SG5% ou SF. Concentração: 0,1–0,2 mg/ml periférico; até 0,5 mg/ml central. Linha central preferida (flebite intensa em periférico). ⚠️ Incompatível com heparina, furosemida, bicarbonato. Proteger da luz durante infusão prolongada. Estabilidade: 24h a 25°C.",
    "ci": [
      "Estenose aórtica grave",
      "Choque cardiogénico"
    ],
    "alert": [
      "⚠️ Hipotensão — titular lentamente, ter linha arterial",
      "⚠️ Taquicardia reflexa",
      "⚠️ Flebite no periférico — preferir EV central",
      "Vantagem sobre nitroprussiato: sem toxicidade por tiocianato",
      "⚠️ Uso off-label em pediatria"
    ],
    "source": "BNF for Children 2020-21, Nicardipine hydrochloride (p. 115)"
  },
  {
    "id": "captopril",
    "name": "Captopril",
    "category": "cardiovascular",
    "class": "IECA — inibidor do enzima de conversão da angiotensina",
    "brands": "Capoten comp. 12,5/25/50 mg",
    "indication": [
      "Hipertensão arterial",
      "Insuficiência cardíaca",
      "Cardiomiopatia dilatada",
      "Nefropatia diabética / proteinúria"
    ],
    "dose": [
      {
        "ind": "Hipertensão ou insuficiência cardíaca — oral (início sob supervisão especializada)",
        "val": "Dose-teste: 100 mcg/kg (máx. 6,25 mg) em 1 mês–11 anos; 10–50 mcg/kg em RN; 100 mcg/kg ou 6,25 mg em 12–17 anos. Depois 1 mês–11 anos: 100–300 mcg/kg 2–3×/dia",
        "max": "1–11 meses 4 mg/kg/dia; 1–11 anos 6 mg/kg/dia; 12–17 anos 150 mg/dia; RN 2 mg/kg/dia",
        "freq": "2–3×/dia; só continuar se a dose-teste for tolerada",
        "note": "BNFC 2020-21 (p. 118). Vigiar a PA 1–2 h após a dose-teste. RN: 10–50 mcg/kg 2–3×/dia; pré-termo: dose-teste 10 mcg/kg e máx. 300 mcg/kg/dia. 12–17 anos: 12,5–25 mg 2–3×/dia."
      }
    ],
    "prep": "Oral: comprimidos 12,5/25/50 mg — triturar e dissolver em 10 ml água. Solução extemporânea 1 mg/ml (estável em ácido cítrico 28 dias). Tomar em JEJUM (30 min antes refeição — alimentos reduzem absorção 30–40%). ⚠️ Hipotensão na 1ª dose — iniciar deitado, monitorizar TA 1h.",
    "ci": [
      "Estenose artéria renal bilateral",
      "Gravidez (2º e 3º trimestres — teratogénico)",
      "Hipercaliemia",
      "Angioedema prévio com IECA"
    ],
    "alert": [
      "⚠️ 1ª dose em RN: hipotensão grave — iniciar SEMPRE em contexto hospitalar",
      "⚠️ Hipotensão na 1ª toma — risco máximo 1–2h após administração",
      "⚠️ Hipercaliemia (especialmente com poupadores K+)",
      "⚠️ Tosse seca (efeito de classe)",
      "⚠️ Angioedema (raro mas grave)",
      "Monitorizar função renal e K+ no início e ajustes de dose"
    ],
    "source": "BNFC 2020-21, Captopril (p. 118); Formulário de Pediatria 3ª Ed."
  },
  {
    "id": "enalapril",
    "name": "Enalapril",
    "category": "cardiovascular",
    "src": "original",
    "class": "IECA — inibidor enzima conversão angiotensina",
    "brands": "Renitec comp. 5/10/20 mg; sol. extemporânea 1 mg/ml",
    "indication": [
      "Insuficiência cardíaca",
      "Hipertensão arterial",
      "Cardiomiopatia dilatada",
      "Nefropatia proteinúrica"
    ],
    "dose": [
      {
        "ind": "Hipertensão ou insuficiência cardíaca — oral (sob supervisão especializada)",
        "val": "RN: inicial 10 mcg/kg 1×/dia, até 500 mcg/kg/dia em 1–3 doses; 1 mês–11 anos: inicial 100 mcg/kg 1×/dia, até 1 mg/kg/dia em 1–2 doses",
        "max": "RN 500 mcg/kg/dia; 1 mês–11 anos 1 mg/kg/dia",
        "freq": "1–2×/dia",
        "note": "BNFC 2020-21 (p. 120). Vigiar a PA 1–2 h após a primeira dose. Informação limitada em RN."
      },
      {
        "ind": "Hipertensão ou insuficiência cardíaca — 12–17 anos",
        "val": "Inicial 2,5 mg 1×/dia; manutenção 10–20 mg/dia",
        "max": "40 mg/dia (≥ 50 kg)",
        "freq": "1–2×/dia",
        "note": "BNFC 2020-21 (p. 120)."
      }
    ],
    "prep": "Oral: comprimidos 2,5/5/10/20 mg — triturar e dissolver em água. Solução extemporânea 1 mg/ml estável 30 dias (refrigerada). Tomar com ou sem alimentos.",
    "ci": [
      "Estenose artéria renal bilateral",
      "Gravidez",
      "Hipercaliemia",
      "Angioedema prévio com IECA"
    ],
    "alert": [
      "⚠️ 1ª dose em RN — hipotensão grave. Monitorizar 4–6h",
      "⚠️ Hipercaliemia — especialmente com poupadores K+",
      "⚠️ Tosse seca (10%)",
      "⚠️ Angioedema (raro mas grave)",
      "Monitorizar creatinina e K+ ao início e ajustes"
    ],
    "source": "BNFC 2020-21, Enalapril maleate (p. 120); Formulário de Pediatria 3ª Ed."
  },
  {
    "id": "propranolol",
    "name": "Propranolol",
    "category": "cardiovascular",
    "src": "original",
    "class": "Beta-bloqueante não selectivo — antagonista β1 e β2",
    "brands": "Inderal comp. 10/40/80 mg; sol. oral 1 mg/ml; EV 1 mg/ml",
    "indication": [
      "Taquiarritmias (TSV, flutter auricular)",
      "Hipertensão arterial",
      "Tetralogia de Fallot (crises hipóxicas)",
      "Hemangioma infantil (off-label, evidência sólida)",
      "Tirotoxicose (controlo sintomático)",
      "Profilaxia enxaqueca"
    ],
    "dose": [
      {
        "ind": "Arritmias — EV lento (monitorização ECG)",
        "val": "RN: 20–50 mcg/kg; 1 mês–17 anos: 25–50 mcg/kg",
        "max": "5 mg/dose (tirotoxicose)",
        "freq": "Repetir cada 6–8 h se necessário; injectar em 10 min",
        "note": "BNFC 2020-21 (p. 111). ECG e TA obrigatórios."
      },
      {
        "ind": "Arritmias — oral",
        "val": "RN: 250–500 mcg/kg 3×/dia; criança: 250–500 mcg/kg 3–4×/dia",
        "max": "1 mg/kg/dose 4×/dia; 160 mg/dia",
        "freq": "3–4×/dia, ajustar à resposta",
        "note": "BNFC 2020-21 (p. 111)."
      },
      {
        "ind": "Hipertensão — oral",
        "val": "RN: inicial 250 mcg/kg 3×/dia, até 2 mg/kg 3×/dia; 1 mês–11 anos: 0,25–1 mg/kg 3×/dia, até 5 mg/kg/dia; 12–17 anos: 80 mg 2×/dia, até 160–320 mg/dia",
        "max": "5 mg/kg/dia (1 mês–11 anos)",
        "freq": "Aumentar em intervalos semanais",
        "note": "BNFC 2020-21 (p. 111)."
      },
      {
        "ind": "Tetralogia de Fallot — EV lento",
        "val": "RN e 1 mês–11 anos: inicial 15–20 mcg/kg",
        "max": "100 mcg/kg/dose",
        "freq": "Repetir 15–20 mcg/kg cada 6–8 h (RN cada 12 h) se necessário",
        "note": "BNFC 2020-21 (p. 111). ECG obrigatório durante a administração."
      },
      {
        "ind": "Tetralogia de Fallot — oral",
        "val": "RN: 0,25–1 mg/kg 2–3×/dia; 1 mês–11 anos: 0,25–1 mg/kg 3–4×/dia",
        "max": "RN 2 mg/kg/dose 3×/dia; 5 mg/kg/dia",
        "freq": "3–4×/dia",
        "note": "BNFC 2020-21 (p. 111)."
      },
      {
        "ind": "Hipertiroidismo com sintomas autonómicos / tirotoxicose — oral",
        "val": "RN: 250–500 mcg/kg cada 6–8 h; criança: 250–500 mcg/kg cada 8 h, até 1 mg/kg",
        "max": "40 mg/dose",
        "freq": "Cada 6–8 h",
        "note": "BNFC 2020-21 (p. 111). EV: RN 20–50 mcg/kg; criança 25–50 mcg/kg (máx. 5 mg) cada 6–8 h em 10 min."
      },
      {
        "ind": "Hemangioma infantil (não consta do BNFC)",
        "val": "1 mg/kg/dia (semana 1) → 2 mg/kg/dia (semana 2) → 3 mg/kg/dia",
        "max": "3 mg/kg/dia",
        "freq": "2 doses/dia",
        "note": "Monitorizar FC, glicemia e TA."
      }
    ],
    "prep": "EV: administrar não diluído (1 mg/ml) MUITO LENTAMENTE — 1 mg/min máximo (arritmias e colapso cardiovascular com infusão rápida). Monitorização ECG contínua. Oral: solução 1 mg/ml ou 5 mg/ml; comprimidos 10/40/80 mg — podem ser triturados. Tomar COM alimentos (aumenta biodisponibilidade 50%). Fonte: NHS Medusa 2024.",
    "ci": [
      "Asma / DPOC (broncoespasmo)",
      "Bloqueio AV 2º/3º grau",
      "Choque cardiogénico",
      "Bradicardia sinusal",
      "Hipoglicemia (mascara sinais)"
    ],
    "alert": [
      "⚠️ Broncoespasmo — contraindicado em asma",
      "⚠️ Bradicardia e hipotensão",
      "⚠️ Hipoglicemia em RN, lactentes e diabéticos (mascara taquicardia)",
      "⚠️ Não suspender abruptamente (angina de rebote em adultos)",
      "Antídoto: glucagon 50–150 mcg/kg EV"
    ],
    "source": "BNFC 2020-21, Propranolol hydrochloride (p. 111); Formulário de Pediatria 3ª Ed.",
    "review": ["A ficha anterior tinha o EV antiarrítmico em 10–100 mcg/kg e a crise hipóxica de Fallot em 10–250 mcg/kg (máx. 1 mg), muito acima do BNFC 2020-21 (Fallot: 15–20 mcg/kg, máx. 100 mcg/kg). Corrigido.", "Hemangioma infantil não consta do BNFC 2020-21: o esquema 1→2→3 mg/kg/dia deve ser confirmado no RCM do medicamento específico."]
  
  },
  {
    "id": "adenosina_triphosphate",
    "name": "Ivabradina",
    "category": "cardiovascular",
    "src": "added",
    "class": "Inibidor canal If — reduz FC sem efeito inotrópico",
    "brands": "Procoralan comp. 5/7,5 mg; sol. oral 1 mg/ml (Corlentor)",
    "indication": [
      "ICC com FE reduzida (FC > 70/min em RS) — adulto/adolescente",
      "Taquicardia sinusal inapropriada",
      "Redução FC em UCIP pediátrica (off-label)"
    ],
    "dose": [
      {
        "ind": "ICC / Taquicardia sinusal (> 6 meses)",
        "val": "INÍCIO 0,05 mg/kg/dose × 2/dia → ALVO 0,1–0,2 mg/kg/dose",
        "max": "7,5 mg/dose",
        "freq": "2×/dia",
        "note": "Titular para FC alvo 60–70/min"
      },
      {
        "ind": "Adulto",
        "val": "5 mg × 2/dia → 7,5 mg × 2/dia",
        "max": "7,5 mg × 2/dia",
        "freq": "2 doses/dia com refeições",
        "note": ""
      }
    ],
    "prep": "Oral (ivabradina, confusão de id — produto oral): solução 1 mg/ml ou comprimidos 5/7,5 mg — podem ser triturados. Tomar COM refeições. Solução oral magistral: 0,2 mg/ml estável 30 dias.",
    "ci": [
      "Bloqueio AV 2º/3º grau",
      "FC repouso < 60/min",
      "Choque cardiogénico",
      "IAM recente",
      "Inibidores CYP3A4 potentes (cetoconazol, claritromicina)"
    ],
    "alert": [
      "⚠️ Fosfenos (fenómeno luminoso transitório) — 15% dos doentes, benigno",
      "⚠️ Bradicardia — monitorizar FC",
      "Usar apenas em ritmo sinusal (ineficaz em FA)",
      "Off-label < 18 anos — dados pediátricos em expansão"
    ],
    "source": "SHIFT trial; Procoralan SmPC 2023",
    "review": ["Nota: esta ficha é de ivabradina (o id interno «adenosina_triphosphate» está trocado). A ivabradina não consta do BNFC 2020-21; as doses (0,05 mg/kg 2×/dia, alvo 0,1–0,2 mg/kg, máx. 7,5 mg/dose) vêm do RCM/estudos e não foram verificadas contra as fontes do utilizador."]

  },
  {
    "id": "amlodipina",
    "name": "Amlodipina",
    "category": "cardiovascular",
    "src": "added",
    "class": "Bloqueador canais de cálcio diidropiridínico de longa duração",
    "brands": "Norvasc comp. 5/10 mg; suspensão extemporânea 1 mg/ml",
    "indication": [
      "Hipertensão arterial crónica",
      "Angina (adolescente)",
      "HTA por nefropatia"
    ],
    "dose": [
      {
        "ind": "Hipertensão — oral, 1 mês–11 anos",
        "val": "Inicial 100–200 mcg/kg 1×/dia; subir até 400 mcg/kg 1×/dia",
        "max": "10 mg/dia",
        "freq": "1×/dia; ajustar cada 1–2 semanas",
        "note": "BNFC 2020-21 (p. 114)."
      },
      {
        "ind": "Hipertensão — oral, 12–17 anos",
        "val": "Inicial 5 mg 1×/dia; subir até 10 mg 1×/dia",
        "max": "10 mg/dia",
        "freq": "1×/dia; ajustar cada 1–2 semanas",
        "note": "BNFC 2020-21 (p. 114). Os sais (besilato, maleato, mesilato) são equivalentes pela dose de amlodipina base."
      }
    ],
    "prep": "Oral: suspensão extemporânea 1 mg/ml (estável 35 dias refrigerada em frasco âmbar). Comprimidos 5/10 mg — podem ser triturados. Tomar com ou sem alimentos.",
    "ci": [
      "Choque cardiogénico",
      "Hipotensão grave",
      "Estenose aórtica grave"
    ],
    "alert": [
      "Edema maleolar (efeito adverso frequente — dose-dependente)",
      "Rubor e cefaleias (frequentes no início)",
      "Semi-vida longa (~35–50h) — estado estacionário ao fim de 7–8 dias",
      "Efeito anti-hipertensor persiste alguns dias após suspensão"
    ],
    "source": "BNFC 2020-21, Amlodipine (p. 114)"
  },
  {
    "id": "hidralazina",
    "name": "Hidralazina",
    "category": "cardiovascular",
    "src": "added",
    "class": "Vasodilatador arterial directo",
    "brands": "Apresolina 20 mg/ml EV; comp. 25/50 mg",
    "indication": [
      "Emergência hipertensiva (EV — alternativa à nicardipina)",
      "HTA crónica (oral — geralmente em associação)",
      "HTA na gravidez / eclampsia"
    ],
    "dose": [
      {
        "ind": "Hipertensão resistente (adjuvante) — EV lento",
        "val": "RN e 1 mês–11 anos: 100–500 mcg/kg; 12–17 anos: 5–10 mg",
        "max": "3 mg/kg/dia e 60 mg/dia (1 mês–11 anos)",
        "freq": "Repetir cada 4–6 h se necessário",
        "note": "BNFC 2020-21 (p. 123)."
      },
      {
        "ind": "Hipertensão resistente — perfusão EV contínua",
        "val": "RN e 1 mês–11 anos: 12,5–50 mcg/kg/h; 12–17 anos: 3–9 mg/h",
        "max": "RN 2 mg/kg/dia; 1 mês–11 anos 3 mg/kg/dia",
        "freq": "Contínua (via preferida em doentes cardíacos)",
        "note": "BNFC 2020-21 (p. 123). Atenção às unidades: mcg/kg/h."
      },
      {
        "ind": "Hipertensão resistente — oral",
        "val": "RN: 250–500 mcg/kg cada 8–12 h, até 2–3 mg/kg cada 8 h; 1 mês–11 anos: 250–500 mcg/kg cada 8–12 h, até 7,5 mg/kg/dia; 12–17 anos: 25 mg 2×/dia, até 50–100 mg 2×/dia",
        "max": "200 mg/dia (1 mês–11 anos)",
        "freq": "2–3×/dia",
        "note": "BNFC 2020-21 (p. 123)."
      }
    ],
    "prep": "EV: administrar em SF APENAS (não em SG5% — hidrólise rápida com perda de 50% actividade em 2h). Bólus em 3–5 min; perfusão: 20 mg em 100 ml SF. Oral: comprimidos 25/50 mg — podem ser triturados. Instabilidade em SG5% é clinicamente relevante — preparar em SF imediatamente antes. Fonte: NHS Medusa 2024.",
    "ci": [
      "Lúpus eritematoso sistémico",
      "Taquicardia grave não controlada",
      "Insuf. coronária grave"
    ],
    "alert": [
      "⚠️ Taquicardia reflexa intensa — associar betabloqueante se tolerado",
      "⚠️ Síndrome lúpus-like em doses altas crónicas (> 200 mg/dia adulto)",
      "⚠️ Retenção hídrica — associar diurético",
      "Usado frequentemente em emergência obstétrica (HTA na gravidez)"
    ],
    "source": "BNFC 2020-21, Hydralazine hydrochloride (p. 123)",
    "review": ["A ficha anterior indicava perfusão de 0,1–0,5 mg/kg/h, cerca de 10 vezes acima do BNFC 2020-21 (12,5–50 mcg/kg/h). Corrigido."]
  
  },
  {
    "id": "espironolactona",
    "name": "Espironolactona",
    "category": "diuretico",
    "src": "original",
    "class": "Diurético poupador de K+ — antagonista aldosterona",
    "brands": "Aldactone comp. 25/50/100 mg; suspensão extemporânea 5 mg/ml",
    "indication": [
      "ICC — redução mortalidade (poupador K+)",
      "Hiperaldosteronismo primário",
      "Hipertensão arterial (adjuvante)",
      "Ascite cirrótica",
      "Hiperplasia supra-renal congénita (adjuvante)"
    ],
    "dose": [
      {
        "ind": "Edema (ICC, ascite, síndrome nefrótico) e hipocaliemia induzida por diuréticos ou anfotericina — oral",
        "val": "RN: 1–2 mg/kg/dia em 1–2 doses; 1 mês–11 anos: inicial 1–3 mg/kg/dia em 1–2 doses; 12–17 anos: 50–100 mg/dia em 1–2 doses",
        "max": "Ascite resistente: RN 7 mg/kg/dia; 1 mês–17 anos 9 mg/kg/dia; 12–17 anos máx. 400 mg/dia",
        "freq": "1–2×/dia",
        "note": "BNFC 2020-21 (p. 133). Razão espironolactona:furosemida habitualmente 100:40 (Formulário)."
      }
    ],
    "prep": "Oral: suspensão extemporânea 5 mg/ml (estável 28 dias refrigerada). Comprimidos 25/50/100 mg — triturar. Tomar COM alimentos (aumenta absorção 50%).",
    "ci": [
      "Hipercaliemia",
      "Insuf. renal grave (TFG < 30)",
      "Doença de Addison"
    ],
    "alert": [
      "⚠️ HIPERCALIEMIA — risco major com IECAs/ARAs, poupadores K+, insuf. renal",
      "⚠️ Monitorizar K+ sérico e creatinina no início e após ajustes",
      "⚠️ Ginecomastia em adolescentes do sexo masculino (efeito anti-androgénico)",
      "Efeito diurético lento (2–3 dias para início) — não é diurético de emergência"
    ],
    "source": "BNFC 2020-21, Spironolactone (p. 133); Formulário de Pediatria 3ª Ed.",
    "review": ["A ficha anterior limitava a 100 mg/dia; o BNFC 2020-21 admite até 9 mg/kg/dia na ascite resistente (máx. 400 mg/dia em 12–17 anos)."]
  
  },
  {
    "id": "enoxaparina",
    "name": "Enoxaparina (HBPM)",
    "category": "hemostase",
    "src": "added",
    "class": "Heparina de baixo peso molecular — inibidor factor Xa (anti-Xa)",
    "brands": "Clexane 20/40/60/80/100 mg seringa pré-cheia SC",
    "indication": [
      "Trombose venosa profunda / tromboembolismo pulmonar — tratamento",
      "Profilaxia TVP em doentes de alto risco",
      "Síndrome coronário agudo (adolescente)",
      "Anticoagulação em doentes pediátricos (alternativa à HNF)"
    ],
    "dose": [
      {
        "ind": "Tratamento de tromboembolismo — SC",
        "val": "RN: 1,5–2 mg/kg 2×/dia; 1 mês: 1,5 mg/kg 2×/dia; 2 meses–17 anos: 1 mg/kg 2×/dia",
        "max": "—",
        "freq": "Cada 12 h",
        "note": "BNFC 2020-21 (p. 101). Alvo anti-Xa 0,5–1 UI/mL, 4 h após a dose (Monagle, CHEST 2018). 1 mg = 100 UI."
      },
      {
        "ind": "Profilaxia de tromboembolismo — SC",
        "val": "RN e 1 mês: 750 mcg/kg 2×/dia; 2 meses–17 anos: 500 mcg/kg 2×/dia",
        "max": "40 mg/dia (2 meses–17 anos)",
        "freq": "Cada 12 h",
        "note": "BNFC 2020-21 (p. 101). Alvo anti-Xa 0,2–0,4 UI/mL."
      },
      {
        "ind": "Tromboembolismo na gravidez — 12–17 anos",
        "val": "< 50 kg: 40 mg; 50–69 kg: 60 mg; 70–89 kg: 80 mg; ≥ 90 kg: 100 mg",
        "max": "—",
        "freq": "2×/dia, pelo peso no início da gravidez",
        "note": "BNFC 2020-21 (p. 101)."
      }
    ],
    "prep": "SC: injecção na prega abdominal (perpendicularmente, sem expulsar bolha de ar antes da injecção — perda de dose). NÃO massajar após injecção. NÃO administrar IM. EV (trombólise/circulação extracorporal): ver protocolo específico.",
    "ci": [
      "Hemorragia activa major",
      "Trombocitopenia induzida por heparina (HIT)",
      "Insuf. renal grave (TFG < 30 — usar HNF)"
    ],
    "alert": [
      "⚠️ Monitorizar anti-Xa pediátrico (necessidades muito variáveis)",
      "⚠️ HIT (raro com HBPM mas possível) — monitorizar plaquetas",
      "⚠️ Hemorragia — antídoto parcial: protamina 1 mg por 1 mg enoxaparina (neutraliza ~60%)",
      "⚠️ Insuf. renal: ajustar dose ou usar HNF",
      "Dose pediátrica MG superior à adulto — crianças têm volume distribuição maior"
    ],
    "source": "BNFC 2020-21, Enoxaparin sodium (p. 101); Monagle P. CHEST 2018 (alvos anti-Xa)",
    "review": ["A ficha anterior tinha a profilaxia a 0,5 mg/kg 1×/dia; o BNFC 2020-21 indica 2×/dia (máx. 40 mg/dia). Corrigido."]
  
  },
  {
    "id": "carvedilol",
    "name": "Carvedilol",
    "category": "cardiovascular",
    "class": "Beta-bloqueante não selectivo + alfa-1 bloqueante",
    "brands": "Eucardic; Carvedilol Generis — comp 3,125/6,25/12,5/25 mg",
    "indication": [
      "Insuficiência cardíaca sistólica pediátrica — adjuvante ao IECA",
      "Miocardiopatia dilatada (incluindo formas familiares e pós-miocardite)",
      "Insuficiência cardíaca pós-cirurgia cardíaca congenita",
      "Hipertensão (2ª linha em criança)"
    ],
    "dose": [
      {
        "ind": "Insuficiência cardíaca (adjuvante; informação limitada) — 2–17 anos",
        "val": "50 mcg/kg 2×/dia (máx. 3,125 mg/dose) ≥ 2 semanas; depois 100 mcg/kg 2×/dia ≥ 2 semanas; depois 200 mcg/kg 2×/dia; se necessário até 350 mcg/kg 2×/dia",
        "max": "25 mg/dose",
        "freq": "2×/dia",
        "note": "BNFC 2020-21 (p. 132). O ensaio PRCCTFHF não mostrou diferença significativa vs placebo: evidência mais fraca que em adultos."
      }
    ],
    "prep": "Oral: comprimidos 3,125/6,25/12,5/25 mg — podem ser esmagados e dissolvidos em 5 ml água. Solução extemporânea 1,25 mg/ml. Tomar COM alimentos (reduz hipotensão ortostática, melhora absorção).",
    "ci": [
      "Asma brônquica / broncoespasmo significativo",
      "Bradicardia < 60 bpm",
      "Bloqueio AV 2º/3º grau",
      "Choque cardiogénico descompensado"
    ],
    "alert": [
      "⚠️ Iniciar apenas com doente estável, euvolémico — não iniciar em descompensação aguda",
      "⚠️ Retirada abrupta pode precipitar crise hiperadrenérgica — reduzir progressivamente",
      "⚠️ Hipoglicemia mascarada em diabéticos (bloqueia taquicardia reflexa)",
      "Bradicardia e hipotensão são sinais de dose excessiva — monitorizar FC e TA",
      "Evidência pediátrica limitada — baseada principalmente em extrapolação de adultos (COPERNICUS, MERIT-HF)"
    ],
    "source": "BNFC 2020-21, Carvedilol (p. 132); Shaddy RE et al. JAMA 2007 (PRCCTFHF)",
    "review": ["A ficha anterior indicava alvo de 0,4–0,8 mg/kg/dose (máx. 25–50 mg), acima do BNFC 2020-21 (máx. 350 mcg/kg/dose, 25 mg/dose). Corrigido."]
  
  },
  {
    "id": "diltiazem",
    "name": "Diltiazem",
    "category": "cardiovascular",
    "class": "Bloqueador dos canais de cálcio — benzotiazepina",
    "brands": "Tildiem; Dilzem — comp 60/90/120 mg; EV 25 mg/5 ml",
    "indication": [
      "Controlo de frequência em flutter/fibrilhação auricular",
      "Taquicardia supraventricular paroxística — 2ª linha após adenosina",
      "Angina vasospástica (Prinzmetal)",
      "Hipertensão (2ª linha em criança)"
    ],
    "dose": [
      {
        "ind": "Controlo da frequência em FA/flutter — EV (dose não verificada)",
        "val": "0,25 mg/kg EV em 2 min",
        "max": "25 mg",
        "freq": "Bólus; pode repetir 0,35 mg/kg (máx. 25 mg) após 15 min; depois perfusão 5–15 mg/h",
        "note": "Dose EV NÃO consta do BNFC 2020-21 nem do Shann. Origem da ficha original sem fonte verificada — confirmar antes de usar."
      },
      {
        "ind": "Via oral",
        "val": "1 mg/kg 8/8 h, aumentar se necessário até 3 mg/kg 8/8 h",
        "max": "—",
        "freq": "8/8 h (formulação regular)",
        "note": "Shann, Drug Doses (entrada Diltiazem). BNFC 2020-21: só indica diltiazem oral no síndrome de Raynaud, 12–17 anos, 30–60 mg 2–3×/dia (p. 152)."
      }
    ],
    "prep": "EV: diluir em SF ou SG5% para 1 mg/ml. Bólus em 2 min. Perfusão: 125 mg em 100 ml SG5% (1,25 mg/ml). Oral: comprimidos 60/90/120 mg; cápsulas LP. Tomar com ou sem alimentos.",
    "ci": [
      "Disfunção sistólica grave / insuficiência cardíaca descompensada",
      "Bloqueio AV 2º/3º grau sem pacemaker",
      "Síndrome WPW com FA (risco de condução rápida pela via acessória)",
      "Hipotensão grave (< 90 mmHg sistólica)"
    ],
    "alert": [
      "⚠️ Inotrópico negativo — evitar em disfunção sistólica significativa (FE < 35%)",
      "⚠️ Inibidor CYP3A4 — aumenta níveis de ciclosporina, tacrolímus, estatinas, midazolam",
      "⚠️ Associação com beta-bloqueante aumenta risco de bloqueio AV e bradicardia grave",
      "Hipotensão com administração EV rápida — monitorizar TA durante bólus"
    ],
    "source": "BNF for Children 2020-21, Diltiazem (p. 152); Shann F. Drug Doses (via oral)",
    "review": ["A dose EV (0,25 mg/kg) não tem suporte nas fontes disponíveis (BNFC 2020-21 e Shann). Verificar em fonte primária antes de usar."]
  
  },
  {
    "id": "flecainida",
    "name": "Flecainida",
    "category": "cardiovascular",
    "class": "Antiarrítmico classe IC (bloqueador canais de sódio)",
    "brands": "Tambocor — comp 50/100/150 mg; EV 10 mg/ml (15 ml)",
    "indication": [
      "Taquicardia supraventricular paroxística refractária — crianças",
      "Taquicardia ventricular idiopática em coração estruturalmente normal",
      "Síndrome WPW — prevenir recorrências (evitar em disfunção sistólica)",
      "Taquicardia auricular ectópica"
    ],
    "dose": [
      {
        "ind": "TSV por reentrada resistente, ectopia ventricular, TV, vias acessórias, FA paroxística — oral (não licenciado < 12 anos)",
        "val": "RN e 1 mês–11 anos: 2 mg/kg 2–3×/dia; 12–17 anos: inicial 50–100 mg 2×/dia, até 300 mg/dia",
        "max": "8 mg/kg/dia e 300 mg/dia (1 mês–11 anos); 400 mg/dia em arritmia ventricular com constituição robusta",
        "freq": "2–3×/dia; ajustar pela resposta e pelo nível plasmático",
        "note": "BNFC 2020-21 (p. 82). Reduzir a dose para metade se associada a amiodarona. Nível-alvo 0,2–1 mg/L."
      },
      {
        "ind": "TSV aguda — EV (não consta do BNFC)",
        "val": "1–2 mg/kg EV em 10 min",
        "max": "150 mg",
        "freq": "Dose única; repetir apenas se necessário com intervalo ≥ 1 h",
        "note": "Monitorização ECG contínua obrigatória."
      }
    ],
    "prep": "EV: diluir em SG5% para 1–2 mg/ml. Administrar em 10–30 min (monitorização ECG contínua durante infusão). Oral: comprimidos 50/100 mg; solução oral 5 mg/ml (extemporânea, estável 14 dias). Tomar com ou sem alimentos. Fonte: SmPC Tambocor.",
    "ci": [
      "Disfunção sistólica / insuficiência cardíaca (efeito inotrópico negativo significativo)",
      "Bloqueio de ramo (alarga QRS — efeito proarrítmico)",
      "Doença coronária / cardiopatia isquémica (CAST trial — aumento de mortalidade)",
      "Hipocaliemia não corrigida"
    ],
    "alert": [
      "⚠️ Pró-arrítmico — pode precipitar TV/FV em doentes com cardiopatia estrutural",
      "⚠️ Alarga intervalo PR e QRS — monitorizar ECG; suspender se QRS aumentar > 25%",
      "⚠️ Metabolismo CYP2D6 — polimorfismo genético causa variabilidade PK; metabolizadores lentos têm níveis muito mais altos",
      "Monitorização de níveis séricos recomendada (alvo 0,2–1 mg/L)",
      "Inibidores CYP2D6 (fluoxetina, paroxetina) aumentam os níveis de flecainida"
    ],
    "source": "BNFC 2020-21, Flecainide acetate (p. 82); Perry JC et al. J Cardiovasc Electrophysiol 1996; PACES/HRS Expert Consensus 2014",
    "review": ["O BNFC 2020-21 só inclui flecainida oral; a dose EV de 1–2 mg/kg não está verificada nesta edição: confirmar em protocolo.", "A ficha anterior tinha a dose oral em 2–3 mg/kg/dia; o BNFC indica 2 mg/kg por toma, 2–3×/dia. Corrigido."]
  
  },
  {
    "id": "milrinona",
    "name": "Milrinona",
    "category": "cardiovascular",
    "class": "Inodilatador — inibidor fosfodiesterase III",
    "brands": "Primacor; Milrinona Orion — ampolas 10 mg/10 ml (1 mg/ml)",
    "indication": [
      "Síndrome de baixo débito cardíaco pós-cirurgia cardíaca congenita — 1ª linha",
      "Insuficiência cardíaca aguda descompensada com resistências vasculares elevadas",
      "Hipertensão pulmonar com disfunção do VD",
      "Choque cardiogénico — quando inotrópicos adrenérgicos insuficientes ou contraindicados"
    ],
    "dose": [
      {
        "ind": "Insuficiência cardíaca, baixo débito pós-cirurgia cardíaca, choque (RN e criança)",
        "val": "Carga 50–75 mcg/kg em 30–60 min (reduzir ou omitir se risco de hipotensão); depois perfusão 0,5–0,75 mcg/kg/min (30–45 mcg/kg/h) durante 2–3 dias",
        "max": "—",
        "freq": "Perfusão contínua; tipicamente 12 h após cirurgia cardíaca",
        "note": "BNFC 2020-21, Milrinone (p. 134). A ficha anterior indicava 0,25–0,75 mcg/kg/min e máx. 1 mcg/kg/min: o limite inferior e o máximo não constam do BNFC."
      }
    ],
    "prep": "Perfusão: diluir em SF, SG5% ou SRL. Concentração habitual: 200 μg/ml (20 mg em 100 ml). Cálculo: dose (μg/kg/min) × peso (kg) × 60 / concentração (μg/ml) = ml/h. Linha dedicada; proteger da luz.",
    "ci": [
      "Estenose aórtica ou pulmonar grave (obstrução fixa — vasodilatação perigosa)",
      "Hipovolemia não corrigida (vasodilatação agrava hipotensão)",
      "Cardiomiopatia hipertrófica obstrutiva"
    ],
    "alert": [
      "⚠️ Hipotensão — principal efeito adverso; necessita frequentemente de associar noradrenalina ou vasopressina",
      "⚠️ Acumulação em insuficiência renal — milrinona excreção renal 80%; ajustar dose",
      "⚠️ Dose de carga aumenta risco de hipotensão — omitir em doentes hipotensos",
      "Taquicardia reflexa frequente — monitorizar FC",
      "Sem taquifilaxia ao contrário das catecolaminas — vantagem em uso prolongado",
      "Monitorizar K⁺ (hipocaliemia agrava arritmias)"
    ],
    "source": "BNF for Children 2020-21, Milrinone (p. 134)"
  },
  {
    "id": "nifedipina",
    "name": "Nifedipina",
    "category": "cardiovascular",
    "class": "Bloqueador dos canais de cálcio — diidropiridina",
    "brands": "Adalat — caps 5/10 mg; comp LP 20/30/60 mg",
    "indication": [
      "Crise hipertensiva — urgência (não emergência)",
      "Hipertensão crónica pediátrica",
      "Fenómeno de Raynaud grave",
      "Hipertensão pulmonar (feito de cálcio responsivos — teste vasodilatador)",
      "Espasmo esofágico"
    ],
    "dose": [
      {
        "ind": "Crise hipertensiva / angina aguda na doença de Kawasaki — oral, libertação imediata",
        "val": "250–500 mcg/kg",
        "max": "10 mg/dose",
        "freq": "Repetir uma vez se necessário",
        "note": "BNFC 2020-21 (p. 115). Pode causar descida imprevisível e grave da PA: monitorizar de perto; se ineficaz, considerar alternativa."
      },
      {
        "ind": "Hipertensão — oral, libertação imediata",
        "val": "1 mês–11 anos: 200–300 mcg/kg 3×/dia; 12–17 anos: 5–20 mg 3×/dia",
        "max": "3 mg/kg/dia e 90 mg/dia",
        "freq": "Frequência depende da preparação",
        "note": "BNFC 2020-21 (p. 115). Formulações de libertação prolongada: seguir o RCM."
      },
      {
        "ind": "Fenómeno de Raynaud — oral, 2–17 anos",
        "val": "2,5–10 mg 2–4×/dia",
        "max": "—",
        "freq": "Iniciar com doses baixas à noite",
        "note": "BNFC 2020-21 (p. 115)."
      },
      {
        "ind": "Hipoglicemia hiperinsulinémica persistente — RN",
        "val": "100–200 mcg/kg 4×/dia",
        "max": "600 mcg/kg/dose",
        "freq": "4×/dia",
        "note": "BNFC 2020-21 (p. 115)."
      }
    ],
    "prep": "Oral: cápsulas — perfurar e extrair conteúdo para administração oral (NÃO sublingual — queda TA imprevisível). Comprimidos LP — engolir inteiros, NÃO triturar. Solução extemporânea 1 mg/ml (estável 7 dias refrigerada).",
    "ci": [
      "Choque cardiogénico",
      "Insuficiência cardíaca descompensada",
      "Estenose aórtica grave",
      "Angina instável (formulação de libertação rápida)"
    ],
    "alert": [
      "⚠️ Queda de TA rápida e imprevisível com formulação rápida (cápsulas) — risco de hipoperfusão orgânica; preferir formulações LP ou outros agentes EV em emergência hipertensiva",
      "⚠️ Taquicardia reflexa — pode precipitar angina em doentes com coronariopatia",
      "Edema periférico frequente (vasodilatação capilar)",
      "Inibidor CYP3A4 — aumenta níveis de ciclosporina, tacrolímus"
    ],
    "source": "BNFC 2020-21, Nifedipine (p. 115)",
    "review": ["A via sublingual constava da ficha anterior e não consta do BNFC 2020-21 (oral): removida. Máximo diário passou de 120 para 90 mg."]
  
  },
  {
    "id": "bosentano",
    "name": "Bosentano",
    "category": "cardiovascular",
    "class": "Antagonista duplo dos receptores da endotelina (ERA) — ETA e ETB",
    "brands": "Tracleer — comp 62,5/125 mg; comp dispersíveis 32 mg (pediátrico)",
    "indication": [
      "Hipertensão arterial pulmonar (HAP) — classe funcional II-III OMS",
      "HAP idiopática / hereditária",
      "HAP associada a cardiopatia congenita (pós-reparação)",
      "HAP associada a doenças do tecido conjuntivo"
    ],
    "dose": [
      {
        "ind": "HAP — oral, 2–17 anos, 10–20 kg",
        "val": "Inicial 31,25 mg 1×/dia durante 4 semanas; depois 31,25 mg 2×/dia",
        "max": "—",
        "freq": "Ver esquema",
        "note": "BNFC 2020-21 (p. 124). Iniciar sob supervisão especializada. Controlo mensal das transaminases."
      },
      {
        "ind": "HAP — oral, 2–17 anos, 20–40 kg",
        "val": "Inicial 31,25 mg 2×/dia durante 4 semanas; depois 62,5 mg 2×/dia",
        "max": "—",
        "freq": "2×/dia",
        "note": "BNFC 2020-21 (p. 124)."
      },
      {
        "ind": "HAP — oral, 12–17 anos, ≥ 40 kg",
        "val": "Inicial 62,5 mg 2×/dia durante 4 semanas; depois 125 mg 2×/dia",
        "max": "250 mg/dose",
        "freq": "2×/dia",
        "note": "BNFC 2020-21 (p. 124)."
      }
    ],
    "prep": "Oral: comprimidos dispersíveis 32 mg — dissolver em 5 ml água; comprimidos 62,5/125 mg — podem ser partidos mas não triturados. Tomar com ou sem alimentos. Manipulação com cuidado — pó potencialmente teratogénico. Fonte: SmPC Tracleer.",
    "ci": [
      "Gravidez (teratogénico — categoria X)",
      "Insuficiência hepática moderada a grave (AST/ALT > 3× LSN)",
      "Uso concomitante com ciclosporina A (interacção major — aumento 50× dos níveis de bosentano)",
      "Uso com gliburida (hepatotoxicidade aumentada)"
    ],
    "alert": [
      "⚠️ Hepatotoxicidade — monitorizar TGO/TGP mensalmente (primeiros 12 meses) e bimestralmente depois; suspender se > 3–5× LSN",
      "⚠️ Teratogénico — anticoncepção obrigatória em adolescentes do sexo feminino",
      "⚠️ Indutor CYP3A4 e CYP2C9 — reduz níveis de varfarina, estatinas, ciclosporina, contraceptivos orais",
      "Retenção de fluidos / edema — monitorizar peso",
      "Anemia — monitorizar hemograma (reduz hematócrito ~1 g/dl)",
      "Programa de monitorização especial obrigatório (REMS)"
    ],
    "source": "BNFC 2020-21, Bosentan (p. 124); Beghetti M et al. Eur Heart J 2009; ESC/ERS PAH Guidelines 2022",
    "review": ["A ficha anterior omitia a fase inicial de 4 semanas; o BNFC 2020-21 inicia com metade da dose de manutenção."]
  
  },
  {
    "id": "fentolamina",
    "name": "Fentolamina",
    "category": "cardiovascular",
    "class": "Alfa-bloqueante não selectivo competitivo (α1 e α2)",
    "brands": "Rogitine — ampolas 10 mg/ml",
    "indication": [
      "Crise hipertensiva por excesso catecolaminas (feocromocitoma, tyramine cheese effect com IMAOs, abstinência clonidina)",
      "Extravasamento de catecolaminas vasopressoras (noradrenalina, dopamina, adrenalina) — injecção local subcutânea",
      "Hipertensão grave peri-operatória no feocromocitoma",
      "Descarga autonómica em lesão medular alta (disreflexia autonómica)"
    ],
    "dose": [
      {
        "ind": "Crise hipertensiva EV",
        "val": "0,05–0,1 mg/kg/dose EV",
        "max": "5 mg/dose",
        "freq": "Bólus EV; repetir q5 min se necessário; ou perfusão 5–50 μg/kg/min",
        "note": "Início de acção: 1–2 min. Duração: 15–30 min"
      },
      {
        "ind": "Extravasamento de vasopressores (antídoto local)",
        "val": "0,1–0,2 mg/kg SC local (max 5–10 mg diluídos em 10 ml SF)",
        "max": "10 mg total",
        "freq": "Dose única; injectar em leque na área de extravasamento",
        "note": "Administrar idealmente < 12h após extravasamento. Eficácia comprovada para noradrenalina, dopamina, adrenalina"
      }
    ],
    "prep": "EV bólus: 1–5 mg em 5–10 ml SF. Perfusão: 50 mg em 250 ml SF (200 μg/ml). Antídoto extravasamento: diluir 5–10 mg em 10 ml SF — injectar em leque SC na área de extravasamento com agulha 25G.",
    "ci": [
      "Hipotensão",
      "Infarto agudo do miocárdio recente",
      "Angina instável"
    ],
    "alert": [
      "⚠️ Hipotensão grave — ter vasopressor disponível; noradrenalina é antídoto da hipotensão (NÃO adrenalina — componente beta provoca hipotensão paradoxal)",
      "⚠️ Taquicardia reflexa marcada — monitorizar FC",
      "Para extravasamento: injectar perilesionalmente com agulha fina (25G), múltiplos pontos de injecção",
      "Efeito hipoglicemiante (estimula libertação de insulina) — monitorizar glicemia"
    ],
    "source": "Reynolds PM et al. Ann Pharmacother 2014 (extravasation); Pacak K NEJM 2007",
    "review": ["Sem monografia no BNFC 2020-21; citação «BNF for Children 2023-24» removida por não ser verificável. Shann: perfusão 5–50 mcg/kg/min EV (15 mg/kg em 50 ml a 1–10 ml/h). Bólus 0,05–0,1 mg/kg e dose SC no extravasamento por confirmar."]

  },
  {
    "id": "nitroprussiato",
    "name": "Nitroprussiato de Sódio",
    "category": "cardiovascular",
    "class": "Vasodilatador directo — dador de NO (arteriolar e venoso)",
    "brands": "Nipride; Nitroprussiat Braun — ampolas 50 mg pó liofilizado",
    "indication": [
      "Emergência hipertensiva — crise hipertensiva com lesão de órgão alvo",
      "Insuficiência cardíaca aguda grave com resistências vasculares muito elevadas",
      "Dissecção aórtica — controlo urgente de TA (em combinação com esmolol/labetalol)",
      "Hipertensão grave intra-operatória e pós-operatória",
      "Redução de pós-carga em choque cardiogénico refractário"
    ],
    "dose": [
      {
        "ind": "Emergência hipertensiva — perfusão EV contínua (RN e criança)",
        "val": "Inicial 0,5 mcg/kg/min; aumentar de 0,2 em 0,2 mcg/kg/min conforme resposta",
        "max": "8 mcg/kg/min; máx. 4 mcg/kg/min se > 24 h",
        "freq": "Perfusão contínua",
        "note": "BNFC 2020-21 (p. 124). Proteger da luz. Risco de toxicidade por cianeto/tiocianato: vigorar lactato, gasimetria e PA invasiva; considerar tiossulfato de sódio em perfusões prolongadas."
      }
    ],
    "prep": "Perfusão: reconstituir 50 mg em 2–3 ml SWFI; diluir em SG5% (nunca SF ou RL). Concentração 200–400 μg/ml. PROTEGER DA LUZ (papel de alumínio) — degrada rapidamente. Preparar fresco a cada 24h.",
    "ci": [
      "Hipertensão intracraniana (vasodilatação cerebral agrava PIC)",
      "Insuficiência hepática grave (metabolismo do cianeto)",
      "Deficiência de vitamina B12 (potencia toxicidade por cianeto)",
      "Atrofia óptica de Leber"
    ],
    "alert": [
      "⚠️ TOXICIDADE POR CIANETO — principal risco: doses altas (> 4 μg/kg/min), IR, uso prolongado > 72h. Sinais: acidose láctica, taquicardia, confusão, taquifilaxia ao efeito hipotensor",
      "⚠️ Antídoto da toxicidade por cianeto: hidroxicobalamina 70 mg/kg EV (preferido em criança)",
      "⚠️ Fotodegradação rápida — proteger SEMPRE da luz",
      "⚠️ Hipotensão grave com titulação agressiva — monitorização invasiva de TA recomendada",
      "Tiocinato acumula em IR (metabolito do cianeto) — nefrotóxico; monitorizar nível tiocinato se tratamento prolongado",
      "Alternativas com melhor perfil de segurança disponíveis: nicardipina, labetalol, clevidipina"
    ],
    "source": "BNFC 2020-21, Sodium nitroprusside (p. 124); Flynn JT et al. Pediatrics 2017",
    "review": ["A ficha anterior indicava 0,5–8 mcg/kg/min com máximo de 10; o BNFC 2020-21 limita a 8 mcg/kg/min (4 se > 24 h)."]
  
  },
  {
    "id": "atenolol",
    "name": "Atenolol",
    "category": "cardiovascular",
    "class": "Beta-1 bloqueante selectivo (cardioselectivo)",
    "brands": "Tenormin; Atenolol Generis — comp 25/50/100 mg; susp magistral 2 mg/ml",
    "indication": [
      "Hipertensão pediátrica — 1ª linha quando beta-bloqueante indicado",
      "Taquiarritmias supraventriculares — controlo crónico de frequência",
      "Síndrome de Marfan — retardar dilatação aórtica",
      "Tireotoxicose — controlo sintomático de taquicardia",
      "Enxaqueca — profilaxia"
    ],
    "dose": [
      {
        "ind": "Hipertensão — oral",
        "val": "RN e 1 mês–11 anos: 0,5–2 mg/kg 1×/dia; 12–17 anos: 25–50 mg 1×/dia",
        "max": "Doses > 50 mg/dia raramente necessárias",
        "freq": "1×/dia, pode dividir em 2 tomas",
        "note": "BNFC 2020-21 (p. 112)."
      },
      {
        "ind": "Arritmias — oral",
        "val": "RN e 1 mês–11 anos: 0,5–2 mg/kg 1×/dia; 12–17 anos: 50–100 mg 1×/dia",
        "max": "100 mg/dia (1 mês–11 anos)",
        "freq": "1×/dia, pode dividir em 2 tomas",
        "note": "BNFC 2020-21 (p. 112)."
      },
      {
        "ind": "Síndrome de Marfan (não consta do BNFC)",
        "val": "0,5–2 mg/kg/dia",
        "max": "100 mg/dia",
        "freq": "1–2 doses/dia",
        "note": "Reduz a taxa de dilatação da raiz aórtica (Shores et al. NEJM 1994). Evidência crescente para o losartan como alternativa ou associação."
      }
    ],
    "prep": "Oral: comprimidos 25/50/100 mg — podem ser esmagados. Suspensão magistral 2 mg/ml estável 14 dias (refrigerada). Tomar com ou sem alimentos.",
    "ci": [
      "Asma brônquica / broncoespasmo (menos selectividade em doses altas)",
      "Bradicardia sinusal grave (FC < 60 bpm)",
      "Bloqueio AV 2º/3º grau",
      "Choque cardiogénico"
    ],
    "alert": [
      "⚠️ Retirada abrupta pode precipitar síndrome de abstinência (hipertensão de rebote, angina) — reduzir progressivamente ao longo de 1–2 semanas",
      "⚠️ Mascara sintomas de hipoglicemia em diabéticos insulinodependentes",
      "Excreção renal predominante — ajustar dose se TFG < 35 ml/min",
      "Cardioselectividade diminui com doses altas — cautela em asmáticos mesmo com doses habituais"
    ],
    "source": "BNFC 2020-21, Atenolol (p. 112); Shores J et al. N Engl J Med 1994",
    "review": ["A indicação Síndrome de Marfan não consta do BNFC 2020-21: fundamentada em Shores et al."]
  
  },
  {
    "id": "sildenafil_cardio",
    "name": "Sildenafil (Hipertensão Pulmonar)",
    "category": "cardiovascular",
    "class": "Inibidor fosfodiesterase tipo 5 (PDE5i)",
    "brands": "Revatio — comp 20 mg; pó susp 10 mg/ml; EV 0,8 mg/ml",
    "indication": [
      "Hipertensão arterial pulmonar (HAP) — tratamento específico",
      "HAP persistente do recém-nascido (PPHN) — alternativa/complemento ao iNO",
      "Desmame do óxido nítrico inalado (prevenir efeito rebote)",
      "HAP pós-cirurgia cardíaca congenita",
      "Hipertensão arterial pulmonar (HAP) — pediátrica",
      "Desmame do iNO",
      "HPPRN (off-label — quando iNO não disponível)"
    ],
    "dose": [
      {
        "ind": "HAP — oral, RN e 1–11 meses",
        "val": "Inicial 250–500 mcg/kg a cada 4–8 h, ajustar à resposta; começar pela dose e frequência mais baixas, sobretudo se associado a outros vasodilatadores",
        "max": "30 mg/dia",
        "freq": "Cada 4–8 h",
        "note": "BNFC 2020-21 (p. 124)."
      },
      {
        "ind": "HAP — oral, 1–17 anos",
        "val": "< 20 kg: 10 mg 3×/dia; ≥ 20 kg: 20 mg 3×/dia",
        "max": "—",
        "freq": "3×/dia",
        "note": "BNFC 2020-21 (p. 124). Reduzir dose com inibidores moderados/potentes do CYP3A4; evitar com cetoconazol, itraconazol e ritonavir. Doses superiores não mostraram benefício adicional (STARTS-2)."
      }
    ],
    "prep": "EV: Revatio 0,8 mg/ml — usar sem diluição adicional. Administrar em 3h se dose alta; pode ser mais rápido para doses baixas. Oral: suspensão 10 mg/ml (Revatio) — agitar bem; estável 30 dias após abertura. Comprimidos 20 mg.",
    "ci": [
      "Uso concomitante com nitratos (hipotensão grave irreversível)",
      "Uso concomitante com guanilato ciclase estimuladores (riociguate)",
      "Hipotensão sistémica significativa (< 90 mmHg)",
      "Nitratos (hipotensão grave e potencialmente fatal)",
      "Inibidores potentes CYP3A4 (ritonavir)",
      "HAP associada a cardiopatia com shunt D→E significativo"
    ],
    "alert": [
      "⚠️ STARTS-2: doses altas (≥ 2,5 mg/kg/dose) associadas a MAIOR mortalidade — NÃO exceder dose aprovada",
      "⚠️ Hipotensão sistémica — risco aumentado se vasodilatação periférica concomitante",
      "⚠️ Interacção grave com nitratos e guanilato ciclase — hipotensão fatal",
      "Inibidor CYP3A4 e CYP2C9 — interacções com bosentano (reduz sildenafil 50%), eritromicina, azóis",
      "Retirada abrupta pode causar crise de HAP — desmame gradual obrigatório",
      "Priapismo (raro em criança do sexo masculino)",
      "⛔ EMA alerta 2014: doses altas (80 mg × 3/dia) associadas a ↑ mortalidade em crianças 1–17 anos — NÃO EXCEDER doses recomendadas",
      "⚠️ Visão turva (inibição PDE6 retiniana) — transitória",
      "⚠️ Priapismo (raro)"
    ],
    "source": "BNFC 2020-21, Sildenafil (p. 124); Barst RJ et al. Circulation 2012 (STARTS-1/2); ESC/ERS PAH Guidelines 2022",
    "review": ["As doses EV (0,25–1 mg/kg em 3 h) e de HPPRN oral (0,5–1 mg/kg/dose) da ficha anterior não constam do BNFC 2020-21: confirmar em protocolo local antes de usar.", "Doses por escalão de peso > 45 kg (40 mg 3×/dia) removidas: não constam do BNFC 2020-21."]
  
  },
  {
    "id": "warfarina",
    "name": "Varfarina Pediátrica",
    "category": "cardiovascular",
    "class": "Anticoagulante oral — antagonista vitamina K (inibidor VKORC1)",
    "brands": "Varfine; Coumadin — comp 1/3/5 mg",
    "indication": [
      "Anticoagulação crónica oral — trombose venosa profunda, tromboembolismo pulmonar",
      "Próteses valvulares cardíacas mecânicas",
      "Fibrilhação auricular com risco tromboembólico",
      "Doença de Kawasaki com aneurismas coronários gigantes"
    ],
    "dose": [
      {
        "ind": "Tratamento e profilaxia de tromboembolismo — indução, RN (sob supervisão especializada)",
        "val": "200 mcg/kg dose única no dia 1; depois 100 mcg/kg 1×/dia nos 3 dias seguintes; seguintes conforme INR",
        "max": "—",
        "freq": "1×/dia",
        "note": "BNFC 2020-21 (p. 102). Ajustar indução em disfunção hepática, insuficiência cardíaca, fármacos interagentes e INR basal > 1,3."
      },
      {
        "ind": "Tratamento e profilaxia de tromboembolismo — indução, criança",
        "val": "200 mcg/kg dose única no dia 1 (máx. 10 mg); depois 100 mcg/kg 1×/dia (máx. 5 mg) nos 3 dias seguintes; seguintes conforme INR",
        "max": "10 mg (dia 1); 5 mg (dias 2–4)",
        "freq": "1×/dia, à mesma hora",
        "note": "BNFC 2020-21 (p. 102). INR-alvo habitual 2–3 (2,5–3,5 em válvula mecânica mitral), segundo Monagle, CHEST 2012."
      }
    ],
    "prep": "Oral: comprimidos 0,5/1/3/5 mg — podem ser partidos mas não triturados. Solução magistral 1 mg/ml estável 14 dias. Tomar ao MESMO HORA diariamente (monitorização INR consistente). ⚠️ Dieta consistente em vitamina K.",
    "ci": [
      "Hemorragia activa",
      "Gravidez (teratogénico no 1º trimestre)",
      "HTA não controlada grave",
      "Cirurgia/procedimento iminente"
    ],
    "alert": [
      "⚠️ Janela terapêutica estreita — variabilidade enorme; monitorizar INR frequentemente",
      "⚠️ Interacções farmacológicas e alimentares vastíssimas — qualquer novo fármaco ou mudança de dieta pode alterar INR",
      "⚠️ Genética: polimorfismos VKORC1 e CYP2C9 afectam dose (testar em centres especializados)",
      "⚠️ Antídoto: vitamina K (lenta) ou CCP (rápida) se hemorragia grave",
      "Resistência em lactentes amamentados ao seio (vitamina K no leite materno baixa) vs fórmula",
      "Monitorizar INR em 3–5 dias após qualquer alteração de dose ou medicação"
    ],
    "source": "BNFC 2020-21, Warfarin sodium (p. 102); Monagle P et al. Chest 2012",
    "review": ["A ficha anterior tinha só a dose de indução 0,2 mg/kg; o BNFC 2020-21 acrescenta a redução para 100 mcg/kg nos dias 2–4 (máx. 5 mg)."]
  
  },
  {
    "id": "tolvaptan",
    "name": "Tolvaptã",
    "category": "cardiovascular",
    "class": "Antagonista receptor V2 da vasopressina (vaptã) — aquarético",
    "brands": "Samsca — comp 15/30/45/60/90 mg",
    "indication": [
      "Hiponatremia euvolémica ou hipervolémica sintomática refractária (SIADH, ICC, cirrose)",
      "Rins poliquísticos autossómicos dominantes (ADPKD) — retardar progressão (adultos/adolescentes)",
      "Hiponatremia grave persistente após restrição hídrica insuficiente"
    ],
    "dose": [
      {
        "ind": "SIADH / hiponatremia — pediátrico (off-label)",
        "val": "0,1–0,2 mg/kg/dose PO",
        "max": "30 mg/dose",
        "freq": "1 dose/dia; ajustar por Na⁺ sérico",
        "note": "Iniciar SEMPRE em internamento com monitorização de Na⁺ q4–6h nas primeiras 24h — risco de correcção excessiva e mielinólise"
      }
    ],
    "prep": "Oral: comprimidos 15/30/45/60/90 mg — engolir inteiros (não partir ou esmagar — formulação específica de libertação). Tomar com ou sem alimentos. ⚠️ INICIAR SEMPRE EM HOSPITAL — monitorização Na⁺ q4–6h nas primeiras 24h (risco correcção excessiva). Fonte: SmPC Samsca.",
    "ci": [
      "Hipovolemia (não é diurético de eliminação de sódio — eleva Na⁺ por eliminação de água livre)",
      "Anúria",
      "Incapacidade de sentir ou responder à sede",
      "Uso com inibidores CYP3A4 potentes (cetoconazol, itraconazol)"
    ],
    "alert": [
      "⚠️ INICIAR APENAS EM HOSPITAL — risco de correcção excessiva e rápida de Na⁺ → mielinólise osmótica",
      "⚠️ Monitorizar Na⁺ q4–6h nas primeiras 24h; suspender se Na⁺ subir > 10–12 mEq/L/24h",
      "⚠️ Hepatotoxicidade — monitorizar TFH mensalmente",
      "⚠️ Inibidor CYP3A4 — aumenta exposição de outros substratos",
      "Poliúria marcada — garantir acesso a água livre; risco de desidratação hipernatrémica"
    ],
    "source": "Verbalis JG et al. Am J Med 2013; Gheorghiade M et al. JAMA 2004",
    "review": ["Sem monografia no BNFC 2020-21; citação «BNF for Children 2023-24» removida por não ser verificável. Shann só refere dose de adulto (15 mg/dia, máx. 60 mg). Dose pediátrica da ficha por confirmar."]

  },
{
    "id": "lidocaina_cv",
    "name": "Lidocaína EV (Antiarrítmico crónico)",
    "category": "cardiovascular",
    "class": "Antiarrítmico classe IB — bloqueador canal sódio rápido",
    "brands": "Lidocaína 1% (10 mg/ml); 2% (20 mg/ml)",
    "indication": [
      "Taquicardia ventricular hemodinamicamente estável — manutenção após conversão",
      "Extrassistolia ventricular frequente sintomática pós-EAM",
      "Prevenção recorrência FV após ressuscitação bem sucedida"
    ],
    "dose": [
      {
        "ind": "Arritmias ventriculares — bólus EV/IO",
        "val": "0,5–1 mg/kg",
        "max": "3 mg/kg por ciclo",
        "freq": "Repetir com intervalo ≥ 5 min se perfusão não disponível",
        "note": "BNFC 2020-21 (p. 81), RN e 1 mês–11 anos."
      },
      {
        "ind": "Arritmias ventriculares — perfusão EV",
        "val": "0,6–3 mg/kg/h",
        "max": "3 mg/kg/h",
        "freq": "Contínua, logo após o bólus",
        "note": "BNFC 2020-21 (p. 81). Shann: 15–50 mcg/kg/min. Reduzir dose na insuficiência cardíaca e pós-cirurgia cardíaca."
      },
      {
        "ind": "12–17 anos",
        "val": "Inicial 50–100 mg EV; depois 120 mg em 30 min; 240 mg em 2 h; 60 mg/h",
        "max": "300 mg/h (bólus repetidos)",
        "freq": "Reduzir se perfusão > 24 h",
        "note": "BNFC 2020-21 (p. 81)."
      }
    ],
    "prep": "Bólus: usar lidocaína 1% (10 mg/ml) directamente, ou diluir 2% para 1:1 com SF. Perfusão: 600 mg em 250 ml SF (2,4 mg/ml) — taxa 0,5–4 ml/kg/h conforme dose. Periférico aceitável para bólus; central preferida para perfusão. Estabilidade: 24h a 25°C.",
    "ci": [
      "Bloqueio AV 2º/3º grau",
      "WPW com FA/flutter",
      "Hipersensibilidade a anestésicos locais tipo amida"
    ],
    "alert": [
      "⚠️ Toxicidade SNC: convulsões, disartria, obnubilação — reduzir dose ou parar",
      "⚠️ Acumulação em IH e IC — monitorizar nível sérico (alvo 1,5–5 mg/L)",
      "Janela terapêutica estreita — TDM em perfusões > 24h"
    ],
    "source": "BNFC 2020-21, Lidocaine (p. 81); Shann Drug Doses (Lignocaine)"
  },
  {
    "id": "sotalol",
    "name": "Sotalol",
    "category": "cardiovascular",
    "class": "Antiarrítmico classe III + beta-bloqueante (classe II) — bloqueador K⁺ e β",
    "brands": "Sotacor — comp 80/160 mg; EV 10 mg/ml (composto hospitalar raro)",
    "indication": [
      "Prevenção de TSV recorrente — flutter/FA, TSVP por reentrada",
      "Taquicardia ventricular sustentada — coração estruturalmente normal",
      "WPW com arritmias — alternativa à flecainida",
      "Síndrome QT longo tipo 2 e 3 — efeito anti-arrítmico"
    ],
    "dose": [
      {
        "ind": "Arritmias ventriculares e supraventriculares, flutter auricular — oral, RN",
        "val": "Inicial 1 mg/kg 2×/dia; aumentar se necessário até 4 mg/kg 2×/dia, a intervalos de 3–4 dias",
        "max": "—",
        "freq": "2×/dia",
        "note": "BNFC 2020-21 (p. 85). Iniciar sob supervisão especializada; ECG e QTc de controlo."
      },
      {
        "ind": "Arritmias ventriculares e supraventriculares, flutter auricular — oral, 1 mês–11 anos",
        "val": "Inicial 1 mg/kg 2×/dia; aumentar se necessário até 4 mg/kg 2×/dia, a intervalos de 2–3 dias",
        "max": "80 mg/dose (2×/dia)",
        "freq": "2×/dia",
        "note": "BNFC 2020-21 (p. 85). Não licenciado < 12 anos."
      },
      {
        "ind": "Arritmias — oral, 12–17 anos",
        "val": "Inicial 80 mg 1×/dia ou 40 mg 2×/dia; aumentar gradualmente para 80–160 mg 2×/dia, a intervalos de 2–3 dias",
        "max": "480–640 mg/dia em arritmia ventricular com risco de vida (supervisão especializada)",
        "freq": "2×/dia",
        "note": "BNFC 2020-21 (p. 85). Reduzir a dose para metade se TFG 30–60 e para um quarto se TFG 10–30 mL/min/1,73 m²; evitar se TFG < 10."
      }
    ],
    "prep": "Oral: comprimidos 40/80/160 mg — podem ser esmagados. Solução extemporânea 5 mg/ml. Tomar em JEJUM (antiácidos reduzem absorção 20%).",
    "ci": [
      "QTc > 450 ms basal",
      "Insuf. renal (TFG < 30 ml/min — acumulação)",
      "Asma / broncoespasmo",
      "Bradicardia sinusal",
      "Hipocaliemia / hipomagnesemia não corrigidas"
    ],
    "alert": [
      "⚠️ Pró-arrítmico — prolonga QT → torsades de pointes (2–5%); monitorizar ECG ao início e após cada aumento de dose",
      "⚠️ QTc basal > 450 ms: contra-indicado; > 500 ms durante tratamento: suspender",
      "⚠️ Hipocaliemia e hipomagnesemia ampliam o risco — corrigir antes de iniciar",
      "⚠️ Excreção renal — ajuste obrigatório se TFG < 60 ml/min",
      "Início hospitalar com monitorização ECG 72h recomendado (PACES/HRS 2014)"
    ],
    "source": "BNFC 2020-21, Sotalol hydrochloride (p. 85); PACES/HRS Expert Consensus 2014",
    "review": ["Corrigir hipocaliemia e hipomagnesemia antes e durante o tratamento; reduzir ou suspender se QTc > 550 ms (BNFC 2020-21).", "A ficha anterior indicava 2–8 mg/kg/dia com máximo de 160 mg/dose; o BNFC 2020-21 refere 1–4 mg/kg por toma, máx. 80 mg/dose até aos 11 anos."]
  
  },
  {
    "id": "amiodarona_oral",
    "name": "Amiodarona Oral",
    "category": "cardiovascular",
    "class": "Antiarrítmico classe III — inibidor canais K⁺, Na⁺, Ca²⁺ + beta-bloqueio",
    "brands": "Cordarone — comp 100/200 mg",
    "indication": [
      "Manutenção do ritmo sinusal após cardioversão de FA/flutter",
      "Prevenção de TSV/TV recorrentes refractárias a outros antiarrítmicos",
      "Taquicardia juncional pós-operatória — manutenção após controlo EV",
      "Step-down oral após amiodarona EV eficaz"
    ],
    "dose": [
      {
        "ind": "Arritmias supraventriculares e ventriculares — oral, RN",
        "val": "Inicial 5–10 mg/kg 2×/dia durante 7–10 dias; depois 5–10 mg/kg 1×/dia",
        "max": "—",
        "freq": "2×/dia na carga",
        "note": "BNFC 2020-21 (p. 83). Iniciar em hospital ou sob supervisão especializada."
      },
      {
        "ind": "Arritmias supraventriculares e ventriculares — oral, 1 mês–11 anos",
        "val": "Inicial 5–10 mg/kg 2×/dia durante 7–10 dias; depois 5–10 mg/kg 1×/dia",
        "max": "200 mg/dose na carga; 200 mg/dia na manutenção",
        "freq": "2×/dia na carga; 1×/dia na manutenção",
        "note": "BNFC 2020-21 (p. 83)."
      },
      {
        "ind": "Arritmias — oral, 12–17 anos",
        "val": "200 mg 3×/dia durante 1 semana; depois 200 mg 2×/dia durante 1 semana; depois habitualmente 200 mg/dia, ajustado à resposta",
        "max": "—",
        "freq": "—",
        "note": "BNFC 2020-21 (p. 83). Monitorizar função tiroideia, hepática e pulmonar."
      }
    ],
    "prep": "Oral: comprimidos 100/200 mg — tomar COM refeições (reduz intolerância GI). Podem ser triturados. Solução extemporânea 5 mg/ml para lactentes. ⚠️ Semi-vida 40–55 dias — carga obrigatória por 7–10 dias (efectivo em 1–3 semanas).",
    "ci": [
      "Disfunção tiroideia grave não tratada",
      "Iodo: hipersensibilidade",
      "Bloqueio AV 2º/3º grau",
      "Gravidez (toxicidade fetal — iodo atravessa placenta)"
    ],
    "alert": [
      "⚠️ Fototoxicidade — protecção solar obrigatória; microdepositos corneanos (assintomáticos)",
      "⚠️ Hipotiroidismo e hipertiroidismo — monitorizar TSH, T4L cada 6 meses",
      "⚠️ Pneumonite intersticial (raro mas grave) — Rx/TC tórax se dispneia nova",
      "⚠️ Hepatotoxicidade — TFH bimestrais",
      "⚠️ Interacções major: varfarina, digoxina, ciclosporina, estatinas, fenitoína — reduzir doses",
      "Semi-vida 40–55 dias — efeito e toxicidade persistem meses após suspensão"
    ],
    "source": "BNFC 2020-21, Amiodarone hydrochloride (p. 83); Saul JP et al. JACC 2005",
    "review": ["A ficha anterior tinha 10–20 mg/kg/dia na carga; o BNFC 2020-21 indica 5–10 mg/kg 2×/dia durante 7–10 dias (10–20 mg/kg/dia), com máximo de 200 mg/dose."]
  
  }
];

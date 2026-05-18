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
        "ind": "EV bólus",
        "val": "0,5–1 mg/kg/dose",
        "max": "6 mg/kg/dose; 40 mg/dose habitual",
        "freq": "cada 6–12h conforme resposta",
        "note": "RN prematuro: 0,5–1 mg/kg cada 24h"
      },
      {
        "ind": "Oral",
        "val": "1–3 mg/kg/dia",
        "max": "80 mg/dia",
        "freq": "1–2 doses/dia",
        "note": ""
      },
      {
        "ind": "Perfusão contínua UCIP",
        "val": "0,1–0,4 mg/kg/hora",
        "max": "—",
        "freq": "contínua (melhor eficácia e menor ototoxicidade vs bólus)",
        "note": ""
      }
    ],
    "prep": "EV: pode administrar não diluído (10 mg/ml) em bólus (≤ 4 mg/min — ototoxicidade) ou diluir em SF (pH alcalino — incompatível com soluções ácidas). Perfusão: 20–50 mg em 50 ml SF (0,4–1 mg/ml). ⚠️ NÃO misturar com milrinona, nicardipina, ciprofloxacina, mid. Oral: solução 4 mg/ml ou 10 mg/ml. Fonte: BNF for Children 2023-24; NHS Medusa 2024.",
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
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
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
        "ind": "Hemorragia major / trauma — EV",
        "val": "15 mg/kg EV em 10 min (carga)",
        "max": "1000 mg/dose",
        "freq": "seguido de 2 mg/kg/hora × 8h",
        "note": "⚠️ Administrar nas PRIMEIRAS 3 HORAS após traumatismo. Após 3h pode ser prejudicial (CRASH-2)"
      },
      {
        "ind": "Cirurgia cardíaca (profilaxia)",
        "val": "10 mg/kg EV pré-CEC + 10 mg/kg durante CEC",
        "max": "—",
        "freq": "per protocolo",
        "note": ""
      },
      {
        "ind": "Epistaxis / mucosas",
        "val": "15–25 mg/kg/dose oral",
        "max": "1500 mg/dose",
        "freq": "3 doses/dia × 5–7 dias",
        "note": "Ou tópico: gaze embebida em solução 5%"
      },
      {
        "ind": "Cirurgia cardíaca neonatal / hemorragia grave",
        "val": "10–15 mg/kg EV carga; depois 1–3 mg/kg/h perfusão",
        "max": "—",
        "freq": "Carga pré-incisão; perfusão durante cirurgia e 4–6h pós-op",
        "note": "Dados pediátricos extrapolados de estudos CRASH-2 e ensaios de cirurgia cardíaca pediátrica"
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
    "source": "CRASH-2 Collaborators. Lancet 2010;376:23–32; Roberts I et al. Lancet 2011; Eckert MJ et al. J Trauma 2014; BNF for Children 2023-24; Faraoni D et al. JTCVS 2014; CRASH-2 Collaborators Lancet 2010"
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
        "ind": "Anticoagulação terapêutica — EV",
        "val": "CARGA: 75 UI/kg em 10 min; MANUTENÇÃO: < 1 ano: 28 UI/kg/hora; 1–18 anos: 20 UI/kg/hora",
        "max": "—",
        "freq": "perfusão contínua; ajustar por APTT",
        "note": "Alvo APTT: 60–85 seg (anti-Xa 0,35–0,7 UI/ml preferida em RN)"
      },
      {
        "ind": "Permeabilidade linha arterial / CVC",
        "val": "0,5–1 UI/ml na solução de lavagem",
        "max": "—",
        "freq": "contínua",
        "note": ""
      },
      {
        "ind": "ECMO — dose inicial",
        "val": "50–100 UI/kg EV bólus → perfusão 20–60 UI/kg/hora",
        "max": "—",
        "freq": "titulado por ACT alvo 180–220 seg",
        "note": ""
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
    "source": "Formulário de Pediatria 3ª Ed.; Monagle P et al. CHEST Guidelines 2018; BNF for Children 2023-24"
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
        "ind": "Impregnação EV (dose total de digitalização)",
        "val": "RN prematuro: 20 mcg/kg; RN termo: 30 mcg/kg; 1 mês–2 anos: 35 mcg/kg; 2–10 anos: 25 mcg/kg; > 10 anos: 15 mcg/kg",
        "max": "1 mg total",
        "freq": "Dar metade da dose total, depois ¼ cada 8h × 2 doses. Monitorizar ECG",
        "note": ""
      },
      {
        "ind": "Manutenção oral/EV",
        "val": "RN: 5 mcg/kg/dia; < 2 anos: 10–12 mcg/kg/dia; > 2 anos: 8–10 mcg/kg/dia",
        "max": "250 mcg/dia",
        "freq": "2 doses/dia",
        "note": "Nível sérico terapêutico: 0,8–2 ng/ml (colher 6–8h após última dose)"
      }
    ],
    "prep": "EV: diluir ≥ 4× em SF ou SG5% para ≤ 50 μg/ml. Administrar em 30 min. Neonatos: preparar solução 10 μg/ml (diluições seriadas obrigatórias — verificar com farmácia). Oral: elixir pediátrico 50 μg/ml. Comprimidos 62,5/125 μg. Concentração máxima EV: 100 μg/ml (central apenas). Fonte: BNF for Children 2023-24; NHS Medusa 2024.",
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
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
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
        "ind": "Perfusão EV",
        "val": "Início 0,5–1 mcg/kg/min; titular cada 15–30 min",
        "max": "4–5 mcg/kg/min",
        "freq": "perfusão contínua",
        "note": "Adulto: 5 mg/hora → titular até 15 mg/hora"
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
    "source": "Flynn JT et al. Pediatrics 2017;140(3); BNF for Children 2023-24"
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
        "ind": "HTA / ICC — oral",
        "val": "INICIAL: 0,1–0,3 mg/kg/dose oral; MANUTENÇÃO: 0,5–2 mg/kg/dia",
        "max": "6 mg/kg/dia; 150 mg/dia",
        "freq": "3 doses/dia",
        "note": "RN: INICIAR com 0,01–0,05 mg/kg/dose (hipotensão grave — 1ª dose em contexto hospitalar)"
      }
    ],
    "prep": "Oral: comprimidos 12,5/25/50 mg — triturar e dissolver em 10 ml água. Solução extemporânea 1 mg/ml (estável em ácido cítrico 28 dias). Tomar em JEJUM (30 min antes refeição — alimentos reduzem absorção 30–40%). ⚠️ Hipotensão na 1ª dose — iniciar deitado, monitorizar TA 1h. Fonte: BNF for Children 2023-24.",
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
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
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
        "ind": "ICC / HTA oral",
        "val": "INÍCIO 0,1 mg/kg/dia → ALVO 0,5 mg/kg/dia",
        "max": "40 mg/dia",
        "freq": "1–2 doses/dia",
        "note": "RN: iniciar 0,01 mg/kg/dose (hipotensão grave — monitorizar)"
      },
      {
        "ind": "Adulto",
        "val": "2,5–5 mg 1×/dia inicial → 10–40 mg/dia",
        "max": "40 mg/dia",
        "freq": "1–2 doses/dia",
        "note": ""
      }
    ],
    "prep": "Oral: comprimidos 2,5/5/10/20 mg — triturar e dissolver em água. Solução extemporânea 1 mg/ml estável 30 dias (refrigerada). Tomar com ou sem alimentos. Fonte: BNF for Children 2023-24.",
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
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
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
        "ind": "Antiarrítmico EV",
        "val": "0,01–0,1 mg/kg EV lento",
        "max": "1 mg/dose (lactente); 3 mg/dose (criança)",
        "freq": "pode repetir cada 6–8h",
        "note": "Monitorização ECG e TA obrigatória"
      },
      {
        "ind": "HTA / Arritmia oral",
        "val": "0,5–1 mg/kg/dia",
        "max": "4 mg/kg/dia (máx. 160 mg/dia)",
        "freq": "3–4 doses/dia",
        "note": ""
      },
      {
        "ind": "Hemangioma infantil",
        "val": "1 mg/kg/dia (semana 1) → 2 mg/kg/dia (semana 2) → 3 mg/kg/dia",
        "max": "3 mg/kg/dia",
        "freq": "2 doses/dia",
        "note": "Monitorizar FC, glicemia e TA. Duração: até 6 meses de idade"
      },
      {
        "ind": "Crises hipóxicas (Fallot)",
        "val": "0,01–0,25 mg/kg EV lento",
        "max": "1 mg/dose",
        "freq": "dose única em crise",
        "note": ""
      }
    ],
    "prep": "EV: administrar não diluído (1 mg/ml) MUITO LENTAMENTE — 1 mg/min máximo (arritmias e colapso cardiovascular com infusão rápida). Monitorização ECG contínua. Oral: solução 1 mg/ml ou 5 mg/ml; comprimidos 10/40/80 mg — podem ser triturados. Tomar COM alimentos (aumenta biodisponibilidade 50%). Fonte: BNF for Children 2023-24; NHS Medusa 2024.",
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
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
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
    "prep": "Oral (ivabradina, confusão de id — produto oral): solução 1 mg/ml ou comprimidos 5/7,5 mg — podem ser triturados. Tomar COM refeições. Solução oral magistral: 0,2 mg/ml estável 30 dias. Fonte: BNF for Children 2023-24.",
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
    "source": "BNF for Children 2023-24; SHIFT trial; Procoralan SmPC 2023"
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
        "ind": "HTA oral (6–17 anos)",
        "val": "2,5–5 mg/dia",
        "max": "5 mg/dia (< 6 anos); 10 mg/dia (≥ 6 anos)",
        "freq": "1×/dia",
        "note": "Início 2,5 mg; aumentar após 4 semanas se necessário"
      },
      {
        "ind": "Adulto",
        "val": "5–10 mg/dia",
        "max": "10 mg/dia",
        "freq": "1×/dia",
        "note": ""
      }
    ],
    "prep": "Oral: suspensão extemporânea 1 mg/ml (estável 35 dias refrigerada em frasco âmbar). Comprimidos 5/10 mg — podem ser triturados. Tomar com ou sem alimentos. Fonte: BNF for Children 2023-24.",
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
    "source": "BNF for Children 2023-24; Harriet Lane 23rd Ed"
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
        "ind": "Emergência hipertensiva EV",
        "val": "0,1–0,5 mg/kg/dose EV",
        "max": "20 mg/dose",
        "freq": "cada 4–6h (ou perfusão 0,1–0,5 mg/kg/hora)",
        "note": "Início de acção 5–20 min EV"
      },
      {
        "ind": "HTA crónica oral",
        "val": "0,75–1 mg/kg/dia",
        "max": "25 mg/dose; 200 mg/dia",
        "freq": "3–4 doses/dia",
        "note": ""
      }
    ],
    "prep": "EV: administrar em SF APENAS (não em SG5% — hidrólise rápida com perda de 50% actividade em 2h). Bólus em 3–5 min; perfusão: 20 mg em 100 ml SF. Oral: comprimidos 25/50 mg — podem ser triturados. Instabilidade em SG5% é clinicamente relevante — preparar em SF imediatamente antes. Fonte: BNF for Children 2023-24; NHS Medusa 2024.",
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
    "source": "BNF for Children 2023-24; Harriet Lane 23rd Ed"
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
        "ind": "ICC / HTA oral",
        "val": "1–3 mg/kg/dia",
        "max": "100 mg/dia",
        "freq": "1–2 doses/dia",
        "note": ""
      },
      {
        "ind": "Ascite oral",
        "val": "1–3 mg/kg/dia",
        "max": "100 mg/dia",
        "freq": "1 dose/dia",
        "note": "Ratio espironolactona:furosemida habitualmente 100:40"
      },
      {
        "ind": "Adulto (ICC)",
        "val": "25 mg/dia",
        "max": "50 mg/dia",
        "freq": "1×/dia",
        "note": ""
      }
    ],
    "prep": "Oral: suspensão extemporânea 5 mg/ml (estável 28 dias refrigerada). Comprimidos 25/50/100 mg — triturar. Tomar COM alimentos (aumenta absorção 50%). Fonte: BNF for Children 2023-24.",
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
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24; RALES trial"
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
        "ind": "Tratamento TVP/TEP — SC (< 2 meses)",
        "val": "1,5 mg/kg/dose SC",
        "max": "—",
        "freq": "cada 12h",
        "note": "Alvo anti-Xa 0,5–1 UI/ml (colher 4h após dose)"
      },
      {
        "ind": "Tratamento TVP/TEP — SC (≥ 2 meses)",
        "val": "1 mg/kg/dose SC",
        "max": "—",
        "freq": "cada 12h",
        "note": "Alvo anti-Xa 0,5–1 UI/ml"
      },
      {
        "ind": "Profilaxia SC",
        "val": "0,5 mg/kg/dose SC",
        "max": "40 mg/dose",
        "freq": "1×/dia",
        "note": "Alvo anti-Xa 0,2–0,4 UI/ml"
      },
      {
        "ind": "Adulto (tratamento)",
        "val": "1 mg/kg SC cada 12h ou 1,5 mg/kg SC 1×/dia",
        "max": "—",
        "freq": "conforme esquema",
        "note": ""
      }
    ],
    "prep": "SC: injecção na prega abdominal (perpendicularmente, sem expulsar bolha de ar antes da injecção — perda de dose). NÃO massajar após injecção. NÃO administrar IM. EV (trombólise/circulação extracorporal): ver protocolo específico. Fonte: BNF for Children 2023-24.",
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
    "source": "Monagle P. CHEST 2018; BNF for Children 2023-24"
  },
  {
    "id": "amiodarona_iv",
    "name": "Amiodarona EV",
    "category": "cardiovascular",
    "class": "Antiarrítmico classe III (inibidor canais K⁺, Na⁺, Ca²⁺ + beta-bloqueio)",
    "brands": "Cordarone EV — ampolas 150 mg/3 ml (50 mg/ml)",
    "indication": [
      "Fibrilhação ventricular / taquicardia ventricular sem pulso — após 3º choque (PCR)",
      "Taquicardia ventricular com pulso hemodinamicamente instável",
      "Taquicardia juncional pós-operatória (JET) — após cirurgia cardíaca",
      "Flutter/fibrilhação auricular com instabilidade hemodinâmica",
      "TSVP refractária a adenosina"
    ],
    "dose": [
      {
        "ind": "PCR — FV/TV sem pulso",
        "val": "5 mg/kg EV/IO rápido",
        "max": "300 mg/dose",
        "freq": "Após 3º choque; pode repetir após 5º choque",
        "note": "Em PCR: administrar em bólus. Dose máxima acumulada 15 mg/kg/dia"
      },
      {
        "ind": "TV / TSV com pulso",
        "val": "5 mg/kg EV em 20–60 min",
        "max": "300 mg/dose",
        "freq": "1 dose; repetir se necessário até 15 mg/kg/dia",
        "note": "Diluir em SG5% — nunca SF (precipita)"
      },
      {
        "ind": "JET pós-operatória (perfusão contínua)",
        "val": "5–15 μg/kg/min",
        "max": "—",
        "freq": "Perfusão contínua EV em SG5%",
        "note": "Associar hipotermia moderada (35–36°C) e sedação para controlo JET"
      }
    ],
    "prep": "EV: diluir EXCLUSIVAMENTE em SG5% — precipita em SF, LR e qualquer solução salina. Concentração periférico: ≤ 2 mg/ml; central: 6–18 mg/ml. ⚠️ Adsorve em PVC — usar tubagem de polietileno (PE) ou de polipropileno; evitar sets de PVC. Filtro em linha 0,22 μm recomendado. PCR: usar sem diluição para bólus rápido. Estabilidade: 24h protegido da luz.",
    "ci": [
      "Bloqueio AV 2º/3º grau sem pacemaker",
      "Bradicardia sinusal grave",
      "Disfunção tiroideia grave conhecida",
      "Hipotiroidismo/hipertiroidismo não tratado"
    ],
    "alert": [
      "⚠️ Hipotensão com administração rápida — infundir lentamente (excepção PCR)",
      "⚠️ Prolonga QT — monitorizar QTc; risco de torsades de pointes (raro mas grave)",
      "⚠️ Inúmeras interacções: aumenta níveis de digoxina, varfarina, fenitoína, ciclosporina",
      "⚠️ Tirotoxicidade e hipotiroidismo em uso crónico (iodo orgânico na molécula)",
      "Fototoxicidade, pneumonite, hepatotoxicidade — riscos em uso prolongado",
      "Monitorizar TFH, função tiroideia e Rx tórax em uso > 1 semana"
    ],
    "source": "BNF for Children 2023-24; PALS Guidelines AHA 2020; Saul JP et al. JACC 2005"
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
        "ind": "Insuficiência cardíaca — início",
        "val": "0,05 mg/kg/dose PO",
        "max": "3,125 mg/dose",
        "freq": "q12h × 2 semanas",
        "note": "Titular lentamente: duplicar dose a cada 2 semanas se tolerado"
      },
      {
        "ind": "Insuficiência cardíaca — alvo",
        "val": "0,4–0,8 mg/kg/dose PO",
        "max": "25 mg/dose (> 85 kg: 50 mg/dose)",
        "freq": "q12h",
        "note": "Ensaio PRCCTFHF mostrou tendência de benefício mas sem diferença estatística significativa vs. placebo — evidência mais fraca que em adultos"
      }
    ],
    "prep": "Oral: comprimidos 3,125/6,25/12,5/25 mg — podem ser esmagados e dissolvidos em 5 ml água. Solução extemporânea 1,25 mg/ml. Tomar COM alimentos (reduz hipotensão ortostática, melhora absorção). Fonte: BNF for Children 2023-24.",
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
    "source": "BNF for Children 2023-24; Shaddy RE et al. JAMA 2007 (PRCCTFHF); Rossano JW Heart Failure 2021"
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
        "ind": "Controlo frequência FA/flutter — EV",
        "val": "0,25 mg/kg EV em 2 min",
        "max": "25 mg",
        "freq": "Bólus; pode repetir 0,35 mg/kg (máx 25 mg) após 15 min se insuficiente",
        "note": "Monitorização ECG e TA contínua durante administração"
      },
      {
        "ind": "Perfusão contínua pós-bólus",
        "val": "5–15 mg/h",
        "max": "—",
        "freq": "Perfusão contínua",
        "note": ""
      },
      {
        "ind": "Oral — controlo frequência crónica",
        "val": "1,5–2 mg/kg/dia PO",
        "max": "360 mg/dia",
        "freq": "3–4 doses/dia (formulação regular) ou 1–2 doses/dia (libertação prolongada)",
        "note": ""
      }
    ],
    "prep": "EV: diluir em SF ou SG5% para 1 mg/ml. Bólus em 2 min. Perfusão: 125 mg em 100 ml SG5% (1,25 mg/ml). Oral: comprimidos 60/90/120 mg; cápsulas LP. Tomar com ou sem alimentos. Fonte: BNF for Children 2023-24.",
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
    "source": "BNF for Children 2023-24; PALS AHA 2020; Moak JP Pediatric Cardiology 2000"
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
        "ind": "Oral — manutenção TSV",
        "val": "2–3 mg/kg/dia PO",
        "max": "200 mg/dia",
        "freq": "2 doses/dia (q12h)",
        "note": "Iniciar com dose baixa e titular por resposta e nível sérico (alvo: 0,2–1 mg/L)"
      },
      {
        "ind": "EV — TSV aguda",
        "val": "1–2 mg/kg EV em 10 min",
        "max": "150 mg",
        "freq": "Dose única; repetir apenas se necessário com intervalo ≥ 1h",
        "note": "Monitorização ECG contínua obrigatória"
      }
    ],
    "prep": "EV: diluir em SG5% para 1–2 mg/ml. Administrar em 10–30 min (monitorização ECG contínua durante infusão). Oral: comprimidos 50/100 mg; solução oral 5 mg/ml (extemporânea, estável 14 dias). Tomar com ou sem alimentos. Fonte: BNF for Children 2023-24; SmPC Tambocor.",
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
    "source": "BNF for Children 2023-24; Perry JC et al. J Cardiovasc Electrophysiol 1996; PACES/HRS Expert Consensus 2014"
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
        "ind": "Síndrome baixo débito pós-cirurgia cardíaca",
        "val": "Perfusão 0,25–0,75 μg/kg/min EV",
        "max": "1 μg/kg/min",
        "freq": "Perfusão contínua; titrar por resposta hemodinâmica",
        "note": "Dose de carga 50–75 μg/kg EV em 10–60 min (OPCIONAL — omitir se hipotensão). Estudo PRIMACORP: milrinona profiláctica reduziu LCOS pós-cirurgia congenita (NNT=6)"
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
    "source": "BNF for Children 2023-24; Hoffman TM et al. Circulation 2003 (PRIMACORP); Brissaud O et al. CCM 2016"
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
        "ind": "Crise hipertensiva (urgência — não emergência)",
        "val": "0,25–0,5 mg/kg/dose PO/SL",
        "max": "10 mg/dose",
        "freq": "Dose única; repetir q4–6h se necessário",
        "note": "Uso SL controverso e não recomendado por algumas guidelines (queda de TA imprevisível). Via oral preferida"
      },
      {
        "ind": "Hipertensão crónica",
        "val": "0,5–3 mg/kg/dia PO",
        "max": "120 mg/dia",
        "freq": "2–3 doses/dia (formulação regular) ou 1–2 doses/dia (LP)",
        "note": "Preferir formulações LP para melhor controlo tensional"
      }
    ],
    "prep": "Oral: cápsulas — perfurar e extrair conteúdo para administração oral (NÃO sublingual — queda TA imprevisível). Comprimidos LP — engolir inteiros, NÃO triturar. Solução extemporânea 1 mg/ml (estável 7 dias refrigerada). Fonte: BNF for Children 2023-24.",
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
    "source": "BNF for Children 2023-24; NHBPEP Working Group 2004; Flynn JT et al. Pediatrics 2017"
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
        "ind": "HAP — crianças > 1 ano",
        "val": "Peso 10–20 kg: 31,25 mg/dose PO; Peso > 20–40 kg: 62,5 mg/dose PO; > 40 kg: 62,5–125 mg/dose PO",
        "max": "125 mg/dose (250 mg/dia em adulto)",
        "freq": "q12h",
        "note": "Iniciar com dose baixa × 4 semanas, depois duplicar se tolerado"
      }
    ],
    "prep": "Oral: comprimidos dispersíveis 32 mg — dissolver em 5 ml água; comprimidos 62,5/125 mg — podem ser partidos mas não triturados. Tomar com ou sem alimentos. Manipulação com cuidado — pó potencialmente teratogénico. Fonte: BNF for Children 2023-24; SmPC Tracleer.",
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
    "source": "BNF for Children 2023-24; Beghetti M et al. Eur Heart J 2009; ESC/ERS PAH Guidelines 2022"
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
    "source": "BNF for Children 2023-24; Reynolds PM et al. Ann Pharmacother 2014 (extravasation); Pacak K NEJM 2007"
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
        "ind": "Perfusão EV contínua",
        "val": "0,5–8 μg/kg/min",
        "max": "10 μg/kg/min",
        "freq": "Perfusão contínua; iniciar com dose mínima e titular",
        "note": "Duração máxima recomendada: 72h (risco toxicidade por cianeto). Dose > 4 μg/kg/min > 2h: monitorizar cianeto ou lactato"
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
    "source": "BNF for Children 2023-24; Flynn JT et al. Pediatrics 2017; Brimioulle S et al. Crit Care Med 2000"
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
        "ind": "Hipertensão / antiarrítmico",
        "val": "0,5–1 mg/kg/dia PO",
        "max": "100 mg/dia",
        "freq": "1–2 doses/dia (semivida longa: 6–9h em criança)",
        "note": "Iniciar com dose baixa (0,5 mg/kg) e titular por resposta e tolerância"
      },
      {
        "ind": "Síndrome de Marfan",
        "val": "0,5–2 mg/kg/dia PO",
        "max": "100 mg/dia",
        "freq": "1–2 doses/dia",
        "note": "Reduz taxa de dilatação da raíz aórtica (Shores et al. NEJM 1994). Evidência crescente para losartan como alternativa/combinação"
      }
    ],
    "prep": "Oral: comprimidos 25/50/100 mg — podem ser esmagados. Suspensão magistral 2 mg/ml estável 14 dias (refrigerada). Tomar com ou sem alimentos. Fonte: BNF for Children 2023-24.",
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
    "source": "BNF for Children 2023-24; Shores J et al. N Engl J Med 1994; NHBPEP Working Group 2004"
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
        "ind": "HAP — crianças 1–17 anos",
        "val": "< 20 kg: 10 mg/dose PO; ≥ 20 kg: 20 mg/dose PO",
        "max": "20 mg/dose (3× dose não mostrou benefício adicional — STARTS-2)",
        "freq": "q8h",
        "note": "ATENÇÃO: doses altas (≥ 2,5 mg/kg/dose ou 60–80 mg/dose) associadas a MAIOR mortalidade no ensaio STARTS-2 — usar dose baixa"
      },
      {
        "ind": "PPHN / desmame iNO — EV",
        "val": "0,25–1 mg/kg/dose EV em 3h",
        "max": "—",
        "freq": "q6–8h",
        "note": "Oral: 0,5–1 mg/kg/dose q6h. Evidência limitada em PPHN — uso off-label"
      },
      {
        "ind": "HAP oral (< 20 kg)",
        "val": "10 mg × 3/dia",
        "max": "10 mg × 3/dia",
        "freq": "3×/dia",
        "note": "⚠️ EMA 2014: NÃO usar doses altas em crianças (↑ mortalidade). Doses ≤ 10 mg 3×/dia"
      },
      {
        "ind": "HAP oral (20–45 kg)",
        "val": "20 mg × 3/dia",
        "max": "20 mg × 3/dia",
        "freq": "3×/dia",
        "note": ""
      },
      {
        "ind": "HAP oral (> 45 kg)",
        "val": "20 mg × 3/dia",
        "max": "40 mg × 3/dia",
        "freq": "3×/dia",
        "note": ""
      },
      {
        "ind": "HPPRN oral (off-label)",
        "val": "0,5–1 mg/kg/dose oral",
        "max": "2 mg/kg/dose",
        "freq": "3–4×/dia",
        "note": "Dados limitados em RN"
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
    "source": "BNF for Children 2023-24; Barst RJ et al. Circulation 2012 (STARTS-1/2); ESC/ERS PAH Guidelines 2022; EMA SmPC Revatio 2023; TOPP trial 2012; Barst RJ et al. NEJM 2005 (SUPER-1)"
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
        "ind": "Indução anticoagulação",
        "val": "0,2 mg/kg PO (dose de indução — dia 1)",
        "max": "10 mg/dose",
        "freq": "1 dose/dia; ajustar INR",
        "note": "Manutenção habitual: 0,05–0,1 mg/kg/dia. Alvo INR: 2–3 (trombose venosa); 2,5–3,5 (válvulas mecânicas). Nomograma de ajuste por INR disponível (Michelson et al.)"
      }
    ],
    "prep": "Oral: comprimidos 0,5/1/3/5 mg — podem ser partidos mas não triturados. Solução magistral 1 mg/ml estável 14 dias. Tomar ao MESMO HORA diariamente (monitorização INR consistente). ⚠️ Dieta consistente em vitamina K. Fonte: BNF for Children 2023-24.",
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
    "source": "BNF for Children 2023-24; Michelson AD et al. Chest 2012; ACCP Antithrombotic Guidelines 2012"
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
    "prep": "Oral: comprimidos 15/30/45/60/90 mg — engolir inteiros (não partir ou esmagar — formulação específica de libertação). Tomar com ou sem alimentos. ⚠️ INICIAR SEMPRE EM HOSPITAL — monitorização Na⁺ q4–6h nas primeiras 24h (risco correcção excessiva). Fonte: BNF for Children 2023-24; SmPC Samsca.",
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
    "source": "BNF for Children 2023-24; Verbalis JG et al. Am J Med 2013; Gheorghiade M et al. JAMA 2004"
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
        "ind": "Carga EV + manutenção",
        "val": "1 mg/kg EV bólus; depois 20–50 μg/kg/min perfusão",
        "max": "100 mg bólus; 3 mg/min perfusão",
        "freq": "Bólus em 2 min; perfusão contínua",
        "note": "Reduzir dose de manutenção em IH e IC (metabolismo hepático reduzido)"
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
    "source": "BNF for Children 2023-24; PALS AHA 2020; Dorian P et al. NEJM 2002"
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
        "ind": "Antiarrítmico oral pediátrico",
        "val": "2–8 mg/kg/dia PO",
        "max": "160 mg/dose (320 mg/dia em adolescentes)",
        "freq": "q12h",
        "note": "Iniciar com dose baixa (2 mg/kg/dia) e titular semanalmente. Hospitalização para início com ECG contínuo recomendada"
      }
    ],
    "prep": "Oral: comprimidos 40/80/160 mg — podem ser esmagados. Solução extemporânea 5 mg/ml. Tomar em JEJUM (antiácidos reduzem absorção 20%). Fonte: BNF for Children 2023-24.",
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
    "source": "BNF for Children 2023-24; PACES/HRS Expert Consensus 2014; Pfammatter JP et al. Eur Heart J 2001"
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
        "ind": "Carga oral (saturação)",
        "val": "10–20 mg/kg/dia PO",
        "max": "400 mg/dia",
        "freq": "3 doses/dia × 7–10 dias (carga); depois reduzir",
        "note": "Carga necessária pela semi-vida extremamente longa (40–55 dias)"
      },
      {
        "ind": "Manutenção",
        "val": "5–10 mg/kg/dia PO",
        "max": "200 mg/dia",
        "freq": "1–2 doses/dia",
        "note": "Dose mínima eficaz — nível sérico alvo 0,5–2,5 mg/L"
      }
    ],
    "prep": "Oral: comprimidos 100/200 mg — tomar COM refeições (reduz intolerância GI). Podem ser triturados. Solução extemporânea 5 mg/ml para lactentes. ⚠️ Semi-vida 40–55 dias — carga obrigatória por 7–10 dias (efectivo em 1–3 semanas). Fonte: BNF for Children 2023-24.",
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
    "source": "BNF for Children 2023-24; Thorne SA et al. Heart 1999; Saul JP et al. JACC 2005"
  }
];

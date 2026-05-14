// UCIP Pediatria — Cardiovascular & Diuréticos
// 13 fármacos
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
    "prep": "EV: pode administrar não diluído (10 mg/ml) ou diluído em SF. NÃO misturar com milrinona, amiodarona, midazolam.",
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
      "Epistaxis recorrente"
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
      }
    ],
    "prep": "EV: diluir em SF ou SG5%. Velocidade máxima: 100 mg/min.",
    "ci": [
      "Hemorragia subaracnoídea (dados contraditórios — evitar)",
      "Trombose activa (TEP, TVP, AVC isquémico)",
      "Hematúria de origem renal superior (risco obstrução)"
    ],
    "alert": [
      "⚠️ Convulsões em doses altas (especialmente cirurgia cardíaca com CEC)",
      "⚠️ Tromboembolismo — risco baixo com doses recomendadas, mas monitorizar",
      "Náuseas e vómitos — reduzir velocidade de infusão",
      "Ajustar na insuf. renal"
    ],
    "source": "CRASH-2 Collaborators. Lancet 2010;376:23–32; Roberts I et al. Lancet 2011; Eckert MJ et al. J Trauma 2014"
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
    "prep": "Perfusão: diluir em SF. Concentração habitual: 1–5 UI/ml (pediátrico), até 50 UI/ml (restrito).",
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
    "prep": "EV: diluir ≥ 4× em SF ou SG5%. Administrar em 30 min.",
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
    "prep": "Diluir em SG5% ou SF. Concentração 0,1 mg/ml. EV central preferido (flebite).",
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
    "prep": "Comprimidos podem ser triturados e dissolvidos em água. Solução extemporânea: 1 mg/ml em água estéril (estável 7 dias no frio).",
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
    "prep": "Comprimidos podem ser triturados. Sol. extemporânea 1 mg/ml estável 30 dias no frio.",
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
    "prep": "EV: não diluir ou diluir em SG5%. Administrar muito lentamente (1 mg/min).",
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
    "prep": "Solução oral 1 mg/ml. Comprimidos podem ser triturados.",
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
    "prep": "Suspensão extemporânea 1 mg/ml (estável 35 dias). Comprimidos podem ser triturados.",
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
    "prep": "EV: pode administrar não diluído ou diluído em SF. Instável em SG5% (usar SF).",
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
    "prep": "Suspensão extemporânea 5 mg/ml (estável 28 dias). Tomar com alimentos.",
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
    "prep": "Administração SC exclusivamente (na barriga, coxa ou braço). Não massajar após injecção.",
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
  }
];

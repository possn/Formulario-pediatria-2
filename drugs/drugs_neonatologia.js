// UCIP Pediatria — Neonatologia
// 29 fármacos
// Fontes: ver drugs_sources.js

var DRUGS_NEONATOLOGIA = [
  {
    "id": "surfactante",
    "name": "Surfactante Exógeno (Poractant alfa)",
    "category": "neonatologia",
    "class": "Surfactante natural suíno — fosfolípidos + proteínas SP-B e SP-C",
    "brands": "Curosurf 120 mg/1,5 ml; 240 mg/3 ml (80 mg/ml)",
    "indication": [
      "Síndrome Dificuldade Respiratória (SDR) — tratamento e profilaxia",
      "Síndrome aspiração meconial grave",
      "Pneumonia neonatal com hipoxemia grave",
      "ARDS neonatal"
    ],
    "dose": [
      {
        "ind": "SDR — dose inicial",
        "val": "200 mg/kg IT",
        "max": "—",
        "freq": "dose única; 2ª dose 100 mg/kg após 12h se necessário",
        "note": "Dose 200 mg/kg superior a 100 mg/kg (Cochrane 2019)"
      },
      {
        "ind": "Profilaxia (sala partos < 28 sem)",
        "val": "100–200 mg/kg IT",
        "max": "—",
        "freq": "dose única",
        "note": "LISA (Less Invasive Surfactant Administration) preferida se respiração espontânea"
      }
    ],
    "prep": "Pré-aquecer a 37°C. NÃO agitar. Administrar IT em bólus ou via sonda fina (LISA). FiO2 100% antes e durante. Reduzir FiO2 rapidamente após resposta (risco hiperoxia).",
    "ci": [
      "Sem contra-indicações absolutas em SDR grave"
    ],
    "alert": [
      "⚠️ Dessaturação e bradicardia transitória durante administração",
      "⚠️ Reduzir FiO2 e pressões ventilatórias rapidamente após administração (risco pneumotórax e hiperoxia)",
      "⚠️ Hemorragia pulmonar (raro — mais em RNMBP < 26 semanas)",
      "Conservar a 2–8°C. Não recongelar.",
      "Monitorização SpO2 contínua durante administração"
    ],
    "source": "Sweet DG et al. European Consensus Guidelines Neonatology 2023; Cochrane Reviews 2019"
  },
  {
    "id": "cafeina_citrato",
    "name": "Citrato de Cafeína",
    "category": "neonatologia",
    "class": "Metilxantina — antagonista adenosina; estimulante do centro respiratório",
    "brands": "Peyona 20 mg/ml (10 mg/ml de cafeína base). 2 mg citrato = 1 mg cafeína base.",
    "indication": [
      "Apneia da prematuridade — 1ª linha",
      "Facilitação do desmame ventilatório no prematuro",
      "Redução broncodisplasia pulmonar (CAP trial)"
    ],
    "dose": [
      {
        "ind": "Carga",
        "val": "20 mg/kg de citrato de cafeína EV em 30 min",
        "max": "—",
        "freq": "dose única",
        "note": "= 10 mg/kg de cafeína base"
      },
      {
        "ind": "Manutenção",
        "val": "5–10 mg/kg/dia de citrato de cafeína EV/oral",
        "max": "—",
        "freq": "1 dose/dia",
        "note": "Iniciar 24h após carga. Manter até 34–35 sem corrigidas sem apneias"
      }
    ],
    "prep": "EV: pode administrar não diluído (20 mg/ml) ou diluído em SG5%. Oral: mesma dose.",
    "ci": [
      "Taquiarritmia neonatal sintomática"
    ],
    "alert": [
      "⚠️ Taquicardia (FC > 180/min) — rever dose",
      "⚠️ Intolerância GI (náuseas, distensão)",
      "Nível sérico terapêutico cafeína: 5–25 mg/L",
      "Meia-vida longa no RN: 40–100h (vs 3–5h no adulto — imaturidade CYP1A2)",
      "CAP trial (Schmidt 2006): redução de 36% na BDP com cafeína"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; Schmidt B et al. (CAP trial) NEJM 2006; BNF for Children 2023-24"
  },
  {
    "id": "ino",
    "name": "Óxido Nítrico Inalado (iNO)",
    "category": "neonatologia",
    "class": "Vasodilatador pulmonar selectivo — activa guanilato ciclase → ↑cGMP → vasodilatação VSM pulmonar",
    "brands": "INOmax 800 ppm gás para inalação",
    "indication": [
      "Hipertensão Pulmonar Persistente do RN (HPPRN) — 1ª linha (RN ≥ 34 semanas)",
      "Hipertensão pulmonar pós-cirurgia cardíaca",
      "ARDS grave pediátrico (melhora oxigenação — não reduz mortalidade)"
    ],
    "dose": [
      {
        "ind": "HPPRN",
        "val": "Início: 20 ppm inalado",
        "max": "20 ppm (doses > 20 ppm não aumentam eficácia e ↑ toxicidade)",
        "freq": "contínuo; desmame gradual",
        "note": "Resposta em 30–60 min (↑SpO2 ≥ 5–10%). Desmame: 20→10→5→2→1 ppm cada 4–24h. NÃO suspender abruptamente"
      },
      {
        "ind": "ARDS grave",
        "val": "5–20 ppm",
        "max": "20 ppm",
        "freq": "contínuo",
        "note": "Melhora oxigenação mas sem benefício na mortalidade (Cochrane)"
      }
    ],
    "prep": "Sistema de administração dedicado integrado no ventilador. Monitorização contínua de NO, NO2 e MetHb.",
    "ci": [
      "Lesões cardíacas dependentes do foramen ovale para manutenção do débito sistémico (ex: HVE, coarctação grave)"
    ],
    "alert": [
      "⚠️ MetHemoglobinemia — monitorizar MetHb 1–2h após início e com cada ↑ de dose. Suspender se MetHb > 5%",
      "⚠️ Efeito rebote na suspensão abrupta — desmame OBRIGATORIAMENTE gradual",
      "⚠️ Toxicidade por NO2 no circuito (> 3 ppm)",
      "⚠️ Trombocitopenia (raro)",
      "Não melhora outcomes em HPPRN por VEÍCULO CONGÉNITA — não usar se cardiopatia estrutural dependente do shunt D→E"
    ],
    "source": "Clark RH et al. NEJM 2000;342:469–74; Steinhorn RH. NeoReviews 2021; INOmax SmPC 2023"
  },
  {
    "id": "sildenafil",
    "name": "Sildenafil",
    "category": "neonatologia",
    "class": "Inibidor selectivo da fosfodiesterase-5 (PDE-5) — vasodilatador pulmonar oral",
    "brands": "Revatio 20 mg comp.; 10 mg/ml sol. oral; 10 mg/12,5 ml EV",
    "indication": [
      "Hipertensão arterial pulmonar (HAP) — pediátrica",
      "Desmame do iNO",
      "HPPRN (off-label — quando iNO não disponível)"
    ],
    "dose": [
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
    "prep": "Solução oral: 10 mg/ml. Comprimidos podem ser triturados e reconstituídos.",
    "ci": [
      "Nitratos (hipotensão grave e potencialmente fatal)",
      "Inibidores potentes CYP3A4 (ritonavir)",
      "HAP associada a cardiopatia com shunt D→E significativo"
    ],
    "alert": [
      "⛔ EMA alerta 2014: doses altas (80 mg × 3/dia) associadas a ↑ mortalidade em crianças 1–17 anos — NÃO EXCEDER doses recomendadas",
      "⚠️ Hipotensão sistémica",
      "⚠️ Visão turva (inibição PDE6 retiniana) — transitória",
      "⚠️ Priapismo (raro)"
    ],
    "source": "EMA SmPC Revatio 2023; TOPP trial 2012; Barst RJ et al. NEJM 2005 (SUPER-1)"
  },
  {
    "id": "prostaglandina_e1",
    "name": "Prostaglandina E1 (Alprostadil)",
    "category": "neonatologia",
    "src": "added",
    "class": "Prostaglandina — vasodilatador ductal, mantém permeabilidade do canal arterial",
    "brands": "Prostin VR 0,5 mg/ml (alprostadil). Minprog 0,5 mg/ml.",
    "indication": [
      "Cardiopatias congénitas ductus-dependentes — emergência neonatal",
      "Circulação pulmonar ductus-dependente (atresia pulmonar, estenose pulmonar crítica, Fallot extremo)",
      "Circulação sistémica ductus-dependente (coarctação crítica, SHCE, interrupção do arco aórtico)",
      "Transposição das grandes artérias (melhora mistura antes de Rashkind/cirurgia)"
    ],
    "dose": [
      {
        "ind": "Manutenção ductal — EV",
        "val": "0,01–0,1 mcg/kg/min",
        "max": "0,1 mcg/kg/min",
        "freq": "perfusão contínua EV",
        "note": "Iniciar com 0,05–0,1 mcg/kg/min (urgência). Reduzir para dose mínima eficaz (0,01–0,02 mcg/kg/min) logo que SpO2 estável. Doses ≥ 0,05 mcg/kg/min ↑ risco apneia"
      },
      {
        "ind": "Dose de resgate (cianose grave)",
        "val": "0,1 mcg/kg/min",
        "max": "0,1 mcg/kg/min",
        "freq": "perfusão; reduzir assim que resposta",
        "note": ""
      }
    ],
    "prep": "Diluir em SF ou SG5%. Fórmula prática: (0,3 × Peso kg) mg em 50 ml SF → 1 ml/h = 0,1 mcg/kg/min. EV central preferido (flebite em periférico). Estável 24h.",
    "ci": [
      "Síndrome de dificuldade respiratória grave não relacionada com cardiopatia (relativa)",
      "Febre (relativa — pode agravar)"
    ],
    "alert": [
      "⛔ APNEIA — risco major, especialmente com doses > 0,02 mcg/kg/min e < 2 kg. Ter ventilação disponível. Considerar intubação profiláctica no transporte",
      "⚠️ Febre (muito frequente — não é sinal de infecção)",
      "⚠️ Hipotensão e bradicardia",
      "⚠️ Hipocalcemia",
      "⚠️ Proliferação óssea cortical (uso prolongado > 1 semana)",
      "⚠️ Convulsões (raras)",
      "Monitorização SpO2, ECG e TA contínuos obrigatórios"
    ],
    "source": "BNF for Children 2023-24; Harriet Lane 23rd Ed; Wren C. Arch Dis Child 2012"
  },
  {
    "id": "indometacina_neo",
    "name": "Indometacina (Encerramento PCA)",
    "category": "neonatologia",
    "src": "added",
    "class": "AINE — inibidor COX não selectivo; reduz síntese PGE2 promovendo encerramento ductal",
    "brands": "Indocid EV 1 mg pó; Indocin IV (EUA)",
    "indication": [
      "Encerramento farmacológico do canal arterial persistente (PCA) hemodinamicamente significativo no prematuro",
      "Profilaxia PCA em prematuros < 28 semanas (evidência — reduz hemorragia peri-intraventricular)"
    ],
    "dose": [
      {
        "ind": "Encerramento PCA — EV (1º ciclo)",
        "val": "< 48h vida: 0,1 mg/kg × 3 doses; 2–7 dias: 0,2 mg/kg × 3 doses; > 7 dias: 0,25 mg/kg × 3 doses",
        "max": "—",
        "freq": "cada 12–24h (3 doses)",
        "note": "2º ciclo possível se reabertura. Velocidade infusão: 20–30 min"
      },
      {
        "ind": "Profilaxia (< 28 sem) — EV",
        "val": "0,1 mg/kg/dose EV",
        "max": "—",
        "freq": "cada 24h × 3 doses (início nas primeiras 6–12h de vida)",
        "note": "Reduz incidência HIV e necessidade de ligadura ductal"
      }
    ],
    "prep": "Reconstituir com 1–2 ml SF ou água estéril (sem aditivos). Usar imediatamente. NÃO agitar. Concentração 0,5–1 mg/ml.",
    "ci": [
      "Trombocitopenia < 60 000/mcL",
      "Creatinina > 1,8 mg/dL ou débito urinário < 0,6 ml/kg/hora",
      "NEC confirmada ou suspeita",
      "Hemorragia activa (incluindo HIV)",
      "Coagulopatia grave"
    ],
    "alert": [
      "⚠️ NEFROTOXICIDADE — reduz fluxo renal. Monitorizar diurese e creatinina. Restringir fluidos nas 24h após cada dose",
      "⚠️ Hemorragia GI e perfuração intestinal",
      "⚠️ Hiponatremia (retenção hídrica)",
      "⚠️ Hipoglicemia",
      "⚠️ Reduz agregação plaquetar — monitorizar plaquetas",
      "Ibuprofeno EV é alternativa com menor toxicidade renal (BNFC 2023)"
    ],
    "source": "BNF for Children 2023-24; Schmidt B. NEJM 2001 (profilaxia); Cooke L. Cochrane 2003"
  },
  {
    "id": "ibuprofeno_neo",
    "name": "Ibuprofeno EV (Encerramento PCA)",
    "category": "neonatologia",
    "src": "added",
    "class": "AINE — inibidor COX; alternativa à indometacina com menor toxicidade renal",
    "brands": "Pedea 5 mg/ml EV (ibuprofeno-lisina)",
    "indication": [
      "Encerramento farmacológico do canal arterial persistente hemodinamicamente significativo no prematuro",
      "Alternativa preferida à indometacina pelo menor efeito na perfusão renal e mesentérica"
    ],
    "dose": [
      {
        "ind": "PCA — EV (1º ciclo)",
        "val": "10 mg/kg → 5 mg/kg → 5 mg/kg",
        "max": "—",
        "freq": "3 doses com intervalos de 24h",
        "note": "Infusão em 15 min. 2º ciclo possível se sem encerramento"
      },
      {
        "ind": "Oral (off-label, alternativa)",
        "val": "10 mg/kg → 5 mg/kg → 5 mg/kg",
        "max": "—",
        "freq": "cada 24h × 3 doses",
        "note": "Evidência crescente de eficácia similar ao EV"
      }
    ],
    "prep": "Pronto a usar (5 mg/ml). Pode diluir em SG5% ou SF. Infusão 15 min.",
    "ci": [
      "Creatinina > 1,8 mg/dL",
      "Débito urinário < 1 ml/kg/hora nas 6h precedentes",
      "Trombocitopenia grave (< 60 000/mcL)",
      "NEC confirmada/suspeita",
      "Hiperbilirrubinemia significativa (desloca bilirrubina da albumina)"
    ],
    "alert": [
      "⚠️ Nefrotoxicidade — menos que indometacina mas monitorizar diurese e creatinina",
      "⚠️ Hipertensão pulmonar (risco teórico — vigiar SpO2)",
      "⚠️ Hiperbilirrubinemia — evitar se bilirrubina próxima do limiar de exsanguinotransfusão",
      "Meta-análise Cochrane 2015: eficácia similar à indometacina, melhor perfil renal"
    ],
    "source": "BNF for Children 2023-24; Ohlsson A. Cochrane 2015; Pedea SmPC"
  },
  {
    "id": "fenobarbital_neo",
    "name": "Fenobarbital Neonatal",
    "category": "neonatologia",
    "src": "added",
    "class": "Barbitúrico — potenciador GABA-A; antiepiléptico neonatal de 1ª linha",
    "brands": "Luminal 200 mg/ml amp.; sol. oral 15 mg/5 ml",
    "indication": [
      "Convulsões neonatais — 1ª linha (qualquer etiologia)",
      "Encefalopatia hipóxico-isquémica (EHI) — tratamento convulsões e neuroprotecção",
      "Síndrome de abstinência neonatal (NAS/NOWS) — 2ª linha após morfina/metadona",
      "Profilaxia convulsões em EHI grave"
    ],
    "dose": [
      {
        "ind": "Convulsões neonatais — carga EV",
        "val": "20 mg/kg EV em 15–30 min",
        "max": "40 mg/kg total (2ª dose 10–20 mg/kg se sem resposta)",
        "freq": "dose de carga",
        "note": "Se sem resposta após 40 mg/kg total → considerar fenitoína/levetiracetam/midazolam"
      },
      {
        "ind": "Manutenção EV/oral",
        "val": "3–5 mg/kg/dia",
        "max": "—",
        "freq": "1–2 doses/dia",
        "note": "Iniciar 12–24h após carga. Nível terapêutico: 20–40 mcg/ml"
      },
      {
        "ind": "NAS — oral (2ª linha)",
        "val": "Carga 20 mg/kg oral → manutenção 5 mg/kg/dia",
        "max": "—",
        "freq": "manutenção 2×/dia; desmame 10%/dia quando score NAS controlado",
        "note": ""
      }
    ],
    "prep": "EV: diluir em SF. Concentração máx. 20 mg/ml. Velocidade máxima 1 mg/kg/min.",
    "ci": [
      "Depressão respiratória grave não monitorizada",
      "Porfiria"
    ],
    "alert": [
      "⚠️ Depressão respiratória — monitorização SpO2 e estar preparado para ventilação",
      "⚠️ Hipotensão na infusão rápida",
      "⚠️ Sedação prolongada — avaliar nível de consciência",
      "⚠️ Indução enzimática — ↓ bilirrubina (útil) mas ↓ vitamina D e K",
      "Nível sérico: colher 1h após dose EV ou 2h após oral"
    ],
    "source": "BNF for Children 2023-24; Volpe JJ. Neurology of the Newborn 6th Ed; ILCOR NNS Guidelines 2021"
  },
  {
    "id": "morfina_neo",
    "name": "Morfina Neonatal",
    "category": "neonatologia",
    "src": "added",
    "class": "Opioide — agonista µ; analgesia e sedação neonatal; tratamento NAS",
    "brands": "Morfina 1 mg/ml (diluição para neonatologia); 10 mg/ml amp.",
    "indication": [
      "Analgesia em RN ventilado (procedimentos, pós-operatório)",
      "Síndrome de abstinência neonatal (NAS/NOWS) por opioides maternos — 1ª linha",
      "Sedação em RN com EHI em hipotermia",
      "Analgesia paliativa neonatal"
    ],
    "dose": [
      {
        "ind": "Analgesia — EV bólus (RN termo)",
        "val": "50–100 mcg/kg EV em 5 min",
        "max": "100 mcg/kg/dose",
        "freq": "cada 4–6h",
        "note": "RN prematuro: 25–50 mcg/kg/dose (maior sensibilidade respiratória)"
      },
      {
        "ind": "Analgesia — perfusão EV",
        "val": "5–20 mcg/kg/hora",
        "max": "30 mcg/kg/hora",
        "freq": "contínua; titular pelo score dor (NFCS, N-PASS)",
        "note": ""
      },
      {
        "ind": "NAS — oral (tratamento)",
        "val": "Iniciar morfina oral 0,04–0,08 mg/kg cada 3–4h",
        "max": "—",
        "freq": "cada 3–4h; guiado pelo score Finnegan/NOWS",
        "note": "Desmame 10% da dose/dia quando score < 8 por 48h. Protocolo institucional obrigatório"
      }
    ],
    "prep": "EV: diluir para concentração 0,1–0,5 mg/ml. Para perfusão neonatal: (Peso kg × 0,05) mg em 50 ml SG5% → 1 ml/h = 1 mcg/kg/h.",
    "ci": [
      "Depressão respiratória não monitorizada",
      "Íleo paralítico (relativa)"
    ],
    "alert": [
      "⚠️ Depressão respiratória — antídoto: naloxona 0,01 mg/kg EV",
      "⚠️ Hipotensão (especialmente em RN hemodinamicamente instável)",
      "⚠️ Rigidez torácica com bólus rápidos",
      "⚠️ Síndrome abstinência se uso prolongado > 5–7 dias — desmame obrigatório",
      "⚠️ NAS: não usar naloxona em RN de mãe dependente de opioides (convulsões)"
    ],
    "source": "BNF for Children 2023-24; Kocherlakota P. Pediatrics 2014 (NAS); BNFC Neonatal Formulary 9th Ed"
  },
  {
    "id": "fentanil_neo",
    "name": "Fentanil Neonatal",
    "category": "neonatologia",
    "src": "added",
    "class": "Opioide lipofílico — analgesia rápida; menor histamina que morfina",
    "brands": "Fentanil 50 mcg/ml amp.",
    "indication": [
      "Analgesia em procedimentos dolorosos no RN (intubação, colocação cateter, cirurgia)",
      "Sedoanalgesia em RN ventilado",
      "Analgesia em hipertensão pulmonar (melhor hemodinâmica que morfina)"
    ],
    "dose": [
      {
        "ind": "Procedimentos — EV bólus",
        "val": "1–4 mcg/kg EV lento",
        "max": "4 mcg/kg/dose",
        "freq": "dose única; onset 2–3 min, duração 30 min",
        "note": "Para intubação electiva: 2–4 mcg/kg"
      },
      {
        "ind": "Perfusão contínua EV",
        "val": "0,5–2 mcg/kg/hora",
        "max": "4 mcg/kg/hora",
        "freq": "contínua",
        "note": "Prematuros: iniciar 0,5 mcg/kg/hora (metabolismo mais lento)"
      }
    ],
    "prep": "Diluir em SF. Concentração padrão: 10 mcg/ml. Fórmula: (Peso kg × 0,05) mg em 50 ml → 1 ml/h = 1 mcg/kg/h.",
    "ci": [
      "Depressão respiratória não monitorizada"
    ],
    "alert": [
      "⚠️ RIGIDEZ TORÁCICA ('wooden chest') com bólus rápidos > 2 mcg/kg — administrar lentamente",
      "⚠️ Apneia — monitorização contínua SpO2",
      "⚠️ Bradicardia",
      "⚠️ Síndrome abstinência com uso > 5–7 dias",
      "Preferido em HPPRN (menos histamina → melhor hemodinâmica)",
      "Antídoto: naloxona"
    ],
    "source": "BNF for Children 2023-24; BNFC Neonatal Formulary 9th Ed"
  },
  {
    "id": "midazolam_neo",
    "name": "Midazolam Neonatal",
    "category": "neonatologia",
    "src": "added",
    "class": "Benzodiazepina — sedação e anticonvulsivante neonatal",
    "brands": "Dormicum 1 mg/ml; 5 mg/ml amp.",
    "indication": [
      "Sedação em RN ventilado (adjuvante ao fentanil)",
      "Convulsões neonatais refractárias ao fenobarbital (2ª/3ª linha)",
      "Pré-medicação para procedimentos dolorosos",
      "Status epilepticus neonatal refractário (perfusão)"
    ],
    "dose": [
      {
        "ind": "Sedação — EV bólus",
        "val": "0,05–0,1 mg/kg EV em 5 min",
        "max": "0,1 mg/kg/dose",
        "freq": "pode repetir cada 2–4h",
        "note": "Prematuros: 0,02–0,05 mg/kg (metabolismo muito lento)"
      },
      {
        "ind": "Sedação — perfusão EV",
        "val": "0,01–0,06 mg/kg/hora",
        "max": "0,1 mg/kg/hora",
        "freq": "contínua",
        "note": ""
      },
      {
        "ind": "Convulsões refractárias — perfusão",
        "val": "0,05–0,2 mg/kg/hora",
        "max": "0,5 mg/kg/hora (SE refractário)",
        "freq": "contínua",
        "note": "Monitorização EEG se disponível"
      }
    ],
    "prep": "Diluir para concentração 0,1–0,5 mg/ml. Fórmula: (0,15 × Peso kg) mg em 50 ml SG5% → 1 ml/h = 0,05 mg/kg/h.",
    "ci": [
      "Hipotensão grave não controlada",
      "Prematuridade extrema (risco apneia e hipotensão severas)"
    ],
    "alert": [
      "⚠️ HIPOTENSÃO — especialmente em prematuros < 28 semanas. Monitorização TA contínua",
      "⚠️ Apneia e depressão respiratória",
      "⚠️ Metabolismo muito lento em prematuros (CYP3A4 imaturo) — acumulação",
      "⚠️ Movimentos mioclónicos paradoxais (não são convulsões — efeito paradoxal)",
      "⚠️ Leucomalácia periventricular (dados controversos — cautela em prematuros)"
    ],
    "source": "BNF for Children 2023-24; Jacqz-Aigrain E. Arch Dis Child 1990"
  },
  {
    "id": "dopamina_neo",
    "name": "Dopamina Neonatal",
    "category": "neonatologia",
    "src": "added",
    "class": "Catecolamina — inotrópico e vasopressor neonatal",
    "brands": "Dopamina 40 mg/ml amp.",
    "indication": [
      "Choque neonatal / hipotensão arterial sistémica",
      "Disfunção miocárdica pós-asfixia",
      "Hipotensão pós-cirurgia cardíaca neonatal",
      "Choque séptico neonatal"
    ],
    "dose": [
      {
        "ind": "Vasopressor / Inotrópico neonatal",
        "val": "2–20 mcg/kg/min EV",
        "max": "20 mcg/kg/min",
        "freq": "perfusão contínua; titular pela TA e FC",
        "note": "RN prematuro: iniciar com 2–5 mcg/kg/min. Doses baixas (2–5): efeito predominantemente dopaminérgico; doses altas (10–20): efeito α vasopressor"
      }
    ],
    "prep": "Fórmula neonatal: (6 × Peso kg) mg em 100 ml SG5% → 1 ml/h = 1 mcg/kg/min. EV CENTRAL obrigatório.",
    "ci": [
      "Taquiarritmias não controladas",
      "Feocromocitoma"
    ],
    "alert": [
      "⚠️ EV CENTRAL OBRIGATÓRIO — necrose grave por extravasamento",
      "⚠️ Taquicardia e arritmias",
      "⚠️ Incompatível com bicarbonato",
      "⚠️ Monitorização ECG e TA invasiva contínuas",
      "Surviving Sepsis Campaign Neonatal 2020: adrenalina preferida em choque séptico neonatal"
    ],
    "source": "BNF for Children 2023-24; Valverde E. Pediatrics 2006; SSC Neonatal Guidelines 2020"
  },
  {
    "id": "adrenalina_neo",
    "name": "Adrenalina Neonatal (Reanimação e Perfusão)",
    "category": "neonatologia",
    "src": "added",
    "class": "Catecolamina — vasopressor/inotrópico de 1ª linha no choque neonatal",
    "brands": "Adrenalina 1:1000 (1 mg/ml); 1:10000 (0,1 mg/ml)",
    "indication": [
      "PCR neonatal — reanimação em sala de partos",
      "Choque séptico neonatal — vasopressor de 1ª linha (SSC Neonatal 2020)",
      "Hipotensão refractária à dopamina",
      "Anafilaxia neonatal"
    ],
    "dose": [
      {
        "ind": "PCR — reanimação sala de partos EV/IO",
        "val": "0,01–0,03 mg/kg EV/IO (= 0,1–0,3 ml/kg da sol. 1:10000)",
        "max": "0,03 mg/kg/dose",
        "freq": "cada 3–5 min",
        "note": "Via EV/IO preferida. Via endotraqueal: 0,05–0,1 mg/kg (menos eficaz)"
      },
      {
        "ind": "Choque neonatal — perfusão EV",
        "val": "0,05–0,3 mcg/kg/min",
        "max": "1 mcg/kg/min",
        "freq": "contínua; titular pela TAM",
        "note": "TAM alvo: ≥ 40 mmHg (RN termo); ≥ semanas de gestação em mmHg (prematuro)"
      }
    ],
    "prep": "Perfusão: (0,3 × Peso kg) mg em 50 ml SG5% → 1 ml/h = 0,1 mcg/kg/min. EV central.",
    "ci": [
      "Não há CI absolutas na emergência neonatal"
    ],
    "alert": [
      "⚠️ Taquicardia, HTA, vasoconstrição periférica",
      "⚠️ Hiperglicemia e hiperlactacidemia (efeito metabólico)",
      "⚠️ Incompatível com bicarbonato",
      "⚠️ EV central para perfusão contínua"
    ],
    "source": "BNF for Children 2023-24; ILCOR NLS 2021; SSC Neonatal Guidelines 2020"
  },
  {
    "id": "dobutamina_neo",
    "name": "Dobutamina Neonatal",
    "category": "neonatologia",
    "src": "added",
    "class": "Catecolamina sintética — inotrópico β1 predominante; melhora contratilidade sem vasoconstrição",
    "brands": "Dobutamina 250 mg/20 ml amp.",
    "indication": [
      "Disfunção miocárdica neonatal (pós-asfixia, cardiomiopatia)",
      "Choque cardiogénico neonatal",
      "Insuficiência miocárdica direita em HPPRN",
      "Pós-operatório cardíaco neonatal (adjuvante)"
    ],
    "dose": [
      {
        "ind": "Inotrópico neonatal",
        "val": "5–20 mcg/kg/min EV",
        "max": "20 mcg/kg/min",
        "freq": "perfusão contínua",
        "note": "Iniciar com 5 mcg/kg/min e titular pela contractilidade (ecocardiografia) e hemodinâmica"
      }
    ],
    "prep": "Fórmula: (6 × Peso kg) mg em 100 ml SG5% → 1 ml/h = 1 mcg/kg/min. EV central.",
    "ci": [
      "Cardiomiopatia hipertrófica obstrutiva",
      "Taquiarritmias não controladas"
    ],
    "alert": [
      "⚠️ Taquicardia (dose-dependente)",
      "⚠️ Hipotensão se hipovolemia (efeito vasodilatador)",
      "⚠️ Incompatível com bicarbonato e heparina",
      "Frequentemente associada à dopamina ou adrenalina em choque misto"
    ],
    "source": "BNF for Children 2023-24; BNFC Neonatal Formulary 9th Ed"
  },
  {
    "id": "vitamina_d_neo",
    "name": "Vitamina D (Colecalciferol / Ergocalciferol)",
    "category": "neonatologia",
    "src": "added",
    "class": "Vitamina lipossolúvel — regulação metabolismo cálcio/fósforo; imunomodulação",
    "brands": "Vidrop gotas 400 UI/gota; Trifen gotas; D-Pearls 800 UI caps.",
    "indication": [
      "Profilaxia raquitismo em RN e lactentes — obrigatório",
      "Tratamento deficiência vitamina D",
      "Hipocalcemia neonatal (adjuvante ao cálcio)",
      "Prematuridade (necessidades aumentadas)"
    ],
    "dose": [
      {
        "ind": "Profilaxia — RN e lactentes (0–12 meses)",
        "val": "400 UI/dia oral",
        "max": "1000 UI/dia",
        "freq": "1×/dia; iniciar logo após nascimento",
        "note": "Aleitamento materno: suplementação obrigatória (leite materno tem < 25 UI/L). Leite adaptado suplementado: avaliar necessidade"
      },
      {
        "ind": "Prematuro (< 32 semanas)",
        "val": "800–1000 UI/dia",
        "max": "1000 UI/dia",
        "freq": "1×/dia",
        "note": "Necessidades aumentadas; monitorizar 25-OH-D"
      },
      {
        "ind": "Tratamento deficiência (25-OH-D < 30 nmol/L)",
        "val": "1000–2000 UI/dia",
        "max": "4000 UI/dia (< 1 ano)",
        "freq": "1×/dia × 12 semanas",
        "note": "Confirmar com doseamento 25-OH-D após tratamento"
      }
    ],
    "prep": "Gotas orais. Misturar no leite ou na tetina.",
    "ci": [
      "Hipercalcemia",
      "Hipervitaminose D",
      "Nefrolitíase cálcica activa"
    ],
    "alert": [
      "Toxicidade rara com doses fisiológicas",
      "⚠️ Hipercalcemia em sobredosagem crónica — monitorizar cálcio urinário e sérico",
      "Nível alvo 25-OH-D: 50–150 nmol/L"
    ],
    "source": "BNF for Children 2023-24; ESPGHAN 2013; DGS Orientação 2021"
  },
  {
    "id": "ampicilina_neo",
    "name": "Ampicilina Neonatal",
    "category": "neonatologia",
    "src": "added",
    "class": "Aminopenicilina — antibiótico β-lactâmico de amplo espectro neonatal",
    "brands": "Ampicilina 500 mg; 1 g; 2 g pó EV",
    "indication": [
      "Sépsis neonatal precoce — 1ª linha (associada à gentamicina)",
      "Meningite neonatal por GBS, Listeria monocytogenes",
      "Infecção por Listeria (única penicilina eficaz)",
      "Infecção urinária neonatal"
    ],
    "dose": [
      {
        "ind": "Sépsis neonatal — EV",
        "val": "< 7 dias (< 30 sem): 50 mg/kg cada 12h; < 7 dias (≥ 30 sem): 50 mg/kg cada 8h; ≥ 7 dias: 50 mg/kg cada 6–8h",
        "max": "200 mg/kg/dia",
        "freq": "conforme idade gestacional e pós-natal",
        "note": "Associar gentamicina na sépsis. Meningite: 100 mg/kg/dose cada 6–8h"
      },
      {
        "ind": "Meningite por Listeria EV",
        "val": "100 mg/kg/dose EV",
        "max": "—",
        "freq": "cada 6–8h × 14–21 dias",
        "note": "A única β-lactâmico eficaz em Listeria"
      }
    ],
    "prep": "Reconstituir e diluir em SF. Concentração máxima 30 mg/ml. Infusão 15–30 min.",
    "ci": [
      "Alergia a penicilinas",
      "Mononucleose infecciosa"
    ],
    "alert": [
      "⚠️ Monitorizar função renal — ajuste rigoroso na insuf. renal neonatal",
      "Rash maculopapular frequente — não é necessariamente alergia verdadeira",
      "Listeria: ÚNICA indicação em que ampicilina é irresubstituível (cefalosporinas ineficazes)"
    ],
    "source": "BNF for Children 2023-24; BNFC Neonatal Formulary 9th Ed"
  },
  {
    "id": "gentamicina_neo",
    "name": "Gentamicina Neonatal",
    "category": "neonatologia",
    "src": "added",
    "class": "Aminoglicosídeo — antibiótico gram-negativo bactericida",
    "brands": "Gentamicina 40 mg/ml amp.",
    "indication": [
      "Sépsis neonatal — 1ª linha em associação com ampicilina",
      "Infecção urinária por gram-negativos",
      "Meningite neonatal gram-negativo (associada a cefotaxima)"
    ],
    "dose": [
      {
        "ind": "Sépsis neonatal — EV (dose única diária)",
        "val": "< 29 sem: 5 mg/kg cada 48h; 29–35 sem: 4,5 mg/kg cada 36h; ≥ 36 sem: 4 mg/kg cada 24h; > 7 dias (≥ 36 sem): 4,5 mg/kg cada 24h",
        "max": "—",
        "freq": "ver esquema por IG",
        "note": "Dose única diária preferida — melhor eficácia (AUC/MIC) e menor toxicidade que doses divididas"
      },
      {
        "ind": "Meningite gram-negativo",
        "val": "2,5 mg/kg cada 8h (dose dividida)",
        "max": "—",
        "freq": "cada 8h × 21 dias (bacilo gram-negativo)",
        "note": "Dose dividida na meningite para melhor penetração LCR"
      }
    ],
    "prep": "EV: diluir em SF. Concentração 1–2 mg/ml. Infusão 30 min.",
    "ci": [
      "Miastenia gravis",
      "Insuf. renal grave (ajustar intervalo)"
    ],
    "alert": [
      "⚠️ NEFROTOXICIDADE — monitorizar creatinina e débito urinário",
      "⚠️ OTOTOXICIDADE — irreversível. Evitar > 5–7 dias. Rastreio audiológico",
      "⚠️ Monitorizar nível vale (< 1 mg/L antes da 2ª dose). Ajustar intervalo",
      "⚠️ Risco ↑ com furosemida e vancomicina (evitar associação se possível)"
    ],
    "source": "BNF for Children 2023-24; BNFC Neonatal Formulary 9th Ed"
  },
  {
    "id": "cefotaxima_neo",
    "name": "Cefotaxima Neonatal",
    "category": "neonatologia",
    "src": "added",
    "class": "Cefalosporina 3ª geração — antibiótico gram-negativo com boa penetração LCR",
    "brands": "Claforan 500 mg; 1 g; 2 g pó EV",
    "indication": [
      "Meningite neonatal (gram-negativos, GBS) — 1ª linha com ampicilina",
      "Sépsis neonatal tardia (> 72h de vida) — alternativa/adjuvante",
      "Infecção por E. coli, Klebsiella e outros gram-negativos",
      "NÃO usar como substituto da ampicilina para Listeria (resistente)"
    ],
    "dose": [
      {
        "ind": "Meningite / Sépsis grave EV",
        "val": "< 7 dias: 50 mg/kg cada 12h; 7–28 dias: 50 mg/kg cada 8h; > 28 dias: 50 mg/kg cada 6–8h",
        "max": "200 mg/kg/dia",
        "freq": "conforme idade pós-natal",
        "note": "Meningite gram-negativo: 50 mg/kg cada 6h × ≥ 21 dias"
      },
      {
        "ind": "Sépsis tardia moderada EV",
        "val": "50 mg/kg/dose EV",
        "max": "—",
        "freq": "cada 8–12h (conforme idade)",
        "note": ""
      }
    ],
    "prep": "Reconstituir e diluir em SF. Concentração máx. 40 mg/ml. Infusão 15–30 min.",
    "ci": [
      "Hipersensibilidade a cefalosporinas",
      "⛔ NÃO usar com soluções de cálcio em RN — precipitação fatal (FDA Safety Alert 2007)"
    ],
    "alert": [
      "⛔ NÃO administrar simultaneamente com cálcio em RN (mesmo via diferente se < 28 dias) — precipitação pulmonar e renal FATAL",
      "⚠️ Ineficaz contra Listeria — manter ampicilina quando Listeria suspeita/confirmada",
      "Preferida à ceftriaxona em RN pela ausência de problemas com cálcio"
    ],
    "source": "BNF for Children 2023-24; FDA Safety Alert 2007; BNFC Neonatal Formulary 9th Ed"
  },
  {
    "id": "vancomicina_neo",
    "name": "Vancomicina Neonatal",
    "category": "neonatologia",
    "src": "added",
    "class": "Glicopeptídeo — antibiótico gram-positivos resistentes",
    "brands": "Vancocin 500 mg; 1 g pó EV",
    "indication": [
      "Sépsis neonatal tardia por Staphylococcus coagulase-negativo (MRSE) — muito frequente em prematuros com cateter",
      "MRSA neonatal",
      "Meningite por gram-positivos resistentes",
      "Enterocócica resistente"
    ],
    "dose": [
      {
        "ind": "Sépsis / Meningite neonatal EV",
        "val": "< 29 sem (< 14 dias): 15 mg/kg cada 24h; < 29 sem (≥ 14 dias): 15 mg/kg cada 18h; 29–35 sem: 15 mg/kg cada 12h; ≥ 36 sem: 15 mg/kg cada 8h",
        "max": "—",
        "freq": "conforme esquema por IG e idade pós-natal",
        "note": "Monitorização AUC/MIC preferida a monitorização de nível vale isolado (ASHP 2020)"
      },
      {
        "ind": "Ajuste por nível vale (se AUC não disponível)",
        "val": "Alvo vale: 10–15 mg/L (sépsis); 15–20 mg/L (meningite)",
        "max": "—",
        "freq": "colher antes da 4ª dose",
        "note": ""
      }
    ],
    "prep": "EV: diluir para ≤ 5 mg/ml. Infusão 60 min (para dose ≤ 15 mg/kg) — risco síndrome homem vermelho com infusão rápida.",
    "ci": [
      "Hipersensibilidade à vancomicina"
    ],
    "alert": [
      "⚠️ NEFROTOXICIDADE — amplificada com aminoglicosídeos. Monitorizar creatinina",
      "⚠️ SÍNDROME HOMEM VERMELHO (rubor, prurido, hipotensão) — infusão demasiado rápida. NÃO é alergia. Reduzir velocidade e pré-medicar com anti-H1",
      "⚠️ Ototoxicidade (rara com guidelines actuais)",
      "⚠️ Monitorização farmacocinética obrigatória em RN — farmacocinética muito variável"
    ],
    "source": "BNF for Children 2023-24; Rybak MJ. AJHP 2020; BNFC Neonatal Formulary 9th Ed"
  },
  {
    "id": "gluconato_calcio_neo",
    "name": "Gluconato de Cálcio 10% Neonatal",
    "category": "neonatologia",
    "src": "added",
    "class": "Electrólito — cálcio iónico; essencial em múltiplos processos fisiológicos neonatais",
    "brands": "Gluconato de Cálcio 10% (0,22 mmol Ca²⁺/ml)",
    "indication": [
      "Hipocalcemia neonatal precoce (< 72h) — prematuros, filhos de diabéticas, asfixia",
      "Hipocalcemia neonatal tardia (> 72h) — hipoparatiroidismo, défice vitamina D",
      "Hipercaliemia com alterações ECG",
      "Hipermagnesemia sintomática (por sulfato de magnésio materno)"
    ],
    "dose": [
      {
        "ind": "Hipocalcemia sintomática EV (convulsões, tetania)",
        "val": "1–2 ml/kg da sol. 10% EV lento",
        "max": "10 ml/dose",
        "freq": "em 5–10 min; monitorização ECG contínua",
        "note": "= 0,22–0,45 mmol/kg. Repetir se necessário"
      },
      {
        "ind": "Manutenção / Hipocalcemia assintomática EV",
        "val": "0,5–1 mmol/kg/dia",
        "max": "—",
        "freq": "perfusão contínua EV central; ou dividido em doses cada 6–8h",
        "note": ""
      },
      {
        "ind": "Hipercaliemia — cardioprotecção EV",
        "val": "0,5 ml/kg da sol. 10%",
        "max": "10 ml",
        "freq": "em 5–10 min; efeito transitório",
        "note": ""
      }
    ],
    "prep": "EV CENTRAL preferido — concentrações > 10% causam flebite e necrose em periférico. NUNCA IM (necrose). NÃO misturar com bicarbonato (precipita CaCO3) nem fosfato.",
    "ci": [
      "Hipercalcemia",
      "Digitálico (bradicardia/arritmias)"
    ],
    "alert": [
      "⚠️ Bradicardia e assistolia se infusão rápida — monitorização ECG obrigatória",
      "⚠️ Extravasamento causa necrose cutânea grave — confirmar acesso EV antes de administrar",
      "⛔ Incompatível com bicarbonato de sódio e fosfato (precipitação)",
      "⚠️ Potencia toxicidade digitálica"
    ],
    "source": "BNF for Children 2023-24; Jain A. Paediatr Child Health 2010; BNFC Neonatal Formulary 9th Ed"
  },
  {
    "id": "glucose_neo",
    "name": "Glucose Neonatal (Hipoglicemia)",
    "category": "neonatologia",
    "src": "added",
    "class": "Substrato energético — hidratos de carbono; tratamento hipoglicemia neonatal",
    "brands": "Glucose 10% (SG10%); 20%; 30%; 50%",
    "indication": [
      "Hipoglicemia neonatal sintomática — emergência",
      "Hipoglicemia neonatal assintomática persistente",
      "Manutenção GIR (glucose infusion rate) no RN",
      "Hiperinsulinismo neonatal (GIR altas)"
    ],
    "dose": [
      {
        "ind": "Hipoglicemia grave / sintomática EV",
        "val": "200 mg/kg EV em bólus (= 2 ml/kg SG10%)",
        "max": "—",
        "freq": "bólus; seguido de perfusão GIR 6–8 mg/kg/min",
        "note": "Glicemia alvo ≥ 45 mg/dL (2,5 mmol/L) em RN. Após bólus: monitorizar em 15–30 min"
      },
      {
        "ind": "Manutenção GIR neonatal",
        "val": "RN termo: 4–6 mg/kg/min; Prematuro: 4–8 mg/kg/min; Hiperinsulinismo: até 12–15 mg/kg/min",
        "max": "—",
        "freq": "perfusão contínua",
        "note": "GIR (mg/kg/min) = [% glicose × taxa infusão (ml/h)] / (6 × Peso kg)"
      }
    ],
    "prep": "SG10%: padrão para RN. SG50%: APENAS EV central — necrose em periférico. Concentração máxima EV periférico: 12,5%.",
    "ci": [
      "Hiperglicemia não controlada"
    ],
    "alert": [
      "⛔ SG50% NUNCA em EV periférico — necrose tecidular grave",
      "⚠️ Hiperglicemia (frequente em prematuros, stress, corticoides) — monitorizar glicemia",
      "⚠️ Hipoglicemia de rebote se infusão interrompida abruptamente",
      "⚠️ No TCE neonatal: evitar hiperglicemia (agrava lesão cerebral)",
      "Alvo glicemia RN: 45–180 mg/dL (2,5–10 mmol/L)"
    ],
    "source": "BNF for Children 2023-24; Wight N. Paediatr Child Health 2006; Cornblath M. Pediatrics 2000"
  },
  {
    "id": "bicarbonato_neo",
    "name": "Bicarbonato de Sódio Neonatal",
    "category": "neonatologia",
    "src": "added",
    "class": "Tampão alcalino — correcção acidose metabólica",
    "brands": "NaHCO3 4,2% (0,5 mmol/ml) — USO PREFERENCIAL em RN; 8,4% (1 mmol/ml)",
    "indication": [
      "Acidose metabólica grave no RN (pH < 7,15, BE < -10)",
      "Hipercaliemia grave com alterações ECG",
      "PCR neonatal prolongada (após 10 min de suporte e sem ROSC)"
    ],
    "dose": [
      {
        "ind": "Acidose metabólica — EV",
        "val": "1–2 mmol/kg EV (= 2–4 ml/kg da sol. 4,2%)",
        "max": "—",
        "freq": "em 30–60 min; repetir guiado por gasometria",
        "note": "SEMPRE usar solução 4,2% em RN e prematuros (solução 8,4% é hiperosmolar → risco HIV)"
      },
      {
        "ind": "Hipercaliemia grave",
        "val": "1–2 mmol/kg EV",
        "max": "—",
        "freq": "em 5–10 min (efeito transitório — não corrige K+)",
        "note": ""
      }
    ],
    "prep": "⚠️ USAR SOLUÇÃO 4,2% (0,5 mmol/ml) em RN e prematuros — a solução 8,4% causa hiperosmolaridade e risco de hemorragia intraventricular. Infusão lenta.",
    "ci": [
      "Acidose respiratória sem ventilação assegurada",
      "Hipocalcemia não corrigida (relativa)"
    ],
    "alert": [
      "⛔ SOLUÇÃO 8,4% em RN/PREMATURO: risco de HIV por hiperosmolaridade — usar SEMPRE 4,2%",
      "⚠️ Incompatível com cálcio (precipita CaCO3) e adrenalina (inactiva)",
      "⚠️ Paradoxalmente agrava acidose intracelular e cerebral se ventilação inadequada",
      "⚠️ Hipocalcemia após correcção da acidose"
    ],
    "source": "BNF for Children 2023-24; ILCOR NLS 2021; BNFC Neonatal Formulary 9th Ed"
  },
  {
    "id": "fototerapia_protocolo",
    "name": "Fenobarbital (Hiperbilirrubinemia Neonatal)",
    "category": "neonatologia",
    "src": "added",
    "class": "Indutor enzimático — activa UGT1A1 hepática; aumenta conjugação bilirrubina",
    "brands": "Luminal 15 mg/5 ml sol. oral; 200 mg/ml amp. EV",
    "indication": [
      "Hiperbilirrubinemia neonatal refractária (adjuvante à fototerapia)",
      "Colestase neonatal (estimula fluxo biliar)",
      "Síndrome de Crigler-Najjar tipo II (uso crónico)"
    ],
    "dose": [
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
    "prep": "Solução oral 15 mg/5 ml. Comprimidos podem ser dissolvidos.",
    "ci": [
      "Depressão respiratória grave",
      "Porfiria"
    ],
    "alert": [
      "⚠️ Sedação — monitorizar FR e nível de consciência",
      "⚠️ Efeito não imediato (3–7 dias para indução enzimática)",
      "Papel clínico limitado na hiperbilirrubinemia — fototerapia é o tratamento principal"
    ],
    "source": "BNF for Children 2023-24; NICE NG98 Jaundice Guidelines 2016"
  },
  {
    "id": "inositol_neo",
    "name": "Surfactante + Técnica LISA/INSURE",
    "category": "neonatologia",
    "src": "added",
    "class": "Protocolo clínico — administração de surfactante minimamente invasiva",
    "brands": "Curosurf (poractant alfa) 80 mg/ml; LISA catheter; sonda fina Ch5",
    "indication": [
      "SDR neonatal em prematuro com respiração espontânea",
      "Prematuridade < 32 semanas com suporte CPAP/NIPPV",
      "Alternativa à intubação convencional para administração de surfactante"
    ],
    "dose": [
      {
        "ind": "LISA (Less Invasive Surfactant Administration)",
        "val": "200 mg/kg (2,5 ml/kg Curosurf)",
        "max": "—",
        "freq": "dose única; 2ª dose 100 mg/kg após 12h se necessário",
        "note": "Técnica: laringoscopia directa → cateter fino abaixo das cordas vocais → administração em bólus lento sem ventilação forçada"
      },
      {
        "ind": "INSURE (Intubate-Surfactant-Extubate)",
        "val": "200 mg/kg IT",
        "max": "—",
        "freq": "dose única",
        "note": "Intubação breve → surfactante → extubação imediata para CPAP"
      }
    ],
    "prep": "Pré-aquecer a 37°C. NÃO agitar. LISA: usar cateter/sonda específica Ch4–5.",
    "ci": [
      "SDR grave com apneia (LISA não adequada — intubação convencional)",
      "Instabilidade hemodinâmica grave"
    ],
    "alert": [
      "⚠️ LISA: desaturação e bradicardia durante procedimento — ter VPP/reanimação preparada",
      "⚠️ Reduzir FiO2 rapidamente após administração (risco hiperoxia)",
      "⚠️ LISA requer operador experiente — curva aprendizagem",
      "Evidência (ESNEC, NINSAPP, AMV trials): LISA reduz intubação e BDP vs INSURE",
      "Conservar Curosurf a 2–8°C. Não recongelar."
    ],
    "source": "Sweet DG et al. European Consensus Guidelines Neonatology 2023; Göpel W. Lancet 2011 (NINSAPP); Kanmaz HG. Pediatrics 2013"
  },
{
    "id": "palivizumab",
    "name": "Palivizumab (Profilaxia VRS)",
    "category": "neonatologia",
    "class": "Anticorpo monoclonal humanizado anti-VRS (proteína F)",
    "brands": "Synagis — frascos 50 mg/0,5 ml; 100 mg/1 ml",
    "indication": [
      "Profilaxia de bronquiolite grave por VRS em prematuros < 29 semanas GA (≤ 12 meses na época VRS)",
      "Prematuros 29–35 semanas com factores de risco na época VRS",
      "Doença pulmonar crónica da prematuridade (DBP) com terapêutica nas últimas 6 meses",
      "Cardiopatia congenita hemodinamicamente significativa"
    ],
    "dose": [
      {
        "ind": "Profilaxia VRS",
        "val": "15 mg/kg IM",
        "max": "—",
        "freq": "q28–30 dias durante a época VRS (5 doses — Outubro a Fevereiro em Portugal)",
        "note": "IM no vasto lateral da coxa. Volume > 1 ml: dividir por 2 locais. Não existe antídoto — não usar em VRS activo estabelecido (sem evidência terapêutica)"
      }
    ],
    "prep": "IM: não diluir. Refrigerar 2–8°C; não congelar. Usar imediatamente após abertura.",
    "ci": [
      "Trombocitopenia grave (risco hemorragia IM)",
      "Coagulopatia grave"
    ],
    "alert": [
      "⚠️ Profilaxia, não tratamento — não usar após diagnóstico de VRS activo",
      "Reacções no local da injecção (eritema, induração) — frequentes",
      "Anafilaxia rara (0,2%) — observar 30 min após administração",
      "Nirsevimab (Beyfortus) — nova alternativa de dose única para todos os lactentes < 1 ano; eficácia superior (74% vs 55% redução hospitalizações)"
    ],
    "source": "BNF for Children 2023-24; IMpact-RSV Trial. Pediatrics 1998; DGS Circular VRS 2023; Hammitt LL et al. NEJM 2022 (nirsevimab)"
  },
  {
    "id": "ibuprofen_pca_neo",
    "name": "Ibuprofeno EV (PCA Neonatal)",
    "category": "neonatologia",
    "class": "AINE — inibidor COX não selectivo",
    "brands": "Pedea — ampolas 5 mg/ml (2 ml = 10 mg)",
    "indication": [
      "Encerramento do canal arterial persistente hemodinamicamente significativo em prematuro",
      "Alternativa à indometacina quando indometacina não disponível"
    ],
    "dose": [
      {
        "ind": "Encerramento PCA",
        "val": "Dia 1: 10 mg/kg EV; Dias 2–3: 5 mg/kg EV",
        "max": "—",
        "freq": "1 dose/dia × 3 dias (intervalo 24h entre doses)",
        "note": "Eficácia semelhante à indometacina com menor efeito na perfusão cerebral e renal (Ohlsson A et al. Cochrane 2020). Segundo ciclo possível se ecocardiograma confirmar PCA persistente"
      }
    ],
    "prep": "EV: diluir em SF ou SG5% até volume adequado ao peso. Administrar em 15 min. Preparar fresco.",
    "ci": [
      "Hemorragia activa (especialmente IVH grau III-IV)",
      "Trombocitopenia < 60.000/μL",
      "Insuficiência renal (creatinina > 140 μmol/L)",
      "Malformações congenitas dependentes de PCA (coarctação grave, TGA com septo intacto)"
    ],
    "alert": [
      "⚠️ Verificar eco cardíaco antes e após tratamento",
      "⚠️ Oligúria durante tratamento — monitorizar débito urinário e creatinina",
      "⚠️ Não usar com indometacina (sem evidência de benefício adicional, toxicidade aumentada)",
      "Hiperbilirrubinemia — ibuprofeno compete com bilirrubina na albumina (monitorizar bili)",
      "NEC: monitorizar achados abdominais durante tratamento"
    ],
    "source": "BNF for Children 2023-24; Ohlsson A et al. Cochrane 2020; Neofax 2023"
  },
  {
    "id": "fototerapia_neo",
    "name": "Fototerapia (Hiperbilirrubinemia Neonatal)",
    "category": "neonatologia",
    "class": "Tratamento físico — fotoisomerização da bilirrubina",
    "brands": "Equipamento: Bilibed, Biliblanket, lâmpadas LED (comprimento onda 430–490 nm)",
    "indication": [
      "Hiperbilirrubinemia neonatal não-conjugada — limiar por nomograma (AAP 2022/NICE 2023)",
      "Prevenção de kernícterus",
      "Pós-exsanguinotransfusão — manutenção"
    ],
    "dose": [
      {
        "ind": "Fototerapia standard",
        "val": "Irradiância ≥ 8–10 μW/cm²/nm",
        "max": "—",
        "freq": "Contínua (ou com pausas para amamentação). Repetir bilirrubina q6–12h",
        "note": "Fototerapia intensiva (≥ 30 μW/cm²/nm): bilateral (cobertor + lâmpada superior) — usar se bili próxima do limiar de exsanguinotransfusão. Nomograma AAP 2022 revisado substituiu Bhutani 2004"
      }
    ],
    "prep": "Olhos protegidos (penso opaco). Máxima exposição de pele. Hidratação oral aumentada (fototerapia aumenta perdas insensíveis). Temperatura axilar q2–4h.",
    "ci": [
      "Hiperbilirrubinemia conjugada (síndrome Bronze Baby)",
      "Porfiria"
    ],
    "alert": [
      "⚠️ Síndrome Bronze Baby: hiperbilirrubinemia conjugada + fototerapia → pigmentação escura irreversível (temporária)",
      "⚠️ Hipocalcemia — fototerapia aumenta clearance de cálcio; monitorizar Ca²⁺",
      "Hipertermia — monitorizar temperatura; ajustar ambiente",
      "Lesão retiniana teórica se protecção ocular inadequada",
      "Nomograma AAP 2022 diferenciado por risco neurotoxicidade (GA, factores risco) — usar tabelas actualizadas"
    ],
    "source": "AAP Hyperbilirubinemia Guidelines 2022; NICE CG98 2023; Newman TB et al. NEJM 2023"
  },
  {
    "id": "eritropoietina_neo",
    "name": "Eritropoietina (EPO Neonatal)",
    "category": "neonatologia",
    "class": "Factor de crescimento hematopoiético — glicoproteína recombinante",
    "brands": "Eprex (epoetin alfa); NeoRecormon (epoetin beta) — seringas pré-cheias",
    "indication": [
      "Anemia da prematuridade — redução de transfusões (benefício modesto)",
      "Neuroproteção pós-EHI moderada-grave — em investigação (adjuvante ao arrefecimento)",
      "Anemia crónica em prematuridade extrema com múltiplas transfusões"
    ],
    "dose": [
      {
        "ind": "Anemia da prematuridade",
        "val": "200–400 UI/kg/dose SC",
        "max": "—",
        "freq": "3× /semana × 4–6 semanas",
        "note": "Associar ferro EV ou oral (2–6 mg/kg/dia de ferro elemento). Benefício clínico modesto — não elimina necessidade de transfusão (Cochrane 2020)"
      },
      {
        "ind": "Neuroproteção pós-EHI (protocolo)",
        "val": "1000 UI/kg/dose EV",
        "max": "—",
        "freq": "Dias 1, 2, 3 (com início nas primeiras 6h de vida)",
        "note": "Evidência preliminar favorável — ensaios em curso (HEAL trial). Não standard of care ainda"
      }
    ],
    "prep": "SC: administrar não diluído. Refrigerar 2–8°C; não congelar. EV: diluir em soro albumina 0,05% para prevenir adsorção.",
    "ci": [
      "Hipertensão não controlada",
      "Trombose activa",
      "Epilepsia não controlada"
    ],
    "alert": [
      "⚠️ Trombocitose transitória — monitorizar plaquetas",
      "Hipertensão — monitorizar TA",
      "Requer suplementação de ferro para eficácia — ferritina alvo > 100 μg/L",
      "Impacto clínico em anemia da prematuridade limitado — estratégias de minimização de flebotomias e clampagem tardia do cordão mais eficazes (WHO 2014)"
    ],
    "source": "BNF for Children 2023-24; Ohlsson A et al. Cochrane 2020; Wu YW et al. JAMA 2022 (HEAL trial)"
  },
  {
    "id": "acido_tranexamico_neo",
    "name": "Ácido Tranexâmico (Hemorragia Neonatal)",
    "category": "neonatologia",
    "class": "Antifibrinolítico — análogo da lisina",
    "brands": "Transamin; Ácido Tranexâmico Generis — ampolas 500 mg/5 ml",
    "indication": [
      "Hemorragia neonatal grave — peri-operatório de cirurgia cardíaca neonatal",
      "Coagulopatia hemorrágica neonatal refractária",
      "Hemorragia peri-operatória significativa em cirurgia neonatal major"
    ],
    "dose": [
      {
        "ind": "Cirurgia cardíaca neonatal / hemorragia grave",
        "val": "10–15 mg/kg EV carga; depois 1–3 mg/kg/h perfusão",
        "max": "—",
        "freq": "Carga pré-incisão; perfusão durante cirurgia e 4–6h pós-op",
        "note": "Dados pediátricos extrapolados de estudos CRASH-2 e ensaios de cirurgia cardíaca pediátrica"
      }
    ],
    "prep": "EV: diluir em SF ou SG5%. Concentração ≤ 100 mg/ml. Administrar carga em 10–15 min.",
    "ci": [
      "Trombose activa (TVP, TEP)",
      "Hematúria de origem renal alta (risco retenção coágulos)",
      "Convulsões activas (doses altas — efeito GABA antagonista)"
    ],
    "alert": [
      "⚠️ Dose alta (> 100 mg/kg) associada a convulsões — doses neonatais conservadoras (10–15 mg/kg)",
      "⚠️ Risco trombótico em RN de alto risco (policitemia, catéteres, síndrome antifosfolípido materno)",
      "Evidência neonatal limitada — usar apenas em contexto de hemorragia grave com benefício esperado claro"
    ],
    "source": "BNF for Children 2023-24; Faraoni D et al. JTCVS 2014; CRASH-2 Collaborators Lancet 2010"
  }
];

// UCIP Pediatria — Neonatologia
// 9 fármacos
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
  }
];

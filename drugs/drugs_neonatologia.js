// UCIP Pediatria — Neonatologia
// 4 fármacos
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
  }
];

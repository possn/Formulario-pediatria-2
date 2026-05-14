// UCIP Pediatria — Corticoides & Imunossupressores
// 5 fármacos
// Fontes: ver drugs_sources.js

var DRUGS_CORTICOIDES = [
  {
    "id": "dexametasona",
    "name": "Dexametasona",
    "category": "corticoide",
    "class": "Corticoide de alta potência (sem actividade mineralocorticóide)",
    "brands": "Decadron 4 mg/ml; 8 mg/ml",
    "indication": [
      "Meningite bacteriana (redução sequelas neurológicas)",
      "Edema cerebral peritumoral",
      "Laringotraqueíte viral (crupe) — EV/IM",
      "Broncodisplasia pulmonar (RN — regimes curtos)",
      "Extubação difícil (pré-extubação)",
      "Insuf. supra-renal aguda"
    ],
    "dose": [
      {
        "ind": "Meningite bacteriana",
        "val": "0,15 mg/kg/dose EV",
        "max": "10 mg/dose",
        "freq": "4 doses/dia × 4 dias",
        "note": "Iniciar com ou antes da 1ª dose de antibiótico. Evidência mais forte em meningite por H. influenzae e S. pneumoniae"
      },
      {
        "ind": "Crupe moderado-grave",
        "val": "0,15–0,6 mg/kg oral/IM/EV",
        "max": "10 mg",
        "freq": "dose única",
        "note": "0,15 mg/kg oral tão eficaz como 0,6 mg/kg — NRCG meta-analysis 2018"
      },
      {
        "ind": "Edema cerebral peritumoral",
        "val": "0,5 mg/kg/dia EV",
        "max": "16 mg/dia",
        "freq": "2–4 doses/dia",
        "note": ""
      },
      {
        "ind": "Pré-extubação",
        "val": "0,5 mg/kg/dose EV",
        "max": "10 mg",
        "freq": "cada 8h × 3 doses (última dose 1h antes extubação)",
        "note": ""
      },
      {
        "ind": "Insuf. supra-renal aguda",
        "val": "1–2 mg/kg EV bólus",
        "max": "100 mg",
        "freq": "seguido de 1 mg/kg/dia",
        "note": ""
      }
    ],
    "prep": "EV: pode administrar não diluído ou diluído em SF. Administrar em 5–10 min.",
    "ci": [
      "Infecção sistémica não controlada (relativa)",
      "Úlcera péptica activa (relativa)"
    ],
    "alert": [
      "⚠️ Hiperglicemia — monitorizar glicemia",
      "⚠️ Imunossupressão — risco infecção oportunista",
      "⚠️ Insuf. supra-renal após uso prolongado — desmame obrigatório",
      "HTA, hipocaliemia, osteoporose (uso prolongado)",
      "7× mais potente que prednisolona"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24; Cochrane 2015"
  },
  {
    "id": "hidrocortisona",
    "name": "Hidrocortisona",
    "category": "corticoide",
    "class": "Corticoide — actividade gluco + mineralocorticóide",
    "brands": "Solu-Cortef 100 mg; 250 mg; 500 mg pó",
    "indication": [
      "Insuficiência supra-renal aguda (crise addissoniana)",
      "Choque séptico refractário a vasopressores (doses de stress)",
      "Anafilaxia grave (2ª linha após adrenalina)",
      "Asma grave refractária"
    ],
    "dose": [
      {
        "ind": "Insuf. supra-renal aguda / crise addissoniana",
        "val": "CARGA: 50–100 mg/m² EV bólus (ou 1–2 mg/kg)",
        "max": "200 mg bólus",
        "freq": "seguido de 50–100 mg/m²/dia em perfusão contínua ou 4 doses/dia",
        "note": ""
      },
      {
        "ind": "Choque séptico refractário",
        "val": "1–2 mg/kg/dia EV",
        "max": "200 mg/dia",
        "freq": "perfusão contínua ou cada 6–8h",
        "note": "ADRENAL trial e metanálises: benefício incerto em pediatria. Considerar em choque catecol-refractário com suspeita ISR"
      },
      {
        "ind": "Anafilaxia / asma grave",
        "val": "4 mg/kg/dose EV",
        "max": "200 mg/dose",
        "freq": "cada 6h",
        "note": "Efeito diferido 4–6h — não é fármaco de emergência imediata"
      }
    ],
    "prep": "EV: reconstituir e diluir em SF. Concentração máx. 50 mg/ml. Administrar em 5–15 min.",
    "ci": [
      "Infecção fúngica sistémica (relativa)"
    ],
    "alert": [
      "⚠️ Doses de reposição fisiológica (15–20 mg/m²/dia) MUITO diferentes das doses farmacológicas",
      "⚠️ Hiperglicemia intensa",
      "⚠️ Hipocaliemia, HTA, retenção hídrica",
      "Único corticoide com actividade mineralocorticóide significativa — usar na ISR primária"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
  },
  {
    "id": "prednisolona",
    "name": "Prednisolona",
    "category": "corticoide",
    "src": "original",
    "class": "Corticoide oral — potência 4× cortisol, actividade mineralocorticóide mínima",
    "brands": "Lepicortinolo comp. 5/20 mg; sol. oral 1 mg/ml; 5 mg/ml",
    "indication": [
      "Asma aguda moderada-grave (1ª linha oral)",
      "Crupe (alternativa à dexametasona)",
      "Síndrome nefrótico",
      "Doenças inflamatórias (artrite, DII, LES)",
      "Alergias graves",
      "Insuficiência supra-renal (substituição)"
    ],
    "dose": [
      {
        "ind": "Asma aguda oral",
        "val": "1–2 mg/kg/dia oral",
        "max": "40 mg/dia",
        "freq": "1–2 doses/dia × 3–5 dias",
        "note": "Não necessita desmame se < 7 dias"
      },
      {
        "ind": "Síndrome nefrótico — indução",
        "val": "2 mg/kg/dia oral",
        "max": "60 mg/dia",
        "freq": "1 dose/dia (manhã) × 4–6 semanas",
        "note": ""
      },
      {
        "ind": "Síndrome nefrótico — manutenção",
        "val": "1,5 mg/kg em dias alternados",
        "max": "40 mg",
        "freq": "dias alternados × 4–6 semanas",
        "note": ""
      },
      {
        "ind": "Anti-inflamatório geral",
        "val": "1–2 mg/kg/dia",
        "max": "60 mg/dia",
        "freq": "1–2 doses/dia",
        "note": ""
      }
    ],
    "prep": "Solução oral pode misturar em sumo ou leite para mascarar sabor amargo.",
    "ci": [
      "Infecção sistémica não controlada (relativa)",
      "Varicela activa sem tratamento antiviral"
    ],
    "alert": [
      "⚠️ Varicela em doentes imunodeprimidos — risco de varicela grave. Aciclovir profiláctico",
      "⚠️ Insuf. supra-renal após uso prolongado — desmame obrigatório (nunca suspender abruptamente > 2 semanas)",
      "⚠️ Hiperglicemia, HTA, osteoporose, cataratas em uso prolongado",
      "⚠️ Efeito imunossupressor — risco infecções oportunistas",
      "Equivalência: prednisolona 5 mg = dexametasona 0,75 mg = hidrocortisona 20 mg"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
  },
  {
    "id": "ciclosporina",
    "name": "Ciclosporina",
    "category": "imunossupressor",
    "src": "added",
    "class": "Inibidor calcineurina — supressão linfócitos T (IL-2)",
    "brands": "Sandimmun 25/50/100 mg caps.; sol. oral 100 mg/ml; EV 50 mg/ml. Neoral (microemulsão)",
    "indication": [
      "Prevenção rejeição transplante (rim, fígado, coração, medula)",
      "Síndrome nefrótico cortico-resistente",
      "Artrite idiopática juvenil refractária",
      "Psoríase grave / dermatite atópica grave"
    ],
    "dose": [
      {
        "ind": "Transplante órgão sólido — EV (fase aguda)",
        "val": "3–5 mg/kg/dia EV",
        "max": "—",
        "freq": "perfusão contínua 24h ou 2 doses/dia",
        "note": "Monitorização de nível sérico (C0 ou C2) obrigatória"
      },
      {
        "ind": "Transplante — oral (manutenção)",
        "val": "Individualizado pelo nível sérico",
        "max": "—",
        "freq": "2 doses/dia (cada 12h)",
        "note": "Neoral: C0 alvo 100–300 ng/ml (varia por órgão e tempo pós-transplante)"
      },
      {
        "ind": "Síndrome nefrótico",
        "val": "3–5 mg/kg/dia oral",
        "max": "—",
        "freq": "2 doses/dia",
        "note": "Nível C0 alvo: 80–120 ng/ml"
      }
    ],
    "prep": "EV: diluir em SF ou SG5% (1:20 a 1:100). Infusão 2–6h. Evitar PVC (adsorção). Oral: Sandimmun e Neoral NÃO são bioequivalentes — não trocar sem ajuste.",
    "ci": [
      "Hipertensão não controlada",
      "Infecção activa grave",
      "Neoplasia activa (relativa)"
    ],
    "alert": [
      "⚠️ NEFROTÓXICA — monitorizar creatinina. Causa nefropatia crónica em uso prolongado",
      "⚠️ HIPERTENSÃO — muito frequente. Necessita anti-hipertensor",
      "⚠️ Inibidor CYP3A4 — múltiplas interacções (estatinas, antibióticos, antifúngicos)",
      "⚠️ Monitorização obrigatória de nível sérico, creatinina, K+, PA, LFTs",
      "⚠️ Hirsutismo, hipertrofia gengival, tremor",
      "⚠️ Risco linfoma e infecções oportunistas"
    ],
    "source": "BNF for Children 2023-24; Harriet Lane 23rd Ed"
  },
  {
    "id": "tacrolimus",
    "name": "Tacrolimus",
    "category": "imunossupressor",
    "src": "added",
    "class": "Inibidor calcineurina — supressão linfócitos T (10–100× mais potente que ciclosporina)",
    "brands": "Prograf caps. 0,5/1/5 mg; grânulos 0,2/1 mg; EV 5 mg/ml. Advagraf (LP)",
    "indication": [
      "Prevenção e tratamento rejeição transplante — 1ª linha",
      "Doença do enxerto-contra-hospedeiro (GVHD)",
      "Síndrome nefrótico cortico-resistente",
      "Dermatite atópica grave (tópico — fora de UCIP)"
    ],
    "dose": [
      {
        "ind": "Transplante renal — oral",
        "val": "0,1–0,15 mg/kg/dia oral",
        "max": "—",
        "freq": "2 doses/dia (cada 12h em jejum)",
        "note": "Nível C0 alvo: 5–15 ng/ml (varia por fase e órgão)"
      },
      {
        "ind": "Transplante hepático — oral",
        "val": "0,1–0,2 mg/kg/dia oral",
        "max": "—",
        "freq": "2 doses/dia",
        "note": ""
      },
      {
        "ind": "EV (fase aguda pós-transplante)",
        "val": "0,01–0,05 mg/kg/dia EV",
        "max": "—",
        "freq": "perfusão contínua 24h",
        "note": "Converter para oral 1:4 (dose EV × 4 = dose oral)"
      }
    ],
    "prep": "EV: diluir em SF ou SG5% (0,004–0,1 mg/ml). Perfusão contínua. Evitar PVC.",
    "ci": [
      "Hipersensibilidade ao tacrolimus ou ao óleo de rícino (EV)",
      "Uso concomitante com ciclosporina"
    ],
    "alert": [
      "⚠️ NEFROTOXICIDADE — principal limitação. Monitorizar creatinina",
      "⚠️ NEUROTOXICIDADE — tremor, cefaleias, encefalopatia (nível sérico elevado)",
      "⚠️ Hiperglicemia / diabetes mellitus pós-transplante (frequente)",
      "⚠️ Inibidor CYP3A4 — interacções com azólicos, macrolídeos, antiepilépticos",
      "⚠️ Monitorização nível sérico obrigatória (método HPLC em sangue total)",
      "⚠️ Risco linfoma EBV+ (especialmente crianças seronegativas que recebem enxerto EBV+)"
    ],
    "source": "BNF for Children 2023-24; Harriet Lane 23rd Ed"
  }
];

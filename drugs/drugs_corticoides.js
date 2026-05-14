// UCIP Pediatria — Corticoides & Imunossupressores
// 10 fármacos
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
  },
{
    "id": "metilprednisolona",
    "name": "Metilprednisolona EV",
    "category": "corticoide",
    "class": "Corticosteroide — glucocorticoide potente",
    "brands": "Solu-Medrol — frascos 40 mg, 125 mg, 500 mg, 1 g",
    "indication": [
      "Asma aguda grave — adjuvante ao broncodilatador",
      "Croup grave / laringite subglótica",
      "Choque séptico refractário com insuf. supra-renal (dose fisiológica)",
      "Doença inflamatória grave (artrite idiopática juvenil, LES flare, dermatomiosite)",
      "Espasmos infantis — protocolo UKISS/ACTH alternativa",
      "Edema pós-extubação (profilaxia)"
    ],
    "dose": [
      {
        "ind": "Asma aguda / exacerbação inflamatória",
        "val": "1–2 mg/kg/dia EV",
        "max": "60 mg/dia",
        "freq": "q6–12h",
        "note": "Equivalência: 1 mg metilprednisolona = 1,25 mg prednisolona = 0,2 mg dexametasona"
      },
      {
        "ind": "Pulso IV (doenças autoimunes graves)",
        "val": "10–30 mg/kg EV em 1–3h",
        "max": "1 g/dia",
        "freq": "1× /dia × 3 dias",
        "note": "Monitorizar TA, glicemia e ECG durante infusão — risco HTA, hiperglicemia, arritmias"
      },
      {
        "ind": "Profilaxia edema pós-extubação",
        "val": "0,5 mg/kg/dose EV",
        "max": "20 mg/dose",
        "freq": "q6h × 4 doses (início 12h antes extubação planeada)",
        "note": "Reduz estridor pós-extubação em crianças de risco (Khemani RG et al. CCM 2009)"
      }
    ],
    "prep": "EV: reconstituir com diluente fornecido; diluir em SF ou SG5%. Concentração ≤ 5 mg/ml. Administrar em 15–30 min (pulso: 1–3h).",
    "ci": [
      "Infecção sistémica não tratada (relativa — avaliar risco/benefício)",
      "Vacinas vivas (≥ 2 mg/kg/dia por ≥ 14 dias — imunossupressão)",
      "Úlcera péptica activa (relativa)"
    ],
    "alert": [
      "⚠️ Hiperglicemia — monitorizar glicemia q4–6h durante pulso EV",
      "⚠️ Hipertensão arterial — monitorizar TA durante infusão",
      "⚠️ Psicose/agitação com pulsos altos (raro em criança)",
      "⚠️ Insuf. supra-renal iatrogénica após uso prolongado — redução progressiva obrigatória",
      "Mascarar sinais de infecção — vigilância clínica cuidadosa"
    ],
    "source": "BNF for Children 2023-24; GINA 2023; Khemani RG et al. Crit Care Med 2009"
  },
  {
    "id": "micofenolato",
    "name": "Micofenolato de Mofetil (MMF)",
    "category": "corticoide",
    "class": "Imunossupressor — inibidor IMPDH (síntese purinas)",
    "brands": "CellCept — cáps 250 mg; comp 500 mg; susp 200 mg/ml; EV 500 mg",
    "indication": [
      "Profilaxia rejeição aguda em transplante renal, hepático, cardíaco — 2ª linha (com tacrolímus e corticoide)",
      "Nefrite lúpica — 1ª linha classes III-IV (em alternativa a ciclofosfamida)",
      "Síndrome nefrótico córtico-resistente",
      "Dermatomiosite / polimiosite refractária"
    ],
    "dose": [
      {
        "ind": "Transplante (renal/hepático)",
        "val": "600 mg/m²/dose PO",
        "max": "1 g/dose (transplante renal); 1,5 g/dose (transplante hepático)",
        "freq": "q12h",
        "note": "Dose em m² preferida à dose em kg para uniformizar exposição (PK variável)"
      },
      {
        "ind": "Nefrite lúpica / nefrótico córtico-resistente",
        "val": "600 mg/m²/dose PO",
        "max": "1,5 g/dose",
        "freq": "q12h",
        "note": "Monitorizar leucócitos — reduzir dose se leucopenia"
      }
    ],
    "prep": "Oral: suspensão 200 mg/ml — agitar bem. Cápsulas: não abrir (pó teratogénico — usar luvas se manipulação). EV: diluir em SG5%, nunca SF.",
    "ci": [
      "Gravidez (teratogénico — categoria D; contracepção obrigatória)",
      "Hipersensibilidade ao MMF ou ácido micofenólico"
    ],
    "alert": [
      "⚠️ Teratogénico — contracepção obrigatória em adolescentes do sexo feminino; teste de gravidez antes de iniciar",
      "⚠️ Mielossupressão (leucopenia, anemia, trombocitopenia) — hemograma semanal no 1º mês, mensal depois",
      "⚠️ Infecções oportunistas — pneumocistose, CMV — considerar profilaxia",
      "⚠️ Linfoma e outras neoplasias com imunossupressão prolongada",
      "Diarreia e náuseas frequentes — tomar com alimentos; formulação entérica (Myfortic) melhor tolerada GI",
      "Ajuste em insuf. renal grave (TFG < 25 ml/min)"
    ],
    "source": "BNF for Children 2023-24; Appel GB et al. JASN 2009 (nefrite lúpica); KDIGO Transplant Guidelines 2022"
  },
  {
    "id": "azatioprina",
    "name": "Azatioprina",
    "category": "corticoide",
    "class": "Imunossupressor — análogo das purinas (pró-fármaco de 6-mercaptopurina)",
    "brands": "Imuran — comp 25/50 mg; EV 50 mg pó",
    "indication": [
      "Transplante de órgão sólido — manutenção (cada vez mais substituída por MMF)",
      "Doença inflamatória intestinal (Crohn, CU) — manutenção de remissão",
      "Hepatite autoimune — manutenção (com prednisolona)",
      "Nefrite lúpica — manutenção após indução",
      "Dermatomiosite, polimiosite, vasculites"
    ],
    "dose": [
      {
        "ind": "Imunossupressão / DII manutenção",
        "val": "1–3 mg/kg/dia PO",
        "max": "3 mg/kg/dia (150 mg/dia em prática)",
        "freq": "1–2 doses/dia",
        "note": "Iniciar com dose baixa (1 mg/kg) e titular por resposta e tolerância hematológica. Verificar TPMT antes de iniciar"
      }
    ],
    "prep": "Oral: comprimidos — engolir inteiros com água. EV: diluir em SF ou SG5%.",
    "ci": [
      "Deficiência grave de TPMT (risco mielossupressão grave)",
      "Uso concomitante com alopurinol (sem redução de dose — toxicidade grave por acumulação de 6-MP)",
      "Gravidez (relativa — usar apenas se benefício claro)"
    ],
    "alert": [
      "⚠️ Verificar TPMT (tiopurina metiltransferase) antes de iniciar — défice grave: toxicidade hematológica grave",
      "⚠️ Alopurinol inibe xantina-oxidase → acumulação 6-MP → toxicidade grave; se combinação necessária: reduzir azatioprina para 25% da dose",
      "⚠️ Hepatotoxicidade, pancreatite (rara mas grave)",
      "Hemograma semanal no 1º mês, mensal depois",
      "Risco aumentado de linfoma (especialmente linfoma hepatoesplénico de células T em DII)"
    ],
    "source": "BNF for Children 2023-24; ECCO-ESPGHAN IBD Guidelines 2018; Colombel JF et al. NEJM 2010"
  },
  {
    "id": "metotrexato_imuno",
    "name": "Metotrexato (Imunossupressor)",
    "category": "corticoide",
    "class": "Antagonista do folato — imunossupressor em doses baixas",
    "brands": "Metotrexato — comp 2,5 mg; 10 mg; seringas pré-cheias SC 7,5/10/15/20/25 mg",
    "indication": [
      "Artrite idiopática juvenil (AIJ) — 1ª linha sistémica",
      "Psoríase grave pediátrica",
      "Dermatomiosite juvenil refractária",
      "Doença de Crohn refractária",
      "Manutenção de remissão em asma grave córtico-dependente"
    ],
    "dose": [
      {
        "ind": "AIJ / doenças reumatológicas",
        "val": "10–15 mg/m²/semana PO/SC",
        "max": "20–25 mg/semana",
        "freq": "1× /semana (sempre no mesmo dia)",
        "note": "SC preferível a PO: melhor biodisponibilidade e menos náuseas GI. Associar ácido fólico 5 mg 24–48h após cada dose"
      }
    ],
    "prep": "SC: seringas pré-cheias — administrar em abdómen ou coxa. PO: comprimidos 2,5 mg — ingestão semanal.",
    "ci": [
      "Insuficiência renal (TFG < 60 ml/min — acumulação grave)",
      "Insuficiência hepática significativa",
      "Gravidez (teratogénico — categoria X)",
      "Infecção activa grave"
    ],
    "alert": [
      "⚠️ SEMPRE associar ácido fólico (5 mg/semana, no dia seguinte) — reduz toxicidade GI e hematológica sem reduzir eficácia",
      "⚠️ Hepatotoxicidade — TFH trimestralmente; evitar álcool",
      "⚠️ Pneumonite de hipersensibilidade — dispneia, febre, infiltrados — rara mas grave; suspender imediatamente",
      "⚠️ Teratogénico — contracepção obrigatória; suspender ≥ 3 meses antes de gravidez",
      "⚠️ Toxicidade aumentada com AINEs e cotrimoxazol (reduzem clearance renal)",
      "Mucosite oral — reduz com ácido fólico"
    ],
    "source": "BNF for Children 2023-24; Ravelli A et al. Ann Rheum Dis 1995; ACR JIA Guidelines 2021"
  },
  {
    "id": "hidroxicloroquina",
    "name": "Hidroxicloroquina",
    "category": "corticoide",
    "class": "Antimalárico — imunossupressor / anti-inflamatório",
    "brands": "Plaquenil — comp 200 mg",
    "indication": [
      "Lúpus eritematoso sistémico (LES) — tratamento base (todas as formas)",
      "Artrite reumatóide / AIJ — adjuvante",
      "Síndromes de sobreposição (overlap syndromes)",
      "Fotossensibilidade e manifestações cutâneas do LES"
    ],
    "dose": [
      {
        "ind": "LES / doenças autoimunes",
        "val": "5 mg/kg/dia PO (dose real de peso — não ideal)",
        "max": "400 mg/dia",
        "freq": "1–2 doses/dia com refeições",
        "note": "Dose MÁXIMA: 5 mg/kg/dia de peso real (não ideal) — acima deste limiar risco retinal aumenta progressivamente"
      }
    ],
    "prep": "Oral: comprimidos 200 mg — podem ser triturados e misturados com alimentos.",
    "ci": [
      "Retinopatia ou maculopatia pré-existente",
      "Hipersensibilidade a cloroquina/antimaláricos",
      "Deficiência de G6PD (hemólise — relativa)"
    ],
    "alert": [
      "⚠️ Retinopatia — irreversível; monitorizar com OCT e campo visual anualmente após 5 anos de uso (ACR 2016)",
      "Prolongamento QT — monitorizar ECG se factores de risco",
      "Miopatia e cardiomiopatia (raro, uso muito prolongado)",
      "Efeito terapêutico demora 3–6 meses — não descontinuar precocemente por falta de resposta imediata",
      "Protege contra flares de LES e reduz mortalidade — tratar como fármaco basal obrigatório"
    ],
    "source": "BNF for Children 2023-24; Melles RB et al. JAMA Ophthalmol 2014; EULAR LES Guidelines 2023"
  }
];

// UCIP Pediatria — Corticoides & Imunossupressores
// 12 fármacos
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
      "Insuf. supra-renal aguda",
      "Antiemético — adjuvante de 1ª linha na NVIQ moderada a altamente emetizante",
      "Edema cerebral por tumor ou metástases",
      "Síndrome de lise tumoral — redução inflamação",
      "Leucemia linfoblástica aguda — parte de protocolos quimioterápicos (BFM, COG)"
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
      },
      {
        "ind": "Antiemético (QT altamente emetizante)",
        "val": "0,25 mg/kg EV",
        "max": "8–12 mg",
        "freq": "30 min antes QT + q6h",
        "note": "Associar a ondansetron ± aprepitant"
      },
      {
        "ind": "Edema cerebral por tumor",
        "val": "0,5–2 mg/kg/dia EV/PO",
        "max": "16 mg/dia",
        "freq": "q6h",
        "note": "Dose de indução 1–2 mg/kg; reduzir para dose de manutenção ao fim de 48–72h"
      }
    ],
    "prep": "EV: pode administrar não diluído (4 mg/ml) em bólus 5–10 min, ou diluir em SF/SG5%. Oral: solução 2 mg/5 ml; comprimidos 0,5/2 mg. Concentração máxima EV: 10 mg/ml (formulação concentrada hospitalar). Compatível com a maioria dos fármacos em Y-site. Fonte: BNF for Children 2023-24; NHS Medusa 2024.",
    "ci": [
      "Infecção sistémica não controlada (relativa)",
      "Úlcera péptica activa (relativa)",
      "Infecção fúngica sistémica não tratada",
      "Vacinas vivas"
    ],
    "alert": [
      "⚠️ Hiperglicemia — monitorizar glicemia",
      "⚠️ Imunossupressão — risco infecção oportunista",
      "⚠️ Insuf. supra-renal após uso prolongado — desmame obrigatório",
      "HTA, hipocaliemia, osteoporose (uso prolongado)",
      "7× mais potente que prednisolona",
      "⚠️ Hiperglicemia — monitorizar glicemia q6h, especialmente em contexto de protocolo QT",
      "Imunossupressão — risco infecções oportunistas; pneumocistose profilaxia obrigatória em protocolos prolongados",
      "Insuf. supra-renal com retirada abrupta após uso prolongado"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24; Cochrane 2015; BNF for Children 2023-24; Dupuis LL et al. Pediatr Blood Cancer 2013; SIOPE CNS Tumor Guidelines"
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
      "Asma grave refractária",
      "Insuficiência supra-renal primária (Addison) — terapia de substituição",
      "Hiperplasia supra-renal congénita (HAC)",
      "Dose de stress em doente com ISR conhecida",
      "Pan-hipopituitarismo"
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
      },
      {
        "ind": "Reposição fisiológica oral",
        "val": "8–10 mg/m²/dia oral",
        "max": "—",
        "freq": "3 doses/dia (manhã 50%, tarde 25%, noite 25%)",
        "note": "HAC: 10–15 mg/m²/dia (doses mais altas para supressão androgénios)"
      },
      {
        "ind": "Dose de stress (doença minor)",
        "val": "2–3× dose habitual",
        "max": "—",
        "freq": "até resolução da doença",
        "note": ""
      },
      {
        "ind": "Dose de stress major/cirurgia EV",
        "val": "50–100 mg/m² EV bólus → 50–100 mg/m²/dia",
        "max": "200 mg",
        "freq": "perfusão contínua ou cada 6h",
        "note": ""
      }
    ],
    "prep": "EV: reconstituir 100 mg em 2 ml SWFI (50 mg/ml); diluir em SF ou SG5%. Dose de carga (choque): administrar em 5–15 min. Doses de manutenção: 30 min. Concentração máxima EV: 50 mg/ml. IM: solução reconstituída sem diluição. Oral: comprimidos 10/20 mg; solução 10 mg/5 ml. Fonte: BNF for Children 2023-24; NHS Medusa 2024.",
    "ci": [
      "Infecção fúngica sistémica (relativa)",
      "Infecção não controlada (relativa)"
    ],
    "alert": [
      "⚠️ Doses de reposição fisiológica (15–20 mg/m²/dia) MUITO diferentes das doses farmacológicas",
      "⚠️ Hiperglicemia intensa",
      "⚠️ Hipocaliemia, HTA, retenção hídrica",
      "Único corticoide com actividade mineralocorticóide significativa — usar na ISR primária",
      "⚠️ Dose de reposição é MUITO diferente da dose farmacológica",
      "⚠️ Não suspender abruptamente — desmame gradual",
      "⚠️ Bracelete de alerta médico obrigatória em ISR crónica",
      "⚠️ Pais/doente devem ter injecção EV/IM de emergência em casa",
      "Monitorizar crescimento, PA e glicemia em uso crónico"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24; BNF for Children 2023-24; Endocrine Society Guidelines 2016"
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
    "prep": "Oral: solução 1 mg/ml ou 5 mg/ml — pode misturar em sumo ou leite para mascarar sabor amargo. Comprimidos 5/25 mg — podem ser triturados. EV (metilprednisolona succinato = forma EV; prednisolona = oral/IM): solução IM/EV 25 mg/ml. Tomar com alimentos (reduz irritação gástrica). Fonte: BNF for Children 2023-24.",
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
    "class": "Inibidor calcineurina — supressão linfócitos T (IL-2)",
    "brands": "Sandimmun 25/50/100 mg caps.; sol. oral 100 mg/ml; EV 50 mg/ml. Neoral (microemulsão)",
    "indication": [
      "Prevenção rejeição transplante (rim, fígado, coração, medula)",
      "Síndrome nefrótico cortico-resistente",
      "Artrite idiopática juvenil refractária",
      "Psoríase grave / dermatite atópica grave",
      "Colite ulcerosa grave aguda refractária a corticoides EV — rescue therapy",
      "Alternativa ao infliximab na CU grave"
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
      },
      {
        "ind": "CU grave refractária a corticoides",
        "val": "2 mg/kg/dia EV perfusão contínua",
        "max": "—",
        "freq": "Perfusão contínua 24h; converter para oral após resposta (5–8 mg/kg/dia em 2 doses)",
        "note": "Nível sérico alvo: 150–250 ng/mL (monitorizar q2–3 dias). Duração máxima 3–7 dias EV"
      }
    ],
    "prep": "EV: diluir em SF ou SG5% para 0,5–2,5 mg/ml. ⚠️ Evitar PVC — adsorção (usar vidro ou polietileno). Perfusão contínua 24h. Oral: solução 100 mg/ml — misturar em sumo de laranja ou maçã (NÃO toranja/grapefruit — inibe CYP3A4). Comprimidos não são bioequivalentes às diferentes formulações — não substituir sem TDM.",
    "ci": [
      "Hipertensão não controlada",
      "Infecção activa grave",
      "Neoplasia activa (relativa)",
      "HTA não controlada",
      "Insuficiência renal grave",
      "Hipomagnesiemia/hipocolesterolémia (risco aumentado de neurotoxicidade)"
    ],
    "alert": [
      "⚠️ NEFROTÓXICA — monitorizar creatinina. Causa nefropatia crónica em uso prolongado",
      "⚠️ HIPERTENSÃO — muito frequente. Necessita anti-hipertensor",
      "⚠️ Inibidor CYP3A4 — múltiplas interacções (estatinas, antibióticos, antifúngicos)",
      "⚠️ Monitorização obrigatória de nível sérico, creatinina, K+, PA, LFTs",
      "⚠️ Hirsutismo, hipertrofia gengival, tremor",
      "⚠️ Risco linfoma e infecções oportunistas",
      "⚠️ Nefrotoxicidade — monitorizar creatinina diariamente",
      "⚠️ Neurotoxicidade (convulsões, encefalopatia) — risco com hipomagnesemia, hipocolesterolemia, HTA; nível sérico < 300 ng/mL",
      "⚠️ HTA — monitorizar TA",
      "⚠️ Inúmeras interacções — ver ciclosporina em corticoides",
      "Pontes para colectomia ou biológico — não é terapêutica de manutenção indefinida"
    ],
    "source": "BNF for Children 2023-24; Harriet Lane 23rd Ed; BNF for Children 2023-24; Turner D et al. Gastroenterology 2011; ECCO CU Guidelines 2019"
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
    "prep": "Oral: cápsulas 0,5/1/5 mg (Prograf) — em JEJUM, 1h antes ou 2–3h após refeição (alimentos reduzem Cmax 50%). Comprimidos LP (Advagraf) — 1× /dia, SEMPRE em jejum. Solução oral 0,5 mg/ml. EV: diluir em SF ou SG5% para 0,004–0,1 mg/ml; tubagem PE ou PVC não-plastificado (adsorção PVC). Via central. Fonte: BNF for Children 2023-24; NHS Medusa 2024.",
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
    "prep": "Oral: suspensão 200 mg/ml — agitar bem 1 min antes de usar; refrigerar. Cápsulas 250 mg — NÃO abrir (pó teratogénico — luvas obrigatórias se manipulação). Comprimidos 500 mg — NÃO triturar. EV: diluir em SG5% APENAS (não em SF). Tomar com ou sem alimentos (com alimentos reduz Cmax mas não AUC). Fonte: BNF for Children 2023-24; SmPC CellCept.",
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
    "prep": "Oral: comprimidos 25/50 mg — engolir inteiros com água (sabor muito amargo). EV: reconstituir 50 mg em 5–15 ml SWFI; diluir em SF ou SG5% para 0,5–5 mg/ml; administrar em 30–60 min. ⚠️ Pó teratogénico e mutagénico — usar luvas se manipulação de comprimidos partidos. Fonte: BNF for Children 2023-24.",
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
    "prep": "SC: seringas pré-cheias (5–25 mg/0,4–1 ml) — injectar em abdómen ou coxa anterior. PO: comprimidos 2,5/10 mg — tomar em DIA FIXO semanal; não confundir com dose diária (erros letais documentados). ⚠️ Teratogénico — luvas ao manipular; nunca esmagar sem protecção. Fonte: BNF for Children 2023-24; NHS Medusa 2024.",
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
    "prep": "Oral: comprimidos 200 mg — podem ser triturados e misturados com alimentos. Solução extemporânea 25 mg/5 ml (estável 60 dias refrigerada). Tomar COM refeições (reduz irritação GI). ⚠️ Efeito terapêutico demora 3–6 meses — não descontinuar precocemente. Fonte: BNF for Children 2023-24.",
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
  },
  {
    "id": "everolimus",
    "name": "Everolímus",
    "category": "corticoide",
    "class": "Inibidor mTOR — imunossupressor / antiproliferativo",
    "brands": "Certican — comp 0,25/0,5/0,75 mg; Afinitor — comp 2,5/5/7,5/10 mg; Votubia (TSC) — comp 2,5/5/10 mg",
    "indication": [
      "Transplante renal/cardíaco — imunossupressão de manutenção (Certican)",
      "Esclerose tuberosa complexa (TSC) — SEGA, angiomiolipomas, linfangioleiomiomatose (Votubia)",
      "Neoplasias endócrinas pancreáticas, carcinoma renal de células claras (Afinitor)"
    ],
    "dose": [
      {
        "ind": "Transplante — manutenção",
        "val": "0,8 mg/m²/dose PO",
        "max": "—",
        "freq": "q12h; ajustar por nível sérico (alvo 3–8 ng/mL com ICN; 6–12 ng/mL sem)",
        "note": "TDM obrigatório — variabilidade PK significativa"
      },
      {
        "ind": "TSC — SEGA / angiomiolipoma",
        "val": "4,5 mg/m²/dia PO",
        "max": "—",
        "freq": "1 dose/dia; alvo nível 5–15 ng/mL",
        "note": ""
      }
    ],
    "prep": "Oral: comprimidos Certican (0,25/0,5/0,75 mg) — dispersíveis em 30 ml água (agitar 3 min); Afinitor/Votubia — engolir inteiros ou esmagar. Tomar SEMPRE com ou SEMPRE sem alimentos (escolher e manter consistente — alimentos aumentam Cmax 35%). Solução oral: Votubia 2 mg/ml. Fonte: BNF for Children 2023-24; SmPC Certican.",
    "ci": [
      "Hipersensibilidade a everolímus, sirolímus ou excipientes",
      "Infecção activa grave"
    ],
    "alert": [
      "⚠️ Pneumonite não infecciosa — tosse seca, dispneia; Rx/TC obrigatório; suspender se grau ≥ 2",
      "⚠️ Imunossupressão — infecções oportunistas; profilaxia PJP recomendada",
      "⚠️ Interacções CYP3A4 e P-gp — azóis aumentam drasticamente os níveis",
      "Estomatite/mucosite — usar colutório de dexametasona tópica (não mentol)",
      "Hiperlipidémia, hiperglicemia — monitorizar",
      "Cicatrização deficiente — descontinuar peri-operatório"
    ],
    "source": "BNF for Children 2023-24; Franz DN et al. Lancet 2013 (TSC); KDIGO Transplant 2022"
  },
  {
    "id": "basiliximab",
    "name": "Basiliximab",
    "category": "corticoide",
    "class": "Anticorpo monoclonal quimérico anti-IL-2Rα (anti-CD25) — antagonista receptor IL-2",
    "brands": "Simulect — frascos 10 mg (< 35 kg) e 20 mg (≥ 35 kg)",
    "indication": [
      "Profilaxia de rejeição aguda em transplante renal — em combinação com ciclosporina e corticoides",
      "Transplante hepático pediátrico — indução (off-label frequente)",
      "Doença enxerto-versus-hospedeiro aguda (aGVHD) refractária — off-label"
    ],
    "dose": [
      {
        "ind": "Transplante renal/hepático — indução",
        "val": "< 35 kg: 10 mg EV; ≥ 35 kg: 20 mg EV",
        "max": "20 mg/dose",
        "freq": "2 doses: dia 0 (2h antes transplante) e dia 4 pós-transplante",
        "note": "Não repetir se rejeição grave ou infecção grave no intervalo"
      }
    ],
    "prep": "EV: reconstituir 20 mg em 5 ml SWFI (4 mg/ml); girar suavemente até dissolver. Diluir em SF ou SG5% para volume final de 50 ml. Administrar em 20–30 min. ⚠️ NÃO agitar após reconstituição. Estabilidade: 24h a 4°C; 4h a 25°C. Fonte: BNF for Children 2023-24; SmPC Simulect.",
    "ci": ["Hipersensibilidade ao basiliximab"],
    "alert": [
      "⚠️ Anafilaxia grave (rara < 0,1%) — ter adrenalina disponível; não re-administrar se anafilaxia prévia",
      "Síndrome de libertação de citocinas — rara com basiliximab (vs OKT3/timoglobulina)",
      "Não aumenta significativamente o risco de infecções oportunistas vs placebo",
      "Sem necessidade de TDM — dosagem fixa por peso",
      "Vigilância de infecções virais pós-transplante (CMV, EBV) conforme protocolo"
    ],
    "source": "BNF for Children 2023-24; Offner G et al. Pediatr Nephrol 2002; KDIGO Transplant 2022"
  },
  {
    "id": "belimumab",
    "name": "Belimumab",
    "category": "corticoide",
    "class": "Anticorpo monoclonal anti-BLyS (anti-BAFF) — inibidor sobrevivência células B",
    "brands": "Benlysta EV — frascos 120/400 mg; SC — 200 mg/ml seringas",
    "indication": [
      "LES pediátrico activo (≥ 5 anos) com autoanticorpos positivos — adjuvante à terapêutica standard",
      "Nefrite lúpica activa (≥ 5 anos) — em combinação com pulso de ciclofosfamida ou micofenolato"
    ],
    "dose": [
      {
        "ind": "LES pediátrico — EV",
        "val": "10 mg/kg EV em 1h",
        "max": "—",
        "freq": "Semanas 0, 2, 4; depois q4 semanas",
        "note": "Resposta avaliada a 6 meses — se sem melhoria documentada ponderar descontinuação"
      }
    ],
    "prep": "EV: reconstituir 120 mg em 1,5 ml ou 400 mg em 4,8 ml SWFI (girar suavemente 60 seg — não agitar). Diluir em SF 250 ml. ⚠️ Não agitar o frasco reconstituído — espuma inactiva o anticorpo. Administrar em 1h. Estabilidade: 8h a 25°C após diluição.",
    "ci": [
      "Infecção activa grave",
      "Hipersensibilidade"
    ],
    "alert": [
      "⚠️ Reacção infusional — pré-medicar com anti-histamínico e paracetamol",
      "⚠️ Infecções graves — risco aumentado; evitar se infecção activa",
      "⚠️ Depressão e ideação suicida — monitorizar humor (ensaios clínicos reportaram aumento)",
      "Rastrear TB e VHB antes de iniciar",
      "Eficácia modesta na nefrite lúpica como monoterapia — usar adjuvante ao imunossupressor standard"
    ],
    "source": "BNF for Children 2023-24; Brunner HI et al. Arthritis Rheumatol 2020 (PLUTO pediátrico); EULAR LES 2023"
  }
];

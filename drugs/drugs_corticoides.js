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
        "ind": "Meningite bacteriana — adjuvante (antes ou com a 1.ª dose de antibiótico), 3 meses–17 anos",
        "val": "0,15 mg/kg EV lento cada 6 h durante 4 dias",
        "max": "10 mg/dose",
        "freq": "Cada 6 h × 4 dias",
        "note": "BNFC 2020-21 (p. 474)."
      },
      {
        "ind": "Crupe ligeiro — oral",
        "val": "0,15 mg/kg, dose única",
        "max": "—",
        "freq": "Dose única",
        "note": "BNFC 2020-21 (p. 474)."
      },
      {
        "ind": "Crupe grave (ou ligeiro com risco de complicações) — oral/EV",
        "val": "0,15 mg/kg; repetir 0,15 mg/kg e novamente às 12 h, se necessário",
        "max": "—",
        "freq": "Até 3 doses",
        "note": "BNFC 2020-21 (p. 474). Doses até 0,6 mg/kg em dose única são usadas noutras normas, mas não constam do BNFC."
      },
      {
        "ind": "Edema cerebral com risco de vida — EV",
        "val": "< 35 kg: 16,7 mg inicial; depois 3,3 mg cada 3 h × 3 dias; 3,3 mg cada 6 h × 1 dia; 1,7 mg cada 6 h × 4 dias; reduzir 0,8 mg/dia. ≥ 35 kg: 20,8 mg inicial; depois 3,3 mg cada 2 h × 3 dias; cada 4 h × 1 dia; cada 6 h × 4 dias; reduzir 1,7 mg/dia",
        "max": "—",
        "freq": "Esquema decrescente",
        "note": "BNFC 2020-21 (p. 474)."
      },
      {
        "ind": "Supressão de doenças inflamatórias/alérgicas — oral",
        "val": "10–100 mcg/kg/dia em 1–2 doses; até 300 mcg/kg/dia em emergência",
        "max": "—",
        "freq": "1–2×/dia",
        "note": "BNFC 2020-21 (p. 474)."
      },
      {
        "ind": "Supressão de doenças inflamatórias/alérgicas — EV/IM, 1 mês–11 anos",
        "val": "83–333 mcg/kg/dia em 1–2 doses",
        "max": "20 mg/dia",
        "freq": "1–2×/dia",
        "note": "BNFC 2020-21 (p. 474). 12–17 anos: inicial 0,4–20 mg/dia."
      },
      {
        "ind": "Reposição fisiológica — oral/EV lento",
        "val": "250–500 mcg/m² cada 12 h",
        "max": "—",
        "freq": "Cada 12 h",
        "note": "BNFC 2020-21 (p. 474)."
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
    "source": "BNFC 2020-21, Dexamethasone (p. 474); Formulário de Pediatria 3ª Ed.",
    "review": ["Removidos por não constarem do BNFC 2020-21: pré-extubação 0,5 mg/kg q8h, antiemético em QT 0,25 mg/kg, edema peritumoral 0,5–2 mg/kg/dia e bólus de 1–2 mg/kg em insuficiência suprarrenal (a hidrocortisona é o fármaco de escolha). Confirmar em protocolo local se necessário.", "O BNFC não define a duração da dexametasona pré-extubação nem a dose para edema peritumoral; a ficha anterior excedia a dose máxima pediátrica habitual."]
  
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
        "ind": "Insuficiência suprarrenal aguda (crise addisoniana) — RN",
        "val": "10 mg EV lento; depois 100 mg/m²/dia em perfusão ou em doses cada 6–8 h; reduzir em 4–5 dias para dose oral",
        "max": "—",
        "freq": "Perfusão contínua ou cada 6–8 h",
        "note": "BNFC 2020-21 (p. 476)."
      },
      {
        "ind": "Insuficiência suprarrenal aguda (crise addisoniana) — 1 mês–11 anos",
        "val": "2–4 mg/kg EV; depois 2–4 mg/kg cada 6 h; reduzir em 4–5 dias para dose oral",
        "max": "—",
        "freq": "Cada 6 h",
        "note": "BNFC 2020-21 (p. 476)."
      },
      {
        "ind": "Insuficiência suprarrenal aguda (crise addisoniana) — 12–17 anos",
        "val": "100 mg EV cada 6–8 h",
        "max": "—",
        "freq": "Cada 6–8 h",
        "note": "BNFC 2020-21 (p. 476)."
      },
      {
        "ind": "Hipotensão refractária a inotrópicos e volume — RN (evidência limitada)",
        "val": "2,5 mg/kg EV; repetir às 4 h se necessário; depois 2,5 mg/kg cada 6 h durante 48 h ou até recuperação da PA; reduzir ao longo de ≥ 48 h",
        "max": "—",
        "freq": "Cada 6 h",
        "note": "BNFC 2020-21 (p. 476)."
      },
      {
        "ind": "Hipotensão refractária a inotrópicos e volume / choque séptico — criança (evidência limitada)",
        "val": "1 mg/kg EV cada 6 h",
        "max": "100 mg/dose",
        "freq": "Cada 6 h",
        "note": "BNFC 2020-21 (p. 476). Perfusão contínua 50 mg/m²/dia usada em algumas normas (Surviving Sepsis Campaign Children 2020)."
      },
      {
        "ind": "Asma aguda grave / com risco de vida — EV",
        "val": "4 mg/kg cada 6 h; alternativa 1–11 meses 25 mg; 2–4 anos 50 mg; ≥ 5 anos 100 mg cada 6 h, até passar a prednisolona oral",
        "max": "100 mg/dose",
        "freq": "Cada 6 h",
        "note": "BNFC 2020-21 (p. 476). Preferir succinato de sódio."
      },
      {
        "ind": "Reações de hipersensibilidade agudas / angioedema — IM/EV",
        "val": "1–5 meses 25 mg; 6 meses–5 anos 50 mg; 6–11 anos 100 mg; 12–17 anos 200 mg; 3×/dia",
        "max": "—",
        "freq": "3×/dia",
        "note": "BNFC 2020-21 (p. 476). Adjuvante: a adrenalina é o tratamento de 1.ª linha na anafilaxia."
      },
      {
        "ind": "Hiperplasia suprarrenal congénita — oral",
        "val": "9–15 mg/m²/dia em 3 doses (RN e criança)",
        "max": "—",
        "freq": "3 doses/dia",
        "note": "BNFC 2020-21 (p. 476)."
      },
      {
        "ind": "Reposição na insuficiência suprarrenal crónica / doença de Addison — oral",
        "val": "8–10 mg/m²/dia em 3 doses, a maior de manhã",
        "max": "—",
        "freq": "3 doses/dia",
        "note": "BNFC 2020-21 (p. 476). Não usar comprimidos bucais muco-adesivos (alerta MHRA 2018)."
      },
      {
        "ind": "Doença inflamatória intestinal — indução de remissão, 2–17 anos",
        "val": "2,5 mg/kg EV cada 6 h; ou perfusão contínua 10 mg/kg/dia",
        "max": "100 mg/dose; 400 mg/dia na perfusão",
        "freq": "Cada 6 h",
        "note": "BNFC 2020-21 (p. 476)."
      },
      {
        "ind": "Dose de stress — doença menor (oral)",
        "val": "2–3× a dose habitual de reposição até resolução",
        "max": "—",
        "freq": "Até resolução",
        "note": "Não consta do BNFC; ver revisão pendente."
      },
      {
        "ind": "Dose de stress major / cirurgia — EV",
        "val": "50–100 mg/m² EV em bólus; depois 50–100 mg/m²/dia em perfusão ou cada 6 h",
        "max": "200 mg (bólus)",
        "freq": "Perfusão ou cada 6 h",
        "note": "Não consta do BNFC; ver revisão pendente."
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
    "source": "BNFC 2020-21, Hydrocortisone (p. 476); Formulário de Pediatria 3ª Ed.; Surviving Sepsis Campaign Children 2020",
    "review": ["As doses de stress (doença menor e major/cirurgia) não constam do BNFC 2020-21; mantidas da ficha anterior, a confirmar com a Endocrinologia.", "A ficha anterior tinha asma com máximo de 200 mg/dose e anafilaxia a 4 mg/kg; o BNFC 2020-21 indica máximo de 100 mg/dose na asma e doses fixas por idade na hipersensibilidade.", "Choque séptico: a ficha anterior tinha 1–2 mg/kg/dia (máx. 200 mg/dia); o BNFC indica 1 mg/kg cada 6 h (máx. 100 mg/dose)."]
  
  },
  {
    "id": "prednisolona",
    "name": "Prednisolona",
    "category": "corticoide",
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
        "ind": "Asma aguda (PO)",
        "val": "1 mês–11 anos: 1–2 mg/kg/dia; 12–17 anos: 40–50 mg/dia",
        "max": "40 mg/dia (1 mês–11 anos)",
        "freq": "1×/dia, ≥3 dias (12–17 anos: ≥5 dias)",
        "note": "BNFC 2020-21, Prednisolone (p. 478). Asma grave/em risco de vida: 2 mg/kg/dia (máx. 60 mg) se corticoide oral >alguns dias."
      },
      {
        "ind": "Laringite (croup)",
        "val": "1–2 mg/kg PO (antes da transferência)",
        "max": "—",
        "freq": "Dose única",
        "note": "BNFC 2020-21 (p. 478). Shann: 1 mg/kg e repetir às 12 h; grave 4 mg/kg e depois 1 mg/kg 8/8 h."
      },
      {
        "ind": "Doenças auto-imunes inflamatórias (AIJ, LES, etc.)",
        "val": "Inicial 1–2 mg/kg/dia, reduzir ao fim de alguns dias",
        "max": "60 mg/dia",
        "freq": "1×/dia",
        "note": "BNFC 2020-21 (p. 478). Hepatite auto-imune: 2 mg/kg/dia (máx. 40 mg)."
      },
      {
        "ind": "Síndrome nefrótico / rejeição de transplante",
        "val": "60 mg/m²/dia, reduzir ao longo de vários meses",
        "max": "80 mg/dia",
        "freq": "1×/dia",
        "note": "Shann, Drug Doses (entrada Prednisolone)."
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
    "source": "BNF for Children 2020-21, Prednisolone (p. 478); Shann F. Drug Doses"
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
        "ind": "Colite ulcerosa refractária — oral, 2–17 anos",
        "val": "Inicial 2 mg/kg 2×/dia; ajustar à concentração sanguínea e resposta",
        "max": "5 mg/kg/dose (2×/dia)",
        "freq": "2×/dia",
        "note": "BNFC 2020-21 (p. 559)."
      },
      {
        "ind": "Colite ulcerosa refractária — perfusão EV, 3–17 anos",
        "val": "Inicial 0,5–1 mg/kg 2×/dia; ajustar à concentração sanguínea e resposta",
        "max": "—",
        "freq": "2×/dia",
        "note": "BNFC 2020-21 (p. 559). Alternativa em ECCO-ESPGHAN: 2 mg/kg/dia em perfusão contínua."
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
    "source": "BNFC 2020-21, Ciclosporin (p. 559); ECCO-ESPGHAN IBD Guidelines 2018",
    "review": ["Doses de transplante (EV 3–5 mg/kg/dia) e síndrome nefrótico (3–5 mg/kg/dia) mantidas da ficha anterior; não consegui confirmar no BNFC 2020-21 (a página de transplante não foi lida). Confirmar com o nível sérico e o protocolo local.", "As doses EV de 1–2,5 mg/kg/dia que encontrei no BNFC 2020-21 (p. 558) referem-se à globulina antitimocítica, não à ciclosporina."]
  
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
        "ind": "Transplante hepático — oral, RN e criança",
        "val": "Inicial 150 mcg/kg 2×/dia, começando 12 h após o transplante",
        "max": "—",
        "freq": "2×/dia",
        "note": "BNFC 2020-21 (p. 561). Ajustar ao nível sérico (vale). Enterocolite e interação com azóis e macrólidos."
      },
      {
        "ind": "Transplante renal — oral, RN e criança",
        "val": "Inicial 150 mcg/kg 2×/dia, nas primeiras 24 h; 100 mcg/kg 2×/dia em adolescentes para evitar vales muito altos",
        "max": "—",
        "freq": "2×/dia",
        "note": "BNFC 2020-21 (p. 561)."
      },
      {
        "ind": "Transplante cardíaco — oral, RN e criança",
        "val": "Com indução de anticorpos: inicial 50–150 mcg/kg 2×/dia, nos primeiros 5 dias; sem indução: 150 mcg/kg 2×/dia, 8–12 h após suspender a perfusão EV",
        "max": "—",
        "freq": "2×/dia",
        "note": "BNFC 2020-21 (p. 561)."
      },
      {
        "ind": "Transplante hepático — perfusão EV contínua 24 h (se via oral inadequada)",
        "val": "Inicial 50 mcg/kg/dia, até 7 dias",
        "max": "—",
        "freq": "Perfusão contínua 24 h",
        "note": "BNFC 2020-21 (p. 562). Doses EV e orais não são intermutáveis."
      },
      {
        "ind": "Transplante renal — perfusão EV contínua 24 h (se via oral inadequada)",
        "val": "Inicial 75–100 mcg/kg/dia, até 7 dias",
        "max": "—",
        "freq": "Perfusão contínua 24 h",
        "note": "BNFC 2020-21 (p. 562)."
      },
      {
        "ind": "Transplante cardíaco sem indução — perfusão EV contínua 24 h",
        "val": "Inicial 30–50 mcg/kg/dia, até 7 dias",
        "max": "—",
        "freq": "Perfusão contínua 24 h",
        "note": "BNFC 2020-21 (p. 562). Incompatível com PVC."
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
    "source": "BNFC 2020-21, Tacrolimus (pp. 561–562)",
    "review": ["A ficha anterior tinha 0,1–0,15 mg/kg/dia no rim e 0,1–0,2 mg/kg/dia no fígado, bem abaixo das doses iniciais do BNFC 2020-21 (150 mcg/kg 2×/dia = 0,3 mg/kg/dia). Corrigido; a dose EV de 10–50 mcg/kg/dia no rim e fígado também era inferior."]
  
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
        "ind": "Transplante renal com ciclosporina — oral",
        "val": "600 mg/m² 2×/dia",
        "max": "2 g/dia",
        "freq": "2×/dia",
        "note": "BNFC 2020-21 (p. 566). Consultar protocolo local."
      },
      {
        "ind": "Transplante renal com tacrolimus — oral",
        "val": "300 mg/m² 2×/dia",
        "max": "2 g/dia",
        "freq": "2×/dia",
        "note": "BNFC 2020-21 (p. 566). Consultar protocolo local."
      },
      {
        "ind": "Transplante hepático (com ciclosporina ou tacrolimus) — oral",
        "val": "10 mg/kg 2×/dia, aumentando para 20 mg/kg 2×/dia",
        "max": "2 g/dia",
        "freq": "2×/dia",
        "note": "BNFC 2020-21 (p. 566)."
      },
      {
        "ind": "Nefrite lúpica / síndrome nefrótico córtico-resistente (não consta do BNFC)",
        "val": "600 mg/m² 2×/dia",
        "max": "1,5 g/dose",
        "freq": "2×/dia",
        "note": "Appel GB et al. JASN 2009; KDIGO. Indicação fora do BNFC 2020-21."
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
    "source": "BNFC 2020-21, Mycophenolate mofetil (p. 566); Appel GB et al. JASN 2009",
    "review": ["A ficha anterior usava 600 mg/m² 2×/dia em qualquer transplante; o BNFC 2020-21 reduz para 300 mg/m² 2×/dia quando associado ao tacrolimus (máx. 2 g/dia)."]
  
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
        "ind": "Colite ulcerosa / doença de Crohn grave — oral, 2–17 anos",
        "val": "Inicial 2 mg/kg 1×/dia; aumentar se necessário até 2,5 mg/kg 1×/dia",
        "max": "2,5 mg/kg/dia",
        "freq": "1×/dia",
        "note": "BNFC 2020-21 (p. 558). Ajustar ao TPMT."
      },
      {
        "ind": "LES, vasculite e doenças autoimunes (quando corticoides insuficientes) — oral",
        "val": "Inicial 1 mg/kg/dia; ajustar à resposta até 3 mg/kg/dia",
        "max": "3 mg/kg/dia",
        "freq": "1–2×/dia",
        "note": "BNFC 2020-21 (p. 558). Considerar suspender se sem melhoria em 3 meses."
      },
      {
        "ind": "Supressão de rejeição de transplante — oral ou EV",
        "val": "Manutenção 1–3 mg/kg/dia, ajustado à resposta",
        "max": "—",
        "freq": "1–2×/dia (1× por dia ou dividido)",
        "note": "BNFC 2020-21 (p. 558). Via oral preferida. Reduzir para um quarto da dose se associado a alopurinol."
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
    "source": "BNFC 2020-21, Azathioprine (p. 558); ECCO-ESPGHAN IBD Guidelines 2018",
    "review": ["Pesquisar atividade da TPMT antes de iniciar (BNFC 2020-21)."]
  
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
        "ind": "AIJ, dermatomiosite juvenil, vasculite, uveíte, LES, esclerodermia localizada, sarcoidose — oral/SC/IM",
        "val": "Inicial 10–15 mg/m² 1×/semana; aumentar se necessário até 25 mg/m² 1×/semana",
        "max": "—",
        "freq": "1×/semana, sempre no mesmo dia",
        "note": "BNFC 2020-21 (p. 587). Dose semanal: erro de toma diária é potencialmente fatal. Ácido fólico 1 mg/dia nos outros dias."
      },
      {
        "ind": "Doença de Crohn grave — SC/IM, 7–17 anos",
        "val": "15 mg/m² 1×/semana",
        "max": "25 mg/dose",
        "freq": "1×/semana",
        "note": "BNFC 2020-21 (p. 587). Manutenção oral/SC/IM na dose mais baixa eficaz."
      },
      {
        "ind": "Psoríase grave (uso especializado) — oral, 2–17 anos",
        "val": "Inicial 200 mcg/kg 1×/semana (máx. 10 mg); aumentar se necessário até 400 mcg/kg 1×/semana",
        "max": "25 mg/dose",
        "freq": "1×/semana",
        "note": "BNFC 2020-21 (p. 587). Suspender se resposta inadequada após 3 meses."
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
    "source": "BNFC 2020-21, Methotrexate (p. 587); ACR JIA Guideline 2019",
    "review": ["A ficha anterior máx. 20–25 mg/semana em dose absoluta; o BNFC 2020-21 refere até 25 mg/m²/semana em doenças reumatológicas."]
  
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
        "ind": "Artrite reumatoide/AIJ, LES e lúpus discoide, dermatoses fotossensíveis — oral",
        "val": "5–6,5 mg/kg 1×/dia, pelo peso ideal",
        "max": "400 mg/dose",
        "freq": "1×/dia, com refeições",
        "note": "BNFC 2020-21 (p. 690). Rastreio oftalmológico anual (Melles, JAMA Ophthalmol 2014)."
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
    "source": "BNFC 2020-21, Hydroxychloroquine sulfate (p. 690); Melles RB et al. JAMA Ophthalmol 2014",
    "review": ["A ficha anterior limitava a 5 mg/kg/dia; o BNFC 2020-21 admite 5–6,5 mg/kg/dia (peso ideal)."]
  
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
    "source": "BNF for Children 2020-21, Everolimus (p. 605)",
    "review": ["BNFC 2020-21: SEGA/epilepsia na esclerose tuberosa — \"consultar RCM\". As doses em mg/m² e os alvos de nível não têm fonte verificada neste conjunto de documentos. Confirmar no RCM / protocolo de transplante."]

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
        "ind": "Profilaxia da rejeição em transplante renal alogénico — EV, 1–17 anos, < 35 kg",
        "val": "10 mg nas 2 h antes da cirurgia; 10 mg ao dia 4 após a cirurgia",
        "max": "—",
        "freq": "2 doses",
        "note": "BNFC 2020-21 (p. 566). Omitir 2.ª dose se hipersensibilidade grave ou perda do enxerto."
      },
      {
        "ind": "Profilaxia da rejeição em transplante renal alogénico — EV, 1–17 anos, ≥ 35 kg",
        "val": "20 mg nas 2 h antes da cirurgia; 20 mg ao dia 4 após a cirurgia",
        "max": "—",
        "freq": "2 doses",
        "note": "BNFC 2020-21 (p. 566). Diluir até ≤ 400 mcg/mL e administrar em 20–30 min."
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
    "source": "BNFC 2020-21, Basiliximab (p. 566); NICE TA482 (2017)",
    "review": ["A segunda dose é ao dia 4 após a cirurgia. A indicação em transplante hepático da ficha anterior não consta do BNFC 2020-21 (indicado só em transplante renal; o uso em transplante cardíaco aumenta o risco de efeitos cardíacos graves)."]

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
    "source": "Brunner HI et al. Arthritis Rheumatol 2020 (PLUTO); não consta do BNFC 2020-21",
    "review": ["O belimumab não consta do BNFC 2020-21: a dose (10 mg/kg EV às semanas 0, 2, 4 e depois cada 4 semanas) provém do ensaio PLUTO (Brunner 2020) e não foi verificada contra as fontes do utilizador."]

  }
];

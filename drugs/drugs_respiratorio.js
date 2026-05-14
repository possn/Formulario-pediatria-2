// UCIP Pediatria — Respiratório & Alergologia
// 10 fármacos
// Fontes: ver drugs_sources.js

var DRUGS_RESPIRATORIO = [
  {
    "id": "salbutamol",
    "name": "Salbutamol (Albuterol)",
    "category": "broncodilatador",
    "class": "Agonista β2-adrenérgico de curta duração (SABA)",
    "brands": "Ventolin; Salamol. Inalador 100 mcg/inalação. Nebulização 5 mg/ml. EV 500 mcg/ml.",
    "indication": [
      "Broncoespasmo / asma aguda — 1ª linha",
      "Hipercaliemia grave (efeito transitório)",
      "Broncodisplasia pulmonar (RN)"
    ],
    "dose": [
      {
        "ind": "Asma aguda — nebulização",
        "val": "< 20 kg: 2,5 mg; > 20 kg: 5 mg",
        "max": "5 mg/dose",
        "freq": "cada 20 min nas primeiras 3 doses; depois cada 1–4h",
        "note": "Nebulização contínua em asma grave: 0,5 mg/kg/hora (máx. 20 mg/hora)"
      },
      {
        "ind": "MDI + espaçador (preferida)",
        "val": "< 6 anos: 2–6 inalações (200–600 mcg); > 6 anos: 4–8 inalações",
        "max": "—",
        "freq": "cada 20 min (agudo); cada 4–6h (manutenção)",
        "note": "Evidência: MDI + espaçador tão eficaz como nebulização em asma moderada"
      },
      {
        "ind": "EV (asma grave / falência inalatória)",
        "val": "CARGA: 15 mcg/kg EV em 10 min; MANUTENÇÃO: 1–5 mcg/kg/min",
        "max": "250 mcg bólus",
        "freq": "perfusão contínua",
        "note": "Monitorização ECG (taquicardia, hipocaliemia)"
      },
      {
        "ind": "Hipercaliemia",
        "val": "2,5–5 mg nebulização",
        "max": "—",
        "freq": "dose única (efeito 30–60 min)",
        "note": "Associar a outros tratamentos (não usar como tratamento único)"
      }
    ],
    "prep": "Nebulização: diluir em 3–5 ml SF. EV: diluir em SF ou SG5%.",
    "ci": [
      "Taquicardia não explicada (relativa)"
    ],
    "alert": [
      "⚠️ Hipocaliemia (monitorizar K+ em uso intensivo)",
      "⚠️ Taquicardia e tremor — dose-dependentes",
      "⚠️ Hiperglicemia",
      "⚠️ Acidose láctica com altas doses EV",
      "Tolerância a broncodilatação com uso muito frequente"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; GINA 2023; BNF for Children 2023-24"
  },
  {
    "id": "hidroxizina",
    "name": "Hidroxizina",
    "category": "antihistaminico",
    "src": "added",
    "class": "Anti-histamínico H1 de 1ª geração — também ansiolítico e antipruriginoso",
    "brands": "Atarax comp. 10/25 mg; xarope 10 mg/5 ml",
    "indication": [
      "Prurido alérgico (urticária, eczema, dermatite)",
      "Ansiedade e agitação (pré-medicação procedimentos)",
      "Náuseas e vómitos (2ª linha)",
      "Insónia de curta duração"
    ],
    "dose": [
      {
        "ind": "Prurido / Urticária oral",
        "val": "0,5 mg/kg/dose",
        "max": "25 mg/dose (< 6 anos); 50 mg/dose (> 6 anos)",
        "freq": "3–4×/dia",
        "note": ""
      },
      {
        "ind": "Ansiedade / Pré-medicação oral",
        "val": "1 mg/kg/dose",
        "max": "50 mg/dose",
        "freq": "dose única 30–60 min antes procedimento",
        "note": "Efeito sedativo útil em pré-medicação"
      },
      {
        "ind": "Adulto",
        "val": "25 mg",
        "max": "100 mg/dose",
        "freq": "3–4×/dia",
        "note": ""
      }
    ],
    "prep": "Oral. Xarope pode ser misturado com água ou sumo.",
    "ci": [
      "Prolongamento QT congénito",
      "Porfiria",
      "Gravidez (1º trimestre)"
    ],
    "alert": [
      "⚠️ Sedação significativa — não conduzir/operar máquinas",
      "⚠️ Prolongamento QTc — evitar com outros fármacos que prolongam QT",
      "⚠️ Efeitos anticolinérgicos: retenção urinária, obstipação, xerostomia",
      "Efeito antiemético e antipruriginoso duplo — útil em UCIP"
    ],
    "source": "BNF for Children 2023-24; Harriet Lane 23rd Ed"
  },
  {
    "id": "cetirizina",
    "name": "Cetirizina",
    "category": "antihistaminico",
    "src": "added",
    "class": "Anti-histamínico H1 de 2ª geração — não sedativo (ou minimamente)",
    "brands": "Zyrtec comp. 10 mg; gotas 10 mg/ml; xarope 1 mg/ml",
    "indication": [
      "Rinite alérgica sazonal e perene",
      "Urticária crónica",
      "Conjuntivite alérgica",
      "Reacção alérgica leve (complemento à adrenalina no 2º plano)"
    ],
    "dose": [
      {
        "ind": "6 meses – 1 ano oral",
        "val": "2,5 mg/dia",
        "max": "2,5 mg/dia",
        "freq": "1×/dia",
        "note": ""
      },
      {
        "ind": "1–2 anos oral",
        "val": "2,5 mg",
        "max": "5 mg/dia",
        "freq": "1–2×/dia",
        "note": ""
      },
      {
        "ind": "2–6 anos oral",
        "val": "2,5–5 mg",
        "max": "5 mg/dia",
        "freq": "1–2×/dia",
        "note": ""
      },
      {
        "ind": "6–12 anos oral",
        "val": "5–10 mg",
        "max": "10 mg/dia",
        "freq": "1×/dia",
        "note": ""
      },
      {
        "ind": "≥ 12 anos / adulto",
        "val": "10 mg",
        "max": "10 mg/dia",
        "freq": "1×/dia",
        "note": ""
      }
    ],
    "prep": "Gotas: 10 mg/ml (1 mg = 1 gota → 0,1 ml). Pode misturar em água ou sumo.",
    "ci": [
      "Insuf. renal grave (ajustar dose)"
    ],
    "alert": [
      "Mínima sedação (vantagem vs 1ª geração)",
      "Ajuste renal: TFG 30–50: 5 mg/dia; TFG < 30: 5 mg em dias alternados",
      "Seguro a partir dos 6 meses"
    ],
    "source": "BNF for Children 2023-24"
  },
  {
    "id": "loratadina",
    "name": "Loratadina",
    "category": "antihistaminico",
    "src": "added",
    "class": "Anti-histamínico H1 de 2ª geração — não sedativo",
    "brands": "Clarityne comp. 10 mg; xarope 1 mg/ml",
    "indication": [
      "Rinite alérgica",
      "Urticária crónica",
      "Conjuntivite alérgica"
    ],
    "dose": [
      {
        "ind": "2–12 anos (< 30 kg) oral",
        "val": "5 mg/dia",
        "max": "5 mg/dia",
        "freq": "1×/dia",
        "note": ""
      },
      {
        "ind": "≥ 12 anos ou > 30 kg",
        "val": "10 mg/dia",
        "max": "10 mg/dia",
        "freq": "1×/dia",
        "note": ""
      }
    ],
    "prep": "Xarope 1 mg/ml. Comprimido pode ser dissolvido em água.",
    "ci": [
      "Hipersensibilidade"
    ],
    "alert": [
      "Não sedativo — vantagem sobre cetirizina em algumas crianças",
      "Metabolizado pelo CYP3A4 — interacção com eritromicina, cetoconazol (↑ loratadina)",
      "Ajuste em insuf. hepática grave"
    ],
    "source": "BNF for Children 2023-24"
  },
  {
    "id": "difenidramina",
    "name": "Difenidramina",
    "category": "antihistaminico",
    "src": "added",
    "class": "Anti-histamínico H1 de 1ª geração — sedativo, anticolinérgico",
    "brands": "Benadryl; antídoto em reacções extrapiramidais (EV)",
    "indication": [
      "Reacções extrapiramidais por metoclopramida/haloperidol — antídoto EV",
      "Reacção alérgica aguda (urticária, angioedema) — adjuvante",
      "Prurido intenso",
      "Cinetose (prevenção)"
    ],
    "dose": [
      {
        "ind": "Reacção extrapiramidal EV/IM",
        "val": "1 mg/kg EV/IM",
        "max": "50 mg/dose",
        "freq": "dose única; pode repetir cada 6h",
        "note": "Efeito em 2–5 min EV — tratamento de eleição para distonia aguda"
      },
      {
        "ind": "Alergia / Prurido oral/EV",
        "val": "1–1,5 mg/kg/dose",
        "max": "50 mg/dose",
        "freq": "cada 6–8h",
        "note": ""
      },
      {
        "ind": "Adulto",
        "val": "25–50 mg",
        "max": "300 mg/dia",
        "freq": "cada 6–8h",
        "note": ""
      }
    ],
    "prep": "EV: pode administrar não diluído ou diluído em SF. Administrar em 2–5 min.",
    "ci": [
      "< 2 anos (risco convulsões e depressão SNC)",
      "Glaucoma ângulo fechado",
      "Hipertrofia prostática"
    ],
    "alert": [
      "⚠️ Sedação intensa — não usar em ambulatório sem supervisão",
      "⚠️ Efeitos anticolinérgicos: xerostomia, retenção urinária, obstipação",
      "⚠️ Paradoxalmente excitação em crianças pequenas",
      "⚠️ NÃO usar < 2 anos (risco morte súbita em lactentes)",
      "Útil como antídoto EV nas distonias agudas"
    ],
    "source": "BNF for Children 2023-24; Harriet Lane 23rd Ed"
  },
  {
    "id": "clemastina",
    "name": "Clemastina",
    "category": "antihistaminico",
    "src": "added",
    "class": "Anti-histamínico H1 de 1ª geração — uso EV em emergência alérgica",
    "brands": "Tavegyl 2 mg/2 ml EV/IM; comp. 1 mg",
    "indication": [
      "Reacção alérgica aguda / anafilaxia (adjuvante — após adrenalina)",
      "Urticária aguda grave",
      "Angioedema (adjuvante)",
      "Prurido grave"
    ],
    "dose": [
      {
        "ind": "Reacção alérgica EV/IM",
        "val": "0,025–0,05 mg/kg/dose",
        "max": "2 mg/dose",
        "freq": "pode repetir cada 12h",
        "note": "Adjuvante — adrenalina é sempre 1ª linha na anafilaxia"
      },
      {
        "ind": "Adulto EV",
        "val": "2 mg EV lento",
        "max": "6 mg/dia",
        "freq": "cada 12h",
        "note": ""
      }
    ],
    "prep": "EV: diluir em 5–10 ml SF. Administrar lentamente em 2–3 min.",
    "ci": [
      "< 1 ano",
      "Glaucoma",
      "Hipertrofia prostática"
    ],
    "alert": [
      "⚠️ NÃO substitui adrenalina na anafilaxia — é apenas adjuvante",
      "⚠️ Sedação",
      "Os anti-histamínicos NÃO tratam broncoespasmo nem choque anafiláctico"
    ],
    "source": "BNF for Children 2023-24"
  },
  {
    "id": "ipratropio",
    "name": "Brometo de Ipratrópio",
    "category": "broncodilatador",
    "src": "original",
    "class": "Broncodilatador anticolinérgico — antagonista muscarínico M3",
    "brands": "Atrovent 0,25 mg/ml nebulização; 20 mcg/inalação MDI",
    "indication": [
      "Asma aguda grave (adjuvante ao salbutamol nas primeiras horas)",
      "DPOC (exacerbação)",
      "Broncoespasmo refractário ao salbutamol"
    ],
    "dose": [
      {
        "ind": "Asma aguda — nebulização (< 12 anos)",
        "val": "0,25 mg (1 ml) por nebulização",
        "max": "0,5 mg/dose",
        "freq": "cada 20–30 min × 3 doses (1ª hora); depois cada 4–6h",
        "note": "Misturar com salbutamol na mesma nebulização — efeito sinérgico"
      },
      {
        "ind": "Asma aguda — nebulização (≥ 12 anos / adulto)",
        "val": "0,5 mg por nebulização",
        "max": "2 mg/dia",
        "freq": "cada 20–30 min × 3; depois cada 4–6h",
        "note": ""
      }
    ],
    "prep": "Pode misturar com salbutamol na mesma câmara de nebulização. Diluir em SF se necessário.",
    "ci": [
      "Glaucoma de ângulo fechado (nebulização — proteger olhos)",
      "Hipersensibilidade à atropina"
    ],
    "alert": [
      "⚠️ Proteger os olhos durante nebulização (broncoconstrição paradoxal + midríase se contacto ocular)",
      "Efeito aditivo com salbutamol — sempre associar na asma grave",
      "Efeito principalmente nas vias aéreas centrais (complementa salbutamol nas periféricas)"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; GINA 2023; BNF for Children 2023-24"
  },
  {
    "id": "aminofilina",
    "name": "Aminofilina",
    "category": "broncodilatador",
    "src": "original",
    "class": "Metilxantina — inibidor PDE, antagonista adenosina, estimulante centro respiratório",
    "brands": "Aminofilina 25 mg/ml amp. EV",
    "indication": [
      "Asma grave / status asmático refractário ao salbutamol EV",
      "Apneia da prematuridade (alternativa à cafeína — uso em declínio)",
      "DPOC exacerbação grave"
    ],
    "dose": [
      {
        "ind": "Asma grave — carga EV",
        "val": "5 mg/kg EV em 20–30 min",
        "max": "500 mg",
        "freq": "dose única de carga",
        "note": "Omitir carga se já em teofilina. Monitorização ECG obrigatória"
      },
      {
        "ind": "Manutenção EV",
        "val": "< 9 anos: 1 mg/kg/hora; 9–16 anos: 0,8 mg/kg/hora; adulto: 0,5 mg/kg/hora",
        "max": "—",
        "freq": "perfusão contínua",
        "note": "Nível terapêutico: 10–20 mg/L. Colher nível 4h após início"
      },
      {
        "ind": "Apneia prematuridade (alternativa cafeína)",
        "val": "Carga 6 mg/kg → manutenção 2–3 mg/kg cada 8–12h",
        "max": "—",
        "freq": "cada 8–12h",
        "note": ""
      }
    ],
    "prep": "Diluir em SF ou SG5%. Infusão lenta — bólus rápido causa arritmias graves.",
    "ci": [
      "Arritmias cardíacas",
      "Epilepsia activa (relativa)",
      "Úlcera péptica activa"
    ],
    "alert": [
      "⚠️ JANELA TERAPÊUTICA ESTREITA — toxicidade com níveis > 20 mg/L",
      "⚠️ Toxicidade: náuseas, vómitos, taquicardia, arritmias, convulsões",
      "⚠️ Múltiplas interacções: eritromicina, ciprofloxacina, cimetidina ↑ níveis; rifampicina, fenitoína ↓ níveis",
      "⚠️ Fumadores: clearance aumentada (precisam doses maiores)",
      "Monitorizar nível sérico e ECG"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
  },
  {
    "id": "montelucaste",
    "name": "Montelucaste",
    "category": "broncodilatador",
    "src": "added",
    "class": "Antagonista receptor leucotrienos (LTRA) — anti-inflamatório respiratório oral",
    "brands": "Singulair comp. 4/5/10 mg; granulados 4 mg saqueta",
    "indication": [
      "Asma persistente leve-moderada (manutenção, adjuvante)",
      "Rinite alérgica sazonal (≥ 2 anos)",
      "Prevenção broncoespasmo induzido por exercício"
    ],
    "dose": [
      {
        "ind": "6 meses – 5 anos oral",
        "val": "4 mg/dia (granulados)",
        "max": "4 mg/dia",
        "freq": "1×/dia ao deitar",
        "note": ""
      },
      {
        "ind": "6–14 anos oral",
        "val": "5 mg/dia (comp. mastigável)",
        "max": "5 mg/dia",
        "freq": "1×/dia ao deitar",
        "note": ""
      },
      {
        "ind": "≥ 15 anos / adulto",
        "val": "10 mg/dia",
        "max": "10 mg/dia",
        "freq": "1×/dia ao deitar",
        "note": ""
      }
    ],
    "prep": "Granulados: misturar em colher de comida mole (puré, etc.). Não dissolver em água.",
    "ci": [
      "Hipersensibilidade"
    ],
    "alert": [
      "⚠️ Alterações neuropsiquiátricas (agitação, pesadelos, depressão, ideação suicida) — FDA Black Box Warning 2020",
      "⚠️ Informar pais — monitorizar comportamento e humor",
      "⚠️ Síndrome de Churg-Strauss (vasculite eosinofílica) — raro, geralmente em desmame de esteroides",
      "Não é broncodilatador de resgate — apenas manutenção"
    ],
    "source": "BNF for Children 2023-24; FDA Safety Communication 2020"
  },
  {
    "id": "budesonida",
    "name": "Budesonida",
    "category": "broncodilatador",
    "src": "original",
    "class": "Corticoide inalado — anti-inflamatório brônquico local",
    "brands": "Pulmicort 0,25/0,5/1 mg/2 ml nebulização; 100/200 mcg turbuhaler",
    "indication": [
      "Asma persistente — tratamento de manutenção (1ª linha)",
      "Crupe moderado-grave (nebulização — alternativa à dexametasona oral)",
      "Broncodisplasia pulmonar (RN — regimes curtos, alta vigilância)"
    ],
    "dose": [
      {
        "ind": "Asma manutenção — nebulização (< 8 anos)",
        "val": "0,25–0,5 mg 2×/dia",
        "max": "1 mg/dia",
        "freq": "2×/dia",
        "note": ""
      },
      {
        "ind": "Asma manutenção — inalador (≥ 5 anos)",
        "val": "100–200 mcg 2×/dia",
        "max": "800 mcg/dia",
        "freq": "2×/dia",
        "note": "Lavar boca após inalação"
      },
      {
        "ind": "Crupe — nebulização dose única",
        "val": "2 mg nebulização",
        "max": "2 mg",
        "freq": "dose única (repetir após 12h se necessário)",
        "note": "Efeito em 30–60 min — similar à dexametasona oral"
      }
    ],
    "prep": "Nebulização: pode misturar em SF. Agitar suavemente antes de usar.",
    "ci": [
      "Infecção respiratória fúngica activa"
    ],
    "alert": [
      "⚠️ Supressão supra-renal em doses altas prolongadas (> 800 mcg/dia)",
      "⚠️ Candidose orofaríngea — lavar boca após cada inalação",
      "⚠️ Atraso do crescimento em doses altas (monitorizar estatura anualmente)",
      "Não é broncodilatador de resgate — apenas manutenção e crupe"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; GINA 2023; BNF for Children 2023-24"
  }
];

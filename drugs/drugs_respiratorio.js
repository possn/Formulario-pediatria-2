// UCIP Pediatria — Respiratório & Alergologia
// 14 fármacos
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
        "ind": "Asma aguda moderada/grave/com risco de vida — nebulização",
        "val": "1 mês–4 anos: 2,5 mg; 5–11 anos: 2,5–5 mg; 12–17 anos: 5 mg. Repetir cada 20–30 min ou conforme necessário, com nebulizador a oxigénio",
        "max": "—",
        "freq": "Cada 20–30 min",
        "note": "BNFC 2020-21 (p. 164). Mínimo 0,3 mL da solução na nebulização (volume mínimo do nebulizador)."
      },
      {
        "ind": "Asma aguda moderada/grave — inalador pressurizado com espaçador de grande volume",
        "val": "2–10 puffs de 100 mcg, inalados um a um; repetir cada 10–20 min ou conforme necessário",
        "max": "—",
        "freq": "Cada 10–20 min",
        "note": "BNFC 2020-21 (p. 164). Máscara bem ajustada < 3 anos."
      },
      {
        "ind": "Asma aguda — EV em injeção (reservar para quem não pode inalar ou sem resposta)",
        "val": "1–23 meses: 5 mcg/kg; 2–17 anos: 15 mcg/kg em 5 min",
        "max": "250 mcg",
        "freq": "Dose única",
        "note": "BNFC 2020-21 (p. 164)."
      },
      {
        "ind": "Asma aguda — perfusão EV contínua",
        "val": "1–2 mcg/kg/min, ajustar à resposta e FC; se necessário até 5 mcg/kg/min",
        "max": "5 mcg/kg/min",
        "freq": "Perfusão contínua",
        "note": "BNFC 2020-21 (p. 164). Doses > 2 mcg/kg/min em cuidados intensivos."
      },
      {
        "ind": "Hipercaliemia grave — EV lento",
        "val": "RN e criança: 4 mcg/kg em 5 min; repetir se necessário",
        "max": "—",
        "freq": "Repetir conforme necessário",
        "note": "BNFC 2020-21 (p. 164)."
      },
      {
        "ind": "Hipercaliemia grave — nebulização",
        "val": "RN: 2,5–5 mg, repetir se necessário; criança: 2,5–5 mg (valor mantido da ficha anterior)",
        "max": "—",
        "freq": "Repetir se necessário",
        "note": "BNFC 2020-21 (p. 164)."
      },
      {
        "ind": "Exacerbação de obstrução reversível das vias aéreas — inalador, criança",
        "val": "100–200 mcg até 4×/dia",
        "max": "—",
        "freq": "Até 4×/dia",
        "note": "BNFC 2020-21 (p. 164)."
      }
    ],
    "prep": "Nebulização: diluir em SF para volume total 3–5 ml. Débito O2: 6–8 L/min. MDI: 1 puff de cada vez com câmara expansora (5 respirações entre puffs). Nebulização contínua (status asmático): diluir dose horária em 10–16 ml SF, débito O2 constante. EV bólus: 15 μg/kg em 10 ml SF em 10 min. EV perfusão: 5 mg em 50 ml SF (100 μg/ml). Fonte: NHS Medusa 2024.",
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
    "source": "BNFC 2020-21, Salbutamol (p. 164); Formulário de Pediatria 3ª Ed.; GINA 2023",
    "review": ["A ficha anterior tinha a dose EV de carga a 15 mcg/kg em 10 min para todas as idades; o BNFC 2020-21 indica 5 mcg/kg em 1–23 meses e 15 mcg/kg (máx. 250 mcg) em 5 min dos 2 aos 17 anos.", "A nebulização na hipercaliemia em criança não foi confirmada no BNFC 2020-21 (texto cortado): mantida da ficha anterior."]
  
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
        "ind": "Prurido (PO)",
        "val": "6 meses–5 anos: 5–15 mg/dia em doses divididas (máx. 2 mg/kg/dia); 6–17 anos <40 kg: inicial 15–25 mg/dia (máx. 2 mg/kg/dia); 6–17 anos ≥40 kg: 15–25 mg/dia, subir se necessário até 50–100 mg/dia",
        "max": "2 mg/kg/dia (≤40 kg); 100 mg/dia (≥40 kg)",
        "freq": "Doses divididas",
        "note": "BNFC 2020-21, Hydroxyzine hydrochloride (p. 187). Contra-indicada com QT longo ou factores de risco (MHRA/CHM 2015)."
      }
    ],
    "prep": "Oral: xarope 2 mg/ml ou 10 mg/5 ml — pode misturar em água ou sumo. Comprimidos 10/25 mg. EV/IM (uso hospitalar): IM profunda — não EV (risco hemólise e trombose). Concentração IM: solução 50 mg/ml.",
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
    "source": "BNF for Children 2020-21, Hydroxyzine hydrochloride (p. 187)"
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
        "ind": "Alergia (PO)",
        "val": "6 meses–2 anos: 2,5 mg/dia; 2–5 anos: 2,5–5 mg/dia; >5 anos: 5–10 mg/dia",
        "max": "10 mg/dia",
        "freq": "1×/dia",
        "note": "Shann, Drug Doses (entrada Cetirizine). Cetirizina não localizada no índice do BNFC 2020-21; para levocetirizina o BNFC indica 1,25 mg 2×/dia (2–5 anos) e 5 mg 1×/dia (6–17 anos), p. 184."
      }
    ],
    "prep": "Oral: gotas 10 mg/ml (1 gota = 0,5 mg; 20 gotas = 10 mg = 1 ml). Xarope 5 mg/5 ml. Comprimidos 10 mg. Pode misturar em água, sumo ou leite. Tomar com ou sem alimentos.",
    "ci": [
      "Insuf. renal grave (ajustar dose)"
    ],
    "alert": [
      "Mínima sedação (vantagem vs 1ª geração)",
      "Ajuste renal: TFG 30–50: 5 mg/dia; TFG < 30: 5 mg em dias alternados",
      "Seguro a partir dos 6 meses"
    ],
    "source": "Shann F. Drug Doses; BNF for Children 2020-21 (levocetirizina, p. 184)"
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
        "ind": "Alívio sintomático de alergia (rinite, urticária) — oral, 12–17 anos",
        "val": "10 mg 1×/dia",
        "max": "10 mg/dia",
        "freq": "1×/dia",
        "note": "BNFC 2020-21 (p. 185)."
      },
      {
        "ind": "Alergia — oral, 2–11 anos (RCM; não consta do BNFC)",
        "val": "< 30 kg: 5 mg 1×/dia; ≥ 30 kg: 10 mg 1×/dia",
        "max": "10 mg/dia",
        "freq": "1×/dia",
        "note": "Doses do RCM da loratadina."
      }
    ],
    "prep": "Oral: xarope 5 mg/5 ml (1 mg/ml). Comprimidos 10 mg (podem ser dissolvidos em água para crianças pequenas). Comprimidos orodispersíveis disponíveis. Tomar de preferência em jejum (absorção pode reduzir ligeiramente com alimentos gordurosos).",
    "ci": [
      "Hipersensibilidade"
    ],
    "alert": [
      "Não sedativo — vantagem sobre cetirizina em algumas crianças",
      "Metabolizado pelo CYP3A4 — interacção com eritromicina, cetoconazol (↑ loratadina)",
      "Ajuste em insuf. hepática grave"
    ],
    "source": "BNFC 2020-21, Loratadine (p. 185); RCM da loratadina",
    "review": ["O BNFC 2020-21 só indica loratadina a partir dos 12 anos; as doses dos 2 aos 11 anos são do RCM."]
  
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
    "prep": "EV: pode administrar não diluído (50 mg/ml) ou diluir em SF/SG5%. Administrar em 2–5 min. IM: não diluir. Concentração máxima EV: 50 mg/ml (1 mg/ml recomendado para periférico). Oral: solução 12,5 mg/5 ml.",
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
    "source": "Shann Drug Doses (Diphenhydramine: 1–2 mg/kg 6–8H); Harriet Lane 23rd Ed"
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
    "prep": "EV: diluir 2 mg (2 ml) em 5–10 ml SF. Administrar lentamente em 2–3 min. IM: administrar não diluído na mesma concentração.",
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
    "source": "Shann Drug Doses (Clemastine: 0,02–0,06 mg/kg 12H oral)"
  },
  {
    "id": "aminofilina",
    "name": "Aminofilina",
    "category": "broncodilatador",
    "class": "Metilxantina — inibidor PDE, antagonista adenosina, estimulante centro respiratório",
    "brands": "Aminofilina 25 mg/ml amp. EV",
    "indication": [
      "Asma grave / status asmático refractário ao salbutamol EV",
      "Apneia da prematuridade (alternativa à cafeína — uso em declínio)",
      "DPOC exacerbação grave"
    ],
    "dose": [
      {
        "ind": "Asma aguda grave sem tratamento prévio com teofilina — carga EV",
        "val": "5 mg/kg EV lento",
        "max": "500 mg",
        "freq": "Dose única, seguida de perfusão",
        "note": "BNFC 2020-21, Aminophylline (p. 176). Em doentes obesos calcular pelo peso ideal para a altura."
      },
      {
        "ind": "Asma aguda grave — perfusão EV",
        "val": "1 mês–11 anos: 1 mg/kg/h; 12–17 anos: 0,5–0,7 mg/kg/h",
        "max": "—",
        "freq": "Perfusão contínua, ajustar à teofilinémia",
        "note": "BNFC 2020-21 (p. 176). Interacções frequentes: fumo, álcool, insuficiência cardíaca/hepática, infecções virais alteram a depuração."
      }
    ],
    "prep": "EV: diluir em SF ou SG5%. Concentração ≤ 25 mg/ml periférico. Carga: administrar em 20–30 min (NUNCA bólus rápido — arritmias fatais). Perfusão contínua: 250 mg em 100 ml SF (2,5 mg/ml). ⚠️ Incompatível com cefepime, fenitoína, bicarbonato na mesma linha. Estabilidade: 24h a 25°C.",
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
    "source": "BNF for Children 2020-21, Aminophylline (p. 176)",
    "review": ["Retirada a dose para apneia da prematuridade (carga 6 mg/kg): não consta do BNFC 2020-21 para aminofilina; ver cafeína."]
  
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
        "ind": "Profilaxia da asma — oral, 6 meses–5 anos",
        "val": "4 mg 1×/dia à noite (granulado)",
        "max": "4 mg/dia",
        "freq": "1×/dia à noite",
        "note": "BNFC 2020-21 (p. 174)."
      },
      {
        "ind": "Profilaxia da asma — oral, 6–14 anos",
        "val": "5 mg 1×/dia à noite (comprimido mastigável)",
        "max": "5 mg/dia",
        "freq": "1×/dia à noite",
        "note": "BNFC 2020-21 (p. 174)."
      },
      {
        "ind": "Profilaxia da asma — oral, 15–17 anos",
        "val": "10 mg 1×/dia à noite",
        "max": "10 mg/dia",
        "freq": "1×/dia à noite",
        "note": "BNFC 2020-21 (p. 174). Vigiar alterações neuropsiquiátricas (alerta FDA 2020)."
      }
    ],
    "prep": "Oral granulados (4 mg): misturar em colher de alimento mole (iogurte, puré, gelado) — NÃO dissolver em água. Ingerir imediatamente. Comprimidos mastigáveis (5 mg) e normais (10 mg). Tomar ao deitar (metabolismo circadiano do leucotrieno). Fonte: SmPC Singulair.",
    "ci": [
      "Hipersensibilidade"
    ],
    "alert": [
      "⚠️ Alterações neuropsiquiátricas (agitação, pesadelos, depressão, ideação suicida) — FDA Black Box Warning 2020",
      "⚠️ Informar pais — monitorizar comportamento e humor",
      "⚠️ Síndrome de Churg-Strauss (vasculite eosinofílica) — raro, geralmente em desmame de esteroides",
      "Não é broncodilatador de resgate — apenas manutenção"
    ],
    "source": "BNFC 2020-21, Montelukast (p. 174); FDA Safety Communication 2020"
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
    "prep": "Nebulização: solução 0,125/0,25/0,5 mg/ml. Pode misturar com SF ou com salbutamol/ipratrópio no mesmo nebulizador. Agitar suavemente antes de usar. Débito O2: 6–8 L/min. Inalador (DPI/MDI): expirar completamente antes; inspiração lenta e profunda; suspender respiração 10 seg. Lavar boca após cada inalação (candidíase oral). Fonte: NHS Medusa 2024.",
    "ci": [
      "Infecção respiratória fúngica activa"
    ],
    "alert": [
      "⚠️ Supressão supra-renal em doses altas prolongadas (> 800 mcg/dia)",
      "⚠️ Candidose orofaríngea — lavar boca após cada inalação",
      "⚠️ Atraso do crescimento em doses altas (monitorizar estatura anualmente)",
      "Não é broncodilatador de resgate — apenas manutenção e crupe"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; GINA 2023",
    "review": ["As doses respiratórias (nebulização 0,25–0,5 mg 2×/dia, inalador 100–200 mcg 2×/dia, crupe 2 mg) não foram verificadas contra o BNFC 2020-21: a entrada localizada refere apenas indicações gastrointestinais (Crohn 9 mg/dia; colite ulcerosa em enema). Confirmar na secção respiratória do BNFC."]

  },
  {
    "id": "adrenalina_neb",
    "name": "Adrenalina Nebulizada (Laringite/Croup)",
    "category": "respiratorio",
    "class": "Catecolamina — vasoconstritora mucosa laríngea",
    "brands": "Adrenalina 1:1000 (1 mg/ml) — ampolas para nebulização",
    "indication": [
      "Laringotraqueíte viral (croup) moderada a grave — estridor em repouso, tiragem",
      "Laringite subglótica pós-extubação",
      "Edema laríngeo anafilático — adjuvante à adrenalina IM",
      "Bronquiolite grave com edema das vias aéreas superiores"
    ],
    "dose": [
      {
        "ind": "Laringite / croup",
        "val": "0,5 ml/kg de adrenalina 1:1000",
        "max": "5 ml (5 mg)",
        "freq": "Dose única; pode repetir q30 min se necessário sob monitorização",
        "note": "Efeito em 10–30 min, duração 1–2h — efeito rebote possível"
      },
      {
        "ind": "Edema pós-extubação",
        "val": "0,5 ml/kg de adrenalina 1:1000",
        "max": "5 ml",
        "freq": "q2–4h conforme resposta",
        "note": "Associar dexametasona EV 0,15–0,6 mg/kg"
      }
    ],
    "prep": "Nebulização: diluir adrenalina 1:1000 (1 mg/ml) em SF para volume total 5 ml. Administrar com máscara facial, débito O2 6–8 L/min. Usar solução para injecção (não solução tópica). Monitorização SpO2 e FC durante e após. ⚠️ Observar 2–4h após administração (efeito rebote). Fonte: NHS Medusa 2024.",
    "ci": [
      "Taquicardia grave",
      "Cardiopatia com obstrução de saída do VE (efeito α pode ser prejudicial)"
    ],
    "alert": [
      "⚠️ Efeito rebote ao fim de 2h — manter monitorização mínima 2–4h após administração",
      "⚠️ Não alta hospitalar < 4h após administração",
      "Associar sempre dexametasona (0,15–0,6 mg/kg PO/EV) — efeito anti-inflamatório durável",
      "Eficácia equivalente entre adrenalina racémica e L-adrenalina (Cochrane 2018)"
    ],
    "source": "Bjornson C et al. Cochrane 2013; Russell KF et al. Cochrane 2018",
    "review": ["A dose de 0,5 mL/kg de adrenalina 1:1000 (máx. 5 mL) na nebulização não foi verificada contra o BNFC 2020-21. Fontes: Cochrane (Bjornson 2013; Russell 2018). Monitorizar rebote."]

  },
  {
    "id": "ipratropio",
    "name": "Brometo de Ipratrópio",
    "category": "respiratorio",
    "class": "Anticolinérgico — antagonista muscarínico brônquico",
    "brands": "Atrovent neb 0,25 mg/1 ml; 0,5 mg/1 ml; MDI 20 μg/dose",
    "indication": [
      "Asma aguda grave — adjuvante ao salbutamol nas primeiras horas",
      "Broncoespasmo em DPOC (raro em criança)",
      "Broncoespasmo por beta-bloqueante"
    ],
    "dose": [
      {
        "ind": "Broncospasmo agudo — nebulização",
        "val": "1 mês–5 anos: 125–250 mcg; 6–11 anos: 250 mcg; 12–17 anos: 500 mcg, conforme necessário",
        "max": "1 mg/dia (1 mês–11 anos); 2 mg/dia (12–17 anos)",
        "freq": "Conforme necessário",
        "note": "BNFC 2020-21 (p. 161)."
      },
      {
        "ind": "Asma grave ou com risco de vida — nebulização",
        "val": "1 mês–11 anos: 250 mcg cada 20–30 min nas primeiras 2 h; depois 250 mcg cada 4–6 h. 12–17 anos: 500 mcg cada 4–6 h",
        "max": "—",
        "freq": "Cada 20–30 min × 2 h; depois cada 4–6 h",
        "note": "BNFC 2020-21 (p. 161). Efeito máximo 30–60 min; duração 3–6 h."
      },
      {
        "ind": "Obstrução reversível das vias aéreas — inalador pressurizado",
        "val": "1 mês–5 anos: 20 mcg 3×/dia; 6–11 anos: 20–40 mcg 3×/dia; 12–17 anos: 20–40 mcg 3–4×/dia",
        "max": "—",
        "freq": "3–4×/dia",
        "note": "BNFC 2020-21 (p. 161)."
      }
    ],
    "prep": "Nebulização: pode misturar directamente com salbutamol no mesmo nebulizador (compatíveis). Diluir em SF para volume total 3–4 ml. Débito O2: 6–8 L/min. MDI: 1 puff de cada vez com câmara expansora. ⚠️ Evitar exposição ocular com máscara (risco glaucoma agudo).",
    "ci": [
      "Hipersensibilidade à atropina ou derivados",
      "Glaucoma de ângulo fechado (evitar exposição ocular)"
    ],
    "alert": [
      "⚠️ Benefício apenas nas primeiras 2h de crise grave — não usar em manutenção para asma",
      "Boca seca, taquicardia ligeira — efeitos anticolinérgicos normais",
      "Evitar nebulização com máscara que cubra olhos (risco glaucoma agudo se projecção ocular)"
    ],
    "source": "BNFC 2020-21, Ipratropium bromide (p. 161); GINA 2023",
    "review": ["A ficha anterior indicava 0,25 mg (< 12 anos) e 0,5 mg (≥ 12 anos) a cada 20 min × 3; o BNFC 2020-21 indica 250 mcg a cada 20–30 min durante 2 h em crianças de 1 mês a 11 anos."]
  
  },
  {
    "id": "heliox",
    "name": "Heliox (Hélio/Oxigénio 70:30 ou 80:20)",
    "category": "respiratorio",
    "class": "Mistura gasosa de baixa densidade — facilita fluxo laminar em vias aéreas",
    "brands": "Heliox 70:30 (hélio 70% / O2 30%); Heliox 80:20",
    "indication": [
      "Croup grave refractário (obstrução supra-glótica)",
      "Asma grave refractária — adjuvante (evidência limitada)",
      "Obstrução vias aéreas superiores pós-extubação",
      "Bronquiolite viral grave (benefício incerto)"
    ],
    "dose": [
      {
        "ind": "Laringite / obstrução VA superior",
        "val": "Heliox 70:30 por máscara não-reinalação",
        "max": "—",
        "freq": "Contínuo enquanto necessário; monitorizar SpO2",
        "note": "Se SpO2 < 92% com Heliox 70:30, usar 60:40 (hélio 60% / O2 40%) — menos eficaz mas maior FiO2"
      }
    ],
    "prep": "Inalar directamente de cilindro de Heliox 70:30 via máscara não-reinalação com reservatório. Fluxómetros de O2 subestimam débito de heliox por 1,8× — ajustar. NÃO funciona em ventiladores convencionais sem adaptador específico. Verificar SpO2 — FiO2 máxima 30% (Heliox 70:30). Fonte: Ho AM et al. Chest 2003.",
    "ci": [
      "Necessidade de FiO2 > 40% (formulações standard limitam O2 a 30%)",
      "Pneumotórax",
      "Obstrução infra-glótica (sem benefício em asma — evidência contraditória)"
    ],
    "alert": [
      "⚠️ Não aumenta FiO2 — se hipoxemia grave, não usar Heliox 70:30 (apenas 30% O2)",
      "⚠️ Débitos reais de heliox são 1,8× superiores ao indicado em fluxômetros de O2 — ajustar",
      "Efeito físico puro (baixa densidade) — melhoria imediata se responder; ausência de resposta em 30 min sugere obstrução infra-glótica",
      "Voz alterada (aguda) durante administração — avisar família"
    ],
    "source": "Saitz B et al. Cochrane 2010; Ho AM et al. Chest 2003",
    "review": ["O heliox não consta do BNFC 2020-21; mistura e FiO2 mínima dependem da experiência local. Não verificado contra as fontes do utilizador."]

  },
  {
    "id": "surfactante_ards",
    "name": "Surfactante (ARDS Pediátrico)",
    "category": "respiratorio",
    "class": "Surfactante exógeno — reposição em ARDS",
    "brands": "Curosurf (poractant alfa) 80 mg/ml; Survanta (beractant) 25 mg/ml",
    "indication": [
      "ARDS pediátrico moderado-grave (PALICC-2 2023) — uso off-label em contexto de investigação/protocolo",
      "ARDS por pneumonia viral grave (influenza, SARS-CoV-2)",
      "Síndrome aspiração maciça"
    ],
    "dose": [
      {
        "ind": "ARDS pediátrico — protocolo",
        "val": "100 mg/kg IT (poractant alfa)",
        "max": "—",
        "freq": "1–2 doses com intervalo 6–12h; máx 3 doses",
        "note": "Evidência heterogénea em PARDS — sem recomendação forte. Ensaios em curso. Associar a estratégia VNI/HFNC quando possível"
      }
    ],
    "prep": "IT: aquecer frasco a 37°C (banho de água ou mão). NÃO agitar — girar suavemente. Administrar em bólus via TOT com desconexão breve do ventilador (5–10 seg), seguido de reconexão e ventilação manual/mecânica para distribuição. FiO2 100% durante ± 30 min. Não aspirar TOT nas 2h seguintes. Fonte: PALICC-2 2023.",
    "ci": [
      "ARDS de causa não pulmonar primária (benefício improvável)",
      "Doença pulmonar crónica sem componente surfactante"
    ],
    "alert": [
      "⚠️ Evidência em PARDS fraca e inconsistente — não é standard of care; usar em contexto de protocolo",
      "⚠️ Dessaturação e instabilidade hemodinâmica durante administração — ter equipa preparada",
      "Resposta imediata (30–60 min) é preditora de benefício — se sem melhoria após 2 doses, provavelmente não beneficia",
      "Dados mais favoráveis em ARDS viral e por aspiração (défice de surfactante mais marcado)"
    ],
    "source": "PALICC-2 Pediatric ARDS Consensus 2023; Thomas NJ et al. Pediatr Crit Care Med 2018",
    "review": ["O surfactante em SDRA pediátrica não consta do BNFC 2020-21 e a evidência é limitada. Não verificado contra as fontes do utilizador."]

  },
{
    "id": "terbutalina_sc",
    "name": "Terbutalina SC/EV",
    "category": "respiratorio",
    "class": "Agonista β2-adrenérgico selectivo — broncodilatador sistémico",
    "brands": "Bricanyl — ampolas 0,5 mg/ml (1 ml); comp 2,5/5 mg; inalador",
    "indication": [
      "Broncoespasmo grave refractário à nebulização — quando via inalatória impossível ou insuficiente",
      "Status asmático grave — quando salbutamol nebulizado contínuo insuficiente",
      "Asma quase-fatal com falência iminente respiratória",
      "Pré-eclâmpsia / trabalho de parto prematuro (tocólise — off-label)"
    ],
    "dose": [
      {
        "ind": "Asma aguda — SC ou EV lento",
        "val": "2–14 anos: 10 mcg/kg até 4×/dia; 15–17 anos: 250–500 mcg até 4×/dia",
        "max": "300 mcg/dose (2–14 anos)",
        "freq": "Até 4×/dia",
        "note": "BNFC 2020-21, Terbutaline sulfate (p. 166). Reservar a via EV para quem não pode usar via inalada ou sem resposta. Shann: SC 5–10 mcg/kg."
      },
      {
        "ind": "Asma aguda — perfusão EV contínua",
        "val": "Carga 2–4 mcg/kg, depois 1–10 mcg/kg/h, ajustar à resposta e à FC",
        "max": "10 mcg/kg/h (monitorização apertada acima desta dose)",
        "freq": "Perfusão contínua",
        "note": "BNFC 2020-21 (p. 166). Shann (criança): 3–6 mcg/kg/min durante 1 h, depois 0,4–1 mcg/kg/min — valores superiores aos do BNFC."
      },
      {
        "ind": "Asma moderada a grave — nebulização",
        "val": "1 mês–4 anos: 5 mg; 5–11 anos: 5–10 mg; 12–17 anos: 10 mg",
        "max": "—",
        "freq": "Repetir cada 20–30 min se necessário",
        "note": "BNFC 2020-21 (p. 166). Nebulizador accionado a oxigénio."
      }
    ],
    "prep": "SC: injecção não diluída (0,5 mg/ml) em coxa anterior ou abdómen. EV carga: diluir 0,1–0,2 mg/kg em 10 ml SF, infusão 10 min. Perfusão: 5 mg em 250 ml SF (20 μg/ml). ⚠️ Monitorizar K⁺ q1h — hipocaliemia significativa. Fonte: NHS Medusa 2024.",
    "ci": [
      "Taquiarritmias graves",
      "Tirotoxicose não tratada",
      "Hipocaliemia grave (agrava)"
    ],
    "alert": [
      "⚠️ Hipocaliemia significativa — monitorizar K⁺ q1–2h durante perfusão; repor",
      "⚠️ Hiperglicemia — monitorizar glicemia",
      "⚠️ Taquicardia marcada — reduzir dose se FC > 180 bpm ou se arritmias",
      "⚠️ Tremor e agitação frequentes — efeito β2 sistémico",
      "Reservar para falência da via inalatória — risco CV superior ao salbutamol nebulizado"
    ],
    "source": "BNF for Children 2020-21, Terbutaline sulfate (p. 166); Shann F. Drug Doses",
    "review": ["BNFC (1–10 mcg/kg/h) e Shann (0,4–1 mcg/kg/min = 24–60 mcg/kg/h) divergem na perfusão EV; a ficha anterior indicava 0,1–4 mcg/kg/min. Seguir o protocolo local e monitorizar FC, potássio e lactato."]
  
  }
];

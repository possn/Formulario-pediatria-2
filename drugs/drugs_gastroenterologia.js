// UCIP Pediatria — Gastroenterologia
// 6 fármacos
// Fontes: ver drugs_sources.js

var DRUGS_GASTROENTEROLOGIA = [
  {
    "id": "omeprazol",
    "name": "Omeprazol",
    "category": "gastro",
    "src": "original",
    "class": "Inibidor bomba de protões (IBP) — inibidor H+/K+ ATPase",
    "brands": "Losec 10/20/40 mg caps.; EV 40 mg pó; susp. extemporânea 2 mg/ml",
    "indication": [
      "Doença do refluxo gastroesofágico (DRGE)",
      "Úlcera péptica / gastropatia por AINEs",
      "Erradicação H. pylori (+ antibióticos)",
      "Prevenção úlcera de stress em UCIP",
      "Esofagite erosiva"
    ],
    "dose": [
      {
        "ind": "DRGE / Úlcera (oral)",
        "val": "1–2 mg/kg/dia oral",
        "max": "40 mg/dia",
        "freq": "1 dose/dia (30 min antes refeição)",
        "note": "RN/lactente: 0,5–1 mg/kg/dia"
      },
      {
        "ind": "UCIP — profilaxia úlcera stress EV",
        "val": "1–2 mg/kg/dia EV",
        "max": "40 mg/dia",
        "freq": "1–2 doses/dia",
        "note": ""
      },
      {
        "ind": "Hemorragia digestiva alta EV",
        "val": "Carga 80 mg → 8 mg/hora perfusão",
        "max": "—",
        "freq": "perfusão 72h",
        "note": "Protocolo adulto; pediátrico: 1 mg/kg/dose 2×/dia"
      }
    ],
    "prep": "EV: reconstituir em 5 ml água → diluir em SF 100 ml. Infusão 20–30 min.",
    "ci": [
      "Hipersensibilidade a IBPs"
    ],
    "alert": [
      "⚠️ Hipomagnesemia em uso prolongado (> 3 meses)",
      "⚠️ Défice vitamina B12 em uso muito prolongado",
      "⚠️ ↑ risco C. difficile",
      "⚠️ Interacção clopidogrel (reduz eficácia antiagregante — usar pantoprazol)",
      "Não usar de rotina em todos os doentes de UCIP — indicação clínica rigorosa"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
  },
  {
    "id": "ondansetron",
    "name": "Ondansetron",
    "category": "gastro",
    "src": "original",
    "class": "Antagonista receptor 5-HT3 — antiemético",
    "brands": "Zofran 4/8 mg comp.; 4 mg/2 ml EV; 4 mg/5 ml sol. oral",
    "indication": [
      "Náuseas e vómitos pós-quimioterapia — 1ª linha",
      "Náuseas e vómitos pós-operatórios",
      "Gastroenterite aguda com vómitos incoercíveis (off-label — evidência)"
    ],
    "dose": [
      {
        "ind": "Pós-quimio / Pós-op EV",
        "val": "0,1–0,15 mg/kg/dose EV",
        "max": "8 mg/dose",
        "freq": "cada 8h (3 doses/dia)",
        "note": ""
      },
      {
        "ind": "Gastroenterite oral (off-label)",
        "val": "0,15 mg/kg/dose oral",
        "max": "8 mg/dose",
        "freq": "dose única; pode repetir 1× após 8h",
        "note": "Evidência sólida: reduz internamentos e necessidade EV"
      },
      {
        "ind": "Adulto",
        "val": "4–8 mg",
        "max": "8 mg/dose",
        "freq": "3×/dia",
        "note": ""
      }
    ],
    "prep": "EV: diluir em SF ou SG5%. Administrar em 15 min.",
    "ci": [
      "Síndrome QT congénito",
      "Uso concomitante apomorfina"
    ],
    "alert": [
      "⚠️ Prolongamento QTc — ECG base se factores de risco",
      "⚠️ Síndrome serotoninérgica (raro) com outros serotoninérgicos",
      "Cefaleias frequentes (efeito adverso comum)",
      "Obstipação"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
  },
  {
    "id": "metoclopramida",
    "name": "Metoclopramida",
    "category": "gastro",
    "src": "original",
    "class": "Antagonista dopaminérgico D2 — procinético e antiemético",
    "brands": "Primperan 10 mg comp.; 5 mg/ml EV; 1 mg/ml sol. oral",
    "indication": [
      "Náuseas e vómitos (2ª linha)",
      "Gastroparesia — estímulo do esvaziamento gástrico",
      "Facilitação alimentação entérica",
      "Refluxo gastroesofágico (uso muito limitado em pediatria)"
    ],
    "dose": [
      {
        "ind": "Antiemético / Procinético",
        "val": "0,1–0,15 mg/kg/dose EV/oral",
        "max": "10 mg/dose (0,5 mg/kg/dose em < 15 kg)",
        "freq": "3×/dia",
        "note": "Duração máxima: 5 dias"
      }
    ],
    "prep": "EV: diluir em SF. Administrar em 15–30 min (reduz reacções extrapiramidais).",
    "ci": [
      "< 1 ano (risco reacções extrapiramidais)",
      "Obstrução/perfuração GI",
      "Epilepsia (abaixa limiar convulsivante)",
      "Feocromocitoma"
    ],
    "alert": [
      "⛔ REACÇÕES EXTRAPIRAMIDAIS (espasmo oculogiro, trismos, distonia) — frequentes em crianças e adolescentes. Tratar com biperideno 0,05 mg/kg EV ou difenidramina",
      "⚠️ Síndrome neuroléptico maligno (raro)",
      "⚠️ Uso máximo 5 dias (EMA 2013)",
      "Evitar < 1 ano"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24; EMA Safety Review 2013"
  },
  {
    "id": "lactulose",
    "name": "Lactulose",
    "category": "gastro",
    "src": "added",
    "class": "Laxante osmótico — dissacarídeo não absorvível",
    "brands": "Duphalac 3,35 g/5 ml sol. oral; Laevolac",
    "indication": [
      "Obstipação crónica",
      "Encefalopatia hepática (reduz absorção amónia)"
    ],
    "dose": [
      {
        "ind": "Obstipação — < 1 ano",
        "val": "2,5 ml/dose oral",
        "max": "—",
        "freq": "2×/dia",
        "note": ""
      },
      {
        "ind": "Obstipação — 1–5 anos",
        "val": "5 ml/dose oral",
        "max": "—",
        "freq": "2×/dia",
        "note": ""
      },
      {
        "ind": "Obstipação — 5–10 anos",
        "val": "10 ml/dose oral",
        "max": "—",
        "freq": "2×/dia",
        "note": ""
      },
      {
        "ind": "Obstipação — > 10 anos / adulto",
        "val": "15 ml/dose oral",
        "max": "—",
        "freq": "2×/dia",
        "note": "Ajustar para 1–2 dejecções moles/dia"
      },
      {
        "ind": "Encefalopatia hepática",
        "val": "30–50 ml oral ou 300 ml via retal",
        "max": "—",
        "freq": "3–4×/dia (alvo: 2–3 dejecções/dia)",
        "note": ""
      }
    ],
    "prep": "Solução oral. Pode diluir em água ou sumo.",
    "ci": [
      "Galactosemia",
      "Obstrução intestinal"
    ],
    "alert": [
      "Flatulência e cólicas no início — passageiros",
      "Pode causar hipernatremia em desidratação",
      "Efeito após 24–48h (não é laxante de acção imediata)"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
  },
  {
    "id": "sucralfato",
    "name": "Sucralfato",
    "category": "gastro",
    "src": "original",
    "class": "Protector gástrico — forma barreira sobre mucosa ulcerada",
    "brands": "Ulcogant susp. 1 g/5 ml; comp. 1 g",
    "indication": [
      "Úlcera péptica (alternativa/adjuvante a IBPs)",
      "Profilaxia úlcera de stress em UCIP (alternativa a IBPs)",
      "Esofagite por refluxo"
    ],
    "dose": [
      {
        "ind": "Oral",
        "val": "40–80 mg/kg/dia oral",
        "max": "4 g/dia",
        "freq": "4×/dia (1h antes refeições e ao deitar)",
        "note": "Tomar com estômago vazio"
      }
    ],
    "prep": "Suspensão oral. Não usar com antiácidos (reduz eficácia).",
    "ci": [
      "Insuf. renal grave (acumulação alumínio)"
    ],
    "alert": [
      "⚠️ Obstipação frequente",
      "⚠️ Reduz absorção de múltiplos fármacos (fenitoína, fluroquinolonas, digoxina) — espaçar 2h",
      "Contém alumínio — evitar em insuf. renal"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
  },
  {
    "id": "mesalazina",
    "name": "Mesalazina",
    "category": "gastro",
    "src": "added",
    "class": "Aminossalicilato — anti-inflamatório intestinal local",
    "brands": "Pentasa comp. 500 mg/1 g; susp. retal; supositórios",
    "indication": [
      "Doença inflamatória intestinal (DII) — colite ulcerosa (manutenção e indução leve-moderada)",
      "Doença de Crohn colónica (adjuvante)"
    ],
    "dose": [
      {
        "ind": "Colite ulcerosa activa oral",
        "val": "30–50 mg/kg/dia",
        "max": "4 g/dia",
        "freq": "2–3 doses/dia",
        "note": ""
      },
      {
        "ind": "Manutenção oral",
        "val": "15–30 mg/kg/dia",
        "max": "2 g/dia",
        "freq": "1–2 doses/dia",
        "note": ""
      },
      {
        "ind": "Doença distal — retal",
        "val": "1 g supositório ou 1–4 g enema",
        "max": "—",
        "freq": "1×/dia ao deitar",
        "note": ""
      }
    ],
    "prep": "Comprimidos de libertação prolongada — engolir inteiros. Não partir.",
    "ci": [
      "Hipersensibilidade a salicilatos",
      "Insuf. renal grave",
      "Insuf. hepática grave"
    ],
    "alert": [
      "⚠️ Nefrotoxicidade (rara) — monitorizar creatinina anualmente",
      "⚠️ Pancreatite (rara)",
      "Bem tolerado — perfil segurança favorável"
    ],
    "source": "BNF for Children 2023-24; ECCO/ESPGHAN Guidelines 2023"
  }
];

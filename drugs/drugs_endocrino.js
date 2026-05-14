// UCIP Pediatria — Endocrinologia & Metabolismo
// 9 fármacos
// Fontes: ver drugs_sources.js

var DRUGS_ENDOCRINO = [
  {
    "id": "insulina",
    "name": "Insulina (Regular/Actrapid)",
    "category": "metabolismo",
    "class": "Hormona pancreática — agonista receptor insulina",
    "brands": "Actrapid 100 UI/ml; Humulin R 100 UI/ml",
    "indication": [
      "Cetoacidose diabética (CAD)",
      "Estado hiperosmolar hiperglicémico",
      "Hipercaliemia grave",
      "Controlo glicémico em UCIP (glicemia alvo 140–180 mg/dL)"
    ],
    "dose": [
      {
        "ind": "CAD — perfusão EV",
        "val": "0,05–0,1 UI/kg/hora",
        "max": "—",
        "freq": "perfusão contínua; reduzir para 0,05 quando glicemia < 250–300 mg/dL",
        "note": "⚠️ NÃO dar bólus de insulina no início da CAD (risco edema cerebral). Fluidoterapia PRIMEIRO"
      },
      {
        "ind": "Hipercaliemia grave — EV",
        "val": "0,1 UI/kg EV bólus + glicose 0,5 g/kg (= 5 ml/kg SG10%)",
        "max": "10 UI",
        "freq": "dose única (efeito ~30–60 min)",
        "note": "Transloca K+ para intracelular — efeito temporário"
      },
      {
        "ind": "Controlo glicémico UCIP",
        "val": "Iniciar 0,025–0,05 UI/kg/hora; titular por protocolo glicémico institucional",
        "max": "—",
        "freq": "perfusão contínua",
        "note": "Alvo glicemia: 140–180 mg/dL (NICE-SUGAR pediátrico)"
      }
    ],
    "prep": "Perfusão: diluir em SF (1 UI/ml ou 0,1 UI/ml). Adsorção ao PVC — flush 20 ml antes de conectar ao doente.",
    "ci": [
      "Hipoglicemia"
    ],
    "alert": [
      "⛔ HIPOGLICEMIA — monitorização horária da glicemia no início",
      "⚠️ Hipocaliemia (K+ entra na célula com glicose) — monitorizar e repor K+",
      "⚠️ Adsorção ao PVC da seringa e do tubo — flush obrigatório",
      "⚠️ Na CAD: NÃO iniciar insulina se K+ < 3,5 mEq/L (repor K+ primeiro)",
      "Alvo NICE-SUGAR pediátrico: 140–180 mg/dL (não 80–110)"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; ISPAD Guidelines CAD 2022; BNF for Children 2023-24"
  },
  {
    "id": "hidrocortisona_replacement",
    "name": "Hidrocortisona (dose fisiológica)",
    "category": "endocrino",
    "src": "added",
    "class": "Corticoide — reposição fisiológica cortisol",
    "brands": "Solu-Cortef 100 mg; comp. 10/20 mg; Hydrocortisone 10 mg",
    "indication": [
      "Insuficiência supra-renal primária (Addison) — terapia de substituição",
      "Hiperplasia supra-renal congénita (HAC)",
      "Dose de stress em doente com ISR conhecida",
      "Pan-hipopituitarismo"
    ],
    "dose": [
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
    "prep": "Oral: comprimidos ou solução extemporânea. EV: ver entrada hidrocortisona farmacológica.",
    "ci": [
      "Infecção não controlada (relativa)"
    ],
    "alert": [
      "⚠️ Dose de reposição é MUITO diferente da dose farmacológica",
      "⚠️ Não suspender abruptamente — desmame gradual",
      "⚠️ Bracelete de alerta médico obrigatória em ISR crónica",
      "⚠️ Pais/doente devem ter injecção EV/IM de emergência em casa",
      "Monitorizar crescimento, PA e glicemia em uso crónico"
    ],
    "source": "BNF for Children 2023-24; Endocrine Society Guidelines 2016"
  },
  {
    "id": "levotiroxina",
    "name": "Levotiroxina (T4)",
    "category": "endocrino",
    "src": "added",
    "class": "Hormona tiroideia — substituto sintético T4",
    "brands": "Synthroid; Eutirox comp. 25/50/75/100/150 mcg",
    "indication": [
      "Hipotiroidismo congénito — urgência neonatal",
      "Hipotiroidismo adquirido",
      "Pan-hipopituitarismo",
      "Coma mixedematoso"
    ],
    "dose": [
      {
        "ind": "Hipotiroidismo congénito (RN)",
        "val": "10–15 mcg/kg/dia oral",
        "max": "50 mcg/dia (início)",
        "freq": "1×/dia em jejum",
        "note": "Iniciar o mais cedo possível — janela crítica de desenvolvimento neurológico"
      },
      {
        "ind": "Lactente 3–12 meses",
        "val": "6–8 mcg/kg/dia",
        "max": "—",
        "freq": "1×/dia",
        "note": ""
      },
      {
        "ind": "Criança 1–5 anos",
        "val": "5–6 mcg/kg/dia",
        "max": "—",
        "freq": "1×/dia",
        "note": ""
      },
      {
        "ind": "Criança 6–12 anos",
        "val": "4–5 mcg/kg/dia",
        "max": "—",
        "freq": "1×/dia",
        "note": ""
      },
      {
        "ind": "Adolescente",
        "val": "2–3 mcg/kg/dia",
        "max": "150–200 mcg/dia",
        "freq": "1×/dia em jejum",
        "note": ""
      }
    ],
    "prep": "Comprimidos podem ser dissolvidos em água ou leite (não soja). Tomar 30–60 min antes do pequeno-almoço.",
    "ci": [
      "Tirotoxicose não tratada",
      "IAM recente (relativa)"
    ],
    "alert": [
      "⚠️ Hipotiroidismo congénito: iniciar nas primeiras 2 semanas — atraso causa lesão neurológica permanente",
      "⚠️ Monitorizar TSH e T4 livre a cada 4–6 semanas no início",
      "⚠️ Interacção com ferro, cálcio, IBPs (reduzem absorção — espaçar 4h)",
      "Sintomas de overdose: taquicardia, perda de peso, irritabilidade"
    ],
    "source": "BNF for Children 2023-24; European Thyroid Association Guidelines 2022"
  },
  {
    "id": "glucagon",
    "name": "Glucagon",
    "category": "endocrino",
    "src": "added",
    "class": "Hormona pancreática — glicogenólise + gluconeogénese hepática",
    "brands": "GlucaGen 1 mg pó + seringa; Baqsimi 3 mg pó nasal",
    "indication": [
      "Hipoglicemia grave sem acesso venoso — 1ª linha",
      "Intoxicação por betabloqueante (doses altas)",
      "Intoxicação por bloqueadores canais cálcio",
      "Hipoglicemia neonatal transitória (sem AV)"
    ],
    "dose": [
      {
        "ind": "Hipoglicemia — IM/SC/IN",
        "val": "< 25 kg: 0,5 mg IM/SC; ≥ 25 kg: 1 mg IM/SC",
        "max": "1 mg",
        "freq": "dose única; virar para lado; alimentar quando consciente",
        "note": "Nasal (Baqsimi): 3 mg numa narina (≥ 4 anos)"
      },
      {
        "ind": "Intoxicação betabloqueante EV",
        "val": "50–150 mcg/kg EV em 1 min",
        "max": "10 mg",
        "freq": "seguido de perfusão 2–5 mg/hora",
        "note": ""
      },
      {
        "ind": "Hipoglicemia neonatal EV",
        "val": "0,02–0,1 mg/kg EV",
        "max": "1 mg",
        "freq": "dose única; seguir de glucose EV",
        "note": ""
      }
    ],
    "prep": "Reconstituir com o solvente fornecido. Usar imediatamente após reconstituição.",
    "ci": [
      "Feocromocitoma (libertação catecolaminas)",
      "Insulinoma (hipoglicemia rebote)"
    ],
    "alert": [
      "⚠️ Náuseas e vómitos após administração — posição lateral para evitar aspiração",
      "⚠️ Hipoglicemia de rebote — alimentar logo que possível ou glucose EV",
      "Eficácia reduzida se reservas hepáticas de glicogénio baixas (desnutrição, alcoolismo)",
      "Treinar pais/cuidadores de crianças diabéticas na administração"
    ],
    "source": "BNF for Children 2023-24; Harriet Lane 23rd Ed"
  },
  {
    "id": "desmopressina",
    "name": "Desmopressina (DDAVP)",
    "category": "endocrino",
    "src": "added",
    "class": "Análogo sintético da vasopressina (ADH) — V2 selectivo",
    "brands": "Minirin comp. 0,1/0,2 mg; nasal 100 mcg/ml; EV 4 mcg/ml",
    "indication": [
      "Diabetes insípida central",
      "Enurese nocturna primária (≥ 5 anos)",
      "Doença de von Willebrand tipo 1 (hemostase)",
      "Hemofilia A leve-moderada (procedimentos)"
    ],
    "dose": [
      {
        "ind": "Diabetes insípida central — oral",
        "val": "0,05–0,1 mg/dose oral",
        "max": "1,2 mg/dia",
        "freq": "2–3×/dia; titular pelo débito urinário e Na+",
        "note": ""
      },
      {
        "ind": "Diabetes insípida central — nasal",
        "val": "2,5–10 mcg/dose",
        "max": "40 mcg/dia",
        "freq": "1–2×/dia",
        "note": ""
      },
      {
        "ind": "Diabetes insípida central — EV",
        "val": "0,01–0,03 mcg/kg/dose",
        "max": "2 mcg",
        "freq": "cada 12–24h",
        "note": ""
      },
      {
        "ind": "Enurese nocturna (≥ 5 anos)",
        "val": "0,2 mg oral ao deitar",
        "max": "0,4 mg",
        "freq": "1×/dia",
        "note": "Restringir líquidos 1h antes e 8h depois"
      },
      {
        "ind": "von Willebrand / Hemofilia A — EV",
        "val": "0,3 mcg/kg EV em 30 min",
        "max": "20 mcg",
        "freq": "dose única pré-procedimento",
        "note": ""
      }
    ],
    "prep": "EV: diluir em SF 50 ml. Infusão 30 min.",
    "ci": [
      "Polidipsia psicogénica",
      "Hiponatremia",
      "Insuf. cardíaca grave",
      "Doença de von Willebrand tipo 2B/plaquetário"
    ],
    "alert": [
      "⛔ HIPONATREMIA — risco major especialmente em crianças. Restringir SEMPRE os líquidos",
      "⚠️ Convulsões por hiponatremia — monitorizar Na+ em uso crónico",
      "⚠️ Enurese: restringir líquidos 1h antes e 8h após — obrigatório",
      "Taquifilaxia com uso repetido (von Willebrand/hemofilia)"
    ],
    "source": "BNF for Children 2023-24; Harriet Lane 23rd Ed"
  },
  {
    "id": "octreotido",
    "name": "Octreótido",
    "category": "endocrino",
    "src": "added",
    "class": "Análogo da somatostatina — inibição multissistémica",
    "brands": "Sandostatin 0,05/0,1/0,5 mg/ml amp.; LAR (depot mensal)",
    "indication": [
      "Hiperinsulinismo neonatal / hipoglicemia hiperinsulinémica refractária",
      "Hemorragia digestiva por varizes esofágicas",
      "Quilotórax refractário",
      "Nesidioblastose"
    ],
    "dose": [
      {
        "ind": "Hiperinsulinismo neonatal EV/SC",
        "val": "1–10 mcg/kg/hora EV",
        "max": "40 mcg/kg/dia",
        "freq": "perfusão contínua; titular pela glicemia",
        "note": ""
      },
      {
        "ind": "Varizes esofágicas EV",
        "val": "1–2 mcg/kg/hora EV",
        "max": "50 mcg/hora",
        "freq": "perfusão contínua × 2–5 dias",
        "note": "Bólus inicial opcional: 1–2 mcg/kg"
      },
      {
        "ind": "Quilotórax SC",
        "val": "1–4 mcg/kg/dose SC",
        "max": "—",
        "freq": "3×/dia",
        "note": ""
      }
    ],
    "prep": "EV: diluir em SF ou SG5%. Estável 24h à temperatura ambiente.",
    "ci": [
      "Hipersensibilidade"
    ],
    "alert": [
      "⚠️ Hipoglicemia (inibe glucagon e GH além de insulina)",
      "⚠️ Bradicardia",
      "⚠️ Litíase biliar em uso prolongado",
      "⚠️ Hipotiroidismo em uso prolongado (inibe TSH)",
      "Monitorizar glicemia frequentemente no início"
    ],
    "source": "BNF for Children 2023-24; Harriet Lane 23rd Ed"
  },
  {
    "id": "vitamina_k",
    "name": "Vitamina K (Fitomenadiona)",
    "category": "metabolismo",
    "src": "original",
    "class": "Cofactor síntese factores coagulação II, VII, IX, X",
    "brands": "Konakion 2 mg/0,2 ml pediátrico (IM); 10 mg/ml amp.; comp. 10 mg",
    "indication": [
      "Profilaxia doença hemorrágica do RN — obrigatório",
      "Tratamento hemorragia por deficiência vitamina K",
      "Reversão sobredosagem de varfarina",
      "Colestase crónica (má absorção K lipossolúvel)"
    ],
    "dose": [
      {
        "ind": "Profilaxia RN IM",
        "val": "1 mg IM dose única ao nascimento",
        "max": "—",
        "freq": "dose única",
        "note": "RN < 1,5 kg: 0,5 mg IM"
      },
      {
        "ind": "Profilaxia RN oral (alternativa)",
        "val": "2 mg oral ao nascimento → 2 mg semana 1 → 2 mg semana 4",
        "max": "—",
        "freq": "3 doses conforme protocolo",
        "note": "Menos eficaz que IM para doença hemorrágica tardia"
      },
      {
        "ind": "Reversão varfarina (hemorragia grave)",
        "val": "0,3 mg/kg EV lento",
        "max": "10 mg",
        "freq": "dose única; pode repetir",
        "note": "Efeito em 6–8h. Se hemorragia ameaçadora de vida: CCP ou PFC + vitamina K"
      },
      {
        "ind": "Deficiência / colestase",
        "val": "1–10 mg oral/EV",
        "max": "—",
        "freq": "1–3×/semana",
        "note": ""
      }
    ],
    "prep": "EV: diluir em SF ou SG5%. Administrar muito lentamente (risco reacção anafilactóide).",
    "ci": [
      "Hipersensibilidade"
    ],
    "alert": [
      "⚠️ Administração EV rápida — reacções anafilactóides (rubor, broncoespasmo, colapso) — infusão MUITO lenta",
      "⚠️ Reversão varfarina — aguardar 6–8h para efeito. Se urgente: CCP",
      "Vitamina K IM preferida à oral para profilaxia neonatal"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
  },
  {
    "id": "acido_folico",
    "name": "Ácido Fólico",
    "category": "metabolismo",
    "src": "added",
    "class": "Vitamina B9 — cofactor síntese DNA/RNA e eritropoiese",
    "brands": "Ácido Fólico comp. 0,4/1/5 mg",
    "indication": [
      "Anemia megaloblástica por deficiência de folato",
      "Prevenção defeitos tubo neural (gravidez)",
      "Suplementação em hemólise crónica (anemia falciforme, esferocitose)",
      "Antagonismo metotrexato (leucovorina — forma activa)"
    ],
    "dose": [
      {
        "ind": "Deficiência / Anemia megaloblástica",
        "val": "5 mg/dia oral",
        "max": "—",
        "freq": "1×/dia × 4 meses (ou enquanto causa activa)",
        "note": ""
      },
      {
        "ind": "Hemólise crónica (anemia falciforme)",
        "val": "1–5 mg/dia oral",
        "max": "5 mg/dia",
        "freq": "1×/dia",
        "note": ""
      },
      {
        "ind": "RN prematuro (suplementação)",
        "val": "50–100 mcg/kg/dia oral",
        "max": "—",
        "freq": "1×/dia",
        "note": ""
      }
    ],
    "prep": "Comprimidos podem ser triturados. Soluções extemporâneas disponíveis.",
    "ci": [
      "Nunca usar em deficiência de vitamina B12 não diagnosticada (pode precipitar neuropatia)"
    ],
    "alert": [
      "⚠️ Excluir deficiência B12 antes de tratar — folato mascara anemia B12 mas não trata neuropatia",
      "Seguro em gravidez (suplementação pré-concepcional reduz defeitos tubo neural 70%)",
      "Leucovorina (ácido folínico) = forma activa — usar no resgate com metotrexato"
    ],
    "source": "BNF for Children 2023-24; Harriet Lane 23rd Ed"
  },
  {
    "id": "ferro_ev",
    "name": "Ferro EV (Ferric Carboxymaltose)",
    "category": "metabolismo",
    "src": "added",
    "class": "Suplemento de ferro parentérico — reposição reservas ferro",
    "brands": "Ferinject 50 mg Fe/ml (2 ml; 10 ml); Monofer 100 mg/ml",
    "indication": [
      "Anemia ferropénica grave quando ferro oral ineficaz/intolerável",
      "Doença inflamatória intestinal com anemia",
      "Insuficiência renal crónica (hemodiálise)",
      "Deficiência ferro com anemia pós-cirúrgica"
    ],
    "dose": [
      {
        "ind": "Ferric carboxymaltose EV (> 14 anos)",
        "val": "Calculada pelo défice: kg × (Hb alvo - Hb actual) × 0,24 + 500 mg (reservas)",
        "max": "1000 mg/dose (1 administração semanal)",
        "freq": "1–2 administrações (dias alternados ou semanal)",
        "note": "Fórmula de Ganzoni simplificada"
      },
      {
        "ind": "Crianças 1–14 anos EV",
        "val": "15–20 mg/kg/dose",
        "max": "500 mg/dose",
        "freq": "semanal até correcção",
        "note": "Dados limitados em < 1 ano"
      }
    ],
    "prep": "Ferinject: diluir em SF (não SG5%). Concentração mínima 2 mg Fe/ml. Infusão 15 min (até 200 mg) ou 30 min (até 1000 mg).",
    "ci": [
      "Anemia não ferropénica",
      "1º trimestre gravidez",
      "Hipersensibilidade"
    ],
    "alert": [
      "⚠️ Reacções de hipersensibilidade (incluindo anafilaxia rara) — monitorizar 30 min pós-infusão",
      "⚠️ Hipotensão transitória — infundir lentamente",
      "⚠️ Hipofosfatemia transitória (Ferinject — mais que outras formulações)",
      "⚠️ Não administrar em infecção activa (ferro pode potenciar crescimento bacteriano)",
      "Verificar ferritina e saturação transferrina antes de cada dose"
    ],
    "source": "BNF for Children 2023-24; Ferinject SmPC 2023"
  }
];

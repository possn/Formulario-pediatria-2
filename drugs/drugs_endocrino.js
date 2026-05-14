// UCIP Pediatria — Endocrinologia & Metabolismo
// 14 fármacos
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
    "class": "Análogo da somatostatina — inibição multissistémica",
    "brands": "Sandostatin 0,05/0,1/0,5 mg/ml amp.; LAR (depot mensal)",
    "indication": [
      "Hiperinsulinismo neonatal / hipoglicemia hiperinsulinémica refractária",
      "Hemorragia digestiva por varizes esofágicas",
      "Quilotórax refractário",
      "Nesidioblastose",
      "Hemorragia varicosa esofágica — adjuvante à escleroterapia/ligadura",
      "Hemorragia GI alta não varicosa refractária",
      "Fístulas pancreáticas e enterocutâneas",
      "Hipoglicemia refractária por hiperinsulinismo (nesidioblastose)"
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
      },
      {
        "ind": "Hemorragia varicosa esofágica",
        "val": "1–2 μg/kg EV bólus, depois 1–5 μg/kg/h",
        "max": "50 μg bólus; 50 μg/h perfusão",
        "freq": "Perfusão contínua 2–5 dias",
        "note": "Iniciar imediatamente na suspeita — antes da endoscopia"
      },
      {
        "ind": "Hiperinsulinismo congénito",
        "val": "1–10 μg/kg/dia SC/EV",
        "max": "40 μg/kg/dia",
        "freq": "q6–8h SC ou perfusão contínua",
        "note": "Titular por glicemia; pode necessitar associar diazóxido"
      }
    ],
    "prep": "EV: diluir em SF ou SG5%. Estável 24h à temperatura ambiente.",
    "ci": [
      "Hipersensibilidade",
      "Hipersensibilidade à somatostatina",
      "Diabetes mellitus (hiperglicemia; monitorizar)"
    ],
    "alert": [
      "⚠️ Hipoglicemia (inibe glucagon e GH além de insulina)",
      "⚠️ Bradicardia",
      "⚠️ Litíase biliar em uso prolongado",
      "⚠️ Hipotiroidismo em uso prolongado (inibe TSH)",
      "Monitorizar glicemia frequentemente no início",
      "⚠️ Bradicardia e hipotensão com bólus rápido",
      "⚠️ Hiperglicemia — monitorizar glicemia q2–4h durante perfusão",
      "Hipoglicemia paradoxal em doses baixas (inibe glucagon)",
      "Litíase biliar em uso prolongado (> 4 semanas)",
      "Diarreia e cólica abdominal frequentes"
    ],
    "source": "BNF for Children 2023-24; Harriet Lane 23rd Ed; BNF for Children 2023-24; Eroglu Y et al. J Pediatr Gastroenterol Nutr 2004; ESPGHAN Variceal Guidelines 2018"
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
  },
  {
    "id": "metimazol",
    "name": "Metimazol / Tiamazol",
    "category": "endocrino",
    "class": "Antitiroideo — inibidor peroxidase tiroideia",
    "brands": "Metibasol; Thyrozol — comp 5/10/20 mg",
    "indication": [
      "Hipertiroidismo — doença de Graves em criança e adolescente (1ª linha na maioria)",
      "Tireotoxicose neonatal (por anticorpos maternos anti-TRAb)",
      "Preparação pré-operatória tiroidectomia",
      "Tempestade tiroideia (thyroid storm) — em combinação"
    ],
    "dose": [
      {
        "ind": "Hipertiroidismo pediátrico",
        "val": "0,2–0,5 mg/kg/dia PO",
        "max": "30 mg/dia (inicial); 10–15 mg/dia (manutenção)",
        "freq": "1–3 doses/dia",
        "note": "Dose única diária possível (semivida adequada). Objetivo T4 livre normal em 4–8 semanas. Tratamento mínimo 2 anos para tentativa de remissão"
      },
      {
        "ind": "Tireotoxicose neonatal",
        "val": "0,5–1 mg/kg/dia PO",
        "max": "—",
        "freq": "q8h",
        "note": "Durar 2–6 semanas (até desaparecimento anticorpos maternos). Associar propranolol 1–2 mg/kg/dia"
      }
    ],
    "prep": "Oral: comprimidos inteiros ou esmagados em água. Soluções magistrais disponíveis em centros pediátricos especializados.",
    "ci": [
      "Agranulocitose prévia por tionamida",
      "Hipersensibilidade"
    ],
    "alert": [
      "⚠️ AGRANULOCITOSE — complicação grave (0,3–0,5%); informar família de URGÊNCIA se febre/odinofagia — hemograma imediato; suspender se neutrófilos < 1000/μL",
      "⚠️ Hepatotoxicidade — monitorizar TFH; mais grave com PTU (preferir metimazol em < 18 anos)",
      "⚠️ Vasculite por ANCA com metimazol (rara) — monitorizar se febre + artralgias + hematúria",
      "Propiltiouracil (PTU) EVITAR em < 18 anos por risco maior de hepatotoxicidade grave (FDA Black Box Warning 2010)",
      "Monitorizar TSH, T4L, T3L a cada 4–8 semanas no início"
    ],
    "source": "BNF for Children 2023-24; ETA/ESPE Guidelines Paediatric Hyperthyroidism 2022; FDA PTU Black Box 2010"
  },
  {
    "id": "fludrocortisona",
    "name": "Fludrocortisona",
    "category": "endocrino",
    "class": "Corticosteroide mineralocorticoide sintético",
    "brands": "Florinef — comp 0,1 mg (100 μg)",
    "indication": [
      "Insuficiência supra-renal primária (doença de Addison) — substituição mineralocorticoide",
      "Hiperplasia supra-renal congénita (HSC) — componente mineralocorticoide",
      "Hipotensão ortostática grave — adjuvante",
      "Pseudohipoaldosteronismo tipo 1"
    ],
    "dose": [
      {
        "ind": "Insuf. supra-renal / HSC — substituição",
        "val": "< 1 ano: 100–200 μg/dia PO; 1–18 anos: 50–100 μg/dia PO",
        "max": "200 μg/dia",
        "freq": "1 dose/dia (manhã)",
        "note": "Lactentes com HSC perdem sal e podem necessitar NaCl adicional (2–4 g/dia) nas primeiras semanas"
      }
    ],
    "prep": "Oral: comprimidos 0,1 mg — podem ser partidos para doses pediátricas. Soluções magistrais disponíveis.",
    "ci": [
      "Hipercaliemia",
      "Insuficiência cardíaca congestiva",
      "Infecção sistémica não tratada"
    ],
    "alert": [
      "Retenção hídrica e hipertensão — monitorizar TA e peso; reduzir dose se hipertensão",
      "Hipocaliemia — monitorizar electrólitos",
      "Adequação da dose: alvo renina plasmática no limite superior do normal; aldosterona suprimida",
      "Em stress/doença: apenas aumentar hidrocortisona (glucocorticoide) — fludrocortisona manter igual"
    ],
    "source": "BNF for Children 2023-24; Bornstein SR et al. J Clin Endocrinol Metab 2016; ESPE CAH Guidelines 2018"
  },
  {
    "id": "sirolimus",
    "name": "Sirolímus (Rapamicina)",
    "category": "endocrino",
    "class": "Inibidor mTOR — imunossupressor / antiproliferativo",
    "brands": "Rapamune — comp 0,5/1/2 mg; solução oral 1 mg/ml",
    "indication": [
      "Transplante renal — manutenção (alternativa a tacrolímus em nefropatia crónica do enxerto)",
      "Linfangioleiomiomatose (LAM) — TSC-associada",
      "Esclerose tuberosa complexa (TSC) — angiomiolipoma renal, SEGA (astrocitoma subependimário)",
      "Síndrome PROS/overgrowth (activação PI3K/mTOR) — uso off-label",
      "Proliferações vasculares (linfangiomas complexos, haemangiomas graves)"
    ],
    "dose": [
      {
        "ind": "Transplante renal — manutenção",
        "val": "3 mg/m²/dia PO",
        "max": "—",
        "freq": "1 dose/dia (consistente com refeição)",
        "note": "Alvo nível sérico: 4–12 ng/mL (com ciclosporina) ou 12–20 ng/mL (sem inibidor calcineurina)"
      },
      {
        "ind": "TSC — SEGA / angiomiolipoma",
        "val": "4,5 mg/m²/dia PO",
        "max": "—",
        "freq": "1 dose/dia; ajustar por nível sérico",
        "note": "Nível alvo: 5–15 ng/mL"
      }
    ],
    "prep": "Oral: solução 1 mg/ml — conservar a 4°C; estável 1 mês após abertura. Comprimidos: não esmagar. Tomar com ou sem alimentos mas SEMPRE da mesma forma.",
    "ci": [
      "Hipersensibilidade à rapamicina ou derivados",
      "Infecção activa grave"
    ],
    "alert": [
      "⚠️ Pneumonite intersticial — dispneia, tosse seca, infiltrados; suspender imediatamente",
      "⚠️ Imunossupressão profunda — infecções oportunistas (PJP, CMV); profilaxia obrigatória",
      "⚠️ Inibidor CYP3A4 e P-gp — interacções múltiplas; ajustar com azóis, macrolídeos, anticonvulsivantes",
      "Hiperlipidémia — monitorizar perfil lipídico",
      "Cicatrização deficiente — evitar sirolímus peri-operatório (descontinuar 1 semana antes)",
      "TDM obrigatório — variabilidade farmacocinética grande; nível sérico 24h pós-dose"
    ],
    "source": "BNF for Children 2023-24; Franz DN et al. Lancet 2013 (TSC-SEGA); KDIGO Transplant Guidelines 2022"
  },
  {
    "id": "desmopressina_ddavp",
    "name": "Desmopressina (DDAVP) — Diabetes Insípida / Hemostase",
    "category": "endocrino",
    "class": "Análogo sintético da vasopressina (ADH) — agonista receptor V2",
    "brands": "Minirin EV 4 μg/ml; Octim intranasal 150 μg/dose; comp 0,1/0,2 mg",
    "indication": [
      "Diabetes insípida central — substituição hormonal",
      "Doença de von Willebrand tipo 1 — pré-procedimento",
      "Hemofilia A leve-moderada — pré-procedimento (liberta FVIII endógeno)",
      "Enurese nocturna — tratamento de 2ª linha",
      "Poliúria pós-traumatismo craniano / pós-cirurgia hipofisária"
    ],
    "dose": [
      {
        "ind": "Diabetes insípida — EV/SC",
        "val": "0,1–0,4 μg/kg/dose EV/SC",
        "max": "4 μg/dose",
        "freq": "q8–24h (titular por diurese e osmolalidade urinária)",
        "note": "Oral: 0,05–0,3 mg/dose q8–12h. Intranasal: 2,5–10 μg/dose q12–24h"
      },
      {
        "ind": "vWD tipo 1 / hemofilia A leve",
        "val": "0,3 μg/kg EV em 20 min",
        "max": "20 μg",
        "freq": "Dose única pré-procedimento; repetir 12–24h se necessário",
        "note": "Efeito máximo 30–60 min após EV. Taquifilaxia após 2–3 doses (redução de estoques)"
      }
    ],
    "prep": "EV: diluir em SF 50–100 ml. Administrar em 20 min. Nasal: spray calibrado 150 μg/dose.",
    "ci": [
      "Polidipsia primária / potomania (hiponatremia grave)",
      "Doença de von Willebrand tipo 2B (pode agravar trombocitopenia)",
      "Hiponatremia"
    ],
    "alert": [
      "⚠️ HIPONATREMIA — risco principal; monitorizar Na⁺ 4–8h após dose; limitar ingestão de água",
      "⚠️ Crianças pequenas: risco de convulsões hiponatrémicas por retenção hídrica",
      "⚠️ Taquifilaxia para hemostase após 2–3 doses — não usar em sangramento crónico",
      "Rubor facial, cefaleia, náuseas — efeitos adversos comuns",
      "Poliúria de rebote se suspensão abrupta em DI crónica — reduzir progressivamente"
    ],
    "source": "BNF for Children 2023-24; Sznajder M et al. Pediatrics 2007; ISTH von Willebrand Guidelines 2021"
  },
{
    "id": "glucagon",
    "name": "Glucagão",
    "category": "endocrino",
    "class": "Hormona polipeptídica pancreática — agonista receptor glucagão",
    "brands": "GlucaGen HypoKit — frascos 1 mg pó + seringa com diluente; Baqsimi nasal 3 mg",
    "indication": [
      "Hipoglicemia grave sem acesso EV — tratamento de emergência",
      "Intoxicação por beta-bloqueante grave — efeito inotrópico e cronotrópico positivo",
      "Intoxicação por bloqueadores canais de cálcio — adjuvante terapêutico",
      "Hipoglicemia neonatal transitória sem acesso venoso"
    ],
    "dose": [
      {
        "ind": "Hipoglicemia grave sem acesso EV",
        "val": "< 25 kg: 0,5 mg IM/SC; ≥ 25 kg: 1 mg IM/SC",
        "max": "1 mg",
        "freq": "Dose única; pode repetir 1× após 15 min se sem resposta",
        "note": "Nasal (Baqsimi): 3 mg intranasal numa narina — sem necessidade de reconstituição"
      },
      {
        "ind": "Intoxicação beta-bloqueante grave",
        "val": "0,05–0,15 mg/kg EV em 3–5 min (carga)",
        "max": "10 mg carga",
        "freq": "Carga; depois perfusão 0,05–0,1 mg/kg/h titulada por FC e TA",
        "note": "Doses muito altas podem ser necessárias (até 10 mg) — efeito frequentemente transitório"
      }
    ],
    "prep": "IM/SC: reconstituir pó com diluente fornecido — agitar até dissolver. Usar imediatamente. EV (intoxicação): diluir em SG5% (não SF — precipita). Refrigerar antes de reconstituição.",
    "ci": [
      "Feocromocitoma (libertação de catecolaminas — HTA grave)",
      "Insulinoma (hipoglicemia de rebote após efeito)",
      "Hipersensibilidade ao glucagão ou lactose (excipiente)"
    ],
    "alert": [
      "⚠️ Vómitos frequentes (30–50%) — posicionar em decúbito lateral; risco aspiração",
      "⚠️ Efeito transitório (30–60 min) — dar hidratos de carbono orais logo que possível após recuperação",
      "⚠️ Feocromocitoma não diagnosticado — HTA paradoxal grave",
      "Em intoxicação por BCC e BB: glucagão é adjuvante; associar insulina-euglicemia de alta dose, lipid emulsion, ECMO se refractário",
      "Hiperglicemia transitória após administração — monitorizar glicemia"
    ],
    "source": "BNF for Children 2023-24; Krentz AJ et al. Diabet Med 2011; Graudins A et al. Emerg Med Australas 2016 (BB/CCB toxicity)"
  },
  {
    "id": "levotiroxina",
    "name": "Levotiroxina (T4)",
    "category": "endocrino",
    "class": "Hormona tiroideia sintética — T4 (pró-hormona de T3)",
    "brands": "Synthroid; Eutirox — comp 25/50/75/100/125/150/175/200 μg; EV 100/200/500 μg",
    "indication": [
      "Hipotiroidismo congénito — substituição desde diagnóstico neonatal (screening)",
      "Hipotiroidismo adquirido (autoimune, pós-tiroidectomia, pós-irradiação)",
      "Hipotiroidismo em UCIP pós-cirurgia cardíaca (comum na tetralogia, transposição)",
      "Coma mixedematoso — emergência endocrinológica (EV)",
      "Supressão de TSH em carcinoma diferenciado da tiróide"
    ],
    "dose": [
      {
        "ind": "Hipotiroidismo congénito — RN",
        "val": "10–15 μg/kg/dia PO",
        "max": "50 μg/dia inicial",
        "freq": "1 dose/dia em jejum",
        "note": "Iniciar nas primeiras 2 semanas de vida para prevenir sequelas neurodesenvolvimentais. Alvo T4 livre: metade superior do normal para a idade"
      },
      {
        "ind": "Hipotiroidismo pediátrico (criança > 1 ano)",
        "val": "< 3 anos: 4–6 μg/kg/dia; 3–10 anos: 3–5 μg/kg/dia; > 10 anos: 2–3 μg/kg/dia",
        "max": "150–200 μg/dia (adolescente)",
        "freq": "1 dose/dia em jejum (30 min antes refeição)",
        "note": "Ajustar por TSH e T4 livre a cada 4–8 semanas inicialmente"
      },
      {
        "ind": "Coma mixedematoso — EV",
        "val": "4 μg/kg EV (ou 200–400 μg EV dose única)",
        "max": "500 μg carga",
        "freq": "Carga; depois 100 μg/dia EV",
        "note": "Associar hidrocortisona 100 mg EV q8h até excluir insuf. supra-renal concomitante"
      }
    ],
    "prep": "Oral: esmagar comprimidos em 5 ml de água para RN. Tomar 30 min antes da refeição. Não tomar com leite, antiácidos, ferro, cálcio (reduzem absorção 25–40%). EV: administrar lentamente.",
    "ci": [
      "Tirotoxicose não tratada",
      "Insuf. supra-renal não tratada (pode precipitar crise adrenal)"
    ],
    "alert": [
      "⚠️ Hipotiroidismo congénito: início precoce crítico — atraso > 2 semanas causa défice cognitivo permanente",
      "⚠️ Nunca iniciar em insuf. supra-renal sem corticoide concomitante (crise adrenal)",
      "⚠️ Interacções absorção: ferro, cálcio, antiácidos, colestiramina — separar 4h",
      "Pós-cirurgia cardíaca: hipotiroidismo sub-clínico frequente — rastrear TSH/T4L",
      "Monitorização: TSH e T4L q4–8 sem no início, trimestralmente depois"
    ],
    "source": "BNF for Children 2023-24; ATA Hypothyroidism Guidelines 2014; ESPE Congenital Hypothyroidism Guidelines 2014"
  }
];

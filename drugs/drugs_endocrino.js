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
    "prep": "Perfusão EV: diluir em SF para 0,1–1 UI/ml. Adsorção ao PVC/polietileno — flush 20 ml antes de conectar ao doente (satura sítios de adsorção). Usar seringa de polipropileno. Concentração standard UCIP: 0,5–1 UI/ml em SF. SC/IM: não diluir; usar seringas de insulina graduadas em UI. Fonte: BNF for Children 2023-24; NHS Medusa 2024.",
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
        "ind": "Diabetes insípida — via oral",
        "val": "RN: 1–4 mcg 2–3×/dia; 1–23 meses: 10 mcg 2–3×/dia (usual 30–150 mcg/dia); 2–11 anos: 50 mcg 2–3×/dia (usual 100–800 mcg/dia); 12–17 anos: 100 mcg 2–3×/dia (usual 0,2–1,2 mg/dia)",
        "max": "—",
        "freq": "2–3×/dia, ajustar à resposta (volume urinário, natrémia)",
        "note": "BNFC 2020-21, Desmopressin (p. 468). Sublingual 2–17 anos: inicial 60 mcg 3×/dia (usual 40–240 mcg 3×/dia)."
      },
      {
        "ind": "Diabetes insípida — via intranasal",
        "val": "RN: inicial 0,1–0,5 mcg; 1–23 meses: 2,5–5 mcg 1–2×/dia; 2–11 anos: 5–20 mcg 1–2×/dia; 12–17 anos: 10–20 mcg 1–2×/dia",
        "max": "—",
        "freq": "1–2×/dia",
        "note": "BNFC 2020-21 (p. 468)."
      },
      {
        "ind": "Diabetes insípida — IM/SC",
        "val": "RN: inicial 0,1 mcg 1×/dia; 1 mês–11 anos: inicial 0,4 mcg 1×/dia; 12–17 anos: 1–4 mcg 1×/dia",
        "max": "—",
        "freq": "1×/dia",
        "note": "BNFC 2020-21 (p. 468). Risco de hiponatrémia: controlar ingestão hídrica."
      },
      {
        "ind": "Enurese nocturna primária (≥5 anos)",
        "val": "200 mcg PO ao deitar (até 400 mcg se ineficaz); ou 120 mcg sublingual (até 240 mcg)",
        "max": "400 mcg PO",
        "freq": "1×/dia ao deitar; limitar líquidos 1 h antes a 8 h depois",
        "note": "BNFC 2020-21 (p. 468). Reavaliar aos 3 meses suspendendo ≥1 semana."
      }
    ],
    "prep": "EV: diluir em SF 50 ml. Administrar em 30 min. Oral: comprimido 0,1/0,2 mg — biodisponibilidade apenas 0,08–0,16% vs nasal/EV; doses orais muito mais altas que EV. Nasal: spray 10 μg/dose (cada compressão). ⚠️ Após administração: restringir ingestão de líquidos por 8h (risco hiponatremia).",
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
    "source": "BNF for Children 2020-21, Desmopressin (p. 468)",
    "review": ["Removidas as doses EV (0,01–0,03 mcg/kg) para diabetes insípida e (0,3 mcg/kg) para hemofilia A/doença de von Willebrand: o BNFC 2020-21 refere esse uso mas não dá dose pediátrica; sem fonte verificada neste conjunto de documentos."]
  
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
    "prep": "EV bólus: administrar não diluído (50–500 μg/ml) lentamente 3 min. Perfusão: diluir em SF ou SG5% para 1–50 μg/ml em seringa-bomba. SC: não diluir; rodar locais (braços, coxas, abdómen). ⚠️ Incompatível com NP (adsorção) — linha separada. Refrigerar; estável 14 dias a 4°C após abertura. Fonte: BNF for Children 2023-24; NHS Medusa 2024.",
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
    "prep": "EV: diluir em SF ou SG5% para concentração ≤ 1 mg/ml. Administrar MUITO LENTAMENTE — máximo 1 mg/min (reacções anafilactóides graves, incluindo morte, com infusão rápida). IM/SC preferidos para doses não urgentes (sem risco anafilactóide, absorção adequada). Oral: solução 10 mg/ml. Fonte: BNF for Children 2023-24; NHS Medusa 2024.",
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
    "prep": "Oral: comprimidos 0,4/5 mg — podem ser triturados e dissolvidos em água. EV (ocasional): 5–15 mg em SF ou SG5%, infusão 30 min. ⚠️ Não confundir com ácido folínico (leucovorin) — moléculas diferentes.",
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
    "prep": "EV (Ferinject — carboximaltose): diluir em SF (NÃO em SG5%). Concentração mínima: 2 mg Fe/ml. Infusão 15 min (até 200 mg) ou 30 min (> 200 mg). ⚠️ Não administrar IM ou SC. Reacção de hipersensibilidade: observar 30 min após infusão. NÃO administrar em 1ª semana de vida (ferro livre → sepsis). Fonte: BNF for Children 2023-24; SmPC Ferinject.",
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
    "source": "BNF for Children 2020-21, Iron (p. 617)",
    "review": ["O BNFC 2020-21 não dá doses fixas: calcular pelo peso e défice de ferro (consultar RCM). A fórmula e as doses de carboximaltose férrica não têm fonte verificada neste conjunto de documentos."]

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
    "prep": "Oral: comprimidos 5/10/20 mg — podem ser triturados e dissolvidos em água. Solução extemporânea 5 mg/5 ml. Tomar com ou sem alimentos (com alimentos reduz efeito GI). Distribuir doses ao longo do dia (q8h) para manter níveis consistentes. Fonte: BNF for Children 2023-24.",
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
    "prep": "Oral exclusivamente: comprimidos 0,1 mg — podem ser partidos (dose habitual pediátrica 50–150 μg). Solução extemporânea 0,1 mg/ml estável 14 dias refrigerada. Tomar com ou sem alimentos. Fonte: BNF for Children 2023-24.",
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
    "prep": "Oral: solução 1 mg/ml — conservar a 4°C; estável 1 mês após abertura. Medir com seringa de polipropileno (não polietileno — adsorção). Diluir em ≥ 60 ml água ou sumo de laranja; ingerir imediatamente; encher o copo com mais 120 ml de líquido e ingerir. Comprimidos — engolir inteiros; NÃO esmagar. Tomar SEMPRE da mesma forma (com ou sem alimentos — manter consistente). Fonte: BNF for Children 2023-24; SmPC Rapamune.",
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
    "source": "BNF for Children 2020-21, Sirolimus (p. 561)",
    "review": ["BNFC 2020-21: transplante renal em criança — \"consultar protocolo local\". As doses em mg/m² não têm fonte verificada neste conjunto de documentos."]

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
    "prep": "EV: diluir em SF 50–100 ml. Administrar em 20 min (hemostase/DI). Nasal: spray Octim 150 μg/dose — 1 compressão por narina; Minirin 10 μg/dose. IM/SC: solução 4 μg/ml. ⚠️ Após qualquer via: restringir líquidos 8h (hiponatremia). Oral: comprimidos 0,1/0,2 mg — dose 10–20× superior à intranasal. Fonte: BNF for Children 2023-24; SmPC Desmopressina.",
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
    "source": "BNF for Children 2020-21, Desmopressin (p. 468)",
    "review": ["Ficha duplicada de Desmopressina: ver a ficha principal com doses do BNFC 2020-21 (p. 468). As doses EV (0,1–0,4 mcg/kg; 0,3 mcg/kg para hemostase) não têm fonte verificada neste conjunto de documentos."]

  },
{
    "id": "glucagon",
    "name": "Glucagão",
    "category": "endocrino",
    "class": "Hormona polipeptídica pancreática — agonista receptor glucagão",
    "brands": "GlucaGen HypoKit — frascos 1 mg pó + seringa com diluente; Baqsimi nasal 3 mg",
    "indication": [
      "Hipoglicemia grave sem acesso EV — tratamento de emergência",
      "Intoxicação por beta-bloqueante com choque cardiogénico refractário à atropina (não licenciado)",
      "Hiperinsulinismo endógeno (uso especializado, não licenciado)",
    ],
    "dose": [
      {
        "ind": "Hipoglicemia grave sem acesso EV",
        "val": "RN: 20 mcg/kg SC/IM; 1 mês–8 anos (< 25 kg): 500 mcg SC/IM; 9–17 anos (≥ 25 kg): 1 mg SC/IM",
        "max": "1 mg",
        "freq": "Dose única; se sem resposta em 10 min, administrar glicose EV",
        "note": "BNFC 2020-21 (Glucagon, p. 502). Apresentação nasal (Baqsimi) não consta do BNFC 2020-21 — dose não verificada nas fontes disponíveis."
      },
      {
        "ind": "Intoxicação por beta-bloqueante (choque cardiogénico refractário à atropina)",
        "val": "50–150 mcg/kg EV (em glicose 5%), seguido de perfusão 50 mcg/kg/h",
        "max": "10 mg por dose (carga)",
        "freq": "Carga + perfusão contínua",
        "note": "BNFC 2020-21: administrar com protecção da via aérea (risco de vómito). Uso não licenciado."
      }
      ,{
        "ind": "Hiperinsulinismo endógeno (uso especializado, não licenciado)",
        "val": "RN: 200 mcg/kg IM/EV (dose única; máx. 1 mg), depois perfusão 1–18 mcg/kg/h; 1 mês–1 ano: 1 mg dose única, perfusão 1–10 mcg/kg/h",
        "max": "RN: perfusão máx. 50 mcg/kg/h",
        "freq": "Titular por resposta glicémica",
        "note": "BNFC 2020-21 (Glucagon, p. 502)."
      }
    ],
    "prep": "IM/SC: reconstituir o pó com o diluente fornecido e administrar de imediato. EV contínuo: não adicionar a soluções que contenham cálcio (precipitação — BNFC 2020-21). Bólus na intoxicação por beta-bloqueante: em glicose 5%.",
    "ci": [
      "Feocromocitoma (BNFC 2020-21)"
    ],
    "alert": [
      "⚠️ Ineficaz em hipoglicemia crónica, jejum prolongado e insuficiência supra-renal (BNFC 2020-21)",
      "Precaução: insulinoma, glucagonoma (BNFC 2020-21)",
      "Teste de GH: risco de hipoglicemia tardia (óbitos descritos) — garantir refeição antes da alta (BNFC 2020-21)",
      "Efeitos adversos: náuseas (frequentes), vómitos (pouco frequentes) — proteger a via aérea"
    ],
    "source": "BNF for Children 2020-21, Glucagon (p. 502)"
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
        "ind": "Hipotiroidismo — RN (PO)",
        "val": "Inicial 10–15 mcg/kg 1×/dia; ajustar em passos de 5 mcg/kg cada 2 semanas; manutenção 20–50 mcg/dia",
        "max": "50 mcg/dose inicial",
        "freq": "1×/dia, sempre à mesma hora, de preferência 30 min antes das refeições",
        "note": "BNFC 2020-21, Levothyroxine sodium (p. 524)."
      },
      {
        "ind": "Hipotiroidismo — 1 mês–1 ano (PO)",
        "val": "Inicial 5 mcg/kg 1×/dia; ajustar em passos de 10–25 mcg cada 2–4 semanas; manutenção 25–75 mcg/dia",
        "max": "50 mcg/dose inicial",
        "freq": "1×/dia",
        "note": "BNFC 2020-21 (p. 524)."
      },
      {
        "ind": "Hipotiroidismo — 2–11 anos (PO)",
        "val": "Inicial 50 mcg 1×/dia; ajustar em passos de 25 mcg cada 2–4 semanas; manutenção 75–100 mcg/dia",
        "max": "—",
        "freq": "1×/dia",
        "note": "BNFC 2020-21 (p. 524)."
      },
      {
        "ind": "Hipotiroidismo — 12–17 anos (PO)",
        "val": "Inicial 50 mcg 1×/dia; ajustar em passos de 25–50 mcg cada 3–4 semanas; manutenção 100–200 mcg/dia",
        "max": "—",
        "freq": "1×/dia",
        "note": "BNFC 2020-21 (p. 524)."
      },
      {
        "ind": "Via EV (impossibilidade de via oral)",
        "val": "1,2 mcg/kg/dia EV",
        "max": "—",
        "freq": "1×/dia",
        "note": "Shann, Drug Doses (entrada Thyroxine/levothyroxine). Não consta do BNFC 2020-21. Dose de carga no coma mixedematoso pediátrico: não verificada nas fontes disponíveis — consultar Endocrinologia Pediátrica."
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
    "source": "BNF for Children 2020-21, Levothyroxine sodium (p. 524); Shann F. Drug Doses (via EV)"
  }
];

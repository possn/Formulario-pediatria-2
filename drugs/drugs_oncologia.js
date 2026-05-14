// UCIP Pediatria — Oncologia & Suporte
// 11 fármacos
// Fontes: ver drugs_sources.js

var DRUGS_ONCOLOGIA = [
  {
    "id": "acetilcisteina",
    "name": "Acetilcisteína",
    "category": "antidoto",
    "class": "Antídoto paracetamol; mucolítico; precursor glutationa",
    "brands": "Fluimucil Antídoto 200 mg/ml (amp. 10 ml = 2g). Fluimucil 600 mg efervescente.",
    "indication": [
      "Intoxicação por paracetamol — antídoto (indicação MAJOR)",
      "Mucolítico em doenças respiratórias crónicas",
      "Protecção renal em nefropatia de contraste (evidência fraca)"
    ],
    "dose": [
      {
        "ind": "Intoxicação paracetamol — EV (protocolo 3 bolsas)",
        "val": "BOLSA 1: 150 mg/kg em 200 ml SG5% — 60 min; BOLSA 2: 50 mg/kg em 500 ml SG5% — 4 horas; BOLSA 3: 100 mg/kg em 1000 ml SG5% — 16 horas",
        "max": "—",
        "freq": "protocolo sequencial = total 300 mg/kg em ~21h",
        "note": "Iniciar se nível paracetamol acima da linha de tratamento no nomograma de Rumack-Matthew. Útil até 24h (máx. eficácia < 10h)"
      },
      {
        "ind": "Intoxicação paracetamol — oral (alternativa)",
        "val": "CARGA: 140 mg/kg; MANUTENÇÃO: 70 mg/kg oral cada 4h × 17 doses",
        "max": "—",
        "freq": "18 doses total",
        "note": "Dar em bebida gasosa. Evitar carvão activado simultâneo"
      }
    ],
    "prep": "EV: diluir em SG5% (não SF). Estável 24h.",
    "ci": [
      "Hipersensibilidade (relativa — benefício supera risco na intoxicação grave)"
    ],
    "alert": [
      "⚠️ Reacção anafilactóide frequente na 1ª bolsa (~15%) — urticária, broncoespasmo, hipotensão. Tratar com anti-H1 e reduzir velocidade. Retomar após resolução",
      "⚠️ Incompatível com ampicilina, eritromicina, anfotericina B",
      "Monitorizar nível paracetamol, LFTs, INR, creatinina",
      "Se INR > 3 em D2 ou hepatotoxicidade grave — contactar centro de transplante"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24; Prescott LF. Lancet 1979"
  },
  {
    "id": "ondansetron_chemo",
    "name": "Granisetrona",
    "category": "oncologia",
    "src": "added",
    "class": "Antagonista selectivo receptor 5-HT3 — antiemético de alta potência",
    "brands": "Kytril 1 mg comp.; 1 mg/ml EV",
    "indication": [
      "Náuseas e vómitos induzidos por quimioterapia altamente emetogénica",
      "Náuseas e vómitos pós-operatórios refractários"
    ],
    "dose": [
      {
        "ind": "Quimioterapia EV/oral",
        "val": "20–40 mcg/kg/dose EV",
        "max": "3 mg/dose",
        "freq": "30 min antes QT; pode repetir cada 12h",
        "note": "Oral: 1 mg × 2/dia (adulto)"
      }
    ],
    "prep": "EV: diluir em SF ou SG5% 50 ml. Infusão 5 min.",
    "ci": [
      "Prolongamento QT congénito"
    ],
    "alert": [
      "⚠️ Prolongamento QTc — monitorizar ECG se factores de risco",
      "Cefaleias (frequentes — transitórias)",
      "Obstipação"
    ],
    "source": "BNF for Children 2023-24; MASCC/ESMO Antiemetic Guidelines 2023"
  },
  {
    "id": "alopurinol_onco",
    "name": "Alopurinol",
    "category": "oncologia",
    "src": "original",
    "class": "Inibidor xantina oxidase — reduz produção ácido úrico",
    "brands": "Zyloric comp. 100/300 mg",
    "indication": [
      "Prevenção síndrome lise tumoral (SLT) — risco baixo-intermédio",
      "Hiperuricemia por gota (adolescente)",
      "Litíase úrica recorrente"
    ],
    "dose": [
      {
        "ind": "Profilaxia SLT oral",
        "val": "10 mg/kg/dia oral",
        "max": "300 mg/dia",
        "freq": "3 doses/dia; iniciar 1–2 dias antes QT",
        "note": "Hidratação agressiva concomitante"
      },
      {
        "ind": "Adulto / adolescente",
        "val": "300 mg/dia",
        "max": "900 mg/dia",
        "freq": "1–3 doses/dia",
        "note": ""
      }
    ],
    "prep": "Comprimidos podem ser dissolvidos em água.",
    "ci": [
      "Hipersensibilidade (rash frequente)"
    ],
    "alert": [
      "⚠️ Rash cutâneo — suspender imediatamente (pode progredir para SJS/TEN)",
      "⚠️ Interacção com azatioprina/mercaptopurina — reduzir dose 66–75%",
      "⚠️ Insuficiente para SLT alto risco (usar rasburicase)",
      "Monitorizar ácido úrico, creatinina e electrólitos"
    ],
    "source": "BNF for Children 2023-24; Howard SC. NEJM 2011; SIOP/COG TLS Guidelines 2017"
  },
  {
    "id": "naltrexona",
    "name": "Naltrexona",
    "category": "antidoto",
    "src": "added",
    "class": "Antagonista opioide de longa duração — oral",
    "brands": "Revia comp. 50 mg",
    "indication": [
      "Prevenção recaída em dependência opioides (adulto/adolescente)",
      "Síndrome de Sotos / comportamentos auto-lesivos em autismo (off-label)",
      "Prurido colestático refractário (off-label pediátrico)"
    ],
    "dose": [
      {
        "ind": "Dependência opioides (adulto)",
        "val": "25 mg 1º dia → 50 mg/dia",
        "max": "50 mg/dia",
        "freq": "1×/dia",
        "note": "Iniciar APENAS após desintoxicação (≥ 7–10 dias sem opioides)"
      },
      {
        "ind": "Prurido colestático (off-label pediátrico)",
        "val": "0,5–1 mg/kg/dia",
        "max": "50 mg/dia",
        "freq": "1×/dia",
        "note": ""
      }
    ],
    "prep": "Oral. Comprimidos podem ser triturados.",
    "ci": [
      "Uso activo de opioides (precipita abstinência aguda grave)",
      "Hepatite aguda / insuf. hepática",
      "Dependência opioides não desintoxicada"
    ],
    "alert": [
      "⛔ PRECIPITA SÍNDROME DE ABSTINÊNCIA AGUDA se doente ainda usar opioides — risco grave",
      "⚠️ Hepatotoxicidade em doses altas",
      "Não usar para analgesia (antagonista — bloqueia efeito analgésico)"
    ],
    "source": "BNF for Children 2023-24; Revia SmPC"
  },
  {
    "id": "aprepitant",
    "name": "Aprepitant / Fosaprepitant",
    "category": "oncologia",
    "class": "Antagonista receptor NK1 (neurocinina 1) — antiemético",
    "brands": "Emend — cáps 40/80/125 mg; susp 125 mg/5 ml; Fosaprepitant EV 150 mg",
    "indication": [
      "NVIQ altamente emetizante — 1ª linha em combinação com ondansetron + dexametasona",
      "NVIQ moderadamente emetizante em doentes de alto risco",
      "NVPO refractário"
    ],
    "dose": [
      {
        "ind": "NVIQ altamente emetizante ≥ 12 anos",
        "val": "Dia 1: 125 mg PO; Dias 2–3: 80 mg PO",
        "max": "125 mg/dia",
        "freq": "1 dose/dia, 1h antes QT no dia 1",
        "note": "< 12 anos: dose em mg/m² (≥ 6 meses): dia 1: 3 mg/kg (máx 115 mg); dias 2–3: 2 mg/kg (máx 80 mg)"
      },
      {
        "ind": "Fosaprepitant EV (quando oral impossível)",
        "val": "Dia 1: 115–150 mg EV em 20–30 min",
        "max": "150 mg",
        "freq": "Dose única no dia 1; completar com aprepitant oral dias 2–3",
        "note": ""
      }
    ],
    "prep": "EV (fosaprepitant): diluir 150 mg em 145 ml SF (1 mg/ml). Administrar em 20–30 min.",
    "ci": [
      "Uso com pimozida, terfenadina, astemizol, cisaprida (substrato CYP3A4 — toxicidade grave)",
      "Hipersensibilidade"
    ],
    "alert": [
      "⚠️ Inibidor moderado CYP3A4 — aumenta exposição de dexametasona (reduzir dose Dexa 50% quando combinados), midazolam, quimioterápicos metabolizados por 3A4 (vincristina, docetaxel)",
      "⚠️ Indutor CYP2C9 — reduz INR em doentes com varfarina; monitorizar",
      "Eficácia estabelecida em crianças ≥ 6 meses (Bakhshi S et al. Pediatr Blood Cancer 2015)"
    ],
    "source": "BNF for Children 2023-24; Bakhshi S et al. Pediatr Blood Cancer 2015; MASCC/ESMO 2023"
  },
  {
    "id": "g_csf_filgrastim",
    "name": "Filgrastim / Lenograstim (G-CSF)",
    "category": "oncologia",
    "class": "Factor estimulador de colónias de granulócitos — citocina recombinante",
    "brands": "Neupogen (filgrastim) 300 μg/ml; Granocyte (lenograstim) 13,4/33,6 MUI",
    "indication": [
      "Neutropenia febril em quimioterapia — tratamento (≥ 5 dias; dose alta ou duração longa)",
      "Profilaxia primária de neutropenia febril (QT com risco > 20%)",
      "Mobilização de células estaminais para aférese",
      "Neutropenia crónica grave (congénita, cíclica, idiopática)"
    ],
    "dose": [
      {
        "ind": "Neutropenia febril — tratamento",
        "val": "5 μg/kg/dia SC",
        "max": "—",
        "freq": "1 dose/dia; iniciar 24–72h após QT (não durante QT activo)",
        "note": "Continuar até neutrófilos > 1000/μL por 2 dias consecutivos após nadir"
      },
      {
        "ind": "Mobilização células estaminais",
        "val": "10–16 μg/kg/dia SC",
        "max": "—",
        "freq": "1–2 doses/dia × 4–5 dias; aférese no dia 5",
        "note": ""
      }
    ],
    "prep": "SC: administrar não diluído ou diluído em SG5% (mínimo 5 μg/ml — não diluir excessivamente). Refrigerar 2–8°C; estável 24h à temperatura ambiente.",
    "ci": [
      "Leucemia mieloide aguda (LMA) não tratada — pode estimular blastos (relativa)",
      "Síndrome de activação macrofágica activa"
    ],
    "alert": [
      "⚠️ Síndrome de distress respiratório agudo — raro; especialmente com dose alta em doentes com pneumonia",
      "⚠️ Ruptura esplénica (rara) — dor abdominal/ombro esquerdo: investigar imediatamente",
      "⚠️ Não iniciar < 24h antes ou durante QT activo — pode aumentar sensibilidade mieloide à citotoxicidade",
      "Dores ósseas (40–70%) — responde a paracetamol ou ibuprofeno; anti-histamínico se extensas",
      "Esplenomegalia com uso prolongado — monitorizar"
    ],
    "source": "BNF for Children 2023-24; ASCO G-CSF Guidelines 2015; Lyman GH et al. JCO 2015"
  },
  {
    "id": "rasburicase_slt",
    "name": "Rasburicase (Síndrome Lise Tumoral)",
    "category": "oncologia",
    "class": "Urato oxidase recombinante — metaboliza ácido úrico em alantoína",
    "brands": "Fasturtec — frascos 1,5 mg e 7,5 mg pó",
    "indication": [
      "Síndrome de lise tumoral (SLT) — tratamento e profilaxia de alto risco",
      "Hiperuricemia grave por SLT em leucemia/linfoma de alto burden",
      "Superiora ao alopurinol na redução de ácido úrico em SLT estabelecido"
    ],
    "dose": [
      {
        "ind": "SLT — tratamento/profilaxia alto risco",
        "val": "0,2 mg/kg/dia EV em 30 min",
        "max": "—",
        "freq": "1× /dia × 5–7 dias (ou até resolução hiperuricemia)",
        "note": "Dose única 0,15 mg/kg suficiente em muitos casos pediátricos. Monitorizar ácido úrico 4h após 1ª dose"
      }
    ],
    "prep": "EV: reconstituir com diluente fornecido; diluir em SF 50 ml. Administrar em 30 min por via dedicada (não misturar). Não agitar. Sensível à luz.",
    "ci": [
      "Deficiência de G6PD (hemólise grave — rasburicase produz H2O2 como sub-produto)",
      "Metahemoglobinemia",
      "Gravidez e aleitamento"
    ],
    "alert": [
      "⚠️ Rastrear G6PD antes da 1ª dose — hemólise grave e metahemoglobinemia em deficientes",
      "⚠️ Amostra de ácido úrico: colocar imediatamente em gelo (rasburicase activa na amostra à temperatura ambiente, dando falsos baixos)",
      "⚠️ Anafilaxia — ter adrenalina disponível; parar infusão se reacção",
      "Não usar em simultâneo com alopurinol (sem benefício adicional)",
      "Custo elevado — reservar para SLT estabelecido ou risco muito alto; alopurinol para risco intermédio"
    ],
    "source": "BNF for Children 2023-24; Cairo MS et al. Br J Haematol 2010; SIOP/COG TLS Guidelines 2017"
  },
  {
    "id": "mesna_protetor",
    "name": "Mesna (Uroprotector)",
    "category": "oncologia",
    "class": "Uroprotector — inactivador de metabolitos uroepiteliotóxicos (acroleína)",
    "brands": "Uromitexan — ampolas 400 mg/4 ml; comp 400/600 mg",
    "indication": [
      "Profilaxia cistite hemorrágica induzida por ciclofosfamida e ifosfamida",
      "Obrigatório com ifosfamida em qualquer dose",
      "Ciclofosfamida ≥ 10 mg/kg/dia ou em altas doses"
    ],
    "dose": [
      {
        "ind": "Ifosfamida (protocolo EV standard)",
        "val": "Mesna total = 60% da dose de ifosfamida",
        "max": "—",
        "freq": "Fraccionado: 20% da dose ifosfamida a 0h, 4h e 8h após início da ifosfamida",
        "note": "Protocolo alternativo: 100% da dose de ifosfamida em perfusão contínua concomitante (preferido em doses intensas)"
      },
      {
        "ind": "Ciclofosfamida em altas doses",
        "val": "Mesna total = 80–160% da dose de ciclofosfamida",
        "max": "—",
        "freq": "Perfusão contínua durante e 24h após ciclofosfamida",
        "note": ""
      }
    ],
    "prep": "EV: diluir em SF ou SG5%. Compatível em Y com ciclofosfamida/ifosfamida. PO: após dose EV final, oral é alternativa (biodisponibilidade 45–79%).",
    "ci": ["Hipersensibilidade ao mesna"],
    "alert": [
      "⚠️ Mesna NÃO protege contra outros efeitos da ciclofosfamida/ifosfamida (nefrotoxicidade, mielosupr., alopecia)",
      "⚠️ Hidratação EV obrigatória em conjunto com mesna — diurese forçada > 2 ml/kg/h",
      "Monitorizar urina (tiras reactivas para hematúria) antes de cada ciclo",
      "Reacções anafilactoides raras mas descritas",
      "Falso positivo de corpos cetónicos na urina com alguns testes (interferência química)"
    ],
    "source": "BNF for Children 2023-24; Hensley ML et al. JCO 2008; COG/SIOP ifosfamide protocols"
  },
  {
    "id": "acido_folico_onco",
    "name": "Ácido Folínico (Leucovorin)",
    "category": "oncologia",
    "class": "Folato reduzido — resgate de metotrexato",
    "brands": "Leucovorin — comp 5/15 mg; EV 50/100/200 mg",
    "indication": [
      "Resgate após metotrexato em altas doses (HD-MTX) — obrigatório",
      "Potenciação de 5-fluorouracilo (oncologia adulto)",
      "Deficiência de folato (quando folato activo necessário imediatamente)"
    ],
    "dose": [
      {
        "ind": "Resgate pós-HD-MTX (protocolo standard)",
        "val": "15 mg/m²/dose PO/EV",
        "max": "15 mg/dose (início standard)",
        "freq": "q6h × 10 doses (início 24h após HD-MTX); ajustar conforme nível MTX sérico",
        "note": "Escalar dose se nível MTX > 1 μmol/L às 42h: dose leucovorin = [MTX μmol/L] × 100 mg/m²/q3h"
      }
    ],
    "prep": "EV: diluir em SF ou SG5%. PO: oral tão eficaz como EV para resgate standard.",
    "ci": [
      "Anemia perniciosa (não tratar — mascarar défice B12)",
      "Não usar ácido fólico comum (não reduzido) como substituto — não é a mesma molécula"
    ],
    "alert": [
      "⚠️ NÃO confundir ácido fólico (folato oxidado, profilaxia) com ácido folínico (leucovorin, resgate MTX) — são moléculas diferentes",
      "⚠️ Monitorizar nível sérico de MTX q24h até < 0,1 μmol/L — guiar duração do resgate",
      "⚠️ Hidratação EV e alcalinização urinária (pH > 7) obrigatórias com HD-MTX (solubilidade MTX pH-dependente)",
      "Resgate insuficiente ou atrasado: mucosites, mielossupressão, nefrotoxicidade graves"
    ],
    "source": "BNF for Children 2023-24; Widemann BC et al. Oncologist 2006; COG/SIOP MTX protocols"
  },
  {
    "id": "dexrazoxano",
    "name": "Dexrazoxano",
    "category": "oncologia",
    "class": "Cardioprotetor — quelante intracelular de ferro, inibidor topoisomerase II",
    "brands": "Cardioxane — frascos 500 mg",
    "indication": [
      "Cardioproteção em quimioterapia com antraciclinas (doxorrubicina, daunorrubicina) — dose cumulativa elevada",
      "Extravasamento de antraciclinas — tratamento local",
      "Prevenção de cardiotoxicidade em criança com neoplasia hematológica"
    ],
    "dose": [
      {
        "ind": "Cardioproteção (antraciclinas)",
        "val": "10:1 rácio com doxorrubicina (ex: dexrazoxano 300 mg/m² se doxorrubicina 30 mg/m²) EV",
        "max": "—",
        "freq": "Administrar 30 min antes de cada dose de antraciclina",
        "note": "Indicado quando dose cumulativa de doxorrubicina ≥ 300 mg/m² está planeada"
      },
      {
        "ind": "Extravasamento de antraciclina",
        "val": "1000 mg/m² EV dia 1 e 2; 500 mg/m² EV dia 3",
        "max": "2000 mg/dia (dias 1–2); 1000 mg (dia 3)",
        "freq": "3 dias consecutivos; iniciar ≤ 6h após extravasamento",
        "note": ""
      }
    ],
    "prep": "EV: diluir em RL ou SF. Concentração 1,3–5 mg/ml. Administrar em 15 min (cardioproteção) ou 1–2h (extravasamento).",
    "ci": [
      "Gravidez",
      "Lactação"
    ],
    "alert": [
      "⚠️ Mielossupressão aditiva com quimioterapia — monitorizar hemograma",
      "Pode reduzir eficácia antitumoral de antraciclinas em alguns tumores (dados contraditórios) — decisão oncológica individualizada",
      "Para extravasamento: NÃO aplicar gelo antes ou durante dexrazoxano (vasoconstrição reduz distribuição)",
      "Evidência pediátrica crescente — oncologia pediátrica de alto risco com doses altas de antraciclinas"
    ],
    "source": "BNF for Children 2023-24; van Dalen EC et al. Cochrane 2011; Mouridsen HT et al. Ann Oncol 2007"
  },
  {
    "id": "imatinib",
    "name": "Imatinib",
    "category": "oncologia",
    "class": "Inibidor de tirosina-cinase — BCR-ABL, c-KIT, PDGFR",
    "brands": "Glivec — comp 100/400 mg",
    "indication": [
      "Leucemia mieloide crónica Ph+ (LMC) — 1ª linha em todas as fases",
      "LLA Ph+ (cromossoma Philadelphia) — em combinação com quimioterapia",
      "GIST (tumor estromal gastrointestinal) — c-KIT positivo",
      "Síndrome hipereosinofílico com FIP1L1-PDGFRA"
    ],
    "dose": [
      {
        "ind": "LMC fase crónica — criança",
        "val": "340 mg/m²/dia PO",
        "max": "600 mg/dia",
        "freq": "1 dose/dia com refeição",
        "note": "LLA Ph+: 340 mg/m²/dia em combinação com quimioterapia de indução"
      }
    ],
    "prep": "Oral: comprimidos — tomar com refeição e copo de água. Para crianças que não engolam comp: dissolver em água ou sumo de maçã (50 ml para 100 mg comp).",
    "ci": [
      "Hipersensibilidade",
      "Gravidez (teratogénico)"
    ],
    "alert": [
      "⚠️ Retenção de fluidos e edema — periorbital, periférico, derrame pleural/pericárdico; monitorizar peso",
      "⚠️ Mielossupressão — hemograma semanal no 1º mês",
      "⚠️ Hepatotoxicidade — TFH mensalmente nos primeiros 3 meses",
      "⚠️ Inibidor CYP3A4 — aumenta midazolam, ciclosporina, varfarina; indutores (rifampicina, fenitoína) reduzem imatinib",
      "Náuseas — tomar COM refeição; reduz significativamente",
      "Dor muscular e cãibras — suplementação de magnésio oral pode ajudar",
      "TDM crescentemente utilizado — nível mínimo alvo > 1000 ng/mL"
    ],
    "source": "BNF for Children 2023-24; Champagne MA et al. Blood 2004 (pediátrico); ELN CML Guidelines 2022"
  }
];

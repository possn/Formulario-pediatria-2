// UCIP Pediatria — Sedação, Analgesia & BNMND
// 17 fármacos
// Fontes: ver drugs_sources.js

var DRUGS_SEDACAO = [
  {
    "id": "midazolam",
    "name": "Midazolam",
    "category": "sedacao",
    "class": "Benzodiazepina — potenciador GABA-A",
    "brands": "Dormicum 5 mg/ml; 1 mg/ml",
    "indication": [
      "Sedação em UCIP (perfusão contínua)",
      "Status epilepticus (2ª linha após BZD rectais/nasais)",
      "Pré-medicação / procedimentos",
      "Sedação para intubação"
    ],
    "dose": [
      {
        "ind": "Status epilepticus — EV bólus",
        "val": "0,1–0,2 mg/kg",
        "max": "10 mg/dose",
        "freq": "pode repetir 1× após 5 min",
        "note": ""
      },
      {
        "ind": "Status epilepticus — nasal/bucal",
        "val": "0,3–0,5 mg/kg",
        "max": "10 mg",
        "freq": "dose única",
        "note": "Nasal: metade da dose em cada narina. Bucal: Epistatus 10 mg/ml solução bucal"
      },
      {
        "ind": "Sedação UCIP — perfusão",
        "val": "0,05–0,2 mg/kg/hora",
        "max": "0,5 mg/kg/hora (convulsivo refractário)",
        "freq": "contínua",
        "note": "Tolerância rápida — reavaliar diariamente. Evitar > 7 dias (síndrome abstinência)"
      },
      {
        "ind": "Procedimentos / pré-medicação",
        "val": "0,05–0,1 mg/kg EV; 0,3–0,5 mg/kg oral",
        "max": "5 mg EV; 15 mg oral",
        "freq": "dose única 15–30 min antes",
        "note": ""
      }
    ],
    "prep": "Perfusão UCIP: (0,3 × Peso kg) mg em 50 ml SG5% → 1 ml/h = 0,1 mg/kg/h. Concentração máx. EV periférico: 1 mg/ml.",
    "ci": [
      "Glaucoma de ângulo fechado",
      "Miastenia gravis (relativa)",
      "Choque não controlado"
    ],
    "alert": [
      "⚠️ Depressão respiratória — ter equipamento de VNI/entubação disponível",
      "⚠️ Síndrome de abstinência se > 7 dias ou > 0,1 mg/kg/h — desmame gradual",
      "⚠️ Potenciado por eritromicina, fluconazol, cimetidina (inibidores CYP3A4)",
      "Efeito atenuado pela teofilina",
      "RN: metabolismo hepático imaturo — usar doses baixas"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24; ESICM Guidelines 2022"
  },
  {
    "id": "morfina",
    "name": "Morfina",
    "category": "sedacao",
    "class": "Opioide — agonista receptores µ",
    "brands": "Morfina 10 mg/ml; 1 mg/ml",
    "indication": [
      "Analgesia moderada a intensa",
      "Sedoanalgesia em UCIP (perfusão)",
      "Dispneia grave (cuidados paliativos)",
      "Edema agudo do pulmão"
    ],
    "dose": [
      {
        "ind": "Analgesia — EV bólus",
        "val": "0,05–0,1 mg/kg",
        "max": "5 mg/dose (criança); 10 mg (adolescente)",
        "freq": "cada 2–4h",
        "note": "RN e lactentes < 3 meses: 0,025–0,05 mg/kg (maior sensibilidade respiratória)"
      },
      {
        "ind": "Perfusão UCIP",
        "val": "0,01–0,04 mg/kg/hora",
        "max": "0,1 mg/kg/hora",
        "freq": "contínua",
        "note": "Titular por scores de dor (FLACC, NRS, COMFORT-B). Associar analgesia não-opioide"
      },
      {
        "ind": "PCA (> 5–6 anos)",
        "val": "Bólus 0,02 mg/kg; lockout 5–10 min; máx. 4 bólus/hora",
        "max": "—",
        "freq": "—",
        "note": ""
      }
    ],
    "prep": "Perfusão: (Peso kg) mg em 50 ml SG5% → 1 ml/h = 0,02 mg/kg/h (concentração ~standard). Usar linha dedicada.",
    "ci": [
      "Depressão respiratória grave não monitorizada",
      "Íleo paralítico (relativa)",
      "Hipotensão grave não controlada"
    ],
    "alert": [
      "⚠️ Depressão respiratória — antídoto: naloxona 0,01 mg/kg EV",
      "⚠️ Síndrome abstinência após uso prolongado — desmame 10–20%/dia",
      "⚠️ Libertação histamina — hipotensão, broncoespasmo (menos fentanil)",
      "Obstipação — administrar laxante profilático em uso > 3 dias",
      "Monitorização SpO2 contínua"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24; Harriet Lane 23rd Ed"
  },
  {
    "id": "fentanil",
    "name": "Fentanil",
    "category": "sedacao",
    "class": "Opioide — agonista µ (lipofílico, curta duração)",
    "brands": "Fentanil 0,05 mg/ml (50 mcg/ml)",
    "indication": [
      "Analgesia para procedimentos (maior potência, onset rápido)",
      "Sedoanalgesia em UCIP (perfusão contínua)",
      "ISR — analgesia pré-intubação",
      "Dor crónica intensa"
    ],
    "dose": [
      {
        "ind": "Procedimentos / ISR — EV bólus",
        "val": "1–2 mcg/kg",
        "max": "50 mcg/dose (criança)",
        "freq": "dose única ou a cada 30–60 min",
        "note": "Onset 1–2 min, duração 30–60 min. Para ISR: 2–3 mcg/kg"
      },
      {
        "ind": "Perfusão UCIP",
        "val": "0,5–2 mcg/kg/hora",
        "max": "4 mcg/kg/hora",
        "freq": "contínua",
        "note": "Sem libertação de histamina — preferir à morfina em broncoespasmo ou instabilidade HD"
      },
      {
        "ind": "RN — pós-operatório / ventilação",
        "val": "0,5–1 mcg/kg/hora",
        "max": "2 mcg/kg/hora",
        "freq": "contínua",
        "note": "Monitorização rigorosa — rigidez torácica com bólus rápidos > 5 mcg/kg"
      }
    ],
    "prep": "Perfusão: (Peso kg × 0,05) mg em 50 ml SG5% → 1 ml/h = 1 mcg/kg/h. Ou concentração padrão 10 mcg/ml.",
    "ci": [
      "Depressão respiratória grave não monitorizada"
    ],
    "alert": [
      "⚠️ Rigidez torácica ('wooden chest') com bólus rápidos e doses altas — tratar com naloxona ou BNMND",
      "⚠️ Síndrome abstinência após uso prolongado",
      "Vantagens vs morfina: sem histamina, maior estabilidade hemodinâmica",
      "100× mais potente que morfina",
      "Antídoto: naloxona"
    ],
    "source": "BNF for Children 2023-24; Harriet Lane 23rd Ed; GOSH Drug Formulary 2023"
  },
  {
    "id": "ketamina",
    "name": "Ketamina",
    "category": "sedacao",
    "class": "Antagonista NMDA — anestésico dissociativo",
    "brands": "Ketalar 10 mg/ml; 50 mg/ml; 100 mg/ml",
    "indication": [
      "Procedimentos dolorosos (redução dislocações, pensos queimados, punção lombar)",
      "Indução anestésica em emergência",
      "ISR em doente asmático ou hipovolémico",
      "Sedação UCIP (adjuvante — poupadora de opioides)",
      "Status epilepticus refractário"
    ],
    "dose": [
      {
        "ind": "Procedimentos — EV",
        "val": "1–2 mg/kg EV em 1–2 min",
        "max": "4 mg/kg/dose",
        "freq": "dose única; pode repetir 0,5–1 mg/kg",
        "note": "Onset 30–60 seg, duração 10–20 min"
      },
      {
        "ind": "Procedimentos — IM",
        "val": "4–5 mg/kg IM",
        "max": "10 mg/kg",
        "freq": "dose única",
        "note": "Onset 3–5 min, duração 20–30 min. Útil quando sem AV"
      },
      {
        "ind": "ISR",
        "val": "1,5–2 mg/kg EV",
        "max": "200 mg",
        "freq": "dose única",
        "note": "Preferir em asma e hipovolemia (broncodilatação, ↑TA)"
      },
      {
        "ind": "Status epilepticus refractário",
        "val": "1,5 mg/kg EV → perfusão 0,3–3 mg/kg/hora",
        "max": "—",
        "freq": "contínua",
        "note": "Evidência crescente como opção no SE refractário"
      }
    ],
    "prep": "Para procedimentos: diluir a 10 mg/ml (EV) ou usar solução 50 mg/ml IM. Para perfusão: diluir em SG5% ou SF.",
    "ci": [
      "HTA grave não controlada",
      "Hipertensão intracraniana (relativa — evidência recente questiona esta CI)",
      "Psicose activa",
      "Doença coronária grave"
    ],
    "alert": [
      "⚠️ Alucinações/pesadelos (emergence reactions) — reduzidos com midazolam 0,05 mg/kg em pré-medicação",
      "⚠️ Hipersalivação — atropina pré-medicação 0,02 mg/kg (controverso, prática variável)",
      "⚠️ Não deprime reflexos das vias aéreas — mas NÃO garante protecção: aspiração possível",
      "Broncodilatador — opção ideal no asmático",
      "Efeito simpaticomimético: útil no choque hipovolémico"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24; Green SM. Ann Emerg Med 2011"
  },
  {
    "id": "propofol",
    "name": "Propofol",
    "category": "sedacao",
    "class": "Hipnótico EV — mecanismo GABA-A (parcial)",
    "brands": "Propofol 1% (10 mg/ml); 2% (20 mg/ml). Diprivan, Recofol.",
    "indication": [
      "Indução anestésica (sala de operações / UCI adultos)",
      "Sedação para procedimentos de curta duração (> 3 anos)",
      "Sedação em UCI — uso MUITO limitado e controverso em pediatria"
    ],
    "dose": [
      {
        "ind": "Indução anestésica",
        "val": "2,5–3,5 mg/kg EV (criança > 3 anos)",
        "max": "—",
        "freq": "dose única, titulada",
        "note": "Crianças mais jovens necessitam doses mais altas. RN: não usar"
      },
      {
        "ind": "Sedação procedimentos (> 3 anos)",
        "val": "Bólus 0,5–1 mg/kg → perfusão 2–4 mg/kg/hora",
        "max": "5 mg/kg/hora; máx. 48h",
        "freq": "contínua",
        "note": "Contexto UCI/anestesia com monitorização completa"
      }
    ],
    "prep": "Solução lipídica — não misturar com outros fármacos. Linha dedicada. Preparação asséptica rigorosa (crescimento bacteriano rápido na emulsão). Usar dentro de 6h após abertura.",
    "ci": [
      "⛔ NÃO usar para sedação prolongada em UCIP pediátrica",
      "< 3 anos para procedimentos",
      "Doenças do metabolismo lipídico",
      "Hipertensão intracraniana (relativa)",
      "Epilepsia não controlada (relativa)"
    ],
    "alert": [
      "⛔ SÍNDROME DE INFUSÃO DE PROPOFOL (SIP): acidose metabólica + rabdomiólise + insuf. cardíaca + morte. Risco MAJOR em crianças com perfusões > 48h ou > 5 mg/kg/h",
      "⚠️ Não aprovado para sedação em UCIP pediátrica (< 18 anos) — a FDA emitiu alerta em 2001",
      "Dor na injecção — injectar em veia grande ou pré-medicar com lidocaína",
      "Depressão respiratória e hipotensão significativas",
      "Hipertrigliceridemia em perfusões prolongadas — monitorizar"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; FDA Safety Alert 2001; Bray RJ. Anaesthesia 1998"
  },
  {
    "id": "dexmedetomidina",
    "name": "Dexmedetomidina",
    "category": "sedacao",
    "class": "Agonista selectivo α2-adrenérgico — sedação sem depressão respiratória",
    "brands": "Dexdor 200 mcg/2 ml. Precedex 200 mcg/2 ml.",
    "indication": [
      "Sedação leve-moderada em UCIP (doentes ventilados e não-ventilados)",
      "Desmame ventilatório / extubação difícil",
      "Redução de opioides e BZD (poupadora)",
      "Prevenção e tratamento do delirium em UCIP",
      "Procedimentos em doente colaborante (sedação consciente)"
    ],
    "dose": [
      {
        "ind": "Sedação UCIP — perfusão",
        "val": "0,2–0,7 mcg/kg/hora",
        "max": "1,5 mcg/kg/hora (off-label)",
        "freq": "contínua",
        "note": "Titular pelo score COMFORT-B ou RASS pediátrico. Onset 15–30 min"
      },
      {
        "ind": "Dose de carga (opcional)",
        "val": "0,5–1 mcg/kg EV em 10–20 min",
        "max": "1 mcg/kg",
        "freq": "dose única inicial",
        "note": "⚠️ Frequentemente OMITIDA — associada a bradicardia e hipotensão. Avaliação caso a caso"
      },
      {
        "ind": "RN / < 1 mês",
        "val": "0,1–0,2 mcg/kg/hora",
        "max": "0,5 mcg/kg/hora",
        "freq": "contínua",
        "note": "Metabolismo hepático imaturo — clearance reduzida, maior variabilidade"
      }
    ],
    "prep": "Diluir em SF ou SG5%. Concentração habitual: 4 mcg/ml (200 mcg em 50 ml). → 1 ml/h/10kg = 0,4 mcg/kg/h. Usar seringa de vidro ou polipropileno (adsorção ao PVC).",
    "ci": [
      "Bloqueio AV 2º/3º grau sem pacemaker",
      "Disfunção hepática grave (reduzir dose 50%)",
      "Hipotensão não controlada",
      "Bradicardia sinusal grave"
    ],
    "alert": [
      "⚠️ Uso off-label em pediatria (aprovado ≥ 18 anos) — prática corrente em UCIP",
      "⚠️ Bradicardia (mais frequente com dose de carga) — monitorização ECG contínua",
      "⚠️ Hipotensão — não iniciar em doente hipovolémico",
      "⚠️ Hipertensão transitória paradoxal na carga rápida (estimulação α2 periférica antes central)",
      "Vantagem major: sedação sem depressão respiratória — doente entubável sem ventilação",
      "Não tem efeito anticonvulsivante — não usar como antiepiléptico"
    ],
    "source": "Tobias JD. Paediatr Drugs 2020;22(1):55–69; ESICM/SCCM PICU Sedation Guidelines 2022; Precedex SmPC"
  },
  {
    "id": "rocuronio",
    "name": "Rocurônio",
    "category": "bnmnd",
    "class": "Bloqueador neuromuscular não-despolarizante (aminoesteroide)",
    "brands": "Esmeron 50 mg/5 ml; 100 mg/10 ml",
    "indication": [
      "ISR (intubação de sequência rápida) — alternativa à succinilcolina",
      "Facilitação da intubação electiva",
      "Relaxamento muscular em UCIP (ventilação controlada, HICP)",
      "Laringoespasmo refractário"
    ],
    "dose": [
      {
        "ind": "ISR",
        "val": "1,2 mg/kg EV",
        "max": "150 mg",
        "freq": "dose única",
        "note": "Condições de intubação em 60 seg. Reversível com sugammadex 16 mg/kg"
      },
      {
        "ind": "Intubação electiva",
        "val": "0,6 mg/kg EV",
        "max": "—",
        "freq": "dose única",
        "note": "Início 60–90 seg, duração 30–40 min"
      },
      {
        "ind": "Manutenção UCIP",
        "val": "0,1–0,2 mg/kg EV bólus PRN",
        "max": "—",
        "freq": "guiado por TOF",
        "note": "OU perfusão 0,3–0,6 mg/kg/hora. Monitorização TOF obrigatória em perfusão"
      },
      {
        "ind": "RN",
        "val": "0,3–0,6 mg/kg EV",
        "max": "—",
        "freq": "dose única",
        "note": "Maior sensibilidade — iniciar com dose baixa. Duração prolongada"
      }
    ],
    "prep": "Não diluir para bólus. Para perfusão: diluir em SF ou SG5% (0,5–2 mg/ml).",
    "ci": [
      "Hipersensibilidade ao rocurônio ou brometo",
      "Miastenia gravis (hipersensibilidade extrema — doses muito reduzidas se necessário)"
    ],
    "alert": [
      "⚠️ Usar APENAS em doentes com ventilação assegurada",
      "⚠️ Maior risco de anafilaxia entre BNMND (0,06–0,1%) — ter adrenalina disponível",
      "⚠️ Duração prolongada na insuf. hepática e no RN",
      "Reversão com sugammadex (não com neostigmina)",
      "Monitorização TOF (Train-of-Four) em perfusões prolongadas"
    ],
    "source": "ESA Pediatric Anesthesia Guidelines 2021; BNF for Children 2023-24; Esmeron SmPC"
  },
  {
    "id": "vecuronio",
    "name": "Vecurônio",
    "category": "bnmnd",
    "class": "Bloqueador neuromuscular não-despolarizante (aminoesteroide)",
    "brands": "Norcuron 10 mg pó. Brometo vecurônio 4 mg/2 ml.",
    "indication": [
      "Facilitação da intubação (alternativa ao rocurônio)",
      "Relaxamento muscular em UCIP",
      "Ventilação controlada em HICP, ARDS grave"
    ],
    "dose": [
      {
        "ind": "Intubação",
        "val": "0,1 mg/kg EV",
        "max": "—",
        "freq": "dose única",
        "note": "Início 2–3 min (mais lento que rocurônio). Duração 25–40 min"
      },
      {
        "ind": "Manutenção",
        "val": "0,02–0,05 mg/kg EV PRN",
        "max": "—",
        "freq": "guiado por TOF",
        "note": "OU perfusão 0,05–0,1 mg/kg/hora"
      },
      {
        "ind": "RN",
        "val": "0,05–0,1 mg/kg EV",
        "max": "—",
        "freq": "dose única",
        "note": "Maior sensibilidade e duração prolongada no RN"
      }
    ],
    "prep": "Reconstituir o pó com 5 ml água para preparações injectáveis → 2 mg/ml. Para perfusão: diluir em SF (0,1–0,2 mg/ml).",
    "ci": [
      "Hipersensibilidade",
      "Miastenia gravis"
    ],
    "alert": [
      "⚠️ Usar APENAS em doentes ventilados com sedação adequada",
      "⚠️ Acumulação e duração prolongada na insuf. hepática e renal",
      "⚠️ Fraqueza muscular prolongada após uso prolongado em UCIP ('ICUAW')",
      "Reversão com neostigmina (0,05 mg/kg) + atropina (0,02 mg/kg) OU sugammadex",
      "Monitorização TOF em perfusão"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24; Norcuron SmPC"
  },
  {
    "id": "sugammadex",
    "name": "Sugammadex",
    "category": "bnmnd",
    "class": "Agente de reversão seletivo de BNMND (γ-ciclodextrina modificada)",
    "brands": "Bridion 200 mg/2 ml",
    "indication": [
      "Reversão do bloqueio neuromuscular por rocurônio ou vecurônio",
      "Reversão imediata pós-ISR em cenário 'cannot intubate, cannot oxygenate'"
    ],
    "dose": [
      {
        "ind": "Reversão bloqueio moderado (TOF ≥ T2)",
        "val": "2 mg/kg EV",
        "max": "—",
        "freq": "bólus único",
        "note": "Reversão completa em 3 min"
      },
      {
        "ind": "Reversão bloqueio profundo (TOF = 0, PTC 1–2)",
        "val": "4 mg/kg EV",
        "max": "—",
        "freq": "bólus único",
        "note": ""
      },
      {
        "ind": "Reversão imediata pós-ISR (3 min após rocurônio 1,2 mg/kg)",
        "val": "16 mg/kg EV",
        "max": "—",
        "freq": "bólus único",
        "note": "Cenário 'CICO' — alternativa à cricotirotomia"
      }
    ],
    "prep": "Administrar em bólus EV. Pode administrar no mesmo AV que outros fármacos (não precipita). Se AV único: flush SF abundante entre fármacos.",
    "ci": [
      "Insuf. renal grave TFG < 30 ml/min (não recomendado — acumulação)",
      "Hipersensibilidade"
    ],
    "alert": [
      "⚠️ Aprovado ≥ 2 anos. Off-label < 2 anos (dados limitados — usar com cautela)",
      "⚠️ Anafilaxia em ~0,3% — monitorizar 15–20 min pós-administração",
      "⚠️ Recurarização rara se dose insuficiente — monitorizar TOF após reversão",
      "⚠️ Contraceptivos hormonais: eficácia reduzida 7 dias após sugammadex (equivale a dose de contracetivo oral falhada)",
      "Não reverte succinilcolina, atracúrio ou cisatracúrio"
    ],
    "source": "BNF for Children 2023-24; Bridion SmPC 2023; ESA Guidelines 2021"
  },
  {
    "id": "paracetamol",
    "name": "Paracetamol",
    "category": "analgesico",
    "class": "Analgésico/antipirético — inibição COX central",
    "brands": "Ben-u-ron; Panadol; Perfalgan 10 mg/ml (EV)",
    "indication": [
      "Analgesia ligeira a moderada",
      "Febre",
      "Adjuvante em analgesia multimodal"
    ],
    "dose": [
      {
        "ind": "Oral / rectal",
        "val": "15 mg/kg/dose",
        "max": "1000 mg/dose; 75 mg/kg/dia (máx. 4 g/dia)",
        "freq": "cada 4–6h",
        "note": "RN term/prematuro: 10–15 mg/kg/dose cada 6–8h"
      },
      {
        "ind": "EV (Perfalgan)",
        "val": "15 mg/kg/dose (> 10 kg); 7,5 mg/kg/dose (< 10 kg)",
        "max": "1000 mg/dose (> 50 kg); 60 mg/kg/dia",
        "freq": "cada 4–6h",
        "note": "Administrar em 15 min EV"
      }
    ],
    "prep": "EV: não diluir (já pronto a usar a 10 mg/ml). Administrar em 15 min.",
    "ci": [
      "Insuf. hepática grave",
      "Hipersensibilidade"
    ],
    "alert": [
      "⚠️ Dose total diária NÃO exceder 75 mg/kg/dia (crianças) / 4 g/dia (adolescentes/adultos)",
      "⚠️ Hepatotoxicidade em sobredosagem — antídoto: acetilcisteína",
      "⚠️ Atenção a formulações combinadas (risco sobredosagem inadvertida)",
      "Seguro em asmáticos (ao contrário dos AINEs)"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
  },
  {
    "id": "ibuprofeno",
    "name": "Ibuprofeno",
    "category": "analgesico",
    "class": "AINE — inibidor não-selectivo COX-1/COX-2",
    "brands": "Brufen; Nurofen",
    "indication": [
      "Analgesia ligeira-moderada",
      "Febre (alternativa ao paracetamol)",
      "Dor inflamatória / pós-operatória",
      "Encerramento do canal arterial (ibuprofeno EV — RN)"
    ],
    "dose": [
      {
        "ind": "Analgesia / antipirético oral",
        "val": "5–10 mg/kg/dose",
        "max": "400 mg/dose; 40 mg/kg/dia (máx. 2,4 g/dia)",
        "freq": "cada 6–8h",
        "note": "Usar sempre com/após refeição"
      },
      {
        "ind": "Canal arterial — EV (RN)",
        "val": "10 mg/kg → 5 mg/kg → 5 mg/kg",
        "max": "—",
        "freq": "3 doses em 24h intervalos",
        "note": "Usar formulação EV específica para RN"
      }
    ],
    "prep": "Oral: suspensão 20 mg/ml; comp. 200/400/600 mg.",
    "ci": [
      "< 3 meses ou < 5–6 kg",
      "Asma induzida por AINEs",
      "Insuf. renal",
      "Úlcera péptica activa",
      "Desidratação (risco IRA)"
    ],
    "alert": [
      "⚠️ NÃO usar em doentes desidratados ou hipovolémicos — IRA",
      "⚠️ NÃO usar em varicela (síndrome de fasciíte necrotizante descrita)",
      "⚠️ Sangramento GI — usar protecção gástrica se uso prolongado",
      "⚠️ Altera função plaquetar — evitar perioperatório"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
  },
  {
    "id": "naloxona",
    "name": "Naloxona",
    "category": "analgesico",
    "class": "Antagonista opioide — competitivo receptores µ, κ, δ",
    "brands": "Narcan 0,4 mg/ml; 1 mg/ml",
    "indication": [
      "Reversão de depressão respiratória por opioides",
      "Intoxicação por opioides",
      "Apneia neonatal por opioides maternos"
    ],
    "dose": [
      {
        "ind": "Depressão respiratória — EV/IO/IM/IN",
        "val": "0,01 mg/kg EV/IO",
        "max": "0,4 mg/dose (adolescente/adulto)",
        "freq": "pode repetir cada 2–3 min; perfusão se recorrência",
        "note": "⚠️ Dose titulada: usar dose baixa (0,001–0,005 mg/kg) se dependente crónico de opioides — risco síndrome abstinência aguda"
      },
      {
        "ind": "RN (opioides maternos)",
        "val": "0,01 mg/kg EV/IO/IM/ET",
        "max": "—",
        "freq": "pode repetir",
        "note": "NÃO usar em RN de mãe dependente (risco convulsões por abstinência)"
      },
      {
        "ind": "Perfusão (recorrência)",
        "val": "0,005–0,01 mg/kg/hora",
        "max": "—",
        "freq": "contínua",
        "note": "Semi-vida naloxona (30–80 min) < maioria opioides — observar >4h"
      }
    ],
    "prep": "Pode diluir em SF. IM/IN: usar solução concentrada.",
    "ci": [
      "NÃO há contra-indicações absolutas em emergência"
    ],
    "alert": [
      "⚠️ Semi-vida 30–80 min — MAIS CURTA que a maioria dos opioides. Risco de re-sedação",
      "⚠️ Em dependentes crónicos: síndrome abstinência aguda grave (convulsões, EAP, morte)",
      "⚠️ Edema pulmonar agudo após reversão brusca",
      "Objectivo: ventilação adequada, NÃO analgesia zero",
      "Observação mínima 4h após última dose de naloxona"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24; WHO 2014"
  },
  {
    "id": "tramadol",
    "name": "Tramadol",
    "category": "analgesico",
    "src": "original",
    "class": "Opioide fraco + inibidor recaptação serotonina/noradrenalina",
    "brands": "Tramal 50/100 mg caps.; 100 mg/2 ml EV; gotas 100 mg/ml",
    "indication": [
      "Dor moderada a intensa (não controlada com paracetamol/ibuprofeno)",
      "Analgesia pós-operatória",
      "Dor neuropática (adjuvante)"
    ],
    "dose": [
      {
        "ind": "≥ 12 anos EV/oral",
        "val": "1–2 mg/kg/dose",
        "max": "100 mg/dose; 400 mg/dia",
        "freq": "cada 4–6h",
        "note": "NÃO usar < 12 anos (EMA 2019)"
      },
      {
        "ind": "Adulto",
        "val": "50–100 mg/dose",
        "max": "400 mg/dia",
        "freq": "cada 4–6h",
        "note": ""
      }
    ],
    "prep": "EV: diluir em SF ou SG5%. Administrar lentamente em 15–20 min.",
    "ci": [
      "< 12 anos (EMA 2019)",
      "Epilepsia não controlada",
      "Uso com IMAOs",
      "Insuf. respiratória grave"
    ],
    "alert": [
      "⛔ NÃO usar < 12 anos (risco convulsões e depressão respiratória — EMA proibiu em 2019)",
      "⛔ Evitar em amigdalectomia/adenoidectomia em crianças (mortes relatadas)",
      "⚠️ Convulsões (abaixa limiar)",
      "⚠️ Síndrome serotoninérgica com SSRIs/IMAOs",
      "Náuseas e vómitos frequentes"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; EMA Safety Review 2019; BNF for Children 2023-24"
  },
  {
    "id": "pregabalina",
    "name": "Pregabalina",
    "category": "analgesico",
    "src": "added",
    "class": "Análogo do GABA — ligação subunidade α2δ canais Ca2+ voltagem-dependentes",
    "brands": "Lyrica caps. 25/50/75/100/150/200/300 mg; sol. oral 20 mg/ml",
    "indication": [
      "Dor neuropática (≥ 18 anos aprovado; off-label pediátrico)",
      "Epilepsia focal refractária (adjuvante ≥ 7 anos)",
      "Dor crónica musculoesquelética",
      "Ansiedade generalizada (adulto)"
    ],
    "dose": [
      {
        "ind": "Epilepsia focal (≥ 7 anos)",
        "val": "2,5 mg/kg/dia → alvo 10–14 mg/kg/dia",
        "max": "600 mg/dia",
        "freq": "2–3 doses/dia",
        "note": ""
      },
      {
        "ind": "Dor neuropática (adulto)",
        "val": "75 mg × 2/dia → 150–300 mg × 2/dia",
        "max": "600 mg/dia",
        "freq": "2–3 doses/dia",
        "note": ""
      }
    ],
    "prep": "Cápsulas podem ser abertas e misturadas em alimentos.",
    "ci": [
      "Hipersensibilidade"
    ],
    "alert": [
      "⚠️ Sedação e tonturas (especialmente início do tratamento)",
      "⚠️ Ganho de peso e edema periférico",
      "⚠️ Dependência e síndrome de abstinência — não suspender abruptamente",
      "⚠️ Potencial de abuso (substância controlada em alguns países)",
      "Ajuste renal obrigatório"
    ],
    "source": "BNF for Children 2023-24; Lyrica SmPC 2023"
  },
  {
    "id": "gabapentina",
    "name": "Gabapentina",
    "category": "analgesico",
    "src": "added",
    "class": "Análogo GABA — ligação α2δ canais Ca2+ (antiepiléptico + analgésico neuropático)",
    "brands": "Neurontin caps. 100/300/400 mg; sol. oral 50 mg/ml",
    "indication": [
      "Dor neuropática (pediátrico — off-label comum)",
      "Epilepsia focal refractária (adjuvante ≥ 3 anos)",
      "Dor crónica musculoesquelética",
      "Síndrome de abstinência opioide (adjuvante)"
    ],
    "dose": [
      {
        "ind": "Epilepsia — dose inicial (≥ 3 anos)",
        "val": "10–15 mg/kg/dia",
        "max": "—",
        "freq": "3 doses/dia; aumentar ao longo de 3 dias",
        "note": ""
      },
      {
        "ind": "Epilepsia — dose alvo",
        "val": "25–40 mg/kg/dia (< 5 anos); 25–35 mg/kg/dia (≥ 5 anos)",
        "max": "3600 mg/dia (adulto)",
        "freq": "3 doses/dia",
        "note": ""
      },
      {
        "ind": "Dor neuropática (off-label)",
        "val": "5 mg/kg ao deitar (dia 1) → 5 mg/kg 2×/dia (dia 2) → 5 mg/kg 3×/dia",
        "max": "—",
        "freq": "3 doses/dia; titular pela resposta e tolerância",
        "note": ""
      }
    ],
    "prep": "Cápsulas podem ser abertas. Solução oral 50 mg/ml.",
    "ci": [
      "Hipersensibilidade"
    ],
    "alert": [
      "⚠️ Sedação e tonturas (frequentes no início — transitórias)",
      "⚠️ Ataxia em crianças pequenas",
      "⚠️ Ajuste renal obrigatório (excreção renal exclusiva)",
      "⚠️ Não suspender abruptamente (convulsões de rebote)",
      "Sem indução enzimática — poucas interacções"
    ],
    "source": "BNF for Children 2023-24; Harriet Lane 23rd Ed"
  },
  {
    "id": "amitriptilina_pain",
    "name": "Amitriptilina (dor neuropática)",
    "category": "analgesico",
    "src": "original",
    "class": "Antidepressivo tricíclico — analgésico neuropático (independente do efeito antidepressivo)",
    "brands": "Tryptizol comp. 10/25/50/75 mg",
    "indication": [
      "Dor neuropática crónica (cefaleia tensional, neuropatia, fibromialgia)",
      "Profilaxia enxaqueca (> 6 anos)",
      "Enurese nocturna (> 6 anos — 2ª linha)",
      "Depressão (adolescente — raramente 1ª linha)"
    ],
    "dose": [
      {
        "ind": "Dor neuropática / Profilaxia enxaqueca",
        "val": "0,1–0,5 mg/kg ao deitar",
        "max": "10 mg/noite (início); 25–75 mg/noite (alvo)",
        "freq": "1×/dia ao deitar",
        "note": "Titular lentamente — efeito analgésico em 2–4 semanas"
      },
      {
        "ind": "Enurese nocturna (> 6 anos)",
        "val": "10–20 mg ao deitar",
        "max": "50 mg (< 11 anos); 75 mg (> 11 anos)",
        "freq": "1×/dia ao deitar",
        "note": ""
      }
    ],
    "prep": "Oral. Comprimidos podem ser triturados.",
    "ci": [
      "< 6 anos",
      "Arritmia cardíaca / QTc prolongado",
      "IAM recente",
      "Uso com IMAOs"
    ],
    "alert": [
      "⚠️ CARDIOTÓXICO — prolongamento QTc e PR. ECG de base obrigatório",
      "⚠️ Efeitos anticolinérgicos: xerostomia, obstipação, retenção urinária, visão turva",
      "⚠️ Sedação (pode ser vantajosa quando tomado ao deitar)",
      "⚠️ Overdose: arritmias fatais — guardar fora do alcance de crianças",
      "⚠️ Não suspender abruptamente"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
  },
  {
    "id": "clonidina",
    "name": "Clonidina",
    "category": "sedacao",
    "src": "added",
    "class": "Agonista α2-adrenérgico central — sedativo, analgésico, antihipertensor",
    "brands": "Catapressan comp. 0,1/0,15/0,3 mg; EV 0,15 mg/ml; adesivo TTS",
    "indication": [
      "Sedação em UCIP (adjuvante — poupadora de opioides/BZD)",
      "Desmame de opioides (atenua síndrome de abstinência)",
      "Hipertensão arterial refractária",
      "PHDA (off-label — quando estimulantes contra-indicados)",
      "Analgesia adjuvante pós-operatória"
    ],
    "dose": [
      {
        "ind": "Sedação UCIP — oral/SNG",
        "val": "1–5 mcg/kg/dose oral",
        "max": "150 mcg/dose",
        "freq": "cada 6–8h",
        "note": "Útil em desmame de sedação (associada a dexmedetomidina)"
      },
      {
        "ind": "Desmame opioides — oral",
        "val": "1–5 mcg/kg/dose",
        "max": "150 mcg/dose",
        "freq": "cada 6h; reduzir gradualmente",
        "note": ""
      },
      {
        "ind": "HTA — EV",
        "val": "1–2 mcg/kg EV lento",
        "max": "150 mcg",
        "freq": "cada 6h",
        "note": "Administrar em 10–15 min — bólus rápido causa HTA paradoxal"
      },
      {
        "ind": "PHDA — oral (off-label)",
        "val": "25–50 mcg ao deitar → até 3–5 mcg/kg/dia",
        "max": "400 mcg/dia",
        "freq": "2–4 doses/dia",
        "note": ""
      }
    ],
    "prep": "EV: diluir em SF. Administrar em 10–15 min (bólus rápido → HTA paradoxal por estimulação α1 periférica).",
    "ci": [
      "Bradicardia sinusal grave",
      "Bloqueio AV 2º/3º grau",
      "Depressão grave"
    ],
    "alert": [
      "⚠️ Bradicardia e hipotensão — monitorizar FC e TA",
      "⚠️ HTA de rebote se suspensão abrupta — desmame gradual obrigatório",
      "⚠️ Sedação e xerostomia",
      "Útil na transição dexmedetomidina EV → clonidina oral",
      "Antídoto: atropina para bradicardia"
    ],
    "source": "BNF for Children 2023-24; ESICM Sedation Guidelines 2018"
  }
];

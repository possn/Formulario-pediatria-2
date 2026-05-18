// UCIP Pediatria — Sedação, Analgesia & BNMND
// 26 fármacos
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
      "Sedação para intubação",
      "Sedação em RN ventilado (adjuvante ao fentanil)",
      "Convulsões neonatais refractárias ao fenobarbital (2ª/3ª linha)",
      "Pré-medicação para procedimentos dolorosos",
      "Status epilepticus neonatal refractário (perfusão)"
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
      },
      {
        "ind": "Neonatal — Sedação — EV bólus",
        "val": "0,05–0,1 mg/kg EV em 5 min",
        "max": "0,1 mg/kg/dose",
        "freq": "pode repetir cada 2–4h",
        "note": "Prematuros: 0,02–0,05 mg/kg (metabolismo muito lento)"
      },
      {
        "ind": "Neonatal — Sedação — perfusão EV",
        "val": "0,01–0,06 mg/kg/hora",
        "max": "0,1 mg/kg/hora",
        "freq": "contínua",
        "note": ""
      },
      {
        "ind": "Neonatal — Convulsões refractárias — perfusão",
        "val": "0,05–0,2 mg/kg/hora",
        "max": "0,5 mg/kg/hora (SE refractário)",
        "freq": "contínua",
        "note": "Monitorização EEG se disponível"
      }
    ],
    "prep": "EV: diluir em SF ou SG5%. Perfusão UCIP: (0,3 × Peso kg) mg em 50 ml → 1 ml/h = 0,1 mg/kg/h. Concentração máxima periférico: 1 mg/ml. Concentração central: até 5 mg/ml. Bólus procedimento: 0,1 mg/kg em 2 min (diluir a 0,5–1 mg/ml). Bucal (Buccolam): aplicar entre gengiva e mucosa bocal — não engolir. Intranasal: atomizador MAD, 0,5 ml/narina. Fonte: BNF for Children 2023-24; NHS Medusa 2024.",
    "ci": [
      "Glaucoma de ângulo fechado",
      "Miastenia gravis (relativa)",
      "Choque não controlado",
      "Hipotensão grave não controlada",
      "Prematuridade extrema (risco apneia e hipotensão severas)"
    ],
    "alert": [
      "⚠️ Depressão respiratória — ter equipamento de VNI/entubação disponível",
      "⚠️ Síndrome de abstinência se > 7 dias ou > 0,1 mg/kg/h — desmame gradual",
      "⚠️ Potenciado por eritromicina, fluconazol, cimetidina (inibidores CYP3A4)",
      "Efeito atenuado pela teofilina",
      "RN: metabolismo hepático imaturo — usar doses baixas",
      "⚠️ HIPOTENSÃO — especialmente em prematuros < 28 semanas. Monitorização TA contínua",
      "⚠️ Apneia e depressão respiratória",
      "⚠️ Metabolismo muito lento em prematuros (CYP3A4 imaturo) — acumulação",
      "⚠️ Movimentos mioclónicos paradoxais (não são convulsões — efeito paradoxal)",
      "⚠️ Leucomalácia periventricular (dados controversos — cautela em prematuros)"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24; ESICM Guidelines 2022; BNF for Children 2023-24; Jacqz-Aigrain E. Arch Dis Child 1990"
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
      "Edema agudo do pulmão",
      "Analgesia em RN ventilado (procedimentos, pós-operatório)",
      "Síndrome de abstinência neonatal (NAS/NOWS) por opioides maternos — 1ª linha",
      "Sedação em RN com EHI em hipotermia",
      "Analgesia paliativa neonatal"
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
      },
      {
        "ind": "Analgesia — EV bólus (RN termo)",
        "val": "50–100 mcg/kg EV em 5 min",
        "max": "100 mcg/kg/dose",
        "freq": "cada 4–6h",
        "note": "RN prematuro: 25–50 mcg/kg/dose (maior sensibilidade respiratória)"
      },
      {
        "ind": "Neonatal — Analgesia — perfusão EV",
        "val": "5–20 mcg/kg/hora",
        "max": "30 mcg/kg/hora",
        "freq": "contínua; titular pelo score dor (NFCS, N-PASS)",
        "note": ""
      },
      {
        "ind": "Neonatal — NAS — oral (tratamento)",
        "val": "Iniciar morfina oral 0,04–0,08 mg/kg cada 3–4h",
        "max": "—",
        "freq": "cada 3–4h; guiado pelo score Finnegan/NOWS",
        "note": "Desmame 10% da dose/dia quando score < 8 por 48h. Protocolo institucional obrigatório"
      }
    ],
    "prep": "EV: diluir em SF ou SG5%. Perfusão UCIP: Peso(kg) mg em 50 ml SG5% → 1 ml/h = 0,02 mg/kg/h. Concentrações standard: 1 mg/ml (pediátrico) ou 5–10 mg/ml (central). Periférico: ≤ 2 mg/ml. Bólus: 0,1 mg/kg em SF, administrar em 5 min. ⚠️ Incompatível com furosemida e ciclosporina na mesma linha. Fonte: BNF for Children 2023-24; NHS Medusa 2024.",
    "ci": [
      "Depressão respiratória grave não monitorizada",
      "Íleo paralítico (relativa)",
      "Hipotensão grave não controlada",
      "Depressão respiratória não monitorizada"
    ],
    "alert": [
      "⚠️ Depressão respiratória — antídoto: naloxona 0,01 mg/kg EV",
      "⚠️ Síndrome abstinência após uso prolongado — desmame 10–20%/dia",
      "⚠️ Libertação histamina — hipotensão, broncoespasmo (menos fentanil)",
      "Obstipação — administrar laxante profilático em uso > 3 dias",
      "Monitorização SpO2 contínua",
      "⚠️ Hipotensão (especialmente em RN hemodinamicamente instável)",
      "⚠️ Rigidez torácica com bólus rápidos",
      "⚠️ Síndrome abstinência se uso prolongado > 5–7 dias — desmame obrigatório",
      "⚠️ NAS: não usar naloxona em RN de mãe dependente de opioides (convulsões)"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24; Harriet Lane 23rd Ed; BNF for Children 2023-24; Kocherlakota P. Pediatrics 2014 (NAS); BNFC Neonatal Formulary 9th Ed"
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
      "Dor crónica intensa",
      "Analgesia em procedimentos dolorosos no RN (intubação, colocação cateter, cirurgia)",
      "Sedoanalgesia em RN ventilado",
      "Analgesia em hipertensão pulmonar (melhor hemodinâmica que morfina)"
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
      },
      {
        "ind": "Neonatal — Procedimentos — EV bólus",
        "val": "1–4 mcg/kg EV lento",
        "max": "4 mcg/kg/dose",
        "freq": "dose única; onset 2–3 min, duração 30 min",
        "note": "Para intubação electiva: 2–4 mcg/kg"
      },
      {
        "ind": "Neonatal — Perfusão contínua EV",
        "val": "0,5–2 mcg/kg/hora",
        "max": "4 mcg/kg/hora",
        "freq": "contínua",
        "note": "Prematuros: iniciar 0,5 mcg/kg/hora (metabolismo mais lento)"
      }
    ],
    "prep": "EV bólus: administrar não diluído (50 μg/ml) ou diluir em SF para 10–25 μg/ml em 3–5 min. Perfusão UCIP: (Peso kg × 0,05) mg em 50 ml SG5% → 1 ml/h = 1 μg/kg/h. Concentração padrão 10 μg/ml. EV central preferido. Patch transdérmico: não usar em < 2 anos ou opioides-naive. Intranasal: 2 μg/kg de concentração 150 μg/ml (volume ≤ 0,3 ml/narina). Fonte: BNF for Children 2023-24; NHS Medusa 2024.",
    "ci": [
      "Depressão respiratória grave não monitorizada",
      "Depressão respiratória não monitorizada"
    ],
    "alert": [
      "⚠️ Rigidez torácica ('wooden chest') com bólus rápidos e doses altas — tratar com naloxona ou BNMND",
      "⚠️ Síndrome abstinência após uso prolongado",
      "Vantagens vs morfina: sem histamina, maior estabilidade hemodinâmica",
      "100× mais potente que morfina",
      "Antídoto: naloxona",
      "⚠️ Apneia — monitorização contínua SpO2",
      "⚠️ Bradicardia",
      "⚠️ Síndrome abstinência com uso > 5–7 dias",
      "Preferido em HPPRN (menos histamina → melhor hemodinâmica)"
    ],
    "source": "BNF for Children 2023-24; Harriet Lane 23rd Ed; GOSH Drug Formulary 2023; BNF for Children 2023-24; BNFC Neonatal Formulary 9th Ed"
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
      "Status epilepticus refractário",
      "Analgesia procedural — sub-dissociativa (redução fracturas, suturas, pensos queimados)",
      "Indução anestésica em criança instável hemodinamicamente",
      "Status asmático grave — broncodilatação",
      "Adjuvante opioide (poupança de morfina) em dor aguda intensa",
      "Sedação dissociativa para procedimentos de emergência"
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
      },
      {
        "ind": "Analgesia sub-dissociativa (procedimentos)",
        "val": "0,3–0,5 mg/kg EV em 2–3 min",
        "max": "30 mg/dose",
        "freq": "Dose única; repetir 0,25 mg/kg se necessário após 5 min",
        "note": "Dose sub-dissociativa: mantém consciência, elimina dor. Onset 1–2 min, duração 15–30 min"
      },
      {
        "ind": "Sedação dissociativa (procedimentos)",
        "val": "1–2 mg/kg EV em 1–2 min (ou 4 mg/kg IM)",
        "max": "—",
        "freq": "Dose única; repetir 0,5–1 mg/kg se < 5 min de duração necessária",
        "note": "Estado dissociativo em 1–2 min (EV) ou 3–5 min (IM); duração 15–30 min (EV) ou 20–45 min (IM)"
      },
      {
        "ind": "Status asmático refractário",
        "val": "1–2 mg/kg EV carga; 0,5–2 mg/kg/h perfusão",
        "max": "—",
        "freq": "Perfusão contínua até melhoria",
        "note": "Broncodilatação por mecanismo simpatomimético e antagonismo NMDA"
      }
    ],
    "prep": "EV bólus (dissociativo): diluir a 10 mg/ml em SF; administrar 1–2 mg/kg em 1–2 min. EV sub-dissociativo: diluir a 1 mg/ml; administrar 0,3–0,5 mg/kg em 10 min. Perfusão analgesia: 10 mg/kg em 50 ml SF → concentração variável. IM: usar solução 50 mg/ml não diluída. Status asmático: carga 1–2 mg/kg EV seguida de 0,5–2 mg/kg/h. Fonte: BNF for Children 2023-24; NHS Medusa 2024.",
    "ci": [
      "HTA grave não controlada",
      "Hipertensão intracraniana (relativa — evidência recente questiona esta CI)",
      "Psicose activa",
      "Doença coronária grave",
      "Psicose activa ou história de esquizofrenia",
      "Hipertensão intracraniana grave (relativa — ketamina pode aumentar PIC)",
      "Glaucoma / lesão ocular penetrante",
      "Tireoide hiperfuncionante não tratada"
    ],
    "alert": [
      "⚠️ Alucinações/pesadelos (emergence reactions) — reduzidos com midazolam 0,05 mg/kg em pré-medicação",
      "⚠️ Hipersalivação — atropina pré-medicação 0,02 mg/kg (controverso, prática variável)",
      "⚠️ Não deprime reflexos das vias aéreas — mas NÃO garante protecção: aspiração possível",
      "Broncodilatador — opção ideal no asmático",
      "Efeito simpaticomimético: útil no choque hipovolémico",
      "⚠️ Laringoespasmo — raro mas grave; ter material de via aérea e succinilcolina disponíveis",
      "⚠️ Hipertensão e taquicardia — efeito simpatomimético; monitorizar em cardiopatia",
      "⚠️ Emergência dissociativa pós-procedimento (adultos > crianças) — associar midazolam 0,05 mg/kg se risco",
      "Preserva reflexos de via aérea — vantagem única vs outros agentes",
      "Hipersialorreia — associar atropina ou glicopirrolato profilático",
      "Hipertensão intracraniana: evidência actual sugere que com boa ventilação não aumenta PIC — rever"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24; Green SM. Ann Emerg Med 2011; BNF for Children 2023-24; Green SM et al. Ann Emerg Med 2011; Bhatt M et al. Lancet 2017"
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
    "source": "BNF for Children 2023-24; FDA Safety Alert 2001; Bray RJ. Anaesthesia 1998"
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
    "prep": "EV bólus ISR: administrar NÃO DILUÍDO (10 mg/ml) em bólus rápido 5–10 seg. Perfusão: diluir em SF, SG5% ou LR para 0,5–2 mg/ml. Refrigerar 2–8°C; estável 12h à T ambiente após abertura. ⚠️ Incompatível com tiopental, dantroleno, furosemida — não misturar. Ter sugammadex disponível. Fonte: BNF for Children 2023-24; SmPC Esmeron.",
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
    "prep": "EV: reconstituir pó 10 mg com 5 ml SWFI (2 mg/ml). Perfusão: diluir em SF, SG5% ou LR para 0,1–0,2 mg/ml. Estabilidade: 24h a 25°C; 5 dias a 4°C após reconstituição. Reversão: sugammadex 2–4 mg/kg (moderado) ou 16 mg/kg (profundo/urgência). Fonte: BNF for Children 2023-24; Trissel's 2023.",
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
    "prep": "EV: administrar NÃO DILUÍDO (100 mg/ml = 200 mg/2 ml) em bólus rápido em 10 segundos. Preparar seringa imediatamente antes (estabilidade 8h após saída de embalagem). Refrigerar 2–8°C; estável 5 dias a 25°C. ⚠️ Dose de emergência (cannot intubate): 16 mg/kg = 3,2 ml/kg (bólus muito rápido). Fonte: BNF for Children 2023-24; SmPC Bridion.",
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
    "prep": "EV: ver paracetamol_ev (Perfalgan). Oral: suspensão 120 mg/5 ml (lactentes), 250 mg/5 ml (crianças) — agitar bem; medir com seringa oral. Comprimidos 500/1000 mg. Rectal: supositórios 60/125/250/500 mg — absorção mais lenta e variável que oral. Fonte: BNF for Children 2023-24.",
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
      "Encerramento do canal arterial (ibuprofeno EV — RN)",
      "Encerramento farmacológico do canal arterial persistente hemodinamicamente significativo no prematuro",
      "Alternativa preferida à indometacina pelo menor efeito na perfusão renal e mesentérica",
      "Encerramento do canal arterial persistente hemodinamicamente significativo em prematuro",
      "Alternativa à indometacina quando indometacina não disponível"
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
      },
      {
        "ind": "Neonatal — PCA — EV (1º ciclo)",
        "val": "10 mg/kg → 5 mg/kg → 5 mg/kg",
        "max": "—",
        "freq": "3 doses com intervalos de 24h",
        "note": "Infusão em 15 min. 2º ciclo possível se sem encerramento"
      },
      {
        "ind": "Neonatal — Oral (off-label, alternativa)",
        "val": "10 mg/kg → 5 mg/kg → 5 mg/kg",
        "max": "—",
        "freq": "cada 24h × 3 doses",
        "note": "Evidência crescente de eficácia similar ao EV"
      },
      {
        "ind": "Neonatal — Encerramento PCA",
        "val": "Dia 1: 10 mg/kg EV; Dias 2–3: 5 mg/kg EV",
        "max": "—",
        "freq": "1 dose/dia × 3 dias (intervalo 24h entre doses)",
        "note": "Eficácia semelhante à indometacina com menor efeito na perfusão cerebral e renal (Ohlsson A et al. Cochrane 2020). Segundo ciclo possível se ecocardiograma confirmar PCA persistente"
      }
    ],
    "prep": "Oral: suspensão 20 mg/ml (100 mg/5 ml) — agitar antes. Comprimidos 200/400/600 mg. Tomar SEMPRE com alimentos ou leite (reduz irritação gástrica). EV (Caldolor, quando disponível): diluir em SF para ≤ 4 mg/ml; infusão 30 min. PCA neonatal (Pedea): ver ficha específica. Fonte: BNF for Children 2023-24; NHS Medusa 2024.",
    "ci": [
      "< 3 meses ou < 5–6 kg",
      "Asma induzida por AINEs",
      "Insuf. renal",
      "Úlcera péptica activa",
      "Desidratação (risco IRA)",
      "Creatinina > 1,8 mg/dL",
      "Débito urinário < 1 ml/kg/hora nas 6h precedentes",
      "Trombocitopenia grave (< 60 000/mcL)",
      "NEC confirmada/suspeita",
      "Hiperbilirrubinemia significativa (desloca bilirrubina da albumina)",
      "Hemorragia activa (especialmente IVH grau III-IV)",
      "Trombocitopenia < 60.000/μL",
      "Insuficiência renal (creatinina > 140 μmol/L)",
      "Malformações congenitas dependentes de PCA (coarctação grave, TGA com septo intacto)"
    ],
    "alert": [
      "⚠️ NÃO usar em doentes desidratados ou hipovolémicos — IRA",
      "⚠️ NÃO usar em varicela (síndrome de fasciíte necrotizante descrita)",
      "⚠️ Sangramento GI — usar protecção gástrica se uso prolongado",
      "⚠️ Altera função plaquetar — evitar perioperatório",
      "⚠️ Nefrotoxicidade — menos que indometacina mas monitorizar diurese e creatinina",
      "⚠️ Hipertensão pulmonar (risco teórico — vigiar SpO2)",
      "⚠️ Hiperbilirrubinemia — evitar se bilirrubina próxima do limiar de exsanguinotransfusão",
      "Meta-análise Cochrane 2015: eficácia similar à indometacina, melhor perfil renal",
      "⚠️ Verificar eco cardíaco antes e após tratamento",
      "⚠️ Oligúria durante tratamento — monitorizar débito urinário e creatinina",
      "⚠️ Não usar com indometacina (sem evidência de benefício adicional, toxicidade aumentada)",
      "Hiperbilirrubinemia — ibuprofeno compete com bilirrubina na albumina (monitorizar bili)",
      "NEC: monitorizar achados abdominais durante tratamento"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24; BNF for Children 2023-24; Ohlsson A. Cochrane 2015; Pedea SmPC; BNF for Children 2023-24; Ohlsson A et al. Cochrane 2020; Neofax 2023"
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
      "Apneia neonatal por opioides maternos",
      "Depressão respiratória por opioides — emergência",
      "Coma/inconsciência por intoxicação opioide",
      "Apneia neonatal por opioides maternos intraparto",
      "Prurido refractário e retenção urinária por opioides (doses baixas)"
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
      },
      {
        "ind": "Depressão respiratória grave — criança",
        "val": "0,01 mg/kg EV/IO/IM/SC",
        "max": "0,4 mg/dose",
        "freq": "q2–3 min até resposta respiratória adequada (não esperar reversão completa)",
        "note": "Titular para manter FR adequada sem reverter analgesia completa. Infusão: 0,005–0,01 mg/kg/h se recorrência"
      },
      {
        "ind": "Apneia neonatal por opioides maternos",
        "val": "0,01 mg/kg EV/IM/SC",
        "max": "—",
        "freq": "Dose única; repetir se sem resposta em 2–3 min",
        "note": "NÃO administrar a RN de mãe dependente de opioides (precipita abstinência neonatal grave)"
      },
      {
        "ind": "Intranasal (pré-hospitalar/IM indisponível)",
        "val": "0,1 mg/kg IN",
        "max": "4 mg total",
        "freq": "q2–3 min",
        "note": "Absorção IN mais lenta — usar EV/IO se acesso disponível"
      }
    ],
    "prep": "EV urgência: diluir 0,4 mg em 10 ml SF (0,04 mg/ml) para titulação precisa. Bólus em 15 seg; repetir q2–3 min. Perfusão: 0,4–1 mg em 100 ml SF. IM/SC: usar 0,4 mg/ml não diluído. Intranasal: atomizador MAD — usar solução concentrada (1 mg/ml, máx 0,3 ml/narina, atomizar). Fonte: BNF for Children 2023-24; PALS AHA 2020.",
    "ci": [
      "NÃO há contra-indicações absolutas em emergência",
      "Hipersensibilidade à naloxona",
      "Cautela em dependentes de opioides (precipita abstinência aguda grave)"
    ],
    "alert": [
      "⚠️ Semi-vida 30–80 min — MAIS CURTA que a maioria dos opioides. Risco de re-sedação",
      "⚠️ Em dependentes crónicos: síndrome abstinência aguda grave (convulsões, EAP, morte)",
      "⚠️ Edema pulmonar agudo após reversão brusca",
      "Objectivo: ventilação adequada, NÃO analgesia zero",
      "Observação mínima 4h após última dose de naloxona",
      "⚠️ Semi-vida 60–90 min — mais curta que maioria dos opioides; ressedação frequente, especialmente com metadona ou fentanil LP",
      "⚠️ Reversão demasiado rápida/dose excessiva: dor aguda, hipertensão, edema pulmonar, arritmias, PCR (descrito em adultos)",
      "⚠️ NÃO administrar a RN de mãe em programa de metadona — abstinência neonatal grave",
      "Titular para manter FR > 8/min e SpO2 > 94% — não para acordar completamente",
      "Alternativa à naloxona em prurido opioide: doses muito baixas 0,5–2 μg/kg/h"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24; WHO 2014; BNF for Children 2023-24; PALS AHA 2020; Boyer EW NEJM 2012"
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
    "prep": "EV: diluir em SF ou SG5% (50–100 ml). Administrar LENTAMENTE em 15–20 min (bólus rápido causa náuseas, tonturas, convulsões). Concentração máxima EV: 50 mg/ml não diluído para IM/SC; ≤ 4 mg/ml para infusão EV. Oral: gotas 100 mg/ml (1 gota = 2,5 mg); cápsulas 50 mg. Fonte: BNF for Children 2023-24; NHS Medusa 2024.",
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
    "prep": "Oral: cápsulas 25/50/75/100/150/200/300 mg — podem ser abertas e conteúdo misturado em água ou sumo. Solução oral 20 mg/ml. Tomar com ou sem alimentos. Fonte: BNF for Children 2023-24.",
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
    "prep": "Oral: cápsulas 100/300/400 mg — podem ser abertas e conteúdo misturado em sumo ou alimento mole. Solução oral 50 mg/ml (extemporânea ou importada). Tomar com ou sem alimentos (com alimentos reduz variabilidade de absorção). Fonte: BNF for Children 2023-24.",
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
    "prep": "Oral: comprimidos 10/25/50 mg — podem ser triturados. Solução extemporânea 5 mg/5 ml estável 14 dias a 4°C. Tomar ao deitar (sedação máxima nocturna). Inicio com dose baixa e titular semanalmente (2–4 semanas para efeito analgésico). Fonte: BNF for Children 2023-24.",
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
    "prep": "EV: diluir em SF para concentração 15–45 μg/ml. Infusão em 10–15 min (bólus rápido → HTA paradoxal transitória por estimulação α1 periférica antes do efeito central). Perfusão: 150 μg em 50 ml SF (3 μg/ml). Oral: comprimidos 25/100/150 μg; solução extemporânea 5 μg/ml. Patch transdérmico (TTS): para desmame lento. Fonte: BNF for Children 2023-24; NHS Medusa 2024.",
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
  },
  {
    "id": "remifentanil",
    "name": "Remifentanil",
    "category": "sedacao",
    "class": "Opioide ultra-curta duração — agonista μ; hidrólise por esterases plasmáticas",
    "brands": "Ultiva — frascos 1 mg, 2 mg, 5 mg pó liofilizado",
    "indication": [
      "Analgesia/sedação em doente ventilado UCIP — quando titulação rápida necessária",
      "Procedimentos dolorosos de curta duração (PICC, drenagem, penso)",
      "Analgesia intraoperatória com desmame rápido planeado",
      "Ventilação com necessidade de acordar rápido (desmame diário)"
    ],
    "dose": [
      {
        "ind": "Analgesia/sedação ventilado UCIP",
        "val": "0,05–0,4 μg/kg/min EV perfusão",
        "max": "1,3 μg/kg/min",
        "freq": "Perfusão contínua; titular por resposta a cada 2–5 min",
        "note": "Offset em 3–5 min após paragem — ideal para avaliações neurológicas frequentes"
      },
      {
        "ind": "Procedimento curto",
        "val": "0,1–0,5 μg/kg/min",
        "max": "—",
        "freq": "Duração do procedimento + 5 min; paragem imediata no fim",
        "note": "Associar midazolam se sedação também necessária (remifentanil é apenas analgésico)"
      }
    ],
    "prep": "EV: reconstituir liofilizado com SWFI; diluir em SF ou SG5% para 20–250 μg/ml. Concentração UCIP habitual: 20–50 μg/ml. Via central ou periférica de grande calibre (metabolismo ubíquo — sem risco acumulação). ⚠️ NÃO administrar em bólus rápido (rigidez torácica). Sem efeito memória — paragem imediata elimina fármaco em 3–5 min. Fonte: BNF for Children 2023-24; NHS Medusa 2024.",
    "ci": [
      "Administração peridural ou intratecal (contém glicina — neurotóxico)",
      "Sem suporte ventilatório disponível"
    ],
    "alert": [
      "⚠️ Hiperalgesia induzida por opioides (OIH) com uso prolongado ou doses altas — associar adjuvantes (ketamina, AINEs)",
      "⚠️ Paragem abrupta: retorno imediato de dor — planear analgesia de transição antes de parar",
      "⚠️ Rigidez torácica com bólus — evitar administração em bólus rápido",
      "⚠️ Náuseas e bradipneia — dose-dependentes",
      "Sem acumulação em IR, IH ou RN — metabolismo independente de órgãos",
      "Não substitui sedação — associar midazolam ou propofol"
    ],
    "source": "BNF for Children 2023-24; Wilhelm W et al. Paediatric Anaesthesia 2007; Playfor SD et al. Paediatr Anaesth 2006"
  },
  {
    "id": "cisatracurio",
    "name": "Cisatracúrio",
    "category": "sedacao",
    "class": "Bloqueador neuromuscular não despolarizante — eliminação de Hofmann",
    "brands": "Nimbex — ampolas 5 mg/2,5 ml (2 mg/ml); 10 mg/5 ml",
    "indication": [
      "Relaxamento neuromuscular em doente ventilado — quando rocu/vecurônio inadequados",
      "ARDS grave — protocolo de bloqueio neuromuscular precoce (ACURASYS, ROSE trial)",
      "Hipertensão intracraniana — redução de pressão abdominal/torácica",
      "Termogenesis controlada — shivering pós-PCR"
    ],
    "dose": [
      {
        "ind": "Intubação",
        "val": "0,15–0,2 mg/kg EV",
        "max": "—",
        "freq": "Dose única",
        "note": "Onset mais lento que rocurônio (3–5 min vs 60–90 seg)"
      },
      {
        "ind": "Perfusão contínua UCIP",
        "val": "0,06–0,12 mg/kg/h EV",
        "max": "—",
        "freq": "Perfusão contínua; titular por TOF (Train-of-Four)",
        "note": "Alvo: 1–2 twitch em TOF (2/4 respostas). ARDS grave: 48h conforme ACURASYS"
      }
    ],
    "prep": "EV bólus: administrar não diluído (2 mg/ml) ou diluir em SF/SG5%. Perfusão: diluir em SF, SG5% ou LR para 0,1–2 mg/ml. Refrigerar 2–8°C; estável 24h à T ambiente após abertura (proteger da luz). ⚠️ Incompatível com heparina, furosemida, ceftriaxona na mesma linha. Reversão: espontânea (Hofmann) — sugammadex NÃO reverte. Fonte: BNF for Children 2023-24; Trissel's 2023.",
    "ci": [
      "Miastenia gravis ou síndrome miasténico (hipersensibilidade extrema)"
    ],
    "alert": [
      "⚠️ NUNCA usar sem sedação e analgesia adequadas — paralisia consciente é tortura",
      "⚠️ Monitorização TOF obrigatória em perfusão contínua",
      "⚠️ ROSE trial (2019): bloqueio neuromuscular precoce em ARDS moderado-grave não reduziu mortalidade vs sedação profunda — usar criteriosamente",
      "Vantagem: eliminação de Hofmann — independente de fígado e rins (ideal em falência orgânica)",
      "Sugammadex NÃO reverte cisatracúrio (apenas rocurônio/vecurônio) — reversão espontânea ou neostigmina"
    ],
    "source": "BNF for Children 2023-24; Papazian L et al. NEJM 2010 (ACURASYS); Moss M et al. NEJM 2019 (ROSE)"
  },
  {
    "id": "metadona_desmame",
    "name": "Metadona (Desmame de Opioides)",
    "category": "sedacao",
    "class": "Opioide — agonista μ de longa duração; antagonista NMDA",
    "brands": "Metadona Generis — comp 5/10/40 mg; solução 1 mg/ml",
    "indication": [
      "Desmame de opioides em UCIP (fentanil, morfina, remifentanil) — prevenção síndrome abstinência",
      "Dor crónica intractável — rotação de opioides",
      "Síndrome de abstinência neonatal — protocolo específico"
    ],
    "dose": [
      {
        "ind": "Conversão EV→oral para desmame UCIP",
        "val": "Dose total diária de morfina EV × 0,1–0,15 mg/kg/dose PO",
        "max": "—",
        "freq": "q12–24h PO (semivida longa: 12–50h)",
        "note": "Equivalência: morfina EV 10 mg = metadona PO 2,5 mg (rácio 4:1). Titular por Withdrawal Assessment Tool (WAT-1 ≥ 3)"
      },
      {
        "ind": "Abstinência neonatal (NAS) — protocolo",
        "val": "0,05–0,1 mg/kg/dose PO",
        "max": "—",
        "freq": "q12–24h; reduzir 10–20% por semana",
        "note": "Escala de Finnegan modificada para monitorização"
      }
    ],
    "prep": "Oral: solução 1 mg/ml (medir com seringa oral graduada de 1 ml para doses pediátricas pequenas). Comprimidos 5/10 mg — esmagar e dissolver em 10 ml água. EV (off-label): diluir em SG5% (não SF — precipita); administrar lentamente 2–3 min. ⚠️ QTc — ECG obrigatório antes e 48h após início. Fonte: BNF for Children 2023-24; NHS Medusa 2024.",
    "ci": [
      "Prolongamento QT (QTc > 500 ms)",
      "IMAOs",
      "Hipersensibilidade"
    ],
    "alert": [
      "⚠️ QT prolongado — ECG antes e 48h após início; dose-dependente; monitorizar electrólitos",
      "⚠️ Semivida muito variável (12–50h) — risco de acumulação insidiosa; sedação tardia",
      "⚠️ Interacções múltiplas: fluconazol, eritromicina, amiodarona aumentam QT + níveis metadona",
      "⚠️ Equação de conversão de opioides complexa — verificar sempre com farmácia clínica",
      "Abstinência após paragem abrupta: aguarda 24–72h (semivida longa) — mais gradual que morfina"
    ],
    "source": "BNF for Children 2023-24; Berde CB et al. NEJM 2019; Franck LS et al. Ped Crit Care Med 2012 (WAT-1)"
  },
  {
    "id": "hidrato_cloral",
    "name": "Hidrato de Cloral",
    "category": "sedacao",
    "class": "Hipnótico-sedativo — depressor SNC (mecanismo GABA)",
    "brands": "Hidrato de Cloral — solução oral/rectal 500 mg/5 ml (100 mg/ml) — preparação magistral",
    "indication": [
      "Sedação para procedimentos diagnósticos não dolorosos (TC, RMN, EEG, ecocardiograma)",
      "Alternativa ao midazolam em procedimentos de curta duração sem acesso IV",
      "Sobretudo em lactentes 1–24 meses"
    ],
    "dose": [
      {
        "ind": "Procedimento diagnóstico",
        "val": "50–100 mg/kg PO/PR",
        "max": "2 g (ou 1 g em < 1 ano)",
        "freq": "Dose única 30–45 min antes do procedimento",
        "note": "Onset 30–60 min; duração 1–2h. Taxa de sucesso ~85–90% em lactentes. Jejum 4h antes recomendado"
      }
    ],
    "prep": "Oral: solução 100 mg/ml — misturar em sumo açucarado para mascarar sabor amargo. Rectal: mesma solução administrada com seringa oral. Medir com seringa oral graduada. Refrigerar após abertura (prazo curto — verificar com farmácia). ⚠️ Monitorização contínua SpO2 e FC obrigatória durante sedação. Fonte: BNF for Children 2023-24; NHS Medusa 2024.",
    "ci": [
      "Cardiopatia grave (sensibilização miocárdica)",
      "Insuf. hepática grave (metabolização deficiente)",
      "Apneia do sono / via aérea comprometida",
      "Porfíria"
    ],
    "alert": [
      "⚠️ Depressão respiratória — monitorização contínua SpO2 e FC obrigatória; suporte disponível",
      "⚠️ Arritmias cardíacas — sensibiliza miocárdio a catecolaminas (evitar em cardiopatia)",
      "⚠️ Metabolito activo (tricloroetanol) acumula em neonatos e IH — evitar < 1 mês",
      "Disponibilidade limitada — formulação magistral; verificar estabilidade (prazo curto)",
      "EMA/FDA: uso restrito pelas preocupações genotóxicas — preferir alternativas quando possível"
    ],
    "source": "BNF for Children 2023-24; Sulton C et al. Pediatr Emerg Care 2016; Krauss B et al. Lancet 2000"
  },
{
    "id": "paracetamol_ev",
    "name": "Paracetamol EV",
    "category": "sedacao",
    "class": "Analgésico e antipirético — inibidor COX-3 central / modulação endocanabinoide",
    "brands": "Perfalgan — frascos 1 g/100 ml (10 mg/ml); 500 mg/50 ml",
    "indication": [
      "Analgesia pós-operatória — 1ª linha não-opioide",
      "Febre em doente que não tolera via oral",
      "Analgesia multimodal UCIP — redução de consumo de opioides",
      "Dor leve a moderada quando via oral impossível",
      "Pré-medicação analgésica para procedimentos"
    ],
    "dose": [
      {
        "ind": "Analgesia / antipirexia — criança ≥ 1 ano",
        "val": "15 mg/kg/dose EV em 15 min",
        "max": "1 g/dose; 4 g/dia (60 mg/kg/dia)",
        "freq": "q4–6h (mínimo intervalo 4h)",
        "note": "Dose máxima diária: 75 mg/kg/dia (máx 4 g) em crianças > 10 kg e ≥ 1 ano"
      },
      {
        "ind": "Neonato e lactente < 1 ano",
        "val": "7,5–10 mg/kg/dose EV",
        "max": "—",
        "freq": "q6–8h; dose diária máx 30 mg/kg",
        "note": "< 32 semanas GA: 7,5 mg/kg q8–12h. Metabolismo hepático imaturo — acumulação de metabolitos"
      }
    ],
    "prep": "EV: frascos 10 mg/ml (Perfalgan 100 ml ou 50 ml) prontos a usar — NÃO diluir adicionalmente. Administrar em 15 min. Para < 10 kg: retirar volume calculado do frasco para seringa; administrar da seringa. ⚠️ Verificar peso e dose — dose pediátrica é 15 mg/kg; neonatos 7,5–10 mg/kg. Estabilidade após abertura: 6h. Fonte: BNF for Children 2023-24; NHS Medusa 2024.",
    "ci": [
      "Insuficiência hepática grave (necrose hepática dose-dependente)",
      "Hipersensibilidade ao paracetamol",
      "Deficiência de glicose-6-fosfato desidrogenase severa (relativa)"
    ],
    "alert": [
      "⚠️ Hepatotoxicidade por sobredose — dose tóxica > 150 mg/kg aguda; antídoto: N-acetilcisteína EV",
      "⚠️ Verificar TODOS os fármacos concomitantes com paracetamol — sobredose inadvertida frequente em UCIP",
      "⚠️ Reduzir dose e intervalo em insuf. hepática ou desnutrição grave (depleção glutatião)",
      "Efeito opioide-poupador documentado — reduz consumo de morfina 20–30% em pós-operatório",
      "Sem efeito anti-inflamatório clinicamente relevante — para inflamação usar AINE"
    ],
    "source": "BNF for Children 2023-24; Allegaert K et al. Expert Opin Drug Metab Toxicol 2011; ESPA Pain Guidelines 2020"
  },
  {
    "id": "rocuronio",
    "name": "Rocurônio",
    "category": "sedacao",
    "class": "Bloqueador neuromuscular não despolarizante — aminoesteroide",
    "brands": "Esmeron — ampolas 50 mg/5 ml (10 mg/ml); 100 mg/10 ml",
    "indication": [
      "Indução de sequência rápida (ISR/RSI) — 1ª linha substituindo succinilcolina na maioria dos protocolos",
      "Facilitação de intubação traqueal electiva",
      "Relaxamento muscular durante cirurgia",
      "Bloqueio neuromuscular em UCIP (ARDS, HIC, ventilação difícil)"
    ],
    "dose": [
      {
        "ind": "ISR (sequência rápida de intubação)",
        "val": "1,2 mg/kg EV em bólus",
        "max": "—",
        "freq": "Dose única. Condições de intubação em 60 seg",
        "note": "Alta dose (1,2 mg/kg) equipara onset ao da succinilcolina. Duração de bloqueio: 45–70 min"
      },
      {
        "ind": "Intubação electiva",
        "val": "0,6 mg/kg EV",
        "max": "—",
        "freq": "Dose única. Condições em 90–120 seg",
        "note": "Duração: 30–45 min"
      },
      {
        "ind": "Manutenção / UCIP",
        "val": "0,1–0,2 mg/kg EV bólus PRN ou 0,3–0,6 mg/kg/h perfusão",
        "max": "—",
        "freq": "Titular por TOF (Train-of-Four); alvo 1–2 twitch em 4",
        "note": ""
      }
    ],
    "prep": "EV: bólus — administrar não diluído (10 mg/ml). Perfusão: diluir em SF ou SG5%. Refrigerar 2–8°C; estável 12h à T ambiente após abertura.",
    "ci": [
      "Miastenia gravis (hipersensibilidade extrema — evitar ou reduzir 90% da dose)",
      "Hipersensibilidade ao rocurônio (reacção anafilática documentada — 1:6000)"
    ],
    "alert": [
      "⚠️ NUNCA usar sem sedação e analgesia adequadas — paralisia consciente é inaceitável",
      "⚠️ SUGAMMADEX (16 mg/kg EV) reverte rocurônio em < 3 min — deve estar SEMPRE disponível quando rocurônio em uso",
      "⚠️ Bloqueio prolongado em insuf. renal/hepática e hipotermia — monitorizar TOF",
      "Vantagem sobre succinilcolina: sem hipercaliemia, sem miotonias, sem hipertermia maligna",
      "Reversão: sugammadex 2–4 mg/kg (bloqueio moderado) ou 16 mg/kg (bloqueio profundo imediato)"
    ],
    "source": "BNF for Children 2023-24; El-Orbany M et al. Anesth Analg 2010; ESICM Guidelines 2018; Bhatt M et al. NEJM 2019"
  },
  {
    "id": "sugammadex",
    "name": "Sugammadex",
    "category": "sedacao",
    "class": "Agente quelante seletivo — ciclodextrina modificada; reverte rocurônio e vecurônio",
    "brands": "Bridion — ampolas 200 mg/2 ml (100 mg/ml); 500 mg/5 ml",
    "indication": [
      "Reversão de bloqueio neuromuscular por rocurônio ou vecurônio",
      "Reversão urgente de ISR com rocurônio (via aérea difícil — cannot intubate/cannot oxygenate)",
      "Reversão de bloqueio profundo ao fim de cirurgia",
      "Reversão de bloqueio moderado antes de extubação"
    ],
    "dose": [
      {
        "ind": "Reversão urgente (via aérea difícil) — bloqueio imediato",
        "val": "16 mg/kg EV em bólus",
        "max": "—",
        "freq": "Dose única — reverter rocurônio em < 3 min",
        "note": "Usar se incapaz de intubar e oxigenar após rocurônio ISR. É a única situação onde 16 mg/kg está indicado"
      },
      {
        "ind": "Bloqueio profundo (TOF 0, PTC ≥ 1)",
        "val": "4 mg/kg EV",
        "max": "—",
        "freq": "Dose única",
        "note": ""
      },
      {
        "ind": "Bloqueio moderado (TOF ≥ 2)",
        "val": "2 mg/kg EV",
        "max": "—",
        "freq": "Dose única",
        "note": "Confirmar com neuroestimulador antes de extubar"
      }
    ],
    "prep": "EV: administrar não diluído em bólus em 10 seg. Refrigerar 2–8°C.",
    "ci": [
      "Hipersensibilidade ao sugammadex",
      "Insuficiência renal grave TFG < 30 ml/min (eliminação renal — acumulação do complexo)"
    ],
    "alert": [
      "⚠️ Recurarização possível se dose insuficiente — usar neuroestimulador para confirmar reversão",
      "⚠️ Anafilaxia descrita (0,3%) — ter adrenalina disponível",
      "⚠️ Reduz eficácia de contraceptivos orais (dias 1–7 pós-sugammadex — método alternativo)",
      "⚠️ Insuf. renal grave: não usar — complexo acumula; usar neostigmina (menos eficaz)",
      "Não reverte succinilcolina, pancurónio, atracúrio ou cisatracúrio",
      "Custo elevado — reservar para bloqueio profundo e emergências de via aérea"
    ],
    "source": "BNF for Children 2023-24; Chambers D et al. Health Technol Assess 2010; Kheterpal S et al. Anesthesiology 2020"
  },
  {
    "id": "succinilcolina",
    "name": "Succinilcolina (Suxametônio)",
    "category": "sedacao",
    "class": "Bloqueador neuromuscular despolarizante — agonista receptor nicotínico",
    "brands": "Anectine — ampolas 200 mg/10 ml (20 mg/ml); 500 mg/10 ml",
    "indication": [
      "ISR — quando necessidade de bloqueio ultrarrápido (< 60 seg) com recuperação rápida (< 10 min)",
      "Laringoespasmo grave refractário a aprofundamento anestésico",
      "Intubação de emergência em estômago cheio",
      "Quando rocurônio + sugammadex não disponíveis"
    ],
    "dose": [
      {
        "ind": "ISR / Intubação de emergência",
        "val": "2 mg/kg EV (< 10 kg); 1–1,5 mg/kg EV (> 10 kg)",
        "max": "150 mg",
        "freq": "Dose única. Onset 30–60 seg; duração 8–12 min",
        "note": "Crianças pequenas necessitam dose mais alta (2 mg/kg) por maior volume de distribuição relativo"
      },
      {
        "ind": "Laringoespasmo grave",
        "val": "0,1–1 mg/kg EV; ou 4 mg/kg IM/IT se sem acesso EV",
        "max": "—",
        "freq": "Dose única de emergência",
        "note": "IM: onset 3–4 min; IT (intratraqueal) via cricotirotomia se necessário"
      }
    ],
    "prep": "EV: administrar NÃO DILUÍDO (20 mg/ml) em bólus rápido < 10 segundos. IM emergência (sem acesso EV): injecção profunda no músculo vasto lateral, concentração 20 mg/ml. Refrigerar 2–8°C; estável 2 semanas à T ambiente. ⚠️ Pré-medicar com atropina 0,02 mg/kg em < 5 anos (bradicardia). Fonte: BNF for Children 2023-24; NHS Medusa 2024.",
    "ci": [
      "Hipercaliemia documentada ou risco elevado (rabdomiólise, queimaduras extensas > 24h, lesão medular, imobilização prolongada, doença neuromuscular)",
      "Miopatias / distrofinopatias (rabdomiólise grave — evitar)",
      "Hipertermia maligna (história pessoal ou familiar)",
      "Pseudocolinesterase plasmática deficiente (bloqueio prolongado horas)",
      "Hipersensibilidade"
    ],
    "alert": [
      "⚠️ HIPERCALIEMIA GRAVE — K⁺ sobe 0,5–1 mEq/L; fatal em doentes de risco (queimados > 48h, paraplégia, rabdomiólise, imobilização > 7 dias)",
      "⚠️ HIPERTERMIA MALIGNA — raridade mas fatal; dantroleno 2,5 mg/kg EV é o antídoto",
      "⚠️ Bradicardia / assistolia — especialmente em 2ª dose ou em criança < 5 anos; pré-medicar com atropina 0,02 mg/kg",
      "⚠️ Aumento pressão ocular, intragástrica e intracraniana",
      "Rocurônio 1,2 mg/kg + sugammadex disponível é alternativa segura sem as contra-indicações da succinilcolina",
      "Miotonia paradoxal em distrofias musculares — pode tornar intubação impossível"
    ],
    "source": "BNF for Children 2023-24; Martyn JAJ et al. NEJM 2006; ESAIC Guidelines RSI 2023"
  },
  {
    "id": "diazepam",
    "name": "Diazepam",
    "category": "sedacao",
    "class": "Benzodiazepina 1,4 — potenciador GABA-A",
    "brands": "Valium rectal 5/10 mg; Stesolid — tubo rectal 5 mg/2,5 ml; 10 mg/2,5 ml; EV 10 mg/2 ml (5 mg/ml)",
    "indication": [
      "Status epilepticus agudo — administração rectal pré-hospitalar ou escolar (1ª linha sem acesso EV)",
      "Convulsões febris prolongadas — rectal ou bucal (midazolam bucal preferido)",
      "Sedação para procedimentos — oral/rectal (alternativa a midazolam)",
      "Abstinência alcoólica / benzodiazepínica",
      "Espasmo muscular agudo"
    ],
    "dose": [
      {
        "ind": "SE agudo — rectal (pré-hospitalar)",
        "val": "< 1 ano: 2,5 mg; 1–3 anos: 5 mg; 4–12 anos: 5–10 mg; > 12 anos: 10 mg",
        "max": "10 mg/dose",
        "freq": "Dose única rectal; repetir 1× após 10 min se persistência",
        "note": "Midazolam bucal tem evidência de eficácia igual ou superior (Appleton R, Lancet 2008)"
      },
      {
        "ind": "SE agudo — EV",
        "val": "0,25–0,4 mg/kg EV lento",
        "max": "10 mg/dose",
        "freq": "1–2 mg/min; pode repetir 1× após 10 min",
        "note": "EV raramente usado em agudo — midazolam EV preferido. Risco depressão respiratória"
      }
    ],
    "prep": "EV: NÃO diluir — precipita em qualquer diluente (forma emulsão instável). Administrar NÃO DILUÍDO (5 mg/ml) < 2 mg/min em veia de grande calibre (veia antecubital ou veia central). Via periférica distal → tromboflebite severa. Concentração máxima: 5 mg/ml (não reduzir). Rectal (Stesolid): inserir tubo 3–4 cm, comprimir e manter 5 min em decúbito. Fonte: BNF for Children 2023-24; NHS Medusa 2024.",
    "ci": [
      "Depressão respiratória grave",
      "Insuf. hepática grave",
      "Miastenia gravis",
      "Sono apneico"
    ],
    "alert": [
      "⚠️ Depressão respiratória — monitorizar SpO2; ter material de suporte ventilatório disponível",
      "⚠️ Flumazenil como antídoto (0,01 mg/kg EV) — semi-vida curta, ressedação possível",
      "⚠️ Absorção rectal variável — pode ser incompleta em diarreia ou recto vazio",
      "Midazolam bucal/nasal preferido sobre diazepam rectal em contexto pré-hospitalar (melhor aceitação, eficácia equivalente)",
      "Semi-vida muito longa (20–70h) + metabolito activo (desmetildiazepam) — sedação prolongada"
    ],
    "source": "BNF for Children 2023-24; Appleton R et al. Lancet 2008; NICE CG137 Epilepsies 2022"
  }
];

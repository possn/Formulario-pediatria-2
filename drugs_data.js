const DRUGS = [
{
"id": "adrenalina",
"name": "Adrenalina (Epinefrina)",
"category": "emergencia",
"class": "Catecolamina — agonista α e β-adrenérgico",
"brands": "Adrenalina 1:1000 (1 mg/ml)",
"indication": [
"Paragem cardiorrespiratória",
"Anafilaxia grave",
"Bradicardia sintomática refractária à atropina",
"Suporte inotrópico/vasopressor (perfusão)"
],
"dose": [
{
"ind": "PCR — EV/IO",
"val": "0,01 mg/kg (= 0,1 ml/kg da solução 1:10000)",
"max": "1 mg/dose",
"freq": "cada 3–5 min",
"note": "Repetir até ROSC. Para obter 1:10000: diluir 1 ml de 1:1000 em 9 ml SF"
},
{
"ind": "PCR — endotraqueal",
"val": "0,1 mg/kg (= 0,1 ml/kg da 1:1000)",
"max": "2,5 mg/dose",
"freq": "única (via ET apenas se sem AV/IO)",
"note": ""
},
{
"ind": "Anafilaxia — IM",
"val": "0,01 mg/kg da 1:1000",
"max": "0,5 mg/dose",
"freq": "cada 5–15 min se necessário",
"note": "Via IM face antero-lateral da coxa. EpiPen Jr 0,15 mg (< 25 kg); EpiPen 0,3 mg (≥ 25 kg)"
},
{
"ind": "Suporte vasopressor — perfusão EV",
"val": "0,05–0,3 mcg/kg/min",
"max": "1–2 mcg/kg/min (casos extremos)",
"freq": "contínua",
"note": "Titular pela TA e clínica. Doses > 0,5 mcg/kg/min: considerar vasopressina adjuvante"
}
],
"prep": "Perfusão: (0,3 × Peso kg) mg em 50 ml SG5% → 1 ml/h = 0,1 mcg/kg/min. Concentrações até 0,5 mg/ml EV central.",
"ci": [
"Não há contra-indicações absolutas na emergência"
],
"alert": [
"⚠️ Incompatível com bicarbonato de sódio (inactivada)",
"⚠️ Extravasamento causa necrose — usar acesso central em perfusão",
"Monitorização ECG contínua obrigatória",
"Efeitos: taquicardia, HTA, hiperglicemia, hipocaliemia"
],
"source": "ILCOR 2021; ERC Guidelines 2021; WAO Anaphylaxis Guidelines 2020"
},
{
"id": "atropina",
"name": "Atropina",
"category": "emergencia",
"class": "Anticolinérgico — antagonista muscarínico",
"brands": "Atropina 0,5 mg/ml; 1 mg/ml",
"indication": [
"Bradicardia sintomática (PCR, pré-intubação)",
"Bloqueio AV sintomático",
"Intoxicação por organofosforados/carbamatos",
"Pré-medicação (redução secreções)"
],
"dose": [
{
"ind": "Bradicardia / PCR",
"val": "0,02 mg/kg EV/IO",
"max": "0,5 mg (criança); 1 mg (adolescente)",
"freq": "pode repetir 1x após 5 min",
"note": "Dose mínima 0,1 mg (doses menores podem causar bradicardia paradoxal)"
},
{
"ind": "Intoxicação organofosforados",
"val": "0,05 mg/kg EV",
"max": "sem limite definido",
"freq": "cada 5–10 min até secar secreções",
"note": "Titular pelo efeito: secreções, broncoespasmo. Doses muito altas podem ser necessárias"
},
{
"ind": "Pré-intubação",
"val": "0,02 mg/kg EV",
"max": "0,5 mg",
"freq": "dose única 1–2 min antes",
"note": "Previne bradicardia vagal na laringoscopia, especialmente < 1 ano"
}
],
"prep": "Administrar não diluída em emergência. Para perfusão: diluir em SF.",
"ci": [
"Glaucoma de ângulo fechado (relativa)",
"Taquicardia não controlada"
],
"alert": [
"⚠️ Dose mínima 0,1 mg — doses < 0,1 mg podem paradoxalmente causar bradicardia",
"Efeitos: midríase, retenção urinária, boca seca, hipertermia",
"Na intoxicação por OFs: doses 10–100× superiores ao normal são frequentes"
],
"source": "ILCOR 2021; BNF for Children 2023-24; Harriet Lane 23rd Ed"
},
{
"id": "adenosina",
"name": "Adenosina",
"category": "emergencia",
"class": "Antiarrítmico — agonista dos receptores de adenosina A1",
"brands": "Adenocor 6 mg/2 ml",
"indication": [
"Taquicardia supraventricular paroxística (TSV) — 1ª linha",
"Diagnóstico diferencial taquicardias de QRS estreito"
],
"dose": [
{
"ind": "TSV",
"val": "0,1 mg/kg EV bólus rápido",
"max": "6 mg 1ª dose; 12 mg doses seguintes",
"freq": "Aumentar 0,05–0,1 mg/kg cada 1–2 min se sem resposta",
"note": "Administrar em acesso EV o mais central possível, seguido imediatamente de flush 5–10 ml SF. Bólus em < 2 seg."
}
],
"prep": "Não diluir. Bólus rápido seguido de flush SF imediato.",
"ci": [
"Bloqueio AV 2º/3º grau (sem pacemaker)",
"Doença do nódulo sinusal",
"Asma grave (broncoespasmo)"
],
"alert": [
"⚠️ Semi-vida ~10 seg — tem de ser administrada MUITO rapidamente e pelo acesso mais central disponível",
"⚠️ Potenciada por dipiridamol (reduzir dose 75%) e carbamazepina",
"⚠️ Antagonizada por teofilina/cafeína (pode necessitar doses maiores)",
"Efeitos transitórios: rubor, dispneia, dor torácica, assistolia momentânea — normal e esperado",
"Monitorização ECG contínua obrigatória"
],
"source": "PALS Guidelines AHA 2020; BNF for Children 2023-24"
},
{
"id": "amiodarona",
"name": "Amiodarona",
"category": "emergencia",
"class": "Antiarrítmico classe III — bloqueador múltiplos canais",
"brands": "Cordarone 150 mg/3 ml",
"indication": [
"FV/TV sem pulso refractária à desfibrilhação (PCR)",
"TV com pulso hemodinamicamente instável",
"TSV refractária à adenosina",
"Flutter/fibrilhação auricular"
],
"dose": [
{
"ind": "PCR (FV/TV sem pulso)",
"val": "5 mg/kg EV/IO bólus",
"max": "300 mg",
"freq": "Pode repetir até 2x (máx. 15 mg/kg total no dia)",
"note": "Administrar após 3ª desfibrilhação"
},
{
"ind": "TV com pulso / TSV",
"val": "5 mg/kg EV em 20–60 min",
"max": "300 mg/dose",
"freq": "pode repetir até dose total 15 mg/kg/dia",
"note": "Diluir em SG5%. Monitorização TA contínua — hipotensão frequente"
},
{
"ind": "Manutenção",
"val": "10–20 mg/kg/dia EV",
"max": "1200 mg/dia",
"freq": "perfusão contínua",
"note": ""
}
],
"prep": "Diluir sempre em SG5% (precipita com SF). Concentração máxima EV periférico: 2 mg/ml. EV central: até 6 mg/ml.",
"ci": [
"Bloqueio AV 2º/3º grau sem pacemaker",
"Doença do nódulo sinusal",
"Disfunção tiroideia grave",
"Hipersensibilidade ao iodo"
],
"alert": [
"⚠️ Incompatível com SF — usar EXCLUSIVAMENTE SG5%",
"⚠️ Múltiplas interacções: digoxina (↑ nível 2×), varfarina, fenitoína",
"⚠️ Toxicidade pulmonar, hepática, tiroideia em uso prolongado",
"Hipotensão durante infusão — titular velocidade",
"QTc prolongado — risco torsades de pointes (menor que outros antiarrítmicos Cl III)"
],
"source": "ILCOR 2021; ERC 2021; PALS AHA 2020"
},
{
"id": "bicarbonato",
"name": "Bicarbonato de Sódio",
"category": "emergencia",
"class": "Tampão alcalino",
"brands": "NaHCO3 8,4% (1 mmol/ml); 4,2% (0,5 mmol/ml)",
"indication": [
"Acidose metabólica grave (pH < 7,1) com compromisso hemodinâmico",
"Hipercaliemia grave com alterações ECG",
"Intoxicação por antidepressivos tricíclicos / salicilatos",
"PCR prolongada (após ≥ 10 min de suporte)"
],
"dose": [
{
"ind": "Acidose / PCR",
"val": "1 mmol/kg (= 1 ml/kg da sol. 8,4%)",
"max": "50 mmol/dose",
"freq": "pode repetir guiado por gasometria",
"note": "Usar sol. 4,2% em RN e lactentes < 3 meses"
},
{
"ind": "Hipercaliemia grave",
"val": "1–2 mmol/kg EV em 5–10 min",
"max": "50 mmol",
"freq": "dose única (efeito temporário)",
"note": "Não corrige a hipercaliemia — transloca K+ para célula"
},
{
"ind": "Alcalinização urinária (intox. salicilatos)",
"val": "1–2 mmol/kg EV",
"max": "100 mmol",
"freq": "seguido de perfusão para manter pH urinário 7,5–8",
"note": ""
}
],
"prep": "Usar solução 4,2% em RN/lactentes (solução 8,4% é hiperosmolar — risco HIV). Não misturar com cálcio (precipita) nem adrenalina (inactiva).",
"ci": [
"Alcalose metabólica",
"Hipocaliemia não corrigida"
],
"alert": [
"⚠️ Incompatível com cálcio, adrenalina, dopamina",
"⚠️ Solução 8,4% em RN — risco de hemorragia intraventricular",
"⚠️ Não usar na acidose respiratória sem ventilação assegurada (↑CO2)",
"Causa hipernatremia e hiperosmolaridade — monitorizar",
"Hipocaliemia após correcção da acidose"
],
"source": "ILCOR 2021; Harriet Lane 23rd Ed; BNF for Children 2023-24"
},
{
"id": "calcio_gluconato",
"name": "Gluconato de Cálcio 10%",
"category": "emergencia",
"class": "Electrólito — cálcio",
"brands": "Gluconato de Cálcio 10% (0,22 mmol Ca²⁺/ml)",
"indication": [
"Hipocalcemia sintomática (tetania, convulsões, PCR)",
"Hipercaliemia grave com alterações ECG (cardioprotecção)",
"Hipermagnesemia sintomática",
"Bloqueio de canais de cálcio (intoxicação por BCC)"
],
"dose": [
{
"ind": "Hipocalcemia sintomática / PCR",
"val": "0,5 ml/kg da solução 10% (= 0,11 mmol/kg)",
"max": "20 ml (2 g)",
"freq": "EV lento em 5–10 min; repetir se necessário",
"note": "Na PCR: bólus EV rápido"
},
{
"ind": "Hipercaliemia — cardioprotecção",
"val": "0,5–1 ml/kg da solução 10%",
"max": "20 ml",
"freq": "EV em 5–10 min; efeito dura 30–60 min",
"note": "Não reduz o K+ sérico — estabiliza membrana cardíaca"
},
{
"ind": "Manutenção hipocalcemia",
"val": "0,5–1 mmol/kg/dia",
"max": "—",
"freq": "perfusão contínua EV central",
"note": ""
}
],
"prep": "EV periférico: concentração máxima 10%. EV central: até 20%. NUNCA IM (necrose). Não misturar com bicarbonato (precipita CaCO3).",
"ci": [
"Hipercalcemia",
"Doente digitálico (arritmias)",
"Nefrolitíase cálcica (relativa)"
],
"alert": [
"⚠️ Bradicardia e assistolia se infusão rápida — monitorizar ECG",
"⚠️ Extravasamento causa necrose tecidular grave",
"⚠️ Incompatível com bicarbonato e fosfatos",
"⚠️ Potencia toxicidade da digoxina",
"Preferir cloreto de cálcio na PCR (3× mais Ca²⁺ biodisponível)"
],
"source": "BNF for Children 2023-24; Harriet Lane 23rd Ed; PALS AHA 2020"
},
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
"id": "dopamina",
"name": "Dopamina",
"category": "vasoactivo",
"class": "Catecolamina — agonista dopaminérgico, β1, α1 (dose-dependente)",
"brands": "Dopamina 200 mg/5 ml; 40 mg/ml",
"indication": [
"Choque séptico / distributivo (2ª linha após adrenalina/noradrenalina)",
"Choque cardiogénico com hipotensão",
"Bradicardia sintomática refractária (alternativa à adrenalina)"
],
"dose": [
{
"ind": "Inotrópico / vasopressor",
"val": "5–20 mcg/kg/min",
"max": "20 mcg/kg/min",
"freq": "perfusão contínua",
"note": "< 5 mcg/kg/min: efeito dopaminérgico (vasodilatação renal — benefício clínico não comprovado). 5–10: inotrópico β1. > 10: vasopressor α1"
}
],
"prep": "Fórmula prática: (6 × Peso kg) mg em 100 ml SG5% → 1 ml/h = 1 mcg/kg/min. EV CENTRAL obrigatório.",
"ci": [
"Feocromocitoma",
"FV/TV não tratada",
"Hipovolemia não corrigida (corrigir primeiro)"
],
"alert": [
"⚠️ EV CENTRAL — extravasamento causa necrose grave (tratar com fentolamina local)",
"⚠️ Incompatível com bicarbonato e alcalinos",
"⚠️ Evidência actual: adrenalina em baixas doses preferida ao choque séptico pediátrico (Surviving Sepsis Campaign 2020)",
"Monitorização ECG (arritmias) e TA invasiva",
"Taquifilaxia após uso prolongado"
],
"source": "Formulário de Pediatria 3ª Ed.; Surviving Sepsis Campaign 2020; BNF for Children 2023-24"
},
{
"id": "dobutamina",
"name": "Dobutamina",
"category": "vasoactivo",
"class": "Catecolamina sintética — agonista β1 predominante",
"brands": "Dobutamina 250 mg/20 ml",
"indication": [
"Disfunção miocárdica / choque cardiogénico",
"Pós-operatório de cirurgia cardíaca",
"Suporte inotrópico em sépsis com disfunção miocárdica"
],
"dose": [
{
"ind": "Inotrópico",
"val": "2,5–20 mcg/kg/min",
"max": "40 mcg/kg/min",
"freq": "perfusão contínua",
"note": "Iniciar com dose baixa e titular. Efeito vasodilatador periférico — pode baixar TA se hipovolémico"
}
],
"prep": "Fórmula: (6 × Peso kg) mg em 100 ml SG5% → 1 ml/h = 1 mcg/kg/min. EV central.",
"ci": [
"Cardiomiopatia hipertrófica obstrutiva",
"Feocromocitoma"
],
"alert": [
"⚠️ Pode causar hipotensão se hipovolemia não corrigida (vasodilatador)",
"⚠️ Taquicardia e arritmias (especialmente > 10 mcg/kg/min)",
"⚠️ Incompatível com bicarbonato e heparina",
"Monitorizar ECG e TA contínuos",
"Taquifilaxia após 72h de uso — considerar alternativas"
],
"source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
},
{
"id": "noradrenalina",
"name": "Noradrenalina (Norepinefrina)",
"category": "vasoactivo",
"class": "Catecolamina — agonista α1 predominante + β1",
"brands": "Noradrenalina 2 mg/ml; 4 mg/4 ml",
"indication": [
"Choque séptico (vasopressor de 1ª linha em adultos; 2ª linha após adrenalina em UCIP pediátrica)",
"Choque vasodilatado / distributivo",
"Hipotensão refractária"
],
"dose": [
{
"ind": "Vasopressor",
"val": "0,05–0,3 mcg/kg/min",
"max": "1–2 mcg/kg/min (choque refractário)",
"freq": "perfusão contínua",
"note": "Titular pela TAM alvo (PAM ≥ 55–65 mmHg ou > percentil 5 para idade)"
}
],
"prep": "Fórmula: (0,3 × Peso kg) mg em 50 ml SG5% → 1 ml/h = 0,1 mcg/kg/min. EV CENTRAL obrigatório.",
"ci": [
"Hipovolemia não corrigida",
"Oclusão vascular periférica"
],
"alert": [
"⚠️ EV CENTRAL OBRIGATÓRIO — necrose grave por extravasamento",
"⚠️ Vasoconstrição periférica intensa — monitorizar perfusão periférica e débito urinário",
"⚠️ Bradicardia reflexa (por HTA)",
"Monitorização com linha arterial obrigatória",
"Associar vasopressina se dose elevada necessária"
],
"source": "Surviving Sepsis Campaign 2020; BNF for Children 2023-24"
},
{
"id": "milrinona",
"name": "Milrinona",
"category": "vasoactivo",
"class": "Inibidor da fosfodiesterase-3 — inodilatador",
"brands": "Corotrop / Primacor 10 mg/10 ml",
"indication": [
"Disfunção miocárdica pós-cirurgia cardíaca",
"Choque cardiogénico com RVS elevada",
"Hipertensão pulmonar com disfunção VD"
],
"dose": [
{
"ind": "Carga (opcional)",
"val": "50–75 mcg/kg EV em 15–60 min",
"max": "—",
"freq": "dose única",
"note": "⚠️ Monitorização TA rigorosa — hipotensão frequente na carga"
},
{
"ind": "Manutenção",
"val": "0,25–0,75 mcg/kg/min",
"max": "1 mcg/kg/min",
"freq": "perfusão contínua",
"note": ""
}
],
"prep": "Diluir em SF ou SG5%. Não misturar com furosemida (precipita). EV central.",
"ci": [
"Cardiomiopatia hipertrófica obstrutiva",
"Estenose aórtica/pulmonar grave",
"Hipotensão grave não corrigida"
],
"alert": [
"⚠️ Hipotensão — especialmente com dose de carga em doente hipovolémico",
"⚠️ Não misturar com furosemida (precipitação imediata)",
"⚠️ Arritmias ventriculares e supraventriculares",
"⚠️ Ajuste na insuf. renal (excreção renal 85%)",
"Efeito inotrópico + vasodilatador — ideal no ventrículo hipertensivo"
],
"source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
},
{
"id": "vasopressina",
"name": "Vasopressina (ADH)",
"category": "vasoactivo",
"class": "Hormona antidiurética — vasopressor não-adrenérgico",
"brands": "Pitressin 20 UI/ml",
"indication": [
"Choque séptico refractário a catecolaminas",
"Diabetes insípida central (doses baixas)",
"PCR refractária (dose única — evidência limitada)"
],
"dose": [
{
"ind": "Choque vasopléxico refractário",
"val": "0,0003–0,002 UI/kg/min",
"max": "0,04 UI/min (adulto)",
"freq": "perfusão contínua",
"note": "Doses fixas em adulto: 0,03–0,04 UI/min como adjuvante à noradrenalina"
},
{
"ind": "Diabetes insípida central",
"val": "0,0003–0,001 UI/kg/min",
"max": "—",
"freq": "perfusão; titular pelo débito urinário",
"note": ""
}
],
"prep": "Diluir em SF ou SG5%. Concentração 0,1–1 UI/ml. EV central.",
"ci": [
"Doença coronária grave (relativa)",
"Insuf. cardíaca grave (relativa)"
],
"alert": [
"⚠️ Vasoconstrição esplâncnica — risco isquemia intestinal em doses altas",
"⚠️ Isquemia miocárdica e cutânea",
"⚠️ Hiponatremia (efeito antidiurético) — monitorizar Na+ seriadamente",
"Não tem efeito inotrópico — não usar como inotrópico isolado"
],
"source": "Surviving Sepsis Campaign 2020; BNF for Children 2023-24"
},
{
"id": "diazepam",
"name": "Diazepam",
"category": "antiepileptico",
"class": "Benzodiazepina — potenciador GABA-A",
"brands": "Valium 10 mg/2 ml. Stesolid 5 mg/2,5 ml (rectal).",
"indication": [
"Convulsão aguda — 1ª linha (rectal/intranasal pré-hospitalar)",
"Status epilepticus — 1ª BZD se sem AV",
"Abstinência alcoólica (adolescente)",
"Espasticidade muscular"
],
"dose": [
{
"ind": "Convulsão — rectal",
"val": "0,5 mg/kg",
"max": "10 mg",
"freq": "pode repetir 1× após 10 min",
"note": "< 3 anos: 5 mg. > 3 anos: 10 mg (Stesolid)"
},
{
"ind": "Convulsão — EV",
"val": "0,3–0,4 mg/kg EV lento",
"max": "10 mg/dose",
"freq": "pode repetir 1× após 5 min",
"note": "Administrar lentamente (< 2 mg/min) — risco apneia"
},
{
"ind": "Convulsão — IM/intranasal",
"val": "0,3 mg/kg IM",
"max": "10 mg",
"freq": "dose única",
"note": "Absorção IM irregular — preferir lorazepam IM ou midazolam IN"
}
],
"prep": "EV: não diluir. Pode administrar directamente. Absorção IM errática.",
"ci": [
"Depressão respiratória grave",
"Miastenia gravis",
"Insuf. hepática grave"
],
"alert": [
"⚠️ Depressão respiratória — monitorização SpO2 obrigatória",
"⚠️ Solução EV contém propilenoglicol (tóxico em RN e doses repetidas)",
"Longa semi-vida activa (20–100h + metabolito activo) — sedação prolongada",
"Tolerância e dependência com uso crónico"
],
"source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
},
{
"id": "lorazepam",
"name": "Lorazepam",
"category": "antiepileptico",
"class": "Benzodiazepina — potenciador GABA-A",
"brands": "Ativan 4 mg/ml; 2 mg/ml",
"indication": [
"Status epilepticus — 1ª linha EV/IO (preferida ao diazepam EV)",
"Convulsão aguda com AV",
"Sedação por procedimentos"
],
"dose": [
{
"ind": "Status epilepticus / convulsão — EV/IO",
"val": "0,1 mg/kg EV lento",
"max": "4 mg/dose",
"freq": "pode repetir 1× após 5–10 min",
"note": "Preferida ao diazepam EV: duração de acção mais longa (4–6h vs 15–30 min), menor redistribuição"
},
{
"ind": "IM",
"val": "0,1 mg/kg IM",
"max": "4 mg",
"freq": "dose única",
"note": "Absorção IM boa (ao contrário do diazepam)"
}
],
"prep": "Conservar no frio. Administrar EV lento (não em bólus rápido). Pode diluir 1:1 em SF.",
"ci": [
"Depressão respiratória grave",
"Miastenia gravis"
],
"alert": [
"⚠️ Depressão respiratória — monitorização SpO2 e estar preparado para ventilação",
"Semi-vida 10–20h (sem metabolito activo — vantagem sobre diazepam)",
"Requer refrigeração — verificar disponibilidade em emergência"
],
"source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24; APLS Guidelines 2021"
},
{
"id": "fenobarbital",
"name": "Fenobarbital",
"category": "antiepileptico",
"class": "Barbitúrico — potenciador GABA-A",
"brands": "Luminal 200 mg/ml (amp. 1 ml)",
"indication": [
"Status epilepticus — 2ª linha (após BZD)",
"Epilepsia neonatal — 1ª linha",
"Epilepsia crónica (2ª linha em crianças)"
],
"dose": [
{
"ind": "Status epilepticus — carga EV",
"val": "20 mg/kg EV em 20–30 min",
"max": "40 mg/kg total (adicionar 10–20 mg/kg se sem resposta)",
"freq": "dose única de carga",
"note": "Monitorização TA e FR contínuas"
},
{
"ind": "Epilepsia neonatal",
"val": "20 mg/kg EV em 30 min (carga) → 3–5 mg/kg/dia manutenção",
"max": "40 mg/kg carga",
"freq": "manutenção em 1–2 doses/dia",
"note": "1ª linha em RN"
},
{
"ind": "Manutenção oral/EV",
"val": "3–5 mg/kg/dia",
"max": "—",
"freq": "1–2 doses/dia",
"note": "Nível sérico terapêutico: 15–40 mcg/ml"
}
],
"prep": "EV: diluir em SF ou SG5%. Concentração máx. 16 mg/ml EV. Velocidade máx. 1 mg/kg/min.",
"ci": [
"Porfiria",
"Depressão respiratória grave"
],
"alert": [
"⚠️ Depressão respiratória especialmente se associado a BZD — ter suporte ventilatório disponível",
"⚠️ Hipotensão na infusão rápida",
"⚠️ Indutor enzimático CYP450 — múltiplas interacções (varfarina, esteroides, antiretrovirais)",
"Sedação prolongada — avaliar nível de consciência",
"Monitorizar nível sérico"
],
"source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
},
{
"id": "fenitoina",
"name": "Fenitoína",
"category": "antiepileptico",
"class": "Antiepiléptico — bloqueador canais de Na+",
"brands": "Hidantoína 50 mg/ml",
"indication": [
"Status epilepticus — 2ª linha (após BZD)",
"Epilepsia focal / generalizada (manutenção)",
"Arritmias digitálicas (uso raro)"
],
"dose": [
{
"ind": "Status epilepticus — carga EV",
"val": "18–20 mg/kg EV",
"max": "1500 mg",
"freq": "velocidade máx. 1 mg/kg/min (0,5 mg/kg/min em RN/cardíaco)",
"note": "Monitorização ECG e TA obrigatória durante infusão. Diluir em SF (precipita em SG)"
},
{
"ind": "Manutenção EV/oral",
"val": "5–8 mg/kg/dia (< 1 ano: 8–10 mg/kg/dia)",
"max": "300 mg/dia",
"freq": "2–3 doses/dia",
"note": "Nível terapêutico: 10–20 mcg/ml (total); 1–2 mcg/ml (livre)"
}
],
"prep": "⚠️ APENAS em SF — precipita em SG5%. Linha dedicada. Não misturar com outros fármacos.",
"ci": [
"Bloqueio sinoatrial / AV 2º-3º grau",
"Síndrome de Adams-Stokes",
"Bradicardia sinusal"
],
"alert": [
"⚠️ Cardiotoxicidade na infusão rápida: bradicardia, hipotensão, bloqueio AV",
"⚠️ Síndrome 'purple glove' — necrose tecidular por extravasamento EV periférico",
"⚠️ Cinética não-linear (Michaelis-Menten) — pequenas alterações de dose → grandes variações de nível sérico",
"⚠️ Indutor enzimático CYP450 — múltiplas interacções",
"Não usar em doença hepática grave; monitorizar LFTs"
],
"source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
},
{
"id": "levetiracetam",
"name": "Levetiracetam",
"category": "antiepileptico",
"class": "Antiepiléptico — ligação à proteína SV2A da vesícula sináptica",
"brands": "Keppra 500 mg/5 ml (EV); sol. oral 100 mg/ml; comp. 250/500/750/1000 mg",
"indication": [
"Status epilepticus — 2ª linha (alternativa à fenitoína, evidência crescente como 1ª escolha 2ª linha)",
"Epilepsia focal (1ª ou 2ª linha)",
"Epilepsia mioclónica juvenil",
"Epilepsia generalizada"
],
"dose": [
{
"ind": "Status epilepticus — carga EV",
"val": "40–60 mg/kg EV em 5–15 min",
"max": "3000 mg/dose",
"freq": "dose única de carga",
"note": "ConSEPT e ECLIPSE trials 2019: eficácia similar à fenitoína (60% vs 50%) com melhor perfil segurança (sem cardiotoxicidade)"
},
{
"ind": "Epilepsia — dose inicial oral/EV",
"val": "10 mg/kg/dose × 2/dia",
"max": "—",
"freq": "2×/dia",
"note": "Titular cada 2 semanas"
},
{
"ind": "Epilepsia — dose alvo",
"val": "20–30 mg/kg/dose × 2/dia",
"max": "1500 mg/dose (3000 mg/dia)",
"freq": "2×/dia",
"note": "Adulto: 500 mg × 2/dia → até 1500 mg × 2/dia"
}
],
"prep": "EV: diluir em 100 ml SF/SG5%. Administrar em 5–15 min. Biodisponibilidade oral ~100%.",
"ci": [
"Hipersensibilidade"
],
"alert": [
"⚠️ Irritabilidade, labilidade emocional em 10–15% das crianças — clinicamente relevante, pode exigir alteração",
"Ajuste renal se TFG < 50 ml/min/1,73m²",
"Vantagens: sem indução enzimática, sem cardiotoxicidade, sem necessidade de monitorização de níveis séricos rotina",
"Não requer monitorização ECG durante infusão (ao contrário da fenitoína)"
],
"source": "Lyttle MD et al. (ConSEPT). Lancet 2019;393:2178–87; Dalziel SR et al. (ECLIPSE). Lancet 2019;393:2155–64; BNF for Children 2023-24"
},
{
"id": "acido_valproico",
"name": "Valproato de Sódio",
"category": "antiepileptico",
"class": "Antiepiléptico — múltiplos mecanismos (Na+, GABA, Ca²+)",
"brands": "Depakine Chronosphere; Depakine 400 mg/4 ml (EV)",
"indication": [
"Epilepsia generalizada (1ª linha)",
"Epilepsia mioclónica",
"Status epilepticus — 2ª linha EV",
"Profilaxia enxaqueca"
],
"dose": [
{
"ind": "Status epilepticus — carga EV",
"val": "20–40 mg/kg EV em 5–10 min",
"max": "3000 mg",
"freq": "dose única",
"note": "Boa evidência como 2ª linha no SE. Nível terapêutico: 50–100 mcg/ml"
},
{
"ind": "Manutenção oral/EV",
"val": "15–40 mg/kg/dia",
"max": "60 mg/kg/dia",
"freq": "2–3 doses/dia (libertação prolongada: 1–2/dia)",
"note": ""
}
],
"prep": "EV: diluir em SF ou SG5%. Velocidade infusão: até 3 mg/kg/min.",
"ci": [
"⛔ < 2 ANOS: contraindicado se doença hepática, doença metabólica, epilepsia grave com retardo — risco FATAL de hepatotoxicidade",
"Disfunção hepática",
"Doença mitocondrial (Alpers, POLG)",
"Gravidez (teratogénico — espinha bífida)"
],
"alert": [
"⛔ HEPATOTOXICIDADE FATAL — risco máximo < 3 anos com politerapia. Monitorizar LFTs",
"⛔ PANCREATITE aguda — rara mas fatal",
"⚠️ Hiperamoniemia (encefalopatia) — especialmente com fenobarbital",
"⚠️ Teratogénese: espinha bífida, atraso cognitivo — EVITAR na gravidez",
"⚠️ Múltiplas interacções: ↑ lamotrigina, ↑ fenitoína livre, ↑ fenobarbital"
],
"source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24; Harriet Lane 23rd Ed"
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
"id": "amoxicilina_clav",
"name": "Amoxicilina/Ácido Clavulânico",
"category": "antibiotico",
"class": "Penicilina + inibidor β-lactamase",
"brands": "Augmentin; Clavamox; solução oral 400/57 mg/5 ml; EV 1000/200 mg",
"indication": [
"Infecções respiratórias (OMA, sinusite, pneumonia — ambulatório)",
"Infecções pele/partes moles",
"Infecções urinárias",
"Mordeduras animais/humanas"
],
"dose": [
{
"ind": "Oral (calculado como amoxicilina)",
"val": "40–90 mg/kg/dia",
"max": "3 g/dia amoxicilina",
"freq": "3 doses/dia (susp. 125/31); 2 doses/dia (susp. 400/57 ou comp 875/125)",
"note": "OMA em criança < 2 anos ou recorrente: 80–90 mg/kg/dia"
},
{
"ind": "EV grave",
"val": "100–200 mg/kg/dia (de amoxicilina)",
"max": "12 g/dia amoxicilina",
"freq": "3–4 doses/dia",
"note": ""
}
],
"prep": "EV: reconstituir e diluir em SF. Administrar em 30 min.",
"ci": [
"Alergia a penicilinas",
"Mononucleose infecciosa (rash)"
],
"alert": [
"⚠️ Verificar alergia — reacção cruzada com cefalosporinas em ~1–2%",
"⚠️ Icterícia colestática (especialmente formulações com ácido clavulânico)",
"Diarreia frequente — pode usar probiótico",
"Ajuste renal se TFG < 30 ml/min"
],
"source": "BNF for Children 2023-24; DGS Orientação 2019"
},
{
"id": "ceftriaxona",
"name": "Ceftriaxona",
"category": "antibiotico",
"class": "Cefalosporina 3ª geração",
"brands": "Rocephin 500 mg; 1 g; 2 g pó",
"indication": [
"Meningite bacteriana — 1ª linha",
"Sépsis grave / bacteriemia",
"Pneumonia hospitalar",
"Infecções urinárias complicadas",
"Infecções intra-abdominais (+ metronidazol)"
],
"dose": [
{
"ind": "Meningite / infecção grave",
"val": "100 mg/kg/dia EV/IM",
"max": "4 g/dia",
"freq": "1 dose/dia (ou 2 doses/dia na meningite)",
"note": "Meningite: 100 mg/kg/dia em 2 doses nos primeiros dias"
},
{
"ind": "Infecções moderadas",
"val": "50–75 mg/kg/dia",
"max": "2 g/dia",
"freq": "1 dose/dia",
"note": ""
}
],
"prep": "EV: diluir em SG5% ou SF. Concentração máx. 40 mg/ml (periférico). Administrar em 30 min.",
"ci": [
"Alergia a cefalosporinas",
"RN < 41 sem corrigidas com icterícia ou hiperbilirrubinemia (desloca bilirrubina da albumina)",
"Não misturar com cálcio em RN (precipitação fatal)"
],
"alert": [
"⛔ NÃO administrar simultâneamente com soluções contendo cálcio em RN — precipitação pulmonar/renal FATAL",
"⚠️ Colelitíase/barro biliar (sais de Ca²+ de ceftriaxona) — reversível após suspensão",
"⚠️ Diarreia associada a Clostridioides difficile",
"Boa penetração LCR — opção preferida na meningite"
],
"source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
},
{
"id": "vancomicina",
"name": "Vancomicina",
"category": "antibiotico",
"class": "Glicopeptídeo",
"brands": "Vancocin 500 mg; 1 g pó EV",
"indication": [
"Infecções por MRSA",
"Endocardite por Staphylococcus / Enterococcus",
"Meningite por MRSA / S. pneumoniae resistente",
"Infecções graves por gram-positivos resistentes a β-lactâmicos"
],
"dose": [
{
"ind": "EV (doseamento por AUC/MIC)",
"val": "15 mg/kg/dose",
"max": "750 mg/dose (inicial)",
"freq": "4 doses/dia (RN: 2–3/dia; < 1 mês: cada 12h)",
"note": "Dose de carga opcional: 25–30 mg/kg (infecção grave) em 1h. Monitorizar AUC24/MIC alvo 400–600"
},
{
"ind": "Oral (C. difficile — RAREmente usado)",
"val": "10–40 mg/kg/dia oral",
"max": "500 mg/dia",
"freq": "4 doses/dia",
"note": "Via oral não tem absorção sistémica"
}
],
"prep": "EV: diluir para ≤ 5 mg/ml. Infusão 60 min (para dose ≤ 15 mg/kg) ou 120 min (dose de carga). Linha dedicada.",
"ci": [
"Hipersensibilidade à vancomicina"
],
"alert": [
"⚠️ NEFROTOXICIDADE — monitorizar creatinina e débito urinário. Risco ↑ com aminoglicosídeos",
"⚠️ SÍNDROME DO HOMEM VERMELHO — rush/hipotensão por infusão rápida. NÃO é alergia. Tratar com anti-histamínico e reduzir velocidade",
"⚠️ Monitorização farmacocinética (AUC24/MIC) substituiu monitorização simples de nível vale",
"⚠️ Ototoxicidade (rara com uso actual guidelines)",
"Ajuste rigoroso na insuf. renal"
],
"source": "Formulário de Pediatria 3ª Ed.; Rybak MJ et al. Am J Health-Syst Pharm 2020; BNF for Children 2023-24"
},
{
"id": "meropenem",
"name": "Meropenem",
"category": "antibiotico",
"class": "Carbapenemo",
"brands": "Meronem 500 mg; 1 g pó",
"indication": [
"Infecções graves por gram-negativos multirresistentes",
"Sépsis nosocomial / bacteriemia",
"Meningite bacteriana (alternativa à ceftriaxona em resistentes)",
"Infecções intra-abdominais graves",
"Febre neutropénica de alto risco"
],
"dose": [
{
"ind": "Infecção grave / sépsis",
"val": "20 mg/kg/dose EV",
"max": "1 g/dose (2 g em meningite/pseudomonas)",
"freq": "3 doses/dia",
"note": "Infusão extendida: 3–4 horas para maximizar %T>MIC (PK/PD — organismos com MIC elevado)"
},
{
"ind": "Meningite",
"val": "40 mg/kg/dose",
"max": "2 g/dose",
"freq": "3 doses/dia",
"note": ""
}
],
"prep": "Diluir em SF ou SG5%. Concentração máx. 50 mg/ml. Estabilidade: 4h à temperatura ambiente.",
"ci": [
"Hipersensibilidade a carbapenemos",
"Alergia a β-lactâmicos (reacção cruzada < 1%)"
],
"alert": [
"⚠️ Convulsões (raro — mais com imipenem; meropenem menos epileptogénico)",
"⚠️ Abaixa o limiar convulsivante — cuidado em doentes epilépticos",
"⚠️ Nefrotoxicidade em doses altas",
"Reservar para organismos resistentes — preservar para evitar resistências",
"Ajuste renal obrigatório"
],
"source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
},
{
"id": "gentamicina",
"name": "Gentamicina",
"category": "antibiotico",
"class": "Aminoglicosídeo",
"brands": "Gentamicina 40 mg/ml",
"indication": [
"Sépsis neonatal — 1ª linha (associada a ampicilina)",
"Infecções urinárias graves por gram-negativos",
"Endocardite (sinergia com β-lactâmicos)",
"Sépsis grave gram-negativo (associada)"
],
"dose": [
{
"ind": "RN sépsis (dose única diária)",
"val": "< 29 sem: 5 mg/kg cada 48h; 29–35 sem: 4,5 mg/kg cada 36h; > 35 sem: 4 mg/kg cada 24h",
"max": "—",
"freq": "ver esquema",
"note": "Dose única diária preferida (melhor índice AUC/MIC, menor toxicidade)"
},
{
"ind": "Criança > 1 mês (dose única diária)",
"val": "5–7 mg/kg/dose",
"max": "—",
"freq": "1 vez/dia",
"note": "Nível vale < 1 mg/L antes da 2ª dose. Ajustar intervalo pela função renal"
}
],
"prep": "EV: diluir em SF. Administrar em 30 min.",
"ci": [
"Miastenia gravis",
"Insuf. renal grave (ajustar dose/intervalo)"
],
"alert": [
"⚠️ NEFROTOXICIDADE — monitorizar creatinina e débito urinário",
"⚠️ OTOTOXICIDADE (auditiva e vestibular) — irreversível. Evitar uso prolongado",
"⚠️ Risco ↑ com vancomicina, furosemida, AINEs",
"Monitorizar nível sérico vale (< 1 mg/L)",
"Ajuste rigoroso na insuf. renal e RN prematuro"
],
"source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24; BNFC Neonatal Formulary"
},
{
"id": "metronidazol",
"name": "Metronidazol",
"category": "antibiotico",
"class": "Nitroimidazol — antibacteriano e antiparasitário",
"brands": "Flagyl 500 mg/100 ml (EV); comp. 250 mg; susp. 40 mg/ml",
"indication": [
"Infecções por anaeróbios (intra-abdominal, cerebral, ginecológica)",
"Clostridioides difficile (oral — alternativa à vancomicina oral)",
"Giardíase, amebíase, tricomoníase",
"Profilaxia cirúrgica (colo/recto)"
],
"dose": [
{
"ind": "Infecção anaeróbia — EV/oral",
"val": "7,5 mg/kg/dose",
"max": "500 mg/dose",
"freq": "3 doses/dia",
"note": "Casos graves: 15 mg/kg dose de carga → 7,5 mg/kg 3×/dia"
},
{
"ind": "C. difficile — oral",
"val": "7,5 mg/kg/dose oral",
"max": "500 mg/dose",
"freq": "3 doses/dia × 10 dias",
"note": "Vancomicina oral é superior em casos graves"
},
{
"ind": "Giardíase",
"val": "15 mg/kg/dia",
"max": "750 mg/dia",
"freq": "3 doses/dia × 5–7 dias",
"note": ""
}
],
"prep": "EV: não necessita diluição adicional (já diluído). Administrar em 30–60 min.",
"ci": [
"1º trimestre gravidez (relativa)"
],
"alert": [
"⚠️ Efeito dissulfiram com álcool — evitar álcool durante e 48h após tratamento",
"Sabor metálico, náuseas frequentes",
"Neuropatia periférica com uso prolongado",
"↑ INR com varfarina"
],
"source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
},
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
"Insuf. supra-renal aguda"
],
"dose": [
{
"ind": "Meningite bacteriana",
"val": "0,15 mg/kg/dose EV",
"max": "10 mg/dose",
"freq": "4 doses/dia × 4 dias",
"note": "Iniciar com ou antes da 1ª dose de antibiótico. Evidência mais forte em meningite por H. influenzae e S. pneumoniae"
},
{
"ind": "Crupe moderado-grave",
"val": "0,15–0,6 mg/kg oral/IM/EV",
"max": "10 mg",
"freq": "dose única",
"note": "0,15 mg/kg oral tão eficaz como 0,6 mg/kg — NRCG meta-analysis 2018"
},
{
"ind": "Edema cerebral peritumoral",
"val": "0,5 mg/kg/dia EV",
"max": "16 mg/dia",
"freq": "2–4 doses/dia",
"note": ""
},
{
"ind": "Pré-extubação",
"val": "0,5 mg/kg/dose EV",
"max": "10 mg",
"freq": "cada 8h × 3 doses (última dose 1h antes extubação)",
"note": ""
},
{
"ind": "Insuf. supra-renal aguda",
"val": "1–2 mg/kg EV bólus",
"max": "100 mg",
"freq": "seguido de 1 mg/kg/dia",
"note": ""
}
],
"prep": "EV: pode administrar não diluído ou diluído em SF. Administrar em 5–10 min.",
"ci": [
"Infecção sistémica não controlada (relativa)",
"Úlcera péptica activa (relativa)"
],
"alert": [
"⚠️ Hiperglicemia — monitorizar glicemia",
"⚠️ Imunossupressão — risco infecção oportunista",
"⚠️ Insuf. supra-renal após uso prolongado — desmame obrigatório",
"HTA, hipocaliemia, osteoporose (uso prolongado)",
"7× mais potente que prednisolona"
],
"source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24; Cochrane 2015"
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
"Asma grave refractária"
],
"dose": [
{
"ind": "Insuf. supra-renal aguda / crise addissoniana",
"val": "CARGA: 50–100 mg/m² EV bólus (ou 1–2 mg/kg)",
"max": "200 mg bólus",
"freq": "seguido de 50–100 mg/m²/dia em perfusão contínua ou 4 doses/dia",
"note": ""
},
{
"ind": "Choque séptico refractário",
"val": "1–2 mg/kg/dia EV",
"max": "200 mg/dia",
"freq": "perfusão contínua ou cada 6–8h",
"note": "ADRENAL trial e metanálises: benefício incerto em pediatria. Considerar em choque catecol-refractário com suspeita ISR"
},
{
"ind": "Anafilaxia / asma grave",
"val": "4 mg/kg/dose EV",
"max": "200 mg/dose",
"freq": "cada 6h",
"note": "Efeito diferido 4–6h — não é fármaco de emergência imediata"
}
],
"prep": "EV: reconstituir e diluir em SF. Concentração máx. 50 mg/ml. Administrar em 5–15 min.",
"ci": [
"Infecção fúngica sistémica (relativa)"
],
"alert": [
"⚠️ Doses de reposição fisiológica (15–20 mg/m²/dia) MUITO diferentes das doses farmacológicas",
"⚠️ Hiperglicemia intensa",
"⚠️ Hipocaliemia, HTA, retenção hídrica",
"Único corticoide com actividade mineralocorticóide significativa — usar na ISR primária"
],
"source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
},
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
"id": "furosemida",
"name": "Furosemida",
"category": "diuretico",
"class": "Diurético de ansa — inibidor co-transportador Na-K-2Cl",
"brands": "Lasix 10 mg/ml",
"indication": [
"Edema (ICC, cirrose, síndrome nefrótico)",
"Hipertensão arterial",
"Oligúria/sobrecarga hídrica em UCIP",
"Hipercalcemia"
],
"dose": [
{
"ind": "EV bólus",
"val": "0,5–1 mg/kg/dose",
"max": "6 mg/kg/dose; 40 mg/dose habitual",
"freq": "cada 6–12h conforme resposta",
"note": "RN prematuro: 0,5–1 mg/kg cada 24h"
},
{
"ind": "Oral",
"val": "1–3 mg/kg/dia",
"max": "80 mg/dia",
"freq": "1–2 doses/dia",
"note": ""
},
{
"ind": "Perfusão contínua UCIP",
"val": "0,1–0,4 mg/kg/hora",
"max": "—",
"freq": "contínua (melhor eficácia e menor ototoxicidade vs bólus)",
"note": ""
}
],
"prep": "EV: pode administrar não diluído (10 mg/ml) ou diluído em SF. NÃO misturar com milrinona, amiodarona, midazolam.",
"ci": [
"Anúria por obstrução",
"Hipocaliemia grave não corrigida",
"Hiponatremia grave"
],
"alert": [
"⚠️ Hipocaliemia — monitorizar K+ e repor",
"⚠️ Hiponatremia, hipomagnesemia, hipocalcemia",
"⚠️ Ototoxicidade (risco ↑ com aminoglicosídeos e doses altas)",
"⚠️ Alcalose metabólica hipoclorémica",
"Nefrocalcinose em RN prematuro com uso prolongado"
],
"source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
},
{
"id": "surfactante",
"name": "Surfactante Exógeno (Poractant alfa)",
"category": "neonatologia",
"class": "Surfactante natural suíno — fosfolípidos + proteínas SP-B e SP-C",
"brands": "Curosurf 120 mg/1,5 ml; 240 mg/3 ml (80 mg/ml)",
"indication": [
"Síndrome Dificuldade Respiratória (SDR) — tratamento e profilaxia",
"Síndrome aspiração meconial grave",
"Pneumonia neonatal com hipoxemia grave",
"ARDS neonatal"
],
"dose": [
{
"ind": "SDR — dose inicial",
"val": "200 mg/kg IT",
"max": "—",
"freq": "dose única; 2ª dose 100 mg/kg após 12h se necessário",
"note": "Dose 200 mg/kg superior a 100 mg/kg (Cochrane 2019)"
},
{
"ind": "Profilaxia (sala partos < 28 sem)",
"val": "100–200 mg/kg IT",
"max": "—",
"freq": "dose única",
"note": "LISA (Less Invasive Surfactant Administration) preferida se respiração espontânea"
}
],
"prep": "Pré-aquecer a 37°C. NÃO agitar. Administrar IT em bólus ou via sonda fina (LISA). FiO2 100% antes e durante. Reduzir FiO2 rapidamente após resposta (risco hiperoxia).",
"ci": [
"Sem contra-indicações absolutas em SDR grave"
],
"alert": [
"⚠️ Dessaturação e bradicardia transitória durante administração",
"⚠️ Reduzir FiO2 e pressões ventilatórias rapidamente após administração (risco pneumotórax e hiperoxia)",
"⚠️ Hemorragia pulmonar (raro — mais em RNMBP < 26 semanas)",
"Conservar a 2–8°C. Não recongelar.",
"Monitorização SpO2 contínua durante administração"
],
"source": "Sweet DG et al. European Consensus Guidelines Neonatology 2023; Cochrane Reviews 2019"
},
{
"id": "cafeina_citrato",
"name": "Citrato de Cafeína",
"category": "neonatologia",
"class": "Metilxantina — antagonista adenosina; estimulante do centro respiratório",
"brands": "Peyona 20 mg/ml (10 mg/ml de cafeína base). 2 mg citrato = 1 mg cafeína base.",
"indication": [
"Apneia da prematuridade — 1ª linha",
"Facilitação do desmame ventilatório no prematuro",
"Redução broncodisplasia pulmonar (CAP trial)"
],
"dose": [
{
"ind": "Carga",
"val": "20 mg/kg de citrato de cafeína EV em 30 min",
"max": "—",
"freq": "dose única",
"note": "= 10 mg/kg de cafeína base"
},
{
"ind": "Manutenção",
"val": "5–10 mg/kg/dia de citrato de cafeína EV/oral",
"max": "—",
"freq": "1 dose/dia",
"note": "Iniciar 24h após carga. Manter até 34–35 sem corrigidas sem apneias"
}
],
"prep": "EV: pode administrar não diluído (20 mg/ml) ou diluído em SG5%. Oral: mesma dose.",
"ci": [
"Taquiarritmia neonatal sintomática"
],
"alert": [
"⚠️ Taquicardia (FC > 180/min) — rever dose",
"⚠️ Intolerância GI (náuseas, distensão)",
"Nível sérico terapêutico cafeína: 5–25 mg/L",
"Meia-vida longa no RN: 40–100h (vs 3–5h no adulto — imaturidade CYP1A2)",
"CAP trial (Schmidt 2006): redução de 36% na BDP com cafeína"
],
"source": "Formulário de Pediatria 3ª Ed.; Schmidt B et al. (CAP trial) NEJM 2006; BNF for Children 2023-24"
},
{
"id": "ino",
"name": "Óxido Nítrico Inalado (iNO)",
"category": "neonatologia",
"class": "Vasodilatador pulmonar selectivo — activa guanilato ciclase → ↑cGMP → vasodilatação VSM pulmonar",
"brands": "INOmax 800 ppm gás para inalação",
"indication": [
"Hipertensão Pulmonar Persistente do RN (HPPRN) — 1ª linha (RN ≥ 34 semanas)",
"Hipertensão pulmonar pós-cirurgia cardíaca",
"ARDS grave pediátrico (melhora oxigenação — não reduz mortalidade)"
],
"dose": [
{
"ind": "HPPRN",
"val": "Início: 20 ppm inalado",
"max": "20 ppm (doses > 20 ppm não aumentam eficácia e ↑ toxicidade)",
"freq": "contínuo; desmame gradual",
"note": "Resposta em 30–60 min (↑SpO2 ≥ 5–10%). Desmame: 20→10→5→2→1 ppm cada 4–24h. NÃO suspender abruptamente"
},
{
"ind": "ARDS grave",
"val": "5–20 ppm",
"max": "20 ppm",
"freq": "contínuo",
"note": "Melhora oxigenação mas sem benefício na mortalidade (Cochrane)"
}
],
"prep": "Sistema de administração dedicado integrado no ventilador. Monitorização contínua de NO, NO2 e MetHb.",
"ci": [
"Lesões cardíacas dependentes do foramen ovale para manutenção do débito sistémico (ex: HVE, coarctação grave)"
],
"alert": [
"⚠️ MetHemoglobinemia — monitorizar MetHb 1–2h após início e com cada ↑ de dose. Suspender se MetHb > 5%",
"⚠️ Efeito rebote na suspensão abrupta — desmame OBRIGATORIAMENTE gradual",
"⚠️ Toxicidade por NO2 no circuito (> 3 ppm)",
"⚠️ Trombocitopenia (raro)",
"Não melhora outcomes em HPPRN por VEÍCULO CONGÉNITA — não usar se cardiopatia estrutural dependente do shunt D→E"
],
"source": "Clark RH et al. NEJM 2000;342:469–74; Steinhorn RH. NeoReviews 2021; INOmax SmPC 2023"
},
{
"id": "sildenafil",
"name": "Sildenafil",
"category": "neonatologia",
"class": "Inibidor selectivo da fosfodiesterase-5 (PDE-5) — vasodilatador pulmonar oral",
"brands": "Revatio 20 mg comp.; 10 mg/ml sol. oral; 10 mg/12,5 ml EV",
"indication": [
"Hipertensão arterial pulmonar (HAP) — pediátrica",
"Desmame do iNO",
"HPPRN (off-label — quando iNO não disponível)"
],
"dose": [
{
"ind": "HAP oral (< 20 kg)",
"val": "10 mg × 3/dia",
"max": "10 mg × 3/dia",
"freq": "3×/dia",
"note": "⚠️ EMA 2014: NÃO usar doses altas em crianças (↑ mortalidade). Doses ≤ 10 mg 3×/dia"
},
{
"ind": "HAP oral (20–45 kg)",
"val": "20 mg × 3/dia",
"max": "20 mg × 3/dia",
"freq": "3×/dia",
"note": ""
},
{
"ind": "HAP oral (> 45 kg)",
"val": "20 mg × 3/dia",
"max": "40 mg × 3/dia",
"freq": "3×/dia",
"note": ""
},
{
"ind": "HPPRN oral (off-label)",
"val": "0,5–1 mg/kg/dose oral",
"max": "2 mg/kg/dose",
"freq": "3–4×/dia",
"note": "Dados limitados em RN"
}
],
"prep": "Solução oral: 10 mg/ml. Comprimidos podem ser triturados e reconstituídos.",
"ci": [
"Nitratos (hipotensão grave e potencialmente fatal)",
"Inibidores potentes CYP3A4 (ritonavir)",
"HAP associada a cardiopatia com shunt D→E significativo"
],
"alert": [
"⛔ EMA alerta 2014: doses altas (80 mg × 3/dia) associadas a ↑ mortalidade em crianças 1–17 anos — NÃO EXCEDER doses recomendadas",
"⚠️ Hipotensão sistémica",
"⚠️ Visão turva (inibição PDE6 retiniana) — transitória",
"⚠️ Priapismo (raro)"
],
"source": "EMA SmPC Revatio 2023; TOPP trial 2012; Barst RJ et al. NEJM 2005 (SUPER-1)"
},
{
"id": "acido_tranexamico",
"name": "Ácido Tranexâmico",
"category": "hemostase",
"class": "Antifibrinolítico — inibidor competitivo da activação do plasminogénio",
"brands": "Transamin 500 mg/5 ml; 1000 mg/10 ml",
"indication": [
"Hemorragia major / trauma (Golden Hour — evidência classe I)",
"Cirurgia cardíaca e ortopédica (profilaxia)",
"Hemofilia (adjuvante)",
"Epistaxis recorrente"
],
"dose": [
{
"ind": "Hemorragia major / trauma — EV",
"val": "15 mg/kg EV em 10 min (carga)",
"max": "1000 mg/dose",
"freq": "seguido de 2 mg/kg/hora × 8h",
"note": "⚠️ Administrar nas PRIMEIRAS 3 HORAS após traumatismo. Após 3h pode ser prejudicial (CRASH-2)"
},
{
"ind": "Cirurgia cardíaca (profilaxia)",
"val": "10 mg/kg EV pré-CEC + 10 mg/kg durante CEC",
"max": "—",
"freq": "per protocolo",
"note": ""
},
{
"ind": "Epistaxis / mucosas",
"val": "15–25 mg/kg/dose oral",
"max": "1500 mg/dose",
"freq": "3 doses/dia × 5–7 dias",
"note": "Ou tópico: gaze embebida em solução 5%"
}
],
"prep": "EV: diluir em SF ou SG5%. Velocidade máxima: 100 mg/min.",
"ci": [
"Hemorragia subaracnoídea (dados contraditórios — evitar)",
"Trombose activa (TEP, TVP, AVC isquémico)",
"Hematúria de origem renal superior (risco obstrução)"
],
"alert": [
"⚠️ Convulsões em doses altas (especialmente cirurgia cardíaca com CEC)",
"⚠️ Tromboembolismo — risco baixo com doses recomendadas, mas monitorizar",
"Náuseas e vómitos — reduzir velocidade de infusão",
"Ajustar na insuf. renal"
],
"source": "CRASH-2 Collaborators. Lancet 2010;376:23–32; Roberts I et al. Lancet 2011; Eckert MJ et al. J Trauma 2014"
},
{
"id": "heparina",
"name": "Heparina Não Fraccionada",
"category": "hemostase",
"class": "Anticoagulante — potencia antitrombina III → inibe trombina e factor Xa",
"brands": "Heparina sódica 5000 UI/ml; 25000 UI/5 ml",
"indication": [
"Trombose venosa profunda / tromboembolismo",
"Linha arterial (permeabilidade)",
"Circulação extra-corporal (CEC, ECMO)",
"Coagulação intravascular disseminada (CID)",
"Síndrome coronário agudo (adolescente)"
],
"dose": [
{
"ind": "Anticoagulação terapêutica — EV",
"val": "CARGA: 75 UI/kg em 10 min; MANUTENÇÃO: < 1 ano: 28 UI/kg/hora; 1–18 anos: 20 UI/kg/hora",
"max": "—",
"freq": "perfusão contínua; ajustar por APTT",
"note": "Alvo APTT: 60–85 seg (anti-Xa 0,35–0,7 UI/ml preferida em RN)"
},
{
"ind": "Permeabilidade linha arterial / CVC",
"val": "0,5–1 UI/ml na solução de lavagem",
"max": "—",
"freq": "contínua",
"note": ""
},
{
"ind": "ECMO — dose inicial",
"val": "50–100 UI/kg EV bólus → perfusão 20–60 UI/kg/hora",
"max": "—",
"freq": "titulado por ACT alvo 180–220 seg",
"note": ""
}
],
"prep": "Perfusão: diluir em SF. Concentração habitual: 1–5 UI/ml (pediátrico), até 50 UI/ml (restrito).",
"ci": [
"Hemorragia activa não controlada",
"Trombocitopenia induzida por heparina (HIT)",
"Cirurgia SNC recente"
],
"alert": [
"⚠️ TROMBOCITOPENIA INDUZIDA POR HEPARINA (HIT) — queda plaquetária > 50% entre D5–14. Suspender imediatamente",
"⚠️ Antídoto: PROTAMINA 1 mg/100 UI heparina (máx. 50 mg IV lento)",
"⚠️ Monitorizar APTT ou anti-Xa 4–6h após início/ajuste",
"⚠️ Osteoporose em uso prolongado"
],
"source": "Formulário de Pediatria 3ª Ed.; Monagle P et al. CHEST Guidelines 2018; BNF for Children 2023-24"
},
{
"id": "digoxina",
"name": "Digoxina",
"category": "cardiovascular",
"class": "Glicosídeo cardíaco — inibidor Na+/K+ ATPase",
"brands": "Lanoxin 0,25 mg/ml (EV); 0,05 mg/ml (ped.); comp. 0,25 mg",
"indication": [
"Insuficiência cardíaca com FE reduzida (adjuvante)",
"Fibrilhação auricular com resposta ventricular rápida",
"Flutter auricular (conversão/controlo de frequência)"
],
"dose": [
{
"ind": "Impregnação EV (dose total de digitalização)",
"val": "RN prematuro: 20 mcg/kg; RN termo: 30 mcg/kg; 1 mês–2 anos: 35 mcg/kg; 2–10 anos: 25 mcg/kg; > 10 anos: 15 mcg/kg",
"max": "1 mg total",
"freq": "Dar metade da dose total, depois ¼ cada 8h × 2 doses. Monitorizar ECG",
"note": ""
},
{
"ind": "Manutenção oral/EV",
"val": "RN: 5 mcg/kg/dia; < 2 anos: 10–12 mcg/kg/dia; > 2 anos: 8–10 mcg/kg/dia",
"max": "250 mcg/dia",
"freq": "2 doses/dia",
"note": "Nível sérico terapêutico: 0,8–2 ng/ml (colher 6–8h após última dose)"
}
],
"prep": "EV: diluir ≥ 4× em SF ou SG5%. Administrar em 30 min.",
"ci": [
"Cardiomiopatia hipertrófica obstrutiva",
"Síndrome WPW com FA (via accessória)",
"Bloqueio AV 2º/3º grau"
],
"alert": [
"⚠️ JANELA TERAPÊUTICA ESTREITA — toxicidade frequente",
"⚠️ Toxicidade: náuseas, vómitos, bradicardia, bloqueio AV, arritmias ventriculares, confusão, distúrbios visuais (halos amarelos/verdes)",
"⚠️ Hipocaliemia, hipomagnesemia e hipercalcemia POTENCIAM toxicidade",
"⚠️ Interacções: amiodarona, quinidina, eritromicina ↑ nível digoxina",
"Antídoto: anticorpos antidigoxina (Digibind)"
],
"source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
},
{
"id": "nicardipina",
"name": "Nicardipina",
"category": "cardiovascular",
"class": "Bloqueador canais de cálcio diidropiridínico — anti-hipertensor EV",
"brands": "Nicardipina 1 mg/ml (amp. 10 ml)",
"indication": [
"Emergência hipertensiva em UCIP",
"Hipertensão grave pós-operatória (cirurgia cardíaca, renal)",
"HTA por nefropatia"
],
"dose": [
{
"ind": "Perfusão EV",
"val": "Início 0,5–1 mcg/kg/min; titular cada 15–30 min",
"max": "4–5 mcg/kg/min",
"freq": "perfusão contínua",
"note": "Adulto: 5 mg/hora → titular até 15 mg/hora"
}
],
"prep": "Diluir em SG5% ou SF. Concentração 0,1 mg/ml. EV central preferido (flebite).",
"ci": [
"Estenose aórtica grave",
"Choque cardiogénico"
],
"alert": [
"⚠️ Hipotensão — titular lentamente, ter linha arterial",
"⚠️ Taquicardia reflexa",
"⚠️ Flebite no periférico — preferir EV central",
"Vantagem sobre nitroprussiato: sem toxicidade por tiocianato",
"⚠️ Uso off-label em pediatria"
],
"source": "Flynn JT et al. Pediatrics 2017;140(3); BNF for Children 2023-24"
},
{
"id": "captopril",
"name": "Captopril",
"category": "cardiovascular",
"class": "IECA — inibidor do enzima de conversão da angiotensina",
"brands": "Capoten comp. 12,5/25/50 mg",
"indication": [
"Hipertensão arterial",
"Insuficiência cardíaca",
"Cardiomiopatia dilatada",
"Nefropatia diabética / proteinúria"
],
"dose": [
{
"ind": "HTA / ICC — oral",
"val": "INICIAL: 0,1–0,3 mg/kg/dose oral; MANUTENÇÃO: 0,5–2 mg/kg/dia",
"max": "6 mg/kg/dia; 150 mg/dia",
"freq": "3 doses/dia",
"note": "RN: INICIAR com 0,01–0,05 mg/kg/dose (hipotensão grave — 1ª dose em contexto hospitalar)"
}
],
"prep": "Comprimidos podem ser triturados e dissolvidos em água. Solução extemporânea: 1 mg/ml em água estéril (estável 7 dias no frio).",
"ci": [
"Estenose artéria renal bilateral",
"Gravidez (2º e 3º trimestres — teratogénico)",
"Hipercaliemia",
"Angioedema prévio com IECA"
],
"alert": [
"⚠️ 1ª dose em RN: hipotensão grave — iniciar SEMPRE em contexto hospitalar",
"⚠️ Hipotensão na 1ª toma — risco máximo 1–2h após administração",
"⚠️ Hipercaliemia (especialmente com poupadores K+)",
"⚠️ Tosse seca (efeito de classe)",
"⚠️ Angioedema (raro mas grave)",
"Monitorizar função renal e K+ no início e ajustes de dose"
],
"source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
},
{
"id": "potassio",
"name": "Cloreto de Potássio",
"category": "electrolitico",
"class": "Electrólito — potássio",
"brands": "KCl 7,5% (1 mmol/ml); 15% (2 mmol/ml)",
"indication": [
"Hipocaliemia sintomática ou grave (K+ < 2,5 mEq/L)",
"Manutenção de potássio em soluções EV"
],
"dose": [
{
"ind": "Reposição EV (hipocaliemia grave)",
"val": "0,5–1 mEq/kg EV",
"max": "40 mEq/dose",
"freq": "em 1–4h via EV CENTRAL; monitorizar ECG",
"note": "Velocidade máxima: 0,5 mEq/kg/hora (EV central)"
},
{
"ind": "Manutenção em soros",
"val": "2–4 mEq/kg/dia",
"max": "—",
"freq": "dividido nas soluções EV do dia",
"note": "Concentração máxima EV periférico: 40 mEq/L"
}
],
"prep": "⛔ NUNCA administrar EV rápido não diluído — FATAL. Diluir sempre. Concentração máxima EV central: 150–200 mEq/L.",
"ci": [
"Hipercaliemia",
"Anúria"
],
"alert": [
"⛔ BÓLUS EV RÁPIDO = MORTE — paragem cardíaca em assistolia",
"⚠️ EV CENTRAL para concentrações > 40 mEq/L",
"⚠️ Monitorização ECG durante infusão rápida",
"⚠️ Monitorizar K+ sérico 1–2h após reposição"
],
"source": "BNF for Children 2023-24; Harriet Lane 23rd Ed"
},
{
"id": "glicose",
"name": "Glucose (Dextrose)",
"category": "electrolitico",
"class": "Substrato energético — carboidrato",
"brands": "Glucose 5%; 10%; 20%; 30%; 50%",
"indication": [
"Hipoglicemia",
"Manutenção energética EV",
"Veículo para fármacos EV"
],
"dose": [
{
"ind": "Hipoglicemia sintomática — EV bólus",
"val": "200 mg/kg (= 2 ml/kg de SG10%)",
"max": "5 g/dose",
"freq": "bólus EV; repetir se necessário",
"note": "Glicemia alvo ≥ 45 mg/dL (RN) / ≥ 60 mg/dL (criança). Seguir de perfusão GIR 6–8 mg/kg/min"
},
{
"ind": "Manutenção (GIR)",
"val": "RN: 4–8 mg/kg/min; Lactente: 3–5 mg/kg/min; Criança: 2–3 mg/kg/min",
"max": "—",
"freq": "perfusão contínua",
"note": "GIR (mg/kg/min) = [% glicose × 10 × velocidade (ml/hora)] / (60 × Peso kg)"
}
],
"prep": "SG10%: padrão para RN. SG50%: diluir sempre — NUNCA EV periférico. Concentração máx. EV periférico: 12,5%.",
"ci": [
"Hiperglicemia não controlada",
"Hiperosmolaridade"
],
"alert": [
"⛔ SG50% NUNCA EV periférico — necrose tecidular",
"⚠️ Hiperglicemia em stress/sépsis — monitorizar glicemia",
"⚠️ Hipocaliemia por insulina endógena (grandes volumes)",
"⚠️ No TCE: evitar hipoglicemia E hiperglicemia (ambas pioram outcome)"
],
"source": "BNF for Children 2023-24; Harriet Lane 23rd Ed"
},
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
"id": "fosfenitoina",
"name": "Fosfenitoína",
"category": "antiepileptico",
"class": "Pró-fármaco da fenitoína — dose expressa em Equivalentes de Fenitoína (PE)",
"brands": "Pro-Epanutin 75 mg/ml (= 50 mg PE/ml). Amp. 10 ml = 500 mg PE.",
"indication": [
"Status epilepticus — alternativa à fenitoína EV",
"Manutenção antiepiléptica EV quando via oral não possível"
],
"dose": [
{
"ind": "Status epilepticus — carga EV",
"val": "15–20 mg PE/kg EV",
"max": "1500 mg PE",
"freq": "velocidade máxima 3 mg PE/kg/min (vs 1 mg PE/kg/min da fenitoína)",
"note": "Conversão completa em 15 min após infusão"
},
{
"ind": "Manutenção",
"val": "4–8 mg PE/kg/dia EV/IM",
"max": "—",
"freq": "2 doses/dia",
"note": "Nível fenitoína: colher 2h após dose EV"
}
],
"prep": "Pode diluir em SF OU SG5% (ao contrário da fenitoína — vantagem). Concentração: 1,5–25 mg PE/ml.",
"ci": [
"Bloqueio sinoatrial/AV 2º-3º grau",
"Bradicardia sinusal grave"
],
"alert": [
"⚠️ Prurido e parestesias durante infusão (por ciclodextrina veículo) — transitórios, não é alergia",
"⚠️ Monitorização ECG e TA durante infusão (menos cardiotóxico que fenitoína, mas vigilância necessária)",
"⚠️ EQUIVALÊNCIA: 1,5 mg fosfenitoína = 1 mg PE = 1 mg fenitoína",
"Vantagem: pode ser administrada IM e em SG5%; menos flebite; ritmo mais rápido"
],
"source": "Abend NS et al. Epilepsia 2019; BNF for Children 2023-24; Pro-Epanutin SmPC"
}
];
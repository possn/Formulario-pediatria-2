'use strict';
// Algoritmos clínicos. Sintaxe nos textos: **negrito**, {{id_ficha|texto}} = ligação à monografia.
// tom: act (acção) · q (decisão) · crit (crítico/paragem) · info (nota)
var ALG_GROUPS=[
 {id:'aha',t:'Reanimação pediátrica — AHA/AAP 2025',
  sub:'Tradução dos algoritmos oficiais, 2025 American Heart Association e American Academy of Pediatrics.'},
 {id:'hff',t:'Protocolos UCIEP — Serviço de Pediatria do HFF',
  sub:'Algoritmos do Departamento da Criança e do Jovem, Hospital Prof. Doutor Fernando Fonseca.'}
];

var ALGS=[
{id:'pcr',grp:'aha',ico:0,tone:'crit',
 title:'Paragem cardiorrespiratória',
 sub:'Algoritmo de paragem cardíaca pediátrica',
 src:'AHA/AAP 2025 — Pediatric Cardiac Arrest Algorithm (versão 250123). Tradução livre.',
 stages:[
  {lab:'1',tone:'crit',title:'Iniciar RCP',items:[
    'Iniciar ventilação com máscara-balão e administrar oxigénio',
    'Ligar monitor/desfibrilhador']},
  {lab:'?',tone:'q',title:'Ritmo desfibrilhável?',branches:[
    {lab:'Sim — FV / TV sem pulso (2)',tone:'crit',items:[
      '**3 · Choque** o mais cedo possível',
      '**4 · RCP 2 min**; acesso IV/IO',
      'Ritmo desfibrilhável? Se sim: **5 · Choque**',
      '**6 · RCP 2 min**: {{adrenalina|adrenalina}} cada 3–5 min; considerar via aérea avançada e capnografia',
      'Ritmo desfibrilhável? Se sim: **7 · Choque**',
      '**8 · RCP 2 min**: {{amiodarona|amiodarona}} ou {{lidocaina_pcr|lidocaína}}; tratar causas reversíveis',
      'Repetir a partir de 5']},
    {lab:'Não — Assistolia / AESP (9)',tone:'act',items:[
      '**{{adrenalina|Adrenalina}} o mais cedo possível**',
      '**10 · RCP 2 min**: acesso IV/IO; adrenalina cada 3–5 min; considerar via aérea avançada e capnografia',
      'Ritmo desfibrilhável? Se sim: ir para 5',
      'Se não: **11 · RCP 2 min** — tratar causas reversíveis',
      'Ritmo desfibrilhável? Se sim: ir para 5; se não: voltar a 10']}
  ]},
  {lab:'12',tone:'info',title:'Reavaliação',items:[
    'Sem sinais de retorno da circulação espontânea (RCE): ir para 10',
    'Com RCE: **cuidados pós-paragem cardíaca**']}
 ],
 side:[
  {t:'RCP de alta qualidade',items:[
    'Comprimir com força (≥ 1/3 da profundidade do tórax)',
    'Comprimir depressa: 100–120/min',
    'Permitir a expansão torácica completa',
    'Minimizar as interrupções das compressões',
    'Trocar o reanimador cada 2 min, mais cedo se fadiga',
    'Sem via aérea avançada, rácio compressão-ventilação: **15:2** com 2 reanimadores (pré-puberdade); **30:2** com 2 reanimadores (pós-início da puberdade); **30:2** com 1 reanimador (qualquer idade)',
    'Com via aérea avançada: compressões contínuas e 1 ventilação cada 2–3 s',
    'Monitorizar EtCO₂ e, se disponível, a pressão arterial diastólica invasiva']},
  {t:'Energia de desfibrilhação',items:[
    '1.º choque **2 J/kg**','2.º choque **4 J/kg**',
    'Choques seguintes **≥ 4 J/kg**, máximo 10 J/kg ou dose de adulto']},
  {t:'Fármacos',items:[
    '{{adrenalina|Adrenalina}} IV/IO **0,01 mg/kg** (0,1 mg/mL). Dose máxima 1 mg',
    '{{amiodarona|Amiodarona}} IV/IO **5 mg/kg** em bólus (máx. 300 mg). Pode repetir até 3 doses (máx. 150 mg nas doses seguintes)',
    'ou {{lidocaina_pcr|Lidocaína}} IV/IO **1 mg/kg**']},
  {t:'Via aérea avançada',items:[
    'Intubação endotraqueal ou dispositivo supraglótico',
    'EtCO₂ para confirmar e monitorizar a posição do tubo']},
  {t:'Causas reversíveis (Hs e Ts)',items:[
    'Hipovolemia · Hipóxia · Hidrogénio (acidose) · Hipoglicemia · Hipo/hipercaliemia · Hipotermia',
    'Pneumotórax hipertensivo · Tamponamento cardíaco · Tóxicos · Trombose pulmonar · Trombose coronária']}
 ]},

{id:'brady',grp:'aha',ico:0,tone:'act',
 title:'Bradicardia com pulso',
 sub:'Criança com bradicardia e pulso presente',
 src:'AHA/AAP 2025 — Pediatric Bradycardia With a Pulse Algorithm (versão 250121). Tradução livre.',
 stages:[
  {lab:'1',tone:'act',title:'Criança com bradicardia e pulso'},
  {lab:'?',tone:'q',title:'Compromisso cardiorrespiratório?',items:[
    'Alteração aguda do estado de consciência','Sinais de choque','Hipotensão'],
   branches:[
    {lab:'Não',tone:'info',items:[
      'Identificar e tratar as causas subjacentes: suporte do ABC, considerar oxigénio, considerar ECG de 12 derivações',
      'Observar']},
    {lab:'Sim',tone:'act',items:[
      '**Avaliação e suporte:** via aérea permeável e oxigénio; ventilação com pressão positiva se necessário; monitor cardiorrespiratório; monitorizar o pulso']}]},
  {lab:'?',tone:'q',title:'A bradicardia persiste com compromisso cardiorrespiratório?',branches:[
    {lab:'Não',tone:'info',items:['Identificar e tratar as causas subjacentes; observar']},
    {lab:'Sim',tone:'crit',items:[
      '**Iniciar RCP se FC < 60/min**',
      'Acesso IV/IO',
      '{{adrenalina|Adrenalina}}',
      '{{atropina|Atropina}} se aumento do tónus vagal ou bloqueio AV primário',
      'Identificar e tratar as causas subjacentes',
      'Considerar pacing transtorácico/transvenoso']}]},
  {lab:'↻',tone:'info',title:'Verificar o pulso cada 2 min',items:[
    'Pulso presente: manter a avaliação',
    'Pulso ausente: **ir para o algoritmo de paragem cardiorrespiratória**'],
   go:'pcr'}
 ],
 side:[
  {t:'Doses / detalhes',items:[
    '{{adrenalina|Adrenalina}} IV/IO **0,01 mg/kg** (concentração 0,1 mg/mL). Máximo 1 mg',
    '{{atropina|Atropina}} IV/IO **0,02 mg/kg**. Pode repetir uma vez. Dose mínima 0,1 mg e dose única máxima 0,5 mg']},
  {t:'Causas possíveis',items:[
    'Hipotermia · Hipóxia · Tóxicos/medicamentos · Hipertensão intracraniana',
    'Aumento do tónus vagal · Bloqueio cardíaco · Fisiológica/apropriada']}
 ]},

{id:'taqui',grp:'aha',ico:0,tone:'act',
 title:'Taquiarritmia com pulso',
 sub:'Criança com suspeita de taquiarritmia',
 src:'AHA/AAP 2025 — Pediatric Tachyarrhythmia With a Pulse Algorithm (versão 250117). Tradução livre.',
 stages:[
  {lab:'1',tone:'act',title:'Avaliação inicial e suporte',items:[
    'Via aérea permeável; ventilação com pressão positiva e oxigénio se necessário',
    'Monitor cardiorrespiratório',
    'Acesso IV/IO',
    'ECG de 12 derivações se disponível']},
  {lab:'?',tone:'q',title:'Avaliar o ritmo',branches:[
    {lab:'Provável taquicardia sinusal se…',tone:'info',items:[
      'Ondas P presentes/normais; intervalo RR variável',
      'Lactente: frequência habitualmente < 220/min; criança: habitualmente < 180/min',
      '**Procurar e tratar a causa**']},
    {lab:'Provável taquicardia supraventricular se…',tone:'act',items:[
      'Ondas P ausentes/anormais; intervalo RR não variável',
      'Lactente: habitualmente ≥ 220/min; criança: habitualmente ≥ 180/min',
      'História de variação abrupta da frequência']}]},
  {lab:'?',tone:'q',title:'Compromisso cardiorrespiratório?',items:[
    'Alteração aguda do estado de consciência','Sinais de choque','Hipotensão'],
   branches:[
    {lab:'Sim · QRS estreito (≤ 0,09 s)',tone:'crit',items:[
      'Provável taquicardia supraventricular',
      'Se houver acesso IV/IO: {{adenosina|adenosina}} **ou** cardioversão sincronizada']},
    {lab:'Sim · QRS largo (> 0,09 s)',tone:'crit',items:[
      'Possível taquicardia ventricular',
      '**Cardioversão sincronizada**',
      'Recomenda-se consulta de um especialista antes de outras terapêuticas farmacológicas']},
    {lab:'Não · QRS estreito (≤ 0,09 s)',tone:'act',items:[
      'Provável taquicardia supraventricular',
      'Considerar **manobras vagais**',
      'Administrar {{adenosina|adenosina}} IV/IO']},
    {lab:'Não · QRS largo (> 0,09 s)',tone:'act',items:[
      'Possível taquicardia ventricular ou supraventricular com aberrância',
      'Se o ritmo for regular e o QRS monomórfico, considerar {{adenosina|adenosina}}',
      '**Recomenda-se consulta de um especialista**']}]}
 ],
 side:[
  {t:'Cardioversão sincronizada',items:[
    'Começar com **0,5–1 J/kg**; se não for eficaz, aumentar para **2 J/kg**',
    'Sedar se necessário, mas não atrasar a cardioversão']},
  {t:'{{adenosina|Adenosina}} IV/IO',items:[
    '**0,1 mg/kg** (máx. 6 mg) em bólus rápido, seguido de flush IV',
    'Considerar repetir com **0,2 mg/kg** em bólus rápido seguido de flush IV; dose máxima 12 mg']},
  {t:'Critérios de provável TSV',items:[
    'Ondas P ausentes/anormais · intervalo RR não variável',
    'Lactente habitualmente ≥ 220/min · criança ≥ 180/min · história de variação abrupta da frequência']}
 ]},

{id:'htic',grp:'hff',ico:4,tone:'act',
 title:'Hipertensão intracraniana',
 sub:'Reconhecimento e estabilização inicial',
 src:'Protocolo UCIEP/HFF — Algoritmo Hipertensão Intracraniana, Departamento da Criança e do Jovem.',
 stages:[
  {lab:'Reconhecer',tone:'q',items:[
    'Cefaleia intensa e vómitos','Coma','Hipertensão com taqui/bradicardia',
    'Anisocoria / papiledema','Sinais de herniação transtentorial','Hemiplegia súbita']},
  {lab:'ABC',tone:'act',items:[
    'ABC e monitorização','Cabeça na linha média e elevada a 15–30°',
    'Acesso EV/IO + gasimetria + análises']},
  {lab:'Terapêutica hiperosmolar',tone:'crit',items:[
    '**NaCl 3%** (15 mL NaCl 20% + 85 mL de água destilada)',
    '**5 mL/kg** (máx. 250 mL) em 10–20 min; pode repetir de hora a hora',
    '**TAC emergente**',
    'Contactar neurocirurgia (HSM) e TIP (913076389)']},
  {lab:'AB',tone:'act',title:'Assegurar via aérea',items:[
    '**Indicações de intubação:** hipóxia refractária com máscara de alta concentração; hipoventilação; GCS ≤ 8 ou < 12 com declínio rápido; ausência de reflexos de protecção da via aérea; herniação aguda',
    '**Sequência rápida de intubação**',
    'HD estável e hipertenso: {{propofol|propofol}}* 1 mg/kg + {{fentanil|fentanil}} 1 mcg/kg + {{rocuronio|rocurónio}} 0,6 mg/kg',
    'HD instável: {{ketamina|ketamina}}** 1 mg/kg + {{rocuronio|rocurónio}} 0,6 mg/kg',
    '**Alvos:** normo-oxigenação (SpO₂ 92–97%); normocapnia (pCO₂ 35–45 mmHg, medir EtCO₂); evitar PEEP e PIP elevadas']},
  {lab:'C',tone:'act',items:[
    'Evitar hipovolemia e hipotensão; fluidos isotónicos',
    'Se hipotensão: {{noradrenalina|noradrenalina}}***. Alvo de PAM > 60–80 mmHg (PAM = 1,5 × idade em anos + 55)',
    'Se hipertensão: não utilizar vasodilatadores',
    'Se bradicardia por trauma medular: {{atropina|atropina}} / pacing externo (discutir com a unidade de destino)']},
  {lab:'D',tone:'act',items:[
    'Controlo da temperatura: antipirético; ponderar soro frio se hipertermia mantida',
    'Sedo-analgesia: {{midazolam|midazolam}} 1–5 mcg/kg/min + {{morfina|morfina}} 10–25 mcg/kg/h; rocurónio se necessário',
    'Manter normoglicemia; manter Hb > 7 g/dL',
    'Assegurar estabilidade cervical (se trauma)']},
  {lab:'Etiologia',tone:'info',title:'De acordo com a etiologia da HTIC, discutir com neurocirurgia',items:[
    'Anti-edema vasogénico (tumor, abcesso, hematoma intracraniano): {{dexametasona|dexametasona}} **0,5 mg/kg**',
    'Antiepiléptico profiláctico (TCE, fracturas com deformação, alterações do parênquima): {{levetiracetam|levetiracetam}}, {{fenitoina|fenitoína}}']}
 ],
 notes:[
  '* Vigiar o efeito hipotensor.',
  '** Não utilizar no doente hipertenso nem na hidrocefalia hipertensiva.',
  '*** Se transferência demorada, ponderar acesso central e linha arterial.']},

{id:'convulsivo',grp:'hff',ico:4,tone:'act',
 title:'Mal convulsivo',
 sub:'Tratamento por linhas, com tempos',
 src:'Protocolo UCIEP/HFF — Algoritmo Mal Convulsivo, Departamento da Criança e do Jovem.',
 stages:[
  {lab:'0–5 min',tone:'act',items:[
    'ABC + monitorização; avaliar a temperatura e tratar a febre',
    'Acesso EV + gasimetria + análises (com doseamento de níveis de antiepiléptico)',
    '**Glicemia < 45 mg/dL:** dextrose 10% 2 mL/kg; no adolescente, 1 ampola de dextrose 20%'],
   branches:[
    {lab:'1.ª linha — benzodiazepinas, SEM acesso EV',tone:'crit',items:[
      '{{midazolam|Midazolam}} bucal* 0,2 mg/kg (máx. 10 mg)',
      'Midazolam nasal 0,2 mg/kg (máx. 10 mg)',
      '{{diazepam|Diazepam}} rectal 0,5 mg/kg (máx. 20 mg)',
      'Midazolam IM 0,2 mg/kg (máx. 10 mg)']},
    {lab:'1.ª linha — benzodiazepinas, COM acesso EV',tone:'crit',items:[
      'Diazepam EV 0,2 mg/kg (máx. 10 mg)',
      'Midazolam EV 0,2 mg/kg (máx. 10 mg)']}]},
  {lab:'5–10 min',tone:'act',items:[
    'Reavaliar sinais vitais e ABC; considerar causas tratáveis**',
    '**2.ª dose de benzodiazepina**']},
  {lab:'10–15 min',tone:'act',title:'2.ª linha — terapêutica antiepiléptica',items:[
    'Reavaliar sinais vitais e ABC; 2.º acesso EV (sem acessos EV: colocar IO)',
    '{{fenitoina|Fenitoína}} EV/IO **20 mg/kg** (máx. 1500 mg) em 15–20 min; ritmo máx. 1 mg/kg/min ou 100 mg/min',
    '**ou** {{levetiracetam|Levetiracetam}} EV **40 mg/kg** (máx. 3 g)***; diluir 1:1 com SF e infundir em 5 min']},
  {lab:'15–45 min',tone:'crit',title:'Contactar UCIEP (bip 4640)',items:[
    'Reavaliar sinais vitais e ABC',
    '**Segundo antiepiléptico:** fenitoína ou levetiracetam (o que não tiver sido utilizado e se não for a medicação habitual do doente)',
    '**Alternativas:**',
    '{{fenobarbital|Fenobarbital}} (1.ª escolha no RN) EV 20 mg/kg (máx. 1 g) em 15–20 min; repetir a dose até 40 mg/kg (risco de apneia)',
    '{{acido_valproico|Valproato de sódio}} EV 40 mg/kg (máx. 3 g) em 15 min, seguido de perfusão a 1–5 mg/kg/h']},
  {lab:'> 45 min',tone:'crit',title:'3.ª linha — terapêutica anestésica',items:[
    'Reavaliar sinais vitais e ABC; assegurar a via aérea; **transferir para a UCIEP**',
    '{{midazolam|Midazolam}} EV: bólus 0,2 mg/kg; perfusão a iniciar a 1 mcg/kg/min e aumentar o ritmo cada 15 min até controlo das crises clínicas / EEG',
    'Discutir com a neuropediatria outras terapêuticas']}
 ],
 notes:[
  '* Deve ser colocado entre os dentes cerrados e a mucosa jugal.',
  '** Causas tratáveis: desequilíbrios hidro-electrolíticos, encefalite/meningite, emergência hipertensiva, tóxicos, hemorragia intracraniana, obstrução de shunt ventrículo-peritoneal.',
  '*** Excepto se já for a medicação habitual do doente.']},

{id:'sepsis',grp:'hff',ico:5,tone:'act',
 title:'Sépsis grave',
 sub:'Reconhecimento e ressuscitação em 30 min',
 src:'Protocolo UCIEP/HFF — Algoritmo Sepsis Grave, Departamento da Criança e do Jovem.',
 stages:[
  {lab:'Reconhecer',tone:'q',items:[
    'Febre ou hipotermia','Mau estado geral','Sinais de má perfusão periférica','Doença de alto risco']},
  {lab:'0–10 min',tone:'act',items:[
    'ABC e monitorização; O₂ a 15 L/min em máscara com reservatório',
    '2 acessos periféricos (ou, após 3 tentativas sem sucesso, acesso IO)',
    'Gasimetria + culturas + análises + tipagem',
    'Sem acesso EV: colocar IO; contactar UCIEP',
    '**Antibiótico:** {{ceftriaxona|ceftriaxona}} 100 mg/kg (máx. 2 g/dose) (+ {{vancomicina|vancomicina}} 15 mg/kg se suspeita de meningite)',
    '**1.º bólus:** 20 mL/kg de polielectrolítico, lactato de Ringer ou soro fisiológico em 5–10 min (se cardiopatia, em 20–30 min ou 10 mL/kg)',
    'Tratar alterações da glicemia, do ionograma e da Hb']},
  {lab:'20 min',tone:'act',items:[
    'Reavaliar sinais vitais e ABC; avaliar sinais de sobrecarga hídrica (hepatomegalia, crepitações)',
    'Se mantém má perfusão: avançar',
    '**2.º bólus:** 20 mL/kg de polielectrolítico, lactato de Ringer ou soro fisiológico em 5–10 min (se cardiopatia, em 20–30 min ou 10 mL/kg)']},
  {lab:'30 min',tone:'crit',items:[
    'Reavaliar sinais vitais e ABC; avaliar sinais de sobrecarga hídrica',
    'Se mantém má perfusão: avançar',
    'Ponderar **3.º bólus** de 20 mL/kg (mesmas regras) e **inotrópicos**'],
   branches:[
    {lab:'Choque quente',tone:'act',items:[
      'Vasodilatação periférica, extremidades quentes, TRC < 1 s, pulsos amplos',
      '**{{noradrenalina|Noradrenalina}}:** iniciar 0,05 mcg/kg/min e titular; diluir em soro glicosado',
      'Via central: concentração máx. 16 mcg/mL. Via periférica: diluir 10× mais']},
    {lab:'Choque frio',tone:'act',items:[
      'Vasoconstrição periférica, extremidades frias, TRC > 3–4 s, pulsos filiformes',
      '**{{adrenalina|Adrenalina}}:** iniciar 0,05 mcg/kg/min e titular; diluir em soro fisiológico ou dextrose 5%',
      'Via central: concentração máx. 64 mcg/mL. Via periférica: diluir 10× mais']}]},
  {lab:'Depois',tone:'info',items:[
    'Reavaliar sinais vitais e ABC; ecocardiograma; colocação de acesso central',
    '**Ponderar:** intubação e ventilação mecânica; transfusão de CE se Hb < 7–9 g/dL; corticóide em casos refractários']}
 ]}
];

// Quadro de fármacos de emergência — Protocolo UCIEP/HFF
var ALG_TABLE={
 id:'emerg',grp:'hff',ico:0,tone:'crit',
 title:'Fármacos de emergência e desfibrilhação',
 sub:'Doses, diluições e energias de referência',
 src:'Protocolo UCIEP/HFF — Fármacos de emergência e desfibrilhação, Departamento da Criança e do Jovem.',
 blocks:[
  {t:'Fármacos',rows:[
   {n:'Adrenalina IV',id:'adrenalina',v:[
     ['< 60 kg','0,01 mg/kg','1 mL + 9 mL SF (1:10 000) · 0,1 mL/kg','Bólus'],
     ['≥ 60 kg','1 mg','Pura (1:1000) · 1 mL','']]},
   {n:'Adrenalina ET',id:'adrenalina',v:[['','0,1 mg/kg','Pura (1:1000) · 0,1 mL/kg','Bólus + lavagem 1 mL']]},
   {n:'Atropina',id:'atropina',v:[['','0,02 mg/kg (máx. 0,5 mg)','1 mL + 1,5 mL SF (0,2 mg/mL) · 0,1 mL/kg','Bólus. Dose máx. cumulativa: crianças 1 mg; adolescente 3 mg']]},
   {n:'Bicarbonato de sódio 8,4%',id:'bicarbonato',v:[['','1 mEq/kg (1 mL = 1 mEq)','1:1 em água · 2 mL/kg','Lento (1–2 mL/kg/min)']]},
   {n:'Gluconato de cálcio 10%',id:'calcio_gluconato',v:[['','0,1–0,2 mL/kg (1 mL = 0,45 mEq)','Puro · 0,1–0,2 mL/kg','Bólus lento (20 s)']]},
   {n:'Adenosina',id:'adenosina',v:[['','1.ª dose 0,1 mg/kg (máx. 6 mg); 2.ª dose 0,2 mg/kg (máx. 12 mg)','Pura','Bólus rápido + lavagem']]},
   {n:'Diazepam',id:'diazepam',v:[['','0,1–0,3 mg/kg (máx. 10 mg)','Puro · 0,02–0,06 mL/kg','Bólus + lavagem']]},
   {n:'Amiodarona',id:'amiodarona',v:[
     ['< 60 kg','5 mg/kg (máx. 300 mg)','Máx. 2×','Após o 3.º e o 5.º choque'],
     ['≥ 60 kg','1.ª dose 300 mg; 2.ª dose 150 mg','','']]}
  ]},
  {t:'Desfibrilhador',rows:[
   {n:'Desfibrilhação',v:[
     ['< 60 kg','2 J/kg → 4 J/kg → 4 J/kg','Máx. 200 J',''],
     ['≥ 60 kg','1.º choque 120 J','Restantes: energia máxima do desfibrilhador','']]},
   {n:'Cardioversão sincronizada (contactar cardiologia)',v:[
     ['< 50 kg','1 J/kg → 2 J/kg','',''],
     ['≥ 50 kg · QRS estreito regular','1.º 50 J','2.º e seguintes: energia imediatamente a seguir',''],
     ['≥ 50 kg · QRS estreito irregular','1.º 120 J','2.º e seguintes: energia imediatamente a seguir',''],
     ['≥ 50 kg · QRS largo regular','1.º 100 J','2.º e seguintes: energia imediatamente a seguir',''],
     ['≥ 50 kg · QRS largo irregular','Desfibrilhação','','']]}
  ]},
  {t:'Antídotos',rows:[
   {n:'Naloxona (opióides)',id:'naloxona',v:[['','0,01 mg/kg','','Máx. 0,4 mg EV ou 2 mg nasal']]},
   {n:'Flumazenil (benzodiazepinas)',id:'flumazenil',v:[['','0,01 mg/kg (máx. 0,2 mg/dose)','','Repetir até dose cumulativa máx. 0,05 mg/kg ou 1 mg']]}
  ]},
  {t:'Intubação',rows:[
   {n:'Midazolam',id:'midazolam',v:[['','0,1 mg/kg','','']]},
   {n:'Ketamina',id:'ketamina',v:[['','1–2 mg/kg','','']]},
   {n:'Rocurónio',id:'rocuronio',v:[['','0,6 mg/kg','','']]},
   {n:'Propofol',id:'propofol',v:[['','1–2 mg/kg','','']]}
  ]}
 ]};

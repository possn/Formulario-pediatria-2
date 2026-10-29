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

// ═════ Protocolos adicionais UCIEP / HFF ═════
ALG_GROUPS.push(
 {id:'proc',t:'Técnicas e procedimentos — UCIEP',
  sub:'Protocolos e fichas de consulta rápida da Unidade de Cuidados Intensivos e Especiais de Pediatria.'},
 {id:'lab',t:'Patologia Clínica — instruções de colheita',
  sub:'Serviço de Patologia Clínica, ULS Amadora-Sintra.'}
);

ALGS.push(
{id:'anafilaxia',grp:'hff',ico:5,tone:'crit',
 title:'Anafilaxia',
 sub:'Actuação no Serviço de Urgência',
 src:'PT.0208/D.DCRJ, versão 02 (2022/12/06), Departamento da Criança e do Jovem, HFF. Rever até 2025/12 (prazo de revisão ultrapassado).',
 stages:[
  {lab:'ABCDE',tone:'act',title:'Avaliar ABCDE',items:[
    'Monitorizar FC, PA, FR e SpO₂; oxigénio suplementar; acesso venoso periférico',
    'Prioridade: estabilidade respiratória e circulatória']},
  {lab:'Já',tone:'crit',title:'{{adrenalina|Adrenalina}} IM, 1.ª linha, em todos os doentes',items:[
    'Face antero-lateral da coxa, mesmo por cima da roupa',
    'Solução 1:1000 (1 mg/mL): **0,01 mg/kg/dose**',
    'Máximo **0,3 mg/dose** (< 12 anos ou < 40 kg) ou **0,5 mg/dose** (> 12 anos ou > 40 kg)',
    'Usar o auto-injector da criança se estiver acessível e por usar',
    'Registar a hora e a dose. Não há contra-indicações absolutas',
    '**Remover o alergénio**'],
   branches:[
    {lab:'Se hipotensão ou choque',tone:'crit',items:[
      'Posição de Trendelenburg',
      'Bólus de soro fisiológico **20 mL/kg** EV (texto do protocolo: 10–20 mL/kg em 5–10 min)',
      'Chamar o médico da UCIP']},
    {lab:'Se estridor ou pieira',tone:'act',items:[
      'O₂ suplementar 10–15 L/min; cabeceira elevada',
      'Estridor: {{adrenalina_neb|adrenalina nebulizada}} 2–5 mL da ampola de 1 mg/mL',
      'Pieira: {{salbutamol|salbutamol}} nebulizado 0,03 mL/kg/dose (mín. 0,3 mL; máx. 1 mL)']}]},
  {lab:'5–10 min',tone:'crit',title:'Sem resposta',items:[
    '**Repetir adrenalina IM** de 5 em 5 min (até 3 administrações)',
    'Hipotensão mantida: repetir o bólus de soro fisiológico EV',
    'Medicado com β-bloqueador ou hipotensão persistente: {{glucagon|glucagon}} **30 mcg/kg/dose** EV (máx. 1 mg)']},
  {lab:'Em paralelo',tone:'act',items:[
    '**Anti-histamínico** (se prurido, urticária, angioedema; eficácia não comprovada em monoterapia; evitar EV pelo risco de hipotensão):',
    '2.ª geração (preferido): {{cetirizina|cetirizina}} 0,25 mg/kg/dose oral (máx. 10 mg); desloratadina 2–5 anos 1,25 mg, 6–11 anos 2,5 mg, ≥ 12 anos 5 mg',
    '1.ª geração: {{clemastina|clemastina}} 0,025 mg/kg/dose IM (máx. 2 mg); {{hidroxizina|hidroxizina}} 1 mg/kg/dose IM ou oral (máx. 100 mg)',
    '**Corticoide:** {{prednisolona|prednisolona}} 1–2 mg/kg/dose oral ou EV (máx. 60 mg); metilprednisolona 1–2 mg/kg/dose EV (máx. 250 mg); {{hidrocortisona|hidrocortisona}} 5 mg/kg/dose EV (máx. 200 mg)']},
  {lab:'Refractária',tone:'crit',title:'Sem resposta: UCI',items:[
    'Perfusão de {{adrenalina|adrenalina}} EV a **0,1 mcg/kg/min**, aumentando 0,1 mcg/kg/min cada minuto até **1,5 mcg/kg/min**',
    'Se não houver via EV, usar a via intraóssea']},
  {lab:'Qualquer altura',tone:'crit',items:[
    'Dificuldade respiratória refractária ou edema da glote: **intubação orotraqueal**',
    'Paragem cardiorrespiratória: suporte avançado de vida']}
 ],
 side:[
  {t:'Diagnóstico (clínico). Muito provável com 1 de 3 critérios',items:[
    '1) Início súbito de afectação da pele e/ou mucosas **e** compromisso respiratório (dispneia, sibilância, broncospasmo, estridor, ↓ DEMI, hipoxemia) **ou** hipotensão / disfunção de órgão terminal (hipotonia, síncope, incontinência)',
    '2) Início súbito após exposição a provável alergénio com **2 ou mais** de: pele/mucosas; respiratório; hipotensão ou sintomas associados; sintomas gastrointestinais súbitos (cólica, vómitos)',
    '3) Hipotensão após exposição a alergénio conhecido (minutos a horas)',
    'A ausência de pele/mucosas não afasta o diagnóstico nem deve atrasar a terapêutica',
    'Triptase sérica até 6 h do início, idealmente nos primeiros 15–60 min. A sua normalidade não exclui o diagnóstico']},
  {t:'Internamento e vigilância',items:[
    'Todos os doentes têm indicação para internamento (risco de reacção bifásica)',
    'Vigilância hospitalar 6–8 h, ou 12–24 h se compromisso cardiocirculatório',
    'UCI se via aérea de risco (obstrução laríngea / angioedema em rápida progressão) ou instabilidade cardiorrespiratória com necessidade de adrenalina EV']},
  {t:'Após a alta',items:[
    'Auto-injector de adrenalina: **< 25 kg: 0,15 mg; ≥ 25 kg: 0,3 mg**',
    '2 auto-injectores se asma grave + alergia alimentar, mastocitose, mau acesso a cuidados, anafilaxia quase fatal prévia, ou mais de 1 dose IM necessária no episódio',
    'Corticoide sistémico e anti-histamínico de 2.ª geração durante 3–5 dias',
    'Consulta de imunoalergologia pediátrica; ensino de evicção, reconhecimento, técnica do auto-injector e plano de acção escrito; registo no boletim de saúde']},
  {t:'Factores de risco / anamnese',items:[
    'Asma não controlada, doença cardiovascular, mastocitose, patologia neurológica ou psiquiátrica',
    'β-bloqueantes, IECA, álcool dificultam a resposta à adrenalina ou o reconhecimento',
    'Desencadeantes: alimentos (mais frequentes em pediatria), fármacos (β-lactâmicos, AINE), veneno de himenópteros, látex, exercício, frio']}
 ]},

{id:'asma',grp:'hff',ico:1,tone:'act',
 title:'Mal asmático',
 sub:'Admissão e tratamento na UCIEP',
 src:'PT.0210/E.UCIEP, versão 03 (2024/10/23), Unidade de Cuidados Intensivos e Especiais de Pediatria, HFF. Rever até 2027/10.',
 stages:[
  {lab:'1',tone:'q',title:'Avaliar a gravidade',items:[
    'Score clínico (Pulmonary Score) e SpO₂ (tabelas abaixo). Se houver discordância, vale o de maior gravidade',
    '**Falência respiratória iminente:** alteração da consciência; incapacidade para falar; ausência de murmúrio vesicular; cianose; diaforese; intolerância ao decúbito; pulso paradoxal > 10 mmHg (criança) ou > 15 mmHg (adolescente); pCO₂ normal ou elevada em criança taquipneica',
    '**Risco de internamento em UCI:** admissão prévia em UCIP, ventilação mecânica ou deterioração rápida; convulsão ou síncope na crise; desencadeante alimentar; > 2 embalagens/mês de β₂ de curta duração; baixa adesão; patologia psiquiátrica']},
  {lab:'2',tone:'act',title:'Cuidados gerais',items:[
    'Posição semi-sentada, cabeceira a 30–45°; monitorização cardiorrespiratória',
    'Oxigénio humidificado para SpO₂ > 92%',
    'Corrigir a desidratação; aporte hídrico 80–100% das necessidades basais',
    'Vigiar hipocaliemia associada ao salbutamol']},
  {lab:'3',tone:'act',title:'Intervenção farmacológica — Tabela 1',items:[
    '{{salbutamol|Salbutamol}} nebulizado (5 mg/mL): **0,03 mL/kg** (mín. 0,3 mL; máx. 1 mL). Inalado (DPI/MDI em câmara expansora, 100 mcg/dose): **0,5 puff/kg/dose** (máx. < 25 kg: 5 puff; > 25 kg: 10 puff). Pode repetir cada 20 min e depois espaçar 1–2 h',
    '{{ipratropio|Brometo de ipratrópio}} nebulizado (250 mcg/2 mL) ou inalado (20 mcg/dose): < 1 ano 125 mcg; 1–5 anos ou < 20 kg 250 mcg; > 5 anos ou > 20 kg 500 mcg. Cada 6 h, preferir junto com salbutamol; retirar se não houver resposta após 2–3 doses',
    '**Corticoide sistémico:** {{prednisolona|prednisolona}} PO, inicial 1–2 mg/kg (máx. 60 mg), manutenção 1–2 mg/kg/dia em 2–3 tomas (máx. 60 mg/dia). Metilprednisolona EV, inicial 2 mg/kg (máx. 60 mg), manutenção 2–4 mg/kg/dia em 4 tomas (máx. 60–80 mg/dia). Ciclos ≤ 5–7 dias; se > 7 dias, retirada lenta']},
  {lab:'4',tone:'crit',title:'Escalada — Tabela 2',items:[
    '**Salbutamol nebulizado contínuo:** diluir 10 mL de salbutamol (5 mg/mL) até 50 mL de SF (1 mg/mL); 0,3–0,5 mg/kg/h; O₂ 7 L/min; máx. 10–20 mg/h se < 30 kg, 15–30 mg/h se > 30 kg. Reavaliar cada hora, máx. 4 h. Eleva CK transitoriamente',
    '{{magnesio|Sulfato de magnésio}} EV: inicial **25–50 mg/kg** (máx. 2 g em 50 mL SF) em 20–30 min; depois, em casos graves, perfusão 20–30 mg/kg/h (máx. 2 g/h), mantendo Mg 3–5,5 mg/dL. Vigiar hipotensão; Mg > 9 mg/dL: náuseas, rubor, sonolência, fraqueza; > 12 mg/dL: depressão respiratória e arritmias',
    '{{aminofilina|Aminofilina}} EV: bólus **5–6 mg/kg** (máx. 240 mg) em 20 min; perfusão (máx. 900 mg/dia): 1–9 anos 1 mg/kg/h; > 9 anos 0,8 mg/kg/h. Alvo 10–15 mcg/mL (1 h após a dose inicial, às 12 h e cada 24 h)',
    '{{ketamina|Ketamina}} EV: bólus 1–2 mg/kg; perfusão 1 mg/kg/h ou 20–60 mcg/kg/min. Preferir se sedação para ventilação. Raro: broncorreia (ponderar {{atropina|atropina}} anti-sialorreica 0,01 mg/kg/dose cada 4–6 h EV)',
    '**Salbutamol EV:** perfusão 0,5–2 mcg/kg/min; bólus inicial opcional 5–10 mcg/kg em 30 min (máx. 250 mcg). Efeitos: hipocaliemia, taquiarritmias, acidose láctica',
    '{{heliox|Heliox}}: 70% heliox + 30% oxigénio; optimiza o salbutamol nebulizado em zonas pouco ventiladas (protocolo específico)']},
  {lab:'5',tone:'act',title:'Ventilação não invasiva (considerar precocemente)',items:[
    'Mesmo sem critérios gasométricos (pCO₂ 40–50 mmHg e/ou necessidade crescente de O₂). Preferir ventilador específico de VNI',
    'BiPAP (S/T): PEEP 4–5 cmH₂O; PIP 8–10 cmH₂O, subindo de 2 em 2 (máx. 14–20); FR de back-up 2–5 ciclos abaixo da do doente',
    'Salbutamol contínuo em peça em T no ramo inspiratório',
    'Sedação para adaptação: hidrato de cloral, midazolam ou propofol em dose baixa, ou perfusão de ketamina']},
  {lab:'6',tone:'crit',title:'Ventilação invasiva',items:[
    '**Intubar se:** paCO₂ persistentemente > 50–55 mmHg com acidose; e/ou paO₂ < 60 mmHg com FiO₂ > 60% sob VNI; ou alteração significativa da consciência; ou paragem respiratória iminente',
    'Indução: preferir ketamina (± midazolam), ou propofol com relaxante muscular (vecurónio). Tubo grande com cuff',
    'Ambu a frequência baixa e com expiração completa (risco de air trapping). Considerar carga de 10 mL/kg de SF antes da intubação (risco de disfunção do VD, mimetiza tamponamento)',
    '**Parâmetros iniciais:** PRVC (se PIP elevadas tolerada e P meseta < 35 cmH₂O) ou volume controlado. FR 10–20 rpm, I:E 1:3–5, PEEP 4–5 (máx. 10 cmH₂O), Vt 6–8 mL/kg, pico < 40 cmH₂O ou P meseta < 35 cmH₂O',
    'Hipotensão na ventilação: pensar em hiperinsuflação dinâmica. Prova de apneia 30–40 s; se a TA subir, diminuir a FR e expandir a volémia (10 mL/kg)',
    'Hipercapnia permissiva desde que o pH seja compensado. Desmame em pressão de suporte',
    'Alta frequência oscilatória na acidose refractária por hipoventilação alveolar (estratégia open airway)']}
 ],
 tables:[
  {t:'Pulmonary Score',head:['Pontos','FR < 6 anos','FR > 6 anos','Sibilância','Tiragem'],rows:[
    ['0','< 30','< 20','Não','Não'],
    ['1','31–45','21–35','Final da expiração','Ligeira'],
    ['2','46–60','36–50','Toda a expiração','Moderada'],
    ['3','> 60','> 50','Inspiração e expiração (audível sem estetoscópio)','Grave']]},
  {t:'Gravidade da crise',head:['Gravidade','Score clínico','SpO₂'],rows:[
    ['Leve','0–3','> 94%'],['Moderada','4–6','91–94%'],['Grave','7–9','< 91%']]}
 ]},

{id:'pacemaker',grp:'proc',ico:0,tone:'crit',
 title:'Pacemaker transcutâneo',
 sub:'Indicações, colocação e programação (monitor-desfibrilhador Zoll)',
 src:'PT.0216/E.UCIEP, versão 03 (2024/10/23), e DA.0448/E.UCIEP, versão 04 (2024/11/18, Programação e colocação de pacemaker externo), UCIEP, HFF.',
 stages:[
  {lab:'Indicação',tone:'q',items:[
    'Bradidisritmia com compromisso hemodinâmico que não responde à terapêutica vagolítica, em particular **BAV de 2.º grau tipo II e BAV de 3.º grau (completo)**. Aplicar de imediato nos BAV de alto grau',
    'Na criança, a bradicardia mais frequente é a sinusal por hipóxia: a oxigenação e a ventilação resolvem a maioria dos casos',
    'Pediatria: BAV após cirurgia cardíaca; BAV congénito; miocardite viral; BAV completo do RN por lúpus materno; BAV por toxinas ou fármacos; falha de pacemaker permanente',
    'Se não houver acesso EV, pode tentar-se {{atropina|atropina}} enquanto se prepara o pacemaker. Se for ineficaz ou o doente estiver gravemente sintomático, iniciar de imediato',
    'Contra-indicações relativas: hipotermia grave; doente confuso em que é difícil manter as pás']},
  {lab:'1',tone:'act',title:'Escolher as pás auto-adesivas',items:[
    'Até aos 8 anos, preferir pás pediátricas. Após os 8 anos ou 25 kg podem usar-se pás de adulto',
    'Sem pás pediátricas: pás de adulto em posição antero-posterior',
    'No Zoll, a monitorização simultânea exige eléctrodos específicos (OneStep pacing / One Step complete). Sem eles, monitorizar com eléctrodos de ECG e aplicar as pás sem contacto entre ambos']},
  {lab:'2',tone:'act',title:'Segurança do tórax: mnemónica NACO',items:[
    '**N**itratos (pensos), **Á**gua, **C**ontacto (pelos, piercings, pacemakers), **O**xigénio']},
  {lab:'3',tone:'act',title:'Ligar e colocar',items:[
    'Desligar o cabo das pás manuais e ligá-lo às pás auto-adesivas (algumas exigem adaptador amarelo/cinzento)',
    'Sem gel. Posição **antero-posterior** (preferida: liberta o tórax para desfibrilhação com pás manuais) ou antero-lateral esquerda',
    'Garantir bom contacto; tricotomia se necessário']},
  {lab:'4',tone:'act',title:'Programar',items:[
    'Seleccionar o modo **“estímulo”**',
    'Modo **síncrono** (usa a frequência do doente e só estimula quando não detecta complexos). Começar geralmente por aqui',
    '**Frequência:** semelhante à basal do doente, ajustada ao grupo etário',
    '**Energia (mA):** no adulto, a captura costuma exigir 65–100 mA. Na prática, subir até ver um QRS após cada spike (**captura**) e depois somar **2 mA** como margem de segurança']},
  {lab:'5',tone:'crit',title:'Confirmar eficácia',items:[
    'Palpar o pulso, de preferência **femoral** (o carotídeo é difícil de avaliar pela contractura muscular)',
    'Artefactos de movimento podem simular QRS sem haver captura']},
  {lab:'6',tone:'info',title:'Conforto e limitações',items:[
    'A dor deve-se à contracção muscular. Considerar sedação/analgesia, atendendo à depressão respiratória',
    'A captura eficaz não é possível em todos os doentes e pode perder-se com o movimento. O pacemaker transcutâneo é temporário, até um transvenoso ou permanente']}
 ]},

{id:'ino',grp:'proc',ico:1,tone:'act',
 title:'Óxido nítrico inalado',
 sub:'Indicações, doses, desmame e monitorização',
 src:'PT.0534/E.UCIEP, versão 01 (2025/03/18), UCIEP, HFF. Rever até 2028/03.',
 stages:[
  {lab:'Critérios',tone:'q',title:'Iniciar iNO se',items:[
    '**Insuficiência respiratória aguda / PARDS:** IO > 15 e/ou P/F ≤ 100 (e/ou P plateau > 30 cmH₂O)',
    '**RN com HTPP** (≥ 34 semanas): hipoxemia refractária a FiO₂ 100% + evidência clínica/ecográfica de HTP, suporte ventilatório optimizado e **IO ≥ 25**. Diferença de saturação pré/pós-ductal > 5–10%; a sua ausência não exclui HTPPRN',
    'Evidência de HTP com disfunção do VD no ecocardiograma; HTP associada a cirurgia cardíaca',
    '**Exclusão (HTPPRN):** cardiopatia com disfunção do VE e shunt D-E, ou fluxo sistémico dependente de fluxo pulmonar']},
  {lab:'Início',tone:'act',title:'Começar a 20 ppm',items:[
    'Administrar no ramo inspiratório do ventilador, em qualquer modo',
    'HTP após cirurgia cardíaca: iniciar a 10 ppm e subir até 20 ppm se necessário',
    'Resposta geralmente em 30–60 min; pode só ser evidente 4–5 h depois. Gasimetria arterial aos 30 min'],
   branches:[
    {lab:'Resposta positiva: ↑PaO₂ ≥ 20% ou ↑SpO₂ ≥ 5%',tone:'act',items:[
      'Manter 20 ppm e desmamar a FiO₂ para 50–60% em 4 h',
      'Depois iniciar o desmame do iNO (abaixo)']},
    {lab:'Sem resposta: ↑PaO₂ < 20% ou ↑SpO₂ < 5%',tone:'crit',items:[
      'Subir até 20 ppm e, eventualmente, considerar 40 ppm (HTPPRN). Doses superiores não são mais eficazes e têm mais efeitos secundários',
      'Se continuar sem resposta: **suspender o iNO**']}]},
  {lab:'Desmame',tone:'act',title:'Com FiO₂ < 50–60%, cada passo durante 4 h',items:[
    '20 → **10 ppm** → **5 ppm** → **2 ppm** → aumentar a FiO₂ em 10% e suspender',
    'Não tolera (↓PaO₂ ≥ 20% ou ↓SpO₂ ≥ 5%, mantendo FiO₂ < 50–60%): voltar à dose anterior',
    'Se falharem 2 tentativas de desmame, adiar nova tentativa por 24 h',
    'Desmame lento atenua a hipoxemia/HTP de rebound']},
  {lab:'Vigiar',tone:'crit',title:'Monitorização e toxicidade',items:[
    'Dose administrada: alarme a ± 2 ppm da prescrita',
    '**NO₂ < 0,5 ppm** (alarme > 0,5 ppm: inspeccionar o sistema, recalibrar, reduzir iNO/FiO₂ se possível). **NO₂ > 1 ppm: reduzir o iNO**',
    '**Metahemoglobina < 5%**, de 24 em 24 h. Se > 5%, reduzir o iNO. Tratamento: reduzir iNO, FiO₂ 100%, azul de metileno 1–2 mg/kg/dose (0,1–0,2 mL/kg da solução a 1%)',
    'Outros: inibição da agregação plaquetária; lesão pulmonar por NO₂; disfunção das cavidades esquerdas (↑ retorno venoso pode não ser tolerado)',
    'Aspirar secreções com sistema fechado e válvula unidirecional, para evitar despressurização. Calibrar os sensores de gás de 24 em 24 h']}
 ],
 notes:[
  'Montagem do aparelho (SoKINOX), sistema de emergência com ambu e Minikinox: seguir o guia no ecrã e o protocolo PT.0534 (pontos 5.5 a 5.8).',
  'Azul de metileno: 1–2 mg/kg/dose (o PDF original escreve mEq/kg por lapso).']},

{id:'hdfvvc',grp:'proc',ico:2,tone:'act',
 title:'Hemodiafiltração contínua (HDFVVC)',
 sub:'Prismaflex: indicações, filtro, acesso, prescrição e complicações',
 src:'PT.0461/E.UCIEP, versão 02 (2024/10/23), Técnicas de substituição renal contínuas em pediatria, UCIEP, HFF. Rever até 2027/10.',
 stages:[
  {lab:'Indicações',tone:'q',items:[
    '**Renais:** LRA com instabilidade hemodinâmica; LRA oligo-anúrica hipervolémica; hipervolemia refractária a diuréticos; alterações electrolíticas graves (K, Ca, Na, Mg); acidose metabólica grave; LRA isolada em que a diálise peritoneal ou a hemodiálise convencional estejam contra-indicadas',
    '**Não renais:** sépsis grave com falência multiorgânica; erros hereditários do metabolismo com acumulação de metabolitos (hiperamoniemia, acidúria orgânica, leucinose); síndrome de lise tumoral e rabdomiólise']},
  {lab:'Técnica',tone:'act',title:'Escolha da técnica (Prismaflex)',items:[
    '**HDFVVC** (convecção + diálise): a mais usada em pediatria; iniciar sempre por esta (priming mais completo)',
    'HFVVC (convecção), ultrafiltração (hipervolemia sem insuficiência renal) e hemodiálise (IRA sem hipervolemia)']},
  {lab:'Filtro',tone:'act',title:'Filtro e acesso vascular',items:[
    'Volume extracorporal (circuito + filtro) ≤ 10% da volémia (≈ 8 mL/kg); superfície da membrana ≤ superfície corporal',
    'Acesso central do maior calibre possível, idealmente jugular interna; alternativa femoral',
    'Com citrato: cateter de triplo lúmen, ou uma via para a infusão de cálcio',
    'Lúmens sem uso: heparina pura (25 000 UI/5 mL); alternativa alteplase 1 mg/mL ou citrato trissódico 4% (se trombocitopenia induzida por heparina)']},
  {lab:'Fluidos',tone:'act',title:'Soluções (as bolsas duram 24 h)',items:[
    '**Com citrato:** pré-bomba (balança branca) Prismocitrate 18/0; diálise (verde) Prism0cal B22; reposição pós-filtro (roxa) Prismasol 2 ou 4, ou Phoxilium se fósforo normal; efluente (amarela). **Os fluidos pré-filtro e de diálise não podem conter cálcio**',
    '**Com heparina:** Prismasol 2 ou 4, Phoxilium (se fósforo normal) ou Hemosol B0 (K 0) em PBP, diálise e reposição; usar o mesmo soluto na reposição e na diálise',
    'Hipercaliemia: Prismasol 2 ou Hemosol B0. K normal: Prismasol 4. Fósforo elevado: Prismasol; normal: Phoxilium',
    'Com insuficiência hepática, hipóxia grave, sépsis ou RN, o tampão tem de ser bicarbonato. Não suplementar bicarbonato e cálcio na mesma bolsa (precipita); preferir corrigir directamente no doente',
    'Segundo o anexo 1 do protocolo, não existem no HFF o Phoxilium nem o Prism0cal (sem K)']},
  {lab:'Priming',tone:'act',items:[
    'HF 20: 500 mL de SF. ST 60 e ST 100: 1000 mL de SF',
    'ST 150: 2 × 1000 mL de SF, com heparina 5000 UI só na 1.ª bolsa',
    '**< 10 kg, RN, lactentes ou instáveis:** melhor opção, transfundir concentrado eritrocitário imediatamente antes e durante o início da técnica; alternativa, 2.º priming com CE, plasma ou albumina 5%',
    'Seringa de 50 mL de **gluconato de cálcio 10% não diluído** (5 ampolas) com linha de cálcio Prismaflex CA 250, ligada a uma via central isolada',
    'Citrato inicial **3 mmol/L**; compensação de cálcio 100% (90% se Cai > 1,3; corrigir antes se Cai < 1). Compensação ajustável entre 30–200%']},
  {lab:'Prescrição',tone:'crit',title:'Iniciar e programar',items:[
    'Parâmetros pela tabela de prescrição (abaixo). Os valores por kg dos doentes < 20 kg são muito elevados e úteis em intoxicações (leucinose, hiperamoniemia); noutros casos reduzir diálise e reposição',
    'Ultrafiltrado (mL/h) = balanço hídrico desejado + entradas previstas − saídas previstas. Iniciar baixo e subir até ao alvo conforme a tolerância',
    '**Fracção de filtração < 25%.** Não colocar torneiras de 3 vias nos lúmens do cateter em crianças pequenas',
    'Aquecer o doente com sistemas externos é mais eficaz que aquecer o circuito']},
  {lab:'Problemas',tone:'info',title:'Filtro, retorno e recirculação',items:[
    'Troca de filtro programada cada 24 ou 72 h, ou se houver sinais de coagulação',
    'Retorno de sangue com fluxo lento (10–20 mL/min) para evitar hipervolemia súbita',
    'Recirculação (1–2 h) com **soro fisiológico** (recomendada) para pequenos procedimentos ou transporte; não recircular com sangue',
    'Mudar bolsas sempre com a opção “mudar sacos” e sem mexer nas balanças',
    'Pressão do filtro > 250 mmHg: mudar o filtro. Alarmes de pressões e ar: ver a ficha de citrato']},
  {lab:'Outros',tone:'info',items:[
    'Nutrição: calorias como no doente crítico; proteína 2–3 g/kg/dia. Hipofosfatemia frequente (suplementar)',
    'Fármacos: ajustar dose/intervalo nos fármacos de eliminação renal e baixa ligação às proteínas; sem alteração se HDFVVC por indicação não renal e função renal conservada',
    'Complicações: acesso vascular, coagulação do circuito, hemorragia, hipovolemia na conexão, anemia, hipotermia, alterações electrolíticas e do balanço hídrico, infecção']}
 ],
 tables:[
  {t:'Seleção do filtro (Prismaflex)',head:['Filtro','Membrana','Priming','Bomba de sangue','Peso'],rows:[
    ['HF 20','0,2 m²','62 mL','20–100 mL/min','3–15 kg'],
    ['M/ST 60','0,6 m²','93 mL','50–180 mL/min','11–30 kg'],
    ['M/ST 100','0,9 m²','152 mL','75–400 mL/min','30–50 kg'],
    ['M/ST 150','1,5 m²','189 mL','100–450 mL/min','> 50 kg']]},
  {t:'Cateter de diálise',head:['Peso','Calibre'],rows:[
    ['RN / pequenos lactentes','Dois CVC de 1 lúmen (4–5 Fr) em veias diferentes'],
    ['< 5 kg','5 Fr, 2 lúmens'],['5–15 kg','6,5–7 Fr, 2 lúmens'],['> 15 kg','8–11 Fr, 2 lúmens']]},
  {t:'Prescrição inicial (tabela orientativa)',head:['Peso (kg)','Bomba sangue (mL/min)','Diálise (mL/h)','Reposição pós (mL/h)','Dose total (mL/kg/h)'],rows:[
    ['< 10','50','500','50','172*'],['10','60','600','50','103*'],['20','70','700','80','62*'],
    ['30','80','800','120','48'],['40','90','900','160','42'],['50','100','1000','200','37'],
    ['60','110','1100','400','37'],['70','120','1200','500','35'],['80','130','1300','500','33']],
   note:'* Valores muito acima do normal, úteis em intoxicação exógena ou endógena (leucinose, hiperamoniemia).'}
 ]},

{id:'citrato',grp:'proc',ico:2,tone:'act',
 title:'Anticoagulação regional com citrato',
 sub:'Ficha de consulta rápida (Prismaflex)',
 src:'DA.0618/E.UCIEP, versão 02 (2022/09/02), Ficha de consulta rápida, UCIEP, HFF; PT.0461/E.UCIEP v02 (anexo 3).',
 stages:[
  {lab:'Alvos',tone:'q',items:[
    '**Cai pós-filtro 0,25–0,35 mmol/L**; **Cai do doente 1–1,3 mmol/L**',
    'Ca total do doente (não corrigido) 8,8–10 mg/dL (2,2–2,5 mmol/L); rácio Ca total / Cai < 2,5 (4 mg/dL = 1 mmol/L)']},
  {lab:'Material',tone:'act',items:[
    'Cateter de diálise ou 2 CVC; set Prismaflex; seringa de 50 mL com luer; linha de cálcio Prismaflex CA 250; 5 ampolas de gluconato de cálcio 10%; 1–2 bolsas de SF 1000 mL (+ HNF 5000 UI se filtro ST 150)',
    'Bolsas: PBP **Prismocitrate 18/0** (balança branca); diálise **Prism0cal B22** (verde); reposição pós-filtro **Prismasol 4 / Prismasol 2 / Phoxilium** (roxa); efluente (amarela)',
    'Modalidade CVVHDF; citrato 3 mmol/L e compensação de cálcio 100% (pré-definidos)']},
  {lab:'Antes',tone:'act',title:'BQ completa antes de iniciar',items:[
    'Ca < 1 mmol/L ou Mg < 0,65 mmol/L: corrigir EV antes de começar',
    'Priming: filtros HF 20, ST 60, ST 100 só com SF (500–1000 mL); ST 150 com heparina no 1.º litro, se não houver contra-indicação',
    'Ligar a linha de cálcio a um CVC sem outras perfusões (ou no retorno, em último caso)']},
  {lab:'Monitorizar',tone:'crit',title:'Calendário de monitorização',items:[
    'Cai pós-filtro e do doente aos 30 min',
    'Cai pós-filtro: cada 30 min até estável (o PT.0461 indica cada 1–2 h), depois cada 6–8 h (PT.0461: cada 8 h)',
    'Cai sistémico: cada 30 min até estável, depois cada 6–8 h',
    'Ca total e rácio Ca total/Cai: às 6 h e depois diariamente',
    'BQ de 24 em 24 h: gases, Ca total, magnésio, fósforo, função hepática']}
 ],
 tables:[
  {t:'Prescrição inicial (tabela orientativa)',head:['Peso (kg)','Bomba sangue (mL/min)','Diálise (mL/h)','Reposição pós (mL/h)','Dose total (mL/kg/h)'],rows:[
    ['< 10','50','500','50','172*'],['10','60','600','50','103*'],['20','70','700','80','62*'],
    ['30','80','800','120','48'],['40','90','900','160','42'],['50','100','1000','200','37'],
    ['60','110','1100','400','37'],['70','120','1200','500','35'],['80','130','1300','500','33']],
   note:'* Valores muito acima do normal, úteis em intoxicação exógena ou endógena.'},
  {t:'Ajuste da dose de citrato (por Cai pós-filtro)',head:['Cai pós-filtro (mmol/L)','Alteração da dose de citrato'],rows:[
    ['> 0,45','↑ 0,3 mmol/L'],['0,41–0,45','↑ 0,2 mmol/L'],['0,36–0,40','↑ 0,1 mmol/L'],
    ['0,25–0,35','Manter'],['0,20–0,24','↓ 0,1 mmol/L'],['0,15–0,19†','↓ 0,2 mmol/L'],['< 0,15','↓ 0,3 mmol/L']],
   note:'† A ficha escreve «0,23–0,15», que se sobrepõe à linha anterior; interpretado como 0,15–0,19. Confirmar na ficha original.'},
  {t:'Ajuste da compensação de cálcio (por Cai do doente)',head:['Cai do doente (mmol/L)','Alteração da compensação'],rows:[
    ['< 0,75','Correcção EV + ↑ 10%'],['0,75–0,79','↑ 10%'],['0,80–0,99','↑ 5%'],
    ['1,0–1,3','Manter'],['1,31–1,45','↓ 5%'],['> 1,45','↓ 10%']]},
  {t:'Alterações ácido-base',head:['Gasimetria','Causa','Acção'],rows:[
    ['Alcalose metabólica (pH > 7,45 com ↑HCO₃, aparecimento paulatino)','Excesso de citrato metabolizado em bicarbonato no fígado','↑ fluxo de diálise 25–50%. Se não resolver, aceitar Cai pós-filtro até 0,45'],
    ['Acidose metabólica (pH < 7,45 com ↓HCO₃)','Função hepática normal; excesso de bicarbonato dialisado','↓ fluxo de diálise 25–50%'],
    ['Acidose com AG elevado e rácio Ca total/Cai > 2,5','Acumulação de citrato (disfunção hepática)','Suspender o citrato 20 min e recomeçar a 70%; manter o cálcio; se persistir, duplicar a diálise, reduzir a bomba de sangue ou passar a heparina']]},
  {t:'Problemas frequentes',head:['Alarme','Resolução'],rows:[
    ['Pressão de entrada ↓ / retorno ↑','Verificar posição do doente e das linhas; permeabilidade do cateter; trocar os ramos azul e vermelho (atenção ao Ca do doente)'],
    ['Pressão do filtro ↑','Reduzir o fluxo de sangue; verificar as linhas; > 250 mmHg trocar o filtro'],
    ['Pressão de queda de filtro ↑','Verificar câmara de ar, fluxo excessivo, linhas dobradas; se não resolver, retornar o sangue e trocar o filtro'],
    ['Ar no circuito','Clampar o retorno acima da colheita, puncionar a membrana azul com agulha 20G e aspirar ar e sangue'],
    ['Sangue no efluente','Confirmar com tira reactiva de urina. Com sangue, filtro novo; sem sangue (o mais frequente), verificar ar na linha do ultrafiltrado']]}
 ]},

{id:'bis',grp:'proc',ico:4,tone:'act',
 title:'Monitorização BIS',
 sub:'Índice bispectral na sedação em cuidados intensivos',
 src:'PT.0583/E.UCIEP, versão 01 (2025/02/27), UCIEP, HFF. Rever até 2028/02. Referências: SCCM PANDEM 2022 (Smith HAB et al., Pediatr Crit Care Med 2022).',
 stages:[
  {lab:'Colocar',tone:'act',items:[
    'Limpar a testa com álcool e secar bem. Sensor pediátrico específico',
    'Eléctrodo superior no centro da testa; inferiores alinhados acima das sobrancelhas; temporal entre o canto do olho e a linha do cabelo',
    'Verificar o **IQS ≥ 90%** antes de interpretar']},
  {lab:'Ler',tone:'q',title:'Valores de referência',items:[
    '**90–100:** criança acordada e consciente',
    '**40–60:** sedação profunda ou anestesia adequada',
    '**> 60:** sedação insuficiente ou despertar iminente: ajustar o sedativo',
    '**< 40:** sedação excessiva ou supressão cerebral: reduzir o hipnótico',
    '**0:** supressão total da actividade eléctrica cortical',
    'Correlacionar sempre com a clínica, a hemodinâmica e escalas comportamentais (COMFORT-B, Ramsay)']},
  {lab:'Qualidade',tone:'info',title:'Indicadores do monitor',items:[
    '**IQS** (qualidade do sinal): vazio (< 15%) sem BIS; 1–2 barras (15–49%) não fiável; 3–5 barras (50–100%) fiável',
    '**EMG:** vazio (< 30 dB) ideal; 1–4 barras (30–55 dB) aceitável; 5 barras (> 55 dB) inaceitável',
    '**TS** (taxa de supressão: % dos últimos 63 s com EEG suprimido): o ideal é zero']},
  {lab:'Problemas',tone:'crit',title:'Resolução',items:[
    '**Falsamente elevado (> 60):** actividade muscular (mímica, tremores) ou ruído eléctrico. Minimizar a actividade muscular (relaxante se indicado, sob supervisão médica) e reposicionar os eléctrodos',
    '**Falsamente baixo (< 40):** sedação excessiva real ou sensor mal colocado. Confirmar a clínica, reposicionar e rever as doses',
    '**Sem leitura:** verificar cabos e conexões, substituir sensores, reiniciar o monitor',
    '**Instável:** estabilizar a criança, rever o posicionamento',
    '**Lactentes, sobretudo < 6 meses:** maior variabilidade por imaturidade cerebral']},
  {lab:'Enfermagem',tone:'info',items:[
    'Registar o COMFORT-B e os sinais clínicos; vigiar a pele do local do sensor e alternar o local; avaliar interferências de outros dispositivos']}
 ]},

{id:'colh_aa',grp:'lab',ico:8,tone:'info',
 title:'Aminoácidos e ácidos orgânicos',
 sub:'Colheita de sangue e urina',
 src:'DA.0619/T.SPC, versão 02 (2025/03/03), Instrução de colheita, Serviço de Patologia Clínica.',
 stages:[
  {lab:'Sangue',tone:'act',items:[
    '**Jejum:** RN a 4 meses 3–4 h; 5 meses a 1 ano 4–6 h; > 1 ano 6–8 h',
    '**2 mL** em tubo com EDTA ou heparina de lítio',
    'Agitar bem o tubo e enviar **em gelo, até 1 h** após a colheita']},
  {lab:'Urina',tone:'act',items:[
    'Primeira micção da manhã, ou urina de 12 h ou 24 h',
    'Colher **antes** de qualquer terapêutica medicamentosa ou dietética',
    'Em situações intermitentes (aminoacidopatias, acidúrias orgânicas), colher **durante a fase aguda**',
    'Enviar de imediato 5–10 mL, com a diurese total, o tempo de colheita, a informação clínica relevante e a medicação']},
  {lab:'MPS',tone:'info',title:'Mucopolissacáridos, oligossacáridos, sulfitos',items:[
    'Primeira micção da manhã ou urina de 12 ou 24 h; indicar o período de colheita']}
 ]},

{id:'colh_redox',grp:'lab',ico:8,tone:'info',
 title:'Potencial redox',
 sub:'Piruvato, lactato, acetoacetato, ácidos gordos livres, 3-hidroxibutirato',
 src:'DA.0620/T.SPC, versão 02 (2025/03/03), Instrução de colheita, Serviço de Patologia Clínica.',
 stages:[
  {lab:'Geral',tone:'q',items:[
    'Todos os parâmetros em **jejum (8–12 h)** e **pós-prandial**, com cada tubo identificado',
    '3 tubos por colheita: gel (soro), EDTA-gel (plasma) e tubo com **4 mL de ácido perclórico 8%**']},
  {lab:'Piruvato',tone:'act',items:[
    'Contactar o laboratório antes da colheita; sem garrote',
    '2 mL de sangue directamente para o tubo com 4 mL de ácido perclórico 8%, mantido a 2–8 °C até à colheita']},
  {lab:'Lactato',tone:'act',items:['Plasma (EDTA-gel); sem garrote; jejum de 8 h e medicação ao pequeno-almoço']},
  {lab:'Outros',tone:'act',items:[
    '**Acetoacetato** e **3-hidroxibutirato:** soro (gel); jejum de 12 h; colher antes dos fármacos',
    '**Ácidos gordos livres:** soro (gel); jejum de 12 h; se N-acetilcisteína, paracetamol ou metamizol, colher antes da sua administração']}
 ]}
);

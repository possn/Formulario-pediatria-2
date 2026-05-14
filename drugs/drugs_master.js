// UCIP Pediatria — Master Drug Aggregator
// Agrega todos os ficheiros de fármacos numa única variável DRUGS

var DRUGS = [];
if (typeof DRUGS_EMERGENCIA !== "undefined") DRUGS = DRUGS.concat(DRUGS_EMERGENCIA);
if (typeof DRUGS_SEDACAO !== "undefined") DRUGS = DRUGS.concat(DRUGS_SEDACAO);
if (typeof DRUGS_VASOACTIVOS !== "undefined") DRUGS = DRUGS.concat(DRUGS_VASOACTIVOS);
if (typeof DRUGS_CARDIOVASCULAR !== "undefined") DRUGS = DRUGS.concat(DRUGS_CARDIOVASCULAR);
if (typeof DRUGS_ANTIBIOTICOS !== "undefined") DRUGS = DRUGS.concat(DRUGS_ANTIBIOTICOS);
if (typeof DRUGS_ANTIEPILEPTICOS !== "undefined") DRUGS = DRUGS.concat(DRUGS_ANTIEPILEPTICOS);
if (typeof DRUGS_RESPIRATORIO !== "undefined") DRUGS = DRUGS.concat(DRUGS_RESPIRATORIO);
if (typeof DRUGS_CORTICOIDES !== "undefined") DRUGS = DRUGS.concat(DRUGS_CORTICOIDES);
if (typeof DRUGS_GASTROENTEROLOGIA !== "undefined") DRUGS = DRUGS.concat(DRUGS_GASTROENTEROLOGIA);
if (typeof DRUGS_ENDOCRINO !== "undefined") DRUGS = DRUGS.concat(DRUGS_ENDOCRINO);
if (typeof DRUGS_ELECTROLITICOS !== "undefined") DRUGS = DRUGS.concat(DRUGS_ELECTROLITICOS);
if (typeof DRUGS_NEONATOLOGIA !== "undefined") DRUGS = DRUGS.concat(DRUGS_NEONATOLOGIA);
if (typeof DRUGS_ONCOLOGIA !== "undefined") DRUGS = DRUGS.concat(DRUGS_ONCOLOGIA);

console.log("UCIP Pediatria: " + DRUGS.length + " fármacos carregados.");

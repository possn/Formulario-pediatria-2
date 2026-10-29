// UCIP Pediatria — Gastroenterologia
// 11 fármacos
// Fontes: ver drugs_sources.js

var DRUGS_GASTROENTEROLOGIA = [
  {
    "id": "omeprazol",
    "name": "Omeprazol",
    "category": "gastro",
    "src": "original",
    "class": "Inibidor bomba de protões (IBP) — inibidor H+/K+ ATPase",
    "brands": "Losec 10/20/40 mg caps.; EV 40 mg pó; susp. extemporânea 2 mg/ml",
    "indication": [
      "Doença do refluxo gastroesofágico (DRGE)",
      "Úlcera péptica / gastropatia por AINEs",
      "Erradicação H. pylori (+ antibióticos)",
      "Prevenção úlcera de stress em UCIP",
      "Esofagite erosiva"
    ],
    "dose": [
      {
        "ind": "DRGE / úlcera duodenal ou gástrica — oral, RN",
        "val": "700 mcg/kg 1×/dia durante 7–14 dias; depois, se necessário, 1,4–2,8 mg/kg 1×/dia",
        "max": "—",
        "freq": "1×/dia",
        "note": "BNFC 2020-21 (p. 63)."
      },
      {
        "ind": "DRGE / úlcera — oral, 1 mês–1 ano",
        "val": "700 mcg/kg 1×/dia; aumentar se necessário até 3 mg/kg 1×/dia",
        "max": "20 mg/dose",
        "freq": "1×/dia",
        "note": "BNFC 2020-21 (p. 63)."
      },
      {
        "ind": "DRGE / úlcera — oral, 2–17 anos",
        "val": "10–19 kg: 10 mg 1×/dia, até 20 mg se necessário; ≥ 20 kg: 20 mg 1×/dia, até 40 mg se necessário",
        "max": "40 mg/dia",
        "freq": "1×/dia, 30 min antes da refeição",
        "note": "BNFC 2020-21 (p. 63). Esofagite ulcerativa grave: dose alta no máximo 12 semanas."
      },
      {
        "ind": "Úlcera, Zollinger-Ellison, profilaxia de úlcera de stress — EV, 1 mês–11 anos",
        "val": "Inicial 500 mcg/kg 1×/dia (máx. 20 mg); se necessário até 2 mg/kg 1×/dia",
        "max": "40 mg/dose",
        "freq": "1×/dia, injeção em 5 min",
        "note": "BNFC 2020-21 (p. 63). A profilaxia da úlcera de stress em UCIP é extrapolação destas doses."
      },
      {
        "ind": "Úlcera, Zollinger-Ellison — EV, 12–17 anos",
        "val": "40 mg 1×/dia, injeção em 5 min",
        "max": "40 mg/dose",
        "freq": "1×/dia",
        "note": "BNFC 2020-21 (p. 63)."
      }
    ],
    "prep": "EV: reconstituir 40 mg em 10 ml SF ou SWFI (4 mg/ml); diluir em SF 100 ml (0,4 mg/ml). Infusão 20–30 min. ⚠️ Incompatível com quase todos os fármacos na mesma linha (pH muito alcalino — linha dedicada obrigatória). Estabilidade CRÍTICA: apenas 6h após reconstituição (degradação rápida em solução).",
    "ci": [
      "Hipersensibilidade a IBPs"
    ],
    "alert": [
      "⚠️ Hipomagnesemia em uso prolongado (> 3 meses)",
      "⚠️ Défice vitamina B12 em uso muito prolongado",
      "⚠️ ↑ risco C. difficile",
      "⚠️ Interacção clopidogrel (reduz eficácia antiagregante — usar pantoprazol)",
      "Não usar de rotina em todos os doentes de UCIP — indicação clínica rigorosa"
    ],
    "source": "BNFC 2020-21, Omeprazole (p. 63); Formulário de Pediatria 3ª Ed.",
    "review": ["A dose de hemorragia digestiva alta (80 mg em carga e 8 mg/h durante 72 h) é a de adultos e não consta do BNFC 2020-21: removida. Usar protocolo local."]
  
  },
  {
    "id": "ondansetron",
    "name": "Ondansetron",
    "category": "gastro",
    "class": "Antagonista receptor 5-HT3 — antiemético",
    "brands": "Zofran 4/8 mg comp.; 4 mg/2 ml EV; 4 mg/5 ml sol. oral",
    "indication": [
      "Náuseas e vómitos pós-quimioterapia — 1ª linha",
      "Náuseas e vómitos pós-operatórios",
      "Gastroenterite aguda com vómitos incoercíveis (off-label — evidência)",
      "Náusea e vómito pós-operatório (NVPO)",
      "Náusea e vómito por quimioterapia — 1ª linha",
      "Náusea/vómito em cuidados paliativos"
    ],
    "dose": [
      {
        "ind": "Prevenção e tratamento de náuseas e vómitos pós-operatórios — EV lento",
        "val": "100 mcg/kg, dose única, em ≥ 30 s",
        "max": "4 mg",
        "freq": "Dose única",
        "note": "BNFC 2020-21 (p. 281)."
      },
      {
        "ind": "Náuseas e vómitos induzidos por quimioterapia/radioterapia — EV (6 meses–17 anos)",
        "val": "150 mcg/kg imediatamente antes da quimioterapia (máx. 8 mg), depois 150 mcg/kg cada 4 h × 2 doses; passar a oral. Alternativa: BSC ≤ 1,3 m² 5 mg/m²; ≥ 1,3 m² 8 mg",
        "max": "8 mg/dose; 32 mg/dia",
        "freq": "Cada 4 h × 3 doses",
        "note": "BNFC 2020-21 (p. 281). Perfusão em ≥ 15 min. Seguimento oral: 2 mg (< 10 kg), 4 mg (10–40 kg), 8 mg (≥ 41 kg) cada 12 h até 5 dias."
      },
      {
        "ind": "Gastroenterite aguda — oral (não consta do BNFC)",
        "val": "0,15 mg/kg, dose única",
        "max": "8 mg",
        "freq": "Dose única",
        "note": "Freedman SB et al. N Engl J Med 2006; uso fora de indicação."
      }
    ],
    "prep": "EV: diluir em SF ou SG5% para 0,04–0,16 mg/ml. Administrar em 15 min. ⚠️ Incompatível com heparina (precipitação grave), furosemida, pip/tazo. Oral: comprimidos, ODT (orodispersível — colocar na língua sem água), solução 4 mg/5 ml.",
    "ci": [
      "Síndrome QT congénito",
      "Uso concomitante apomorfina",
      "QT prolongado congénito",
      "Hipocaliemia / hipomagnesemia não corrigidas (arritmia)",
      "Uso com apomorfina (hipotensão grave)"
    ],
    "alert": [
      "⚠️ Prolongamento QTc — ECG base se factores de risco",
      "⚠️ Síndrome serotoninérgica (raro) com outros serotoninérgicos",
      "Cefaleias frequentes (efeito adverso comum)",
      "Obstipação",
      "⚠️ Prolongamento QT — evitar com outros QT-prolongadores; monitorizar ECG se cardiopatia",
      "⚠️ Síndrome serotoninérgica — risco aumentado se combinado com tramadol, ISRS, triptanos",
      "Cefaleias — efeito adverso mais frequente",
      "Obstipação frequente em uso prolongado"
    ],
    "source": "BNFC 2020-21, Ondansetron (p. 281); Freedman SB et al. N Engl J Med 2006",
    "review": ["A ficha anterior tinha dose EV 0,1–0,15 mg/kg a cada 6–8 h e máximo de 8 mg no pós-operatório; o BNFC 2020-21 indica 100 mcg/kg dose única (máx. 4 mg) no pós-operatório e 150 mcg/kg a cada 4 h × 3 doses na quimioterapia.", "Risco de prolongamento do QT: evitar com fármacos que prolonguem o QT e corrigir K⁺ e Mg²⁺."]
  
  },
  {
    "id": "metoclopramida",
    "name": "Metoclopramida",
    "category": "gastro",
    "class": "Antagonista dopaminérgico D2 — procinético e antiemético",
    "brands": "Primperan 10 mg comp.; 5 mg/ml EV; 1 mg/ml sol. oral",
    "indication": [
      "Náuseas e vómitos (2ª linha)",
      "Gastroparesia — estímulo do esvaziamento gástrico",
      "Facilitação alimentação entérica",
      "Refluxo gastroesofágico (uso muito limitado em pediatria)"
    ],
    "dose": [
      {
        "ind": "Náuseas e vómitos pós-operatórios estabelecidos (2.ª linha) / náuseas e vómitos tardios da quimioterapia — oral/IM/EV",
        "val": "100–150 mcg/kg até 3×/dia; EV lento em ≥ 3 min",
        "max": "10 mg/dose",
        "freq": "Até 3×/dia",
        "note": "BNFC 2020-21 (p. 278). EMA/MHRA: usar só em segunda linha e no máximo 5 dias."
      }
    ],
    "prep": "EV: diluir em SF. Concentração ≤ 5 mg/ml. Administrar em 15–30 min (bólus lento — reacções extrapiramidais com infusão rápida). ⚠️ Incompatível com heparina, furosemida, bicarbonato. Oral: solução 5 mg/5 ml.",
    "ci": [
      "< 1 ano (risco reacções extrapiramidais)",
      "Obstrução/perfuração GI",
      "Epilepsia (abaixa limiar convulsivante)",
      "Feocromocitoma"
    ],
    "alert": [
      "⛔ REACÇÕES EXTRAPIRAMIDAIS (espasmo oculogiro, trismos, distonia) — frequentes em crianças e adolescentes. Tratar com biperideno 0,05 mg/kg EV ou difenidramina",
      "⚠️ Síndrome neuroléptico maligno (raro)",
      "⚠️ Uso máximo 5 dias (EMA 2013)",
      "Evitar < 1 ano"
    ],
    "source": "BNFC 2020-21, Metoclopramide hydrochloride (p. 278); EMA Safety Review 2013",
    "review": ["A ficha anterior admitia 0,5 mg/kg/dose em < 15 kg, valor que não consta do BNFC 2020-21 (máx. 10 mg/dose): removido. Risco de sintomas extrapiramidais."]
  
  },
  {
    "id": "sucralfato",
    "name": "Sucralfato",
    "category": "gastro",
    "class": "Protector gástrico — forma barreira sobre mucosa ulcerada",
    "brands": "Ulcogant susp. 1 g/5 ml; comp. 1 g",
    "indication": [
      "Úlcera péptica (alternativa/adjuvante a IBPs)",
      "Profilaxia úlcera de stress em UCIP (alternativa a IBPs)",
      "Esofagite por refluxo"
    ],
    "dose": [
      {
        "ind": "Úlcera gástrica ou duodenal benigna (PO)",
        "val": "1 mês–1 ano: 250 mg 4–6×/dia; 2–11 anos: 500 mg 4–6×/dia; 12–14 anos: 1 g 4–6×/dia; 15–17 anos: 2 g 2×/dia ou 1 g 4×/dia durante 4–6 semanas (até 12 se resistente)",
        "max": "8 g/dia",
        "freq": "1 h antes das refeições e ao deitar",
        "note": "BNFC 2020-21, Sucralfate (p. 58)."
      },
      {
        "ind": "Profilaxia de úlcera de stress na UCI (PO)",
        "val": "1 mês–1 ano: 250 mg 4–6×/dia; 2–11 anos: 500 mg 4–6×/dia; 12–14 anos: 1 g 4–6×/dia; 15–17 anos: 1 g 6×/dia",
        "max": "8 g/dia",
        "freq": "4–6×/dia",
        "note": "BNFC 2020-21 (p. 58). A ficha anterior indicava 40–80 mg/kg/dia, esquema que o BNFC não usa."
      }
    ],
    "prep": "Oral: suspensão 1 g/5 ml (ou comprimidos 1 g dissolvidos em 10 ml água). Tomar 30 min ANTES das refeições e ao deitar — forma barreira física na mucosa gástrica. ⚠️ Separar 2h de outros fármacos (adsorção); antiácidos reduzem eficácia.",
    "ci": [
      "Insuf. renal grave (acumulação alumínio)"
    ],
    "alert": [
      "⚠️ Obstipação frequente",
      "⚠️ Reduz absorção de múltiplos fármacos (fenitoína, fluroquinolonas, digoxina) — espaçar 2h",
      "Contém alumínio — evitar em insuf. renal"
    ],
    "source": "BNF for Children 2020-21, Sucralfate (p. 58)"
  },
  {
    "id": "mesalazina",
    "name": "Mesalazina",
    "category": "gastro",
    "class": "Aminossalicilato — anti-inflamatório intestinal local",
    "brands": "Pentasa comp. 500 mg/1 g; susp. retal; supositórios",
    "indication": [
      "Doença inflamatória intestinal (DII) — colite ulcerosa (manutenção e indução leve-moderada)",
      "Doença de Crohn colónica (adjuvante)",
      "Doença de Crohn leve-moderada ileocólica — indução e manutenção",
      "Colite ulcerosa — indução e manutenção (1ª linha em leve-moderada)",
      "Proctite ulcerosa — formulações rectais"
    ],
    "dose": [
      {
        "ind": "Colite ulcerosa — surto ligeiro a moderado, oral (Pentasa), 5–17 anos",
        "val": "< 40 kg: 10–20 mg/kg 3×/dia; ≥ 40 kg: 1–2 g 2×/dia (ou dose diária em 3–4 tomas)",
        "max": "—",
        "freq": "2–3×/dia",
        "note": "BNFC 2020-21 (p. 34). A dose varia com a preparação (Asacol, Octasa, Pentasa): consultar o RCM."
      },
      {
        "ind": "Colite ulcerosa — surto, oral (Octasa), 6–17 anos ≥ 40 kg",
        "val": "2,4–4 g/dia em doses divididas",
        "max": "4 g/dia",
        "freq": "Doses divididas",
        "note": "BNFC 2020-21 (p. 34)."
      },
      {
        "ind": "Colite ulcerosa — manutenção, oral (Pentasa), 5–17 anos",
        "val": "< 40 kg: 7,5–15 mg/kg 2×/dia (ou 3 tomas); ≥ 40 kg: 2 g 1×/dia",
        "max": "2 g/dia",
        "freq": "1–2×/dia",
        "note": "BNFC 2020-21 (p. 34). Octasa ≥ 40 kg: 1,2–2 g/dia."
      },
      {
        "ind": "Colite ulcerosa — retal, 12–17 anos",
        "val": "Pentasa enema de retenção 1 g ao deitar; supositório 1 g/dia durante 2–4 semanas (manutenção 1 g/dia); espuma Asacol 1–2 g/dia durante 4–6 semanas; supositório Asacol 250–500 mg 3×/dia",
        "max": "—",
        "freq": "1×/dia",
        "note": "BNFC 2020-21 (p. 34)."
      }
    ],
    "prep": "Oral: comprimidos de libertação prolongada (Pentasa, Asacol) — engolir INTEIROS, nunca triturar (revestimento gastroresistente é crítico). Granulados: misturar em água ou sumo, ingerir imediatamente. Rectal: supositórios — inserir com ponta lubrificada após dejecção; enema 1 g/100 ml — reter 30 min. Fonte: SmPC Pentasa.",
    "ci": [
      "Hipersensibilidade a salicilatos",
      "Insuf. renal grave",
      "Insuf. hepática grave",
      "Insuficiência renal grave (TFG < 30 ml/min — nefrotoxicidade)",
      "Alergia a salicilatos"
    ],
    "alert": [
      "⚠️ Nefrotoxicidade (rara) — monitorizar creatinina anualmente",
      "⚠️ Pancreatite (rara)",
      "Bem tolerado — perfil segurança favorável",
      "⚠️ Nefrotoxicidade — monitorizar função renal anualmente; rara mas irreversível",
      "Hepatotoxicidade rara — monitorizar TFH",
      "Síndrome de hipersensibilidade aguda (piora paradoxal dos sintomas — raro)"
    ],
    "source": "BNFC 2020-21, Mesalazine (p. 34); ECCO-ESPGHAN Paediatric UC Guidelines 2018",
    "review": ["A ficha anterior usava 30–50 mg/kg/dia (máx. 4 g/dia) como dose única; o BNFC 2020-21 indica doses por preparação (Pentasa < 40 kg: 10–20 mg/kg 3×/dia = 30–60 mg/kg/dia)."]
  
  },
  {
    "id": "ranitidina_alt",
    "name": "Famotidina",
    "category": "gastroenterologia",
    "class": "Anti-histamínico H2 (antagonista receptor H2)",
    "brands": "Famotidina Generis — comp 20/40 mg; EV 10 mg/2 ml",
    "indication": [
      "Profilaxia úlcera de stress (alternativa a IBP em < 1 ano)",
      "Refluxo gastroesofágico sintomático",
      "Esofagite péptica leve-moderada",
      "Dispepsia / gastrite"
    ],
    "dose": [
      {
        "ind": "Úlcera gástrica/duodenal, esofagite de refluxo — oral, RN",
        "val": "2 mg/kg 3×/dia (absorção oral não fiável)",
        "max": "3 mg/kg/dose",
        "freq": "3×/dia",
        "note": "BNFC 2020-21 (p. 59)."
      },
      {
        "ind": "Úlcera, esofagite de refluxo — oral, 1–5 meses",
        "val": "1 mg/kg 3×/dia",
        "max": "3 mg/kg/dose",
        "freq": "3×/dia",
        "note": "BNFC 2020-21 (p. 59)."
      },
      {
        "ind": "Úlcera, esofagite de refluxo — oral, 6 meses–11 anos",
        "val": "2–4 mg/kg 2×/dia; esofagite grave até 5 mg/kg 2×/dia (3–11 anos)",
        "max": "150 mg/dose (300 mg na esofagite grave)",
        "freq": "2×/dia",
        "note": "BNFC 2020-21 (p. 59). 12–17 anos: 150 mg 2×/dia ou 300 mg ao deitar."
      },
      {
        "ind": "Profilaxia de úlcera de stress — EV lento",
        "val": "RN: 0,5–1 mg/kg cada 6–8 h; 1 mês–11 anos: 1 mg/kg cada 6–8 h; 12–17 anos: 50 mg cada 8 h",
        "max": "50 mg/dose (1 mês–11 anos)",
        "freq": "Cada 6–8 h",
        "note": "BNFC 2020-21 (p. 59). Pode ser dada em perfusão intermitente a 25 mg/h; 12–17 anos: passar a 150 mg 2×/dia oral."
      }
    ],
    "prep": "EV (famotidina — ranitidina retirada do mercado): diluir em SF até 2 mg/ml (concentração máxima 4 mg/ml). Administrar em 15–30 min. Bólus lento aceitável: 2 mg/ml em 2 min se necessário. Oral: comprimidos 20/40 mg; solução extemporânea 8 mg/ml. Fonte: NHS Medusa 2024.",
    "ci": [
      "Hipersensibilidade a anti-H2",
      "Insuficiência renal grave sem ajuste"
    ],
    "alert": [
      "Taquifilaxia com uso prolongado (perda de efeito antisecretor em dias a semanas)",
      "Ranitidina retirada do mercado (NDMA contaminação) — famotidina é alternativa de classe",
      "Ajuste em IR: TFG < 50 ml/min reduzir dose 50% ou aumentar intervalo"
    ],
    "source": "BNFC 2020-21, Ranitidine (p. 59); van der Pol R et al. Arch Dis Child 2011",
    "review": ["A ranitidina foi retirada do mercado em muitos países em 2019–2020 (contaminação por NDMA); confirmar disponibilidade em Portugal.", "A ficha anterior usava 0,5 mg/kg q12h oral e 0,25–0,5 mg/kg EV, abaixo das doses do BNFC 2020-21."]
  
  },
  {
    "id": "domperidona",
    "name": "Domperidona",
    "category": "gastroenterologia",
    "class": "Antagonista dopaminérgico D2 periférico — procinético",
    "brands": "Motilium — susp 1 mg/ml; comp 10 mg",
    "indication": [
      "Refluxo gastroesofágico sintomático — procinético em lactente",
      "Esvaziamento gástrico lento / gastroparesia",
      "Náusea e vómito funcionais"
    ],
    "dose": [
      {
        "ind": "Náuseas e vómitos — oral, 12–17 anos ≥ 35 kg",
        "val": "10 mg até 3×/dia",
        "max": "30 mg/dia; habitualmente máx. 1 semana",
        "freq": "Até 3×/dia",
        "note": "BNFC 2020-21 (p. 278). EMA 2014: risco cardíaco; contraindicada se QT longo ou com inibidores do CYP3A4."
      },
      {
        "ind": "DRGE (eficácia não comprovada; uso especializado) — oral, RN",
        "val": "250 mcg/kg 3×/dia; se necessário até 400 mcg/kg 3×/dia",
        "max": "—",
        "freq": "3×/dia",
        "note": "BNFC 2020-21 (p. 278). Interromper ocasionalmente para avaliar recorrência."
      },
      {
        "ind": "DRGE (eficácia não comprovada; uso especializado) — oral, criança",
        "val": "250 mcg/kg 3×/dia (máx. 10 mg/dose); se necessário até 400 mcg/kg 3×/dia",
        "max": "20 mg/dose",
        "freq": "3×/dia",
        "note": "BNFC 2020-21 (p. 278)."
      }
    ],
    "prep": "Oral: suspensão 1 mg/ml — medir com seringa oral graduada (não colher de chá). Tomar 15–30 min ANTES das refeições (procinético — acção sobre motilidade gástrica). Comprimidos 10 mg para crianças maiores. ⚠️ Dose máxima 0,5 mg/kg/dia — doses superiores aumentam risco QT. Fonte: SmPC Motilium.",
    "ci": [
      "QT prolongado / arritmias cardíacas",
      "Insuf. hepática grave",
      "Tumores hipofisários prolactina-dependentes",
      "Uso com azóis (CYP3A4 — aumenta exposição domperidona e risco QT)"
    ],
    "alert": [
      "⚠️ EMA 2014: risco arritmias graves (incluindo morte súbita) com domperidona — usar dose mínima pelo menor tempo possível",
      "⚠️ Risco aumentado com doses > 0,5 mg/kg/dia e em < 1 ano",
      "⚠️ Inibidores CYP3A4 (azóis, macrolídeos) aumentam drasticamente os níveis",
      "Eficácia em DRGE pediátrica modesta — evidência fraca para uso prolongado",
      "Monitorizar ECG se factores de risco de QT"
    ],
    "source": "BNFC 2020-21, Domperidone (p. 278); EMA Safety Review 2014",
    "review": ["A ficha anterior tinha 0,25 mg/kg a cada 6–8 h; o BNFC 2020-21 refere 3×/dia."]
  
  },
  {
    "id": "acido_urso",
    "name": "Ácido Ursodesoxicólico",
    "category": "gastroenterologia",
    "class": "Ácido biliar hidrofílico — hepatoprotector",
    "brands": "Ursofalk — cáps 250 mg; susp 250 mg/5 ml; comp 150 mg",
    "indication": [
      "Colestase neonatal (atresia biliar, défice α1-antitripsina, colestase associada a NP)",
      "Fibrose quística — componente hepático/colestático",
      "Colangite esclerosante primária pediátrica",
      "Litíase biliar de colesterol — dissolução (indicação rara em criança)"
    ],
    "dose": [
      {
        "ind": "Colestase — oral, RN e 1–23 meses",
        "val": "5 mg/kg 3×/dia, ajustar à resposta",
        "max": "10 mg/kg/dose",
        "freq": "3×/dia",
        "note": "BNFC 2020-21 (p. 71)."
      },
      {
        "ind": "Colestase associada à nutrição parentérica — oral",
        "val": "10 mg/kg 3×/dia",
        "max": "—",
        "freq": "3×/dia",
        "note": "BNFC 2020-21 (p. 71)."
      },
      {
        "ind": "Fibrose quística (metabolismo hepático dos ácidos gordos e fluxo biliar) — oral",
        "val": "10–15 mg/kg 2×/dia (ou dose diária dividida em 3)",
        "max": "—",
        "freq": "2×/dia",
        "note": "BNFC 2020-21 (p. 71). Colombo C et al. J Hepatol 2016."
      },
      {
        "ind": "Colangite esclerosante — oral",
        "val": "5–10 mg/kg 2–3×/dia",
        "max": "15 mg/kg/dose",
        "freq": "2–3×/dia",
        "note": "BNFC 2020-21 (p. 71)."
      }
    ],
    "prep": "Oral: suspensão 250 mg/5 ml — agitar bem antes de usar (30 segundos); conservar a 4°C após abertura, usar em 3 meses. Cápsulas 250 mg — podem ser abertas e misturadas em alimentos moles. Tomar COM refeições para maximizar circulação entero-hepática e minimizar intolerância GI. Fonte: SmPC Ursofalk.",
    "ci": [
      "Inflamação aguda da vesícula biliar ou vias biliares",
      "Obstrução biliar completa"
    ],
    "alert": [
      "Diarreia com doses elevadas — iniciar com dose baixa e subir progressivamente",
      "Monitorizar TFH trimestralmente",
      "Benefício em colestase neonatal baseado em evidência observacional — sem ensaios controlados robustos"
    ],
    "source": "BNFC 2020-21, Ursodeoxycholic acid (p. 71); Colombo C et al. J Hepatol 2016",
    "review": ["A ficha anterior tinha 10–20 mg/kg/dia em dose geral; passou a seguir as doses por indicação do BNFC 2020-21."]
  
  },
  {
    "id": "rifaximina",
    "name": "Rifaximina",
    "category": "gastroenterologia",
    "class": "Antibiótico rifamicina de absorção mínima — acção entérica",
    "brands": "Normix — comp 200 mg; Xifaxan — comp 550 mg",
    "indication": [
      "Encefalopatia hepática — prevenção de episódios recorrentes",
      "Síndrome do intestino irritável com diarreia (SII-D) — adultos/adolescentes",
      "SIBO (sobrecrescimento bacteriano intestinal)",
      "Diarreia do viajante — quando indicado (< 12 anos: uso restrito)"
    ],
    "dose": [
      {
        "ind": "Encefalopatia hepática — prevenção",
        "val": "200 mg PO q8h (ou 550 mg q12h — comp 550 mg)",
        "max": "—",
        "freq": "q8h ou q12h conforme formulação",
        "note": "Uso pediátrico ≥ 12 anos: dose adulto. < 12 anos: dados muito limitados"
      },
      {
        "ind": "SIBO",
        "val": "200 mg PO q8h × 14 dias",
        "max": "—",
        "freq": "3 vezes/dia × 14 dias",
        "note": ""
      }
    ],
    "prep": "Oral: comprimidos 200 mg e 550 mg — engolir inteiros com água. Tomar com ou sem alimentos. Não triturar (revestimento entérico garante acção intestinal localizada; triturar reduz eficácia e aumenta absorção sistémica). Fonte: SmPC Normix.",
    "ci": [
      "Hipersensibilidade a rifamicinas",
      "Obstrução intestinal",
      "< 12 anos para maioria das indicações (dados insuficientes)"
    ],
    "alert": [
      "Absorção sistémica < 0,4% — efeitos adversos sistémicos mínimos",
      "Coloração amarelo-laranja da urina — cosmético (como rifampicina, por resíduo de absorção)",
      "Interacções sistémicas mínimas pela baixa absorção",
      "Resistência documentada com uso prolongado — não usar cronicamente sem indicação"
    ],
    "source": "Shann F. Drug Doses (rifaximina 7,5–10 mg/kg 8/8 h); Bass NM et al. NEJM 2010; Pimentel M et al.",
    "review": ["A rifaximina não consta do BNFC 2020-21. As doses em mg fixos (200 mg 8/8 h; 550 mg 12/12 h) são de adultos; o Shann refere 7,5–10 mg/kg 8/8 h com ação intestinal. Confirmar com a Gastroenterologia."]

  },
{
    "id": "lactulose",
    "name": "Lactulose",
    "category": "gastroenterologia",
    "class": "Laxante osmótico — dissacarídeo sintético não absorvível",
    "brands": "Lactulose — solução oral 3,3 g/5 ml; 10 g/15 ml",
    "indication": [
      "Encefalopatia hepática — redução de amónia intestinal (1ª linha)",
      "Obstipação funcional — crónica e aguda",
      "Obstipação em UCIP por opioides, imobilidade, nutrição entérica",
      "Preparação intestinal pré-procedimento (alternativa a polietilenoglicol)"
    ],
    "dose": [
      {
        "ind": "Obstipação (PO)",
        "val": "1–11 meses: 2,5 mL 2×/dia; 1–4 anos: 2,5–10 mL 2×/dia; 5–17 anos: 5–20 mL 2×/dia",
        "max": "—",
        "freq": "2×/dia; ajustar à resposta",
        "note": "BNFC 2020-21, Lactulose (p. 46). Pode demorar até 48 h a actuar."
      },
      {
        "ind": "Encefalopatia hepática (PO) — uso não licenciado em crianças",
        "val": "12–17 anos: 30–50 mL 3×/dia, depois ajustar para 2–3 dejecções moles/dia",
        "max": "—",
        "freq": "3×/dia",
        "note": "BNFC 2020-21 (p. 46). Sem dose pediátrica < 12 anos no BNFC."
      }
    ],
    "prep": "Oral: diluir em água, sumo ou leite para melhorar palatabilidade. Via SNG: pode administrar directamente.",
    "ci": ["Galactosemia", "Obstrução gastrointestinal", "Perfuração gastrointestinal ou risco de perfuração (BNFC 2020-21)"],
    "alert": [
      "⚠️ Flatulência e cólicas abdominais — frequentes no início; reduzir dose se incomodativo",
      "⚠️ Diarreia excessiva com sobredose — desidratação e hipernatremia",
      "Administrar com cuidado em diabéticos (contém lactose e galactose — pequenas quantidades)",
      "Efeito 24–48h após início — não esperar resposta imediata"
    ],
    "source": "BNF for Children 2020-21, Lactulose (p. 46)"
  }
];

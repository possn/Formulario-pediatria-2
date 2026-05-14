// UCIP Pediatria — Gastroenterologia
// 13 fármacos
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
        "ind": "DRGE / Úlcera (oral)",
        "val": "1–2 mg/kg/dia oral",
        "max": "40 mg/dia",
        "freq": "1 dose/dia (30 min antes refeição)",
        "note": "RN/lactente: 0,5–1 mg/kg/dia"
      },
      {
        "ind": "UCIP — profilaxia úlcera stress EV",
        "val": "1–2 mg/kg/dia EV",
        "max": "40 mg/dia",
        "freq": "1–2 doses/dia",
        "note": ""
      },
      {
        "ind": "Hemorragia digestiva alta EV",
        "val": "Carga 80 mg → 8 mg/hora perfusão",
        "max": "—",
        "freq": "perfusão 72h",
        "note": "Protocolo adulto; pediátrico: 1 mg/kg/dose 2×/dia"
      }
    ],
    "prep": "EV: reconstituir em 5 ml água → diluir em SF 100 ml. Infusão 20–30 min.",
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
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
  },
  {
    "id": "ondansetron",
    "name": "Ondansetron",
    "category": "gastro",
    "src": "original",
    "class": "Antagonista receptor 5-HT3 — antiemético",
    "brands": "Zofran 4/8 mg comp.; 4 mg/2 ml EV; 4 mg/5 ml sol. oral",
    "indication": [
      "Náuseas e vómitos pós-quimioterapia — 1ª linha",
      "Náuseas e vómitos pós-operatórios",
      "Gastroenterite aguda com vómitos incoercíveis (off-label — evidência)"
    ],
    "dose": [
      {
        "ind": "Pós-quimio / Pós-op EV",
        "val": "0,1–0,15 mg/kg/dose EV",
        "max": "8 mg/dose",
        "freq": "cada 8h (3 doses/dia)",
        "note": ""
      },
      {
        "ind": "Gastroenterite oral (off-label)",
        "val": "0,15 mg/kg/dose oral",
        "max": "8 mg/dose",
        "freq": "dose única; pode repetir 1× após 8h",
        "note": "Evidência sólida: reduz internamentos e necessidade EV"
      },
      {
        "ind": "Adulto",
        "val": "4–8 mg",
        "max": "8 mg/dose",
        "freq": "3×/dia",
        "note": ""
      }
    ],
    "prep": "EV: diluir em SF ou SG5%. Administrar em 15 min.",
    "ci": [
      "Síndrome QT congénito",
      "Uso concomitante apomorfina"
    ],
    "alert": [
      "⚠️ Prolongamento QTc — ECG base se factores de risco",
      "⚠️ Síndrome serotoninérgica (raro) com outros serotoninérgicos",
      "Cefaleias frequentes (efeito adverso comum)",
      "Obstipação"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
  },
  {
    "id": "metoclopramida",
    "name": "Metoclopramida",
    "category": "gastro",
    "src": "original",
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
        "ind": "Antiemético / Procinético",
        "val": "0,1–0,15 mg/kg/dose EV/oral",
        "max": "10 mg/dose (0,5 mg/kg/dose em < 15 kg)",
        "freq": "3×/dia",
        "note": "Duração máxima: 5 dias"
      }
    ],
    "prep": "EV: diluir em SF. Administrar em 15–30 min (reduz reacções extrapiramidais).",
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
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24; EMA Safety Review 2013"
  },
  {
    "id": "lactulose",
    "name": "Lactulose",
    "category": "gastro",
    "src": "added",
    "class": "Laxante osmótico — dissacarídeo não absorvível",
    "brands": "Duphalac 3,35 g/5 ml sol. oral; Laevolac",
    "indication": [
      "Obstipação crónica",
      "Encefalopatia hepática (reduz absorção amónia)"
    ],
    "dose": [
      {
        "ind": "Obstipação — < 1 ano",
        "val": "2,5 ml/dose oral",
        "max": "—",
        "freq": "2×/dia",
        "note": ""
      },
      {
        "ind": "Obstipação — 1–5 anos",
        "val": "5 ml/dose oral",
        "max": "—",
        "freq": "2×/dia",
        "note": ""
      },
      {
        "ind": "Obstipação — 5–10 anos",
        "val": "10 ml/dose oral",
        "max": "—",
        "freq": "2×/dia",
        "note": ""
      },
      {
        "ind": "Obstipação — > 10 anos / adulto",
        "val": "15 ml/dose oral",
        "max": "—",
        "freq": "2×/dia",
        "note": "Ajustar para 1–2 dejecções moles/dia"
      },
      {
        "ind": "Encefalopatia hepática",
        "val": "30–50 ml oral ou 300 ml via retal",
        "max": "—",
        "freq": "3–4×/dia (alvo: 2–3 dejecções/dia)",
        "note": ""
      }
    ],
    "prep": "Solução oral. Pode diluir em água ou sumo.",
    "ci": [
      "Galactosemia",
      "Obstrução intestinal"
    ],
    "alert": [
      "Flatulência e cólicas no início — passageiros",
      "Pode causar hipernatremia em desidratação",
      "Efeito após 24–48h (não é laxante de acção imediata)"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
  },
  {
    "id": "sucralfato",
    "name": "Sucralfato",
    "category": "gastro",
    "src": "original",
    "class": "Protector gástrico — forma barreira sobre mucosa ulcerada",
    "brands": "Ulcogant susp. 1 g/5 ml; comp. 1 g",
    "indication": [
      "Úlcera péptica (alternativa/adjuvante a IBPs)",
      "Profilaxia úlcera de stress em UCIP (alternativa a IBPs)",
      "Esofagite por refluxo"
    ],
    "dose": [
      {
        "ind": "Oral",
        "val": "40–80 mg/kg/dia oral",
        "max": "4 g/dia",
        "freq": "4×/dia (1h antes refeições e ao deitar)",
        "note": "Tomar com estômago vazio"
      }
    ],
    "prep": "Suspensão oral. Não usar com antiácidos (reduz eficácia).",
    "ci": [
      "Insuf. renal grave (acumulação alumínio)"
    ],
    "alert": [
      "⚠️ Obstipação frequente",
      "⚠️ Reduz absorção de múltiplos fármacos (fenitoína, fluroquinolonas, digoxina) — espaçar 2h",
      "Contém alumínio — evitar em insuf. renal"
    ],
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24"
  },
  {
    "id": "mesalazina",
    "name": "Mesalazina",
    "category": "gastro",
    "src": "added",
    "class": "Aminossalicilato — anti-inflamatório intestinal local",
    "brands": "Pentasa comp. 500 mg/1 g; susp. retal; supositórios",
    "indication": [
      "Doença inflamatória intestinal (DII) — colite ulcerosa (manutenção e indução leve-moderada)",
      "Doença de Crohn colónica (adjuvante)"
    ],
    "dose": [
      {
        "ind": "Colite ulcerosa activa oral",
        "val": "30–50 mg/kg/dia",
        "max": "4 g/dia",
        "freq": "2–3 doses/dia",
        "note": ""
      },
      {
        "ind": "Manutenção oral",
        "val": "15–30 mg/kg/dia",
        "max": "2 g/dia",
        "freq": "1–2 doses/dia",
        "note": ""
      },
      {
        "ind": "Doença distal — retal",
        "val": "1 g supositório ou 1–4 g enema",
        "max": "—",
        "freq": "1×/dia ao deitar",
        "note": ""
      }
    ],
    "prep": "Comprimidos de libertação prolongada — engolir inteiros. Não partir.",
    "ci": [
      "Hipersensibilidade a salicilatos",
      "Insuf. renal grave",
      "Insuf. hepática grave"
    ],
    "alert": [
      "⚠️ Nefrotoxicidade (rara) — monitorizar creatinina anualmente",
      "⚠️ Pancreatite (rara)",
      "Bem tolerado — perfil segurança favorável"
    ],
    "source": "BNF for Children 2023-24; ECCO/ESPGHAN Guidelines 2023"
  },
{
    "id": "pantoprazol",
    "name": "Pantoprazol EV",
    "category": "gastroenterologia",
    "class": "Inibidor da bomba de protões (IBP)",
    "brands": "Pantoloc EV — frascos 40 mg pó",
    "indication": [
      "Profilaxia úlcera de stress em UCI pediátrica",
      "Hemorragia digestiva alta — estabilização pré-endoscopia",
      "Esofagite erosiva grave quando via oral impossível",
      "Síndrome de Zollinger-Ellison"
    ],
    "dose": [
      {
        "ind": "Profilaxia úlcera de stress / esofagite",
        "val": "0,5–1 mg/kg/dia EV",
        "max": "40 mg/dia",
        "freq": "1 dose/dia",
        "note": "< 2 anos: dados limitados. ≥ 2 anos: dose estabelecida"
      },
      {
        "ind": "Hemorragia digestiva alta — aguda",
        "val": "1 mg/kg EV em bólus, depois 0,1–0,2 mg/kg/h",
        "max": "80 mg carga; 8 mg/h manutenção",
        "freq": "Perfusão contínua 72h pós-hemostase endoscópica",
        "note": "Esquema high-dose IBP reduz ressangramento pós-endoscopia (Lin HJ et al.)"
      }
    ],
    "prep": "EV: reconstituir 40 mg em 10 ml SF; diluir em 100 ml SF. Administrar em 15 min (bólus) ou perfusão contínua. Estável 12h após reconstituição.",
    "ci": [
      "Hipersensibilidade a IBP",
      "Uso com nelfinavir (reduz absorção)"
    ],
    "alert": [
      "⚠️ Uso prolongado > 8 semanas: risco pneumonia, C. difficile, hipomagnesemia, deficiência vitamina B12",
      "⚠️ Profilaxia de úlcera de stress só indicada em doentes de alto risco (ventilação mecânica > 48h, coagulopatia, choque) — evitar uso indiscriminado",
      "IBP reduz absorção oral de cetoconazol, itraconazol, erlotinib, atazanavir"
    ],
    "source": "BNF for Children 2023-24; Faraoni D et al. Pediatr Crit Care Med 2016; ASHP Guidelines Stress Ulcer 1999"
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
        "ind": "DRGE / esofagite — oral",
        "val": "0,5 mg/kg/dose PO",
        "max": "20 mg/dose",
        "freq": "q12h",
        "note": "Alternativa a IBP em lactentes < 1 ano quando IBP não disponível ou contra-indicado"
      },
      {
        "ind": "EV",
        "val": "0,25–0,5 mg/kg/dose EV",
        "max": "20 mg/dose",
        "freq": "q8–12h",
        "note": ""
      }
    ],
    "prep": "EV: diluir em SF até 2 mg/ml. Administrar em 15–30 min.",
    "ci": [
      "Hipersensibilidade a anti-H2",
      "Insuficiência renal grave sem ajuste"
    ],
    "alert": [
      "Taquifilaxia com uso prolongado (perda de efeito antisecretor em dias a semanas)",
      "Ranitidina retirada do mercado (NDMA contaminação) — famotidina é alternativa de classe",
      "Ajuste em IR: TFG < 50 ml/min reduzir dose 50% ou aumentar intervalo"
    ],
    "source": "BNF for Children 2023-24; van der Pol R et al. Arch Dis Child 2011"
  },
  {
    "id": "ondansetron_iv",
    "name": "Ondansetron EV/IM",
    "category": "gastroenterologia",
    "class": "Antagonista receptor 5-HT3 — antiemético",
    "brands": "Zofran EV — ampolas 4 mg/2 ml; 8 mg/4 ml",
    "indication": [
      "Náusea e vómito pós-operatório (NVPO)",
      "Náusea e vómito por quimioterapia — 1ª linha",
      "Gastroenterite aguda com vómitos incoercíveis — facilitador da reidratação oral",
      "Náusea/vómito em cuidados paliativos"
    ],
    "dose": [
      {
        "ind": "NVPO / vómito agudo",
        "val": "0,1–0,15 mg/kg EV",
        "max": "4 mg/dose (< 40 kg); 8 mg/dose (≥ 40 kg)",
        "freq": "q6–8h",
        "note": "Dose oral equivalente: 0,15 mg/kg. ODT (comprimido orodispersível) disponível para criança"
      },
      {
        "ind": "Quimioterapia altamente emetizante",
        "val": "0,15 mg/kg EV em 15 min",
        "max": "8 mg/dose",
        "freq": "q4h × 3 doses antes e durante QT; depois q8h",
        "note": "Associar dexametasona e aprepitant em QT altamente emetizante"
      }
    ],
    "prep": "EV: diluir em SF ou SG5% até 0,32 mg/ml. Administrar em 15 min.",
    "ci": [
      "QT prolongado congénito",
      "Hipocaliemia / hipomagnesemia não corrigidas (arritmia)",
      "Uso com apomorfina (hipotensão grave)"
    ],
    "alert": [
      "⚠️ Prolongamento QT — evitar com outros QT-prolongadores; monitorizar ECG se cardiopatia",
      "⚠️ Síndrome serotoninérgica — risco aumentado se combinado com tramadol, ISRS, triptanos",
      "Cefaleias — efeito adverso mais frequente",
      "Obstipação frequente em uso prolongado"
    ],
    "source": "BNF for Children 2023-24; Freedman SB et al. NEJM 2006 (gastroenteritis); MASCC Antiemetic Guidelines 2023"
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
        "ind": "DRGE / procinético",
        "val": "0,25 mg/kg/dose PO",
        "max": "10 mg/dose",
        "freq": "q6–8h, 15–30 min antes das refeições",
        "note": "Não exceder 0,5 mg/kg/dia. Não usar > 1 semana sem reavaliação"
      }
    ],
    "prep": "Oral: suspensão 1 mg/ml. Medir com seringa graduada.",
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
    "source": "BNF for Children 2023-24; EMA Safety Review 2014; Hibbs AM et al. Arch Dis Child 2006"
  },
  {
    "id": "octreotido_gi",
    "name": "Octreótido (Hemorragia GI)",
    "category": "gastroenterologia",
    "class": "Análogo sintético da somatostatina",
    "brands": "Sandostatin — ampolas 0,05/0,1/0,5 mg/ml",
    "indication": [
      "Hemorragia varicosa esofágica — adjuvante à escleroterapia/ligadura",
      "Hemorragia GI alta não varicosa refractária",
      "Fístulas pancreáticas e enterocutâneas",
      "Hipoglicemia refractária por hiperinsulinismo (nesidioblastose)"
    ],
    "dose": [
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
    "prep": "EV: diluir em SF ou SG5%. Concentração 0,5–50 μg/ml. Administrar bólus em 3 min; perfusão contínua em bomba de seringa.",
    "ci": [
      "Hipersensibilidade à somatostatina",
      "Diabetes mellitus (hiperglicemia; monitorizar)"
    ],
    "alert": [
      "⚠️ Bradicardia e hipotensão com bólus rápido",
      "⚠️ Hiperglicemia — monitorizar glicemia q2–4h durante perfusão",
      "Hipoglicemia paradoxal em doses baixas (inibe glucagon)",
      "Litíase biliar em uso prolongado (> 4 semanas)",
      "Diarreia e cólica abdominal frequentes"
    ],
    "source": "BNF for Children 2023-24; Eroglu Y et al. J Pediatr Gastroenterol Nutr 2004; ESPGHAN Variceal Guidelines 2018"
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
        "ind": "Colestase / hepatopatia",
        "val": "10–20 mg/kg/dia PO",
        "max": "—",
        "freq": "2–3 doses/dia com refeições",
        "note": "Fibrose quística: 15–30 mg/kg/dia pode ser necessário"
      }
    ],
    "prep": "Oral: suspensão 250 mg/5 ml — agitar bem. Tomar com refeições para maximizar circulação entero-hepática.",
    "ci": [
      "Inflamação aguda da vesícula biliar ou vias biliares",
      "Obstrução biliar completa"
    ],
    "alert": [
      "Diarreia com doses elevadas — iniciar com dose baixa e subir progressivamente",
      "Monitorizar TFH trimestralmente",
      "Benefício em colestase neonatal baseado em evidência observacional — sem ensaios controlados robustos"
    ],
    "source": "BNF for Children 2023-24; Colombo C et al. J Hepatol 2016 (fibrose quística); ESPGHAN Liver Guidelines"
  },
  {
    "id": "mesalazina_crohn",
    "name": "Mesalazina (5-ASA)",
    "category": "gastroenterologia",
    "class": "Aminossalicilato — anti-inflamatório intestinal",
    "brands": "Pentasa — comp LP 500 mg/1 g; granulado 1 g/2 g; supositórios 500 mg/1 g; enema 1 g/100 ml",
    "indication": [
      "Doença de Crohn leve-moderada ileocólica — indução e manutenção",
      "Colite ulcerosa — indução e manutenção (1ª linha em leve-moderada)",
      "Proctite ulcerosa — formulações rectais"
    ],
    "dose": [
      {
        "ind": "Colite ulcerosa — indução",
        "val": "30–50 mg/kg/dia PO",
        "max": "4 g/dia",
        "freq": "2–3 doses/dia (LP) ou 1 dose/dia (Pentasa granulado)",
        "note": "Dose de manutenção: 15–30 mg/kg/dia"
      },
      {
        "ind": "Proctite — rectal",
        "val": "Supositório 500 mg–1 g rectal",
        "max": "1 g/dia",
        "freq": "1 dose/noite",
        "note": "Combinação oral + rectal superior a cada um isolado"
      }
    ],
    "prep": "Oral: comprimidos e granulado — não mastigar; engolir inteiros (libertação pH-dependente).",
    "ci": [
      "Insuficiência renal grave (TFG < 30 ml/min — nefrotoxicidade)",
      "Alergia a salicilatos"
    ],
    "alert": [
      "⚠️ Nefrotoxicidade — monitorizar função renal anualmente; rara mas irreversível",
      "Hepatotoxicidade rara — monitorizar TFH",
      "Síndrome de hipersensibilidade aguda (piora paradoxal dos sintomas — raro)"
    ],
    "source": "BNF for Children 2023-24; ECCO-ESPGHAN Paediatric IBD Guidelines 2018; Turner D et al. J Pediatr Gastroenterol Nutr 2012"
  }
];

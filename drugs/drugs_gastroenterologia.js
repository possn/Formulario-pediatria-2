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
      },
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
    "prep": "EV: diluir em SF ou SG5%. Administrar em 15 min.",
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
    "source": "Formulário de Pediatria 3ª Ed.; BNF for Children 2023-24; BNF for Children 2023-24; Freedman SB et al. NEJM 2006 (gastroenteritis); MASCC Antiemetic Guidelines 2023"
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
      },
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
    "prep": "Comprimidos de libertação prolongada — engolir inteiros. Não partir.",
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
    "source": "BNF for Children 2023-24; ECCO/ESPGHAN Guidelines 2023; BNF for Children 2023-24; ECCO-ESPGHAN Paediatric IBD Guidelines 2018; Turner D et al. J Pediatr Gastroenterol Nutr 2012"
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
    "prep": "Oral: comprimidos inteiros.",
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
    "source": "BNF for Children 2023-24; Bass NM et al. NEJM 2010 (encefalopatia hepática); Pimentel M et al. Ann Intern Med 2011"
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
        "ind": "Encefalopatia hepática",
        "val": "0,5–1 ml/kg/dose PO ou SNG",
        "max": "30–45 ml/dose (adolescente/adulto)",
        "freq": "q4–8h; titular para 2–3 dejecções moles/dia",
        "note": "Também: enema 200 ml + 700 ml água morna retido 30–60 min — para encefalopatia grave"
      },
      {
        "ind": "Obstipação funcional",
        "val": "< 1 ano: 2,5 ml/dia; 1–5 anos: 5 ml/dia; 6–12 anos: 10 ml/dia",
        "max": "30 ml/dia em crianças",
        "freq": "1–2 doses/dia; ajustar por resposta",
        "note": ""
      }
    ],
    "prep": "Oral: diluir em água, sumo ou leite para melhorar palatabilidade. Via SNG: pode administrar directamente.",
    "ci": [
      "Galactosemia (contém galactose e lactose)",
      "Obstrução intestinal"
    ],
    "alert": [
      "⚠️ Flatulência e cólicas abdominais — frequentes no início; reduzir dose se incomodativo",
      "⚠️ Diarreia excessiva com sobredose — desidratação e hipernatremia",
      "Administrar com cuidado em diabéticos (contém lactose e galactose — pequenas quantidades)",
      "Efeito 24–48h após início — não esperar resposta imediata"
    ],
    "source": "BNF for Children 2023-24; ESPGHAN Constipation Guidelines 2014; Bass NM et al. NEJM 2010"
  }
];

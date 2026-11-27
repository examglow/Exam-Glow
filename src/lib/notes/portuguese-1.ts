import type { Chapter } from "./types";

/**
 * Cambridge IGCSE First Language Portuguese (0504) 2028–2029 Syllabus Notes
 * Part 1: Chapters 1–3
 * - Chapter 1: Compreensão e Análise Textual (Reading Comprehension)
 * - Chapter 2: Análise de Linguagem e Efeitos Estilísticos (Language and Style)
 * - Chapter 3: Redação Dirigida e Síntese (Directed Writing and Summary)
 */
export const PORTUGUESE_PART1: Chapter[] = [
  {
    number: 1,
    title: "Compreensão e Análise Textual",
    section: "Componente 1: Leitura e Redação Dirigida",
    topic: "Leitura Crítica, Inferência, Ideia Central, Vocabulário Contextual e Falsos Amigos",
    intro:
      "A prova de Leitura do IGCSE First Language Portuguese (0504) exige dos candidatos uma compreensão profunda e crítica de textos em prosa de autores contemporâneos lusófonos. Este capítulo desenvolve competências de leitura atenta, diferenciação entre significado literal e inferido, identificação do propósito e tom do autor, e descodificação de vocabulário e expressões idiomáticas em contexto.",
    subheadings: [
      {
        title: "Técnicas de Leitura Crítica e Inferência de Significado",
        body:
          "**1. Abordagem da Leitura no Exame de Língua Primeira:**\n" +
          "Ao contrário de exames de língua estrangeira, a prova de Português Língua Primeira avalia a capacidade de decifrar subtextos, nuances retóricas, intenções implícitas e ambiguidades intencionais em artigos de opinião, ensaios e excertos literários.\n\n" +
          "**2. Leitura Literal vs Leitura Inferencial:**\n" +
          "- **Compreensão Literal:** Identificação de factos explícitos, dados estatísticos, sequências cronológicas e argumentos diretos expressos na superfície do texto.\n" +
          "- **Compreensão Inferencial (Ler nas Entrelinhas):** Dedução lógica de conclusões não expressas explicitamente a partir de pistas contextuais, escolha de adjetivos, metáforas e omissões voluntárias do autor.\n" +
          "  - *Exemplo:* Se o autor descreve uma reunião com a frase *'Os participantes olhavam repetidamente para os relógios enquanto o orador consultava pilhas intermináveis de diapositivos'*, infere-se tédio, desinteresse e prolixidade, mesmo que essas palavras nunca surjam no texto.\n\n" +
          "**3. Estratégias de Descodificação em Exame:**\n" +
          "- **Primeira Leitura (Visão Global / Skimming):** Compreender o tema central, a tese defendida pelo autor e a organização dos parágrafos.\n" +
          "- **Segunda Leitura (Leitura Analítica Criteriosa):** Sublinhar conectores discursivos, operadores argumentativos e palavras-chave correspondentes aos itens da pergunta.\n" +
          "- **Identificação do Ponto de Vista do Autor:** Distinguir factos objetivos de juízos de valor subjetivos.",
        examinerTips: [
          "Nas perguntas de inferência, apoie sempre a sua dedução com uma referência precisa ao texto, explicando o raciocínio que liga a pista do texto à sua conclusão.",
          "Evite transcrever longos segmentos do texto original quando a pergunta solicita uma explicação com as suas próprias palavras ('por suas próprias palavras')."
        ],
        commonMistakes: [
          "Confundir a opinião de uma personagem ou de um interlocutor citado com a tese defendida pelo próprio autor do texto.",
          "Projetar opiniões pessoais exteriores que não têm respaldo nas evidências fornecidas no texto."
        ],
        recap: [
          "A leitura crítica exige distinguir entre dados explícitos (literais) e sentidos implícitos (inferenciais).",
          "Ler nas entrelinhas exige correlacionar escolhas lexicais com atitudes e intenções do autor.",
          "As respostas devem fundamentar-se exclusivamente no texto e ser formuladas por palavras próprias."
        ]
      },
      {
        title: "Identificação de Ideias Centrais e Estrutura Textual",
        body:
          "**1. A Arquitetura do Parágrafo e o Tópico Frasal:**\n" +
          "- Em textos expositivos e argumentativos bem redigidos, cada parágrafo desenvolve uma única **ideia nuclear** condensada no **tópico frasal** (habitualmente na primeira ou segunda frase do parágrafo).\n" +
          "- As frases subsequentes fornecem dados de suporte, citações de autoridade, exemplos ilustrativos ou contra-argumentos atenuados.\n\n" +
          "**2. Coesão Textual e Marcadores Discursivos:**\n" +
          "- Os articuladores de discurso orientam o leitor através da hierarquia de argumentos:\n" +
          "  - **Adição e Continuidade:** *além disso*, *outrossim*, *ademais*, *não apenas... mas também*.\n" +
          "  - **Oposição e Contraste:** *contudo*, *todavia*, *no entanto*, *embora*, *não obstante*.\n" +
          "  - **Causa e Consequência:** *porquanto*, *visto que*, *por conseguinte*, *em virtude de*.\n" +
          "  - **Conclusão:** *portanto*, *em suma*, *dessarte*, *face ao exposto*.\n\n" +
          "**3. Distinção entre Tese, Argumento e Exemplo:**\n" +
          "- **Tese:** A proposição central que o autor procura validar ou defender junto do leitor.\n" +
          "- **Argumentos:** As razões lógicas, científicas, éticas ou económicas que fundamentam a tese.\n" +
          "- **Exemplos:** Casos concretos, relatos ou estatísticas destinados a ilustrar um argumento; **não constituem argumentos independentes em exercícios de síntese**.",
        examinerTips: [
          "Nos exercícios de síntese e compreensão, elimine sempre os exemplos ilustrativos e concentre-se exclusivamente nos argumentos estruturais.",
          "Identifique a tese principal logo na introdução e analise como a conclusão reafirma ou expande essa tese."
        ],
        commonMistakes: [
          "Tomar um mero exemplo concreto ilustrativo como se fosse a tese central do autor.",
          "Ignorar os conectores adversativos (como 'contudo' ou 'todavia'), que frequentemente invertem a posição apresentada anteriormente."
        ],
        recap: [
          "Cada parágrafo organiza-se em torno de um tópico frasal e elementos de suporte.",
          "Os conectores discursivos estabelecem relações de causa, contraste, adição e conclusão.",
          "A tese é a ideia orientadora; os argumentos são as justificações lógicas; os exemplos são ilustrações secundárias."
        ]
      },
      {
        title: "Vocabulário Contextual e Falsos Amigos",
        body:
          "**1. Dedução de Significado por Morfologia e Contexto:**\n" +
          "- Quando confrontado com vocabulário erudito ou arcaico, o candidato deve mobilizar competências morfológicas:\n" +
          "  - **Prefixos:** *in-/des-* (negação, ex: *inócuo*, *descomedido*); *sub-* (inferioridade); *hiper-* (excesso).\n" +
          "  - **Sufixos:** *-izar* (ação causativa); *-ismo* (doutrina, tendência); *-voro* (alimentação).\n" +
          "  - **Campos Lexicais:** Observar o campo semântico que envolve o termo para inferir a sua conotação positiva ou pejorativa.\n\n" +
          "**2. Falsos Amigos (Falsos Cognatos) e Armadilhas Semânticas:**\n" +
          "- **Pretender:** Significa *ter intenção de / tencionar* (NÃO *fingir* / to pretend).\n" +
          "- **Puxar:** Significa *exercer tração / mover em direção a si* (NÃO *empurrar* / to push).\n" +
          "- **Constipação:** Em Portugal significa *resfriado comum / gripe* (NÃO *prisão de ventre*).\n" +
          "- **Propina:** Em Portugal refere-se à *taxa de matrícula / anuidade universitária* (NÃO *suborno* como no Brasil).\n" +
          "- **Borracha:** Significa *apagador / elastómero* (em espanhol significa *embriagada*).\n" +
          "- **Exquisito:** Em português significa *estranho / bizarro / invulgar* (em espanhol significa *delicioso / requintado*).\n" +
          "- **Eventualmente:** Significa *ocasionalmente / por acaso* (NÃO *finalmente / ao fim de contas* / eventually).",
        examinerTips: [
          "Ao explicar o significado de uma palavra em contexto, substitua-a mentalmente por um sinónimo na frase para verificar se a coesão gramatical e o sentido original se mantêm intactos.",
          "Atenção às diferenças semânticas entre o português europeu e o português brasileiro em termos correntes (ex: 'propina', 'fato/terno', 'comboio/trem')."
        ],
        commonMistakes: [
          "Traduzir 'eventualmente' como 'finalmente' em virtude da interferência do inglês 'eventually'.",
          "Interpretar 'esquisito' como um elogio de sofisticação; em português padrão significa 'estranho' ou 'anómalo'."
        ],
        recap: [
          "O significado de palavras desconhecidas deduz-se pela raiz morfológica e pelo campo semântico envolvente.",
          "Cuidado com os falsos cognatos: pretender (ter intenção), puxar (tracionar), eventualmente (ocasionalmente), esquisito (estranho).",
          "Respeite as variações lexicais legítimas entre as normas do espaço lusófono."
        ]
      }
    ]
  },
  {
    number: 2,
    title: "Análise de Linguagem e Efeitos Estilísticos",
    section: "Componente 1: Leitura e Redação Dirigida",
    topic: "Figuras de Estilo, Escolha Lexical, Conotação, Efeitos Afetivos e Estrutura Rítmica",
    intro:
      "A secção de análise de linguagem avalia a capacidade do candidato de explicar detalhadamente COMO o autor utiliza recursos estilísticos, escolhas lexicais e estruturas frásicas para criar impressões sensoriais, despertar emoções e influenciar o leitor. Este capítulo detalha o inventário de figuras de estilo, a distinção entre denotação e conotação, e a análise de tom.",
    subheadings: [
      {
        title: "Linguagem Figurativa e Figuras de Estilo",
        body:
          "**1. A Função da Linguagem Figurativa:**\n" +
          "As figuras de estilo transformam o significado literal das palavras, gerando imagens visuais, ressonâncias emotivas e densidade poética que captam a imaginação do leitor.\n\n" +
          "**2. As Principais Figuras de Estilo e os seus Efeitos no Leitor:**\n" +
          "- **Metáfora:** Transferência direta de significado entre dois campos conceptuais sem elemento comparativo explícito (*'O tempo é um rio caudaloso que arrasta memórias'*). Cria uma identificação imediata e vívida.\n" +
          "- **Comparação:** Confronto explícito de duas realidades através de conectivos (*como, tal como, parece, assemelha-se a* — *'A cidade brilhava como uma joia abandonada na noite'*).\n" +
          "- **Personificação / Prosopopeia:** Atribuição de sentimentos, ações ou traços humanos a seres inanimados ou animais (*'O vento uivava a sua fúria contra as vidraças'*). Cria dramatismo e atmosfera opressiva.\n" +
          "- **Hipérbole:** Exagero deliberado e desmedido de uma realidade para intensificar um sentimento (*'Já lhe expliquei este problema um milhão de vezes'* / *'Chorou rios de lágrimas'*).\n" +
          "- **Metonímia:** Substituição de um termo por outro com o qual mantém relação de proximidade lógica (a causa pelo efeito, o autor pela obra, a parte pelo todo — *'Ler Camões'*, *'Tinha mil cabeças de gado'*).\n" +
          "- **Antítese:** Aproximação de conceitos opostos para evidenciar um contraste dramático (*'Nasceu na luz da ribalta e morreu nas trevas do esquecimento'*).\n" +
          "- **Oxímoro / Paradoxo:** Fusão de ideias mutuamente exclusivas que geram uma verdade surpreendente (*'Um silêncio ensurdecedor'*, *'Amor é fogo que arde sem se ver'*).\n" +
          "- **Ironia:** Afirmar o contrário do que se pensa, com entoação ou contexto que permite ao leitor descodificar a verdadeira intenção crítica ou sarcástica.",
        examinerTips: [
          "Nas perguntas de efeito estilístico, NUNCA se limite a identificar o nome da figura de estilo. O Cambridge não atribui cotação apenas por rotular 'É uma metáfora'. Deve explicar: (1) O que a imagem sugere; (2) Qual o efeito visual ou emocional provocado no leitor.",
          "Analise a palavra exata escolhida pelo autor e explique a sua carga conotativa antes de concluir o efeito global."
        ],
        commonMistakes: [
          "Dizer apenas 'O autor usa uma hipérbole para chamar a atenção'; esta resposta é genérica e obtém zero pontos. É obrigatório explicar O QUE é enfatizado e PORQUÊ.",
          "Confundir comparação (tem conectivo comparativo: 'como') com metáfora (identificação direta sem conectivo)."
        ],
        recap: [
          "As figuras de estilo criam efeitos imagéticos e emotivos fundamentais para a análise textual.",
          "Metáfora (identificação direta), Comparação (com 'como'), Personificação (traços humanos em objetos), Hipérbole (exagero), Antítese (oposição).",
          "A análise no exame exige explicar o efeito específico no leitor e a sugestão semântica da imagem."
        ]
      },
      {
        title: "Escolha Lexical, Conotação e Tom do Autor",
        body:
          "**1. Denotação vs Conotação:**\n" +
          "- **Sentido Denotativo:** O significado literal, objetivo e dicionarizado da palavra (*'A casa ruiu durante o terramoto'* — colapso físico de uma habitação).\n" +
          "- **Sentido Conotativo:** A rede de associações afetivas, culturais, simbólicas e subjetivas evocadas pela palavra (*'O seu império financeiro ruiu'* — ruína, falência, perda de prestígio).\n\n" +
          "**2. Análise do Léxico Sensorial:**\n" +
          "- **Adjetivação Expressiva:** O uso de adjetivos antepostos ou pospostos que revelam a atitude do autor (*'uma nefasta decisão'* vs *'uma decisão fria'*).\n" +
          "- **Verbos de Ação Dinâmicos:** A substituição de verbos estáticos por verbos de forte carga cinética (*'arrastou-se'*, *'precipitou-se'*, *'despedaçou'*).\n" +
          "- **Campos Sensoriais:** Palavras que ativam a visão (cromatismo), audição (onomatopeias, sons estridentes), olfato e tato.\n\n" +
          "**3. Descodificação do Tom do Autor:**\n" +
          "- O tom reflete a atitude emocional e intelectual do narrador face ao tema:\n" +
          "  - **Tom Satírico / Irónico:** Crítica mordaz através de trocadilhos e elogios fingidos.\n" +
          "  - **Tom Melancólico / Elegíaco:** Nostalgia, tristeza perante a passagem do tempo ou perdas irremediáveis.\n" +
          "  - **Tom Polémico / Combate:** Frases curtas e incisivas, vocabulário bélico, interrogações retóricas indignadas.\n" +
          "  - **Tom Solene / Panegírico:** Dignidade, elevação moral, veneração cívica ou histórica.",
        examinerTips: [
          "Para identificar o tom do autor, observe os adjetivos e advérbios modais: palavras como 'infelizmente', 'lamentavelmente', 'surpreendentemente' revelam de imediato o posicionamento subjetivo.",
          "Ao analisar uma palavra, indique o seu campo lexical e as sensações associadas (ex: 'A escolha do verbo rastejar evoca submissão e indignidade animal')."
        ],
        commonMistakes: [
          "Descrever o tom de um texto apenas como 'bom' ou 'mau'; utilize vocabulário crítico rigoroso: irónico, nostálgico, laudatório, apreensivo, indignado.",
          "Ignorar adjetivos e advérbios que funcionam como marcas de enunciação da voz autoral."
        ],
        recap: [
          "A denotação é o sentido literal; a conotação compreende as associações emocionais e simbólicas.",
          "Adjetivos e verbos dinâmicos constroem a atmosfera sensorial do texto.",
          "O tom reflete a postura do autor: irónico, polémico, nostálgico, solene, crítico."
        ]
      },
      {
        title: "Estrutura Sintática e Efeitos Rítmicos",
        body:
          "**1. A Expressividade da Sintaxe:**\n" +
          "A forma como as frases são estruturadas influencia diretamente o ritmo da leitura e o impacto dramático do discurso.\n\n" +
          "**2. Variação na Extensão das Frases:**\n" +
          "- **Períodos Longos e Subordinados:** Criam um ritmo cadenciado, reflexivo e meditativo; típicos de argumentação filosófica ou descrições minuciosas de cenários.\n" +
          "- **Frases Curtas e Segmentadas:** Aceleram o ritmo narrativo, transmitem urgência, choque, pânico ou tensão dramática (*'A porta rangeu. Passos no corredor. Um grito. Silêncio'*).\n\n" +
          "**3. Recursos Sintáticos de Realce:**\n" +
          "- **Paralelismo Sintático:** Repetição de uma mesma estrutura frásica para criar simetria e memorabilidade (*'Lutou pelos fracos, combateu os tiranos, venceu a adversidade'*).\n" +
          "- **Anáfora:** Repetição da mesma palavra no início de frases consecutivas, intensificando a carga emotiva (*'Era preciso resistir. Era preciso ter coragem. Era preciso vencer'*).\n" +
          "- **Interrogação Retórica:** Pergunta que não espera resposta, colocada para provocar reflexão, cumplicidade ou constrangimento no leitor.\n" +
          "- **Expressividade da Pontuação:**\n" +
          "  - **Reticências (...):** Sugerem hesitação, pensamentos incompletos, reticência, suspense ou perda de fôlego.\n" +
          "  - **Travessões (—):** Isolam comentários marginais da voz autoral, conferindo um tom coloquial ou explicativo.\n" +
          "  - **Exclamações (!):** Expressam espanto, fúria, alegria ou indignação moral.",
        examinerTips: [
          "Ao comentar a pontuação, explique a função emocional: não diga apenas 'usa reticências'; explique que 'as reticências transmitem a hesitação interior da personagem diante de uma decisão trágica'.",
          "Observe se o autor utiliza frases nominais (sem verbo) para criar imagens instantâneas ou fragmentação visual."
        ],
        commonMistakes: [
          "Limitar-se a constatar 'o autor fez muitas perguntas'; explique o efeito persuasivo da interrogação retórica em envolver o leitor.",
          "Ignorar o impacto do ritmo frásico no suspense narrativo."
        ],
        recap: [
          "Frases longas conferem solenidade e profundidade; frases curtas aceleram o ritmo e criam suspense.",
          "O paralelismo e a anáfora reforçam ideias pela simetria e repetição rítmica.",
          "A pontuação expressiva (reticências, travessões, exclamações) revela o estado psicológico do emissor."
        ]
      }
    ]
  },
  {
    number: 3,
    title: "Redação Dirigida e Síntese",
    section: "Componente 1: Leitura e Redação Dirigida",
    topic: "Metodologia do Resumo, Síntese Temática, Paráfrase, Nominalização e Formatos Comunicativos",
    intro:
      "A prova de Redação Dirigida e Síntese exige que o candidato processe informação de um ou dois textos de estímulo, selecione pontos-chave pertinentes, sintetize as ideias sem cópias literais e elabore uma resposta estruturada num género textual específico (artigo de opinião, carta formal, discurso ou memorando).",
    subheadings: [
      {
        title: "Metodologia do Resumo e Síntese de Textos",
        body:
          "**1. Objetivos da Tarefa de Síntese:**\n" +
          "Demonstrar capacidade de ler com precisão, identificar 10 a 15 ideias nucleares relevantes ao comando da pergunta e reuni-las num texto conciso, fluído e objetivo.\n\n" +
          "**2. O Procedimento em Cinco Etapas:**\n" +
          "1. **Análise Rigorosa do Enunciado:** Identificar claramente os dois ou três eixos temáticos solicitados (ex: *'Sintetize os motivos que levaram ao êxodo rural e as soluções propostas pelos autores'*).\n" +
          "2. **Grelha de Extração (Sublinhado e Apontamentos):**\n" +
          "   - Percorrer os textos e sublinhar apenas os factos, causas e soluções diretamente ligados ao enunciado.\n" +
          "   - Descartar anedotas pessoais, descrições secundárias, metáforas, citações em discurso direto e dados numéricos repetitivos.\n" +
          "3. **Agrupamento e Fusão Conceitual:**\n" +
          "   - Se os dois textos abordam a mesma ideia com palavras diferentes, agrupe-as num único ponto síntese.\n" +
          "   - Não resuma o Texto A primeiro e depois o Texto B; integre ambos numa abordagem temática coesa.\n" +
          "4. **Redação do Rascunho com Conectores Lógicos:**\n" +
          "   - Estruture em 2 ou 3 parágrafos temáticos bem equilibrados.\n" +
          "   - Utilize articuladores de coesão: *Em primeiro lugar*, *No que concerne às causas*, *Adicionalmente*, *No plano das soluções*.\n" +
          "5. **Controlo da Extensão (Limite de Palavras):**\n" +
          "   - Respeitar rigorosamente o intervalo de palavras recomendado (geralmente 200–250 palavras). Exceder o limite acarreta a perda de pontuação de estilo e eventuais pontos fora da margem deixam de ser corrigidos.",
        examinerTips: [
          "Mantenha uma atitude de total neutralidade e objetividade: NUNCA inclua opiniões próprias, comentários valorativos ou introduções retóricas em resumos de texto.",
          "Cruze as ideias dos dois textos em vez de escrever um parágrafo sobre o Texto 1 e outro sobre o Texto 2; a síntese integrada demonstra maturidade analítica superior."
        ],
        commonMistakes: [
          "Copiar segmentos inteiros do texto original (cópia servil); o exame pune severamente o plágio de frases do texto.",
          "Incluir opiniões pessoais como 'Acho que os autores têm toda a razão'."
        ],
        recap: [
          "A síntese exige selecionar 10–15 pontos factuais de acordo com o enunciado.",
          "Funda e integre as informações de ambos os textos de forma temática.",
          "Elimine anedotas, exemplos e citações; mantenha um tom puramente objetivo dentro do limite de palavras."
        ]
      },
      {
        title: "Técnicas de Paráfrase e Nominalização",
        body:
          "**1. A Proibição de Cópias Literais:**\n" +
          "Os critérios de correção do Cambridge punem fortemente a apropriação textual de orações inteiras do estímulo. A avaliação de competência linguística mede a riqueza de vocabulário e a flexibilidade sintática do candidato ao reformular as ideias.\n\n" +
          "**2. A Técnica da Nominalização (Transformar Orações em Substantivos):**\n" +
          "- A nominalização é o recurso mais elegante e eficiente para condensar informação e economizar palavras:\n" +
          "  - *Texto original:* 'As populações estão a destruir as florestas de forma descontrolada para plantar soja.'\n" +
          "  - *Nominalização:* **'A desflorestação desenfreada para fins agrícolas...'**\n" +
          "  - *Texto original:* 'Os jovens abandonam o campo porque não conseguem arranjar empregos qualificados.'\n" +
          "  - *Nominalização:* **'A escassez de emprego qualificado motiva o êxodo juvenil...'**\n\n" +
          "**3. Estratégias Complementares de Paráfrase:**\n" +
          "- **Substituição Sinímica Precisa:** Substituir termos por equivalentes formais (*aumentar $\\rightarrow$ intensificar-se / expandir-se*; *problema $\\rightarrow$ adversidade / óbice*).\n" +
          "- **Inversão de Voz Gramatical:** Transformar a voz ativa em passiva ou voz média com 'se' (*'O governo aprovou novas leis' $\\rightarrow$ 'Foram promulgadas novas diretrizes legais'*).\n" +
          "- **Uso de Opostos com Negação:** *'A situação continuou a piorar' $\\rightarrow$ 'A situação não registou melhorias'*.",
        examinerTips: [
          "A nominalização é a melhor ferramenta para cumprir limites estritos de palavras, pois elimina verbos auxiliares, conjunções subordinativas e preposições desnecessárias.",
          "Pratique transformar orações subordinadas adverbiais extensas em locuções prepositivas com substantivos abstratos (ex: 'Porque a economia entrou em crise' -> 'Face à recessão económica')."
        ],
        commonMistakes: [
          "Limitar-se a trocar duas ou três palavras por sinónimos fracos enquanto mantém a estrutura idêntica da frase original.",
          "Usar sinónimos fora de contexto que alteram o significado rigoroso do termo técnico."
        ],
        recap: [
          "Parafrasear é indispensável para obter notas de excelência no critério de linguagem.",
          "A nominalização transforma verbos e orações subordinadas em sintagmas nominais compactos.",
          "Alterne vozes verbais e empregue vocabulário formal preciso sem desvirtuar o sentido original."
        ]
      },
      {
        title: "Formatos de Redação Dirigida: Artigos, Cartas e Discursos",
        body:
          "**1. A Natureza da Redação Dirigida:**\n" +
          "O candidato deve adotar uma persona, um público-alvo e um género textual específico para responder a uma situação prática com base nos textos de leitura.\n\n" +
          "**2. Convenções dos Principais Géneros Textuais:**\n" +
          "- **Carta Formal:**\n" +
          "  - *Estrutura:* Local e data no canto superior; fórmula de saudação formal (*Exmo. Senhor Diretor...*); introdução clara indicando o motivo da missiva; corpo dividido em parágrafos temáticos; fórmula de despedida polida (*Com os meus melhores cumprimentos* / *Subscrevo-me com a mais elevada consideração*); assinatura.\n" +
          "  - *Registo:* Formal, cortês, utilização do tratamento por *Vossa Excelência* ou *o Senhor Diretor*.\n" +
          "- **Artigo de Opinião / Jornalístico:**\n" +
          "  - *Estrutura:* Título apelativo e instigante; introdução com contextualização do problema; desenvolvimento argumentativo sustentado; conclusão com apelo à ação ou perspetiva futura.\n" +
          "  - *Registo:* Padrão culto, envolvente, recurso a perguntas retóricas e metáforas moderadas.\n" +
          "- **Discurso Público:**\n" +
          "  - *Estrutura:* Saudação inicial solene aos presentes (*'Caros colegas, prezados professores, senhoras e senhores'*); interpelações diretas ao auditório (*'Pensem comigo'*, *'Não podemos aceitar passivamente'*); ritmo oratório enfático com anáforas e paralelismos; agradecimento final (*'Muito obrigado pela vossa atenção'*).\n" +
          "  - *Registo:* Oratório, persuasivo e empático.",
        examinerTips: [
          "Adapte rigorosamente o tom e o registo de língua ao público-alvo estipulado no enunciado: uma carta a um ministro exige extrema formalidade; um artigo num jornal escolar admite maior dinamismo e proximidade.",
          "Nunca se esqueça das convenções do género: um artigo precisa de título; uma carta formal precisa de fórmulas protocolares de abertura e fecho."
        ],
        commonMistakes: [
          "Escrever uma dissertação genérica quando o enunciado pede expressamente um discurso ou uma carta formal.",
          "Misturar formas de tratamento: tratar o interlocutor por 'você' numa frase e por 'tu' na frase seguinte."
        ],
        recap: [
          "A redação dirigida exige conformidade com as convenções do género e adequação ao público-alvo.",
          "Cartas formais exigem saudações e despedidas protocolares; artigos exigem títulos atrativos; discursos exigem interpelação ao auditório.",
          "Mantenha consistência gramatical no tratamento ao longo de todo o texto."
        ]
      }
    ]
  }
];

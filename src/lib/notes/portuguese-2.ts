import type { Chapter } from "./types";

/**
 * Cambridge IGCSE First Language Portuguese (0504) 2028–2029 Syllabus Notes
 * Part 2: Chapters 4–6
 * - Chapter 4: Composição Dissertativa e Argumentativa (Discursive and Argumentative Writing)
 * - Chapter 5: Composição Narrativa e Descritiva (Narrative and Descriptive Composition)
 * - Chapter 6: Gramática, Ortografia e Variações Lusófonas (Grammar, Orthography and Lusophone Contexts)
 */
export const PORTUGUESE_PART2: Chapter[] = [
  {
    number: 4,
    title: "Composição Dissertativa e Argumentativa",
    section: "Componente 2: Redação Contínua",
    topic: "Estrutura Dissertativa, Tese, Contra-Argumentação, Conectores Lógicos e Objetividade",
    intro:
      "A prova de Redação do IGCSE First Language Portuguese (Componente 2) avalia a capacidade de formular ideias com clareza, coerência e densidade crítica. Este capítulo explora a arquitetura do ensaio argumentativo e dissertativo, a formulação de teses persuasivas, a refutação de perspetivas opostas, e o uso de operadores discursivos sofisticados.",
    subheadings: [
      {
        title: "Estrutura da Dissertação Argumentativa",
        body:
          "**1. A Arquitetura Clássica da Dissertação (Modelo em Quatro Partes):**\n" +
          "1. **Introdução (Contextualização e Tese):**\n" +
          "   - **Gancho Inicial (Apresentação Temática):** Situa o tema no contexto social, histórico ou filosófico contemporâneo.\n" +
          "   - **Problematização:** Define a questão controversa central.\n" +
          "   - **Tese:** Declaração clara e inequívoca do posicionamento crítico do autor que será demonstrado ao longo do ensaio.\n" +
          "2. **Desenvolvimento — Primeiro Eixo Argumentativo:**\n" +
          "   - Apresentação do primeiro argumento de peso sustentado por evidências, factos e raciocínio lógico causal.\n" +
          "3. **Desenvolvimento — Segundo Eixo / Contra-Argumentação:**\n" +
          "   - Análise crítica de um ponto de vista alternativo ou contra-argumento, seguida da sua imediata refutação lógica (**dialética argumentativa**).\n" +
          "4. **Conclusão (Síntese e Projeção):**\n" +
          "   - Retoma e reafirma a tese à luz dos argumentos apresentados.\n" +
          "   - Oferece uma reflexão prospectiva ou proposta de intervenção sem introduzir argumentos novos.\n\n" +
          "**2. Tipos de Argumentos de Alto Nível:**\n" +
          "- **Argumento de Causalidade:** Estabelece uma relação direta de causa e efeito indiscutível.\n" +
          "- **Argumento de Autoridade:** Citação ou referência ao pensamento de filósofos, cientistas, sociólogos ou tratados internacionais relevantes.\n" +
          "- **Argumento por Exemplificação Consistente:** Evidência histórica ou sociológica concreta que corrobora o princípio abstrato defendido.\n" +
          "- **Argumento por Redução ao Absurdo:** Demonstrar a inconsistência da tese oposta mostrando que as suas consequências lógicas seriam desastrosas ou contraditórias.",
        examinerTips: [
          "Mantenha uma posição ponderada: o exame do Cambridge valoriza ensaios que reconhecem a complexidade de um problema antes de defender uma posição sólida.",
          "Dedique a primeira frase de cada parágrafo de desenvolvimento ao argumento central desse bloco (tópico frasal claro)."
        ],
        commonMistakes: [
          "Apresentar uma sucessão de perguntas sem responder a nenhuma; o ensaio argumentativo exige afirmações fundamentadas, não desabafos interrogativos.",
          "Introduzir novos argumentos na conclusão em vez de sintetizar o que já foi demonstrado."
        ],
        recap: [
          "A dissertação compõe-se de Introdução (tema + tese), Desenvolvimento (argumentos + refutação) e Conclusão (síntese + projeção).",
          "Empregue argumentos de causalidade, autoridade e exemplificação histórica.",
          "Reconheça e refute contra-argumentos para evidenciar maturidade crítica."
        ]
      },
      {
        title: "Conectores Lógicos e Progressão Argumentativa",
        body:
          "**1. A Malha da Coesão Interparágrafos:**\n" +
          "Um ensaio de excelência não parece uma coleção de parágrafos isolados; cada parágrafo conecta-se organicamente ao anterior.\n\n" +
          "**2. Tabela de Conectores Discursivos Cultos para Redação:**\n" +
          "- **Abertura e Enumeração:** *Em primeiro lugar*, *Primacialmente*, *A título preliminar*, *Num primeiro momento*.\n" +
          "- **Transição e Continuidade:** *Paralelamente*, *Por outro lado*, *Nesta mesma linha de raciocínio*, *Cumpre igualmente salientar*.\n" +
          "- **Adição e Intensificação:** *Outrossim*, *Ademais*, *De igual modo*, *Não menos relevante é o facto de*.\n" +
          "- **Oposição, Ressalva e Concessão:** *Contudo*, *Todavia*, *Não obstante*, *Conquanto*, *Em contrapartida*, *Muito embora*.\n" +
          "- **Causa e Justificação:** *Porquanto*, *Haja vista que*, *Dado que*, *Na medida em que*, *Em virtude de*.\n" +
          "- **Consequência e Dedução:** *Por conseguinte*, *Consequentemente*, *Infere-se pois que*, *De onde decorre que*.\n" +
          "- **Conclusão e Arremate:** *Dessarte*, *Destarte*, *Em suma*, *Em remate*, *Face aos argumentos expendidos*.\n\n" +
          "**3. Evitar a Repetição Mecânica de Conectores:**\n" +
          "- Substitua repetições de 'mas' por *contudo*, *todavia*, *no entanto*.\n" +
          "- Substitua 'porque' por *visto que*, *já que*, *porquanto*.\n" +
          "- Substitua 'também' por *igualmente*, *outrossim*, *de igual forma*.",
        examinerTips: [
          "Utilize o conector concessivo 'conquanto' ou 'embora' seguido de conjuntivo (subjuntivo) para enriquecer a estrutura sintática (ex: 'Conquanto existam desafios hercúleos, a educação continua a ser o vetor primordial de emancipação').",
          "Verifique a pontuação dos conectores: conectores adversativos e conclusivos deslocados para o meio da oração devem ser isolados por vírgulas (*'A sociedade moderna, contudo, permanece alheia...'*)."
        ],
        commonMistakes: [
          "Usar conectores sem compreender a sua relação semântica (ex: usar 'por conseguinte' quando a relação é de causa e não de consequência).",
          "Iniciar todos os parágrafos com as mesmas palavras repetitivas ('Também acho que...')."
        ],
        recap: [
          "Os conectores garantem a progressão temática fluída entre parágrafos.",
          "Empregue conectores formais variados: ademais, todavia, porquanto, por conseguinte, destarte.",
          "Isole conectores oracionais intercalados entre vírgulas."
        ]
      },
      {
        title: "Objetividade e Fundamentação de Ideias",
        body:
          "**1. O Registo Impessoal e Distanciado:**\n" +
          "- O discurso de ensaio académico em língua primeira ganha autoridade e credibilidade quando formulado na **terceira pessoa do singular ou plural**, ou através de estruturas impessoais:\n" +
          "  - *Evitar:* 'Eu acho que a tecnologia faz mal aos jovens porque eu vejo nos meus amigos.'\n" +
          "  - *Formulação Académica:* **'Constata-se que a omnipresença dos dispositivos digitais tem suscitado preocupações crescentes quanto à saúde mental da juventude...'**\n" +
          "- **Recursos de Impessoalização:**\n" +
          "  - Voz passiva sintética com 'se': *'Verifica-se que...'*, *'Torna-se imperioso analisar...'*, *'Depreende-se dos estudos...'*.\n" +
          "  - Verbos no infinitivo como sujeito: *'Ignorar as diretrizes climáticas equivale a...'*\n\n" +
          "**2. Erradicação de Falácias Argumentativas Comuns:**\n" +
          "- **Generalização Apressada:** Concluir uma verdade universal a partir de um caso isolado (*'Todos os políticos são corruptos'*).\n" +
          "- **Ataque Pessoal (*Ad Hominem*):** Desqualificar uma ideia atacando a pessoa que a defendeu em vez de rebater o argumento.\n" +
          "- **Falso Dilema:** Reduzir um debate complexo a apenas dois extremos opostos (*'Ou preservamos a economia, ou protegemos a floresta'*).\n" +
          "- **Apelo à Tradição:** Defender que algo é correto simplesmente porque 'sempre se fez assim'.",
        examinerTips: [
          "Substitua a primeira pessoa 'eu penso' por expressões de distanciamento reflexivo como 'é razoável inferir', 'cabe salientar', 'releva notar'.",
          "Matize as afirmações absolutas através de modalizadores: 'tende a provocar', 'pode suscitar', 'em larga medida', evitando dogmatismos insustentáveis."
        ],
        commonMistakes: [
          "Usar linguagem de redes sociais ou gíria coloquial num ensaio dissertativo formal.",
          "Recorrer a generalizações infundadas sem dados concretos de suporte."
        ],
        recap: [
          "Adote um registo impessoal culto na terceira pessoa (verifica-se, cabe salientar).",
          "Fundamente afirmações com dados, lógica causal e referências históricas.",
          "Evite falácias lógicas como generalizações apressadas e falsos dilemas."
        ]
      }
    ]
  },
  {
    number: 5,
    title: "Composição Narrativa e Descritiva",
    section: "Componente 2: Redação Contínua",
    topic: "Redação Descritiva, Enredo Narrativo, Criação de Clímax, Caracterização e Diálogo",
    intro:
      "A secção de escrita criativa da Componente 2 oferece ao candidato a escolha entre opções descritivas e narrativas. Este capítulo explora o rigor da composição descritiva (ancorada na imersão multissensorial e na estática de enquadramentos) e a dinâmica da narrativa ficcional (arco dramático, gestão de clímax, caracterização psicológica e pontuação de diálogo).",
    subheadings: [
      {
        title: "Técnicas de Redação Descritiva",
        body:
          "**1. A Essência da Descrição Pura:**\n" +
          "Uma redação descritiva deve funcionar como uma **pintura em prosa** ou como uma câmara cinematográfica que percorre um cenário de forma minuciosa. **NÃO É UMA HISTÓRIA DE AÇÃO COM ENREDO**.\n\n" +
          "**2. Estratégias de Organização Espacial:**\n" +
          "- Uma boa descrição não salta erraticamente de um detalhe para outro; obedece a um plano de perspetiva:\n" +
          "  - **Do Panorâmico ao Pormenor:** Descrever a imensidão da paisagem montanhosa antes de focar uma flor que nasce numa fenda da rocha.\n" +
          "  - **Do Exterior ao Interior:** Descrever a fachada decrépita do casarão antes de transpor o umbral e revelar a penumbra da sala.\n" +
          "  - **Temporal / Gradual:** Descrever a transição da luz solar ao crepúsculo e à noite fechada num porto de pesca.\n\n" +
          "**3. Imersão Multissensorial Completa:**\n" +
          "- **Visual:** Cores, contrastes de luz e sombra (claro-escuro), reflexos, texturas visíveis (*'uma névoa opalina que envolvia as copas glaucas dos pinheiros'*).\n" +
          "- **Auditivo:** Ruídos de fundo, murmúrios, rangidos, estalidos, silêncios densos (*'o sussurro intermitente das ondas no cascalho'*, *'o estalar surdo da madeira carcomida'*).\n" +
          "- **Olfativo e Gustativo:** Cheiro a terra molhada (petricor), maresia salgada, aroma pungente a mofo, sabor metálico a ferrugem.\n" +
          "- **Tátil e Térmico:** A aspereza da pedra rugosa, a humidade viscosa, a frialdade cortante do vento boreal.",
        examinerTips: [
          "Mantenha o foco puramente descritivo: se introduzir personagens que começam a viver aventuras, correr perigos e resolver mistérios, a redação transforma-se numa narrativa e perde pontuação na rubrica descritiva.",
          "Utilize o pretérito imperfeito para criar uma atmosfera de duração suspensa e contemplative no tempo."
        ],
        commonMistakes: [
          "Permitir que uma narrativa de ação tome conta da descrição.",
          "Usar adjetivos banais e vazios como 'bonito', 'feio', 'grande'; prefira adjetivos densos e expressivos como 'majestoso', 'decrépito', 'imponente', 'sombrio'."
        ],
        recap: [
          "A descrição é uma exploração sensorial e estática de um cenário, sem enredo de ação.",
          "Estruture a descrição segundo um plano espacial: panorâmico ao detalhe, exterior ao interior.",
          "Ative os cinco sentidos: luzes, texturas, cheiros, ecos e temperatura."
        ]
      },
      {
        title: "Construção do Enredo Narrativo e Clímax",
        body:
          "**1. A Estrutura do Arco Dramático Clássico:**\n" +
          "1. **Situação Inicial (Equilíbrio e Atmosfera):** Apresentação do protagonista, do tempo e do espaço em pretérito imperfeito, estabelecendo um estado de normalidade.\n" +
          "2. **Elemento Desencadeador / Incidente Incitante:** Um acontecimento repentino, inesperado ou trágico que quebra o equilíbrio inicial e lança o protagonista num conflito inadiável.\n" +
          "3. **Peripécias e Ação Crescente:** Série de obstáculos, dilemas éticos, tentativas falhadas e tensão psicológica acumulada.\n" +
          "4. **Clímax (Ponto Culminante):** O momento de máxima voltagem dramática, confronto direto ou revelação crucial.\n" +
          "5. **Desenlace / Resolução:** Restauração de um novo equilíbrio, epifania interior do protagonista ou desfecho surpreendente (twist final).\n\n" +
          "**2. Gestão do Ritmo Narrativo:**\n" +
          "- **Controlo de Tempo e Elipse:** Acelerar períodos monótonos através de sumários narrativos (*'Os três meses seguintes passaram num borrão de trabalho'*).\n" +
          "- **Cena Dramática em Tempo Real:** Desacelerar o tempo no momento do clímax, descrevendo cada batimento cardíaco, respiração e fração de segundo em pormenor cinematográfico.",
        examinerTips: [
          "Limite o número de personagens a uma ou duas bem desenvolvidas e concentre a ação num único episódio dramático contido; narrativas que tentam cobrir anos de vida familiar tornam-se superficiais.",
          "Crie suspense através do prenúncio (*foreshadowing*): pequenos detalhes discretos no início que ganham significado aterrorizador no clímax."
        ],
        commonMistakes: [
          "Criar enredos mirabolantes de filmes de ação de Hollywood com perseguições de helicópteros e explosões irreais; o Cambridge valoriza a verosimilhança e a densidade emocional.",
          "Terminar a narrativa com clichés pueris como 'E então acordei e era tudo um sonho'."
        ],
        recap: [
          "O enredo narrativo segue: situação inicial, incidente desencadeador, peripécias, clímax e desenlace.",
          "Alterne o ritmo: sintetize o tempo comum e desacelere nos momentos culminantes.",
          "Evite clichés de sonho ou filmes de ação irreais; prefira a densidade psicológica e o realismo."
        ]
      },
      {
        title: "Caracterização de Personagens e Pontuação de Diálogo",
        body:
          "**1. Caracterização Direta vs Indireta:**\n" +
          "- **Caracterização Direta:** O narrador lista explicitamente os traços físicos ou morais da personagem (*'O velho Afonso era avarento e desconfiado'*).\n" +
          "- **Caracterização Indireta (A Regra do 'Mostra, Não Digas' / *Show, Don't Tell*):** As qualidades e defeitos da personagem são revelados através das suas ações, tiques nervosos, hábitos, escolhas e modo de falar (*'Afonso contava as moedas enferrujadas três vezes antes de trancar a gaveta e esconder a chave debaixo da língua'*).\n\n" +
          "**2. Pontuação Correta do Diálogo em Português Padrão:**\n" +
          "- Na tradição ortográfica da língua portuguesa, o diálogo é introduzido por **dois pontos (:)**, mudança de linha com avanço de parágrafo e **travessão (—)**:\n" +
          "  ```\n" +
          "  O capitão olhou para o horizonte encoberto e avisou:\n" +
          "  — A tempestade aproxima-se rapidamente. Recolham as velas!\n" +
          "  — Mas ainda temos tempo — hesitou o marinheiro.\n" +
          "  — Nem um minuto a perder! — trovejou a voz do oficial.\n" +
          "  ```\n" +
          "- **Verbos Introdutores de Discurso (Verba Dicendi):** Evite a repetição monótona de 'disse' ou 'falou'; utilize verbos que revelam o estado de espírito: *sussurrou, vociferou, inquiriu, retorquiu, balbuciou, desabafou, murmurou*.",
        examinerTips: [
          "Utilize o travessão (—) para abrir e fechar a fala da personagem quando interposta pelo narrador; nunca utilize aspas anglo-saxónicas duplas (\") para formatar diálogos em português padrão.",
          "O diálogo numa narrativa de exame deve ser breve e significativo: cada linha de fala deve avançar a ação ou revelar um conflito moral profundo."
        ],
        commonMistakes: [
          "Preencher páginas com diálogos banais de conversa quotidiana ('Olá', 'Tudo bem?', 'Tudo, e contigo?') que não acrescentam tensão nem profundidade à história.",
          "Esquecer o travessão de fecho quando a fala da personagem é interrompida pela intervenção do narrador."
        ],
        recap: [
          "Revele a personagem através de gestos e escolhas (caracterização indireta) em vez de descrições abstratas.",
          "Formate diálogos com dois pontos, travessão no início da fala e travessão delimitador na fala interrompida.",
          "Varie os verbos de enunciação: retorquiu, sussurrou, vociferou, inquiriu."
        ]
      }
    ]
  },
  {
    number: 6,
    title: "Gramática, Ortografia e Variações Lusófonas",
    section: "Componente 2: Redação Contínua",
    topic: "Concordância Verbal e Nominal, Regência, Colocação Pronominal, Crase e o Acordo Ortográfico",
    intro:
      "A correção gramatical e a riqueza vocabular são critérios determinantes de avaliação no exame First Language Portuguese. Este capítulo sistematiza as regras cruciais de concordância verbal e nominal, regência verbal, colocação dos pronomes clíticos (próclise, mesóclise, ênclise), o uso correto do acento grave indicativo de crase, e as normas unificadoras do Acordo Ortográfico no seio da CPLP.",
    subheadings: [
      {
        title: "Concordância Verbal e Nominal",
        body:
          "**1. Casos Especiais de Concordância Verbal:**\n" +
          "- **Sujeito Composto Anterior ao Verbo:** O verbo vai para o plural (*'O professor e o aluno debateram o tema'*).\n" +
          "- **Sujeito Composto Posterior ao Verbo:** O verbo pode concordar no plural ou concordar com o núcleo mais próximo (*'Discutiram/Discutiu o professor e os alunos'*).\n" +
          "- **Expressões Partitivas (A maioria de, Grande parte de, A percentagem de):**\n" +
          "  - Se acompanhadas de substantivo no plural, o verbo pode ficar no singular (concordância lógica com o núcleo singular) ou no plural (concordância atrativa com o adjunto plural):\n" +
          "  - *'A maioria dos cidadãos votou / votaram'* (ambas as construções são gramaticalmente corretas).\n" +
          "- **Concordância com a Partícula 'Se':**\n" +
          "  - **Partícula Apassivadora:** Sujeito paciente determina o número do verbo: *'Vende-se uma casa'* (singular); *'Vendem-se casas'* (plural).\n" +
          "  - **Índice de Indeterminação do Sujeito:** Com verbos transitivos indiretos (com preposição) ou intransitivos, o verbo fica **OBRIGATORIAMENTE NO SINGULAR**: *'Precisa-se de funcionários'* (NUNCA *precisam-se de funcionários*); *'Trabalha-se muito aqui'*.\n" +
          "- **Verbos Impessoais (Haver e Fazer):**\n" +
          "  - **Haver** no sentido de existir ou tempo decorrido é IMPESSOAL (não tem sujeito) e fica **SEMPRE NA 3ª PESSOA DO SINGULAR**: *'Havia muitos alunos na sala'* (NUNCA *haviam muitos alunos*); *'Há três anos que estudo aqui'*.\n" +
          "  - **Fazer** indicando tempo transcorrido ou clima também é impessoal: *'Faz dez anos'* (NUNCA *fazem dez anos*); *'Fazia dias frios'*.\n\n" +
          "**2. Concordância Nominal:**\n" +
          "- O adjetivo concorda em género e número com o substantivo a que se refere (*'Belas praias e monumentos'*).\n" +
          "- **Palavras Especiais:**\n" +
          "  - **Bastante:** Se for pronome/adjetivo indefinido (= muitos), varia: *'Temos bastantes razões para festejar'*. Se for advérbio (= muito), é invariável: *'Eles correram bastante'*.\n" +
          "  - **Meio:** Se for numeral, varia: *'Meia fatia de pão'*, *'É meio-dia e meia'* (meia hora). Se for advérbio (= um pouco), é invariável: *'A aluna estava meio preocupada'* (NUNCA *meia preocupada*).",
        examinerTips: [
          "O erro clássico mais penalizado pelos examinadores é flexionar o verbo 'haver' no plural no sentido de existir ('haviam pessoas'); memorize que 'haver' existencial fica estritamente no singular ('havia pessoas').",
          "Atenção à hora: 'meio-dia e meia' (porque concorda com a palavra subentendida 'hora')."
        ],
        commonMistakes: [
          "Dizer 'fazem cinco anos'; com indicação de tempo transcorrido, o verbo fazer é impessoal e fica no singular: 'faz cinco anos'.",
          "Escrever 'ela estava meia nervosa'; como advérbio modificador de adjetivo, 'meio' é invariável."
        ],
        recap: [
          "O verbo haver (existir/tempo) e fazer (tempo) são impessoais e mantêm-se rigorosamente no singular (havia problemas, faz anos).",
          "Partícula apassivadora exige concordância (vendem-se casas); índice de indeterminação exige singular (precisa-se de operários).",
          "Advérbios como 'meio' e 'bastante' (quando advérbio) são invariáveis."
        ]
      },
      {
        title: "Regência, Colocação Pronominal e Uso da Crase",
        body:
          "**1. Regência Verbal Fundamental:**\n" +
          "- **Assistir:** No sentido de presenciar/ver é transitivo indireto (exige preposição **a**): *'Assistimos ao filme'* (NUNCA *assistimos o filme*). No sentido de prestar assistência é transitivo direto: *'O médico assistiu o doente'*.\n" +
          "- **Aspirar:** No sentido de desejar/almejar exige preposição **a**: *'Ele aspira a um cargo elevado'*. No sentido de inalar é direto: *'Aspirar o ar fresco'*.\n" +
          "- **Preferir:** Exige a construção *preferir X a Y*: *'Prefiro o silêncio à confusão'* (NUNCA *prefiro o silêncio do que a confusão*).\n" +
          "- **Esquecer / Lembrar:** Se não forem pronominais, são diretos (*'Esqueci o livro'*). Se forem pronominais, exigem a preposição **de** (*'Esqueci-me do livro'*).\n\n" +
          "**2. Colocação dos Pronomes Clíticos (Próclise, Ênclise e Mesóclise):**\n" +
          "- **Ênclise (Pronome após o verbo):** Posição padrão em português europeu culto; obrigatória no início de frases (*'Entregou-lhe o prémio'*, NUNCA *Lhe entregou o prémio* no início de frase).\n" +
          "- **Próclise (Pronome antes do verbo):** Obrigatória quando há **palavras atrativas**:\n" +
          "  - Palavras de sentido negativo: *'Não **me** disseram a verdade'*, *'Nunca **te** vi tão contente'*.\n" +
          "  - Conjunções subordinativas: *'Quando **o** encontrei...'*, *'Embora **se** esforçasse...'*\n" +
          "  - Pronomes relativos e indefinidos: *'A pessoa que **me** chamou'*, *'Tudo **se** resolveu'*.\n" +
          "  - Advérbios sem pausa de vírgula: *'Sempre **me** recordo daquele dia'*.\n" +
          "- **Mesóclise (Pronome no meio do verbo):** Utilizada exclusivamente com verbos no **Futuro do Presente** ou **Condicional (Futuro do Pretérito)** quando não houver palavra atrativa que exija próclise:\n" +
          "  - *'Far-te-ei uma proposta irrecusável'*, *'Dir-se-ia que era um fantasma'*.\n\n" +
          "**3. A Regra de Ouro da Crase (Acento Grave `à`):**\n" +
          "- A crase é a fusão da preposição **a** exigida por um verbo ou substantivo anterior com o artigo definido feminino **a** (ou pronomes demonstrativos *aquele, aquela, aquilo*):\n" +
          "  $$\\text{Preposição } a + \\text{Artigo } a = \\mathbf{\\grave{a}}$$\n" +
          "- **O Teste Infalível:** Substitua a palavra feminina seguinte por um substantivo masculino equivalente. Se surgir a forma **ao**, há crase com crase grave:\n" +
          "  - *'Fui à escola'* $\\rightarrow$ *'Fui **ao** colégio'* (há crase! $\\rightarrow$ `à`).\n" +
          "  - *'Visitei a cidade'* $\\rightarrow$ *'Visitei **o** país'* (não tem 'ao', logo NÃO HÁ CRASE $\\rightarrow$ `a`).\n" +
          "- **Casos em que a Crase é ESTRITAMENTE PROIBIDA:**\n" +
          "  1. Antes de palavras masculinas (*a pé*, *a cavalo*, *a prazo*).\n" +
          "  2. Antes de verbos no infinitivo (*a partir de*, *começou a correr*).\n" +
          "  3. Antes de pronomes pessoais ou de tratamento (*a ela*, *a você*, *a si*).\n" +
          "  4. Em expressões de palavras repetidas (*cara a cara*, *dia a dia*).",
        examinerTips: [
          "Aplique sempre o teste do masculino para a crase: se no masculino vira 'ao', no feminino leva crase ('à'). Se no masculino fica apenas 'o', no feminino fica apenas 'a'.",
          "Nunca inicie uma frase com pronome oblíquo átono em estilo formal ('Me empresta a caneta' é coloquial; o padrão culto exige 'Empresta-me a caneta')."
        ],
        commonMistakes: [
          "Colocar acento grave de crase antes de verbo ('a partir de' com crase é erro gravíssimo).",
          "Escrever 'preferir do que'; a regência culta de preferir exige 'preferir uma coisa a outra'."
        ],
        recap: [
          "Regência: assistir ao filme (ver), aspirar ao cargo (desejar), preferir X a Y.",
          "Colocação pronominal: Próclise é atraída por negações, pronomes relativos e conjunções; Mesóclise usa-se no futuro/condicional sem atração.",
          "Crase (à) é a fusão de preposição 'a' com artigo 'a' (teste do masculino 'ao'). Proibida antes de verbo e palavras masculinas."
        ]
      },
      {
        title: "O Acordo Ortográfico e a Comunidade Lusófona",
        body:
          "**1. O Acordo Ortográfico de 1990 (AO90) na CPLP:**\n" +
          "O Acordo Ortográfico unifica a grafia oficial entre os Estados-membros da Comunidade dos Países de Língua Portuguesa (Angola, Brasil, Cabo Verde, Guiné-Bissau, Guiné Equatorial, Moçambique, Portugal, São Tomé e Príncipe e Timor-Leste).\n\n" +
          "**2. As Principais Alterações Ortográficas em Vigor:**\n" +
          "- **Alfabeto de 26 Letras:** Integração formal e definitiva das letras **K, W e Y**.\n" +
          "- **Queda do Acento nos Ditongos Abertos Paroxítonos (`ei`, `oi`):**\n" +
          "  - Palavras paroxítonas (graves) com ditongo aberto perdem o acento agudo: *ideia*, *jiboia*, *coreia*, *plateia*, *heroico* (atenção: palavras oxítonas como *herói*, *pastéis*, *troféu* MANTÊM o acento!).\n" +
          "- **Queda do Acento no Hiato `oo` e `ee`:**\n" +
          "  - Formas como *voo*, *enjoo*, *creem*, *leem*, *veem* deixam de ter acento circunflexo.\n" +
          "- **Queda do Acento Agudo no `u` e `i` Tónicos Precedidos de Ditongo em Paroxítonas:**\n" +
          "  - *feiura*, *baiuca*.\n" +
          "- **Abolição das Consoantes Mudas (em Portugal/PALOP):**\n" +
          "  - As consoantes *c* e *p* que não se pronunciam foram eliminadas da grafia: *ação* (antes acção), *ótimo* (antes óptimo), *ator* (antes actor), *adotar* (antes adoptar). Se a consoante for efetivamente pronunciada na norma culta, mantém-se: *pacto*, *adepto*, *corrupção*.\n" +
          "- **Uso do Hífen com Prefixos:**\n" +
          "  - Usa-se hífen quando o segundo elemento principia pela letra **h**: *anti-higiénico*, *super-homem*.\n" +
          "  - Usa-se hífen quando o prefixo termina na **mesma vogal** em que principia o segundo elemento: *micro-ondas*, *anti-inflamatório*.\n" +
          "  - Se as vogais forem diferentes, junta-se tudo: *autoestrada*, *semicírculo*, *extraordinário*.\n" +
          "  - Se o segundo elemento começar por **r** ou **s**, elimina-se o hífen e duplica-se a consoante: *antirrugas*, *minissaia*, *microssistema*.\n\n" +
          "**3. Variações Linguísticas Legítimas no Espaço Lusófono:**\n" +
          "- O Cambridge aceita qualquer norma nacional culta da língua portuguesa (europeia, brasileira ou africana), desde que o candidato mantenha **consistência ortográfica e gramatical absoluta** ao longo de todo o texto de exame.",
        examinerTips: [
          "Mantenha consistência ortográfica: se optar por grafar segundo a norma europeia (ex: 'fato', 'comboio', colocação pronominal enclítica), mantenha-a até ao fim; não misture normas no mesmo parágrafo.",
          "Memorize a regra dos ditongos abertos: 'ideia' e 'jiboia' não levam acento porque são paroxítonas; mas 'herói' e 'troféu' levam acento porque são oxítonas."
        ],
        commonMistakes: [
          "Continuar a acentuar palavras como 'ideia', 'voo' e 'veem'.",
          "Separar com hífen palavras cuja consoante seguinte é dobrada (escrever 'anti-rugas' em vez do correto 'antirrugas')."
        ],
        recap: [
          "O Acordo Ortográfico inclui K, W, Y no alfabeto oficial.",
          "Elimina acento em ditongos abertos paroxítonos (ideia, heroico) e hiatos dobrados (voo, creem).",
          "Consoantes mudas não pronunciadas foram eliminadas (ação, ótimo).",
          "Usa-se hífen perante 'h' e letras iguais (micro-ondas); duplicam-se 'r' e 's' sem hífen (antirrugas)."
        ]
      }
    ]
  }
];

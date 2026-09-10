
const families = {
  geometria: {
    eyebrow:"Família 01 · maior peso visual",
    title:"Geometria e medidas",
    intro:"Entenda espaço, forma, escala, área e volume por meio de manipulação visual. Aqui a fórmula aparece como consequência de uma estrutura geométrica — não como algo para decorar.",
    context:"No ENEM, geometria costuma surgir contextualizada: embalagens, plantas, reservatórios, mapas, construções, áreas, escalas e sólidos. O objetivo é reconhecer a estrutura antes de calcular.",
    concepts:[
      ["Área como medida de superfície","Área compara uma região com uma unidade quadrada. Alterar uma dimensão de uma figura nem sempre altera a área na mesma proporção.","\\(A_{\\mathrm{ret}}=b\\cdot h\\)"],
      ["Volume como ocupação do espaço","Em prismas, o volume pode ser entendido como a repetição de uma área de base ao longo de uma altura.","\\(V_{\\mathrm{prisma}}=A_b\\cdot h\\)"],
      ["Escala e semelhança","Se comprimentos são multiplicados por k, áreas são multiplicadas por k² e volumes por k³.","\\(L\\to kL,\\quad A\\to k^2A,\\quad V\\to k^3V\\)"]
    ],
    interactive:"geometry",
    activity:"geometry",
    questions:[1,2,3]
  },
  graficos: {
    eyebrow:"Família 02 · interpretação de dados",
    title:"Gráficos e tabelas",
    intro:"Transforme números em informação visual. O foco aqui é ler escalas, comparar grandezas, identificar tendências e evitar conclusões induzidas por gráficos mal construídos.",
    context:"Questões do ENEM frequentemente exigem mais interpretação do que cálculo: localizar valores, comparar categorias, estimar variações e perceber como a escala modifica a leitura.",
    concepts:[
      ["Escala","A distância visual precisa ser interpretada conforme os valores marcados no eixo.","\\(\\text{posição}\\neq\\text{valor}\\)"],
      ["Variação","Compare o valor final e o inicial antes de falar em crescimento absoluto ou percentual.","\\(\\Delta=x_f-x_i\\)"],
      ["Representação","Tabela, barras, linhas e setores enfatizam aspectos diferentes de um mesmo conjunto de dados.","\\(\\text{dado}\\to\\text{representação}\\to\\text{interpretação}\\)"]
    ],
    interactive:"charts",
    activity:"charts",
    questions:[4,5]
  },
  proporcao: {
    eyebrow:"Família 03 · relações multiplicativas",
    title:"Proporcionalidade e porcentagem",
    intro:"Razões, taxas, porcentagens e regra de três aparecem em preços, receitas, mapas, velocidade, consumo e crescimento.",
    context:"O ponto central é identificar se duas grandezas mantêm uma razão constante, variam inversamente ou simplesmente não são proporcionais.",
    concepts:[
      ["Razão","Compara duas grandezas por divisão.","\\(a:b=\\dfrac{a}{b}\\)"],
      ["Porcentagem","É uma razão de denominador 100.","\\(p\\%=\\dfrac{p}{100}\\)"],
      ["Fator multiplicativo","Aumento e desconto podem ser tratados por fatores.","\\(V_f=V_i(1\\pm p)\\)"]
    ],
    interactive:"proportion",
    activity:"proportion",
    questions:[6,7]
  },
  unidades: {
    eyebrow:"Família 04 · coerência dimensional",
    title:"Unidades e conversões",
    intro:"Converter corretamente é compreender o que está sendo medido. Comprimento, área e volume não usam o mesmo fator de conversão.",
    context:"No ENEM, conversões costumam aparecer escondidas dentro de problemas de geometria, consumo, capacidade, velocidade e escalas.",
    concepts:[
      ["Comprimento","Cada passo entre unidades métricas altera por um fator 10.","\\(1\\,\\mathrm{m}=100\\,\\mathrm{cm}\\)"],
      ["Área","Como há duas dimensões, o fator linear é elevado ao quadrado.","\\(1\\,\\mathrm{m}^2=10^4\\,\\mathrm{cm}^2\\)"],
      ["Volume","Como há três dimensões, o fator linear é elevado ao cubo.","\\(1\\,\\mathrm{m}^3=10^6\\,\\mathrm{cm}^3\\)"]
    ],
    interactive:"units",
    activity:"units",
    questions:[8,9]
  },
  estatistica: {
    eyebrow:"Família 05 · resumo de dados",
    title:"Estatística",
    intro:"Média, mediana e dispersão descrevem conjuntos de dados por perspectivas diferentes. Aqui você altera os dados e observa as medidas responderem.",
    context:"Questões do ENEM costumam misturar tabelas, gráficos e medidas de tendência central, exigindo interpretação do contexto.",
    concepts:[
      ["Média","Distribui igualmente a soma dos valores.","\\(\\bar{x}=\\dfrac{\\sum x_i}{n}\\)"],
      ["Mediana","É o valor central após ordenar os dados.","\\(\\text{posição central dos dados ordenados}\\)"],
      ["Amplitude","Mostra a distância entre maior e menor valor.","\\(A=x_{\\max}-x_{\\min}\\)"]
    ],
    interactive:"stats",
    activity:"stats",
    questions:[10,11]
  },
  funcoes: {
    eyebrow:"Família 06 · dependência entre grandezas",
    title:"Funções e álgebra",
    intro:"Funções descrevem como uma quantidade depende de outra. Modifique coeficientes e veja a expressão algébrica ganhar forma geométrica.",
    context:"No ENEM, funções aparecem em tarifas, crescimento, movimento, produção, lucro e comparação de modelos.",
    concepts:[
      ["Função afim","O coeficiente a controla a inclinação; b é o valor inicial.","\\(f(x)=ax+b\\)"],
      ["Raiz","É o ponto em que o gráfico encontra o eixo x.","\\(x=-\\dfrac{b}{a}\\)"],
      ["Taxa de variação","Representa quanto y muda quando x aumenta uma unidade.","\\(\\dfrac{\\Delta y}{\\Delta x}=a\\)"]
    ],
    interactive:"function",
    activity:"function",
    questions:[12,13]
  },
  probabilidade: {
    eyebrow:"Família 07 · incerteza e contagem",
    title:"Probabilidade e combinatória",
    intro:"Probabilidade quantifica incerteza; combinatória organiza as possibilidades. A simulação ajuda a distinguir frequência observada de probabilidade teórica.",
    context:"No ENEM, aparecem sorteios, escolhas, senhas, agrupamentos, jogos e situações de decisão sob incerteza.",
    concepts:[
      ["Probabilidade clássica","Quando resultados são equiprováveis, compare casos favoráveis e possíveis.","\\(P(A)=\\dfrac{n(A)}{n(\\Omega)}\\)"],
      ["Princípio multiplicativo","Etapas independentes de escolha multiplicam o número de possibilidades.","\\(N=n_1n_2\\cdots n_k\\)"],
      ["Experimental × teórica","Muitas repetições tendem a estabilizar a frequência relativa.","\\(f_{\\mathrm{rel}}\\to P(A)\\)"]
    ],
    interactive:"probability",
    activity:"probability",
    questions:[14,15]
  }
};

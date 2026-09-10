# Apostila Interativa ENEM — v6

Plataforma web interativa de Matemática para o ENEM, com mini-apostilas por família, banco 2009–2025, padrões de resolução e experimentos visuais.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FMicamAmorim%2Fapostila-enem-interativa&project-name=apostila-enem-interativa&repository-name=apostila-enem-interativa)

## Publicação recomendada — Vercel + GitHub

O repositório está preparado para ser importado pelo Vercel e receber deploy automático a cada push na branch `main`.

1. No Vercel, crie/importa um projeto a partir de `MicamAmorim/apostila-enem-interativa`.
2. Framework Preset: **Other** (site estático).
3. Root Directory: `./`.
4. Não é necessário Build Command.
5. Não é necessário Output Directory.
6. Faça o deploy.

O arquivo `vercel.json` já está versionado no repositório.

## Conteúdo pedagógico

Cada uma das 7 famílias passa a ter:
- objetivos de aprendizagem;
- rota de resolução;
- 6 capítulos teóricos expansíveis;
- explicações conceituais;
- folha de fórmulas contextualizada;
- exemplo resolvido passo a passo em cada capítulo;
- alertas de erros frequentes;
- estratégia de prova;
- checklist de domínio;
- 3 desafios conceituais com feedback;
- laboratório interativo;
- banco de questões reais 2009–2025.

## Geometria

Inclui ainda uma zona de demonstrações visuais interativas:
- por que A=bh/2 no triângulo;
- verificação visual/numérica de Pitágoras;
- efeito de escala k em comprimento, k² em área e k³ em volume.

## Estrutura do banco

Mantém 765 posições esperadas de Matemática do ENEM (2009–2025), classificação por família/subtema, imagens quando disponíveis, formatação matemática, solução guiada e links de conferência.

## Dependências remotas

A execução usa internet para MathJax, Three.js, questões e figuras remotas.

## Revisão v4 — alternativas e fórmulas

- Fórmulas dos cartões iniciais convertidas para TeX/MathJax: subscritos, frações, potências, somatórios e letras gregas.
- Correção do classificador para projeções ortogonais, cubos e planos xy/xz/yz: esses itens passam a ser tratados como Geometria, não como gráficos.
- Auditoria automática das cinco alternativas A–E.
- Códigos de impressão/rodapé do PDF não são mais exibidos como alternativas.
- Questões com alternativas em figuras são identificadas como "alternativas gráficas".
- Mantêm-se cinco botões A–E para resposta, mas sem inventar conteúdo textual ausente.
- Botão para carregar a página original da questão com PDF.js quando o navegador permitir.
- Fallback explícito para abrir o PDF oficial se a prévia for bloqueada.
- Em 2024, o `enem-extractor` também é usado para recuperar texto e imagens das alternativas.
- Gabarito de 2025 conferido/forçado pelo gabarito oficial do Caderno 5 Amarelo.
- ENEM 2025 Q144 recebe dica de página 18 para abrir/renderizar diretamente a questão visual.

## v5 — análise por padrões de questão

Cada uma das sete famílias ganhou um bloco **Como interpretar** e uma taxonomia de **casos canônicos**. O princípio é separar o contexto narrativo da arquitetura matemática recorrente.

A interface agora:
- apresenta um decodificador de leitura por família;
- mostra Caso 1, Caso 2, ... com pistas de reconhecimento;
- explica a interpretação matemática antes da fórmula;
- fornece rota de resolução e armadilha típica;
- detecta automaticamente o caso provável de cada questão;
- mostra o caso como badge no cartão da questão;
- permite filtrar o banco por caso;
- inclui o padrão reconhecido na solução guiada.

Quantidade de casos:
- Geometria: 7
- Gráficos e tabelas: 6
- Proporcionalidade: 6
- Unidades: 6
- Estatística: 6
- Funções e álgebra: 7
- Probabilidade e combinatória: 7

Total: 45 casos canônicos.

## v5.1 — correção da seção “Como interpretar”

Corrigido um erro de inicialização da interface: o componente `buildPatternGuide(state.family)` existia, mas não era chamado após a criação do conteúdo da família. Como consequência, o título da seção aparecia sem os passos de interpretação e sem os casos canônicos.

A v5.1 passa a chamar o componente em todas as trocas de família.

## v6 — Experimentos visuais estilo aprendizagem ativa

A v6 preserva integralmente as seções anteriores e acrescenta uma nova camada: **Experimentos visuais — Preveja → manipule → descubra → demonstre → pratique no ENEM**.

Foram adicionados **48 experimentos**, distribuídos pelas sete famílias.

Cada experimento contém:
- uma previsão conceitual antes da manipulação;
- bloqueio dos controles até o aluno escolher uma previsão;
- sliders/controles interativos;
- representação visual em SVG;
- conclusão conceitual;
- fórmula formalizada com MathJax;
- rótulo "demonstração", "experimento" ou "intuição";
- ligação com um caso canônico do ENEM;
- botão para praticar questões reais relacionadas.

Nenhuma seção antiga foi removida: continuam disponíveis Como interpretar, Casos canônicos, Apostila-resumo, laboratórios, desafios e banco real.

## GitHub Pages

O repositório também contém configuração para GitHub Pages. No momento, o deploy pelo Vercel é a opção recomendada porque não depende do GitHub Actions da conta.
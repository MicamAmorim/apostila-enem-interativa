# Auditoria das alternativas gráficas do banco ENEM

Data: 2026-09-10

## Resultado final

A varredura inicial havia marcado **52 questões** como candidatas a alternativas gráficas. A revisão individual mostrou que **50 são realmente questões cujas alternativas A-E dependem de figuras**.

Duas marcações de 2024 eram falsos positivos da heurística inicial:

- **2024 Q146** - as alternativas são textuais/matemáticas (6; 18; 6√6; 6∛6; 3∛12).
- **2024 Q153** - a questão usa gráficos no enunciado, mas as alternativas são textuais (1,0; 2,5; 3,0; 3,5; 4,0).

Portanto, não foram fabricadas imagens para essas duas questões.

## Questões com alternativas gráficas confirmadas

- 2010: Q137, Q142
- 2011: Q151, Q180
- 2012: Q145, Q154, Q166, Q179
- 2013: Q138, Q142, Q160, Q173
- 2014: Q139, Q154, Q167
- 2015: Q138, Q148
- 2016: Q172
- 2017: Q156
- 2018: Q146, Q151, Q157, Q169, Q170, Q174, Q178
- 2019: Q139, Q163
- 2020: Q136, Q137, Q149, Q159, Q166, Q173
- 2021: Q154, Q155, Q178, Q180
- 2022: Q158, Q162, Q163, Q165, Q178
- 2023: Q137, Q147, Q153, Q167, Q172
- 2025: Q144, Q167

Total confirmado: **50 questões / 250 alternativas gráficas**.

## Armazenamento e integração

Para 2010-2023, os PNGs A-E foram espelhados no próprio repositório em:

`assets/visual-alternatives/<ano>/q<questao>/<A-E>.png`

Isso corresponde a **48 questões / 240 PNGs locais**.

As duas questões de 2025 usam os 10 PNGs verificados da extração do Caderno 5 Amarelo mantida em `diegoalves1988/pensar-exatas`, ligados diretamente pelo runtime. O arquivo `visual-alternatives-runtime.js` injeta as imagens nas alternativas canônicas antes da renderização.

## Regra de segurança editorial

Uma questão só é tratada como tendo alternativas gráficas quando existem cinco imagens A-E correspondentes à mesma questão. Questões que possuem figura apenas no enunciado não entram neste conjunto.

O runtime nunca altera o gabarito oficial; ele apenas preenche o campo visual (`file`) de cada alternativa.

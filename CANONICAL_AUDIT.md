# Auditoria canônica do banco ENEM — Caderno 5 Amarelo

Data da reconstrução: 2026-09-10

## Escopo e regra de identidade

O banco de Matemática foi reconstruído para as 17 edições de 2009 a 2025, com 45 itens por edição (questões 136–180), totalizando **765 posições canônicas**.

A identidade de uma questão **não é mais o número vindo do extrator**. A chave canônica é o `CO_ITEM` do arquivo oficial `ITENS_PROVA_<ANO>.csv` do INEP. Para cada edição:

1. identifica-se a aplicação regular que corresponde ao conteúdo estruturado disponível;
2. une-se essa prova ao **Caderno 5 Amarelo** pelo mesmo `CO_ITEM`;
3. atribuem-se número, anulação e gabarito do Amarelo;
4. texto, alternativas e mídia acompanham o item, nunca o índice bruto;
5. o carregador exige exatamente 45 posições distintas (136–180) por ano.

Fonte técnica utilizada para o vínculo de identidade: arquivos `ITENS_PROVA_2009.csv` … `ITENS_PROVA_2025.csv`, espelhados sem alteração semântica em `HenriqueLindemann/analise-enem/src/tri_enem/data/itens/`.

## Cadernos/aplicações usados na permutação

| Ano | conteúdo-base | Caderno 5 Amarelo |
|---|---:|---:|
| 2009 | 63 (Azul) | 61 |
| 2010 | 99 (Azul) | 97 |
| 2011 | 131 (Azul) | 129 |
| 2012 | 151 (Azul) | 149 |
| 2013 | 181 (Azul) | 179 |
| 2014 | 209 (Azul) | 207 |
| 2015 | 245 (Azul) | 243 |
| 2016 | 303 (Azul) | 304 |
| 2017 | 403 (Azul) | 404 |
| 2018 | 459 (Azul) | 460 |
| 2019 | 515 (Azul) | 516 |
| 2020 | 587 (Azul) | 588 |
| 2021 | 899 (Azul) | 900 |
| 2022 | 1075 (Azul) | 1076 |
| 2023 | 1211 (Azul) | 1212 |
| 2024 | 1408 (Amarela) | 1408 |
| 2025 | 1471 (Azul) | 1472 |

**Observação:** 2024 já estava estruturado na ordem da prova Amarela regular; por isso a permutação é identidade.

## Resultado estrutural

- posições esperadas: **765**
- posições canônicas reconstruídas: **765**
- buracos após reconstrução: **0**
- anos com exatamente 45 posições distintas: **17/17**
- duplicatas literais Q160 detectadas/ignoradas no transporte antigo: **15**
- conteúdos realmente ausentes no transporte antigo: **5**
- divergências de gabarito do transporte antigo corrigidas: **6**
- itens oficialmente anulados/sem letra: **6**

Os antigos “39 buracos” não eram 39 itens perdidos. Eram a combinação de rótulos de disciplina incorretos, índices de outro caderno e cinco extrações realmente ausentes.

## Cinco conteúdos recuperados

| Caderno 5 Amarelo | origem do mesmo item | CO_ITEM | gabarito | recuperação |
|---|---:|---:|:---:|---|
| 2015 Q162 | Azul Q145 | 37274 | C | texto + alternativas |
| 2020 Q161 | Azul Q179 | 43031 | E | texto + alternativas |
| 2020 Q165 | Azul Q144 | 37286 | B | texto + alternativas |
| 2020 Q175 | Azul Q168 | 41676 | A | texto + alternativas + figura |
| 2023 Q179 | Azul Q174 | 126039 | E | texto + alternativas + mapa |

As duas questões cuja interpretação depende de figura (2020 Q175 e 2023 Q179) receberam também seus arquivos visuais estruturados.

## Gabaritos corrigidos

A letra canônica sempre vem do registro do **mesmo `CO_ITEM` no Caderno 5 Amarelo**. Foram encontradas seis divergências efetivas na fonte estruturada anterior:

| Caderno 5 Amarelo | origem | CO_ITEM | letra antiga | letra oficial |
|---|---:|---:|:---:|:---:|
| 2010 Q139 | Q139 | 70379 | A | **B** |
| 2012 Q154 | Q165 | 7031 | E | **C** |
| 2021 Q162 | Q152 | 81869 | D | **E** |
| 2021 Q172 | Q145 | 59925 | A | **C** |
| 2021 Q174 | Q139 | 95820 | A | **E** |
| 2022 Q158 | Q143 | 5961 | A | **D** |

## Questões anuladas

Não se atribui alternativa artificial a item anulado:

- 2018 Q150 — CO_ITEM 30294
- 2020 Q141 — CO_ITEM 44322
- 2021 Q178 — CO_ITEM 117674
- 2022 Q175 — CO_ITEM 39443
- 2023 Q177 — CO_ITEM 14887
- 2025 Q178 — CO_ITEM 31350

## Auditoria das soluções por família

### 1. Geometria e medidas

**Status: cobertura específica existente migrada e validada.**

As soluções específicas/editoriais de 2025 foram escritas quando o banco ainda usava numeração da prova-base. Elas agora são vinculadas ao item por `canonicalSourceIndex` e exibidas na posição Amarela correspondente. A conclusão é comparada ao gabarito oficial antes de ser promovida.

Mapeamentos específicos de geometria em 2025:

- origem Q138 → Amarelo Q144, E
- origem Q139 → Amarelo Q136, C
- origem Q144 → Amarelo Q141, D
- origem Q148 → Amarelo Q150, C
- origem Q149 → Amarelo Q151, B
- origem Q153 → Amarelo Q147, A
- origem Q161 → Amarelo Q160, A
- origem Q164 → Amarelo Q156, A
- origem Q170 → Amarelo Q174, B
- origem Q171 → Amarelo Q175, E
- origem Q173 → Amarelo Q177, A
- origem Q177 → Amarelo Q168, B

As soluções marcadas como dependentes da figura continuam com esse status; não são apresentadas como demonstração numérica completa.

### 2. Proporcionalidade e porcentagem

**Status: método auditado; solução individual existente remapeada.**

A solução específica do item 2025 origem Q136 foi remapeada para **Amarelo Q146**, mantendo resposta C. O roteiro geral foi revisado para: identificar grandezas, decidir relação direta/inversa, uniformizar unidades, montar taxa/proporção e validar unidade/ordem de grandeza.

### 3. Funções e álgebra

**Status: método auditado; derivação genérica não é rotulada como solução individual.**

Roteiro seguro: definir variável independente/dependente, traduzir texto/tabela/gráfico para relação algébrica, resolver respeitando domínio/sinais e retornar ao contexto. Afim, quadrática, exponencial, logaritmo, sequências, sistemas e matemática financeira mantêm métodos separados.

### 4. Estatística

**Status: método auditado.**

Roteiro seguro: distinguir população/amostra, organizar frequências/ordenação, escolher corretamente média/mediana/moda/dispersão e interpretar o resultado. Para dados com frequência, a forma canônica registrada é

```
x̄ = Σ(xᵢ fᵢ) / Σfᵢ
```

evitando tratar uma tabela de frequências como média simples dos valores distintos.

### 5. Probabilidade e combinatória

**Status: método auditado.**

O roteiro diferencia probabilidade simples, condicional, complemento, princípio multiplicativo, permutação e combinação. Há trava conceitual explícita contra dupla contagem e checagem de que probabilidades pertençam a [0,1].

### 6. Unidades e conversões

**Status: método auditado.**

Conversões são feitas antes da operação principal. O roteiro distingue fatores lineares, quadráticos e cúbicos, evitando o erro clássico de aplicar fator linear diretamente a área/volume.

### 7. Gráficos e tabelas

**Status: método auditado.**

Leitura obrigatória na ordem: título → eixos → escala → legenda → unidade → valores. A solução não pode inferir valor apenas pela altura visual; eixos truncados e escalas diferentes são tratados explicitamente.

## Trava de integridade das soluções

Para qualquer questão canônica:

1. a letra oficial é aplicada depois da normalização do conteúdo;
2. soluções legadas são executadas usando o índice da **origem do mesmo item**, não o número Amarelo;
3. a conclusão textual é varrida por `Alternativa A–E`;
4. se uma conclusão divergir do gabarito canônico, a solução é **quarentenada automaticamente**;
5. nesse caso o site mostra somente o roteiro seguro da família e o gabarito oficial, com status “derivação específica em revisão”;
6. itens anulados recebem status próprio e nenhuma alternativa é marcada correta.

Isso impede que uma solução antiga ou um override de índice volte a sobrescrever o gabarito oficial.

## Auditoria executável

O site agora carrega `canonical-integrity.js` depois da camada canônica. Ele fornece duas verificações reproduzíveis:

- `runCanonicalStructuralAudit()` — confere 17 anos, 45 posições 136–180 por edição, ausência de buracos, unicidade de `CO_ITEM` dentro de cada prova, índice de origem válido e gabarito A–E ou anulação explícita;
- `await runCanonicalSolutionAudit()` — percorre as **765 questões**, gera a solução que o usuário realmente vê, extrai conclusões `Alternativa A–E`, compara com o gabarito do Caderno 5 Amarelo e agrega os resultados por família (`byFamily`).

A auditoria de soluções considera falha qualquer conclusão explícita diferente da alternativa oficial. Soluções específicas não suficientemente validadas continuam em quarentena e não podem alterar o gabarito.

## Arquivos da reconstrução

- `canonical-map-2009-2016.js` — 360 posições
- `canonical-map-2017-2025.js` — 405 posições
- `canonical-bank.js` — reconstrução, fallbacks, trava de gabarito e auditoria das soluções
- `canonical-integrity.js` — auditoria estrutural e de soluções, reproduzível no runtime
- `geometry-hotfix.js` — protegido para não mutar itens já canônicos
- `payload/boot.js` — carrega a camada canônica depois dos módulos legados e, por último, o auditor de integridade

## Critério para futuras atualizações

Nenhuma nova edição deve ser adicionada por “número da questão” do extrator. A inclusão deve exigir:

- 45 `CO_ITEM` únicos de MT;
- associação à prova Amarela regular;
- posições 136–180 completas;
- `TX_GABARITO`/anulação oficial;
- validação de mídia nos itens visualmente dependentes;
- teste de consistência entre conclusão da solução e gabarito oficial.

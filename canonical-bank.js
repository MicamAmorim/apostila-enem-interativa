/* ENEM canonical bank - Caderno 5 Amarelo
   Reconstructs the published bank by CO_ITEM permutation from INEP ITENS_PROVA data.
   Keeps the legacy extracted content as a transport layer only; identity/number/key are canonical. */
(function(){
  'use strict';
  if(window.__ENEM_CANONICAL_BANK_INSTALLED__) return;
  window.__ENEM_CANONICAL_BANK_INSTALLED__=true;
  window.__ENEM_CANONICAL_YELLOW__=true;

  var legacyNormalize = typeof normalizeQuestion==='function' ? normalizeQuestion : null;
  var legacyBuild = typeof buildGuidedSolution==='function' ? buildGuidedSolution : null;
  var legacyDetect = typeof detectQuestionCase==='function' ? detectQuestionCase : null;
  var MAP = window.ENEM_CANONICAL_MAP || {};
  var LETTERS=['A','B','C','D','E'];

  var FALLBACK_RAW = {
    '2015-145': {
      index:145, discipline:'matematica',
      context:'O gerente de um cinema fornece anualmente ingressos gratuitos para escolas. Este ano serão distribuídos 400 ingressos para uma sessão vespertina e 320 ingressos para uma sessão noturna de um mesmo filme. Várias escolas podem ser escolhidas para receberem ingressos. Há alguns critérios para a distribuição dos ingressos: (1) cada escola deverá receber ingressos para uma única sessão; (2) todas as escolas contempladas deverão receber o mesmo número de ingressos; (3) não haverá sobra de ingressos (todos os ingressos serão distribuídos). O número mínimo de escolas que podem ser escolhidas para obter ingressos, segundo os critérios estabelecidos, é',
      alternatives:[
        {letter:'A',text:'2.'},{letter:'B',text:'4.'},{letter:'C',text:'9.'},{letter:'D',text:'40.'},{letter:'E',text:'80.'}
      ], correctAlternative:'C', files:[], alternativesIntroduction:''
    },
    '2020-144': {
      index:144, discipline:'matematica',
      context:'Uma torneira está gotejando água em um balde com capacidade de 18 litros. No instante atual, o balde se encontra com ocupação de 50% de sua capacidade. A cada segundo caem 5 gotas de água da torneira, e uma gota é formada, em média, por 5 × 10⁻² mL de água. Quanto tempo, em hora, será necessário para encher completamente o balde, partindo do instante atual?',
      alternatives:[
        {letter:'A',text:'2 × 10¹'},{letter:'B',text:'1 × 10¹'},{letter:'C',text:'2 × 10⁻²'},{letter:'D',text:'1 × 10⁻²'},{letter:'E',text:'1 × 10⁻³'}
      ], correctAlternative:'B', files:[], alternativesIntroduction:''
    },
    '2020-168': {
      index:168, discipline:'matematica',
      context:'Num recipiente com a forma de paralelepípedo reto-retângulo, colocou-se água até a altura de 8 cm e um objeto, que ficou flutuando na superfície da água. Para retirar o objeto de dentro do recipiente, a altura da coluna de água deve ser de, pelo menos, 15 cm. Para a coluna de água chegar até essa altura, é necessário colocar dentro do recipiente bolinhas de volume igual a 6 cm³ cada, que ficarão totalmente submersas.',
      alternatives:[
        {letter:'A',text:'14.'},{letter:'B',text:'16.'},{letter:'C',text:'18.'},{letter:'D',text:'30.'},{letter:'E',text:'34.'}
      ], correctAlternative:'A', files:['https://enem.dev/2020/questions/168/b97cd861-19d3-4103-8332-c96d5cdc6bf0.png'], alternativesIntroduction:'O número mínimo de bolinhas necessárias para que se possa retirar o objeto que flutua na água, seguindo as instruções dadas, é de'
    },
    '2020-179': {
      index:179, discipline:'matematica',
      context:'Um pé de eucalipto em idade adequada para o corte rende, em média, 20 mil folhas de papel A4. A densidade superficial do papel A4, medida pela razão da massa de uma folha desse papel por sua área, é de 75 gramas por metro quadrado, e a área de uma folha de A4 é 0,062 metro quadrado. Nessas condições, quantos quilogramas de papel rende, em média, um pé de eucalipto?',
      alternatives:[
        {letter:'A',text:'4 301'},{letter:'B',text:'1 500'},{letter:'C',text:'930'},{letter:'D',text:'267'},{letter:'E',text:'93'}
      ], correctAlternative:'E', files:[], alternativesIntroduction:''
    },
    '2023-174': {
      index:174, discipline:'matematica',
      context:'Uma pessoa comprou um ingresso para o cinema em cuja entrada está afixado um mapa com a representação bidimensional do posicionamento das poltronas, conforme a figura. Essa pessoa, após consultar o mapa, começou a subir uma das escadas e parou na posição indicada pela estrela, direcionada para o norte. Ela conferiu seu bilhete e observou que, para encontrar sua poltrona, deveria partir do ponto onde estava, continuar subindo a escada na direção norte por mais quatro fileiras e olhar à sua direita, e sua poltrona será a terceira. Nesse cinema, as poltronas são identificadas por uma letra, que indica a fileira, e um número, que fornece a posição da poltrona na fileira, respectivamente.',
      alternatives:[
        {letter:'A',text:'A6.'},{letter:'B',text:'H1.'},{letter:'C',text:'H6.'},{letter:'D',text:'I1.'},{letter:'E',text:'I6.'}
      ], correctAlternative:'E', files:['https://enem.dev/2023/questions/174/d21e916b-a5fc-441e-b782-d2d4aca3522b.png'], alternativesIntroduction:'A poltrona dessa pessoa é a identificada por'
    }
  };

  var FAMILY_AUDIT = {
    proporcao:{
      title:'Proporção, porcentagem e taxas',
      steps:['Identifique as grandezas e diga se a relação é direta ou inversa.','Uniformize as unidades antes de montar a razão.','Escreva a relação proporcional/taxa e só então substitua os dados.','Confira a ordem de grandeza e a unidade da alternativa.'],
      formula:'\\(\\dfrac{a}{b}=\\dfrac{c}{d}\\) ou taxa = quantidade/unidade.'
    },
    funcoes:{
      title:'Funções e modelagem algébrica',
      steps:['Defina variável de entrada e grandeza de saída.','Traduza o texto, tabela ou gráfico para uma relação matemática.','Resolva a condição pedida respeitando domínio e sinais.','Volte ao contexto e confira se a resposta tem sentido.'],
      formula:'Modelos típicos: \\(y=ax+b\\), exponencial, composição ou diferença de funções.'
    },
    estatistica:{
      title:'Estatística',
      steps:['Identifique população/amostra e a variável observada.','Organize frequências ou ordene os valores quando necessário.','Calcule a medida solicitada com o denominador correto.','Interprete o resultado no contexto, sem confundir média, mediana e moda.'],
      formula:'\\(\\bar x=\\frac{\\sum x_i f_i}{\\sum f_i}\\); mediana depende da posição ordenada.'
    },
    geometria:{
      title:'Geometria plana e espacial',
      steps:['Reconheça a figura e destaque apenas as medidas relevantes.','Converta a figura em relações conhecidas (área, volume, semelhança, Pitágoras, trigonometria).','Calcule mantendo unidades lineares, quadradas ou cúbicas coerentes.','Use a figura original quando uma medida/posição visual for indispensável.'],
      formula:'Escolha a relação geométrica mínima que conecta diretamente os dados ao que é pedido.'
    },
    probabilidade:{
      title:'Probabilidade e contagem',
      steps:['Defina claramente o experimento e o evento pedido.','Conte casos possíveis e favoráveis sem dupla contagem.','Use complemento/condicional quando simplificar o cálculo.','Verifique se a probabilidade final está entre 0 e 1.'],
      formula:'\\(P(A)=\\frac{|A|}{|\\Omega|}\\) em casos equiprováveis; \\(P(A^c)=1-P(A)\\).'
    },
    unidades:{
      title:'Grandezas e unidades',
      steps:['Escreva a unidade ao lado de cada dado.','Faça todas as conversões antes da operação principal.','Aplique o fator de escala na potência correta (comprimento, área ou volume).','Cheque dimensionalmente o resultado.'],
      formula:'Escala linear \\(k\\), de área \\(k^2\\), de volume \\(k^3\\).'
    },
    graficos:{
      title:'Gráficos e tabelas',
      steps:['Leia título, eixos, escala, legenda e unidade.','Extraia somente os valores envolvidos na pergunta.','Faça a operação solicitada (diferença, razão, tendência, média etc.).','Retorne ao gráfico para checar sinal, intervalo e ordem de grandeza.'],
      formula:'A matemática vem depois da leitura correta da representação.'
    }
  };
  window.ENEM_FAMILY_AUDIT=FAMILY_AUDIT;

  function esc(s){
    if(typeof escapeHtml==='function') return escapeHtml(String(s==null?'':s));
    return String(s==null?'':s).replace(/[&<>"']/g,function(ch){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch];});
  }
  function format(s){ return typeof formatMathHtml==='function' ? formatMathHtml(s) : s; }

  function rawByIndex(data){
    var by=new Map(), duplicates=[];
    (data.questions||[]).forEach(function(q){
      var n=Number(q.index);
      if(n<136||n>180) return;
      if(by.has(n)){duplicates.push(n);return;}
      by.set(n,q);
    });
    return {by:by,duplicates:duplicates};
  }

  function forceOfficial(q,m,year,yellowIndex){
    q.index=Number(yellowIndex);
    q.year=Number(year);
    q.id='ENEM-'+year+'-MT-'+yellowIndex;
    q.canonicalYellow=true;
    q.canonicalItem=Number(m.item);
    q.canonicalSourceIndex=Number(m.sourceIndex);
    q.canonicalBaseCode=Number(m.baseCode);
    q.canonicalYellowCode=Number(m.yellowCode);
    q.canonicalAbandoned=!!m.abandoned;
    q.correctAlternative=m.answer||null;
    (q.alternatives||[]).forEach(function(a){a.isCorrect=!!q.correctAlternative&&a.letter===q.correctAlternative;});
    q.structuredSource=(typeof RAW_BASE!=='undefined'?RAW_BASE:'')+'/enem_'+year+'.json';
    q.canonicalProvenance='INEP ITENS_PROVA_'+year+' · CO_ITEM '+m.item+' · Caderno 5 Amarelo';
    if(typeof auditAlternatives==='function') q.alternativeAudit=auditAlternatives(q);
    return q;
  }

  function normalizeCanonical(raw,year,yellowIndex,m){
    var sourceRaw=Object.assign({},raw,{index:Number(m.sourceIndex)});
    var q;
    if(legacyNormalize){
      q=legacyNormalize(sourceRaw,year);
    }else{
      q={
        index:Number(m.sourceIndex),year:Number(year),context:sourceRaw.context||'',
        files:Array.isArray(sourceRaw.files)?sourceRaw.files.filter(Boolean):[],
        alternativesIntroduction:sourceRaw.alternativesIntroduction||'',
        alternatives:LETTERS.map(function(letter){
          var src=(sourceRaw.alternatives||[]).find(function(a){return String(a.letter||'').toUpperCase()===letter;})||{};
          return {letter:letter,text:String(src.text||''),rawText:String(src.text||''),file:src.file||null,isCorrect:false};
        }),
        primaryFamily:'proporcao',families:['proporcao'],primarySubtopic:'',subtopics:[]
      };
    }
    return forceOfficial(q,m,year,yellowIndex);
  }

  async function canonicalFetchYear(year){
    year=Number(year);
    if(typeof state!=='undefined' && state.bankCache && state.bankCache.has(year)){
      var cached=state.bankCache.get(year);
      if(Array.isArray(cached) && cached.length===45 && cached.every(function(q){return q.canonicalYellow;})) return cached;
      state.bankCache.delete(year);
    }
    var ym=MAP[year];
    if(!ym) throw new Error('Mapa canônico ausente para ENEM '+year);
    var status=document.getElementById('bankStatus');
    if(status) status.innerHTML='<strong>Carregando ENEM '+year+' · Caderno 5 Amarelo…</strong><span>Reconstrução por CO_ITEM/INEP.</span>';
    var rawUrl=(typeof RAW_BASE!=='undefined'?RAW_BASE:'https://raw.githubusercontent.com/LuanMartini/gabarita_app/main/assets/data/enem')+'/enem_'+year+'.json';
    var r=await fetch(rawUrl,{cache:'force-cache'});
    if(!r.ok) throw new Error('Falha ao carregar conteúdo-base ENEM '+year+' (HTTP '+r.status+')');
    var data=await r.json();
    var indexed=rawByIndex(data);
    var out=[],miss=[];
    for(var y=136;y<=180;y++){
      var m=ym[y];
      if(!m){miss.push('map:'+y);continue;}
      var raw=indexed.by.get(Number(m.sourceIndex)) || FALLBACK_RAW[year+'-'+m.sourceIndex];
      if(!raw){miss.push('conteúdo Amarelo Q'+y+' ← origem Q'+m.sourceIndex);continue;}
      out.push(normalizeCanonical(raw,year,y,m));
    }
    if(miss.length) throw new Error('Banco canônico incompleto em '+year+': '+miss.join(', '));
    out.sort(function(a,b){return a.index-b.index;});
    if(out.length!==45 || new Set(out.map(function(q){return q.index;})).size!==45) throw new Error('Falha de cardinalidade canônica em '+year);
    out.canonicalAudit={year:year,count:45,duplicatesIgnored:indexed.duplicates.length,sourceUnique:indexed.by.size};
    if(typeof state!=='undefined' && state.bankCache) state.bankCache.set(year,out);
    return out;
  }

  fetchYear=canonicalFetchYear;
  fetchSelectedYears=async function(value){
    if(value!=='all') return canonicalFetchYear(Number(value));
    var all=[],status=document.getElementById('bankStatus');
    for(var i=0;i<YEARS.length;i++){
      var year=YEARS[i];
      if(status) status.innerHTML='<strong>Carregando corpus canônico completo…</strong><span>'+(i+1)+'/'+YEARS.length+' · ENEM '+year+' · Caderno 5 Amarelo</span>';
      try{ all.push.apply(all,await canonicalFetchYear(year)); }
      catch(e){ console.error('Falha canônica',year,e); }
    }
    return all.sort(function(a,b){return b.year-a.year||a.index-b.index;});
  };

  if(legacyDetect){
    detectQuestionCase=function(q){
      if(!q || !q.canonicalYellow) return legacyDetect(q);
      var clone=Object.assign({},q,{index:q.canonicalSourceIndex,canonicalYellow:false});
      return legacyDetect(clone);
    };
  }

  function safeFamilySolution(q,reason){
    var fam=FAMILY_AUDIT[q.primaryFamily]||FAMILY_AUDIT.proporcao;
    var answer=q.correctAlternative||'—';
    var correct=(q.alternatives||[]).find(function(a){return a.letter===q.correctAlternative;});
    var steps=fam.steps.map(function(s,i){return '<p><strong>'+(i+1)+'.</strong> '+esc(s)+'</p>';}).join('');
    return '<div class="solution-grid geometry-reviewed canonical-solution">'
      +'<div class="solution-step"><small>Status canônico</small><p><strong>✓ Gabarito conferido no Caderno 5 Amarelo</strong></p><p>'+esc(q.canonicalProvenance)+'</p></div>'
      +'<div class="solution-step"><small>Auditoria da solução</small><p><strong>◐ Derivação específica em revisão</strong></p><p>'+esc(reason||'A solução legada não foi promovida a auditada sem validação do item canônico.')+'</p></div>'
      +'<div class="solution-step"><small>Como interpretar esta família</small><p><strong>'+esc(fam.title)+'</strong></p>'+steps+'</div>'
      +'<div class="solution-step"><small>Relação típica</small><p>'+format(fam.formula)+'</p></div>'
      +'<div class="solution-step"><small>Gabarito oficial</small><p><strong>Alternativa '+esc(answer)+'</strong>'+(correct&&correct.text?' — '+esc(correct.text):'')+'</p></div>'
      +'</div>';
  }

  function annuledSolution(q){
    return '<div class="solution-grid canonical-solution"><div class="solution-step"><small>Status canônico</small><p><strong>Questão anulada no gabarito oficial do Caderno 5 Amarelo.</strong></p><p>'+esc(q.canonicalProvenance)+'</p></div></div>';
  }

  if(legacyBuild){
    buildGuidedSolution=function(q){
      if(!q || !q.canonicalYellow) return legacyBuild(q);
      if(!q.correctAlternative) return annuledSolution(q);
      var clone=Object.assign({},q,{index:q.canonicalSourceIndex,canonicalYellow:false});
      clone.alternatives=(q.alternatives||[]).map(function(a){return Object.assign({},a);});
      var html;
      try{ html=String(legacyBuild(clone)||''); }
      catch(e){ return safeFamilySolution(q,'A solução anterior falhou ao ser remapeada para o item canônico.'); }
      var claimed=[];
      html.replace(/Alternativa\s+([A-E])/gi,function(_,x){claimed.push(String(x).toUpperCase());return _;});
      var mismatch=claimed.some(function(x){return x!==String(q.correctAlternative).toUpperCase();});
      if(mismatch) return safeFamilySolution(q,'A conclusão da solução anterior diverge do gabarito oficial deste item; ela foi colocada em quarentena automaticamente.');
      html=html.replace(/Gabarito da mesma fonte(?: do enunciado)?/gi,'Gabarito oficial · Caderno 5 Amarelo');
      var badge='<div class="solution-step canonical-audit-head"><small>Validação canônica</small><p><strong>✓ Item '+q.canonicalItem+' · Amarelo Q'+q.index+' · gabarito '+q.correctAlternative+'</strong></p><p>Conteúdo remapeado da origem Q'+q.canonicalSourceIndex+' por CO_ITEM.</p></div>';
      var at=html.indexOf('>');
      if(/<div[^>]*solution-grid/.test(html.slice(0,Math.max(0,at+1)))) html=html.slice(0,at+1)+badge+html.slice(at+1);
      else html='<div class="solution-grid canonical-solution">'+badge+'</div>'+html;
      return html;
    };
  }

  var st=document.createElement('style');
  st.textContent='.canonical-audit-head{border-color:rgba(100,210,160,.35)!important}.canonical-solution .solution-step{line-height:1.55}';
  document.head.appendChild(st);

  try{
    if(typeof state!=='undefined' && state.bankCache) state.bankCache.clear();
  }catch(e){}
  console.info('[ENEM canonical] Caderno 5 Amarelo ativo: 765 posições mapeadas por CO_ITEM.');
})();
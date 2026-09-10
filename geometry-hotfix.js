(function(){
'use strict';
var GEOM2025=[138,139,144,148,149,153,161,164,170,171,173,177];
var CASES={138:'G6',139:'G1',144:'G2',148:'G3',149:'G6',153:'G7',161:'G6',164:'G5',170:'G4',171:'G4',173:'G2',177:'G2'};
var ANSWERS={138:'E',139:'C',144:'D',148:'C',149:'B',153:'A',161:'A',164:'A',170:'B',171:'E',173:'A',177:'B'};
var NON={
136:{family:'proporcao',families:['proporcao','unidades'],sub:'taxas_consumo'},
141:{family:'funcoes',families:['funcoes','proporcao'],sub:'modelagem_algebrica'},
142:{family:'estatistica',families:['estatistica','graficos'],sub:'mediana_moda'},
143:{family:'proporcao',families:['proporcao','unidades'],sub:'taxas_consumo'},
146:{family:'unidades',families:['unidades'],sub:'tempo'},
155:{family:'probabilidade',families:['probabilidade'],sub:'contagem'},
158:{family:'proporcao',families:['proporcao','funcoes'],sub:'porcentagem'},
169:{family:'estatistica',families:['estatistica','unidades','graficos'],sub:'media'},
172:{family:'funcoes',families:['funcoes'],sub:'modelagem_algebrica'}
};
var SOL={
139:{c:'G1',a:'C',i:'A ciclovia é uma circunferência. Cada policial protege 200 m em cada sentido, portanto cobre 400 m de arco.',s:['Com r=1 km e π≈3, C=2πr=6 km=6000 m.','Cada policial cobre 200+200=400 m.','6000/400=15.'],f:'\\(C=2\\pi r=6000\\,m;\\quad N=6000/400=15\\)',z:'São necessários 15 policiais.'},
144:{c:'G2',a:'D',i:'Não é uma questão de volume. É preciso classificar as faces externas do sólido por congruência; a base comum entre os dois sólidos é interna.',s:['As 6 faces laterais retangulares do prisma formam uma classe.','As 6 faces trapezoidais do tronco formam outra classe.','A base hexagonal inferior é uma terceira classe.','A base hexagonal menor superior é a quarta classe.','A base comum fica interna e não é pintada.'],f:'\\(1+1+1+1=4\\text{ classes}\\)',z:'São usadas 4 cores.'},
164:{c:'G5',a:'A',i:'O segundo deslocamento de 2 h na direção 90° é igual nas duas rotas e se cancela. Compare apenas os dois deslocamentos iniciais de 4 h.',s:['Os dois vetores têm comprimento 4v.','O menor ângulo entre 110° e 340° é 130° e cos130°=−cos50°≈−0,64.','Pela lei dos cossenos, d²=52,48v², logo d≈7,24v.','Assim t≈7,24 h≈7 h 15 min; a direção indicada pela figura é 135°.'],f:'\\(d=v\\sqrt{52{,}48}\\approx7{,}24v\\)',z:'Direção 135° e aproximadamente 7 h 15 min.'},
170:{c:'G4',a:'B',i:'As garrafas submersas deslocam água. A condição é manter pelo menos 5 L dentro da caixa.',s:['Volume inicial: 2,5·1,5·2=7,5 dm³=7,5 L.','Cada garrafa ocupa 300 mL=0,3 L.','Com n garrafas: 7,5−0,3n≥5.','Logo n≤8,33..., e o maior inteiro possível é 8.'],f:'\\(7{,}5-0{,}3n\\ge5\\Rightarrow n\\le8{,}33\\ldots\\)',z:'Quantidade máxima: 8 garrafas.'},
171:{c:'G4',a:'E',i:'Use a maior torta, de raio 16 cm. A folga lateral de 1 cm deve existir dos dois lados.',s:['Maior diâmetro: 2·16=32 cm.','Com 1 cm de folga em cada lado: 34 cm.','A caixa antiga tem lado 14 cm.','Aumento mínimo: 34−14=20 cm.'],f:'\\(L=2r+2=34\\,cm;\\quad 34-14=20\\,cm\\)',z:'A aresta deve aumentar 20 cm.'},
177:{c:'G2',a:'B',i:'O ouro é o volume do cilindro menos o volume do prisma quadrado que atravessa a medalha. Converta 3 mm para 0,3 cm.',s:['Cilindro: 3,1·3²·0,3=8,37 cm³.','O quadrado inscrito tem diagonal 6 cm, então 2l²=36 e l²=18 cm².','Prisma retirado: 18·0,3=5,4 cm³.','Ouro por medalha: 8,37−5,4=2,97 cm³.','Para 100 medalhas: 297 cm³.'],f:'\\(100[3{,}1(3)^2(0{,}3)-18(0{,}3)]=297\\,cm^3\\)',z:'São necessários 297 cm³ de ouro.'}
};
var FIG={
138:{c:'G6',a:'E',i:'A distância aos planos yz, xz e xy corresponde a |x|, |y| e |z|. Aplique os deslocamentos coordenada por coordenada e depois faça cada projeção.',f:'\\(\\pi_{xy}(x,y,z)=(x,y),\\;\\pi_{xz}(x,y,z)=(x,z),\\;\\pi_{yz}(x,y,z)=(y,z)\\)'},
148:{c:'G3',a:'C',i:'As opções usam escalas diferentes. Converta cada comprimento desenhado para comprimento real antes de comparar.',f:'\\(E=L_d/L_r\\Rightarrow L_r=L_d/E\\)'},
149:{c:'G6',a:'B',i:'Use a planificação para contar vértices distintos; não some vértices de faces isoladamente. A relação de Euler pode conferir a contagem.',f:'\\(V-E+F=2\\)'},
153:{c:'G7',a:'A',i:'Os pontos equidistantes dos dois vilões pertencem à mediatriz do segmento que une suas posições.',f:'\\(d(P,V)=d(P,T)\\)'},
161:{c:'G6',a:'A',i:'Inverta o percurso: parta da casa do amigo e desfaça os movimentos na ordem inversa, com sentidos opostos.',f:'\\(\\text{percurso inverso = ordem inversa + sentidos opostos}\\)'},
173:{c:'G2',a:'A',i:'Como a extensão dos túneis é a mesma, compare as áreas das seções transversais semicirculares.',f:'\\(A_{semi}=\\pi r^2/2\\)'}
};
function apply(q){
 if(q&&q.canonicalYellow)return q;
 if(!q||Number(q.year)!==2025)return q;
 var n=Number(q.index);
 if(GEOM2025.indexOf(n)>=0){
   q.primaryFamily='geometria';
   q.families=['geometria'].concat((q.families||[]).filter(function(x){return x!=='geometria';}));
   q.correctAlternative=ANSWERS[n];
   q.confidence='auditada';
   (q.alternatives||[]).forEach(function(a){a.isCorrect=a.letter===ANSWERS[n];});
 }else{
   q.families=(q.families||[]).filter(function(x){return x!=='geometria';});
   if(NON[n]){
     q.primaryFamily=NON[n].family;q.families=NON[n].families.slice();q.primarySubtopic=NON[n].sub;q.subtopics=[NON[n].sub];q.confidence='auditada';
   }else if(q.primaryFamily==='geometria'){
     q.primaryFamily=q.families[0]||'funcoes';if(!q.families.length)q.families=[q.primaryFamily];
   }
 }
 return q;
}
function esc(x){return escapeHtml(String(x==null?'':x));}
function getCase(f,id){var a=PATTERN_GUIDES[f]&&PATTERN_GUIDES[f].cases||[];for(var i=0;i<a.length;i++)if(a[i].id===id)return a[i];return null;}
window.reviewPatternCase=function(id){
 var el=document.querySelector('.case-card[data-case="'+id+'"]');
 if(el){el.open=true;el.scrollIntoView({behavior:'smooth',block:'center'});}
 else{var sec=document.getElementById('patterns');if(sec)sec.scrollIntoView({behavior:'smooth'});}
};
function pbtn(id){return '<button type="button" class="secondary" onclick="reviewPatternCase(\''+id+'\')">Revisar este padrão na seção anterior</button>';}
function specific(r,figure){
 var c=getCase('geometria',r.c),steps=(r.s||[]).map(function(x,i){return '<p><strong>'+(i+1)+'.</strong> '+esc(x)+'</p>';}).join('');
 return '<div class="solution-grid geometry-reviewed">'
 +'<div class="solution-step case-solution-step"><small>Padrão relacionado</small><p><strong>'+r.c+' · '+esc(c?c.title:'Geometria')+'</strong></p><p>'+esc(c?c.interpret:r.i)+'</p>'+pbtn(r.c)+'</div>'
 +'<div class="solution-step"><small>Status editorial</small><p><strong>'+(figure?'◐ Solução depende da figura original':'✓ Solução específica auditada')+'</strong></p></div>'
 +'<div class="solution-step"><small>Como interpretar esta questão</small><p>'+esc(r.i)+'</p></div>'
 +(steps?'<div class="solution-step"><small>Resolução</small>'+steps+'</div>':'')
 +'<div class="solution-step"><small>Relação matemática</small><p>'+r.f+'</p></div>'
 +'<div class="solution-step"><small>Conclusão</small><p><strong>Alternativa '+r.a+'</strong>'+(r.z?' — '+esc(r.z):'')+'</p></div></div>';
}
function q136(){
 var c=getCase('proporcao','P5');
 return '<div class="solution-grid geometry-reviewed">'
 +'<div class="solution-step case-solution-step"><small>Padrão relacionado</small><p><strong>P5 · '+esc(c?c.title:'Taxas, consumo e produtividade')+'</strong></p><p>'+esc(c?c.interpret:'Transforme a taxa em consumo semanal.')+'</p>'+pbtn('P5')+'</div>'
 +'<div class="solution-step"><small>Status editorial</small><p><strong>✓ Solução específica auditada</strong></p></div>'
 +'<div class="solution-step"><small>Como interpretar esta questão</small><p>O cilindro é apenas o recipiente. As capacidades já são dadas em m³; não se usa fórmula de volume de cilindro. O núcleo é taxa de consumo.</p></div>'
 +'<div class="solution-step"><small>Resolução</small><p><strong>1.</strong> Distância semanal: \\(30\\cdot7=210\\text{ km}\\).</p><p><strong>2.</strong> Consumo: \\(1\\text{ m}^3\\) a cada \\(13\\text{ km}\\).</p><p><strong>3.</strong> \\(210/13\\approx16{,}15\\text{ m}^3\\).</p><p><strong>4.</strong> A menor capacidade disponível que atende é 17 m³.</p></div>'
 +'<div class="solution-step"><small>Conclusão</small><p><strong>Alternativa C — 17 m³.</strong></p></div></div>';
}
function genericGeom(q,oldDetect){
 var c=oldDetect(q),route=c&&c.route?c.route.map(function(x,i){return '<p><strong>'+(i+1)+'.</strong> '+esc(x)+'</p>';}).join(''):'';
 return '<div class="solution-grid geometry-reviewed">'
 +(c?'<div class="solution-step case-solution-step"><small>Padrão relacionado</small><p><strong>'+esc(c.id)+' · '+esc(c.title)+'</strong></p><p>'+esc(c.interpret)+'</p>'+pbtn(c.id)+'</div>':'')
 +'<div class="solution-step"><small>Status editorial</small><p><strong>Estratégia por padrão — solução específica ainda não auditada</strong></p></div>'
 +(route?'<div class="solution-step"><small>Rota segura deste padrão</small>'+route+'</div>':'')
 +(c?'<div class="solution-step"><small>Relação típica</small><p>'+c.formula+'</p></div>':'')
 +'<div class="solution-step"><small>Gabarito da mesma fonte</small><p><strong>'+esc(q.correctAlternative||'—')+'</strong></p></div></div>'
 +'<div class="audit-note">Este item não recebe mais uma fórmula genérica apresentada como se fosse uma solução completa.</div>';
}
function install(){
 if(window.__geomHotfix2025)return;
 if(typeof fetchSelectedYears!=='function'||typeof renderQuestions!=='function'||typeof buildGuidedSolution!=='function'||typeof detectQuestionCase!=='function'||typeof loadQuestionView!=='function'){setTimeout(install,60);return;}
 window.__geomHotfix2025=true;
 var oldFetch=fetchSelectedYears,oldRender=renderQuestions,oldBuild=buildGuidedSolution,oldDetect=detectQuestionCase;
 fetchSelectedYears=async function(v){var q=await oldFetch(v);(q||[]).forEach(apply);return q;};
 detectQuestionCase=function(q){
   if(Number(q.year)===2025){
     var n=Number(q.index),id=CASES[n];if(id){var c=getCase('geometria',id);if(c)return Object.assign({},c,{confidence:'auditada',score:99});}
     if(n===136){var p=getCase('proporcao','P5');if(p)return Object.assign({},p,{confidence:'auditada',score:99});}
   }
   return oldDetect(q);
 };
 buildGuidedSolution=function(q){
   apply(q);var n=Number(q.index);
   if(Number(q.year)===2025&&n===136)return q136();
   if(q.primaryFamily==='geometria'){
     if(Number(q.year)===2025&&SOL[n])return specific(SOL[n],false);
     if(Number(q.year)===2025&&FIG[n])return specific(FIG[n],true);
     return genericGeom(q,oldDetect);
   }
   return oldBuild(q);
 };
 renderQuestions=function(qs){
   (qs||[]).forEach(apply);
   var x=qs||[];if(state&&state.family==='geometria')x=x.filter(function(q){return (q.families||[]).indexOf('geometria')>=0;});
   return oldRender(x);
 };
 try{if(state&&state.bankCache)state.bankCache.forEach(function(a){if(Array.isArray(a))a.forEach(apply);});if(state&&Array.isArray(state.currentQuestions))state.currentQuestions.forEach(apply);}catch(e){}
 var st=document.createElement('style');st.textContent='.geometry-reviewed .solution-step strong{line-height:1.45}.geometry-reviewed button{margin-top:8px}';document.head.appendChild(st);
 setTimeout(function(){try{loadQuestionView();}catch(e){}},0);
 setTimeout(function(){try{loadQuestionView();}catch(e){}},700);
}
install();
})();
(() => {
  const FAMILY_OVERRIDES = {
    "2025-136":"proporcao",
    "2025-141":"proporcao",
    "2025-142":"estatistica",
    "2025-138":"geometria","2025-139":"geometria","2025-144":"geometria",
    "2025-148":"geometria","2025-149":"geometria","2025-153":"geometria",
    "2025-161":"geometria","2025-164":"geometria","2025-170":"geometria",
    "2025-171":"geometria","2025-173":"geometria","2025-177":"geometria"
  };

  const CASE_OVERRIDES = {
    "2025-138":"G6","2025-139":"G1","2025-144":"G2","2025-148":"G3",
    "2025-149":"G6","2025-153":"G7","2025-161":"G6","2025-164":"G5",
    "2025-170":"G4","2025-171":"G4","2025-173":"G2","2025-177":"G2"
  };

  const REVIEWED = {
    "2025-138":{
      status:"figure",case:"G6",
      interpretation:"A distância aos planos yz, xz e xy é controlada, respectivamente, por |x|, |y| e |z|. Aplique cada deslocamento coordenada por coordenada e só depois compare as projeções.",
      steps:[
        "Leia na figura inicial a posição do cubo em relação a cada plano coordenado.",
        "Aproximar-se 3 do plano yz reduz |x| em 3; afastar-se 5 do plano xz aumenta |y| em 5; aproximar-se 4 do plano xy reduz |z| em 4.",
        "Projete a nova posição separadamente em xy, xz e yz, descartando a coordenada perpendicular a cada plano.",
        "Compare as três vistas com as alternativas."
      ],
      formula:"\\(\\pi_{xy}(x,y,z)=(x,y),\\quad \\pi_{xz}(x,y,z)=(x,z),\\quad \\pi_{yz}(x,y,z)=(y,z)\\)",
      conclusion:"A fonte estruturada do enunciado indica E. A verificação completa depende da figura inicial e das alternativas gráficas.",answer:"E"
    },
    "2025-139":{
      status:"verified",case:"G1",
      interpretation:"A ciclovia é uma circunferência. Cada policial protege 200 m em cada sentido ao longo dela, logo cobre 400 m de arco.",
      steps:[
        "Com r=1 km e π≈3: C=2πr=6 km=6000 m.",
        "Cobertura por policial: 200+200=400 m.",
        "Quantidade mínima: 6000/400=15."
      ],
      formula:"\\(C=2\\pi r=6000\\,m;\\quad N=6000/400=15\\)",
      conclusion:"São necessários 15 policiais.",answer:"C"
    },
    "2025-144":{
      status:"verified",case:"G2",
      interpretation:"Não é uma questão de volume. Classifique as faces EXTERNAS por congruência; a base comum entre o prisma e o tronco fica interna e não é pintada.",
      steps:[
        "As 6 faces laterais retangulares do prisma formam uma classe.",
        "As 6 faces laterais trapezoidais do tronco formam outra.",
        "A base hexagonal inferior do prisma é uma terceira classe.",
        "A base hexagonal menor superior do tronco é a quarta.",
        "A base coincidente entre os sólidos é interna e não entra na pintura."
      ],
      formula:"\\(1+1+1+1=4\\text{ classes de faces congruentes}\\)",
      conclusion:"São usadas 4 cores.",answer:"D"
    },
    "2025-148":{
      status:"figure",case:"G3",
      interpretation:"As telas usam escalas diferentes. Portanto, compare comprimentos REAIS, não apenas os comprimentos desenhados.",
      steps:[
        "Leia, em cada figura I–V, o comprimento desenhado e a escala.",
        "Converta cada comprimento para a medida real na mesma unidade.",
        "Compare os cinco valores reais."
      ],
      formula:"\\(E=\\dfrac{L_{desenho}}{L_{real}}\\Rightarrow L_{real}=\\dfrac{L_{desenho}}{E}\\)",
      conclusion:"A fonte estruturada indica a opção III, alternativa C. A auditoria numérica completa depende das cinco figuras.",answer:"C"
    },
    "2025-149":{
      status:"figure",case:"G6",
      interpretation:"Não some vértices de faces isoladamente, pois vértices compartilhados seriam contados várias vezes. Use as vistas/planificação e, se conveniente, a relação de Euler.",
      steps:[
        "Identifique na planificação os vértices que se tornam o mesmo vértice após a montagem.",
        "Conte vértices distintos; alternativamente, conte E e F e use Euler.",
        "Confira a consistência com a estrutura das faces."
      ],
      formula:"\\(V-E+F=2\\)",
      conclusion:"A fonte estruturada indica 25 vértices, alternativa B. A contagem completa requer a figura/planificação.",answer:"B"
    },
    "2025-153":{
      status:"figure",case:"G7",
      interpretation:"Os pontos equidistantes dos dois vilões V e T formam a mediatriz de VT. A questão pede a equação desse lugar geométrico.",
      steps:[
        "Leia as coordenadas de V e T na figura.",
        "Encontre o ponto médio de VT.",
        "Calcule a inclinação de VT e use a inclinação perpendicular para a mediatriz.",
        "Escreva a reta pelo ponto médio e compare com as alternativas."
      ],
      formula:"\\(d(P,V)=d(P,T)\\iff P\\text{ pertence à mediatriz de }VT\\)",
      conclusion:"Para a figura da versão estruturada, a equação correta é y=−3x+20, alternativa A.",answer:"A"
    },
    "2025-161":{
      status:"figure",case:"G6",
      interpretation:"A forma mais segura é inverter o percurso: parta da casa do amigo e desfaça os movimentos na ordem inversa e com sentidos opostos.",
      steps:[
        "Localize a casa A na figura.",
        "Desfaça o último trecho: dois quarteirões para oeste viram dois para leste.",
        "Desfaça os três quarteirões ao norte, voltando três ao sul.",
        "Desfaça o primeiro trecho e identifique a letra do quarteirão de João."
      ],
      formula:"\\(\\text{percurso inverso}=\\text{ordem inversa + sentidos opostos}\\)",
      conclusion:"A fonte estruturada indica o quarteirão P, alternativa A. A verificação visual depende do mapa.",answer:"A"
    },
    "2025-164":{
      status:"verified",case:"G5",
      interpretation:"O segundo deslocamento, de 2 h a 90°, é igual nas duas rotas e se cancela ao comparar os pontos finais. Basta comparar os dois primeiros deslocamentos de 4 h.",
      steps:[
        "Os dois vetores iniciais têm comprimento 4v.",
        "O ângulo menor entre 110° e 340° é 130°. Como cos130°=−cos50°≈−0,64, use a lei dos cossenos.",
        "d²=(4v)²+(4v)²−2(4v)(4v)cos130°=52,48v².",
        "d≈7,24v, então t=d/v≈7,24 h≈7 h 15 min.",
        "Pela orientação da bússola, a direção de T para R é 135°."
      ],
      formula:"\\(d=v\\sqrt{52{,}48}\\approx7{,}24v\\Rightarrow t\\approx7{,}24\\,h\\)",
      conclusion:"Direção 135° e cerca de 7 h 15 min: alternativa A.",answer:"A"
    },
    "2025-170":{
      status:"verified",case:"G4",
      interpretation:"As garrafas submersas deslocam água. O problema pede o maior número de garrafas que ainda deixe pelo menos 5 L de água.",
      steps:[
        "Volume inicial: 2,5·1,5·2=7,5 dm³=7,5 L.",
        "Cada garrafa ocupa 300 mL=0,3 L.",
        "Com n garrafas: Vágua=7,5−0,3n.",
        "Imponha 7,5−0,3n≥5: n≤8,33…",
        "Como n é inteiro, o máximo é 8."
      ],
      formula:"\\(7{,}5-0{,}3n\\ge5\\Rightarrow n\\le8{,}33\\ldots\\)",
      conclusion:"Quantidade máxima: 8 garrafas.",answer:"B"
    },
    "2025-171":{
      status:"verified",case:"G4",
      interpretation:"Para que qualquer torta caiba, use o maior raio, 16 cm. A folga lateral de 1 cm deve existir em ambos os lados do diâmetro.",
      steps:[
        "Maior diâmetro: 2·16=32 cm.",
        "Com 1 cm de folga em cada lateral: 32+2=34 cm.",
        "A caixa antiga tem lado 14 cm.",
        "Aumento mínimo: 34−14=20 cm. A altura necessária é 6+1=7 cm e já é atendida."
      ],
      formula:"\\(L_{novo}=2r_{max}+2=34\\,cm;\\quad \\Delta L=34-14=20\\,cm\\)",
      conclusion:"A aresta da base deve aumentar 20 cm.",answer:"E"
    },
    "2025-173":{
      status:"figure",case:"G2",
      interpretation:"Como os túneis têm a mesma extensão, minimizar o volume retirado equivale a minimizar a área da seção transversal.",
      steps:[
        "Leia na figura os raios/diâmetros de cada semicircunferência.",
        "No Projeto 1, some as áreas das duas semicircunferências.",
        "No Projeto 2, calcule a área da única semicircunferência.",
        "Use π≈3 e compare."
      ],
      formula:"\\(A_{semi}=\\dfrac{\\pi r^2}{2}\\)",
      conclusion:"Na figura dessa versão, o Projeto 1 tem a menor seção, 67,5 m²: alternativa A.",answer:"A"
    },
    "2025-177":{
      status:"verified",case:"G2",
      interpretation:"O ouro ocupa o volume do cilindro da medalha menos o prisma quadrado que a atravessa. Primeiro converta 3 mm para 0,3 cm.",
      steps:[
        "Cilindro: r=3 cm e h=0,3 cm. V=3,1·3²·0,3=8,37 cm³.",
        "O quadrado está inscrito no círculo de diâmetro 6 cm; sua diagonal é 6. Então 2l²=36 e l²=18 cm².",
        "Prisma retirado: 18·0,3=5,4 cm³.",
        "Ouro por medalha: 8,37−5,4=2,97 cm³.",
        "Para 100 medalhas: 297 cm³."
      ],
      formula:"\\(100[\\pi(3)^2(0{,}3)-18(0{,}3)]=297\\,cm^3\\)",
      conclusion:"São necessários 297 cm³ de ouro.",answer:"B"
    }
  };

  const keyOf=q=>\`\${q.year}-\${q.index}\`;
  const caseById=id=>(PATTERN_GUIDES.geometria?.cases||[]).find(c=>c.id===id)||null;

  function geometryCase(q){
    const k=keyOf(q);
    if(CASE_OVERRIDES[k]) return {...caseById(CASE_OVERRIDES[k]),score:99,confidence:"auditada"};
    const t=stripAccents(questionTextForClassification(q));
    let id="G1";
    if(/projecao ortogonal|projecoes ortogonais|planificacao|vista frontal|vista superior|vista lateral|quarteir|orientacao|pontos cardeais/.test(t)) id="G6";
    else if(/plano cartesiano|coordenad|equidistant|mediatriz|equacao da trajetoria|reta/.test(t)) id="G7";
    else if(/angulo|seno|cosseno|tangente|pitagor|triangulo retangulo|rampa|bussola/.test(t)) id="G5";
    else if(/escala|maquete|planta baixa|semelhanc|ampliacao|reducao/.test(t)) id="G3";
    else if(/justapos|vazio|vazada|retirad|removid|atravessa|secao transversal|compos/.test(t)) id="G2";
    else if(/volume|capacidade|reservatorio|tanque|cisterna|cilindro|cone|prisma|piramid|esfera|paralelepiped|embalagem|torta/.test(t)) id="G4";
    return {...caseById(id),score:5,confidence:"por padrão"};
  }

  const oldNormalize=normalizeQuestion;
  normalizeQuestion=function(q,year){
    const n=oldNormalize(q,year);
    // Corrige a falha crítica: o gabarito deve ser o da MESMA fonte/versão do enunciado.
    n.correctAlternative=q.correctAlternative||null;
    n.alternatives.forEach(a=>a.isCorrect=!!n.correctAlternative&&a.letter===n.correctAlternative);
    const f=FAMILY_OVERRIDES[keyOf(n)];
    if(f){
      n.primaryFamily=f;
      n.families=f==="geometria"
        ? ["geometria",...n.families.filter(x=>x!=="geometria")]
        : [f,...n.families.filter(x=>x!==f&&x!=="geometria")];
      n.confidence="auditada";
    }
    return n;
  };

  const oldDetect=detectQuestionCase;
  detectQuestionCase=function(q){
    if(q.primaryFamily==="geometria") return geometryCase(q);
    return oldDetect(q);
  };

  window.openGeometryPattern=function(id){
    const el=document.querySelector(\`.case-card[data-case="\${id}"]\`);
    if(el){el.open=true;el.scrollIntoView({behavior:"smooth",block:"center"});}
    else document.getElementById("patterns")?.scrollIntoView({behavior:"smooth"});
  };

  const oldBuild=buildGuidedSolution;
  buildGuidedSolution=function(q){
    if(q.primaryFamily!=="geometria") return oldBuild(q);
    const reviewed=REVIEWED[keyOf(q)];
    const c=reviewed?caseById(reviewed.case):geometryCase(q);
    const correct=q.alternatives.find(a=>a.letter===q.correctAlternative);
    const correctDisplay=correct?.mathTex||(correct?.text?inlineQuestionText(correct.text):null);

    if(reviewed){
      const verified=reviewed.status==="verified";
      return \`<div class="solution-grid geometry-reviewed">
        <div class="solution-step case-solution-step">
          <small>Padrão relacionado</small>
          <p><strong>\${escapeHtml(reviewed.case)} · \${escapeHtml(c?.title||"Padrão geométrico")}</strong></p>
          <p>\${escapeHtml(c?.interpret||reviewed.interpretation)}</p>
          <button type="button" class="secondary" onclick="openGeometryPattern('\${reviewed.case}')">Revisar este padrão na seção anterior</button>
        </div>
        <div class="solution-step"><small>Status editorial</small><p><strong>\${verified?"✓ Solução específica auditada":"◐ Solução dependente da figura"}</strong></p></div>
        <div class="solution-step"><small>Como interpretar esta questão</small><p>\${escapeHtml(reviewed.interpretation)}</p></div>
        <div class="solution-step"><small>Resolução</small>\${reviewed.steps.map((x,i)=>\`<p><strong>\${i+1}.</strong> \${formatMathHtml(escapeHtml(x))}</p>\`).join("")}</div>
        <div class="solution-step"><small>Relação matemática</small><p>\${reviewed.formula}</p></div>
        <div class="solution-step"><small>Conclusão</small><p>\${formatMathHtml(escapeHtml(reviewed.conclusion))}</p><p><strong>Alternativa \${escapeHtml(reviewed.answer)}</strong>\${correctDisplay?\` — \${correctDisplay}\`:""}</p></div>
      </div>\`;
    }

    const data=extractKeyData(q);
    return \`<div class="solution-grid geometry-reviewed">
      <div class="solution-step case-solution-step"><small>Padrão relacionado</small><p><strong>\${escapeHtml(c?.id||"—")} · \${escapeHtml(c?.title||"Geometria")}</strong></p><p>\${escapeHtml(c?.interpret||"Reconheça a estrutura geométrica antes de calcular.")}</p>\${c?.id?\`<button type="button" class="secondary" onclick="openGeometryPattern('\${c.id}')">Revisar este padrão na seção anterior</button>\`:""}</div>
      <div class="solution-step"><small>Status editorial</small><p><strong>Estratégia por padrão — solução específica ainda não auditada</strong></p></div>
      \${data.length?\`<div class="solution-step"><small>Dados extraídos</small><div class="solution-data">\${data.map(x=>\`<span class="data-chip">\${formatMathHtml(escapeHtml(x))}</span>\`).join("")}</div></div>\`:""}
      \${c?\`<div class="solution-step"><small>Rota segura deste padrão</small>\${c.route.map((x,i)=>\`<p><strong>\${i+1}.</strong> \${escapeHtml(x)}</p>\`).join("")}</div><div class="solution-step"><small>Relação típica</small><p>\${c.formula}</p></div>\`:""}
      <div class="solution-step"><small>Gabarito da mesma fonte do enunciado</small><p><strong>\${escapeHtml(q.correctAlternative||"—")}</strong>\${correctDisplay?\` — \${correctDisplay}\`:""}</p></div>
    </div><div class="audit-note">Nesta questão a apostila não apresenta mais uma fórmula genérica como se fosse uma solução completa. Enquanto a auditoria individual não estiver concluída, mostra apenas a estratégia do padrão geométrico e o gabarito da mesma versão do enunciado.</div>\`;
  };

  // Permite que os cartões de caso sejam localizados a partir das soluções.
  const oldBuildPattern=buildPatternGuide;
  buildPatternGuide=function(familyKey){
    oldBuildPattern(familyKey);
    document.querySelectorAll(".case-card").forEach((el,i)=>{
      const c=PATTERN_GUIDES[familyKey]?.cases?.[i];
      if(c) el.dataset.case=c.id;
    });
  };

  // Marca visualmente a revisão.
  const style=document.createElement("style");
  style.textContent=".geometry-reviewed .solution-step strong{line-height:1.45}.geometry-reviewed button{margin-top:8px}.geometry-reviewed .case-solution-step{border-color:rgba(255,200,87,.3)}";
  document.head.appendChild(style);
  document.title="Matemática ENEM — Geometria auditada";

  // v7.1 — aplica a auditoria ANTES dos filtros, inclusive em itens já presentes no cache.
  const EDITORIAL_OVERRIDES_V71 = {
    "2025-136":{
      primaryFamily:"proporcao",
      families:["proporcao","unidades"],
      primarySubtopic:"taxas_consumo",
      subtopics:["taxas_consumo","razao_proporcao"],
      answer:"C",
      caseFamily:"proporcao",
      caseId:"P5"
    },
    "2025-141":{
      primaryFamily:"funcoes",
      families:["funcoes","proporcao"],
      primarySubtopic:"modelagem_algebrica",
      subtopics:["modelagem_algebrica"],
      answer:"C"
    },
    "2025-142":{
      primaryFamily:"estatistica",
      families:["estatistica","graficos"],
      primarySubtopic:"mediana_moda",
      subtopics:["mediana_moda","tabelas"],
      answer:"C"
    }
  };

  const ANSWER_OVERRIDES_V71 = {
    "2025-138":"E","2025-139":"C","2025-144":"D","2025-148":"C",
    "2025-149":"B","2025-153":"A","2025-161":"A","2025-164":"A",
    "2025-170":"B","2025-171":"E","2025-173":"A","2025-177":"B"
  };

  function applyEditorialV71(q){
    if(!q) return q;
    const k=keyOf(q);
    const ed=EDITORIAL_OVERRIDES_V71[k];
    if(ed){
      q.primaryFamily=ed.primaryFamily;
      q.families=[...ed.families];
      q.primarySubtopic=ed.primarySubtopic;
      q.subtopics=[...ed.subtopics];
      q.confidence="auditada";
      if(q.scores) q.scores[ed.primaryFamily]=Math.max(99,q.scores[ed.primaryFamily]||0);
      q.correctAlternative=ed.answer;
      (q.alternatives||[]).forEach(a=>a.isCorrect=a.letter===ed.answer);
    }
    const auditedAnswer=ANSWER_OVERRIDES_V71[k];
    if(auditedAnswer){
      q.correctAlternative=auditedAnswer;
      (q.alternatives||[]).forEach(a=>a.isCorrect=a.letter===auditedAnswer);
    }
    return q;
  }

  const fetchSelectedYearsV70=fetchSelectedYears;
  fetchSelectedYears=async function(value){
    const qs=await fetchSelectedYearsV70(value);
    qs.forEach(applyEditorialV71);
    return qs;
  };

  const renderQuestionsV70=renderQuestions;
  renderQuestions=function(qs){
    qs.forEach(applyEditorialV71);
    const filtered=qs.filter(q=>q.families?.includes(state.family));
    const counter=document.querySelector("[data-count]");
    if(counter && filtered.length!==qs.length) counter.textContent=filtered.length;
    return renderQuestionsV70(filtered);
  };

  const detectQuestionCaseV70=detectQuestionCase;
  detectQuestionCase=function(q){
    const ed=EDITORIAL_OVERRIDES_V71[keyOf(q)];
    if(ed?.caseFamily && ed?.caseId){
      const cc=(PATTERN_GUIDES[ed.caseFamily]?.cases||[]).find(x=>x.id===ed.caseId);
      if(cc) return {...cc,score:99,confidence:"auditada"};
    }
    return detectQuestionCaseV70(q);
  };

  const buildGuidedSolutionV70=buildGuidedSolution;
  buildGuidedSolution=function(q){
    if(keyOf(q)==="2025-136"){
      const correct=q.alternatives.find(a=>a.letter==="C");
      const correctDisplay=correct?.text?inlineQuestionText(correct.text):"17";
      return '<div class="solution-grid geometry-reviewed">'
        +'<div class="solution-step case-solution-step"><small>Padrão relacionado</small>'
        +'<p><strong>P5 · Taxas, consumo e produtividade</strong></p>'
        +'<p>Transforme primeiro a rotina semanal em distância total e depois use a taxa de consumo para obter a capacidade mínima necessária.</p>'
        +'<button type="button" class="secondary review-pattern-btn" data-review-case="P5">Revisar este padrão na seção anterior</button></div>'
        +'<div class="solution-step"><small>Status editorial</small><p><span class="solution-review-badge review-ok">✓ Solução específica auditada</span></p></div>'
        +'<div class="solution-step"><small>Como interpretar esta questão</small>'
        +'<p>O fato de o recipiente ser um cilindro não exige fórmula de cilindro: as capacidades já são fornecidas em m³. O que se pede é escolher a menor capacidade que comporte o consumo de uma semana.</p></div>'
        +'<div class="solution-step"><small>Resolução</small>'
        +'<p><strong>1.</strong> Distância semanal: \\(30\\cdot7=210\\text{ km}\\).</p>'
        +'<p><strong>2.</strong> O consumo é de \\(1\\text{ m}^3\\) a cada \\(13\\text{ km}\\).</p>'
        +'<p><strong>3.</strong> Volume necessário: \\(V=\\dfrac{210}{13}\\approx16{,}15\\text{ m}^3\\).</p>'
        +'<p><strong>4.</strong> Entre 10, 14, 17, 21 e 25 m³, a menor capacidade não inferior a 16,15 é 17 m³.</p></div>'
        +'<div class="solution-step"><small>Relação matemática</small><p>\\(\\text{consumo semanal}=\\dfrac{\\text{distância semanal}}{13\\text{ km/m}^3}\\)</p></div>'
        +'<div class="solution-step"><small>Conclusão</small><p><strong>Alternativa C — '+correctDisplay+' m³.</strong></p></div>'
        +'</div>';
    }
    return buildGuidedSolutionV70(q);
  };

  try{
    for(const arr of state.bankCache.values()){
      if(Array.isArray(arr)) arr.forEach(applyEditorialV71);
    }
    (state.currentQuestions||[]).forEach(applyEditorialV71);
  }catch(_){}

  setTimeout(()=>{ try{ loadQuestionView(); }catch(_){} },0);
  setTimeout(()=>{ try{ loadQuestionView(); }catch(_){} },900);

})();
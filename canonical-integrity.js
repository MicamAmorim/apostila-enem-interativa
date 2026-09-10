/* Auditoria executável do banco canônico ENEM — Caderno 5 Amarelo */
(function(){
  'use strict';
  if(window.__ENEM_CANONICAL_INTEGRITY__) return;

  const LETTERS = new Set(['A','B','C','D','E']);
  const EXPECTED_YEARS = Array.from({length:17},(_,i)=>2009+i);
  const EXPECTED_INDEXES = Array.from({length:45},(_,i)=>136+i);

  function familyOf(q){
    return q.primaryFamily || (Array.isArray(q.families) && q.families[0]) || 'sem-familia';
  }

  function structuralAudit(){
    const map = window.ENEM_CANONICAL_MAP || {};
    const errors=[];
    const years={};
    let total=0, annulled=0;

    for(const year of EXPECTED_YEARS){
      const ym=map[year] || map[String(year)];
      const ys={count:0,missing:[],duplicateItems:[],invalidAnswers:[],invalidSourceIndexes:[]};
      years[year]=ys;
      if(!ym){ errors.push(`${year}: mapa ausente`); continue; }

      const seenItems=new Set();
      for(const index of EXPECTED_INDEXES){
        const m=ym[index] || ym[String(index)];
        if(!m){ ys.missing.push(index); continue; }
        ys.count++; total++;
        const item=Number(m.item);
        if(seenItems.has(item)) ys.duplicateItems.push(item);
        seenItems.add(item);
        if(!Number.isInteger(Number(m.sourceIndex)) || Number(m.sourceIndex)<136 || Number(m.sourceIndex)>180){
          ys.invalidSourceIndexes.push(index);
        }
        if(m.answer==null || m.answer===''){
          annulled++;
          if(!m.abandoned) ys.invalidAnswers.push(`${index}: sem letra e não marcado anulado`);
        }else if(!LETTERS.has(String(m.answer).toUpperCase())){
          ys.invalidAnswers.push(`${index}: ${m.answer}`);
        }
      }
      if(ys.count!==45) errors.push(`${year}: ${ys.count}/45 posições`);
      if(ys.missing.length) errors.push(`${year}: faltam ${ys.missing.join(', ')}`);
      if(ys.duplicateItems.length) errors.push(`${year}: CO_ITEM duplicado ${ys.duplicateItems.join(', ')}`);
      if(ys.invalidAnswers.length) errors.push(`${year}: gabarito inválido (${ys.invalidAnswers.join('; ')})`);
      if(ys.invalidSourceIndexes.length) errors.push(`${year}: índices de origem inválidos (${ys.invalidSourceIndexes.join(', ')})`);
    }

    return {
      ok: errors.length===0 && total===765,
      canonicalBooklet:'Caderno 5 Amarelo',
      expected:765,
      total,
      holes:765-total,
      annulled,
      errors,
      years
    };
  }

  async function solutionAudit(){
    const structural=structuralAudit();
    const byFamily={};
    const errors=[];
    let questions=0, withOfficialAnswer=0, annulled=0, explicitClaims=0, mismatches=0, quarantined=0;

    if(typeof window.fetchYear!=='function') throw new Error('fetchYear canônico não está disponível.');
    if(typeof window.buildGuidedSolution!=='function') throw new Error('buildGuidedSolution não está disponível.');

    for(const year of EXPECTED_YEARS){
      const qs=await window.fetchYear(year);
      if(!Array.isArray(qs) || qs.length!==45) errors.push(`${year}: fetch retornou ${Array.isArray(qs)?qs.length:'valor inválido'} questões`);
      const seen=new Set();
      for(const q of (qs||[])){
        questions++;
        if(seen.has(q.index)) errors.push(`${year}: questão canônica duplicada Q${q.index}`);
        seen.add(q.index);
        const fam=familyOf(q);
        const bucket=byFamily[fam] ||= {questions:0,answered:0,annulled:0,claims:0,mismatches:0,quarantined:0};
        bucket.questions++;

        if(!q.correctAlternative){ annulled++; bucket.annulled++; continue; }
        withOfficialAnswer++; bucket.answered++;
        const html=String(window.buildGuidedSolution(q)||'');
        const claims=[...html.matchAll(/Alternativa\s+([A-E])/gi)].map(m=>m[1].toUpperCase());
        const bad=claims.filter(x=>x!==String(q.correctAlternative).toUpperCase());
        explicitClaims+=claims.length; bucket.claims+=claims.length;
        if(bad.length){
          mismatches+=bad.length; bucket.mismatches+=bad.length;
          errors.push(`${year} Q${q.index}: solução afirma ${[...new Set(bad)].join('/')} mas gabarito oficial é ${q.correctAlternative}`);
        }
        if(/quarentena|derivação específica em revisão/i.test(html)){ quarantined++; bucket.quarantined++; }
      }
      if(seen.size!==45) errors.push(`${year}: ${seen.size}/45 índices únicos após carregamento`);
    }

    return {
      ok: structural.ok && questions===765 && mismatches===0,
      structural,
      questions,
      withOfficialAnswer,
      annulled,
      explicitClaims,
      mismatches,
      quarantined,
      byFamily,
      errors
    };
  }

  const structural=structuralAudit();
  window.__ENEM_CANONICAL_INTEGRITY__=structural;
  window.runCanonicalStructuralAudit=structuralAudit;
  window.runCanonicalSolutionAudit=solutionAudit;
  if(structural.ok) console.info('[ENEM canônico] integridade estrutural OK:', structural);
  else console.error('[ENEM canônico] falha de integridade:', structural);
})();

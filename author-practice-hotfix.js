/* UI extension: author tab + practice-case across all ENEM years */
(function(){
  'use strict';
  if(window.__ENEM_AUTHOR_PRACTICE_HOTFIX__) return;
  window.__ENEM_AUTHOR_PRACTICE_HOTFIX__=true;

  function installStyles(){
    if(document.getElementById('author-practice-style')) return;
    const style=document.createElement('style');
    style.id='author-practice-style';
    style.textContent=`
      .author-nav-item{margin-top:10px;border-top:1px solid var(--line);border-radius:0 0 13px 13px;padding-top:14px}
      .author-profile{padding-top:18px}
      .author-profile .author-lead{font-size:18px;line-height:1.75;max-width:850px}
      .author-profile .author-role{display:flex;flex-wrap:wrap;gap:8px;margin-top:22px}
      .author-profile .author-role span{border:1px solid var(--line);background:rgba(21,30,52,.62);border-radius:999px;padding:8px 12px;font-size:12px;color:var(--muted)}
      .author-cv-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
      .author-cv-card{border:1px solid var(--line);border-radius:18px;padding:22px;background:rgba(21,30,52,.62)}
      .author-cv-card small{display:block;color:var(--accent);font-size:10px;letter-spacing:.14em;text-transform:uppercase;margin-bottom:10px}
      .author-cv-card h3{margin:0 0 10px;font-size:18px}
      .author-cv-card p{margin:0;color:var(--muted);line-height:1.7}
      .author-project-note{border:1px solid var(--line);border-radius:18px;padding:22px;background:linear-gradient(145deg,var(--card),rgba(21,30,52,.35))}
      .author-project-note strong{display:block;margin-bottom:8px}
      .author-project-note p{margin:0;color:var(--muted);line-height:1.7}
      @media(max-width:760px){.author-cv-grid{grid-template-columns:1fr}.author-profile .author-lead{font-size:16px}}
    `;
    document.head.appendChild(style);
  }

  function authorMarkup(){
    return `
      <section class="hero author-profile">
        <div>
          <div class="eyebrow">Sobre o Autor</div>
          <h1>Miquéias Amorim Santos Silva</h1>
          <p class="author-lead">Professor, pesquisador e engenheiro com atuação na interface entre Matemática, Modelagem Computacional, Engenharia e Inteligência Artificial.</p>
          <div class="author-role">
            <span>Educação Matemática</span>
            <span>Modelagem Computacional</span>
            <span>Visão Computacional</span>
            <span>Engenharia</span>
          </div>
        </div>
        <div class="hero-stat"><span>Σ</span><small>Matemática, tecnologia e aprendizagem visual</small></div>
      </section>

      <section class="section">
        <div class="section-heading">
          <div class="section-number">01</div>
          <div><h2>Currículo resumido</h2><p>Formação acadêmica e principais áreas de atuação.</p></div>
        </div>
        <div class="author-cv-grid">
          <article class="author-cv-card">
            <small>Formação</small>
            <h3>Formação multidisciplinar</h3>
            <p>Doutor em Modelagem Computacional pela FURG, mestre em Modelagem Computacional pela UESC, licenciado em Matemática pela UFBA e engenheiro civil pela FTC, com formação complementar em Inteligência Artificial e Machine Learning.</p>
          </article>
          <article class="author-cv-card">
            <small>Docência</small>
            <h3>Ensino básico e superior</h3>
            <p>Atua como professor de Matemática no ensino médio e também no ensino superior, ministrando disciplinas de engenharia e desenvolvendo materiais didáticos orientados à compreensão conceitual e à resolução de problemas.</p>
          </article>
          <article class="author-cv-card">
            <small>Tecnologia</small>
            <h3>Visão Computacional</h3>
            <p>Atua profissionalmente com engenharia de Visão Computacional, desenvolvimento de pipelines de análise de imagens e vídeo, reconhecimento de padrões e aplicações de Inteligência Artificial.</p>
          </article>
          <article class="author-cv-card">
            <small>Pesquisa</small>
            <h3>Modelagem e processamento de imagens</h3>
            <p>Desenvolve pesquisas em Visão Computacional, Processamento de Imagens, Reconhecimento de Padrões, Lógica Fuzzy, funções de agregação e integral de Choquet, com ênfase em detecção de bordas e modelagem computacional.</p>
          </article>
        </div>
      </section>

      <section class="section">
        <div class="section-heading">
          <div class="section-number">02</div>
          <div><h2>Sobre este projeto</h2><p>Uma ponte entre teoria, interpretação e prática.</p></div>
        </div>
        <div class="author-project-note">
          <strong>Apostila Interativa ENEM</strong>
          <p>Este projeto reúne experiência em educação matemática, pesquisa e desenvolvimento de software para transformar padrões recorrentes do ENEM em explicações, casos canônicos, experimentos visuais e prática com questões reais.</p>
        </div>
      </section>
    `;
  }

  function setTopTitle(){
    const top=document.querySelector('.top-title');
    if(!top) return;
    const small=top.querySelector('small');
    const strong=top.querySelector('strong');
    if(small) small.textContent='AUTOR';
    if(strong) strong.textContent='Sobre o Autor';
  }

  function showAuthor(){
    const host=document.getElementById('content');
    if(!host) return;
    document.querySelectorAll('.nav-item').forEach(x=>x.classList.remove('active'));
    document.querySelector('.author-nav-item')?.classList.add('active');
    host.innerHTML=authorMarkup();
    setTopTitle();
    window.scrollTo({top:0,behavior:'smooth'});
    if(window.innerWidth<=900) document.getElementById('sidebar')?.classList.remove('open');
  }

  function installAuthorTab(){
    if(document.querySelector('.author-nav-item')) return;
    const nav=document.querySelector('.family-nav');
    if(!nav) return;
    const btn=document.createElement('button');
    btn.type='button';
    btn.className='nav-item author-nav-item';
    btn.innerHTML='<span>08</span>Sobre o Autor';
    btn.setAttribute('aria-label','Sobre o Autor');
    btn.addEventListener('click',showAuthor);
    nav.appendChild(btn);

    nav.addEventListener('click',function(e){
      const family=e.target.closest('.nav-item[data-family]');
      if(family) btn.classList.remove('active');
    });
  }

  function findYearSelect(){
    return [...document.querySelectorAll('select')].find(sel=>{
      const values=[...sel.options].map(o=>String(o.value));
      return values.includes('all') && values.includes('2009') && values.includes('2025');
    }) || null;
  }

  function forceAllYears(){
    const yearSelect=findYearSelect();
    if(yearSelect) yearSelect.value='all';
    try{
      if(typeof state!=='undefined') state.selectedYear='all';
    }catch(_){}
  }

  /* Capture phase: runs before the existing button handler calls loadQuestionView(). */
  document.addEventListener('click',function(e){
    if(e.target.closest('.case-practice-btn,.practice-exp-btn')){
      forceAllYears();
    }
  },true);

  function install(){
    installStyles();
    installAuthorTab();
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',install,{once:true});
  else install();

  const observer=new MutationObserver(()=>installAuthorTab());
  observer.observe(document.documentElement,{childList:true,subtree:true});
})();

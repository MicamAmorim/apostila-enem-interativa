/* Visual alternatives for canonical Caderno 5 Amarelo questions.
   Local PNGs are stored under assets/visual-alternatives/<year>/q<question>/<letter>.png.
   ENEM 2025 uses verified extracted PNGs from the source repository until mirrored locally. */
(function(){
  'use strict';
  if(window.__ENEM_VISUAL_ALTERNATIVES_INSTALLED__) return;
  window.__ENEM_VISUAL_ALTERNATIVES_INSTALLED__=true;

  var LOCAL = new Set([
    '2010-137','2010-142',
    '2011-151','2011-180',
    '2012-145','2012-154','2012-166','2012-179',
    '2013-138','2013-142','2013-160','2013-173',
    '2014-139','2014-154','2014-167',
    '2015-138','2015-148',
    '2016-172',
    '2017-156',
    '2018-146','2018-151','2018-157','2018-169','2018-170','2018-174','2018-178',
    '2019-139','2019-163',
    '2020-136','2020-137','2020-149','2020-159','2020-166','2020-173',
    '2021-154','2021-155','2021-178','2021-180',
    '2022-158','2022-162','2022-163','2022-165','2022-178',
    '2023-137','2023-147','2023-153','2023-167','2023-172'
  ]);

  var REMOTE_2025 = new Set(['2025-144','2025-167']);
  var LETTERS=['A','B','C','D','E'];

  function pngFor(q,letter){
    var key=String(q.year)+'-'+String(q.index);
    if(LOCAL.has(key)) return '/assets/visual-alternatives/'+q.year+'/q'+q.index+'/'+letter+'.png';
    if(REMOTE_2025.has(key)){
      return 'https://raw.githubusercontent.com/diegoalves1988/pensar-exatas/main/client/public/questions/2025/q'+q.index+'-'+letter.toLowerCase()+'.png';
    }
    return null;
  }

  function attach(q){
    if(!q || !Array.isArray(q.alternatives)) return q;
    var key=String(q.year)+'-'+String(q.index);
    if(!LOCAL.has(key) && !REMOTE_2025.has(key)) return q;
    q.alternatives.forEach(function(a){
      var letter=String(a.letter||'').toUpperCase();
      if(!LETTERS.includes(letter)) return;
      var file=pngFor(q,letter);
      if(file) a.file=file;
    });
    q.visualAlternatives=true;
    q.visualAlternativesSource=LOCAL.has(key)?'local-png':'verified-2025-png';
    if(typeof auditAlternatives==='function') q.alternativeAudit=auditAlternatives(q);
    return q;
  }

  function attachList(list){
    if(Array.isArray(list)) list.forEach(attach);
    return list;
  }

  var previousFetchYear=typeof fetchYear==='function'?fetchYear:null;
  if(previousFetchYear){
    fetchYear=async function(year){ return attachList(await previousFetchYear(year)); };
  }

  var previousFetchSelectedYears=typeof fetchSelectedYears==='function'?fetchSelectedYears:null;
  if(previousFetchSelectedYears){
    fetchSelectedYears=async function(value){ return attachList(await previousFetchSelectedYears(value)); };
  }

  window.ENEM_VISUAL_ALTERNATIVE_KEYS={
    local:[...LOCAL],
    verified2025:[...REMOTE_2025],
    total:LOCAL.size+REMOTE_2025.size
  };
})();

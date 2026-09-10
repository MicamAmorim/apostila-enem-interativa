(async()=>{
  const decodeBase64=(input)=>{
    const alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    const clean=String(input||'').replace(/[^A-Za-z0-9+/=]/g,'').replace(/=+$/,'');
    const bytes=[];
    let buffer=0,bits=0;
    for(const ch of clean){
      const value=alphabet.indexOf(ch);
      if(value<0) continue;
      buffer=(buffer<<6)|value;
      bits+=6;
      if(bits>=8){
        bits-=8;
        bytes.push((buffer>>bits)&255);
        buffer&=(1<<bits)-1;
      }
    }
    return new Uint8Array(bytes);
  };

  try{
    const bytes=decodeBase64(window.__SITE_B64);
    if(bytes.length<10 || bytes[0]!==0x1f || bytes[1]!==0x8b){
      throw new Error('Payload da apostila inválido ou incompleto.');
    }

    let html;
    if('DecompressionStream' in window){
      const stream=new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
      html=await new Response(stream).text();
    }else{
      await new Promise((resolve,reject)=>{
        const s=document.createElement('script');
        s.src='https://cdn.jsdelivr.net/npm/pako@2.1.0/dist/pako.min.js';
        s.onload=resolve;
        s.onerror=reject;
        document.head.appendChild(s);
      });
      html=new TextDecoder().decode(window.pako.ungzip(bytes));
    }

    if(!html || !/<html[\s>]/i.test(html)) throw new Error('HTML reconstruído é inválido.');
    html=html.replace('</body>','<script src="/canonical-map-2009-2016.js?v=20260910-1"></'+'script><script src="/canonical-map-2017-2025.js?v=20260910-1"></'+'script><script src="/geometry-review.js?v=20260910-3"></'+'script><script src="/geometry-hotfix.js?v=20260910-2"></'+'script><script src="/canonical-bank.js?v=20260910-1"></'+'script><script src="/canonical-integrity.js?v=20260910-1"></'+'script></body>');
    document.open();
    document.write(html);
    document.close();
  }catch(err){
    document.body.innerHTML=`<main style="font-family:system-ui;padding:2rem;max-width:700px;margin:auto;color:#f3f6fb;background:#0b1020;min-height:100vh"><h1>Não foi possível iniciar a apostila</h1><p style="color:#9ca8bd">O pacote publicado está incompleto. O erro abaixo ajuda a identificar o ponto exato.</p><pre style="white-space:pre-wrap;color:#ff9cab">${String(err)}</pre></main>`;
    console.error(err);
  }
})();

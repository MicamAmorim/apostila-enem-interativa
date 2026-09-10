(async()=>{
  try{
    const raw=atob(window.__SITE_B64||"");
    const bytes=Uint8Array.from(raw,c=>c.charCodeAt(0));
    let html;
    if("DecompressionStream" in window){
      const stream=new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"));
      html=await new Response(stream).text();
    }else{
      await new Promise((resolve,reject)=>{
        const s=document.createElement("script");
        s.src="https://cdn.jsdelivr.net/npm/pako@2.1.0/dist/pako.min.js";
        s.onload=resolve;s.onerror=reject;document.head.appendChild(s);
      });
      html=new TextDecoder().decode(window.pako.ungzip(bytes));
    }
    document.open();document.write(html);document.close();
  }catch(err){
    document.body.innerHTML='<main style="font-family:system-ui;padding:2rem;max-width:700px;margin:auto"><h1>Não foi possível iniciar a apostila</h1><p>Recarregue a página. Se o problema continuar, use um navegador atualizado.</p><pre style="white-space:pre-wrap">'+String(err)+'</pre></main>';
    console.error(err);
  }
})();

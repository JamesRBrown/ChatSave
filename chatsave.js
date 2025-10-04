javascript:(()=>{try{
const SEL='[data-testid="conversation-turns"],[data-testid="conversation"],main';
const src=document.querySelector(SEL)||document.body;
if(!src){alert('No conversation found.');return;}
// 🔹 Extract the GUID from the URL
const match=window.location.pathname.match(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/);
const guid=match?match[0]:'chat';
const filename=`${guid}.html`;

// Build HTML snapshot
const htmlEl=document.documentElement, body=document.body;
const links=[...document.querySelectorAll('link[rel="stylesheet"]')].map(l=>l.outerHTML).join('\n');
const styles=[...document.querySelectorAll('style')].map(s=>s.outerHTML).join('\n');
const rootAttrs=[...htmlEl.attributes].map(a=>`${a.name}="${a.value.replace(/"/g,'&quot;')}"`).join(' ');
const bodyClass=body.className?` class="${body.className.replace(/"/g,'&quot;')}"`:'';
const baseCSS=`<style>html,body{margin:0}.container{max-width:1100px;margin:24px auto;padding:0 16px}</style>`;
const convo=`<div class="container" id="cgpt-convo">${src.cloneNode(true).outerHTML}</div>`;
const html='<!doctype html>\n'+`<html ${rootAttrs}><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${guid}</title>\n${links}\n${styles}\n${baseCSS}\n</head><body${bodyClass}>${convo}</body></html>`;

// Create and trigger download
const blob=new Blob([html],{type:'text/html'});
const url=URL.createObjectURL(blob);
const a=document.createElement('a');
a.href=url;a.download=filename;
document.body.appendChild(a);
a.click();
a.remove();
setTimeout(()=>URL.revokeObjectURL(url),5000);
}catch(e){console.error(e);alert('Save failed: '+e.message);}})();

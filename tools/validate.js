// Validador de integridade dos dados. Uso: node tools/validate.js
// Falha (exit 1) se houver ids duplicados, campos em falta, ou referências inválidas.
const fs=require('fs'),vm=require('vm'),path=require('path');
const root=path.join(__dirname,'..');
const ctx={console:{log(){}}};vm.createContext(ctx);
const load=f=>vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),ctx,{filename:f});
fs.readdirSync(path.join(root,'drugs')).filter(f=>/^drugs_.*\.js$/.test(f)).sort().forEach(f=>load('drugs/'+f));
load('compat_data.js');
const errs=[],warns=[];
const D=ctx.DRUGS||[];
const seen={};
for(const d of D){
  if(seen[d.id])errs.push('id duplicado: '+d.id);seen[d.id]=1;
  for(const k of ['id','name','category','class','indication','dose','prep','ci','alert','source'])
    if(!d[k]||(Array.isArray(d[k])&&!d[k].length))errs.push(d.id+': campo em falta/vazio: '+k);
  (d.dose||[]).forEach((x,i)=>{for(const k of ['ind','val'])if(!x[k])errs.push(d.id+': dose['+i+'] sem '+k);});
  if(/Formul[áa]rio/i.test(d.source||'')===false&&d.src==='original')warns.push(d.id+': src=original mas source não cita o Formulário');
}
const names={};D.forEach(d=>{const n=d.name.toLowerCase();(names[n]=names[n]||[]).push(d.id)});
Object.entries(names).filter(([,v])=>v.length>1).forEach(([n,v])=>warns.push('nome repetido "'+n+'": '+v.join(', ')));
const CD=ctx.COMPAT_DRUGS||[];
CD.forEach(id=>{if(!seen[id])warns.push('COMPAT_DRUGS referencia id inexistente em DRUGS: '+id)});
Object.keys(ctx.COMPAT||{}).forEach(k=>k.split('|').forEach(id=>{if(!seen[id])warns.push('par compat com id inexistente: '+k)}));
console.log(D.length+' fármacos | '+errs.length+' erros | '+warns.length+' avisos');
errs.forEach(e=>console.log('ERRO  '+e));warns.forEach(w=>console.log('AVISO '+w));
process.exit(errs.length?1:0);

import{t as e}from"./react.DJY1zw8Z.js";import{t}from"./jsx-runtime.DK-X9XDJ.js";var n=e(),r=t(),i=`
.demo-range {
  -webkit-appearance: none;
  appearance: none;
  height: 6px;
  border-radius: 999px;
  outline: none;
  cursor: pointer;
}
.demo-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--color-accent);
  border: 2px solid #fff;
  box-shadow: 0 1px 4px rgba(0,0,0,.25);
  cursor: grab;
  transition: transform calc(120ms * var(--demo-speed, 1));
}
.demo-range::-webkit-slider-thumb:hover { transform: scale(1.15); }
.demo-range::-moz-range-thumb {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--color-accent);
  border: 2px solid #fff;
  box-shadow: 0 1px 4px rgba(0,0,0,.25);
  cursor: grab;
}
.demo-range.dual { pointer-events: none; }
.demo-range.dual::-webkit-slider-thumb { pointer-events: auto; }
.demo-range.dual::-moz-range-thumb { pointer-events: auto; }
`;function a(e){return{background:`linear-gradient(to right, var(--color-accent) ${e}%, rgba(128,128,128,.25) ${e}%)`}}function o(){let[e,t]=(0,n.useState)(64);return(0,r.jsxs)(`div`,{className:`mx-auto max-w-xs rounded-xl border border-line bg-paper p-4 text-sm`,children:[(0,r.jsxs)(`div`,{className:`mb-2 flex items-center justify-between`,children:[(0,r.jsx)(`span`,{"data-anatomy":`1`,className:`text-xs font-medium text-ink-2`,children:`音量`}),(0,r.jsxs)(`span`,{"data-anatomy":`4`,className:`font-mono text-xs text-accent`,children:[e,`%`]})]}),(0,r.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,r.jsx)(`span`,{"aria-hidden":`true`,className:`text-xs text-ink-3`,children:`🔈`}),(0,r.jsx)(`input`,{"data-anatomy":`2`,type:`range`,min:0,max:100,value:e,"aria-valuenow":e,"aria-label":`音量`,onChange:e=>t(Number(e.target.value)),className:`demo-range w-full`,style:a(e)}),(0,r.jsx)(`span`,{"aria-hidden":`true`,className:`text-xs text-ink-3`,children:`🔊`})]})]})}function s(){let[e,t]=(0,n.useState)(25);return(0,r.jsxs)(`div`,{className:`mx-auto max-w-xs text-sm`,children:[(0,r.jsxs)(`div`,{className:`mb-1 flex justify-between text-[11px] text-ink-3`,children:[(0,r.jsx)(`span`,{children:`存储配额`}),(0,r.jsxs)(`span`,{className:`font-mono text-accent`,children:[e,` GB`]})]}),(0,r.jsx)(`input`,{type:`range`,min:0,max:100,step:25,value:e,"aria-valuenow":e,"aria-label":`存储配额`,onChange:e=>t(Number(e.target.value)),className:`demo-range w-full`,style:a(e)}),(0,r.jsx)(`div`,{className:`mt-1 flex justify-between px-[7px] font-mono text-[10px] text-ink-3`,children:[0,25,50,75,100].map(t=>(0,r.jsx)(`span`,{className:t===e?`text-accent`:``,children:t},t))})]})}function c(){let[e,t]=(0,n.useState)(120),[i,a]=(0,n.useState)(680),o=e=>e/1e3*100;return(0,r.jsxs)(`div`,{className:`mx-auto max-w-xs text-sm`,children:[(0,r.jsxs)(`div`,{className:`mb-2 flex items-center justify-between text-[11px] text-ink-3`,children:[(0,r.jsx)(`span`,{children:`价格区间`}),(0,r.jsxs)(`span`,{className:`font-mono text-accent`,children:[`¥`,e,` – ¥`,i]})]}),(0,r.jsxs)(`div`,{className:`relative h-4`,children:[(0,r.jsx)(`div`,{className:`absolute inset-x-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-ink-3/25`}),(0,r.jsx)(`div`,{className:`absolute top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-accent`,style:{left:`${o(e)}%`,right:`${100-o(i)}%`}}),(0,r.jsx)(`input`,{type:`range`,min:0,max:1e3,step:10,value:e,"aria-label":`最低价格`,onChange:e=>t(Math.min(Number(e.target.value),i-50)),className:`demo-range dual absolute inset-x-0 top-1/2 w-full -translate-y-1/2`,style:{background:`transparent`}}),(0,r.jsx)(`input`,{type:`range`,min:0,max:1e3,step:10,value:i,"aria-label":`最高价格`,onChange:t=>a(Math.max(Number(t.target.value),e+50)),className:`demo-range dual absolute inset-x-0 top-1/2 w-full -translate-y-1/2`,style:{background:`transparent`}})]})]})}var l=({mode:e})=>e===`variants`?(0,r.jsxs)(`div`,{className:`mx-auto flex max-w-md flex-col gap-4 text-sm`,children:[(0,r.jsx)(`style`,{children:i}),(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`p`,{className:`mb-1.5 text-[10px] uppercase tracking-wider text-ink-3`,children:`单值 Single`}),(0,r.jsx)(o,{})]}),(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`p`,{className:`mb-1.5 text-[10px] uppercase tracking-wider text-ink-3`,children:`带刻度 With marks`}),(0,r.jsx)(s,{})]}),(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`p`,{className:`mb-1.5 text-[10px] uppercase tracking-wider text-ink-3`,children:`双端区间 Range`}),(0,r.jsx)(c,{})]})]}):(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`style`,{children:i}),(0,r.jsx)(o,{})]});export{l as default};
(()=>{"use strict";var e,t,n={889:(e,t,n)=>{n.d(t,{R:()=>r});const r=[{id:new Date("1/1/1970").toString(),title:"A Book",price:12.99},{id:new Date("1/2/1970").toString(),title:"A Carpet",price:129.99},{id:new Date("1/3/1970").toString(),title:"A Magic Broomstick",price:599.99},{id:new Date("1/4/1970").toString(),title:"A Bottle",price:2.99},{id:new Date("1/5/1970").toString(),title:"A T-Shirt",price:29.99}]},530:(e,t,n)=>{function r(e,t){const n=document.getElementById("product-list");n.innerHTML="",e.forEach((e=>{const r=document.createElement("li"),o=document.createElement("h2"),i=document.createElement("p"),a=document.createElement("button");o.innerHTML=e.title,i.innerHTML=e.price,a.innerHTML="DELETE",a.addEventListener("click",t.bind(null,e.id)),r.appendChild(o),r.appendChild(i),r.appendChild(a),n.appendChild(r)}))}n.d(t,{o:()=>r})}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return n[e](i,i.exports,o),i.exports}o.m=n,o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e,t),t)),[])),o.u=e=>e+".js",o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="my-place:",o.l=(n,r,i,a)=>{if(e[n])e[n].push(r);else{var d,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var p=c[u];if(p.getAttribute("src")==n||p.getAttribute("data-webpack")==t+i){d=p;break}}d||(l=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.setAttribute("data-webpack",t+i),d.src=n),e[n]=[r];var s=(t,r)=>{d.onerror=d.onload=null,clearTimeout(m);var o=e[n];if(delete e[n],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((e=>e(r))),t)return t(r)},m=setTimeout(s.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=s.bind(null,d.onerror),d.onload=s.bind(null,d.onload),l&&document.head.appendChild(d)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="assets/scripts/",(()=>{var e={523:0};o.f.j=(t,n)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise(((n,o)=>r=e[t]=[n,o]));n.push(r[2]=i);var a=o.p+o.u(t),d=new Error;o.l(a,(n=>{if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;d.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",d.name="ChunkLoadError",d.type=i,d.request=a,r[1](d)}}),"chunk-"+t,t)}};var t=(t,n)=>{var r,i,a=n[0],d=n[1],l=n[2],c=0;if(a.some((t=>0!==e[t]))){for(r in d)o.o(d,r)&&(o.m[r]=d[r]);l&&l(o)}for(t&&t(n);c<a.length;c++)i=a[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0},n=self.webpackChunkmy_place=self.webpackChunkmy_place||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),(()=>{var e=o(889),t=o(530);const n=document.getElementById("new-product");(0,t.o)(e.R,(function(e){o.e(841).then(o.bind(o,841)).then((t=>{t.deleteProduct(e)}))})),n.addEventListener("submit",(function(e){o.e(841).then(o.bind(o,841)).then((t=>{t.addProduct(e)}))}))})()})();
//# sourceMappingURL=shop.js.map
var S=Object.defineProperty;var C=(e,t,n)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var $=(e,t,n)=>(C(e,typeof t!="symbol"?t+"":t,n),n);import{r as m,n as y,p as w,q as O,v as E,w as T,l as b,x as B,y as D,z as A,A as j,B as I,C as H}from"./scheduler.40797072.js";let p=!1;function P(){p=!0}function q(){p=!1}function L(e,t,n,i){for(;e<t;){const r=e+(t-e>>1);n(r)<=i?e=r+1:t=r}return e}function z(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const s=[];for(let l=0;l<t.length;l++){const u=t[l];u.claim_order!==void 0&&s.push(u)}t=s}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let r=0;for(let s=0;s<t.length;s++){const l=t[s].claim_order,u=(r>0&&t[n[r]].claim_order<=l?r+1:L(1,r,d=>t[n[d]].claim_order,l))-1;i[s]=n[u]+1;const a=u+1;n[a]=s,r=Math.max(a,r)}const c=[],f=[];let o=t.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(c.push(t[s-1]);o>=s;o--)f.push(t[o]);o--}for(;o>=0;o--)f.push(t[o]);c.reverse(),f.sort((s,l)=>s.claim_order-l.claim_order);for(let s=0,l=0;s<f.length;s++){for(;l<c.length&&f[s].claim_order>=c[l].claim_order;)l++;const u=l<c.length?c[l]:null;e.insertBefore(f[s],u)}}function M(e,t){if(p){for(z(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function ne(e,t,n){p&&!n?M(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function R(e){e.parentNode&&e.parentNode.removeChild(e)}function ie(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function F(e){return document.createElement(e)}function x(e){return document.createTextNode(e)}function re(){return x(" ")}function se(){return x("")}function le(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function G(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}const U=["width","height"];function fe(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const i in t)t[i]==null?e.removeAttribute(i):i==="style"?e.style.cssText=t[i]:i==="__value"?e.value=e[i]=t[i]:n[i]&&n[i].set&&U.indexOf(i)===-1?e[i]=t[i]:G(e,i,t[i])}function ce(e){let t;return{p(...n){t=n,t.forEach(i=>e.push(i))},r(){t.forEach(n=>e.splice(e.indexOf(n),1))}}}function oe(e){return e===""?null:+e}function V(e){return Array.from(e.childNodes)}function W(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function N(e,t,n,i,r=!1){W(e);const c=(()=>{for(let f=e.claim_info.last_index;f<e.length;f++){const o=e[f];if(t(o)){const s=n(o);return s===void 0?e.splice(f,1):e[f]=s,r||(e.claim_info.last_index=f),o}}for(let f=e.claim_info.last_index-1;f>=0;f--){const o=e[f];if(t(o)){const s=n(o);return s===void 0?e.splice(f,1):e[f]=s,r?s===void 0&&e.claim_info.last_index--:e.claim_info.last_index=f,o}}return i()})();return c.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,c}function J(e,t,n,i){return N(e,r=>r.nodeName===t,r=>{const c=[];for(let f=0;f<r.attributes.length;f++){const o=r.attributes[f];n[o.name]||c.push(o.name)}c.forEach(f=>r.removeAttribute(f))},()=>i(t))}function ae(e,t,n){return J(e,t,n,F)}function K(e,t){return N(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(t),!0)}function ue(e){return K(e," ")}function _e(e,t){t=""+t,e.data!==t&&(e.data=t)}function de(e,t){e.value=t??""}function he(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function me(e,t,n){for(let i=0;i<e.options.length;i+=1){const r=e.options[i];if(r.__value===t){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function pe(e,t){for(let n=0;n<e.options.length;n+=1){const i=e.options[n];i.selected=~t.indexOf(i.__value)}}function $e(e){const t=e.querySelector(":checked");return t&&t.__value}function ye(e,t){const n=[];let i=0;for(const r of t.childNodes)if(r.nodeType===8){const c=r.textContent.trim();c===`HEAD_${e}_END`?(i-=1,n.push(r)):c===`HEAD_${e}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function xe(e,t){return new e(t)}const h=new Set;let _;function ge(){_={r:0,c:[],p:_}}function ve(){_.r||m(_.c),_=_.p}function Q(e,t){e&&e.i&&(h.delete(e),e.i(t))}function we(e,t,n,i){if(e&&e.o){if(h.has(e))return;h.add(e),_.c.push(()=>{h.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function be(e,t,n){const i=e.$$.props[t];i!==void 0&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function Ae(e){e&&e.c()}function Ee(e,t){e&&e.l(t)}function X(e,t,n){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,n),b(()=>{const c=e.$$.on_mount.map(j).filter(E);e.$$.on_destroy?e.$$.on_destroy.push(...c):m(c),e.$$.on_mount=[]}),r.forEach(b)}function Y(e,t){const n=e.$$;n.fragment!==null&&(B(n.after_update),m(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(e,t){e.$$.dirty[0]===-1&&(I.push(e),H(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ne(e,t,n,i,r,c,f=null,o=[-1]){const s=D;A(e);const l=e.$$={fragment:null,ctx:[],props:c,update:y,not_equal:r,bound:w(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:w(),dirty:o,skip_bound:!1,root:t.target||s.$$.root};f&&f(l.root);let u=!1;if(l.ctx=n?n(e,t.props||{},(a,d,...g)=>{const v=g.length?g[0]:d;return l.ctx&&r(l.ctx[a],l.ctx[a]=v)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](v),u&&Z(e,a)),d}):[],l.update(),u=!0,m(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){P();const a=V(t.target);l.fragment&&l.fragment.l(a),a.forEach(R)}else l.fragment&&l.fragment.c();t.intro&&Q(e.$$.fragment),X(e,t.target,t.anchor),q(),O()}A(s)}class Se{constructor(){$(this,"$$");$(this,"$$set")}$destroy(){Y(this,1),this.$destroy=y}$on(t,n){if(!E(n))return y;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!T(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const k="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(k);export{le as A,ce as B,oe as C,$e as D,pe as E,me as F,de as G,ie as H,be as I,Se as S,ne as a,ve as b,ue as c,Q as d,se as e,R as f,F as g,ae as h,Ne as i,V as j,G as k,he as l,x as m,K as n,_e as o,ge as p,xe as q,Ae as r,re as s,we as t,Ee as u,X as v,Y as w,ye as x,M as y,fe as z};

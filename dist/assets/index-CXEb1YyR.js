(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();function Yu(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const Pe={},_s=[],ui=()=>{},gp=()=>!1,nl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ju=n=>n.startsWith("onUpdate:"),un=Object.assign,Ku=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},dg=Object.prototype.hasOwnProperty,Ee=(n,t)=>dg.call(n,t),ie=Array.isArray,gs=n=>il(n)==="[object Map]",vp=n=>il(n)==="[object Set]",oe=n=>typeof n=="function",Ge=n=>typeof n=="string",Hi=n=>typeof n=="symbol",Ie=n=>n!==null&&typeof n=="object",xp=n=>(Ie(n)||oe(n))&&oe(n.then)&&oe(n.catch),yp=Object.prototype.toString,il=n=>yp.call(n),pg=n=>il(n).slice(8,-1),Mp=n=>il(n)==="[object Object]",$u=n=>Ge(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,co=Yu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),rl=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},mg=/-\w/g,Vn=rl(n=>n.replace(mg,t=>t.slice(1).toUpperCase())),_g=/\B([A-Z])/g,Br=rl(n=>n.replace(_g,"-$1").toLowerCase()),sl=rl(n=>n.charAt(0).toUpperCase()+n.slice(1)),ql=rl(n=>n?`on${sl(n)}`:""),sr=(n,t)=>!Object.is(n,t),Ra=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Sp=(n,t,e,r=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:r,value:e})},Ju=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let gf;const ol=()=>gf||(gf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qu(n){if(ie(n)){const t={};for(let e=0;e<n.length;e++){const r=n[e],s=Ge(r)?yg(r):Qu(r);if(s)for(const a in s)t[a]=s[a]}return t}else if(Ge(n)||Ie(n))return n}const gg=/;(?![^(]*\))/g,vg=/:([^]+)/,xg=/\/\*[^]*?\*\//g;function yg(n){const t={};return n.replace(xg,"").split(gg).forEach(e=>{if(e){const r=e.split(vg);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function th(n){let t="";if(Ge(n))t=n;else if(ie(n))for(let e=0;e<n.length;e++){const r=th(n[e]);r&&(t+=r+" ")}else if(Ie(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Mg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sg=Yu(Mg);function Ep(n){return!!n||n===""}const bp=n=>!!(n&&n.__v_isRef===!0),eh=n=>Ge(n)?n:n==null?"":ie(n)||Ie(n)&&(n.toString===yp||!oe(n.toString))?bp(n)?eh(n.value):JSON.stringify(n,Tp,2):String(n),Tp=(n,t)=>bp(t)?Tp(n,t.value):gs(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[r,s],a)=>(e[Yl(r,a)+" =>"]=s,e),{})}:vp(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Yl(e))}:Hi(t)?Yl(t):Ie(t)&&!ie(t)&&!Mp(t)?String(t):t,Yl=(n,t="")=>{var e;return Hi(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};let Sn;class Eg{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Sn,!t&&Sn&&(this.index=(Sn.scopes||(Sn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Sn;try{return Sn=this,t()}finally{Sn=e}}}on(){++this._on===1&&(this.prevScope=Sn,Sn=this)}off(){this._on>0&&--this._on===0&&(Sn=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let e,r;for(e=0,r=this.effects.length;e<r;e++)this.effects[e].stop();for(this.effects.length=0,e=0,r=this.cleanups.length;e<r;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function bg(){return Sn}let Le;const jl=new WeakSet;class wp{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Sn&&Sn.active&&Sn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,jl.has(this)&&(jl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Pp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,vf(this),Cp(this);const t=Le,e=Jn;Le=this,Jn=!0;try{return this.fn()}finally{Rp(this),Le=t,Jn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)rh(t);this.deps=this.depsTail=void 0,vf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?jl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Hc(this)&&this.run()}get dirty(){return Hc(this)}}let Ap=0,uo,ho;function Pp(n,t=!1){if(n.flags|=8,t){n.next=ho,ho=n;return}n.next=uo,uo=n}function nh(){Ap++}function ih(){if(--Ap>0)return;if(ho){let t=ho;for(ho=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;uo;){let t=uo;for(uo=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){n||(n=r)}t=e}}if(n)throw n}function Cp(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Rp(n){let t,e=n.depsTail,r=e;for(;r;){const s=r.prevDep;r.version===-1?(r===e&&(e=s),rh(r),Tg(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=t,n.depsTail=e}function Hc(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Lp(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Lp(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Mo)||(n.globalVersion=Mo,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Hc(n))))return;n.flags|=2;const t=n.dep,e=Le,r=Jn;Le=n,Jn=!0;try{Cp(n);const s=n.fn(n._value);(t.version===0||sr(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{Le=e,Jn=r,Rp(n),n.flags&=-3}}function rh(n,t=!1){const{dep:e,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),e.subs===n&&(e.subs=r,!r&&e.computed)){e.computed.flags&=-5;for(let a=e.computed.deps;a;a=a.nextDep)rh(a,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Tg(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Jn=!0;const Ip=[];function Fi(){Ip.push(Jn),Jn=!1}function Bi(){const n=Ip.pop();Jn=n===void 0?!0:n}function vf(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=Le;Le=void 0;try{t()}finally{Le=e}}}let Mo=0;class wg{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class sh{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Le||!Jn||Le===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==Le)e=this.activeLink=new wg(Le,this),Le.deps?(e.prevDep=Le.depsTail,Le.depsTail.nextDep=e,Le.depsTail=e):Le.deps=Le.depsTail=e,Dp(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const r=e.nextDep;r.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=r),e.prevDep=Le.depsTail,e.nextDep=void 0,Le.depsTail.nextDep=e,Le.depsTail=e,Le.deps===e&&(Le.deps=r)}return e}trigger(t){this.version++,Mo++,this.notify(t)}notify(t){nh();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{ih()}}}function Dp(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Dp(r)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Vc=new WeakMap,Dr=Symbol(""),Gc=Symbol(""),So=Symbol("");function an(n,t,e){if(Jn&&Le){let r=Vc.get(n);r||Vc.set(n,r=new Map);let s=r.get(e);s||(r.set(e,s=new sh),s.map=r,s.key=e),s.track()}}function Ri(n,t,e,r,s,a){const l=Vc.get(n);if(!l){Mo++;return}const c=h=>{h&&h.trigger()};if(nh(),t==="clear")l.forEach(c);else{const h=ie(n),f=h&&$u(e);if(h&&e==="length"){const d=Number(r);l.forEach((p,_)=>{(_==="length"||_===So||!Hi(_)&&_>=d)&&c(p)})}else switch((e!==void 0||l.has(void 0))&&c(l.get(e)),f&&c(l.get(So)),t){case"add":h?f&&c(l.get("length")):(c(l.get(Dr)),gs(n)&&c(l.get(Gc)));break;case"delete":h||(c(l.get(Dr)),gs(n)&&c(l.get(Gc)));break;case"set":gs(n)&&c(l.get(Dr));break}}ih()}function qr(n){const t=Se(n);return t===n?t:(an(t,"iterate",So),Hn(n)?t:t.map(en))}function al(n){return an(n=Se(n),"iterate",So),n}const Ag={__proto__:null,[Symbol.iterator](){return Kl(this,Symbol.iterator,en)},concat(...n){return qr(this).concat(...n.map(t=>ie(t)?qr(t):t))},entries(){return Kl(this,"entries",n=>(n[1]=en(n[1]),n))},every(n,t){return yi(this,"every",n,t,void 0,arguments)},filter(n,t){return yi(this,"filter",n,t,e=>e.map(en),arguments)},find(n,t){return yi(this,"find",n,t,en,arguments)},findIndex(n,t){return yi(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return yi(this,"findLast",n,t,en,arguments)},findLastIndex(n,t){return yi(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return yi(this,"forEach",n,t,void 0,arguments)},includes(...n){return $l(this,"includes",n)},indexOf(...n){return $l(this,"indexOf",n)},join(n){return qr(this).join(n)},lastIndexOf(...n){return $l(this,"lastIndexOf",n)},map(n,t){return yi(this,"map",n,t,void 0,arguments)},pop(){return js(this,"pop")},push(...n){return js(this,"push",n)},reduce(n,...t){return xf(this,"reduce",n,t)},reduceRight(n,...t){return xf(this,"reduceRight",n,t)},shift(){return js(this,"shift")},some(n,t){return yi(this,"some",n,t,void 0,arguments)},splice(...n){return js(this,"splice",n)},toReversed(){return qr(this).toReversed()},toSorted(n){return qr(this).toSorted(n)},toSpliced(...n){return qr(this).toSpliced(...n)},unshift(...n){return js(this,"unshift",n)},values(){return Kl(this,"values",en)}};function Kl(n,t,e){const r=al(n),s=r[t]();return r!==n&&!Hn(n)&&(s._next=s.next,s.next=()=>{const a=s._next();return a.done||(a.value=e(a.value)),a}),s}const Pg=Array.prototype;function yi(n,t,e,r,s,a){const l=al(n),c=l!==n&&!Hn(n),h=l[t];if(h!==Pg[t]){const p=h.apply(n,a);return c?en(p):p}let f=e;l!==n&&(c?f=function(p,_){return e.call(this,en(p),_,n)}:e.length>2&&(f=function(p,_){return e.call(this,p,_,n)}));const d=h.call(l,f,r);return c&&s?s(d):d}function xf(n,t,e,r){const s=al(n);let a=e;return s!==n&&(Hn(n)?e.length>3&&(a=function(l,c,h){return e.call(this,l,c,h,n)}):a=function(l,c,h){return e.call(this,l,en(c),h,n)}),s[t](a,...r)}function $l(n,t,e){const r=Se(n);an(r,"iterate",So);const s=r[t](...e);return(s===-1||s===!1)&&lh(e[0])?(e[0]=Se(e[0]),r[t](...e)):s}function js(n,t,e=[]){Fi(),nh();const r=Se(n)[t].apply(n,e);return ih(),Bi(),r}const Cg=Yu("__proto__,__v_isRef,__isVue"),Op=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Hi));function Rg(n){Hi(n)||(n=String(n));const t=Se(this);return an(t,"has",n),t.hasOwnProperty(n)}class Up{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,r){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,a=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return a;if(e==="__v_raw")return r===(s?a?kg:zp:a?Bp:Fp).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const l=ie(t);if(!s){let h;if(l&&(h=Ag[e]))return h;if(e==="hasOwnProperty")return Rg}const c=Reflect.get(t,e,cn(t)?t:r);if((Hi(e)?Op.has(e):Cg(e))||(s||an(t,"get",e),a))return c;if(cn(c)){const h=l&&$u(e)?c:c.value;return s&&Ie(h)?Xc(h):h}return Ie(c)?s?Xc(c):ll(c):c}}class Np extends Up{constructor(t=!1){super(!1,t)}set(t,e,r,s){let a=t[e];if(!this._isShallow){const h=lr(a);if(!Hn(r)&&!lr(r)&&(a=Se(a),r=Se(r)),!ie(t)&&cn(a)&&!cn(r))return h||(a.value=r),!0}const l=ie(t)&&$u(e)?Number(e)<t.length:Ee(t,e),c=Reflect.set(t,e,r,cn(t)?t:s);return t===Se(s)&&(l?sr(r,a)&&Ri(t,"set",e,r):Ri(t,"add",e,r)),c}deleteProperty(t,e){const r=Ee(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&r&&Ri(t,"delete",e,void 0),s}has(t,e){const r=Reflect.has(t,e);return(!Hi(e)||!Op.has(e))&&an(t,"has",e),r}ownKeys(t){return an(t,"iterate",ie(t)?"length":Dr),Reflect.ownKeys(t)}}class Lg extends Up{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Ig=new Np,Dg=new Lg,Og=new Np(!0);const Wc=n=>n,na=n=>Reflect.getPrototypeOf(n);function Ug(n,t,e){return function(...r){const s=this.__v_raw,a=Se(s),l=gs(a),c=n==="entries"||n===Symbol.iterator&&l,h=n==="keys"&&l,f=s[n](...r),d=e?Wc:t?Va:en;return!t&&an(a,"iterate",h?Gc:Dr),{next(){const{value:p,done:_}=f.next();return _?{value:p,done:_}:{value:c?[d(p[0]),d(p[1])]:d(p),done:_}},[Symbol.iterator](){return this}}}}function ia(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Ng(n,t){const e={get(s){const a=this.__v_raw,l=Se(a),c=Se(s);n||(sr(s,c)&&an(l,"get",s),an(l,"get",c));const{has:h}=na(l),f=t?Wc:n?Va:en;if(h.call(l,s))return f(a.get(s));if(h.call(l,c))return f(a.get(c));a!==l&&a.get(s)},get size(){const s=this.__v_raw;return!n&&an(Se(s),"iterate",Dr),s.size},has(s){const a=this.__v_raw,l=Se(a),c=Se(s);return n||(sr(s,c)&&an(l,"has",s),an(l,"has",c)),s===c?a.has(s):a.has(s)||a.has(c)},forEach(s,a){const l=this,c=l.__v_raw,h=Se(c),f=t?Wc:n?Va:en;return!n&&an(h,"iterate",Dr),c.forEach((d,p)=>s.call(a,f(d),f(p),l))}};return un(e,n?{add:ia("add"),set:ia("set"),delete:ia("delete"),clear:ia("clear")}:{add(s){!t&&!Hn(s)&&!lr(s)&&(s=Se(s));const a=Se(this);return na(a).has.call(a,s)||(a.add(s),Ri(a,"add",s,s)),this},set(s,a){!t&&!Hn(a)&&!lr(a)&&(a=Se(a));const l=Se(this),{has:c,get:h}=na(l);let f=c.call(l,s);f||(s=Se(s),f=c.call(l,s));const d=h.call(l,s);return l.set(s,a),f?sr(a,d)&&Ri(l,"set",s,a):Ri(l,"add",s,a),this},delete(s){const a=Se(this),{has:l,get:c}=na(a);let h=l.call(a,s);h||(s=Se(s),h=l.call(a,s)),c&&c.call(a,s);const f=a.delete(s);return h&&Ri(a,"delete",s,void 0),f},clear(){const s=Se(this),a=s.size!==0,l=s.clear();return a&&Ri(s,"clear",void 0,void 0),l}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Ug(s,n,t)}),e}function oh(n,t){const e=Ng(n,t);return(r,s,a)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(Ee(e,s)&&s in r?e:r,s,a)}const Fg={get:oh(!1,!1)},Bg={get:oh(!1,!0)},zg={get:oh(!0,!1)};const Fp=new WeakMap,Bp=new WeakMap,zp=new WeakMap,kg=new WeakMap;function Hg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Vg(n){return n.__v_skip||!Object.isExtensible(n)?0:Hg(pg(n))}function ll(n){return lr(n)?n:ah(n,!1,Ig,Fg,Fp)}function kp(n){return ah(n,!1,Og,Bg,Bp)}function Xc(n){return ah(n,!0,Dg,zg,zp)}function ah(n,t,e,r,s){if(!Ie(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const a=Vg(n);if(a===0)return n;const l=s.get(n);if(l)return l;const c=new Proxy(n,a===2?r:e);return s.set(n,c),c}function vs(n){return lr(n)?vs(n.__v_raw):!!(n&&n.__v_isReactive)}function lr(n){return!!(n&&n.__v_isReadonly)}function Hn(n){return!!(n&&n.__v_isShallow)}function lh(n){return n?!!n.__v_raw:!1}function Se(n){const t=n&&n.__v_raw;return t?Se(t):n}function Gg(n){return!Ee(n,"__v_skip")&&Object.isExtensible(n)&&Sp(n,"__v_skip",!0),n}const en=n=>Ie(n)?ll(n):n,Va=n=>Ie(n)?Xc(n):n;function cn(n){return n?n.__v_isRef===!0:!1}function Wg(n){return Hp(n,!1)}function Xg(n){return Hp(n,!0)}function Hp(n,t){return cn(n)?n:new Zg(n,t)}class Zg{constructor(t,e){this.dep=new sh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:Se(t),this._value=e?t:en(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,r=this.__v_isShallow||Hn(t)||lr(t);t=r?t:Se(t),sr(t,e)&&(this._rawValue=t,this._value=r?t:en(t),this.dep.trigger())}}function xs(n){return cn(n)?n.value:n}const qg={get:(n,t,e)=>t==="__v_raw"?n:xs(Reflect.get(n,t,e)),set:(n,t,e,r)=>{const s=n[t];return cn(s)&&!cn(e)?(s.value=e,!0):Reflect.set(n,t,e,r)}};function Vp(n){return vs(n)?n:new Proxy(n,qg)}class Yg{constructor(t,e,r){this.fn=t,this.setter=e,this._value=void 0,this.dep=new sh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Mo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Le!==this)return Pp(this,!0),!0}get value(){const t=this.dep.track();return Lp(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function jg(n,t,e=!1){let r,s;return oe(n)?r=n:(r=n.get,s=n.set),new Yg(r,s,e)}const ra={},Ga=new WeakMap;let Tr;function Kg(n,t=!1,e=Tr){if(e){let r=Ga.get(e);r||Ga.set(e,r=[]),r.push(n)}}function $g(n,t,e=Pe){const{immediate:r,deep:s,once:a,scheduler:l,augmentJob:c,call:h}=e,f=A=>s?A:Hn(A)||s===!1||s===0?Li(A,1):Li(A);let d,p,_,g,M=!1,E=!1;if(cn(n)?(p=()=>n.value,M=Hn(n)):vs(n)?(p=()=>f(n),M=!0):ie(n)?(E=!0,M=n.some(A=>vs(A)||Hn(A)),p=()=>n.map(A=>{if(cn(A))return A.value;if(vs(A))return f(A);if(oe(A))return h?h(A,2):A()})):oe(n)?t?p=h?()=>h(n,2):n:p=()=>{if(_){Fi();try{_()}finally{Bi()}}const A=Tr;Tr=d;try{return h?h(n,3,[g]):n(g)}finally{Tr=A}}:p=ui,t&&s){const A=p,V=s===!0?1/0:s;p=()=>Li(A(),V)}const y=bg(),v=()=>{d.stop(),y&&y.active&&Ku(y.effects,d)};if(a&&t){const A=t;t=(...V)=>{A(...V),v()}}let D=E?new Array(n.length).fill(ra):ra;const I=A=>{if(!(!(d.flags&1)||!d.dirty&&!A))if(t){const V=d.run();if(s||M||(E?V.some((N,B)=>sr(N,D[B])):sr(V,D))){_&&_();const N=Tr;Tr=d;try{const B=[V,D===ra?void 0:E&&D[0]===ra?[]:D,g];D=V,h?h(t,3,B):t(...B)}finally{Tr=N}}}else d.run()};return c&&c(I),d=new wp(p),d.scheduler=l?()=>l(I,!1):I,g=A=>Kg(A,!1,d),_=d.onStop=()=>{const A=Ga.get(d);if(A){if(h)h(A,4);else for(const V of A)V();Ga.delete(d)}},t?r?I(!0):D=d.run():l?l(I.bind(null,!0),!0):d.run(),v.pause=d.pause.bind(d),v.resume=d.resume.bind(d),v.stop=v,v}function Li(n,t=1/0,e){if(t<=0||!Ie(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,cn(n))Li(n.value,t,e);else if(ie(n))for(let r=0;r<n.length;r++)Li(n[r],t,e);else if(vp(n)||gs(n))n.forEach(r=>{Li(r,t,e)});else if(Mp(n)){for(const r in n)Li(n[r],t,e);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&Li(n[r],t,e)}return n}function Uo(n,t,e,r){try{return r?n(...r):n()}catch(s){cl(s,t,e)}}function fi(n,t,e,r){if(oe(n)){const s=Uo(n,t,e,r);return s&&xp(s)&&s.catch(a=>{cl(a,t,e)}),s}if(ie(n)){const s=[];for(let a=0;a<n.length;a++)s.push(fi(n[a],t,e,r));return s}}function cl(n,t,e,r=!0){const s=t?t.vnode:null,{errorHandler:a,throwUnhandledErrorInProduction:l}=t&&t.appContext.config||Pe;if(t){let c=t.parent;const h=t.proxy,f=`https://vuejs.org/error-reference/#runtime-${e}`;for(;c;){const d=c.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](n,h,f)===!1)return}c=c.parent}if(a){Fi(),Uo(a,null,10,[n,h,f]),Bi();return}}Jg(n,e,s,r,l)}function Jg(n,t,e,r=!0,s=!1){if(s)throw n;console.error(n)}const gn=[];let ai=-1;const ys=[];let tr=null,cs=0;const Gp=Promise.resolve();let Wa=null;function Wp(n){const t=Wa||Gp;return n?t.then(this?n.bind(this):n):t}function Qg(n){let t=ai+1,e=gn.length;for(;t<e;){const r=t+e>>>1,s=gn[r],a=Eo(s);a<n||a===n&&s.flags&2?t=r+1:e=r}return t}function ch(n){if(!(n.flags&1)){const t=Eo(n),e=gn[gn.length-1];!e||!(n.flags&2)&&t>=Eo(e)?gn.push(n):gn.splice(Qg(t),0,n),n.flags|=1,Xp()}}function Xp(){Wa||(Wa=Gp.then(qp))}function tv(n){ie(n)?ys.push(...n):tr&&n.id===-1?tr.splice(cs+1,0,n):n.flags&1||(ys.push(n),n.flags|=1),Xp()}function yf(n,t,e=ai+1){for(;e<gn.length;e++){const r=gn[e];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;gn.splice(e,1),e--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Zp(n){if(ys.length){const t=[...new Set(ys)].sort((e,r)=>Eo(e)-Eo(r));if(ys.length=0,tr){tr.push(...t);return}for(tr=t,cs=0;cs<tr.length;cs++){const e=tr[cs];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}tr=null,cs=0}}const Eo=n=>n.id==null?n.flags&2?-1:1/0:n.id;function qp(n){try{for(ai=0;ai<gn.length;ai++){const t=gn[ai];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Uo(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ai<gn.length;ai++){const t=gn[ai];t&&(t.flags&=-2)}ai=-1,gn.length=0,Zp(),Wa=null,(gn.length||ys.length)&&qp()}}let nn=null,Yp=null;function Xa(n){const t=nn;return nn=n,Yp=n&&n.type.__scopeId||null,t}function ev(n,t=nn,e){if(!t||n._n)return n;const r=(...s)=>{r._d&&Ya(-1);const a=Xa(t);let l;try{l=n(...s)}finally{Xa(a),r._d&&Ya(1)}return l};return r._n=!0,r._c=!0,r._d=!0,r}function nv(n,t){if(nn===null)return n;const e=dl(nn),r=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[a,l,c,h=Pe]=t[s];a&&(oe(a)&&(a={mounted:a,updated:a}),a.deep&&Li(l),r.push({dir:a,instance:e,value:l,oldValue:void 0,arg:c,modifiers:h}))}return n}function gr(n,t,e,r){const s=n.dirs,a=t&&t.dirs;for(let l=0;l<s.length;l++){const c=s[l];a&&(c.oldValue=a[l].value);let h=c.dir[r];h&&(Fi(),fi(h,e,8,[n.el,c,n,t]),Bi())}}const iv=Symbol("_vte"),rv=n=>n.__isTeleport,sv=Symbol("_leaveCb");function uh(n,t){n.shapeFlag&6&&n.component?(n.transition=t,uh(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function jp(n,t){return oe(n)?un({name:n.name},t,{setup:n}):n}function Kp(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const Za=new WeakMap;function fo(n,t,e,r,s=!1){if(ie(n)){n.forEach((M,E)=>fo(M,t&&(ie(t)?t[E]:t),e,r,s));return}if(Ms(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&fo(n,t,e,r.component.subTree);return}const a=r.shapeFlag&4?dl(r.component):r.el,l=s?null:a,{i:c,r:h}=n,f=t&&t.r,d=c.refs===Pe?c.refs={}:c.refs,p=c.setupState,_=Se(p),g=p===Pe?gp:M=>Ee(_,M);if(f!=null&&f!==h){if(Mf(t),Ge(f))d[f]=null,g(f)&&(p[f]=null);else if(cn(f)){f.value=null;const M=t;M.k&&(d[M.k]=null)}}if(oe(h))Uo(h,c,12,[l,d]);else{const M=Ge(h),E=cn(h);if(M||E){const y=()=>{if(n.f){const v=M?g(h)?p[h]:d[h]:h.value;if(s)ie(v)&&Ku(v,a);else if(ie(v))v.includes(a)||v.push(a);else if(M)d[h]=[a],g(h)&&(p[h]=d[h]);else{const D=[a];h.value=D,n.k&&(d[n.k]=D)}}else M?(d[h]=l,g(h)&&(p[h]=l)):E&&(h.value=l,n.k&&(d[n.k]=l))};if(l){const v=()=>{y(),Za.delete(n)};v.id=-1,Za.set(n,v),An(v,e)}else Mf(n),y()}}}function Mf(n){const t=Za.get(n);t&&(t.flags|=8,Za.delete(n))}ol().requestIdleCallback;ol().cancelIdleCallback;const Ms=n=>!!n.type.__asyncLoader,$p=n=>n.type.__isKeepAlive;function ov(n,t){Jp(n,"a",t)}function av(n,t){Jp(n,"da",t)}function Jp(n,t,e=ln){const r=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(ul(t,r,e),e){let s=e.parent;for(;s&&s.parent;)$p(s.parent.vnode)&&lv(r,t,e,s),s=s.parent}}function lv(n,t,e,r){const s=ul(t,n,r,!0);Qp(()=>{Ku(r[t],s)},e)}function ul(n,t,e=ln,r=!1){if(e){const s=e[n]||(e[n]=[]),a=t.__weh||(t.__weh=(...l)=>{Fi();const c=No(e),h=fi(t,e,n,l);return c(),Bi(),h});return r?s.unshift(a):s.push(a),a}}const Vi=n=>(t,e=ln)=>{(!Ao||n==="sp")&&ul(n,(...r)=>t(...r),e)},cv=Vi("bm"),uv=Vi("m"),hv=Vi("bu"),fv=Vi("u"),dv=Vi("bum"),Qp=Vi("um"),pv=Vi("sp"),mv=Vi("rtg"),_v=Vi("rtc");function gv(n,t=ln){ul("ec",n,t)}const vv="components";function ir(n,t){return yv(vv,n,!0,t)||n}const xv=Symbol.for("v-ndc");function yv(n,t,e=!0,r=!1){const s=nn||ln;if(s){const a=s.type;{const c=ux(a,!1);if(c&&(c===t||c===Vn(t)||c===sl(Vn(t))))return a}const l=Sf(s[n]||a[n],t)||Sf(s.appContext[n],t);return!l&&r?a:l}}function Sf(n,t){return n&&(n[t]||n[Vn(t)]||n[sl(Vn(t))])}function Mv(n,t,e,r){let s;const a=e,l=ie(n);if(l||Ge(n)){const c=l&&vs(n);let h=!1,f=!1;c&&(h=!Hn(n),f=lr(n),n=al(n)),s=new Array(n.length);for(let d=0,p=n.length;d<p;d++)s[d]=t(h?f?Va(en(n[d])):en(n[d]):n[d],d,void 0,a)}else if(typeof n=="number"){s=new Array(n);for(let c=0;c<n;c++)s[c]=t(c+1,c,void 0,a)}else if(Ie(n))if(n[Symbol.iterator])s=Array.from(n,(c,h)=>t(c,h,void 0,a));else{const c=Object.keys(n);s=new Array(c.length);for(let h=0,f=c.length;h<f;h++){const d=c[h];s[h]=t(n[d],d,h,a)}}else s=[];return s}function Sv(n,t,e={},r,s){if(nn.ce||nn.parent&&Ms(nn.parent)&&nn.parent.ce){const f=Object.keys(e).length>0;return Xe(),ja(Cn,null,[Fe("slot",e,r&&r())],f?-2:64)}let a=n[t];a&&a._c&&(a._d=!1),Xe();const l=a&&tm(a(e)),c=e.key||l&&l.key,h=ja(Cn,{key:(c&&!Hi(c)?c:`_${t}`)+(!l&&r?"_fb":"")},l||(r?r():[]),l&&n._===1?64:-2);return a&&a._c&&(a._d=!0),h}function tm(n){return n.some(t=>To(t)?!(t.type===zi||t.type===Cn&&!tm(t.children)):!0)?n:null}const Zc=n=>n?ym(n)?dl(n):Zc(n.parent):null,po=un(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Zc(n.parent),$root:n=>Zc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>nm(n),$forceUpdate:n=>n.f||(n.f=()=>{ch(n.update)}),$nextTick:n=>n.n||(n.n=Wp.bind(n.proxy)),$watch:n=>Gv.bind(n)}),Jl=(n,t)=>n!==Pe&&!n.__isScriptSetup&&Ee(n,t),Ev={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:r,data:s,props:a,accessCache:l,type:c,appContext:h}=n;let f;if(t[0]!=="$"){const g=l[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return s[t];case 4:return e[t];case 3:return a[t]}else{if(Jl(r,t))return l[t]=1,r[t];if(s!==Pe&&Ee(s,t))return l[t]=2,s[t];if((f=n.propsOptions[0])&&Ee(f,t))return l[t]=3,a[t];if(e!==Pe&&Ee(e,t))return l[t]=4,e[t];qc&&(l[t]=0)}}const d=po[t];let p,_;if(d)return t==="$attrs"&&an(n.attrs,"get",""),d(n);if((p=c.__cssModules)&&(p=p[t]))return p;if(e!==Pe&&Ee(e,t))return l[t]=4,e[t];if(_=h.config.globalProperties,Ee(_,t))return _[t]},set({_:n},t,e){const{data:r,setupState:s,ctx:a}=n;return Jl(s,t)?(s[t]=e,!0):r!==Pe&&Ee(r,t)?(r[t]=e,!0):Ee(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(a[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:r,appContext:s,propsOptions:a,type:l}},c){let h,f;return!!(e[c]||n!==Pe&&c[0]!=="$"&&Ee(n,c)||Jl(t,c)||(h=a[0])&&Ee(h,c)||Ee(r,c)||Ee(po,c)||Ee(s.config.globalProperties,c)||(f=l.__cssModules)&&f[c])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Ee(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Ef(n){return ie(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let qc=!0;function bv(n){const t=nm(n),e=n.proxy,r=n.ctx;qc=!1,t.beforeCreate&&bf(t.beforeCreate,n,"bc");const{data:s,computed:a,methods:l,watch:c,provide:h,inject:f,created:d,beforeMount:p,mounted:_,beforeUpdate:g,updated:M,activated:E,deactivated:y,beforeDestroy:v,beforeUnmount:D,destroyed:I,unmounted:A,render:V,renderTracked:N,renderTriggered:B,errorCaptured:H,serverPrefetch:R,expose:P,inheritAttrs:F,components:$,directives:Y,filters:rt}=t;if(f&&Tv(f,r,null),l)for(const pt in l){const G=l[pt];oe(G)&&(r[pt]=G.bind(e))}if(s){const pt=s.call(e,e);Ie(pt)&&(n.data=ll(pt))}if(qc=!0,a)for(const pt in a){const G=a[pt],Ct=oe(G)?G.bind(e,e):oe(G.get)?G.get.bind(e,e):ui,mt=!oe(G)&&oe(G.set)?G.set.bind(e):ui,At=jn({get:Ct,set:mt});Object.defineProperty(r,pt,{enumerable:!0,configurable:!0,get:()=>At.value,set:kt=>At.value=kt})}if(c)for(const pt in c)em(c[pt],r,e,pt);if(h){const pt=oe(h)?h.call(e):h;Reflect.ownKeys(pt).forEach(G=>{La(G,pt[G])})}d&&bf(d,n,"c");function J(pt,G){ie(G)?G.forEach(Ct=>pt(Ct.bind(e))):G&&pt(G.bind(e))}if(J(cv,p),J(uv,_),J(hv,g),J(fv,M),J(ov,E),J(av,y),J(gv,H),J(_v,N),J(mv,B),J(dv,D),J(Qp,A),J(pv,R),ie(P))if(P.length){const pt=n.exposed||(n.exposed={});P.forEach(G=>{Object.defineProperty(pt,G,{get:()=>e[G],set:Ct=>e[G]=Ct,enumerable:!0})})}else n.exposed||(n.exposed={});V&&n.render===ui&&(n.render=V),F!=null&&(n.inheritAttrs=F),$&&(n.components=$),Y&&(n.directives=Y),R&&Kp(n)}function Tv(n,t,e=ui){ie(n)&&(n=Yc(n));for(const r in n){const s=n[r];let a;Ie(s)?"default"in s?a=Ui(s.from||r,s.default,!0):a=Ui(s.from||r):a=Ui(s),cn(a)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:l=>a.value=l}):t[r]=a}}function bf(n,t,e){fi(ie(n)?n.map(r=>r.bind(t.proxy)):n.bind(t.proxy),t,e)}function em(n,t,e,r){let s=r.includes(".")?mm(e,r):()=>e[r];if(Ge(n)){const a=t[n];oe(a)&&Ia(s,a)}else if(oe(n))Ia(s,n.bind(e));else if(Ie(n))if(ie(n))n.forEach(a=>em(a,t,e,r));else{const a=oe(n.handler)?n.handler.bind(e):t[n.handler];oe(a)&&Ia(s,a,n)}}function nm(n){const t=n.type,{mixins:e,extends:r}=t,{mixins:s,optionsCache:a,config:{optionMergeStrategies:l}}=n.appContext,c=a.get(t);let h;return c?h=c:!s.length&&!e&&!r?h=t:(h={},s.length&&s.forEach(f=>qa(h,f,l,!0)),qa(h,t,l)),Ie(t)&&a.set(t,h),h}function qa(n,t,e,r=!1){const{mixins:s,extends:a}=t;a&&qa(n,a,e,!0),s&&s.forEach(l=>qa(n,l,e,!0));for(const l in t)if(!(r&&l==="expose")){const c=wv[l]||e&&e[l];n[l]=c?c(n[l],t[l]):t[l]}return n}const wv={data:Tf,props:wf,emits:wf,methods:ro,computed:ro,beforeCreate:dn,created:dn,beforeMount:dn,mounted:dn,beforeUpdate:dn,updated:dn,beforeDestroy:dn,beforeUnmount:dn,destroyed:dn,unmounted:dn,activated:dn,deactivated:dn,errorCaptured:dn,serverPrefetch:dn,components:ro,directives:ro,watch:Pv,provide:Tf,inject:Av};function Tf(n,t){return t?n?function(){return un(oe(n)?n.call(this,this):n,oe(t)?t.call(this,this):t)}:t:n}function Av(n,t){return ro(Yc(n),Yc(t))}function Yc(n){if(ie(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function dn(n,t){return n?[...new Set([].concat(n,t))]:t}function ro(n,t){return n?un(Object.create(null),n,t):t}function wf(n,t){return n?ie(n)&&ie(t)?[...new Set([...n,...t])]:un(Object.create(null),Ef(n),Ef(t??{})):t}function Pv(n,t){if(!n)return t;if(!t)return n;const e=un(Object.create(null),n);for(const r in t)e[r]=dn(n[r],t[r]);return e}function im(){return{app:null,config:{isNativeTag:gp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cv=0;function Rv(n,t){return function(r,s=null){oe(r)||(r=un({},r)),s!=null&&!Ie(s)&&(s=null);const a=im(),l=new WeakSet,c=[];let h=!1;const f=a.app={_uid:Cv++,_component:r,_props:s,_container:null,_context:a,_instance:null,version:fx,get config(){return a.config},set config(d){},use(d,...p){return l.has(d)||(d&&oe(d.install)?(l.add(d),d.install(f,...p)):oe(d)&&(l.add(d),d(f,...p))),f},mixin(d){return a.mixins.includes(d)||a.mixins.push(d),f},component(d,p){return p?(a.components[d]=p,f):a.components[d]},directive(d,p){return p?(a.directives[d]=p,f):a.directives[d]},mount(d,p,_){if(!h){const g=f._ceVNode||Fe(r,s);return g.appContext=a,_===!0?_="svg":_===!1&&(_=void 0),n(g,d,_),h=!0,f._container=d,d.__vue_app__=f,dl(g.component)}},onUnmount(d){c.push(d)},unmount(){h&&(fi(c,f._instance,16),n(null,f._container),delete f._container.__vue_app__)},provide(d,p){return a.provides[d]=p,f},runWithContext(d){const p=Ss;Ss=f;try{return d()}finally{Ss=p}}};return f}}let Ss=null;function La(n,t){if(ln){let e=ln.provides;const r=ln.parent&&ln.parent.provides;r===e&&(e=ln.provides=Object.create(r)),e[n]=t}}function Ui(n,t,e=!1){const r=sx();if(r||Ss){let s=Ss?Ss._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&oe(t)?t.call(r&&r.proxy):t}}const rm={},sm=()=>Object.create(rm),om=n=>Object.getPrototypeOf(n)===rm;function Lv(n,t,e,r=!1){const s={},a=sm();n.propsDefaults=Object.create(null),am(n,t,s,a);for(const l in n.propsOptions[0])l in s||(s[l]=void 0);e?n.props=r?s:kp(s):n.type.props?n.props=s:n.props=a,n.attrs=a}function Iv(n,t,e,r){const{props:s,attrs:a,vnode:{patchFlag:l}}=n,c=Se(s),[h]=n.propsOptions;let f=!1;if((r||l>0)&&!(l&16)){if(l&8){const d=n.vnode.dynamicProps;for(let p=0;p<d.length;p++){let _=d[p];if(hl(n.emitsOptions,_))continue;const g=t[_];if(h)if(Ee(a,_))g!==a[_]&&(a[_]=g,f=!0);else{const M=Vn(_);s[M]=jc(h,c,M,g,n,!1)}else g!==a[_]&&(a[_]=g,f=!0)}}}else{am(n,t,s,a)&&(f=!0);let d;for(const p in c)(!t||!Ee(t,p)&&((d=Br(p))===p||!Ee(t,d)))&&(h?e&&(e[p]!==void 0||e[d]!==void 0)&&(s[p]=jc(h,c,p,void 0,n,!0)):delete s[p]);if(a!==c)for(const p in a)(!t||!Ee(t,p))&&(delete a[p],f=!0)}f&&Ri(n.attrs,"set","")}function am(n,t,e,r){const[s,a]=n.propsOptions;let l=!1,c;if(t)for(let h in t){if(co(h))continue;const f=t[h];let d;s&&Ee(s,d=Vn(h))?!a||!a.includes(d)?e[d]=f:(c||(c={}))[d]=f:hl(n.emitsOptions,h)||(!(h in r)||f!==r[h])&&(r[h]=f,l=!0)}if(a){const h=Se(e),f=c||Pe;for(let d=0;d<a.length;d++){const p=a[d];e[p]=jc(s,h,p,f[p],n,!Ee(f,p))}}return l}function jc(n,t,e,r,s,a){const l=n[e];if(l!=null){const c=Ee(l,"default");if(c&&r===void 0){const h=l.default;if(l.type!==Function&&!l.skipFactory&&oe(h)){const{propsDefaults:f}=s;if(e in f)r=f[e];else{const d=No(s);r=f[e]=h.call(null,t),d()}}else r=h;s.ce&&s.ce._setProp(e,r)}l[0]&&(a&&!c?r=!1:l[1]&&(r===""||r===Br(e))&&(r=!0))}return r}const Dv=new WeakMap;function lm(n,t,e=!1){const r=e?Dv:t.propsCache,s=r.get(n);if(s)return s;const a=n.props,l={},c=[];let h=!1;if(!oe(n)){const d=p=>{h=!0;const[_,g]=lm(p,t,!0);un(l,_),g&&c.push(...g)};!e&&t.mixins.length&&t.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!a&&!h)return Ie(n)&&r.set(n,_s),_s;if(ie(a))for(let d=0;d<a.length;d++){const p=Vn(a[d]);Af(p)&&(l[p]=Pe)}else if(a)for(const d in a){const p=Vn(d);if(Af(p)){const _=a[d],g=l[p]=ie(_)||oe(_)?{type:_}:un({},_),M=g.type;let E=!1,y=!0;if(ie(M))for(let v=0;v<M.length;++v){const D=M[v],I=oe(D)&&D.name;if(I==="Boolean"){E=!0;break}else I==="String"&&(y=!1)}else E=oe(M)&&M.name==="Boolean";g[0]=E,g[1]=y,(E||Ee(g,"default"))&&c.push(p)}}const f=[l,c];return Ie(n)&&r.set(n,f),f}function Af(n){return n[0]!=="$"&&!co(n)}const hh=n=>n==="_"||n==="_ctx"||n==="$stable",fh=n=>ie(n)?n.map(li):[li(n)],Ov=(n,t,e)=>{if(t._n)return t;const r=ev((...s)=>fh(t(...s)),e);return r._c=!1,r},cm=(n,t,e)=>{const r=n._ctx;for(const s in n){if(hh(s))continue;const a=n[s];if(oe(a))t[s]=Ov(s,a,r);else if(a!=null){const l=fh(a);t[s]=()=>l}}},um=(n,t)=>{const e=fh(t);n.slots.default=()=>e},hm=(n,t,e)=>{for(const r in t)(e||!hh(r))&&(n[r]=t[r])},Uv=(n,t,e)=>{const r=n.slots=sm();if(n.vnode.shapeFlag&32){const s=t._;s?(hm(r,t,e),e&&Sp(r,"_",s,!0)):cm(t,r)}else t&&um(n,t)},Nv=(n,t,e)=>{const{vnode:r,slots:s}=n;let a=!0,l=Pe;if(r.shapeFlag&32){const c=t._;c?e&&c===1?a=!1:hm(s,t,e):(a=!t.$stable,cm(t,s)),l=t}else t&&(um(n,t),l={default:1});if(a)for(const c in s)!hh(c)&&l[c]==null&&delete s[c]},An=$v;function Fv(n){return Bv(n)}function Bv(n,t){const e=ol();e.__VUE__=!0;const{insert:r,remove:s,patchProp:a,createElement:l,createText:c,createComment:h,setText:f,setElementText:d,parentNode:p,nextSibling:_,setScopeId:g=ui,insertStaticContent:M}=n,E=(O,U,b,ft=null,ot=null,Q=null,ut=void 0,Mt=null,ct=!!U.dynamicChildren)=>{if(O===U)return;O&&!Ks(O,U)&&(ft=W(O),kt(O,ot,Q,!0),O=null),U.patchFlag===-2&&(ct=!1,U.dynamicChildren=null);const{type:w,ref:S,shapeFlag:k}=U;switch(w){case fl:y(O,U,b,ft);break;case zi:v(O,U,b,ft);break;case tc:O==null&&D(U,b,ft,ut);break;case Cn:$(O,U,b,ft,ot,Q,ut,Mt,ct);break;default:k&1?V(O,U,b,ft,ot,Q,ut,Mt,ct):k&6?Y(O,U,b,ft,ot,Q,ut,Mt,ct):(k&64||k&128)&&w.process(O,U,b,ft,ot,Q,ut,Mt,ct,St)}S!=null&&ot?fo(S,O&&O.ref,Q,U||O,!U):S==null&&O&&O.ref!=null&&fo(O.ref,null,Q,O,!0)},y=(O,U,b,ft)=>{if(O==null)r(U.el=c(U.children),b,ft);else{const ot=U.el=O.el;U.children!==O.children&&f(ot,U.children)}},v=(O,U,b,ft)=>{O==null?r(U.el=h(U.children||""),b,ft):U.el=O.el},D=(O,U,b,ft)=>{[O.el,O.anchor]=M(O.children,U,b,ft,O.el,O.anchor)},I=({el:O,anchor:U},b,ft)=>{let ot;for(;O&&O!==U;)ot=_(O),r(O,b,ft),O=ot;r(U,b,ft)},A=({el:O,anchor:U})=>{let b;for(;O&&O!==U;)b=_(O),s(O),O=b;s(U)},V=(O,U,b,ft,ot,Q,ut,Mt,ct)=>{if(U.type==="svg"?ut="svg":U.type==="math"&&(ut="mathml"),O==null)N(U,b,ft,ot,Q,ut,Mt,ct);else{const w=O.el&&O.el._isVueCE?O.el:null;try{w&&w._beginPatch(),R(O,U,ot,Q,ut,Mt,ct)}finally{w&&w._endPatch()}}},N=(O,U,b,ft,ot,Q,ut,Mt)=>{let ct,w;const{props:S,shapeFlag:k,transition:K,dirs:nt}=O;if(ct=O.el=l(O.type,Q,S&&S.is,S),k&8?d(ct,O.children):k&16&&H(O.children,ct,null,ft,ot,Ql(O,Q),ut,Mt),nt&&gr(O,null,ft,"created"),B(ct,O,O.scopeId,ut,ft),S){for(const Pt in S)Pt!=="value"&&!co(Pt)&&a(ct,Pt,null,S[Pt],Q,ft);"value"in S&&a(ct,"value",null,S.value,Q),(w=S.onVnodeBeforeMount)&&oi(w,ft,O)}nt&&gr(O,null,ft,"beforeMount");const tt=zv(ot,K);tt&&K.beforeEnter(ct),r(ct,U,b),((w=S&&S.onVnodeMounted)||tt||nt)&&An(()=>{w&&oi(w,ft,O),tt&&K.enter(ct),nt&&gr(O,null,ft,"mounted")},ot)},B=(O,U,b,ft,ot)=>{if(b&&g(O,b),ft)for(let Q=0;Q<ft.length;Q++)g(O,ft[Q]);if(ot){let Q=ot.subTree;if(U===Q||gm(Q.type)&&(Q.ssContent===U||Q.ssFallback===U)){const ut=ot.vnode;B(O,ut,ut.scopeId,ut.slotScopeIds,ot.parent)}}},H=(O,U,b,ft,ot,Q,ut,Mt,ct=0)=>{for(let w=ct;w<O.length;w++){const S=O[w]=Mt?er(O[w]):li(O[w]);E(null,S,U,b,ft,ot,Q,ut,Mt)}},R=(O,U,b,ft,ot,Q,ut)=>{const Mt=U.el=O.el;let{patchFlag:ct,dynamicChildren:w,dirs:S}=U;ct|=O.patchFlag&16;const k=O.props||Pe,K=U.props||Pe;let nt;if(b&&vr(b,!1),(nt=K.onVnodeBeforeUpdate)&&oi(nt,b,U,O),S&&gr(U,O,b,"beforeUpdate"),b&&vr(b,!0),(k.innerHTML&&K.innerHTML==null||k.textContent&&K.textContent==null)&&d(Mt,""),w?P(O.dynamicChildren,w,Mt,b,ft,Ql(U,ot),Q):ut||G(O,U,Mt,null,b,ft,Ql(U,ot),Q,!1),ct>0){if(ct&16)F(Mt,k,K,b,ot);else if(ct&2&&k.class!==K.class&&a(Mt,"class",null,K.class,ot),ct&4&&a(Mt,"style",k.style,K.style,ot),ct&8){const tt=U.dynamicProps;for(let Pt=0;Pt<tt.length;Pt++){const Et=tt[Pt],Rt=k[Et],Kt=K[Et];(Kt!==Rt||Et==="value")&&a(Mt,Et,Rt,Kt,ot,b)}}ct&1&&O.children!==U.children&&d(Mt,U.children)}else!ut&&w==null&&F(Mt,k,K,b,ot);((nt=K.onVnodeUpdated)||S)&&An(()=>{nt&&oi(nt,b,U,O),S&&gr(U,O,b,"updated")},ft)},P=(O,U,b,ft,ot,Q,ut)=>{for(let Mt=0;Mt<U.length;Mt++){const ct=O[Mt],w=U[Mt],S=ct.el&&(ct.type===Cn||!Ks(ct,w)||ct.shapeFlag&198)?p(ct.el):b;E(ct,w,S,null,ft,ot,Q,ut,!0)}},F=(O,U,b,ft,ot)=>{if(U!==b){if(U!==Pe)for(const Q in U)!co(Q)&&!(Q in b)&&a(O,Q,U[Q],null,ot,ft);for(const Q in b){if(co(Q))continue;const ut=b[Q],Mt=U[Q];ut!==Mt&&Q!=="value"&&a(O,Q,Mt,ut,ot,ft)}"value"in b&&a(O,"value",U.value,b.value,ot)}},$=(O,U,b,ft,ot,Q,ut,Mt,ct)=>{const w=U.el=O?O.el:c(""),S=U.anchor=O?O.anchor:c("");let{patchFlag:k,dynamicChildren:K,slotScopeIds:nt}=U;nt&&(Mt=Mt?Mt.concat(nt):nt),O==null?(r(w,b,ft),r(S,b,ft),H(U.children||[],b,S,ot,Q,ut,Mt,ct)):k>0&&k&64&&K&&O.dynamicChildren?(P(O.dynamicChildren,K,b,ot,Q,ut,Mt),(U.key!=null||ot&&U===ot.subTree)&&fm(O,U,!0)):G(O,U,b,S,ot,Q,ut,Mt,ct)},Y=(O,U,b,ft,ot,Q,ut,Mt,ct)=>{U.slotScopeIds=Mt,O==null?U.shapeFlag&512?ot.ctx.activate(U,b,ft,ut,ct):rt(U,b,ft,ot,Q,ut,ct):gt(O,U,ct)},rt=(O,U,b,ft,ot,Q,ut)=>{const Mt=O.component=rx(O,ft,ot);if($p(O)&&(Mt.ctx.renderer=St),ox(Mt,!1,ut),Mt.asyncDep){if(ot&&ot.registerDep(Mt,J,ut),!O.el){const ct=Mt.subTree=Fe(zi);v(null,ct,U,b),O.placeholder=ct.el}}else J(Mt,O,U,b,ot,Q,ut)},gt=(O,U,b)=>{const ft=U.component=O.component;if(jv(O,U,b))if(ft.asyncDep&&!ft.asyncResolved){pt(ft,U,b);return}else ft.next=U,ft.update();else U.el=O.el,ft.vnode=U},J=(O,U,b,ft,ot,Q,ut)=>{const Mt=()=>{if(O.isMounted){let{next:k,bu:K,u:nt,parent:tt,vnode:Pt}=O;{const It=dm(O);if(It){k&&(k.el=Pt.el,pt(O,k,ut)),It.asyncDep.then(()=>{O.isUnmounted||Mt()});return}}let Et=k,Rt;vr(O,!1),k?(k.el=Pt.el,pt(O,k,ut)):k=Pt,K&&Ra(K),(Rt=k.props&&k.props.onVnodeBeforeUpdate)&&oi(Rt,tt,k,Pt),vr(O,!0);const Kt=Cf(O),Tt=O.subTree;O.subTree=Kt,E(Tt,Kt,p(Tt.el),W(Tt),O,ot,Q),k.el=Kt.el,Et===null&&Kv(O,Kt.el),nt&&An(nt,ot),(Rt=k.props&&k.props.onVnodeUpdated)&&An(()=>oi(Rt,tt,k,Pt),ot)}else{let k;const{el:K,props:nt}=U,{bm:tt,m:Pt,parent:Et,root:Rt,type:Kt}=O,Tt=Ms(U);vr(O,!1),tt&&Ra(tt),!Tt&&(k=nt&&nt.onVnodeBeforeMount)&&oi(k,Et,U),vr(O,!0);{Rt.ce&&Rt.ce._def.shadowRoot!==!1&&Rt.ce._injectChildStyle(Kt);const It=O.subTree=Cf(O);E(null,It,b,ft,O,ot,Q),U.el=It.el}if(Pt&&An(Pt,ot),!Tt&&(k=nt&&nt.onVnodeMounted)){const It=U;An(()=>oi(k,Et,It),ot)}(U.shapeFlag&256||Et&&Ms(Et.vnode)&&Et.vnode.shapeFlag&256)&&O.a&&An(O.a,ot),O.isMounted=!0,U=b=ft=null}};O.scope.on();const ct=O.effect=new wp(Mt);O.scope.off();const w=O.update=ct.run.bind(ct),S=O.job=ct.runIfDirty.bind(ct);S.i=O,S.id=O.uid,ct.scheduler=()=>ch(S),vr(O,!0),w()},pt=(O,U,b)=>{U.component=O;const ft=O.vnode.props;O.vnode=U,O.next=null,Iv(O,U.props,ft,b),Nv(O,U.children,b),Fi(),yf(O),Bi()},G=(O,U,b,ft,ot,Q,ut,Mt,ct=!1)=>{const w=O&&O.children,S=O?O.shapeFlag:0,k=U.children,{patchFlag:K,shapeFlag:nt}=U;if(K>0){if(K&128){mt(w,k,b,ft,ot,Q,ut,Mt,ct);return}else if(K&256){Ct(w,k,b,ft,ot,Q,ut,Mt,ct);return}}nt&8?(S&16&&xt(w,ot,Q),k!==w&&d(b,k)):S&16?nt&16?mt(w,k,b,ft,ot,Q,ut,Mt,ct):xt(w,ot,Q,!0):(S&8&&d(b,""),nt&16&&H(k,b,ft,ot,Q,ut,Mt,ct))},Ct=(O,U,b,ft,ot,Q,ut,Mt,ct)=>{O=O||_s,U=U||_s;const w=O.length,S=U.length,k=Math.min(w,S);let K;for(K=0;K<k;K++){const nt=U[K]=ct?er(U[K]):li(U[K]);E(O[K],nt,b,null,ot,Q,ut,Mt,ct)}w>S?xt(O,ot,Q,!0,!1,k):H(U,b,ft,ot,Q,ut,Mt,ct,k)},mt=(O,U,b,ft,ot,Q,ut,Mt,ct)=>{let w=0;const S=U.length;let k=O.length-1,K=S-1;for(;w<=k&&w<=K;){const nt=O[w],tt=U[w]=ct?er(U[w]):li(U[w]);if(Ks(nt,tt))E(nt,tt,b,null,ot,Q,ut,Mt,ct);else break;w++}for(;w<=k&&w<=K;){const nt=O[k],tt=U[K]=ct?er(U[K]):li(U[K]);if(Ks(nt,tt))E(nt,tt,b,null,ot,Q,ut,Mt,ct);else break;k--,K--}if(w>k){if(w<=K){const nt=K+1,tt=nt<S?U[nt].el:ft;for(;w<=K;)E(null,U[w]=ct?er(U[w]):li(U[w]),b,tt,ot,Q,ut,Mt,ct),w++}}else if(w>K)for(;w<=k;)kt(O[w],ot,Q,!0),w++;else{const nt=w,tt=w,Pt=new Map;for(w=tt;w<=K;w++){const Lt=U[w]=ct?er(U[w]):li(U[w]);Lt.key!=null&&Pt.set(Lt.key,w)}let Et,Rt=0;const Kt=K-tt+1;let Tt=!1,It=0;const qt=new Array(Kt);for(w=0;w<Kt;w++)qt[w]=0;for(w=nt;w<=k;w++){const Lt=O[w];if(Rt>=Kt){kt(Lt,ot,Q,!0);continue}let ne;if(Lt.key!=null)ne=Pt.get(Lt.key);else for(Et=tt;Et<=K;Et++)if(qt[Et-tt]===0&&Ks(Lt,U[Et])){ne=Et;break}ne===void 0?kt(Lt,ot,Q,!0):(qt[ne-tt]=w+1,ne>=It?It=ne:Tt=!0,E(Lt,U[ne],b,null,ot,Q,ut,Mt,ct),Rt++)}const jt=Tt?kv(qt):_s;for(Et=jt.length-1,w=Kt-1;w>=0;w--){const Lt=tt+w,ne=U[Lt],Qt=U[Lt+1],xe=Lt+1<S?Qt.el||Qt.placeholder:ft;qt[w]===0?E(null,ne,b,xe,ot,Q,ut,Mt,ct):Tt&&(Et<0||w!==jt[Et]?At(ne,b,xe,2):Et--)}}},At=(O,U,b,ft,ot=null)=>{const{el:Q,type:ut,transition:Mt,children:ct,shapeFlag:w}=O;if(w&6){At(O.component.subTree,U,b,ft);return}if(w&128){O.suspense.move(U,b,ft);return}if(w&64){ut.move(O,U,b,St);return}if(ut===Cn){r(Q,U,b);for(let k=0;k<ct.length;k++)At(ct[k],U,b,ft);r(O.anchor,U,b);return}if(ut===tc){I(O,U,b);return}if(ft!==2&&w&1&&Mt)if(ft===0)Mt.beforeEnter(Q),r(Q,U,b),An(()=>Mt.enter(Q),ot);else{const{leave:k,delayLeave:K,afterLeave:nt}=Mt,tt=()=>{O.ctx.isUnmounted?s(Q):r(Q,U,b)},Pt=()=>{Q._isLeaving&&Q[sv](!0),k(Q,()=>{tt(),nt&&nt()})};K?K(Q,tt,Pt):Pt()}else r(Q,U,b)},kt=(O,U,b,ft=!1,ot=!1)=>{const{type:Q,props:ut,ref:Mt,children:ct,dynamicChildren:w,shapeFlag:S,patchFlag:k,dirs:K,cacheIndex:nt}=O;if(k===-2&&(ot=!1),Mt!=null&&(Fi(),fo(Mt,null,b,O,!0),Bi()),nt!=null&&(U.renderCache[nt]=void 0),S&256){U.ctx.deactivate(O);return}const tt=S&1&&K,Pt=!Ms(O);let Et;if(Pt&&(Et=ut&&ut.onVnodeBeforeUnmount)&&oi(Et,U,O),S&6)_t(O.component,b,ft);else{if(S&128){O.suspense.unmount(b,ft);return}tt&&gr(O,null,U,"beforeUnmount"),S&64?O.type.remove(O,U,b,St,ft):w&&!w.hasOnce&&(Q!==Cn||k>0&&k&64)?xt(w,U,b,!1,!0):(Q===Cn&&k&384||!ot&&S&16)&&xt(ct,U,b),ft&&Jt(O)}(Pt&&(Et=ut&&ut.onVnodeUnmounted)||tt)&&An(()=>{Et&&oi(Et,U,O),tt&&gr(O,null,U,"unmounted")},b)},Jt=O=>{const{type:U,el:b,anchor:ft,transition:ot}=O;if(U===Cn){lt(b,ft);return}if(U===tc){A(O);return}const Q=()=>{s(b),ot&&!ot.persisted&&ot.afterLeave&&ot.afterLeave()};if(O.shapeFlag&1&&ot&&!ot.persisted){const{leave:ut,delayLeave:Mt}=ot,ct=()=>ut(b,Q);Mt?Mt(O.el,Q,ct):ct()}else Q()},lt=(O,U)=>{let b;for(;O!==U;)b=_(O),s(O),O=b;s(U)},_t=(O,U,b)=>{const{bum:ft,scope:ot,job:Q,subTree:ut,um:Mt,m:ct,a:w}=O;Pf(ct),Pf(w),ft&&Ra(ft),ot.stop(),Q&&(Q.flags|=8,kt(ut,O,U,b)),Mt&&An(Mt,U),An(()=>{O.isUnmounted=!0},U)},xt=(O,U,b,ft=!1,ot=!1,Q=0)=>{for(let ut=Q;ut<O.length;ut++)kt(O[ut],U,b,ft,ot)},W=O=>{if(O.shapeFlag&6)return W(O.component.subTree);if(O.shapeFlag&128)return O.suspense.next();const U=_(O.anchor||O.el),b=U&&U[iv];return b?_(b):U};let dt=!1;const yt=(O,U,b)=>{O==null?U._vnode&&kt(U._vnode,null,null,!0):E(U._vnode||null,O,U,null,null,null,b),U._vnode=O,dt||(dt=!0,yf(),Zp(),dt=!1)},St={p:E,um:kt,m:At,r:Jt,mt:rt,mc:H,pc:G,pbc:P,n:W,o:n};return{render:yt,hydrate:void 0,createApp:Rv(yt)}}function Ql({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function vr({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function zv(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function fm(n,t,e=!1){const r=n.children,s=t.children;if(ie(r)&&ie(s))for(let a=0;a<r.length;a++){const l=r[a];let c=s[a];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[a]=er(s[a]),c.el=l.el),!e&&c.patchFlag!==-2&&fm(l,c)),c.type===fl&&c.patchFlag!==-1&&(c.el=l.el),c.type===zi&&!c.el&&(c.el=l.el)}}function kv(n){const t=n.slice(),e=[0];let r,s,a,l,c;const h=n.length;for(r=0;r<h;r++){const f=n[r];if(f!==0){if(s=e[e.length-1],n[s]<f){t[r]=s,e.push(r);continue}for(a=0,l=e.length-1;a<l;)c=a+l>>1,n[e[c]]<f?a=c+1:l=c;f<n[e[a]]&&(a>0&&(t[r]=e[a-1]),e[a]=r)}}for(a=e.length,l=e[a-1];a-- >0;)e[a]=l,l=t[l];return e}function dm(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:dm(t)}function Pf(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}const Hv=Symbol.for("v-scx"),Vv=()=>Ui(Hv);function Ia(n,t,e){return pm(n,t,e)}function pm(n,t,e=Pe){const{immediate:r,deep:s,flush:a,once:l}=e,c=un({},e),h=t&&r||!t&&a!=="post";let f;if(Ao){if(a==="sync"){const g=Vv();f=g.__watcherHandles||(g.__watcherHandles=[])}else if(!h){const g=()=>{};return g.stop=ui,g.resume=ui,g.pause=ui,g}}const d=ln;c.call=(g,M,E)=>fi(g,d,M,E);let p=!1;a==="post"?c.scheduler=g=>{An(g,d&&d.suspense)}:a!=="sync"&&(p=!0,c.scheduler=(g,M)=>{M?g():ch(g)}),c.augmentJob=g=>{t&&(g.flags|=4),p&&(g.flags|=2,d&&(g.id=d.uid,g.i=d))};const _=$g(n,t,c);return Ao&&(f?f.push(_):h&&_()),_}function Gv(n,t,e){const r=this.proxy,s=Ge(n)?n.includes(".")?mm(r,n):()=>r[n]:n.bind(r,r);let a;oe(t)?a=t:(a=t.handler,e=t);const l=No(this),c=pm(s,a.bind(r),e);return l(),c}function mm(n,t){const e=t.split(".");return()=>{let r=n;for(let s=0;s<e.length&&r;s++)r=r[e[s]];return r}}const Wv=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Vn(t)}Modifiers`]||n[`${Br(t)}Modifiers`];function Xv(n,t,...e){if(n.isUnmounted)return;const r=n.vnode.props||Pe;let s=e;const a=t.startsWith("update:"),l=a&&Wv(r,t.slice(7));l&&(l.trim&&(s=e.map(d=>Ge(d)?d.trim():d)),l.number&&(s=e.map(Ju)));let c,h=r[c=ql(t)]||r[c=ql(Vn(t))];!h&&a&&(h=r[c=ql(Br(t))]),h&&fi(h,n,6,s);const f=r[c+"Once"];if(f){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,fi(f,n,6,s)}}const Zv=new WeakMap;function _m(n,t,e=!1){const r=e?Zv:t.emitsCache,s=r.get(n);if(s!==void 0)return s;const a=n.emits;let l={},c=!1;if(!oe(n)){const h=f=>{const d=_m(f,t,!0);d&&(c=!0,un(l,d))};!e&&t.mixins.length&&t.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}return!a&&!c?(Ie(n)&&r.set(n,null),null):(ie(a)?a.forEach(h=>l[h]=null):un(l,a),Ie(n)&&r.set(n,l),l)}function hl(n,t){return!n||!nl(t)?!1:(t=t.slice(2).replace(/Once$/,""),Ee(n,t[0].toLowerCase()+t.slice(1))||Ee(n,Br(t))||Ee(n,t))}function Cf(n){const{type:t,vnode:e,proxy:r,withProxy:s,propsOptions:[a],slots:l,attrs:c,emit:h,render:f,renderCache:d,props:p,data:_,setupState:g,ctx:M,inheritAttrs:E}=n,y=Xa(n);let v,D;try{if(e.shapeFlag&4){const A=s||r,V=A;v=li(f.call(V,A,d,p,g,_,M)),D=c}else{const A=t;v=li(A.length>1?A(p,{attrs:c,slots:l,emit:h}):A(p,null)),D=t.props?c:qv(c)}}catch(A){mo.length=0,cl(A,n,1),v=Fe(zi)}let I=v;if(D&&E!==!1){const A=Object.keys(D),{shapeFlag:V}=I;A.length&&V&7&&(a&&A.some(ju)&&(D=Yv(D,a)),I=ws(I,D,!1,!0))}return e.dirs&&(I=ws(I,null,!1,!0),I.dirs=I.dirs?I.dirs.concat(e.dirs):e.dirs),e.transition&&uh(I,e.transition),v=I,Xa(y),v}const qv=n=>{let t;for(const e in n)(e==="class"||e==="style"||nl(e))&&((t||(t={}))[e]=n[e]);return t},Yv=(n,t)=>{const e={};for(const r in n)(!ju(r)||!(r.slice(9)in t))&&(e[r]=n[r]);return e};function jv(n,t,e){const{props:r,children:s,component:a}=n,{props:l,children:c,patchFlag:h}=t,f=a.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&h>=0){if(h&1024)return!0;if(h&16)return r?Rf(r,l,f):!!l;if(h&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const _=d[p];if(l[_]!==r[_]&&!hl(f,_))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===l?!1:r?l?Rf(r,l,f):!0:!!l;return!1}function Rf(n,t,e){const r=Object.keys(t);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const a=r[s];if(t[a]!==n[a]&&!hl(e,a))return!0}return!1}function Kv({vnode:n,parent:t},e){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=t.vnode).el=e,t=t.parent;else break}}const gm=n=>n.__isSuspense;function $v(n,t){t&&t.pendingBranch?ie(n)?t.effects.push(...n):t.effects.push(n):tv(n)}const Cn=Symbol.for("v-fgt"),fl=Symbol.for("v-txt"),zi=Symbol.for("v-cmt"),tc=Symbol.for("v-stc"),mo=[];let Rn=null;function Xe(n=!1){mo.push(Rn=n?null:[])}function Jv(){mo.pop(),Rn=mo[mo.length-1]||null}let bo=1;function Ya(n,t=!1){bo+=n,n<0&&Rn&&t&&(Rn.hasOnce=!0)}function vm(n){return n.dynamicChildren=bo>0?Rn||_s:null,Jv(),bo>0&&Rn&&Rn.push(n),n}function vn(n,t,e,r,s,a){return vm(le(n,t,e,r,s,a,!0))}function ja(n,t,e,r,s){return vm(Fe(n,t,e,r,s,!0))}function To(n){return n?n.__v_isVNode===!0:!1}function Ks(n,t){return n.type===t.type&&n.key===t.key}const xm=({key:n})=>n??null,Da=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Ge(n)||cn(n)||oe(n)?{i:nn,r:n,k:t,f:!!e}:n:null);function le(n,t=null,e=null,r=0,s=null,a=n===Cn?0:1,l=!1,c=!1){const h={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&xm(t),ref:t&&Da(t),scopeId:Yp,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:nn};return c?(dh(h,e),a&128&&n.normalize(h)):e&&(h.shapeFlag|=Ge(e)?8:16),bo>0&&!l&&Rn&&(h.patchFlag>0||a&6)&&h.patchFlag!==32&&Rn.push(h),h}const Fe=Qv;function Qv(n,t=null,e=null,r=0,s=null,a=!1){if((!n||n===xv)&&(n=zi),To(n)){const c=ws(n,t,!0);return e&&dh(c,e),bo>0&&!a&&Rn&&(c.shapeFlag&6?Rn[Rn.indexOf(n)]=c:Rn.push(c)),c.patchFlag=-2,c}if(hx(n)&&(n=n.__vccOpts),t){t=tx(t);let{class:c,style:h}=t;c&&!Ge(c)&&(t.class=th(c)),Ie(h)&&(lh(h)&&!ie(h)&&(h=un({},h)),t.style=Qu(h))}const l=Ge(n)?1:gm(n)?128:rv(n)?64:Ie(n)?4:oe(n)?2:0;return le(n,t,e,r,s,l,a,!0)}function tx(n){return n?lh(n)||om(n)?un({},n):n:null}function ws(n,t,e=!1,r=!1){const{props:s,ref:a,patchFlag:l,children:c,transition:h}=n,f=t?ex(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:f,key:f&&xm(f),ref:t&&t.ref?e&&a?ie(a)?a.concat(Da(t)):[a,Da(t)]:Da(t):a,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:c,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Cn?l===-1?16:l|16:l,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:h,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ws(n.ssContent),ssFallback:n.ssFallback&&ws(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return h&&r&&uh(d,h.clone(d)),d}function Or(n=" ",t=0){return Fe(fl,null,n,t)}function wo(n="",t=!1){return t?(Xe(),ja(zi,null,n)):Fe(zi,null,n)}function li(n){return n==null||typeof n=="boolean"?Fe(zi):ie(n)?Fe(Cn,null,n.slice()):To(n)?er(n):Fe(fl,null,String(n))}function er(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ws(n)}function dh(n,t){let e=0;const{shapeFlag:r}=n;if(t==null)t=null;else if(ie(t))e=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),dh(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!om(t)?t._ctx=nn:s===3&&nn&&(nn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else oe(t)?(t={default:t,_ctx:nn},e=32):(t=String(t),r&64?(e=16,t=[Or(t)]):e=8);n.children=t,n.shapeFlag|=e}function ex(...n){const t={};for(let e=0;e<n.length;e++){const r=n[e];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=th([t.class,r.class]));else if(s==="style")t.style=Qu([t.style,r.style]);else if(nl(s)){const a=t[s],l=r[s];l&&a!==l&&!(ie(a)&&a.includes(l))&&(t[s]=a?[].concat(a,l):l)}else s!==""&&(t[s]=r[s])}return t}function oi(n,t,e,r=null){fi(n,t,7,[e,r])}const nx=im();let ix=0;function rx(n,t,e){const r=n.type,s=(t?t.appContext:n.appContext)||nx,a={uid:ix++,vnode:n,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Eg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lm(r,s),emitsOptions:_m(r,s),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:r.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Xv.bind(null,a),n.ce&&n.ce(a),a}let ln=null;const sx=()=>ln||nn;let Ka,Kc;{const n=ol(),t=(e,r)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(r),a=>{s.length>1?s.forEach(l=>l(a)):s[0](a)}};Ka=t("__VUE_INSTANCE_SETTERS__",e=>ln=e),Kc=t("__VUE_SSR_SETTERS__",e=>Ao=e)}const No=n=>{const t=ln;return Ka(n),n.scope.on(),()=>{n.scope.off(),Ka(t)}},Lf=()=>{ln&&ln.scope.off(),Ka(null)};function ym(n){return n.vnode.shapeFlag&4}let Ao=!1;function ox(n,t=!1,e=!1){t&&Kc(t);const{props:r,children:s}=n.vnode,a=ym(n);Lv(n,r,a,t),Uv(n,s,e||t);const l=a?ax(n,t):void 0;return t&&Kc(!1),l}function ax(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Ev);const{setup:r}=e;if(r){Fi();const s=n.setupContext=r.length>1?cx(n):null,a=No(n),l=Uo(r,n,0,[n.props,s]),c=xp(l);if(Bi(),a(),(c||n.sp)&&!Ms(n)&&Kp(n),c){if(l.then(Lf,Lf),t)return l.then(h=>{If(n,h)}).catch(h=>{cl(h,n,0)});n.asyncDep=l}else If(n,l)}else Mm(n)}function If(n,t,e){oe(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:Ie(t)&&(n.setupState=Vp(t)),Mm(n)}function Mm(n,t,e){const r=n.type;n.render||(n.render=r.render||ui);{const s=No(n);Fi();try{bv(n)}finally{Bi(),s()}}}const lx={get(n,t){return an(n,"get",""),n[t]}};function cx(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,lx),slots:n.slots,emit:n.emit,expose:t}}function dl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Vp(Gg(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in po)return po[e](n)},has(t,e){return e in t||e in po}})):n.proxy}function ux(n,t=!0){return oe(n)?n.displayName||n.name:n.name||t&&n.__name}function hx(n){return oe(n)&&"__vccOpts"in n}const jn=(n,t)=>jg(n,t,Ao);function Sm(n,t,e){try{Ya(-1);const r=arguments.length;return r===2?Ie(t)&&!ie(t)?To(t)?Fe(n,null,[t]):Fe(n,t):Fe(n,null,t):(r>3?e=Array.prototype.slice.call(arguments,2):r===3&&To(e)&&(e=[e]),Fe(n,t,e))}finally{Ya(1)}}const fx="3.5.24";let $c;const Df=typeof window<"u"&&window.trustedTypes;if(Df)try{$c=Df.createPolicy("vue",{createHTML:n=>n})}catch{}const Em=$c?n=>$c.createHTML(n):n=>n,dx="http://www.w3.org/2000/svg",px="http://www.w3.org/1998/Math/MathML",Pi=typeof document<"u"?document:null,Of=Pi&&Pi.createElement("template"),mx={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,r)=>{const s=t==="svg"?Pi.createElementNS(dx,n):t==="mathml"?Pi.createElementNS(px,n):e?Pi.createElement(n,{is:e}):Pi.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>Pi.createTextNode(n),createComment:n=>Pi.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Pi.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,r,s,a){const l=e?e.previousSibling:t.lastChild;if(s&&(s===a||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===a||!(s=s.nextSibling)););else{Of.innerHTML=Em(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const c=Of.content;if(r==="svg"||r==="mathml"){const h=c.firstChild;for(;h.firstChild;)c.appendChild(h.firstChild);c.removeChild(h)}t.insertBefore(c,e)}return[l?l.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},_x=Symbol("_vtc");function gx(n,t,e){const r=n[_x];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Uf=Symbol("_vod"),vx=Symbol("_vsh"),xx=Symbol(""),yx=/(?:^|;)\s*display\s*:/;function Mx(n,t,e){const r=n.style,s=Ge(e);let a=!1;if(e&&!s){if(t)if(Ge(t))for(const l of t.split(";")){const c=l.slice(0,l.indexOf(":")).trim();e[c]==null&&Oa(r,c,"")}else for(const l in t)e[l]==null&&Oa(r,l,"");for(const l in e)l==="display"&&(a=!0),Oa(r,l,e[l])}else if(s){if(t!==e){const l=r[xx];l&&(e+=";"+l),r.cssText=e,a=yx.test(e)}}else t&&n.removeAttribute("style");Uf in n&&(n[Uf]=a?r.display:"",n[vx]&&(r.display="none"))}const Nf=/\s*!important$/;function Oa(n,t,e){if(ie(e))e.forEach(r=>Oa(n,t,r));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const r=Sx(n,t);Nf.test(e)?n.setProperty(Br(r),e.replace(Nf,""),"important"):n[r]=e}}const Ff=["Webkit","Moz","ms"],ec={};function Sx(n,t){const e=ec[t];if(e)return e;let r=Vn(t);if(r!=="filter"&&r in n)return ec[t]=r;r=sl(r);for(let s=0;s<Ff.length;s++){const a=Ff[s]+r;if(a in n)return ec[t]=a}return t}const Bf="http://www.w3.org/1999/xlink";function zf(n,t,e,r,s,a=Sg(t)){r&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Bf,t.slice(6,t.length)):n.setAttributeNS(Bf,t,e):e==null||a&&!Ep(e)?n.removeAttribute(t):n.setAttribute(t,a?"":Hi(e)?String(e):e)}function kf(n,t,e,r,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Em(e):e);return}const a=n.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?n.getAttribute("value")||"":n.value,h=e==null?n.type==="checkbox"?"on":"":String(e);(c!==h||!("_value"in n))&&(n.value=h),e==null&&n.removeAttribute(t),n._value=e;return}let l=!1;if(e===""||e==null){const c=typeof n[t];c==="boolean"?e=Ep(e):e==null&&c==="string"?(e="",l=!0):c==="number"&&(e=0,l=!0)}try{n[t]=e}catch{}l&&n.removeAttribute(s||t)}function us(n,t,e,r){n.addEventListener(t,e,r)}function Ex(n,t,e,r){n.removeEventListener(t,e,r)}const Hf=Symbol("_vei");function bx(n,t,e,r,s=null){const a=n[Hf]||(n[Hf]={}),l=a[t];if(r&&l)l.value=r;else{const[c,h]=Tx(t);if(r){const f=a[t]=Px(r,s);us(n,c,f,h)}else l&&(Ex(n,c,l,h),a[t]=void 0)}}const Vf=/(?:Once|Passive|Capture)$/;function Tx(n){let t;if(Vf.test(n)){t={};let r;for(;r=n.match(Vf);)n=n.slice(0,n.length-r[0].length),t[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Br(n.slice(2)),t]}let nc=0;const wx=Promise.resolve(),Ax=()=>nc||(wx.then(()=>nc=0),nc=Date.now());function Px(n,t){const e=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=e.attached)return;fi(Cx(r,e.value),t,5,[r])};return e.value=n,e.attached=Ax(),e}function Cx(n,t){if(ie(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Gf=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Rx=(n,t,e,r,s,a)=>{const l=s==="svg";t==="class"?gx(n,r,l):t==="style"?Mx(n,e,r):nl(t)?ju(t)||bx(n,t,e,r,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Lx(n,t,r,l))?(kf(n,t,r),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&zf(n,t,r,l,a,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!Ge(r))?kf(n,Vn(t),r,a,t):(t==="true-value"?n._trueValue=r:t==="false-value"&&(n._falseValue=r),zf(n,t,r,l))};function Lx(n,t,e,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in n&&Gf(t)&&oe(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Gf(t)&&Ge(e)?!1:t in n}const Wf=n=>{const t=n.props["onUpdate:modelValue"]||!1;return ie(t)?e=>Ra(t,e):t};function Ix(n){n.target.composing=!0}function Xf(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ic=Symbol("_assign");function Zf(n,t,e){return t&&(n=n.trim()),e&&(n=Ju(n)),n}const Dx={created(n,{modifiers:{lazy:t,trim:e,number:r}},s){n[ic]=Wf(s);const a=r||s.props&&s.props.type==="number";us(n,t?"change":"input",l=>{l.target.composing||n[ic](Zf(n.value,e,a))}),(e||a)&&us(n,"change",()=>{n.value=Zf(n.value,e,a)}),t||(us(n,"compositionstart",Ix),us(n,"compositionend",Xf),us(n,"change",Xf))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:r,trim:s,number:a}},l){if(n[ic]=Wf(l),n.composing)return;const c=(a||n.type==="number")&&!/^0\d/.test(n.value)?Ju(n.value):n.value,h=t??"";c!==h&&(document.activeElement===n&&n.type!=="range"&&(r&&t===e||s&&n.value.trim()===h)||(n.value=h))}},Ox=["ctrl","shift","alt","meta"],Ux={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>Ox.some(e=>n[`${e}Key`]&&!t.includes(e))},Nx=(n,t)=>{const e=n._withMods||(n._withMods={}),r=t.join(".");return e[r]||(e[r]=((s,...a)=>{for(let l=0;l<t.length;l++){const c=Ux[t[l]];if(c&&c(s,t))return}return n(s,...a)}))},Fx=un({patchProp:Rx},mx);let qf;function Bx(){return qf||(qf=Fv(Fx))}const zx=((...n)=>{const t=Bx().createApp(...n),{mount:e}=t;return t.mount=r=>{const s=Hx(r);if(!s)return;const a=t._component;!oe(a)&&!a.render&&!a.template&&(a.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const l=e(s,!1,kx(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),l},t});function kx(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Hx(n){return Ge(n)?document.querySelector(n):n}const di=(n,t)=>{const e=n.__vccOpts||n;for(const[r,s]of t)e[r]=s;return e},Vx={name:"AppRoot"};function Gx(n,t,e,r,s,a){const l=ir("router-view");return Xe(),ja(l)}const Wx=di(Vx,[["render",Gx]]);const hs=typeof document<"u";function bm(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Xx(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&bm(n.default)}const Me=Object.assign;function rc(n,t){const e={};for(const r in t){const s=t[r];e[r]=ti(s)?s.map(n):n(s)}return e}const _o=()=>{},ti=Array.isArray;function Yf(n,t){const e={};for(const r in n)e[r]=r in t?t[r]:n[r];return e}const Tm=/#/g,Zx=/&/g,qx=/\//g,Yx=/=/g,jx=/\?/g,wm=/\+/g,Kx=/%5B/g,$x=/%5D/g,Am=/%5E/g,Jx=/%60/g,Pm=/%7B/g,Qx=/%7C/g,Cm=/%7D/g,t0=/%20/g;function ph(n){return n==null?"":encodeURI(""+n).replace(Qx,"|").replace(Kx,"[").replace($x,"]")}function e0(n){return ph(n).replace(Pm,"{").replace(Cm,"}").replace(Am,"^")}function Jc(n){return ph(n).replace(wm,"%2B").replace(t0,"+").replace(Tm,"%23").replace(Zx,"%26").replace(Jx,"`").replace(Pm,"{").replace(Cm,"}").replace(Am,"^")}function n0(n){return Jc(n).replace(Yx,"%3D")}function i0(n){return ph(n).replace(Tm,"%23").replace(jx,"%3F")}function r0(n){return i0(n).replace(qx,"%2F")}function Po(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const s0=/\/$/,o0=n=>n.replace(s0,"");function sc(n,t,e="/"){let r,s={},a="",l="";const c=t.indexOf("#");let h=t.indexOf("?");return h=c>=0&&h>c?-1:h,h>=0&&(r=t.slice(0,h),a=t.slice(h,c>0?c:t.length),s=n(a.slice(1))),c>=0&&(r=r||t.slice(0,c),l=t.slice(c,t.length)),r=u0(r??t,e),{fullPath:r+a+l,path:r,query:s,hash:Po(l)}}function a0(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function jf(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function l0(n,t,e){const r=t.matched.length-1,s=e.matched.length-1;return r>-1&&r===s&&As(t.matched[r],e.matched[s])&&Rm(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function As(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function Rm(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const e in n)if(!c0(n[e],t[e]))return!1;return!0}function c0(n,t){return ti(n)?Kf(n,t):ti(t)?Kf(t,n):n===t}function Kf(n,t){return ti(t)?n.length===t.length&&n.every((e,r)=>e===t[r]):n.length===1&&n[0]===t}function u0(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),r=n.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let a=e.length-1,l,c;for(l=0;l<r.length;l++)if(c=r[l],c!==".")if(c==="..")a>1&&a--;else break;return e.slice(0,a).join("/")+"/"+r.slice(l).join("/")}const qi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Qc=(function(n){return n.pop="pop",n.push="push",n})({}),oc=(function(n){return n.back="back",n.forward="forward",n.unknown="",n})({});function h0(n){if(!n)if(hs){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),o0(n)}const f0=/^[^#]+#/;function d0(n,t){return n.replace(f0,"#")+t}function p0(n,t){const e=document.documentElement.getBoundingClientRect(),r=n.getBoundingClientRect();return{behavior:t.behavior,left:r.left-e.left-(t.left||0),top:r.top-e.top-(t.top||0)}}const pl=()=>({left:window.scrollX,top:window.scrollY});function m0(n){let t;if("el"in n){const e=n.el,r=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?r?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;t=p0(s,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function $f(n,t){return(history.state?history.state.position-t:-1)+n}const tu=new Map;function _0(n,t){tu.set(n,t)}function g0(n){const t=tu.get(n);return tu.delete(n),t}function v0(n){return typeof n=="string"||n&&typeof n=="object"}function Lm(n){return typeof n=="string"||typeof n=="symbol"}let Ue=(function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n})({});const Im=Symbol("");Ue.MATCHER_NOT_FOUND+"",Ue.NAVIGATION_GUARD_REDIRECT+"",Ue.NAVIGATION_ABORTED+"",Ue.NAVIGATION_CANCELLED+"",Ue.NAVIGATION_DUPLICATED+"";function Ps(n,t){return Me(new Error,{type:n,[Im]:!0},t)}function Mi(n,t){return n instanceof Error&&Im in n&&(t==null||!!(n.type&t))}const x0=["params","query","hash"];function y0(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const t={};for(const e of x0)e in n&&(t[e]=n[e]);return JSON.stringify(t,null,2)}function M0(n){const t={};if(n===""||n==="?")return t;const e=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<e.length;++r){const s=e[r].replace(wm," "),a=s.indexOf("="),l=Po(a<0?s:s.slice(0,a)),c=a<0?null:Po(s.slice(a+1));if(l in t){let h=t[l];ti(h)||(h=t[l]=[h]),h.push(c)}else t[l]=c}return t}function Jf(n){let t="";for(let e in n){const r=n[e];if(e=n0(e),r==null){r!==void 0&&(t+=(t.length?"&":"")+e);continue}(ti(r)?r.map(s=>s&&Jc(s)):[r&&Jc(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+e,s!=null&&(t+="="+s))})}return t}function S0(n){const t={};for(const e in n){const r=n[e];r!==void 0&&(t[e]=ti(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const E0=Symbol(""),Qf=Symbol(""),mh=Symbol(""),Dm=Symbol(""),eu=Symbol("");function $s(){let n=[];function t(r){return n.push(r),()=>{const s=n.indexOf(r);s>-1&&n.splice(s,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function nr(n,t,e,r,s,a=l=>l()){const l=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,h)=>{const f=_=>{_===!1?h(Ps(Ue.NAVIGATION_ABORTED,{from:e,to:t})):_ instanceof Error?h(_):v0(_)?h(Ps(Ue.NAVIGATION_GUARD_REDIRECT,{from:t,to:_})):(l&&r.enterCallbacks[s]===l&&typeof _=="function"&&l.push(_),c())},d=a(()=>n.call(r&&r.instances[s],t,e,f));let p=Promise.resolve(d);n.length<3&&(p=p.then(f)),p.catch(_=>h(_))})}function ac(n,t,e,r,s=a=>a()){const a=[];for(const l of n)for(const c in l.components){let h=l.components[c];if(!(t!=="beforeRouteEnter"&&!l.instances[c]))if(bm(h)){const f=(h.__vccOpts||h)[t];f&&a.push(nr(f,e,r,l,c,s))}else{let f=h();a.push(()=>f.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${c}" at "${l.path}"`);const p=Xx(d)?d.default:d;l.mods[c]=d,l.components[c]=p;const _=(p.__vccOpts||p)[t];return _&&nr(_,e,r,l,c,s)()}))}}return a}function b0(n,t){const e=[],r=[],s=[],a=Math.max(t.matched.length,n.matched.length);for(let l=0;l<a;l++){const c=t.matched[l];c&&(n.matched.find(f=>As(f,c))?r.push(c):e.push(c));const h=n.matched[l];h&&(t.matched.find(f=>As(f,h))||s.push(h))}return[e,r,s]}let T0=()=>location.protocol+"//"+location.host;function Om(n,t){const{pathname:e,search:r,hash:s}=t,a=n.indexOf("#");if(a>-1){let l=s.includes(n.slice(a))?n.slice(a).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),jf(c,"")}return jf(e,n)+r+s}function w0(n,t,e,r){let s=[],a=[],l=null;const c=({state:_})=>{const g=Om(n,location),M=e.value,E=t.value;let y=0;if(_){if(e.value=g,t.value=_,l&&l===M){l=null;return}y=E?_.position-E.position:0}else r(g);s.forEach(v=>{v(e.value,M,{delta:y,type:Qc.pop,direction:y?y>0?oc.forward:oc.back:oc.unknown})})};function h(){l=e.value}function f(_){s.push(_);const g=()=>{const M=s.indexOf(_);M>-1&&s.splice(M,1)};return a.push(g),g}function d(){if(document.visibilityState==="hidden"){const{history:_}=window;if(!_.state)return;_.replaceState(Me({},_.state,{scroll:pl()}),"")}}function p(){for(const _ of a)_();a=[],window.removeEventListener("popstate",c),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",c),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:h,listen:f,destroy:p}}function td(n,t,e,r=!1,s=!1){return{back:n,current:t,forward:e,replaced:r,position:window.history.length,scroll:s?pl():null}}function A0(n){const{history:t,location:e}=window,r={value:Om(n,e)},s={value:t.state};s.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(h,f,d){const p=n.indexOf("#"),_=p>-1?(e.host&&document.querySelector("base")?n:n.slice(p))+h:T0()+n+h;try{t[d?"replaceState":"pushState"](f,"",_),s.value=f}catch(g){console.error(g),e[d?"replace":"assign"](_)}}function l(h,f){a(h,Me({},t.state,td(s.value.back,h,s.value.forward,!0),f,{position:s.value.position}),!0),r.value=h}function c(h,f){const d=Me({},s.value,t.state,{forward:h,scroll:pl()});a(d.current,d,!0),a(h,Me({},td(r.value,h,null),{position:d.position+1},f),!1),r.value=h}return{location:r,state:s,push:c,replace:l}}function P0(n){n=h0(n);const t=A0(n),e=w0(n,t.state,t.location,t.replace);function r(a,l=!0){l||e.pauseListeners(),history.go(a)}const s=Me({location:"",base:n,go:r,createHref:d0.bind(null,n)},t,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}let Rr=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n})({});var We=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n})(We||{});const C0={type:Rr.Static,value:""},R0=/[a-zA-Z0-9_]/;function L0(n){if(!n)return[[]];if(n==="/")return[[C0]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(g){throw new Error(`ERR (${e})/"${f}": ${g}`)}let e=We.Static,r=e;const s=[];let a;function l(){a&&s.push(a),a=[]}let c=0,h,f="",d="";function p(){f&&(e===We.Static?a.push({type:Rr.Static,value:f}):e===We.Param||e===We.ParamRegExp||e===We.ParamRegExpEnd?(a.length>1&&(h==="*"||h==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),a.push({type:Rr.Param,value:f,regexp:d,repeatable:h==="*"||h==="+",optional:h==="*"||h==="?"})):t("Invalid state to consume buffer"),f="")}function _(){f+=h}for(;c<n.length;){if(h=n[c++],h==="\\"&&e!==We.ParamRegExp){r=e,e=We.EscapeNext;continue}switch(e){case We.Static:h==="/"?(f&&p(),l()):h===":"?(p(),e=We.Param):_();break;case We.EscapeNext:_(),e=r;break;case We.Param:h==="("?e=We.ParamRegExp:R0.test(h)?_():(p(),e=We.Static,h!=="*"&&h!=="?"&&h!=="+"&&c--);break;case We.ParamRegExp:h===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+h:e=We.ParamRegExpEnd:d+=h;break;case We.ParamRegExpEnd:p(),e=We.Static,h!=="*"&&h!=="?"&&h!=="+"&&c--,d="";break;default:t("Unknown state");break}}return e===We.ParamRegExp&&t(`Unfinished custom RegExp for param "${f}"`),p(),l(),s}const ed="[^/]+?",I0={sensitive:!1,strict:!1,start:!0,end:!0};var _n=(function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n})(_n||{});const D0=/[.+*?^${}()[\]/\\]/g;function O0(n,t){const e=Me({},I0,t),r=[];let s=e.start?"^":"";const a=[];for(const f of n){const d=f.length?[]:[_n.Root];e.strict&&!f.length&&(s+="/");for(let p=0;p<f.length;p++){const _=f[p];let g=_n.Segment+(e.sensitive?_n.BonusCaseSensitive:0);if(_.type===Rr.Static)p||(s+="/"),s+=_.value.replace(D0,"\\$&"),g+=_n.Static;else if(_.type===Rr.Param){const{value:M,repeatable:E,optional:y,regexp:v}=_;a.push({name:M,repeatable:E,optional:y});const D=v||ed;if(D!==ed){g+=_n.BonusCustomRegExp;try{`${D}`}catch(A){throw new Error(`Invalid custom RegExp for param "${M}" (${D}): `+A.message)}}let I=E?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;p||(I=y&&f.length<2?`(?:/${I})`:"/"+I),y&&(I+="?"),s+=I,g+=_n.Dynamic,y&&(g+=_n.BonusOptional),E&&(g+=_n.BonusRepeatable),D===".*"&&(g+=_n.BonusWildcard)}d.push(g)}r.push(d)}if(e.strict&&e.end){const f=r.length-1;r[f][r[f].length-1]+=_n.BonusStrict}e.strict||(s+="/?"),e.end?s+="$":e.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const l=new RegExp(s,e.sensitive?"":"i");function c(f){const d=f.match(l),p={};if(!d)return null;for(let _=1;_<d.length;_++){const g=d[_]||"",M=a[_-1];p[M.name]=g&&M.repeatable?g.split("/"):g}return p}function h(f){let d="",p=!1;for(const _ of n){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const g of _)if(g.type===Rr.Static)d+=g.value;else if(g.type===Rr.Param){const{value:M,repeatable:E,optional:y}=g,v=M in f?f[M]:"";if(ti(v)&&!E)throw new Error(`Provided param "${M}" is an array but it is not repeatable (* or + modifiers)`);const D=ti(v)?v.join("/"):v;if(!D)if(y)_.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${M}"`);d+=D}}return d||"/"}return{re:l,score:r,keys:a,parse:c,stringify:h}}function U0(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=t[e]-n[e];if(r)return r;e++}return n.length<t.length?n.length===1&&n[0]===_n.Static+_n.Segment?-1:1:n.length>t.length?t.length===1&&t[0]===_n.Static+_n.Segment?1:-1:0}function Um(n,t){let e=0;const r=n.score,s=t.score;for(;e<r.length&&e<s.length;){const a=U0(r[e],s[e]);if(a)return a;e++}if(Math.abs(s.length-r.length)===1){if(nd(r))return 1;if(nd(s))return-1}return s.length-r.length}function nd(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const N0={strict:!1,end:!0,sensitive:!1};function F0(n,t,e){const r=O0(L0(n.path),e),s=Me(r,{record:n,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function B0(n,t){const e=[],r=new Map;t=Yf(N0,t);function s(p){return r.get(p)}function a(p,_,g){const M=!g,E=rd(p);E.aliasOf=g&&g.record;const y=Yf(t,p),v=[E];if("alias"in p){const A=typeof p.alias=="string"?[p.alias]:p.alias;for(const V of A)v.push(rd(Me({},E,{components:g?g.record.components:E.components,path:V,aliasOf:g?g.record:E})))}let D,I;for(const A of v){const{path:V}=A;if(_&&V[0]!=="/"){const N=_.record.path,B=N[N.length-1]==="/"?"":"/";A.path=_.record.path+(V&&B+V)}if(D=F0(A,_,y),g?g.alias.push(D):(I=I||D,I!==D&&I.alias.push(D),M&&p.name&&!sd(D)&&l(p.name)),Nm(D)&&h(D),E.children){const N=E.children;for(let B=0;B<N.length;B++)a(N[B],D,g&&g.children[B])}g=g||D}return I?()=>{l(I)}:_o}function l(p){if(Lm(p)){const _=r.get(p);_&&(r.delete(p),e.splice(e.indexOf(_),1),_.children.forEach(l),_.alias.forEach(l))}else{const _=e.indexOf(p);_>-1&&(e.splice(_,1),p.record.name&&r.delete(p.record.name),p.children.forEach(l),p.alias.forEach(l))}}function c(){return e}function h(p){const _=H0(p,e);e.splice(_,0,p),p.record.name&&!sd(p)&&r.set(p.record.name,p)}function f(p,_){let g,M={},E,y;if("name"in p&&p.name){if(g=r.get(p.name),!g)throw Ps(Ue.MATCHER_NOT_FOUND,{location:p});y=g.record.name,M=Me(id(_.params,g.keys.filter(I=>!I.optional).concat(g.parent?g.parent.keys.filter(I=>I.optional):[]).map(I=>I.name)),p.params&&id(p.params,g.keys.map(I=>I.name))),E=g.stringify(M)}else if(p.path!=null)E=p.path,g=e.find(I=>I.re.test(E)),g&&(M=g.parse(E),y=g.record.name);else{if(g=_.name?r.get(_.name):e.find(I=>I.re.test(_.path)),!g)throw Ps(Ue.MATCHER_NOT_FOUND,{location:p,currentLocation:_});y=g.record.name,M=Me({},_.params,p.params),E=g.stringify(M)}const v=[];let D=g;for(;D;)v.unshift(D.record),D=D.parent;return{name:y,path:E,params:M,matched:v,meta:k0(v)}}n.forEach(p=>a(p));function d(){e.length=0,r.clear()}return{addRoute:a,resolve:f,removeRoute:l,clearRoutes:d,getRoutes:c,getRecordMatcher:s}}function id(n,t){const e={};for(const r of t)r in n&&(e[r]=n[r]);return e}function rd(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:z0(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function z0(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const r in n.components)t[r]=typeof e=="object"?e[r]:e;return t}function sd(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function k0(n){return n.reduce((t,e)=>Me(t,e.meta),{})}function H0(n,t){let e=0,r=t.length;for(;e!==r;){const a=e+r>>1;Um(n,t[a])<0?r=a:e=a+1}const s=V0(n);return s&&(r=t.lastIndexOf(s,r-1)),r}function V0(n){let t=n;for(;t=t.parent;)if(Nm(t)&&Um(n,t)===0)return t}function Nm({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function od(n){const t=Ui(mh),e=Ui(Dm),r=jn(()=>{const h=xs(n.to);return t.resolve(h)}),s=jn(()=>{const{matched:h}=r.value,{length:f}=h,d=h[f-1],p=e.matched;if(!d||!p.length)return-1;const _=p.findIndex(As.bind(null,d));if(_>-1)return _;const g=ad(h[f-2]);return f>1&&ad(d)===g&&p[p.length-1].path!==g?p.findIndex(As.bind(null,h[f-2])):_}),a=jn(()=>s.value>-1&&q0(e.params,r.value.params)),l=jn(()=>s.value>-1&&s.value===e.matched.length-1&&Rm(e.params,r.value.params));function c(h={}){if(Z0(h)){const f=t[xs(n.replace)?"replace":"push"](xs(n.to)).catch(_o);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>f),f}return Promise.resolve()}return{route:r,href:jn(()=>r.value.href),isActive:a,isExactActive:l,navigate:c}}function G0(n){return n.length===1?n[0]:n}const W0=jp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:od,setup(n,{slots:t}){const e=ll(od(n)),{options:r}=Ui(mh),s=jn(()=>({[ld(n.activeClass,r.linkActiveClass,"router-link-active")]:e.isActive,[ld(n.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const a=t.default&&G0(t.default(e));return n.custom?a:Sm("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},a)}}}),X0=W0;function Z0(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function q0(n,t){for(const e in t){const r=t[e],s=n[e];if(typeof r=="string"){if(r!==s)return!1}else if(!ti(s)||s.length!==r.length||r.some((a,l)=>a!==s[l]))return!1}return!0}function ad(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const ld=(n,t,e)=>n??t??e,Y0=jp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const r=Ui(eu),s=jn(()=>n.route||r.value),a=Ui(Qf,0),l=jn(()=>{let f=xs(a);const{matched:d}=s.value;let p;for(;(p=d[f])&&!p.components;)f++;return f}),c=jn(()=>s.value.matched[l.value]);La(Qf,jn(()=>l.value+1)),La(E0,c),La(eu,s);const h=Wg();return Ia(()=>[h.value,c.value,n.name],([f,d,p],[_,g,M])=>{d&&(d.instances[p]=f,g&&g!==d&&f&&f===_&&(d.leaveGuards.size||(d.leaveGuards=g.leaveGuards),d.updateGuards.size||(d.updateGuards=g.updateGuards))),f&&d&&(!g||!As(d,g)||!_)&&(d.enterCallbacks[p]||[]).forEach(E=>E(f))},{flush:"post"}),()=>{const f=s.value,d=n.name,p=c.value,_=p&&p.components[d];if(!_)return cd(e.default,{Component:_,route:f});const g=p.props[d],M=g?g===!0?f.params:typeof g=="function"?g(f):g:null,y=Sm(_,Me({},M,t,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(p.instances[d]=null)},ref:h}));return cd(e.default,{Component:y,route:f})||y}}});function cd(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const j0=Y0;function K0(n){const t=B0(n.routes,n),e=n.parseQuery||M0,r=n.stringifyQuery||Jf,s=n.history,a=$s(),l=$s(),c=$s(),h=Xg(qi);let f=qi;hs&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=rc.bind(null,W=>""+W),p=rc.bind(null,r0),_=rc.bind(null,Po);function g(W,dt){let yt,St;return Lm(W)?(yt=t.getRecordMatcher(W),St=dt):St=W,t.addRoute(St,yt)}function M(W){const dt=t.getRecordMatcher(W);dt&&t.removeRoute(dt)}function E(){return t.getRoutes().map(W=>W.record)}function y(W){return!!t.getRecordMatcher(W)}function v(W,dt){if(dt=Me({},dt||h.value),typeof W=="string"){const b=sc(e,W,dt.path),ft=t.resolve({path:b.path},dt),ot=s.createHref(b.fullPath);return Me(b,ft,{params:_(ft.params),hash:Po(b.hash),redirectedFrom:void 0,href:ot})}let yt;if(W.path!=null)yt=Me({},W,{path:sc(e,W.path,dt.path).path});else{const b=Me({},W.params);for(const ft in b)b[ft]==null&&delete b[ft];yt=Me({},W,{params:p(b)}),dt.params=p(dt.params)}const St=t.resolve(yt,dt),Wt=W.hash||"";St.params=d(_(St.params));const O=a0(r,Me({},W,{hash:e0(Wt),path:St.path})),U=s.createHref(O);return Me({fullPath:O,hash:Wt,query:r===Jf?S0(W.query):W.query||{}},St,{redirectedFrom:void 0,href:U})}function D(W){return typeof W=="string"?sc(e,W,h.value.path):Me({},W)}function I(W,dt){if(f!==W)return Ps(Ue.NAVIGATION_CANCELLED,{from:dt,to:W})}function A(W){return B(W)}function V(W){return A(Me(D(W),{replace:!0}))}function N(W,dt){const yt=W.matched[W.matched.length-1];if(yt&&yt.redirect){const{redirect:St}=yt;let Wt=typeof St=="function"?St(W,dt):St;return typeof Wt=="string"&&(Wt=Wt.includes("?")||Wt.includes("#")?Wt=D(Wt):{path:Wt},Wt.params={}),Me({query:W.query,hash:W.hash,params:Wt.path!=null?{}:W.params},Wt)}}function B(W,dt){const yt=f=v(W),St=h.value,Wt=W.state,O=W.force,U=W.replace===!0,b=N(yt,St);if(b)return B(Me(D(b),{state:typeof b=="object"?Me({},Wt,b.state):Wt,force:O,replace:U}),dt||yt);const ft=yt;ft.redirectedFrom=dt;let ot;return!O&&l0(r,St,yt)&&(ot=Ps(Ue.NAVIGATION_DUPLICATED,{to:ft,from:St}),At(St,St,!0,!1)),(ot?Promise.resolve(ot):P(ft,St)).catch(Q=>Mi(Q)?Mi(Q,Ue.NAVIGATION_GUARD_REDIRECT)?Q:mt(Q):G(Q,ft,St)).then(Q=>{if(Q){if(Mi(Q,Ue.NAVIGATION_GUARD_REDIRECT))return B(Me({replace:U},D(Q.to),{state:typeof Q.to=="object"?Me({},Wt,Q.to.state):Wt,force:O}),dt||ft)}else Q=$(ft,St,!0,U,Wt);return F(ft,St,Q),Q})}function H(W,dt){const yt=I(W,dt);return yt?Promise.reject(yt):Promise.resolve()}function R(W){const dt=lt.values().next().value;return dt&&typeof dt.runWithContext=="function"?dt.runWithContext(W):W()}function P(W,dt){let yt;const[St,Wt,O]=b0(W,dt);yt=ac(St.reverse(),"beforeRouteLeave",W,dt);for(const b of St)b.leaveGuards.forEach(ft=>{yt.push(nr(ft,W,dt))});const U=H.bind(null,W,dt);return yt.push(U),xt(yt).then(()=>{yt=[];for(const b of a.list())yt.push(nr(b,W,dt));return yt.push(U),xt(yt)}).then(()=>{yt=ac(Wt,"beforeRouteUpdate",W,dt);for(const b of Wt)b.updateGuards.forEach(ft=>{yt.push(nr(ft,W,dt))});return yt.push(U),xt(yt)}).then(()=>{yt=[];for(const b of O)if(b.beforeEnter)if(ti(b.beforeEnter))for(const ft of b.beforeEnter)yt.push(nr(ft,W,dt));else yt.push(nr(b.beforeEnter,W,dt));return yt.push(U),xt(yt)}).then(()=>(W.matched.forEach(b=>b.enterCallbacks={}),yt=ac(O,"beforeRouteEnter",W,dt,R),yt.push(U),xt(yt))).then(()=>{yt=[];for(const b of l.list())yt.push(nr(b,W,dt));return yt.push(U),xt(yt)}).catch(b=>Mi(b,Ue.NAVIGATION_CANCELLED)?b:Promise.reject(b))}function F(W,dt,yt){c.list().forEach(St=>R(()=>St(W,dt,yt)))}function $(W,dt,yt,St,Wt){const O=I(W,dt);if(O)return O;const U=dt===qi,b=hs?history.state:{};yt&&(St||U?s.replace(W.fullPath,Me({scroll:U&&b&&b.scroll},Wt)):s.push(W.fullPath,Wt)),h.value=W,At(W,dt,yt,U),mt()}let Y;function rt(){Y||(Y=s.listen((W,dt,yt)=>{if(!_t.listening)return;const St=v(W),Wt=N(St,_t.currentRoute.value);if(Wt){B(Me(Wt,{replace:!0,force:!0}),St).catch(_o);return}f=St;const O=h.value;hs&&_0($f(O.fullPath,yt.delta),pl()),P(St,O).catch(U=>Mi(U,Ue.NAVIGATION_ABORTED|Ue.NAVIGATION_CANCELLED)?U:Mi(U,Ue.NAVIGATION_GUARD_REDIRECT)?(B(Me(D(U.to),{force:!0}),St).then(b=>{Mi(b,Ue.NAVIGATION_ABORTED|Ue.NAVIGATION_DUPLICATED)&&!yt.delta&&yt.type===Qc.pop&&s.go(-1,!1)}).catch(_o),Promise.reject()):(yt.delta&&s.go(-yt.delta,!1),G(U,St,O))).then(U=>{U=U||$(St,O,!1),U&&(yt.delta&&!Mi(U,Ue.NAVIGATION_CANCELLED)?s.go(-yt.delta,!1):yt.type===Qc.pop&&Mi(U,Ue.NAVIGATION_ABORTED|Ue.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),F(St,O,U)}).catch(_o)}))}let gt=$s(),J=$s(),pt;function G(W,dt,yt){mt(W);const St=J.list();return St.length?St.forEach(Wt=>Wt(W,dt,yt)):console.error(W),Promise.reject(W)}function Ct(){return pt&&h.value!==qi?Promise.resolve():new Promise((W,dt)=>{gt.add([W,dt])})}function mt(W){return pt||(pt=!W,rt(),gt.list().forEach(([dt,yt])=>W?yt(W):dt()),gt.reset()),W}function At(W,dt,yt,St){const{scrollBehavior:Wt}=n;if(!hs||!Wt)return Promise.resolve();const O=!yt&&g0($f(W.fullPath,0))||(St||!yt)&&history.state&&history.state.scroll||null;return Wp().then(()=>Wt(W,dt,O)).then(U=>U&&m0(U)).catch(U=>G(U,W,dt))}const kt=W=>s.go(W);let Jt;const lt=new Set,_t={currentRoute:h,listening:!0,addRoute:g,removeRoute:M,clearRoutes:t.clearRoutes,hasRoute:y,getRoutes:E,resolve:v,options:n,push:A,replace:V,go:kt,back:()=>kt(-1),forward:()=>kt(1),beforeEach:a.add,beforeResolve:l.add,afterEach:c.add,onError:J.add,isReady:Ct,install(W){W.component("RouterLink",X0),W.component("RouterView",j0),W.config.globalProperties.$router=_t,Object.defineProperty(W.config.globalProperties,"$route",{enumerable:!0,get:()=>xs(h)}),hs&&!Jt&&h.value===qi&&(Jt=!0,A(s.location).catch(St=>{}));const dt={};for(const St in qi)Object.defineProperty(dt,St,{get:()=>h.value[St],enumerable:!0});W.provide(mh,_t),W.provide(Dm,kp(dt)),W.provide(eu,h);const yt=W.unmount;lt.add(W),W.unmount=function(){lt.delete(W),lt.size<1&&(f=qi,Y&&Y(),Y=null,h.value=qi,Jt=!1,pt=!1),yt()}}};function xt(W){return W.reduce((dt,yt)=>dt.then(()=>R(yt)),Promise.resolve())}return _t}const _h="175",$0=0,ud=1,J0=2,Fm=1,Q0=2,Ai=3,cr=0,En=1,Ii=2,or=0,Es=1,hd=2,fd=3,dd=4,ty=5,Pr=100,ey=101,ny=102,iy=103,ry=104,sy=200,oy=201,ay=202,ly=203,nu=204,iu=205,cy=206,uy=207,hy=208,fy=209,dy=210,py=211,my=212,_y=213,gy=214,ru=0,su=1,ou=2,Cs=3,au=4,lu=5,cu=6,uu=7,Bm=0,vy=1,xy=2,ar=0,yy=1,My=2,Sy=3,Ey=4,by=5,Ty=6,wy=7,zm=300,Rs=301,Ls=302,hu=303,fu=304,ml=306,du=1e3,Lr=1001,pu=1002,Qn=1003,Ay=1004,sa=1005,kn=1006,lc=1007,Ir=1008,ki=1009,km=1010,Hm=1011,Co=1012,gh=1013,Nr=1014,Di=1015,Fo=1016,vh=1017,xh=1018,Ro=1020,Vm=35902,Gm=1021,Wm=1022,$n=1023,Xm=1024,Zm=1025,Lo=1026,Io=1027,qm=1028,yh=1029,Ym=1030,Mh=1031,Sh=1033,Ua=33776,Na=33777,Fa=33778,Ba=33779,mu=35840,_u=35841,gu=35842,vu=35843,xu=36196,yu=37492,Mu=37496,Su=37808,Eu=37809,bu=37810,Tu=37811,wu=37812,Au=37813,Pu=37814,Cu=37815,Ru=37816,Lu=37817,Iu=37818,Du=37819,Ou=37820,Uu=37821,za=36492,Nu=36494,Fu=36495,jm=36283,Bu=36284,zu=36285,ku=36286,Py=3200,Cy=3201,Ry=0,Ly=1,rr="",Bn="srgb",Is="srgb-linear",$a="linear",be="srgb",Yr=7680,pd=519,Iy=512,Dy=513,Oy=514,Km=515,Uy=516,Ny=517,Fy=518,By=519,md=35044,_d="300 es",Oi=2e3,Ja=2001;class zr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(e)===-1&&r[t].push(e)}hasEventListener(t,e){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(e)!==-1}removeEventListener(t,e){const r=this._listeners;if(r===void 0)return;const s=r[t];if(s!==void 0){const a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const r=e[t.type];if(r!==void 0){t.target=this;const s=r.slice(0);for(let a=0,l=s.length;a<l;a++)s[a].call(this,t);t.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gd=1234567;const go=Math.PI/180,Do=180/Math.PI;function Us(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]+"-"+rn[t&255]+rn[t>>8&255]+"-"+rn[t>>16&15|64]+rn[t>>24&255]+"-"+rn[e&63|128]+rn[e>>8&255]+"-"+rn[e>>16&255]+rn[e>>24&255]+rn[r&255]+rn[r>>8&255]+rn[r>>16&255]+rn[r>>24&255]).toLowerCase()}function me(n,t,e){return Math.max(t,Math.min(e,n))}function Eh(n,t){return(n%t+t)%t}function zy(n,t,e,r,s){return r+(n-t)*(s-r)/(e-t)}function ky(n,t,e){return n!==t?(e-n)/(t-n):0}function vo(n,t,e){return(1-e)*n+e*t}function Hy(n,t,e,r){return vo(n,t,1-Math.exp(-e*r))}function Vy(n,t=1){return t-Math.abs(Eh(n,t*2)-t)}function Gy(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Wy(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Xy(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Zy(n,t){return n+Math.random()*(t-n)}function qy(n){return n*(.5-Math.random())}function Yy(n){n!==void 0&&(gd=n);let t=gd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function jy(n){return n*go}function Ky(n){return n*Do}function $y(n){return(n&n-1)===0&&n!==0}function Jy(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Qy(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function tM(n,t,e,r,s){const a=Math.cos,l=Math.sin,c=a(e/2),h=l(e/2),f=a((t+r)/2),d=l((t+r)/2),p=a((t-r)/2),_=l((t-r)/2),g=a((r-t)/2),M=l((r-t)/2);switch(s){case"XYX":n.set(c*d,h*p,h*_,c*f);break;case"YZY":n.set(h*_,c*d,h*p,c*f);break;case"ZXZ":n.set(h*p,h*_,c*d,c*f);break;case"XZX":n.set(c*d,h*M,h*g,c*f);break;case"YXY":n.set(h*g,c*d,h*M,c*f);break;case"ZYZ":n.set(h*M,h*g,c*d,c*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function pn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Pn={DEG2RAD:go,RAD2DEG:Do,generateUUID:Us,clamp:me,euclideanModulo:Eh,mapLinear:zy,inverseLerp:ky,lerp:vo,damp:Hy,pingpong:Vy,smoothstep:Gy,smootherstep:Wy,randInt:Xy,randFloat:Zy,randFloatSpread:qy,seededRandom:Yy,degToRad:jy,radToDeg:Ky,isPowerOfTwo:$y,ceilPowerOfTwo:Jy,floorPowerOfTwo:Qy,setQuaternionFromProperEuler:tM,normalize:pn,denormalize:fs};class we{constructor(t=0,e=0){we.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,r=this.y,s=t.elements;return this.x=s[0]*e+s[3]*r+s[6],this.y=s[1]*e+s[4]*r+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this}clampLength(t,e){const r=this.length();return this.divideScalar(r||1).multiplyScalar(me(r,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const r=this.dot(t)/e;return Math.acos(me(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,r=this.y-t.y;return e*e+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const r=Math.cos(e),s=Math.sin(e),a=this.x-t.x,l=this.y-t.y;return this.x=a*r-l*s+t.x,this.y=a*s+l*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ce{constructor(t,e,r,s,a,l,c,h,f){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,r,s,a,l,c,h,f)}set(t,e,r,s,a,l,c,h,f){const d=this.elements;return d[0]=t,d[1]=s,d[2]=c,d[3]=e,d[4]=a,d[5]=h,d[6]=r,d[7]=l,d[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,r=t.elements;return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e[8]=r[8],this}extractBasis(t,e,r){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const r=t.elements,s=e.elements,a=this.elements,l=r[0],c=r[3],h=r[6],f=r[1],d=r[4],p=r[7],_=r[2],g=r[5],M=r[8],E=s[0],y=s[3],v=s[6],D=s[1],I=s[4],A=s[7],V=s[2],N=s[5],B=s[8];return a[0]=l*E+c*D+h*V,a[3]=l*y+c*I+h*N,a[6]=l*v+c*A+h*B,a[1]=f*E+d*D+p*V,a[4]=f*y+d*I+p*N,a[7]=f*v+d*A+p*B,a[2]=_*E+g*D+M*V,a[5]=_*y+g*I+M*N,a[8]=_*v+g*A+M*B,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],r=t[1],s=t[2],a=t[3],l=t[4],c=t[5],h=t[6],f=t[7],d=t[8];return e*l*d-e*c*f-r*a*d+r*c*h+s*a*f-s*l*h}invert(){const t=this.elements,e=t[0],r=t[1],s=t[2],a=t[3],l=t[4],c=t[5],h=t[6],f=t[7],d=t[8],p=d*l-c*f,_=c*h-d*a,g=f*a-l*h,M=e*p+r*_+s*g;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return t[0]=p*E,t[1]=(s*f-d*r)*E,t[2]=(c*r-s*l)*E,t[3]=_*E,t[4]=(d*e-s*h)*E,t[5]=(s*a-c*e)*E,t[6]=g*E,t[7]=(r*h-f*e)*E,t[8]=(l*e-r*a)*E,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,r,s,a,l,c){const h=Math.cos(a),f=Math.sin(a);return this.set(r*h,r*f,-r*(h*l+f*c)+l+t,-s*f,s*h,-s*(-f*l+h*c)+c+e,0,0,1),this}scale(t,e){return this.premultiply(cc.makeScale(t,e)),this}rotate(t){return this.premultiply(cc.makeRotation(-t)),this}translate(t,e){return this.premultiply(cc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),r=Math.sin(t);return this.set(e,-r,0,r,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,r=t.elements;for(let s=0;s<9;s++)if(e[s]!==r[s])return!1;return!0}fromArray(t,e=0){for(let r=0;r<9;r++)this.elements[r]=t[r+e];return this}toArray(t=[],e=0){const r=this.elements;return t[e]=r[0],t[e+1]=r[1],t[e+2]=r[2],t[e+3]=r[3],t[e+4]=r[4],t[e+5]=r[5],t[e+6]=r[6],t[e+7]=r[7],t[e+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const cc=new ce;function $m(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Qa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function eM(){const n=Qa("canvas");return n.style.display="block",n}const vd={};function ka(n){n in vd||(vd[n]=!0,console.warn(n))}function nM(n,t,e){return new Promise(function(r,s){function a(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:r()}}setTimeout(a,e)})}function iM(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function rM(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const xd=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yd=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sM(){const n={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(s,a,l){return this.enabled===!1||a===l||!a||!l||(this.spaces[a].transfer===be&&(s.r=Ni(s.r),s.g=Ni(s.g),s.b=Ni(s.b)),this.spaces[a].primaries!==this.spaces[l].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===be&&(s.r=bs(s.r),s.g=bs(s.g),s.b=bs(s.b))),s},fromWorkingColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},toWorkingColorSpace:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===rr?$a:this.spaces[s].transfer},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,l){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[Is]:{primaries:t,whitePoint:r,transfer:$a,toXYZ:xd,fromXYZ:yd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Bn},outputColorSpaceConfig:{drawingBufferColorSpace:Bn}},[Bn]:{primaries:t,whitePoint:r,transfer:be,toXYZ:xd,fromXYZ:yd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Bn}}}),n}const ve=sM();function Ni(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function bs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let jr;class oM{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{jr===void 0&&(jr=Qa("canvas")),jr.width=t.width,jr.height=t.height;const s=jr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),r=jr}return r.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Qa("canvas");e.width=t.width,e.height=t.height;const r=e.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const s=r.getImageData(0,0,t.width,t.height),a=s.data;for(let l=0;l<a.length;l++)a[l]=Ni(a[l]/255)*255;return r.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let r=0;r<e.length;r++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[r]=Math.floor(Ni(e[r]/255)*255):e[r]=Ni(e[r]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let aM=0;class bh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=Us(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let l=0,c=s.length;l<c;l++)s[l].isDataTexture?a.push(uc(s[l].image)):a.push(uc(s[l]))}else a=uc(s);r.url=a}return e||(t.images[this.uuid]=r),r}}function uc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?oM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lM=0;class xn extends zr{constructor(t=xn.DEFAULT_IMAGE,e=xn.DEFAULT_MAPPING,r=Lr,s=Lr,a=kn,l=Ir,c=$n,h=ki,f=xn.DEFAULT_ANISOTROPY,d=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=Us(),this.name="",this.source=new bh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=a,this.minFilter=l,this.anisotropy=f,this.format=c,this.internalFormat=null,this.type=h,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),e||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case du:t.x=t.x-Math.floor(t.x);break;case Lr:t.x=t.x<0?0:1;break;case pu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case du:t.y=t.y-Math.floor(t.y);break;case Lr:t.y=t.y<0?0:1;break;case pu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=zm;xn.DEFAULT_ANISOTROPY=1;class Be{constructor(t=0,e=0,r=0,s=1){Be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=r,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,r,s){return this.x=t,this.y=e,this.z=r,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,r=this.y,s=this.z,a=this.w,l=t.elements;return this.x=l[0]*e+l[4]*r+l[8]*s+l[12]*a,this.y=l[1]*e+l[5]*r+l[9]*s+l[13]*a,this.z=l[2]*e+l[6]*r+l[10]*s+l[14]*a,this.w=l[3]*e+l[7]*r+l[11]*s+l[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,r,s,a;const h=t.elements,f=h[0],d=h[4],p=h[8],_=h[1],g=h[5],M=h[9],E=h[2],y=h[6],v=h[10];if(Math.abs(d-_)<.01&&Math.abs(p-E)<.01&&Math.abs(M-y)<.01){if(Math.abs(d+_)<.1&&Math.abs(p+E)<.1&&Math.abs(M+y)<.1&&Math.abs(f+g+v-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const I=(f+1)/2,A=(g+1)/2,V=(v+1)/2,N=(d+_)/4,B=(p+E)/4,H=(M+y)/4;return I>A&&I>V?I<.01?(r=0,s=.707106781,a=.707106781):(r=Math.sqrt(I),s=N/r,a=B/r):A>V?A<.01?(r=.707106781,s=0,a=.707106781):(s=Math.sqrt(A),r=N/s,a=H/s):V<.01?(r=.707106781,s=.707106781,a=0):(a=Math.sqrt(V),r=B/a,s=H/a),this.set(r,s,a,e),this}let D=Math.sqrt((y-M)*(y-M)+(p-E)*(p-E)+(_-d)*(_-d));return Math.abs(D)<.001&&(D=1),this.x=(y-M)/D,this.y=(p-E)/D,this.z=(_-d)/D,this.w=Math.acos((f+g+v-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this.w=me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this.w=me(this.w,t,e),this}clampLength(t,e){const r=this.length();return this.divideScalar(r||1).multiplyScalar(me(r,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this.z=t.z+(e.z-t.z)*r,this.w=t.w+(e.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cM extends zr{constructor(t=1,e=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e);const s={width:t,height:e,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const a=new xn(s,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);a.flipY=!1,a.generateMipmaps=r.generateMipmaps,a.internalFormat=r.internalFormat,this.textures=[];const l=r.count;for(let c=0;c<l;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,r=1){if(this.width!==t||this.height!==e||this.depth!==r){this.width=t,this.height=e,this.depth=r;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=r;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,r=t.textures.length;e<r;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new bh(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fr extends cM{constructor(t=1,e=1,r={}){super(t,e,r),this.isWebGLRenderTarget=!0}}class Jm extends xn{constructor(t=null,e=1,r=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:r,depth:s},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=Lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class uM extends xn{constructor(t=null,e=1,r=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:r,depth:s},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=Lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hr{constructor(t=0,e=0,r=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=r,this._w=s}static slerpFlat(t,e,r,s,a,l,c){let h=r[s+0],f=r[s+1],d=r[s+2],p=r[s+3];const _=a[l+0],g=a[l+1],M=a[l+2],E=a[l+3];if(c===0){t[e+0]=h,t[e+1]=f,t[e+2]=d,t[e+3]=p;return}if(c===1){t[e+0]=_,t[e+1]=g,t[e+2]=M,t[e+3]=E;return}if(p!==E||h!==_||f!==g||d!==M){let y=1-c;const v=h*_+f*g+d*M+p*E,D=v>=0?1:-1,I=1-v*v;if(I>Number.EPSILON){const V=Math.sqrt(I),N=Math.atan2(V,v*D);y=Math.sin(y*N)/V,c=Math.sin(c*N)/V}const A=c*D;if(h=h*y+_*A,f=f*y+g*A,d=d*y+M*A,p=p*y+E*A,y===1-c){const V=1/Math.sqrt(h*h+f*f+d*d+p*p);h*=V,f*=V,d*=V,p*=V}}t[e]=h,t[e+1]=f,t[e+2]=d,t[e+3]=p}static multiplyQuaternionsFlat(t,e,r,s,a,l){const c=r[s],h=r[s+1],f=r[s+2],d=r[s+3],p=a[l],_=a[l+1],g=a[l+2],M=a[l+3];return t[e]=c*M+d*p+h*g-f*_,t[e+1]=h*M+d*_+f*p-c*g,t[e+2]=f*M+d*g+c*_-h*p,t[e+3]=d*M-c*p-h*_-f*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,r,s){return this._x=t,this._y=e,this._z=r,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const r=t._x,s=t._y,a=t._z,l=t._order,c=Math.cos,h=Math.sin,f=c(r/2),d=c(s/2),p=c(a/2),_=h(r/2),g=h(s/2),M=h(a/2);switch(l){case"XYZ":this._x=_*d*p+f*g*M,this._y=f*g*p-_*d*M,this._z=f*d*M+_*g*p,this._w=f*d*p-_*g*M;break;case"YXZ":this._x=_*d*p+f*g*M,this._y=f*g*p-_*d*M,this._z=f*d*M-_*g*p,this._w=f*d*p+_*g*M;break;case"ZXY":this._x=_*d*p-f*g*M,this._y=f*g*p+_*d*M,this._z=f*d*M+_*g*p,this._w=f*d*p-_*g*M;break;case"ZYX":this._x=_*d*p-f*g*M,this._y=f*g*p+_*d*M,this._z=f*d*M-_*g*p,this._w=f*d*p+_*g*M;break;case"YZX":this._x=_*d*p+f*g*M,this._y=f*g*p+_*d*M,this._z=f*d*M-_*g*p,this._w=f*d*p-_*g*M;break;case"XZY":this._x=_*d*p-f*g*M,this._y=f*g*p-_*d*M,this._z=f*d*M+_*g*p,this._w=f*d*p+_*g*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const r=e/2,s=Math.sin(r);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,r=e[0],s=e[4],a=e[8],l=e[1],c=e[5],h=e[9],f=e[2],d=e[6],p=e[10],_=r+c+p;if(_>0){const g=.5/Math.sqrt(_+1);this._w=.25/g,this._x=(d-h)*g,this._y=(a-f)*g,this._z=(l-s)*g}else if(r>c&&r>p){const g=2*Math.sqrt(1+r-c-p);this._w=(d-h)/g,this._x=.25*g,this._y=(s+l)/g,this._z=(a+f)/g}else if(c>p){const g=2*Math.sqrt(1+c-r-p);this._w=(a-f)/g,this._x=(s+l)/g,this._y=.25*g,this._z=(h+d)/g}else{const g=2*Math.sqrt(1+p-r-c);this._w=(l-s)/g,this._x=(a+f)/g,this._y=(h+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let r=t.dot(e)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){const r=this.angleTo(t);if(r===0)return this;const s=Math.min(1,e/r);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const r=t._x,s=t._y,a=t._z,l=t._w,c=e._x,h=e._y,f=e._z,d=e._w;return this._x=r*d+l*c+s*f-a*h,this._y=s*d+l*h+a*c-r*f,this._z=a*d+l*f+r*h-s*c,this._w=l*d-r*c-s*h-a*f,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const r=this._x,s=this._y,a=this._z,l=this._w;let c=l*t._w+r*t._x+s*t._y+a*t._z;if(c<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,c=-c):this.copy(t),c>=1)return this._w=l,this._x=r,this._y=s,this._z=a,this;const h=1-c*c;if(h<=Number.EPSILON){const g=1-e;return this._w=g*l+e*this._w,this._x=g*r+e*this._x,this._y=g*s+e*this._y,this._z=g*a+e*this._z,this.normalize(),this}const f=Math.sqrt(h),d=Math.atan2(f,c),p=Math.sin((1-e)*d)/f,_=Math.sin(e*d)/f;return this._w=l*p+this._w*_,this._x=r*p+this._x*_,this._y=s*p+this._y*_,this._z=a*p+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,e,r){return this.copy(t).slerp(e,r)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),r=Math.random(),s=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class it{constructor(t=0,e=0,r=0){it.prototype.isVector3=!0,this.x=t,this.y=e,this.z=r}set(t,e,r){return r===void 0&&(r=this.z),this.x=t,this.y=e,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Md.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Md.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,r=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*r+a[6]*s,this.y=a[1]*e+a[4]*r+a[7]*s,this.z=a[2]*e+a[5]*r+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,r=this.y,s=this.z,a=t.elements,l=1/(a[3]*e+a[7]*r+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*r+a[8]*s+a[12])*l,this.y=(a[1]*e+a[5]*r+a[9]*s+a[13])*l,this.z=(a[2]*e+a[6]*r+a[10]*s+a[14])*l,this}applyQuaternion(t){const e=this.x,r=this.y,s=this.z,a=t.x,l=t.y,c=t.z,h=t.w,f=2*(l*s-c*r),d=2*(c*e-a*s),p=2*(a*r-l*e);return this.x=e+h*f+l*p-c*d,this.y=r+h*d+c*f-a*p,this.z=s+h*p+a*d-l*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,r=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*r+a[8]*s,this.y=a[1]*e+a[5]*r+a[9]*s,this.z=a[2]*e+a[6]*r+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this}clampLength(t,e){const r=this.length();return this.divideScalar(r||1).multiplyScalar(me(r,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this.z=t.z+(e.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const r=t.x,s=t.y,a=t.z,l=e.x,c=e.y,h=e.z;return this.x=s*h-a*c,this.y=a*l-r*h,this.z=r*c-s*l,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const r=t.dot(this)/e;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return hc.copy(this).projectOnVector(t),this.sub(hc)}reflect(t){return this.sub(hc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const r=this.dot(t)/e;return Math.acos(me(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,r=this.y-t.y,s=this.z-t.z;return e*e+r*r+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,r){const s=Math.sin(e)*t;return this.x=s*Math.sin(r),this.y=Math.cos(e)*t,this.z=s*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,r){return this.x=t*Math.sin(e),this.y=r,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=r,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,r=Math.sqrt(1-e*e);return this.x=r*Math.cos(t),this.y=e,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hc=new it,Md=new hr;class Bo{constructor(t=new it(1/0,1/0,1/0),e=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,r=t.length;e<r;e+=3)this.expandByPoint(Zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,r=t.count;e<r;e++)this.expandByPoint(Zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,r=t.length;e<r;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const r=Zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const a=r.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let l=0,c=a.count;l<c;l++)t.isMesh===!0?t.getVertexPosition(l,Zn):Zn.fromBufferAttribute(a,l),Zn.applyMatrix4(t.matrixWorld),this.expandByPoint(Zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),oa.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),oa.copy(r.boundingBox)),oa.applyMatrix4(t.matrixWorld),this.union(oa)}const s=t.children;for(let a=0,l=s.length;a<l;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Zn),Zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,r;return t.normal.x>0?(e=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),e<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Js),aa.subVectors(this.max,Js),Kr.subVectors(t.a,Js),$r.subVectors(t.b,Js),Jr.subVectors(t.c,Js),Yi.subVectors($r,Kr),ji.subVectors(Jr,$r),xr.subVectors(Kr,Jr);let e=[0,-Yi.z,Yi.y,0,-ji.z,ji.y,0,-xr.z,xr.y,Yi.z,0,-Yi.x,ji.z,0,-ji.x,xr.z,0,-xr.x,-Yi.y,Yi.x,0,-ji.y,ji.x,0,-xr.y,xr.x,0];return!fc(e,Kr,$r,Jr,aa)||(e=[1,0,0,0,1,0,0,0,1],!fc(e,Kr,$r,Jr,aa))?!1:(la.crossVectors(Yi,ji),e=[la.x,la.y,la.z],fc(e,Kr,$r,Jr,aa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Si=[new it,new it,new it,new it,new it,new it,new it,new it],Zn=new it,oa=new Bo,Kr=new it,$r=new it,Jr=new it,Yi=new it,ji=new it,xr=new it,Js=new it,aa=new it,la=new it,yr=new it;function fc(n,t,e,r,s){for(let a=0,l=n.length-3;a<=l;a+=3){yr.fromArray(n,a);const c=s.x*Math.abs(yr.x)+s.y*Math.abs(yr.y)+s.z*Math.abs(yr.z),h=t.dot(yr),f=e.dot(yr),d=r.dot(yr);if(Math.max(-Math.max(h,f,d),Math.min(h,f,d))>c)return!1}return!0}const hM=new Bo,Qs=new it,dc=new it;class Th{constructor(t=new it,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const r=this.center;e!==void 0?r.copy(e):hM.setFromPoints(t).getCenter(r);let s=0;for(let a=0,l=t.length;a<l;a++)s=Math.max(s,r.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const r=this.center.distanceToSquared(t);return e.copy(t),r>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qs.subVectors(t,this.center);const e=Qs.lengthSq();if(e>this.radius*this.radius){const r=Math.sqrt(e),s=(r-this.radius)*.5;this.center.addScaledVector(Qs,s/r),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qs.copy(t.center).add(dc)),this.expandByPoint(Qs.copy(t.center).sub(dc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ei=new it,pc=new it,ca=new it,Ki=new it,mc=new it,ua=new it,_c=new it;class fM{constructor(t=new it,e=new it(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const r=e.dot(this.direction);return r<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ei.copy(this.origin).addScaledVector(this.direction,e),Ei.distanceToSquared(t))}distanceSqToSegment(t,e,r,s){pc.copy(t).add(e).multiplyScalar(.5),ca.copy(e).sub(t).normalize(),Ki.copy(this.origin).sub(pc);const a=t.distanceTo(e)*.5,l=-this.direction.dot(ca),c=Ki.dot(this.direction),h=-Ki.dot(ca),f=Ki.lengthSq(),d=Math.abs(1-l*l);let p,_,g,M;if(d>0)if(p=l*h-c,_=l*c-h,M=a*d,p>=0)if(_>=-M)if(_<=M){const E=1/d;p*=E,_*=E,g=p*(p+l*_+2*c)+_*(l*p+_+2*h)+f}else _=a,p=Math.max(0,-(l*_+c)),g=-p*p+_*(_+2*h)+f;else _=-a,p=Math.max(0,-(l*_+c)),g=-p*p+_*(_+2*h)+f;else _<=-M?(p=Math.max(0,-(-l*a+c)),_=p>0?-a:Math.min(Math.max(-a,-h),a),g=-p*p+_*(_+2*h)+f):_<=M?(p=0,_=Math.min(Math.max(-a,-h),a),g=_*(_+2*h)+f):(p=Math.max(0,-(l*a+c)),_=p>0?a:Math.min(Math.max(-a,-h),a),g=-p*p+_*(_+2*h)+f);else _=l>0?-a:a,p=Math.max(0,-(l*_+c)),g=-p*p+_*(_+2*h)+f;return r&&r.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(pc).addScaledVector(ca,_),g}intersectSphere(t,e){Ei.subVectors(t.center,this.origin);const r=Ei.dot(this.direction),s=Ei.dot(Ei)-r*r,a=t.radius*t.radius;if(s>a)return null;const l=Math.sqrt(a-s),c=r-l,h=r+l;return h<0?null:c<0?this.at(h,e):this.at(c,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/e;return r>=0?r:null}intersectPlane(t,e){const r=this.distanceToPlane(t);return r===null?null:this.at(r,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let r,s,a,l,c,h;const f=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,_=this.origin;return f>=0?(r=(t.min.x-_.x)*f,s=(t.max.x-_.x)*f):(r=(t.max.x-_.x)*f,s=(t.min.x-_.x)*f),d>=0?(a=(t.min.y-_.y)*d,l=(t.max.y-_.y)*d):(a=(t.max.y-_.y)*d,l=(t.min.y-_.y)*d),r>l||a>s||((a>r||isNaN(r))&&(r=a),(l<s||isNaN(s))&&(s=l),p>=0?(c=(t.min.z-_.z)*p,h=(t.max.z-_.z)*p):(c=(t.max.z-_.z)*p,h=(t.min.z-_.z)*p),r>h||c>s)||((c>r||r!==r)&&(r=c),(h<s||s!==s)&&(s=h),s<0)?null:this.at(r>=0?r:s,e)}intersectsBox(t){return this.intersectBox(t,Ei)!==null}intersectTriangle(t,e,r,s,a){mc.subVectors(e,t),ua.subVectors(r,t),_c.crossVectors(mc,ua);let l=this.direction.dot(_c),c;if(l>0){if(s)return null;c=1}else if(l<0)c=-1,l=-l;else return null;Ki.subVectors(this.origin,t);const h=c*this.direction.dot(ua.crossVectors(Ki,ua));if(h<0)return null;const f=c*this.direction.dot(mc.cross(Ki));if(f<0||h+f>l)return null;const d=-c*Ki.dot(_c);return d<0?null:this.at(d/l,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(t,e,r,s,a,l,c,h,f,d,p,_,g,M,E,y){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,r,s,a,l,c,h,f,d,p,_,g,M,E,y)}set(t,e,r,s,a,l,c,h,f,d,p,_,g,M,E,y){const v=this.elements;return v[0]=t,v[4]=e,v[8]=r,v[12]=s,v[1]=a,v[5]=l,v[9]=c,v[13]=h,v[2]=f,v[6]=d,v[10]=p,v[14]=_,v[3]=g,v[7]=M,v[11]=E,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(t){const e=this.elements,r=t.elements;return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e[8]=r[8],e[9]=r[9],e[10]=r[10],e[11]=r[11],e[12]=r[12],e[13]=r[13],e[14]=r[14],e[15]=r[15],this}copyPosition(t){const e=this.elements,r=t.elements;return e[12]=r[12],e[13]=r[13],e[14]=r[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,r){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,e,r){return this.set(t.x,e.x,r.x,0,t.y,e.y,r.y,0,t.z,e.z,r.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,r=t.elements,s=1/Qr.setFromMatrixColumn(t,0).length(),a=1/Qr.setFromMatrixColumn(t,1).length(),l=1/Qr.setFromMatrixColumn(t,2).length();return e[0]=r[0]*s,e[1]=r[1]*s,e[2]=r[2]*s,e[3]=0,e[4]=r[4]*a,e[5]=r[5]*a,e[6]=r[6]*a,e[7]=0,e[8]=r[8]*l,e[9]=r[9]*l,e[10]=r[10]*l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,r=t.x,s=t.y,a=t.z,l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s),d=Math.cos(a),p=Math.sin(a);if(t.order==="XYZ"){const _=l*d,g=l*p,M=c*d,E=c*p;e[0]=h*d,e[4]=-h*p,e[8]=f,e[1]=g+M*f,e[5]=_-E*f,e[9]=-c*h,e[2]=E-_*f,e[6]=M+g*f,e[10]=l*h}else if(t.order==="YXZ"){const _=h*d,g=h*p,M=f*d,E=f*p;e[0]=_+E*c,e[4]=M*c-g,e[8]=l*f,e[1]=l*p,e[5]=l*d,e[9]=-c,e[2]=g*c-M,e[6]=E+_*c,e[10]=l*h}else if(t.order==="ZXY"){const _=h*d,g=h*p,M=f*d,E=f*p;e[0]=_-E*c,e[4]=-l*p,e[8]=M+g*c,e[1]=g+M*c,e[5]=l*d,e[9]=E-_*c,e[2]=-l*f,e[6]=c,e[10]=l*h}else if(t.order==="ZYX"){const _=l*d,g=l*p,M=c*d,E=c*p;e[0]=h*d,e[4]=M*f-g,e[8]=_*f+E,e[1]=h*p,e[5]=E*f+_,e[9]=g*f-M,e[2]=-f,e[6]=c*h,e[10]=l*h}else if(t.order==="YZX"){const _=l*h,g=l*f,M=c*h,E=c*f;e[0]=h*d,e[4]=E-_*p,e[8]=M*p+g,e[1]=p,e[5]=l*d,e[9]=-c*d,e[2]=-f*d,e[6]=g*p+M,e[10]=_-E*p}else if(t.order==="XZY"){const _=l*h,g=l*f,M=c*h,E=c*f;e[0]=h*d,e[4]=-p,e[8]=f*d,e[1]=_*p+E,e[5]=l*d,e[9]=g*p-M,e[2]=M*p-g,e[6]=c*d,e[10]=E*p+_}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dM,t,pM)}lookAt(t,e,r){const s=this.elements;return Tn.subVectors(t,e),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),$i.crossVectors(r,Tn),$i.lengthSq()===0&&(Math.abs(r.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),$i.crossVectors(r,Tn)),$i.normalize(),ha.crossVectors(Tn,$i),s[0]=$i.x,s[4]=ha.x,s[8]=Tn.x,s[1]=$i.y,s[5]=ha.y,s[9]=Tn.y,s[2]=$i.z,s[6]=ha.z,s[10]=Tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const r=t.elements,s=e.elements,a=this.elements,l=r[0],c=r[4],h=r[8],f=r[12],d=r[1],p=r[5],_=r[9],g=r[13],M=r[2],E=r[6],y=r[10],v=r[14],D=r[3],I=r[7],A=r[11],V=r[15],N=s[0],B=s[4],H=s[8],R=s[12],P=s[1],F=s[5],$=s[9],Y=s[13],rt=s[2],gt=s[6],J=s[10],pt=s[14],G=s[3],Ct=s[7],mt=s[11],At=s[15];return a[0]=l*N+c*P+h*rt+f*G,a[4]=l*B+c*F+h*gt+f*Ct,a[8]=l*H+c*$+h*J+f*mt,a[12]=l*R+c*Y+h*pt+f*At,a[1]=d*N+p*P+_*rt+g*G,a[5]=d*B+p*F+_*gt+g*Ct,a[9]=d*H+p*$+_*J+g*mt,a[13]=d*R+p*Y+_*pt+g*At,a[2]=M*N+E*P+y*rt+v*G,a[6]=M*B+E*F+y*gt+v*Ct,a[10]=M*H+E*$+y*J+v*mt,a[14]=M*R+E*Y+y*pt+v*At,a[3]=D*N+I*P+A*rt+V*G,a[7]=D*B+I*F+A*gt+V*Ct,a[11]=D*H+I*$+A*J+V*mt,a[15]=D*R+I*Y+A*pt+V*At,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],r=t[4],s=t[8],a=t[12],l=t[1],c=t[5],h=t[9],f=t[13],d=t[2],p=t[6],_=t[10],g=t[14],M=t[3],E=t[7],y=t[11],v=t[15];return M*(+a*h*p-s*f*p-a*c*_+r*f*_+s*c*g-r*h*g)+E*(+e*h*g-e*f*_+a*l*_-s*l*g+s*f*d-a*h*d)+y*(+e*f*p-e*c*g-a*l*p+r*l*g+a*c*d-r*f*d)+v*(-s*c*d-e*h*p+e*c*_+s*l*p-r*l*_+r*h*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,r){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=r),this}invert(){const t=this.elements,e=t[0],r=t[1],s=t[2],a=t[3],l=t[4],c=t[5],h=t[6],f=t[7],d=t[8],p=t[9],_=t[10],g=t[11],M=t[12],E=t[13],y=t[14],v=t[15],D=p*y*f-E*_*f+E*h*g-c*y*g-p*h*v+c*_*v,I=M*_*f-d*y*f-M*h*g+l*y*g+d*h*v-l*_*v,A=d*E*f-M*p*f+M*c*g-l*E*g-d*c*v+l*p*v,V=M*p*h-d*E*h-M*c*_+l*E*_+d*c*y-l*p*y,N=e*D+r*I+s*A+a*V;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/N;return t[0]=D*B,t[1]=(E*_*a-p*y*a-E*s*g+r*y*g+p*s*v-r*_*v)*B,t[2]=(c*y*a-E*h*a+E*s*f-r*y*f-c*s*v+r*h*v)*B,t[3]=(p*h*a-c*_*a-p*s*f+r*_*f+c*s*g-r*h*g)*B,t[4]=I*B,t[5]=(d*y*a-M*_*a+M*s*g-e*y*g-d*s*v+e*_*v)*B,t[6]=(M*h*a-l*y*a-M*s*f+e*y*f+l*s*v-e*h*v)*B,t[7]=(l*_*a-d*h*a+d*s*f-e*_*f-l*s*g+e*h*g)*B,t[8]=A*B,t[9]=(M*p*a-d*E*a-M*r*g+e*E*g+d*r*v-e*p*v)*B,t[10]=(l*E*a-M*c*a+M*r*f-e*E*f-l*r*v+e*c*v)*B,t[11]=(d*c*a-l*p*a-d*r*f+e*p*f+l*r*g-e*c*g)*B,t[12]=V*B,t[13]=(d*E*s-M*p*s+M*r*_-e*E*_-d*r*y+e*p*y)*B,t[14]=(M*c*s-l*E*s-M*r*h+e*E*h+l*r*y-e*c*y)*B,t[15]=(l*p*s-d*c*s+d*r*h-e*p*h-l*r*_+e*c*_)*B,this}scale(t){const e=this.elements,r=t.x,s=t.y,a=t.z;return e[0]*=r,e[4]*=s,e[8]*=a,e[1]*=r,e[5]*=s,e[9]*=a,e[2]*=r,e[6]*=s,e[10]*=a,e[3]*=r,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,r,s))}makeTranslation(t,e,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,r,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,e,-r,0,0,r,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),r=Math.sin(t);return this.set(e,0,r,0,0,1,0,0,-r,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),r=Math.sin(t);return this.set(e,-r,0,0,r,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const r=Math.cos(e),s=Math.sin(e),a=1-r,l=t.x,c=t.y,h=t.z,f=a*l,d=a*c;return this.set(f*l+r,f*c-s*h,f*h+s*c,0,f*c+s*h,d*c+r,d*h-s*l,0,f*h-s*c,d*h+s*l,a*h*h+r,0,0,0,0,1),this}makeScale(t,e,r){return this.set(t,0,0,0,0,e,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,e,r,s,a,l){return this.set(1,r,a,0,t,1,l,0,e,s,1,0,0,0,0,1),this}compose(t,e,r){const s=this.elements,a=e._x,l=e._y,c=e._z,h=e._w,f=a+a,d=l+l,p=c+c,_=a*f,g=a*d,M=a*p,E=l*d,y=l*p,v=c*p,D=h*f,I=h*d,A=h*p,V=r.x,N=r.y,B=r.z;return s[0]=(1-(E+v))*V,s[1]=(g+A)*V,s[2]=(M-I)*V,s[3]=0,s[4]=(g-A)*N,s[5]=(1-(_+v))*N,s[6]=(y+D)*N,s[7]=0,s[8]=(M+I)*B,s[9]=(y-D)*B,s[10]=(1-(_+E))*B,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,r){const s=this.elements;let a=Qr.set(s[0],s[1],s[2]).length();const l=Qr.set(s[4],s[5],s[6]).length(),c=Qr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],qn.copy(this);const f=1/a,d=1/l,p=1/c;return qn.elements[0]*=f,qn.elements[1]*=f,qn.elements[2]*=f,qn.elements[4]*=d,qn.elements[5]*=d,qn.elements[6]*=d,qn.elements[8]*=p,qn.elements[9]*=p,qn.elements[10]*=p,e.setFromRotationMatrix(qn),r.x=a,r.y=l,r.z=c,this}makePerspective(t,e,r,s,a,l,c=Oi){const h=this.elements,f=2*a/(e-t),d=2*a/(r-s),p=(e+t)/(e-t),_=(r+s)/(r-s);let g,M;if(c===Oi)g=-(l+a)/(l-a),M=-2*l*a/(l-a);else if(c===Ja)g=-l/(l-a),M=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=f,h[4]=0,h[8]=p,h[12]=0,h[1]=0,h[5]=d,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=g,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,r,s,a,l,c=Oi){const h=this.elements,f=1/(e-t),d=1/(r-s),p=1/(l-a),_=(e+t)*f,g=(r+s)*d;let M,E;if(c===Oi)M=(l+a)*p,E=-2*p;else if(c===Ja)M=a*p,E=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*f,h[4]=0,h[8]=0,h[12]=-_,h[1]=0,h[5]=2*d,h[9]=0,h[13]=-g,h[2]=0,h[6]=0,h[10]=E,h[14]=-M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,r=t.elements;for(let s=0;s<16;s++)if(e[s]!==r[s])return!1;return!0}fromArray(t,e=0){for(let r=0;r<16;r++)this.elements[r]=t[r+e];return this}toArray(t=[],e=0){const r=this.elements;return t[e]=r[0],t[e+1]=r[1],t[e+2]=r[2],t[e+3]=r[3],t[e+4]=r[4],t[e+5]=r[5],t[e+6]=r[6],t[e+7]=r[7],t[e+8]=r[8],t[e+9]=r[9],t[e+10]=r[10],t[e+11]=r[11],t[e+12]=r[12],t[e+13]=r[13],t[e+14]=r[14],t[e+15]=r[15],t}}const Qr=new it,qn=new Ve,dM=new it(0,0,0),pM=new it(1,1,1),$i=new it,ha=new it,Tn=new it,Sd=new Ve,Ed=new hr;class ei{constructor(t=0,e=0,r=0,s=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,r,s=this._order){return this._x=t,this._y=e,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,r=!0){const s=t.elements,a=s[0],l=s[4],c=s[8],h=s[1],f=s[5],d=s[9],p=s[2],_=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(me(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(_,f),this._z=0);break;case"YXZ":this._x=Math.asin(-me(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(me(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(_,g),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-d,f),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(_,f),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,r){return Sd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sd,e,r)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ed.setFromEuler(this),this.setFromQuaternion(Ed,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class Qm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let mM=0;const bd=new it,ts=new hr,bi=new Ve,fa=new it,to=new it,_M=new it,gM=new hr,Td=new it(1,0,0),wd=new it(0,1,0),Ad=new it(0,0,1),Pd={type:"added"},vM={type:"removed"},es={type:"childadded",child:null},gc={type:"childremoved",child:null};class In extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=Us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const t=new it,e=new ei,r=new hr,s=new it(1,1,1);function a(){r.setFromEuler(e,!1)}function l(){e.setFromQuaternion(r,void 0,!1)}e._onChange(a),r._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new ce}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.multiply(ts),this}rotateOnWorldAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.premultiply(ts),this}rotateX(t){return this.rotateOnAxis(Td,t)}rotateY(t){return this.rotateOnAxis(wd,t)}rotateZ(t){return this.rotateOnAxis(Ad,t)}translateOnAxis(t,e){return bd.copy(t).applyQuaternion(this.quaternion),this.position.add(bd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Td,t)}translateY(t){return this.translateOnAxis(wd,t)}translateZ(t){return this.translateOnAxis(Ad,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(t,e,r){t.isVector3?fa.copy(t):fa.set(t,e,r);const s=this.parent;this.updateWorldMatrix(!0,!1),to.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(to,fa,this.up):bi.lookAt(fa,to,this.up),this.quaternion.setFromRotationMatrix(bi),s&&(bi.extractRotation(s.matrixWorld),ts.setFromRotationMatrix(bi),this.quaternion.premultiply(ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Pd),es.child=t,this.dispatchEvent(es),es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vM),gc.child=t,this.dispatchEvent(gc),gc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Pd),es.child=t,this.dispatchEvent(es),es.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let r=0,s=this.children.length;r<s;r++){const l=this.children[r].getObjectByProperty(t,e);if(l!==void 0)return l}}getObjectsByProperty(t,e,r=[]){this[t]===e&&r.push(this);const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].getObjectsByProperty(t,e,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,t,_M),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,gM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let r=0,s=e.length;r<s;r++)e[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let r=0,s=e.length;r<s;r++)e[r].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let r=0,s=e.length;r<s;r++)e[r].updateMatrixWorld(t)}updateWorldMatrix(t,e){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",r={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let f=0,d=h.length;f<d;f++){const p=h[f];a(t.shapes,p)}else a(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,f=this.material.length;h<f;h++)c.push(a(t.materials,this.material[h]));s.material=c}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];s.animations.push(a(t.animations,h))}}if(e){const c=l(t.geometries),h=l(t.materials),f=l(t.textures),d=l(t.images),p=l(t.shapes),_=l(t.skeletons),g=l(t.animations),M=l(t.nodes);c.length>0&&(r.geometries=c),h.length>0&&(r.materials=h),f.length>0&&(r.textures=f),d.length>0&&(r.images=d),p.length>0&&(r.shapes=p),_.length>0&&(r.skeletons=_),g.length>0&&(r.animations=g),M.length>0&&(r.nodes=M)}return r.object=s,r;function l(c){const h=[];for(const f in c){const d=c[f];delete d.metadata,h.push(d)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let r=0;r<t.children.length;r++){const s=t.children[r];this.add(s.clone())}return this}}In.DEFAULT_UP=new it(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new it,Ti=new it,vc=new it,wi=new it,ns=new it,is=new it,Cd=new it,xc=new it,yc=new it,Mc=new it,Sc=new Be,Ec=new Be,bc=new Be;class Kn{constructor(t=new it,e=new it,r=new it){this.a=t,this.b=e,this.c=r}static getNormal(t,e,r,s){s.subVectors(r,e),Yn.subVectors(t,e),s.cross(Yn);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,r,s,a){Yn.subVectors(s,e),Ti.subVectors(r,e),vc.subVectors(t,e);const l=Yn.dot(Yn),c=Yn.dot(Ti),h=Yn.dot(vc),f=Ti.dot(Ti),d=Ti.dot(vc),p=l*f-c*c;if(p===0)return a.set(0,0,0),null;const _=1/p,g=(f*h-c*d)*_,M=(l*d-c*h)*_;return a.set(1-g-M,M,g)}static containsPoint(t,e,r,s){return this.getBarycoord(t,e,r,s,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(t,e,r,s,a,l,c,h){return this.getBarycoord(t,e,r,s,wi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,wi.x),h.addScaledVector(l,wi.y),h.addScaledVector(c,wi.z),h)}static getInterpolatedAttribute(t,e,r,s,a,l){return Sc.setScalar(0),Ec.setScalar(0),bc.setScalar(0),Sc.fromBufferAttribute(t,e),Ec.fromBufferAttribute(t,r),bc.fromBufferAttribute(t,s),l.setScalar(0),l.addScaledVector(Sc,a.x),l.addScaledVector(Ec,a.y),l.addScaledVector(bc,a.z),l}static isFrontFacing(t,e,r,s){return Yn.subVectors(r,e),Ti.subVectors(t,e),Yn.cross(Ti).dot(s)<0}set(t,e,r){return this.a.copy(t),this.b.copy(e),this.c.copy(r),this}setFromPointsAndIndices(t,e,r,s){return this.a.copy(t[e]),this.b.copy(t[r]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,r,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),Yn.cross(Ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Kn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Kn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,r,s,a){return Kn.getInterpolation(t,this.a,this.b,this.c,e,r,s,a)}containsPoint(t){return Kn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Kn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const r=this.a,s=this.b,a=this.c;let l,c;ns.subVectors(s,r),is.subVectors(a,r),xc.subVectors(t,r);const h=ns.dot(xc),f=is.dot(xc);if(h<=0&&f<=0)return e.copy(r);yc.subVectors(t,s);const d=ns.dot(yc),p=is.dot(yc);if(d>=0&&p<=d)return e.copy(s);const _=h*p-d*f;if(_<=0&&h>=0&&d<=0)return l=h/(h-d),e.copy(r).addScaledVector(ns,l);Mc.subVectors(t,a);const g=ns.dot(Mc),M=is.dot(Mc);if(M>=0&&g<=M)return e.copy(a);const E=g*f-h*M;if(E<=0&&f>=0&&M<=0)return c=f/(f-M),e.copy(r).addScaledVector(is,c);const y=d*M-g*p;if(y<=0&&p-d>=0&&g-M>=0)return Cd.subVectors(a,s),c=(p-d)/(p-d+(g-M)),e.copy(s).addScaledVector(Cd,c);const v=1/(y+E+_);return l=E*v,c=_*v,e.copy(r).addScaledVector(ns,l).addScaledVector(is,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const t_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},da={h:0,s:0,l:0};function Tc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Te{constructor(t,e,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,r)}set(t,e,r){if(e===void 0&&r===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Bn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.toWorkingColorSpace(this,e),this}setRGB(t,e,r,s=ve.workingColorSpace){return this.r=t,this.g=e,this.b=r,ve.toWorkingColorSpace(this,s),this}setHSL(t,e,r,s=ve.workingColorSpace){if(t=Eh(t,1),e=me(e,0,1),r=me(r,0,1),e===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+e):r+e-r*e,l=2*r-a;this.r=Tc(l,a,t+1/3),this.g=Tc(l,a,t),this.b=Tc(l,a,t-1/3)}return ve.toWorkingColorSpace(this,s),this}setStyle(t,e=Bn){function r(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const l=s[1],c=s[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(l===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Bn){const r=t_[t.toLowerCase()];return r!==void 0?this.setHex(r,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}copyLinearToSRGB(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Bn){return ve.fromWorkingColorSpace(sn.copy(this),t),Math.round(me(sn.r*255,0,255))*65536+Math.round(me(sn.g*255,0,255))*256+Math.round(me(sn.b*255,0,255))}getHexString(t=Bn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ve.workingColorSpace){ve.fromWorkingColorSpace(sn.copy(this),e);const r=sn.r,s=sn.g,a=sn.b,l=Math.max(r,s,a),c=Math.min(r,s,a);let h,f;const d=(c+l)/2;if(c===l)h=0,f=0;else{const p=l-c;switch(f=d<=.5?p/(l+c):p/(2-l-c),l){case r:h=(s-a)/p+(s<a?6:0);break;case s:h=(a-r)/p+2;break;case a:h=(r-s)/p+4;break}h/=6}return t.h=h,t.s=f,t.l=d,t}getRGB(t,e=ve.workingColorSpace){return ve.fromWorkingColorSpace(sn.copy(this),e),t.r=sn.r,t.g=sn.g,t.b=sn.b,t}getStyle(t=Bn){ve.fromWorkingColorSpace(sn.copy(this),t);const e=sn.r,r=sn.g,s=sn.b;return t!==Bn?`color(${t} ${e.toFixed(3)} ${r.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(r*255)},${Math.round(s*255)})`}offsetHSL(t,e,r){return this.getHSL(Ji),this.setHSL(Ji.h+t,Ji.s+e,Ji.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,r){return this.r=t.r+(e.r-t.r)*r,this.g=t.g+(e.g-t.g)*r,this.b=t.b+(e.b-t.b)*r,this}lerpHSL(t,e){this.getHSL(Ji),t.getHSL(da);const r=vo(Ji.h,da.h,e),s=vo(Ji.s,da.s,e),a=vo(Ji.l,da.l,e);return this.setHSL(r,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,r=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*r+a[6]*s,this.g=a[1]*e+a[4]*r+a[7]*s,this.b=a[2]*e+a[5]*r+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new Te;Te.NAMES=t_;let xM=0;class _l extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=Us(),this.name="",this.type="Material",this.blending=Es,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nu,this.blendDst=iu,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const r=t[e];if(r===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(r):s&&s.isVector3&&r&&r.isVector3?s.copy(r):this[e]=r}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(r.blending=this.blending),this.side!==cr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==nu&&(r.blendSrc=this.blendSrc),this.blendDst!==iu&&(r.blendDst=this.blendDst),this.blendEquation!==Pr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pd&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Yr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Yr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function s(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}if(e){const a=s(t.textures),l=s(t.images);a.length>0&&(r.textures=a),l.length>0&&(r.images=l)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let r=null;if(e!==null){const s=e.length;r=new Array(s);for(let a=0;a!==s;++a)r[a]=e[a].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class xo extends _l{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=Bm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const He=new it,pa=new we;let yM=0;class hi{constructor(t,e,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yM++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=r,this.usage=md,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,r){t*=this.itemSize,r*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[r+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,r=this.count;e<r;e++)pa.fromBufferAttribute(this,e),pa.applyMatrix3(t),this.setXY(e,pa.x,pa.y);else if(this.itemSize===3)for(let e=0,r=this.count;e<r;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,r=this.count;e<r;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,r=this.count;e<r;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,r=this.count;e<r;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let r=this.array[t*this.itemSize+e];return this.normalized&&(r=fs(r,this.array)),r}setComponent(t,e,r){return this.normalized&&(r=pn(r,this.array)),this.array[t*this.itemSize+e]=r,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fs(e,this.array)),e}setX(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fs(e,this.array)),e}setY(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fs(e,this.array)),e}setW(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,r){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),r=pn(r,this.array)),this.array[t+0]=e,this.array[t+1]=r,this}setXYZ(t,e,r,s){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),r=pn(r,this.array),s=pn(s,this.array)),this.array[t+0]=e,this.array[t+1]=r,this.array[t+2]=s,this}setXYZW(t,e,r,s,a){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),r=pn(r,this.array),s=pn(s,this.array),a=pn(a,this.array)),this.array[t+0]=e,this.array[t+1]=r,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==md&&(t.usage=this.usage),t}}class e_ extends hi{constructor(t,e,r){super(new Uint16Array(t),e,r)}}class n_ extends hi{constructor(t,e,r){super(new Uint32Array(t),e,r)}}class Dn extends hi{constructor(t,e,r){super(new Float32Array(t),e,r)}}let MM=0;const Nn=new Ve,wc=new In,rs=new it,wn=new Bo,eo=new Bo,Je=new it;class Gi extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=Us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($m(t)?n_:e_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,r=0){this.groups.push({start:t,count:e,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new ce().getNormalMatrix(t);r.applyNormalMatrix(a),r.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Nn.makeRotationFromQuaternion(t),this.applyMatrix4(Nn),this}rotateX(t){return Nn.makeRotationX(t),this.applyMatrix4(Nn),this}rotateY(t){return Nn.makeRotationY(t),this.applyMatrix4(Nn),this}rotateZ(t){return Nn.makeRotationZ(t),this.applyMatrix4(Nn),this}translate(t,e,r){return Nn.makeTranslation(t,e,r),this.applyMatrix4(Nn),this}scale(t,e,r){return Nn.makeScale(t,e,r),this.applyMatrix4(Nn),this}lookAt(t){return wc.lookAt(t),wc.updateMatrix(),this.applyMatrix4(wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const r=[];for(let s=0,a=t.length;s<a;s++){const l=t[s];r.push(l.x,l.y,l.z||0)}this.setAttribute("position",new Dn(r,3))}else{const r=Math.min(t.length,e.count);for(let s=0;s<r;s++){const a=t[s];e.setXYZ(s,a.x,a.y,a.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let r=0,s=e.length;r<s;r++){const a=e[r];wn.setFromBufferAttribute(a),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Th);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(t){const r=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),e)for(let a=0,l=e.length;a<l;a++){const c=e[a];eo.setFromBufferAttribute(c),this.morphTargetsRelative?(Je.addVectors(wn.min,eo.min),wn.expandByPoint(Je),Je.addVectors(wn.max,eo.max),wn.expandByPoint(Je)):(wn.expandByPoint(eo.min),wn.expandByPoint(eo.max))}wn.getCenter(r);let s=0;for(let a=0,l=t.count;a<l;a++)Je.fromBufferAttribute(t,a),s=Math.max(s,r.distanceToSquared(Je));if(e)for(let a=0,l=e.length;a<l;a++){const c=e[a],h=this.morphTargetsRelative;for(let f=0,d=c.count;f<d;f++)Je.fromBufferAttribute(c,f),h&&(rs.fromBufferAttribute(t,f),Je.add(rs)),s=Math.max(s,r.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.position,s=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*r.count),4));const l=this.getAttribute("tangent"),c=[],h=[];for(let H=0;H<r.count;H++)c[H]=new it,h[H]=new it;const f=new it,d=new it,p=new it,_=new we,g=new we,M=new we,E=new it,y=new it;function v(H,R,P){f.fromBufferAttribute(r,H),d.fromBufferAttribute(r,R),p.fromBufferAttribute(r,P),_.fromBufferAttribute(a,H),g.fromBufferAttribute(a,R),M.fromBufferAttribute(a,P),d.sub(f),p.sub(f),g.sub(_),M.sub(_);const F=1/(g.x*M.y-M.x*g.y);isFinite(F)&&(E.copy(d).multiplyScalar(M.y).addScaledVector(p,-g.y).multiplyScalar(F),y.copy(p).multiplyScalar(g.x).addScaledVector(d,-M.x).multiplyScalar(F),c[H].add(E),c[R].add(E),c[P].add(E),h[H].add(y),h[R].add(y),h[P].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let H=0,R=D.length;H<R;++H){const P=D[H],F=P.start,$=P.count;for(let Y=F,rt=F+$;Y<rt;Y+=3)v(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const I=new it,A=new it,V=new it,N=new it;function B(H){V.fromBufferAttribute(s,H),N.copy(V);const R=c[H];I.copy(R),I.sub(V.multiplyScalar(V.dot(R))).normalize(),A.crossVectors(N,R);const F=A.dot(h[H])<0?-1:1;l.setXYZW(H,I.x,I.y,I.z,F)}for(let H=0,R=D.length;H<R;++H){const P=D[H],F=P.start,$=P.count;for(let Y=F,rt=F+$;Y<rt;Y+=3)B(t.getX(Y+0)),B(t.getX(Y+1)),B(t.getX(Y+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new hi(new Float32Array(e.count*3),3),this.setAttribute("normal",r);else for(let _=0,g=r.count;_<g;_++)r.setXYZ(_,0,0,0);const s=new it,a=new it,l=new it,c=new it,h=new it,f=new it,d=new it,p=new it;if(t)for(let _=0,g=t.count;_<g;_+=3){const M=t.getX(_+0),E=t.getX(_+1),y=t.getX(_+2);s.fromBufferAttribute(e,M),a.fromBufferAttribute(e,E),l.fromBufferAttribute(e,y),d.subVectors(l,a),p.subVectors(s,a),d.cross(p),c.fromBufferAttribute(r,M),h.fromBufferAttribute(r,E),f.fromBufferAttribute(r,y),c.add(d),h.add(d),f.add(d),r.setXYZ(M,c.x,c.y,c.z),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(y,f.x,f.y,f.z)}else for(let _=0,g=e.count;_<g;_+=3)s.fromBufferAttribute(e,_+0),a.fromBufferAttribute(e,_+1),l.fromBufferAttribute(e,_+2),d.subVectors(l,a),p.subVectors(s,a),d.cross(p),r.setXYZ(_+0,d.x,d.y,d.z),r.setXYZ(_+1,d.x,d.y,d.z),r.setXYZ(_+2,d.x,d.y,d.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,r=t.count;e<r;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(c,h){const f=c.array,d=c.itemSize,p=c.normalized,_=new f.constructor(h.length*d);let g=0,M=0;for(let E=0,y=h.length;E<y;E++){c.isInterleavedBufferAttribute?g=h[E]*c.data.stride+c.offset:g=h[E]*d;for(let v=0;v<d;v++)_[M++]=f[g++]}return new hi(_,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Gi,r=this.index.array,s=this.attributes;for(const c in s){const h=s[c],f=t(h,r);e.setAttribute(c,f)}const a=this.morphAttributes;for(const c in a){const h=[],f=a[c];for(let d=0,p=f.length;d<p;d++){const _=f[d],g=t(_,r);h.push(g)}e.morphAttributes[c]=h}e.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,h=l.length;c<h;c++){const f=l[c];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(t[f]=h[f]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const r=this.attributes;for(const h in r){const f=r[h];t.data.attributes[h]=f.toJSON(t.data)}const s={};let a=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],d=[];for(let p=0,_=f.length;p<_;p++){const g=f[p];d.push(g.toJSON(t.data))}d.length>0&&(s[h]=d,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(t.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const s=t.attributes;for(const f in s){const d=s[f];this.setAttribute(f,d.clone(e))}const a=t.morphAttributes;for(const f in a){const d=[],p=a[f];for(let _=0,g=p.length;_<g;_++)d.push(p[_].clone(e));this.morphAttributes[f]=d}this.morphTargetsRelative=t.morphTargetsRelative;const l=t.groups;for(let f=0,d=l.length;f<d;f++){const p=l[f];this.addGroup(p.start,p.count,p.materialIndex)}const c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rd=new Ve,Mr=new fM,ma=new Th,Ld=new it,_a=new it,ga=new it,va=new it,Ac=new it,xa=new it,Id=new it,ya=new it;class Ln extends In{constructor(t=new Gi,e=new xo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const s=e[r[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=s.length;a<l;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(t,e){const r=this.geometry,s=r.attributes.position,a=r.morphAttributes.position,l=r.morphTargetsRelative;e.fromBufferAttribute(s,t);const c=this.morphTargetInfluences;if(a&&c){xa.set(0,0,0);for(let h=0,f=a.length;h<f;h++){const d=c[h],p=a[h];d!==0&&(Ac.fromBufferAttribute(p,t),l?xa.addScaledVector(Ac,d):xa.addScaledVector(Ac.sub(e),d))}e.add(xa)}return e}raycast(t,e){const r=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ma.copy(r.boundingSphere),ma.applyMatrix4(a),Mr.copy(t.ray).recast(t.near),!(ma.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(ma,Ld)===null||Mr.origin.distanceToSquared(Ld)>(t.far-t.near)**2))&&(Rd.copy(a).invert(),Mr.copy(t.ray).applyMatrix4(Rd),!(r.boundingBox!==null&&Mr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,e,Mr)))}_computeIntersections(t,e,r){let s;const a=this.geometry,l=this.material,c=a.index,h=a.attributes.position,f=a.attributes.uv,d=a.attributes.uv1,p=a.attributes.normal,_=a.groups,g=a.drawRange;if(c!==null)if(Array.isArray(l))for(let M=0,E=_.length;M<E;M++){const y=_[M],v=l[y.materialIndex],D=Math.max(y.start,g.start),I=Math.min(c.count,Math.min(y.start+y.count,g.start+g.count));for(let A=D,V=I;A<V;A+=3){const N=c.getX(A),B=c.getX(A+1),H=c.getX(A+2);s=Ma(this,v,t,r,f,d,p,N,B,H),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{const M=Math.max(0,g.start),E=Math.min(c.count,g.start+g.count);for(let y=M,v=E;y<v;y+=3){const D=c.getX(y),I=c.getX(y+1),A=c.getX(y+2);s=Ma(this,l,t,r,f,d,p,D,I,A),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}else if(h!==void 0)if(Array.isArray(l))for(let M=0,E=_.length;M<E;M++){const y=_[M],v=l[y.materialIndex],D=Math.max(y.start,g.start),I=Math.min(h.count,Math.min(y.start+y.count,g.start+g.count));for(let A=D,V=I;A<V;A+=3){const N=A,B=A+1,H=A+2;s=Ma(this,v,t,r,f,d,p,N,B,H),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{const M=Math.max(0,g.start),E=Math.min(h.count,g.start+g.count);for(let y=M,v=E;y<v;y+=3){const D=y,I=y+1,A=y+2;s=Ma(this,l,t,r,f,d,p,D,I,A),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}}}function SM(n,t,e,r,s,a,l,c){let h;if(t.side===En?h=r.intersectTriangle(l,a,s,!0,c):h=r.intersectTriangle(s,a,l,t.side===cr,c),h===null)return null;ya.copy(c),ya.applyMatrix4(n.matrixWorld);const f=e.ray.origin.distanceTo(ya);return f<e.near||f>e.far?null:{distance:f,point:ya.clone(),object:n}}function Ma(n,t,e,r,s,a,l,c,h,f){n.getVertexPosition(c,_a),n.getVertexPosition(h,ga),n.getVertexPosition(f,va);const d=SM(n,t,e,r,_a,ga,va,Id);if(d){const p=new it;Kn.getBarycoord(Id,_a,ga,va,p),s&&(d.uv=Kn.getInterpolatedAttribute(s,c,h,f,p,new we)),a&&(d.uv1=Kn.getInterpolatedAttribute(a,c,h,f,p,new we)),l&&(d.normal=Kn.getInterpolatedAttribute(l,c,h,f,p,new it),d.normal.dot(r.direction)>0&&d.normal.multiplyScalar(-1));const _={a:c,b:h,c:f,normal:new it,materialIndex:0};Kn.getNormal(_a,ga,va,_.normal),d.face=_,d.barycoord=p}return d}class Ns extends Gi{constructor(t=1,e=1,r=1,s=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:r,widthSegments:s,heightSegments:a,depthSegments:l};const c=this;s=Math.floor(s),a=Math.floor(a),l=Math.floor(l);const h=[],f=[],d=[],p=[];let _=0,g=0;M("z","y","x",-1,-1,r,e,t,l,a,0),M("z","y","x",1,-1,r,e,-t,l,a,1),M("x","z","y",1,1,t,r,e,s,l,2),M("x","z","y",1,-1,t,r,-e,s,l,3),M("x","y","z",1,-1,t,e,r,s,a,4),M("x","y","z",-1,-1,t,e,-r,s,a,5),this.setIndex(h),this.setAttribute("position",new Dn(f,3)),this.setAttribute("normal",new Dn(d,3)),this.setAttribute("uv",new Dn(p,2));function M(E,y,v,D,I,A,V,N,B,H,R){const P=A/B,F=V/H,$=A/2,Y=V/2,rt=N/2,gt=B+1,J=H+1;let pt=0,G=0;const Ct=new it;for(let mt=0;mt<J;mt++){const At=mt*F-Y;for(let kt=0;kt<gt;kt++){const Jt=kt*P-$;Ct[E]=Jt*D,Ct[y]=At*I,Ct[v]=rt,f.push(Ct.x,Ct.y,Ct.z),Ct[E]=0,Ct[y]=0,Ct[v]=N>0?1:-1,d.push(Ct.x,Ct.y,Ct.z),p.push(kt/B),p.push(1-mt/H),pt+=1}}for(let mt=0;mt<H;mt++)for(let At=0;At<B;At++){const kt=_+At+gt*mt,Jt=_+At+gt*(mt+1),lt=_+(At+1)+gt*(mt+1),_t=_+(At+1)+gt*mt;h.push(kt,Jt,_t),h.push(Jt,lt,_t),G+=6}c.addGroup(g,G,R),g+=G,_+=pt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ns(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ds(n){const t={};for(const e in n){t[e]={};for(const r in n[e]){const s=n[e][r];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][r]=null):t[e][r]=s.clone():Array.isArray(s)?t[e][r]=s.slice():t[e][r]=s}}return t}function mn(n){const t={};for(let e=0;e<n.length;e++){const r=Ds(n[e]);for(const s in r)t[s]=r[s]}return t}function EM(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function i_(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ve.workingColorSpace}const bM={clone:Ds,merge:mn};var TM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ur extends _l{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=TM,this.fragmentShader=wM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ds(t.uniforms),this.uniformsGroups=EM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const l=this.uniforms[s].value;l&&l.isTexture?e.uniforms[s]={type:"t",value:l.toJSON(t).uuid}:l&&l.isColor?e.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?e.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?e.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?e.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?e.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?e.uniforms[s]={type:"m4",value:l.toArray()}:e.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const r={};for(const s in this.extensions)this.extensions[s]===!0&&(r[s]=!0);return Object.keys(r).length>0&&(e.extensions=r),e}}class r_ extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=Oi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new it,Dd=new we,Od=new we;class zn extends r_{constructor(t=50,e=1,r=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Do*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(go*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Do*2*Math.atan(Math.tan(go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,r){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qi.x,Qi.y).multiplyScalar(-t/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Qi.x,Qi.y).multiplyScalar(-t/Qi.z)}getViewSize(t,e){return this.getViewBounds(t,Dd,Od),e.subVectors(Od,Dd)}setViewOffset(t,e,r,s,a,l){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=r,this.view.offsetY=s,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(go*.5*this.fov)/this.zoom,r=2*e,s=this.aspect*r,a=-.5*s;const l=this.view;if(this.view!==null&&this.view.enabled){const h=l.fullWidth,f=l.fullHeight;a+=l.offsetX*s/h,e-=l.offsetY*r/f,s*=l.width/h,r*=l.height/f}const c=this.filmOffset;c!==0&&(a+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ss=-90,os=1;class AM extends In{constructor(t,e,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new zn(ss,os,t,e);s.layers=this.layers,this.add(s);const a=new zn(ss,os,t,e);a.layers=this.layers,this.add(a);const l=new zn(ss,os,t,e);l.layers=this.layers,this.add(l);const c=new zn(ss,os,t,e);c.layers=this.layers,this.add(c);const h=new zn(ss,os,t,e);h.layers=this.layers,this.add(h);const f=new zn(ss,os,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[r,s,a,l,c,h]=e;for(const f of e)this.remove(f);if(t===Oi)r.up.set(0,1,0),r.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===Ja)r.up.set(0,-1,0),r.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,l,c,h,f,d]=this.children,p=t.getRenderTarget(),_=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,s),t.render(e,a),t.setRenderTarget(r,1,s),t.render(e,l),t.setRenderTarget(r,2,s),t.render(e,c),t.setRenderTarget(r,3,s),t.render(e,h),t.setRenderTarget(r,4,s),t.render(e,f),r.texture.generateMipmaps=E,t.setRenderTarget(r,5,s),t.render(e,d),t.setRenderTarget(p,_,g),t.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class s_ extends xn{constructor(t=[],e=Rs,r,s,a,l,c,h,f,d){super(t,e,r,s,a,l,c,h,f,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class PM extends Fr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},s=[r,r,r,r,r,r];this.texture=new s_(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:kn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ns(5,5,5),a=new ur({name:"CubemapFromEquirect",uniforms:Ds(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:En,blending:or});a.uniforms.tEquirect.value=e;const l=new Ln(s,a),c=e.minFilter;return e.minFilter===Ir&&(e.minFilter=kn),new AM(1,10,this).update(t,l),e.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(t,e=!0,r=!0,s=!0){const a=t.getRenderTarget();for(let l=0;l<6;l++)t.setRenderTarget(this,l),t.clear(e,r,s);t.setRenderTarget(a)}}class so extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const CM={type:"move"};class Pc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new so,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new so,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new so,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const r of t.hand.values())this._getHandJoint(e,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,r){let s=null,a=null,l=null;const c=this._targetRay,h=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){l=!0;for(const E of t.hand.values()){const y=e.getJointPose(E,r),v=this._getHandJoint(f,E);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const d=f.joints["index-finger-tip"],p=f.joints["thumb-tip"],_=d.position.distanceTo(p.position),g=.02,M=.005;f.inputState.pinching&&_>g+M?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&_<=g-M&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,r),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(s=e.getPose(t.targetRaySpace,r),s===null&&a!==null&&(s=a),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(CM)))}return c!==null&&(c.visible=s!==null),h!==null&&(h.visible=a!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const r=new so;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[e.jointName]=r,t.add(r)}return t.joints[e.jointName]}}class o_ extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Cc=new it,RM=new it,LM=new ce;class wr{constructor(t=new it(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,r,s){return this.normal.set(t,e,r),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,r){const s=Cc.subVectors(r,e).cross(RM.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const r=t.delta(Cc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:e.copy(t.start).addScaledVector(r,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return e<0&&r>0||r<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const r=e||LM.getNormalMatrix(t),s=this.coplanarPoint(Cc).applyMatrix4(t),a=this.normal.applyMatrix3(r).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sr=new Th,Sa=new it;class a_{constructor(t=new wr,e=new wr,r=new wr,s=new wr,a=new wr,l=new wr){this.planes=[t,e,r,s,a,l]}set(t,e,r,s,a,l){const c=this.planes;return c[0].copy(t),c[1].copy(e),c[2].copy(r),c[3].copy(s),c[4].copy(a),c[5].copy(l),this}copy(t){const e=this.planes;for(let r=0;r<6;r++)e[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,e=Oi){const r=this.planes,s=t.elements,a=s[0],l=s[1],c=s[2],h=s[3],f=s[4],d=s[5],p=s[6],_=s[7],g=s[8],M=s[9],E=s[10],y=s[11],v=s[12],D=s[13],I=s[14],A=s[15];if(r[0].setComponents(h-a,_-f,y-g,A-v).normalize(),r[1].setComponents(h+a,_+f,y+g,A+v).normalize(),r[2].setComponents(h+l,_+d,y+M,A+D).normalize(),r[3].setComponents(h-l,_-d,y-M,A-D).normalize(),r[4].setComponents(h-c,_-p,y-E,A-I).normalize(),e===Oi)r[5].setComponents(h+c,_+p,y+E,A+I).normalize();else if(e===Ja)r[5].setComponents(c,p,E,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Sr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(t){return Sr.center.set(0,0,0),Sr.radius=.7071067811865476,Sr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(t){const e=this.planes,r=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(r)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let r=0;r<6;r++){const s=e[r];if(Sa.x=s.normal.x>0?t.max.x:t.min.x,Sa.y=s.normal.y>0?t.max.y:t.min.y,Sa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let r=0;r<6;r++)if(e[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class IM extends xn{constructor(t,e,r,s,a=kn,l=kn,c,h,f){super(t,e,r,s,a,l,c,h,f),this.isVideoTexture=!0,this.generateMipmaps=!1;const d=this;function p(){d.needsUpdate=!0,t.requestVideoFrameCallback(p)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(p)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class l_ extends xn{constructor(t,e,r=Nr,s,a,l,c=Qn,h=Qn,f,d=Lo){if(d!==Lo&&d!==Io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,s,a,l,c,h,d,r,f),this.isDepthTexture=!0,this.image={width:t,height:e},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new bh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class gl extends Gi{constructor(t=1,e=1,r=1,s=32,a=1,l=!1,c=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:r,radialSegments:s,heightSegments:a,openEnded:l,thetaStart:c,thetaLength:h};const f=this;s=Math.floor(s),a=Math.floor(a);const d=[],p=[],_=[],g=[];let M=0;const E=[],y=r/2;let v=0;D(),l===!1&&(t>0&&I(!0),e>0&&I(!1)),this.setIndex(d),this.setAttribute("position",new Dn(p,3)),this.setAttribute("normal",new Dn(_,3)),this.setAttribute("uv",new Dn(g,2));function D(){const A=new it,V=new it;let N=0;const B=(e-t)/r;for(let H=0;H<=a;H++){const R=[],P=H/a,F=P*(e-t)+t;for(let $=0;$<=s;$++){const Y=$/s,rt=Y*h+c,gt=Math.sin(rt),J=Math.cos(rt);V.x=F*gt,V.y=-P*r+y,V.z=F*J,p.push(V.x,V.y,V.z),A.set(gt,B,J).normalize(),_.push(A.x,A.y,A.z),g.push(Y,1-P),R.push(M++)}E.push(R)}for(let H=0;H<s;H++)for(let R=0;R<a;R++){const P=E[R][H],F=E[R+1][H],$=E[R+1][H+1],Y=E[R][H+1];(t>0||R!==0)&&(d.push(P,F,Y),N+=3),(e>0||R!==a-1)&&(d.push(F,$,Y),N+=3)}f.addGroup(v,N,0),v+=N}function I(A){const V=M,N=new we,B=new it;let H=0;const R=A===!0?t:e,P=A===!0?1:-1;for(let $=1;$<=s;$++)p.push(0,y*P,0),_.push(0,P,0),g.push(.5,.5),M++;const F=M;for(let $=0;$<=s;$++){const rt=$/s*h+c,gt=Math.cos(rt),J=Math.sin(rt);B.x=R*J,B.y=y*P,B.z=R*gt,p.push(B.x,B.y,B.z),_.push(0,P,0),N.x=gt*.5+.5,N.y=J*.5*P+.5,g.push(N.x,N.y),M++}for(let $=0;$<s;$++){const Y=V+$,rt=F+$;A===!0?d.push(rt,rt+1,Y):d.push(rt+1,rt,Y),H+=3}f.addGroup(v,H,A===!0?1:2),v+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class wh extends gl{constructor(t=1,e=1,r=32,s=1,a=!1,l=0,c=Math.PI*2){super(0,t,e,r,s,a,l,c),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:l,thetaLength:c}}static fromJSON(t){return new wh(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vl extends Gi{constructor(t=1,e=1,r=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:r,heightSegments:s};const a=t/2,l=e/2,c=Math.floor(r),h=Math.floor(s),f=c+1,d=h+1,p=t/c,_=e/h,g=[],M=[],E=[],y=[];for(let v=0;v<d;v++){const D=v*_-l;for(let I=0;I<f;I++){const A=I*p-a;M.push(A,-D,0),E.push(0,0,1),y.push(I/c),y.push(1-v/h)}}for(let v=0;v<h;v++)for(let D=0;D<c;D++){const I=D+f*v,A=D+f*(v+1),V=D+1+f*(v+1),N=D+1+f*v;g.push(I,A,N),g.push(A,V,N)}this.setIndex(g),this.setAttribute("position",new Dn(M,3)),this.setAttribute("normal",new Dn(E,3)),this.setAttribute("uv",new Dn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vl(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ah extends Gi{constructor(t=1,e=32,r=16,s=0,a=Math.PI*2,l=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:r,phiStart:s,phiLength:a,thetaStart:l,thetaLength:c},e=Math.max(3,Math.floor(e)),r=Math.max(2,Math.floor(r));const h=Math.min(l+c,Math.PI);let f=0;const d=[],p=new it,_=new it,g=[],M=[],E=[],y=[];for(let v=0;v<=r;v++){const D=[],I=v/r;let A=0;v===0&&l===0?A=.5/e:v===r&&h===Math.PI&&(A=-.5/e);for(let V=0;V<=e;V++){const N=V/e;p.x=-t*Math.cos(s+N*a)*Math.sin(l+I*c),p.y=t*Math.cos(l+I*c),p.z=t*Math.sin(s+N*a)*Math.sin(l+I*c),M.push(p.x,p.y,p.z),_.copy(p).normalize(),E.push(_.x,_.y,_.z),y.push(N+A,1-I),D.push(f++)}d.push(D)}for(let v=0;v<r;v++)for(let D=0;D<e;D++){const I=d[v][D+1],A=d[v][D],V=d[v+1][D],N=d[v+1][D+1];(v!==0||l>0)&&g.push(I,A,N),(v!==r-1||h<Math.PI)&&g.push(A,V,N)}this.setIndex(g),this.setAttribute("position",new Dn(M,3)),this.setAttribute("normal",new Dn(E,3)),this.setAttribute("uv",new Dn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ah(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class DM extends _l{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Py,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class OM extends _l{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class UM extends r_{constructor(t=-1,e=1,r=1,s=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=r,this.bottom=s,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,r,s,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=r,this.view.offsetY=s,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=r-t,l=r+t,c=s+e,h=s-e;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,l=a+f*this.view.width,c-=d*this.view.offsetY,h=c-d*this.view.height}this.projectionMatrix.makeOrthographic(a,l,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class NM extends zn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}function Ud(n,t,e,r){const s=FM(r);switch(e){case Gm:return n*t;case Xm:return n*t;case Zm:return n*t*2;case qm:return n*t/s.components*s.byteLength;case yh:return n*t/s.components*s.byteLength;case Ym:return n*t*2/s.components*s.byteLength;case Mh:return n*t*2/s.components*s.byteLength;case Wm:return n*t*3/s.components*s.byteLength;case $n:return n*t*4/s.components*s.byteLength;case Sh:return n*t*4/s.components*s.byteLength;case Ua:case Na:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Fa:case Ba:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case _u:case vu:return Math.max(n,16)*Math.max(t,8)/4;case mu:case gu:return Math.max(n,8)*Math.max(t,8)/2;case xu:case yu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Mu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Su:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Eu:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case bu:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Tu:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case wu:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Au:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Pu:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Cu:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ru:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Lu:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Iu:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Du:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ou:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Uu:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case za:case Nu:case Fu:return Math.ceil(n/4)*Math.ceil(t/4)*16;case jm:case Bu:return Math.ceil(n/4)*Math.ceil(t/4)*8;case zu:case ku:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function FM(n){switch(n){case ki:case km:return{byteLength:1,components:1};case Co:case Hm:case Fo:return{byteLength:2,components:1};case vh:case xh:return{byteLength:2,components:4};case Nr:case gh:case Di:return{byteLength:4,components:1};case Vm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_h}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_h);function c_(){let n=null,t=!1,e=null,r=null;function s(a,l){e(a,l),r=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(r=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){n=a}}}function BM(n){const t=new WeakMap;function e(c,h){const f=c.array,d=c.usage,p=f.byteLength,_=n.createBuffer();n.bindBuffer(h,_),n.bufferData(h,f,d),c.onUploadCallback();let g;if(f instanceof Float32Array)g=n.FLOAT;else if(f instanceof Uint16Array)c.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=n.SHORT;else if(f instanceof Uint32Array)g=n.UNSIGNED_INT;else if(f instanceof Int32Array)g=n.INT;else if(f instanceof Int8Array)g=n.BYTE;else if(f instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,f){const d=h.array,p=h.updateRanges;if(n.bindBuffer(f,c),p.length===0)n.bufferSubData(f,0,d);else{p.sort((g,M)=>g.start-M.start);let _=0;for(let g=1;g<p.length;g++){const M=p[_],E=p[g];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++_,p[_]=E)}p.length=_+1;for(let g=0,M=p.length;g<M;g++){const E=p[g];n.bufferSubData(f,E.start*d.BYTES_PER_ELEMENT,d,E.start,E.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),t.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=t.get(c);h&&(n.deleteBuffer(h.buffer),t.delete(c))}function l(c,h){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const d=t.get(c);(!d||d.version<c.version)&&t.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const f=t.get(c);if(f===void 0)t.set(c,e(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,c,h),f.version=c.version}}return{get:s,remove:a,update:l}}var zM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,HM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,VM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,WM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ZM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,YM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,KM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$M=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,JM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,QM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,eS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,aS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,lS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mS="gl_FragColor = linearToOutputTexel( gl_FragColor );",_S=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,MS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,SS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ES=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,AS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,PS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,LS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,IS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,DS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,US=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,NS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,FS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,BS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,XS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,YS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$S=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,eE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,iE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_E=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ME=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,SE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,EE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,PE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,RE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,IE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,DE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,OE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,UE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,NE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,FE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,XE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ZE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,YE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$E=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,QE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ib=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ob=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ab=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ub=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,db=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_b=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ue={alphahash_fragment:zM,alphahash_pars_fragment:kM,alphamap_fragment:HM,alphamap_pars_fragment:VM,alphatest_fragment:GM,alphatest_pars_fragment:WM,aomap_fragment:XM,aomap_pars_fragment:ZM,batching_pars_vertex:qM,batching_vertex:YM,begin_vertex:jM,beginnormal_vertex:KM,bsdfs:$M,iridescence_fragment:JM,bumpmap_pars_fragment:QM,clipping_planes_fragment:tS,clipping_planes_pars_fragment:eS,clipping_planes_pars_vertex:nS,clipping_planes_vertex:iS,color_fragment:rS,color_pars_fragment:sS,color_pars_vertex:oS,color_vertex:aS,common:lS,cube_uv_reflection_fragment:cS,defaultnormal_vertex:uS,displacementmap_pars_vertex:hS,displacementmap_vertex:fS,emissivemap_fragment:dS,emissivemap_pars_fragment:pS,colorspace_fragment:mS,colorspace_pars_fragment:_S,envmap_fragment:gS,envmap_common_pars_fragment:vS,envmap_pars_fragment:xS,envmap_pars_vertex:yS,envmap_physical_pars_fragment:LS,envmap_vertex:MS,fog_vertex:SS,fog_pars_vertex:ES,fog_fragment:bS,fog_pars_fragment:TS,gradientmap_pars_fragment:wS,lightmap_pars_fragment:AS,lights_lambert_fragment:PS,lights_lambert_pars_fragment:CS,lights_pars_begin:RS,lights_toon_fragment:IS,lights_toon_pars_fragment:DS,lights_phong_fragment:OS,lights_phong_pars_fragment:US,lights_physical_fragment:NS,lights_physical_pars_fragment:FS,lights_fragment_begin:BS,lights_fragment_maps:zS,lights_fragment_end:kS,logdepthbuf_fragment:HS,logdepthbuf_pars_fragment:VS,logdepthbuf_pars_vertex:GS,logdepthbuf_vertex:WS,map_fragment:XS,map_pars_fragment:ZS,map_particle_fragment:qS,map_particle_pars_fragment:YS,metalnessmap_fragment:jS,metalnessmap_pars_fragment:KS,morphinstance_vertex:$S,morphcolor_vertex:JS,morphnormal_vertex:QS,morphtarget_pars_vertex:tE,morphtarget_vertex:eE,normal_fragment_begin:nE,normal_fragment_maps:iE,normal_pars_fragment:rE,normal_pars_vertex:sE,normal_vertex:oE,normalmap_pars_fragment:aE,clearcoat_normal_fragment_begin:lE,clearcoat_normal_fragment_maps:cE,clearcoat_pars_fragment:uE,iridescence_pars_fragment:hE,opaque_fragment:fE,packing:dE,premultiplied_alpha_fragment:pE,project_vertex:mE,dithering_fragment:_E,dithering_pars_fragment:gE,roughnessmap_fragment:vE,roughnessmap_pars_fragment:xE,shadowmap_pars_fragment:yE,shadowmap_pars_vertex:ME,shadowmap_vertex:SE,shadowmask_pars_fragment:EE,skinbase_vertex:bE,skinning_pars_vertex:TE,skinning_vertex:wE,skinnormal_vertex:AE,specularmap_fragment:PE,specularmap_pars_fragment:CE,tonemapping_fragment:RE,tonemapping_pars_fragment:LE,transmission_fragment:IE,transmission_pars_fragment:DE,uv_pars_fragment:OE,uv_pars_vertex:UE,uv_vertex:NE,worldpos_vertex:FE,background_vert:BE,background_frag:zE,backgroundCube_vert:kE,backgroundCube_frag:HE,cube_vert:VE,cube_frag:GE,depth_vert:WE,depth_frag:XE,distanceRGBA_vert:ZE,distanceRGBA_frag:qE,equirect_vert:YE,equirect_frag:jE,linedashed_vert:KE,linedashed_frag:$E,meshbasic_vert:JE,meshbasic_frag:QE,meshlambert_vert:tb,meshlambert_frag:eb,meshmatcap_vert:nb,meshmatcap_frag:ib,meshnormal_vert:rb,meshnormal_frag:sb,meshphong_vert:ob,meshphong_frag:ab,meshphysical_vert:lb,meshphysical_frag:cb,meshtoon_vert:ub,meshtoon_frag:hb,points_vert:fb,points_frag:db,shadow_vert:pb,shadow_frag:mb,sprite_vert:_b,sprite_frag:gb},Dt={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},ci={basic:{uniforms:mn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:mn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Te(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:mn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:mn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:mn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new Te(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:mn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:mn([Dt.points,Dt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:mn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:mn([Dt.common,Dt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:mn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:mn([Dt.sprite,Dt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:mn([Dt.common,Dt.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:mn([Dt.lights,Dt.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};ci.physical={uniforms:mn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const Ea={r:0,b:0,g:0},Er=new ei,vb=new Ve;function xb(n,t,e,r,s,a,l){const c=new Te(0);let h=a===!0?0:1,f,d,p=null,_=0,g=null;function M(I){let A=I.isScene===!0?I.background:null;return A&&A.isTexture&&(A=(I.backgroundBlurriness>0?e:t).get(A)),A}function E(I){let A=!1;const V=M(I);V===null?v(c,h):V&&V.isColor&&(v(V,1),A=!0);const N=n.xr.getEnvironmentBlendMode();N==="additive"?r.buffers.color.setClear(0,0,0,1,l):N==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,l),(n.autoClear||A)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(I,A){const V=M(A);V&&(V.isCubeTexture||V.mapping===ml)?(d===void 0&&(d=new Ln(new Ns(1,1,1),new ur({name:"BackgroundCubeMaterial",uniforms:Ds(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(N,B,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Er.copy(A.backgroundRotation),Er.x*=-1,Er.y*=-1,Er.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),d.material.uniforms.envMap.value=V,d.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(vb.makeRotationFromEuler(Er)),d.material.toneMapped=ve.getTransfer(V.colorSpace)!==be,(p!==V||_!==V.version||g!==n.toneMapping)&&(d.material.needsUpdate=!0,p=V,_=V.version,g=n.toneMapping),d.layers.enableAll(),I.unshift(d,d.geometry,d.material,0,0,null)):V&&V.isTexture&&(f===void 0&&(f=new Ln(new vl(2,2),new ur({name:"BackgroundMaterial",uniforms:Ds(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(f)),f.material.uniforms.t2D.value=V,f.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,f.material.toneMapped=ve.getTransfer(V.colorSpace)!==be,V.matrixAutoUpdate===!0&&V.updateMatrix(),f.material.uniforms.uvTransform.value.copy(V.matrix),(p!==V||_!==V.version||g!==n.toneMapping)&&(f.material.needsUpdate=!0,p=V,_=V.version,g=n.toneMapping),f.layers.enableAll(),I.unshift(f,f.geometry,f.material,0,0,null))}function v(I,A){I.getRGB(Ea,i_(n)),r.buffers.color.setClear(Ea.r,Ea.g,Ea.b,A,l)}function D(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return c},setClearColor:function(I,A=1){c.set(I),h=A,v(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(I){h=I,v(c,h)},render:E,addToRenderList:y,dispose:D}}function yb(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},s=_(null);let a=s,l=!1;function c(P,F,$,Y,rt){let gt=!1;const J=p(Y,$,F);a!==J&&(a=J,f(a.object)),gt=g(P,Y,$,rt),gt&&M(P,Y,$,rt),rt!==null&&t.update(rt,n.ELEMENT_ARRAY_BUFFER),(gt||l)&&(l=!1,A(P,F,$,Y),rt!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(rt).buffer))}function h(){return n.createVertexArray()}function f(P){return n.bindVertexArray(P)}function d(P){return n.deleteVertexArray(P)}function p(P,F,$){const Y=$.wireframe===!0;let rt=r[P.id];rt===void 0&&(rt={},r[P.id]=rt);let gt=rt[F.id];gt===void 0&&(gt={},rt[F.id]=gt);let J=gt[Y];return J===void 0&&(J=_(h()),gt[Y]=J),J}function _(P){const F=[],$=[],Y=[];for(let rt=0;rt<e;rt++)F[rt]=0,$[rt]=0,Y[rt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:$,attributeDivisors:Y,object:P,attributes:{},index:null}}function g(P,F,$,Y){const rt=a.attributes,gt=F.attributes;let J=0;const pt=$.getAttributes();for(const G in pt)if(pt[G].location>=0){const mt=rt[G];let At=gt[G];if(At===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(At=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(At=P.instanceColor)),mt===void 0||mt.attribute!==At||At&&mt.data!==At.data)return!0;J++}return a.attributesNum!==J||a.index!==Y}function M(P,F,$,Y){const rt={},gt=F.attributes;let J=0;const pt=$.getAttributes();for(const G in pt)if(pt[G].location>=0){let mt=gt[G];mt===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(mt=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(mt=P.instanceColor));const At={};At.attribute=mt,mt&&mt.data&&(At.data=mt.data),rt[G]=At,J++}a.attributes=rt,a.attributesNum=J,a.index=Y}function E(){const P=a.newAttributes;for(let F=0,$=P.length;F<$;F++)P[F]=0}function y(P){v(P,0)}function v(P,F){const $=a.newAttributes,Y=a.enabledAttributes,rt=a.attributeDivisors;$[P]=1,Y[P]===0&&(n.enableVertexAttribArray(P),Y[P]=1),rt[P]!==F&&(n.vertexAttribDivisor(P,F),rt[P]=F)}function D(){const P=a.newAttributes,F=a.enabledAttributes;for(let $=0,Y=F.length;$<Y;$++)F[$]!==P[$]&&(n.disableVertexAttribArray($),F[$]=0)}function I(P,F,$,Y,rt,gt,J){J===!0?n.vertexAttribIPointer(P,F,$,rt,gt):n.vertexAttribPointer(P,F,$,Y,rt,gt)}function A(P,F,$,Y){E();const rt=Y.attributes,gt=$.getAttributes(),J=F.defaultAttributeValues;for(const pt in gt){const G=gt[pt];if(G.location>=0){let Ct=rt[pt];if(Ct===void 0&&(pt==="instanceMatrix"&&P.instanceMatrix&&(Ct=P.instanceMatrix),pt==="instanceColor"&&P.instanceColor&&(Ct=P.instanceColor)),Ct!==void 0){const mt=Ct.normalized,At=Ct.itemSize,kt=t.get(Ct);if(kt===void 0)continue;const Jt=kt.buffer,lt=kt.type,_t=kt.bytesPerElement,xt=lt===n.INT||lt===n.UNSIGNED_INT||Ct.gpuType===gh;if(Ct.isInterleavedBufferAttribute){const W=Ct.data,dt=W.stride,yt=Ct.offset;if(W.isInstancedInterleavedBuffer){for(let St=0;St<G.locationSize;St++)v(G.location+St,W.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let St=0;St<G.locationSize;St++)y(G.location+St);n.bindBuffer(n.ARRAY_BUFFER,Jt);for(let St=0;St<G.locationSize;St++)I(G.location+St,At/G.locationSize,lt,mt,dt*_t,(yt+At/G.locationSize*St)*_t,xt)}else{if(Ct.isInstancedBufferAttribute){for(let W=0;W<G.locationSize;W++)v(G.location+W,Ct.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ct.meshPerAttribute*Ct.count)}else for(let W=0;W<G.locationSize;W++)y(G.location+W);n.bindBuffer(n.ARRAY_BUFFER,Jt);for(let W=0;W<G.locationSize;W++)I(G.location+W,At/G.locationSize,lt,mt,At*_t,At/G.locationSize*W*_t,xt)}}else if(J!==void 0){const mt=J[pt];if(mt!==void 0)switch(mt.length){case 2:n.vertexAttrib2fv(G.location,mt);break;case 3:n.vertexAttrib3fv(G.location,mt);break;case 4:n.vertexAttrib4fv(G.location,mt);break;default:n.vertexAttrib1fv(G.location,mt)}}}}D()}function V(){H();for(const P in r){const F=r[P];for(const $ in F){const Y=F[$];for(const rt in Y)d(Y[rt].object),delete Y[rt];delete F[$]}delete r[P]}}function N(P){if(r[P.id]===void 0)return;const F=r[P.id];for(const $ in F){const Y=F[$];for(const rt in Y)d(Y[rt].object),delete Y[rt];delete F[$]}delete r[P.id]}function B(P){for(const F in r){const $=r[F];if($[P.id]===void 0)continue;const Y=$[P.id];for(const rt in Y)d(Y[rt].object),delete Y[rt];delete $[P.id]}}function H(){R(),l=!0,a!==s&&(a=s,f(a.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:H,resetDefaultState:R,dispose:V,releaseStatesOfGeometry:N,releaseStatesOfProgram:B,initAttributes:E,enableAttribute:y,disableUnusedAttributes:D}}function Mb(n,t,e){let r;function s(f){r=f}function a(f,d){n.drawArrays(r,f,d),e.update(d,r,1)}function l(f,d,p){p!==0&&(n.drawArraysInstanced(r,f,d,p),e.update(d,r,p))}function c(f,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,f,0,d,0,p);let g=0;for(let M=0;M<p;M++)g+=d[M];e.update(g,r,1)}function h(f,d,p,_){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let M=0;M<f.length;M++)l(f[M],d[M],_[M]);else{g.multiDrawArraysInstancedWEBGL(r,f,0,d,0,_,0,p);let M=0;for(let E=0;E<p;E++)M+=d[E]*_[E];e.update(M,r,1)}}this.setMode=s,this.render=a,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function Sb(n,t,e,r){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(B){return!(B!==$n&&r.convert(B)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(B){const H=B===Fo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==ki&&r.convert(B)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Di&&!H)}function h(B){if(B==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=e.precision!==void 0?e.precision:"highp";const d=h(f);d!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",d,"instead."),f=d);const p=e.logarithmicDepthBuffer===!0,_=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),D=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),I=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),V=M>0,N=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:l,textureTypeReadable:c,precision:f,logarithmicDepthBuffer:p,reverseDepthBuffer:_,maxTextures:g,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:D,maxVaryings:I,maxFragmentUniforms:A,vertexTextures:V,maxSamples:N}}function Eb(n){const t=this;let e=null,r=0,s=!1,a=!1;const l=new wr,c=new ce,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(p,_){const g=p.length!==0||_||r!==0||s;return s=_,r=p.length,g},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,_){e=d(p,_,0)},this.setState=function(p,_,g){const M=p.clippingPlanes,E=p.clipIntersection,y=p.clipShadows,v=n.get(p);if(!s||M===null||M.length===0||a&&!y)a?d(null):f();else{const D=a?0:r,I=D*4;let A=v.clippingState||null;h.value=A,A=d(M,_,I,g);for(let V=0;V!==I;++V)A[V]=e[V];v.clippingState=A,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=D}};function f(){h.value!==e&&(h.value=e,h.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function d(p,_,g,M){const E=p!==null?p.length:0;let y=null;if(E!==0){if(y=h.value,M!==!0||y===null){const v=g+E*4,D=_.matrixWorldInverse;c.getNormalMatrix(D),(y===null||y.length<v)&&(y=new Float32Array(v));for(let I=0,A=g;I!==E;++I,A+=4)l.copy(p[I]).applyMatrix4(D,c),l.normal.toArray(y,A),y[A+3]=l.constant}h.value=y,h.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,y}}function bb(n){let t=new WeakMap;function e(l,c){return c===hu?l.mapping=Rs:c===fu&&(l.mapping=Ls),l}function r(l){if(l&&l.isTexture){const c=l.mapping;if(c===hu||c===fu)if(t.has(l)){const h=t.get(l).texture;return e(h,l.mapping)}else{const h=l.image;if(h&&h.height>0){const f=new PM(h.height);return f.fromEquirectangularTexture(n,l),t.set(l,f),l.addEventListener("dispose",s),e(f.texture,l.mapping)}else return null}}return l}function s(l){const c=l.target;c.removeEventListener("dispose",s);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}const ds=4,Nd=[.125,.215,.35,.446,.526,.582],Cr=20,Rc=new UM,Fd=new Te;let Lc=null,Ic=0,Dc=0,Oc=!1;const Ar=(1+Math.sqrt(5))/2,as=1/Ar,Bd=[new it(-Ar,as,0),new it(Ar,as,0),new it(-as,0,Ar),new it(as,0,Ar),new it(0,Ar,-as),new it(0,Ar,as),new it(-1,1,-1),new it(1,1,-1),new it(-1,1,1),new it(1,1,1)],Tb=new it;class zd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,r=.1,s=100,a={}){const{size:l=256,position:c=Tb}=a;Lc=this._renderer.getRenderTarget(),Ic=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel(),Oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,r,s,h,c),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Lc,Ic,Dc),this._renderer.xr.enabled=Oc,t.scissorTest=!1,ba(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Rs||t.mapping===Ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lc=this._renderer.getRenderTarget(),Ic=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel(),Oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=e||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,r={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:Fo,format:$n,colorSpace:Is,depthBuffer:!1},s=kd(t,e,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kd(t,e,r);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wb(a)),this._blurMaterial=Ab(a,t,e)}return s}_compileMaterial(t){const e=new Ln(this._lodPlanes[0],t);this._renderer.compile(e,Rc)}_sceneToCubeUV(t,e,r,s,a){const h=new zn(90,1,e,r),f=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,_=p.autoClear,g=p.toneMapping;p.getClearColor(Fd),p.toneMapping=ar,p.autoClear=!1;const M=new xo({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),E=new Ln(new Ns,M);let y=!1;const v=t.background;v?v.isColor&&(M.color.copy(v),t.background=null,y=!0):(M.color.copy(Fd),y=!0);for(let D=0;D<6;D++){const I=D%3;I===0?(h.up.set(0,f[D],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x+d[D],a.y,a.z)):I===1?(h.up.set(0,0,f[D]),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y+d[D],a.z)):(h.up.set(0,f[D],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y,a.z+d[D]));const A=this._cubeSize;ba(s,I*A,D>2?A:0,A,A),p.setRenderTarget(s),y&&p.render(E,h),p.render(t,h)}E.geometry.dispose(),E.material.dispose(),p.toneMapping=g,p.autoClear=_,t.background=v}_textureToCubeUV(t,e){const r=this._renderer,s=t.mapping===Rs||t.mapping===Ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hd());const a=s?this._cubemapMaterial:this._equirectMaterial,l=new Ln(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=t;const h=this._cubeSize;ba(e,0,0,3*h,2*h),r.setRenderTarget(e),r.render(l,Rc)}_applyPMREM(t){const e=this._renderer,r=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=Bd[(s-a-1)%Bd.length];this._blur(t,a-1,a,l,c)}e.autoClear=r}_blur(t,e,r,s,a){const l=this._pingPongRenderTarget;this._halfBlur(t,l,e,r,s,"latitudinal",a),this._halfBlur(l,t,r,r,s,"longitudinal",a)}_halfBlur(t,e,r,s,a,l,c){const h=this._renderer,f=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new Ln(this._lodPlanes[s],f),_=f.uniforms,g=this._sizeLods[r]-1,M=isFinite(a)?Math.PI/(2*g):2*Math.PI/(2*Cr-1),E=a/M,y=isFinite(a)?1+Math.floor(d*E):Cr;y>Cr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Cr}`);const v=[];let D=0;for(let B=0;B<Cr;++B){const H=B/E,R=Math.exp(-H*H/2);v.push(R),B===0?D+=R:B<y&&(D+=2*R)}for(let B=0;B<v.length;B++)v[B]=v[B]/D;_.envMap.value=t.texture,_.samples.value=y,_.weights.value=v,_.latitudinal.value=l==="latitudinal",c&&(_.poleAxis.value=c);const{_lodMax:I}=this;_.dTheta.value=M,_.mipInt.value=I-r;const A=this._sizeLods[s],V=3*A*(s>I-ds?s-I+ds:0),N=4*(this._cubeSize-A);ba(e,V,N,3*A,2*A),h.setRenderTarget(e),h.render(p,Rc)}}function wb(n){const t=[],e=[],r=[];let s=n;const a=n-ds+1+Nd.length;for(let l=0;l<a;l++){const c=Math.pow(2,s);e.push(c);let h=1/c;l>n-ds?h=Nd[l-n+ds-1]:l===0&&(h=0),r.push(h);const f=1/(c-2),d=-f,p=1+f,_=[d,d,p,d,p,p,d,d,p,p,d,p],g=6,M=6,E=3,y=2,v=1,D=new Float32Array(E*M*g),I=new Float32Array(y*M*g),A=new Float32Array(v*M*g);for(let N=0;N<g;N++){const B=N%3*2/3-1,H=N>2?0:-1,R=[B,H,0,B+2/3,H,0,B+2/3,H+1,0,B,H,0,B+2/3,H+1,0,B,H+1,0];D.set(R,E*M*N),I.set(_,y*M*N);const P=[N,N,N,N,N,N];A.set(P,v*M*N)}const V=new Gi;V.setAttribute("position",new hi(D,E)),V.setAttribute("uv",new hi(I,y)),V.setAttribute("faceIndex",new hi(A,v)),t.push(V),s>ds&&s--}return{lodPlanes:t,sizeLods:e,sigmas:r}}function kd(n,t,e){const r=new Fr(n,t,e);return r.texture.mapping=ml,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ba(n,t,e,r,s){n.viewport.set(t,e,r,s),n.scissor.set(t,e,r,s)}function Ab(n,t,e){const r=new Float32Array(Cr),s=new it(0,1,0);return new ur({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Hd(){return new ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Vd(){return new ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Ph(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Pb(n){let t=new WeakMap,e=null;function r(c){if(c&&c.isTexture){const h=c.mapping,f=h===hu||h===fu,d=h===Rs||h===Ls;if(f||d){let p=t.get(c);const _=p!==void 0?p.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==_)return e===null&&(e=new zd(n)),p=f?e.fromEquirectangular(c,p):e.fromCubemap(c,p),p.texture.pmremVersion=c.pmremVersion,t.set(c,p),p.texture;if(p!==void 0)return p.texture;{const g=c.image;return f&&g&&g.height>0||d&&g&&s(g)?(e===null&&(e=new zd(n)),p=f?e.fromEquirectangular(c):e.fromCubemap(c),p.texture.pmremVersion=c.pmremVersion,t.set(c,p),c.addEventListener("dispose",a),p.texture):null}}}return c}function s(c){let h=0;const f=6;for(let d=0;d<f;d++)c[d]!==void 0&&h++;return h===f}function a(c){const h=c.target;h.removeEventListener("dispose",a);const f=t.get(h);f!==void 0&&(t.delete(h),f.dispose())}function l(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:r,dispose:l}}function Cb(n){const t={};function e(r){if(t[r]!==void 0)return t[r];let s;switch(r){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(r)}return t[r]=s,s}return{has:function(r){return e(r)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(r){const s=e(r);return s===null&&ka("THREE.WebGLRenderer: "+r+" extension not supported."),s}}}function Rb(n,t,e,r){const s={},a=new WeakMap;function l(p){const _=p.target;_.index!==null&&t.remove(_.index);for(const M in _.attributes)t.remove(_.attributes[M]);_.removeEventListener("dispose",l),delete s[_.id];const g=a.get(_);g&&(t.remove(g),a.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function c(p,_){return s[_.id]===!0||(_.addEventListener("dispose",l),s[_.id]=!0,e.memory.geometries++),_}function h(p){const _=p.attributes;for(const g in _)t.update(_[g],n.ARRAY_BUFFER)}function f(p){const _=[],g=p.index,M=p.attributes.position;let E=0;if(g!==null){const D=g.array;E=g.version;for(let I=0,A=D.length;I<A;I+=3){const V=D[I+0],N=D[I+1],B=D[I+2];_.push(V,N,N,B,B,V)}}else if(M!==void 0){const D=M.array;E=M.version;for(let I=0,A=D.length/3-1;I<A;I+=3){const V=I+0,N=I+1,B=I+2;_.push(V,N,N,B,B,V)}}else return;const y=new($m(_)?n_:e_)(_,1);y.version=E;const v=a.get(p);v&&t.remove(v),a.set(p,y)}function d(p){const _=a.get(p);if(_){const g=p.index;g!==null&&_.version<g.version&&f(p)}else f(p);return a.get(p)}return{get:c,update:h,getWireframeAttribute:d}}function Lb(n,t,e){let r;function s(_){r=_}let a,l;function c(_){a=_.type,l=_.bytesPerElement}function h(_,g){n.drawElements(r,g,a,_*l),e.update(g,r,1)}function f(_,g,M){M!==0&&(n.drawElementsInstanced(r,g,a,_*l,M),e.update(g,r,M))}function d(_,g,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,a,_,0,M);let y=0;for(let v=0;v<M;v++)y+=g[v];e.update(y,r,1)}function p(_,g,M,E){if(M===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<_.length;v++)f(_[v]/l,g[v],E[v]);else{y.multiDrawElementsInstancedWEBGL(r,g,0,a,_,0,E,0,M);let v=0;for(let D=0;D<M;D++)v+=g[D]*E[D];e.update(v,r,1)}}this.setMode=s,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function Ib(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,l,c){switch(e.calls++,l){case n.TRIANGLES:e.triangles+=c*(a/3);break;case n.LINES:e.lines+=c*(a/2);break;case n.LINE_STRIP:e.lines+=c*(a-1);break;case n.LINE_LOOP:e.lines+=c*a;break;case n.POINTS:e.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:r}}function Db(n,t,e){const r=new WeakMap,s=new Be;function a(l,c,h){const f=l.morphTargetInfluences,d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=d!==void 0?d.length:0;let _=r.get(c);if(_===void 0||_.count!==p){let R=function(){B.dispose(),r.delete(c),c.removeEventListener("dispose",R)};_!==void 0&&_.texture.dispose();const g=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,E=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],v=c.morphAttributes.normal||[],D=c.morphAttributes.color||[];let I=0;g===!0&&(I=1),M===!0&&(I=2),E===!0&&(I=3);let A=c.attributes.position.count*I,V=1;A>t.maxTextureSize&&(V=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const N=new Float32Array(A*V*4*p),B=new Jm(N,A,V,p);B.type=Di,B.needsUpdate=!0;const H=I*4;for(let P=0;P<p;P++){const F=y[P],$=v[P],Y=D[P],rt=A*V*4*P;for(let gt=0;gt<F.count;gt++){const J=gt*H;g===!0&&(s.fromBufferAttribute(F,gt),N[rt+J+0]=s.x,N[rt+J+1]=s.y,N[rt+J+2]=s.z,N[rt+J+3]=0),M===!0&&(s.fromBufferAttribute($,gt),N[rt+J+4]=s.x,N[rt+J+5]=s.y,N[rt+J+6]=s.z,N[rt+J+7]=0),E===!0&&(s.fromBufferAttribute(Y,gt),N[rt+J+8]=s.x,N[rt+J+9]=s.y,N[rt+J+10]=s.z,N[rt+J+11]=Y.itemSize===4?s.w:1)}}_={count:p,texture:B,size:new we(A,V)},r.set(c,_),c.addEventListener("dispose",R)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)h.getUniforms().setValue(n,"morphTexture",l.morphTexture,e);else{let g=0;for(let E=0;E<f.length;E++)g+=f[E];const M=c.morphTargetsRelative?1:1-g;h.getUniforms().setValue(n,"morphTargetBaseInfluence",M),h.getUniforms().setValue(n,"morphTargetInfluences",f)}h.getUniforms().setValue(n,"morphTargetsTexture",_.texture,e),h.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}return{update:a}}function Ob(n,t,e,r){let s=new WeakMap;function a(h){const f=r.render.frame,d=h.geometry,p=t.get(h,d);if(s.get(p)!==f&&(t.update(p),s.set(p,f)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),s.get(h)!==f&&(e.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,n.ARRAY_BUFFER),s.set(h,f))),h.isSkinnedMesh){const _=h.skeleton;s.get(_)!==f&&(_.update(),s.set(_,f))}return p}function l(){s=new WeakMap}function c(h){const f=h.target;f.removeEventListener("dispose",c),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:a,dispose:l}}const u_=new xn,Gd=new l_(1,1),h_=new Jm,f_=new uM,d_=new s_,Wd=[],Xd=[],Zd=new Float32Array(16),qd=new Float32Array(9),Yd=new Float32Array(4);function Fs(n,t,e){const r=n[0];if(r<=0||r>0)return n;const s=t*e;let a=Wd[s];if(a===void 0&&(a=new Float32Array(s),Wd[s]=a),t!==0){r.toArray(a,0);for(let l=1,c=0;l!==t;++l)c+=e,n[l].toArray(a,c)}return a}function Ze(n,t){if(n.length!==t.length)return!1;for(let e=0,r=n.length;e<r;e++)if(n[e]!==t[e])return!1;return!0}function qe(n,t){for(let e=0,r=t.length;e<r;e++)n[e]=t[e]}function xl(n,t){let e=Xd[t];e===void 0&&(e=new Int32Array(t),Xd[t]=e);for(let r=0;r!==t;++r)e[r]=n.allocateTextureUnit();return e}function Ub(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Nb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;n.uniform2fv(this.addr,t),qe(e,t)}}function Fb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;n.uniform3fv(this.addr,t),qe(e,t)}}function Bb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;n.uniform4fv(this.addr,t),qe(e,t)}}function zb(n,t){const e=this.cache,r=t.elements;if(r===void 0){if(Ze(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Ze(e,r))return;Yd.set(r),n.uniformMatrix2fv(this.addr,!1,Yd),qe(e,r)}}function kb(n,t){const e=this.cache,r=t.elements;if(r===void 0){if(Ze(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Ze(e,r))return;qd.set(r),n.uniformMatrix3fv(this.addr,!1,qd),qe(e,r)}}function Hb(n,t){const e=this.cache,r=t.elements;if(r===void 0){if(Ze(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Ze(e,r))return;Zd.set(r),n.uniformMatrix4fv(this.addr,!1,Zd),qe(e,r)}}function Vb(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Gb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;n.uniform2iv(this.addr,t),qe(e,t)}}function Wb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;n.uniform3iv(this.addr,t),qe(e,t)}}function Xb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;n.uniform4iv(this.addr,t),qe(e,t)}}function Zb(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function qb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;n.uniform2uiv(this.addr,t),qe(e,t)}}function Yb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;n.uniform3uiv(this.addr,t),qe(e,t)}}function jb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;n.uniform4uiv(this.addr,t),qe(e,t)}}function Kb(n,t,e){const r=this.cache,s=e.allocateTextureUnit();r[0]!==s&&(n.uniform1i(this.addr,s),r[0]=s);let a;this.type===n.SAMPLER_2D_SHADOW?(Gd.compareFunction=Km,a=Gd):a=u_,e.setTexture2D(t||a,s)}function $b(n,t,e){const r=this.cache,s=e.allocateTextureUnit();r[0]!==s&&(n.uniform1i(this.addr,s),r[0]=s),e.setTexture3D(t||f_,s)}function Jb(n,t,e){const r=this.cache,s=e.allocateTextureUnit();r[0]!==s&&(n.uniform1i(this.addr,s),r[0]=s),e.setTextureCube(t||d_,s)}function Qb(n,t,e){const r=this.cache,s=e.allocateTextureUnit();r[0]!==s&&(n.uniform1i(this.addr,s),r[0]=s),e.setTexture2DArray(t||h_,s)}function tT(n){switch(n){case 5126:return Ub;case 35664:return Nb;case 35665:return Fb;case 35666:return Bb;case 35674:return zb;case 35675:return kb;case 35676:return Hb;case 5124:case 35670:return Vb;case 35667:case 35671:return Gb;case 35668:case 35672:return Wb;case 35669:case 35673:return Xb;case 5125:return Zb;case 36294:return qb;case 36295:return Yb;case 36296:return jb;case 35678:case 36198:case 36298:case 36306:case 35682:return Kb;case 35679:case 36299:case 36307:return $b;case 35680:case 36300:case 36308:case 36293:return Jb;case 36289:case 36303:case 36311:case 36292:return Qb}}function eT(n,t){n.uniform1fv(this.addr,t)}function nT(n,t){const e=Fs(t,this.size,2);n.uniform2fv(this.addr,e)}function iT(n,t){const e=Fs(t,this.size,3);n.uniform3fv(this.addr,e)}function rT(n,t){const e=Fs(t,this.size,4);n.uniform4fv(this.addr,e)}function sT(n,t){const e=Fs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function oT(n,t){const e=Fs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function aT(n,t){const e=Fs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function lT(n,t){n.uniform1iv(this.addr,t)}function cT(n,t){n.uniform2iv(this.addr,t)}function uT(n,t){n.uniform3iv(this.addr,t)}function hT(n,t){n.uniform4iv(this.addr,t)}function fT(n,t){n.uniform1uiv(this.addr,t)}function dT(n,t){n.uniform2uiv(this.addr,t)}function pT(n,t){n.uniform3uiv(this.addr,t)}function mT(n,t){n.uniform4uiv(this.addr,t)}function _T(n,t,e){const r=this.cache,s=t.length,a=xl(e,s);Ze(r,a)||(n.uniform1iv(this.addr,a),qe(r,a));for(let l=0;l!==s;++l)e.setTexture2D(t[l]||u_,a[l])}function gT(n,t,e){const r=this.cache,s=t.length,a=xl(e,s);Ze(r,a)||(n.uniform1iv(this.addr,a),qe(r,a));for(let l=0;l!==s;++l)e.setTexture3D(t[l]||f_,a[l])}function vT(n,t,e){const r=this.cache,s=t.length,a=xl(e,s);Ze(r,a)||(n.uniform1iv(this.addr,a),qe(r,a));for(let l=0;l!==s;++l)e.setTextureCube(t[l]||d_,a[l])}function xT(n,t,e){const r=this.cache,s=t.length,a=xl(e,s);Ze(r,a)||(n.uniform1iv(this.addr,a),qe(r,a));for(let l=0;l!==s;++l)e.setTexture2DArray(t[l]||h_,a[l])}function yT(n){switch(n){case 5126:return eT;case 35664:return nT;case 35665:return iT;case 35666:return rT;case 35674:return sT;case 35675:return oT;case 35676:return aT;case 5124:case 35670:return lT;case 35667:case 35671:return cT;case 35668:case 35672:return uT;case 35669:case 35673:return hT;case 5125:return fT;case 36294:return dT;case 36295:return pT;case 36296:return mT;case 35678:case 36198:case 36298:case 36306:case 35682:return _T;case 35679:case 36299:case 36307:return gT;case 35680:case 36300:case 36308:case 36293:return vT;case 36289:case 36303:case 36311:case 36292:return xT}}class MT{constructor(t,e,r){this.id=t,this.addr=r,this.cache=[],this.type=e.type,this.setValue=tT(e.type)}}class ST{constructor(t,e,r){this.id=t,this.addr=r,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=yT(e.type)}}class ET{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,r){const s=this.seq;for(let a=0,l=s.length;a!==l;++a){const c=s[a];c.setValue(t,e[c.id],r)}}}const Uc=/(\w+)(\])?(\[|\.)?/g;function jd(n,t){n.seq.push(t),n.map[t.id]=t}function bT(n,t,e){const r=n.name,s=r.length;for(Uc.lastIndex=0;;){const a=Uc.exec(r),l=Uc.lastIndex;let c=a[1];const h=a[2]==="]",f=a[3];if(h&&(c=c|0),f===void 0||f==="["&&l+2===s){jd(e,f===void 0?new MT(c,n,t):new ST(c,n,t));break}else{let p=e.map[c];p===void 0&&(p=new ET(c),jd(e,p)),e=p}}}class Ha{constructor(t,e){this.seq=[],this.map={};const r=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<r;++s){const a=t.getActiveUniform(e,s),l=t.getUniformLocation(e,a.name);bT(a,l,this)}}setValue(t,e,r,s){const a=this.map[e];a!==void 0&&a.setValue(t,r,s)}setOptional(t,e,r){const s=e[r];s!==void 0&&this.setValue(t,r,s)}static upload(t,e,r,s){for(let a=0,l=e.length;a!==l;++a){const c=e[a],h=r[c.id];h.needsUpdate!==!1&&c.setValue(t,h.value,s)}}static seqWithValue(t,e){const r=[];for(let s=0,a=t.length;s!==a;++s){const l=t[s];l.id in e&&r.push(l)}return r}}function Kd(n,t,e){const r=n.createShader(t);return n.shaderSource(r,e),n.compileShader(r),r}const TT=37297;let wT=0;function AT(n,t){const e=n.split(`
`),r=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let l=s;l<a;l++){const c=l+1;r.push(`${c===t?">":" "} ${c}: ${e[l]}`)}return r.join(`
`)}const $d=new ce;function PT(n){ve._getMatrix($d,ve.workingColorSpace,n);const t=`mat3( ${$d.elements.map(e=>e.toFixed(4))} )`;switch(ve.getTransfer(n)){case $a:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Jd(n,t,e){const r=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(r&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const l=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+AT(n.getShaderSource(t),l)}else return s}function CT(n,t){const e=PT(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function RT(n,t){let e;switch(t){case yy:e="Linear";break;case My:e="Reinhard";break;case Sy:e="Cineon";break;case Ey:e="ACESFilmic";break;case Ty:e="AgX";break;case wy:e="Neutral";break;case by:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ta=new it;function LT(){ve.getLuminanceCoefficients(Ta);const n=Ta.x.toFixed(4),t=Ta.y.toFixed(4),e=Ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oo).join(`
`)}function DT(n){const t=[];for(const e in n){const r=n[e];r!==!1&&t.push("#define "+e+" "+r)}return t.join(`
`)}function OT(n,t){const e={},r=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<r;s++){const a=n.getActiveAttrib(t,s),l=a.name;let c=1;a.type===n.FLOAT_MAT2&&(c=2),a.type===n.FLOAT_MAT3&&(c=3),a.type===n.FLOAT_MAT4&&(c=4),e[l]={type:a.type,location:n.getAttribLocation(t,l),locationSize:c}}return e}function oo(n){return n!==""}function Qd(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tp(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const UT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hu(n){return n.replace(UT,FT)}const NT=new Map;function FT(n,t){let e=ue[t];if(e===void 0){const r=NT.get(t);if(r!==void 0)e=ue[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Hu(e)}const BT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ep(n){return n.replace(BT,zT)}function zT(n,t,e,r){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function np(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function kT(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Fm?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Q0?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ai&&(t="SHADOWMAP_TYPE_VSM"),t}function HT(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Rs:case Ls:t="ENVMAP_TYPE_CUBE";break;case ml:t="ENVMAP_TYPE_CUBE_UV";break}return t}function VT(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ls:t="ENVMAP_MODE_REFRACTION";break}return t}function GT(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Bm:t="ENVMAP_BLENDING_MULTIPLY";break;case vy:t="ENVMAP_BLENDING_MIX";break;case xy:t="ENVMAP_BLENDING_ADD";break}return t}function WT(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:r,maxMip:e}}function XT(n,t,e,r){const s=n.getContext(),a=e.defines;let l=e.vertexShader,c=e.fragmentShader;const h=kT(e),f=HT(e),d=VT(e),p=GT(e),_=WT(e),g=IT(e),M=DT(a),E=s.createProgram();let y,v,D=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(oo).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(oo).join(`
`),v.length>0&&(v+=`
`)):(y=[np(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oo).join(`
`),v=[np(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+d:"",e.envMap?"#define "+p:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ar?"#define TONE_MAPPING":"",e.toneMapping!==ar?ue.tonemapping_pars_fragment:"",e.toneMapping!==ar?RT("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,CT("linearToOutputTexel",e.outputColorSpace),LT(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(oo).join(`
`)),l=Hu(l),l=Qd(l,e),l=tp(l,e),c=Hu(c),c=Qd(c,e),c=tp(c,e),l=ep(l),c=ep(c),e.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",e.glslVersion===_d?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_d?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const I=D+y+l,A=D+v+c,V=Kd(s,s.VERTEX_SHADER,I),N=Kd(s,s.FRAGMENT_SHADER,A);s.attachShader(E,V),s.attachShader(E,N),e.index0AttributeName!==void 0?s.bindAttribLocation(E,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function B(F){if(n.debug.checkShaderErrors){const $=s.getProgramInfoLog(E).trim(),Y=s.getShaderInfoLog(V).trim(),rt=s.getShaderInfoLog(N).trim();let gt=!0,J=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(gt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,E,V,N);else{const pt=Jd(s,V,"vertex"),G=Jd(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+$+`
`+pt+`
`+G)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(Y===""||rt==="")&&(J=!1);J&&(F.diagnostics={runnable:gt,programLog:$,vertexShader:{log:Y,prefix:y},fragmentShader:{log:rt,prefix:v}})}s.deleteShader(V),s.deleteShader(N),H=new Ha(s,E),R=OT(s,E)}let H;this.getUniforms=function(){return H===void 0&&B(this),H};let R;this.getAttributes=function(){return R===void 0&&B(this),R};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(E,TT)),P},this.destroy=function(){r.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wT++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=V,this.fragmentShader=N,this}let ZT=0;class qT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,r=t.fragmentShader,s=this._getShaderStage(e),a=this._getShaderStage(r),l=this._getShaderCacheForMaterial(t);return l.has(s)===!1&&(l.add(s),s.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const r of e)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let r=e.get(t);return r===void 0&&(r=new Set,e.set(t,r)),r}_getShaderStage(t){const e=this.shaderCache;let r=e.get(t);return r===void 0&&(r=new YT(t),e.set(t,r)),r}}class YT{constructor(t){this.id=ZT++,this.code=t,this.usedTimes=0}}function jT(n,t,e,r,s,a,l){const c=new Qm,h=new qT,f=new Set,d=[],p=s.logarithmicDepthBuffer,_=s.vertexTextures;let g=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(R){return f.add(R),R===0?"uv":`uv${R}`}function y(R,P,F,$,Y){const rt=$.fog,gt=Y.geometry,J=R.isMeshStandardMaterial?$.environment:null,pt=(R.isMeshStandardMaterial?e:t).get(R.envMap||J),G=pt&&pt.mapping===ml?pt.image.height:null,Ct=M[R.type];R.precision!==null&&(g=s.getMaxPrecision(R.precision),g!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",g,"instead."));const mt=gt.morphAttributes.position||gt.morphAttributes.normal||gt.morphAttributes.color,At=mt!==void 0?mt.length:0;let kt=0;gt.morphAttributes.position!==void 0&&(kt=1),gt.morphAttributes.normal!==void 0&&(kt=2),gt.morphAttributes.color!==void 0&&(kt=3);let Jt,lt,_t,xt;if(Ct){const ye=ci[Ct];Jt=ye.vertexShader,lt=ye.fragmentShader}else Jt=R.vertexShader,lt=R.fragmentShader,h.update(R),_t=h.getVertexShaderID(R),xt=h.getFragmentShaderID(R);const W=n.getRenderTarget(),dt=n.state.buffers.depth.getReversed(),yt=Y.isInstancedMesh===!0,St=Y.isBatchedMesh===!0,Wt=!!R.map,O=!!R.matcap,U=!!pt,b=!!R.aoMap,ft=!!R.lightMap,ot=!!R.bumpMap,Q=!!R.normalMap,ut=!!R.displacementMap,Mt=!!R.emissiveMap,ct=!!R.metalnessMap,w=!!R.roughnessMap,S=R.anisotropy>0,k=R.clearcoat>0,K=R.dispersion>0,nt=R.iridescence>0,tt=R.sheen>0,Pt=R.transmission>0,Et=S&&!!R.anisotropyMap,Rt=k&&!!R.clearcoatMap,Kt=k&&!!R.clearcoatNormalMap,Tt=k&&!!R.clearcoatRoughnessMap,It=nt&&!!R.iridescenceMap,qt=nt&&!!R.iridescenceThicknessMap,jt=tt&&!!R.sheenColorMap,Lt=tt&&!!R.sheenRoughnessMap,ne=!!R.specularMap,Qt=!!R.specularColorMap,xe=!!R.specularIntensityMap,X=Pt&&!!R.transmissionMap,Ot=Pt&&!!R.thicknessMap,ht=!!R.gradientMap,vt=!!R.alphaMap,Ft=R.alphaTest>0,Nt=!!R.alphaHash,se=!!R.extensions;let De=ar;R.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(De=n.toneMapping);const Ye={shaderID:Ct,shaderType:R.type,shaderName:R.name,vertexShader:Jt,fragmentShader:lt,defines:R.defines,customVertexShaderID:_t,customFragmentShaderID:xt,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:g,batching:St,batchingColor:St&&Y._colorsTexture!==null,instancing:yt,instancingColor:yt&&Y.instanceColor!==null,instancingMorph:yt&&Y.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:W===null?n.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Is,alphaToCoverage:!!R.alphaToCoverage,map:Wt,matcap:O,envMap:U,envMapMode:U&&pt.mapping,envMapCubeUVHeight:G,aoMap:b,lightMap:ft,bumpMap:ot,normalMap:Q,displacementMap:_&&ut,emissiveMap:Mt,normalMapObjectSpace:Q&&R.normalMapType===Ly,normalMapTangentSpace:Q&&R.normalMapType===Ry,metalnessMap:ct,roughnessMap:w,anisotropy:S,anisotropyMap:Et,clearcoat:k,clearcoatMap:Rt,clearcoatNormalMap:Kt,clearcoatRoughnessMap:Tt,dispersion:K,iridescence:nt,iridescenceMap:It,iridescenceThicknessMap:qt,sheen:tt,sheenColorMap:jt,sheenRoughnessMap:Lt,specularMap:ne,specularColorMap:Qt,specularIntensityMap:xe,transmission:Pt,transmissionMap:X,thicknessMap:Ot,gradientMap:ht,opaque:R.transparent===!1&&R.blending===Es&&R.alphaToCoverage===!1,alphaMap:vt,alphaTest:Ft,alphaHash:Nt,combine:R.combine,mapUv:Wt&&E(R.map.channel),aoMapUv:b&&E(R.aoMap.channel),lightMapUv:ft&&E(R.lightMap.channel),bumpMapUv:ot&&E(R.bumpMap.channel),normalMapUv:Q&&E(R.normalMap.channel),displacementMapUv:ut&&E(R.displacementMap.channel),emissiveMapUv:Mt&&E(R.emissiveMap.channel),metalnessMapUv:ct&&E(R.metalnessMap.channel),roughnessMapUv:w&&E(R.roughnessMap.channel),anisotropyMapUv:Et&&E(R.anisotropyMap.channel),clearcoatMapUv:Rt&&E(R.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&E(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&E(R.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&E(R.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&E(R.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&E(R.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&E(R.sheenRoughnessMap.channel),specularMapUv:ne&&E(R.specularMap.channel),specularColorMapUv:Qt&&E(R.specularColorMap.channel),specularIntensityMapUv:xe&&E(R.specularIntensityMap.channel),transmissionMapUv:X&&E(R.transmissionMap.channel),thicknessMapUv:Ot&&E(R.thicknessMap.channel),alphaMapUv:vt&&E(R.alphaMap.channel),vertexTangents:!!gt.attributes.tangent&&(Q||S),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!gt.attributes.color&&gt.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!gt.attributes.uv&&(Wt||vt),fog:!!rt,useFog:R.fog===!0,fogExp2:!!rt&&rt.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:dt,skinning:Y.isSkinnedMesh===!0,morphTargets:gt.morphAttributes.position!==void 0,morphNormals:gt.morphAttributes.normal!==void 0,morphColors:gt.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:kt,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:R.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:De,decodeVideoTexture:Wt&&R.map.isVideoTexture===!0&&ve.getTransfer(R.map.colorSpace)===be,decodeVideoTextureEmissive:Mt&&R.emissiveMap.isVideoTexture===!0&&ve.getTransfer(R.emissiveMap.colorSpace)===be,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Ii,flipSided:R.side===En,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:se&&R.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&R.extensions.multiDraw===!0||St)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Ye.vertexUv1s=f.has(1),Ye.vertexUv2s=f.has(2),Ye.vertexUv3s=f.has(3),f.clear(),Ye}function v(R){const P=[];if(R.shaderID?P.push(R.shaderID):(P.push(R.customVertexShaderID),P.push(R.customFragmentShaderID)),R.defines!==void 0)for(const F in R.defines)P.push(F),P.push(R.defines[F]);return R.isRawShaderMaterial===!1&&(D(P,R),I(P,R),P.push(n.outputColorSpace)),P.push(R.customProgramCacheKey),P.join()}function D(R,P){R.push(P.precision),R.push(P.outputColorSpace),R.push(P.envMapMode),R.push(P.envMapCubeUVHeight),R.push(P.mapUv),R.push(P.alphaMapUv),R.push(P.lightMapUv),R.push(P.aoMapUv),R.push(P.bumpMapUv),R.push(P.normalMapUv),R.push(P.displacementMapUv),R.push(P.emissiveMapUv),R.push(P.metalnessMapUv),R.push(P.roughnessMapUv),R.push(P.anisotropyMapUv),R.push(P.clearcoatMapUv),R.push(P.clearcoatNormalMapUv),R.push(P.clearcoatRoughnessMapUv),R.push(P.iridescenceMapUv),R.push(P.iridescenceThicknessMapUv),R.push(P.sheenColorMapUv),R.push(P.sheenRoughnessMapUv),R.push(P.specularMapUv),R.push(P.specularColorMapUv),R.push(P.specularIntensityMapUv),R.push(P.transmissionMapUv),R.push(P.thicknessMapUv),R.push(P.combine),R.push(P.fogExp2),R.push(P.sizeAttenuation),R.push(P.morphTargetsCount),R.push(P.morphAttributeCount),R.push(P.numDirLights),R.push(P.numPointLights),R.push(P.numSpotLights),R.push(P.numSpotLightMaps),R.push(P.numHemiLights),R.push(P.numRectAreaLights),R.push(P.numDirLightShadows),R.push(P.numPointLightShadows),R.push(P.numSpotLightShadows),R.push(P.numSpotLightShadowsWithMaps),R.push(P.numLightProbes),R.push(P.shadowMapType),R.push(P.toneMapping),R.push(P.numClippingPlanes),R.push(P.numClipIntersection),R.push(P.depthPacking)}function I(R,P){c.disableAll(),P.supportsVertexTextures&&c.enable(0),P.instancing&&c.enable(1),P.instancingColor&&c.enable(2),P.instancingMorph&&c.enable(3),P.matcap&&c.enable(4),P.envMap&&c.enable(5),P.normalMapObjectSpace&&c.enable(6),P.normalMapTangentSpace&&c.enable(7),P.clearcoat&&c.enable(8),P.iridescence&&c.enable(9),P.alphaTest&&c.enable(10),P.vertexColors&&c.enable(11),P.vertexAlphas&&c.enable(12),P.vertexUv1s&&c.enable(13),P.vertexUv2s&&c.enable(14),P.vertexUv3s&&c.enable(15),P.vertexTangents&&c.enable(16),P.anisotropy&&c.enable(17),P.alphaHash&&c.enable(18),P.batching&&c.enable(19),P.dispersion&&c.enable(20),P.batchingColor&&c.enable(21),R.push(c.mask),c.disableAll(),P.fog&&c.enable(0),P.useFog&&c.enable(1),P.flatShading&&c.enable(2),P.logarithmicDepthBuffer&&c.enable(3),P.reverseDepthBuffer&&c.enable(4),P.skinning&&c.enable(5),P.morphTargets&&c.enable(6),P.morphNormals&&c.enable(7),P.morphColors&&c.enable(8),P.premultipliedAlpha&&c.enable(9),P.shadowMapEnabled&&c.enable(10),P.doubleSided&&c.enable(11),P.flipSided&&c.enable(12),P.useDepthPacking&&c.enable(13),P.dithering&&c.enable(14),P.transmission&&c.enable(15),P.sheen&&c.enable(16),P.opaque&&c.enable(17),P.pointsUvs&&c.enable(18),P.decodeVideoTexture&&c.enable(19),P.decodeVideoTextureEmissive&&c.enable(20),P.alphaToCoverage&&c.enable(21),R.push(c.mask)}function A(R){const P=M[R.type];let F;if(P){const $=ci[P];F=bM.clone($.uniforms)}else F=R.uniforms;return F}function V(R,P){let F;for(let $=0,Y=d.length;$<Y;$++){const rt=d[$];if(rt.cacheKey===P){F=rt,++F.usedTimes;break}}return F===void 0&&(F=new XT(n,P,R,a),d.push(F)),F}function N(R){if(--R.usedTimes===0){const P=d.indexOf(R);d[P]=d[d.length-1],d.pop(),R.destroy()}}function B(R){h.remove(R)}function H(){h.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:A,acquireProgram:V,releaseProgram:N,releaseShaderCache:B,programs:d,dispose:H}}function KT(){let n=new WeakMap;function t(l){return n.has(l)}function e(l){let c=n.get(l);return c===void 0&&(c={},n.set(l,c)),c}function r(l){n.delete(l)}function s(l,c,h){n.get(l)[c]=h}function a(){n=new WeakMap}return{has:t,get:e,remove:r,update:s,dispose:a}}function $T(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function ip(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function rp(){const n=[];let t=0;const e=[],r=[],s=[];function a(){t=0,e.length=0,r.length=0,s.length=0}function l(p,_,g,M,E,y){let v=n[t];return v===void 0?(v={id:p.id,object:p,geometry:_,material:g,groupOrder:M,renderOrder:p.renderOrder,z:E,group:y},n[t]=v):(v.id=p.id,v.object=p,v.geometry=_,v.material=g,v.groupOrder=M,v.renderOrder=p.renderOrder,v.z=E,v.group=y),t++,v}function c(p,_,g,M,E,y){const v=l(p,_,g,M,E,y);g.transmission>0?r.push(v):g.transparent===!0?s.push(v):e.push(v)}function h(p,_,g,M,E,y){const v=l(p,_,g,M,E,y);g.transmission>0?r.unshift(v):g.transparent===!0?s.unshift(v):e.unshift(v)}function f(p,_){e.length>1&&e.sort(p||$T),r.length>1&&r.sort(_||ip),s.length>1&&s.sort(_||ip)}function d(){for(let p=t,_=n.length;p<_;p++){const g=n[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:r,transparent:s,init:a,push:c,unshift:h,finish:d,sort:f}}function JT(){let n=new WeakMap;function t(r,s){const a=n.get(r);let l;return a===void 0?(l=new rp,n.set(r,[l])):s>=a.length?(l=new rp,a.push(l)):l=a[s],l}function e(){n=new WeakMap}return{get:t,dispose:e}}function QT(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new it,color:new Te};break;case"SpotLight":e={position:new it,direction:new it,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new it,color:new Te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new it,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":e={color:new Te,position:new it,halfWidth:new it,halfHeight:new it};break}return n[t.id]=e,e}}}function tw(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let ew=0;function nw(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function iw(n){const t=new QT,e=tw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new it);const s=new it,a=new Ve,l=new Ve;function c(f){let d=0,p=0,_=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let g=0,M=0,E=0,y=0,v=0,D=0,I=0,A=0,V=0,N=0,B=0;f.sort(nw);for(let R=0,P=f.length;R<P;R++){const F=f[R],$=F.color,Y=F.intensity,rt=F.distance,gt=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)d+=$.r*Y,p+=$.g*Y,_+=$.b*Y;else if(F.isLightProbe){for(let J=0;J<9;J++)r.probe[J].addScaledVector(F.sh.coefficients[J],Y);B++}else if(F.isDirectionalLight){const J=t.get(F);if(J.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const pt=F.shadow,G=e.get(F);G.shadowIntensity=pt.intensity,G.shadowBias=pt.bias,G.shadowNormalBias=pt.normalBias,G.shadowRadius=pt.radius,G.shadowMapSize=pt.mapSize,r.directionalShadow[g]=G,r.directionalShadowMap[g]=gt,r.directionalShadowMatrix[g]=F.shadow.matrix,D++}r.directional[g]=J,g++}else if(F.isSpotLight){const J=t.get(F);J.position.setFromMatrixPosition(F.matrixWorld),J.color.copy($).multiplyScalar(Y),J.distance=rt,J.coneCos=Math.cos(F.angle),J.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),J.decay=F.decay,r.spot[E]=J;const pt=F.shadow;if(F.map&&(r.spotLightMap[V]=F.map,V++,pt.updateMatrices(F),F.castShadow&&N++),r.spotLightMatrix[E]=pt.matrix,F.castShadow){const G=e.get(F);G.shadowIntensity=pt.intensity,G.shadowBias=pt.bias,G.shadowNormalBias=pt.normalBias,G.shadowRadius=pt.radius,G.shadowMapSize=pt.mapSize,r.spotShadow[E]=G,r.spotShadowMap[E]=gt,A++}E++}else if(F.isRectAreaLight){const J=t.get(F);J.color.copy($).multiplyScalar(Y),J.halfWidth.set(F.width*.5,0,0),J.halfHeight.set(0,F.height*.5,0),r.rectArea[y]=J,y++}else if(F.isPointLight){const J=t.get(F);if(J.color.copy(F.color).multiplyScalar(F.intensity),J.distance=F.distance,J.decay=F.decay,F.castShadow){const pt=F.shadow,G=e.get(F);G.shadowIntensity=pt.intensity,G.shadowBias=pt.bias,G.shadowNormalBias=pt.normalBias,G.shadowRadius=pt.radius,G.shadowMapSize=pt.mapSize,G.shadowCameraNear=pt.camera.near,G.shadowCameraFar=pt.camera.far,r.pointShadow[M]=G,r.pointShadowMap[M]=gt,r.pointShadowMatrix[M]=F.shadow.matrix,I++}r.point[M]=J,M++}else if(F.isHemisphereLight){const J=t.get(F);J.skyColor.copy(F.color).multiplyScalar(Y),J.groundColor.copy(F.groundColor).multiplyScalar(Y),r.hemi[v]=J,v++}}y>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Dt.LTC_FLOAT_1,r.rectAreaLTC2=Dt.LTC_FLOAT_2):(r.rectAreaLTC1=Dt.LTC_HALF_1,r.rectAreaLTC2=Dt.LTC_HALF_2)),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=_;const H=r.hash;(H.directionalLength!==g||H.pointLength!==M||H.spotLength!==E||H.rectAreaLength!==y||H.hemiLength!==v||H.numDirectionalShadows!==D||H.numPointShadows!==I||H.numSpotShadows!==A||H.numSpotMaps!==V||H.numLightProbes!==B)&&(r.directional.length=g,r.spot.length=E,r.rectArea.length=y,r.point.length=M,r.hemi.length=v,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=A+V-N,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=B,H.directionalLength=g,H.pointLength=M,H.spotLength=E,H.rectAreaLength=y,H.hemiLength=v,H.numDirectionalShadows=D,H.numPointShadows=I,H.numSpotShadows=A,H.numSpotMaps=V,H.numLightProbes=B,r.version=ew++)}function h(f,d){let p=0,_=0,g=0,M=0,E=0;const y=d.matrixWorldInverse;for(let v=0,D=f.length;v<D;v++){const I=f[v];if(I.isDirectionalLight){const A=r.directional[p];A.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(y),p++}else if(I.isSpotLight){const A=r.spot[g];A.position.setFromMatrixPosition(I.matrixWorld),A.position.applyMatrix4(y),A.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(y),g++}else if(I.isRectAreaLight){const A=r.rectArea[M];A.position.setFromMatrixPosition(I.matrixWorld),A.position.applyMatrix4(y),l.identity(),a.copy(I.matrixWorld),a.premultiply(y),l.extractRotation(a),A.halfWidth.set(I.width*.5,0,0),A.halfHeight.set(0,I.height*.5,0),A.halfWidth.applyMatrix4(l),A.halfHeight.applyMatrix4(l),M++}else if(I.isPointLight){const A=r.point[_];A.position.setFromMatrixPosition(I.matrixWorld),A.position.applyMatrix4(y),_++}else if(I.isHemisphereLight){const A=r.hemi[E];A.direction.setFromMatrixPosition(I.matrixWorld),A.direction.transformDirection(y),E++}}}return{setup:c,setupView:h,state:r}}function sp(n){const t=new iw(n),e=[],r=[];function s(d){f.camera=d,e.length=0,r.length=0}function a(d){e.push(d)}function l(d){r.push(d)}function c(){t.setup(e)}function h(d){t.setupView(e,d)}const f={lightsArray:e,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:l}}function rw(n){let t=new WeakMap;function e(s,a=0){const l=t.get(s);let c;return l===void 0?(c=new sp(n),t.set(s,[c])):a>=l.length?(c=new sp(n),l.push(c)):c=l[a],c}function r(){t=new WeakMap}return{get:e,dispose:r}}const sw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ow=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function aw(n,t,e){let r=new a_;const s=new we,a=new we,l=new Be,c=new DM({depthPacking:Cy}),h=new OM,f={},d=e.maxTextureSize,p={[cr]:En,[En]:cr,[Ii]:Ii},_=new ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:sw,fragmentShader:ow}),g=_.clone();g.defines.HORIZONTAL_PASS=1;const M=new Gi;M.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Ln(M,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fm;let v=this.type;this.render=function(N,B,H){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;const R=n.getRenderTarget(),P=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),$=n.state;$.setBlending(or),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const Y=v!==Ai&&this.type===Ai,rt=v===Ai&&this.type!==Ai;for(let gt=0,J=N.length;gt<J;gt++){const pt=N[gt],G=pt.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",pt,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const Ct=G.getFrameExtents();if(s.multiply(Ct),a.copy(G.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(a.x=Math.floor(d/Ct.x),s.x=a.x*Ct.x,G.mapSize.x=a.x),s.y>d&&(a.y=Math.floor(d/Ct.y),s.y=a.y*Ct.y,G.mapSize.y=a.y)),G.map===null||Y===!0||rt===!0){const At=this.type!==Ai?{minFilter:Qn,magFilter:Qn}:{};G.map!==null&&G.map.dispose(),G.map=new Fr(s.x,s.y,At),G.map.texture.name=pt.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const mt=G.getViewportCount();for(let At=0;At<mt;At++){const kt=G.getViewport(At);l.set(a.x*kt.x,a.y*kt.y,a.x*kt.z,a.y*kt.w),$.viewport(l),G.updateMatrices(pt,At),r=G.getFrustum(),A(B,H,G.camera,pt,this.type)}G.isPointLightShadow!==!0&&this.type===Ai&&D(G,H),G.needsUpdate=!1}v=this.type,y.needsUpdate=!1,n.setRenderTarget(R,P,F)};function D(N,B){const H=t.update(E);_.defines.VSM_SAMPLES!==N.blurSamples&&(_.defines.VSM_SAMPLES=N.blurSamples,g.defines.VSM_SAMPLES=N.blurSamples,_.needsUpdate=!0,g.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Fr(s.x,s.y)),_.uniforms.shadow_pass.value=N.map.texture,_.uniforms.resolution.value=N.mapSize,_.uniforms.radius.value=N.radius,n.setRenderTarget(N.mapPass),n.clear(),n.renderBufferDirect(B,null,H,_,E,null),g.uniforms.shadow_pass.value=N.mapPass.texture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,n.setRenderTarget(N.map),n.clear(),n.renderBufferDirect(B,null,H,g,E,null)}function I(N,B,H,R){let P=null;const F=H.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(F!==void 0)P=F;else if(P=H.isPointLight===!0?h:c,n.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const $=P.uuid,Y=B.uuid;let rt=f[$];rt===void 0&&(rt={},f[$]=rt);let gt=rt[Y];gt===void 0&&(gt=P.clone(),rt[Y]=gt,B.addEventListener("dispose",V)),P=gt}if(P.visible=B.visible,P.wireframe=B.wireframe,R===Ai?P.side=B.shadowSide!==null?B.shadowSide:B.side:P.side=B.shadowSide!==null?B.shadowSide:p[B.side],P.alphaMap=B.alphaMap,P.alphaTest=B.alphaTest,P.map=B.map,P.clipShadows=B.clipShadows,P.clippingPlanes=B.clippingPlanes,P.clipIntersection=B.clipIntersection,P.displacementMap=B.displacementMap,P.displacementScale=B.displacementScale,P.displacementBias=B.displacementBias,P.wireframeLinewidth=B.wireframeLinewidth,P.linewidth=B.linewidth,H.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const $=n.properties.get(P);$.light=H}return P}function A(N,B,H,R,P){if(N.visible===!1)return;if(N.layers.test(B.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&P===Ai)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,N.matrixWorld);const Y=t.update(N),rt=N.material;if(Array.isArray(rt)){const gt=Y.groups;for(let J=0,pt=gt.length;J<pt;J++){const G=gt[J],Ct=rt[G.materialIndex];if(Ct&&Ct.visible){const mt=I(N,Ct,R,P);N.onBeforeShadow(n,N,B,H,Y,mt,G),n.renderBufferDirect(H,null,Y,mt,N,G),N.onAfterShadow(n,N,B,H,Y,mt,G)}}}else if(rt.visible){const gt=I(N,rt,R,P);N.onBeforeShadow(n,N,B,H,Y,gt,null),n.renderBufferDirect(H,null,Y,gt,N,null),N.onAfterShadow(n,N,B,H,Y,gt,null)}}const $=N.children;for(let Y=0,rt=$.length;Y<rt;Y++)A($[Y],B,H,R,P)}function V(N){N.target.removeEventListener("dispose",V);for(const H in f){const R=f[H],P=N.target.uuid;P in R&&(R[P].dispose(),delete R[P])}}}const lw={[ru]:su,[ou]:cu,[au]:uu,[Cs]:lu,[su]:ru,[cu]:ou,[uu]:au,[lu]:Cs};function cw(n,t){function e(){let X=!1;const Ot=new Be;let ht=null;const vt=new Be(0,0,0,0);return{setMask:function(Ft){ht!==Ft&&!X&&(n.colorMask(Ft,Ft,Ft,Ft),ht=Ft)},setLocked:function(Ft){X=Ft},setClear:function(Ft,Nt,se,De,Ye){Ye===!0&&(Ft*=De,Nt*=De,se*=De),Ot.set(Ft,Nt,se,De),vt.equals(Ot)===!1&&(n.clearColor(Ft,Nt,se,De),vt.copy(Ot))},reset:function(){X=!1,ht=null,vt.set(-1,0,0,0)}}}function r(){let X=!1,Ot=!1,ht=null,vt=null,Ft=null;return{setReversed:function(Nt){if(Ot!==Nt){const se=t.get("EXT_clip_control");Nt?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT),Ot=Nt;const De=Ft;Ft=null,this.setClear(De)}},getReversed:function(){return Ot},setTest:function(Nt){Nt?W(n.DEPTH_TEST):dt(n.DEPTH_TEST)},setMask:function(Nt){ht!==Nt&&!X&&(n.depthMask(Nt),ht=Nt)},setFunc:function(Nt){if(Ot&&(Nt=lw[Nt]),vt!==Nt){switch(Nt){case ru:n.depthFunc(n.NEVER);break;case su:n.depthFunc(n.ALWAYS);break;case ou:n.depthFunc(n.LESS);break;case Cs:n.depthFunc(n.LEQUAL);break;case au:n.depthFunc(n.EQUAL);break;case lu:n.depthFunc(n.GEQUAL);break;case cu:n.depthFunc(n.GREATER);break;case uu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}vt=Nt}},setLocked:function(Nt){X=Nt},setClear:function(Nt){Ft!==Nt&&(Ot&&(Nt=1-Nt),n.clearDepth(Nt),Ft=Nt)},reset:function(){X=!1,ht=null,vt=null,Ft=null,Ot=!1}}}function s(){let X=!1,Ot=null,ht=null,vt=null,Ft=null,Nt=null,se=null,De=null,Ye=null;return{setTest:function(ye){X||(ye?W(n.STENCIL_TEST):dt(n.STENCIL_TEST))},setMask:function(ye){Ot!==ye&&!X&&(n.stencilMask(ye),Ot=ye)},setFunc:function(ye,hn,Gn){(ht!==ye||vt!==hn||Ft!==Gn)&&(n.stencilFunc(ye,hn,Gn),ht=ye,vt=hn,Ft=Gn)},setOp:function(ye,hn,Gn){(Nt!==ye||se!==hn||De!==Gn)&&(n.stencilOp(ye,hn,Gn),Nt=ye,se=hn,De=Gn)},setLocked:function(ye){X=ye},setClear:function(ye){Ye!==ye&&(n.clearStencil(ye),Ye=ye)},reset:function(){X=!1,Ot=null,ht=null,vt=null,Ft=null,Nt=null,se=null,De=null,Ye=null}}}const a=new e,l=new r,c=new s,h=new WeakMap,f=new WeakMap;let d={},p={},_=new WeakMap,g=[],M=null,E=!1,y=null,v=null,D=null,I=null,A=null,V=null,N=null,B=new Te(0,0,0),H=0,R=!1,P=null,F=null,$=null,Y=null,rt=null;const gt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,pt=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(pt=parseFloat(/^WebGL (\d)/.exec(G)[1]),J=pt>=1):G.indexOf("OpenGL ES")!==-1&&(pt=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),J=pt>=2);let Ct=null,mt={};const At=n.getParameter(n.SCISSOR_BOX),kt=n.getParameter(n.VIEWPORT),Jt=new Be().fromArray(At),lt=new Be().fromArray(kt);function _t(X,Ot,ht,vt){const Ft=new Uint8Array(4),Nt=n.createTexture();n.bindTexture(X,Nt),n.texParameteri(X,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(X,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let se=0;se<ht;se++)X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?n.texImage3D(Ot,0,n.RGBA,1,1,vt,0,n.RGBA,n.UNSIGNED_BYTE,Ft):n.texImage2D(Ot+se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ft);return Nt}const xt={};xt[n.TEXTURE_2D]=_t(n.TEXTURE_2D,n.TEXTURE_2D,1),xt[n.TEXTURE_CUBE_MAP]=_t(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[n.TEXTURE_2D_ARRAY]=_t(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xt[n.TEXTURE_3D]=_t(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),W(n.DEPTH_TEST),l.setFunc(Cs),ot(!1),Q(ud),W(n.CULL_FACE),b(or);function W(X){d[X]!==!0&&(n.enable(X),d[X]=!0)}function dt(X){d[X]!==!1&&(n.disable(X),d[X]=!1)}function yt(X,Ot){return p[X]!==Ot?(n.bindFramebuffer(X,Ot),p[X]=Ot,X===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=Ot),X===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=Ot),!0):!1}function St(X,Ot){let ht=g,vt=!1;if(X){ht=_.get(Ot),ht===void 0&&(ht=[],_.set(Ot,ht));const Ft=X.textures;if(ht.length!==Ft.length||ht[0]!==n.COLOR_ATTACHMENT0){for(let Nt=0,se=Ft.length;Nt<se;Nt++)ht[Nt]=n.COLOR_ATTACHMENT0+Nt;ht.length=Ft.length,vt=!0}}else ht[0]!==n.BACK&&(ht[0]=n.BACK,vt=!0);vt&&n.drawBuffers(ht)}function Wt(X){return M!==X?(n.useProgram(X),M=X,!0):!1}const O={[Pr]:n.FUNC_ADD,[ey]:n.FUNC_SUBTRACT,[ny]:n.FUNC_REVERSE_SUBTRACT};O[iy]=n.MIN,O[ry]=n.MAX;const U={[sy]:n.ZERO,[oy]:n.ONE,[ay]:n.SRC_COLOR,[nu]:n.SRC_ALPHA,[dy]:n.SRC_ALPHA_SATURATE,[hy]:n.DST_COLOR,[cy]:n.DST_ALPHA,[ly]:n.ONE_MINUS_SRC_COLOR,[iu]:n.ONE_MINUS_SRC_ALPHA,[fy]:n.ONE_MINUS_DST_COLOR,[uy]:n.ONE_MINUS_DST_ALPHA,[py]:n.CONSTANT_COLOR,[my]:n.ONE_MINUS_CONSTANT_COLOR,[_y]:n.CONSTANT_ALPHA,[gy]:n.ONE_MINUS_CONSTANT_ALPHA};function b(X,Ot,ht,vt,Ft,Nt,se,De,Ye,ye){if(X===or){E===!0&&(dt(n.BLEND),E=!1);return}if(E===!1&&(W(n.BLEND),E=!0),X!==ty){if(X!==y||ye!==R){if((v!==Pr||A!==Pr)&&(n.blendEquation(n.FUNC_ADD),v=Pr,A=Pr),ye)switch(X){case Es:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hd:n.blendFunc(n.ONE,n.ONE);break;case fd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case dd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Es:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hd:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case fd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case dd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}D=null,I=null,V=null,N=null,B.set(0,0,0),H=0,y=X,R=ye}return}Ft=Ft||Ot,Nt=Nt||ht,se=se||vt,(Ot!==v||Ft!==A)&&(n.blendEquationSeparate(O[Ot],O[Ft]),v=Ot,A=Ft),(ht!==D||vt!==I||Nt!==V||se!==N)&&(n.blendFuncSeparate(U[ht],U[vt],U[Nt],U[se]),D=ht,I=vt,V=Nt,N=se),(De.equals(B)===!1||Ye!==H)&&(n.blendColor(De.r,De.g,De.b,Ye),B.copy(De),H=Ye),y=X,R=!1}function ft(X,Ot){X.side===Ii?dt(n.CULL_FACE):W(n.CULL_FACE);let ht=X.side===En;Ot&&(ht=!ht),ot(ht),X.blending===Es&&X.transparent===!1?b(or):b(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),l.setFunc(X.depthFunc),l.setTest(X.depthTest),l.setMask(X.depthWrite),a.setMask(X.colorWrite);const vt=X.stencilWrite;c.setTest(vt),vt&&(c.setMask(X.stencilWriteMask),c.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),c.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Mt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?W(n.SAMPLE_ALPHA_TO_COVERAGE):dt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ot(X){P!==X&&(X?n.frontFace(n.CW):n.frontFace(n.CCW),P=X)}function Q(X){X!==$0?(W(n.CULL_FACE),X!==F&&(X===ud?n.cullFace(n.BACK):X===J0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):dt(n.CULL_FACE),F=X}function ut(X){X!==$&&(J&&n.lineWidth(X),$=X)}function Mt(X,Ot,ht){X?(W(n.POLYGON_OFFSET_FILL),(Y!==Ot||rt!==ht)&&(n.polygonOffset(Ot,ht),Y=Ot,rt=ht)):dt(n.POLYGON_OFFSET_FILL)}function ct(X){X?W(n.SCISSOR_TEST):dt(n.SCISSOR_TEST)}function w(X){X===void 0&&(X=n.TEXTURE0+gt-1),Ct!==X&&(n.activeTexture(X),Ct=X)}function S(X,Ot,ht){ht===void 0&&(Ct===null?ht=n.TEXTURE0+gt-1:ht=Ct);let vt=mt[ht];vt===void 0&&(vt={type:void 0,texture:void 0},mt[ht]=vt),(vt.type!==X||vt.texture!==Ot)&&(Ct!==ht&&(n.activeTexture(ht),Ct=ht),n.bindTexture(X,Ot||xt[X]),vt.type=X,vt.texture=Ot)}function k(){const X=mt[Ct];X!==void 0&&X.type!==void 0&&(n.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function K(){try{n.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function nt(){try{n.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function tt(){try{n.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Pt(){try{n.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Et(){try{n.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Rt(){try{n.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Kt(){try{n.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Tt(){try{n.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function It(){try{n.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function qt(){try{n.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function jt(X){Jt.equals(X)===!1&&(n.scissor(X.x,X.y,X.z,X.w),Jt.copy(X))}function Lt(X){lt.equals(X)===!1&&(n.viewport(X.x,X.y,X.z,X.w),lt.copy(X))}function ne(X,Ot){let ht=f.get(Ot);ht===void 0&&(ht=new WeakMap,f.set(Ot,ht));let vt=ht.get(X);vt===void 0&&(vt=n.getUniformBlockIndex(Ot,X.name),ht.set(X,vt))}function Qt(X,Ot){const vt=f.get(Ot).get(X);h.get(Ot)!==vt&&(n.uniformBlockBinding(Ot,vt,X.__bindingPointIndex),h.set(Ot,vt))}function xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),l.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},Ct=null,mt={},p={},_=new WeakMap,g=[],M=null,E=!1,y=null,v=null,D=null,I=null,A=null,V=null,N=null,B=new Te(0,0,0),H=0,R=!1,P=null,F=null,$=null,Y=null,rt=null,Jt.set(0,0,n.canvas.width,n.canvas.height),lt.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:W,disable:dt,bindFramebuffer:yt,drawBuffers:St,useProgram:Wt,setBlending:b,setMaterial:ft,setFlipSided:ot,setCullFace:Q,setLineWidth:ut,setPolygonOffset:Mt,setScissorTest:ct,activeTexture:w,bindTexture:S,unbindTexture:k,compressedTexImage2D:K,compressedTexImage3D:nt,texImage2D:It,texImage3D:qt,updateUBOMapping:ne,uniformBlockBinding:Qt,texStorage2D:Kt,texStorage3D:Tt,texSubImage2D:tt,texSubImage3D:Pt,compressedTexSubImage2D:Et,compressedTexSubImage3D:Rt,scissor:jt,viewport:Lt,reset:xe}}function uw(n,t,e,r,s,a,l){const c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new we,d=new WeakMap;let p;const _=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(w,S){return g?new OffscreenCanvas(w,S):Qa("canvas")}function E(w,S,k){let K=1;const nt=ct(w);if((nt.width>k||nt.height>k)&&(K=k/Math.max(nt.width,nt.height)),K<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const tt=Math.floor(K*nt.width),Pt=Math.floor(K*nt.height);p===void 0&&(p=M(tt,Pt));const Et=S?M(tt,Pt):p;return Et.width=tt,Et.height=Pt,Et.getContext("2d").drawImage(w,0,0,tt,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+tt+"x"+Pt+")."),Et}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),w;return w}function y(w){return w.generateMipmaps}function v(w){n.generateMipmap(w)}function D(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function I(w,S,k,K,nt=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let tt=S;if(S===n.RED&&(k===n.FLOAT&&(tt=n.R32F),k===n.HALF_FLOAT&&(tt=n.R16F),k===n.UNSIGNED_BYTE&&(tt=n.R8)),S===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(tt=n.R8UI),k===n.UNSIGNED_SHORT&&(tt=n.R16UI),k===n.UNSIGNED_INT&&(tt=n.R32UI),k===n.BYTE&&(tt=n.R8I),k===n.SHORT&&(tt=n.R16I),k===n.INT&&(tt=n.R32I)),S===n.RG&&(k===n.FLOAT&&(tt=n.RG32F),k===n.HALF_FLOAT&&(tt=n.RG16F),k===n.UNSIGNED_BYTE&&(tt=n.RG8)),S===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(tt=n.RG8UI),k===n.UNSIGNED_SHORT&&(tt=n.RG16UI),k===n.UNSIGNED_INT&&(tt=n.RG32UI),k===n.BYTE&&(tt=n.RG8I),k===n.SHORT&&(tt=n.RG16I),k===n.INT&&(tt=n.RG32I)),S===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(tt=n.RGB8UI),k===n.UNSIGNED_SHORT&&(tt=n.RGB16UI),k===n.UNSIGNED_INT&&(tt=n.RGB32UI),k===n.BYTE&&(tt=n.RGB8I),k===n.SHORT&&(tt=n.RGB16I),k===n.INT&&(tt=n.RGB32I)),S===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(tt=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(tt=n.RGBA16UI),k===n.UNSIGNED_INT&&(tt=n.RGBA32UI),k===n.BYTE&&(tt=n.RGBA8I),k===n.SHORT&&(tt=n.RGBA16I),k===n.INT&&(tt=n.RGBA32I)),S===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(tt=n.RGB9_E5),S===n.RGBA){const Pt=nt?$a:ve.getTransfer(K);k===n.FLOAT&&(tt=n.RGBA32F),k===n.HALF_FLOAT&&(tt=n.RGBA16F),k===n.UNSIGNED_BYTE&&(tt=Pt===be?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(tt=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(tt=n.RGB5_A1)}return(tt===n.R16F||tt===n.R32F||tt===n.RG16F||tt===n.RG32F||tt===n.RGBA16F||tt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function A(w,S){let k;return w?S===null||S===Nr||S===Ro?k=n.DEPTH24_STENCIL8:S===Di?k=n.DEPTH32F_STENCIL8:S===Co&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Nr||S===Ro?k=n.DEPTH_COMPONENT24:S===Di?k=n.DEPTH_COMPONENT32F:S===Co&&(k=n.DEPTH_COMPONENT16),k}function V(w,S){return y(w)===!0||w.isFramebufferTexture&&w.minFilter!==Qn&&w.minFilter!==kn?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function N(w){const S=w.target;S.removeEventListener("dispose",N),H(S),S.isVideoTexture&&d.delete(S)}function B(w){const S=w.target;S.removeEventListener("dispose",B),P(S)}function H(w){const S=r.get(w);if(S.__webglInit===void 0)return;const k=w.source,K=_.get(k);if(K){const nt=K[S.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&R(w),Object.keys(K).length===0&&_.delete(k)}r.remove(w)}function R(w){const S=r.get(w);n.deleteTexture(S.__webglTexture);const k=w.source,K=_.get(k);delete K[S.__cacheKey],l.memory.textures--}function P(w){const S=r.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),r.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let nt=0;nt<S.__webglFramebuffer[K].length;nt++)n.deleteFramebuffer(S.__webglFramebuffer[K][nt]);else n.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)n.deleteFramebuffer(S.__webglFramebuffer[K]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=w.textures;for(let K=0,nt=k.length;K<nt;K++){const tt=r.get(k[K]);tt.__webglTexture&&(n.deleteTexture(tt.__webglTexture),l.memory.textures--),r.remove(k[K])}r.remove(w)}let F=0;function $(){F=0}function Y(){const w=F;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),F+=1,w}function rt(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function gt(w,S){const k=r.get(w);if(w.isVideoTexture&&ut(w),w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){const K=w.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(k,w,S);return}}e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+S)}function J(w,S){const k=r.get(w);if(w.version>0&&k.__version!==w.version){lt(k,w,S);return}e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+S)}function pt(w,S){const k=r.get(w);if(w.version>0&&k.__version!==w.version){lt(k,w,S);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+S)}function G(w,S){const k=r.get(w);if(w.version>0&&k.__version!==w.version){_t(k,w,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+S)}const Ct={[du]:n.REPEAT,[Lr]:n.CLAMP_TO_EDGE,[pu]:n.MIRRORED_REPEAT},mt={[Qn]:n.NEAREST,[Ay]:n.NEAREST_MIPMAP_NEAREST,[sa]:n.NEAREST_MIPMAP_LINEAR,[kn]:n.LINEAR,[lc]:n.LINEAR_MIPMAP_NEAREST,[Ir]:n.LINEAR_MIPMAP_LINEAR},At={[Iy]:n.NEVER,[By]:n.ALWAYS,[Dy]:n.LESS,[Km]:n.LEQUAL,[Oy]:n.EQUAL,[Fy]:n.GEQUAL,[Uy]:n.GREATER,[Ny]:n.NOTEQUAL};function kt(w,S){if(S.type===Di&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===kn||S.magFilter===lc||S.magFilter===sa||S.magFilter===Ir||S.minFilter===kn||S.minFilter===lc||S.minFilter===sa||S.minFilter===Ir)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,Ct[S.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,Ct[S.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,Ct[S.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,mt[S.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,mt[S.minFilter]),S.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,At[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Qn||S.minFilter!==sa&&S.minFilter!==Ir||S.type===Di&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||r.get(S).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),r.get(S).__currentAnisotropy=S.anisotropy}}}function Jt(w,S){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",N));const K=S.source;let nt=_.get(K);nt===void 0&&(nt={},_.set(K,nt));const tt=rt(S);if(tt!==w.__cacheKey){nt[tt]===void 0&&(nt[tt]={texture:n.createTexture(),usedTimes:0},l.memory.textures++,k=!0),nt[tt].usedTimes++;const Pt=nt[w.__cacheKey];Pt!==void 0&&(nt[w.__cacheKey].usedTimes--,Pt.usedTimes===0&&R(S)),w.__cacheKey=tt,w.__webglTexture=nt[tt].texture}return k}function lt(w,S,k){let K=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=n.TEXTURE_3D);const nt=Jt(w,S),tt=S.source;e.bindTexture(K,w.__webglTexture,n.TEXTURE0+k);const Pt=r.get(tt);if(tt.version!==Pt.__version||nt===!0){e.activeTexture(n.TEXTURE0+k);const Et=ve.getPrimaries(ve.workingColorSpace),Rt=S.colorSpace===rr?null:ve.getPrimaries(S.colorSpace),Kt=S.colorSpace===rr||Et===Rt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let Tt=E(S.image,!1,s.maxTextureSize);Tt=Mt(S,Tt);const It=a.convert(S.format,S.colorSpace),qt=a.convert(S.type);let jt=I(S.internalFormat,It,qt,S.colorSpace,S.isVideoTexture);kt(K,S);let Lt;const ne=S.mipmaps,Qt=S.isVideoTexture!==!0,xe=Pt.__version===void 0||nt===!0,X=tt.dataReady,Ot=V(S,Tt);if(S.isDepthTexture)jt=A(S.format===Io,S.type),xe&&(Qt?e.texStorage2D(n.TEXTURE_2D,1,jt,Tt.width,Tt.height):e.texImage2D(n.TEXTURE_2D,0,jt,Tt.width,Tt.height,0,It,qt,null));else if(S.isDataTexture)if(ne.length>0){Qt&&xe&&e.texStorage2D(n.TEXTURE_2D,Ot,jt,ne[0].width,ne[0].height);for(let ht=0,vt=ne.length;ht<vt;ht++)Lt=ne[ht],Qt?X&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,Lt.width,Lt.height,It,qt,Lt.data):e.texImage2D(n.TEXTURE_2D,ht,jt,Lt.width,Lt.height,0,It,qt,Lt.data);S.generateMipmaps=!1}else Qt?(xe&&e.texStorage2D(n.TEXTURE_2D,Ot,jt,Tt.width,Tt.height),X&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Tt.width,Tt.height,It,qt,Tt.data)):e.texImage2D(n.TEXTURE_2D,0,jt,Tt.width,Tt.height,0,It,qt,Tt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Qt&&xe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ot,jt,ne[0].width,ne[0].height,Tt.depth);for(let ht=0,vt=ne.length;ht<vt;ht++)if(Lt=ne[ht],S.format!==$n)if(It!==null)if(Qt){if(X)if(S.layerUpdates.size>0){const Ft=Ud(Lt.width,Lt.height,S.format,S.type);for(const Nt of S.layerUpdates){const se=Lt.data.subarray(Nt*Ft/Lt.data.BYTES_PER_ELEMENT,(Nt+1)*Ft/Lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,Nt,Lt.width,Lt.height,1,It,se)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,0,Lt.width,Lt.height,Tt.depth,It,Lt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ht,jt,Lt.width,Lt.height,Tt.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?X&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,0,Lt.width,Lt.height,Tt.depth,It,qt,Lt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ht,jt,Lt.width,Lt.height,Tt.depth,0,It,qt,Lt.data)}else{Qt&&xe&&e.texStorage2D(n.TEXTURE_2D,Ot,jt,ne[0].width,ne[0].height);for(let ht=0,vt=ne.length;ht<vt;ht++)Lt=ne[ht],S.format!==$n?It!==null?Qt?X&&e.compressedTexSubImage2D(n.TEXTURE_2D,ht,0,0,Lt.width,Lt.height,It,Lt.data):e.compressedTexImage2D(n.TEXTURE_2D,ht,jt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?X&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,Lt.width,Lt.height,It,qt,Lt.data):e.texImage2D(n.TEXTURE_2D,ht,jt,Lt.width,Lt.height,0,It,qt,Lt.data)}else if(S.isDataArrayTexture)if(Qt){if(xe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ot,jt,Tt.width,Tt.height,Tt.depth),X)if(S.layerUpdates.size>0){const ht=Ud(Tt.width,Tt.height,S.format,S.type);for(const vt of S.layerUpdates){const Ft=Tt.data.subarray(vt*ht/Tt.data.BYTES_PER_ELEMENT,(vt+1)*ht/Tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,vt,Tt.width,Tt.height,1,It,qt,Ft)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,It,qt,Tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,jt,Tt.width,Tt.height,Tt.depth,0,It,qt,Tt.data);else if(S.isData3DTexture)Qt?(xe&&e.texStorage3D(n.TEXTURE_3D,Ot,jt,Tt.width,Tt.height,Tt.depth),X&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,It,qt,Tt.data)):e.texImage3D(n.TEXTURE_3D,0,jt,Tt.width,Tt.height,Tt.depth,0,It,qt,Tt.data);else if(S.isFramebufferTexture){if(xe)if(Qt)e.texStorage2D(n.TEXTURE_2D,Ot,jt,Tt.width,Tt.height);else{let ht=Tt.width,vt=Tt.height;for(let Ft=0;Ft<Ot;Ft++)e.texImage2D(n.TEXTURE_2D,Ft,jt,ht,vt,0,It,qt,null),ht>>=1,vt>>=1}}else if(ne.length>0){if(Qt&&xe){const ht=ct(ne[0]);e.texStorage2D(n.TEXTURE_2D,Ot,jt,ht.width,ht.height)}for(let ht=0,vt=ne.length;ht<vt;ht++)Lt=ne[ht],Qt?X&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,It,qt,Lt):e.texImage2D(n.TEXTURE_2D,ht,jt,It,qt,Lt);S.generateMipmaps=!1}else if(Qt){if(xe){const ht=ct(Tt);e.texStorage2D(n.TEXTURE_2D,Ot,jt,ht.width,ht.height)}X&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,It,qt,Tt)}else e.texImage2D(n.TEXTURE_2D,0,jt,It,qt,Tt);y(S)&&v(K),Pt.__version=tt.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function _t(w,S,k){if(S.image.length!==6)return;const K=Jt(w,S),nt=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+k);const tt=r.get(nt);if(nt.version!==tt.__version||K===!0){e.activeTexture(n.TEXTURE0+k);const Pt=ve.getPrimaries(ve.workingColorSpace),Et=S.colorSpace===rr?null:ve.getPrimaries(S.colorSpace),Rt=S.colorSpace===rr||Pt===Et?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const Kt=S.isCompressedTexture||S.image[0].isCompressedTexture,Tt=S.image[0]&&S.image[0].isDataTexture,It=[];for(let vt=0;vt<6;vt++)!Kt&&!Tt?It[vt]=E(S.image[vt],!0,s.maxCubemapSize):It[vt]=Tt?S.image[vt].image:S.image[vt],It[vt]=Mt(S,It[vt]);const qt=It[0],jt=a.convert(S.format,S.colorSpace),Lt=a.convert(S.type),ne=I(S.internalFormat,jt,Lt,S.colorSpace),Qt=S.isVideoTexture!==!0,xe=tt.__version===void 0||K===!0,X=nt.dataReady;let Ot=V(S,qt);kt(n.TEXTURE_CUBE_MAP,S);let ht;if(Kt){Qt&&xe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ot,ne,qt.width,qt.height);for(let vt=0;vt<6;vt++){ht=It[vt].mipmaps;for(let Ft=0;Ft<ht.length;Ft++){const Nt=ht[Ft];S.format!==$n?jt!==null?Qt?X&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft,0,0,Nt.width,Nt.height,jt,Nt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft,ne,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qt?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft,0,0,Nt.width,Nt.height,jt,Lt,Nt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft,ne,Nt.width,Nt.height,0,jt,Lt,Nt.data)}}}else{if(ht=S.mipmaps,Qt&&xe){ht.length>0&&Ot++;const vt=ct(It[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ot,ne,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Tt){Qt?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,It[vt].width,It[vt].height,jt,Lt,It[vt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ne,It[vt].width,It[vt].height,0,jt,Lt,It[vt].data);for(let Ft=0;Ft<ht.length;Ft++){const se=ht[Ft].image[vt].image;Qt?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft+1,0,0,se.width,se.height,jt,Lt,se.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft+1,ne,se.width,se.height,0,jt,Lt,se.data)}}else{Qt?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,jt,Lt,It[vt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ne,jt,Lt,It[vt]);for(let Ft=0;Ft<ht.length;Ft++){const Nt=ht[Ft];Qt?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft+1,0,0,jt,Lt,Nt.image[vt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft+1,ne,jt,Lt,Nt.image[vt])}}}y(S)&&v(n.TEXTURE_CUBE_MAP),tt.__version=nt.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function xt(w,S,k,K,nt,tt){const Pt=a.convert(k.format,k.colorSpace),Et=a.convert(k.type),Rt=I(k.internalFormat,Pt,Et,k.colorSpace),Kt=r.get(S),Tt=r.get(k);if(Tt.__renderTarget=S,!Kt.__hasExternalTextures){const It=Math.max(1,S.width>>tt),qt=Math.max(1,S.height>>tt);nt===n.TEXTURE_3D||nt===n.TEXTURE_2D_ARRAY?e.texImage3D(nt,tt,Rt,It,qt,S.depth,0,Pt,Et,null):e.texImage2D(nt,tt,Rt,It,qt,0,Pt,Et,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),Q(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,nt,Tt.__webglTexture,0,ot(S)):(nt===n.TEXTURE_2D||nt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,nt,Tt.__webglTexture,tt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function W(w,S,k){if(n.bindRenderbuffer(n.RENDERBUFFER,w),S.depthBuffer){const K=S.depthTexture,nt=K&&K.isDepthTexture?K.type:null,tt=A(S.stencilBuffer,nt),Pt=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Et=ot(S);Q(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Et,tt,S.width,S.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,Et,tt,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,tt,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pt,n.RENDERBUFFER,w)}else{const K=S.textures;for(let nt=0;nt<K.length;nt++){const tt=K[nt],Pt=a.convert(tt.format,tt.colorSpace),Et=a.convert(tt.type),Rt=I(tt.internalFormat,Pt,Et,tt.colorSpace),Kt=ot(S);k&&Q(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Kt,Rt,S.width,S.height):Q(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Kt,Rt,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Rt,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function dt(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=r.get(S.depthTexture);K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),gt(S.depthTexture,0);const nt=K.__webglTexture,tt=ot(S);if(S.depthTexture.format===Lo)Q(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0);else if(S.depthTexture.format===Io)Q(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function yt(w){const S=r.get(w),k=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const K=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){const nt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",nt)};K.addEventListener("dispose",nt),S.__depthDisposeCallback=nt}S.__boundDepthTexture=K}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");dt(S.__webglFramebuffer,w)}else if(k){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=n.createRenderbuffer(),W(S.__webglDepthbuffer[K],w,!1);else{const nt=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=S.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),W(S.__webglDepthbuffer,w,!1);else{const K=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,nt=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,nt),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,nt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function St(w,S,k){const K=r.get(w);S!==void 0&&xt(K.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&yt(w)}function Wt(w){const S=w.texture,k=r.get(w),K=r.get(S);w.addEventListener("dispose",B);const nt=w.textures,tt=w.isWebGLCubeRenderTarget===!0,Pt=nt.length>1;if(Pt||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=S.version,l.memory.textures++),tt){k.__webglFramebuffer=[];for(let Et=0;Et<6;Et++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[Et]=[];for(let Rt=0;Rt<S.mipmaps.length;Rt++)k.__webglFramebuffer[Et][Rt]=n.createFramebuffer()}else k.__webglFramebuffer[Et]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let Et=0;Et<S.mipmaps.length;Et++)k.__webglFramebuffer[Et]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(Pt)for(let Et=0,Rt=nt.length;Et<Rt;Et++){const Kt=r.get(nt[Et]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=n.createTexture(),l.memory.textures++)}if(w.samples>0&&Q(w)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Et=0;Et<nt.length;Et++){const Rt=nt[Et];k.__webglColorRenderbuffer[Et]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[Et]);const Kt=a.convert(Rt.format,Rt.colorSpace),Tt=a.convert(Rt.type),It=I(Rt.internalFormat,Kt,Tt,Rt.colorSpace,w.isXRRenderTarget===!0),qt=ot(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,qt,It,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,k.__webglColorRenderbuffer[Et])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),W(k.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(tt){e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),kt(n.TEXTURE_CUBE_MAP,S);for(let Et=0;Et<6;Et++)if(S.mipmaps&&S.mipmaps.length>0)for(let Rt=0;Rt<S.mipmaps.length;Rt++)xt(k.__webglFramebuffer[Et][Rt],w,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Rt);else xt(k.__webglFramebuffer[Et],w,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0);y(S)&&v(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let Et=0,Rt=nt.length;Et<Rt;Et++){const Kt=nt[Et],Tt=r.get(Kt);e.bindTexture(n.TEXTURE_2D,Tt.__webglTexture),kt(n.TEXTURE_2D,Kt),xt(k.__webglFramebuffer,w,Kt,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,0),y(Kt)&&v(n.TEXTURE_2D)}e.unbindTexture()}else{let Et=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Et=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Et,K.__webglTexture),kt(Et,S),S.mipmaps&&S.mipmaps.length>0)for(let Rt=0;Rt<S.mipmaps.length;Rt++)xt(k.__webglFramebuffer[Rt],w,S,n.COLOR_ATTACHMENT0,Et,Rt);else xt(k.__webglFramebuffer,w,S,n.COLOR_ATTACHMENT0,Et,0);y(S)&&v(Et),e.unbindTexture()}w.depthBuffer&&yt(w)}function O(w){const S=w.textures;for(let k=0,K=S.length;k<K;k++){const nt=S[k];if(y(nt)){const tt=D(w),Pt=r.get(nt).__webglTexture;e.bindTexture(tt,Pt),v(tt),e.unbindTexture()}}}const U=[],b=[];function ft(w){if(w.samples>0){if(Q(w)===!1){const S=w.textures,k=w.width,K=w.height;let nt=n.COLOR_BUFFER_BIT;const tt=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pt=r.get(w),Et=S.length>1;if(Et)for(let Rt=0;Rt<S.length;Rt++)e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Rt=0;Rt<S.length;Rt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(nt|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(nt|=n.STENCIL_BUFFER_BIT)),Et){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pt.__webglColorRenderbuffer[Rt]);const Kt=r.get(S[Rt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Kt,0)}n.blitFramebuffer(0,0,k,K,0,0,k,K,nt,n.NEAREST),h===!0&&(U.length=0,b.length=0,U.push(n.COLOR_ATTACHMENT0+Rt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(U.push(tt),b.push(tt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,b)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,U))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Et)for(let Rt=0;Rt<S.length;Rt++){e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.RENDERBUFFER,Pt.__webglColorRenderbuffer[Rt]);const Kt=r.get(S[Rt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.TEXTURE_2D,Kt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&h){const S=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function ot(w){return Math.min(s.maxSamples,w.samples)}function Q(w){const S=r.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ut(w){const S=l.render.frame;d.get(w)!==S&&(d.set(w,S),w.update())}function Mt(w,S){const k=w.colorSpace,K=w.format,nt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||k!==Is&&k!==rr&&(ve.getTransfer(k)===be?(K!==$n||nt!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function ct(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(f.width=w.naturalWidth||w.width,f.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(f.width=w.displayWidth,f.height=w.displayHeight):(f.width=w.width,f.height=w.height),f}this.allocateTextureUnit=Y,this.resetTextureUnits=$,this.setTexture2D=gt,this.setTexture2DArray=J,this.setTexture3D=pt,this.setTextureCube=G,this.rebindTextures=St,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Q}function hw(n,t){function e(r,s=rr){let a;const l=ve.getTransfer(s);if(r===ki)return n.UNSIGNED_BYTE;if(r===vh)return n.UNSIGNED_SHORT_4_4_4_4;if(r===xh)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Vm)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===km)return n.BYTE;if(r===Hm)return n.SHORT;if(r===Co)return n.UNSIGNED_SHORT;if(r===gh)return n.INT;if(r===Nr)return n.UNSIGNED_INT;if(r===Di)return n.FLOAT;if(r===Fo)return n.HALF_FLOAT;if(r===Gm)return n.ALPHA;if(r===Wm)return n.RGB;if(r===$n)return n.RGBA;if(r===Xm)return n.LUMINANCE;if(r===Zm)return n.LUMINANCE_ALPHA;if(r===Lo)return n.DEPTH_COMPONENT;if(r===Io)return n.DEPTH_STENCIL;if(r===qm)return n.RED;if(r===yh)return n.RED_INTEGER;if(r===Ym)return n.RG;if(r===Mh)return n.RG_INTEGER;if(r===Sh)return n.RGBA_INTEGER;if(r===Ua||r===Na||r===Fa||r===Ba)if(l===be)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ua)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Na)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ua)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Na)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ba)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===mu||r===_u||r===gu||r===vu)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===mu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===_u)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===gu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===vu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===xu||r===yu||r===Mu)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===xu||r===yu)return l===be?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Mu)return l===be?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Su||r===Eu||r===bu||r===Tu||r===wu||r===Au||r===Pu||r===Cu||r===Ru||r===Lu||r===Iu||r===Du||r===Ou||r===Uu)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Su)return l===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Eu)return l===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===bu)return l===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Tu)return l===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===wu)return l===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Au)return l===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Pu)return l===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Cu)return l===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ru)return l===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Lu)return l===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Iu)return l===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Du)return l===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ou)return l===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Uu)return l===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===za||r===Nu||r===Fu)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===za)return l===be?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Nu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Fu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===jm||r===Bu||r===zu||r===ku)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===za)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Bu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===zu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ku)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ro?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:e}}const fw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class pw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,r){if(this.texture===null){const s=new xn,a=t.properties.get(s);a.__webglTexture=e.texture,(e.depthNear!==r.depthNear||e.depthFar!==r.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,r=new ur({vertexShader:fw,fragmentShader:dw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ln(new vl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mw extends zr{constructor(t,e){super();const r=this;let s=null,a=1,l=null,c="local-floor",h=1,f=null,d=null,p=null,_=null,g=null,M=null;const E=new pw,y=e.getContextAttributes();let v=null,D=null;const I=[],A=[],V=new we;let N=null;const B=new zn;B.viewport=new Be;const H=new zn;H.viewport=new Be;const R=[B,H],P=new NM;let F=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(lt){let _t=I[lt];return _t===void 0&&(_t=new Pc,I[lt]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(lt){let _t=I[lt];return _t===void 0&&(_t=new Pc,I[lt]=_t),_t.getGripSpace()},this.getHand=function(lt){let _t=I[lt];return _t===void 0&&(_t=new Pc,I[lt]=_t),_t.getHandSpace()};function Y(lt){const _t=A.indexOf(lt.inputSource);if(_t===-1)return;const xt=I[_t];xt!==void 0&&(xt.update(lt.inputSource,lt.frame,f||l),xt.dispatchEvent({type:lt.type,data:lt.inputSource}))}function rt(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",rt),s.removeEventListener("inputsourceschange",gt);for(let lt=0;lt<I.length;lt++){const _t=A[lt];_t!==null&&(A[lt]=null,I[lt].disconnect(_t))}F=null,$=null,E.reset(),t.setRenderTarget(v),g=null,_=null,p=null,s=null,D=null,Jt.stop(),r.isPresenting=!1,t.setPixelRatio(N),t.setSize(V.width,V.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(lt){a=lt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(lt){c=lt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(lt){f=lt},this.getBaseLayer=function(){return _!==null?_:g},this.getBinding=function(){return p},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(lt){if(s=lt,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",rt),s.addEventListener("inputsourceschange",gt),y.xrCompatible!==!0&&await e.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(V),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,W=null,dt=null;y.depth&&(dt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=y.stencil?Io:Lo,W=y.stencil?Ro:Nr);const yt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:a};p=new XRWebGLBinding(s,e),_=p.createProjectionLayer(yt),s.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),D=new Fr(_.textureWidth,_.textureHeight,{format:$n,type:ki,depthTexture:new l_(_.textureWidth,_.textureHeight,W,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const xt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),D=new Fr(g.framebufferWidth,g.framebufferHeight,{format:$n,type:ki,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(h),f=null,l=await s.requestReferenceSpace(c),Jt.setContext(s),Jt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function gt(lt){for(let _t=0;_t<lt.removed.length;_t++){const xt=lt.removed[_t],W=A.indexOf(xt);W>=0&&(A[W]=null,I[W].disconnect(xt))}for(let _t=0;_t<lt.added.length;_t++){const xt=lt.added[_t];let W=A.indexOf(xt);if(W===-1){for(let yt=0;yt<I.length;yt++)if(yt>=A.length){A.push(xt),W=yt;break}else if(A[yt]===null){A[yt]=xt,W=yt;break}if(W===-1)break}const dt=I[W];dt&&dt.connect(xt)}}const J=new it,pt=new it;function G(lt,_t,xt){J.setFromMatrixPosition(_t.matrixWorld),pt.setFromMatrixPosition(xt.matrixWorld);const W=J.distanceTo(pt),dt=_t.projectionMatrix.elements,yt=xt.projectionMatrix.elements,St=dt[14]/(dt[10]-1),Wt=dt[14]/(dt[10]+1),O=(dt[9]+1)/dt[5],U=(dt[9]-1)/dt[5],b=(dt[8]-1)/dt[0],ft=(yt[8]+1)/yt[0],ot=St*b,Q=St*ft,ut=W/(-b+ft),Mt=ut*-b;if(_t.matrixWorld.decompose(lt.position,lt.quaternion,lt.scale),lt.translateX(Mt),lt.translateZ(ut),lt.matrixWorld.compose(lt.position,lt.quaternion,lt.scale),lt.matrixWorldInverse.copy(lt.matrixWorld).invert(),dt[10]===-1)lt.projectionMatrix.copy(_t.projectionMatrix),lt.projectionMatrixInverse.copy(_t.projectionMatrixInverse);else{const ct=St+ut,w=Wt+ut,S=ot-Mt,k=Q+(W-Mt),K=O*Wt/w*ct,nt=U*Wt/w*ct;lt.projectionMatrix.makePerspective(S,k,K,nt,ct,w),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert()}}function Ct(lt,_t){_t===null?lt.matrixWorld.copy(lt.matrix):lt.matrixWorld.multiplyMatrices(_t.matrixWorld,lt.matrix),lt.matrixWorldInverse.copy(lt.matrixWorld).invert()}this.updateCamera=function(lt){if(s===null)return;let _t=lt.near,xt=lt.far;E.texture!==null&&(E.depthNear>0&&(_t=E.depthNear),E.depthFar>0&&(xt=E.depthFar)),P.near=H.near=B.near=_t,P.far=H.far=B.far=xt,(F!==P.near||$!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),F=P.near,$=P.far),B.layers.mask=lt.layers.mask|2,H.layers.mask=lt.layers.mask|4,P.layers.mask=B.layers.mask|H.layers.mask;const W=lt.parent,dt=P.cameras;Ct(P,W);for(let yt=0;yt<dt.length;yt++)Ct(dt[yt],W);dt.length===2?G(P,B,H):P.projectionMatrix.copy(B.projectionMatrix),mt(lt,P,W)};function mt(lt,_t,xt){xt===null?lt.matrix.copy(_t.matrixWorld):(lt.matrix.copy(xt.matrixWorld),lt.matrix.invert(),lt.matrix.multiply(_t.matrixWorld)),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.updateMatrixWorld(!0),lt.projectionMatrix.copy(_t.projectionMatrix),lt.projectionMatrixInverse.copy(_t.projectionMatrixInverse),lt.isPerspectiveCamera&&(lt.fov=Do*2*Math.atan(1/lt.projectionMatrix.elements[5]),lt.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(_===null&&g===null))return h},this.setFoveation=function(lt){h=lt,_!==null&&(_.fixedFoveation=lt),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=lt)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(P)};let At=null;function kt(lt,_t){if(d=_t.getViewerPose(f||l),M=_t,d!==null){const xt=d.views;g!==null&&(t.setRenderTargetFramebuffer(D,g.framebuffer),t.setRenderTarget(D));let W=!1;xt.length!==P.cameras.length&&(P.cameras.length=0,W=!0);for(let St=0;St<xt.length;St++){const Wt=xt[St];let O=null;if(g!==null)O=g.getViewport(Wt);else{const b=p.getViewSubImage(_,Wt);O=b.viewport,St===0&&(t.setRenderTargetTextures(D,b.colorTexture,b.depthStencilTexture),t.setRenderTarget(D))}let U=R[St];U===void 0&&(U=new zn,U.layers.enable(St),U.viewport=new Be,R[St]=U),U.matrix.fromArray(Wt.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(Wt.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(O.x,O.y,O.width,O.height),St===0&&(P.matrix.copy(U.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),W===!0&&P.cameras.push(U)}const dt=s.enabledFeatures;if(dt&&dt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&p){const St=p.getDepthInformation(xt[0]);St&&St.isValid&&St.texture&&E.init(t,St,s.renderState)}}for(let xt=0;xt<I.length;xt++){const W=A[xt],dt=I[xt];W!==null&&dt!==void 0&&dt.update(W,_t,f||l)}At&&At(lt,_t),_t.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:_t}),M=null}const Jt=new c_;Jt.setAnimationLoop(kt),this.setAnimationLoop=function(lt){At=lt},this.dispose=function(){}}}const br=new ei,_w=new Ve;function gw(n,t){function e(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,i_(n)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function s(y,v,D,I,A){v.isMeshBasicMaterial||v.isMeshLambertMaterial?a(y,v):v.isMeshToonMaterial?(a(y,v),p(y,v)):v.isMeshPhongMaterial?(a(y,v),d(y,v)):v.isMeshStandardMaterial?(a(y,v),_(y,v),v.isMeshPhysicalMaterial&&g(y,v,A)):v.isMeshMatcapMaterial?(a(y,v),M(y,v)):v.isMeshDepthMaterial?a(y,v):v.isMeshDistanceMaterial?(a(y,v),E(y,v)):v.isMeshNormalMaterial?a(y,v):v.isLineBasicMaterial?(l(y,v),v.isLineDashedMaterial&&c(y,v)):v.isPointsMaterial?h(y,v,D,I):v.isSpriteMaterial?f(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function a(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,e(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,e(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,e(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===En&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,e(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===En&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,e(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,e(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,e(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const D=t.get(v),I=D.envMap,A=D.envMapRotation;I&&(y.envMap.value=I,br.copy(A),br.x*=-1,br.y*=-1,br.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),y.envMapRotation.value.setFromMatrix4(_w.makeRotationFromEuler(br)),y.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,e(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,e(v.aoMap,y.aoMapTransform))}function l(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,e(v.map,y.mapTransform))}function c(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function h(y,v,D,I){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*D,y.scale.value=I*.5,v.map&&(y.map.value=v.map,e(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,e(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function f(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,e(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,e(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function d(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function p(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function _(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,e(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,e(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function g(y,v,D){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,e(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,e(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,e(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,e(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,e(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===En&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,e(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,e(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,e(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,e(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,e(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,e(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,e(v.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,v){v.matcap&&(y.matcap.value=v.matcap)}function E(y,v){const D=t.get(v).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:s}}function vw(n,t,e,r){let s={},a={},l=[];const c=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function h(D,I){const A=I.program;r.uniformBlockBinding(D,A)}function f(D,I){let A=s[D.id];A===void 0&&(M(D),A=d(D),s[D.id]=A,D.addEventListener("dispose",y));const V=I.program;r.updateUBOMapping(D,V);const N=t.render.frame;a[D.id]!==N&&(_(D),a[D.id]=N)}function d(D){const I=p();D.__bindingPointIndex=I;const A=n.createBuffer(),V=D.__size,N=D.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,V,N),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,I,A),A}function p(){for(let D=0;D<c;D++)if(l.indexOf(D)===-1)return l.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(D){const I=s[D.id],A=D.uniforms,V=D.__cache;n.bindBuffer(n.UNIFORM_BUFFER,I);for(let N=0,B=A.length;N<B;N++){const H=Array.isArray(A[N])?A[N]:[A[N]];for(let R=0,P=H.length;R<P;R++){const F=H[R];if(g(F,N,R,V)===!0){const $=F.__offset,Y=Array.isArray(F.value)?F.value:[F.value];let rt=0;for(let gt=0;gt<Y.length;gt++){const J=Y[gt],pt=E(J);typeof J=="number"||typeof J=="boolean"?(F.__data[0]=J,n.bufferSubData(n.UNIFORM_BUFFER,$+rt,F.__data)):J.isMatrix3?(F.__data[0]=J.elements[0],F.__data[1]=J.elements[1],F.__data[2]=J.elements[2],F.__data[3]=0,F.__data[4]=J.elements[3],F.__data[5]=J.elements[4],F.__data[6]=J.elements[5],F.__data[7]=0,F.__data[8]=J.elements[6],F.__data[9]=J.elements[7],F.__data[10]=J.elements[8],F.__data[11]=0):(J.toArray(F.__data,rt),rt+=pt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,$,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(D,I,A,V){const N=D.value,B=I+"_"+A;if(V[B]===void 0)return typeof N=="number"||typeof N=="boolean"?V[B]=N:V[B]=N.clone(),!0;{const H=V[B];if(typeof N=="number"||typeof N=="boolean"){if(H!==N)return V[B]=N,!0}else if(H.equals(N)===!1)return H.copy(N),!0}return!1}function M(D){const I=D.uniforms;let A=0;const V=16;for(let B=0,H=I.length;B<H;B++){const R=Array.isArray(I[B])?I[B]:[I[B]];for(let P=0,F=R.length;P<F;P++){const $=R[P],Y=Array.isArray($.value)?$.value:[$.value];for(let rt=0,gt=Y.length;rt<gt;rt++){const J=Y[rt],pt=E(J),G=A%V,Ct=G%pt.boundary,mt=G+Ct;A+=Ct,mt!==0&&V-mt<pt.storage&&(A+=V-mt),$.__data=new Float32Array(pt.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=A,A+=pt.storage}}}const N=A%V;return N>0&&(A+=V-N),D.__size=A,D.__cache={},this}function E(D){const I={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(I.boundary=4,I.storage=4):D.isVector2?(I.boundary=8,I.storage=8):D.isVector3||D.isColor?(I.boundary=16,I.storage=12):D.isVector4?(I.boundary=16,I.storage=16):D.isMatrix3?(I.boundary=48,I.storage=48):D.isMatrix4?(I.boundary=64,I.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),I}function y(D){const I=D.target;I.removeEventListener("dispose",y);const A=l.indexOf(I.__bindingPointIndex);l.splice(A,1),n.deleteBuffer(s[I.id]),delete s[I.id],delete a[I.id]}function v(){for(const D in s)n.deleteBuffer(s[D]);l=[],s={},a={}}return{bind:h,update:f,dispose:v}}class xw{constructor(t={}){const{canvas:e=eM(),context:r=null,depth:s=!0,stencil:a=!1,alpha:l=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let g;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=r.getContextAttributes().alpha}else g=l;const M=new Uint32Array(4),E=new Int32Array(4);let y=null,v=null;const D=[],I=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ar,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let V=!1;this._outputColorSpace=Bn;let N=0,B=0,H=null,R=-1,P=null;const F=new Be,$=new Be;let Y=null;const rt=new Te(0);let gt=0,J=e.width,pt=e.height,G=1,Ct=null,mt=null;const At=new Be(0,0,J,pt),kt=new Be(0,0,J,pt);let Jt=!1;const lt=new a_;let _t=!1,xt=!1;const W=new Ve,dt=new Ve,yt=new it,St=new Be,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let O=!1;function U(){return H===null?G:1}let b=r;function ft(C,Z){return e.getContext(C,Z)}try{const C={alpha:!0,depth:s,stencil:a,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_h}`),e.addEventListener("webglcontextlost",vt,!1),e.addEventListener("webglcontextrestored",Ft,!1),e.addEventListener("webglcontextcreationerror",Nt,!1),b===null){const Z="webgl2";if(b=ft(Z,C),b===null)throw ft(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ot,Q,ut,Mt,ct,w,S,k,K,nt,tt,Pt,Et,Rt,Kt,Tt,It,qt,jt,Lt,ne,Qt,xe,X;function Ot(){ot=new Cb(b),ot.init(),Qt=new hw(b,ot),Q=new Sb(b,ot,t,Qt),ut=new cw(b,ot),Q.reverseDepthBuffer&&_&&ut.buffers.depth.setReversed(!0),Mt=new Ib(b),ct=new KT,w=new uw(b,ot,ut,ct,Q,Qt,Mt),S=new bb(A),k=new Pb(A),K=new BM(b),xe=new yb(b,K),nt=new Rb(b,K,Mt,xe),tt=new Ob(b,nt,K,Mt),jt=new Db(b,Q,w),Tt=new Eb(ct),Pt=new jT(A,S,k,ot,Q,xe,Tt),Et=new gw(A,ct),Rt=new JT,Kt=new rw(ot),qt=new xb(A,S,k,ut,tt,g,h),It=new aw(A,tt,Q),X=new vw(b,Mt,Q,ut),Lt=new Mb(b,ot,Mt),ne=new Lb(b,ot,Mt),Mt.programs=Pt.programs,A.capabilities=Q,A.extensions=ot,A.properties=ct,A.renderLists=Rt,A.shadowMap=It,A.state=ut,A.info=Mt}Ot();const ht=new mw(A,b);this.xr=ht,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const C=ot.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ot.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(C){C!==void 0&&(G=C,this.setSize(J,pt,!1))},this.getSize=function(C){return C.set(J,pt)},this.setSize=function(C,Z,et=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=C,pt=Z,e.width=Math.floor(C*G),e.height=Math.floor(Z*G),et===!0&&(e.style.width=C+"px",e.style.height=Z+"px"),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set(J*G,pt*G).floor()},this.setDrawingBufferSize=function(C,Z,et){J=C,pt=Z,G=et,e.width=Math.floor(C*et),e.height=Math.floor(Z*et),this.setViewport(0,0,C,Z)},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(At)},this.setViewport=function(C,Z,et,at){C.isVector4?At.set(C.x,C.y,C.z,C.w):At.set(C,Z,et,at),ut.viewport(F.copy(At).multiplyScalar(G).round())},this.getScissor=function(C){return C.copy(kt)},this.setScissor=function(C,Z,et,at){C.isVector4?kt.set(C.x,C.y,C.z,C.w):kt.set(C,Z,et,at),ut.scissor($.copy(kt).multiplyScalar(G).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(C){ut.setScissorTest(Jt=C)},this.setOpaqueSort=function(C){Ct=C},this.setTransparentSort=function(C){mt=C},this.getClearColor=function(C){return C.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(C=!0,Z=!0,et=!0){let at=0;if(C){let q=!1;if(H!==null){const wt=H.texture.format;q=wt===Sh||wt===Mh||wt===yh}if(q){const wt=H.texture.type,Ut=wt===ki||wt===Nr||wt===Co||wt===Ro||wt===vh||wt===xh,Ht=qt.getClearColor(),Vt=qt.getClearAlpha(),$t=Ht.r,te=Ht.g,Yt=Ht.b;Ut?(M[0]=$t,M[1]=te,M[2]=Yt,M[3]=Vt,b.clearBufferuiv(b.COLOR,0,M)):(E[0]=$t,E[1]=te,E[2]=Yt,E[3]=Vt,b.clearBufferiv(b.COLOR,0,E))}else at|=b.COLOR_BUFFER_BIT}Z&&(at|=b.DEPTH_BUFFER_BIT),et&&(at|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",vt,!1),e.removeEventListener("webglcontextrestored",Ft,!1),e.removeEventListener("webglcontextcreationerror",Nt,!1),qt.dispose(),Rt.dispose(),Kt.dispose(),ct.dispose(),S.dispose(),k.dispose(),tt.dispose(),xe.dispose(),X.dispose(),Pt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",zo),ht.removeEventListener("sessionend",ko),pi.stop()};function vt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Ft(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const C=Mt.autoReset,Z=It.enabled,et=It.autoUpdate,at=It.needsUpdate,q=It.type;Ot(),Mt.autoReset=C,It.enabled=Z,It.autoUpdate=et,It.needsUpdate=at,It.type=q}function Nt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function se(C){const Z=C.target;Z.removeEventListener("dispose",se),De(Z)}function De(C){Ye(C),ct.remove(C)}function Ye(C){const Z=ct.get(C).programs;Z!==void 0&&(Z.forEach(function(et){Pt.releaseProgram(et)}),C.isShaderMaterial&&Pt.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,et,at,q,wt){Z===null&&(Z=Wt);const Ut=q.isMesh&&q.matrixWorld.determinant()<0,Ht=Wi(C,Z,et,at,q);ut.setMaterial(at,Ut);let Vt=et.index,$t=1;if(at.wireframe===!0){if(Vt=nt.getWireframeAttribute(et),Vt===void 0)return;$t=2}const te=et.drawRange,Yt=et.attributes.position;let he=te.start*$t,Gt=(te.start+te.count)*$t;wt!==null&&(he=Math.max(he,wt.start*$t),Gt=Math.min(Gt,(wt.start+wt.count)*$t)),Vt!==null?(he=Math.max(he,0),Gt=Math.min(Gt,Vt.count)):Yt!=null&&(he=Math.max(he,0),Gt=Math.min(Gt,Yt.count));const re=Gt-he;if(re<0||re===1/0)return;xe.setup(q,at,Ht,et,Vt);let Ae,fe=Lt;if(Vt!==null&&(Ae=K.get(Vt),fe=ne,fe.setIndex(Ae)),q.isMesh)at.wireframe===!0?(ut.setLineWidth(at.wireframeLinewidth*U()),fe.setMode(b.LINES)):fe.setMode(b.TRIANGLES);else if(q.isLine){let Zt=at.linewidth;Zt===void 0&&(Zt=1),ut.setLineWidth(Zt*U()),q.isLineSegments?fe.setMode(b.LINES):q.isLineLoop?fe.setMode(b.LINE_LOOP):fe.setMode(b.LINE_STRIP)}else q.isPoints?fe.setMode(b.POINTS):q.isSprite&&fe.setMode(b.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)ka("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),fe.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))fe.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Zt=q._multiDrawStarts,Ne=q._multiDrawCounts,Bt=q._multiDrawCount,ge=Vt?K.get(Vt).bytesPerElement:1,ni=ct.get(at).currentProgram.getUniforms();for(let je=0;je<Bt;je++)ni.setValue(b,"_gl_DrawID",je),fe.render(Zt[je]/ge,Ne[je])}else if(q.isInstancedMesh)fe.renderInstances(he,re,q.count);else if(et.isInstancedBufferGeometry){const Zt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Ne=Math.min(et.instanceCount,Zt);fe.renderInstances(he,re,Ne)}else fe.render(he,re)};function ye(C,Z,et){C.transparent===!0&&C.side===Ii&&C.forceSinglePass===!1?(C.side=En,C.needsUpdate=!0,dr(C,Z,et),C.side=cr,C.needsUpdate=!0,dr(C,Z,et),C.side=Ii):dr(C,Z,et)}this.compile=function(C,Z,et=null){et===null&&(et=C),v=Kt.get(et),v.init(Z),I.push(v),et.traverseVisible(function(q){q.isLight&&q.layers.test(Z.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),C!==et&&C.traverseVisible(function(q){q.isLight&&q.layers.test(Z.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),v.setupLights();const at=new Set;return C.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const wt=q.material;if(wt)if(Array.isArray(wt))for(let Ut=0;Ut<wt.length;Ut++){const Ht=wt[Ut];ye(Ht,et,q),at.add(Ht)}else ye(wt,et,q),at.add(wt)}),v=I.pop(),at},this.compileAsync=function(C,Z,et=null){const at=this.compile(C,Z,et);return new Promise(q=>{function wt(){if(at.forEach(function(Ut){ct.get(Ut).currentProgram.isReady()&&at.delete(Ut)}),at.size===0){q(C);return}setTimeout(wt,10)}ot.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let hn=null;function Gn(C){hn&&hn(C)}function zo(){pi.stop()}function ko(){pi.start()}const pi=new c_;pi.setAnimationLoop(Gn),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(C){hn=C,ht.setAnimationLoop(C),C===null?pi.stop():pi.start()},ht.addEventListener("sessionstart",zo),ht.addEventListener("sessionend",ko),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(Z),Z=ht.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,Z,H),v=Kt.get(C,I.length),v.init(Z),I.push(v),dt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),lt.setFromProjectionMatrix(dt),xt=this.localClippingEnabled,_t=Tt.init(this.clippingPlanes,xt),y=Rt.get(C,D.length),y.init(),D.push(y),ht.enabled===!0&&ht.isPresenting===!0){const wt=A.xr.getDepthSensingMesh();wt!==null&&yn(wt,Z,-1/0,A.sortObjects)}yn(C,Z,0,A.sortObjects),y.finish(),A.sortObjects===!0&&y.sort(Ct,mt),O=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,O&&qt.addToRenderList(y,C),this.info.render.frame++,_t===!0&&Tt.beginShadows();const et=v.state.shadowsArray;It.render(et,C,Z),_t===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const at=y.opaque,q=y.transmissive;if(v.setupLights(),Z.isArrayCamera){const wt=Z.cameras;if(q.length>0)for(let Ut=0,Ht=wt.length;Ut<Ht;Ut++){const Vt=wt[Ut];Bs(at,q,C,Vt)}O&&qt.render(C);for(let Ut=0,Ht=wt.length;Ut<Ht;Ut++){const Vt=wt[Ut];Xt(y,C,Vt,Vt.viewport)}}else q.length>0&&Bs(at,q,C,Z),O&&qt.render(C),Xt(y,C,Z);H!==null&&B===0&&(w.updateMultisampleRenderTarget(H),w.updateRenderTargetMipmap(H)),C.isScene===!0&&C.onAfterRender(A,C,Z),xe.resetDefaultState(),R=-1,P=null,I.pop(),I.length>0?(v=I[I.length-1],_t===!0&&Tt.setGlobalState(A.clippingPlanes,v.state.camera)):v=null,D.pop(),D.length>0?y=D[D.length-1]:y=null};function yn(C,Z,et,at){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)et=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||lt.intersectsSprite(C)){at&&St.setFromMatrixPosition(C.matrixWorld).applyMatrix4(dt);const Ut=tt.update(C),Ht=C.material;Ht.visible&&y.push(C,Ut,Ht,et,St.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||lt.intersectsObject(C))){const Ut=tt.update(C),Ht=C.material;if(at&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),St.copy(C.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),St.copy(Ut.boundingSphere.center)),St.applyMatrix4(C.matrixWorld).applyMatrix4(dt)),Array.isArray(Ht)){const Vt=Ut.groups;for(let $t=0,te=Vt.length;$t<te;$t++){const Yt=Vt[$t],he=Ht[Yt.materialIndex];he&&he.visible&&y.push(C,Ut,he,et,St.z,Yt)}}else Ht.visible&&y.push(C,Ut,Ht,et,St.z,null)}}const wt=C.children;for(let Ut=0,Ht=wt.length;Ut<Ht;Ut++)yn(wt[Ut],Z,et,at)}function Xt(C,Z,et,at){const q=C.opaque,wt=C.transmissive,Ut=C.transparent;v.setupLightsView(et),_t===!0&&Tt.setGlobalState(A.clippingPlanes,et),at&&ut.viewport(F.copy(at)),q.length>0&&fr(q,Z,et),wt.length>0&&fr(wt,Z,et),Ut.length>0&&fr(Ut,Z,et),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function Bs(C,Z,et,at){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[at.id]===void 0&&(v.state.transmissionRenderTarget[at.id]=new Fr(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?Fo:ki,minFilter:Ir,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ve.workingColorSpace}));const wt=v.state.transmissionRenderTarget[at.id],Ut=at.viewport||F;wt.setSize(Ut.z*A.transmissionResolutionScale,Ut.w*A.transmissionResolutionScale);const Ht=A.getRenderTarget();A.setRenderTarget(wt),A.getClearColor(rt),gt=A.getClearAlpha(),gt<1&&A.setClearColor(16777215,.5),A.clear(),O&&qt.render(et);const Vt=A.toneMapping;A.toneMapping=ar;const $t=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),v.setupLightsView(at),_t===!0&&Tt.setGlobalState(A.clippingPlanes,at),fr(C,et,at),w.updateMultisampleRenderTarget(wt),w.updateRenderTargetMipmap(wt),ot.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let Yt=0,he=Z.length;Yt<he;Yt++){const Gt=Z[Yt],re=Gt.object,Ae=Gt.geometry,fe=Gt.material,Zt=Gt.group;if(fe.side===Ii&&re.layers.test(at.layers)){const Ne=fe.side;fe.side=En,fe.needsUpdate=!0,zs(re,et,at,Ae,fe,Zt),fe.side=Ne,fe.needsUpdate=!0,te=!0}}te===!0&&(w.updateMultisampleRenderTarget(wt),w.updateRenderTargetMipmap(wt))}A.setRenderTarget(Ht),A.setClearColor(rt,gt),$t!==void 0&&(at.viewport=$t),A.toneMapping=Vt}function fr(C,Z,et){const at=Z.isScene===!0?Z.overrideMaterial:null;for(let q=0,wt=C.length;q<wt;q++){const Ut=C[q],Ht=Ut.object,Vt=Ut.geometry,$t=Ut.group;let te=Ut.material;te.allowOverride===!0&&at!==null&&(te=at),Ht.layers.test(et.layers)&&zs(Ht,Z,et,Vt,te,$t)}}function zs(C,Z,et,at,q,wt){C.onBeforeRender(A,Z,et,at,q,wt),C.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),q.onBeforeRender(A,Z,et,at,C,wt),q.transparent===!0&&q.side===Ii&&q.forceSinglePass===!1?(q.side=En,q.needsUpdate=!0,A.renderBufferDirect(et,Z,at,q,C,wt),q.side=cr,q.needsUpdate=!0,A.renderBufferDirect(et,Z,at,q,C,wt),q.side=Ii):A.renderBufferDirect(et,Z,at,q,C,wt),C.onAfterRender(A,Z,et,at,q,wt)}function dr(C,Z,et){Z.isScene!==!0&&(Z=Wt);const at=ct.get(C),q=v.state.lights,wt=v.state.shadowsArray,Ut=q.state.version,Ht=Pt.getParameters(C,q.state,wt,Z,et),Vt=Pt.getProgramCacheKey(Ht);let $t=at.programs;at.environment=C.isMeshStandardMaterial?Z.environment:null,at.fog=Z.fog,at.envMap=(C.isMeshStandardMaterial?k:S).get(C.envMap||at.environment),at.envMapRotation=at.environment!==null&&C.envMap===null?Z.environmentRotation:C.envMapRotation,$t===void 0&&(C.addEventListener("dispose",se),$t=new Map,at.programs=$t);let te=$t.get(Vt);if(te!==void 0){if(at.currentProgram===te&&at.lightsStateVersion===Ut)return ks(C,Ht),te}else Ht.uniforms=Pt.getUniforms(C),C.onBeforeCompile(Ht,A),te=Pt.acquireProgram(Ht,Vt),$t.set(Vt,te),at.uniforms=Ht.uniforms;const Yt=at.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Yt.clippingPlanes=Tt.uniform),ks(C,Ht),at.needsLights=Ml(C),at.lightsStateVersion=Ut,at.needsLights&&(Yt.ambientLightColor.value=q.state.ambient,Yt.lightProbe.value=q.state.probe,Yt.directionalLights.value=q.state.directional,Yt.directionalLightShadows.value=q.state.directionalShadow,Yt.spotLights.value=q.state.spot,Yt.spotLightShadows.value=q.state.spotShadow,Yt.rectAreaLights.value=q.state.rectArea,Yt.ltc_1.value=q.state.rectAreaLTC1,Yt.ltc_2.value=q.state.rectAreaLTC2,Yt.pointLights.value=q.state.point,Yt.pointLightShadows.value=q.state.pointShadow,Yt.hemisphereLights.value=q.state.hemi,Yt.directionalShadowMap.value=q.state.directionalShadowMap,Yt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Yt.spotShadowMap.value=q.state.spotShadowMap,Yt.spotLightMatrix.value=q.state.spotLightMatrix,Yt.spotLightMap.value=q.state.spotLightMap,Yt.pointShadowMap.value=q.state.pointShadowMap,Yt.pointShadowMatrix.value=q.state.pointShadowMatrix),at.currentProgram=te,at.uniformsList=null,te}function kr(C){if(C.uniformsList===null){const Z=C.currentProgram.getUniforms();C.uniformsList=Ha.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function ks(C,Z){const et=ct.get(C);et.outputColorSpace=Z.outputColorSpace,et.batching=Z.batching,et.batchingColor=Z.batchingColor,et.instancing=Z.instancing,et.instancingColor=Z.instancingColor,et.instancingMorph=Z.instancingMorph,et.skinning=Z.skinning,et.morphTargets=Z.morphTargets,et.morphNormals=Z.morphNormals,et.morphColors=Z.morphColors,et.morphTargetsCount=Z.morphTargetsCount,et.numClippingPlanes=Z.numClippingPlanes,et.numIntersection=Z.numClipIntersection,et.vertexAlphas=Z.vertexAlphas,et.vertexTangents=Z.vertexTangents,et.toneMapping=Z.toneMapping}function Wi(C,Z,et,at,q){Z.isScene!==!0&&(Z=Wt),w.resetTextureUnits();const wt=Z.fog,Ut=at.isMeshStandardMaterial?Z.environment:null,Ht=H===null?A.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Is,Vt=(at.isMeshStandardMaterial?k:S).get(at.envMap||Ut),$t=at.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,te=!!et.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Yt=!!et.morphAttributes.position,he=!!et.morphAttributes.normal,Gt=!!et.morphAttributes.color;let re=ar;at.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(re=A.toneMapping);const Ae=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,fe=Ae!==void 0?Ae.length:0,Zt=ct.get(at),Ne=v.state.lights;if(_t===!0&&(xt===!0||C!==P)){const pe=C===P&&at.id===R;Tt.setState(at,C,pe)}let Bt=!1;at.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==Ne.state.version||Zt.outputColorSpace!==Ht||q.isBatchedMesh&&Zt.batching===!1||!q.isBatchedMesh&&Zt.batching===!0||q.isBatchedMesh&&Zt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Zt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Zt.instancing===!1||!q.isInstancedMesh&&Zt.instancing===!0||q.isSkinnedMesh&&Zt.skinning===!1||!q.isSkinnedMesh&&Zt.skinning===!0||q.isInstancedMesh&&Zt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Zt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Zt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Zt.instancingMorph===!1&&q.morphTexture!==null||Zt.envMap!==Vt||at.fog===!0&&Zt.fog!==wt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==Tt.numPlanes||Zt.numIntersection!==Tt.numIntersection)||Zt.vertexAlphas!==$t||Zt.vertexTangents!==te||Zt.morphTargets!==Yt||Zt.morphNormals!==he||Zt.morphColors!==Gt||Zt.toneMapping!==re||Zt.morphTargetsCount!==fe)&&(Bt=!0):(Bt=!0,Zt.__version=at.version);let ge=Zt.currentProgram;Bt===!0&&(ge=dr(at,Z,q));let ni=!1,je=!1,Ke=!1;const Ce=ge.getUniforms(),Qe=Zt.uniforms;if(ut.useProgram(ge.program)&&(ni=!0,je=!0,Ke=!0),at.id!==R&&(R=at.id,je=!0),ni||P!==C){ut.buffers.depth.getReversed()?(W.copy(C.projectionMatrix),iM(W),rM(W),Ce.setValue(b,"projectionMatrix",W)):Ce.setValue(b,"projectionMatrix",C.projectionMatrix),Ce.setValue(b,"viewMatrix",C.matrixWorldInverse);const Oe=Ce.map.cameraPosition;Oe!==void 0&&Oe.setValue(b,yt.setFromMatrixPosition(C.matrixWorld)),Q.logarithmicDepthBuffer&&Ce.setValue(b,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Ce.setValue(b,"isOrthographic",C.isOrthographicCamera===!0),P!==C&&(P=C,je=!0,Ke=!0)}if(q.isSkinnedMesh){Ce.setOptional(b,q,"bindMatrix"),Ce.setOptional(b,q,"bindMatrixInverse");const pe=q.skeleton;pe&&(pe.boneTexture===null&&pe.computeBoneTexture(),Ce.setValue(b,"boneTexture",pe.boneTexture,w))}q.isBatchedMesh&&(Ce.setOptional(b,q,"batchingTexture"),Ce.setValue(b,"batchingTexture",q._matricesTexture,w),Ce.setOptional(b,q,"batchingIdTexture"),Ce.setValue(b,"batchingIdTexture",q._indirectTexture,w),Ce.setOptional(b,q,"batchingColorTexture"),q._colorsTexture!==null&&Ce.setValue(b,"batchingColorTexture",q._colorsTexture,w));const ze=et.morphAttributes;if((ze.position!==void 0||ze.normal!==void 0||ze.color!==void 0)&&jt.update(q,et,ge),(je||Zt.receiveShadow!==q.receiveShadow)&&(Zt.receiveShadow=q.receiveShadow,Ce.setValue(b,"receiveShadow",q.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(Qe.envMap.value=Vt,Qe.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&Z.environment!==null&&(Qe.envMapIntensity.value=Z.environmentIntensity),je&&(Ce.setValue(b,"toneMappingExposure",A.toneMappingExposure),Zt.needsLights&&Ho(Qe,Ke),wt&&at.fog===!0&&Et.refreshFogUniforms(Qe,wt),Et.refreshMaterialUniforms(Qe,at,G,pt,v.state.transmissionRenderTarget[C.id]),Ha.upload(b,kr(Zt),Qe,w)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(Ha.upload(b,kr(Zt),Qe,w),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Ce.setValue(b,"center",q.center),Ce.setValue(b,"modelViewMatrix",q.modelViewMatrix),Ce.setValue(b,"normalMatrix",q.normalMatrix),Ce.setValue(b,"modelMatrix",q.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const pe=at.uniformsGroups;for(let Oe=0,mi=pe.length;Oe<mi;Oe++){const bn=pe[Oe];X.update(bn,ge),X.bind(bn,ge)}}return ge}function Ho(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function Ml(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(C,Z,et){const at=ct.get(C);at.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),ct.get(C.texture).__webglTexture=Z,ct.get(C.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:et,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Z){const et=ct.get(C);et.__webglFramebuffer=Z,et.__useDefaultFramebuffer=Z===void 0};const Sl=b.createFramebuffer();this.setRenderTarget=function(C,Z=0,et=0){H=C,N=Z,B=et;let at=!0,q=null,wt=!1,Ut=!1;if(C){const Vt=ct.get(C);if(Vt.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(b.FRAMEBUFFER,null),at=!1;else if(Vt.__webglFramebuffer===void 0)w.setupRenderTarget(C);else if(Vt.__hasExternalTextures)w.rebindTextures(C,ct.get(C.texture).__webglTexture,ct.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Yt=C.depthTexture;if(Vt.__boundDepthTexture!==Yt){if(Yt!==null&&ct.has(Yt)&&(C.width!==Yt.image.width||C.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(C)}}const $t=C.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Ut=!0);const te=ct.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(te[Z])?q=te[Z][et]:q=te[Z],wt=!0):C.samples>0&&w.useMultisampledRTT(C)===!1?q=ct.get(C).__webglMultisampledFramebuffer:Array.isArray(te)?q=te[et]:q=te,F.copy(C.viewport),$.copy(C.scissor),Y=C.scissorTest}else F.copy(At).multiplyScalar(G).floor(),$.copy(kt).multiplyScalar(G).floor(),Y=Jt;if(et!==0&&(q=Sl),ut.bindFramebuffer(b.FRAMEBUFFER,q)&&at&&ut.drawBuffers(C,q),ut.viewport(F),ut.scissor($),ut.setScissorTest(Y),wt){const Vt=ct.get(C.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Vt.__webglTexture,et)}else if(Ut){const Vt=ct.get(C.texture),$t=Z;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Vt.__webglTexture,et,$t)}else if(C!==null&&et!==0){const Vt=ct.get(C.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Vt.__webglTexture,et)}R=-1},this.readRenderTargetPixels=function(C,Z,et,at,q,wt,Ut){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=ct.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ht=Ht[Ut]),Ht){ut.bindFramebuffer(b.FRAMEBUFFER,Ht);try{const Vt=C.texture,$t=Vt.format,te=Vt.type;if(!Q.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-at&&et>=0&&et<=C.height-q&&b.readPixels(Z,et,at,q,Qt.convert($t),Qt.convert(te),wt)}finally{const Vt=H!==null?ct.get(H).__webglFramebuffer:null;ut.bindFramebuffer(b.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(C,Z,et,at,q,wt,Ut){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=ct.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ht=Ht[Ut]),Ht)if(Z>=0&&Z<=C.width-at&&et>=0&&et<=C.height-q){ut.bindFramebuffer(b.FRAMEBUFFER,Ht);const Vt=C.texture,$t=Vt.format,te=Vt.type;if(!Q.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Yt=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Yt),b.bufferData(b.PIXEL_PACK_BUFFER,wt.byteLength,b.STREAM_READ),b.readPixels(Z,et,at,q,Qt.convert($t),Qt.convert(te),0);const he=H!==null?ct.get(H).__webglFramebuffer:null;ut.bindFramebuffer(b.FRAMEBUFFER,he);const Gt=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await nM(b,Gt,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Yt),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,wt),b.deleteBuffer(Yt),b.deleteSync(Gt),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Z=null,et=0){const at=Math.pow(2,-et),q=Math.floor(C.image.width*at),wt=Math.floor(C.image.height*at),Ut=Z!==null?Z.x:0,Ht=Z!==null?Z.y:0;w.setTexture2D(C,0),b.copyTexSubImage2D(b.TEXTURE_2D,et,0,0,Ut,Ht,q,wt),ut.unbindTexture()};const El=b.createFramebuffer(),bl=b.createFramebuffer();this.copyTextureToTexture=function(C,Z,et=null,at=null,q=0,wt=null){wt===null&&(q!==0?(ka("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),wt=q,q=0):wt=0);let Ut,Ht,Vt,$t,te,Yt,he,Gt,re;const Ae=C.isCompressedTexture?C.mipmaps[wt]:C.image;if(et!==null)Ut=et.max.x-et.min.x,Ht=et.max.y-et.min.y,Vt=et.isBox3?et.max.z-et.min.z:1,$t=et.min.x,te=et.min.y,Yt=et.isBox3?et.min.z:0;else{const ze=Math.pow(2,-q);Ut=Math.floor(Ae.width*ze),Ht=Math.floor(Ae.height*ze),C.isDataArrayTexture?Vt=Ae.depth:C.isData3DTexture?Vt=Math.floor(Ae.depth*ze):Vt=1,$t=0,te=0,Yt=0}at!==null?(he=at.x,Gt=at.y,re=at.z):(he=0,Gt=0,re=0);const fe=Qt.convert(Z.format),Zt=Qt.convert(Z.type);let Ne;Z.isData3DTexture?(w.setTexture3D(Z,0),Ne=b.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(w.setTexture2DArray(Z,0),Ne=b.TEXTURE_2D_ARRAY):(w.setTexture2D(Z,0),Ne=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,Z.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,Z.unpackAlignment);const Bt=b.getParameter(b.UNPACK_ROW_LENGTH),ge=b.getParameter(b.UNPACK_IMAGE_HEIGHT),ni=b.getParameter(b.UNPACK_SKIP_PIXELS),je=b.getParameter(b.UNPACK_SKIP_ROWS),Ke=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,Ae.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Ae.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,$t),b.pixelStorei(b.UNPACK_SKIP_ROWS,te),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Yt);const Ce=C.isDataArrayTexture||C.isData3DTexture,Qe=Z.isDataArrayTexture||Z.isData3DTexture;if(C.isDepthTexture){const ze=ct.get(C),pe=ct.get(Z),Oe=ct.get(ze.__renderTarget),mi=ct.get(pe.__renderTarget);ut.bindFramebuffer(b.READ_FRAMEBUFFER,Oe.__webglFramebuffer),ut.bindFramebuffer(b.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let bn=0;bn<Vt;bn++)Ce&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,ct.get(C).__webglTexture,q,Yt+bn),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,ct.get(Z).__webglTexture,wt,re+bn)),b.blitFramebuffer($t,te,Ut,Ht,he,Gt,Ut,Ht,b.DEPTH_BUFFER_BIT,b.NEAREST);ut.bindFramebuffer(b.READ_FRAMEBUFFER,null),ut.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(q!==0||C.isRenderTargetTexture||ct.has(C)){const ze=ct.get(C),pe=ct.get(Z);ut.bindFramebuffer(b.READ_FRAMEBUFFER,El),ut.bindFramebuffer(b.DRAW_FRAMEBUFFER,bl);for(let Oe=0;Oe<Vt;Oe++)Ce?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,ze.__webglTexture,q,Yt+Oe):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,ze.__webglTexture,q),Qe?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,pe.__webglTexture,wt,re+Oe):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,pe.__webglTexture,wt),q!==0?b.blitFramebuffer($t,te,Ut,Ht,he,Gt,Ut,Ht,b.COLOR_BUFFER_BIT,b.NEAREST):Qe?b.copyTexSubImage3D(Ne,wt,he,Gt,re+Oe,$t,te,Ut,Ht):b.copyTexSubImage2D(Ne,wt,he,Gt,$t,te,Ut,Ht);ut.bindFramebuffer(b.READ_FRAMEBUFFER,null),ut.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else Qe?C.isDataTexture||C.isData3DTexture?b.texSubImage3D(Ne,wt,he,Gt,re,Ut,Ht,Vt,fe,Zt,Ae.data):Z.isCompressedArrayTexture?b.compressedTexSubImage3D(Ne,wt,he,Gt,re,Ut,Ht,Vt,fe,Ae.data):b.texSubImage3D(Ne,wt,he,Gt,re,Ut,Ht,Vt,fe,Zt,Ae):C.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,wt,he,Gt,Ut,Ht,fe,Zt,Ae.data):C.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,wt,he,Gt,Ae.width,Ae.height,fe,Ae.data):b.texSubImage2D(b.TEXTURE_2D,wt,he,Gt,Ut,Ht,fe,Zt,Ae);b.pixelStorei(b.UNPACK_ROW_LENGTH,Bt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ge),b.pixelStorei(b.UNPACK_SKIP_PIXELS,ni),b.pixelStorei(b.UNPACK_SKIP_ROWS,je),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ke),wt===0&&Z.generateMipmaps&&b.generateMipmap(Ne),ut.unbindTexture()},this.copyTextureToTexture3D=function(C,Z,et=null,at=null,q=0){return ka('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,Z,et,at,q)},this.initRenderTarget=function(C){ct.get(C).__webglFramebuffer===void 0&&w.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?w.setTextureCube(C,0):C.isData3DTexture?w.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?w.setTexture2DArray(C,0):w.setTexture2D(C,0),ut.unbindTexture()},this.resetState=function(){N=0,B=0,H=null,ut.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ve._getDrawingBufferColorSpace(t),e.unpackColorSpace=ve._getUnpackColorSpace()}}class yw{constructor(){this.EARTH=4007501668e-2,this.HALF_EARTH=2003750834e-2}project(t,e){return[this.#t(t),this.#c(e)]}unproject(t){return[this.#e(t[0]),this.#r(t[1])]}#t(t){return t/180*this.HALF_EARTH}#c(t){var e=Math.log(Math.tan((90+t)*Math.PI/360))/(Math.PI/180);return e*this.HALF_EARTH/180}#e(t){return t/this.HALF_EARTH*180}#r(t){var e=t/this.HALF_EARTH*180;return e=180/Math.PI*(2*Math.atan(Math.exp(e*Math.PI/180))-Math.PI/2),e}getID(){return"epsg:3857"}}class Ch{constructor(){this.eventHandlers={}}on(t,e){this.eventHandlers[t]=e}emit(t,...e){this.eventHandlers[t]?.call(this,...e)}}class Mw extends Ch{#t;#c;#e;#r;#l;#s;#n;#a;#o;#i;constructor(t,e,r={},s=null){super(),this.scene=t,this.camera=e,this.#t=new yw,this.#e=null,this.#r=0,this.#l=100,this.#s=null,this.setGpsOptions(r),this.#n=null,this.#a=0,this.#o=0,this.#i=s}setProjection(t){this.#t=t}setGpsOptions(t={}){t.gpsMinDistance!==void 0&&(this.#r=t.gpsMinDistance),t.gpsMinAccuracy!==void 0&&(this.#l=t.gpsMinAccuracy)}async startGps(){if(this.#i){const t=await(await this.#i.sendData("/gps/start",{gpsMinDistance:this.#r,gpsMinAccuracy:this.#l})).json();this.#o=t.session}return this.#s===null?(this.#s=navigator.geolocation.watchPosition(t=>{this.#h(t)},t=>{this.emit("gpserror",t)},{enableHighAccuracy:!0}),!0):!1}stopGps(){return this.#s!==null?(navigator.geolocation.clearWatch(this.#s),this.#s=null,!0):!1}fakeGps(t,e,r=null,s=0){r!==null&&this.setElevation(r),this.#h({coords:{longitude:t,latitude:e,accuracy:s}})}lonLatToWorldCoords(t,e){const r=this.#t.project(t,e);if(this.#n)r[0]-=this.#n[0],r[1]-=this.#n[1];else throw"No initial position determined";return[r[0],-r[1]]}add(t,e,r,s,a={}){t.properties=a,this.#u(t,e,r,s),this.scene.add(t),this.#i?.sendData("/object/new",{position:t.position,x:t.position.x,z:t.position.z,session:this.#o,properties:a})}#u(t,e,r,s){const a=this.lonLatToWorldCoords(e,r);s!==void 0&&(t.position.y=s),[t.position.x,t.position.z]=a}setElevation(t){this.camera.position.y=t}#f(t,e){this.#n=this.#t.project(t,e)}#h(t){let e=Number.MAX_VALUE;this.#a++,this.#i?.sendData("/gps/new",{gpsCount:this.#a,lat:t.coords.latitude,lon:t.coords.longitude,acc:t.coords.accuracy,session:this.#o}),t.coords.accuracy<=this.#l&&(this.#e===null?this.#e={latitude:t.coords.latitude,longitude:t.coords.longitude}:e=this.#d(this.#e,t.coords),e>=this.#r&&(this.#e.longitude=t.coords.longitude,this.#e.latitude=t.coords.latitude,this.#n||(this.#f(t.coords.longitude,t.coords.latitude),this.#i?.sendData("/worldorigin/new",{gpsCount:this.#a,lat:t.coords.latitude,lon:t.coords.longitude,session:this.#o,initialPosition:this.#n})),this.#u(this.camera,t.coords.longitude,t.coords.latitude),this.#i?.sendData("/gps/accepted",{gpsCount:this.#a,cameraX:this.camera.position.x,cameraZ:this.camera.position.z,session:this.#o,distMoved:e}),this.emit("gpsupdate",{position:t,distMoved:e})))}#d(t,e){const r=Pn.degToRad(e.longitude-t.longitude),s=Pn.degToRad(e.latitude-t.latitude),a=Math.sin(s/2)*Math.sin(s/2)+Math.cos(Pn.degToRad(t.latitude))*Math.cos(Pn.degToRad(e.latitude))*(Math.sin(r/2)*Math.sin(r/2));return 2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a))*6371e3}getLastKnownLocation(){return this.#e}}class Sw extends Ch{#t;constructor(t={video:{facingMode:"environment"}},e){super(),this.sceneWebcam=new o_,e?this.#t=document.querySelector(e):(this.#t=document.createElement("video"),this.#t.setAttribute("autoplay",!0),this.#t.setAttribute("playsinline",!0),this.#t.style.display="none",document.body.appendChild(this.#t)),this.texture=new IM(this.#t),navigator.mediaDevices&&navigator.mediaDevices.getUserMedia?navigator.mediaDevices.getUserMedia(t).then(r=>{this.#t.addEventListener("loadedmetadata",()=>{this.#t.setAttribute("width",this.#t.videoWidth),this.#t.setAttribute("height",this.#t.videoHeight),this.#t.play(),this.emit("webcamstarted",{texture:this.texture})}),this.#t.srcObject=r}).catch(r=>{this.emit("webcamerror",{code:r.name,message:r.message})}):this.emit("webcamerror",{code:"LOCAR_NO_MEDIA_DEVICES_API",message:"Media devices API not supported"})}dispose(){this.texture.dispose()}}const Ew="locar-device-orientation-permission-modal",bw="locar-device-orientation-permission-button",Tw="locar-device-orientation-permission-message",ww="locar-device-orientation-permission-inner",Aw="locar-device-orientation-permission-button-inner",op="This immersive website requires access to your device motion sensors.",no=navigator.userAgent.match(/iPhone|iPad|iPod/i)||/Macintosh/i.test(navigator.userAgent)&&navigator.maxTouchPoints!=null&&navigator.maxTouchPoints>1,Pw=new it(0,0,1),ap=new ei,Cw=new hr,Rw=new hr(-Math.sqrt(.5),0,0,Math.sqrt(.5));class Lw extends zr{constructor(t,e={}){super(),this.eventEmitter=new Ch;const r=this;this.object=t,this.object.rotation.reorder("YXZ"),this.enabled=!0,this.deviceOrientation=null,this.screenOrientation=0,this.alphaOffset=0,this.orientationOffset=0,this.initialOffset=null,this.lastCompassY=void 0,this.lastOrientation=null,this.TWO_PI=2*Math.PI,this.HALF_PI=.5*Math.PI,this.orientationChangeEventName="ondeviceorientationabsolute"in window?"deviceorientationabsolute":"deviceorientation",this.smoothingFactor=e.smoothingFactor||1,this.enablePermissionDialog=e.enablePermissionDialog??!0,this.enableInlineStyling=e.enableStyling??!0,this.preferConfirmDialog=e.preferConfirmDialog??!1;const s=function({alpha:c,beta:h,gamma:f,webkitCompassHeading:d}){if(no){const p=360-d;r.alphaOffset=Pn.degToRad(p-c),r.deviceOrientation={alpha:c,beta:h,gamma:f,webkitCompassHeading:d}}else c<0&&(c+=360),r.deviceOrientation={alpha:c,beta:h,gamma:f};window.dispatchEvent(new CustomEvent("camera-rotation-change",{detail:{cameraRotation:t.rotation}}))},a=function(){r.screenOrientation=window.orientation||0,no&&(r.screenOrientation===90?r.orientationOffset=-r.HALF_PI:r.screenOrientation===-90?r.orientationOffset=r.HALF_PI:r.orientationOffset=0)},l=function(c,h,f,d,p){ap.set(f,h,-d,"YXZ"),c.setFromEuler(ap),c.multiply(Rw),c.multiply(Cw.setFromAxisAngle(Pw,-p))};this.connect=function(){a(),window.addEventListener("orientationchange",a),window.addEventListener(r.orientationChangeEventName,s),r.enabled=!0},this.disconnect=function(){window.removeEventListener("orientationchange",a),window.removeEventListener(r.orientationChangeEventName,s),r.enabled=!1,r.initialOffset=!1,r.deviceOrientation=null},this.requestOrientationPermissions=function(){window.DeviceOrientationEvent!==void 0&&typeof window.DeviceOrientationEvent.requestPermission=="function"?window.DeviceOrientationEvent.requestPermission().then(c=>{c==="granted"?this.eventEmitter.emit("deviceorientationgranted",{target:this}):this.eventEmitter.emit("deviceorientationerror",{code:"LOCAR_DEVICE_ORIENTATION_PERMISSION_DENIED",message:"Permission for device orientation denied - AR will not work correctly"})}).catch(function(c){this.eventEmitter.emit("deviceorientationerror",{code:"LOCAR_DEVICE_ORIENTATION_PERMISSION_FAILED",message:"Permission request for device orientation failed - AR will not work correctly",error:JSON.stringify(c,null,2)})}):this.eventEmitter.emit("deviceorientationerror",{code:"LOCAR_DEVICE_ORIENTATION_INTERNAL_ERROR",message:"Internal error: no requestPermission() found although requestOrientationPermissions() was called - please raise an issue on GitHub"})},this.update=function({theta:c=0}={theta:0}){if(r.enabled===!1)return;const h=r.deviceOrientation;if(h){let f=h.alpha?Pn.degToRad(h.alpha)+r.alphaOffset:0,d=h.beta?Pn.degToRad(h.beta):0,p=h.gamma?Pn.degToRad(h.gamma):0;const _=r.screenOrientation?Pn.degToRad(r.screenOrientation):0;if(r.smoothingFactor<1){if(r.lastOrientation){const g=r.smoothingFactor;f=r._getSmoothedAngle(f,r.lastOrientation.alpha,g),d=r._getSmoothedAngle(d+Math.PI,r.lastOrientation.beta,g),p=r._getSmoothedAngle(p+r.HALF_PI,r.lastOrientation.gamma,g,Math.PI)}else d+=Math.PI,p+=r.HALF_PI;r.lastOrientation={alpha:f,beta:d,gamma:p}}if(no){const g=new hr;l(g,f,r.smoothingFactor<1?d-Math.PI:d,r.smoothingFactor<1?p-Math.PI/2:p,_);const M=new ei().setFromQuaternion(g,"YXZ");let E=Pn.degToRad(360-h.webkitCompassHeading);r.smoothingFactor<1&&r.lastCompassY!==void 0&&(E=r._getSmoothedAngle(E,r.lastCompassY,r.smoothingFactor)),r.lastCompassY=E,M.y=E+(r.orientationOffset||0),g.setFromEuler(M),r.object.quaternion.copy(g)}else l(r.object.quaternion,no?f+r.alphaOffset:f,r.smoothingFactor<1?d-Math.PI:d,r.smoothingFactor<1?p-Math.PI/2:p,_)}},this.getCorrectedHeading=function(){const{deviceOrientation:c}=r;if(!c)return 0;let h=0;return no?(h=360-c.webkitCompassHeading,r.orientationOffset&&(h+=r.orientationOffset*(180/Math.PI),h=(h+360)%360)):(c.absolute===!0||r.orientationChangeEventName,h=c.alpha?c.alpha:0,h=(360-h)%360,h<0&&(h+=360)),h},this._orderAngle=function(c,h,f=r.TWO_PI){return h>c&&Math.abs(h-c)<f/2||c>h&&Math.abs(h-c)>f/2?{left:c,right:h}:{left:h,right:c}},this._getSmoothedAngle=function(c,h,f,d=r.TWO_PI){const p=r._orderAngle(c,h,d),_=p.left,g=p.right;p.left=0,p.right-=_,p.right<0&&(p.right+=d);let M=g==h?(1-f)*p.right+f*p.left:f*p.right+(1-f)*p.left;return M+=_,M>=d&&(M-=d),M},this.updateAlphaOffset=function(){r.initialOffset=!1},this.dispose=function(){r.disconnect()},this.getAlpha=function(){const{deviceOrientation:c}=r;return c&&c.alpha?Pn.degToRad(c.alpha)+r.alphaOffset:0},this.getBeta=function(){const{deviceOrientation:c}=r;return c&&c.beta?Pn.degToRad(c.beta):0},this.getGamma=function(){const{deviceOrientation:c}=r;return c&&c.gamma?Pn.degToRad(c.gamma):0},this.createObtainPermissionGestureDialog=function(){const c=document.createElement("div");c.classList.add(Ew);const h=document.createElement("div");h.classList.add(ww);const f=document.createElement("div");f.classList.add(Tw);const d=document.createElement("div");d.classList.add(Aw);const p=document.createElement("button");if(p.classList.add(bw),document.body.appendChild(c),this.enableInlineStyling===!0){const g={fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",display:"flex",position:"fixed",zIndex:1e5,justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,0.2)",inset:0,padding:"20px"},M={backgroundColor:"rgba(220, 220, 220, 0.85)",padding:"6px 0",borderRadius:"10px",width:"100%",maxWidth:"400px"},E={padding:"10px 12px",textAlign:"center",fontWeight:400,fontSize:"13px",display:"flex",justifyContent:"center",alignItems:"center"},y={display:"block",textAlign:"center",textDecoration:"none",borderTop:"rgb(180,180,180) solid 1px"},v={display:"block",width:"100%",textAlign:"center",appearance:"none",background:"none",border:"none",outline:"none",padding:"10px",fontWeight:400,fontSize:"16px",color:"#2e7cf1",cursor:"pointer"};for(let D in g)c.style[D]=g[D];for(let D in M)h.style[D]=M[D];for(let D in E)f.style[D]=E[D];for(let D in y)d.style[D]=y[D];for(let D in v)p.style[D]=v[D]}c.appendChild(h),h.appendChild(f),h.appendChild(d),f.appendChild(document.createTextNode(op));const _=()=>{this.requestOrientationPermissions(),c.style.display="none"};p.addEventListener("click",_),p.appendChild(document.createTextNode("OK")),d.appendChild(p),document.body.appendChild(c)},this.obtainPermissionGesture=function(){this.preferConfirmDialog===!0?window.confirm(op)&&this.requestOrientationPermissions():this.createObtainPermissionGestureDialog()}}on(t,e){this.eventEmitter.on(t,e)}init(){window.DeviceOrientationEvent===void 0?this.eventEmitter.emit("deviceorientationerror",{code:"LOCAR_DEVICE_ORIENTATION_NOT_SUPPORTED",message:"Device orientation API not supported"}):window.isSecureContext===!1?this.eventEmitter.emit("deviceorientationerror",{code:"LOCAR_DEVICE_ORIENTATION_NO_HTTPS",message:"DeviceOrientationEvent is only available in secure contexts (https)"}):typeof window.DeviceOrientationEvent.requestPermission=="function"&&this.enablePermissionDialog?this.obtainPermissionGesture():this.eventEmitter.emit("deviceorientationgranted",{target:this})}}const on={latPF1:46.24678,lonPF1:7.4118,latPF2:46.24666,lonPF2:7.41182,latObj:46.24668,lonObj:7.412},wa={sphere:{type:"sphere",lon:on.lonObj,lat:on.latObj},box:{type:"box",lon:on.lonObj,lat:on.latObj},nav_pf1:{type:"arrow",lon:on.lonPF1,lat:on.latPF1},nav_pf2:{type:"arrow",lon:on.lonPF2,lat:on.latPF2}};let Ci,ps,ls,Nc,io,tl=[];function Iw(){tl.forEach(n=>{n.visible=!1,ps.remove(n)}),tl=[]}function Dw(n){switch(n.type){case"box":{const[t,e,r]=[5,5,5],s=new Ns(t,e,r),a=new xo({color:16777215,transparent:!0,opacity:.8});return new Ln(s,a)}case"sphere":{const t=new Ah(8,32,32),e=new xo({color:255,transparent:!0,opacity:.5});return new Ln(t,e)}case"arrow":{const l=new so,c=new xo({color:255,transparent:!0,opacity:.8}),h=8-3.2,f=1.92*.25,d=new gl(f,f,h,16),p=new Ln(d,c);p.position.y=h/2,l.add(p);const _=new wh(1.92,3.2,16),g=new Ln(_,c);return g.position.y=h+3.2/2,l.add(g),l.rotation.z=Math.PI,l}}}function Aa(n){if(!Ci||!ps){console.warn("LocAR ou scene non initialisés");return}const t=Array.isArray(n)?n:[n];console.log("AREngine reçu =",n),console.log("Normalisé en tableau =",t),Iw(),t.forEach(e=>{const r=Dw(e);if(typeof e.lon!="number"||typeof e.lat!="number"){console.warn("desc.lon / desc.lat invalides pour",e);return}Ci.add(r,e.lon,e.lat),tl.push(r)}),console.log("elementsActuels après AREngine =",tl)}function Ow(n){console.log("INIT AR SCRIPT"),Nc=new xw({canvas:n,antialias:!0,alpha:!0}),ls=new zn(80,(n.clientWidth||1)/(n.clientHeight||1),.001,1e3),ps=new o_,Ci=new Mw(ps,ls),window.locar=Ci;const t=new Sw({video:{facingMode:"environment"},audio:!1},null);t.on("webcamstarted",c=>{ps.background=c.texture,console.log("Webcam started")}),t.on("webcamerror",c=>alert(`Webcam error: code ${c.code} message ${c.message}`)),io=new Lw(ls),io.on("deviceorientationgranted",c=>{c.target.connect(),console.log("Device motion granted")}),io.on("deviceorientationerror",c=>alert(`Device orientation error: ${c.message||c}`)),io.init(),Ci.on("gpserror",c=>{console.error("GPS ERROR",c),alert(`GPS error: code ${c.code}, message: ${c.message}`)}),Ci.on("gpsupdate");let e=!1;const r=new Promise(c=>{Ci.on("gpsupdate",h=>{e||(e=!0,console.log("Premier fix GPS obtenu"),c(h))})});function s(){const c=n.clientWidth||window.innerWidth,h=n.clientHeight||window.innerHeight;Nc.setSize(c,h,!1),ls.aspect=c/h,ls.updateProjectionMatrix()}new ResizeObserver(s).observe(n),window.addEventListener("resize",s),window.addEventListener("orientationchange",s),s(),console.log("Calling locar.startGps()"),Ci.startGps();let a=!0;function l(){a&&(requestAnimationFrame(l),io.update?.(),Nc.render(ps,ls))}return l(),{stop(){a=!1;try{Ci.stopGps?.()}catch(c){console.warn("Erreur lors du stopGps:",c)}},async showSphere(){await r,Aa(wa.sphere)},async showBox(){await r,Aa(wa.box)},async showArrowPf1(){await r,Aa(wa.nav_pf1)},async showArrowPf2(){await r,Aa(wa.nav_pf2)}}}const Uw={name:"ARView",data(){return{arInstance:null}},mounted(){const n=this.$refs.canvasEl;if(!n){console.error("Canvas AR introuvable");return}this.arInstance=Ow(n)},beforeUnmount(){this.arInstance&&typeof this.arInstance.stop=="function"&&this.arInstance.stop()}},Nw={class:"ar-container"},Fw={ref:"canvasEl",class:"glscene"};function Bw(n,t,e,r,s,a){return Xe(),vn("div",Nw,[le("canvas",Fw,null,512)])}const p_=di(Uw,[["render",Bw],["__scopeId","data-v-4b83d05c"]]),zw={name:"TopRightButtons"},kw={class:"top-right-buttons"};function Hw(n,t,e,r,s,a){return Xe(),vn("div",kw,[le("button",{onClick:t[0]||(t[0]=l=>n.$emit("attributs"))},"Attributs"),le("button",{onClick:t[1]||(t[1]=l=>n.$emit("feedback"))},"Feedback")])}const Vw=di(zw,[["render",Hw],["__scopeId","data-v-c8e050a0"]]);function Gw(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ao={exports:{}};var Ww=ao.exports,lp;function Xw(){return lp||(lp=1,(function(n,t){(function(e,r){r(t)})(Ww,(function(e){var r="1.9.4";function s(i){var o,u,m,x;for(u=1,m=arguments.length;u<m;u++){x=arguments[u];for(o in x)i[o]=x[o]}return i}var a=Object.create||(function(){function i(){}return function(o){return i.prototype=o,new i}})();function l(i,o){var u=Array.prototype.slice;if(i.bind)return i.bind.apply(i,u.call(arguments,1));var m=u.call(arguments,2);return function(){return i.apply(o,m.length?m.concat(u.call(arguments)):arguments)}}var c=0;function h(i){return"_leaflet_id"in i||(i._leaflet_id=++c),i._leaflet_id}function f(i,o,u){var m,x,T,z;return z=function(){m=!1,x&&(T.apply(u,x),x=!1)},T=function(){m?x=arguments:(i.apply(u,arguments),setTimeout(z,o),m=!0)},T}function d(i,o,u){var m=o[1],x=o[0],T=m-x;return i===m&&u?i:((i-x)%T+T)%T+x}function p(){return!1}function _(i,o){if(o===!1)return i;var u=Math.pow(10,o===void 0?6:o);return Math.round(i*u)/u}function g(i){return i.trim?i.trim():i.replace(/^\s+|\s+$/g,"")}function M(i){return g(i).split(/\s+/)}function E(i,o){Object.prototype.hasOwnProperty.call(i,"options")||(i.options=i.options?a(i.options):{});for(var u in o)i.options[u]=o[u];return i.options}function y(i,o,u){var m=[];for(var x in i)m.push(encodeURIComponent(u?x.toUpperCase():x)+"="+encodeURIComponent(i[x]));return(!o||o.indexOf("?")===-1?"?":"&")+m.join("&")}var v=/\{ *([\w_ -]+) *\}/g;function D(i,o){return i.replace(v,function(u,m){var x=o[m];if(x===void 0)throw new Error("No value provided for variable "+u);return typeof x=="function"&&(x=x(o)),x})}var I=Array.isArray||function(i){return Object.prototype.toString.call(i)==="[object Array]"};function A(i,o){for(var u=0;u<i.length;u++)if(i[u]===o)return u;return-1}var V="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function N(i){return window["webkit"+i]||window["moz"+i]||window["ms"+i]}var B=0;function H(i){var o=+new Date,u=Math.max(0,16-(o-B));return B=o+u,window.setTimeout(i,u)}var R=window.requestAnimationFrame||N("RequestAnimationFrame")||H,P=window.cancelAnimationFrame||N("CancelAnimationFrame")||N("CancelRequestAnimationFrame")||function(i){window.clearTimeout(i)};function F(i,o,u){if(u&&R===H)i.call(o);else return R.call(window,l(i,o))}function $(i){i&&P.call(window,i)}var Y={__proto__:null,extend:s,create:a,bind:l,get lastId(){return c},stamp:h,throttle:f,wrapNum:d,falseFn:p,formatNum:_,trim:g,splitWords:M,setOptions:E,getParamString:y,template:D,isArray:I,indexOf:A,emptyImageUrl:V,requestFn:R,cancelFn:P,requestAnimFrame:F,cancelAnimFrame:$};function rt(){}rt.extend=function(i){var o=function(){E(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},u=o.__super__=this.prototype,m=a(u);m.constructor=o,o.prototype=m;for(var x in this)Object.prototype.hasOwnProperty.call(this,x)&&x!=="prototype"&&x!=="__super__"&&(o[x]=this[x]);return i.statics&&s(o,i.statics),i.includes&&(gt(i.includes),s.apply(null,[m].concat(i.includes))),s(m,i),delete m.statics,delete m.includes,m.options&&(m.options=u.options?a(u.options):{},s(m.options,i.options)),m._initHooks=[],m.callInitHooks=function(){if(!this._initHooksCalled){u.callInitHooks&&u.callInitHooks.call(this),this._initHooksCalled=!0;for(var T=0,z=m._initHooks.length;T<z;T++)m._initHooks[T].call(this)}},o},rt.include=function(i){var o=this.prototype.options;return s(this.prototype,i),i.options&&(this.prototype.options=o,this.mergeOptions(i.options)),this},rt.mergeOptions=function(i){return s(this.prototype.options,i),this},rt.addInitHook=function(i){var o=Array.prototype.slice.call(arguments,1),u=typeof i=="function"?i:function(){this[i].apply(this,o)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(u),this};function gt(i){if(!(typeof L>"u"||!L||!L.Mixin)){i=I(i)?i:[i];for(var o=0;o<i.length;o++)i[o]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var J={on:function(i,o,u){if(typeof i=="object")for(var m in i)this._on(m,i[m],o);else{i=M(i);for(var x=0,T=i.length;x<T;x++)this._on(i[x],o,u)}return this},off:function(i,o,u){if(!arguments.length)delete this._events;else if(typeof i=="object")for(var m in i)this._off(m,i[m],o);else{i=M(i);for(var x=arguments.length===1,T=0,z=i.length;T<z;T++)x?this._off(i[T]):this._off(i[T],o,u)}return this},_on:function(i,o,u,m){if(typeof o!="function"){console.warn("wrong listener type: "+typeof o);return}if(this._listens(i,o,u)===!1){u===this&&(u=void 0);var x={fn:o,ctx:u};m&&(x.once=!0),this._events=this._events||{},this._events[i]=this._events[i]||[],this._events[i].push(x)}},_off:function(i,o,u){var m,x,T;if(this._events&&(m=this._events[i],!!m)){if(arguments.length===1){if(this._firingCount)for(x=0,T=m.length;x<T;x++)m[x].fn=p;delete this._events[i];return}if(typeof o!="function"){console.warn("wrong listener type: "+typeof o);return}var z=this._listens(i,o,u);if(z!==!1){var j=m[z];this._firingCount&&(j.fn=p,this._events[i]=m=m.slice()),m.splice(z,1)}}},fire:function(i,o,u){if(!this.listens(i,u))return this;var m=s({},o,{type:i,target:this,sourceTarget:o&&o.sourceTarget||this});if(this._events){var x=this._events[i];if(x){this._firingCount=this._firingCount+1||1;for(var T=0,z=x.length;T<z;T++){var j=x[T],st=j.fn;j.once&&this.off(i,st,j.ctx),st.call(j.ctx||this,m)}this._firingCount--}}return u&&this._propagateEvent(m),this},listens:function(i,o,u,m){typeof i!="string"&&console.warn('"string" type argument expected');var x=o;typeof o!="function"&&(m=!!o,x=void 0,u=void 0);var T=this._events&&this._events[i];if(T&&T.length&&this._listens(i,x,u)!==!1)return!0;if(m){for(var z in this._eventParents)if(this._eventParents[z].listens(i,o,u,m))return!0}return!1},_listens:function(i,o,u){if(!this._events)return!1;var m=this._events[i]||[];if(!o)return!!m.length;u===this&&(u=void 0);for(var x=0,T=m.length;x<T;x++)if(m[x].fn===o&&m[x].ctx===u)return x;return!1},once:function(i,o,u){if(typeof i=="object")for(var m in i)this._on(m,i[m],o,!0);else{i=M(i);for(var x=0,T=i.length;x<T;x++)this._on(i[x],o,u,!0)}return this},addEventParent:function(i){return this._eventParents=this._eventParents||{},this._eventParents[h(i)]=i,this},removeEventParent:function(i){return this._eventParents&&delete this._eventParents[h(i)],this},_propagateEvent:function(i){for(var o in this._eventParents)this._eventParents[o].fire(i.type,s({layer:i.target,propagatedFrom:i.target},i),!0)}};J.addEventListener=J.on,J.removeEventListener=J.clearAllEventListeners=J.off,J.addOneTimeEventListener=J.once,J.fireEvent=J.fire,J.hasEventListeners=J.listens;var pt=rt.extend(J);function G(i,o,u){this.x=u?Math.round(i):i,this.y=u?Math.round(o):o}var Ct=Math.trunc||function(i){return i>0?Math.floor(i):Math.ceil(i)};G.prototype={clone:function(){return new G(this.x,this.y)},add:function(i){return this.clone()._add(mt(i))},_add:function(i){return this.x+=i.x,this.y+=i.y,this},subtract:function(i){return this.clone()._subtract(mt(i))},_subtract:function(i){return this.x-=i.x,this.y-=i.y,this},divideBy:function(i){return this.clone()._divideBy(i)},_divideBy:function(i){return this.x/=i,this.y/=i,this},multiplyBy:function(i){return this.clone()._multiplyBy(i)},_multiplyBy:function(i){return this.x*=i,this.y*=i,this},scaleBy:function(i){return new G(this.x*i.x,this.y*i.y)},unscaleBy:function(i){return new G(this.x/i.x,this.y/i.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=Ct(this.x),this.y=Ct(this.y),this},distanceTo:function(i){i=mt(i);var o=i.x-this.x,u=i.y-this.y;return Math.sqrt(o*o+u*u)},equals:function(i){return i=mt(i),i.x===this.x&&i.y===this.y},contains:function(i){return i=mt(i),Math.abs(i.x)<=Math.abs(this.x)&&Math.abs(i.y)<=Math.abs(this.y)},toString:function(){return"Point("+_(this.x)+", "+_(this.y)+")"}};function mt(i,o,u){return i instanceof G?i:I(i)?new G(i[0],i[1]):i==null?i:typeof i=="object"&&"x"in i&&"y"in i?new G(i.x,i.y):new G(i,o,u)}function At(i,o){if(i)for(var u=o?[i,o]:i,m=0,x=u.length;m<x;m++)this.extend(u[m])}At.prototype={extend:function(i){var o,u;if(!i)return this;if(i instanceof G||typeof i[0]=="number"||"x"in i)o=u=mt(i);else if(i=kt(i),o=i.min,u=i.max,!o||!u)return this;return!this.min&&!this.max?(this.min=o.clone(),this.max=u.clone()):(this.min.x=Math.min(o.x,this.min.x),this.max.x=Math.max(u.x,this.max.x),this.min.y=Math.min(o.y,this.min.y),this.max.y=Math.max(u.y,this.max.y)),this},getCenter:function(i){return mt((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,i)},getBottomLeft:function(){return mt(this.min.x,this.max.y)},getTopRight:function(){return mt(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(i){var o,u;return typeof i[0]=="number"||i instanceof G?i=mt(i):i=kt(i),i instanceof At?(o=i.min,u=i.max):o=u=i,o.x>=this.min.x&&u.x<=this.max.x&&o.y>=this.min.y&&u.y<=this.max.y},intersects:function(i){i=kt(i);var o=this.min,u=this.max,m=i.min,x=i.max,T=x.x>=o.x&&m.x<=u.x,z=x.y>=o.y&&m.y<=u.y;return T&&z},overlaps:function(i){i=kt(i);var o=this.min,u=this.max,m=i.min,x=i.max,T=x.x>o.x&&m.x<u.x,z=x.y>o.y&&m.y<u.y;return T&&z},isValid:function(){return!!(this.min&&this.max)},pad:function(i){var o=this.min,u=this.max,m=Math.abs(o.x-u.x)*i,x=Math.abs(o.y-u.y)*i;return kt(mt(o.x-m,o.y-x),mt(u.x+m,u.y+x))},equals:function(i){return i?(i=kt(i),this.min.equals(i.getTopLeft())&&this.max.equals(i.getBottomRight())):!1}};function kt(i,o){return!i||i instanceof At?i:new At(i,o)}function Jt(i,o){if(i)for(var u=o?[i,o]:i,m=0,x=u.length;m<x;m++)this.extend(u[m])}Jt.prototype={extend:function(i){var o=this._southWest,u=this._northEast,m,x;if(i instanceof _t)m=i,x=i;else if(i instanceof Jt){if(m=i._southWest,x=i._northEast,!m||!x)return this}else return i?this.extend(xt(i)||lt(i)):this;return!o&&!u?(this._southWest=new _t(m.lat,m.lng),this._northEast=new _t(x.lat,x.lng)):(o.lat=Math.min(m.lat,o.lat),o.lng=Math.min(m.lng,o.lng),u.lat=Math.max(x.lat,u.lat),u.lng=Math.max(x.lng,u.lng)),this},pad:function(i){var o=this._southWest,u=this._northEast,m=Math.abs(o.lat-u.lat)*i,x=Math.abs(o.lng-u.lng)*i;return new Jt(new _t(o.lat-m,o.lng-x),new _t(u.lat+m,u.lng+x))},getCenter:function(){return new _t((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new _t(this.getNorth(),this.getWest())},getSouthEast:function(){return new _t(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(i){typeof i[0]=="number"||i instanceof _t||"lat"in i?i=xt(i):i=lt(i);var o=this._southWest,u=this._northEast,m,x;return i instanceof Jt?(m=i.getSouthWest(),x=i.getNorthEast()):m=x=i,m.lat>=o.lat&&x.lat<=u.lat&&m.lng>=o.lng&&x.lng<=u.lng},intersects:function(i){i=lt(i);var o=this._southWest,u=this._northEast,m=i.getSouthWest(),x=i.getNorthEast(),T=x.lat>=o.lat&&m.lat<=u.lat,z=x.lng>=o.lng&&m.lng<=u.lng;return T&&z},overlaps:function(i){i=lt(i);var o=this._southWest,u=this._northEast,m=i.getSouthWest(),x=i.getNorthEast(),T=x.lat>o.lat&&m.lat<u.lat,z=x.lng>o.lng&&m.lng<u.lng;return T&&z},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(i,o){return i?(i=lt(i),this._southWest.equals(i.getSouthWest(),o)&&this._northEast.equals(i.getNorthEast(),o)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function lt(i,o){return i instanceof Jt?i:new Jt(i,o)}function _t(i,o,u){if(isNaN(i)||isNaN(o))throw new Error("Invalid LatLng object: ("+i+", "+o+")");this.lat=+i,this.lng=+o,u!==void 0&&(this.alt=+u)}_t.prototype={equals:function(i,o){if(!i)return!1;i=xt(i);var u=Math.max(Math.abs(this.lat-i.lat),Math.abs(this.lng-i.lng));return u<=(o===void 0?1e-9:o)},toString:function(i){return"LatLng("+_(this.lat,i)+", "+_(this.lng,i)+")"},distanceTo:function(i){return dt.distance(this,xt(i))},wrap:function(){return dt.wrapLatLng(this)},toBounds:function(i){var o=180*i/40075017,u=o/Math.cos(Math.PI/180*this.lat);return lt([this.lat-o,this.lng-u],[this.lat+o,this.lng+u])},clone:function(){return new _t(this.lat,this.lng,this.alt)}};function xt(i,o,u){return i instanceof _t?i:I(i)&&typeof i[0]!="object"?i.length===3?new _t(i[0],i[1],i[2]):i.length===2?new _t(i[0],i[1]):null:i==null?i:typeof i=="object"&&"lat"in i?new _t(i.lat,"lng"in i?i.lng:i.lon,i.alt):o===void 0?null:new _t(i,o,u)}var W={latLngToPoint:function(i,o){var u=this.projection.project(i),m=this.scale(o);return this.transformation._transform(u,m)},pointToLatLng:function(i,o){var u=this.scale(o),m=this.transformation.untransform(i,u);return this.projection.unproject(m)},project:function(i){return this.projection.project(i)},unproject:function(i){return this.projection.unproject(i)},scale:function(i){return 256*Math.pow(2,i)},zoom:function(i){return Math.log(i/256)/Math.LN2},getProjectedBounds:function(i){if(this.infinite)return null;var o=this.projection.bounds,u=this.scale(i),m=this.transformation.transform(o.min,u),x=this.transformation.transform(o.max,u);return new At(m,x)},infinite:!1,wrapLatLng:function(i){var o=this.wrapLng?d(i.lng,this.wrapLng,!0):i.lng,u=this.wrapLat?d(i.lat,this.wrapLat,!0):i.lat,m=i.alt;return new _t(u,o,m)},wrapLatLngBounds:function(i){var o=i.getCenter(),u=this.wrapLatLng(o),m=o.lat-u.lat,x=o.lng-u.lng;if(m===0&&x===0)return i;var T=i.getSouthWest(),z=i.getNorthEast(),j=new _t(T.lat-m,T.lng-x),st=new _t(z.lat-m,z.lng-x);return new Jt(j,st)}},dt=s({},W,{wrapLng:[-180,180],R:6371e3,distance:function(i,o){var u=Math.PI/180,m=i.lat*u,x=o.lat*u,T=Math.sin((o.lat-i.lat)*u/2),z=Math.sin((o.lng-i.lng)*u/2),j=T*T+Math.cos(m)*Math.cos(x)*z*z,st=2*Math.atan2(Math.sqrt(j),Math.sqrt(1-j));return this.R*st}}),yt=6378137,St={R:yt,MAX_LATITUDE:85.0511287798,project:function(i){var o=Math.PI/180,u=this.MAX_LATITUDE,m=Math.max(Math.min(u,i.lat),-u),x=Math.sin(m*o);return new G(this.R*i.lng*o,this.R*Math.log((1+x)/(1-x))/2)},unproject:function(i){var o=180/Math.PI;return new _t((2*Math.atan(Math.exp(i.y/this.R))-Math.PI/2)*o,i.x*o/this.R)},bounds:(function(){var i=yt*Math.PI;return new At([-i,-i],[i,i])})()};function Wt(i,o,u,m){if(I(i)){this._a=i[0],this._b=i[1],this._c=i[2],this._d=i[3];return}this._a=i,this._b=o,this._c=u,this._d=m}Wt.prototype={transform:function(i,o){return this._transform(i.clone(),o)},_transform:function(i,o){return o=o||1,i.x=o*(this._a*i.x+this._b),i.y=o*(this._c*i.y+this._d),i},untransform:function(i,o){return o=o||1,new G((i.x/o-this._b)/this._a,(i.y/o-this._d)/this._c)}};function O(i,o,u,m){return new Wt(i,o,u,m)}var U=s({},dt,{code:"EPSG:3857",projection:St,transformation:(function(){var i=.5/(Math.PI*St.R);return O(i,.5,-i,.5)})()}),b=s({},U,{code:"EPSG:900913"});function ft(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function ot(i,o){var u="",m,x,T,z,j,st;for(m=0,T=i.length;m<T;m++){for(j=i[m],x=0,z=j.length;x<z;x++)st=j[x],u+=(x?"L":"M")+st.x+" "+st.y;u+=o?Xt.svg?"z":"x":""}return u||"M0 0"}var Q=document.documentElement.style,ut="ActiveXObject"in window,Mt=ut&&!document.addEventListener,ct="msLaunchUri"in navigator&&!("documentMode"in document),w=yn("webkit"),S=yn("android"),k=yn("android 2")||yn("android 3"),K=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),nt=S&&yn("Google")&&K<537&&!("AudioNode"in window),tt=!!window.opera,Pt=!ct&&yn("chrome"),Et=yn("gecko")&&!w&&!tt&&!ut,Rt=!Pt&&yn("safari"),Kt=yn("phantom"),Tt="OTransition"in Q,It=navigator.platform.indexOf("Win")===0,qt=ut&&"transition"in Q,jt="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!k,Lt="MozPerspective"in Q,ne=!window.L_DISABLE_3D&&(qt||jt||Lt)&&!Tt&&!Kt,Qt=typeof orientation<"u"||yn("mobile"),xe=Qt&&w,X=Qt&&jt,Ot=!window.PointerEvent&&window.MSPointerEvent,ht=!!(window.PointerEvent||Ot),vt="ontouchstart"in window||!!window.TouchEvent,Ft=!window.L_NO_TOUCH&&(vt||ht),Nt=Qt&&tt,se=Qt&&Et,De=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Ye=(function(){var i=!1;try{var o=Object.defineProperty({},"passive",{get:function(){i=!0}});window.addEventListener("testPassiveEventSupport",p,o),window.removeEventListener("testPassiveEventSupport",p,o)}catch{}return i})(),ye=(function(){return!!document.createElement("canvas").getContext})(),hn=!!(document.createElementNS&&ft("svg").createSVGRect),Gn=!!hn&&(function(){var i=document.createElement("div");return i.innerHTML="<svg/>",(i.firstChild&&i.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),zo=!hn&&(function(){try{var i=document.createElement("div");i.innerHTML='<v:shape adj="1"/>';var o=i.firstChild;return o.style.behavior="url(#default#VML)",o&&typeof o.adj=="object"}catch{return!1}})(),ko=navigator.platform.indexOf("Mac")===0,pi=navigator.platform.indexOf("Linux")===0;function yn(i){return navigator.userAgent.toLowerCase().indexOf(i)>=0}var Xt={ie:ut,ielt9:Mt,edge:ct,webkit:w,android:S,android23:k,androidStock:nt,opera:tt,chrome:Pt,gecko:Et,safari:Rt,phantom:Kt,opera12:Tt,win:It,ie3d:qt,webkit3d:jt,gecko3d:Lt,any3d:ne,mobile:Qt,mobileWebkit:xe,mobileWebkit3d:X,msPointer:Ot,pointer:ht,touch:Ft,touchNative:vt,mobileOpera:Nt,mobileGecko:se,retina:De,passiveEvents:Ye,canvas:ye,svg:hn,vml:zo,inlineSvg:Gn,mac:ko,linux:pi},Bs=Xt.msPointer?"MSPointerDown":"pointerdown",fr=Xt.msPointer?"MSPointerMove":"pointermove",zs=Xt.msPointer?"MSPointerUp":"pointerup",dr=Xt.msPointer?"MSPointerCancel":"pointercancel",kr={touchstart:Bs,touchmove:fr,touchend:zs,touchcancel:dr},ks={touchstart:at,touchmove:et,touchend:et,touchcancel:et},Wi={},Ho=!1;function Ml(i,o,u){return o==="touchstart"&&Z(),ks[o]?(u=ks[o].bind(this,u),i.addEventListener(kr[o],u,!1),u):(console.warn("wrong event specified:",o),p)}function Sl(i,o,u){if(!kr[o]){console.warn("wrong event specified:",o);return}i.removeEventListener(kr[o],u,!1)}function El(i){Wi[i.pointerId]=i}function bl(i){Wi[i.pointerId]&&(Wi[i.pointerId]=i)}function C(i){delete Wi[i.pointerId]}function Z(){Ho||(document.addEventListener(Bs,El,!0),document.addEventListener(fr,bl,!0),document.addEventListener(zs,C,!0),document.addEventListener(dr,C,!0),Ho=!0)}function et(i,o){if(o.pointerType!==(o.MSPOINTER_TYPE_MOUSE||"mouse")){o.touches=[];for(var u in Wi)o.touches.push(Wi[u]);o.changedTouches=[o],i(o)}}function at(i,o){o.MSPOINTER_TYPE_TOUCH&&o.pointerType===o.MSPOINTER_TYPE_TOUCH&&tn(o),et(i,o)}function q(i){var o={},u,m;for(m in i)u=i[m],o[m]=u&&u.bind?u.bind(i):u;return i=o,o.type="dblclick",o.detail=2,o.isTrusted=!1,o._simulated=!0,o}var wt=200;function Ut(i,o){i.addEventListener("dblclick",o);var u=0,m;function x(T){if(T.detail!==1){m=T.detail;return}if(!(T.pointerType==="mouse"||T.sourceCapabilities&&!T.sourceCapabilities.firesTouchEvents)){var z=Ih(T);if(!(z.some(function(st){return st instanceof HTMLLabelElement&&st.attributes.for})&&!z.some(function(st){return st instanceof HTMLInputElement||st instanceof HTMLSelectElement}))){var j=Date.now();j-u<=wt?(m++,m===2&&o(q(T))):m=1,u=j}}}return i.addEventListener("click",x),{dblclick:o,simDblclick:x}}function Ht(i,o){i.removeEventListener("dblclick",o.dblclick),i.removeEventListener("click",o.simDblclick)}var Vt=Qe(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),$t=Qe(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),te=$t==="webkitTransition"||$t==="OTransition"?$t+"End":"transitionend";function Yt(i){return typeof i=="string"?document.getElementById(i):i}function he(i,o){var u=i.style[o]||i.currentStyle&&i.currentStyle[o];if((!u||u==="auto")&&document.defaultView){var m=document.defaultView.getComputedStyle(i,null);u=m?m[o]:null}return u==="auto"?null:u}function Gt(i,o,u){var m=document.createElement(i);return m.className=o||"",u&&u.appendChild(m),m}function re(i){var o=i.parentNode;o&&o.removeChild(i)}function Ae(i){for(;i.firstChild;)i.removeChild(i.firstChild)}function fe(i){var o=i.parentNode;o&&o.lastChild!==i&&o.appendChild(i)}function Zt(i){var o=i.parentNode;o&&o.firstChild!==i&&o.insertBefore(i,o.firstChild)}function Ne(i,o){if(i.classList!==void 0)return i.classList.contains(o);var u=je(i);return u.length>0&&new RegExp("(^|\\s)"+o+"(\\s|$)").test(u)}function Bt(i,o){if(i.classList!==void 0)for(var u=M(o),m=0,x=u.length;m<x;m++)i.classList.add(u[m]);else if(!Ne(i,o)){var T=je(i);ni(i,(T?T+" ":"")+o)}}function ge(i,o){i.classList!==void 0?i.classList.remove(o):ni(i,g((" "+je(i)+" ").replace(" "+o+" "," ")))}function ni(i,o){i.className.baseVal===void 0?i.className=o:i.className.baseVal=o}function je(i){return i.correspondingElement&&(i=i.correspondingElement),i.className.baseVal===void 0?i.className:i.className.baseVal}function Ke(i,o){"opacity"in i.style?i.style.opacity=o:"filter"in i.style&&Ce(i,o)}function Ce(i,o){var u=!1,m="DXImageTransform.Microsoft.Alpha";try{u=i.filters.item(m)}catch{if(o===1)return}o=Math.round(o*100),u?(u.Enabled=o!==100,u.Opacity=o):i.style.filter+=" progid:"+m+"(opacity="+o+")"}function Qe(i){for(var o=document.documentElement.style,u=0;u<i.length;u++)if(i[u]in o)return i[u];return!1}function ze(i,o,u){var m=o||new G(0,0);i.style[Vt]=(Xt.ie3d?"translate("+m.x+"px,"+m.y+"px)":"translate3d("+m.x+"px,"+m.y+"px,0)")+(u?" scale("+u+")":"")}function pe(i,o){i._leaflet_pos=o,Xt.any3d?ze(i,o):(i.style.left=o.x+"px",i.style.top=o.y+"px")}function Oe(i){return i._leaflet_pos||new G(0,0)}var mi,bn,Tl;if("onselectstart"in document)mi=function(){ae(window,"selectstart",tn)},bn=function(){Re(window,"selectstart",tn)};else{var Hs=Qe(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);mi=function(){if(Hs){var i=document.documentElement.style;Tl=i[Hs],i[Hs]="none"}},bn=function(){Hs&&(document.documentElement.style[Hs]=Tl,Tl=void 0)}}function wl(){ae(window,"dragstart",tn)}function Al(){Re(window,"dragstart",tn)}var Vo,Pl;function Cl(i){for(;i.tabIndex===-1;)i=i.parentNode;i.style&&(Go(),Vo=i,Pl=i.style.outlineStyle,i.style.outlineStyle="none",ae(window,"keydown",Go))}function Go(){Vo&&(Vo.style.outlineStyle=Pl,Vo=void 0,Pl=void 0,Re(window,"keydown",Go))}function Rh(i){do i=i.parentNode;while((!i.offsetWidth||!i.offsetHeight)&&i!==document.body);return i}function Rl(i){var o=i.getBoundingClientRect();return{x:o.width/i.offsetWidth||1,y:o.height/i.offsetHeight||1,boundingClientRect:o}}var x_={__proto__:null,TRANSFORM:Vt,TRANSITION:$t,TRANSITION_END:te,get:Yt,getStyle:he,create:Gt,remove:re,empty:Ae,toFront:fe,toBack:Zt,hasClass:Ne,addClass:Bt,removeClass:ge,setClass:ni,getClass:je,setOpacity:Ke,testProp:Qe,setTransform:ze,setPosition:pe,getPosition:Oe,get disableTextSelection(){return mi},get enableTextSelection(){return bn},disableImageDrag:wl,enableImageDrag:Al,preventOutline:Cl,restoreOutline:Go,getSizedParentNode:Rh,getScale:Rl};function ae(i,o,u,m){if(o&&typeof o=="object")for(var x in o)Il(i,x,o[x],u);else{o=M(o);for(var T=0,z=o.length;T<z;T++)Il(i,o[T],u,m)}return this}var ii="_leaflet_events";function Re(i,o,u,m){if(arguments.length===1)Lh(i),delete i[ii];else if(o&&typeof o=="object")for(var x in o)Dl(i,x,o[x],u);else if(o=M(o),arguments.length===2)Lh(i,function(j){return A(o,j)!==-1});else for(var T=0,z=o.length;T<z;T++)Dl(i,o[T],u,m);return this}function Lh(i,o){for(var u in i[ii]){var m=u.split(/\d/)[0];(!o||o(m))&&Dl(i,m,null,null,u)}}var Ll={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Il(i,o,u,m){var x=o+h(u)+(m?"_"+h(m):"");if(i[ii]&&i[ii][x])return this;var T=function(j){return u.call(m||i,j||window.event)},z=T;!Xt.touchNative&&Xt.pointer&&o.indexOf("touch")===0?T=Ml(i,o,T):Xt.touch&&o==="dblclick"?T=Ut(i,T):"addEventListener"in i?o==="touchstart"||o==="touchmove"||o==="wheel"||o==="mousewheel"?i.addEventListener(Ll[o]||o,T,Xt.passiveEvents?{passive:!1}:!1):o==="mouseenter"||o==="mouseleave"?(T=function(j){j=j||window.event,Ul(i,j)&&z(j)},i.addEventListener(Ll[o],T,!1)):i.addEventListener(o,z,!1):i.attachEvent("on"+o,T),i[ii]=i[ii]||{},i[ii][x]=T}function Dl(i,o,u,m,x){x=x||o+h(u)+(m?"_"+h(m):"");var T=i[ii]&&i[ii][x];if(!T)return this;!Xt.touchNative&&Xt.pointer&&o.indexOf("touch")===0?Sl(i,o,T):Xt.touch&&o==="dblclick"?Ht(i,T):"removeEventListener"in i?i.removeEventListener(Ll[o]||o,T,!1):i.detachEvent("on"+o,T),i[ii][x]=null}function pr(i){return i.stopPropagation?i.stopPropagation():i.originalEvent?i.originalEvent._stopped=!0:i.cancelBubble=!0,this}function Ol(i){return Il(i,"wheel",pr),this}function Vs(i){return ae(i,"mousedown touchstart dblclick contextmenu",pr),i._leaflet_disable_click=!0,this}function tn(i){return i.preventDefault?i.preventDefault():i.returnValue=!1,this}function mr(i){return tn(i),pr(i),this}function Ih(i){if(i.composedPath)return i.composedPath();for(var o=[],u=i.target;u;)o.push(u),u=u.parentNode;return o}function Dh(i,o){if(!o)return new G(i.clientX,i.clientY);var u=Rl(o),m=u.boundingClientRect;return new G((i.clientX-m.left)/u.x-o.clientLeft,(i.clientY-m.top)/u.y-o.clientTop)}var y_=Xt.linux&&Xt.chrome?window.devicePixelRatio:Xt.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Oh(i){return Xt.edge?i.wheelDeltaY/2:i.deltaY&&i.deltaMode===0?-i.deltaY/y_:i.deltaY&&i.deltaMode===1?-i.deltaY*20:i.deltaY&&i.deltaMode===2?-i.deltaY*60:i.deltaX||i.deltaZ?0:i.wheelDelta?(i.wheelDeltaY||i.wheelDelta)/2:i.detail&&Math.abs(i.detail)<32765?-i.detail*20:i.detail?i.detail/-32765*60:0}function Ul(i,o){var u=o.relatedTarget;if(!u)return!0;try{for(;u&&u!==i;)u=u.parentNode}catch{return!1}return u!==i}var M_={__proto__:null,on:ae,off:Re,stopPropagation:pr,disableScrollPropagation:Ol,disableClickPropagation:Vs,preventDefault:tn,stop:mr,getPropagationPath:Ih,getMousePosition:Dh,getWheelDelta:Oh,isExternalTarget:Ul,addListener:ae,removeListener:Re},Uh=pt.extend({run:function(i,o,u,m){this.stop(),this._el=i,this._inProgress=!0,this._duration=u||.25,this._easeOutPower=1/Math.max(m||.5,.2),this._startPos=Oe(i),this._offset=o.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=F(this._animate,this),this._step()},_step:function(i){var o=+new Date-this._startTime,u=this._duration*1e3;o<u?this._runFrame(this._easeOut(o/u),i):(this._runFrame(1),this._complete())},_runFrame:function(i,o){var u=this._startPos.add(this._offset.multiplyBy(i));o&&u._round(),pe(this._el,u),this.fire("step")},_complete:function(){$(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(i){return 1-Math.pow(1-i,this._easeOutPower)}}),_e=pt.extend({options:{crs:U,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(i,o){o=E(this,o),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(i),this._initLayout(),this._onResize=l(this._onResize,this),this._initEvents(),o.maxBounds&&this.setMaxBounds(o.maxBounds),o.zoom!==void 0&&(this._zoom=this._limitZoom(o.zoom)),o.center&&o.zoom!==void 0&&this.setView(xt(o.center),o.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=$t&&Xt.any3d&&!Xt.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),ae(this._proxy,te,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(i,o,u){if(o=o===void 0?this._zoom:this._limitZoom(o),i=this._limitCenter(xt(i),o,this.options.maxBounds),u=u||{},this._stop(),this._loaded&&!u.reset&&u!==!0){u.animate!==void 0&&(u.zoom=s({animate:u.animate},u.zoom),u.pan=s({animate:u.animate,duration:u.duration},u.pan));var m=this._zoom!==o?this._tryAnimatedZoom&&this._tryAnimatedZoom(i,o,u.zoom):this._tryAnimatedPan(i,u.pan);if(m)return clearTimeout(this._sizeTimer),this}return this._resetView(i,o,u.pan&&u.pan.noMoveStart),this},setZoom:function(i,o){return this._loaded?this.setView(this.getCenter(),i,{zoom:o}):(this._zoom=i,this)},zoomIn:function(i,o){return i=i||(Xt.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+i,o)},zoomOut:function(i,o){return i=i||(Xt.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-i,o)},setZoomAround:function(i,o,u){var m=this.getZoomScale(o),x=this.getSize().divideBy(2),T=i instanceof G?i:this.latLngToContainerPoint(i),z=T.subtract(x).multiplyBy(1-1/m),j=this.containerPointToLatLng(x.add(z));return this.setView(j,o,{zoom:u})},_getBoundsCenterZoom:function(i,o){o=o||{},i=i.getBounds?i.getBounds():lt(i);var u=mt(o.paddingTopLeft||o.padding||[0,0]),m=mt(o.paddingBottomRight||o.padding||[0,0]),x=this.getBoundsZoom(i,!1,u.add(m));if(x=typeof o.maxZoom=="number"?Math.min(o.maxZoom,x):x,x===1/0)return{center:i.getCenter(),zoom:x};var T=m.subtract(u).divideBy(2),z=this.project(i.getSouthWest(),x),j=this.project(i.getNorthEast(),x),st=this.unproject(z.add(j).divideBy(2).add(T),x);return{center:st,zoom:x}},fitBounds:function(i,o){if(i=lt(i),!i.isValid())throw new Error("Bounds are not valid.");var u=this._getBoundsCenterZoom(i,o);return this.setView(u.center,u.zoom,o)},fitWorld:function(i){return this.fitBounds([[-90,-180],[90,180]],i)},panTo:function(i,o){return this.setView(i,this._zoom,{pan:o})},panBy:function(i,o){if(i=mt(i).round(),o=o||{},!i.x&&!i.y)return this.fire("moveend");if(o.animate!==!0&&!this.getSize().contains(i))return this._resetView(this.unproject(this.project(this.getCenter()).add(i)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Uh,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),o.noMoveStart||this.fire("movestart"),o.animate!==!1){Bt(this._mapPane,"leaflet-pan-anim");var u=this._getMapPanePos().subtract(i).round();this._panAnim.run(this._mapPane,u,o.duration||.25,o.easeLinearity)}else this._rawPanBy(i),this.fire("move").fire("moveend");return this},flyTo:function(i,o,u){if(u=u||{},u.animate===!1||!Xt.any3d)return this.setView(i,o,u);this._stop();var m=this.project(this.getCenter()),x=this.project(i),T=this.getSize(),z=this._zoom;i=xt(i),o=o===void 0?z:o;var j=Math.max(T.x,T.y),st=j*this.getZoomScale(z,o),bt=x.distanceTo(m)||1,zt=1.42,ee=zt*zt;function de(ke){var ea=ke?-1:1,cg=ke?st:j,ug=st*st-j*j+ea*ee*ee*bt*bt,hg=2*cg*ee*bt,Zl=ug/hg,_f=Math.sqrt(Zl*Zl+1)-Zl,fg=_f<1e-9?-18:Math.log(_f);return fg}function fn(ke){return(Math.exp(ke)-Math.exp(-ke))/2}function $e(ke){return(Math.exp(ke)+Math.exp(-ke))/2}function Un(ke){return fn(ke)/$e(ke)}var Mn=de(0);function Zr(ke){return j*($e(Mn)/$e(Mn+zt*ke))}function sg(ke){return j*($e(Mn)*Un(Mn+zt*ke)-fn(Mn))/ee}function og(ke){return 1-Math.pow(1-ke,1.5)}var ag=Date.now(),pf=(de(1)-Mn)/zt,lg=u.duration?1e3*u.duration:1e3*pf*.8;function mf(){var ke=(Date.now()-ag)/lg,ea=og(ke)*pf;ke<=1?(this._flyToFrame=F(mf,this),this._move(this.unproject(m.add(x.subtract(m).multiplyBy(sg(ea)/bt)),z),this.getScaleZoom(j/Zr(ea),z),{flyTo:!0})):this._move(i,o)._moveEnd(!0)}return this._moveStart(!0,u.noMoveStart),mf.call(this),this},flyToBounds:function(i,o){var u=this._getBoundsCenterZoom(i,o);return this.flyTo(u.center,u.zoom,o)},setMaxBounds:function(i){return i=lt(i),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),i.isValid()?(this.options.maxBounds=i,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(i){var o=this.options.minZoom;return this.options.minZoom=i,this._loaded&&o!==i&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(i):this},setMaxZoom:function(i){var o=this.options.maxZoom;return this.options.maxZoom=i,this._loaded&&o!==i&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(i):this},panInsideBounds:function(i,o){this._enforcingBounds=!0;var u=this.getCenter(),m=this._limitCenter(u,this._zoom,lt(i));return u.equals(m)||this.panTo(m,o),this._enforcingBounds=!1,this},panInside:function(i,o){o=o||{};var u=mt(o.paddingTopLeft||o.padding||[0,0]),m=mt(o.paddingBottomRight||o.padding||[0,0]),x=this.project(this.getCenter()),T=this.project(i),z=this.getPixelBounds(),j=kt([z.min.add(u),z.max.subtract(m)]),st=j.getSize();if(!j.contains(T)){this._enforcingBounds=!0;var bt=T.subtract(j.getCenter()),zt=j.extend(T).getSize().subtract(st);x.x+=bt.x<0?-zt.x:zt.x,x.y+=bt.y<0?-zt.y:zt.y,this.panTo(this.unproject(x),o),this._enforcingBounds=!1}return this},invalidateSize:function(i){if(!this._loaded)return this;i=s({animate:!1,pan:!0},i===!0?{animate:!0}:i);var o=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var u=this.getSize(),m=o.divideBy(2).round(),x=u.divideBy(2).round(),T=m.subtract(x);return!T.x&&!T.y?this:(i.animate&&i.pan?this.panBy(T):(i.pan&&this._rawPanBy(T),this.fire("move"),i.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(l(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:o,newSize:u}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(i){if(i=this._locateOptions=s({timeout:1e4,watch:!1},i),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var o=l(this._handleGeolocationResponse,this),u=l(this._handleGeolocationError,this);return i.watch?this._locationWatchId=navigator.geolocation.watchPosition(o,u,i):navigator.geolocation.getCurrentPosition(o,u,i),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(i){if(this._container._leaflet_id){var o=i.code,u=i.message||(o===1?"permission denied":o===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:o,message:"Geolocation error: "+u+"."})}},_handleGeolocationResponse:function(i){if(this._container._leaflet_id){var o=i.coords.latitude,u=i.coords.longitude,m=new _t(o,u),x=m.toBounds(i.coords.accuracy*2),T=this._locateOptions;if(T.setView){var z=this.getBoundsZoom(x);this.setView(m,T.maxZoom?Math.min(z,T.maxZoom):z)}var j={latlng:m,bounds:x,timestamp:i.timestamp};for(var st in i.coords)typeof i.coords[st]=="number"&&(j[st]=i.coords[st]);this.fire("locationfound",j)}},addHandler:function(i,o){if(!o)return this;var u=this[i]=new o(this);return this._handlers.push(u),this.options[i]&&u.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),re(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&($(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var i;for(i in this._layers)this._layers[i].remove();for(i in this._panes)re(this._panes[i]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(i,o){var u="leaflet-pane"+(i?" leaflet-"+i.replace("Pane","")+"-pane":""),m=Gt("div",u,o||this._mapPane);return i&&(this._panes[i]=m),m},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var i=this.getPixelBounds(),o=this.unproject(i.getBottomLeft()),u=this.unproject(i.getTopRight());return new Jt(o,u)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(i,o,u){i=lt(i),u=mt(u||[0,0]);var m=this.getZoom()||0,x=this.getMinZoom(),T=this.getMaxZoom(),z=i.getNorthWest(),j=i.getSouthEast(),st=this.getSize().subtract(u),bt=kt(this.project(j,m),this.project(z,m)).getSize(),zt=Xt.any3d?this.options.zoomSnap:1,ee=st.x/bt.x,de=st.y/bt.y,fn=o?Math.max(ee,de):Math.min(ee,de);return m=this.getScaleZoom(fn,m),zt&&(m=Math.round(m/(zt/100))*(zt/100),m=o?Math.ceil(m/zt)*zt:Math.floor(m/zt)*zt),Math.max(x,Math.min(T,m))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new G(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(i,o){var u=this._getTopLeftPoint(i,o);return new At(u,u.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(i){return this.options.crs.getProjectedBounds(i===void 0?this.getZoom():i)},getPane:function(i){return typeof i=="string"?this._panes[i]:i},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(i,o){var u=this.options.crs;return o=o===void 0?this._zoom:o,u.scale(i)/u.scale(o)},getScaleZoom:function(i,o){var u=this.options.crs;o=o===void 0?this._zoom:o;var m=u.zoom(i*u.scale(o));return isNaN(m)?1/0:m},project:function(i,o){return o=o===void 0?this._zoom:o,this.options.crs.latLngToPoint(xt(i),o)},unproject:function(i,o){return o=o===void 0?this._zoom:o,this.options.crs.pointToLatLng(mt(i),o)},layerPointToLatLng:function(i){var o=mt(i).add(this.getPixelOrigin());return this.unproject(o)},latLngToLayerPoint:function(i){var o=this.project(xt(i))._round();return o._subtract(this.getPixelOrigin())},wrapLatLng:function(i){return this.options.crs.wrapLatLng(xt(i))},wrapLatLngBounds:function(i){return this.options.crs.wrapLatLngBounds(lt(i))},distance:function(i,o){return this.options.crs.distance(xt(i),xt(o))},containerPointToLayerPoint:function(i){return mt(i).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(i){return mt(i).add(this._getMapPanePos())},containerPointToLatLng:function(i){var o=this.containerPointToLayerPoint(mt(i));return this.layerPointToLatLng(o)},latLngToContainerPoint:function(i){return this.layerPointToContainerPoint(this.latLngToLayerPoint(xt(i)))},mouseEventToContainerPoint:function(i){return Dh(i,this._container)},mouseEventToLayerPoint:function(i){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(i))},mouseEventToLatLng:function(i){return this.layerPointToLatLng(this.mouseEventToLayerPoint(i))},_initContainer:function(i){var o=this._container=Yt(i);if(o){if(o._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");ae(o,"scroll",this._onScroll,this),this._containerId=h(o)},_initLayout:function(){var i=this._container;this._fadeAnimated=this.options.fadeAnimation&&Xt.any3d,Bt(i,"leaflet-container"+(Xt.touch?" leaflet-touch":"")+(Xt.retina?" leaflet-retina":"")+(Xt.ielt9?" leaflet-oldie":"")+(Xt.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var o=he(i,"position");o!=="absolute"&&o!=="relative"&&o!=="fixed"&&o!=="sticky"&&(i.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var i=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),pe(this._mapPane,new G(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Bt(i.markerPane,"leaflet-zoom-hide"),Bt(i.shadowPane,"leaflet-zoom-hide"))},_resetView:function(i,o,u){pe(this._mapPane,new G(0,0));var m=!this._loaded;this._loaded=!0,o=this._limitZoom(o),this.fire("viewprereset");var x=this._zoom!==o;this._moveStart(x,u)._move(i,o)._moveEnd(x),this.fire("viewreset"),m&&this.fire("load")},_moveStart:function(i,o){return i&&this.fire("zoomstart"),o||this.fire("movestart"),this},_move:function(i,o,u,m){o===void 0&&(o=this._zoom);var x=this._zoom!==o;return this._zoom=o,this._lastCenter=i,this._pixelOrigin=this._getNewPixelOrigin(i),m?u&&u.pinch&&this.fire("zoom",u):((x||u&&u.pinch)&&this.fire("zoom",u),this.fire("move",u)),this},_moveEnd:function(i){return i&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return $(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(i){pe(this._mapPane,this._getMapPanePos().subtract(i))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(i){this._targets={},this._targets[h(this._container)]=this;var o=i?Re:ae;o(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&o(window,"resize",this._onResize,this),Xt.any3d&&this.options.transform3DLimit&&(i?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){$(this._resizeRequest),this._resizeRequest=F(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var i=this._getMapPanePos();Math.max(Math.abs(i.x),Math.abs(i.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(i,o){for(var u=[],m,x=o==="mouseout"||o==="mouseover",T=i.target||i.srcElement,z=!1;T;){if(m=this._targets[h(T)],m&&(o==="click"||o==="preclick")&&this._draggableMoved(m)){z=!0;break}if(m&&m.listens(o,!0)&&(x&&!Ul(T,i)||(u.push(m),x))||T===this._container)break;T=T.parentNode}return!u.length&&!z&&!x&&this.listens(o,!0)&&(u=[this]),u},_isClickDisabled:function(i){for(;i&&i!==this._container;){if(i._leaflet_disable_click)return!0;i=i.parentNode}},_handleDOMEvent:function(i){var o=i.target||i.srcElement;if(!(!this._loaded||o._leaflet_disable_events||i.type==="click"&&this._isClickDisabled(o))){var u=i.type;u==="mousedown"&&Cl(o),this._fireDOMEvent(i,u)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(i,o,u){if(i.type==="click"){var m=s({},i);m.type="preclick",this._fireDOMEvent(m,m.type,u)}var x=this._findEventTargets(i,o);if(u){for(var T=[],z=0;z<u.length;z++)u[z].listens(o,!0)&&T.push(u[z]);x=T.concat(x)}if(x.length){o==="contextmenu"&&tn(i);var j=x[0],st={originalEvent:i};if(i.type!=="keypress"&&i.type!=="keydown"&&i.type!=="keyup"){var bt=j.getLatLng&&(!j._radius||j._radius<=10);st.containerPoint=bt?this.latLngToContainerPoint(j.getLatLng()):this.mouseEventToContainerPoint(i),st.layerPoint=this.containerPointToLayerPoint(st.containerPoint),st.latlng=bt?j.getLatLng():this.layerPointToLatLng(st.layerPoint)}for(z=0;z<x.length;z++)if(x[z].fire(o,st,!0),st.originalEvent._stopped||x[z].options.bubblingMouseEvents===!1&&A(this._mouseEvents,o)!==-1)return}},_draggableMoved:function(i){return i=i.dragging&&i.dragging.enabled()?i:this,i.dragging&&i.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var i=0,o=this._handlers.length;i<o;i++)this._handlers[i].disable()},whenReady:function(i,o){return this._loaded?i.call(o||this,{target:this}):this.on("load",i,o),this},_getMapPanePos:function(){return Oe(this._mapPane)||new G(0,0)},_moved:function(){var i=this._getMapPanePos();return i&&!i.equals([0,0])},_getTopLeftPoint:function(i,o){var u=i&&o!==void 0?this._getNewPixelOrigin(i,o):this.getPixelOrigin();return u.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(i,o){var u=this.getSize()._divideBy(2);return this.project(i,o)._subtract(u)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(i,o,u){var m=this._getNewPixelOrigin(u,o);return this.project(i,o)._subtract(m)},_latLngBoundsToNewLayerBounds:function(i,o,u){var m=this._getNewPixelOrigin(u,o);return kt([this.project(i.getSouthWest(),o)._subtract(m),this.project(i.getNorthWest(),o)._subtract(m),this.project(i.getSouthEast(),o)._subtract(m),this.project(i.getNorthEast(),o)._subtract(m)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(i){return this.latLngToLayerPoint(i).subtract(this._getCenterLayerPoint())},_limitCenter:function(i,o,u){if(!u)return i;var m=this.project(i,o),x=this.getSize().divideBy(2),T=new At(m.subtract(x),m.add(x)),z=this._getBoundsOffset(T,u,o);return Math.abs(z.x)<=1&&Math.abs(z.y)<=1?i:this.unproject(m.add(z),o)},_limitOffset:function(i,o){if(!o)return i;var u=this.getPixelBounds(),m=new At(u.min.add(i),u.max.add(i));return i.add(this._getBoundsOffset(m,o))},_getBoundsOffset:function(i,o,u){var m=kt(this.project(o.getNorthEast(),u),this.project(o.getSouthWest(),u)),x=m.min.subtract(i.min),T=m.max.subtract(i.max),z=this._rebound(x.x,-T.x),j=this._rebound(x.y,-T.y);return new G(z,j)},_rebound:function(i,o){return i+o>0?Math.round(i-o)/2:Math.max(0,Math.ceil(i))-Math.max(0,Math.floor(o))},_limitZoom:function(i){var o=this.getMinZoom(),u=this.getMaxZoom(),m=Xt.any3d?this.options.zoomSnap:1;return m&&(i=Math.round(i/m)*m),Math.max(o,Math.min(u,i))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){ge(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(i,o){var u=this._getCenterOffset(i)._trunc();return(o&&o.animate)!==!0&&!this.getSize().contains(u)?!1:(this.panBy(u,o),!0)},_createAnimProxy:function(){var i=this._proxy=Gt("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(i),this.on("zoomanim",function(o){var u=Vt,m=this._proxy.style[u];ze(this._proxy,this.project(o.center,o.zoom),this.getZoomScale(o.zoom,1)),m===this._proxy.style[u]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){re(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var i=this.getCenter(),o=this.getZoom();ze(this._proxy,this.project(i,o),this.getZoomScale(o,1))},_catchTransitionEnd:function(i){this._animatingZoom&&i.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(i,o,u){if(this._animatingZoom)return!0;if(u=u||{},!this._zoomAnimated||u.animate===!1||this._nothingToAnimate()||Math.abs(o-this._zoom)>this.options.zoomAnimationThreshold)return!1;var m=this.getZoomScale(o),x=this._getCenterOffset(i)._divideBy(1-1/m);return u.animate!==!0&&!this.getSize().contains(x)?!1:(F(function(){this._moveStart(!0,u.noMoveStart||!1)._animateZoom(i,o,!0)},this),!0)},_animateZoom:function(i,o,u,m){this._mapPane&&(u&&(this._animatingZoom=!0,this._animateToCenter=i,this._animateToZoom=o,Bt(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:i,zoom:o,noUpdate:m}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(l(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&ge(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function S_(i,o){return new _e(i,o)}var Wn=rt.extend({options:{position:"topright"},initialize:function(i){E(this,i)},getPosition:function(){return this.options.position},setPosition:function(i){var o=this._map;return o&&o.removeControl(this),this.options.position=i,o&&o.addControl(this),this},getContainer:function(){return this._container},addTo:function(i){this.remove(),this._map=i;var o=this._container=this.onAdd(i),u=this.getPosition(),m=i._controlCorners[u];return Bt(o,"leaflet-control"),u.indexOf("bottom")!==-1?m.insertBefore(o,m.firstChild):m.appendChild(o),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(re(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(i){this._map&&i&&i.screenX>0&&i.screenY>0&&this._map.getContainer().focus()}}),Gs=function(i){return new Wn(i)};_e.include({addControl:function(i){return i.addTo(this),this},removeControl:function(i){return i.remove(),this},_initControlPos:function(){var i=this._controlCorners={},o="leaflet-",u=this._controlContainer=Gt("div",o+"control-container",this._container);function m(x,T){var z=o+x+" "+o+T;i[x+T]=Gt("div",z,u)}m("top","left"),m("top","right"),m("bottom","left"),m("bottom","right")},_clearControlPos:function(){for(var i in this._controlCorners)re(this._controlCorners[i]);re(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Nh=Wn.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(i,o,u,m){return u<m?-1:m<u?1:0}},initialize:function(i,o,u){E(this,u),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var m in i)this._addLayer(i[m],m);for(m in o)this._addLayer(o[m],m,!0)},onAdd:function(i){this._initLayout(),this._update(),this._map=i,i.on("zoomend",this._checkDisabledLayers,this);for(var o=0;o<this._layers.length;o++)this._layers[o].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(i){return Wn.prototype.addTo.call(this,i),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var i=0;i<this._layers.length;i++)this._layers[i].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(i,o){return this._addLayer(i,o),this._map?this._update():this},addOverlay:function(i,o){return this._addLayer(i,o,!0),this._map?this._update():this},removeLayer:function(i){i.off("add remove",this._onLayerChange,this);var o=this._getLayer(h(i));return o&&this._layers.splice(this._layers.indexOf(o),1),this._map?this._update():this},expand:function(){Bt(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var i=this._map.getSize().y-(this._container.offsetTop+50);return i<this._section.clientHeight?(Bt(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=i+"px"):ge(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return ge(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var i="leaflet-control-layers",o=this._container=Gt("div",i),u=this.options.collapsed;o.setAttribute("aria-haspopup",!0),Vs(o),Ol(o);var m=this._section=Gt("section",i+"-list");u&&(this._map.on("click",this.collapse,this),ae(o,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var x=this._layersLink=Gt("a",i+"-toggle",o);x.href="#",x.title="Layers",x.setAttribute("role","button"),ae(x,{keydown:function(T){T.keyCode===13&&this._expandSafely()},click:function(T){tn(T),this._expandSafely()}},this),u||this.expand(),this._baseLayersList=Gt("div",i+"-base",m),this._separator=Gt("div",i+"-separator",m),this._overlaysList=Gt("div",i+"-overlays",m),o.appendChild(m)},_getLayer:function(i){for(var o=0;o<this._layers.length;o++)if(this._layers[o]&&h(this._layers[o].layer)===i)return this._layers[o]},_addLayer:function(i,o,u){this._map&&i.on("add remove",this._onLayerChange,this),this._layers.push({layer:i,name:o,overlay:u}),this.options.sortLayers&&this._layers.sort(l(function(m,x){return this.options.sortFunction(m.layer,x.layer,m.name,x.name)},this)),this.options.autoZIndex&&i.setZIndex&&(this._lastZIndex++,i.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Ae(this._baseLayersList),Ae(this._overlaysList),this._layerControlInputs=[];var i,o,u,m,x=0;for(u=0;u<this._layers.length;u++)m=this._layers[u],this._addItem(m),o=o||m.overlay,i=i||!m.overlay,x+=m.overlay?0:1;return this.options.hideSingleBase&&(i=i&&x>1,this._baseLayersList.style.display=i?"":"none"),this._separator.style.display=o&&i?"":"none",this},_onLayerChange:function(i){this._handlingClick||this._update();var o=this._getLayer(h(i.target)),u=o.overlay?i.type==="add"?"overlayadd":"overlayremove":i.type==="add"?"baselayerchange":null;u&&this._map.fire(u,o)},_createRadioElement:function(i,o){var u='<input type="radio" class="leaflet-control-layers-selector" name="'+i+'"'+(o?' checked="checked"':"")+"/>",m=document.createElement("div");return m.innerHTML=u,m.firstChild},_addItem:function(i){var o=document.createElement("label"),u=this._map.hasLayer(i.layer),m;i.overlay?(m=document.createElement("input"),m.type="checkbox",m.className="leaflet-control-layers-selector",m.defaultChecked=u):m=this._createRadioElement("leaflet-base-layers_"+h(this),u),this._layerControlInputs.push(m),m.layerId=h(i.layer),ae(m,"click",this._onInputClick,this);var x=document.createElement("span");x.innerHTML=" "+i.name;var T=document.createElement("span");o.appendChild(T),T.appendChild(m),T.appendChild(x);var z=i.overlay?this._overlaysList:this._baseLayersList;return z.appendChild(o),this._checkDisabledLayers(),o},_onInputClick:function(){if(!this._preventClick){var i=this._layerControlInputs,o,u,m=[],x=[];this._handlingClick=!0;for(var T=i.length-1;T>=0;T--)o=i[T],u=this._getLayer(o.layerId).layer,o.checked?m.push(u):o.checked||x.push(u);for(T=0;T<x.length;T++)this._map.hasLayer(x[T])&&this._map.removeLayer(x[T]);for(T=0;T<m.length;T++)this._map.hasLayer(m[T])||this._map.addLayer(m[T]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var i=this._layerControlInputs,o,u,m=this._map.getZoom(),x=i.length-1;x>=0;x--)o=i[x],u=this._getLayer(o.layerId).layer,o.disabled=u.options.minZoom!==void 0&&m<u.options.minZoom||u.options.maxZoom!==void 0&&m>u.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var i=this._section;this._preventClick=!0,ae(i,"click",tn),this.expand();var o=this;setTimeout(function(){Re(i,"click",tn),o._preventClick=!1})}}),E_=function(i,o,u){return new Nh(i,o,u)},Nl=Wn.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(i){var o="leaflet-control-zoom",u=Gt("div",o+" leaflet-bar"),m=this.options;return this._zoomInButton=this._createButton(m.zoomInText,m.zoomInTitle,o+"-in",u,this._zoomIn),this._zoomOutButton=this._createButton(m.zoomOutText,m.zoomOutTitle,o+"-out",u,this._zoomOut),this._updateDisabled(),i.on("zoomend zoomlevelschange",this._updateDisabled,this),u},onRemove:function(i){i.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(i){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(i.shiftKey?3:1))},_zoomOut:function(i){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(i.shiftKey?3:1))},_createButton:function(i,o,u,m,x){var T=Gt("a",u,m);return T.innerHTML=i,T.href="#",T.title=o,T.setAttribute("role","button"),T.setAttribute("aria-label",o),Vs(T),ae(T,"click",mr),ae(T,"click",x,this),ae(T,"click",this._refocusOnMap,this),T},_updateDisabled:function(){var i=this._map,o="leaflet-disabled";ge(this._zoomInButton,o),ge(this._zoomOutButton,o),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||i._zoom===i.getMinZoom())&&(Bt(this._zoomOutButton,o),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||i._zoom===i.getMaxZoom())&&(Bt(this._zoomInButton,o),this._zoomInButton.setAttribute("aria-disabled","true"))}});_e.mergeOptions({zoomControl:!0}),_e.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Nl,this.addControl(this.zoomControl))});var b_=function(i){return new Nl(i)},Fh=Wn.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(i){var o="leaflet-control-scale",u=Gt("div",o),m=this.options;return this._addScales(m,o+"-line",u),i.on(m.updateWhenIdle?"moveend":"move",this._update,this),i.whenReady(this._update,this),u},onRemove:function(i){i.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(i,o,u){i.metric&&(this._mScale=Gt("div",o,u)),i.imperial&&(this._iScale=Gt("div",o,u))},_update:function(){var i=this._map,o=i.getSize().y/2,u=i.distance(i.containerPointToLatLng([0,o]),i.containerPointToLatLng([this.options.maxWidth,o]));this._updateScales(u)},_updateScales:function(i){this.options.metric&&i&&this._updateMetric(i),this.options.imperial&&i&&this._updateImperial(i)},_updateMetric:function(i){var o=this._getRoundNum(i),u=o<1e3?o+" m":o/1e3+" km";this._updateScale(this._mScale,u,o/i)},_updateImperial:function(i){var o=i*3.2808399,u,m,x;o>5280?(u=o/5280,m=this._getRoundNum(u),this._updateScale(this._iScale,m+" mi",m/u)):(x=this._getRoundNum(o),this._updateScale(this._iScale,x+" ft",x/o))},_updateScale:function(i,o,u){i.style.width=Math.round(this.options.maxWidth*u)+"px",i.innerHTML=o},_getRoundNum:function(i){var o=Math.pow(10,(Math.floor(i)+"").length-1),u=i/o;return u=u>=10?10:u>=5?5:u>=3?3:u>=2?2:1,o*u}}),T_=function(i){return new Fh(i)},w_='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',Fl=Wn.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(Xt.inlineSvg?w_+" ":"")+"Leaflet</a>"},initialize:function(i){E(this,i),this._attributions={}},onAdd:function(i){i.attributionControl=this,this._container=Gt("div","leaflet-control-attribution"),Vs(this._container);for(var o in i._layers)i._layers[o].getAttribution&&this.addAttribution(i._layers[o].getAttribution());return this._update(),i.on("layeradd",this._addAttribution,this),this._container},onRemove:function(i){i.off("layeradd",this._addAttribution,this)},_addAttribution:function(i){i.layer.getAttribution&&(this.addAttribution(i.layer.getAttribution()),i.layer.once("remove",function(){this.removeAttribution(i.layer.getAttribution())},this))},setPrefix:function(i){return this.options.prefix=i,this._update(),this},addAttribution:function(i){return i?(this._attributions[i]||(this._attributions[i]=0),this._attributions[i]++,this._update(),this):this},removeAttribution:function(i){return i?(this._attributions[i]&&(this._attributions[i]--,this._update()),this):this},_update:function(){if(this._map){var i=[];for(var o in this._attributions)this._attributions[o]&&i.push(o);var u=[];this.options.prefix&&u.push(this.options.prefix),i.length&&u.push(i.join(", ")),this._container.innerHTML=u.join(' <span aria-hidden="true">|</span> ')}}});_e.mergeOptions({attributionControl:!0}),_e.addInitHook(function(){this.options.attributionControl&&new Fl().addTo(this)});var A_=function(i){return new Fl(i)};Wn.Layers=Nh,Wn.Zoom=Nl,Wn.Scale=Fh,Wn.Attribution=Fl,Gs.layers=E_,Gs.zoom=b_,Gs.scale=T_,Gs.attribution=A_;var ri=rt.extend({initialize:function(i){this._map=i},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});ri.addTo=function(i,o){return i.addHandler(o,this),this};var P_={Events:J},Bh=Xt.touch?"touchstart mousedown":"mousedown",Xi=pt.extend({options:{clickTolerance:3},initialize:function(i,o,u,m){E(this,m),this._element=i,this._dragStartTarget=o||i,this._preventOutline=u},enable:function(){this._enabled||(ae(this._dragStartTarget,Bh,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Xi._dragging===this&&this.finishDrag(!0),Re(this._dragStartTarget,Bh,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(i){if(this._enabled&&(this._moved=!1,!Ne(this._element,"leaflet-zoom-anim"))){if(i.touches&&i.touches.length!==1){Xi._dragging===this&&this.finishDrag();return}if(!(Xi._dragging||i.shiftKey||i.which!==1&&i.button!==1&&!i.touches)&&(Xi._dragging=this,this._preventOutline&&Cl(this._element),wl(),mi(),!this._moving)){this.fire("down");var o=i.touches?i.touches[0]:i,u=Rh(this._element);this._startPoint=new G(o.clientX,o.clientY),this._startPos=Oe(this._element),this._parentScale=Rl(u);var m=i.type==="mousedown";ae(document,m?"mousemove":"touchmove",this._onMove,this),ae(document,m?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(i){if(this._enabled){if(i.touches&&i.touches.length>1){this._moved=!0;return}var o=i.touches&&i.touches.length===1?i.touches[0]:i,u=new G(o.clientX,o.clientY)._subtract(this._startPoint);!u.x&&!u.y||Math.abs(u.x)+Math.abs(u.y)<this.options.clickTolerance||(u.x/=this._parentScale.x,u.y/=this._parentScale.y,tn(i),this._moved||(this.fire("dragstart"),this._moved=!0,Bt(document.body,"leaflet-dragging"),this._lastTarget=i.target||i.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Bt(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(u),this._moving=!0,this._lastEvent=i,this._updatePosition())}},_updatePosition:function(){var i={originalEvent:this._lastEvent};this.fire("predrag",i),pe(this._element,this._newPos),this.fire("drag",i)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(i){ge(document.body,"leaflet-dragging"),this._lastTarget&&(ge(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),Re(document,"mousemove touchmove",this._onMove,this),Re(document,"mouseup touchend touchcancel",this._onUp,this),Al(),bn();var o=this._moved&&this._moving;this._moving=!1,Xi._dragging=!1,o&&this.fire("dragend",{noInertia:i,distance:this._newPos.distanceTo(this._startPos)})}});function zh(i,o,u){var m,x=[1,4,2,8],T,z,j,st,bt,zt,ee,de;for(T=0,zt=i.length;T<zt;T++)i[T]._code=_r(i[T],o);for(j=0;j<4;j++){for(ee=x[j],m=[],T=0,zt=i.length,z=zt-1;T<zt;z=T++)st=i[T],bt=i[z],st._code&ee?bt._code&ee||(de=Wo(bt,st,ee,o,u),de._code=_r(de,o),m.push(de)):(bt._code&ee&&(de=Wo(bt,st,ee,o,u),de._code=_r(de,o),m.push(de)),m.push(st));i=m}return i}function kh(i,o){var u,m,x,T,z,j,st,bt,zt;if(!i||i.length===0)throw new Error("latlngs not passed");On(i)||(console.warn("latlngs are not flat! Only the first ring will be used"),i=i[0]);var ee=xt([0,0]),de=lt(i),fn=de.getNorthWest().distanceTo(de.getSouthWest())*de.getNorthEast().distanceTo(de.getNorthWest());fn<1700&&(ee=Bl(i));var $e=i.length,Un=[];for(u=0;u<$e;u++){var Mn=xt(i[u]);Un.push(o.project(xt([Mn.lat-ee.lat,Mn.lng-ee.lng])))}for(j=st=bt=0,u=0,m=$e-1;u<$e;m=u++)x=Un[u],T=Un[m],z=x.y*T.x-T.y*x.x,st+=(x.x+T.x)*z,bt+=(x.y+T.y)*z,j+=z*3;j===0?zt=Un[0]:zt=[st/j,bt/j];var Zr=o.unproject(mt(zt));return xt([Zr.lat+ee.lat,Zr.lng+ee.lng])}function Bl(i){for(var o=0,u=0,m=0,x=0;x<i.length;x++){var T=xt(i[x]);o+=T.lat,u+=T.lng,m++}return xt([o/m,u/m])}var C_={__proto__:null,clipPolygon:zh,polygonCenter:kh,centroid:Bl};function Hh(i,o){if(!o||!i.length)return i.slice();var u=o*o;return i=I_(i,u),i=L_(i,u),i}function Vh(i,o,u){return Math.sqrt(Ws(i,o,u,!0))}function R_(i,o,u){return Ws(i,o,u)}function L_(i,o){var u=i.length,m=typeof Uint8Array<"u"?Uint8Array:Array,x=new m(u);x[0]=x[u-1]=1,zl(i,x,o,0,u-1);var T,z=[];for(T=0;T<u;T++)x[T]&&z.push(i[T]);return z}function zl(i,o,u,m,x){var T=0,z,j,st;for(j=m+1;j<=x-1;j++)st=Ws(i[j],i[m],i[x],!0),st>T&&(z=j,T=st);T>u&&(o[z]=1,zl(i,o,u,m,z),zl(i,o,u,z,x))}function I_(i,o){for(var u=[i[0]],m=1,x=0,T=i.length;m<T;m++)D_(i[m],i[x])>o&&(u.push(i[m]),x=m);return x<T-1&&u.push(i[T-1]),u}var Gh;function Wh(i,o,u,m,x){var T=m?Gh:_r(i,u),z=_r(o,u),j,st,bt;for(Gh=z;;){if(!(T|z))return[i,o];if(T&z)return!1;j=T||z,st=Wo(i,o,j,u,x),bt=_r(st,u),j===T?(i=st,T=bt):(o=st,z=bt)}}function Wo(i,o,u,m,x){var T=o.x-i.x,z=o.y-i.y,j=m.min,st=m.max,bt,zt;return u&8?(bt=i.x+T*(st.y-i.y)/z,zt=st.y):u&4?(bt=i.x+T*(j.y-i.y)/z,zt=j.y):u&2?(bt=st.x,zt=i.y+z*(st.x-i.x)/T):u&1&&(bt=j.x,zt=i.y+z*(j.x-i.x)/T),new G(bt,zt,x)}function _r(i,o){var u=0;return i.x<o.min.x?u|=1:i.x>o.max.x&&(u|=2),i.y<o.min.y?u|=4:i.y>o.max.y&&(u|=8),u}function D_(i,o){var u=o.x-i.x,m=o.y-i.y;return u*u+m*m}function Ws(i,o,u,m){var x=o.x,T=o.y,z=u.x-x,j=u.y-T,st=z*z+j*j,bt;return st>0&&(bt=((i.x-x)*z+(i.y-T)*j)/st,bt>1?(x=u.x,T=u.y):bt>0&&(x+=z*bt,T+=j*bt)),z=i.x-x,j=i.y-T,m?z*z+j*j:new G(x,T)}function On(i){return!I(i[0])||typeof i[0][0]!="object"&&typeof i[0][0]<"u"}function Xh(i){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),On(i)}function Zh(i,o){var u,m,x,T,z,j,st,bt;if(!i||i.length===0)throw new Error("latlngs not passed");On(i)||(console.warn("latlngs are not flat! Only the first ring will be used"),i=i[0]);var zt=xt([0,0]),ee=lt(i),de=ee.getNorthWest().distanceTo(ee.getSouthWest())*ee.getNorthEast().distanceTo(ee.getNorthWest());de<1700&&(zt=Bl(i));var fn=i.length,$e=[];for(u=0;u<fn;u++){var Un=xt(i[u]);$e.push(o.project(xt([Un.lat-zt.lat,Un.lng-zt.lng])))}for(u=0,m=0;u<fn-1;u++)m+=$e[u].distanceTo($e[u+1])/2;if(m===0)bt=$e[0];else for(u=0,T=0;u<fn-1;u++)if(z=$e[u],j=$e[u+1],x=z.distanceTo(j),T+=x,T>m){st=(T-m)/x,bt=[j.x-st*(j.x-z.x),j.y-st*(j.y-z.y)];break}var Mn=o.unproject(mt(bt));return xt([Mn.lat+zt.lat,Mn.lng+zt.lng])}var O_={__proto__:null,simplify:Hh,pointToSegmentDistance:Vh,closestPointOnSegment:R_,clipSegment:Wh,_getEdgeIntersection:Wo,_getBitCode:_r,_sqClosestPointOnSegment:Ws,isFlat:On,_flat:Xh,polylineCenter:Zh},kl={project:function(i){return new G(i.lng,i.lat)},unproject:function(i){return new _t(i.y,i.x)},bounds:new At([-180,-90],[180,90])},Hl={R:6378137,R_MINOR:6356752314245179e-9,bounds:new At([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(i){var o=Math.PI/180,u=this.R,m=i.lat*o,x=this.R_MINOR/u,T=Math.sqrt(1-x*x),z=T*Math.sin(m),j=Math.tan(Math.PI/4-m/2)/Math.pow((1-z)/(1+z),T/2);return m=-u*Math.log(Math.max(j,1e-10)),new G(i.lng*o*u,m)},unproject:function(i){for(var o=180/Math.PI,u=this.R,m=this.R_MINOR/u,x=Math.sqrt(1-m*m),T=Math.exp(-i.y/u),z=Math.PI/2-2*Math.atan(T),j=0,st=.1,bt;j<15&&Math.abs(st)>1e-7;j++)bt=x*Math.sin(z),bt=Math.pow((1-bt)/(1+bt),x/2),st=Math.PI/2-2*Math.atan(T*bt)-z,z+=st;return new _t(z*o,i.x*o/u)}},U_={__proto__:null,LonLat:kl,Mercator:Hl,SphericalMercator:St},N_=s({},dt,{code:"EPSG:3395",projection:Hl,transformation:(function(){var i=.5/(Math.PI*Hl.R);return O(i,.5,-i,.5)})()}),qh=s({},dt,{code:"EPSG:4326",projection:kl,transformation:O(1/180,1,-1/180,.5)}),F_=s({},W,{projection:kl,transformation:O(1,0,-1,0),scale:function(i){return Math.pow(2,i)},zoom:function(i){return Math.log(i)/Math.LN2},distance:function(i,o){var u=o.lng-i.lng,m=o.lat-i.lat;return Math.sqrt(u*u+m*m)},infinite:!0});W.Earth=dt,W.EPSG3395=N_,W.EPSG3857=U,W.EPSG900913=b,W.EPSG4326=qh,W.Simple=F_;var Xn=pt.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(i){return i.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(i){return i&&i.removeLayer(this),this},getPane:function(i){return this._map.getPane(i?this.options[i]||i:this.options.pane)},addInteractiveTarget:function(i){return this._map._targets[h(i)]=this,this},removeInteractiveTarget:function(i){return delete this._map._targets[h(i)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(i){var o=i.target;if(o.hasLayer(this)){if(this._map=o,this._zoomAnimated=o._zoomAnimated,this.getEvents){var u=this.getEvents();o.on(u,this),this.once("remove",function(){o.off(u,this)},this)}this.onAdd(o),this.fire("add"),o.fire("layeradd",{layer:this})}}});_e.include({addLayer:function(i){if(!i._layerAdd)throw new Error("The provided object is not a Layer.");var o=h(i);return this._layers[o]?this:(this._layers[o]=i,i._mapToAdd=this,i.beforeAdd&&i.beforeAdd(this),this.whenReady(i._layerAdd,i),this)},removeLayer:function(i){var o=h(i);return this._layers[o]?(this._loaded&&i.onRemove(this),delete this._layers[o],this._loaded&&(this.fire("layerremove",{layer:i}),i.fire("remove")),i._map=i._mapToAdd=null,this):this},hasLayer:function(i){return h(i)in this._layers},eachLayer:function(i,o){for(var u in this._layers)i.call(o,this._layers[u]);return this},_addLayers:function(i){i=i?I(i)?i:[i]:[];for(var o=0,u=i.length;o<u;o++)this.addLayer(i[o])},_addZoomLimit:function(i){(!isNaN(i.options.maxZoom)||!isNaN(i.options.minZoom))&&(this._zoomBoundLayers[h(i)]=i,this._updateZoomLevels())},_removeZoomLimit:function(i){var o=h(i);this._zoomBoundLayers[o]&&(delete this._zoomBoundLayers[o],this._updateZoomLevels())},_updateZoomLevels:function(){var i=1/0,o=-1/0,u=this._getZoomSpan();for(var m in this._zoomBoundLayers){var x=this._zoomBoundLayers[m].options;i=x.minZoom===void 0?i:Math.min(i,x.minZoom),o=x.maxZoom===void 0?o:Math.max(o,x.maxZoom)}this._layersMaxZoom=o===-1/0?void 0:o,this._layersMinZoom=i===1/0?void 0:i,u!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Hr=Xn.extend({initialize:function(i,o){E(this,o),this._layers={};var u,m;if(i)for(u=0,m=i.length;u<m;u++)this.addLayer(i[u])},addLayer:function(i){var o=this.getLayerId(i);return this._layers[o]=i,this._map&&this._map.addLayer(i),this},removeLayer:function(i){var o=i in this._layers?i:this.getLayerId(i);return this._map&&this._layers[o]&&this._map.removeLayer(this._layers[o]),delete this._layers[o],this},hasLayer:function(i){var o=typeof i=="number"?i:this.getLayerId(i);return o in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(i){var o=Array.prototype.slice.call(arguments,1),u,m;for(u in this._layers)m=this._layers[u],m[i]&&m[i].apply(m,o);return this},onAdd:function(i){this.eachLayer(i.addLayer,i)},onRemove:function(i){this.eachLayer(i.removeLayer,i)},eachLayer:function(i,o){for(var u in this._layers)i.call(o,this._layers[u]);return this},getLayer:function(i){return this._layers[i]},getLayers:function(){var i=[];return this.eachLayer(i.push,i),i},setZIndex:function(i){return this.invoke("setZIndex",i)},getLayerId:function(i){return h(i)}}),B_=function(i,o){return new Hr(i,o)},_i=Hr.extend({addLayer:function(i){return this.hasLayer(i)?this:(i.addEventParent(this),Hr.prototype.addLayer.call(this,i),this.fire("layeradd",{layer:i}))},removeLayer:function(i){return this.hasLayer(i)?(i in this._layers&&(i=this._layers[i]),i.removeEventParent(this),Hr.prototype.removeLayer.call(this,i),this.fire("layerremove",{layer:i})):this},setStyle:function(i){return this.invoke("setStyle",i)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var i=new Jt;for(var o in this._layers){var u=this._layers[o];i.extend(u.getBounds?u.getBounds():u.getLatLng())}return i}}),z_=function(i,o){return new _i(i,o)},Vr=rt.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(i){E(this,i)},createIcon:function(i){return this._createIcon("icon",i)},createShadow:function(i){return this._createIcon("shadow",i)},_createIcon:function(i,o){var u=this._getIconUrl(i);if(!u){if(i==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var m=this._createImg(u,o&&o.tagName==="IMG"?o:null);return this._setIconStyles(m,i),(this.options.crossOrigin||this.options.crossOrigin==="")&&(m.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),m},_setIconStyles:function(i,o){var u=this.options,m=u[o+"Size"];typeof m=="number"&&(m=[m,m]);var x=mt(m),T=mt(o==="shadow"&&u.shadowAnchor||u.iconAnchor||x&&x.divideBy(2,!0));i.className="leaflet-marker-"+o+" "+(u.className||""),T&&(i.style.marginLeft=-T.x+"px",i.style.marginTop=-T.y+"px"),x&&(i.style.width=x.x+"px",i.style.height=x.y+"px")},_createImg:function(i,o){return o=o||document.createElement("img"),o.src=i,o},_getIconUrl:function(i){return Xt.retina&&this.options[i+"RetinaUrl"]||this.options[i+"Url"]}});function k_(i){return new Vr(i)}var Xs=Vr.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(i){return typeof Xs.imagePath!="string"&&(Xs.imagePath=this._detectIconPath()),(this.options.imagePath||Xs.imagePath)+Vr.prototype._getIconUrl.call(this,i)},_stripUrl:function(i){var o=function(u,m,x){var T=m.exec(u);return T&&T[x]};return i=o(i,/^url\((['"])?(.+)\1\)$/,2),i&&o(i,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var i=Gt("div","leaflet-default-icon-path",document.body),o=he(i,"background-image")||he(i,"backgroundImage");if(document.body.removeChild(i),o=this._stripUrl(o),o)return o;var u=document.querySelector('link[href$="leaflet.css"]');return u?u.href.substring(0,u.href.length-11-1):""}}),Yh=ri.extend({initialize:function(i){this._marker=i},addHooks:function(){var i=this._marker._icon;this._draggable||(this._draggable=new Xi(i,i,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Bt(i,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&ge(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(i){var o=this._marker,u=o._map,m=this._marker.options.autoPanSpeed,x=this._marker.options.autoPanPadding,T=Oe(o._icon),z=u.getPixelBounds(),j=u.getPixelOrigin(),st=kt(z.min._subtract(j).add(x),z.max._subtract(j).subtract(x));if(!st.contains(T)){var bt=mt((Math.max(st.max.x,T.x)-st.max.x)/(z.max.x-st.max.x)-(Math.min(st.min.x,T.x)-st.min.x)/(z.min.x-st.min.x),(Math.max(st.max.y,T.y)-st.max.y)/(z.max.y-st.max.y)-(Math.min(st.min.y,T.y)-st.min.y)/(z.min.y-st.min.y)).multiplyBy(m);u.panBy(bt,{animate:!1}),this._draggable._newPos._add(bt),this._draggable._startPos._add(bt),pe(o._icon,this._draggable._newPos),this._onDrag(i),this._panRequest=F(this._adjustPan.bind(this,i))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(i){this._marker.options.autoPan&&($(this._panRequest),this._panRequest=F(this._adjustPan.bind(this,i)))},_onDrag:function(i){var o=this._marker,u=o._shadow,m=Oe(o._icon),x=o._map.layerPointToLatLng(m);u&&pe(u,m),o._latlng=x,i.latlng=x,i.oldLatLng=this._oldLatLng,o.fire("move",i).fire("drag",i)},_onDragEnd:function(i){$(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",i)}}),Xo=Xn.extend({options:{icon:new Xs,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(i,o){E(this,o),this._latlng=xt(i)},onAdd:function(i){this._zoomAnimated=this._zoomAnimated&&i.options.markerZoomAnimation,this._zoomAnimated&&i.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(i){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&i.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(i){var o=this._latlng;return this._latlng=xt(i),this.update(),this.fire("move",{oldLatLng:o,latlng:this._latlng})},setZIndexOffset:function(i){return this.options.zIndexOffset=i,this.update()},getIcon:function(){return this.options.icon},setIcon:function(i){return this.options.icon=i,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var i=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(i)}return this},_initIcon:function(){var i=this.options,o="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),u=i.icon.createIcon(this._icon),m=!1;u!==this._icon&&(this._icon&&this._removeIcon(),m=!0,i.title&&(u.title=i.title),u.tagName==="IMG"&&(u.alt=i.alt||"")),Bt(u,o),i.keyboard&&(u.tabIndex="0",u.setAttribute("role","button")),this._icon=u,i.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&ae(u,"focus",this._panOnFocus,this);var x=i.icon.createShadow(this._shadow),T=!1;x!==this._shadow&&(this._removeShadow(),T=!0),x&&(Bt(x,o),x.alt=""),this._shadow=x,i.opacity<1&&this._updateOpacity(),m&&this.getPane().appendChild(this._icon),this._initInteraction(),x&&T&&this.getPane(i.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Re(this._icon,"focus",this._panOnFocus,this),re(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&re(this._shadow),this._shadow=null},_setPos:function(i){this._icon&&pe(this._icon,i),this._shadow&&pe(this._shadow,i),this._zIndex=i.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(i){this._icon&&(this._icon.style.zIndex=this._zIndex+i)},_animateZoom:function(i){var o=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center).round();this._setPos(o)},_initInteraction:function(){if(this.options.interactive&&(Bt(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Yh)){var i=this.options.draggable;this.dragging&&(i=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Yh(this),i&&this.dragging.enable()}},setOpacity:function(i){return this.options.opacity=i,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var i=this.options.opacity;this._icon&&Ke(this._icon,i),this._shadow&&Ke(this._shadow,i)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var i=this._map;if(i){var o=this.options.icon.options,u=o.iconSize?mt(o.iconSize):mt(0,0),m=o.iconAnchor?mt(o.iconAnchor):mt(0,0);i.panInside(this._latlng,{paddingTopLeft:m,paddingBottomRight:u.subtract(m)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function H_(i,o){return new Xo(i,o)}var Zi=Xn.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(i){this._renderer=i.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(i){return E(this,i),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&i&&Object.prototype.hasOwnProperty.call(i,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Zo=Zi.extend({options:{fill:!0,radius:10},initialize:function(i,o){E(this,o),this._latlng=xt(i),this._radius=this.options.radius},setLatLng:function(i){var o=this._latlng;return this._latlng=xt(i),this.redraw(),this.fire("move",{oldLatLng:o,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(i){return this.options.radius=this._radius=i,this.redraw()},getRadius:function(){return this._radius},setStyle:function(i){var o=i&&i.radius||this._radius;return Zi.prototype.setStyle.call(this,i),this.setRadius(o),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var i=this._radius,o=this._radiusY||i,u=this._clickTolerance(),m=[i+u,o+u];this._pxBounds=new At(this._point.subtract(m),this._point.add(m))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(i){return i.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function V_(i,o){return new Zo(i,o)}var Vl=Zo.extend({initialize:function(i,o,u){if(typeof o=="number"&&(o=s({},u,{radius:o})),E(this,o),this._latlng=xt(i),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(i){return this._mRadius=i,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var i=[this._radius,this._radiusY||this._radius];return new Jt(this._map.layerPointToLatLng(this._point.subtract(i)),this._map.layerPointToLatLng(this._point.add(i)))},setStyle:Zi.prototype.setStyle,_project:function(){var i=this._latlng.lng,o=this._latlng.lat,u=this._map,m=u.options.crs;if(m.distance===dt.distance){var x=Math.PI/180,T=this._mRadius/dt.R/x,z=u.project([o+T,i]),j=u.project([o-T,i]),st=z.add(j).divideBy(2),bt=u.unproject(st).lat,zt=Math.acos((Math.cos(T*x)-Math.sin(o*x)*Math.sin(bt*x))/(Math.cos(o*x)*Math.cos(bt*x)))/x;(isNaN(zt)||zt===0)&&(zt=T/Math.cos(Math.PI/180*o)),this._point=st.subtract(u.getPixelOrigin()),this._radius=isNaN(zt)?0:st.x-u.project([bt,i-zt]).x,this._radiusY=st.y-z.y}else{var ee=m.unproject(m.project(this._latlng).subtract([this._mRadius,0]));this._point=u.latLngToLayerPoint(this._latlng),this._radius=this._point.x-u.latLngToLayerPoint(ee).x}this._updateBounds()}});function G_(i,o,u){return new Vl(i,o,u)}var gi=Zi.extend({options:{smoothFactor:1,noClip:!1},initialize:function(i,o){E(this,o),this._setLatLngs(i)},getLatLngs:function(){return this._latlngs},setLatLngs:function(i){return this._setLatLngs(i),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(i){for(var o=1/0,u=null,m=Ws,x,T,z=0,j=this._parts.length;z<j;z++)for(var st=this._parts[z],bt=1,zt=st.length;bt<zt;bt++){x=st[bt-1],T=st[bt];var ee=m(i,x,T,!0);ee<o&&(o=ee,u=m(i,x,T))}return u&&(u.distance=Math.sqrt(o)),u},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Zh(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(i,o){return o=o||this._defaultShape(),i=xt(i),o.push(i),this._bounds.extend(i),this.redraw()},_setLatLngs:function(i){this._bounds=new Jt,this._latlngs=this._convertLatLngs(i)},_defaultShape:function(){return On(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(i){for(var o=[],u=On(i),m=0,x=i.length;m<x;m++)u?(o[m]=xt(i[m]),this._bounds.extend(o[m])):o[m]=this._convertLatLngs(i[m]);return o},_project:function(){var i=new At;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,i),this._bounds.isValid()&&i.isValid()&&(this._rawPxBounds=i,this._updateBounds())},_updateBounds:function(){var i=this._clickTolerance(),o=new G(i,i);this._rawPxBounds&&(this._pxBounds=new At([this._rawPxBounds.min.subtract(o),this._rawPxBounds.max.add(o)]))},_projectLatlngs:function(i,o,u){var m=i[0]instanceof _t,x=i.length,T,z;if(m){for(z=[],T=0;T<x;T++)z[T]=this._map.latLngToLayerPoint(i[T]),u.extend(z[T]);o.push(z)}else for(T=0;T<x;T++)this._projectLatlngs(i[T],o,u)},_clipPoints:function(){var i=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(i))){if(this.options.noClip){this._parts=this._rings;return}var o=this._parts,u,m,x,T,z,j,st;for(u=0,x=0,T=this._rings.length;u<T;u++)for(st=this._rings[u],m=0,z=st.length;m<z-1;m++)j=Wh(st[m],st[m+1],i,m,!0),j&&(o[x]=o[x]||[],o[x].push(j[0]),(j[1]!==st[m+1]||m===z-2)&&(o[x].push(j[1]),x++))}},_simplifyPoints:function(){for(var i=this._parts,o=this.options.smoothFactor,u=0,m=i.length;u<m;u++)i[u]=Hh(i[u],o)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(i,o){var u,m,x,T,z,j,st=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(i))return!1;for(u=0,T=this._parts.length;u<T;u++)for(j=this._parts[u],m=0,z=j.length,x=z-1;m<z;x=m++)if(!(!o&&m===0)&&Vh(i,j[x],j[m])<=st)return!0;return!1}});function W_(i,o){return new gi(i,o)}gi._flat=Xh;var Gr=gi.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return kh(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(i){var o=gi.prototype._convertLatLngs.call(this,i),u=o.length;return u>=2&&o[0]instanceof _t&&o[0].equals(o[u-1])&&o.pop(),o},_setLatLngs:function(i){gi.prototype._setLatLngs.call(this,i),On(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return On(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var i=this._renderer._bounds,o=this.options.weight,u=new G(o,o);if(i=new At(i.min.subtract(u),i.max.add(u)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(i))){if(this.options.noClip){this._parts=this._rings;return}for(var m=0,x=this._rings.length,T;m<x;m++)T=zh(this._rings[m],i,!0),T.length&&this._parts.push(T)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(i){var o=!1,u,m,x,T,z,j,st,bt;if(!this._pxBounds||!this._pxBounds.contains(i))return!1;for(T=0,st=this._parts.length;T<st;T++)for(u=this._parts[T],z=0,bt=u.length,j=bt-1;z<bt;j=z++)m=u[z],x=u[j],m.y>i.y!=x.y>i.y&&i.x<(x.x-m.x)*(i.y-m.y)/(x.y-m.y)+m.x&&(o=!o);return o||gi.prototype._containsPoint.call(this,i,!0)}});function X_(i,o){return new Gr(i,o)}var vi=_i.extend({initialize:function(i,o){E(this,o),this._layers={},i&&this.addData(i)},addData:function(i){var o=I(i)?i:i.features,u,m,x;if(o){for(u=0,m=o.length;u<m;u++)x=o[u],(x.geometries||x.geometry||x.features||x.coordinates)&&this.addData(x);return this}var T=this.options;if(T.filter&&!T.filter(i))return this;var z=qo(i,T);return z?(z.feature=Ko(i),z.defaultOptions=z.options,this.resetStyle(z),T.onEachFeature&&T.onEachFeature(i,z),this.addLayer(z)):this},resetStyle:function(i){return i===void 0?this.eachLayer(this.resetStyle,this):(i.options=s({},i.defaultOptions),this._setLayerStyle(i,this.options.style),this)},setStyle:function(i){return this.eachLayer(function(o){this._setLayerStyle(o,i)},this)},_setLayerStyle:function(i,o){i.setStyle&&(typeof o=="function"&&(o=o(i.feature)),i.setStyle(o))}});function qo(i,o){var u=i.type==="Feature"?i.geometry:i,m=u?u.coordinates:null,x=[],T=o&&o.pointToLayer,z=o&&o.coordsToLatLng||Gl,j,st,bt,zt;if(!m&&!u)return null;switch(u.type){case"Point":return j=z(m),jh(T,i,j,o);case"MultiPoint":for(bt=0,zt=m.length;bt<zt;bt++)j=z(m[bt]),x.push(jh(T,i,j,o));return new _i(x);case"LineString":case"MultiLineString":return st=Yo(m,u.type==="LineString"?0:1,z),new gi(st,o);case"Polygon":case"MultiPolygon":return st=Yo(m,u.type==="Polygon"?1:2,z),new Gr(st,o);case"GeometryCollection":for(bt=0,zt=u.geometries.length;bt<zt;bt++){var ee=qo({geometry:u.geometries[bt],type:"Feature",properties:i.properties},o);ee&&x.push(ee)}return new _i(x);case"FeatureCollection":for(bt=0,zt=u.features.length;bt<zt;bt++){var de=qo(u.features[bt],o);de&&x.push(de)}return new _i(x);default:throw new Error("Invalid GeoJSON object.")}}function jh(i,o,u,m){return i?i(o,u):new Xo(u,m&&m.markersInheritOptions&&m)}function Gl(i){return new _t(i[1],i[0],i[2])}function Yo(i,o,u){for(var m=[],x=0,T=i.length,z;x<T;x++)z=o?Yo(i[x],o-1,u):(u||Gl)(i[x]),m.push(z);return m}function Wl(i,o){return i=xt(i),i.alt!==void 0?[_(i.lng,o),_(i.lat,o),_(i.alt,o)]:[_(i.lng,o),_(i.lat,o)]}function jo(i,o,u,m){for(var x=[],T=0,z=i.length;T<z;T++)x.push(o?jo(i[T],On(i[T])?0:o-1,u,m):Wl(i[T],m));return!o&&u&&x.length>0&&x.push(x[0].slice()),x}function Wr(i,o){return i.feature?s({},i.feature,{geometry:o}):Ko(o)}function Ko(i){return i.type==="Feature"||i.type==="FeatureCollection"?i:{type:"Feature",properties:{},geometry:i}}var Xl={toGeoJSON:function(i){return Wr(this,{type:"Point",coordinates:Wl(this.getLatLng(),i)})}};Xo.include(Xl),Vl.include(Xl),Zo.include(Xl),gi.include({toGeoJSON:function(i){var o=!On(this._latlngs),u=jo(this._latlngs,o?1:0,!1,i);return Wr(this,{type:(o?"Multi":"")+"LineString",coordinates:u})}}),Gr.include({toGeoJSON:function(i){var o=!On(this._latlngs),u=o&&!On(this._latlngs[0]),m=jo(this._latlngs,u?2:o?1:0,!0,i);return o||(m=[m]),Wr(this,{type:(u?"Multi":"")+"Polygon",coordinates:m})}}),Hr.include({toMultiPoint:function(i){var o=[];return this.eachLayer(function(u){o.push(u.toGeoJSON(i).geometry.coordinates)}),Wr(this,{type:"MultiPoint",coordinates:o})},toGeoJSON:function(i){var o=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(o==="MultiPoint")return this.toMultiPoint(i);var u=o==="GeometryCollection",m=[];return this.eachLayer(function(x){if(x.toGeoJSON){var T=x.toGeoJSON(i);if(u)m.push(T.geometry);else{var z=Ko(T);z.type==="FeatureCollection"?m.push.apply(m,z.features):m.push(z)}}}),u?Wr(this,{geometries:m,type:"GeometryCollection"}):{type:"FeatureCollection",features:m}}});function Kh(i,o){return new vi(i,o)}var Z_=Kh,$o=Xn.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(i,o,u){this._url=i,this._bounds=lt(o),E(this,u)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Bt(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){re(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(i){return this.options.opacity=i,this._image&&this._updateOpacity(),this},setStyle:function(i){return i.opacity&&this.setOpacity(i.opacity),this},bringToFront:function(){return this._map&&fe(this._image),this},bringToBack:function(){return this._map&&Zt(this._image),this},setUrl:function(i){return this._url=i,this._image&&(this._image.src=i),this},setBounds:function(i){return this._bounds=lt(i),this._map&&this._reset(),this},getEvents:function(){var i={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},setZIndex:function(i){return this.options.zIndex=i,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var i=this._url.tagName==="IMG",o=this._image=i?this._url:Gt("img");if(Bt(o,"leaflet-image-layer"),this._zoomAnimated&&Bt(o,"leaflet-zoom-animated"),this.options.className&&Bt(o,this.options.className),o.onselectstart=p,o.onmousemove=p,o.onload=l(this.fire,this,"load"),o.onerror=l(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(o.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),i){this._url=o.src;return}o.src=this._url,o.alt=this.options.alt},_animateZoom:function(i){var o=this._map.getZoomScale(i.zoom),u=this._map._latLngBoundsToNewLayerBounds(this._bounds,i.zoom,i.center).min;ze(this._image,u,o)},_reset:function(){var i=this._image,o=new At(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),u=o.getSize();pe(i,o.min),i.style.width=u.x+"px",i.style.height=u.y+"px"},_updateOpacity:function(){Ke(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var i=this.options.errorOverlayUrl;i&&this._url!==i&&(this._url=i,this._image.src=i)},getCenter:function(){return this._bounds.getCenter()}}),q_=function(i,o,u){return new $o(i,o,u)},$h=$o.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var i=this._url.tagName==="VIDEO",o=this._image=i?this._url:Gt("video");if(Bt(o,"leaflet-image-layer"),this._zoomAnimated&&Bt(o,"leaflet-zoom-animated"),this.options.className&&Bt(o,this.options.className),o.onselectstart=p,o.onmousemove=p,o.onloadeddata=l(this.fire,this,"load"),i){for(var u=o.getElementsByTagName("source"),m=[],x=0;x<u.length;x++)m.push(u[x].src);this._url=u.length>0?m:[o.src];return}I(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(o.style,"objectFit")&&(o.style.objectFit="fill"),o.autoplay=!!this.options.autoplay,o.loop=!!this.options.loop,o.muted=!!this.options.muted,o.playsInline=!!this.options.playsInline;for(var T=0;T<this._url.length;T++){var z=Gt("source");z.src=this._url[T],o.appendChild(z)}}});function Y_(i,o,u){return new $h(i,o,u)}var Jh=$o.extend({_initImage:function(){var i=this._image=this._url;Bt(i,"leaflet-image-layer"),this._zoomAnimated&&Bt(i,"leaflet-zoom-animated"),this.options.className&&Bt(i,this.options.className),i.onselectstart=p,i.onmousemove=p}});function j_(i,o,u){return new Jh(i,o,u)}var si=Xn.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(i,o){i&&(i instanceof _t||I(i))?(this._latlng=xt(i),E(this,o)):(E(this,i),this._source=o),this.options.content&&(this._content=this.options.content)},openOn:function(i){return i=arguments.length?i:this._source._map,i.hasLayer(this)||i.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(i){return this._map?this.close():(arguments.length?this._source=i:i=this._source,this._prepareOpen(),this.openOn(i._map)),this},onAdd:function(i){this._zoomAnimated=i._zoomAnimated,this._container||this._initLayout(),i._fadeAnimated&&Ke(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),i._fadeAnimated&&Ke(this._container,1),this.bringToFront(),this.options.interactive&&(Bt(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(i){i._fadeAnimated?(Ke(this._container,0),this._removeTimeout=setTimeout(l(re,void 0,this._container),200)):re(this._container),this.options.interactive&&(ge(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(i){return this._latlng=xt(i),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(i){return this._content=i,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var i={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&fe(this._container),this},bringToBack:function(){return this._map&&Zt(this._container),this},_prepareOpen:function(i){var o=this._source;if(!o._map)return!1;if(o instanceof _i){o=null;var u=this._source._layers;for(var m in u)if(u[m]._map){o=u[m];break}if(!o)return!1;this._source=o}if(!i)if(o.getCenter)i=o.getCenter();else if(o.getLatLng)i=o.getLatLng();else if(o.getBounds)i=o.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(i),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var i=this._contentNode,o=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof o=="string")i.innerHTML=o;else{for(;i.hasChildNodes();)i.removeChild(i.firstChild);i.appendChild(o)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var i=this._map.latLngToLayerPoint(this._latlng),o=mt(this.options.offset),u=this._getAnchor();this._zoomAnimated?pe(this._container,i.add(u)):o=o.add(i).add(u);var m=this._containerBottom=-o.y,x=this._containerLeft=-Math.round(this._containerWidth/2)+o.x;this._container.style.bottom=m+"px",this._container.style.left=x+"px"}},_getAnchor:function(){return[0,0]}});_e.include({_initOverlay:function(i,o,u,m){var x=o;return x instanceof i||(x=new i(m).setContent(o)),u&&x.setLatLng(u),x}}),Xn.include({_initOverlay:function(i,o,u,m){var x=u;return x instanceof i?(E(x,m),x._source=this):(x=o&&!m?o:new i(m,this),x.setContent(u)),x}});var Jo=si.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(i){return i=arguments.length?i:this._source._map,!i.hasLayer(this)&&i._popup&&i._popup.options.autoClose&&i.removeLayer(i._popup),i._popup=this,si.prototype.openOn.call(this,i)},onAdd:function(i){si.prototype.onAdd.call(this,i),i.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Zi||this._source.on("preclick",pr))},onRemove:function(i){si.prototype.onRemove.call(this,i),i.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Zi||this._source.off("preclick",pr))},getEvents:function(){var i=si.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(i.preclick=this.close),this.options.keepInView&&(i.moveend=this._adjustPan),i},_initLayout:function(){var i="leaflet-popup",o=this._container=Gt("div",i+" "+(this.options.className||"")+" leaflet-zoom-animated"),u=this._wrapper=Gt("div",i+"-content-wrapper",o);if(this._contentNode=Gt("div",i+"-content",u),Vs(o),Ol(this._contentNode),ae(o,"contextmenu",pr),this._tipContainer=Gt("div",i+"-tip-container",o),this._tip=Gt("div",i+"-tip",this._tipContainer),this.options.closeButton){var m=this._closeButton=Gt("a",i+"-close-button",o);m.setAttribute("role","button"),m.setAttribute("aria-label","Close popup"),m.href="#close",m.innerHTML='<span aria-hidden="true">&#215;</span>',ae(m,"click",function(x){tn(x),this.close()},this)}},_updateLayout:function(){var i=this._contentNode,o=i.style;o.width="",o.whiteSpace="nowrap";var u=i.offsetWidth;u=Math.min(u,this.options.maxWidth),u=Math.max(u,this.options.minWidth),o.width=u+1+"px",o.whiteSpace="",o.height="";var m=i.offsetHeight,x=this.options.maxHeight,T="leaflet-popup-scrolled";x&&m>x?(o.height=x+"px",Bt(i,T)):ge(i,T),this._containerWidth=this._container.offsetWidth},_animateZoom:function(i){var o=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center),u=this._getAnchor();pe(this._container,o.add(u))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var i=this._map,o=parseInt(he(this._container,"marginBottom"),10)||0,u=this._container.offsetHeight+o,m=this._containerWidth,x=new G(this._containerLeft,-u-this._containerBottom);x._add(Oe(this._container));var T=i.layerPointToContainerPoint(x),z=mt(this.options.autoPanPadding),j=mt(this.options.autoPanPaddingTopLeft||z),st=mt(this.options.autoPanPaddingBottomRight||z),bt=i.getSize(),zt=0,ee=0;T.x+m+st.x>bt.x&&(zt=T.x+m-bt.x+st.x),T.x-zt-j.x<0&&(zt=T.x-j.x),T.y+u+st.y>bt.y&&(ee=T.y+u-bt.y+st.y),T.y-ee-j.y<0&&(ee=T.y-j.y),(zt||ee)&&(this.options.keepInView&&(this._autopanning=!0),i.fire("autopanstart").panBy([zt,ee]))}},_getAnchor:function(){return mt(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),K_=function(i,o){return new Jo(i,o)};_e.mergeOptions({closePopupOnClick:!0}),_e.include({openPopup:function(i,o,u){return this._initOverlay(Jo,i,o,u).openOn(this),this},closePopup:function(i){return i=arguments.length?i:this._popup,i&&i.close(),this}}),Xn.include({bindPopup:function(i,o){return this._popup=this._initOverlay(Jo,this._popup,i,o),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(i){return this._popup&&(this instanceof _i||(this._popup._source=this),this._popup._prepareOpen(i||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(i){return this._popup&&this._popup.setContent(i),this},getPopup:function(){return this._popup},_openPopup:function(i){if(!(!this._popup||!this._map)){mr(i);var o=i.layer||i.target;if(this._popup._source===o&&!(o instanceof Zi)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(i.latlng);return}this._popup._source=o,this.openPopup(i.latlng)}},_movePopup:function(i){this._popup.setLatLng(i.latlng)},_onKeyPress:function(i){i.originalEvent.keyCode===13&&this._openPopup(i)}});var Qo=si.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(i){si.prototype.onAdd.call(this,i),this.setOpacity(this.options.opacity),i.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(i){si.prototype.onRemove.call(this,i),i.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var i=si.prototype.getEvents.call(this);return this.options.permanent||(i.preclick=this.close),i},_initLayout:function(){var i="leaflet-tooltip",o=i+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=Gt("div",o),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+h(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(i){var o,u,m=this._map,x=this._container,T=m.latLngToContainerPoint(m.getCenter()),z=m.layerPointToContainerPoint(i),j=this.options.direction,st=x.offsetWidth,bt=x.offsetHeight,zt=mt(this.options.offset),ee=this._getAnchor();j==="top"?(o=st/2,u=bt):j==="bottom"?(o=st/2,u=0):j==="center"?(o=st/2,u=bt/2):j==="right"?(o=0,u=bt/2):j==="left"?(o=st,u=bt/2):z.x<T.x?(j="right",o=0,u=bt/2):(j="left",o=st+(zt.x+ee.x)*2,u=bt/2),i=i.subtract(mt(o,u,!0)).add(zt).add(ee),ge(x,"leaflet-tooltip-right"),ge(x,"leaflet-tooltip-left"),ge(x,"leaflet-tooltip-top"),ge(x,"leaflet-tooltip-bottom"),Bt(x,"leaflet-tooltip-"+j),pe(x,i)},_updatePosition:function(){var i=this._map.latLngToLayerPoint(this._latlng);this._setPosition(i)},setOpacity:function(i){this.options.opacity=i,this._container&&Ke(this._container,i)},_animateZoom:function(i){var o=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center);this._setPosition(o)},_getAnchor:function(){return mt(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),$_=function(i,o){return new Qo(i,o)};_e.include({openTooltip:function(i,o,u){return this._initOverlay(Qo,i,o,u).openOn(this),this},closeTooltip:function(i){return i.close(),this}}),Xn.include({bindTooltip:function(i,o){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Qo,this._tooltip,i,o),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(i){if(!(!i&&this._tooltipHandlersAdded)){var o=i?"off":"on",u={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?u.add=this._openTooltip:(u.mouseover=this._openTooltip,u.mouseout=this.closeTooltip,u.click=this._openTooltip,this._map?this._addFocusListeners():u.add=this._addFocusListeners),this._tooltip.options.sticky&&(u.mousemove=this._moveTooltip),this[o](u),this._tooltipHandlersAdded=!i}},openTooltip:function(i){return this._tooltip&&(this instanceof _i||(this._tooltip._source=this),this._tooltip._prepareOpen(i)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(i){return this._tooltip&&this._tooltip.setContent(i),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(i){var o=typeof i.getElement=="function"&&i.getElement();o&&(ae(o,"focus",function(){this._tooltip._source=i,this.openTooltip()},this),ae(o,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(i){var o=typeof i.getElement=="function"&&i.getElement();o&&o.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(i){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var o=this;this._map.once("moveend",function(){o._openOnceFlag=!1,o._openTooltip(i)});return}this._tooltip._source=i.layer||i.target,this.openTooltip(this._tooltip.options.sticky?i.latlng:void 0)}},_moveTooltip:function(i){var o=i.latlng,u,m;this._tooltip.options.sticky&&i.originalEvent&&(u=this._map.mouseEventToContainerPoint(i.originalEvent),m=this._map.containerPointToLayerPoint(u),o=this._map.layerPointToLatLng(m)),this._tooltip.setLatLng(o)}});var Qh=Vr.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(i){var o=i&&i.tagName==="DIV"?i:document.createElement("div"),u=this.options;if(u.html instanceof Element?(Ae(o),o.appendChild(u.html)):o.innerHTML=u.html!==!1?u.html:"",u.bgPos){var m=mt(u.bgPos);o.style.backgroundPosition=-m.x+"px "+-m.y+"px"}return this._setIconStyles(o,"icon"),o},createShadow:function(){return null}});function J_(i){return new Qh(i)}Vr.Default=Xs;var Zs=Xn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:Xt.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(i){E(this,i)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(i){i._addZoomLimit(this)},onRemove:function(i){this._removeAllTiles(),re(this._container),i._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(fe(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(Zt(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(i){return this.options.opacity=i,this._updateOpacity(),this},setZIndex:function(i){return this.options.zIndex=i,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var i=this._clampZoom(this._map.getZoom());i!==this._tileZoom&&(this._tileZoom=i,this._updateLevels()),this._update()}return this},getEvents:function(){var i={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=f(this._onMoveEnd,this.options.updateInterval,this)),i.move=this._onMove),this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},createTile:function(){return document.createElement("div")},getTileSize:function(){var i=this.options.tileSize;return i instanceof G?i:new G(i,i)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(i){for(var o=this.getPane().children,u=-i(-1/0,1/0),m=0,x=o.length,T;m<x;m++)T=o[m].style.zIndex,o[m]!==this._container&&T&&(u=i(u,+T));isFinite(u)&&(this.options.zIndex=u+i(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!Xt.ielt9){Ke(this._container,this.options.opacity);var i=+new Date,o=!1,u=!1;for(var m in this._tiles){var x=this._tiles[m];if(!(!x.current||!x.loaded)){var T=Math.min(1,(i-x.loaded)/200);Ke(x.el,T),T<1?o=!0:(x.active?u=!0:this._onOpaqueTile(x),x.active=!0)}}u&&!this._noPrune&&this._pruneTiles(),o&&($(this._fadeFrame),this._fadeFrame=F(this._updateOpacity,this))}},_onOpaqueTile:p,_initContainer:function(){this._container||(this._container=Gt("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var i=this._tileZoom,o=this.options.maxZoom;if(i!==void 0){for(var u in this._levels)u=Number(u),this._levels[u].el.children.length||u===i?(this._levels[u].el.style.zIndex=o-Math.abs(i-u),this._onUpdateLevel(u)):(re(this._levels[u].el),this._removeTilesAtZoom(u),this._onRemoveLevel(u),delete this._levels[u]);var m=this._levels[i],x=this._map;return m||(m=this._levels[i]={},m.el=Gt("div","leaflet-tile-container leaflet-zoom-animated",this._container),m.el.style.zIndex=o,m.origin=x.project(x.unproject(x.getPixelOrigin()),i).round(),m.zoom=i,this._setZoomTransform(m,x.getCenter(),x.getZoom()),p(m.el.offsetWidth),this._onCreateLevel(m)),this._level=m,m}},_onUpdateLevel:p,_onRemoveLevel:p,_onCreateLevel:p,_pruneTiles:function(){if(this._map){var i,o,u=this._map.getZoom();if(u>this.options.maxZoom||u<this.options.minZoom){this._removeAllTiles();return}for(i in this._tiles)o=this._tiles[i],o.retain=o.current;for(i in this._tiles)if(o=this._tiles[i],o.current&&!o.active){var m=o.coords;this._retainParent(m.x,m.y,m.z,m.z-5)||this._retainChildren(m.x,m.y,m.z,m.z+2)}for(i in this._tiles)this._tiles[i].retain||this._removeTile(i)}},_removeTilesAtZoom:function(i){for(var o in this._tiles)this._tiles[o].coords.z===i&&this._removeTile(o)},_removeAllTiles:function(){for(var i in this._tiles)this._removeTile(i)},_invalidateAll:function(){for(var i in this._levels)re(this._levels[i].el),this._onRemoveLevel(Number(i)),delete this._levels[i];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(i,o,u,m){var x=Math.floor(i/2),T=Math.floor(o/2),z=u-1,j=new G(+x,+T);j.z=+z;var st=this._tileCoordsToKey(j),bt=this._tiles[st];return bt&&bt.active?(bt.retain=!0,!0):(bt&&bt.loaded&&(bt.retain=!0),z>m?this._retainParent(x,T,z,m):!1)},_retainChildren:function(i,o,u,m){for(var x=2*i;x<2*i+2;x++)for(var T=2*o;T<2*o+2;T++){var z=new G(x,T);z.z=u+1;var j=this._tileCoordsToKey(z),st=this._tiles[j];if(st&&st.active){st.retain=!0;continue}else st&&st.loaded&&(st.retain=!0);u+1<m&&this._retainChildren(x,T,u+1,m)}},_resetView:function(i){var o=i&&(i.pinch||i.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),o,o)},_animateZoom:function(i){this._setView(i.center,i.zoom,!0,i.noUpdate)},_clampZoom:function(i){var o=this.options;return o.minNativeZoom!==void 0&&i<o.minNativeZoom?o.minNativeZoom:o.maxNativeZoom!==void 0&&o.maxNativeZoom<i?o.maxNativeZoom:i},_setView:function(i,o,u,m){var x=Math.round(o);this.options.maxZoom!==void 0&&x>this.options.maxZoom||this.options.minZoom!==void 0&&x<this.options.minZoom?x=void 0:x=this._clampZoom(x);var T=this.options.updateWhenZooming&&x!==this._tileZoom;(!m||T)&&(this._tileZoom=x,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),x!==void 0&&this._update(i),u||this._pruneTiles(),this._noPrune=!!u),this._setZoomTransforms(i,o)},_setZoomTransforms:function(i,o){for(var u in this._levels)this._setZoomTransform(this._levels[u],i,o)},_setZoomTransform:function(i,o,u){var m=this._map.getZoomScale(u,i.zoom),x=i.origin.multiplyBy(m).subtract(this._map._getNewPixelOrigin(o,u)).round();Xt.any3d?ze(i.el,x,m):pe(i.el,x)},_resetGrid:function(){var i=this._map,o=i.options.crs,u=this._tileSize=this.getTileSize(),m=this._tileZoom,x=this._map.getPixelWorldBounds(this._tileZoom);x&&(this._globalTileRange=this._pxBoundsToTileRange(x)),this._wrapX=o.wrapLng&&!this.options.noWrap&&[Math.floor(i.project([0,o.wrapLng[0]],m).x/u.x),Math.ceil(i.project([0,o.wrapLng[1]],m).x/u.y)],this._wrapY=o.wrapLat&&!this.options.noWrap&&[Math.floor(i.project([o.wrapLat[0],0],m).y/u.x),Math.ceil(i.project([o.wrapLat[1],0],m).y/u.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(i){var o=this._map,u=o._animatingZoom?Math.max(o._animateToZoom,o.getZoom()):o.getZoom(),m=o.getZoomScale(u,this._tileZoom),x=o.project(i,this._tileZoom).floor(),T=o.getSize().divideBy(m*2);return new At(x.subtract(T),x.add(T))},_update:function(i){var o=this._map;if(o){var u=this._clampZoom(o.getZoom());if(i===void 0&&(i=o.getCenter()),this._tileZoom!==void 0){var m=this._getTiledPixelBounds(i),x=this._pxBoundsToTileRange(m),T=x.getCenter(),z=[],j=this.options.keepBuffer,st=new At(x.getBottomLeft().subtract([j,-j]),x.getTopRight().add([j,-j]));if(!(isFinite(x.min.x)&&isFinite(x.min.y)&&isFinite(x.max.x)&&isFinite(x.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var bt in this._tiles){var zt=this._tiles[bt].coords;(zt.z!==this._tileZoom||!st.contains(new G(zt.x,zt.y)))&&(this._tiles[bt].current=!1)}if(Math.abs(u-this._tileZoom)>1){this._setView(i,u);return}for(var ee=x.min.y;ee<=x.max.y;ee++)for(var de=x.min.x;de<=x.max.x;de++){var fn=new G(de,ee);if(fn.z=this._tileZoom,!!this._isValidTile(fn)){var $e=this._tiles[this._tileCoordsToKey(fn)];$e?$e.current=!0:z.push(fn)}}if(z.sort(function(Mn,Zr){return Mn.distanceTo(T)-Zr.distanceTo(T)}),z.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var Un=document.createDocumentFragment();for(de=0;de<z.length;de++)this._addTile(z[de],Un);this._level.el.appendChild(Un)}}}},_isValidTile:function(i){var o=this._map.options.crs;if(!o.infinite){var u=this._globalTileRange;if(!o.wrapLng&&(i.x<u.min.x||i.x>u.max.x)||!o.wrapLat&&(i.y<u.min.y||i.y>u.max.y))return!1}if(!this.options.bounds)return!0;var m=this._tileCoordsToBounds(i);return lt(this.options.bounds).overlaps(m)},_keyToBounds:function(i){return this._tileCoordsToBounds(this._keyToTileCoords(i))},_tileCoordsToNwSe:function(i){var o=this._map,u=this.getTileSize(),m=i.scaleBy(u),x=m.add(u),T=o.unproject(m,i.z),z=o.unproject(x,i.z);return[T,z]},_tileCoordsToBounds:function(i){var o=this._tileCoordsToNwSe(i),u=new Jt(o[0],o[1]);return this.options.noWrap||(u=this._map.wrapLatLngBounds(u)),u},_tileCoordsToKey:function(i){return i.x+":"+i.y+":"+i.z},_keyToTileCoords:function(i){var o=i.split(":"),u=new G(+o[0],+o[1]);return u.z=+o[2],u},_removeTile:function(i){var o=this._tiles[i];o&&(re(o.el),delete this._tiles[i],this.fire("tileunload",{tile:o.el,coords:this._keyToTileCoords(i)}))},_initTile:function(i){Bt(i,"leaflet-tile");var o=this.getTileSize();i.style.width=o.x+"px",i.style.height=o.y+"px",i.onselectstart=p,i.onmousemove=p,Xt.ielt9&&this.options.opacity<1&&Ke(i,this.options.opacity)},_addTile:function(i,o){var u=this._getTilePos(i),m=this._tileCoordsToKey(i),x=this.createTile(this._wrapCoords(i),l(this._tileReady,this,i));this._initTile(x),this.createTile.length<2&&F(l(this._tileReady,this,i,null,x)),pe(x,u),this._tiles[m]={el:x,coords:i,current:!0},o.appendChild(x),this.fire("tileloadstart",{tile:x,coords:i})},_tileReady:function(i,o,u){o&&this.fire("tileerror",{error:o,tile:u,coords:i});var m=this._tileCoordsToKey(i);u=this._tiles[m],u&&(u.loaded=+new Date,this._map._fadeAnimated?(Ke(u.el,0),$(this._fadeFrame),this._fadeFrame=F(this._updateOpacity,this)):(u.active=!0,this._pruneTiles()),o||(Bt(u.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:u.el,coords:i})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),Xt.ielt9||!this._map._fadeAnimated?F(this._pruneTiles,this):setTimeout(l(this._pruneTiles,this),250)))},_getTilePos:function(i){return i.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(i){var o=new G(this._wrapX?d(i.x,this._wrapX):i.x,this._wrapY?d(i.y,this._wrapY):i.y);return o.z=i.z,o},_pxBoundsToTileRange:function(i){var o=this.getTileSize();return new At(i.min.unscaleBy(o).floor(),i.max.unscaleBy(o).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var i in this._tiles)if(!this._tiles[i].loaded)return!1;return!0}});function Q_(i){return new Zs(i)}var Xr=Zs.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(i,o){this._url=i,o=E(this,o),o.detectRetina&&Xt.retina&&o.maxZoom>0?(o.tileSize=Math.floor(o.tileSize/2),o.zoomReverse?(o.zoomOffset--,o.minZoom=Math.min(o.maxZoom,o.minZoom+1)):(o.zoomOffset++,o.maxZoom=Math.max(o.minZoom,o.maxZoom-1)),o.minZoom=Math.max(0,o.minZoom)):o.zoomReverse?o.minZoom=Math.min(o.maxZoom,o.minZoom):o.maxZoom=Math.max(o.minZoom,o.maxZoom),typeof o.subdomains=="string"&&(o.subdomains=o.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(i,o){return this._url===i&&o===void 0&&(o=!0),this._url=i,o||this.redraw(),this},createTile:function(i,o){var u=document.createElement("img");return ae(u,"load",l(this._tileOnLoad,this,o,u)),ae(u,"error",l(this._tileOnError,this,o,u)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(u.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(u.referrerPolicy=this.options.referrerPolicy),u.alt="",u.src=this.getTileUrl(i),u},getTileUrl:function(i){var o={r:Xt.retina?"@2x":"",s:this._getSubdomain(i),x:i.x,y:i.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var u=this._globalTileRange.max.y-i.y;this.options.tms&&(o.y=u),o["-y"]=u}return D(this._url,s(o,this.options))},_tileOnLoad:function(i,o){Xt.ielt9?setTimeout(l(i,this,null,o),0):i(null,o)},_tileOnError:function(i,o,u){var m=this.options.errorTileUrl;m&&o.getAttribute("src")!==m&&(o.src=m),i(u,o)},_onTileRemove:function(i){i.tile.onload=null},_getZoomForUrl:function(){var i=this._tileZoom,o=this.options.maxZoom,u=this.options.zoomReverse,m=this.options.zoomOffset;return u&&(i=o-i),i+m},_getSubdomain:function(i){var o=Math.abs(i.x+i.y)%this.options.subdomains.length;return this.options.subdomains[o]},_abortLoading:function(){var i,o;for(i in this._tiles)if(this._tiles[i].coords.z!==this._tileZoom&&(o=this._tiles[i].el,o.onload=p,o.onerror=p,!o.complete)){o.src=V;var u=this._tiles[i].coords;re(o),delete this._tiles[i],this.fire("tileabort",{tile:o,coords:u})}},_removeTile:function(i){var o=this._tiles[i];if(o)return o.el.setAttribute("src",V),Zs.prototype._removeTile.call(this,i)},_tileReady:function(i,o,u){if(!(!this._map||u&&u.getAttribute("src")===V))return Zs.prototype._tileReady.call(this,i,o,u)}});function tf(i,o){return new Xr(i,o)}var ef=Xr.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(i,o){this._url=i;var u=s({},this.defaultWmsParams);for(var m in o)m in this.options||(u[m]=o[m]);o=E(this,o);var x=o.detectRetina&&Xt.retina?2:1,T=this.getTileSize();u.width=T.x*x,u.height=T.y*x,this.wmsParams=u},onAdd:function(i){this._crs=this.options.crs||i.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var o=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[o]=this._crs.code,Xr.prototype.onAdd.call(this,i)},getTileUrl:function(i){var o=this._tileCoordsToNwSe(i),u=this._crs,m=kt(u.project(o[0]),u.project(o[1])),x=m.min,T=m.max,z=(this._wmsVersion>=1.3&&this._crs===qh?[x.y,x.x,T.y,T.x]:[x.x,x.y,T.x,T.y]).join(","),j=Xr.prototype.getTileUrl.call(this,i);return j+y(this.wmsParams,j,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+z},setParams:function(i,o){return s(this.wmsParams,i),o||this.redraw(),this}});function tg(i,o){return new ef(i,o)}Xr.WMS=ef,tf.wms=tg;var xi=Xn.extend({options:{padding:.1},initialize:function(i){E(this,i),h(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),Bt(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var i={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(i.zoomanim=this._onAnimZoom),i},_onAnimZoom:function(i){this._updateTransform(i.center,i.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(i,o){var u=this._map.getZoomScale(o,this._zoom),m=this._map.getSize().multiplyBy(.5+this.options.padding),x=this._map.project(this._center,o),T=m.multiplyBy(-u).add(x).subtract(this._map._getNewPixelOrigin(i,o));Xt.any3d?ze(this._container,T,u):pe(this._container,T)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var i in this._layers)this._layers[i]._reset()},_onZoomEnd:function(){for(var i in this._layers)this._layers[i]._project()},_updatePaths:function(){for(var i in this._layers)this._layers[i]._update()},_update:function(){var i=this.options.padding,o=this._map.getSize(),u=this._map.containerPointToLayerPoint(o.multiplyBy(-i)).round();this._bounds=new At(u,u.add(o.multiplyBy(1+i*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),nf=xi.extend({options:{tolerance:0},getEvents:function(){var i=xi.prototype.getEvents.call(this);return i.viewprereset=this._onViewPreReset,i},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){xi.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var i=this._container=document.createElement("canvas");ae(i,"mousemove",this._onMouseMove,this),ae(i,"click dblclick mousedown mouseup contextmenu",this._onClick,this),ae(i,"mouseout",this._handleMouseOut,this),i._leaflet_disable_events=!0,this._ctx=i.getContext("2d")},_destroyContainer:function(){$(this._redrawRequest),delete this._ctx,re(this._container),Re(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var i;this._redrawBounds=null;for(var o in this._layers)i=this._layers[o],i._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){xi.prototype._update.call(this);var i=this._bounds,o=this._container,u=i.getSize(),m=Xt.retina?2:1;pe(o,i.min),o.width=m*u.x,o.height=m*u.y,o.style.width=u.x+"px",o.style.height=u.y+"px",Xt.retina&&this._ctx.scale(2,2),this._ctx.translate(-i.min.x,-i.min.y),this.fire("update")}},_reset:function(){xi.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(i){this._updateDashArray(i),this._layers[h(i)]=i;var o=i._order={layer:i,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=o),this._drawLast=o,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(i){this._requestRedraw(i)},_removePath:function(i){var o=i._order,u=o.next,m=o.prev;u?u.prev=m:this._drawLast=m,m?m.next=u:this._drawFirst=u,delete i._order,delete this._layers[h(i)],this._requestRedraw(i)},_updatePath:function(i){this._extendRedrawBounds(i),i._project(),i._update(),this._requestRedraw(i)},_updateStyle:function(i){this._updateDashArray(i),this._requestRedraw(i)},_updateDashArray:function(i){if(typeof i.options.dashArray=="string"){var o=i.options.dashArray.split(/[, ]+/),u=[],m,x;for(x=0;x<o.length;x++){if(m=Number(o[x]),isNaN(m))return;u.push(m)}i.options._dashArray=u}else i.options._dashArray=i.options.dashArray},_requestRedraw:function(i){this._map&&(this._extendRedrawBounds(i),this._redrawRequest=this._redrawRequest||F(this._redraw,this))},_extendRedrawBounds:function(i){if(i._pxBounds){var o=(i.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new At,this._redrawBounds.extend(i._pxBounds.min.subtract([o,o])),this._redrawBounds.extend(i._pxBounds.max.add([o,o]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var i=this._redrawBounds;if(i){var o=i.getSize();this._ctx.clearRect(i.min.x,i.min.y,o.x,o.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var i,o=this._redrawBounds;if(this._ctx.save(),o){var u=o.getSize();this._ctx.beginPath(),this._ctx.rect(o.min.x,o.min.y,u.x,u.y),this._ctx.clip()}this._drawing=!0;for(var m=this._drawFirst;m;m=m.next)i=m.layer,(!o||i._pxBounds&&i._pxBounds.intersects(o))&&i._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(i,o){if(this._drawing){var u,m,x,T,z=i._parts,j=z.length,st=this._ctx;if(j){for(st.beginPath(),u=0;u<j;u++){for(m=0,x=z[u].length;m<x;m++)T=z[u][m],st[m?"lineTo":"moveTo"](T.x,T.y);o&&st.closePath()}this._fillStroke(st,i)}}},_updateCircle:function(i){if(!(!this._drawing||i._empty())){var o=i._point,u=this._ctx,m=Math.max(Math.round(i._radius),1),x=(Math.max(Math.round(i._radiusY),1)||m)/m;x!==1&&(u.save(),u.scale(1,x)),u.beginPath(),u.arc(o.x,o.y/x,m,0,Math.PI*2,!1),x!==1&&u.restore(),this._fillStroke(u,i)}},_fillStroke:function(i,o){var u=o.options;u.fill&&(i.globalAlpha=u.fillOpacity,i.fillStyle=u.fillColor||u.color,i.fill(u.fillRule||"evenodd")),u.stroke&&u.weight!==0&&(i.setLineDash&&i.setLineDash(o.options&&o.options._dashArray||[]),i.globalAlpha=u.opacity,i.lineWidth=u.weight,i.strokeStyle=u.color,i.lineCap=u.lineCap,i.lineJoin=u.lineJoin,i.stroke())},_onClick:function(i){for(var o=this._map.mouseEventToLayerPoint(i),u,m,x=this._drawFirst;x;x=x.next)u=x.layer,u.options.interactive&&u._containsPoint(o)&&(!(i.type==="click"||i.type==="preclick")||!this._map._draggableMoved(u))&&(m=u);this._fireEvent(m?[m]:!1,i)},_onMouseMove:function(i){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var o=this._map.mouseEventToLayerPoint(i);this._handleMouseHover(i,o)}},_handleMouseOut:function(i){var o=this._hoveredLayer;o&&(ge(this._container,"leaflet-interactive"),this._fireEvent([o],i,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(i,o){if(!this._mouseHoverThrottled){for(var u,m,x=this._drawFirst;x;x=x.next)u=x.layer,u.options.interactive&&u._containsPoint(o)&&(m=u);m!==this._hoveredLayer&&(this._handleMouseOut(i),m&&(Bt(this._container,"leaflet-interactive"),this._fireEvent([m],i,"mouseover"),this._hoveredLayer=m)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,i),this._mouseHoverThrottled=!0,setTimeout(l(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(i,o,u){this._map._fireDOMEvent(o,u||o.type,i)},_bringToFront:function(i){var o=i._order;if(o){var u=o.next,m=o.prev;if(u)u.prev=m;else return;m?m.next=u:u&&(this._drawFirst=u),o.prev=this._drawLast,this._drawLast.next=o,o.next=null,this._drawLast=o,this._requestRedraw(i)}},_bringToBack:function(i){var o=i._order;if(o){var u=o.next,m=o.prev;if(m)m.next=u;else return;u?u.prev=m:m&&(this._drawLast=m),o.prev=null,o.next=this._drawFirst,this._drawFirst.prev=o,this._drawFirst=o,this._requestRedraw(i)}}});function rf(i){return Xt.canvas?new nf(i):null}var qs=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(i){return document.createElement("<lvml:"+i+' class="lvml">')}}catch{}return function(i){return document.createElement("<"+i+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),eg={_initContainer:function(){this._container=Gt("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(xi.prototype._update.call(this),this.fire("update"))},_initPath:function(i){var o=i._container=qs("shape");Bt(o,"leaflet-vml-shape "+(this.options.className||"")),o.coordsize="1 1",i._path=qs("path"),o.appendChild(i._path),this._updateStyle(i),this._layers[h(i)]=i},_addPath:function(i){var o=i._container;this._container.appendChild(o),i.options.interactive&&i.addInteractiveTarget(o)},_removePath:function(i){var o=i._container;re(o),i.removeInteractiveTarget(o),delete this._layers[h(i)]},_updateStyle:function(i){var o=i._stroke,u=i._fill,m=i.options,x=i._container;x.stroked=!!m.stroke,x.filled=!!m.fill,m.stroke?(o||(o=i._stroke=qs("stroke")),x.appendChild(o),o.weight=m.weight+"px",o.color=m.color,o.opacity=m.opacity,m.dashArray?o.dashStyle=I(m.dashArray)?m.dashArray.join(" "):m.dashArray.replace(/( *, *)/g," "):o.dashStyle="",o.endcap=m.lineCap.replace("butt","flat"),o.joinstyle=m.lineJoin):o&&(x.removeChild(o),i._stroke=null),m.fill?(u||(u=i._fill=qs("fill")),x.appendChild(u),u.color=m.fillColor||m.color,u.opacity=m.fillOpacity):u&&(x.removeChild(u),i._fill=null)},_updateCircle:function(i){var o=i._point.round(),u=Math.round(i._radius),m=Math.round(i._radiusY||u);this._setPath(i,i._empty()?"M0 0":"AL "+o.x+","+o.y+" "+u+","+m+" 0,"+65535*360)},_setPath:function(i,o){i._path.v=o},_bringToFront:function(i){fe(i._container)},_bringToBack:function(i){Zt(i._container)}},ta=Xt.vml?qs:ft,Ys=xi.extend({_initContainer:function(){this._container=ta("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=ta("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){re(this._container),Re(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){xi.prototype._update.call(this);var i=this._bounds,o=i.getSize(),u=this._container;(!this._svgSize||!this._svgSize.equals(o))&&(this._svgSize=o,u.setAttribute("width",o.x),u.setAttribute("height",o.y)),pe(u,i.min),u.setAttribute("viewBox",[i.min.x,i.min.y,o.x,o.y].join(" ")),this.fire("update")}},_initPath:function(i){var o=i._path=ta("path");i.options.className&&Bt(o,i.options.className),i.options.interactive&&Bt(o,"leaflet-interactive"),this._updateStyle(i),this._layers[h(i)]=i},_addPath:function(i){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(i._path),i.addInteractiveTarget(i._path)},_removePath:function(i){re(i._path),i.removeInteractiveTarget(i._path),delete this._layers[h(i)]},_updatePath:function(i){i._project(),i._update()},_updateStyle:function(i){var o=i._path,u=i.options;o&&(u.stroke?(o.setAttribute("stroke",u.color),o.setAttribute("stroke-opacity",u.opacity),o.setAttribute("stroke-width",u.weight),o.setAttribute("stroke-linecap",u.lineCap),o.setAttribute("stroke-linejoin",u.lineJoin),u.dashArray?o.setAttribute("stroke-dasharray",u.dashArray):o.removeAttribute("stroke-dasharray"),u.dashOffset?o.setAttribute("stroke-dashoffset",u.dashOffset):o.removeAttribute("stroke-dashoffset")):o.setAttribute("stroke","none"),u.fill?(o.setAttribute("fill",u.fillColor||u.color),o.setAttribute("fill-opacity",u.fillOpacity),o.setAttribute("fill-rule",u.fillRule||"evenodd")):o.setAttribute("fill","none"))},_updatePoly:function(i,o){this._setPath(i,ot(i._parts,o))},_updateCircle:function(i){var o=i._point,u=Math.max(Math.round(i._radius),1),m=Math.max(Math.round(i._radiusY),1)||u,x="a"+u+","+m+" 0 1,0 ",T=i._empty()?"M0 0":"M"+(o.x-u)+","+o.y+x+u*2+",0 "+x+-u*2+",0 ";this._setPath(i,T)},_setPath:function(i,o){i._path.setAttribute("d",o)},_bringToFront:function(i){fe(i._path)},_bringToBack:function(i){Zt(i._path)}});Xt.vml&&Ys.include(eg);function sf(i){return Xt.svg||Xt.vml?new Ys(i):null}_e.include({getRenderer:function(i){var o=i.options.renderer||this._getPaneRenderer(i.options.pane)||this.options.renderer||this._renderer;return o||(o=this._renderer=this._createRenderer()),this.hasLayer(o)||this.addLayer(o),o},_getPaneRenderer:function(i){if(i==="overlayPane"||i===void 0)return!1;var o=this._paneRenderers[i];return o===void 0&&(o=this._createRenderer({pane:i}),this._paneRenderers[i]=o),o},_createRenderer:function(i){return this.options.preferCanvas&&rf(i)||sf(i)}});var of=Gr.extend({initialize:function(i,o){Gr.prototype.initialize.call(this,this._boundsToLatLngs(i),o)},setBounds:function(i){return this.setLatLngs(this._boundsToLatLngs(i))},_boundsToLatLngs:function(i){return i=lt(i),[i.getSouthWest(),i.getNorthWest(),i.getNorthEast(),i.getSouthEast()]}});function ng(i,o){return new of(i,o)}Ys.create=ta,Ys.pointsToPath=ot,vi.geometryToLayer=qo,vi.coordsToLatLng=Gl,vi.coordsToLatLngs=Yo,vi.latLngToCoords=Wl,vi.latLngsToCoords=jo,vi.getFeature=Wr,vi.asFeature=Ko,_e.mergeOptions({boxZoom:!0});var af=ri.extend({initialize:function(i){this._map=i,this._container=i._container,this._pane=i._panes.overlayPane,this._resetStateTimeout=0,i.on("unload",this._destroy,this)},addHooks:function(){ae(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){Re(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){re(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(i){if(!i.shiftKey||i.which!==1&&i.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),mi(),wl(),this._startPoint=this._map.mouseEventToContainerPoint(i),ae(document,{contextmenu:mr,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(i){this._moved||(this._moved=!0,this._box=Gt("div","leaflet-zoom-box",this._container),Bt(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(i);var o=new At(this._point,this._startPoint),u=o.getSize();pe(this._box,o.min),this._box.style.width=u.x+"px",this._box.style.height=u.y+"px"},_finish:function(){this._moved&&(re(this._box),ge(this._container,"leaflet-crosshair")),bn(),Al(),Re(document,{contextmenu:mr,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(i){if(!(i.which!==1&&i.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(l(this._resetState,this),0);var o=new Jt(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(o).fire("boxzoomend",{boxZoomBounds:o})}},_onKeyDown:function(i){i.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});_e.addInitHook("addHandler","boxZoom",af),_e.mergeOptions({doubleClickZoom:!0});var lf=ri.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(i){var o=this._map,u=o.getZoom(),m=o.options.zoomDelta,x=i.originalEvent.shiftKey?u-m:u+m;o.options.doubleClickZoom==="center"?o.setZoom(x):o.setZoomAround(i.containerPoint,x)}});_e.addInitHook("addHandler","doubleClickZoom",lf),_e.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var cf=ri.extend({addHooks:function(){if(!this._draggable){var i=this._map;this._draggable=new Xi(i._mapPane,i._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),i.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),i.on("zoomend",this._onZoomEnd,this),i.whenReady(this._onZoomEnd,this))}Bt(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){ge(this._map._container,"leaflet-grab"),ge(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var i=this._map;if(i._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var o=lt(this._map.options.maxBounds);this._offsetLimit=kt(this._map.latLngToContainerPoint(o.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(o.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;i.fire("movestart").fire("dragstart"),i.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(i){if(this._map.options.inertia){var o=this._lastTime=+new Date,u=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(u),this._times.push(o),this._prunePositions(o)}this._map.fire("move",i).fire("drag",i)},_prunePositions:function(i){for(;this._positions.length>1&&i-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var i=this._map.getSize().divideBy(2),o=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=o.subtract(i).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(i,o){return i-(i-o)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var i=this._draggable._newPos.subtract(this._draggable._startPos),o=this._offsetLimit;i.x<o.min.x&&(i.x=this._viscousLimit(i.x,o.min.x)),i.y<o.min.y&&(i.y=this._viscousLimit(i.y,o.min.y)),i.x>o.max.x&&(i.x=this._viscousLimit(i.x,o.max.x)),i.y>o.max.y&&(i.y=this._viscousLimit(i.y,o.max.y)),this._draggable._newPos=this._draggable._startPos.add(i)}},_onPreDragWrap:function(){var i=this._worldWidth,o=Math.round(i/2),u=this._initialWorldOffset,m=this._draggable._newPos.x,x=(m-o+u)%i+o-u,T=(m+o+u)%i-o-u,z=Math.abs(x+u)<Math.abs(T+u)?x:T;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=z},_onDragEnd:function(i){var o=this._map,u=o.options,m=!u.inertia||i.noInertia||this._times.length<2;if(o.fire("dragend",i),m)o.fire("moveend");else{this._prunePositions(+new Date);var x=this._lastPos.subtract(this._positions[0]),T=(this._lastTime-this._times[0])/1e3,z=u.easeLinearity,j=x.multiplyBy(z/T),st=j.distanceTo([0,0]),bt=Math.min(u.inertiaMaxSpeed,st),zt=j.multiplyBy(bt/st),ee=bt/(u.inertiaDeceleration*z),de=zt.multiplyBy(-ee/2).round();!de.x&&!de.y?o.fire("moveend"):(de=o._limitOffset(de,o.options.maxBounds),F(function(){o.panBy(de,{duration:ee,easeLinearity:z,noMoveStart:!0,animate:!0})}))}}});_e.addInitHook("addHandler","dragging",cf),_e.mergeOptions({keyboard:!0,keyboardPanDelta:80});var uf=ri.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(i){this._map=i,this._setPanDelta(i.options.keyboardPanDelta),this._setZoomDelta(i.options.zoomDelta)},addHooks:function(){var i=this._map._container;i.tabIndex<=0&&(i.tabIndex="0"),ae(i,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Re(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var i=document.body,o=document.documentElement,u=i.scrollTop||o.scrollTop,m=i.scrollLeft||o.scrollLeft;this._map._container.focus(),window.scrollTo(m,u)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(i){var o=this._panKeys={},u=this.keyCodes,m,x;for(m=0,x=u.left.length;m<x;m++)o[u.left[m]]=[-1*i,0];for(m=0,x=u.right.length;m<x;m++)o[u.right[m]]=[i,0];for(m=0,x=u.down.length;m<x;m++)o[u.down[m]]=[0,i];for(m=0,x=u.up.length;m<x;m++)o[u.up[m]]=[0,-1*i]},_setZoomDelta:function(i){var o=this._zoomKeys={},u=this.keyCodes,m,x;for(m=0,x=u.zoomIn.length;m<x;m++)o[u.zoomIn[m]]=i;for(m=0,x=u.zoomOut.length;m<x;m++)o[u.zoomOut[m]]=-i},_addHooks:function(){ae(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){Re(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(i){if(!(i.altKey||i.ctrlKey||i.metaKey)){var o=i.keyCode,u=this._map,m;if(o in this._panKeys){if(!u._panAnim||!u._panAnim._inProgress)if(m=this._panKeys[o],i.shiftKey&&(m=mt(m).multiplyBy(3)),u.options.maxBounds&&(m=u._limitOffset(mt(m),u.options.maxBounds)),u.options.worldCopyJump){var x=u.wrapLatLng(u.unproject(u.project(u.getCenter()).add(m)));u.panTo(x)}else u.panBy(m)}else if(o in this._zoomKeys)u.setZoom(u.getZoom()+(i.shiftKey?3:1)*this._zoomKeys[o]);else if(o===27&&u._popup&&u._popup.options.closeOnEscapeKey)u.closePopup();else return;mr(i)}}});_e.addInitHook("addHandler","keyboard",uf),_e.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var hf=ri.extend({addHooks:function(){ae(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){Re(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(i){var o=Oh(i),u=this._map.options.wheelDebounceTime;this._delta+=o,this._lastMousePos=this._map.mouseEventToContainerPoint(i),this._startTime||(this._startTime=+new Date);var m=Math.max(u-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(l(this._performZoom,this),m),mr(i)},_performZoom:function(){var i=this._map,o=i.getZoom(),u=this._map.options.zoomSnap||0;i._stop();var m=this._delta/(this._map.options.wheelPxPerZoomLevel*4),x=4*Math.log(2/(1+Math.exp(-Math.abs(m))))/Math.LN2,T=u?Math.ceil(x/u)*u:x,z=i._limitZoom(o+(this._delta>0?T:-T))-o;this._delta=0,this._startTime=null,z&&(i.options.scrollWheelZoom==="center"?i.setZoom(o+z):i.setZoomAround(this._lastMousePos,o+z))}});_e.addInitHook("addHandler","scrollWheelZoom",hf);var ig=600;_e.mergeOptions({tapHold:Xt.touchNative&&Xt.safari&&Xt.mobile,tapTolerance:15});var ff=ri.extend({addHooks:function(){ae(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){Re(this._map._container,"touchstart",this._onDown,this)},_onDown:function(i){if(clearTimeout(this._holdTimeout),i.touches.length===1){var o=i.touches[0];this._startPos=this._newPos=new G(o.clientX,o.clientY),this._holdTimeout=setTimeout(l(function(){this._cancel(),this._isTapValid()&&(ae(document,"touchend",tn),ae(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",o))},this),ig),ae(document,"touchend touchcancel contextmenu",this._cancel,this),ae(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function i(){Re(document,"touchend",tn),Re(document,"touchend touchcancel",i)},_cancel:function(){clearTimeout(this._holdTimeout),Re(document,"touchend touchcancel contextmenu",this._cancel,this),Re(document,"touchmove",this._onMove,this)},_onMove:function(i){var o=i.touches[0];this._newPos=new G(o.clientX,o.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(i,o){var u=new MouseEvent(i,{bubbles:!0,cancelable:!0,view:window,screenX:o.screenX,screenY:o.screenY,clientX:o.clientX,clientY:o.clientY});u._simulated=!0,o.target.dispatchEvent(u)}});_e.addInitHook("addHandler","tapHold",ff),_e.mergeOptions({touchZoom:Xt.touch,bounceAtZoomLimits:!0});var df=ri.extend({addHooks:function(){Bt(this._map._container,"leaflet-touch-zoom"),ae(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){ge(this._map._container,"leaflet-touch-zoom"),Re(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(i){var o=this._map;if(!(!i.touches||i.touches.length!==2||o._animatingZoom||this._zooming)){var u=o.mouseEventToContainerPoint(i.touches[0]),m=o.mouseEventToContainerPoint(i.touches[1]);this._centerPoint=o.getSize()._divideBy(2),this._startLatLng=o.containerPointToLatLng(this._centerPoint),o.options.touchZoom!=="center"&&(this._pinchStartLatLng=o.containerPointToLatLng(u.add(m)._divideBy(2))),this._startDist=u.distanceTo(m),this._startZoom=o.getZoom(),this._moved=!1,this._zooming=!0,o._stop(),ae(document,"touchmove",this._onTouchMove,this),ae(document,"touchend touchcancel",this._onTouchEnd,this),tn(i)}},_onTouchMove:function(i){if(!(!i.touches||i.touches.length!==2||!this._zooming)){var o=this._map,u=o.mouseEventToContainerPoint(i.touches[0]),m=o.mouseEventToContainerPoint(i.touches[1]),x=u.distanceTo(m)/this._startDist;if(this._zoom=o.getScaleZoom(x,this._startZoom),!o.options.bounceAtZoomLimits&&(this._zoom<o.getMinZoom()&&x<1||this._zoom>o.getMaxZoom()&&x>1)&&(this._zoom=o._limitZoom(this._zoom)),o.options.touchZoom==="center"){if(this._center=this._startLatLng,x===1)return}else{var T=u._add(m)._divideBy(2)._subtract(this._centerPoint);if(x===1&&T.x===0&&T.y===0)return;this._center=o.unproject(o.project(this._pinchStartLatLng,this._zoom).subtract(T),this._zoom)}this._moved||(o._moveStart(!0,!1),this._moved=!0),$(this._animRequest);var z=l(o._move,o,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=F(z,this,!0),tn(i)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,$(this._animRequest),Re(document,"touchmove",this._onTouchMove,this),Re(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});_e.addInitHook("addHandler","touchZoom",df),_e.BoxZoom=af,_e.DoubleClickZoom=lf,_e.Drag=cf,_e.Keyboard=uf,_e.ScrollWheelZoom=hf,_e.TapHold=ff,_e.TouchZoom=df,e.Bounds=At,e.Browser=Xt,e.CRS=W,e.Canvas=nf,e.Circle=Vl,e.CircleMarker=Zo,e.Class=rt,e.Control=Wn,e.DivIcon=Qh,e.DivOverlay=si,e.DomEvent=M_,e.DomUtil=x_,e.Draggable=Xi,e.Evented=pt,e.FeatureGroup=_i,e.GeoJSON=vi,e.GridLayer=Zs,e.Handler=ri,e.Icon=Vr,e.ImageOverlay=$o,e.LatLng=_t,e.LatLngBounds=Jt,e.Layer=Xn,e.LayerGroup=Hr,e.LineUtil=O_,e.Map=_e,e.Marker=Xo,e.Mixin=P_,e.Path=Zi,e.Point=G,e.PolyUtil=C_,e.Polygon=Gr,e.Polyline=gi,e.Popup=Jo,e.PosAnimation=Uh,e.Projection=U_,e.Rectangle=of,e.Renderer=xi,e.SVG=Ys,e.SVGOverlay=Jh,e.TileLayer=Xr,e.Tooltip=Qo,e.Transformation=Wt,e.Util=Y,e.VideoOverlay=$h,e.bind=l,e.bounds=kt,e.canvas=rf,e.circle=G_,e.circleMarker=V_,e.control=Gs,e.divIcon=J_,e.extend=s,e.featureGroup=z_,e.geoJSON=Kh,e.geoJson=Z_,e.gridLayer=Q_,e.icon=k_,e.imageOverlay=q_,e.latLng=xt,e.latLngBounds=lt,e.layerGroup=B_,e.map=S_,e.marker=H_,e.point=mt,e.polygon=X_,e.polyline=W_,e.popup=K_,e.rectangle=ng,e.setOptions=E,e.stamp=h,e.svg=sf,e.svgOverlay=j_,e.tileLayer=tf,e.tooltip=$_,e.transformation=O,e.version=r,e.videoOverlay=Y_;var rg=window.L;e.noConflict=function(){return window.L=rg,this},window.L=e}))})(ao,ao.exports)),ao.exports}var Zw=Xw();const Fc=Gw(Zw);var Os;(function(n){n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE"})(Os||(Os={}));class Bc extends Error{constructor(t,e,r){super(t),this.message=t,this.code=e,this.data=r}}const qw=n=>{var t,e;return n?.androidBridge?"android":!((e=(t=n?.webkit)===null||t===void 0?void 0:t.messageHandlers)===null||e===void 0)&&e.bridge?"ios":"web"},Yw=n=>{const t=n.CapacitorCustomPlatform||null,e=n.Capacitor||{},r=e.Plugins=e.Plugins||{},s=()=>t!==null?t.name:qw(n),a=()=>s()!=="web",l=p=>{const _=f.get(p);return!!(_?.platforms.has(s())||c(p))},c=p=>{var _;return(_=e.PluginHeaders)===null||_===void 0?void 0:_.find(g=>g.name===p)},h=p=>n.console.error(p),f=new Map,d=(p,_={})=>{const g=f.get(p);if(g)return console.warn(`Capacitor plugin "${p}" already registered. Cannot register plugins twice.`),g.proxy;const M=s(),E=c(p);let y;const v=async()=>(!y&&M in _?y=typeof _[M]=="function"?y=await _[M]():y=_[M]:t!==null&&!y&&"web"in _&&(y=typeof _.web=="function"?y=await _.web():y=_.web),y),D=(H,R)=>{var P,F;if(E){const $=E?.methods.find(Y=>R===Y.name);if($)return $.rtype==="promise"?Y=>e.nativePromise(p,R.toString(),Y):(Y,rt)=>e.nativeCallback(p,R.toString(),Y,rt);if(H)return(P=H[R])===null||P===void 0?void 0:P.bind(H)}else{if(H)return(F=H[R])===null||F===void 0?void 0:F.bind(H);throw new Bc(`"${p}" plugin is not implemented on ${M}`,Os.Unimplemented)}},I=H=>{let R;const P=(...F)=>{const $=v().then(Y=>{const rt=D(Y,H);if(rt){const gt=rt(...F);return R=gt?.remove,gt}else throw new Bc(`"${p}.${H}()" is not implemented on ${M}`,Os.Unimplemented)});return H==="addListener"&&($.remove=async()=>R()),$};return P.toString=()=>`${H.toString()}() { [capacitor code] }`,Object.defineProperty(P,"name",{value:H,writable:!1,configurable:!1}),P},A=I("addListener"),V=I("removeListener"),N=(H,R)=>{const P=A({eventName:H},R),F=async()=>{const Y=await P;V({eventName:H,callbackId:Y},R)},$=new Promise(Y=>P.then(()=>Y({remove:F})));return $.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await F()},$},B=new Proxy({},{get(H,R){switch(R){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return E?N:A;case"removeListener":return V;default:return I(R)}}});return r[p]=B,f.set(p,{name:p,proxy:B,platforms:new Set([...Object.keys(_),...E?[M]:[]])}),B};return e.convertFileSrc||(e.convertFileSrc=p=>p),e.getPlatform=s,e.handleError=h,e.isNativePlatform=a,e.isPluginAvailable=l,e.registerPlugin=d,e.Exception=Bc,e.DEBUG=!!e.DEBUG,e.isLoggingEnabled=!!e.isLoggingEnabled,e},jw=n=>n.Capacitor=Yw(n),el=jw(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),yl=el.registerPlugin;class m_{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(t,e){let r=!1;this.listeners[t]||(this.listeners[t]=[],r=!0),this.listeners[t].push(e);const a=this.windowListeners[t];a&&!a.registered&&this.addWindowListener(a),r&&this.sendRetainedArgumentsForEvent(t);const l=async()=>this.removeListener(t,e);return Promise.resolve({remove:l})}async removeAllListeners(){this.listeners={};for(const t in this.windowListeners)this.removeWindowListener(this.windowListeners[t]);this.windowListeners={}}notifyListeners(t,e,r){const s=this.listeners[t];if(!s){if(r){let a=this.retainedEventArguments[t];a||(a=[]),a.push(e),this.retainedEventArguments[t]=a}return}s.forEach(a=>a(e))}hasListeners(t){var e;return!!(!((e=this.listeners[t])===null||e===void 0)&&e.length)}registerWindowListener(t,e){this.windowListeners[e]={registered:!1,windowEventName:t,pluginEventName:e,handler:r=>{this.notifyListeners(e,r)}}}unimplemented(t="not implemented"){return new el.Exception(t,Os.Unimplemented)}unavailable(t="not available"){return new el.Exception(t,Os.Unavailable)}async removeListener(t,e){const r=this.listeners[t];if(!r)return;const s=r.indexOf(e);this.listeners[t].splice(s,1),this.listeners[t].length||this.removeWindowListener(this.windowListeners[t])}addWindowListener(t){window.addEventListener(t.windowEventName,t.handler),t.registered=!0}removeWindowListener(t){t&&(window.removeEventListener(t.windowEventName,t.handler),t.registered=!1)}sendRetainedArgumentsForEvent(t){const e=this.retainedEventArguments[t];e&&(delete this.retainedEventArguments[t],e.forEach(r=>{this.notifyListeners(t,r)}))}}const cp=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),up=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class Kw extends m_{async getCookies(){const t=document.cookie,e={};return t.split(";").forEach(r=>{if(r.length<=0)return;let[s,a]=r.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");s=up(s).trim(),a=up(a).trim(),e[s]=a}),e}async setCookie(t){try{const e=cp(t.key),r=cp(t.value),s=`; expires=${(t.expires||"").replace("expires=","")}`,a=(t.path||"/").replace("path=",""),l=t.url!=null&&t.url.length>0?`domain=${t.url}`:"";document.cookie=`${e}=${r||""}${s}; path=${a}; ${l};`}catch(e){return Promise.reject(e)}}async deleteCookie(t){try{document.cookie=`${t.key}=; Max-Age=0`}catch(e){return Promise.reject(e)}}async clearCookies(){try{const t=document.cookie.split(";")||[];for(const e of t)document.cookie=e.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(t){return Promise.reject(t)}}async clearAllCookies(){try{await this.clearCookies()}catch(t){return Promise.reject(t)}}}yl("CapacitorCookies",{web:()=>new Kw});const $w=async n=>new Promise((t,e)=>{const r=new FileReader;r.onload=()=>{const s=r.result;t(s.indexOf(",")>=0?s.split(",")[1]:s)},r.onerror=s=>e(s),r.readAsDataURL(n)}),Jw=(n={})=>{const t=Object.keys(n);return Object.keys(n).map(s=>s.toLocaleLowerCase()).reduce((s,a,l)=>(s[a]=n[t[l]],s),{})},Qw=(n,t=!0)=>n?Object.entries(n).reduce((r,s)=>{const[a,l]=s;let c,h;return Array.isArray(l)?(h="",l.forEach(f=>{c=t?encodeURIComponent(f):f,h+=`${a}=${c}&`}),h.slice(0,-1)):(c=t?encodeURIComponent(l):l,h=`${a}=${c}`),`${r}&${h}`},"").substr(1):null,tA=(n,t={})=>{const e=Object.assign({method:n.method||"GET",headers:n.headers},t),s=Jw(n.headers)["content-type"]||"";if(typeof n.data=="string")e.body=n.data;else if(s.includes("application/x-www-form-urlencoded")){const a=new URLSearchParams;for(const[l,c]of Object.entries(n.data||{}))a.set(l,c);e.body=a.toString()}else if(s.includes("multipart/form-data")||n.data instanceof FormData){const a=new FormData;if(n.data instanceof FormData)n.data.forEach((c,h)=>{a.append(h,c)});else for(const c of Object.keys(n.data))a.append(c,n.data[c]);e.body=a;const l=new Headers(e.headers);l.delete("content-type"),e.headers=l}else(s.includes("application/json")||typeof n.data=="object")&&(e.body=JSON.stringify(n.data));return e};class eA extends m_{async request(t){const e=tA(t,t.webFetchExtra),r=Qw(t.params,t.shouldEncodeUrlParams),s=r?`${t.url}?${r}`:t.url,a=await fetch(s,e),l=a.headers.get("content-type")||"";let{responseType:c="text"}=a.ok?t:{};l.includes("application/json")&&(c="json");let h,f;switch(c){case"arraybuffer":case"blob":f=await a.blob(),h=await $w(f);break;case"json":h=await a.json();break;case"document":case"text":default:h=await a.text()}const d={};return a.headers.forEach((p,_)=>{d[_]=p}),{data:h,headers:d,status:a.status,url:a.url}}async get(t){return this.request(Object.assign(Object.assign({},t),{method:"GET"}))}async post(t){return this.request(Object.assign(Object.assign({},t),{method:"POST"}))}async put(t){return this.request(Object.assign(Object.assign({},t),{method:"PUT"}))}async patch(t){return this.request(Object.assign(Object.assign({},t),{method:"PATCH"}))}async delete(t){return this.request(Object.assign(Object.assign({},t),{method:"DELETE"}))}}yl("CapacitorHttp",{web:()=>new eA});const nA="modulepreload",iA=function(n){return"/"+n},hp={},__=function(t,e,r){let s=Promise.resolve();if(e&&e.length>0){let h=function(f){return Promise.all(f.map(d=>Promise.resolve(d).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");s=h(e.map(f=>{if(f=iA(f),f in hp)return;hp[f]=!0;const d=f.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${p}`))return;const _=document.createElement("link");if(_.rel=d?"stylesheet":nA,d||(_.as="script"),_.crossOrigin="",_.href=f,c&&_.setAttribute("nonce",c),document.head.appendChild(_),d)return new Promise((g,M)=>{_.addEventListener("load",g),_.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${f}`)))})}))}function a(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return s.then(l=>{for(const c of l||[])c.status==="rejected"&&a(c.reason);return t().catch(a)})};function rA(n){n.CapacitorUtils.Synapse=new Proxy({},{get(t,e){return new Proxy({},{get(r,s){return(a,l,c)=>{const h=n.Capacitor.Plugins[e];if(h===void 0){c(new Error(`Capacitor plugin ${e} not found`));return}if(typeof h[s]!="function"){c(new Error(`Method ${s} not found in Capacitor plugin ${e}`));return}(async()=>{try{const f=await h[s](a);l(f)}catch(f){c(f)}})()}}})}})}function sA(n){n.CapacitorUtils.Synapse=new Proxy({},{get(t,e){return n.cordova.plugins[e]}})}function oA(n=!1){typeof window>"u"||(window.CapacitorUtils=window.CapacitorUtils||{},window.Capacitor!==void 0&&!n?rA(window):window.cordova!==void 0&&sA(window))}const aA=yl("Geolocation",{web:()=>__(()=>import("./web-CaPXbBCS.js"),[]).then(n=>new n.GeolocationWeb)});oA();const lA=yl("Device",{web:()=>__(()=>import("./web-DrB3Dx64.js"),[]).then(n=>new n.DeviceWeb)});async function Oo(){const n=el.getPlatform(),t=await lA.getInfo().catch(()=>null),e=await aA.getCurrentPosition({enableHighAccuracy:!0,maximumAge:0});return console.log(e),{ok:!0,source:"capacitor",platform:n,coords:e.coords,accuracy:e.coords?.accuracy??null,timestamp:e.timestamp??Date.now(),device:t}}document.getElementById("Pos")?.addEventListener("click",()=>{Oo().then(n=>{console.log("Geo Capacitor position obtenue",n)}).catch(n=>{console.error("Exception getPosition:",n)})});const cA=46.22543,uA=7.3698,hA={name:"Map",data(){return{center:[cA,uA],zoom:17,map:null,userMarker:null,watchIntervalId:null}},mounted(){try{this.map=Fc.map(this.$refs.mapElement,{zoomControl:!1,dragging:!1,scrollWheelZoom:!1,touchZoom:!1,doubleClickZoom:!1,boxZoom:!1,keyboard:!1}).setView(this.center,this.zoom),Fc.tileLayer("https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-grau/default/current/3857/{z}/{x}/{y}.jpeg",{maxZoom:20,attribution:"© swisstopo (pixelkarte-grau)"}).addTo(this.map),this.userMarker=Fc.marker(this.center).addTo(this.map),this.startUserTracking()}catch(n){console.error("Erreur lors de l’init Leaflet :",n)}},beforeUnmount(){this.watchIntervalId&&(clearInterval(this.watchIntervalId),this.watchIntervalId=null)},methods:{async updateUserPosition(){try{const n=await Oo();if(!n?.ok||!n.coords)return;const{latitude:t,longitude:e}=n.coords,r=[t,e];this.center=r,console.log(`Nouvelle position utilisateur : ${r}`),this.userMarker&&this.userMarker.setLatLng(r),this.map&&this.map.panTo(r)}catch(n){console.error("Erreur lors de la récupération de la position :",n)}},startUserTracking(){this.updateUserPosition(),this.watchIntervalId=setInterval(()=>{this.updateUserPosition()},1e4)}}},fA={class:"map-container"},dA={ref:"mapElement",class:"leaflet-map"};function pA(n,t,e,r,s,a){return Xe(),vn("div",fA,[le("div",dA,null,512)])}const mA=di(hA,[["render",pA],["__scopeId","data-v-0c4f78a1"]]),_A={name:"SidePanel",props:{open:{type:Boolean,default:!1}}},gA={class:"sidepanel"},vA={class:"sidepanel-header"};function xA(n,t,e,r,s,a){return e.open?(Xe(),vn("div",{key:0,class:"sidepanel-overlay",onClick:t[1]||(t[1]=Nx(l=>n.$emit("close"),["self"]))},[le("div",gA,[le("div",vA,[t[2]||(t[2]=le("h2",null,"Menu",-1)),le("button",{class:"close-btn",onClick:t[0]||(t[0]=l=>n.$emit("close"))},"×")]),t[3]||(t[3]=le("div",{class:"sidepanel-content"},[le("p",null,"Contenu du panneau latéral.")],-1))])])):wo("",!0)}const yA=di(_A,[["render",xA],["__scopeId","data-v-d8f2bdd2"]]),MA={name:"Popup",props:{open:{type:Boolean,default:!1}}},SA={key:0,class:"popup-overlay"},EA={class:"popup-box"},bA={class:"popup-content"};function TA(n,t,e,r,s,a){return e.open?(Xe(),vn("div",SA,[le("div",EA,[le("div",bA,[Sv(n.$slots,"default",{},()=>[t[1]||(t[1]=le("p",null,[Or(" Bienvenue sur l’application AR."),le("br"),le("br"),Or(" Pour une expérience optimale, veuillez calibrer votre appareil en suivant les instructions."),le("br"),le("br"),Or(' Appuyez sur "Calibrer" pour commencer. ')],-1))])]),le("button",{class:"popup-button",onClick:t[0]||(t[0]=l=>n.$emit("close"))}," Calibrer ")])])):wo("",!0)}const wA=di(MA,[["render",TA],["__scopeId","data-v-adcdc918"]]);function Fn(n){const e=`[${new Date().toISOString()}] ${n}`;console.log(e)}let Ur=6378137,AA=1/298.257222101,fp=Ur-Ur*AA,ms=Math.sqrt(Ur*Ur-fp*fp)/Ur;function lo(n,t,e){const r=n*Math.PI/180,s=t*Math.PI/180,a=Ur/Math.sqrt(1-ms**2*Math.sin(s)**2),l=(a+e)*Math.cos(s)*Math.cos(r),c=(a+e)*Math.cos(s)*Math.sin(r),h=(a*(1-ms**2)+e)*Math.sin(s);return{x:l,y:c,z:h}}function PA(n,t,e){let r=Math.atan2(t,n),s=0,a=1,l=1,c=0;for(;Math.abs(s-a)>1e-6;)a=s,c=Math.atan2(e,Math.sqrt(n*n+t*t)*(1-l/(l+s)*ms*ms)),l=Ur/Math.sqrt(1-ms*ms*Math.sin(c)*Math.sin(c)),s=Math.sqrt(n*n+t*t)/Math.cos(c)-l;let h=c*180/Math.PI,f=r*180/Math.PI;return{lat_transfo:h,lon_transfo:f,h_transfo:s}}function CA(n,t,e,r){const s=lo(n.lon,n.lat,n.h),a=lo(t.lon,t.lat,t.h),l=lo(e.lon,e.lat,e.h),c=lo(r.lon,r.lat,r.h),{x:h,y:f}=s,{x:d,y:p}=a,{x:_,y:g}=l,{x:M,y:E}=c,y=d-h,v=p-f,D=M-_,I=E-g,A=Math.hypot(D,I),V=Math.hypot(y,v),N=A/V,B=Math.atan2(v,y),R=Math.atan2(I,D)-B,P=Math.cos(R),F=Math.sin(R),$=_-N*(P*h-F*f),Y=g-N*(F*h+P*f);return{tx:$,ty:Y,k:N,thetaRad:R}}function RA(n,t,e,r,s,a){const l=s*Math.cos(a),c=s*Math.sin(a),h=n+l*e-c*r,f=t+c*e+l*r;return{x_transfo:h,y_transfo:f}}function dp(n,t,e,r){const{x:s,y:a,z:l}=lo(t,n,e),{tx:c,ty:h,k:f,thetaRad:d}=r,{x_transfo:p,y_transfo:_}=RA(c,h,s,a,f,d),{lat_transfo:g,lon_transfo:M,h_transfo:E}=PA(p,_,l);return{lat_transfo:g,lon_transfo:M,h_transfo:E}}const LA=on.latPF1,IA=on.lonPF1,DA=on.latPF2,OA=on.lonPF2;function Pa(n){return n*Math.PI/180}function UA(n,t,e,r){const a=Pa(t-r),l=Pa(n-e),c=Math.sin(l/2)*Math.sin(l/2)+Math.cos(Pa(e))*Math.cos(Pa(n))*(Math.sin(a/2)*Math.sin(a/2));return 2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c))*6371e3}function Ts(n){return n.length?n.reduce((t,e)=>t+e,0)/n.length:0}function yo(n){const t=Ts(n),e=n.length?n.reduce((r,s)=>r+(s-t)**2,0)/n.length:0;return Math.sqrt(e)}function NA(n){return new Promise(t=>setTimeout(t,n))}function FA(n,t=2.5){if(!n.length)return[];const e=n.map(h=>h.lat),r=n.map(h=>h.lon),s=Ts(e),a=yo(e),l=Ts(r),c=yo(r);return a===0&&c===0?n.slice():n.filter(h=>{const f=a===0?0:Math.abs((h.lat-s)/a),d=c===0?0:Math.abs((h.lon-l)/c);return f<=t&&d<=t})}async function BA(n,t,{onStart:e,onEnd:r}={}){e?.();const h=Date.now(),f=[];try{try{window?.locar?.stopGps?.()}catch{}for(;Date.now()-h<5e3||f.length<10;){try{console.log(Date.now()-h);const H=await Oo(),R=H?.coords?.latitude,P=H?.coords?.longitude,F=H?.coords?.altitude;console.log("getPosition result:",R,P),H?.ok&&R!=null&&P!=null&&F!=null&&f.push({lat:R,lon:P,h:F})}catch{}await NA(500)}if(!f.length)throw new Error("Aucun échantillon reçu pendant la calibration.");const d=FA(f,2.5),p=f.length-d.length,_=Ts(d.map(H=>H.lat)),g=Ts(d.map(H=>H.lon)),M=d.map(H=>H.h).filter(H=>H!=null),E=Ts(M),y=yo(M),v=t-_,D=n-g,I=d.map(H=>t-H.lat-v),A=d.map(H=>n-H.lon-D),V=yo(I),N=yo(A),B=UA(t,n,_,g);return Fn(`Calibration: ${f.length} échantillons (−${p} outliers, thr=${2.5})`),{avgDeltaDeg:{dLat:v,dLon:D},dHaversine:B,avgAltitude:E,stats:{samplesTotal:f.length,samplesUsed:d.length,zThreshold:2.5,latMeasuredMean:_,lonMeasuredMean:g,latResidualStdDeg:V,lonResidualStdDeg:N,altitudesInliersCount:M.length,altitudeMean:E,altitudeStd:y}}}finally{r?.()}}let g_=!1;function zA(){g_=!0}let Vu=null,Gu=null,Wu=null,Xu=null,Zu=null,qu=null,pp=null,mp=null,Ca=null;async function _p(n,t,e,r={}){const{onStart:s,onEnd:a}=r;console.log(`Calibration ${n} démarrée`),alert(`Calibration sur ${n} en cours… Restez immobile ~5 s.`);try{const l=await BA(t,e,{onStart:s,onEnd:a});pp=l.avgDeltaDeg.dLat,mp=l.avgDeltaDeg.dLon,n==="Point 1"?(Vu=l.stats.lonMeasuredMean,Gu=l.stats.latMeasuredMean,Wu=l.avgAltitude):n==="Point 2"&&(Xu=l.stats.lonMeasuredMean,Zu=l.stats.latMeasuredMean,qu=l.avgAltitude);const c=`≈ distance [m] ${l.dHaversine.toFixed(2)}`,h=`Δlat ${pp.toFixed(8)}°, Δlon ${mp.toFixed(8)}°`,f=`σ: lat ${l.stats.latResidualStdDeg.toExponential(2)}°, lon ${l.stats.lonResidualStdDeg.toExponential(2)}°  | utilisés: ${l.stats.samplesUsed}/${l.stats.samplesTotal}`;return Fn?.(`✅ Calibration sur ${n} OK
${h}
${c}
${f}`),alert(`Calibration sur ${n} OK.
${c}`),n==="Point 2"&&zA(),l}catch(l){throw Fn?.(`❌ Calibration ${n} échouée: ${l?.message||l}`),alert(`Calibration échouée: ${l?.message||l}`),l}}const kA=1e3;let zc=!1,kc=null;async function HA(){if(Vu==null||Gu==null||Xu==null||Zu==null){alert(`⚠️ Impossible de démarrer la Fake GPS.
Veuillez d'abord calibrer les points 1 et 2.`),Fn?.("❌ Fake GPS bloquée : calibration PF1 et PF2 incomplète.");return}let n={lon:Vu,lat:Gu,h:Wu},t={lon:IA,lat:LA,h:Wu},e={lon:Xu,lat:Zu,h:qu},r={lon:OA,lat:DA,h:qu};try{Ca=CA(n,e,t,r),Fn?.("🔧 Paramètres Helmert calculés avec succès.")}catch(a){alert("⚠️ Erreur lors du calcul Helmert : "+(a.message||a)),Fn?.("❌ Calcul Helmert échoué : "+(a.message||a));return}kc&&clearInterval(kc),zc=!1;try{window?.locar?.stopGps?.()}catch{}let s;try{s=await Oo()}catch(a){Fn(`❌ getPosition exception: ${a?.message||a}`);return}if(!s?.ok||!s.coords){Fn(`❌ getPosition a échoué: ${s?.error?.code||"UNKNOWN"}`);return}console.log(s),console.log(s.coords.latitude),console.log(s.coords.longitude),console.log(s.coords.altitude),console.log(Ca);try{const a=dp(s.coords.latitude,s.coords.longitude,s.coords.altitude,Ca);console.log(a),window?.locar?.fakeGps?.(a.lon_transfo,a.lat_transfo),Fn(`🚀 Fake GPS LIVE démarrée (lon: ${a.lon_transfo.toFixed(6)}, lat: ${a.lat_transfo.toFixed(6)})`)}catch(a){Fn(`⚠️ Impossible d'initialiser la fake GPS : ${a.message||a}`)}zc=!0,kc=setInterval(async()=>{if(zc)try{const a=await Oo();if(!a?.ok||!a.coords)return;const l=dp(a.coords.latitude,a.coords.longitude,a.coords.altitude,Ca);window?.locar?.fakeGps?.(l.lon_transfo,l.lat_transfo),Fn(`📍 Fake GPS LIVE → lon: ${l.lon_transfo.toFixed(6)}, lat: ${l.lat_transfo.toFixed(6)}`)}catch(a){Fn(`⚠️ Erreur tick fake GPS: ${a?.message||a}`)}},kA)}const VA={name:"Home",components:{ARView:p_,TopRightButtons:Vw,Map:mA,SidePanel:yA,Popup:wA},data(){return{isSidePanelOpen:!1,showPopup:!1}},mounted(){const n=this.$refs.arView?.arInstance;n&&(console.log("Affichage automatique de la sphère sur Home"),n.showSphere()),sessionStorage.getItem("welcomeShown")||(this.showPopup=!0),this.$nextTick(async()=>{if(g_)try{await HA()}catch(e){console.error("Erreur lors du démarrage de la fake GPS :",e)}})},methods:{attributs(){this.isSidePanelOpen=!this.isSidePanelOpen},feedback(){this.$router.push("/feedback")},closeSidePanel(){this.isSidePanelOpen=!1},closePopup(){this.showPopup=!1,sessionStorage.setItem("welcomeShown","1"),this.$router.push("/calibration")}}},GA={class:"home-root"};function WA(n,t,e,r,s,a){const l=ir("ARView"),c=ir("TopRightButtons"),h=ir("Map"),f=ir("SidePanel"),d=ir("Popup");return Xe(),vn("div",GA,[Fe(l,{ref:"arView"},null,512),Fe(c,{onAttributs:a.attributs,onFeedback:a.feedback},null,8,["onAttributs","onFeedback"]),Fe(h),Fe(f,{open:s.isSidePanelOpen,onClose:a.closeSidePanel},null,8,["open","onClose"]),Fe(d,{open:s.showPopup,onClose:a.closePopup},null,8,["open","onClose"])])}const XA=di(VA,[["render",WA]]),ZA={name:"DebugConsole",props:{visible:{type:Boolean,default:!0}},data(){return{messages:[]}},mounted(){const n=console.log;console.log=(...t)=>{this.messages.push(t.join(" ")),n.apply(console,t),this.messages.length>20&&this.messages.shift()}}},qA={key:0,class:"debug-console"},YA={class:"logs"};function jA(n,t,e,r,s,a){return e.visible?(Xe(),vn("div",qA,[le("div",YA,[(Xe(!0),vn(Cn,null,Mv(s.messages,(l,c)=>(Xe(),vn("div",{key:c},eh(l),1))),128))])])):wo("",!0)}const KA=di(ZA,[["render",jA],["__scopeId","data-v-b521d916"]]),$A={name:"Calibration",components:{ARView:p_,DebugConsole:KA},data(){return{step:1,isMeasuring:!1}},computed:{buttonLabel(){return this.step<3?"Mesurer":"Appliquer"}},mounted(){const n=this.$refs.arView?.arInstance;n&&(console.log("Affichage automatique de nav_pf1 pour calibration"),n.showArrowPf1())},methods:{async nextStep(){const n=this.$refs.arView?.arInstance;if(this.step===1){await _p("Point 1",on.lonPF1,on.latPF1,{onStart:()=>{this.isMeasuring=!0},onEnd:()=>{this.isMeasuring=!1}}),n?.showArrowPf2(),this.step=2;return}if(this.step===2){await _p("Point 2",on.lonPF2,on.latPF2,{onStart:()=>{this.isMeasuring=!0},onEnd:()=>{this.isMeasuring=!1}}),this.step=3;return}this.step===3&&this.$router.push("/")}}},JA={class:"calibration-root"},QA={key:0,class:"loading-overlay"},tP={class:"bottom-overlay"},eP={class:"calibration-footer"},nP={class:"calibration-instructions"},iP={key:0},rP={key:1},sP={key:2};function oP(n,t,e,r,s,a){const l=ir("ARView"),c=ir("DebugConsole");return Xe(),vn("div",JA,[Fe(l,{ref:"arView"},null,512),s.isMeasuring?(Xe(),vn("div",QA,[...t[1]||(t[1]=[le("div",{class:"spinner"},null,-1),le("p",null,"Mesure en cours… ne bougez pas",-1)])])):wo("",!0),t[5]||(t[5]=le("header",{class:"calibration-header"},[le("h1",null,"Calibration")],-1)),le("div",tP,[Fe(c,{visible:!0}),le("footer",eP,[le("div",nP,[s.step===1?(Xe(),vn("p",iP,[...t[2]||(t[2]=[le("b",null,"Étape 1",-1),Or(' - Placer vous sur le point au sol situé au niveau de la flèche et cliquer sur "Mesurer". ',-1),le("b",null,"Rester immobile.",-1)])])):s.step===2?(Xe(),vn("p",rP,[...t[3]||(t[3]=[le("b",null,"Étape 2",-1),Or(' - Placer vous sur le point au sol situé au niveau de la flèche et cliquer sur "Mesurer". ',-1),le("b",null,"Rester immobile.",-1)])])):s.step===3?(Xe(),vn("p",sP,[...t[4]||(t[4]=[le("b",null,"Étape 3",-1),Or(' - Cliquer sur "Appliquer" pour terminer la calibration. ',-1)])])):wo("",!0)]),le("button",{class:"calibration-btn",onClick:t[0]||(t[0]=(...h)=>a.nextStep&&a.nextStep(...h))},eh(a.buttonLabel),1)])])])}const aP=di($A,[["render",oP],["__scopeId","data-v-af6f3d7c"]]),lP={name:"Feedback",data(){return{text:""}},methods:{submitFeedback(){console.log("Feedback : ",this.text),alert("Merci pour votre feedback !"),this.text=""},goBack(){this.$router.push("/")}}},cP={class:"feedback-root"},uP={class:"feedback-header"},hP={class:"feedback-content"},fP={class:"feedback-footer"};function dP(n,t,e,r,s,a){return Xe(),vn("div",cP,[le("header",uP,[le("button",{class:"back-button",onClick:t[0]||(t[0]=(...l)=>a.goBack&&a.goBack(...l))},"←"),t[3]||(t[3]=le("h1",null,"Feedback",-1)),t[4]||(t[4]=le("div",{class:"header-placeholder"},null,-1))]),le("div",hP,[nv(le("textarea",{"onUpdate:modelValue":t[1]||(t[1]=l=>s.text=l),class:"feedback-textarea",placeholder:"Votre avis sur l'expérience AR..."},null,512),[[Dx,s.text]])]),le("footer",fP,[le("button",{class:"send-btn",onClick:t[2]||(t[2]=(...l)=>a.submitFeedback&&a.submitFeedback(...l))},"Submit")])])}const pP=di(lP,[["render",dP],["__scopeId","data-v-e7f70265"]]),mP=[{path:"/",name:"Home",component:XA},{path:"/calibration",name:"Calibration",component:aP},{path:"/feedback",name:"Feedback",component:pP}],_P=K0({history:P0(),routes:mP}),v_=zx(Wx);v_.use(_P);v_.mount("#app");export{m_ as W};

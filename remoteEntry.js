var k={6650:(i,d,l)=>{var s={"./DashboardModule":()=>l.e(970).then(()=>()=>l(5970))},b=(f,w)=>(l.R=w,w=l.o(s,f)?s[f]():Promise.resolve().then(()=>{throw new Error('Module "'+f+'" does not exist in container.')}),l.R=void 0,w),p=(f,w)=>{if(l.S){var h="default",x=l.S[h];if(x&&x!==f)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return l.S[h]=f,l.I(h,w)}};l.d(d,{get:()=>b,init:()=>p})}},$={};function n(i){var d=$[i];if(void 0!==d)return d.exports;var l=$[i]={exports:{}};return k[i](l,l.exports,n),l.exports}n.m=k,n.c=$,n.d=(i,d)=>{for(var l in d)n.o(d,l)&&!n.o(i,l)&&Object.defineProperty(i,l,{enumerable:!0,get:d[l]})},n.f={},n.e=i=>Promise.all(Object.keys(n.f).reduce((d,l)=>(n.f[l](i,d),d),[])),n.u=i=>i+"."+{181:"73b521ff611592a8",255:"eed5018d1fd12f13",284:"21c1d1c20bd4846f",481:"1d24885709ccf2ee",511:"fd59fd1e640715bc",559:"2e51049ce7ca9e29",650:"c01424e85a1c7f78",793:"94ffcd4135e6e23f",895:"75153a5a0f93f3c8",970:"1a738cd7d132733f"}[i]+".js",n.miniCssF=i=>{},n.o=(i,d)=>Object.prototype.hasOwnProperty.call(i,d),(()=>{var i={},d="dashboard:";n.l=(l,s,b,p)=>{if(i[l])i[l].push(s);else{var f,w;if(void 0!==b)for(var h=document.getElementsByTagName("script"),x=0;x<h.length;x++){var g=h[x];if(g.getAttribute("src")==l||g.getAttribute("data-webpack")==d+b){f=g;break}}f||(w=!0,(f=document.createElement("script")).type="module",f.charset="utf-8",f.timeout=120,n.nc&&f.setAttribute("nonce",n.nc),f.setAttribute("data-webpack",d+b),f.src=n.tu(l)),i[l]=[s];var m=(E,V)=>{f.onerror=f.onload=null,clearTimeout(y);var S=i[l];if(delete i[l],f.parentNode&&f.parentNode.removeChild(f),S&&S.forEach(c=>c(V)),E)return E(V)},y=setTimeout(m.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=m.bind(null,f.onerror),f.onload=m.bind(null,f.onload),w&&document.head.appendChild(f)}}})(),n.r=i=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},(()=>{n.S={};var i={},d={};n.I=(l,s)=>{s||(s=[]);var b=d[l];if(b||(b=d[l]={}),!(s.indexOf(b)>=0)){if(s.push(b),i[l])return i[l];n.o(n.S,l)||(n.S[l]={});var p=n.S[l],w="dashboard",h=(m,y,E,V)=>{var S=p[m]=p[m]||{},c=S[y];(!c||!c.loaded&&(!V!=!c.eager?V:w>c.from))&&(S[y]={get:E,from:w,eager:!!V})},g=[];return"default"===l&&(h("@angular/common","15.2.0",()=>n.e(895).then(()=>()=>n(6895))),h("@angular/core","15.2.0",()=>n.e(650).then(()=>()=>n(4650))),h("@angular/platform-browser","15.2.0",()=>n.e(255).then(()=>()=>n(1481))),h("@angular/router","15.2.0",()=>n.e(511).then(()=>()=>n(4793))),h("rxjs/operators","7.8.0",()=>n.e(559).then(()=>()=>n(7559))),h("rxjs","7.8.0",()=>n.e(284).then(()=>()=>n(7284)))),i[l]=g.length?Promise.all(g).then(()=>i[l]=1):1}}})(),(()=>{var i;n.tt=()=>(void 0===i&&(i={createScriptURL:d=>d},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(i=trustedTypes.createPolicy("angular#bundler",i))),i)})(),n.tu=i=>n.tt().createScriptURL(i),(()=>{var i;if("string"==typeof import.meta.url&&(i=import.meta.url),!i)throw new Error("Automatic publicPath is not supported in this browser");i=i.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=i})(),(()=>{var i=e=>{var t=o=>o.split(".").map(u=>+u==u?+u:u),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=r[1]?t(r[1]):[];return r[2]&&(a.length++,a.push.apply(a,t(r[2]))),r[3]&&(a.push([]),a.push.apply(a,t(r[3]))),a},l=e=>{var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var a=1,o=1;o<e.length;o++)a--,r+="u"==(typeof(v=e[o]))[0]?"-":(a>0?".":"")+(a=2,v);return r}var u=[];for(o=1;o<e.length;o++){var v=e[o];u.push(0===v?"not("+C()+")":1===v?"("+C()+" || "+C()+")":2===v?u.pop()+" "+u.pop():l(v))}return C();function C(){return u.pop().replace(/^\((.+)\)$/,"$1")}},s=(e,t)=>{if(0 in e){t=i(t);var r=e[0],a=r<0;a&&(r=-r-1);for(var o=0,u=1,v=!0;;u++,o++){var C,T,j=u<e.length?(typeof e[u])[0]:"";if(o>=t.length||"o"==(T=(typeof(C=t[o]))[0]))return!v||("u"==j?u>r&&!a:""==j!=a);if("u"==T){if(!v||"u"!=j)return!1}else if(v)if(j==T)if(u<=r){if(C!=e[u])return!1}else{if(a?C>e[u]:C<e[u])return!1;C!=e[u]&&(v=!1)}else if("s"!=j&&"n"!=j){if(a||u<=r)return!1;v=!1,u--}else{if(u<=r||T<j!=a)return!1;v=!1}else"s"!=j&&"n"!=j&&(v=!1,u--)}}var F=[],M=F.pop.bind(F);for(o=1;o<e.length;o++){var A=e[o];F.push(1==A?M()|M():2==A?M()&M():A?s(A,t):!M())}return!!M()},f=(e,t)=>{var r=e[t];return Object.keys(r).reduce((a,o)=>!a||!r[a].loaded&&((e,t)=>{e=i(e),t=i(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var a=e[r],o=(typeof a)[0];if(r>=t.length)return"u"==o;var u=t[r],v=(typeof u)[0];if(o!=v)return"o"==o&&"n"==v||"s"==v||"u"==o;if("o"!=o&&"u"!=o&&a!=u)return a<u;r++}})(a,o)?o:a,0)},g=(e,t,r,a)=>{var o=f(e,r);if(!s(a,o))throw new Error(((e,t,r,a)=>"Unsatisfied version "+r+" from "+(r&&e[t][r].from)+" of shared singleton module "+t+" (required "+l(a)+")")(e,r,o,a));return S(e[r][o])},S=e=>(e.loaded=1,e.get()),P=(e=>function(t,r,a,o){var u=n.I(t);return u&&u.then?u.then(e.bind(e,t,n.S[t],r,a,o)):e(t,n.S[t],r,a,o)})((e,t,r,a,o)=>t&&n.o(t,r)?g(t,0,r,a):o()),O={},z={4888:()=>P("default","@angular/common",[1,15,2,0],()=>n.e(181).then(()=>()=>n(6895))),140:()=>P("default","@angular/router",[1,15,2,0],()=>n.e(793).then(()=>()=>n(4793))),5760:()=>P("default","@angular/core",[1,15,2,0],()=>n.e(650).then(()=>()=>n(4650))),3635:()=>P("default","rxjs",[2,7,8,0],()=>n.e(284).then(()=>()=>n(7284))),5893:()=>P("default","rxjs/operators",[2,7,8,0],()=>n.e(559).then(()=>()=>n(7559))),7783:()=>P("default","@angular/platform-browser",[1,15,2,0],()=>n.e(481).then(()=>()=>n(1481)))},L={255:[4888,5760],481:[4888],511:[3635,4888,5760,5893,7783],650:[3635,5893],793:[3635,4888,5893,7783],895:[5760],970:[4888,140,5760]};n.f.consumes=(e,t)=>{n.o(L,e)&&L[e].forEach(r=>{if(n.o(O,r))return t.push(O[r]);var a=v=>{O[r]=0,n.m[r]=C=>{delete n.c[r],C.exports=v()}},o=v=>{delete O[r],n.m[r]=C=>{throw delete n.c[r],v}};try{var u=z[r]();u.then?t.push(O[r]=u.then(a).catch(o)):a(u)}catch(v){o(v)}})}})(),(()=>{var i={966:0};n.f.j=(s,b)=>{var p=n.o(i,s)?i[s]:void 0;if(0!==p)if(p)b.push(p[2]);else{var f=new Promise((g,m)=>p=i[s]=[g,m]);b.push(p[2]=f);var w=n.p+n.u(s),h=new Error;n.l(w,g=>{if(n.o(i,s)&&(0!==(p=i[s])&&(i[s]=void 0),p)){var m=g&&("load"===g.type?"missing":g.type),y=g&&g.target&&g.target.src;h.message="Loading chunk "+s+" failed.\n("+m+": "+y+")",h.name="ChunkLoadError",h.type=m,h.request=y,p[1](h)}},"chunk-"+s,s)}};var d=(s,b)=>{var h,x,[p,f,w]=b,g=0;if(p.some(y=>0!==i[y])){for(h in f)n.o(f,h)&&(n.m[h]=f[h]);w&&w(n)}for(s&&s(b);g<p.length;g++)n.o(i,x=p[g])&&i[x]&&i[x][0](),i[x]=0},l=self.webpackChunkdashboard=self.webpackChunkdashboard||[];l.forEach(d.bind(null,0)),l.push=d.bind(null,l.push.bind(l))})();var U=n(6650),D=U.get,R=U.init;export{D as get,R as init};
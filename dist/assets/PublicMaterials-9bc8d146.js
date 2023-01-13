import{b as V,f as $,d as O,x as R,V as ke,C as te,a as y,c as E,n as m,u as e,g as T,a3 as M,e as L,k as K,a1 as w,h as D,w as S,j as $e,m as ue,Y as C,aj as X,r as z,F as _e,N as we,ag as ce,af as A,M as F,b5 as Ee,a4 as Se,i as Ce,aV as G,b6 as Pe,z as se,ai as Re,A as Le,p as Fe,J as Ue,aZ as ae,s as oe}from"./index-9fb13fa0.js";import{u as Te,r as De,E as Oe}from"./overlay-6e231339.js";import{u as q,R as Be,S as de,v as Ne,U as pe,N as fe,E as I,_ as H,m as Q,W as Ie,X as je,Y as Me,Z as Ae,$ as qe}from"./index-48917f75.js";import{t as ee,i as ve,d as Ve}from"./focus-trap-358cd878.js";import{_ as We}from"./_plugin-vue_export-helper-c27b6911.js";const me=Symbol("uploadContextKey"),ze=V({type:{type:String,default:"line",values:["line","circle","dashboard"]},percentage:{type:Number,default:0,validator:o=>o>=0&&o<=100},status:{type:String,default:"",values:["","success","exception","warning"]},indeterminate:{type:Boolean,default:!1},duration:{type:Number,default:3},strokeWidth:{type:Number,default:6},strokeLinecap:{type:$(String),default:"round"},textInside:{type:Boolean,default:!1},width:{type:Number,default:126},showText:{type:Boolean,default:!0},color:{type:$([String,Array,Function]),default:""},format:{type:$(Function),default:o=>`${o}%`}}),He=["aria-valuenow"],Ke={viewBox:"0 0 100 100"},Xe=["d","stroke","stroke-width"],Je=["d","stroke","opacity","stroke-linecap","stroke-width"],Ye={key:0},Ze=O({name:"ElProgress"}),Ge=O({...Ze,props:ze,setup(o){const t=o,n={success:"#13ce66",exception:"#ff4949",warning:"#e6a23c",default:"#20a0ff"},a=q("progress"),f=R(()=>({width:`${t.percentage}%`,animationDuration:`${t.duration}s`,backgroundColor:j(t.percentage)})),p=R(()=>(t.strokeWidth/t.width*100).toFixed(1)),v=R(()=>["circle","dashboard"].includes(t.type)?Number.parseInt(`${50-Number.parseFloat(p.value)/2}`,10):0),k=R(()=>{const l=v.value,U=t.type==="dashboard";return`
          M 50 50
          m 0 ${U?"":"-"}${l}
          a ${l} ${l} 0 1 1 0 ${U?"-":""}${l*2}
          a ${l} ${l} 0 1 1 0 ${U?"":"-"}${l*2}
          `}),h=R(()=>2*Math.PI*v.value),c=R(()=>t.type==="dashboard"?.75:1),_=R(()=>`${-1*h.value*(1-c.value)/2}px`),g=R(()=>({strokeDasharray:`${h.value*c.value}px, ${h.value}px`,strokeDashoffset:_.value})),r=R(()=>({strokeDasharray:`${h.value*c.value*(t.percentage/100)}px, ${h.value}px`,strokeDashoffset:_.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"})),u=R(()=>{let l;return t.color?l=j(t.percentage):l=n[t.status]||n.default,l}),s=R(()=>t.status==="warning"?Be:t.type==="line"?t.status==="success"?de:Ne:t.status==="success"?pe:fe),d=R(()=>t.type==="line"?12+t.strokeWidth*.4:t.width*.111111+2),b=R(()=>t.format(t.percentage));function i(l){const U=100/l.length;return l.map((P,N)=>te(P)?{color:P,percentage:(N+1)*U}:P).sort((P,N)=>P.percentage-N.percentage)}const j=l=>{var U;const{color:B}=t;if(ke(B))return B(l);if(te(B))return B;{const P=i(B);for(const N of P)if(N.percentage>l)return N.color;return(U=P[P.length-1])==null?void 0:U.color}};return(l,U)=>(y(),E("div",{class:m([e(a).b(),e(a).m(l.type),e(a).is(l.status),{[e(a).m("without-text")]:!l.showText,[e(a).m("text-inside")]:l.textInside}]),role:"progressbar","aria-valuenow":l.percentage,"aria-valuemin":"0","aria-valuemax":"100"},[l.type==="line"?(y(),E("div",{key:0,class:m(e(a).b("bar"))},[T("div",{class:m(e(a).be("bar","outer")),style:M({height:`${l.strokeWidth}px`})},[T("div",{class:m([e(a).be("bar","inner"),{[e(a).bem("bar","inner","indeterminate")]:l.indeterminate}]),style:M(e(f))},[(l.showText||l.$slots.default)&&l.textInside?(y(),E("div",{key:0,class:m(e(a).be("bar","innerText"))},[L(l.$slots,"default",{percentage:l.percentage},()=>[T("span",null,K(e(b)),1)])],2)):w("v-if",!0)],6)],6)],2)):(y(),E("div",{key:1,class:m(e(a).b("circle")),style:M({height:`${l.width}px`,width:`${l.width}px`})},[(y(),E("svg",Ke,[T("path",{class:m(e(a).be("circle","track")),d:e(k),stroke:`var(${e(a).cssVarName("fill-color-light")}, #e5e9f2)`,"stroke-width":e(p),fill:"none",style:M(e(g))},null,14,Xe),T("path",{class:m(e(a).be("circle","path")),d:e(k),stroke:e(u),fill:"none",opacity:l.percentage?1:0,"stroke-linecap":l.strokeLinecap,"stroke-width":e(p),style:M(e(r))},null,14,Je)]))],6)),(l.showText||l.$slots.default)&&!l.textInside?(y(),E("div",{key:2,class:m(e(a).e("text")),style:M({fontSize:`${e(d)}px`})},[L(l.$slots,"default",{percentage:l.percentage},()=>[l.status?(y(),D(e(I),{key:1},{default:S(()=>[(y(),D($e(e(s))))]),_:1})):(y(),E("span",Ye,K(e(b)),1))])],6)):w("v-if",!0)],10,He))}});var Qe=H(Ge,[["__file","/home/runner/work/element-plus/element-plus/packages/components/progress/src/progress.vue"]]);const xe=ue(Qe),et="ElUpload";class tt extends Error{constructor(t,n,a,f){super(t),this.name="UploadAjaxError",this.status=n,this.method=a,this.url=f}}function ne(o,t,n){let a;return n.response?a=`${n.response.error||n.response}`:n.responseText?a=`${n.responseText}`:a=`fail to ${t.method} ${o} ${n.status}`,new tt(a,n.status,t.method,o)}function st(o){const t=o.responseText||o.response;if(!t)return t;try{return JSON.parse(t)}catch{return t}}const at=o=>{typeof XMLHttpRequest>"u"&&ee(et,"XMLHttpRequest is undefined");const t=new XMLHttpRequest,n=o.action;t.upload&&t.upload.addEventListener("progress",p=>{const v=p;v.percent=p.total>0?p.loaded/p.total*100:0,o.onProgress(v)});const a=new FormData;if(o.data)for(const[p,v]of Object.entries(o.data))Array.isArray(v)?a.append(p,...v):a.append(p,v);a.append(o.filename,o.file,o.file.name),t.addEventListener("error",()=>{o.onError(ne(n,o,t))}),t.addEventListener("load",()=>{if(t.status<200||t.status>=300)return o.onError(ne(n,o,t));o.onSuccess(st(t))}),t.open(o.method,n,!0),o.withCredentials&&"withCredentials"in t&&(t.withCredentials=!0);const f=o.headers||{};if(f instanceof Headers)f.forEach((p,v)=>t.setRequestHeader(v,p));else for(const[p,v]of Object.entries(f))ve(v)||t.setRequestHeader(p,String(v));return t.send(a),t},ye=["text","picture","picture-card"];let ot=1;const x=()=>Date.now()+ot++,ge=V({action:{type:String,default:"#"},headers:{type:$(Object)},method:{type:String,default:"post"},data:{type:Object,default:()=>Q({})},multiple:{type:Boolean,default:!1},name:{type:String,default:"file"},drag:{type:Boolean,default:!1},withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:{type:String,default:""},type:{type:String,default:"select"},fileList:{type:$(Array),default:()=>Q([])},autoUpload:{type:Boolean,default:!0},listType:{type:String,values:ye,default:"text"},httpRequest:{type:$(Function),default:at},disabled:Boolean,limit:Number}),nt=V({...ge,beforeUpload:{type:$(Function),default:C},beforeRemove:{type:$(Function)},onRemove:{type:$(Function),default:C},onChange:{type:$(Function),default:C},onPreview:{type:$(Function),default:C},onSuccess:{type:$(Function),default:C},onProgress:{type:$(Function),default:C},onError:{type:$(Function),default:C},onExceed:{type:$(Function),default:C}}),rt=V({files:{type:$(Array),default:()=>Q([])},disabled:{type:Boolean,default:!1},handlePreview:{type:$(Function),default:C},listType:{type:String,values:ye,default:"text"}}),lt={remove:o=>!!o},it=["onKeydown"],ut=["src"],ct=["onClick"],dt=["onClick"],pt=["onClick"],ft=O({name:"ElUploadList"}),vt=O({...ft,props:rt,emits:lt,setup(o,{emit:t}){const{t:n}=Te(),a=q("upload"),f=q("icon"),p=q("list"),v=X(),k=z(!1),h=c=>{t("remove",c)};return(c,_)=>(y(),D(Ee,{tag:"ul",class:m([e(a).b("list"),e(a).bm("list",c.listType),e(a).is("disabled",e(v))]),name:e(p).b()},{default:S(()=>[(y(!0),E(_e,null,we(c.files,g=>(y(),E("li",{key:g.uid||g.name,class:m([e(a).be("list","item"),e(a).is(g.status),{focusing:k.value}]),tabindex:"0",onKeydown:ce(r=>!e(v)&&h(g),["delete"]),onFocus:_[0]||(_[0]=r=>k.value=!0),onBlur:_[1]||(_[1]=r=>k.value=!1),onClick:_[2]||(_[2]=r=>k.value=!1)},[L(c.$slots,"default",{file:g},()=>[c.listType==="picture"||g.status!=="uploading"&&c.listType==="picture-card"?(y(),E("img",{key:0,class:m(e(a).be("list","item-thumbnail")),src:g.url,alt:""},null,10,ut)):w("v-if",!0),g.status==="uploading"||c.listType!=="picture-card"?(y(),E("div",{key:1,class:m(e(a).be("list","item-info"))},[T("a",{class:m(e(a).be("list","item-name")),onClick:A(r=>c.handlePreview(g),["prevent"])},[F(e(I),{class:m(e(f).m("document"))},{default:S(()=>[F(e(Ie))]),_:1},8,["class"]),T("span",{class:m(e(a).be("list","item-file-name"))},K(g.name),3)],10,ct),g.status==="uploading"?(y(),D(e(xe),{key:0,type:c.listType==="picture-card"?"circle":"line","stroke-width":c.listType==="picture-card"?6:2,percentage:Number(g.percentage),style:M(c.listType==="picture-card"?"":"margin-top: 0.5rem")},null,8,["type","stroke-width","percentage","style"])):w("v-if",!0)],2)):w("v-if",!0),T("label",{class:m(e(a).be("list","item-status-label"))},[c.listType==="text"?(y(),D(e(I),{key:0,class:m([e(f).m("upload-success"),e(f).m("circle-check")])},{default:S(()=>[F(e(de))]),_:1},8,["class"])):["picture-card","picture"].includes(c.listType)?(y(),D(e(I),{key:1,class:m([e(f).m("upload-success"),e(f).m("check")])},{default:S(()=>[F(e(pe))]),_:1},8,["class"])):w("v-if",!0)],2),e(v)?w("v-if",!0):(y(),D(e(I),{key:2,class:m(e(f).m("close")),onClick:r=>h(g)},{default:S(()=>[F(e(fe))]),_:2},1032,["class","onClick"])),w(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),w(" This is a bug which needs to be fixed "),w(" TODO: Fix the incorrect navigation interaction "),e(v)?w("v-if",!0):(y(),E("i",{key:3,class:m(e(f).m("close-tip"))},K(e(n)("el.upload.deleteTip")),3)),c.listType==="picture-card"?(y(),E("span",{key:4,class:m(e(a).be("list","item-actions"))},[T("span",{class:m(e(a).be("list","item-preview")),onClick:r=>c.handlePreview(g)},[F(e(I),{class:m(e(f).m("zoom-in"))},{default:S(()=>[F(e(je))]),_:1},8,["class"])],10,dt),e(v)?w("v-if",!0):(y(),E("span",{key:0,class:m(e(a).be("list","item-delete")),onClick:r=>h(g)},[F(e(I),{class:m(e(f).m("delete"))},{default:S(()=>[F(e(Me))]),_:1},8,["class"])],10,pt))],2)):w("v-if",!0)])],42,it))),128)),L(c.$slots,"append")]),_:3},8,["class","name"]))}});var re=H(vt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-list.vue"]]);const mt=V({disabled:{type:Boolean,default:!1}}),yt={file:o=>Se(o)},gt=["onDrop","onDragover"],he="ElUploadDrag",ht=O({name:he}),bt=O({...ht,props:mt,emits:yt,setup(o,{emit:t}){const n=Ce(me);n||ee(he,"usage: <el-upload><el-upload-dragger /></el-upload>");const a=q("upload"),f=z(!1),p=X(),v=h=>{if(p.value)return;f.value=!1;const c=Array.from(h.dataTransfer.files),_=n.accept.value;if(!_){t("file",c);return}const g=c.filter(r=>{const{type:u,name:s}=r,d=s.includes(".")?`.${s.split(".").pop()}`:"",b=u.replace(/\/.*$/,"");return _.split(",").map(i=>i.trim()).filter(i=>i).some(i=>i.startsWith(".")?d===i:/\/\*$/.test(i)?b===i.replace(/\/\*$/,""):/^[^/]+\/[^/]+$/.test(i)?u===i:!1)});t("file",g)},k=()=>{p.value||(f.value=!0)};return(h,c)=>(y(),E("div",{class:m([e(a).b("dragger"),e(a).is("dragover",f.value)]),onDrop:A(v,["prevent"]),onDragover:A(k,["prevent"]),onDragleave:c[0]||(c[0]=A(_=>f.value=!1,["prevent"]))},[L(h.$slots,"default")],42,gt))}});var kt=H(bt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-dragger.vue"]]);const $t=V({...ge,beforeUpload:{type:$(Function),default:C},onRemove:{type:$(Function),default:C},onStart:{type:$(Function),default:C},onSuccess:{type:$(Function),default:C},onProgress:{type:$(Function),default:C},onError:{type:$(Function),default:C},onExceed:{type:$(Function),default:C}}),_t=["onKeydown"],wt=["name","multiple","accept"],Et=O({name:"ElUploadContent",inheritAttrs:!1}),St=O({...Et,props:$t,setup(o,{expose:t}){const n=o,a=q("upload"),f=X(),p=G({}),v=G(),k=s=>{if(s.length===0)return;const{autoUpload:d,limit:b,fileList:i,multiple:j,onStart:l,onExceed:U}=n;if(b&&i.length+s.length>b){U(s,i);return}j||(s=s.slice(0,1));for(const B of s){const P=B;P.uid=x(),l(P),d&&h(P)}},h=async s=>{if(v.value.value="",!n.beforeUpload)return c(s);let d;try{d=await n.beforeUpload(s)}catch{d=!1}if(d===!1){n.onRemove(s);return}let b=s;d instanceof Blob&&(d instanceof File?b=d:b=new File([d],s.name,{type:s.type})),c(Object.assign(b,{uid:s.uid}))},c=s=>{const{headers:d,data:b,method:i,withCredentials:j,name:l,action:U,onProgress:B,onSuccess:P,onError:N,httpRequest:be}=n,{uid:J}=s,Y={headers:d||{},withCredentials:j,file:s,data:b,method:i,filename:l,action:U,onProgress:W=>{B(W,s)},onSuccess:W=>{P(W,s),delete p.value[J]},onError:W=>{N(W,s),delete p.value[J]}},Z=be(Y);p.value[J]=Z,Z instanceof Promise&&Z.then(Y.onSuccess,Y.onError)},_=s=>{const d=s.target.files;d&&k(Array.from(d))},g=()=>{f.value||(v.value.value="",v.value.click())},r=()=>{g()};return t({abort:s=>{Pe(p.value).filter(s?([b])=>String(s.uid)===b:()=>!0).forEach(([b,i])=>{i instanceof XMLHttpRequest&&i.abort(),delete p.value[b]})},upload:h}),(s,d)=>(y(),E("div",{class:m([e(a).b(),e(a).m(s.listType),e(a).is("drag",s.drag)]),tabindex:"0",onClick:g,onKeydown:ce(A(r,["self"]),["enter","space"])},[s.drag?(y(),D(kt,{key:0,disabled:e(f),onFile:k},{default:S(()=>[L(s.$slots,"default")]),_:3},8,["disabled"])):L(s.$slots,"default",{key:1}),T("input",{ref_key:"inputRef",ref:v,class:m(e(a).e("input")),name:s.name,multiple:s.multiple,accept:s.accept,type:"file",onChange:_,onClick:d[0]||(d[0]=A(()=>{},["stop"]))},null,42,wt)],42,_t))}});var le=H(St,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-content.vue"]]);const ie="ElUpload",Ct=o=>{var t;(t=o.url)!=null&&t.startsWith("blob:")&&URL.revokeObjectURL(o.url)},Pt=(o,t)=>{const n=Ae(o,"fileList",void 0,{passive:!0}),a=r=>n.value.find(u=>u.uid===r.uid);function f(r){var u;(u=t.value)==null||u.abort(r)}function p(r=["ready","uploading","success","fail"]){n.value=n.value.filter(u=>!r.includes(u.status))}const v=(r,u)=>{const s=a(u);s&&(console.error(r),s.status="fail",n.value.splice(n.value.indexOf(s),1),o.onError(r,s,n.value),o.onChange(s,n.value))},k=(r,u)=>{const s=a(u);s&&(o.onProgress(r,s,n.value),s.status="uploading",s.percentage=Math.round(r.percent))},h=(r,u)=>{const s=a(u);s&&(s.status="success",s.response=r,o.onSuccess(r,s,n.value),o.onChange(s,n.value))},c=r=>{ve(r.uid)&&(r.uid=x());const u={name:r.name,percentage:0,status:"ready",size:r.size,raw:r,uid:r.uid};if(o.listType==="picture-card"||o.listType==="picture")try{u.url=URL.createObjectURL(r)}catch(s){Ve(ie,s.message),o.onError(s,u,n.value)}n.value=[...n.value,u],o.onChange(u,n.value)},_=async r=>{const u=r instanceof File?a(r):r;u||ee(ie,"file to be removed not found");const s=d=>{f(d);const b=n.value;b.splice(b.indexOf(d),1),o.onRemove(d,b),Ct(d)};o.beforeRemove?await o.beforeRemove(u,n.value)!==!1&&s(u):s(u)};function g(){n.value.filter(({status:r})=>r==="ready").forEach(({raw:r})=>{var u;return r&&((u=t.value)==null?void 0:u.upload(r))})}return se(()=>o.listType,r=>{r!=="picture-card"&&r!=="picture"||(n.value=n.value.map(u=>{const{raw:s,url:d}=u;if(!d&&s)try{u.url=URL.createObjectURL(s)}catch(b){o.onError(b,u,n.value)}return u}))}),se(n,r=>{for(const u of r)u.uid||(u.uid=x()),u.status||(u.status="success")},{immediate:!0,deep:!0}),{uploadFiles:n,abort:f,clearFiles:p,handleError:v,handleProgress:k,handleStart:c,handleSuccess:h,handleRemove:_,submit:g}},Rt=O({name:"ElUpload"}),Lt=O({...Rt,props:nt,setup(o,{expose:t}){const n=o,a=Re(),f=X(),p=G(),{abort:v,submit:k,clearFiles:h,uploadFiles:c,handleStart:_,handleError:g,handleRemove:r,handleSuccess:u,handleProgress:s}=Pt(n,p),d=R(()=>n.listType==="picture-card"),b=R(()=>({...n,fileList:c.value,onStart:_,onProgress:s,onSuccess:u,onError:g,onRemove:r}));return Le(()=>{c.value.forEach(({url:i})=>{i!=null&&i.startsWith("blob:")&&URL.revokeObjectURL(i)})}),Fe(me,{accept:Ue(n,"accept")}),t({abort:v,submit:k,clearFiles:h,handleStart:_,handleRemove:r}),(i,j)=>(y(),E("div",null,[e(d)&&i.showFileList?(y(),D(re,{key:0,disabled:e(f),"list-type":i.listType,files:e(c),"handle-preview":i.onPreview,onRemove:e(r)},ae({append:S(()=>[F(le,oe({ref_key:"uploadRef",ref:p},e(b)),{default:S(()=>[e(a).trigger?L(i.$slots,"trigger",{key:0}):w("v-if",!0),!e(a).trigger&&e(a).default?L(i.$slots,"default",{key:1}):w("v-if",!0)]),_:3},16)]),_:2},[i.$slots.file?{name:"default",fn:S(({file:l})=>[L(i.$slots,"file",{file:l})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):w("v-if",!0),!e(d)||e(d)&&!i.showFileList?(y(),D(le,oe({key:1,ref_key:"uploadRef",ref:p},e(b)),{default:S(()=>[e(a).trigger?L(i.$slots,"trigger",{key:0}):w("v-if",!0),!e(a).trigger&&e(a).default?L(i.$slots,"default",{key:1}):w("v-if",!0)]),_:3},16)):w("v-if",!0),i.$slots.trigger?L(i.$slots,"default",{key:2}):w("v-if",!0),L(i.$slots,"tip"),!e(d)&&i.showFileList?(y(),D(re,{key:3,disabled:e(f),"list-type":i.listType,files:e(c),"handle-preview":i.onPreview,onRemove:e(r)},ae({_:2},[i.$slots.file?{name:"default",fn:S(({file:l})=>[L(i.$slots,"file",{file:l})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):w("v-if",!0)]))}});var Ft=H(Lt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload.vue"]]);const Ut=ue(Ft);const Tt=async()=>await De({url:"/imgList",method:"get"}),Dt={class:"materials_box"},Ot=["src"],Bt=O({__name:"PublicMaterials",setup(o){const t=z([]),n=z(""),a=z(!1);async function f(){try{const k=await Tt();t.value.splice(0,t.value.length),t.value.push(...k.data.item)}catch{}}f();const p=(k,h)=>{console.log(k,h)},v=k=>{n.value=k.url,a.value=!0};return(k,h)=>{const c=I,_=Ut,g=Oe;return y(),E("div",Dt,[F(_,{"file-list":t.value,"onUpdate:file-list":h[0]||(h[0]=r=>t.value=r),action:"http://test.linqiaoyan.top/wechat/image","auto-upload":"","list-type":"picture-card","on-preview":v,"on-remove":p},{default:S(()=>[F(c,null,{default:S(()=>[F(e(qe))]),_:1})]),_:1},8,["file-list"]),F(g,{modelValue:a.value,"onUpdate:modelValue":h[1]||(h[1]=r=>a.value=r)},{default:S(()=>[T("img",{"w-full":"",src:n.value,alt:"Preview Image"},null,8,Ot)]),_:1},8,["modelValue"])])}}});const qt=We(Bt,[["__scopeId","data-v-aa8cb7c7"]]);export{qt as default};
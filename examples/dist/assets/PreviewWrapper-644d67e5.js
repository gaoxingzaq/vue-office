import{r as d,q as C,_ as I,w as N,s as n,a as p,b as x,u as t,h as i,g as l,t as v,v as S,f as w,p as m,x as V,y as W,z as A,e as R}from"./index-cfab8763.js";function T(e){const s=d("url"),a=d(e),r=d(e),u=d([]);function b(y){let c=new FileReader;return c.onload=o=>{let _=o.target.result;r.value=_},c.readAsArrayBuffer(y),!1}return{type:s,inputSrc:a,src:r,fileList:u,beforeUpload:b}}let g=d(!1),k;function $(e){k=C.loading(e,0),g.value=!0}function q(){g.value===!0&&(k(),g.value=!1)}const z={loading:g,showLoading:$,hideLoading:q};function E(){return location.href.includes("test")}const F=e=>(W("data-v-6e0b6946"),e=e(),A(),e),j={class:"preview-wrapper"},D={key:0,class:"operate-area"},G=F(()=>R("div",{class:"preview-wrapper-main"},null,-1)),H={__name:"PreviewWrapper",props:{accept:String,placeholder:String,defaultSrc:String},setup(e){const s=e,{type:a,inputSrc:r,src:u,fileList:b,beforeUpload:y}=T(s.defaultSrc);return N(u,()=>{z.showLoading()},{immediate:!0}),(c,o)=>{const _=n("a-radio-button"),B=n("a-radio-group"),L=n("a-input"),h=n("a-button"),U=n("upload-outlined"),P=n("a-upload");return p(),x("div",j,[t(E)()?m("",!0):(p(),x("div",D,[i(B,{value:t(a),"onUpdate:value":o[0]||(o[0]=f=>S(a)?a.value=f:null),"button-style":"solid"},{default:l(()=>[i(_,{value:"url"},{default:l(()=>[v("远程文件地址")]),_:1}),i(_,{value:"upload"},{default:l(()=>[v("上传本地文件")]),_:1})]),_:1},8,["value"]),t(a)==="url"?(p(),w(L,{key:0,value:t(r),"onUpdate:value":o[1]||(o[1]=f=>S(r)?r.value=f:null),placeholder:s.placeholder,style:{width:"600px","margin-left":"10px"}},null,8,["value","placeholder"])):m("",!0),t(a)==="url"?(p(),w(h,{key:1,type:"primary",style:{"margin-left":"10px"},onClick:o[2]||(o[2]=f=>u.value=t(r))},{default:l(()=>[v(" 预览 ")]),_:1})):m("",!0),t(a)!=="url"?(p(),w(P,{key:2,accept:s.accept,action:"",beforeUpload:t(y),"file-list":[]},{default:l(()=>[i(h,{style:{"margin-left":"10px"}},{default:l(()=>[i(U),v(" 选择文件 ")]),_:1})]),_:1},8,["accept","beforeUpload"])):m("",!0)])),V(c.$slots,"default",{src:t(u)},void 0,!0),G])}}},K=I(H,[["__scopeId","data-v-6e0b6946"]]);export{K as P,z as u};
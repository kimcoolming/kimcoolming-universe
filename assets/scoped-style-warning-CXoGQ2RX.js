import{_ as b,a}from"./BodyMaincard-BLaHC9ki.js";import{C as p}from"./CodeBlock-BHXZcNUL.js";import{a0 as f,a2 as l,$ as n,a1 as v,v as e,a3 as o,S as s}from"./vendor-DsKT1S8o.js";import"./router-DV_bhxDE.js";import"./index-CxlnnvHa.js";import"./firebase-BDPEIw7a.js";import"./vuetify-D5VncFeE.js";import"./highlight-DLiHtH8K.js";const y=`<template>
  <v-btn class="scoped-btn">버튼</v-btn>
</template>

<style scoped>
.scoped-btn span {
  color: red; /* ❌ 적용되지 않음 */
}
</style>`,S=`<template>
  <v-btn class="scoped-btn">버튼</v-btn>
</template>

<style scoped>
.scoped-btn :deep(span) {
  color: red; /* ✅ 정상 적용됨 */
}
</style>`,D={__name:"scoped-style-warning",setup(V){const c=[{title:"문제 상황",key:"problem"},{title:"원인",key:"cause"},{title:"해결 방법",key:"solution"}],d=[{problem:"Vuetify 버튼 내부 span에 스타일이 안 먹음",cause:"<style scoped>의 캡슐화로 내부 요소 접근 불가",solution:":deep()로 스타일 확장"},{problem:"v-input 내부 placeholder 색상 변경 불가",cause:"Vuetify 내부 구조와 우선순위 문제",solution:"전역 스타일 또는 :deep() 사용"}];return(g,t)=>{const r=n("v-data-table"),m=n("v-btn"),i=n("v-col"),u=n("v-row"),_=n("v-container");return v(),f(_,{fluid:""},{default:l(()=>[e(b),e(u,null,{default:l(()=>[e(i,{cols:"12"},{default:l(()=>[e(a,{title:"Scoped 스타일 주의사항 (Vuetify)"},{default:l(()=>[t[0]||(t[0]=o("p",null,[s(" Vuetify 컴포넌트는 내부적으로 "),o("strong",null,"Shadow DOM 스타일"),s(" 또는 "),o("strong",null,"CSS 변수"),s("를 활용하기 때문에 "),o("code",null,"<style scoped>"),s("에서는 일부 Vuetify 내부 요소에 스타일이 적용되지 않을 수 있습니다. 이럴 땐 "),o("code",null,":deep()"),s("을 사용하여 선택자를 명시적으로 확장해야 합니다. ")],-1)),e(r,{headers:c,items:d,class:"custom-table mt-4 elevation-1","hide-default-footer":"",density:"comfortable"})]),_:1}),e(a,{title:"예시: v-btn 내부 텍스트 스타일 변경"},{default:l(()=>[t[2]||(t[2]=o("p",{class:"mb-2"},"아래 버튼의 텍스트 색상을 scoped 스타일에서 직접 변경하려 할 경우:",-1)),e(m,{class:"scoped-btn"},{default:l(()=>t[1]||(t[1]=[s("Scoped 버튼")])),_:1}),t[3]||(t[3]=o("p",{class:"mt-4 mb-2"},[s("→ "),o("code",null,".scoped-btn span"),s("에 직접 스타일이 적용되지 않음!")],-1)),e(p,{label:"잘못된 예시",lang:"html",code:y}),e(p,{label:"해결 방법 (:deep 사용)",lang:"html",code:S})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{D as default};

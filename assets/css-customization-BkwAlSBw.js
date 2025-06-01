import{_,a as r}from"./BodyMaincard-DmKPXyfh.js";import{C as f}from"./CodeBlock-Kf1mY0YT.js";import{_ as v,c as S,w as s,r as a,o as y,b as t,a as e,g as o}from"./index-CSyGLtmB.js";const b=`<template>
  <v-card class="custom-card pa-4">
    <h3 class="custom-title">사용자 지정 제목</h3>
    <p class="custom-text">Scoped CSS와 Vuetify 변수 활용</p>
  </v-card>
</template>

<style scoped>
.custom-card {
  background-color: var(--v-theme-surface);
  border-left: 4px solid var(--v-theme-primary);
}
.custom-title {
  color: var(--v-theme-primary);
  font-size: 20px;
  font-weight: bold;
}
.custom-text {
  color: rgba(0, 0, 0, 0.7);
}
</style>`,C={__name:"css-customization",setup(h){const l=[{title:"항목",key:"feature"},{title:"설명",key:"description"}],n=[{feature:"Scoped Style",description:"컴포넌트 내부에만 적용되는 스타일 정의"},{feature:"CSS 변수",description:"--v-theme-primary 등의 Vuetify 내장 변수 활용"},{feature:"Global Style",description:"main.scss, variables.scss에 정의해 전역 적용"},{feature:"유틸리티 오버라이드",description:".text-h6, .rounded 등 Vuetify 기본 클래스 재정의"}];return(x,c)=>{const i=a("v-data-table"),m=a("v-card"),d=a("v-col"),u=a("v-row"),p=a("v-container");return y(),S(p,{fluid:""},{default:s(()=>[t(_),t(u,null,{default:s(()=>[t(d,{cols:"12"},{default:s(()=>[t(r,{title:"Vuetify CSS 커스터마이징"},{default:s(()=>[c[0]||(c[0]=e("p",null,[o(" Vuetify 3는 CSS 변수 기반 스타일 시스템을 채택하고 있어 "),e("strong",null,"글로벌 스타일"),o(", "),e("strong",null,"Scoped 스타일"),o(", "),e("strong",null,"유틸리티 클래스"),o("를 이용한 유연한 커스터마이징이 가능합니다. ")],-1)),t(i,{headers:l,items:n,class:"custom-table mt-4 elevation-1","hide-default-footer":"",density:"comfortable"})]),_:1}),t(r,{title:"CSS 커스터마이징 예시"},{default:s(()=>[t(m,{class:"custom-card pa-4 mb-4"},{default:s(()=>c[1]||(c[1]=[e("h3",{class:"custom-title mb-2"},"사용자 지정 제목",-1),e("p",{class:"custom-text"},[o(" 이 텍스트는 "),e("strong",null,"Scoped CSS"),o("와 Vuetify 변수("),e("code",null,"--v-theme-primary"),o(")를 함께 사용하여 스타일링되었습니다. ")],-1)])),_:1}),t(f,{label:"커스터마이징 코드 예시",lang:"html",code:b})]),_:1})]),_:1})]),_:1})]),_:1})}}},w=v(C,[["__scopeId","data-v-203605fe"]]);export{w as default};

import{_ as v,a as n}from"./BodyMaincard-Dr9ZdwOl.js";import{C as a}from"./CodeBlock-BaWmGqt9.js";import{a0 as x,a2 as t,$ as c,a1 as b,v as s,a3 as e,u as i,S as o}from"./vendor-DsTMh68j.js";import"./router-BfL3fPc_.js";import"./index-BuSfLIVr.js";import"./firebase-EYoWS5mi.js";import"./vuetify-vZiJE5rC.js";import"./highlight-DLiHtH8K.js";const z={__name:"scss-style-structure",setup(C){const r=`
assets/
└── scss/
    ├── _variables.scss
    ├── _mixins.scss
    ├── _reset.scss
    └── main.scss
`.trim(),d=`
import './assets/scss/main.scss'
`.trim(),m=`
$primary-color: #6a11cb;
$font-base: 'Pretendard', sans-serif;
$z-header: 1000;
`.trim(),p=`
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin responsive($breakpoint) {
  @if $breakpoint == 'mobile' {
    .display-xs {
      @content;
    }
  }
}
`.trim(),u=`
<template>
  <div class="card">내용</div>
</template>

<script setup>
</scr`+`ipt>

<style scoped lang="scss">
.card {
  padding: 16px;
  background: $primary-color;
  color: white;

  @include flex-center;

  @include responsive('mobile') {
    padding: 8px;
  }
}
</style>
`.trim();return(g,l)=>{const _=c("v-col"),S=c("v-row"),f=c("v-container");return b(),x(f,{fluid:""},{default:t(()=>[s(v),s(S,null,{default:t(()=>[s(_,{cols:"12"},{default:t(()=>[s(n,{title:"SCSS 및 스타일 구조 구성 방식"},{default:t(()=>l[0]||(l[0]=[e("p",null," Vue 3 프로젝트에서 퍼블리셔가 SCSS를 체계적으로 관리하기 위해 폴더 구조와 스타일 작성 규칙을 정해두는 것이 중요해요. SCSS는 재사용성과 유지보수를 높이기 위해 다음과 같이 구성합니다. ",-1)])),_:1}),s(n,{title:"1. SCSS 폴더 구조 예시"},{default:t(()=>[s(a,{label:"assets/scss 폴더 구조",lang:"plaintext",code:i(r)},null,8,["code"])]),_:1}),s(n,{title:"2. SCSS 파일 설명"},{default:t(()=>l[1]||(l[1]=[e("ul",{class:"desc-list"},[e("li",null,[e("code",null,"_variables.scss"),o(": 컬러, 폰트, z-index 등 공통 변수 선언")]),e("li",null,[e("code",null,"_mixins.scss"),o(": 반응형, 미디어쿼리, 재사용 로직 등")]),e("li",null,[e("code",null,"_reset.scss"),o(": 기본 여백 제거 및 브라우저 스타일 초기화")]),e("li",null,[e("code",null,"main.scss"),o(": 위 파일들을 import한 최종 통합 스타일")])],-1)])),_:1}),s(n,{title:"3. main.js 또는 App.vue에서 SCSS 연결"},{default:t(()=>[s(a,{label:"main.js에서 SCSS import",lang:"js",code:i(d)},null,8,["code"])]),_:1}),s(n,{title:"4. SCSS 변수와 믹스인 사용 예시"},{default:t(()=>[s(a,{label:"_variables.scss",lang:"scss",code:i(m)},null,8,["code"]),s(a,{label:"_mixins.scss",lang:"scss",code:i(p)},null,8,["code"])]),_:1}),s(n,{title:"5. 컴포넌트별 스타일 작성 방법"},{default:t(()=>[l[2]||(l[2]=e("p",null,[e("code",null,"scoped"),o(" 스타일을 사용하면 해당 컴포넌트 안에서만 적용돼요. "),e("br"),o(" 전역 클래스는 SCSS에서 정의하고 필요한 컴포넌트에서 class로 불러오는 방식이 좋아요. ")],-1)),s(a,{label:"Component.vue 스타일 구조",lang:"vue",code:u})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{z as default};

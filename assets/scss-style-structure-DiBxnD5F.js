import{_ as x}from"./BaseBreadcrumb-BdlaIb9d.js";import{_ as n}from"./BodyMaincard-CPIp0UtQ.js";import{C as a}from"./CodeBlock-DCn2yxma.js";import{c as b,w as l,r as i,o as v,b as s,a as e,u as c,g as o}from"./index-dtzBUjC1.js";const j={__name:"scss-style-structure",setup(C){const r=`
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
`.trim(),u=`
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin responsive($breakpoint) {
  @if $breakpoint == 'mobile' {
    @media (max-width: 768px) {
      @content;
    }
  }
}
`.trim(),p=`
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
`.trim();return(g,t)=>{const _=i("v-col"),S=i("v-row"),f=i("v-container");return v(),b(f,{fluid:""},{default:l(()=>[s(x),s(S,null,{default:l(()=>[s(_,{cols:"12"},{default:l(()=>[s(n,{title:"SCSS 및 스타일 구조 구성 방식"},{default:l(()=>t[0]||(t[0]=[e("p",null," Vue 3 프로젝트에서 퍼블리셔가 SCSS를 체계적으로 관리하기 위해 폴더 구조와 스타일 작성 규칙을 정해두는 것이 중요해요. SCSS는 재사용성과 유지보수를 높이기 위해 다음과 같이 구성합니다. ",-1)])),_:1}),s(n,{title:"1. SCSS 폴더 구조 예시"},{default:l(()=>[s(a,{label:"assets/scss 폴더 구조",lang:"plaintext",code:c(r)},null,8,["code"])]),_:1}),s(n,{title:"2. SCSS 파일 설명"},{default:l(()=>t[1]||(t[1]=[e("ul",{class:"desc-list"},[e("li",null,[e("code",null,"_variables.scss"),o(": 컬러, 폰트, z-index 등 공통 변수 선언")]),e("li",null,[e("code",null,"_mixins.scss"),o(": 반응형, 미디어쿼리, 재사용 로직 등")]),e("li",null,[e("code",null,"_reset.scss"),o(": 기본 여백 제거 및 브라우저 스타일 초기화")]),e("li",null,[e("code",null,"main.scss"),o(": 위 파일들을 import한 최종 통합 스타일")])],-1)])),_:1}),s(n,{title:"3. main.js 또는 App.vue에서 SCSS 연결"},{default:l(()=>[s(a,{label:"main.js에서 SCSS import",lang:"js",code:c(d)},null,8,["code"])]),_:1}),s(n,{title:"4. SCSS 변수와 믹스인 사용 예시"},{default:l(()=>[s(a,{label:"_variables.scss",lang:"scss",code:c(m)},null,8,["code"]),s(a,{label:"_mixins.scss",lang:"scss",code:c(u)},null,8,["code"])]),_:1}),s(n,{title:"5. 컴포넌트별 스타일 작성 방법"},{default:l(()=>[t[2]||(t[2]=e("p",null,[e("code",null,"scoped"),o(" 스타일을 사용하면 해당 컴포넌트 안에서만 적용돼요. "),e("br"),o(" 전역 클래스는 SCSS에서 정의하고 필요한 컴포넌트에서 class로 불러오는 방식이 좋아요. ")],-1)),s(a,{label:"Component.vue 스타일 구조",lang:"vue",code:p})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{j as default};

import{_ as S}from"./BaseBreadcrumb-Cy9rt6LQ.js";import{_ as a}from"./BodyMaincard-C1gGnJW9.js";import{C as n}from"./CodeBlock-Cpu0groJ.js";import{c as g,w as o,r as c,o as C,b as e,a as s,g as l,u as r}from"./index-jdJpLHXC.js";const k={__name:"asset-management",setup(v){const i=`
assets/
├── scss/
│   ├── _variables.scss     // 컬러, 폰트 등 변수
│   ├── _mixins.scss        // 공통 믹스인
│   ├── _reset.scss         // 기본 리셋
│   └── main.scss           // 모든 파일을 import
`.trim(),m=`
// main.scss
@import './variables';
@import './mixins';
@import './reset';
`.trim(),u=`
<template>
  <img :src="require('@/assets/images/logo.png')" alt="로고" />
</template>
`.trim(),d=`
@font-face {
  font-family: 'Pretendard';
  src: url('@/assets/fonts/Pretendard-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}
`.trim();return(x,t)=>{const p=c("v-col"),f=c("v-row"),_=c("v-container");return C(),g(_,{fluid:""},{default:o(()=>[e(S),e(f,null,{default:o(()=>[e(p,{cols:"12"},{default:o(()=>[e(a,{title:"퍼블리싱 리소스 관리 (Assets)"},{default:o(()=>t[0]||(t[0]=[s("p",null,[l(" Vue 프로젝트에서 퍼블리셔가 다루는 이미지, 폰트, 스타일 등은 보통 "),s("code",null,"src/assets"),l(" 폴더에 정리합니다. 이 폴더는 프로젝트에서 전역으로 import 할 수 있어요. ")],-1),s("ul",{class:"desc-list"},[s("li",null,[s("code",null,"src/assets/images"),l(" – 이미지 리소스")]),s("li",null,[s("code",null,"src/assets/fonts"),l(" – 웹폰트 파일")]),s("li",null,[s("code",null,"src/assets/scss"),l(" – SCSS 변수, 믹스인, 스타일 파일")])],-1)])),_:1}),e(a,{title:"SCSS 폴더 구조 예시"},{default:o(()=>[e(n,{label:"SCSS 구조 예시",lang:"plaintext",code:r(i)},null,8,["code"])]),_:1}),e(a,{title:"main.scss에서 SCSS 파일 불러오기"},{default:o(()=>[t[1]||(t[1]=s("p",null,[s("code",null,"main.js"),l(" 또는 "),s("code",null,"App.vue"),l("에서 SCSS를 전역 import 하면, 모든 컴포넌트에서 변수나 믹스인을 쓸 수 있어요. ")],-1)),e(n,{label:"main.scss import 예시",lang:"scss",code:r(m)},null,8,["code"])]),_:1}),e(a,{title:"이미지 및 폰트 사용법"},{default:o(()=>[t[2]||(t[2]=s("p",null,[s("code",null,"src/assets/images"),l("에 이미지를 넣고 아래처럼 불러올 수 있어요:")],-1)),e(n,{label:"이미지 사용 예시",lang:"html",code:r(u)},null,8,["code"]),t[3]||(t[3]=s("p",{class:"mt-4"},"폰트는 CSS 또는 SCSS에서 다음처럼 선언해요:",-1)),e(n,{label:"폰트 선언 예시",lang:"css",code:r(d)},null,8,["code"])]),_:1})]),_:1})]),_:1})]),_:1})}}};export{k as default};

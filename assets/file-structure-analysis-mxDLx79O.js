import{_ as f,a as u}from"./BodyMaincard-CSOWW-Yc.js";import{C as p}from"./CodeBlock-Etr-AdjA.js";import{c as v,w as n,r as a,o as _,b as l,a as e,g as t,u as A}from"./index-KLpfFNps.js";const C={__name:"file-structure-analysis",setup(V){const r=`
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>My Vue App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></scr`+`ipt>
  </body>
</html>
`.trim(),s=`
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
`.trim(),m=`
<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<script setup>
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
</scr`+`ipt>
`.trim();return(x,o)=>{const i=a("v-col"),d=a("v-row"),c=a("v-container");return _(),v(c,{fluid:""},{default:n(()=>[l(f),l(d,null,{default:n(()=>[l(i,{cols:"12"},{default:n(()=>[l(u,{title:"Vue 프로젝트 핵심 파일 구조 분석"},{default:n(()=>o[0]||(o[0]=[e("p",null,[t(" Vue 3 프로젝트의 기본 구조는 "),e("code",null,"index.html"),t(" → "),e("code",null,"main.js"),t(" → "),e("code",null,"App.vue"),t(" 순으로 연결되어 있어요. 퍼블리셔는 보통 "),e("code",null,"App.vue"),t("를 중심으로 헤더, 푸터, 레이아웃을 작업하게 됩니다. ")],-1)])),_:1}),l(u,{title:"1. index.html"},{default:n(()=>[o[1]||(o[1]=e("p",null,[t(" 실제 웹사이트의 진입점이며, "),e("strong",null,"Vue가 mount되는 대상"),t("인 "),e("code",null,'<div id="app">'),t("가 존재합니다. 그 외 meta 태그나 favicon 설정 등도 여기서 이루어져요. ")],-1)),l(p,{label:"index.html 예시",lang:"html",code:r})]),_:1}),l(u,{title:"2. main.js"},{default:n(()=>[o[2]||(o[2]=e("p",null,[t(" Vue 앱을 생성하고, 루트 컴포넌트인 "),e("code",null,"App.vue"),t("를 연결합니다. 이곳에서 router, store 등을 설정하기도 해요. ")],-1)),l(p,{label:"main.js 예시",lang:"js",code:A(s)},null,8,["code"])]),_:1}),l(u,{title:"3. App.vue"},{default:n(()=>[o[3]||(o[3]=e("p",null,[t(" 사이트의 기본 골격을 담당하는 컴포넌트입니다. 퍼블리셔는 이곳에서 "),e("code",null,"<Header>"),t(", "),e("code",null,"<Footer>"),t(", "),e("code",null,"<RouterView>"),t(" 등을 배치하게 됩니다. ")],-1)),l(p,{label:"App.vue 예시",lang:"vue",code:m})]),_:1}),l(u,{title:"퍼블리셔 실무 연결 포인트"},{default:n(()=>o[4]||(o[4]=[e("ul",{class:"desc-list"},[e("li",null,[e("code",null,"App.vue"),t("에 전체 레이아웃 구성 (헤더/푸터 포함)")]),e("li",null,[e("code",null,"components/common"),t(" 폴더에 공통 퍼블리싱 컴포넌트 정리")]),e("li",null,[e("code",null,"assets"),t(" 폴더에 이미지, 폰트, SCSS 파일 정리")])],-1)])),_:1})]),_:1})]),_:1})]),_:1})}}};export{C as default};

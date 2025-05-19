import{_ as m}from"./BaseBreadcrumb-BdlaIb9d.js";import{_ as o}from"./BodyMaincard-CPIp0UtQ.js";import{C as n}from"./CodeBlock-DCn2yxma.js";import{c,w as t,r as i,o as d,b as e,a as l}from"./index-dtzBUjC1.js";const p=`<template>
  <div>{{ message }}</div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('안녕하세요! Vue에 오신 걸 환영해요')
<\/script>`,f=`<template>
  <v-footer app>
    <v-container>
      <v-row justify="center">
        <v-col cols="auto">
          <small>&copy; 2025 MyTeam</small>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
import { useDisplay } from 'vuetify'
const { mdAndDown } = useDisplay()
<\/script>`,b={__name:"what-is-vue",setup(v){return(_,s)=>{const u=i("v-col"),a=i("v-row"),r=i("v-container");return d(),c(r,{fluid:""},{default:t(()=>[e(m),e(a,null,{default:t(()=>[e(u,{cols:"12"},{default:t(()=>[e(o,{title:"Vue.js란?"},{default:t(()=>s[0]||(s[0]=[l("p",null," Vue.js는 사용자 인터페이스를 만들기 위한 점진적 프레임워크입니다. 기존 HTML, CSS, JavaScript 기반 작업에 익숙한 퍼블리셔가 쉽게 배우고 실무에 활용할 수 있도록 설계되어 있어요. ",-1),l("ul",{class:"desc-list"},[l("li",null,"HTML에 Vue 문법을 얹는 방식으로 개발되며, 진입 장벽이 낮습니다."),l("li",null,"작고 가볍지만, 필요 시 Vue Router, Vuex, Pinia 등으로 확장 가능합니다."),l("li",null,"컴포넌트 기반 UI 구성으로 유지보수와 재사용성이 좋아집니다.")],-1)])),_:1}),e(o,{title:"기존 방식 vs Vue 방식"},{default:t(()=>[e(a,null,{default:t(()=>[e(u,{cols:"12",md:"6"},{default:t(()=>s[1]||(s[1]=[l("h4",{class:"text-subtitle-1 font-weight-medium mb-2"},"기존 HTML 방식",-1),l("ul",{class:"desc-list"},[l("li",null,"버튼 클릭 → 직접 DOM 조작 (`getElementById`, `classList.add` 등)"),l("li",null,"데이터 바뀌면 수동으로 UI 갱신"),l("li",null,"반복되는 구조가 많고, JS가 흩어져 유지보수가 어려움")],-1)])),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>s[2]||(s[2]=[l("h4",{class:"text-subtitle-1 font-weight-medium mb-2"},"Vue 방식",-1),l("ul",{class:"desc-list"},[l("li",null,"데이터 바뀌면 화면도 자동 갱신 (반응형)"),l("li",null,"`v-if`, `v-for`, `@click` 등으로 동적 UI 제어"),l("li",null,"컴포넌트 단위로 분리해서 재사용과 관리가 편리")],-1)])),_:1})]),_:1})]),_:1}),e(o,{title:"Vue 문법은 얼마나 쉬울까?"},{default:t(()=>[e(n,{label:"간단한 Vue 예제",lang:"html",code:p})]),_:1}),e(o,{title:"퍼블리셔가 Vue를 배우면 좋은 이유"},{default:t(()=>s[3]||(s[3]=[l("ul",{class:"desc-list"},[l("li",null,"디자인 시안을 컴포넌트 단위로 깔끔하게 구현 가능"),l("li",null,"스타일과 로직이 분리되어 협업과 유지보수가 쉬움"),l("li",null,"단순 UI부터 대형 프로젝트까지 대응 가능"),l("li",null,"Tailwind, Vuetify 등과 함께 쓸 수 있어 확장성 좋음")],-1)])),_:1}),e(o,{title:"실제 컴포넌트 구조 예시"},{default:t(()=>[e(n,{label:"Footer.vue 구성",lang:"html",code:f})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{b as default};

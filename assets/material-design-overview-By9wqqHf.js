import{_ as k}from"./PageTitlebar-BbZYHo5z.js";import{_ as m}from"./BodyMaincard-CPIp0UtQ.js";import{C as _}from"./CodeBlock-DCn2yxma.js";import{i as T,s as L,c as x,w as t,r as o,o as i,b as e,e as r,F as f,f as p,a as D,g as a,t as v}from"./index-dtzBUjC1.js";const N={class:"desc-list"},B=`<template>
  <div>Hello</div>
</template>

<script setup>
import { ref } from 'vue'
const message = ref('Hello Vue!')
<\/script>

<style scoped>
div {
  color: red;
}
</style>`,E=`<script setup>
import { useDisplay } from "vuetify";
import { useRoute } from "vue-router";
import { computed } from "vue";

const { mdAndDown } = useDisplay();
const route = useRoute();

// 현재 경로가 '/'일 때만 true
const isHome = computed(() => route.path === "/");
<\/script>

<template>
  <v-footer app :class="{ 'transparent-footer': isHome }">
    <v-container>
      <v-row justify="center">
        <v-col cols="auto">
          <div v-if="!mdAndDown">
            &copy; 2025 CYOOM - All rights reserved.
          </div>
          <div v-else>&copy; 2025 Kimcoolming</div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>`,P={__name:"material-design-overview",setup(O){const S=T({title:"Vuefity Component"}),y=L([{title:"Vue.js"},{title:"Vue.js for Publisher"}]),V=[{title:"기존 HTML/CSS/JS 개발 방식은 한계가 있어.",desc:["버튼 하나 눌러서 DOM 직접 수정하고, 데이터 바뀔 때마다 수동으로 업데이트해야 해.","반복되는 HTML 구조가 많고 유지보수가 어려워."]},{title:"그렇다면 Vue 는?",desc:["HTML을 그대로 쓰면서도 데이터 바인딩과 재사용 가능한 컴포넌트를 만들어서 작업을 효율화시켜줘.","HTML 구조 안에 동적 처리만 얹으면 된다니까"]},{title:"Vue에서 HTML은 그대로 쓴다고?",desc:["{{ userName }}: HTML 안에 변수를 직접 표시해","@click: onclick 같은 건데 더 직관적이야"]},{title:"CSS는 그대로 쓰되, 컴포넌트 단위로 쪼갠다고!",desc:["scoped: 이 컴포넌트에만 스타일 적용됨 → 전역 스타일 오염 방지","SCSS도 그대로 사용 가능"]},{title:"JS는 script setup으로 간단히 해결핑!",desc:["ref()를 쓰면 데이터가 반응형이 되어 화면에 자동 반영핑","setup 구문 하나로 JS 영역을 깔끔하게 구성 가능핑"]}];return(j,l)=>{const s=o("v-list-item-title"),n=o("v-list-item-content"),u=o("v-list-item"),c=o("v-list"),b=o("v-col"),C=o("v-row"),H=o("v-container");return i(),x(H,{fluid:""},{default:t(()=>[e(k,{title:S.value.title,breadcrumbs:y.value},null,8,["title","breadcrumbs"]),e(C,{class:"mt-0"},{default:t(()=>[e(b,{cols:"12",md:"12"},{default:t(()=>[e(m,{title:"Vue.js는 왜 필요해?"},{default:t(()=>[e(c,{dense:"",nav:""},{default:t(()=>[(i(),r(f,null,p(V,(d,g)=>e(u,{key:g,class:"pb-2"},{default:t(()=>[e(n,null,{default:t(()=>[e(s,null,{default:t(()=>[a(v(d.title),1)]),_:2},1024),D("ul",N,[(i(!0),r(f,null,p(d.desc,(w,M)=>(i(),r("li",{key:M},v(w),1))),128))])]),_:2},1024)]),_:2},1024)),64))]),_:1}),e(_,{label:"VUE 예제",lang:"html",code:B})]),_:1}),e(m,{title:"퍼블리셔가 Vue를 배워야 하는 이유"},{default:t(()=>[e(c,{dense:"",nav:""},{default:t(()=>[e(u,null,{default:t(()=>[e(n,null,{default:t(()=>[e(s,null,{default:t(()=>l[0]||(l[0]=[a(" 디자인 시안 그대로 코드로 만들기 쉬워. ")])),_:1})]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(n,null,{default:t(()=>[e(s,null,{default:t(()=>l[1]||(l[1]=[a(" 재사용 가능한 UI 컴포넌트 구조화 가능해. 단 진짜 잘 만들어야돼 ! ")])),_:1})]),_:1})]),_:1}),e(_,{label:"COMPONENT 예제 - Footer.vue",lang:"html",code:E}),e(u,null,{default:t(()=>[e(n,null,{default:t(()=>[e(s,null,{default:t(()=>l[2]||(l[2]=[a(" v-if / v-for / @click 등 스크립트 조금만 알면 금방 할수 있을껄? ")])),_:1})]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(n,null,{default:t(()=>[e(s,null,{default:t(()=>l[3]||(l[3]=[a(" HTML + CSS 위에 얹는 느낌이라 친숙해. ")])),_:1})]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(n,null,{default:t(()=>[e(s,null,{default:t(()=>l[4]||(l[4]=[a(" 스타일 + 로직 분리가 잘되어 있어서 큰 플젝에서 유리해! ")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{P as default};

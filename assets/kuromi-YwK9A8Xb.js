import{_ as w}from"./PageTitlebar-ooWJd_f9.js";import{_ as m}from"./BodyMaincard--w3n3ewV.js";import{C as _}from"./CodeBlock-MNp1SLab.js";import{i as T,y as L,c as x,w as t,r as o,o as a,b as e,e as i,F as f,f as p,a as D,g as r,t as v}from"./index-BaJXCc7g.js";const N={class:"desc-list"},j=`<template>
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
</style>`,B=`<script setup>
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
</template>`,R={__name:"kuromi",setup(E){const S=T({title:"Vue.js for Publisher"}),b=L([{title:"Vue.js"},{title:"Vue.js for Publisher"}]),y=[{title:"기존 HTML/CSS/JS 개발 방식은 한계가 있어.",desc:["버튼 하나 눌러서 DOM 직접 수정하고, 데이터 바뀔 때마다 수동으로 업데이트해야 해.","반복되는 HTML 구조가 많고 유지보수가 어려워."]},{title:"그렇다면 Vue 는?",desc:["HTML을 그대로 쓰면서도 데이터 바인딩과 재사용 가능한 컴포넌트를 만들어서 작업을 효율화시켜줘.","HTML 구조 안에 동적 처리만 얹으면 된다니까"]},{title:"Vue에서 HTML은 그대로 쓴다고?",desc:["{{ userName }}: HTML 안에 변수를 직접 표시해","@click: onclick 같은 건데 더 직관적이야"]},{title:"CSS는 그대로 쓰되, 컴포넌트 단위로 쪼갠다고!",desc:["scoped: 이 컴포넌트에만 스타일 적용됨 → 전역 스타일 오염 방지","SCSS도 그대로 사용 가능"]},{title:"JS는 script setup으로 간단히 해결핑!",desc:["ref()를 쓰면 데이터가 반응형이 되어 화면에 자동 반영핑","setup 구문 하나로 JS 영역을 깔끔하게 구성 가능핑"]}];return(O,l)=>{const s=o("v-list-item-title"),u=o("v-list-item-content"),n=o("v-list-item"),c=o("v-list"),V=o("v-col"),H=o("v-row"),k=o("v-container");return a(),x(k,{fluid:""},{default:t(()=>[e(w,{title:S.value.title,breadcrumbs:b.value},null,8,["title","breadcrumbs"]),e(H,{class:"mt-0"},{default:t(()=>[e(V,{cols:"12",md:"12"},{default:t(()=>[e(m,{title:"Vue.js는 왜 필요해?"},{default:t(()=>[e(c,{dense:"",nav:""},{default:t(()=>[(a(),i(f,null,p(y,(d,C)=>e(n,{key:C,class:"pb-2"},{default:t(()=>[e(u,null,{default:t(()=>[e(s,null,{default:t(()=>[r(v(d.title),1)]),_:2},1024),D("ul",N,[(a(!0),i(f,null,p(d.desc,(M,g)=>(a(),i("li",{key:g},v(M),1))),128))])]),_:2},1024)]),_:2},1024)),64))]),_:1}),e(_,{label:"VUE 예제",lang:"html",code:j})]),_:1}),e(m,{title:"퍼블리셔가 Vue를 배워야 하는 이유"},{default:t(()=>[e(c,{dense:"",nav:""},{default:t(()=>[e(n,null,{default:t(()=>[e(u,null,{default:t(()=>[e(s,null,{default:t(()=>l[0]||(l[0]=[r(" 디자인 시안 그대로 코드로 만들기 쉬워. ")])),_:1})]),_:1})]),_:1}),e(n,null,{default:t(()=>[e(u,null,{default:t(()=>[e(s,null,{default:t(()=>l[1]||(l[1]=[r(" 재사용 가능한 UI 컴포넌트 구조화 가능해. 단 진짜 잘 만들어야돼 ! ")])),_:1})]),_:1})]),_:1}),e(_,{label:"COMPONENT 예제 - Footer.vue",lang:"html",code:B}),e(n,null,{default:t(()=>[e(u,null,{default:t(()=>[e(s,null,{default:t(()=>l[2]||(l[2]=[r(" v-if / v-for / @click 등 스크립트 조금만 알면 금방 할수 있을껄? ")])),_:1})]),_:1})]),_:1}),e(n,null,{default:t(()=>[e(u,null,{default:t(()=>[e(s,null,{default:t(()=>l[3]||(l[3]=[r(" HTML + CSS 위에 얹는 느낌이라 친숙해. ")])),_:1})]),_:1})]),_:1}),e(n,null,{default:t(()=>[e(u,null,{default:t(()=>[e(s,null,{default:t(()=>l[4]||(l[4]=[r(" 스타일 + 로직 분리가 잘되어 있어서 큰 플젝에서 유리해! ")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{R as default};

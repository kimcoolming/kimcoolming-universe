import{_ as C,a as m}from"./BodyMaincard-Dr9ZdwOl.js";import{C as I}from"./CodeBlock-BaWmGqt9.js";import{_ as M}from"./index-BuSfLIVr.js";import{u as B}from"./vuetify-vZiJE5rC.js";import{c as $,r as A,a0 as N,a2 as o,$ as n,a1 as p,v as e,a3 as i,S as a,X as F,a4 as S,F as U,a7 as E}from"./vendor-DsTMh68j.js";import"./router-BfL3fPc_.js";import"./highlight-DLiHtH8K.js";import"./firebase-EYoWS5mi.js";const H={class:"text-h6 mb-2"},L=`<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="drawer = !drawer" class="d-md-none" />
    <v-toolbar-title>Responsive Menu</v-toolbar-title>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" :permanent="!isMobile" app>
    <v-list>
      <v-list-item
        v-for="item in navItems"
        :key="item.title"
        :title="item.title"
        :prepend-icon="item.icon"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'

const { mdAndDown } = useDisplay()
const isMobile = computed(() => mdAndDown.value)
const drawer = ref(!isMobile.value)

const navItems = [
  { title: '홈', icon: 'mdi-home' },
  { title: '소개', icon: 'mdi-information' },
  { title: '문의', icon: 'mdi-email' },
]
<\/script>`,R={__name:"responsive-menu",setup(T){const{mdAndDown:c}=B(),r=$(()=>c.value),s=A(!1),d=[{title:"홈",icon:"mdi-home"},{title:"소개",icon:"mdi-information"},{title:"문의",icon:"mdi-email"}],v=[{title:"구성 요소",key:"component"},{title:"설명",key:"description"}],u=[{component:"v-app-bar",description:"상단 고정 앱바. 모바일에선 햄버거 버튼 표시"},{component:"v-navigation-drawer",description:"좌측 사이드 메뉴. 모바일에선 토글 방식"},{component:"useDisplay()",description:"Vuetify 제공 반응형 디바이스 감지 훅"},{component:"v-list / v-list-item",description:"Drawer 내부 메뉴 항목 렌더링"}];return(X,t)=>{const _=n("v-data-table"),f=n("v-alert"),b=n("v-btn"),w=n("v-list-item"),y=n("v-list"),g=n("v-navigation-drawer"),D=n("v-sheet"),k=n("v-col"),V=n("v-row"),x=n("v-container");return p(),N(x,{fluid:""},{default:o(()=>[e(C),e(V,null,{default:o(()=>[e(k,{cols:"12"},{default:o(()=>[e(m,{title:"Vuetify 반응형 메뉴 구성"},{default:o(()=>[t[2]||(t[2]=i("p",null,[a(" Vuetify 3에서는 "),i("code",null,"v-app-bar"),a(", "),i("code",null,"v-navigation-drawer"),a(" 및 "),i("code",null,"useDisplay()"),a("를 통해 "),i("strong",null,"모바일과 데스크탑에 대응하는 반응형 메뉴"),a("를 쉽게 구현할 수 있습니다. ")],-1)),e(_,{headers:v,items:u,class:"custom-table mt-4 elevation-1","hide-default-footer":"",density:"comfortable"})]),_:1}),e(m,{title:"반응형 메뉴 UI 예시"},{default:o(()=>[e(f,{type:"info",class:"mb-4"},{default:o(()=>t[3]||(t[3]=[a(" 화면 크기에 따라 앱 바의 햄버거 아이콘이 나타나고, Drawer가 자동 전환됩니다. ")])),_:1}),e(D,{class:"pa-4 mb-4",elevation:"1"},{default:o(()=>[i("p",H,[t[4]||(t[4]=a(" 현재 디바이스: ")),i("strong",null,F(r.value?"모바일":"데스크탑"),1)]),e(b,{onClick:t[0]||(t[0]=l=>s.value=!s.value),color:"primary",class:"mb-2"},{default:o(()=>t[5]||(t[5]=[a("메뉴 열기/닫기")])),_:1}),e(g,{modelValue:s.value,"onUpdate:modelValue":t[1]||(t[1]=l=>s.value=l),permanent:!r.value,temporary:""},{default:o(()=>[e(y,{nav:""},{default:o(()=>[(p(),S(U,null,E(d,l=>e(w,{key:l.title,title:l.title,"prepend-icon":l.icon},null,8,["title","prepend-icon"])),64))]),_:1})]),_:1},8,["modelValue","permanent"])]),_:1}),e(I,{label:"반응형 메뉴 기본 코드 예시",lang:"vue",code:L})]),_:1})]),_:1})]),_:1})]),_:1})}}},Q=M(R,[["__scopeId","data-v-498ae329"]]);export{Q as default};

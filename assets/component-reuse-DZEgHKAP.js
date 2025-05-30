import{_ as v,a as l}from"./BodyMaincard-Bbj0aT1w.js";import{C as b}from"./CodeBlock-B4w196Ek.js";import{_ as B,c as C,w as o,r as a,o as x,b as t,a as r,g as s}from"./index-CQtuN14u.js";const y=`<template>
  <v-card class="mb-4" elevation="2">
    <v-card-title class="text-h6">{{ title }}</v-card-title>
    <v-card-subtitle v-if="subtitle">{{ subtitle }}</v-card-subtitle>
    <v-card-text>
      <slot />
    </v-card-text>
  </v-card>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String
});
<\/script>`,g={__name:"component-reuse",setup(k){const n=[{title:"항목",key:"feature"},{title:"설명",key:"description"}],c=[{feature:"Base 컴포넌트",description:"공통 UI 요소를 재사용 가능한 단위로 분리 (예: BaseCard, BaseButton 등)"},{feature:"Props 활용",description:"레이아웃이나 스타일을 유연하게 전달하기 위한 인터페이스"},{feature:"Slot 활용",description:"사용자가 내부 콘텐츠를 자유롭게 삽입 가능하도록 구조 설계"},{feature:"컴포지션",description:"기존 컴포넌트를 조합하여 새로운 기능의 컴포넌트를 생성"}];return(V,e)=>{const i=a("v-data-table"),d=a("v-alert"),u=a("v-btn"),_=a("BaseCard"),p=a("v-col"),f=a("v-row"),m=a("v-container");return x(),C(m,{fluid:""},{default:o(()=>[t(v),t(f,null,{default:o(()=>[t(p,{cols:"12"},{default:o(()=>[t(l,{title:"Vuetify 컴포넌트 재사용 전략"},{default:o(()=>[e[0]||(e[0]=r("p",null,[s(" 실무에서는 유사한 레이아웃, 카드, 버튼 등을 "),r("strong",null,"Base 컴포넌트"),s("로 추상화하여 재사용함으로써 유지보수성과 일관성을 높일 수 있습니다. ")],-1)),e[1]||(e[1]=r("p",null,[s(" 특히 Vuetify 컴포넌트는 "),r("code",null,"props"),s("와 "),r("code",null,"slots"),s("를 적극 활용해 다양한 UI 요구를 유연하게 처리할 수 있습니다. ")],-1)),t(i,{headers:n,items:c,class:"custom-table mt-4 elevation-1","hide-default-footer":"",density:"comfortable"})]),_:1}),t(l,{title:"재사용 카드 컴포넌트 예시 (BaseCard)"},{default:o(()=>[t(d,{type:"info",class:"mb-4"},{default:o(()=>e[2]||(e[2]=[s(" 아래 예시는 재사용 가능한 "),r("strong",null,"BaseCard.vue",-1),s(" 구성 예입니다. ")])),_:1}),t(_,{title:"공지사항",subtitle:"중요한 소식을 확인하세요"},{default:o(()=>[t(u,{color:"primary"},{default:o(()=>e[3]||(e[3]=[s("확인하기")])),_:1})]),_:1}),t(b,{label:"BaseCard.vue 예시",lang:"vue",code:y})]),_:1})]),_:1})]),_:1})]),_:1})}}},S=B(g,[["__scopeId","data-v-16044c2b"]]);export{S as default};

import{_ as L}from"./BaseBreadcrumb-DfC_GM7X.js";import{_ as c}from"./BodyMaincard--w3n3ewV.js";import{C as m}from"./CodeBlock-MNp1SLab.js";import{i as M,c as S,w as t,r as o,o as i,b as e,a as d,g as l,e as v,F as _,f as r,t as p,u}from"./index-BaJXCc7g.js";const J={__name:"tabs-accordion",setup(h){const s=M(0),f=[{title:"컴포넌트",key:"component"},{title:"설명",key:"description"}],w=[{component:"v-tabs",description:"탭 버튼과 컨텐츠 전환을 위한 컴포넌트"},{component:"v-tab",description:"탭 항목 버튼"},{component:"v-window / v-window-item",description:"탭별 콘텐츠 전환 영역"},{component:"v-expansion-panels",description:"여러 개의 아코디언 섹션 컨테이너"},{component:"v-expansion-panel",description:"단일 아코디언 항목"}],x=`
<template>
  <v-tabs v-model="tab">
    <v-tab>Tab 1</v-tab>
    <v-tab>Tab 2</v-tab>
  </v-tabs>
  <v-window v-model="tab">
    <v-window-item :value="0">
      <v-card class="pa-4">탭 1 콘텐츠</v-card>
    </v-window-item>
    <v-window-item :value="1">
      <v-card class="pa-4">탭 2 콘텐츠</v-card>
    </v-window-item>
  </v-window>
</template>
`.trim(),b=`
<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-title>제목</v-expansion-panel-title>
      <v-expansion-panel-text>내용입니다.</v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
`.trim(),V=[{title:"Vue란?",content:"Vue는 사용자 인터페이스를 만들기 위한 프론트엔드 프레임워크입니다."},{title:"Vuetify란?",content:"Vuetify는 Vue를 위한 Material Design 컴포넌트 프레임워크입니다."},{title:"컴포넌트란?",content:"컴포넌트는 재사용 가능한 UI 블록 단위입니다."}];return(j,a)=>{const y=o("v-data-table"),g=o("v-tab"),k=o("v-tabs"),B=o("v-card"),C=o("v-window-item"),I=o("v-window"),U=o("v-expansion-panel-title"),E=o("v-expansion-panel-text"),N=o("v-expansion-panel"),T=o("v-expansion-panels"),D=o("v-col"),F=o("v-row"),$=o("v-container");return i(),S($,{fluid:""},{default:t(()=>[e(L),e(F,null,{default:t(()=>[e(D,{cols:"12"},{default:t(()=>[e(c,{title:"Vuetify 탭 및 아코디언 개요"},{default:t(()=>[a[2]||(a[2]=d("p",null,[d("strong",null,"v-tabs"),l("와 "),d("strong",null,"v-expansion-panels"),l("는 정보를 섹션별로 구성하거나 접어서 숨기는 데에 유용한 UI 컴포넌트입니다. ")],-1)),e(y,{headers:f,items:w,class:"mt-4 elevation-1","hide-default-footer":"",density:"comfortable"})]),_:1}),e(c,{title:"탭 예시"},{default:t(()=>[e(k,{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=n=>s.value=n),"bg-color":"primary",dark:"",grow:""},{default:t(()=>[(i(),v(_,null,r(3,n=>e(g,{key:n},{default:t(()=>[l("탭 "+p(n),1)]),_:2},1024)),64))]),_:1},8,["modelValue"]),e(I,{modelValue:s.value,"onUpdate:modelValue":a[1]||(a[1]=n=>s.value=n)},{default:t(()=>[(i(),v(_,null,r(3,n=>e(C,{key:n,value:n-1},{default:t(()=>[e(B,{flat:"",class:"pa-4"},{default:t(()=>[l("탭 "+p(n)+"의 콘텐츠입니다.",1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(m,{label:"탭 컴포넌트 예시",lang:"html",code:u(x)},null,8,["code"])]),_:1}),e(c,{title:"아코디언 예시"},{default:t(()=>[e(T,{multiple:""},{default:t(()=>[(i(),v(_,null,r(V,(n,H)=>e(N,{key:H},{default:t(()=>[e(U,null,{default:t(()=>[l(p(n.title),1)]),_:2},1024),e(E,null,{default:t(()=>[l(p(n.content),1)]),_:2},1024)]),_:2},1024)),64))]),_:1}),e(m,{label:"아코디언 컴포넌트 예시",lang:"html",code:u(b)},null,8,["code"])]),_:1})]),_:1})]),_:1})]),_:1})}}};export{J as default};

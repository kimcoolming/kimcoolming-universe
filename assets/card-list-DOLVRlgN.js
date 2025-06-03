import{_ as F,a as s}from"./BodyMaincard-CDXdDXs8.js";import{C as p}from"./CodeBlock-CMCVPtN4.js";import{a0 as H,a2 as e,$ as n,a1 as v,v as t,a3 as i,S as l,u as f,a4 as L,F as S,a7 as T}from"./vendor-DsTMh68j.js";import"./router-BfL3fPc_.js";import"./index-Be0t6mFe.js";import"./firebase-EYoWS5mi.js";import"./vuetify-vZiJE5rC.js";import"./highlight-DLiHtH8K.js";const P={__name:"card-list",setup(U){const b=[{title:"컴포넌트",key:"component"},{title:"설명",key:"description"}],x=[{component:"v-card",description:"기본 카드 컴포넌트"},{component:"v-card-title, v-card-text, v-card-actions",description:"카드의 구조 구성 요소"},{component:"v-img",description:"카드 내 이미지 삽입용 컴포넌트"},{component:"elevation, rounded",description:"디자인 속성 (그림자, 둥글기 등)"},{component:"v-list, v-list-item",description:"목록 표현용 리스트 컴포넌트"}],y=`
<template>
  <v-card>
    <v-card-title>카드 제목</v-card-title>
    <v-card-text>내용을 여기에 작성합니다.</v-card-text>
    <v-card-actions>
      <v-btn color="primary">자세히</v-btn>
    </v-card-actions>
  </v-card>
</template>
`.trim(),g=`
<template>
  <v-list lines="two" density="comfortable">
    <v-list-subheader>콘텐츠 목록</v-list-subheader>
    <v-list-item
      title="Vue3 소개"
      subtitle="Vue3의 특징과 장점"
      prepend-icon="mdi-note-text"
      append-icon="mdi-chevron-right"
      rounded
    />
  </v-list>
</template>
`.trim(),V=[{title:"Vue3 소개",subtitle:"Vue3의 특징과 장점"},{title:"Vuetify란?",subtitle:"Vuetify의 기본 개념 설명"},{title:"프로젝트 구조",subtitle:"파일 구조 및 구성 요소 안내"}];return(q,o)=>{const k=n("v-data-table"),r=n("v-card-title"),w=n("v-card-text"),d=n("v-btn"),c=n("v-card-actions"),m=n("v-card"),a=n("v-col"),B=n("v-img"),h=n("v-card-subtitle"),u=n("v-row"),C=n("v-list-subheader"),E=n("v-list-item"),I=n("v-list"),N=n("v-sheet"),$=n("v-container");return v(),H($,{fluid:""},{default:e(()=>[t(F),t(u,null,{default:e(()=>[t(a,{cols:"12"},{default:e(()=>[t(s,{title:"Vuetify 카드 및 리스트 개요"},{default:e(()=>[o[0]||(o[0]=i("p",null,[i("strong",null,"v-card"),l("와 "),i("strong",null,"v-list"),l("는 Vuetify UI의 핵심 요소로, 정보를 시각적으로 구조화하는 데에 매우 유용합니다. ")],-1)),t(k,{headers:b,items:x,class:"mt-4 elevation-1","hide-default-footer":"",density:"comfortable"})]),_:1}),t(s,{title:"카드 예시"},{default:e(()=>[t(u,{dense:""},{default:e(()=>[t(a,{cols:"12",sm:"6",md:"4"},{default:e(()=>[t(m,{class:"pa-4",elevation:"2"},{default:e(()=>[t(r,null,{default:e(()=>o[1]||(o[1]=[l("제목")])),_:1}),t(w,null,{default:e(()=>o[2]||(o[2]=[l("카드 본문 내용입니다.")])),_:1}),t(c,null,{default:e(()=>[t(d,{text:"",color:"primary"},{default:e(()=>o[3]||(o[3]=[l("자세히")])),_:1})]),_:1})]),_:1})]),_:1}),t(a,{cols:"12",sm:"6",md:"4"},{default:e(()=>[t(m,{class:"pa-0",elevation:"2"},{default:e(()=>[t(B,{src:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",height:"160px",cover:""}),t(r,{class:"pa-3"},{default:e(()=>o[4]||(o[4]=[l("이미지 카드")])),_:1}),t(h,{class:"px-3"},{default:e(()=>o[5]||(o[5]=[l("부제목")])),_:1}),t(c,{class:"px-3 pb-3"},{default:e(()=>[t(d,{color:"primary",variant:"outlined"},{default:e(()=>o[6]||(o[6]=[l("열기")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(p,{label:"카드 코드 예시",lang:"html",code:f(y)},null,8,["code"])]),_:1}),t(s,{title:"리스트 예시"},{default:e(()=>[t(N,{class:"pa-2",color:"#f9f9f9",rounded:"",elevation:"1"},{default:e(()=>[t(I,{lines:"two",density:"comfortable"},{default:e(()=>[t(C,null,{default:e(()=>o[7]||(o[7]=[l("콘텐츠 목록")])),_:1}),(v(),L(S,null,T(V,(_,j)=>t(E,{key:j,title:_.title,subtitle:_.subtitle,rounded:"","prepend-icon":"mdi-note-text","append-icon":"mdi-chevron-right"},null,8,["title","subtitle"])),64))]),_:1})]),_:1}),t(p,{label:"리스트 코드 예시",lang:"html",code:f(g)},null,8,["code"])]),_:1})]),_:1})]),_:1})]),_:1})}}};export{P as default};

import{_ as x}from"./BaseBreadcrumb-DfC_GM7X.js";import{_ as d}from"./BodyMaincard--w3n3ewV.js";import{C as p}from"./CodeBlock-MNp1SLab.js";import{c as y,w as t,r as n,o as w,b as o,a as s,g as l,u as m}from"./index-BaJXCc7g.js";const I={__name:"responsive-layout",setup(V){const u=[{title:"브레이크포인트",key:"breakpoint"},{title:"설명",key:"description"}],f=[{breakpoint:"xs (>600px)",description:"모바일 장치용"},{breakpoint:"sm (≥600px)",description:"태블릿 가로 방향"},{breakpoint:"md (≥960px)",description:"작은 데스크탑"},{breakpoint:"lg (≥1280px)",description:"일반 데스크탑"},{breakpoint:"xl (≥1920px)",description:"대형 디스플레이"}],_=`
<template>
  <v-row>
    <v-col cols="12" sm="6" md="4">1</v-col>
    <v-col cols="12" sm="6" md="4">2</v-col>
    <v-col cols="12" sm="12" md="4">3</v-col>
  </v-row>
</template>
`.trim(),v=[{title:"클래스",key:"class"},{title:"설명",key:"description"}],b=[{class:"d-none",description:"모든 뷰포트에서 숨김"},{class:"d-{breakpoint}-none",description:"특정 breakpoint에서만 숨김 (예: d-sm-none)"},{class:"d-{breakpoint}-block",description:"특정 breakpoint에서 블록 표시 (예: d-md-block)"}],k=`
<template>
  <v-row>
    <v-col cols="12" class="d-none d-md-block">
      이 텍스트는 md 이상에서만 보입니다
    </v-col>
  </v-row>
</template>
`.trim();return(B,e)=>{const r=n("v-data-table"),i=n("v-card"),a=n("v-col"),c=n("v-row"),g=n("v-container");return w(),y(g,{fluid:""},{default:t(()=>[o(x),o(c,null,{default:t(()=>[o(a,{cols:"12"},{default:t(()=>[o(d,{title:"Vuetify 반응형 레이아웃 개요"},{default:t(()=>[e[0]||(e[0]=s("p",null,[l(" Vuetify는 "),s("strong",null,"12-column 그리드 시스템"),l("을 기반으로, 다양한 화면 크기에 따라 자동으로 레이아웃을 조정하는 "),s("strong",null,"반응형(Responsive)"),l(" 설계를 지원합니다. ")],-1)),o(r,{headers:u,items:f,class:"mt-4 elevation-1","hide-default-footer":"",density:"comfortable"})]),_:1}),o(d,{title:"기본 예시"},{default:t(()=>[e[4]||(e[4]=s("p",null,"아래는 각 브레이크포인트에 따라 열 크기를 설정한 예시입니다:",-1)),o(p,{label:"반응형 열 예시",lang:"html",code:m(_)},null,8,["code"]),o(c,{class:"text-center mt-6"},{default:t(()=>[o(a,{cols:"12",sm:"6",md:"4",class:"pa-2"},{default:t(()=>[o(i,{class:"pa-4",color:"indigo lighten-4"},{default:t(()=>e[1]||(e[1]=[l("cols=12 sm=6 md=4")])),_:1})]),_:1}),o(a,{cols:"12",sm:"6",md:"4",class:"pa-2"},{default:t(()=>[o(i,{class:"pa-4",color:"indigo lighten-4"},{default:t(()=>e[2]||(e[2]=[l("cols=12 sm=6 md=4")])),_:1})]),_:1}),o(a,{cols:"12",sm:"12",md:"4",class:"pa-2"},{default:t(()=>[o(i,{class:"pa-4",color:"indigo lighten-4"},{default:t(()=>e[3]||(e[3]=[l("cols=12 sm=12 md=4")])),_:1})]),_:1})]),_:1})]),_:1}),o(d,{title:"숨김 및 표시 유틸리티"},{default:t(()=>[e[5]||(e[5]=s("p",null,[l(" Vuetify는 특정 화면 크기에서 요소를 "),s("strong",null,"숨기거나"),l(),s("strong",null,"보이게"),l(" 하는 클래스도 제공합니다: ")],-1)),o(r,{headers:v,items:b,class:"mt-4 elevation-1","hide-default-footer":"",density:"comfortable"}),o(p,{label:"숨김 클래스 예시",lang:"html",code:m(k)},null,8,["code"])]),_:1})]),_:1})]),_:1})]),_:1})}}};export{I as default};

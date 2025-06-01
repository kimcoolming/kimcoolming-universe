import{_ as b,a}from"./BodyMaincard-ydeyrEw-.js";import{C as r}from"./CodeBlock-CLVPa6jm.js";import{_ as y}from"./index-C2JVJAHJ.js";import{a0 as g,a2 as s,$ as n,a1 as k,v as t,a3 as l,S as e,u as c}from"./vendor-DsKT1S8o.js";import"./router-DV_bhxDE.js";import"./highlight-DLiHtH8K.js";import"./firebase-BDPEIw7a.js";import"./vuetify-D5VncFeE.js";const w={__name:"grid-system",setup(h){const i=`
<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-sheet class="pa-4" color="primary" dark>Column 1</v-sheet>
      </v-col>
      <v-col cols="6">
        <v-sheet class="pa-4" color="secondary" dark>Column 2</v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
`.trim(),m=`
<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="4">
        <v-sheet class="pa-4" color="primary" dark>Responsive Column</v-sheet>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-sheet class="pa-4" color="secondary" dark>Responsive Column</v-sheet>
      </v-col>
      <v-col cols="12" sm="12" md="4">
        <v-sheet class="pa-4" color="success" dark>Responsive Column</v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
`.trim(),p=`
<template>
  <v-container>
    <v-row justify="space-between" align="center">
      <v-col cols="4">
        <v-sheet class="pa-4" color="primary" dark>Left</v-sheet>
      </v-col>
      <v-col cols="4">
        <v-sheet class="pa-4" color="secondary" dark>Right</v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
`.trim(),d=[{title:"브레이크포인트",key:"label"},{title:"약칭",key:"alias"},{title:"화면 크기",key:"size"}],v=[{label:"Extra Small",alias:"xs",size:"< 600px"},{label:"Small",alias:"sm",size:"600px - 960px"},{label:"Medium",alias:"md",size:"960px - 1264px"},{label:"Large",alias:"lg",size:"1264px - 1904px"},{label:"Extra Large",alias:"xl",size:"> 1904px"}];return(C,o)=>{const u=n("v-data-table"),f=n("v-col"),_=n("v-row"),x=n("v-container");return k(),g(x,{fluid:""},{default:s(()=>[t(b),t(_,null,{default:s(()=>[t(f,{cols:"12"},{default:s(()=>[t(a,{title:"Vuetify 그리드 시스템 개요"},{default:s(()=>o[0]||(o[0]=[l("p",null,[l("strong",null,"Vuetify"),e("의 그리드 시스템은 "),l("strong",null,"12 포인트 플렉스박스 기반"),e("으로 구성되어 있으며, 반응형 레이아웃을 손쉽게 구현할 수 있도록 도와줍니다. ")],-1),l("p",null,"주요 구성 요소는 다음과 같습니다:",-1),l("ul",{class:"desc-list"},[l("li",null,[l("code",null,"v-container"),e(": 레이아웃의 기본 컨테이너")]),l("li",null,[l("code",null,"v-row"),e(": 행(row)을 정의")]),l("li",null,[l("code",null,"v-col"),e(": 열(column)을 정의")])],-1)])),_:1}),t(a,{title:"기본 사용 예시"},{default:s(()=>[o[1]||(o[1]=l("p",null,"아래는 기본적인 그리드 시스템의 사용 예시입니다:",-1)),t(r,{label:"기본 그리드 예시",lang:"html",code:c(i)},null,8,["code"])]),_:1}),t(a,{title:"반응형 브레이크포인트"},{default:s(()=>[o[2]||(o[2]=l("p",null,[e(" Vuetify는 다양한 화면 크기에 대응하기 위해 다음과 같은 "),l("strong",null,"브레이크포인트(Breakpoint)"),e("를 제공합니다: ")],-1)),t(u,{headers:d,items:v,class:"mt-4 elevation-1","hide-default-footer":"",density:"comfortable"}),o[3]||(o[3]=l("p",{class:"mt-4"},[e(" 각 브레이크포인트에 따라 "),l("code",null,"v-col"),e("에 속성을 지정하여 반응형 레이아웃을 구현할 수 있습니다. ")],-1)),t(r,{label:"반응형 그리드 예시",lang:"html",code:c(m)},null,8,["code"])]),_:1}),t(a,{title:"정렬 및 간격 조정"},{default:s(()=>[o[4]||(o[4]=l("p",null,[l("code",null,"v-row"),e("와 "),l("code",null,"v-col"),e("에는 정렬과 간격을 조정할 수 있는 다양한 속성이 있습니다:")],-1)),o[5]||(o[5]=l("ul",{class:"desc-list"},[l("li",null,[l("code",null,"justify"),e(": 수평 정렬 (start, center, end, space-between, space-around)")]),l("li",null,[l("code",null,"align"),e(": 수직 정렬 (start, center, end)")]),l("li",null,[l("code",null,"no-gutters"),e(": 열 사이의 간격 제거")])],-1)),t(r,{label:"정렬 및 간격 조정 예시",lang:"html",code:c(p)},null,8,["code"])]),_:1})]),_:1})]),_:1})]),_:1})}}},$=y(w,[["__scopeId","data-v-f67bf4df"]]);export{$ as default};

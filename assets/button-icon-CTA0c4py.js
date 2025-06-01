import{_ as V,a as r}from"./BodyMaincard-ydeyrEw-.js";import{C as m}from"./CodeBlock-CLVPa6jm.js";import{a0 as w,a2 as e,$ as a,a1 as B,v as t,a3 as l,S as n,u}from"./vendor-DsKT1S8o.js";import"./router-DV_bhxDE.js";import"./index-C2JVJAHJ.js";import"./firebase-BDPEIw7a.js";import"./vuetify-D5VncFeE.js";import"./highlight-DLiHtH8K.js";const j={__name:"button-icon",setup(C){const v=[{title:"버튼 타입",key:"type"},{title:"설명",key:"description"}],p=[{type:"v-btn",description:"기본 버튼"},{type:'variant="outlined"',description:"외곽선 버튼"},{type:'variant="text"',description:"텍스트만 있는 버튼"},{type:"icon",description:"아이콘 전용 버튼 (v-icon과 함께 사용)"}],_=`
<template>
  <v-row>
    <v-btn color="primary">기본</v-btn>
    <v-btn color="secondary" variant="outlined">아웃라인</v-btn>
    <v-btn color="success" variant="text">텍스트</v-btn>
    <v-btn icon>
      <v-icon>mdi-thumb-up</v-icon>
    </v-btn>
  </v-row>
</template>
`.trim(),f=[{title:"사용 방식",key:"usage"},{title:"예시",key:"example"}],b=[{usage:"v-icon 단독 사용",example:"<v-icon>mdi-home</v-icon>"},{usage:"버튼 내 아이콘",example:"<v-btn><v-icon>mdi-heart</v-icon></v-btn>"},{usage:"텍스트 + 아이콘 조합",example:'<v-btn icon prepend-icon="mdi-star">즐겨찾기</v-btn>'}],y=`
<template>
  <v-icon color="primary">mdi-home</v-icon>
  <v-btn icon>
    <v-icon>mdi-heart</v-icon>
  </v-btn>
  <v-btn prepend-icon="mdi-star">즐겨찾기</v-btn>
</template>
`.trim();return(I,o)=>{const c=a("v-data-table"),s=a("v-btn"),i=a("v-col"),x=a("v-icon"),d=a("v-row"),g=a("v-sheet"),k=a("v-container");return B(),w(k,{fluid:""},{default:e(()=>[t(V),t(d,null,{default:e(()=>[t(i,{cols:"12"},{default:e(()=>[t(r,{title:"Vuetify 버튼 및 아이콘 개요"},{default:e(()=>[o[0]||(o[0]=l("p",null,[n(" Vuetify는 "),l("strong",null,"다양한 버튼 스타일"),n("과 "),l("strong",null,"Material Design Icons"),n("를 통합 제공하여 버튼과 아이콘을 손쉽게 커스터마이징할 수 있습니다. ")],-1)),t(c,{headers:v,items:p,class:"mt-4 elevation-1","hide-default-footer":"",density:"comfortable"})]),_:1}),t(r,{title:"버튼 예시"},{default:e(()=>[t(g,{class:"pa-4 mb-4",color:"#F3F4F6",rounded:""},{default:e(()=>[o[5]||(o[5]=l("p",{class:"text-body-2 mb-2"},"아래는 다양한 스타일의 Vuetify 버튼 예시입니다:",-1)),t(d,{class:"mt-2",align:"center",justify:"start",dense:""},{default:e(()=>[t(i,{cols:"auto"},{default:e(()=>[t(s,{color:"primary"},{default:e(()=>o[1]||(o[1]=[n("기본 버튼")])),_:1})]),_:1}),t(i,{cols:"auto"},{default:e(()=>[t(s,{color:"secondary",variant:"outlined"},{default:e(()=>o[2]||(o[2]=[n("아웃라인 버튼")])),_:1})]),_:1}),t(i,{cols:"auto"},{default:e(()=>[t(s,{color:"success",variant:"text"},{default:e(()=>o[3]||(o[3]=[n("텍스트 버튼")])),_:1})]),_:1}),t(i,{cols:"auto"},{default:e(()=>[t(s,{icon:""},{default:e(()=>[t(x,null,{default:e(()=>o[4]||(o[4]=[n("mdi-thumb-up")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(m,{label:"버튼 코드 예시",lang:"html",code:u(_)},null,8,["code"])]),_:1}),t(r,{title:"아이콘 사용법"},{default:e(()=>[o[6]||(o[6]=l("p",null,[n(" Vuetify는 기본적으로 "),l("code",null,"Material Design Icons"),n("를 사용하며, "),l("code",null,"<v-icon>"),n(" 컴포넌트로 쉽게 아이콘을 삽입할 수 있습니다. ")],-1)),t(c,{headers:f,items:b,class:"mt-4 elevation-1","hide-default-footer":"",density:"comfortable"}),t(m,{label:"아이콘 코드 예시",lang:"html",code:u(y)},null,8,["code"])]),_:1})]),_:1})]),_:1})]),_:1})}}};export{j as default};

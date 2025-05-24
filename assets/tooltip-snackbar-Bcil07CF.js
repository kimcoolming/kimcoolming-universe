import{_ as g}from"./BaseBreadcrumb-DfC_GM7X.js";import{_ as c}from"./BodyMaincard--w3n3ewV.js";import{C as d}from"./CodeBlock-MNp1SLab.js";import{i as u,c as V,w as e,r as n,o as B,b as o,a as m,g as a,q as p}from"./index-BaJXCc7g.js";const C=`<template>
  <v-tooltip text="상단 툴팁" location="top" arrow>
    <template #activator="{ props }">
      <v-btn v-bind="props" color="primary">Top</v-btn>
    </template>
  </v-tooltip>

  <v-tooltip text="하단 툴팁" location="bottom" arrow>
    <template #activator="{ props }">
      <v-btn v-bind="props" color="secondary">Bottom</v-btn>
    </template>
  </v-tooltip>

  <v-tooltip text="왼쪽 툴팁" location="left" arrow>
    <template #activator="{ props }">
      <v-btn v-bind="props" color="success">Left</v-btn>
    </template>
  </v-tooltip>

  <v-tooltip text="오른쪽 툴팁" location="right" arrow>
    <template #activator="{ props }">
      <v-btn v-bind="props" color="info">Right</v-btn>
    </template>
  </v-tooltip>
</template>`,$=`<template>
  <v-btn @click="snackbar = true">스낵바 열기</v-btn>
  <v-snackbar v-model="snackbar" timeout="3000" color="deep-purple-accent-4">
    저장되었습니다!
    <template #actions>
      <v-btn icon @click="snackbar = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>`,q={__name:"tooltip-snackbar",setup(N){const i=u(!1);u(!0);const b=[{title:"컴포넌트",key:"component"},{title:"설명",key:"description"}],f=[{component:"v-tooltip",description:"요소에 마우스를 올리면 툴팁을 보여줍니다"},{component:"location, arrow",description:"툴팁 위치 설정 및 화살표 표시 옵션"},{component:"v-snackbar",description:"일시적인 알림 메시지를 화면 하단에 표시합니다"},{component:"timeout",description:"스낵바 자동 닫힘 시간 (ms)"},{component:"v-btn & v-icon",description:"닫기 버튼 아이콘 및 트리거 구성 요소"}];return(T,t)=>{const _=n("v-data-table"),r=n("v-btn"),s=n("v-tooltip"),v=n("v-row"),k=n("v-icon"),x=n("v-snackbar"),w=n("v-col"),y=n("v-container");return B(),V(y,{fluid:""},{default:e(()=>[o(g),o(v,null,{default:e(()=>[o(w,{cols:"12"},{default:e(()=>[o(c,{title:"Vuetify 툴팁 및 스낵바 개요"},{default:e(()=>[t[3]||(t[3]=m("p",null,[m("strong",null,"v-tooltip"),a("과 "),m("strong",null,"v-snackbar"),a("는 사용자에게 추가 정보나 피드백 메시지를 제공할 때 사용하는 대표적인 컴포넌트입니다. ")],-1)),o(_,{headers:b,items:f,class:"custom-table mt-4 elevation-1","hide-default-footer":"",density:"comfortable"})]),_:1}),o(c,{title:"툴팁 예시"},{default:e(()=>[o(v,{align:"center",justify:"space-around",class:"mb-6"},{default:e(()=>[o(s,{text:"상단 툴팁",location:"top",arrow:"",class:"styled-tooltip top-tooltip"},{activator:e(({props:l})=>[o(r,p(l,{color:"primary"}),{default:e(()=>t[4]||(t[4]=[a("Top")])),_:2},1040)]),_:1}),o(s,{text:"하단 툴팁",location:"bottom",arrow:"",class:"styled-tooltip bottom-tooltip"},{activator:e(({props:l})=>[o(r,p(l,{color:"secondary"}),{default:e(()=>t[5]||(t[5]=[a("Bottom")])),_:2},1040)]),_:1}),o(s,{text:"왼쪽 툴팁",location:"left",arrow:"",class:"styled-tooltip left-tooltip"},{activator:e(({props:l})=>[o(r,p(l,{color:"success"}),{default:e(()=>t[6]||(t[6]=[a("Left")])),_:2},1040)]),_:1}),o(s,{text:"오른쪽 툴팁",location:"right",arrow:"",class:"styled-tooltip right-tooltip"},{activator:e(({props:l})=>[o(r,p(l,{color:"info"}),{default:e(()=>t[7]||(t[7]=[a("Right")])),_:2},1040)]),_:1})]),_:1}),o(d,{label:"툴팁 코드 예시",lang:"html",code:C})]),_:1}),o(c,{title:"스낵바 예시"},{default:e(()=>[o(r,{color:"success",onClick:t[0]||(t[0]=l=>i.value=!0)},{default:e(()=>t[8]||(t[8]=[a("스낵바 열기")])),_:1}),o(x,{modelValue:i.value,"onUpdate:modelValue":t[2]||(t[2]=l=>i.value=l),timeout:"3000",color:"deep-purple-accent-4"},{actions:e(()=>[o(r,{icon:"",onClick:t[1]||(t[1]=l=>i.value=!1)},{default:e(()=>[o(k,null,{default:e(()=>t[9]||(t[9]=[a("mdi-close")])),_:1})]),_:1})]),default:e(()=>[t[10]||(t[10]=a(" 저장되었습니다! "))]),_:1},8,["modelValue"]),o(d,{label:"스낵바 코드 예시",lang:"html",code:$})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{q as default};

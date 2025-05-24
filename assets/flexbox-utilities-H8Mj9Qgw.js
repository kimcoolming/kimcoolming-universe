import{_ as H}from"./BaseBreadcrumb-DfC_GM7X.js";import{_ as r}from"./BodyMaincard--w3n3ewV.js";import{C as o}from"./CodeBlock-MNp1SLab.js";import{c as V,w as s,r as a,o as B,b as e,a as l,g as d,u as n}from"./index-BaJXCc7g.js";const D={__name:"flexbox-utilities",setup(E){const c=[{title:"유틸리티 클래스",key:"class"},{title:"설명",key:"description"}],p=[{class:"d-flex",description:"요소를 flex 컨테이너로 설정"},{class:"flex-row, flex-column",description:"flex 방향 설정"},{class:"justify-*",description:"주 축 정렬 설정 (start, center, end 등)"},{class:"align-*",description:"교차 축 정렬 설정 (start, center, stretch 등)"},{class:"flex-wrap, flex-nowrap",description:"줄 바꿈 설정"},{class:"order-*",description:"요소의 순서 설정"},{class:"flex-grow-*, flex-shrink-*",description:"요소의 성장/축소 설정"}],f=[{title:"클래스",key:"class"},{title:"설명",key:"description"}],m=[{class:"flex-row",description:"가로 방향 (기본값)"},{class:"flex-row-reverse",description:"가로 반대 방향"},{class:"flex-column",description:"세로 방향"},{class:"flex-column-reverse",description:"세로 반대 방향"}],u=`
<template>
  <div class="d-flex flex-row">
    <div>Item 1</div>
    <div>Item 2</div>
  </div>
</template>
`.trim(),v=[{title:"클래스",key:"class"},{title:"설명",key:"description"}],x=[{class:"justify-start",description:"주 축 시작 정렬"},{class:"justify-center",description:"주 축 중앙 정렬"},{class:"justify-end",description:"주 축 끝 정렬"},{class:"justify-space-between",description:"주 축 양 끝 정렬"},{class:"justify-space-around",description:"주 축 균등 정렬"},{class:"align-start",description:"교차 축 시작 정렬"},{class:"align-center",description:"교차 축 중앙 정렬"},{class:"align-end",description:"교차 축 끝 정렬"},{class:"align-stretch",description:"교차 축 늘이기"}],y=`
<template>
  <div class="d-flex justify-center align-center">
    <div>Centered Item</div>
  </div>
</template>
`.trim(),_=[{title:"클래스",key:"class"},{title:"설명",key:"description"}],w=[{class:"flex-nowrap",description:"줄 바꿈 없음 (기본값)"},{class:"flex-wrap",description:"줄 바꿈 허용"},{class:"flex-wrap-reverse",description:"줄 바꿈 반대 방향"}],g=`
<template>
  <div class="d-flex flex-wrap">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </div>
</template>
`.trim(),k=[{title:"클래스",key:"class"},{title:"설명",key:"description"}],b=[{class:"order-0",description:"순서 0"},{class:"order-1",description:"순서 1"},{class:"order-2",description:"순서 2"},{class:"order-3",description:"순서 3"},{class:"order-first",description:"첫 번째로 정렬"},{class:"order-last",description:"마지막으로 정렬"},{class:"flex-grow-0",description:"성장 없음"},{class:"flex-grow-1",description:"성장 허용"},{class:"flex-shrink-0",description:"축소 없음"},{class:"flex-shrink-1",description:"축소 허용"}],I=`
<template>
  <div class="d-flex">
    <div class="order-2">Item 1</div>
    <div class="order-1">Item 2</div>
    <div class="order-3">Item 3</div>
  </div>
</template>
`.trim();return(F,t)=>{const i=a("v-data-table"),h=a("v-col"),j=a("v-row"),C=a("v-container");return B(),V(C,{fluid:""},{default:s(()=>[e(H),e(j,null,{default:s(()=>[e(h,{cols:"12"},{default:s(()=>[e(r,{title:"Vuetify 플렉스박스 유틸리티 개요"},{default:s(()=>[t[0]||(t[0]=l("p",null,[l("strong",null,"Vuetify"),d("는 "),l("strong",null,"CSS Flexbox"),d("를 기반으로 한 다양한 유틸리티 클래스를 제공하여, 레이아웃을 손쉽게 구성할 수 있도록 도와줍니다. ")],-1)),e(i,{headers:c,items:p,class:"elevation-1 mt-4","hide-default-footer":"",density:"comfortable"})]),_:1}),e(r,{title:"플렉스 방향 (Flex Direction)"},{default:s(()=>[t[1]||(t[1]=l("p",null,"요소의 배치 방향을 설정할 수 있습니다:",-1)),e(i,{headers:f,items:m,class:"mt-4 elevation-1","hide-default-footer":"",density:"comfortable"}),e(o,{label:"flex-direction 예시",lang:"html",code:n(u)},null,8,["code"])]),_:1}),e(r,{title:"정렬 (Justify & Align)"},{default:s(()=>[t[2]||(t[2]=l("p",null,"요소의 정렬을 설정할 수 있습니다:",-1)),e(i,{headers:v,items:x,class:"mt-4 elevation-1","hide-default-footer":"",density:"comfortable"}),e(o,{label:"정렬 예시",lang:"html",code:n(y)},null,8,["code"])]),_:1}),e(r,{title:"줄 바꿈 (Flex Wrap)"},{default:s(()=>[t[3]||(t[3]=l("p",null,"요소의 줄 바꿈 여부를 설정할 수 있습니다:",-1)),e(i,{headers:_,items:w,class:"mt-4 elevation-1","hide-default-footer":"",density:"comfortable"}),e(o,{label:"flex-wrap 예시",lang:"html",code:n(g)},null,8,["code"])]),_:1}),e(r,{title:"순서 및 성장/축소 (Order & Grow/Shrink)"},{default:s(()=>[t[4]||(t[4]=l("p",null,"요소의 순서 및 성장/축소를 설정할 수 있습니다:",-1)),e(i,{headers:k,items:b,class:"mt-4 elevation-1","hide-default-footer":"",density:"comfortable"}),e(o,{label:"order 및 grow/shrink 예시",lang:"html",code:n(I)},null,8,["code"])]),_:1})]),_:1})]),_:1})]),_:1})}}};export{D as default};

import{_ as m}from"./BaseBreadcrumb-DfC_GM7X.js";import{_ as n}from"./BodyMaincard--w3n3ewV.js";import{C as r}from"./CodeBlock-MNp1SLab.js";import{c as f,w as o,r as c,o as _,b as t,a as l,g as e,u as v}from"./index-BaJXCc7g.js";const w={__name:"vue2-vs-vue3",setup(V){const a=`
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
`.trim(),d=`
<template>
  <button @click="increment">클릭: {{ count }}</button>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)
const increment = () => {
  count.value++
}
</scr`+`ipt>
`.trim();return(x,u)=>{const s=c("v-col"),i=c("v-row"),p=c("v-container");return _(),f(p,{fluid:""},{default:o(()=>[t(m),t(i,null,{default:o(()=>[t(s,{cols:"12"},{default:o(()=>[t(n,{title:"Vue 2와 Vue 3의 차이점"},{default:o(()=>u[0]||(u[0]=[l("p",null," Vue 3는 Vue 2의 단점을 보완하고 성능 개선과 컴포넌트 관리 효율성을 높이기 위해 등장했습니다. 아래는 퍼블리셔가 알아두면 좋은 핵심 변화 포인트입니다. ",-1)])),_:1}),t(n,{title:"1. API 스타일의 변화: Options vs Composition"},{default:o(()=>[u[1]||(u[1]=l("p",null,[l("strong",null,"Vue 2:"),e(),l("code",null,"data"),e(", "),l("code",null,"methods"),e(", "),l("code",null,"computed"),e(" 등 옵션을 나눠 작성"),l("br"),l("strong",null,"Vue 3:"),e(),l("code",null,"setup()"),e(" 안에서 변수와 함수 선언으로 더 직관적인 흐름 ")],-1)),t(i,null,{default:o(()=>[t(s,{cols:"12",md:"6"},{default:o(()=>[t(r,{label:"Vue 2 예시",lang:"js",code:v(a)},null,8,["code"])]),_:1}),t(s,{cols:"12",md:"6"},{default:o(()=>[t(r,{label:"Vue 3 예시 (Composition API)",lang:"js",code:d})]),_:1})]),_:1})]),_:1}),t(n,{title:"2. Reactivity 시스템 개선"},{default:o(()=>u[2]||(u[2]=[l("ul",{class:"desc-list"},[l("li",null,"Vue 3는 Proxy 기반 반응형 → 더 빠르고 정확한 감지"),l("li",null,[l("code",null,"ref"),e(", "),l("code",null,"reactive"),e("로 반응형 변수 선언")]),l("li",null,[e("Vue 2는 "),l("code",null,"Object.defineProperty"),e(" 기반 → 한계 있었음")])],-1)])),_:1}),t(n,{title:"3. 템플릿 문법은 거의 동일하지만..."},{default:o(()=>u[3]||(u[3]=[l("ul",{class:"desc-list"},[l("li",null,[l("code",null,"v-if"),e(", "),l("code",null,"v-for"),e(", "),l("code",null,"@click"),e(" 등은 그대로")]),l("li",null,[e("Vue 3는 "),l("code",null,"<script setup>"),e(" 지원으로 코드량 감소")]),l("li",null,"Typescript 연동이 기본에 가까워짐")],-1)])),_:1}),t(n,{title:"4. 퍼블리셔 관점의 변화 포인트"},{default:o(()=>u[4]||(u[4]=[l("ul",{class:"desc-list"},[l("li",null,"작은 컴포넌트 만들고 props로 연결하는 흐름은 동일"),l("li",null,"템플릿 구조는 거의 변하지 않아 진입장벽 낮음"),l("li",null,"파일 구조와 작업 방식은 더 깔끔해짐")],-1)])),_:1})]),_:1})]),_:1})]),_:1})}}};export{w as default};

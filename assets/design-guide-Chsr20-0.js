import{_ as x,a as c}from"./BodyMaincard-ydeyrEw-.js";import{C as d}from"./CodeBlock-CLVPa6jm.js";import{_ as g}from"./index-C2JVJAHJ.js";import{a0 as b,a2 as t,$ as r,a1 as u,v as e,a3 as a,S as s,a4 as h,F as S,a7 as V,X as C}from"./vendor-DsKT1S8o.js";import"./router-DV_bhxDE.js";import"./highlight-DLiHtH8K.js";import"./firebase-BDPEIw7a.js";import"./vuetify-D5VncFeE.js";const k={class:"text-caption"},B=`// main.js 또는 vuetify.js
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#1976D2',
          secondary: '#424242',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
        },
      },
    },
  },
})`,F=`<p class="text-h4">헤드라인</p>
<p class="text-subtitle-1">서브타이틀</p>
<p class="text-body-2">본문 텍스트</p>
<p class="text-caption">캡션</p>`,I={__name:"design-guide",setup(j){const p=[{title:"항목",key:"feature"},{title:"설명",key:"description"}],m=[{feature:"컬러 시스템",description:"Vuetify 테마 내에서 정의된 primary, secondary 등을 활용하여 일관된 색상 유지"},{feature:"타이포그래피",description:"Material Design 기준의 폰트 크기/무게를 클래스 형태로 제공"},{feature:"간격 (Spacing)",description:"Vuetify의 margin(p-) / padding(m-) 유틸리티 클래스로 간격 제어"},{feature:"컴포넌트 스타일 통일",description:"버튼, 카드 등의 공통 UI 컴포넌트를 Base 단위로 정의하여 일관성 확보"}],f=[{name:"Primary",value:"primary"},{name:"Secondary",value:"secondary"},{name:"Error",value:"error"},{name:"Info",value:"info"},{name:"Success",value:"success"}];return(D,o)=>{const _=r("v-data-table"),y=r("v-card"),l=r("v-col"),n=r("v-row"),v=r("v-container");return u(),b(v,{fluid:""},{default:t(()=>[e(x),e(n,null,{default:t(()=>[e(l,{cols:"12"},{default:t(()=>[e(c,{title:"Vuetify 디자인 가이드 개요"},{default:t(()=>[o[0]||(o[0]=a("p",null,[s(" Vuetify는 Material Design 시스템을 기반으로 "),a("strong",null,"일관된 UI/UX 구성"),s("을 지향합니다. 실무에서는 공통된 컬러, 타이포그래피, 간격, 컴포넌트 스타일을 가이드화하여 프로젝트 전반에 걸쳐 재사용성을 높입니다. ")],-1)),e(_,{headers:p,items:m,class:"custom-table mt-4 elevation-1","hide-default-footer":"",density:"comfortable"})]),_:1}),e(c,{title:"컬러 시스템 (Theme Colors)"},{default:t(()=>[o[1]||(o[1]=a("p",null,[s(" Vuetify는 "),a("code",null,"primary"),s(", "),a("code",null,"secondary"),s(", "),a("code",null,"error"),s(" 등의 컬러를 테마 설정에서 관리하며, SCSS 변수 및 CSS 변수로도 활용 가능합니다. ")],-1)),e(n,{class:"mb-4",dense:""},{default:t(()=>[(u(),h(S,null,V(f,i=>e(l,{cols:"auto",key:i.name},{default:t(()=>[e(y,{color:i.value,class:"pa-4",dark:"",rounded:""},{default:t(()=>[a("div",k,C(i.name),1)]),_:2},1032,["color"])]),_:2},1024)),64))]),_:1}),e(d,{label:"main.js에서 테마 설정 예시",lang:"js",code:B})]),_:1}),e(c,{title:"타이포그래피 클래스 예시"},{default:t(()=>[e(n,null,{default:t(()=>[e(l,{cols:"12",sm:"6"},{default:t(()=>o[2]||(o[2]=[a("p",{class:"text-h4"},"text-h4 - 주요 헤드라인",-1),a("p",{class:"text-subtitle-1"},"text-subtitle-1 - 부제목",-1),a("p",{class:"text-body-2"},"text-body-2 - 본문",-1),a("p",{class:"text-caption"},"text-caption - 캡션",-1)])),_:1})]),_:1}),e(d,{label:"Vuetify 타이포그래피 클래스",lang:"html",code:F})]),_:1})]),_:1})]),_:1})]),_:1})}}},A=g(I,[["__scopeId","data-v-37928812"]]);export{A as default};

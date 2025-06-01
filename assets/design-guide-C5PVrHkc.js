import{_ as g,a as i}from"./BodyMaincard-BHSez2PV.js";import{C as d}from"./CodeBlock-qOhL21vW.js";import{_ as x,c as b,w as t,r as l,o as u,b as e,a,g as o,e as h,F as V,f as C,t as S}from"./index-Dl-dvEsR.js";const k={class:"text-caption"},B=`// main.js 또는 vuetify.js
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
<p class="text-caption">캡션</p>`,I={__name:"design-guide",setup(j){const p=[{title:"항목",key:"feature"},{title:"설명",key:"description"}],m=[{feature:"컬러 시스템",description:"Vuetify 테마 내에서 정의된 primary, secondary 등을 활용하여 일관된 색상 유지"},{feature:"타이포그래피",description:"Material Design 기준의 폰트 크기/무게를 클래스 형태로 제공"},{feature:"간격 (Spacing)",description:"Vuetify의 margin(p-) / padding(m-) 유틸리티 클래스로 간격 제어"},{feature:"컴포넌트 스타일 통일",description:"버튼, 카드 등의 공통 UI 컴포넌트를 Base 단위로 정의하여 일관성 확보"}],f=[{name:"Primary",value:"primary"},{name:"Secondary",value:"secondary"},{name:"Error",value:"error"},{name:"Info",value:"info"},{name:"Success",value:"success"}];return(w,s)=>{const _=l("v-data-table"),y=l("v-card"),n=l("v-col"),r=l("v-row"),v=l("v-container");return u(),b(v,{fluid:""},{default:t(()=>[e(g),e(r,null,{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(i,{title:"Vuetify 디자인 가이드 개요"},{default:t(()=>[s[0]||(s[0]=a("p",null,[o(" Vuetify는 Material Design 시스템을 기반으로 "),a("strong",null,"일관된 UI/UX 구성"),o("을 지향합니다. 실무에서는 공통된 컬러, 타이포그래피, 간격, 컴포넌트 스타일을 가이드화하여 프로젝트 전반에 걸쳐 재사용성을 높입니다. ")],-1)),e(_,{headers:p,items:m,class:"custom-table mt-4 elevation-1","hide-default-footer":"",density:"comfortable"})]),_:1}),e(i,{title:"컬러 시스템 (Theme Colors)"},{default:t(()=>[s[1]||(s[1]=a("p",null,[o(" Vuetify는 "),a("code",null,"primary"),o(", "),a("code",null,"secondary"),o(", "),a("code",null,"error"),o(" 등의 컬러를 테마 설정에서 관리하며, SCSS 변수 및 CSS 변수로도 활용 가능합니다. ")],-1)),e(r,{class:"mb-4",dense:""},{default:t(()=>[(u(),h(V,null,C(f,c=>e(n,{cols:"auto",key:c.name},{default:t(()=>[e(y,{color:c.value,class:"pa-4",dark:"",rounded:""},{default:t(()=>[a("div",k,S(c.name),1)]),_:2},1032,["color"])]),_:2},1024)),64))]),_:1}),e(d,{label:"main.js에서 테마 설정 예시",lang:"js",code:B})]),_:1}),e(i,{title:"타이포그래피 클래스 예시"},{default:t(()=>[e(r,null,{default:t(()=>[e(n,{cols:"12",sm:"6"},{default:t(()=>s[2]||(s[2]=[a("p",{class:"text-h4"},"text-h4 - 주요 헤드라인",-1),a("p",{class:"text-subtitle-1"},"text-subtitle-1 - 부제목",-1),a("p",{class:"text-body-2"},"text-body-2 - 본문",-1),a("p",{class:"text-caption"},"text-caption - 캡션",-1)])),_:1})]),_:1}),e(d,{label:"Vuetify 타이포그래피 클래스",lang:"html",code:F})]),_:1})]),_:1})]),_:1})]),_:1})}}},U=x(I,[["__scopeId","data-v-37928812"]]);export{U as default};

import{_ as h,a as i}from"./BodyMaincard-BHSez2PV.js";import{C as b}from"./CodeBlock-qOhL21vW.js";import{O as y,L as C,c as F,w as t,r as a,o as V,b as e,a as r,g as l,t as x,u as D}from"./index-Dl-dvEsR.js";const S={class:"text-h6"},T=`// main.js 또는 vuetify.js
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'light', // 또는 'dark'
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#FFFFFF',
          primary: '#1976D2',
        },
      },
      dark: {
        dark: true,
        colors: {
          background: '#121212',
          primary: '#90CAF9',
        },
      },
    },
  },
})

// 컴포넌트 내 토글
const theme = useTheme()
theme.global.name.value = 'dark' // 또는 'light'

// 특정 컴포넌트만 다크 적용
<v-theme-provider theme="dark">
  <v-card>Dark Only</v-card>
</v-theme-provider>`,I={__name:"dark-mode",setup(w){const n=y(),s=C(()=>n.global.name.value==="dark"),m=()=>{n.global.name.value=s.value?"light":"dark"},c=[{title:"기능",key:"feature"},{title:"설명",key:"description"}],u=[{feature:"defaultTheme",description:"앱 시작 시 다크/라이트 테마 지정"},{feature:"theme.global.name.value",description:"다크/라이트 동적 전환 (Composition API)"},{feature:"v-theme-provider",description:"컴포넌트 단위로 다크/라이트 테마 적용"},{feature:"CSS 변수",description:"다크모드에서도 동일한 CSS 변수 활용 가능"}];return(B,o)=>{const p=a("v-data-table"),_=a("v-btn"),d=a("v-card"),v=a("v-theme-provider"),f=a("v-col"),k=a("v-row"),g=a("v-container");return V(),F(g,{fluid:""},{default:t(()=>[e(h),e(k,null,{default:t(()=>[e(f,{cols:"12"},{default:t(()=>[e(i,{title:"Vuetify 다크 모드 적용"},{default:t(()=>[o[0]||(o[0]=r("p",null,[l(" Vuetify 3에서는 글로벌 설정을 통해 다크 모드를 전역 적용하거나, "),r("code",null,"v-theme-provider"),l("를 사용해 특정 컴포넌트에만 부분 적용할 수 있습니다. ")],-1)),e(p,{headers:c,items:u,class:"custom-table mt-4 elevation-1","hide-default-footer":"",density:"comfortable"})]),_:1}),e(i,{title:"다크모드 토글 및 적용 예시"},{default:t(()=>[e(d,{class:"pa-4 mb-4",color:s.value?"grey-darken-3":"grey-lighten-4",elevation:"2"},{default:t(()=>[r("p",S,[o[1]||(o[1]=l(" 현재 모드: ")),r("strong",null,x(D(n).global.name.value),1)]),e(_,{onClick:m,color:"primary",class:"mt-2"},{default:t(()=>o[2]||(o[2]=[l("다크 모드 토글")])),_:1})]),_:1},8,["color"]),e(v,{theme:"dark"},{default:t(()=>[e(d,{class:"pa-4 mb-4"},{default:t(()=>o[3]||(o[3]=[r("p",null,[l("이 카드만 "),r("strong",null,"다크 테마"),l("가 적용되어 있습니다.")],-1)])),_:1})]),_:1}),e(b,{label:"다크모드 설정 코드 예시",lang:"js",code:T})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{I as default};

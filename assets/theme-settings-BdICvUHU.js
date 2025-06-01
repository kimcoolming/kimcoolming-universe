import{_ as k,a as m}from"./BodyMaincard-ydeyrEw-.js";import{C as b}from"./CodeBlock-CLVPa6jm.js";import{g as C}from"./vuetify-D5VncFeE.js";import{c as F,a0 as T,a2 as o,$ as a,a1 as V,v as e,a3 as r,S as l,X as x}from"./vendor-DsKT1S8o.js";import"./router-DV_bhxDE.js";import"./index-C2JVJAHJ.js";import"./firebase-BDPEIw7a.js";import"./highlight-DLiHtH8K.js";const w={class:"text-h6 mb-4"},B=`// vuetify.js 또는 main.js
import { createVuetify } from 'vuetify'

const myCustomTheme = {
  dark: false,
  colors: {
    primary: '#1976D2',
    secondary: '#424242',
    background: '#FFFFFF',
  },
}

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: myCustomTheme,
      dark: {
        dark: true,
        colors: {
          primary: '#90CAF9',
          secondary: '#FFE082',
          background: '#121212',
        },
      },
    },
  },
})
`,P={__name:"theme-settings",setup(j){const n=C(),s=F(()=>n.global.name.value),d=()=>{n.global.name.value=n.global.name.value==="light"?"dark":"light"},u=()=>{const i=s.value==="light"?"#4CAF50":"#FFC107";n.global.current.value.colors.primary=i},p=[{title:"옵션",key:"option"},{title:"설명",key:"description"}],_=[{option:"defaultTheme",description:"기본 테마 이름 (예: light)"},{option:"themes.light.colors",description:"라이트 테마의 색상 정의"},{option:"themes.dark.colors",description:"다크 테마의 색상 정의"},{option:"useTheme()",description:"현재 테마 정보를 가져오는 훅"}];return(i,t)=>{const f=a("v-data-table"),c=a("v-btn"),h=a("v-card"),v=a("v-col"),g=a("v-row"),y=a("v-container");return V(),T(y,{fluid:""},{default:o(()=>[e(k),e(g,null,{default:o(()=>[e(v,{cols:"12"},{default:o(()=>[e(m,{title:"Vuetify 테마 커스터마이징"},{default:o(()=>[t[0]||(t[0]=r("p",null,[l(" Vuetify 3에서는 "),r("code",null,"createVuetify"),l(" 함수 내 "),r("code",null,"theme"),l(" 옵션을 사용하여 라이트/다크 모드 설정 및 색상 팔레트 변경이 가능합니다. ")],-1)),e(f,{headers:p,items:_,class:"custom-table mt-4 elevation-1","hide-default-footer":"",density:"comfortable"})]),_:1}),e(m,{title:"테마 전환 및 커스터마이징 예시"},{default:o(()=>[e(h,{class:"pa-4",color:s.value.dark?"grey-darken-3":"grey-lighten-4",elevation:"2"},{default:o(()=>[r("p",w,[t[1]||(t[1]=l(" 현재 테마: ")),r("strong",null,x(s.value.name),1)]),e(c,{onClick:d,color:"primary",class:"me-2"},{default:o(()=>t[2]||(t[2]=[l(" 라이트 / 다크 토글 ")])),_:1}),e(c,{onClick:u,color:"secondary"},{default:o(()=>t[3]||(t[3]=[l(" 프라이머리 색상 변경 ")])),_:1})]),_:1},8,["color"]),e(b,{label:"테마 설정 코드 예시",lang:"js",code:B})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{P as default};

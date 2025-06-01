import{_ as u,a as c}from"./BodyMaincard-ydeyrEw-.js";import{C as _}from"./CodeBlock-CLVPa6jm.js";import{a0 as v,a2 as e,$ as i,a1 as y,v as t,a3 as s,S as n}from"./vendor-DsKT1S8o.js";import"./router-DV_bhxDE.js";import"./index-C2JVJAHJ.js";import"./firebase-BDPEIw7a.js";import"./vuetify-D5VncFeE.js";import"./highlight-DLiHtH8K.js";const V=`// plugins/vuetify.js 또는 main.js
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases: {
      ...aliases, // Vuetify 내장 alias
      customIcon: 'fa-solid fa-heart', // 커스텀 등록
    },
    sets: {
      mdi,
      fa,
    },
  },
})

// 사용 예시
<v-icon>mdi-home</v-icon>
<v-icon icon="fa-solid fa-star" />
<v-icon icon="customIcon" />`,z={__name:"vuetify-icons",setup(w){const m=[{title:"방식",key:"type"},{title:"설명",key:"description"}],r=[{type:"mdi (기본)",description:"Material Design Icons - Vuetify 기본 제공"},{type:"Font Awesome",description:"fa 패키지 설치 후 icon 옵션으로 사용 가능"},{type:"커스텀 아이콘",description:"SVG 또는 컴포넌트 아이콘 등록하여 사용"}];return(x,o)=>{const d=i("v-data-table"),f=i("v-icon"),a=i("v-col"),l=i("v-row"),p=i("v-container");return y(),v(p,{fluid:""},{default:e(()=>[t(u),t(l,null,{default:e(()=>[t(a,{cols:"12"},{default:e(()=>[t(c,{title:"Vuetify 아이콘 사용법 (실무 팁)"},{default:e(()=>[o[0]||(o[0]=s("p",null,[n(" Vuetify는 기본적으로 "),s("code",null,"Material Design Icons"),n(" (mdi)를 사용하며, Font Awesome, Bootstrap Icons 등 외부 아이콘도 설정을 통해 사용할 수 있습니다. ")],-1)),t(d,{headers:m,items:r,class:"custom-table mt-4 elevation-1","hide-default-footer":"",density:"comfortable"})]),_:1}),t(c,{title:"아이콘 사용 예시"},{default:e(()=>[t(l,{class:"text-center"},{default:e(()=>[t(a,{cols:"12",md:"4"},{default:e(()=>[t(f,{color:"primary",size:"32"},{default:e(()=>o[1]||(o[1]=[n("mdi-home")])),_:1}),o[2]||(o[2]=s("div",{class:"mt-2"},"mdi 아이콘",-1))]),_:1}),t(a,{cols:"12",md:"4"},{default:e(()=>o[3]||(o[3]=[s("i",{class:"fa-solid fa-heart",style:{"font-size":"24px",color:"pink"}},null,-1),s("div",{class:"mt-2"},"Font Awesome",-1)])),_:1}),t(a,{cols:"12",md:"4"},{default:e(()=>o[4]||(o[4]=[s("i",{class:"fa-solid fa-link",style:{"font-size":"24px",color:"blue"}},null,-1),s("div",{class:"mt-2"},"커스텀 아이콘",-1)])),_:1})]),_:1}),t(_,{label:"아이콘 설정 예시",lang:"js",code:V})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{z as default};

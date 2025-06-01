import{_ as p,a as c}from"./BodyMaincard-BHSez2PV.js";import{C as _}from"./CodeBlock-qOhL21vW.js";import{c as v,w as o,r as i,o as y,b as t,a as s,g as n}from"./index-Dl-dvEsR.js";const V=`// plugins/vuetify.js 또는 main.js
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
<v-icon icon="customIcon" />`,I={__name:"vuetify-icons",setup(w){const r=[{title:"방식",key:"type"},{title:"설명",key:"description"}],d=[{type:"mdi (기본)",description:"Material Design Icons - Vuetify 기본 제공"},{type:"Font Awesome",description:"fa 패키지 설치 후 icon 옵션으로 사용 가능"},{type:"커스텀 아이콘",description:"SVG 또는 컴포넌트 아이콘 등록하여 사용"}];return(x,e)=>{const m=i("v-data-table"),f=i("v-icon"),a=i("v-col"),l=i("v-row"),u=i("v-container");return y(),v(u,{fluid:""},{default:o(()=>[t(p),t(l,null,{default:o(()=>[t(a,{cols:"12"},{default:o(()=>[t(c,{title:"Vuetify 아이콘 사용법 (실무 팁)"},{default:o(()=>[e[0]||(e[0]=s("p",null,[n(" Vuetify는 기본적으로 "),s("code",null,"Material Design Icons"),n(" (mdi)를 사용하며, Font Awesome, Bootstrap Icons 등 외부 아이콘도 설정을 통해 사용할 수 있습니다. ")],-1)),t(m,{headers:r,items:d,class:"custom-table mt-4 elevation-1","hide-default-footer":"",density:"comfortable"})]),_:1}),t(c,{title:"아이콘 사용 예시"},{default:o(()=>[t(l,{class:"text-center"},{default:o(()=>[t(a,{cols:"12",md:"4"},{default:o(()=>[t(f,{color:"primary",size:"32"},{default:o(()=>e[1]||(e[1]=[n("mdi-home")])),_:1}),e[2]||(e[2]=s("div",{class:"mt-2"},"mdi 아이콘",-1))]),_:1}),t(a,{cols:"12",md:"4"},{default:o(()=>e[3]||(e[3]=[s("i",{class:"fa-solid fa-heart",style:{"font-size":"24px",color:"pink"}},null,-1),s("div",{class:"mt-2"},"Font Awesome",-1)])),_:1}),t(a,{cols:"12",md:"4"},{default:o(()=>e[4]||(e[4]=[s("i",{class:"fa-solid fa-link",style:{"font-size":"24px",color:"blue"}},null,-1),s("div",{class:"mt-2"},"커스텀 아이콘",-1)])),_:1})]),_:1}),t(_,{label:"아이콘 설정 예시",lang:"js",code:V})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{I as default};

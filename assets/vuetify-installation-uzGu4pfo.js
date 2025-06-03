import{_ as m,a as s}from"./BodyMaincard-Dr9ZdwOl.js";import{C as n}from"./CodeBlock-BaWmGqt9.js";import{a0 as f,a2 as o,$ as u,a1 as v,v as l,a3 as t,S as i}from"./vendor-DsTMh68j.js";import"./router-BfL3fPc_.js";import"./index-BuSfLIVr.js";import"./firebase-EYoWS5mi.js";import"./vuetify-vZiJE5rC.js";import"./highlight-DLiHtH8K.js";const d=`
npm install vuetify@next @mdi/font
`,c=`
// src/plugins/vuetify.js
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});
`,y=`
// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css';

createApp(App).use(vuetify).mount('#app');
`,V=`
vue add vuetify
`,g=`
<template>
  <v-app>
    <v-container>
      <v-btn color="primary">Vuetify 버튼</v-btn>
    </v-container>
  </v-app>
</template>
`,k={__name:"vuetify-installation",setup(_){return(C,e)=>{const a=u("v-col"),r=u("v-row"),p=u("v-container");return v(),f(p,{fluid:""},{default:o(()=>[l(m),l(r,null,{default:o(()=>[l(a,{cols:"12"},{default:o(()=>[l(s,{title:"Vuetify 설치 개요"},{default:o(()=>e[0]||(e[0]=[t("p",null,[t("strong",null,"Vuetify"),i("는 Vue.js를 위한 Material Design 기반 UI 프레임워크로, 다양한 컴포넌트와 스타일을 제공합니다. 설치 방법은 프로젝트 생성 도구에 따라 달라집니다. ")],-1),t("ul",{class:"desc-list"},[t("li",null,[t("strong",null,"Vite 기반 프로젝트"),i(": "),t("code",null,"npm create vuetify"),i(" 또는 "),t("code",null,"npm install vuetify@next")]),t("li",null,[t("strong",null,"Vue CLI 기반 프로젝트"),i(": "),t("code",null,"vue add vuetify")])],-1)])),_:1}),l(s,{title:"1. Vite 기반 프로젝트에서 Vuetify 설치"},{default:o(()=>[e[1]||(e[1]=t("p",null,"Vite를 사용하는 프로젝트에서는 다음 명령어로 Vuetify를 설치할 수 있습니다:",-1)),l(n,{label:"Vuetify 설치 명령어 (Vite)",lang:"bash",code:d}),e[2]||(e[2]=t("p",{class:"mt-4"},[i("설치 후, "),t("code",null,"src/plugins/vuetify.js"),i(" 파일을 생성하고 Vuetify를 설정합니다:")],-1)),l(n,{label:"vuetify.js 설정",lang:"javascript",code:c}),e[3]||(e[3]=t("p",{class:"mt-4"},[i("그리고 "),t("code",null,"main.js"),i("에서 Vuetify를 등록합니다:")],-1)),l(n,{label:"main.js 설정",lang:"javascript",code:y})]),_:1}),l(s,{title:"2. Vue CLI 기반 프로젝트에서 Vuetify 설치"},{default:o(()=>[e[4]||(e[4]=t("p",null,"Vue CLI를 사용하는 프로젝트에서는 다음 명령어로 Vuetify를 설치할 수 있습니다:",-1)),l(n,{label:"Vuetify 설치 명령어 (Vue CLI)",lang:"bash",code:V}),e[5]||(e[5]=t("p",{class:"mt-4"},[i(" 설치 중에 프리셋을 선택하라는 메시지가 나타납니다. "),t("strong",null,"Vuetify 3 - Vue CLI (preview 3)"),i("를 선택하세요. ")],-1)),e[6]||(e[6]=t("p",{class:"mt-4"},[i(" 설치가 완료되면, "),t("code",null,"src/plugins/vuetify.js"),i("와 "),t("code",null,"main.js"),i(" 파일이 자동으로 생성됩니다. ")],-1))]),_:1}),l(s,{title:"3. Vuetify 컴포넌트 사용 예시"},{default:o(()=>[e[7]||(e[7]=t("p",null," 설치가 완료되면, Vuetify의 다양한 컴포넌트를 사용할 수 있습니다. 예를 들어, 버튼 컴포넌트는 다음과 같이 사용할 수 있습니다: ",-1)),l(n,{label:"Vuetify 버튼 예시",lang:"html",code:g})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{k as default};

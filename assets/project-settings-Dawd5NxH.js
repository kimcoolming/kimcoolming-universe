import{_ as d,a as r}from"./BodyMaincard-BLaHC9ki.js";import{C as l}from"./CodeBlock-BHXZcNUL.js";import{a0 as _,a2 as o,$ as a,a1 as v,v as t,a3 as i,u as s}from"./vendor-DsKT1S8o.js";import"./router-DV_bhxDE.js";import"./index-CxlnnvHa.js";import"./firebase-BDPEIw7a.js";import"./vuetify-D5VncFeE.js";import"./highlight-DLiHtH8K.js";const w={__name:"project-settings",setup(y){const n=`
project-root/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── plugins/
│   │   └── vuetify.js
│   ├── App.vue
│   └── main.js
├── package.json
└── vite.config.js
`.trim(),u=`
// src/plugins/vuetify.js
import { createVuetify } from 'vuetify';
import 'vuetify/styles';

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#1976D2',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
        },
      },
    },
  },
});
`.trim(),c=`
// src/plugins/vuetify.js
import { createVuetify } from 'vuetify';
import 'vuetify/styles';

export default createVuetify({
  defaults: {
    global: {
      ripple: true,
    },
    VBtn: {
      color: 'primary',
      variant: 'flat',
    },
  },
});
`.trim();return(g,e)=>{const p=a("v-col"),f=a("v-row"),m=a("v-container");return v(),_(m,{fluid:""},{default:o(()=>[t(d),t(f,null,{default:o(()=>[t(p,{cols:"12"},{default:o(()=>[t(r,{title:"프로젝트 구조 개요"},{default:o(()=>[e[0]||(e[0]=i("p",null,"Vuetify 프로젝트는 일반적으로 다음과 같은 구조를 가집니다:",-1)),t(l,{label:"프로젝트 구조",lang:"plaintext",code:s(n)},null,8,["code"])]),_:1}),t(r,{title:"테마 설정"},{default:o(()=>[e[1]||(e[1]=i("p",null," Vuetify는 기본적으로 라이트와 다크 테마를 제공합니다. 프로젝트에 맞게 테마를 커스터마이징할 수 있습니다. ",-1)),t(l,{label:"테마 설정 예시",lang:"javascript",code:s(u)},null,8,["code"])]),_:1}),t(r,{title:"글로벌 구성"},{default:o(()=>[e[2]||(e[2]=i("p",null,"Vuetify는 글로벌 설정을 통해 컴포넌트의 기본 속성 값을 설정할 수 있습니다.",-1)),t(l,{label:"글로벌 구성 예시",lang:"javascript",code:s(c)},null,8,["code"])]),_:1})]),_:1})]),_:1})]),_:1})}}};export{w as default};

import{_ as d}from"./BaseBreadcrumb-Cy9rt6LQ.js";import{_ as l}from"./BodyMaincard-C1gGnJW9.js";import{C as r}from"./CodeBlock-Cpu0groJ.js";import{c as _,w as o,r as s,o as y,b as t,a,u as n}from"./index-jdJpLHXC.js";const b={__name:"project-settings",setup(v){const i=`
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
`.trim();return(g,e)=>{const f=s("v-col"),p=s("v-row"),m=s("v-container");return y(),_(m,{fluid:""},{default:o(()=>[t(d),t(p,null,{default:o(()=>[t(f,{cols:"12"},{default:o(()=>[t(l,{title:"프로젝트 구조 개요"},{default:o(()=>[e[0]||(e[0]=a("p",null,"Vuetify 프로젝트는 일반적으로 다음과 같은 구조를 가집니다:",-1)),t(r,{label:"프로젝트 구조",lang:"plaintext",code:n(i)},null,8,["code"])]),_:1}),t(l,{title:"테마 설정"},{default:o(()=>[e[1]||(e[1]=a("p",null," Vuetify는 기본적으로 라이트와 다크 테마를 제공합니다. 프로젝트에 맞게 테마를 커스터마이징할 수 있습니다. ",-1)),t(r,{label:"테마 설정 예시",lang:"javascript",code:n(u)},null,8,["code"])]),_:1}),t(l,{title:"글로벌 구성"},{default:o(()=>[e[2]||(e[2]=a("p",null,"Vuetify는 글로벌 설정을 통해 컴포넌트의 기본 속성 값을 설정할 수 있습니다.",-1)),t(r,{label:"글로벌 구성 예시",lang:"javascript",code:n(c)},null,8,["code"])]),_:1})]),_:1})]),_:1})]),_:1})}}};export{b as default};

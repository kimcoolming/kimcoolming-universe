import{_ as v,a}from"./BodyMaincard-CkvQSqWJ.js";import{C as n}from"./CodeBlock-FmWqsGcF.js";import{a0 as _,a2 as o,$ as s,a1 as f,v as t,a3 as e,S as V,u as i}from"./vendor-DsTMh68j.js";import"./router-BfL3fPc_.js";import"./index-Cp79PdWS.js";import"./firebase-EYoWS5mi.js";import"./vuetify-vZiJE5rC.js";import"./highlight-DLiHtH8K.js";const B={__name:"project-start-methods",setup(C){const u=`
<!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/vue@3"><\/script>
  </head>
  <body>
    <div id="app">{{ message }}</div>

    <script>
      const { createApp, ref } = Vue
      createApp({
        setup() {
          const message = ref('안녕하세요!')
          return { message }
        }
      }).mount('#app')
    </scr`+`ipt>
  </body>
</html>
`.trim(),p=`
npm create vite@latest my-vue-app
cd my-vue-app
npm install
npm run dev
`.trim(),r=`
my-vue-app/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.js
│   ├── App.vue
│   └── components/
│       └── HelloWorld.vue
`.trim();return(g,l)=>{const m=s("v-col"),c=s("v-row"),d=s("v-container");return f(),_(d,{fluid:""},{default:o(()=>[t(v),t(c,null,{default:o(()=>[t(m,{cols:"12"},{default:o(()=>[t(a,{title:"Vue 프로젝트 시작 방법"},{default:o(()=>l[0]||(l[0]=[e("p",null," Vue 프로젝트는 다양한 방식으로 시작할 수 있어요. 처음에는 간단하게 CDN으로, 실제 개발에서는 CLI나 Vite 같은 툴을 주로 사용합니다. ",-1)])),_:1}),t(a,{title:"1. CDN 방식 (간단한 데모용)"},{default:o(()=>[l[1]||(l[1]=e("p",null,"HTML에서 바로 Vue를 쓸 수 있지만, 파일 분리나 빌드 기능은 없습니다. 아주 간단한 실험에만 적합합니다.",-1)),t(n,{label:"CDN 방식 예제",lang:"html",code:u})]),_:1}),t(a,{title:"2. Vue CLI 방식 (전통적인 방식)"},{default:o(()=>l[2]||(l[2]=[e("ul",{class:"desc-list"},[e("li",null,[e("code",null,"vue create 프로젝트명"),V("으로 생성")]),e("li",null,"웹팩 기반, 설정이 무겁고 느릴 수 있음"),e("li",null,"Vue 2에 익숙한 프로젝트에 적합")],-1)])),_:1}),t(a,{title:"3. Vite 방식 (권장)"},{default:o(()=>l[3]||(l[3]=[e("p",null," Vite는 빠른 빌드 속도와 간편한 설정으로 Vue 3와 가장 잘 맞는 최신 개발 방식입니다. 퍼블리셔 입장에서 폴더 구조도 심플해서 작업 시작이 쉬워요. ",-1),e("ul",{class:"desc-list"},[e("li",null,"빠른 개발 서버 시작과 실시간 반영 (HMR)"),e("li",null,"설정 파일이 단순하고 구조도 직관적"),e("li",null,"SCSS, 타입스크립트 등 설정도 간단")],-1)])),_:1}),t(a,{title:"Vite로 Vue 프로젝트 시작하기"},{default:o(()=>[t(n,{label:"Vite 프로젝트 생성 명령어",lang:"bash",code:i(p)},null,8,["code"]),t(n,{label:"프로젝트 폴더 구조 (기본)",lang:"plaintext",code:i(r)},null,8,["code"])]),_:1})]),_:1})]),_:1})]),_:1})}}};export{B as default};

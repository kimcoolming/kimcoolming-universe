import{_,a as o}from"./BodyMaincard-BQWqUEAr.js";import{C as a}from"./CodeBlock-ChWwMBqN.js";import{c as v,w as n,r as s,o as f,b as t,a as e,g as V,u}from"./index-ChyxnQ7a.js";const k={__name:"project-start-methods",setup(C){const i=`
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
`.trim(),r=`
npm create vite@latest my-vue-app
cd my-vue-app
npm install
npm run dev
`.trim(),p=`
my-vue-app/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.js
│   ├── App.vue
│   └── components/
│       └── HelloWorld.vue
`.trim();return(g,l)=>{const c=s("v-col"),m=s("v-row"),d=s("v-container");return f(),v(d,{fluid:""},{default:n(()=>[t(_),t(m,null,{default:n(()=>[t(c,{cols:"12"},{default:n(()=>[t(o,{title:"Vue 프로젝트 시작 방법"},{default:n(()=>l[0]||(l[0]=[e("p",null," Vue 프로젝트는 다양한 방식으로 시작할 수 있어요. 처음에는 간단하게 CDN으로, 실제 개발에서는 CLI나 Vite 같은 툴을 주로 사용합니다. ",-1)])),_:1}),t(o,{title:"1. CDN 방식 (간단한 데모용)"},{default:n(()=>[l[1]||(l[1]=e("p",null,"HTML에서 바로 Vue를 쓸 수 있지만, 파일 분리나 빌드 기능은 없습니다. 아주 간단한 실험에만 적합합니다.",-1)),t(a,{label:"CDN 방식 예제",lang:"html",code:i})]),_:1}),t(o,{title:"2. Vue CLI 방식 (전통적인 방식)"},{default:n(()=>l[2]||(l[2]=[e("ul",{class:"desc-list"},[e("li",null,[e("code",null,"vue create 프로젝트명"),V("으로 생성")]),e("li",null,"웹팩 기반, 설정이 무겁고 느릴 수 있음"),e("li",null,"Vue 2에 익숙한 프로젝트에 적합")],-1)])),_:1}),t(o,{title:"3. Vite 방식 (권장)"},{default:n(()=>l[3]||(l[3]=[e("p",null," Vite는 빠른 빌드 속도와 간편한 설정으로 Vue 3와 가장 잘 맞는 최신 개발 방식입니다. 퍼블리셔 입장에서 폴더 구조도 심플해서 작업 시작이 쉬워요. ",-1),e("ul",{class:"desc-list"},[e("li",null,"빠른 개발 서버 시작과 실시간 반영 (HMR)"),e("li",null,"설정 파일이 단순하고 구조도 직관적"),e("li",null,"SCSS, 타입스크립트 등 설정도 간단")],-1)])),_:1}),t(o,{title:"Vite로 Vue 프로젝트 시작하기"},{default:n(()=>[t(a,{label:"Vite 프로젝트 생성 명령어",lang:"bash",code:u(r)},null,8,["code"]),t(a,{label:"프로젝트 폴더 구조 (기본)",lang:"plaintext",code:u(p)},null,8,["code"])]),_:1})]),_:1})]),_:1})]),_:1})}}};export{k as default};

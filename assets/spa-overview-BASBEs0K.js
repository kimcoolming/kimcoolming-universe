import{_ as m}from"./BaseBreadcrumb-BdlaIb9d.js";import{_ as u}from"./BodyMaincard-CPIp0UtQ.js";import{C as p}from"./CodeBlock-DCn2yxma.js";import{c as d,w as e,r as n,o as _,b as t,a as l,g as i,u as f}from"./index-dtzBUjC1.js";const x={__name:"spa-overview",setup(A){const r=`
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
`.trim();return(P,o)=>{const s=n("v-col"),a=n("v-row"),c=n("v-container");return _(),d(c,{fluid:""},{default:e(()=>[t(m),t(a,null,{default:e(()=>[t(s,{cols:"12"},{default:e(()=>[t(u,{title:"SPA란 무엇인가?"},{default:e(()=>o[0]||(o[0]=[l("p",null,[i(" SPA(Single Page Application)는 "),l("strong",null,"하나의 HTML 페이지"),i("에서 모든 콘텐츠를 동적으로 로딩하며 화면 전환이 이루어지는 방식입니다. 사용자는 여러 페이지를 이동하는 것처럼 보이지만 실제로는 페이지 전체를 다시 불러오지 않고 JavaScript를 통해 필요한 부분만 바꿔줍니다. ")],-1),l("ul",{class:"desc-list"},[l("li",null,"전통적인 방식(MPA): 페이지 이동 시마다 서버로부터 전체 HTML 새로 요청"),l("li",null,"SPA 방식: 초기 로딩 후, 필요할 때 데이터만 받아와서 화면 갱신"),l("li",null,"앱처럼 부드럽고 빠른 사용자 경험 제공")],-1)])),_:1}),t(u,{title:"MPA vs SPA 비교"},{default:e(()=>[t(a,null,{default:e(()=>[t(s,{cols:"12",md:"6"},{default:e(()=>o[1]||(o[1]=[l("h4",{class:"text-subtitle-1 font-weight-medium mb-2"},"MPA (Multi Page Application)",-1),l("ul",{class:"desc-list"},[l("li",null,"페이지마다 HTML 새로 로드"),l("li",null,"서버에 많은 요청 발생"),l("li",null,"전환 시 화면 깜빡임"),l("li",null,"SEO에 유리함")],-1)])),_:1}),t(s,{cols:"12",md:"6"},{default:e(()=>o[2]||(o[2]=[l("h4",{class:"text-subtitle-1 font-weight-medium mb-2"},"SPA (Single Page Application)",-1),l("ul",{class:"desc-list"},[l("li",null,"처음 1번만 HTML 전체 로딩"),l("li",null,"전환 시 필요한 데이터만 요청"),l("li",null,"화면 전환이 빠르고 부드러움"),l("li",null,"라우팅은 Vue Router 같은 도구로 처리")],-1)])),_:1})]),_:1})]),_:1}),t(u,{title:"SPA 방식 동작 흐름"},{default:e(()=>[t(p,{label:"Vue Router를 이용한 SPA 라우팅 예시",lang:"js",code:f(r)},null,8,["code"])]),_:1}),t(u,{title:"퍼블리셔 입장에서 SPA의 장점"},{default:e(()=>o[3]||(o[3]=[l("ul",{class:"desc-list"},[l("li",null,"페이지 깜빡임 없이 부드러운 사용자 경험 구현"),l("li",null,"공통 레이아웃(Header/Footer 등)을 유지한 채 콘텐츠만 바뀜"),l("li",null,"컴포넌트 단위로 나누어 작업 분담과 유지보수가 쉬움"),l("li",null,"디자인 퍼블리싱 → Vue 컴포넌트화 → 개발 연결 구조가 명확함")],-1)])),_:1})]),_:1})]),_:1})]),_:1})}}};export{x as default};

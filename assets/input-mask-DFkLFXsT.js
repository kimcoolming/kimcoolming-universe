import{_ as M,a as f}from"./BodyMaincard-BQWqUEAr.js";import{C as N}from"./CodeBlock-ChWwMBqN.js";import{i as r,c as U,w as s,r as u,o as w,b as l,a as b,g as _}from"./index-ChyxnQ7a.js";const j=`<div>
  <v-text-field
    v-model="phone"
    label="전화번호"
    @input="onPhoneInput"
  />
  <v-text-field
    v-model="date"
    label="날짜"
    @input="onDateInput"
  />
  <v-text-field
    v-model="english"
    label="영문"
    @input="onEnglishInput"
  />
  <v-text-field
    v-model="korean"
    label="한글"
    @input="onKoreanInput"
  />
  <v-text-field
    v-model="number"
    label="숫자"
    @input="onNumberInput"
  />
</div>

<script setup>
const onPhoneInput = (e) => {
  const numbers = e.target.value.replace(/\\D/g, '').slice(0, 11);
  const parts = [];
  if (numbers.length > 3) {
    parts.push(numbers.slice(0, 3));
    if (numbers.length > 7) {
      parts.push(numbers.slice(3, 7));
      parts.push(numbers.slice(7));
    } else {
      parts.push(numbers.slice(3));
    }
  } else {
    parts.push(numbers);
  }
  phone.value = parts.join('-');
};
<\/script>`,K={__name:"input-mask",setup(P){const i=r(""),p=r(""),d=r(""),m=r(""),c=r(""),g=t=>!!t||"필수 항목입니다.",V=t=>{const e=t.target.value.replace(/\D/g,"").slice(0,11),n=[];e.length>3?(n.push(e.slice(0,3)),e.length>7?(n.push(e.slice(3,7)),n.push(e.slice(7))):n.push(e.slice(3))):n.push(e),i.value=n.join("-")},I=t=>{const e=t.target.value.replace(/\D/g,"").slice(0,8),n=e.slice(0,4),a=e.slice(4,6),v=e.slice(6,8);p.value=[n,a,v].filter(Boolean).join("-")},h=t=>{d.value=t.target.value.replace(/[^a-zA-Z]/g,"")},k=t=>{m.value=t.target.value.replace(/[^\u3131-\uD79D]/g,"")},x=t=>{c.value=t.target.value.replace(/\D/g,"")},D=[{title:"필드",key:"field"},{title:"입력 형식",key:"format"},{title:"처리 방식",key:"description"}],Y=[{field:"전화번호",format:"000-0000-0000",description:"숫자만 추출 후 하이픈 추가"},{field:"날짜",format:"YYYY-MM-DD",description:"숫자만 추출 후 날짜 형식으로 조합"},{field:"영문",format:"A-Z, a-z",description:"알파벳만 허용"},{field:"한글",format:"가-힣",description:"한글만 허용"},{field:"숫자",format:"0-9",description:"숫자만 허용"}];return(t,e)=>{const n=u("v-data-table"),a=u("v-text-field"),v=u("v-form"),y=u("v-col"),B=u("v-row"),C=u("v-container");return w(),U(C,{fluid:""},{default:s(()=>[l(M),l(B,null,{default:s(()=>[l(y,{cols:"12"},{default:s(()=>[l(f,{title:"Vuetify 입력 마스크 (Input Mask)"},{default:s(()=>[e[5]||(e[5]=b("p",null,[_(" Vuetify는 입력 마스크 기능을 기본적으로 제공하진 않지만, "),b("strong",null,"v-text-field"),_("와 이벤트 처리 및 정규 표현식을 활용해 다양한 포맷의 마스킹을 구현할 수 있습니다. ")],-1)),l(n,{headers:D,items:Y,class:"custom-table mt-4 elevation-1","hide-default-footer":"",density:"comfortable"})]),_:1}),l(f,{title:"입력 마스크 예시"},{default:s(()=>[l(v,null,{default:s(()=>[l(a,{modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=o=>i.value=o),label:"전화번호 (000-0000-0000)",rules:[g],variant:"outlined",clearable:"",onInput:V},null,8,["modelValue","rules"]),l(a,{modelValue:p.value,"onUpdate:modelValue":e[1]||(e[1]=o=>p.value=o),label:"날짜 (YYYY-MM-DD)",variant:"outlined",clearable:"",onInput:I},null,8,["modelValue"]),l(a,{modelValue:d.value,"onUpdate:modelValue":e[2]||(e[2]=o=>d.value=o),label:"영문만 입력",variant:"outlined",clearable:"",onInput:h},null,8,["modelValue"]),l(a,{modelValue:m.value,"onUpdate:modelValue":e[3]||(e[3]=o=>m.value=o),label:"한글만 입력",variant:"outlined",clearable:"",onInput:k},null,8,["modelValue"]),l(a,{modelValue:c.value,"onUpdate:modelValue":e[4]||(e[4]=o=>c.value=o),label:"숫자만 입력",variant:"outlined",clearable:"",onInput:x},null,8,["modelValue"])]),_:1}),l(N,{label:"입력 마스크 코드 예시",lang:"html",code:j})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{K as default};

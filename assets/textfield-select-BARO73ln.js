import{_ as k,a as c}from"./BodyMaincard-CSOWW-Yc.js";import{C as b}from"./CodeBlock-Etr-AdjA.js";import{i,c as w,w as l,r as a,o as B,b as e,a as d,g as s}from"./index-KLpfFNps.js";const U=`<template>
  <v-text-field
    v-model="name"
    label="이름 입력"
    placeholder="홍길동"
    variant="outlined"
    clearable
  />
  <v-text-field
    v-model="email"
    label="이메일"
    type="email"
    placeholder="example@email.com"
    variant="outlined"
  />
</template>`,H=`<template>
  <v-select
    v-model="selectedJob"
    :items="['디자이너', '개발자', '기획자', '마케터']"
    label="직업 선택"
    variant="outlined"
  />
  <v-select
    v-model="selectedHobby"
    :items="['독서', '운동', '게임', '영화']"
    label="취미 선택 (다중)"
    multiple
    chips
    variant="outlined"
  />
</template>`,I={__name:"textfield-select",setup(N){const u=i(""),r=i(""),p=i(null),v=i([]),V=["디자이너","개발자","기획자","마케터"],x=["독서","운동","게임","영화"],y=[{title:"컴포넌트",key:"component"},{title:"설명",key:"description"}],C=[{component:"v-text-field",description:"사용자로부터 문자열, 숫자 등을 입력받는 컴포넌트"},{component:"v-select",description:"정의된 옵션 중 하나 또는 여러 개를 선택하는 드롭다운"},{component:"variant",description:'"outlined", "solo", "filled" 등 다양한 스타일 제공'},{component:"clearable / chips / multiple",description:"선택 초기화 및 다중 선택 가능 옵션"}];return(J,t)=>{const g=a("v-data-table"),f=a("v-text-field"),n=a("v-col"),m=a("v-row"),_=a("v-select"),h=a("v-container");return B(),w(h,{fluid:""},{default:l(()=>[e(k),e(m,null,{default:l(()=>[e(n,{cols:"12"},{default:l(()=>[e(c,{title:"Vuetify 텍스트 필드 및 셀렉트 개요"},{default:l(()=>[t[4]||(t[4]=d("p",null,[d("strong",null,"v-text-field"),s("와 "),d("strong",null,"v-select"),s("는 Vuetify에서 가장 자주 사용되는 폼 컴포넌트입니다."),d("br"),s(" 텍스트 필드는 문자열, 이메일, 숫자 등을 직접 입력할 수 있으며,"),d("br"),s(" 셀렉트는 사용자가 미리 정의된 옵션 중 하나 또는 여러 개를 선택할 수 있게 해줍니다. ")],-1)),e(g,{headers:y,items:C,class:"custom-table mt-4 elevation-1","hide-default-footer":"",density:"comfortable"})]),_:1}),e(c,{title:"텍스트 필드 예시"},{default:l(()=>[e(m,null,{default:l(()=>[e(n,{cols:"12",md:"6"},{default:l(()=>[e(f,{modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=o=>u.value=o),label:"이름 입력",placeholder:"홍길동",variant:"outlined",clearable:""},null,8,["modelValue"])]),_:1}),e(n,{cols:"12",md:"6"},{default:l(()=>[e(f,{modelValue:r.value,"onUpdate:modelValue":t[1]||(t[1]=o=>r.value=o),label:"이메일",type:"email",placeholder:"example@email.com",variant:"outlined"},null,8,["modelValue"])]),_:1})]),_:1}),e(b,{label:"텍스트 필드 코드 예시",lang:"html",code:U})]),_:1}),e(c,{title:"셀렉트 박스 예시"},{default:l(()=>[e(m,null,{default:l(()=>[e(n,{cols:"12",md:"6"},{default:l(()=>[e(_,{modelValue:p.value,"onUpdate:modelValue":t[2]||(t[2]=o=>p.value=o),items:V,label:"직업 선택",variant:"outlined",placeholder:"선택하세요"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12",md:"6"},{default:l(()=>[e(_,{modelValue:v.value,"onUpdate:modelValue":t[3]||(t[3]=o=>v.value=o),items:x,label:"취미 선택 (다중)",variant:"outlined",multiple:"",chips:""},null,8,["modelValue"])]),_:1})]),_:1}),e(b,{label:"셀렉트 박스 코드 예시",lang:"html",code:H})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{I as default};

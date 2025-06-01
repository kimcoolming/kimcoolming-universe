import{_ as z,a as x}from"./BodyMaincard-B3fWnQ9C.js";import{C as A}from"./CodeBlock-BgEv69Op.js";import{r,a0 as D,a2 as a,$ as o,a1 as E,v as e,a3 as d,S as s}from"./vendor-DsKT1S8o.js";import"./router-DV_bhxDE.js";import"./index-BFgFGbtU.js";import"./firebase-BDPEIw7a.js";import"./vuetify-D5VncFeE.js";import"./highlight-DLiHtH8K.js";const F=`<template>
  <v-form ref="formRef" v-model="isValid">
    <v-text-field
      v-model="name"
      label="이름"
      :rules="[required]"
      variant="outlined"
    />
    <v-text-field
      v-model="email"
      label="이메일"
      :rules="[required, emailRule]"
      variant="outlined"
    />
    <v-text-field
      v-model="password"
      label="비밀번호"
      :rules="[required, minLengthRule]"
      type="password"
      variant="outlined"
    />
    <v-checkbox
      v-model="agree"
      :rules="[agreeRule]"
      label="이용 약관에 동의합니다"
    />
    <v-btn @click="submit">제출하기</v-btn>
    <v-btn @click="reset">리셋</v-btn>
  </v-form>
</template>`,Y={__name:"form-validation",setup(G){const v=r(""),c=r(""),f=r(""),_=r(!1),p=r(!1),u=r(null),i=t=>!!t||"필수 입력 항목입니다.",k=t=>/.+@.+\..+/.test(t)||"유효한 이메일 형식이 아닙니다.",g=t=>t&&t.length>=6||"6자 이상 입력해주세요.",y=t=>t||"약관에 동의해야 합니다.",w=()=>{var t;(t=u.value)!=null&&t.validate()&&alert("폼이 성공적으로 제출되었습니다!")},R=()=>{var t;(t=u.value)==null||t.reset()},C=[{title:"유효성 규칙",key:"rule"},{title:"설명",key:"description"}],q=[{rule:"required",description:"필수 입력 여부 확인"},{rule:"email format",description:"이메일 정규식 패턴 검사"},{rule:"minLength",description:"최소 글자 수 지정"},{rule:"custom function",description:"true/false 또는 메시지를 반환하는 함수"}];return(t,l)=>{const U=o("v-data-table"),B=o("v-card-title"),b=o("v-divider"),m=o("v-text-field"),L=o("v-checkbox"),N=o("v-card-text"),V=o("v-btn"),$=o("v-card-actions"),j=o("v-form"),H=o("v-card"),I=o("v-col"),S=o("v-row"),T=o("v-container");return E(),D(T,{fluid:""},{default:a(()=>[e(z),e(S,null,{default:a(()=>[e(I,{cols:"12"},{default:a(()=>[e(x,{title:"Vuetify 폼 유효성 검사 개요"},{default:a(()=>[l[5]||(l[5]=d("p",null,[s(" Vuetify의 "),d("strong",null,"v-form"),s(" 컴포넌트는 폼 유효성 검사를 간편하게 구현할 수 있도록 도와줍니다."),d("br"),d("code",null,"rules"),s(" 배열을 각 입력 필드에 전달하여 값의 조건을 지정할 수 있습니다. ")],-1)),e(U,{headers:C,items:q,class:"custom-table mt-4 elevation-1","hide-default-footer":"",density:"comfortable"})]),_:1}),e(x,{title:"폼 유효성 검사 예시"},{default:a(()=>[e(H,{class:"mx-auto","max-width":"600",elevation:"2"},{default:a(()=>[e(j,{ref_key:"formRef",ref:u,modelValue:p.value,"onUpdate:modelValue":l[4]||(l[4]=n=>p.value=n)},{default:a(()=>[e(B,{class:"text-h6 font-weight-bold"},{default:a(()=>l[6]||(l[6]=[s("회원가입 폼")])),_:1}),e(b),e(N,null,{default:a(()=>[e(m,{modelValue:v.value,"onUpdate:modelValue":l[0]||(l[0]=n=>v.value=n),label:"이름",rules:[i],variant:"outlined",clearable:""},null,8,["modelValue","rules"]),e(m,{modelValue:c.value,"onUpdate:modelValue":l[1]||(l[1]=n=>c.value=n),label:"이메일",rules:[i,k],variant:"outlined",clearable:""},null,8,["modelValue","rules"]),e(m,{modelValue:f.value,"onUpdate:modelValue":l[2]||(l[2]=n=>f.value=n),label:"비밀번호",rules:[i,g],type:"password",variant:"outlined",clearable:""},null,8,["modelValue","rules"]),e(L,{modelValue:_.value,"onUpdate:modelValue":l[3]||(l[3]=n=>_.value=n),rules:[y],label:"이용 약관에 동의합니다","hide-details":""},null,8,["modelValue","rules"])]),_:1}),e(b),e($,{class:"justify-end"},{default:a(()=>[e(V,{class:"me-2",onClick:R},{default:a(()=>l[7]||(l[7]=[s("리셋")])),_:1}),e(V,{color:"primary",onClick:w},{default:a(()=>l[8]||(l[8]=[s("제출하기")])),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(A,{label:"폼 유효성 검사 코드 예시",lang:"html",code:F})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{Y as default};

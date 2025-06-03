import{_ as h,a as s}from"./BodyMaincard-CkvQSqWJ.js";import{C as m}from"./CodeBlock-FmWqsGcF.js";import{r as c,a0 as w,a2 as o,$ as t,a1 as U,v as e,a3 as i,S as g}from"./vendor-DsTMh68j.js";import"./router-BfL3fPc_.js";import"./index-Cp79PdWS.js";import"./firebase-EYoWS5mi.js";import"./vuetify-vZiJE5rC.js";import"./highlight-DLiHtH8K.js";const B=`<template>
  <v-row>
    <v-col cols="auto">
      <v-checkbox
        v-model="checkbox1"
        label="서비스 이용 약관 동의"
        color="primary"
        hide-details
      />
    </v-col>
    <v-col cols="auto">
      <v-checkbox
        v-model="checkbox2"
        label="마케팅 수신 동의"
        color="secondary"
        hide-details
      />
    </v-col>
  </v-row>
</template>`,N=`<template>
  <v-radio-group v-model="gender" inline>
    <v-radio label="남성" value="남성" color="info" />
    <v-radio label="여성" value="여성" color="pink" />
    <v-radio label="기타" value="기타" color="grey" />
  </v-radio-group>
</template>`,$=`<template>
  <!-- 체크박스 세로 정렬 -->
  <v-checkbox label="사과" v-model="fruit1" color="success" />
  <v-checkbox label="바나나" v-model="fruit2" color="success" />
  <v-checkbox label="딸기" v-model="fruit3" color="success" />

  <!-- 라디오 세로 정렬 -->
  <v-radio-group v-model="favoriteColor">
    <v-radio label="빨강" value="red" color="red" />
    <v-radio label="파랑" value="blue" color="blue" />
    <v-radio label="초록" value="green" color="green" />
  </v-radio-group>
</template>`,F={__name:"checkbox-radio",setup(H){const p=c(!1),b=c(!1),f=c(""),r=c({fruit1:!1,fruit2:!1,fruit3:!1}),_=c(""),k=[{title:"컴포넌트",key:"component"},{title:"설명",key:"description"}],x=[{component:"v-checkbox",description:"다중 선택용 체크박스"},{component:"v-radio / v-radio-group",description:"단일 선택용 라디오 그룹"},{component:"inline",description:"가로 정렬 시 사용, 기본은 세로 정렬"}];return(I,l)=>{const y=t("v-data-table"),d=t("v-checkbox"),n=t("v-col"),v=t("v-row"),u=t("v-radio"),V=t("v-radio-group"),C=t("v-container");return U(),w(C,{fluid:""},{default:o(()=>[e(h),e(v,null,{default:o(()=>[e(n,{cols:"12"},{default:o(()=>[e(s,{title:"Vuetify 체크박스 및 라디오 개요"},{default:o(()=>[l[7]||(l[7]=i("p",null,[i("strong",null,"v-checkbox"),g("는 다중 선택에, "),i("strong",null,"v-radio-group"),g("은 단일 선택에 사용됩니다.")],-1)),e(y,{headers:k,items:x,class:"custom-table mt-4 elevation-1","hide-default-footer":"",density:"comfortable"})]),_:1}),e(s,{title:"체크박스 예시 (가로 정렬)"},{default:o(()=>[e(v,null,{default:o(()=>[e(n,{cols:"auto"},{default:o(()=>[e(d,{modelValue:p.value,"onUpdate:modelValue":l[0]||(l[0]=a=>p.value=a),label:"서비스 이용 약관 동의",color:"primary","hide-details":""},null,8,["modelValue"])]),_:1}),e(n,{cols:"auto"},{default:o(()=>[e(d,{modelValue:b.value,"onUpdate:modelValue":l[1]||(l[1]=a=>b.value=a),label:"마케팅 수신 동의",color:"secondary","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{label:"체크박스 코드 예시 (가로 정렬)",lang:"html",code:B})]),_:1}),e(s,{title:"라디오 버튼 예시 (가로 정렬)"},{default:o(()=>[e(V,{modelValue:f.value,"onUpdate:modelValue":l[2]||(l[2]=a=>f.value=a),inline:""},{default:o(()=>[e(u,{label:"남성",value:"남성",color:"info"}),e(u,{label:"여성",value:"여성",color:"pink"}),e(u,{label:"기타",value:"기타",color:"grey"})]),_:1},8,["modelValue"]),e(m,{label:"라디오 버튼 코드 예시",lang:"html",code:N})]),_:1}),e(s,{title:"체크박스 및 라디오 (세로 정렬)"},{default:o(()=>[e(v,null,{default:o(()=>[e(n,{cols:"12",md:"6"},{default:o(()=>[l[8]||(l[8]=i("p",{class:"text-subtitle-2 font-weight-bold mb-2"},"체크박스 (세로)",-1)),e(d,{modelValue:r.value.fruit1,"onUpdate:modelValue":l[3]||(l[3]=a=>r.value.fruit1=a),label:"사과",color:"success"},null,8,["modelValue"]),e(d,{modelValue:r.value.fruit2,"onUpdate:modelValue":l[4]||(l[4]=a=>r.value.fruit2=a),label:"바나나",color:"success"},null,8,["modelValue"]),e(d,{modelValue:r.value.fruit3,"onUpdate:modelValue":l[5]||(l[5]=a=>r.value.fruit3=a),label:"딸기",color:"success"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12",md:"6"},{default:o(()=>[l[9]||(l[9]=i("p",{class:"text-subtitle-2 font-weight-bold mb-2"},"라디오 (세로)",-1)),e(V,{modelValue:_.value,"onUpdate:modelValue":l[6]||(l[6]=a=>_.value=a)},{default:o(()=>[e(u,{label:"빨강",value:"red",color:"red"}),e(u,{label:"파랑",value:"blue",color:"blue"}),e(u,{label:"초록",value:"green",color:"green"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(m,{label:"세로 정렬 코드 예시",lang:"html",code:$})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{F as default};

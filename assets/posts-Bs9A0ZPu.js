const t=()=>{const s=localStorage.getItem("posts");return s?JSON.parse(s):[]},o=s=>{localStorage.setItem("posts",JSON.stringify(s))},e=t(),a=o;export{e as p,a as s};

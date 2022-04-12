const form=document.getElementById("frm")
const btn=document.querySelector(".button")
let ul=document.querySelector("#list")
let ogeler=document.getElementById("oge")
const input = document.getElementById('task');

if (input.addEventListener("keydown",function(e){
    if(e.key=="Enter") btn.click();
}))

btn.addEventListener("click",function(){
    if(input.value !==""){
        const alert=document.querySelector(".mr-2")
        alert.style.display="block"
    }else{
        newElement();
        const success=document.querySelector(".toast-body")
        success.style.display="block"
    }
    setTimeout(() => {
        const alert=document.querySelector(".mr-2")
        alert.style.display="block"
    }, 3000);
    setTimeout(() => {
        const alert=document.querySelector(".mr-2")
        alert.style.display="none"
    }, 3000);
});

function newElement(){
    const input = document.getElementById('task');
    if(input.value !=""){
    let li=document.createElement("li");
    li.textContent = input.value;
    ul.appendChild(li)

  
    
    }
}
console.log("newElement")

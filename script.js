const notesContainer=document.querySelector(".notes-container");
const createbtn=document.querySelector(".btn");
let notes=document.querySelectorAll(".input-box")

createbtn.addEventListener("click",()=>{
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true"); 
    img.src="delete.jpg";
    notesContainer.appendChild(inputBox).appendChild(img);
})
notesContainer.addEventListener("click",function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updageStorage()
    }
    
})
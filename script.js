let inputbox=document.getElementById('textbox');
let addtask =document.getElementById('add');
let alllist =document.getElementById("list-container");
  addtask.addEventListener("click",function (){
   
if(inputbox.value === ''){
    alert("please fill the empty field")
}
else{ 
    let createlist = document.createElement("li");
    createlist.className="listall";
    createlist.innerHTML = `${inputbox.value}`;
    alllist.appendChild(createlist);
let span= document.createElement("span");
span.innerHTML="\u00d7";
createlist.appendChild(span);

span.addEventListener("click", ()=>{
  createlist.remove();
});



}
   });


   //    let createlist = document.createElement("li");
   //    let span= document.createElement("span");
   // span.addEventListener("click", () => {
   // createlist.remove();
   // console.log("removed");
   // })









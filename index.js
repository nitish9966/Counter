// let count=document.getElementById("counter").value;
let count=0;
const dec=document.getElementById("decrease");
const res=document.getElementById("reset");
const inc=document.getElementById("increase");
const counter=document.getElementById("counter");

dec.onclick=function(){
    count--;
    counter.textContent=count;
}
inc.onclick=function(){
    count++;
    counter.textContent=count;
}
res.onclick=function(){
    count=0;
    counter.textContent=count;
}
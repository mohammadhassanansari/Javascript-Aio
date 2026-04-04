
const button=document.getElementById("stop-btn");
function showTIme(){
    const currentTIme=new Date();
    const time=`${currentTIme.getHours()}:${currentTIme.getMinutes()}:${currentTIme.getSeconds()}`
    document.getElementById("time").innerText=time;
}


let interval=setInterval(showTIme,1000);

button.addEventListener("click",()=>{
    clearInterval(interval);
})
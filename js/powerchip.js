const canvas=document.getElementById("chipCanvas");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let intensity=0;

window.addEventListener("scroll",()=>{
  intensity=window.scrollY/1000;
});

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="rgba(0,255,200,"+intensity+")";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);
}
animate();

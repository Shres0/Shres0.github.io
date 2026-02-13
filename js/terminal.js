const logs=[
"[BOOT] Initializing kernel...",
"[OK] Loading STM32 drivers",
"[OK] Mounting /firmware",
"[OK] Starting Ethernet PHY validation",
"[OK] Initializing CAN interface",
"[OK] System Ready."
];

let i=0;
const boot=document.getElementById("bootText");

function bootSequence(){
  if(i<logs.length){
    boot.innerHTML+=logs[i]+"\n";
    i++;
    setTimeout(bootSequence,500);
  }else{
    setTimeout(()=>{
      document.getElementById("bootTerminal").style.display="none";
    },1000);
  }
}
bootSequence();

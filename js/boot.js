const logs=[
"[ 0.0001 ] Power Good Signal Detected",
"[ 0.0023 ] CPU Reset Vector Loaded",
"[ 0.0100 ] Bootloader: Selecting Embedded Path",
"[ 0.0500 ] Loading Kernel Modules...",
"[ 0.1200 ] Initializing Ethernet PHY",
"[ 0.2000 ] STM32 Drivers Initialized",
"[ 0.3000 ] System Ready."
];

let i=0;
const boot=document.getElementById("bootLog");

function bootSequence(){
  if(i<logs.length){
    boot.innerHTML+=logs[i]+"\n";
    i++;
    setTimeout(bootSequence,400);
  }else{
    setTimeout(()=>{
      document.getElementById("bootScreen").style.display="none";
    },1000);
  }
}
bootSequence();

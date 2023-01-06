const hr=document.getElementById("hour")
const min=document.getElementById("minutes")
const sec=document.getElementById("second")
const mil=document.getElementById("mils")
const btn=document.getElementById("start")
const rst=document.getElementById("reset")

let min2=00
let hr2=00
let sec2=00
let mils2=00
let temp
rst.onclick=()=>reset()
btn.onclick=()=>clickevent()
function clickevent(){ 
change()
 if(btn.innerText!=="RESUME")
 temp=setInterval(maintime,10)
 
}

function correctit(num,ch){
num1=num.toString(10)
if(num<10)
num1="0"+num1+ch
else
num1=num1+ch
return num1;
}
function maintime(){
   mils22=correctit(mils2,"")
   sec22=correctit(sec2,"")
   min22=correctit(min2," :")
   hr22=correctit(hr2," :")
    mil.innerText=mils22;
    sec.innerText=sec22;
    min.innerText=min22;
    hr.innerText=hr22;
    mils2+=1
      if(mils2>99){mils2=00
    sec2+=1}
      if(sec2>59){
         sec2=00
         min2=(min2+1)
   
      }
   
      if(min2>59){
         min2=00
         hr2=(hr2+1)
      }
          }
function stop(){
   clearInterval(temp)}





function change()
{ const s=btn.innerText
   if(s=="START")
   { 
    btn.innerText="STOP"
    }
   else if(s=="RESUME")
   { 
      btn.innerText="STOP"
     }
   else
   { stop()
      btn.innerText="RESUME"
      }
   

}
function reset()
{
 min2=00
 hr2=00
 sec2=00
 mils2=00
 sec22=correctit(sec2,"")
 min22=correctit(min2," :")
 hr22=correctit(hr2," :")
 mils22=correctit(mils2,"")
 mil.innerText=mils22;
 sec.innerText=sec22;
 min.innerText=min22;
 hr.innerText=hr22;
 
}
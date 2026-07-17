const target=new Date('September 26, 2026 10:00:00 GMT-0400').getTime();
setInterval(()=>{
const now=new Date().getTime();
let d=target-now;
if(d<=0){
document.body.innerHTML='<h1 style="color:white;text-align:center;margin-top:20%">🎉 The Walk-A-Thon Has Started!</h1>';
return;
}
const days=Math.floor(d/86400000);
const hours=Math.floor((d%86400000)/3600000);
const minutes=Math.floor((d%3600000)/60000);
const seconds=Math.floor((d%60000)/1000);
daysEl.textContent=days;
hoursEl.textContent=hours;
minutesEl.textContent=minutes;
secondsEl.textContent=seconds;
},1000);
const daysEl=document.getElementById('days');
const hoursEl=document.getElementById('hours');
const minutesEl=document.getElementById('minutes');
const secondsEl=document.getElementById('seconds');

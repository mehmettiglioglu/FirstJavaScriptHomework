// let username=prompt("Lütfen isminizi giriniz")
// let usernameDOM=document.querySelector("#myName")
// usernameDOM.innerHTML=username

let date=document.querySelector("#myClock")
let time;
time=new Date();
date.innerHTML = time.toDateString();

function Clock(){
    let zaman=new Date();
    let saat =zaman.getHours();
    let dakika=zaman.getMinutes();
    let saniye=zaman.getSeconds();
    let session="AM";

if (saat==0){
    saat=12;
}
if(saat>12){
    saat=saat-12;
    session="PM";
}

saat=saat<10? "0"+saat:saat
dakika=dakika<10?"0"+dakika:dakika
saniye=saniye<10?"0"+saniye:saniye


  text=` ${saat} : ${dakika} :  ${saniye}   ${session}`
    document.querySelector("#zaman").innerText=text;     
    let t=setTimeout(Clock,1000)
}
Clock();

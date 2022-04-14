function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let time = hh + ":" + mm;  
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     
     document.getElementById("clock").innerText = time; 
     let t = setTimeout(function(){ currentTime() }, 1000); 
}
  
  
  currentTime();

  function currentDate() {
    let date = new Date(); 
    let dd = date.getDate();
    let mm = date.getMonth();
    let yy = date.getFullYear();
    let wd = date.getDay();

   switch(wd){
       case 1:
           wd = "Pirmadienis"
           break;
           case 2:
           wd = "Antradienis"
           break;
           case 3:
           wd = "Trečiadienis"
           break;
           case 4:
           wd = "Ketvirtadienis"
           break;
           case 5:
           wd = "Penktadienis"
           break;
           case 6:
           wd = "Šeštadienis"
           break;
           case 7:
           wd = "Sekmadienis"
           break;
       }
       switch(mm){
           case 0:
               mm = "Sausio"
            case 1:
            mm = "Vasario"
            break;
            case 2:
            mm = "Kovo"
            break;
            case 3:
            mm = "Balandžio"
            break;
            case 4:
            mm = "Gegužės"
            break;
            case 5:
            mm = "Birželio"
            break;
            case 6:
            mm = "Liepos"
            break;
            case 7:
            mm = "Rugpjūčio"
            break;
            case 1:
            mm = "Rugsėjo"
            break;
            case 2:
            mm = "Spalio"
            break;
            case 3:
            mm = "Lapkričio"
            break;
            case 4:
            mm = "Gruodžio"
            break
        }

     let time = `${wd},  ${mm}  ${dd}, ${yy}`;
  
    document.getElementById("date").innerText = time; 
    var t = setTimeout(function(){ currentDate() }, 1000); 
  }
  
  currentDate();

  let dayTime = ()=>{
      let date = new Date();
      let hh = date.getHours();

      hh<12 && hh>=5 ? hh = "Good Morning"
      : hh>=12 && hh<17 ? hh = "Good Afternoon"
      : hh = "Good Evening"
      /* hh>=17 && hh<=24 || hh>=0 & hh<5 ? */
      let currentDayTime = `${hh}, `;
      document.getElementById("dayTimee").innerText = currentDayTime;
      var t = setTimeout(function(){ dayTime() }, 1000);
  }
  dayTime()

  let guestName = () =>{
      let gName = prompt("Kuo jūs vardu?");
      console.log(gName)
      document.getElementById("name").innerText = gName;


  }
  guestName()
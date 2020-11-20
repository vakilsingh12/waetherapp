const cityName=document.getElementById('cityName');
const submitBtn=document.getElementById('submitBtn');
const city_name=document.getElementById('city_name');
const temp_status=document.getElementById('temp_status');
const temp_val=document.getElementById('temp_val');
const datahide=document.querySelector('.midle_layer');
const getinfo=async(e)=>{
   e.preventDefault();
   let cityval=cityName.value;
   if(cityval==""){
    city_name.innerText="Plz write the name before search";
    datahide.classList.add('data_hide');
   }else{
   try{
    let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=b224e9503093219dbe3c810d26dc4e80`;
    const response=await fetch(url);
    const data=await response.json();
    const arrdata=[data];
    city_name.innerText=`${arrdata[0].name},${arrdata[0].sys.country}`;
    temp_val.innerText=arrdata[0].main.temp;
    const tmpmood=arrdata[0].weather[0].main;
    if(tmpmood=="Clear"){
      temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>"
      }else if(tmpmood=="Clouds"){
        temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>"
      }
      else if(tmpmood=="Rain"){
        temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>"
      }else{
        temp_status.innerHTML="<i class='fas fa-sun' style='color:#f1f2f6;'></i>"
      }
      datahide.classList.remove('data_hide');
   }catch{
    city_name.innerText="Plz enter the city name properly";
    datahide.classList.add('data_hide');
   }
   }
}
submitBtn.addEventListener('click',getinfo);

const getCurrentDay=()=>{
  var weekday = new Array(7);
  let day1=document.getElementById('day1');
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";
  let currentTime=new Date();
  let days=weekday[currentTime.getDay()];
  day1.innerText=days;
}
const getCurrentTime=()=>{
  var today_date=document.getElementById('today_date');
  var month=document.getElementById('month');
  var months=[
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]
  var now=new Date();
  var month1=months[now.getMonth()];
  var date=now.getDate();
  today_date.innerText=month1;
  month.innerText=date;
}
getCurrentDay();
getCurrentTime();
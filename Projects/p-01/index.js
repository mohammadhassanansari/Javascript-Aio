const button=document.getElementById("searchBtn");
const input=document.getElementById("cityInput");

const cityName=document.getElementById("city-name");
const cityTime=document.getElementById("current-time");
const cityTemp=document.getElementById("temperature");


async function getData(cityname){
const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=f48033ff1521460393523618260304&q=${cityname}&aqi=yes`
)

return await promise.json()
}



button.addEventListener("click",async ()=>{
const value=input.value;
const result = await getData(value);
cityName.innerText=`${result.location.name},${result.location.region},${result.location.country}`
cityTime.innerText=result.location.localtime;
cityTemp.innerText=result.current.temp_c;
});


let loc=document.getElementById("location");
let tempicon=document.getElementById("temp-icon");
let tempvalue=document.getElementById("temp-value");
let climate=document.getElementById("climate");
let iconfile;
const searchInput=document.getElementById("search-input");
const searchButton=document.getElementById("search-button");

window.addEventListener("load" ,()=>{
    let long;
    let lat;
  if(navigator.geolocation)  
  {
    navigator.geolocation.getCurrent((position)=>
    {
    long=position.coords.longitude;
    lat=position.coords.latitude;
const proxy="https://code4developers.com/cors-anywhere/";
    const api=`${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=f50d41e36b3cd3e3570b1c0cffc9c363`

    fetch(api).then((response)=>{
        return response.json();
    })
   .then(data=>
    {
        const{name}=data;
        const{feels_like}=data.main;
        const{id,main}=data.weather[0];

        loc.textContent=name;
        climate.textContent=main;
        tempvalue.tempContent=Math.round(feels_lile-273);



    }) 
  }

)}

})
// use your own API key
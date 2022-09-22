const changeMode = () => {
  let mymain = document.getElementById("main").classList;
  let myDownload = document.getElementById("Download").classList;
  let myfaq = document.getElementById("faqs").classList;
  let mychildren = document.getElementById("childrenProfile").classList;
  let mywatch = document.getElementById("watchEverywhere").classList;
  let myontv = document.getElementById("OnTv").classList;
  let footer = document.getElementById("footer").classList;

  mymain.toggle("mainlight");
  myDownload.toggle("mydark");
  myfaq.toggle("mydark");
  mychildren.toggle("mydark");
  myontv.toggle("mydark");
  mywatch.toggle("mydark");
  footer.toggle("mydark");
};
let myontv = document.getElementById("OnTv");
let mainday = document.getElementById("display_main_day");
let main = document.getElementsByClassName("main");
let weather_icon = document.getElementById("weather_icon");
function loadCoupon() {
  document.getElementById("coupon").style.display = "block";
  document.getElementById("coupon").style.opacity = "1";
}
function closeCoupon() {
  document.getElementById("coupon").style.display = "none";
  document.getElementById("coupon").style.opacity = ".5";
}
const API_KEY = "bc01722bf0252f19e97faf6059dd8e91";
getWeatherData();
function getWeatherData() {
  navigator.geolocation.getCurrentPosition((success) => {
    let { latitude, longitude } = success.coords;
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        showWeatherData(data);
      });
  });
}
function showWeatherData(data) {
  let { humidity, temp, pressure, sunrise, sunset, wind_speed } = data.current;
  //console.log(data);
  // <p class="pressure">Pressure: ${pressure} Pa</p>

  // <p class="windspeed">Wind Speed: ${wind_speed}</p>;
  console.log(temp);
  mainday.innerHTML = ` Temp: ${temp}
 `;
  weather_icon.innerHTML = ` <img
    src="http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png"
    alt="weathericon"
  />`;

  // mainday.innerHTML = ` <span class="temp">Temp: ${temp}°C</span>`;

  // <span class='cur_weat'>Current Weather<img src="http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png" alt='weathericon'/></span>
  //   <span class="maindiv">
  //     <span class="temp">Temp: ${temp}°C</span>
  //   </span>
}

var thisdayname = document.getElementById("thisdayname");
var thisdaynumber = document.getElementById("thisdaynumber");
var findlocation = document.getElementById("findlocation");
var firstdaylocation = document.getElementById("firstdaylocation");
var firstdaydegree = document.getElementById("firstdaydegree");
var firstdayicon = document.getElementById("firstdayicon");
var firstdaycustom = document.getElementById("firstdaycustom");
var firstdayhumidity = document.getElementById("firstdayhumidity");
var firstdaywind = document.getElementById("firstdaywind");
var firstdaydirection = document.getElementById("firstdaydirection");
var dayname = document.querySelectorAll(".dayname");
var daydgree = document.querySelectorAll(".daydgree");
var dayicon = document.querySelectorAll(".dayicon");
var daycustom = document.querySelectorAll(".daycustom");
var dayhumidity = document.querySelectorAll(".dayhumidity");
var daywind = document.querySelectorAll(".daywind");
findlocation.addEventListener("input", function (e) {
  var location = e.target.value;
  getdata(location);
});

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    getdata(`${lat},${long}`);
  });
}
async function getdata(location) {
  var response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?q=${location}&days=3&key=d38d5741854848d3904151606241312`
  );
  var result = await response.json();
  console.log(result);
  var date = new Date(result.forecast.forecastday[0].date);
  var dayonename = date.toLocaleString("en-us", { weekday: "long" });
  thisdayname.innerHTML = dayonename;
  var dayonenumber = date.toLocaleString("en-us", { month: "long" });
  thisdaynumber.innerHTML = date.getMonth() + dayonenumber;
  firstdaylocation.innerHTML = result.location.name;
  firstdaydegree.innerHTML = result.current.temp_c;
  var condImg = result.current.condition.icon;
  var conditionImg = `https:${condImg}`;
  firstdayicon.setAttribute("src", conditionImg);
  firstdaycustom.innerHTML = result.current.condition.text;
  firstdayhumidity.innerHTML = result.current.humidity+"%";
  firstdaywind.innerHTML = result.current.wind_kph + "km/h";
  firstdaydirection.innerHTML = result.current.wind_dir;
  for (var i = 0; i <= 1; i++) {
    var date = new Date(result.forecast.forecastday[i + 1].date);
    var dayName = date.toLocaleString("en-us", { weekday: "long" });
    dayname[i].innerHTML = dayName;
    daydgree[i].innerHTML = result.forecast.forecastday[i + 1].day.avgtemp_c;
    var link = result.forecast.forecastday[i + 1].day.condition.icon;
    var httplink = `https:${link}`;
    dayicon[i].setAttribute("src", httplink);
    daycustom[i].innerHTML =
      result.forecast.forecastday[i + 1].day.condition.text;
    dayhumidity[i].innerHTML =
      result.forecast.forecastday[i + 1].day.avghumidity + "%";
    daywind[i].innerHTML = result.forecast.forecastday[i + 1].day.maxwind_kph+"km/h";

  }
}

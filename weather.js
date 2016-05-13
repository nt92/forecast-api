var weather = new XMLHttpRequest();
weather.open("GET", "http://api.wunderground.com/api/34aa075403e79f78/conditions/q/FL/Weston.json", false);
weather.send(null);

var r = JSON.parse(weather.response);

var dis = "Current location: " + r.current_observation.display_location.full + " <p>";
dis += "current temp: " + r.current_observation.temperature_string;

document.getElementById("weather").innerHTML = dis;

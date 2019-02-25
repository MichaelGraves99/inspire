import WeatherService from "./weather-service.js";

var _ws = new WeatherService()

function drawWeather() {
	console.log("THE WEATHER MAN SAYS:", _ws.Weather)
	let template = _ws.Weather.WeatherTemplate
	document.querySelector('#weather').innerHTML = template
}

//Public
export default class WeatherController {

	constructor() {
		_ws.addSubscriber('weather', drawWeather)
		_ws.getWeatherApi()
	}

}

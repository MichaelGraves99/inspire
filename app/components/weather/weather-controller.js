import WeatherService from "./weather-service.js";

var _ws = new WeatherService()

function drawWeather() {
	console.log("THE WEATHER MAN SAYS:", _ws.Weather)
}

export default class WeatherController {

	constructor() {
		_ws.addSubscriber('weather', drawWeather)
		_ws.getWeather()
	}

}

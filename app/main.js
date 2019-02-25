import WeatherController from "./components/weather/weather-controller.js";
import TodoController from "./components/todo/todo-controller.js";
import ImageController from "./components/image/image-controller.js";
import QuoteController from "./components/quote/quote-controller.js";
import GreetingController from "./components/greeting/greeting-controller.js";

// HEY WHERE ARE ALL OF YOUR CONTROLLERS??
class App {
  constructor() {
    this.controllers = {
      weatherController: new WeatherController(),
      todoController: new TodoController(),
      ImageController: new ImageController(),
      quoteController: new QuoteController(),
      greetingController: new GreetingController()
    }
  }
}

window['app'] = new App()  
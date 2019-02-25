import GreetingService from "./greeting-service.js";

const _gs = new GreetingService()

function drawGreeting() {
  let greeting = _gs.Greting
  console.log("THE GREETING MAN SAYS:", greeting)
  document.querySelector('#welcome').innerHTML = greeting
}




//Public
export default class greetingController {
  constructor() {
    _gs.addSubscriber('greeting', drawGreeting)
    _gs.getGreeting()
  }


}




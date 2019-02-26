

let _state = {
  greeting: ''
}

let _subscribers = {
  greeting: []
}

function _setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn());
}

//Public
export default class GreetingService {
  get Greeting() {
    return _state.greeting
  }

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  getGreeting() {
    startTime()
  }
  get Greting() {
    return _state.greeting
  }
}

function startTime() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let dayPart = 'AM'
  m = formatTime(m);


  if (h <= 12) {
    var greet = 'Mike, Its a Good Morning'
  } else if (h <= 18) {
    var greet = 'Mike, Its a Wonderfull Afternoon'
  } else {
    var greet = 'Mike, Its Time to Relax'
  }

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    dayPart = "PM";
  }
  let t = setTimeout(startTime, 3000);
  let data = `
    <div class="card" style="width: 60rem;">
      <div class="card-body fa cen">
        <h1 class="greeting">${greet}</h1>
      </div>
      <div class="card-body fb cen">
        <h1 class="big">${h}:${m} ${dayPart}</h1>
      </div>
    </div >`
  _setState('greeting', data)
}
function formatTime(i) {
  if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
  return i;
}




// <div class="fa cen">
//       <h1 class="greeting">${greet}</h1>
//       <h1 class="big">${h}:${m} ${dayPart}</h1>
//     </div>`
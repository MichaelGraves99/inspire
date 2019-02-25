export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);

    // HEY FUN FACT 
    // Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
    // data.main.temp is the temperature in Kelvin
    // You should probably convert the temperature data to either F or C
    this.city = data.name
    this.kelvin = data.main.temp
    this.weather = data.weather[0].main
    this.icon = data.weather[0].icon
    this.celsius = Math.floor(data.main.temp - 273.15)
    this.farenheit = Math.floor(((data.main.temp - 273.15) * (9 / 5)) + 32)
  }

  get WeatherTemplate() {
    return `
    <div class="card" style="width: 10rem;">
      <div class="card-body">
        <h4 class="card-title cen">Weather</h4>
        <h4 class="card-title cen">${this.city}</h4>
        <h4 class="card-title cen" data-toggle="tooltip" data-placement="bottom" title="${this.celsius} C">${this.farenheit}<span> F</span></h4>
        <div class="text-center"><img src="https://openweathermap.org/img/w/${this.icon}.png" alt=""></div>
      </div>
    </div>
   `
  }

}




{/* <h4 class="card-subtitle cen mb-2">${this.farenheit}<span>F</span></h4>
<h4 class="card-subtitle cen mb-2">${this.celsius}<span>C</span></h4> */}

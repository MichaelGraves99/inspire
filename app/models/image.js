export default class Image {
  constructor(data) {
    this.url = data.url
    this.large_url = data.large_url

  }
  get ImageTemplate() {
    return `<img class="bk-grnd-img" src="${this.large_url}" alt="BackGround image here">`

  }
}
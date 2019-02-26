export default class Quote {
  constructor(data) {
    this.tags = data.tags[0]
    this.url = data.url
    this.body = data.body
    this.author = data.author

  }

  get QuoteTemplate() {
    return `
    <div class="card" style="width: 36rem;">
      <div class="card-body">
        <h5 data-toggle="tooltip" data-placement="bottom" title="${this.author}">${this.body}</h5>
      </div>
    </div>
    `
  }

}







{/* <div class="can">
  <h5 data-toggle="tooltip" data-placement="bottom" title="${this.author}">${this.body}</h5>
</div> */}
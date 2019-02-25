import QuoteService from "./quote-service.js";

let _qs = new QuoteService()

function drawQuote() {
  let quote = _qs.Quote
  document.querySelector('#quote').innerHTML = quote.QuoteTemplate
}


//Public
export default class QuoteController {
  constructor() {
    _qs.addSubscriber('quote', drawQuote)
    _qs.getQuoteApi()
  }

}

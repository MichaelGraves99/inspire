import Quote from "../../models/quote.js";
// @ts-ignore
const _quoteApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});

let _state = {
	quote: {}
}

let _subscribers = {
	quote: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn());
}


export default class QuoteService {
	get Quote() {
		return _state.quote
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getQuoteApi() {
		console.log('Calling the Quotester')
		_quoteApi.get()
			.then(res => {
				let data = new Quote(res.data.quote)
				_setState('quote', data)
			})
			.catch(err => {
				console.error(err)
			})
	}
}

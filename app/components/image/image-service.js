import Image from "../../models/image.js";
// @ts-ignore
const _imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
});
let _state = {
	image: ''
}

let _subscribers = {
	image: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn());
}


//Public
export default class ImageService {
	get Image() {
		return _state.image
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getImageApi() {
		console.log('Calling the Imageman')
		_imgApi.get()
			.then(res => {
				_setState('image', res.data.large_url)
			})
			.catch(err => {
				console.error(err)
			})
	}
}
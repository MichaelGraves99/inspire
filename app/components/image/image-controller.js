import ImageService from "./image-service.js";

const _is = new ImageService()

function drawImage() {
  let image = _is.Image
  console.log("THE IMAGE MAN SAYS:", _is.Image)
  document.querySelector('#bg-image').setAttribute('style', `background-image:url(${image});`)
}

//Public
export default class ImageController {
  constructor() {
    _is.addSubscriber('image', drawImage)
    _is.getImageApi()
  }

  getImage() {
    _is.getImageApi()
  }

}


import ImageService from "./image-service.js";

const _is = new ImageService()

function drawImage() {
  let image = _is.Image
  console.log("THE IMAGE MAN SAYS:", _is.Image)
  document.getElementById('bg-image').innerHTML = image.ImageTemplate
}

export default class ImageController {
  constructor() {
    _is.addSubscriber('image', drawImage)
    _is.getImage()
  }

  getImage() {
    _is.getImage()
  }

}


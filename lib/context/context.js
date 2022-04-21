const CANVAS = document.querySelector('canvas')

const Context = (canvas = CANVAS, dimession = '2d') => {
  return canvas.getContext(dimession)
}

export default Context

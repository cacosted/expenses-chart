export default class Chart {
  constructor(element){
    this.element = document.createElement(element)
    this.scale = 2.5
    this.height = 0
  }
  setElement(element) {
    this.element = document.createElement(element)
  }
  setId(id) {
    this.element.setAttribute('id',id)
  }
  setContent(content) {
    this.element.innerHTML = content
  }
  setHeight(height) {
    this.element.firstChild.style.height = `${height * this.scale}px`
    this.height = height
  }

  setMaxColor(color) {
    this.element.firstChild.style.backgroundColor = color
  }
}
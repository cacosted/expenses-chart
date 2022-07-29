export default class Chart {
  constructor(element){
    this.element = document.createElement(element)
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
}
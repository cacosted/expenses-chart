import Chart from './Chart.js'
import data from './data.js'

const chartContainer = document.querySelector('#chart-container')
const maxColor = getComputedStyle(document.documentElement).getPropertyValue('--accent')
const largeHeight = Math.max(...data.map(item => item.amount))

const chartContent = (amount, day) => {
  return (`
    <div class="card__chart" data-price="${amount}" height="${amount}rem"></div>
    <p class="light-text">${day}</p>
  `).trim()
}

const chartList = data.map(({amount, day}) => {
  const newChart = new Chart('div')

  newChart.setContent(chartContent(amount,day)) 
  
  if(amount === largeHeight) {
    newChart.setMaxColor(maxColor)
  }
  
  newChart.setHeight(amount)
  
  return newChart.element
});

chartContainer.append(...chartList)
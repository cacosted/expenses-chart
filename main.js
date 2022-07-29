import Chart from './Chart.js'
import data from './data.js'

const chartContainer = document.querySelector('#chart-container')
const maxColor = getComputedStyle(document.documentElement).getPropertyValue('--accent')
const largeHeight = Math.max(...data.map(item => item.amount))

const chartList = data.map(balance => {
  const newChart = new Chart('div')
  newChart.setContent(`<div class="card__chart" data-price="${balance.amount}" height="${balance.amount}rem"></div>
  <p class="light-text">${balance.day}</p>
  `) 
  
  if(balance.amount === largeHeight) {
    newChart.setMaxColor(maxColor)
  }
  
  newChart.setHeight(balance.amount)
  
  return newChart.element
});

// console.log(chartList);
chartContainer.append(...chartList)
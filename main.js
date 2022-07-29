import Chart from './Chart.js'
const MONTHS = ['mon','tue','wen','thu','fri','sat','sun']

const chartContainer = document.querySelector('#chart-container')

const chartList = MONTHS.map(month => {
  const newChart = new Chart('div')
  newChart.setContent(`<div class="card__chart" data-price="52.36"></div>
  <p class="light-text">${month}</p>
  `) 
  newChart.setId('id',month)
  return newChart.element
});

chartContainer.append(...chartList)
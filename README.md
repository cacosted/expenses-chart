# Frontend Mentor - Expenses chart component solution
![Demo screenshot](https://user-images.githubusercontent.com/57645180/181860784-312aa4ed-ba14-4b1b-9469-05aae454f4fc.png)
This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different color to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Links

- Live Site URL: [Live Demo](https://cacosted.github.io/expenses-chart)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

This project looked very easy at first, but then It had some things that I had to think about to know how to solve.

On cool tricked that I used, was to make the tooltip work with only `css`:
```css

.card__chart {
  /* Styles */
  --tooltip-display: none;
}
.card__chart:hover {
  /* Styles */
  --tooltip-display: block;
}

.card__chart::before {
  /* Styles */
  display: var(--tooltip-display);
}
```

To make the charts dynamic I created a Class to encapsuled the logic of the new elements
```js
class Chart {
  constructor(element){
    this.element = document.createElement(element)
    this.scale = 2.5
    this.height = 0
  }
}
```
In this way I was able to create instances of `Chart` to create all the different charts according to the data
```js
  data.map(({value, day}) => {
    const newChart = new Chart('div')
    newChart.setContent(value,day)
  })
```
I wanted to use de data as json, but it's not allowed to import as a module a `.json` yet, instead y refactored the data as a `.js` file and then export it as a module

```js
export default data = [
  {amount: 1, day: 'mon'},
  ....  
]
```
### Useful resources

- [Devdocsio](devdocs.io/) - This is a great source of information for the main web technologies, is also great that you can set it up to use it offline.
- [Custom properties tricks](https://css-tricks.com/how-to-get-all-custom-properties-on-a-page-in-javascript/) - Great article to understand how to use custom properties with JavaScript.

## Author

- Frontend Mentor - [@cacosted](https://www.frontendmentor.io/profile/cacosted)
- Twitter - [@cacosted](https://www.twitter.com/cacosted)

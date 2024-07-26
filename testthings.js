var date = new Date('05/12/1988')

let day = date.getDay().toString()

let month = date.toLocaleString('en-US', {month: 'short'})

let year = date.getFullYear().toString()

console.log(day)
console.log(month)
console.log(year)

year = "2024"

console.log(date.toDateString())

//console.log(Number(year))
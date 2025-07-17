//a shoping list consits of (sugar=300,milk=70,salt=30,flour 230,oil=400.bread=100). create a function that takes and calclates the VAT=16% total cost of the shopping list and returns the total cost including VAT. use various array methods to achieve this.

let shopingList = [300, 70, 30, 230, 400, 10]; 
let VAT = 0.16;
let tax=shopingList.map(i=>i*VAT)
console.log(tax);

let totalCost=shopingList.map(i=>i+VAT*i)
console.log(totalCost);
let sum=0
let total = tax.map(t=>sum=i+sum)
console.log(total);



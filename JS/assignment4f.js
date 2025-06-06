// a system for expreeway toll collection
let distance = 35; // distance in miles

if (distance <= 5) {
    console.log("cost: KES 300");
}
else if (distance <= 10) {
    console.log("cost: KES 400");
    
}
else if (distance <= 20) {
    console.log("cost: KES 500");
}
else if (distance <= 40){
 //calculate the cost with discount
    let cost = 600;
    let discount = 0.1; // 10% discount
    let discountedCost = cost - (cost * discount);
    console.log("cost: KES " + discountedCost);

}
else {
    console.log("invalid distance");
    
}

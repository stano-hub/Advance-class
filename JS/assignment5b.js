// simple interest arrow function
const simpleInterest=(rate,time,principle)=>{
    interest = (rate*time*principle)/100
    console.log("The simple interest is "+interest)
    console.log("The total payable amount is ",interest + principle)
    
}
simpleInterest(rate=12,time=3,principle=50000)

const simpleinterest=({rate,time,principle})=>{
    interest = (rate*time*principle)/100
    console.log("The simple interest is "+interest)
    console.log("The total payable amount is ",interest + principle)
    
}
simpleinterest({rate:8,time:2,principle:90000})
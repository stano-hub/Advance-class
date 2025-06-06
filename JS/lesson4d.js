// for(let i=1;i<=5;i++){
//     console.log("loop number " + i)}

//while loop
let i = 1;
while (i <= 6) {
    console.log("while counter " + i);
    i++;
}
// do while loop
// The do while loop will always execute at least once then check the condition
let j = 10;
do {
    console.log("do while counter " + j);
    j++;
}
while (j <= 6);

for (let i=0; i<=10;i++){
    console.log("counter " + i);
    if (i==5)continue
    if (i==8)break
    
}

let fruits=["apple","Pinapple","orange"]

for(let I=0; I<fruits.length; I++){
    console.log(fruits[I]);
    
}
let number=5218
let res=0

while(number!=0){

    let digit=number % 10;
    res= (res*10)+digit;
    number=parseInt(number/10);

}

console.log(res);
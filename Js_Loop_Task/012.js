let num=103
let sum=0
let temp=num


while (temp>0){

    let digit= temp % 10
    sum= sum + (digit*digit*digit)
    temp= Math.floor(temp/10)

}

if(sum===num){
    console.log("It is Armstrong Number...");
    
}
else
{
    console.log("No it is not Armstrong Number");
    
}
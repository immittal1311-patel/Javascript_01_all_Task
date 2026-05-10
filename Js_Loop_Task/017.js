let stringN="hello"
let revString=""

for(let i=stringN.length -1;i>=0;i--)
{
    revString=revString + stringN[i]
}

console.log("Reverse String:",revString);

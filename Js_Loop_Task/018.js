let text="I AM JAVASCRIPT"
text=text.toLowerCase()
let vowelcount=0


for(let i=0;i<text.length;i++)
{
    let char=text[i]

    if(
        char !== "a" &&
        char !== "e" &&
        char !== "i" &&
        char !== "o" &&
        char !== "u" 
    )
    {
        continue;
    }
    vowelcount++
}

console.log("Total Vowels:",vowelcount);

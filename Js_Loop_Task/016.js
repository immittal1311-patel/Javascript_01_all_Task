

let enterpassword=""
let attempts=0
let maxatt=3
let password="js@123"

do{

    enterpassword=password[attempts];
    attempts++

    console.log("Attempt" +attempts+":"+enterpassword);
    
    if(enterpassword===password){
        console.log("Login  Successful");
        break;
        
    }else
    {
        console.log("Incorrect Password..");
        
    }

}while(attempts<maxatt)

    console.log("Total Attempts used:"+attempts);
    
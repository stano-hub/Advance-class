// create a function called register which requires a username,email,a password
// determine if the email is valid must have an @
// determine the strength of the password

function register (username,email,password){
    //console.log(username,email,password)
    let passCheck = password.length
    let validEmail = email.includes("@")
    // console.log(passCheck,validEmail)
    

    /*if(passCheck > 8){
        console.log("input a strong password")
    }else{
        console.log("password is strong")
    }
    
    if(validEmail == true){
        console.log("email valid")
    }else{
        console.log("input a valid password")
    }*/ 
   // use the above commented code for validation


   

    if(passCheck > 8 && validEmail==true){
        console.log("Successfully Registered as, "+username)
    }else {
        if(passCheck < 8){
            console.log("input a strong password")
        }else{
            console.log("input a valid email")
        }
    }
  
}
register("spotter","qwerty@gmail","qwerty123.")
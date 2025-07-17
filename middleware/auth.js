const jwt = require("jsonwebtoken")
// import our secret secret for the api 
const JWT_SECRET = process.env.JWT_SECRET

// Below middleware is going to protect different routes of our application 
function auth(req,res,next){

    // get the authorization from the incoming request 
    const authHeader= req.headers.authorization;
    // console.log("The content of the header",authHeader);

    const token = authHeader && authHeader.split(' ')[1];

    console.log("The token is:",token);

    //check if the sent req contains the auth token 
    if (!token) res.status(401).json({message : "No authorization token provided"})

    
    // wherther the token is valid or not 
    try {
        //verify the  token using the secret key (JWT_SECRET)
        //if the token is valid, decode it and store info in req user 
        const decoded = jwt.verify(token,JWT_SECRET)

        // console.log("decoded",decoded);
        req.user = decoded

        // if the token has been verified and it is correct 

        
     } catch (err) {
        res.status(403)({message : "Invalid token"})
    }
    


    





}


//eport modules
module.exports = auth;

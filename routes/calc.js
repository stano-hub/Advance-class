const express = require('express');
const router = express.Router();

// create the addition route
router.post('/add', (req, res) => {
    const {num1, num2} = req.body;
    const sum = num1 + num2;
    res.json({ message : "Addition succeful",num1, num2 , result : sum });

})
// create the multiplication route
router.post('/multiply', (req, res) => {
    const {num1, num2} = req.body;
    const product = num1 * num2;
    res.json({ message : "Multiplication succeful",num1, num2 , result : product });
})
// create the division route
router.post('/divide', (req, res) =>{
    const {num1, num2} = req.body;
    const answer = num1 / num2;
    res.json({ message : "Division succeful",num1, num2 , result : answer });
 
})
// create the subtraction route
router.post('/subtract', (req, res) => {
    const {num1, num2} = req.body;
    const difference = num1 - num2;
    res.json({ message : "Subtraction succeful",num1, num2 , result : difference });
})

router.get ('/', (req, res) => {
    res.json({ message: "Welcome to the Calculator API",
        instructions: "You can access different endpoints as /add, /subtract, /multiply, /divide"
    });  
       
});





// export the router to be available in other files
module.exports = router;
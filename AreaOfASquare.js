const AreaOfASquare = {
    calculate: function(side) {
        if (side <= 0) {
            return "Side length must be greater than 0";
        }
        return side * side;
    }
}

// Example usage:
// console.log(AreaOfASquare.calculate(5)); // Output: 25

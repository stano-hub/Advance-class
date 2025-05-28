let product_details = {
    product_name: "Laptop",
    product_price: 1200,
    product_category: "Electronics",
    product_brand: "Dell",
    product_rating: 4.5,
    product_availability: true,


}
//destructuring the object
let { product_name, product_price, product_category, product_brand, product_rating, product_availability } = product_details;
console.log(product_name); 
console.log(product_price); 
console.log(product_category);        

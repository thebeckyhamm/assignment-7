//----------------------Question 1-------------------------//

//Show me how to calculate the average price of all items. Please console.log the average. A: 23.63


// Map the prices out into their own array
var prices = items.map(function(item){
    return item.price;
});

// Reduce the prices array into a sum of all prices
var sum = prices.reduce(function(finalSum, price){
    return finalSum + price;
});

// divide the summed amount by the # of items in the prices array (or I could do items array)
var average = sum / prices.length;

console.log("A1: The average price is $" + average.toFixed(2));



//----------------------Question 2-------------------------//

//Show me how to get an array of items that cost between $14.00 and $18.00 USD


// Filter through the prices of each item and select only those within the range 
// I forgot this puts the entire value into an array so it was easier than I thought!
var fourteenEighteenPrices = items.filter(function(item){
    return item.price > 14 && item.price < 18;
});

console.log("A2: Items that cost between $14.00 USD and $18.00 USD: " + fourteenEighteenPrices);






//----------------------Question 3-------------------------//

// Show me how find the item with a "GBP" currency code and print its name and price. 
// Please console.log the one you find.


// filter the item with the currency code GBP into it's own array
var GBP = items.filter(function(item){
    return item.currency_code === "GBP";
});

//Get item out of an array and return just the object
var GBPObj = GBP.reduce(function(finalItem, item){
    return finalItem;
});

console.log("A3: " + GBPObj.title + " costs £" + GBPObj.price);


// Could have done this but it seemed messy to me?
// console.log(GBP[0].title + " costs £" + GBP[0].price);






//----------------------Question 4----COME BACK TO THIS---------------------//

// Show me how to find which items are made of wood. Please console.log the ones you find.

// Put all the materials into their own array
// var materials = items.filter(function(item, index){
//     var wood = "wood";
//     return item[index].materials["wood"];
// });


// put materials in array, then filter down to just the arrays the contain "wood"






//----------------------Question 5-------------------------//

// Show me how to find which items are made of eight or more materials. Please console.log the ones you find.

// Put all the materials into their own array
// var materials = items.map(function(item){
//     return item.materials;
// });


// // filter down to ones where the length is greater or equal to 8
// var eightMaterials = materials.filter(function(item) {
//     return item.length >= 8;
// });


var eightMaterials = items.filter(function(item, index) {
    return items[index].materials.length >= 8;
});

var printEights = eightMaterials.forEach(function(item) {
    console.log("A5: " + item.title + 
                " has " + 
                item.materials.length + 
                " materials: " + 
                item.materials);
});



// items[0].materials

// var filteringEights = function(arr) {
//     arr.filter(function(item){
//         return item.length >= 8;
//     });
// };

// var eightMaterials = filteringEights(materials);




//----------------------Question 6-------------------------//

// Show me how to calculate how many items were made by their sellers


var madeBy = items.map(function(item) {
    return item.who_made;
});

var iMade = madeBy.filter(function(item) {
    return item === "i_did"
});

console.log("A6: " + iMade.length + " were made by their sellers");



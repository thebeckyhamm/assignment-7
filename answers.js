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

var printFourteenEighteenPrices = function(arr) {
    console.log("A2: Items that cost between $14.00 USD and $18.00 USD: ");

    return arr.forEach(function(item) {
        console.log(item);
    });
};

console.log(printFourteenEighteenPrices(fourteenEighteenPrices));







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






//----------------------Question 4------------------------//

// Show me how to find which items are made of wood. Please console.log the ones you find.

var materials = items.map(function(item) {
    return item.materials;
});

// example single array
var stuff = ["wood", "metal", "plastic"];

var colors = ["blue", "green", "pink"];

var multipleStuff = [
    ["wood", "metal", "plastic"],
    ["metal", "plastic", "wood"],
    ["pink", "blue", "yellow"]
];


// example filter on single array for item 
var woodStuff = !!stuff.filter(function(item) {
    return item === "wood"

});

// turn single array into function that takes an array and the item to be filtered, then use !! on the .length to make it say true or false instead of returning the actual item (an array or an empty array)
var arrayContains = function(arr, thing) {
    return !!arr.filter(function(item) {
        return item === thing;
    }).length;
};

// filter down the materials arrays to just those that contain wood
var arrayOfArrays = materials.filter(function(singleArray) {
   return arrayContains(singleArray, "wood");
 
}); // good, but doesn't return the whole object that the wood material is in



// convert the above into something that works on the objects in the items array
var woodItems = items.filter(function(obj) {
    return arrayContains(obj.materials, "wood");
});

var printWoodItems = woodItems.forEach(function(item) {
    console.log("A4: " + item.title + " is made of wood");
});




//----------------------Question 5-------------------------//

// Show me how to find which items are made of eight or more materials. Please console.log the ones you find.

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




//----------------------Question 6-------------------------//

// Show me how to calculate how many items were made by their sellers


var madeBy = items.map(function(item) {
    return item.who_made;
});

var iMade = madeBy.filter(function(item) {
    return item === "i_did"
});

console.log("A6: " + iMade.length + " were made by their sellers");



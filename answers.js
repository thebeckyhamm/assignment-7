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

console.log("The average price is $" + average.toFixed(2));



//----------------------Question 2-------------------------//

//Show me how to get an array of items that cost between $14.00 and $18.00 USD


// Filter through the prices of each item and select only those within the range 
// I forgot this puts the entire value into an array so it was easier than I thought!
var FourteenEighteenPrices = items.filter(function(item){
    return item.price > 14 && item.price < 18;
});

console.log("Items that cost between $14.00 USD and $18.00 USD: " + FourteenEighteenPrices);






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

console.log(GBPObj.title + " costs £" + GBPObj.price);


// Could have done this but it seemed messy to me?
// console.log(GBP[0].title + " costs £" + GBP[0].price);








//----------------------Question 1----------------------------//

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



//----------------------Question 2----------------------------//



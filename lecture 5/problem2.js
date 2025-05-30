// for a given array with prices of 5 items are [100, 200, 300, 400, 500]. All items have an offer at 10% off on them. change the array to store the new prices after applying the offer.

let pricese = [100, 200, 300, 400, 500];
for (let i = 0; i < pricese.length; i++) {
  pricese[i] = pricese[i] - pricese[i] * 0.1;
}
console.log("New prices after applying the offer:", pricese);
// Output: New prices after applying the offer: [90, 180, 270, 360, 450]
// pls explain the code in detail
// This code snippet is designed to apply a 10% discount to each item in an array of prices. Let's break it down step by step:
// 1. **Array Declaration**:
//   - `let pricese = [100, 200, 300, 400, 500];`
//     - This line declares an array named `pricese` that contains the original prices of 5 items.
// 2. **Looping Through the Array**:
//   - `for (let i = 0; i < prices.length; i++) {`
//     - This line starts a `for` loop that iterates over each index of the `pricese` array. The loop will run as long as `i` is less than the length of the array.
// 3. **Calculating the New Price**:
//   - `pricese[i] = pricese[i] - pricese[i] * 0.1;`
//     - Inside the loop, this line calculates the new price for each item by taking the original price (`pricese[i]`), subtracting 10% of it (`pricese[i] * 0.1`), and updating the array with the new price.
// 4. **Output the New Prices**:

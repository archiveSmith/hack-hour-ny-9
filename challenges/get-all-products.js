d/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
   
}

module.exports = getAllProducts;

//================================ryan=============================

// O(n^2) time, O(n) space
function getAllProducts(array) {
    const products = [];
    for (let i = 0; i < array.length; i += 1){
      let product = 1;
      for (let j = 0; j < array.length; j +=1 ){
        if (j !== i){
          product *= array[j];
        }
      }
      products.push(product);
    }
    return products;
  }
  
  // O(n) time, O(n) space
  function getAllProducts(array){
    const products = [];
    const front = [];
    const back = [];
  
    let front_product = 1;
    let back_product = 1;
  
    for (let i = 0; i < array.length; i += 1){
      front.push(front_product);
      front_product *= array[i];
  
      back.push(back_product);
      back_product *= array[array.length - 1 - i];
    }
  
    for (let j = 0; j < array.length; j += 1){
      products.push(front[j] * back[array.length - 1 - j]);
    }
  
    return products;
  }
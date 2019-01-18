'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

function reverseInPlace(array) {
    let temp;
    //create two pointers in memory, one each for the first and last elements of the array
    if (array.length % 2 === 0)
        for (let i = 0, j = array.length - 1 ; i <= (array.length/2), j >= (array.length/2) ; i++, j--) {
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    else {
        for (let i = 0, j = array.length - 1 ; i < (array.length/2), j > (array.length/2) ; i++, j--) {
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    return array;
}

module.exports = reverseInPlace;

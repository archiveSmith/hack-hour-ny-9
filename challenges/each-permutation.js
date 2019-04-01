/*
Write a function that takes two arguments, an array and a callback. The callback will be called once for each permutation
of the elements of the array, where the permutation is passed as an argument.

Permutations are all the possible rearrangements of the elements. For this problem, assume each permutation must include
every element from the array.

Permutations must NOT repeat any of the array elements.

No return value is necessary.

eachPermutation([1, 2, 3], function(perm) {
  console.log(perm)
});
[ 1, 2, 3 ]
[ 1, 3, 2 ]
[ 2, 1, 3 ]
[ 2, 3, 1 ]
[ 3, 1, 2 ]
[ 3, 2, 1 ]
*/

function eachPermutation(arr, callback) {
  function recurse(array, partialResults) {
    if (partialResults.length === array.length) {
      callback(partialResults)
    }
    for (let i=0; i < array.length; i++) {
      recurse(array.slice(0,i) + array.slice(i+1))), partialResults.concat(array[i]))
    }
  }
  recurse(arr, [])
}



module.exports = eachPermutation;

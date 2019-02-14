/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */
 

function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function validBST(tree) {
    if (tree === null) return true;
    if (tree.left !== null) {
        if (tree.left.value > tree.value ||
            (tree.left.left && tree.left.left.value > tree.value) ||
            (tree.left.right && tree.left.right.value > tree.value)) 
                return false;
    }

    if (tree.right !== null) {
        if (tree.right.value < tree.value ||
            (tree.right.left && tree.right.left.value < tree.value) ||
            (tree.right.right && tree.right.right.value < tree.value))
                return false;
    }
    
    return validBST(tree.left) && validBST(tree.right);
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};

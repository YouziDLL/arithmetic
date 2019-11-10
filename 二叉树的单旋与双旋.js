//将不平衡的二叉树变成平衡二叉树
//左单旋、右单旋
//某一节点不平衡，如果左边浅，右边深，进行左单旋。
// 旋转节点：不平衡的节点为旋转节点。新根：旋转之后变为根节点的节点。变化分支：父节点发生变化的分支。不变分支：父节点不变的分支

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var node2 = new Node('2');
var node5 = new Node('5');
var node3 = new Node('3');
var node6 = new Node('6');
node2.right = node5;
node5.left = node3;
node5.right = node6;

function getDeep(root) {
    if (root == null) return 0;
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    return Math.max(leftDeep, rightDeep) + 1;
}

function isBalance(root) {
    if (root == null) return true;
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    if (Math.abs(leftDeep - rightDeep) > 1) {
        return false;
    } else {
        return isBalance(root.left) && isBalance(root.right);
    }
}

function leftRotate(root) {
    //找到新根
    var newRoot = root.right;
    //找到变化分支
    var changeTree = root.right.left;
    //当前旋转节点的右孩子为变化分支
    root.right = changeTree;
    //新根的左孩子为旋转节点
    newRoot.left = root;
    //返回新的根节点
    return newRoot;
}

function rightRotate(root) {
    //找到新根
    var newRoot = root.left;
    //找到变化分支
    var changeTree = root.left.right;
    //当前旋转节点的左孩子为变化分支
    root.left = changeTree;
    //新根的右孩子为旋转节点
    newRoot.right = root;
    //返回新的根节点
    return newRoot;
}

function changeTree(root) {
    if (isBalance(root)) return root;
    if (root.left != null) root.left = changeTree(root.left);
    if (root.right != null) root.right = changeTree(root.right);
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    if (Math.abs(leftDeep - rightDeep) < 2) {
        return true;
    } else if (leftDeep > rightDeep) {//不平衡，左边深，需要右旋
        return rightRotate(root);
    } else {//不平衡，右边深，需要左旋
        return leftRotate(root);
    }
}

console.log(isBalance(node2));
var newRoot = changeTree(node2);
console.log(isBalance(newRoot));
console.log(newRoot);

//二叉树的双旋（左右双旋，右左双旋）
// 当要对某个节点进行左单旋时，如果变化分支是唯一的最深分支，那么我们要对新根进行右单旋，然后再进行左单旋，这样的旋转叫做右左双旋
// 当要对某个节点进行右单旋时，如果变化分支是唯一的最深分支，那么我们要对新根进行左单旋，然后再进行右单旋，这样的旋转叫做左右双旋
function changeTreeDouble(root) {
    if (isBalance(root)) return root;
    if (root.left != null) root.left = changeTree(root.left);
    if (root.right != null) root.right = changeTree(root.right);
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    if (Math.abs(leftDeep - rightDeep) < 2) {
        return root;
    } else if (leftDeep > rightDeep) {//不平衡，左边深，需要右旋
        var changeTreeDeep = getDeep(root.left.right);
        var nochangeTreeDeep = getDeep(root.left.left);
        if (changeTreeDeep > nochangeTreeDeep){
            root.left = leftRotate(root.left);
        }
        return rightRotate(root);
    } else {//不平衡，右边深，需要左旋
        var changeTreeDeep = getDeep(root.right.left);
        var nochangeTreeDeep = getDeep(root.right.right);
        if (changeTreeDeep > nochangeTreeDeep){
            root.right = rightRotate(root.right);
        }
        return leftRotate(root);
    }
    return root;
}

//二叉树的双旋（右右双旋，左左双旋）
function changeTreeDouble2(root) {
    if (isBalance(root)) return root;
    if (root.left != null) root.left = changeTree(root.left);
    if (root.right != null) root.right = changeTree(root.right);
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    if (Math.abs(leftDeep - rightDeep) < 2) {
        return root;
    } else if (leftDeep > rightDeep) {//不平衡，左边深，需要右旋
        var changeTreeDeep = getDeep(root.left.right);
        var nochangeTreeDeep = getDeep(root.left.left);
        if (changeTreeDeep > nochangeTreeDeep){
            root.left = leftRotate(root.left);
        }
        var newRoot = rightRotate(root);
        newRoot.right = changeTreeDouble2(newRoot.right);
        newRoot = changeTreeDouble2(newRoot);
        return newRoot;
    } else {//不平衡，右边深，需要左旋
        var changeTreeDeep = getDeep(root.right.left);
        var nochangeTreeDeep = getDeep(root.right.right);
        if (changeTreeDeep > nochangeTreeDeep){
            root.right = rightRotate(root.right);
        }
        var newRoot = leftRotate(root);
        newRoot.left = changeTreeDouble2(newRoot.left);
        newRoot = changeTreeDouble2(newRoot);
        return newRoot;
    }
    return root;
}











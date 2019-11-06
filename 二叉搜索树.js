//二叉搜索树
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function addNode(root, num) {
    if (root == null) return;
    if (root.value == num) return;
    if (root.value < num) {//目标值比当前节点值大
        if (root.right == null) root.right = new Node(num);//如果右侧为空则创建节点
        else addNode(root.right, num);//如果右侧不为空，则向右侧进行递归
    } else {//目标值比当前节点值小
        if (root.left == null) root.left = new Node(num);//如果左侧为空则创建节点
        else addNode(root.left, num);//如果左侧不为空，则向左侧进行递归
    }
}

function buildSearchTree(arr) {
    if (arr == null || arr.length == 0) return null;
    var root = new Node(arr[0]);
    for (var i = 1; i < arr.length; i++) {
        addNode(root, arr[i]);
    }
    return root;
}

function searchByTree(root, target) {
    if (root == null) return false;
    if (root.value == target) return true;
    if (root.value > target) return searchByTree(root.left, target);
    else return searchByTree(root.right, target);
}

//二叉平衡搜索树
//平衡二叉树：1、根节点的左子树和右子树高度相差不超过1；2、这颗树的所以子树都符合第一条。
var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');
var f = new Node('f');
var g = new Node('g');
var h = new Node('h');
var j = new Node('j');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
d.right = h;
e.right = j;

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

console.log(isBalance(a));







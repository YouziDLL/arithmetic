//二维数组
// var arr = new Array(4);
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = new Array(8);
// }

//二维拓扑结构
// function Node(value) {
//     this.value = value;
//     this.neighbor = [];
// }
//
// var a = new Node('a');
// var b = new Node('b');
// var c = new Node('c');
// var d = new Node('d');
// var e = new Node('e');
// var f = new Node('f');
//
// a.neighbor.push(b);
// a.neighbor.push(c);
// a.neighbor.push(f);
//
// b.neighbor.push(a);
// b.neighbor.push(d);
// b.neighbor.push(e);
//
// c.neighbor.push(a);
//
// d.neighbor.push(b);
//
// e.neighbor.push(b);

//树形结构  有一个根节点，没有回路，是图的一种，学名是-有向无环图
// 树的遍历
// 遍历二叉树要传根节点
// 二叉树
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

// var a = new Node('a');
// var b = new Node('b');
// var c = new Node('c');
// var d = new Node('d');
// var e = new Node('e');
// var f = new Node('f');
// var g = new Node('g');
//
// a.left = c;
// a.right = b;
// c.left = f;
// c.right = g;
// b.left = d;
// b.right = e;

// 前序遍历：（先根次序遍历）
// function qianxu(root) {
//     if (root == null) return;
//     console.log(root.value);
//     qianxu(root.left);
//     qianxu(root.right);
// }
//
// qianxu(a);

// 中序遍历：（中根次序遍历）
// function zhongxu(root) {
//     if (root == null) return;
//     zhongxu(root.left);
//     console.log(root.value);
//     zhongxu(root.right);
// }
//
// zhongxu(a);

// 后序遍历：（后根次序遍历）
// function houxu(root) {
//     if (root == null) return;
//     houxu(root.left);
//     houxu(root.right);
//     console.log(root.value);
// }
//
// houxu(a);

//根据前序中序还原二叉树
var qian = ['a', 'c', 'f', 'g', 'b', 'd', 'e'];
var zhong = ['f', 'c', 'g', 'a', 'd', 'b', 'e'];

function huanyuan(qian, zhong) {
    if (qian == null || zhong == null || qian.length == 0 || zhong.length == 0 || qian.length != zhong.length) return null;
    var root = new Node(qian[0]);
    var index = zhong.indexOf(root.value);//找到根节点在中序遍历中的位置。
    var qianLeft = qian.slice(1, 1 + index);//前序遍历的左子树
    var qianRight = qian.slice(1 + index, qian.length);//前序遍历的右子树
    var zhongLeft = zhong.slice(0, index);//中序遍历的左子树
    var zhongRight = zhong.slice(1 + index, zhong.length);//中序遍历的右子树
    root.left = huanyuan(qianLeft, zhongLeft);//根据左子树的前序和中序还原左子树并赋值给root
    root.right = huanyuan(qianRight, zhongRight);//根据右子树的前序和中序还原右子树并赋值给root
    return root;
}

var root = huanyuan(qian, zhong);

// console.log(root.left);
// console.log(root.right);

//根据后序中序还原二叉树
var hou = ['f', 'g', 'c', 'd', 'e', 'b', 'a'];

function huanyuan2(zhong, hou) {
    if (zhong == null || hou == null || zhong.length == 0 || hou.length == 0 || zhong.length != hou.length) return null;
    var root = new Node(hou[hou.length - 1]);
    var index = zhong.indexOf(root.value);

    var leftZhong = zhong.slice(0, index);
    var rightZhong = zhong.slice(index + 1, zhong.length);
    var leftHou = hou.slice(0, index);
    var rightHou = hou.slice(index, zhong.length - 1);
    root.left = huanyuan2(leftZhong, leftHou);
    root.right = huanyuan2(rightZhong, rightHou);
    return root;
}

var rootNode = huanyuan2(zhong, hou);
console.log(rootNode.left);
console.log(rootNode.right);








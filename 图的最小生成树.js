//普利姆算法（加点法）
// 1、认选一个点为起点
//2、找到以当前选中点为起点路径最短的边
// 3、如果这条边的另一端没有被连通进来，那么就连结
// 4、如果这条边的另一端也被连结进来了，则看倒数第二短的边
// 5、重复2-4直到所有点都连通
var max = 1000000;
var pointSet = [];
var distance = [
    [0, 4, 7, max, max],
    [4, 0, 8, 6, max],
    [7, 8, 0, 5, max],
    [max, 6, 5, 0, 7],
    [max, max, max, 7, 0]
];

function Node(value) {
    this.value = value;
    this.neighbor = [];
}

var a = new Node('A');
var b = new Node('B');
var c = new Node('C');
var d = new Node('D');
var e = new Node('E');

pointSet.push(a);
pointSet.push(b);
pointSet.push(c);
pointSet.push(d);
pointSet.push(e);

function getIndex(str) {
    for (let i = 0; i < pointSet.length; i++) {
        if (str == pointSet[i].value) return i;
    }
    return -1;
}

//需要传入点的集合，边的集合，当前已经连接进入的集合
//此方法，根据当前已经有的节点，来进行判断，获取到距离最短的点。
function getMinDisNode(pointSet, distance, nowPointSet) {
    var fromNode = null; // 线段的起点
    var minDisNode = null;//线段的终点
    var minDis = max;
//根据当前已有的这些点为起点，依次判断连接其他的点的距离是多少
    for (let i = 0; i < nowPointSet.length; i++) {
        let nowPointIndex = getIndex(nowPointSet[i].value);
        for (let j = 0; j < distance[nowPointIndex].length; j++) {
            let thisNode = pointSet[j];
            if (nowPointSet.indexOf(thisNode) < 0 && distance[nowPointIndex][j] < minDis) {
                fromNode = nowPointSet[i];
                minDisNode = thisNode;
                minDis = distance[nowPointIndex][j];
            }
        }
    }
    fromNode.neighbor.push(minDisNode);
    minDisNode.neighbor.push(fromNode);
    return minDisNode;
}

function prim(pointSet, distance, start) {
    var nowPointSet = [];
    nowPointSet.push(start);
    //获取最小代价的边
    while (true) {
        var minDisNode = getMinDisNode(pointSet, distance, nowPointSet);
        nowPointSet.push(minDisNode);
        if (nowPointSet.length == pointSet.length) {
            break;
        }
    }
}

prim(pointSet, distance, pointSet[2]);
console.log(pointSet);
//克鲁斯卡尔算法（加边法）
//1、选择最短的边进行连结
// 2、要保证边连结的两端至少有一个点是新的点
// 3、或者这条边是将两个部落进行连结的
// 4、重复1-3直到将所有的点都连结到一起

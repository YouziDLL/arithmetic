var arr = [4, 1, 6, 9, 3, 2, 8, 7,10,23,19,13,21];
//普通排序
// function getMin(arr) {
//     if (arr==null || arr.length ==0) return ;
//     var index = -1;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] !=null && arr[i]<arr[index] || arr[i] !=null && index == -1){
//             index=i;
//         }
//     }
//     var result = arr[index];
//     arr[index]=null;
//     return result;
// }
//
// function sort(arr) {
//     var newArr =new Array(arr.length);
//     for (var i = 0 ; i<newArr.length ; i ++){
//         newArr[i] =getMin(arr);
//     }
//     return newArr;
// }
//
// console.log(sort(arr));

//冒泡排序
// function compare(a, b) {
//     if (b < a) return true;
//     else return false;
// }
//
// function exchange(arr, a, b) {
//     var temp = arr[a];
//     arr[a] = arr[b];
//     arr[b] = temp;
// }
//
// function sort() {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - 1-i; j++) {
//             if (compare(arr[j], arr[j + 1])) {
//                 exchange(arr, j, j + 1);
//             }
//         }
//     }
//
// }
//
// sort(arr);
// console.log(arr);

//选择排序,内层循环，每一圈选一个最大的，然后放在后面
// function compare(a, b) {
//     if (a < b) return true;
//     else return false;
// }
//
// function exchange(arr, a, b) {
//     var temp = arr[a];
//     arr[a] = arr[b];
//     arr[b] = temp;
// }
//
// function sort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         var maxIndex = 0;
//         for (let j = 0; j < arr.length - 1 - i; j++) {
//             if (compare(arr[maxIndex], arr[j])) {
//                 maxIndex = j;
//             }
//         }
//         exchange(arr, maxIndex, arr.length - 1 - i);
//     }
// }
//
// sort(arr);
// console.log(arr);
// 任何一种排序算法，都没有优劣之分，只有是否适合的场景

//简单快速排序
// function quickSort() {
//     if (arr == null || arr.length == 0) return [];
//     //随机选一个数
//     let leader =arr[0];
//     //比这个数的放左边，比这个数大的放右边
//     let left=[];
//     let right=[];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < leader) left.push(arr[i]);
//         else right.push(arr[i]);
//     }
//     left=quickSort(left);
//     right=quickSort(right);
//     left.push(leader);
//     return left.concat(right);
// }
// console.log(quickSort(arr));

//标准快速排序

function swap(arr,a,b) {
    var temp =arr[a];
    arr[a]=arr[b];
    arr[b]=temp;
}
function quickSort2(arr,begin,end) {
    if (begin >= end-1) return;
    let left =begin;
    let right = end;
    do {
        do left ++;while (left < right && arr[left] <arr[begin]);
        do right --; while (right > left && arr[right] > arr[begin]);
        if (left < right) swap(arr,left,right);
    }while (left < right);
    let swapPoint = left == right ? right - 1 :right;
    swap(arr,begin,swapPoint);
    quickSort2(arr,begin,swapPoint);
    quickSort2(arr,swapPoint+1,end);
}

function quickSort(arr) {
    quickSort2(arr,0,arr.length);
}

quickSort(arr);
console.log(arr);
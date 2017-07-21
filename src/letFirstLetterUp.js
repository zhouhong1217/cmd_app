/*
/!**
 * Created by zh on 17-7-18.
 *!/
let str = 'i have a dream';
function letFirstLetterUp(str) {
    let strArr = str.split(" ");
    let strUp = [];
    for(let value of strArr){
        let strSelfArr = value.split("");
        let strSelf = strSelfArr.shift();
        strSelfArr.unshift(strSelf.toLocaleUpperCase());
        strUp.push(strSelfArr.join(''));
    }

    console.log(strUp.join(' '));
}
letFirstLetterUp(str);

let arr1 = [1,2,3,4,5,6,7,2,3];
let arr2 = [3,4,5,7,3,9,0,2];
function toJudge(arr1,arr2) {
    let arr = [...new Set(arr1.concat(arr2))];
    console.log(arr);
}
toJudge(arr1,arr2);

const numbers = [1, 2, 3, 4, 5];

let arr = numbers.map((currentValue, index, array) => {
    console.log(`currentValue = `, currentValue);
    console.log(`index = `, index);
    console.log(`array= `, array);
    return currentValue * 2;
}, numbers);

// 需要被排序的数组
var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// 对需要排序的数字和位置的临时存储
var mapped = list.map(function(el, i) {
    return { index: i, value: el.toLowerCase() };
})

// 按照多个值排序数组
mapped.sort(function(a, b) {
    return +(a.value > b.value) || +(a.value === b.value) - 1;
});
console.log(mapped);
// 根据索引得到排序的结果
var result = mapped.map(function(el){
    return list[el.index];
});
console.log(result);*/

let arr = [12,38,79,3,5,1,77];



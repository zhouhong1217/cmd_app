/**
 * Created by zh on 17-7-18.
 */
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


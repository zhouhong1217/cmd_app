/**
 * Created by zh on 17-7-18.
 */
const readlineSync = require('readline-sync');
const judge = require('./inputJudgeStudentInfo');
const judgeId = require('./inputJudgeStudentInfoId');

global.studentArr = [];


inputUserChoose();


function inputUserChoose() {
    let userChoose = readlineSync.question('1. 添加学生\n'+
        '2. 生成成绩单\n' +
        '3. 退出 \n' +
        '请输入你的选择（1～3）：\n');
    switch (userChoose){
        case '1' :
            judge.inputJudgeStudentInfo();
            inputUserChoose();
            break;
        case '2' :
            judgeId.inputJudgeStudentInfoId();
            inputUserChoose();
            break;
        case '3' :
            break;
        default:
            inputUserChoose();
            break;
    }
}


module.exports = {
    inputUserChoose
};


//周宏,6,汉,8班,88,88,88,88

// Handle the secret text (e.g. password).
// var favFood = readlineSync.question('What is your favorite food? ', {
//     hideEchoBack: true // The typed text on screen is hidden by `*` (default).
// });o


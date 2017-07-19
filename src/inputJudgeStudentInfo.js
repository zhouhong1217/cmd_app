/**
 * Created by zh on 17-7-19.
 */
'use strict';
const readlineSync = require('readline-sync');
function inputJudgeStudentInfo() {
    let inputStudentInfo = readlineSync.question('请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：');
    judgeStudentInfo(inputStudentInfo);
}
function judgeStudentInfo(inputStudentInfo) {
    let student = inputStudentInfo.split(",");
    if(student.length != 8){
        inputStudentInfo = readlineSync.question('请按正确的格式输入（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：');
        judgeStudentInfo(inputStudentInfo);
    }else {
        // console.log(student)
        let gradesum = parseInt(student[4])+parseInt(student[5])+parseInt(student[6])+parseInt(student[7]);
        student.push(gradesum);
        console.log(`学生${student[0]}的成绩被添加`);
        studentArr.push(student);
    }
}

module.exports = {
    inputJudgeStudentInfo,
    judgeStudentInfo
};
/**
 * Created by zh on 17-7-19.
 */
'use strict';
const readlineSync = require('readline-sync');
const findStudent = require('./findStudentInfo');
const printStudent = require('./printStudentInfo');

function inputJudgeStudentInfoId() {
    let studentInfoId = readlineSync.question('请输入要打印的学生的学号（格式： 学号, 学号,...）,按回车提交：');
    judgeStudentInfoId(studentInfoId);
}

function judgeStudentInfoId(studentInfoId) {
    let studentId = studentInfoId.split(",");
    if(studentId === undefined){
        studentInfoId = readlineSync.question('请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：');
        judgeStudentInfoId(studentInfoId);
    }else {
        let s = findStudent.findStudentInfo(studentId);
        let g = findStudent.studentGrades(studentId);
        // let m = findStudent.
        if(s == ""){
            return;
        }else {
            console.log(printStudent.printStudentInfo(s,g));
        }
    }
}

module.exports = {
    inputJudgeStudentInfoId,
    judgeStudentInfoId
};


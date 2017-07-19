/**
 * Created by zh on 17-7-19.
 */
'use strict';
const studentGrades = require('./findStudentInfo');
function printStudentInfo(s,g) {
    return `成绩单
姓名|数学|语文|英语|编程|平均分|总分 
========================${s}
========================
总分平均数：${g}
总分中位数：`;
}
module.exports = {
    printStudentInfo
};
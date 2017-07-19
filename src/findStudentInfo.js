/**
 * Created by zh on 17-7-19.
 */
'use strict';
function findStudentInfo(studentId) {
    let s = "";
    for(let value of studentArr){
        for(let item of studentId){
            if(value[1] === item){
                s +=`\n${value[0]}|${value[4]}|${value[5]}|${value[6]}|${value[7]}|${(parseInt(value[4])+parseInt(value[5])+parseInt(value[6])+parseInt(value[7]))/4}|${parseInt(value[4])+parseInt(value[5])+parseInt(value[6])+parseInt(value[7])}`;
            }
        }
    }
    // console.log(s)
    return s;
}

function studentGrades(studentId) {
    let gradesummarys = 0;
    for(let value of studentArr){
        for(let item of studentId){
            if(value[1] === item){
                gradesummarys += parseInt(value[8]);
            }
        }
    }
    return gradesummarys;
}
// function studentGradesMiddle(studentId) {
//     let gradesMid = 0;
//     if(studentId.length % 2 == )
// }
module.exports = {
    findStudentInfo,
    studentGrades
};
function myFunc(std, score = 60) {
    console.log(`${std} 점수 : ${score}`);
    return score;
}

// let myFunc = function myFunc(std, score = 60) {
//     console.log(`${std} 점수 : ${score}`);                
//     return score;
// }

let myFunc2 = function (value) {
    console.log(value);
}

let myFunc3 = (value) => {
    console.log(value);
}

myFunc2(100);
myFunc3('람다');

//console.log(myFunc('집가고싶다',5000 ));
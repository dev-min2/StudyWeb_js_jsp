/**
 * fetch1.js
 */

// fetch의 결과 반환값은 promise
import { table } from './ajaxModule.js';

fetch('../MemberListServJson')
.then((resolve) => {
    console.log(resolve); // response 객체를 받음.
    return resolve.json(); // 
})
.then((result) => {
    console.log(result);
    let titles= ["회원번호","비번","이름","연락처"]
    let dataAry = result;

    let result2 = table.makeTable(titles, result);
    document.getElementById('show').innerHTML += result2;
})
.catch((reject) => {

})



// promise객체 생성
// 1. fullfilled 성공상태
// 2. pending 처리중(지연중)
// 3. rejected 거절,실패
const promise = new Promise(function(resolve) {
    setTimeout(function(){
        console.log('실행');
        resolve('Success resolve를 담아줍니다.') ; // 이건 함수포인터인듯.
    }, 500);
});

// 정상처리가 되면 then을 통해 resolve에 담긴값을 가져온다. 
// promise.then((resolve) => {
//     console.log('then: ', resolve);
//     return 'OK';
// })
// .then((result) => {
//     console.log('2then: ', result);
// })
// .catch((reject) => {
//     console.log('에러 발생');
// }) 

// console.log(promise);
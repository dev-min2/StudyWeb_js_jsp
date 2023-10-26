/**
 * 
 */

let str1 = "Hello";
let str2 = new String("Hello");

console.log(typeof str1, typeof str2);
console.log(str1 == str2); // 값비교
console.log(str1 === str2); // 값&타입 비교

console.log(str1.toUpperCase());

let result = "공백 제거 하니다.     ";
console.log(result.length, result.trim().length);


console.log('   how are you     to day everyone.    '.split(' ').filter((el) => el!='').join(' '));

// /값/ -> 이형태는 정규표현식 객체임.
// /,/ -> 이 형태는 ,콤마 정규표현식
let result2 = "Hello, World, Nice, World".replace(/,/g, '.');
console.log(result2);

const words = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Praesentium ipsam eos placeat, minima quaerat cupiditate delectus commodi soluta sequi id tempora iste eum esse? Repudiandae explicabo voluptatum aut nulla dignissimos?';

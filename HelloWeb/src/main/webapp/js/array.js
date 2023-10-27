/**
 * 
 */
const arr1 = []
arr1.push(10);
arr1.push('ten');
arr1.push( {name:"Hong", age:20});
arr1.unshift(20);

console.log(arr1.length);
//arr1.length = 3;

arr1.pop();

// 중간값이 0이하라면 추가하겠따는 의미임. (생략하거나 1이상이라면 그 수만큼 제거.)
arr1.splice(1, 0, 30); // 추가 삭제 수정.

for(let ary of arr1) {
    console.log(ary);
}

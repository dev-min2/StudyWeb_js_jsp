/**
 * 
 */

const map = new Map();
map.set("홍길동", 80);
map.set("김길동", 85);

console.log(map.get("홍길동"));

for(let ent of map.entries()) {
    console.log(ent);
}

map.forEach((value, key) => {
    console.log(value, key);
});

// 맵 -> 배열
console.log("맵 -> 배열");
const ary = Array.from(map);
ary.forEach((obj) => console.log(obj));

// 배열 -> 맵
console.log("배열 -> 맵");
new Map(ary).forEach((value,key) => console.log(value, key));

const obj10 = {
    name: '박경석',
    age: '틀ㅎ',
    phone: '01012341234'
}

for(let prop in obj10) {
    console.log(prop);
}


// Set(중복허용x)
const array = [1,3,4,1,2,4,1,5,4,3,2,3,4,5,6,1,2,6,7,8,9,1,2,3,5,4,5,6,7,8];
console.log("array의 길이", array.length);

const set = new Set(array);
console.log("set의 길이 : ", set.size);
set.forEach((value) => console.log(value));
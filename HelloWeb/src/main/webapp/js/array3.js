/**
 *  array3.js
 */

let idx = "집, 가고싶어요.".indexOf(",");
console.log(idx);

let names = ["콘", "무지", "라이언", "어피치"];
idx = names.indexOf("무지");
console.log("무지는 " + (idx+1) + "번째 위치에 있습니다.");

let members = [
    {name: "김민식", age: 22},
    {name: "최민식",age:23},
    {name: "김우현",age:26}
]

// 민식이라는 이름이 몇명인지
let cnt = 0;
for(let member of members) {
    if(member.name.length > 2) {
        if("민식" == member.name.substring(1,member.name.length)) {
            ++cnt;
        }
    }
}

console.log(cnt);
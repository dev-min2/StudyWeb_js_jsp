/**
 * 
 */

const json = `
[
    {"id":1,"first_name":"Gerrilee","email":"gdundendale0@flavors.me"},
    {"id":2,"first_name":"Traver","email":"tthickpenny1@ehow.com"},
    {"id":3,"first_name":"Juline","email":"jbach2@apache.org"},
    {"id":4,"first_name":"Bebe","email":"bdeniscke3@springer.com"},
    {"id":5,"first_name":"Beverlie","email":"bjacobsz4@ftc.gov"},
    {"id":6,"first_name":"Foster","email":"fcejka5@unblog.fr"},
    {"id":7,"first_name":"Dani","email":"domolan6@aol.com"},
    {"id":8,"first_name":"Sindee","email":"sfarloe7@netvibes.com"},
    {"id":9,"first_name":"Vale","email":"vwinspear8@reddit.com"},
    {"id":10,"first_name":"Anson","email":"amateus9@nytimes.com"}
]
`;

// Json -> object (JSON.parse())사용
let members = JSON.parse(json);
//console.log(members);

let delMember = "Beverlie";

let idx = 0;
let obj = {};
for(let i = 0; i < members.length; ++i) {
    if(members[i].first_name == delMember) {
        idx = i;
        obj = Object.assign({id: members[i].id, first_name: "kyominjun", email: "hong@email.com"}, members[i]);
        break;
    }
}

members.splice(idx,1,obj);

console.log(members);

// let inputVal = prompt("이름과 이메일 입력하세요 예) 홍길동, hong@email.com");
// console.log(inputVal);

// const inputArray = inputVal.split(',');
// inputArray.forEach((obj,idx) => {
//     inputArray.splice(idx,1,obj.trim());
// });
// console.log(inputArray);

// members.push({"id":members.length + 1,"first_name": inputArray[0],"email": inputArray[1]});
// console.log(members[members.length - 1]);


const dupAry = [["라이언", 5], ["어피치",3], ["콘", 2], ["무지", 4]];
console.log(dupAry);
console.table(dupAry);

let result = dupAry.reduce((acc, obj) => {
    return acc + obj[1];
},0);

console.log(result);


/**
 * 
 */
const arr1 = ['펭수','라이언','어피치','콘','무지'];
arr1.sort();// 배열자체를 정렬
console.log(arr1); 

const arr2 = [4,8,1,12,23,9];
arr2.sort((left,right) => {
    if(left < right)
        return -1; // 음수는 

    return 1;
}); // sort는 가나다순임. 정렬기준을 정해줘야한다.
console.log(arr2);

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

let members = JSON.parse(json);
members.sort((left,right) => {
    if(left.first_name < right.first_name)
        return -1;

    return 1;
}).reverse();

console.log(members);
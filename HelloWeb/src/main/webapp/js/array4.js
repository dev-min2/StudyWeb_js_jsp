/**
 * 
 */

const json = `
[
    {"id":1,"first_name":"Gerrilee","email":"gdundendale0@flavors.me"},
    {"id":2,"first_name":"Traver","email":"tthickpenny1@ehow.com"},
    {"id":8,"first_name":"Sindee","email":"sfarloe7@netvibes.com"},
    {"id":9,"first_name":"Vale","email":"vwinspear8@reddit.com"},
    {"id":10,"first_name":"Anson","email":"amateus9@nytimes.com"}
]
`;

const members = JSON.parse(json);

// 특정조건에 부합한 대상을 찾는법

// 1.find는 특정조건에 맞는 대상을 찾으면 바로 반환 (0 ~ 1)
let obj = members.find((object,index) => {
    if(object.id > 5)
        return true;

    return false;
});

console.log(obj);

// 2. filter는 특정조건에 맞는 대상을 찾으면 모두 반환 (0 ~ 여러개)
obj = members.filter((object,idx) => {
    if(object.id > 5)
        return true;

    return false;
});

console.log(obj);

// [1,2,3];

// 1. [0] -> 1, acc = 0; return 1 + 0;
// 2. [1] -> 2 acc= 1; return 1 + 2; 
// 3. [2] -> 3 acc =3; return 3 + 3; 6



let resultInt = [1,2,3].reduce((acc,obj) => {
   return acc + obj;
},0);

console.log(resultInt);


obj = members.reduce((acc, object, index) => {
    if(index >= 1 && index < 3) {
        acc.push(object);
    }

    return acc;
},[])

console.log(obj);

// if(typeof obj == 'undefined') {
//     console.log('업슴');
// }
 

// some, every의 반환결과는 true / false

// some은 하나라도 대상이 있으면 true
// every는 모두가 만족해야 true.
obj = members.some((object) => {
    return object.first_name.length > 5;
});

console.log(obj);

// map A -> B

obj = members.map((obj) => {
    let Obj = {id: obj.id, name: obj.first_name, email: obj.email, grade: 'C'}
    return Obj;
})

console.log(obj);
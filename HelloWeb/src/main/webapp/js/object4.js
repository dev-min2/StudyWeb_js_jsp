/**
 * 
 */
const obj = {
    sno: 1001,
    sname: '홍길동',
    address: '대구 중구 100번지',
    friends: [
        {name:'김민수',phone: '010-1111'},
        {name:'최현수',phone: '010-2222'}
    ],
    hobbies: [
        '독서','영화보기','여행','요리'
    ]
}


obj.pets = ['고양이','멍멍이', '멧돼지'];
console.log(obj.pets[2]);
obj.pets[2] = '붕어';
console.log(obj.pets[2]);

obj.addFriend = function(friend) {
    this.friends.push(friend);
}

console.log('이름: ' + obj['sname']);
console.log('친구: ' + obj.friends.length + '명입니다');
console.log('첫번째 친구 이름: ' + obj['friends'][0].name);
console.log('두번째 친구 폰: ' + obj['friends'][1]['phone']);

obj.hobbies.forEach(hobby => console.log(hobby));

obj.addFriend({name:'박경석', phone: '010-1111-2222'});

obj.friends.forEach(obj => console.log(obj));
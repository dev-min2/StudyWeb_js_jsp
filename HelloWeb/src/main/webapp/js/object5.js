const obj5 = {
    name: "Hong",
    age: 20,
    weight: 66.8,
    bloodType: "O"
}

// 오른쪽에 넘긴 object를 왼쪽의 매개변수 오브젝트에 복사함. 그리고 해당것을 반환
const obj6 = Object.assign({name:"Hwang", age:22, height:123.4}, obj5);


console.log(obj5);
console.log(obj6);

//상속
const obj7 = Object.create(obj5);
obj7.name = "kim";  // 상속받은 자식객체는 한번 속성을 수정하는순간 그 값을 유지함(부모값을 바꾸어도.)
obj5.name = "Hwang";

// 객체의 속성기술자.(도메인화.)
Object.defineProperty(obj5, 'bloodType', {
    set: function(bloodType) { // 이제 bloodType 필드의 값을 수정할 때 해당 메소드가 호출된다.
        if(bloodType == "A" || bloodType == "B" || bloodType == "AB" || bloodType == "O") {
            this.anything = bloodType; // 값을 넣어준다. bloodType의 get,set인건 알고있으니 어떤식으로 꺼내와서 저장하던지 상관없다.
        }
        else {
            console.log('invalid type');
        }
    },

    get: function() {
        return this.anything;
    }
})

obj5.bloodType = "A"; // set
console.log(obj5.bloodType) // get
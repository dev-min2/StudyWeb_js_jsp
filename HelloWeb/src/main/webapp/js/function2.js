//
console.log('펑션2.js');

const member = {
    name: "갓민교",
    age: 27,
    height: 171.1,
    showInfo: function() {
        console.log(`이름은 ${this.name}이고 나이는 ${this.age}입니다.`);
    }
}

member.showInfo();

let show = document.getElementById("show");
show.innerHTML = '<ul><li>Apple</li><li>Banana</li></ul>';

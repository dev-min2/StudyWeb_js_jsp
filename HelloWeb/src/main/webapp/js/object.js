/**
 * 
 */

let obj1 = {
    name: 'Hong',
    age: 20
}

let obj2 = obj1;

obj2.age = 30;

console.log(obj1.age);

//복사
//기존 객체의 내용을 펼쳐서 복사하겠단 의미
let obj3 = { ...obj1};
obj3.age = 25;

console.log(obj1.age);
console.log(obj3.age);

class Member {
	constructor(name, age, height) {
		this.name = name;
		this.age = age;
		this.height = height;
	}
	
	setWeight(weight) {
		this.weight = weight;
	}
	
	getWeight() {
		return this.weight;
	}
	
	showInfo() {
		return `이름은 ${this.name}, 나이는 ${this.age}세 입니다.`;
	}

    // 학생의 정보 : 학생번호, 이름, 영어 수학.
    // 메소드를 받아서.
    makeTr(student={sno, sname, engScore, mathScore}) {
        // tr>td*4
        let tableRecord = "";

        tableRecord += "<tr>"
        tableRecord += "<td>" + student.sno + "</td>";
        tableRecord += "<td>" + student.sname + "</td>";
        tableRecord += "<td>" + student.engScore + "</td>";
        tableRecord += "<td>" + student.mathScore + "</td>";
        tableRecord += "</tr>"

        return tableRecord;
    }

    makeHtml(studentArray = []) {
        // html 추가.
        let html = "<table border='1'>";

        
        studentArray.forEach((obj) => {
            html += this.makeTr(obj)
        });
        html += "</table>";

        return html;
    }
    //돔요소가 들어오면
    showPage(dom, html) {
        // innerHtml 속성에 html을 추가.
        dom.innerHTML += html;

    }
}

// console.log(mem1);
// mem1.setWeight(100);
// console.log(mem1);  

// //Member.prototype.bloodType = 'O';
// Member.prototype.setBloodType = function(bloodType) {
// 	this.bloodType = bloodType;
// }
// Member.prototype.getBloodType = function () {
// 	return this.bloodType;
// }

// const mem2 = new Member('홍길동',22,123.4);
// mem2.setBloodType('AB');

// console.log(mem2.getBloodType());

// String.prototype.truncate = function() {
//     return this.substring(0, 5);
// }

// const str = "Hello World".truncate();
// console.log(str);
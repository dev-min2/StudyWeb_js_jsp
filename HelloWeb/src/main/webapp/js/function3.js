/**
 * 
 */

function Member(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.showInfo = function () {
        return `이름은 ${this.name}이고 나이는 ${this.age}임둥.`;
    }
}

const member = new Member('홍길동',12,234.5);
console.log(member.showInfo());

const members = [
    new Member('홍길동',18, 123.3),
    new Member('김길동',19, 124.3),
    new Member('박길동',20, 125.3)
];

// 함수 : table 생성


function makeTable(members=[]) {
    let html = "<table border=1><tbody>";

    members.forEach((obj,idx) => {
        html += "<tr>";
        html += "<td>" + obj.name + "</td>";
        html += "<td>" + obj.age + "</td>";
        html += "<td>" + obj.height + "</td>";
        html += "<td>" + obj.showInfo() + "</td>";
        html += "</tr>"
    });

    html += "</tbody></table>"
    return html;
}
document.getElementById("show").innerHTML = makeTable(members);
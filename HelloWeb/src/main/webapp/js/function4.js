function Member(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.showInfo = () => {
        return `이름은 ${this.name}이고, 나이는 ${this.age}입니다.`;
    }
}


let index = 0;
let show = document.getElementById('show');

function makeTr(member) {
    let html = "";
    html += "<tr>";
    html += "<td>" + member.name + "</td>";
    html += "<td>" + member.age + "</td>";
    html += "<td>" + member.height + "</td>";
    html += "<td>" + member.showInfo() + "</td>";
    html += "<td><button id='btn" + (index++) +  "'>삭제" + index +"</button></td>"
    html += "</tr>"

    return html;
}


document.getElementById('saveBtn').onclick = (e) => {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let height = document.getElementById('height').value;
    
    if(name.length <= 0 || height.length <= 0) {
        alert('데이터 입력하셈!');
        return;
    }

    if(age <= 0) {
        alert("나이 다시입력!");
        return;
    }

    let tableBodyList = document.getElementById('list');
    const member = new Member(name,age,height);

    tableBodyList.innerHTML += makeTr(member);
}

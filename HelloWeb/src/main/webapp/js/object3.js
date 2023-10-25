/**
 * 
 */

const member = {
    name: "홍길동",
    age: 20,
    height: 123.4,
    showInfo: function () {

    },

    makeTr(student) {
        let tableRecord = "";

        tableRecord += "<tr>"
        for (let prop in student) {
            tableRecord += "<td>" + student[prop] + "</td>";
        }
        tableRecord += "</tr>"

        return tableRecord;
    },
    makeHtml(studentArray = []) {
        let html = "<table border='1'>";

        let obj23 = this;
        studentArray.forEach((item) => {
            html += obj23.makeTr(item);
        });
        html += "</table>";

        console.log(html);
        this.html = html;
    },
    showPage(dom) {
        dom.innerHTML += this.html;
    }
}

// for (let prop in member) {
//     if (typeof member[prop] != 'function') {
//         console.log(member[prop]);
//     }
// }

member.makeHtml(students);
member.showPage(document.getElementById('show'));

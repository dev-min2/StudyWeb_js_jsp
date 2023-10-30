/**
 *  test2.js
 */

const novemberCal = {
    makeHead() {
        const attributes =  ['일','월','화','수','목','금','토'];
        let resultHTML = '<table border="1"><thead>';

        resultHTML += "<tr>";
        attributes.forEach((attribute) => {
            resultHTML += "<th>" + attribute + "</th>"
        })

        resultHTML += "</tr>";
        resultHTML += "</thead>";
        return resultHTML;
    },
    makeBody() {
        let resultHTML = this.makeHead();
        resultHTML += "<tbody>";

        // 수요일 1부터 시작
        resultHTML += "<tr>" 
                    + "<td></td>"
                    + "<td></td>"
                    + "<td></td>"
                    + "<td>1</td>"
                    + "<td>2</td>"
                    + "<td>3</td>"
                    + "<td>4</td>"
                    + "</tr>"

        let idx = 0;
        for(let startNum = 5; startNum <= 30; ++startNum) {
            if(idx == 0) {
                resultHTML += "<tr>";
            }
            
            resultHTML += "<td>" + startNum + "</td>";
            idx++;
            
            if(idx % 7 == 0) {
                resultHTML += "</tr>";
                idx = 0;
            }
        }
        
        resultHTML += "</tbody></table>";
        return resultHTML;
    },
    show() {
        document.write(this.makeBody());
    }
}


novemberCal.show();
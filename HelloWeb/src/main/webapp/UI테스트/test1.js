/**
 *  test1.js
 */
let xhtp = new XMLHttpRequest();
xhtp.open('get', 'data.json');
xhtp.send()
xhtp.onload = function() {
    let targetAry = [];

    let jsonData = JSON.parse(xhtp.responseText);   
    targetAry = jsonData.filter((data) => {
		return data.gender == "Female" && data.salary > 4500
	})

    targetAry.forEach(data => console.log(data)); // 출력
}
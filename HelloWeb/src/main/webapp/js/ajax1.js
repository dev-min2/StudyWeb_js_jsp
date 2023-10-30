/**
 * 
 */
import { table } from './ajaxModule.js';

let xhtp = new XMLHttpRequest();
let newMember = {mid: "M009", pass: "9999", name: "민식이", phone:"010-9999-9999"};

xhtp.open('get','../MemberListServJson');
xhtp.send(); 

xhtp.onload = loadJson;

function loadJson() {
	var json = JSON.parse(xhtp.responseText);	
	console.log(json);
	
	let dataAry = [];
	json.forEach(member => {
		dataAry.push({
					 mid: member.mid, pass: member.pass,
					 name: member.name, phone:member.phone
				})
	});
	
	console.log(dataAry);
	document.getElementById('show').innerHTML += table.makeTable(['회원번호','비밀번호','이름','연락처'], json);
}

function loadXML() {
    let doc = xhtp.responseXML;
    let records = doc.getElementsByTagName('record');
    console.log(records);
    
    let titles = ['회원번호','비밀번호','이름','연락처'];
    let dataAry = [];
    
    for(let node of records) {
		let obj = {
			mid : node.children[0].textContent, // mid
			pass : node.children[1].textContent, // pass
			name : node.children[2].textContent, // name
			phone : node.children[3].textContent, // phone
		}
		
		dataAry.push(obj);
	}
    
    let result = table.makeTable(titles, dataAry);
    console.log(result);
    
    document.getElementById('show').innerHTML += result;
    document.getElementById('list').innerHTML += table.makeTr(newMember);
}
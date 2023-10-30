/**
 * 
 */

import { table } from './ajaxModule.js';


// onclick 이벤트 등록 <td colspan="2"><button id="addBtn" onclick="addMember()">등록</button></td>방식으로도 가능.

document.getElementById('addBtn').onclick = addMember;

function addMember(e) {
	let mid = document.getElementById('mid').value;
	let pass = document.getElementById('pass').value;
	let name = document.getElementById('name').value;
	let phone = document.getElementById('phone').value;

	let queryString = '../AddMemberServ.html?';
	queryString += "mid=" + mid + "&";
	queryString += "pass=" + pass + "&";
	queryString += "name=" + name + "&";
	queryString += "phone=" + phone;


	const xhtp = new XMLHttpRequest();
	xhtp.open('get', queryString);
	xhtp.send();
	xhtp.onload = () => {
		console.log(xhtp.responseText);

		let ret = JSON.parse(xhtp.responseText);
		console.log(ret.retCode);

		if (ret.retCode == "OK") {
			document.getElementById('list').innerHTML += table.makeTr(ret.vo);
		}
		else {
			console.log(ret.vo.mid);
			alert("에러 발생한 회원 아이디 : " + ret.vo);
		}
	}
}

document.getElementById('modBtn').onclick = updateMember;
function updateMember() {
	let mid = document.getElementById('mid').value;
	let pass = document.getElementById('pass').value;
	let name = document.getElementById('name').value;
	let phone = document.getElementById('phone').value;

	let queryString = '../UpdateMemberServ?';
	queryString += "mid=" + mid + "&";
	queryString += "pass=" + pass + "&";
	queryString += "name=" + name + "&";
	queryString += "phone=" + phone;


	const xhtp = new XMLHttpRequest();
	xhtp.open('get', queryString);
	xhtp.send();

	xhtp.onload = () => {
		console.log	(xhtp.responseText);

		let ret = JSON.parse(xhtp.responseText);
		
		// list아래의 tr요소들을 가져온다.
		// 교수님방식
		//document.querySelectorAll('#list tr').forEach((trElement) => {
			//console.log(trElement.children);
			
			//if(trElement.children[0].innerText == ret.vo.mid) {
				//trElement.children[1].innerHTML = ret.vo.pass;
				//trElement.children[2].innerHTML = ret.vo.name;
				//trElement.children[3].innerHTML = ret.vo.phone;
			//}
		//});
		
		let findNode = {};
		if(ret.retCode == "OK") {
			for(let node of document.getElementById('list').childNodes) {
				if(node.childNodes[0].innerText == ret.vo.mid) {
					findNode = node;
					break;
				}
			}
			
			findNode.childNodes[0].innerHTML = ret.vo.mid; // 어차피 그대로임융
			findNode.childNodes[1].innerHTML = ret.vo.pass;
			findNode.childNodes[2].innerHTML = ret.vo.name;
			findNode.childNodes[3].innerHTML = ret.vo.phone;
		}
		else {
			alert("수정실패한 회원 아이디 : " + ret.vo);
		}
	}
}

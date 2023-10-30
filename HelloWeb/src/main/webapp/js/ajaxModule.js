/**
 * 
 */


 const table = {
	makeHead(titles = ['회원아이디','비밀번호','이름','연락처']) {
		 let headTag = "<thead><tr>";
		 titles.forEach(title => {
			headTag += "<th>" + title + "</th>";
		 });
		 headTag += "</tr></thead>";
		 
		 return headTag;
	},
	 
	makeBody(dataAry = [{mid,pass,name,phone}]) {
		let bodyTag = "<tbody id='list'>";
		
		dataAry.forEach(item => {
			bodyTag += this.makeTr(item);
		});
		
		bodyTag += "</tbody>";
		
		return bodyTag;
	},
	makeTable(titleAry, dataAry) {
		let tableTag = "<table border='1'>";
		tableTag += this.makeHead(titleAry) + this.makeBody(dataAry);
		tableTag += "</table>";
		return tableTag;	
	},
	makeTr(data = {mid: "1", pass: "1", name: "1", phone:"1"}) {
		let tr = "<tr onclick='showInfo(event, this)'>"; // this는 tr자기자신을 넘김
		for(let prop in data) {
			tr += "<td>" + data[prop] + "</td>";
		}
		tr += "</tr>"
		return tr;
	}
 }

 export { table }
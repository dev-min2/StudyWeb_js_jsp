/**
 * domTable.js
 */

export default {
	hiddenFields: ['lat','lng'], // 화면에 안보여주는 용도.
	makeHead: function(titles = []) {
		let thead = document.createElement('thead');
		let tr = document.createElement('tr');

		titles.forEach((title) => {
			let th = document.createElement('th');

			th.innerHTML = title;
			tr.appendChild(th);
		});
		
		thead.appendChild(tr);
		return thead;
	},
	makeBody: function(contents = []) {
		let tbody = document.createElement('tbody');
		contents.forEach((content) => {
			tbody.appendChild(this.makeTr(content));
		})
	
		return tbody; 
	},
	makeTr: function(center = {}) {
		let tr = document.createElement('tr');
		tr.setAttribute('data-lat', center.lat);
		tr.setAttribute('data-lng', center.lng);
		
		for(const prop in center) {
			if(this.hiddenFields.indexOf(prop) >= 0)
				continue;
			
			const td = document.createElement('td');
			td.innerHTML = center[prop];
			
			tr.appendChild(td);
		}
		return tr;
	},
	makeTable: function(titles, contents) {
		let table = document.createElement('table');
		table.setAttribute('border', '1');
		
		let thead = this.makeHead(titles);
		let tbody = this.makeBody(contents);
		
		table.appendChild(thead);
		table.appendChild(tbody);
		
		return table;
	}
} 
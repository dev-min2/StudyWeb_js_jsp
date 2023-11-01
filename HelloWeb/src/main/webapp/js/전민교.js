/**
 * dom3.js
 */

// table>(thead>tr>th*5)+(tbody>tr>td*5) * 건수
import table from './domTable.js';

let url = "https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=ovhvM%2BodrFj4PsN2wxxodu83N7cvFjOqsTqiQpyt0tNzEMCiXJ8W0UPBAprGY27Gj3Xa7nllROuEwM%2BSChFgPA%3D%3D";
let titles = ['센터id', '센터명', '의료원', '연락처'];
fetch(url)
	.then(resolve => {
		return resolve.json();
	})
	.then(result => {
		fetchCallback(result);
	})
	.catch(reject => {
		console.log('에러 : ' + reject);
	})

function fetchCallback(result) {
	console.log(result);
	let rawDatas = result.data; // 배열을 가져옴
	console.log(rawDatas[0]);
	let sidoAry = [];

	for (let i = 0; i < rawDatas.length; ++i) {
		if (sidoAry.indexOf(rawDatas[i]['sido']) < 0) {
			sidoAry.push(rawDatas[i]['sido']);
		}
	}

	let selectElement = document.getElementById('sidoList');
	sidoAry.forEach((obj) => {
		let optionElement = document.createElement('option');
		optionElement.innerHTML = obj;

		selectElement.appendChild(optionElement);
	});

	// 이벤트 축카해

	// 밑의 방식 혹은
	//selectElement.onchange = () => {

	//}

	selectElement.addEventListener('change', changeCallback)
	function changeCallback(e) {
		let targetSido = e.target.value; // 선택한 optioneㅡ이 vlaue

		// 선택된 시도 값에 맞는 센터명만 출력.
		let filterArray = rawDatas.filter((obj) => {
			return obj.sido == targetSido;
		})

		let divTag = document.getElementById('show');
		divTag.childNodes.forEach((obj) => obj.remove());

		let filterMapData = mappingData(filterArray);

		let newTable = table.makeTable(titles, filterMapData);
		divTag.appendChild(newTable);
		onclickEventByTr();
		
	}

	let seoulData = rawDatas.filter((obj) => obj.sido == '서울특별시');
	//let thead = table.makeHead(titles);
	let mapData = mappingData(seoulData);

	let tableChild = table.makeTable(titles, mapData);
	document.getElementById('show').appendChild(tableChild);
	onclickEventByTr();
}

function mappingData(data = []) {
	let retData2 = data.reduce((acc,obj) => {
		let newObj = {
			centerId: obj.id,
			centerName: obj.centerName.replace('코로나19', ''),
			org: obj.org,
			phoneNumber: obj.phoneNumber,
			lat: obj.lat,
			lng: obj.lng
		}
		acc.push(newObj);
		return acc;
	},[])
	return retData2;
}

function onclickEventByTr() {
	let targetTrs = document.querySelectorAll('tbody tr');
	//console.log(targetTrs)
	targetTrs.forEach(tr => {
		tr.addEventListener('click', e => {
			let lat = tr.dataset.lat // HTML요소 내부의 dataset객체. 속성이름을 data-xxx로 했을 시 dataset.xxx로 가져옴
			let lng = tr.dataset.lng;
			
			// daumApi.html을 호출.
			// 밑은 현재창에서 
			//location.href = 'daumApi.html?x=' + lat + '&y=' + lng;
			
			window.open('daumApi.html?x=' + lat + '&y=' + lng);
		})
	})
}


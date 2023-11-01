/**
 * dom3.js
 */

// table>(thead>tr>th*5)+(tbody>tr>td*5) * 건수
import table from './domTable.js';

let url = "https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=ovhvM%2BodrFj4PsN2wxxodu83N7cvFjOqsTqiQpyt0tNzEMCiXJ8W0UPBAprGY27Gj3Xa7nllROuEwM%2BSChFgPA%3D%3D";
let titles = ['센터id', '센터명', '의료원', '연락처','주소'];
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

	//let seoulData = rawDatas.filter((obj) => obj.sido == '서울특별시');
	//let allData = 
	//let thead = table.makeHead(titles);
	let mapData = mappingData(rawDatas, 13);

	let tableChild = table.makeTable(titles, mapData);
	document.getElementById('show').appendChild(tableChild);
	onclickEventByTr();
}

function mappingData(data = [], page = 1) {
	// 최대 몇개의 게시판이 나올건지?(y)
	// (page-1) * y + 1;  -> start (+1은 인덱스값과 맞추려면 없애기)
	// (page) * y; -> end
	let trRange = makePagination(data, page);
	
	let retData = data.reduce((acc, obj, idx) => {
		if (idx >= trRange.startNo && idx < trRange.endNo) {
			let newObj = {
				centerId: obj.id,
				centerName: obj.centerName.replace('코로나19', ''),
				org: obj.org,
				phoneNumber: obj.phoneNumber,
				address: obj.address,
				lat: obj.lat,
				lng: obj.lng
			}
			acc.push(newObj);
		}
		return acc;
	}, [])
	return retData;
}

function makePagination(data = [], page = 1) {
	let trCount = 5;
	let paginationCount = 10;
	
	let calInfo = calPage(data, page, trCount);
	let startNo = calInfo.startNo;
	let endNo = calInfo.endNo;
	let totalCnt = calInfo.totalCnt;
	let lastPage = calInfo.lastPage;
	let endPage = calInfo.endPage;
	let beginPage = calInfo.beginPage;
	let prev = calInfo.prev;
	let next = calInfo.next;
	
	document.querySelector('.pagination').innerHTML = '';
	
	// 이전페이지 생성
	if(prev) {
		let aTag = document.createElement('a');
		aTag.setAttribute('href','#');
		aTag.innerHTML = '&laquo;';
		aTag.addEventListener('click', function(e) {
			let makeData = mappingData(data, beginPage - 1);
			let newTB = table.makeTable(titles,makeData);
			
			let divShowTag = document.getElementById('show');
			divShowTag.innerHTML = '';
			divShowTag.appendChild(newTB);
			onclickEventByTr();
		})
		
		document.querySelector('.pagination').append(aTag);
	}
	
	for(let i = beginPage; i <= endPage; ++i) {
		let aTag = document.createElement('a');
		aTag.setAttribute('href', '#');
		aTag.innerHTML = i;
		aTag.setAttribute('data-page', i);
		if(i == page) {
			aTag.setAttribute('class', 'active');
		}
		
		aTag.addEventListener('click', function(e) {
			// page를 변경해야함.
			let makeData = mappingData(data, i);
			let newTB = table.makeTable(titles,makeData);
			
			let divShowTag = document.getElementById('show');
			divShowTag.innerHTML = '';
			divShowTag.appendChild(newTB);
			onclickEventByTr();
		});
		
		document.querySelector('.pagination').append(aTag);
	}
	
	// 이후페이지 생성
	if(next) {
		let aTag = document.createElement('a');
		aTag.setAttribute('href','#');
		aTag.innerHTML = '&raquo;';
		aTag.addEventListener('click', function(e) {
			//let nextPage = page + trCount
			
			let makeData = mappingData(data, beginPage + paginationCount);
			let newTB = table.makeTable(titles,makeData);
			
			let divShowTag = document.getElementById('show');
			divShowTag.innerHTML = '';
			divShowTag.appendChild(newTB);
			onclickEventByTr();
		})
		
		document.querySelector('.pagination').append(aTag);
	}
	
	return {startNo, endNo};
}

function calPage(data = [], page = 1, trCount) {
	// 최대 몇개의 게시판이 나올건지?(y)
	// (page-1) * y + 1;  -> start
	// (page) * y; -> end
	let paginationCount = 10;
	
	// left 2개 
	// rigth 2개 유노?경석
	let startNo = (page - 1) * trCount;
	let endNo = page * trCount;
	
	let totalCnt = data.length;
	let lastPage = Math.ceil(totalCnt / trCount);
	
	let endPage = Math.ceil(page/paginationCount) * paginationCount;
	let beginPage = endPage - (paginationCount - 1);
	if(endPage > lastPage) {
		endPage = lastPage;
	}
	
	// 이전 이후버튼
	let prev = false;
	let next = false;
	if(beginPage > 1) {
		prev = true;
	}
	if(endPage < lastPage) {
		next = true;
	}
	
	return {startNo, endNo, totalCnt, lastPage, beginPage, endPage, prev, next};
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


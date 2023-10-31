/**
 * dom2.js
 */


// #show>table>tbody>tr>td:사과+td:1000
const fruits = [
    {name: "사과", price: 1000, farmer: '홍길동' },
    {name: "복숭아", price: 1500, farmer: '김민서' },
    {name: "포도", price: 2000, farmer: '최말숙' },
    {name: "수박", price: 3000, farmer: '김선중' }
];

const tableElement = document.createElement('table');
const tbodyElement = document.createElement('tbody');
tableElement.appendChild(tbodyElement);
tableElement.setAttribute('border', 1);

fruits.forEach((obj) => {
    let tr = document.createElement('tr');

    for(let prop in obj) {
        let td = document.createElement('td');
        td.innerHTML = obj[prop];

        tr.appendChild(td);
    }

    tbodyElement.appendChild(tr);
});
document.getElementById('show').appendChild(tableElement);
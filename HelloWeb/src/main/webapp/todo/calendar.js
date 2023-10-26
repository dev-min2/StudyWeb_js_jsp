// function makeCalendar() {
//     const weeks = ['일', '월', '화', '수', '목', '금', '토'];
//     let calendarStr = "<table border='1'><thead><tr>";

//     weeks.forEach(obj => {
//         calendarStr += "<th>" + obj + "</th>";
//     });

//     calendarStr += "</tr></thead>";
//     calendarStr += "<tbody>";
	
// 	const today = new Date();
//     console.log(today.getDay());
//     let idx = 0;
//     for(let i = 1; i <= 31; ++i, ++idx) {
//         if(idx == 0) {
//             calendarStr += "<tr>";
//             calendarStr += "<td class='sunday'>" + i + "</td>";
//         }
//         else {
//             calendarStr += "<td>" + i + "</td>";
//         }

//         if(today.getDate() == i) {
//             calendarStr += "<td id='today'>" + i + "</td>";
//         }

//         if(idx == 6) {
//             calendarStr += "</tr>"
//             idx = -1;
//         }
//     }

//     calendarStr += "</tbody></table>";
//     return calendarStr;
// }

// document.getElementById('show').innerHTML = makeCalendar();
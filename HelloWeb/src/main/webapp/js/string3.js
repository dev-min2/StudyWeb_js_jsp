/**
 * 
 */

 let today = new Date();
 today.getFullYear();
 today.getMonth();
 today.getDate();
 today.getSeconds
 
 //날짜변경
 today.setFullYear(2022);
 today.setMonth(10);
 today.setDate(25);
 today.setHours(23);
 
 console.log(today.toString());
 
 function dateFormat(today) {
	 // yyyy-MM-dd HH24:MM:SS
	 
	 return today.getFullYear() + '-' + ("0" + (today.getMonth() + 1)).slice(-2) + '-' + ("0" + today.getDate()).slice(-2) + ' '
	 	+today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
 }
 
 console.log(dateFormat(today));
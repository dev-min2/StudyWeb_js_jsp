/**
 * bookList.js
 */

 
let xhtp = new XMLHttpRequest();

xhtp.open('get','../BookListServlet');
xhtp.send(); 
xhtp.onload = printBooks;

function printBooks() {
	var json = JSON.parse(xhtp.responseText);	
	console.log(json);

    json.forEach((bookData) => {
        document.getElementById('list').innerHTML += makeTr(bookData);
    })
}

function makeTr(bookData = {}) {
    let trHTML = '<tr>';
    trHTML += "<td>" +  bookData.bookCode + "</td>";
    trHTML += "<td>" + bookData.bookTitle + "</td>";
    trHTML += "<td>" + bookData.bookAuthor + "</td>";
    trHTML += "<td>" + bookData.bookPress + "</td>";
    trHTML += "<td>" + bookData.bookPrice + "</td>";
    trHTML += "<td><button>삭제</button></td>"
    trHTML += '</tr>';
    return trHTML;
}
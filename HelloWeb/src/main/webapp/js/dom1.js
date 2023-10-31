/**
 * dom1.js
 */
const fruits = ['수박','사과','복숭아','포도'];

let ulElement = document.createElement('ul');
document.getElementById('show').appendChild(ulElement);

fruits.forEach((obj) => {
    let liElement = document.createElement('li');
    liElement.innerHTML = obj;
    
    ulElement.appendChild(liElement);
});
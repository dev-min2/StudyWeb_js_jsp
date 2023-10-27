/**
 * 
 */

// export가 ㅇ안붙었다면 외부에서 쓰지는 못함(import해도)
const friend = {
	 name: "Hong",
	 phone: "010-1234-5678",
	 address: "대구 중구 100",
	 showInfo: function() {
		 return `이름은 ${this.name}이고, 연락처는 ${this.phone}`;
	 }
}

function friendInfo(friend) {
	return `${friend.name}, ${friend.phone}, ${friend.address}`
}

//특정기능을 외부로. 가져다가 쓸려면 import
export { friend, friendInfo }
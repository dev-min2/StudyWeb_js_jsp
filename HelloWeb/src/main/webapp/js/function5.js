/**
 * 
 */

function sum(...args) {
    let sum = 0;
    for(let i = 0; i < args.length; ++i) {
		sum += args[i];
	}
	
	args.forEach((obj) => {
		sum += obj;
	});
	
    
    //sum = args.reduce((acc, item) => acc + item);

	//sfasdf
    return sum;
}   


const numAry = [4,2,6,9,1,7];
let max = 0;

max = numAry.reduce((acc, obj) => {
	console.log('acc : ' + acc);
	console.log('obj : ' + obj);
	if(obj > acc) {
		return obj;
	}
	return acc;
},-987654321);

console.log('최대값 : ' + max);

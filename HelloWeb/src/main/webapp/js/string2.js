/**
 * 
 */

const words = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Praesentium ipsam eos placeat, minima quaerat cupiditate delectus commodi soluta sequi id tempora iste eum esse? Repudiandae explicabo voluptatum aut nulla dignissimos?';

// 1. 공백을 기준으로 단어를 가지고 와서, 단어의 크기가 5보다 큰 콘솔에다 출력
const wordsArray = words.split(' ').filter((words) => words.length > 5);

console.log("단어의 길이가 5이상인 단어들 출력. 갯수 : ", wordsArray.length);
wordsArray.forEach(obj => console.log(obj));


// 2. 주민번호 입력 => 남자/여자 입력
function checkGender(ssn) {
    // 앞6자-뒷7자 (총 13자리)
    // 111111 2222222(공백있이)
    // 1111112222222(공백없이)
    // 111111-2222222(하이픈)
    if (typeof ssn != "string")
        return undefined;

    if (ssn.length < 13)
        return undefined;

    // 앞뒤 공백이 있다면 제거
    let trimSsn = ssn.trim();

    // 내부공백도 모두제거
    trimSsn = trimSsn.split(' ').filter(obj => obj != '').join('');
    if (trimSsn.length < 13) {
        return undefined;
    }

    let gender = '';
    if (trimSsn.valueOf('-') != -1 && trimSsn.length == 14) {
        gender = trimSsn[trimSsn.indexOf('-') + 1];
    } else {
        // 6
        gender = trimSsn[6];
    }

    if (gender == "1" || gender == "3")
        gender = "남자";
    else
        gender = "여자";

    return gender;
}

console.log(checkGender('970802 1333333'));

// 3. 파일명과 파일의 확장자
let file = "C:/minkyo/king/kyungsuk/king/hyunjin/king/img.jpg";

let originalFileSplit = '';
let fileName = '';
let fileExtension = '';

let idx = file.lastIndexOf('/');
if(idx < 0) {
    originalFileSplit = file.split('.');
}
else {
    originalFileSplit = file.substring(idx + 1, file.length).split('.');
}

fileName = originalFileSplit[0];
fileExtension = originalFileSplit[1];

console.log(fileName);
console.log(fileExtension);

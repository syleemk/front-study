// async & await
// clear style of using promise

// 1. promise
function fetchUser() {
  // do network request in 10 secs
  // 동기처리 없이 수행하면, 결과값 나올 때까지 10초의 시간을 아무것도 못하고 기다려야함
  // Promise 객체를 사용하면 이를 해결 가능
  // Promise 객체를 가지고 있고, 거기에 then이라는 콜백함수를 등록해놓는다면
  // 결과가 언제나올지 모르지만, 결과값을 받아오면 해당 함수를 호출해준다고 약속함
  return new Promise((resolve, reject) => {
    resolve("ellie");
  });
}

let user = fetchUser();
console.log(user);

// 2. async
// 따로 promise 쓰지 않더라도, 함수의 코드블럭들이 자동으로 promise로 변환됨

console.clear();

async function fetchUserAsync() {
  return "ellie";
}

user = fetchUserAsync();
console.log(user);

// 3. await
// async 키워드가 붙은 함수에서만 사용가능
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(3000);
  return "apple";
}

async function getBanana() {
  await delay(3000);
  return "banana";
}

function getBananaPromise() {
  return delay(3000).then(() => "banana");
}

function pickFruits() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple}+ ${banana}`);
  });
}

pickFruits().then(console.log);

// Promise도 계속 중첩되면 콜백 지옥과 같아진다 ;(

async function pickFruitsAsync() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}

pickFruitsAsync().then(console.log);

// Promise 병렬 처리 코드 개선
async function pickFruitsAsyncParallel() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruitsAsyncParallel().then(console.log);

// code 더러운데 Promise API 이용해서 개선
// promise의 all api > promise 배열 전달하면, 전달된 모든 프로미스들이 받아질 때까지
// 병렬적으로 수행하고 기다려주는 api
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]) //
    .then((fruits) => fruits.join(" + "));
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);

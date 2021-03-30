// Promise는 JS에서 제공하는 비동기를 간편하게 처리하도록 도와주는 Object
// Promise는 정해진 장시간의 기능을 수행 후
// 정상적으로 수행됐다면, 성공 메시지와 함께 수행 결과값 반환
// 기능 수행중 예상치 못한 문제 발생시 에러 전달

"use strict";

// Promise is a Javascript Object for asynchronous operation
// 비동기 처리시 콜백함수 대신 유용하게 사용가능한 JS Object
// 1. State 2. Producer(정보 제공) vs Consumer(정보 소비)
// promise state : pending (operation 수행중) -> fulfilled(수행 성공) or rejected(실패)
// Producer vs Consumer

// 1. Producer
// promise 생성 순간 인자로 전달한 executer callback func 수행됨
// When new Promise is created, the executor runs automatically
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log("doing something...");
  setTimeout(() => {
    // 기능 수행 성공시 resolve 호출
    // resolve("ellie");
    reject(new Error("no network"));
  }, 2000);
});

// 2. Consumers: then, catch, finally를 이용해 값을 받아올 수 있음
// promise가 성공적으로 수행되서 resolve가 호출됐을때, resolve의 인자로 전달된 값 받아올 수 있음
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// 3. Promise Chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handiling (at Promise Chaining)
// 아래 promise를 리턴하는 함수들을 각각 서버에서 값을 요청해서 리턴받는 함수라고 가정
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("hen"), 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen}=> egg`), 1000);
    setTimeout(() => reject(new Error(`error`)), 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg}=> fry`), 1000);
  });

// getHen()
//   .then((hen) => getEgg(hen))
//   .then((egg) => cook(egg))
//   .then((meal) => console.log(meal));

getHen() //
  .then(getEgg)
  .catch((error) => {
    return "bread";
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);

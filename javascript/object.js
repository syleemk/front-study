"use strict";

const obj1 = {}; //'object literal'
const obj2 = new Object(); // 'object constructor'

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = {
  name: "ellie",
  age: 4,
};

print(ellie);

ellie.hasJob = true; // javascript는 동적 타입 언어이기 때문에, 객체 선언 후 동적으로 property 추가 가능
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);

console.log(ellie.name); //코딩할 때 사용
console.log(ellie["name"]); //런타임에 사용 (내가 원하는 property가 동적일 때), key는 string type이어야함
ellie["hasJob"] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}

printValue(ellie, "name");

// property value shorthand
const person1 = { name: "bob1", age: 1 };
const person2 = { name: "bob2", age: 2 };
const person3 = { name: "bob3", age: 3 };
const person4 = makePerson("ellie", 30);
console.log(person4);
function makePerson(name, age) {
  //property의 key 와 value의 이름이 같으면 하나 생략 가능
  return {
    name,
    age,
  };
}

// 위에서 작성한 내용은 결국 생성자 함수임
// javascript에서 생성자 함수 규칙이 있음 (이름 대문자 시작)
// constructor function
function Person(name, age) {
  //this ={};
  this.name = name;
  this.age = age;
  //return this;
}

//in operator (key가 해당 object안에 있는지 확인하는 operator)
console.log("name" in ellie);

// for in : key 값 순회,  for of : value 값 순회
console.clear();
for (let key in ellie) {
  console.log(key);
}

const array = [1, 2, 3, 4];
for (let value of array) {
  console.log(value);
}

// cloning
console.clear();
const user = { name: "ellie", age: "20" };
const user2 = user;
user2.name = "coder";
console.log(user.name);

const user4 = {};
Object.assign(user4, user);
console.log(user4);

const user5 = Object.assign({}, user4);
console.log(user5);

const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed);

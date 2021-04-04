"use strict";

class Counter {
  constructor() {
    this.counter = 0;
  }
  // class 안에서 함수 선언시 function 키워드 생략 가능
  increase() {
    this.counter++;
    console.log(this.counter);
  }
}

const coolCounter = new Counter();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();

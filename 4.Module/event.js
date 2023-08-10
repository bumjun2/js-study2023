import { $p as $para } from './getDOM.js';

export const clickHandler = (e) => {
  $para.textContent = '하이';
};

export default class {
  constructor(name, age) {
    this.name = names;
    this.age = age;
  }
  info() {
    alert(`${this.name} : 저는 ${this.age}살 입니다.`);
  }
}

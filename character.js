export class Character {
  #status = 'alive';
  constructor(name, family, age) {
    this.name = name;
    this.family = family;
    this.age = age;
  }
  communicate() {
    return this.message;
  }
  morir() {
    this.status = 'death';
  }
}

Character.prototype.series = 'GoT';

// function showMessages(characters) {
//   return characters
//     .filter((item) => item instanceof Knight)
//     .map((item) => item.message);
// }

// console.log(Character.series);
// console.log(jB.series);
// characters.forEach((item) => console.log(item.message));

// jL.morir();
// jL.status = 'death';

import Character from './character';

export default class Magician extends Character {
  constructor(name, type) {
    super(name, type);
    this.health = 100;
    this.attack = 10;
    this.defence = 40;
    this.level = 1;
  }
}

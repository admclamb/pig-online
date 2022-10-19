export class Dice {
  constructor(element) {
    this.element = element;
    this.side;
  }

  roll() {
    const roll = Math.trunc(Math.random() * 6) + 1;
    this.element.classList.remove('hidden');
    this.element.src = `./dice-images/dice-${roll}.png`;
  }
}

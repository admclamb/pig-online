export class Player {
  constructor(name) {
    this.#name = name;
    this.#score = 0;
    this.#current = 0;
  }

  #setScore(score) {
    if (typeof score === Number) {
      this.#score = score;
    }
  }

  #setCurrent(current) {
    if (typeof current === Number) {
      this.#current = current;
    }
  }

  get getScore() {
    return this.#score;
  }

  resetScore() {
    this.#setScore(0);
  }

  set addScore(score) {
    if (score > 0) {
      this.#setScore(score);
    }
  }

  get getCurrent() {
    return this.#current;
  }

  set addCurrent(current) {
    if (current > 0) {
      this.#setCurrent(current);
    }
  }

  resetCurrent(current) {
    this.#setCurrent(0);
  }

  get getName() {
    return this.#name;
  }
}

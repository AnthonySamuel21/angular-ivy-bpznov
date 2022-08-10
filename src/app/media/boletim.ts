export class Boletim {
  private __bim1: number;

  constructor() {
    this.__bim1 = 0;
  }

  set bim1(b1: number) {
    if (b1 >= 0 && b1 <= 100) this.__bim1 = b1;
  }

  get bim1() {
    return this.__bim1;
  }

  calcularMedia() {
    return (this.__bim1 * 2) / 10;
  }
}

class TwoSums {
  #lista;
  #meta;

  constructor(lista, meta) {
    this.#lista = lista;
    this.#meta = meta;
  }

  get lista() {
    return this.#lista;
  }

  get meta() {
    return this.#meta;
  }

  set lista(newLista) {
    this.#lista = newLista;
  }
  set meta(newMeta) {
    this.#meta = newMeta;
  }

  twoSum() {
    let p1 = 0;
    let p2 = p1 + 1;
    while (p1 !== this.#lista.length - 1) {
      //while (p1 < this.#lista.length - 1) {
      while (p2 !== this.#lista.length) {
        //while (p2 < this.#lista.length) {
        let v1 = this.#lista[p1];
        let v2 = this.#lista[p2];
        let soma = v1 + v2;
        let r = { p1: p1, p2: p2, v1: v1, v2: v2, soma: soma, meta: this.meta };
        if (soma == this.meta) {
          return console.log(r);
        }
        p2++;
      }
      p1++;
      p2 = 0;
    }
  }
}
let lista = [1, 2, 3, 4, 5, 6, 7, 8];
//let ts = new TwoSums(lista, 9);
let ts = new TwoSums(lista, 9);
ts.twoSum();

console.log(...lista);

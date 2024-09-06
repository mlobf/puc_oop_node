const lista = [1, 2, 3, 4, 5, 6, 7, 8];
const target = 9;
let p1 = 0;
let p2 = p1 + 1;

while (p1 !== lista.length - 1) {
  while (p2 !== lista.length) {
    let v1 = lista[p1];
    let v2 = lista[p2];
    let soma = v1 + v2;
    let r = { p1: p1, p2: p2, v1: v1, v2: v2, soma: soma, target: target };
    //let result = [v1, v2, p1, p2, soma, target];
    if (soma == target) {
      console.log(r);
    }
    p2++;
  }
  p2 = 0;
  p1++;
}

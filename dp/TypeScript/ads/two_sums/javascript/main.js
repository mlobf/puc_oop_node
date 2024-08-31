// Two Sums Brute force

function twoSumBruteForceAll(lista, meta) {
  let p1 = 0;
  let p2 = 1;
  let v1 = 0;
  let v2 = 0;
  while (p1 !== lista.length - 1) {
    while (p2 !== lista.length) {
      v1 = lista[p1];
      v2 = lista[p2];
      let valor = v1 + v2;
      let atendeu = valor == meta;
      let r = { p1: p1, p2: p2, v1: lista[p1], v2: lista[p2] };
      p2 = p2 + 1;
      if (atendeu) {
        console.log("a condicao foi atendida");
        console.log(`A meta é ${meta},`, r);
        break;
      }
      //console.log(r);
    }
    p2 = 1;
    p1 = p1 + 1;
  }
  return;
}

function twoSumBruteForceFirst(lista, meta) {
  let p1 = 0;
  let p2 = 1;
  let v1 = 0;
  let v2 = 0;
  while (p1 !== lista.length - 1) {
    while (p2 !== lista.length) {
      v1 = lista[p1];
      v2 = lista[p2];
      let valor = v1 + v2;
      let atendeu = valor == meta;
      let r = { p1: p1, p2: p2, v1: lista[p1], v2: lista[p2] };
      p2 = p2 + 1;
      if (atendeu) {
        console.log("a condicao foi atendida");
        console.log(`A meta é ${meta},`, r);
        //break;
        return;
      }
      //console.log(r);
    }
    p2 = 1;
    p1 = p1 + 1;
  }
  //return;
}

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let meta = 9;

console.log("----------------");
twoSumBruteForceAll(lista, meta);
console.log("----------------");
twoSumBruteForceFirst(lista, meta);

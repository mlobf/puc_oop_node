let lista = [
  22, -33, 44, 55, -66, 0, 30, 12, 894, 2, 1223, 5, 32, 11, -12332, 2,
];

function bubbleSort(lista) {
  let p1 = 0;
  let len = lista.length;

  while (p1 < len - 1) {
    let p2 = p1 + 1;
    while (p2 < len) {
      let v1 = lista[p1];
      let v2 = lista[p2];
      let temp = v1;
      if (v1 > v2) {
        lista[p1] = v2;
        lista[p2] = temp;
      }
      p2 = p2 + 1;
    }
    p1 = p1 + 1;
  }
  return lista;
}

console.log(bubbleSort(lista));

let lista = [64, 34, 25, 12, 22, 11, 90];

function bubbleSort(lista) {
  let p1 = 0;
  let p2;
  while (p1 < lista.length - 1) {
    p2 = p1 + 1;
    while (p2 < lista.length) {
      if (lista[p1] > lista[p2]) {
        let temp = lista[p1]; // Armazena temporariamente o valor de lista[p1]
        lista[p1] = lista[p2];
        lista[p2] = temp;
      }
      p2++;
    }
    p1++;
  }
  return lista;
}

console.log(bubbleSort(lista));

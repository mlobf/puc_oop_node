class Aluno {
  constructor(nome, matricula, notaP1, notaP2) {
    this.nome = String(nome);
    this.matricula = Number(matricula);
    this.notaP1 = Number(notaP1);
    this.notaP2 = Number(notaP2);
  }
  media() {
    return (this.notaP1 + this.notaP2) / 2;
  }
  aprovado() {
    return this.media >= 7.0;
  }
  toString() {
    return `This aluno has ${this.nome} and his ${this.matricula}`;
  }
}

export { Aluno };

/*
let a1 = new Aluno("Joao", 1025, 8.2, 7.0);

console.log(a1.notaP1);
console.log(a1.notaP2);
console.log(a1.nome);

console.log(a1.media());
console.log(a1.toString());
// O problema das atributos publicos......
// eu tenho a liberdade de alterar ele depois de criar o programa.

// A solucao para isso é o encapsulamento.

*/

// lista de objetos

import { Aluno } from "./02_01.js";
//import { Pessoa } from "./02_02.js";

class outraTurma {
  #nomeProfessor;
  #numeroMatricula;
  #alunos;

  constructor(nomeProfessor, numeroMatricula, alunos) {
    this.#nomeProfessor = nomeProfessor;
    this.#numeroMatricula = numeroMatricula;
    this.#alunos = alunos;
  }
  get nomeProfessor() {
    return this.#nomeProfessor;
  }
  get numeroMatricula() {
    return this.#numeroMatricula;
  }

  get alunos() {
    return this.#alunos;
  }
  set alunos(novoAluno) {
    let addAluno = new Aluno(novoAluno);
    this.#alunos = addAluno;
  }
  toString() {
    return console.log(
      `Esta turma tem o professor ${this.nomeProfessor}, e tem estes alunos ${this.alunos}}`
    );
  }
}
let a = new Aluno("Marcos", 39393, 10, 10);
let m = new outraTurma("Hasime", 100000, a);

m.toString();

/*
this.nome = String(nome);
this.matricula = Number(matricula);
this.notaP1 = Number(notaP1);
this.notaP2 = Number(notaP2);

let manha = new outraTurma();

let turma = new Array(10);

turma[0] = new Aluno("Joao", 323, 4, 5);
turma[1] = new Aluno("Maria", 623, 10, 5);
turma[2] = new Aluno("Caio", 323, 8, 5);
turma[3] = new Aluno("Lucca", 433, 4, 5);
turma[4] = new Aluno("Giovanni", 3233, 4, 5);
turma[5] = new Aluno("Lucia", 33, 4, 5);
turma[6] = new Aluno("Luciano", 553, 4, 5);
turma[7] = new Aluno("Rose", 320, 4, 5);
turma[8] = new Aluno("Enzo", 329, 4, 5);

for (let index = 0; index < turma.length; index++) {
  console.log(turma[index]);
}

console.log(turma);
*/

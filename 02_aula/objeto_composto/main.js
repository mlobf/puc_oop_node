// Objeto composto é aquele sao aqueles cujos os atributos podem ser outros objetos.
// Dentro da classe Turma eu posso ter uma lista de alunos - que sao objetos da classe Aluno -
//  que compoes uma determinada disciplina.
// exemplo

class Aluno {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  toString() {
    let strAluno = `${this.nome} ${this.idade}`;
    return strAluno;
  }
}

class Turma {
  qtdAlunos;
  constructor(nomeProfessor, periodo, vagas) {
    this.nomeProfessor = nomeProfessor;
    this.vagas = vagas;
    this.alunos = Array(vagas);
    this.periodo = periodo;
    this.qtdAlunos = 0;
  }

  addAluno(newAluno) {
    if (this.qtdAlunos < this.vagas) {
      let posicaoNovoAluno = this.qtdAlunos == 0 ? 0 : this.qtdAlunos + 1;
      this.alunos[posicaoNovoAluno] = newAluno;
      this.qtdAlunos++;
      console.log("vagas", this.vagas);
      console.log("qtdAlunos", this.qtdAlunos);
      console.log("alunos.lenght", this.alunos.length);
    }
  }
  toString() {
    return console.log(
      `Essa é a turma ${this.periodo} com os seus alunos ${this.alunos}`
    );
  }
}

let marcos = new Aluno("Marcos", 42);
let joao = new Aluno("Joao", 42);
let maria = new Aluno("maria", 22);
let clarissa = new Aluno("Clarissa", 23);
let beto = new Aluno("beto", 45);
let filipe = new Aluno("Felipe", 40);
let oopManha = new Turma("Gaucho", "manhã", 2);

oopManha.addAluno(marcos);
oopManha.addAluno(joao);
oopManha.addAluno(maria);
oopManha.addAluno(clarissa);
oopManha.addAluno(filipe);
oopManha.addAluno(beto);
oopManha.addAluno(beto);
oopManha.addAluno(beto);
oopManha.addAluno(beto);
oopManha.addAluno(beto);
oopManha.addAluno(beto);
oopManha.addAluno(beto);
oopManha.addAluno(beto);
oopManha.addAluno(beto);

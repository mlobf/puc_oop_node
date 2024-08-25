//Dinamica

//contaComum

class ContaComum {
  constructor(numero_conta_corrente, saldo) {
    this.numero_conta_corrente = numero_conta_corrente;
    this.saldo = saldo;
  }
  deposito() {}
  retirada() {}
}

class ContaPoupanca extends ContaComum {
  //numero_conta_corrente number
  //saldo number
  computaJuros(taxa, valor) {}
}

class ContaLimite extends ContaComum {
  //numero_conta_corrente Number
  //saldo Number
  //limite Number
}

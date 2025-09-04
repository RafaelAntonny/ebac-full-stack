class Personagem {
  constructor(nome, classe, nivel) {
    this.nome = nome;
    this.classe = classe;
    this.nivel = nivel;
  }
}

class Jogador extends Personagem {
  constructor(nome, classe, nivel, funcao) {
    super(nome, classe, nivel);
    this.funcao = funcao;
  }
}

class Npc extends Personagem {
  constructor(nome, classe, nivel, dialogo) {
    super(nome, classe, nivel);
    this.dialogo = dialogo;
  }
}

const jogador1 = new Jogador("Akhylis", "Assasino", 10, "Dps");
const jogador2 = new Jogador("Kaen", "Feiticeiro", 10, "Suporte");
const npc1 = new Npc(
  "Misha Ael",
  "Guerreiro",
  20,
  "Está começando a ficar frio",
);

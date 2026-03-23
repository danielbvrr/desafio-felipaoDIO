class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo.toLowerCase(); // padroniza
  }

  atacar() {
    let ataque = "";

    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "shuriken";
    } else {
      ataque = "ataque desconhecido";
    }

    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

// ================================
// 🧪 Testes
// ================================
const heroi1 = new Heroi("Daniel", 30, "guerreiro");
const heroi2 = new Heroi("Ana", 25, "mago");
const heroi3 = new Heroi("Lee", 40, "monge");
const heroi4 = new Heroi("Ryu", 28, "ninja");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
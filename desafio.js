class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    switch (this.tipo) {
      case "Mago":
        ataque = "magia";
        break;

      case "Guerreiro":
        ataque = "espada";
        break;

      case "Monge":
        ataque = "artes marciais";
        break;

      case "Ninja":
        ataque = "shuriken";
        break;

      case "Artista":
        ataque = "tinta spray";
        break;

      case "Guerreiro aquático":
        ataque = "jato de água";
        break;
    }

    for (let i = 0; i < 2; i++)
      console.log(`O ${this.tipo} atacou usando ${ataque}!`);
  }
}

let heroiUrbano = new heroi("Tron Grafiteiro", 22, "Artista");
let heroiOceanico = new heroi("Baleio-mor", 77, "Guerreiro aquático");

heroiUrbano.atacar()
heroiOceanico.atacar()
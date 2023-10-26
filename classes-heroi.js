class heroi {
    constructor (nome,idade,tipo,ataque){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ataque;
    }
    atacar() {
        console.log (`${this.tipo} atacou usando ${this.ataque}!`);        
    }
}
let guerreiroNordic = new heroi ("Jovem Deus da Guerra Nórdica", "117", "O guerreiro", "espada");
let ninjaSaku = new heroi ("Sakura", "25","A ninja","shuriken");
let magoLipe = new heroi ("Felipe Aguiar", "28","O mago", "magia");
let monjaCoen = new heroi ("Coen", "76", "A Monja", "artes marciais");

guerreiroNordic.atacar();
ninjaSaku.atacar();
magoLipe.atacar();
monjaCoen.atacar();


import { Eleicao } from "../src/dominio/Eleicao.js";

const eleicao = new Eleicao();

eleicao.cadastrar("rodrigo", 66);
eleicao.cadastrar("joao", 68);
eleicao.cadastrar("maria", 67);


console.log(eleicao.listarCandidatos());

eleicao.votar(66);
eleicao.votar(66);
eleicao.votar(67);
eleicao.votar(68);
eleicao.votar(68);
eleicao.votar(68);
console.log(eleicao.votos);
console.log(eleicao.apurarVotos());
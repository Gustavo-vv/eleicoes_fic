import { Candidato } from "./Candidato.js";

export class Eleicao {
    constructor(id, nome, data) {
        this.candidatos = []
        this.votos = []
    }
    //metodo para adicionar candidato
    cadastrar(nome, numero) {
        let numeroUrna = Number(numero)
        const candidatoExiste = this.candidatos.find((candidato) => candidato.numero === numeroUrna);
        if(candidatoExiste) {  
            throw new Error("Candidato já cadastrado");
        }
        const id = this.candidatos.length + 1
        const candidato = new Candidato(id, nome, numeroUrna)
        this.candidatos.push(candidato)
        return candidato

    }
    //camelCase -> primeira letra minuscula e cada palavra seguinte com a primeira letra maiuscula
    listarCandidatos() {
        return this.candidatos;
    }

votar(numeroUrna) {
this.votos.push({ numeroUrna })
}
apurarVotos(){
    return this.candidatos.map((candidato) => {
        //                                            66                         66
        const recebidos = this.votos.filter((voto) => voto.numeroUrna === candidato.numero)
        return {
            id: candidato.id,
            nome: candidato.nome,
            numero: candidato.numero,
            votos: recebidos.length
        }
    }) 
}
}



/*
    função fora de classe é função

    mas função de classe é um metodo
    */
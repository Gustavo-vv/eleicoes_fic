export class Candidato {
    constructor(id, nome, numero) {
        if(nome.length < 3) {
            throw new Error("Nome do candidato deve ter pelo menos 3 caracteres");
        }
        // this = esta classe ou este contexto
        
        this.id = id
        this.nome = nome
        this.numero = numero
    }
    


}

/*
variaveis fora de classe
const nome = "João"
let idade = 30

variaveis dentro de classe são atributos da classe
this.nome = "João"
this.idade = 20

classes e funções são tipos de dados, então podemos criar variáveis do tipo classe ou função

*/
export class Usuario{
    constructor(login, senha){
        this.login = login
        this.senha = senha
    }
    autentecar(senhaDigitada){
        return this.senha === senhaDigitada
}
}
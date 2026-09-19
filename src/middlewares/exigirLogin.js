export function exigirLogin(req, res, next) {
    if(!req.session.usuarioLogado){
        res.status(401).json({ error: 'Usuário não autenticado' })
        return
    }
    next()
}
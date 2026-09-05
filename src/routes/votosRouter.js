import { Router } from "express";
import { votos } from "../dados/votos.js";

const candidatoVotos = Router();
-
candidatoVotos.get('/votos', (req, res) => {
  res.json(votos)
})
candidatoVotos.get('/voto/:id', (req, res) => {
  const numero = parseInt(req.params.id)

  const votoEncontrado = votos.find(voto => voto.id === numero)

  if(votoEncontrado) {
    res.status(200)
    res.json(votoEncontrado)
  }else{
    res.status(404).json({ error: 'id do voto não encontrado' })
  }
})
export default candidatoVotos
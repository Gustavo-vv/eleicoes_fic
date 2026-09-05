import { Router } from "express";
import { candidatos } from "../dados/candidatos.js";

const candidatoViewRouter = Router();

candidatoViewRouter.get('/candidatos', (req, res) => {

 
  res.render('home', 
    { titulo: 'Lista de Candidatos',
      candidatos 
    }
  )
})
candidatoViewRouter.get('/candidatos/:id', (req, res) => {
  const numero = parseInt(req.params.id)
  
  const candidato = candidatos.find(cand => cand.id === numero)

  if(candidato) {
    res.status(200)
    res.json(candidato)
  }else{
    res.status(404).json({ error: 'Candidato não encontrado' })
  }

})
export default candidatoViewRouter;
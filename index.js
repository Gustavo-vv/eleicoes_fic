import express from 'express'
import  candidatoRouter from './src/routes/candidatoRouter.js'
import candidatoViewRouter  from './src/routes/candidatoViewRouter.js'
import painelRouter from './src/routes/painelRouter.js'
import path from 'node:path'
import session from 'express-session'

const app = express()
app.set('views', path.join(path.resolve(), 'src', 'views'))
app.set('view engine', 'ejs')
app.use(express.json())
app.use(session({
  secret: '75F88E8B8963CE3C62C318FB73D2CD79',
  resave: false,
  saveUninitialized: true
}))
app.use(express.urlencoded({ extended: true }))

// chave base da url

app.use('/api', candidatoRouter)
app.use('/', candidatoViewRouter)
app.use('/painel', painelRouter)



app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
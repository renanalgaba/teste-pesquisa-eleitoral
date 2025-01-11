const express = require('express')
const bodyParser = require('body-parser')
const pesquisaRoutes = require('./routes/pesquisaRoutes')
const dashboardRoutes = require('./routes/dashboardRoutes')
const { updateMunicipiosEstados } = require('./services/ibgeService')

const app = express()

app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use('/pesquisa', pesquisaRoutes)
app.use('/dashboard', dashboardRoutes)

app.post('/atualizar-base', async(req, res) => {
  await updateMunicipiosEstados()
  res.send('Base Atualizada com sucesso!')
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})
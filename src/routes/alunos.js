const Router = require('koa-router')

const router = new Router()

const alunos = [{ name: "othon", description: 'Aluno', classe: "Engenharia de Software" }]

router.get('/alunos', async (ctx) => {
    ctx.body = alunos
})

router.post('/alunos', async (ctx) => {
    const { name, description, classe } = ctx.request.body

    alunos.push({ name: name, description: description, classe: classe })

    ctx.body = 'Adicionado com sucesso'
})

router.put('/alunos', async (ctx) => {
    const { id, name, description, classe } = ctx.request.body
    alunos[id] = {
        name: name,
        description: description,
        classe: classe
    }
    ctx.body = 'Alterado com Sucesso'
})

router.delete('/alunos', async (ctx) => {
    const { id } = ctx.request.body
    alunos.splice(id, 1);
    ctx.body = 'Deletado com sucesso'
})

module.exports = router
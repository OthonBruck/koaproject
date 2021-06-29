const Koa = require('koa');
const json = require('koa-json')
const bodyParser = require('koa-bodyparser');
const router = require('./src/routes/alunos.js');
var mongoose = require("mongoose");
mongoose.connect(
    "mongodb+srv://othon:bruck@cluster0.trgac.mongodb.net/koaproject?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
);
const app = new Koa();

app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods())
app.use(json())

app.listen(3000, () => console.log('Application Started...'));
const express = require('express')
const mysql = require('mysql')
const util = require('util')

const app = express()
app.use(express.json())

const mysqlConfig = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nginx_node_db'
}

app.get('/', async (req, res) => {
    try {
        const db = await mysql.createConnection(mysqlConfig)
        const query = util.promisify(db.query).bind(db)

        const result = await query('SELECT (name) FROM people')

        db.end()

        res.send(`<h1>Hello ${result[0].name}!!!</h1>`)
    } catch (err) {
        console.error(err)
        res.send('<h1>Deu ruim :(</h1>')
    }
})

app.post('/register', async (req, res) => {
    try {
        const name = req.body.name

        const db = await mysql.createConnection(mysqlConfig)
        const query = util.promisify(db.query).bind(db)

        await query(`INSERT INTO people (name) values ('${name}')`)

        db.end()

        res.send(`<h1>${name} registrado com sucesso!</h1>`)
    } catch (err) {
        console.error(err)
        res.send('<h1>Deu ruim :(</h1>')
    }
})

app.get('/search', async (req, res) => {
    try {
        const name = req.query.name

        const db = await mysql.createConnection(mysqlConfig)
        const query = util.promisify(db.query).bind(db)

        const result = await query(`SELECT name FROM people WHERE name="${name}"`)

        db.end()

        res.send(`<h1>Bem-vindo ${result[0].name}!</h1>`)
    } catch (err) {
        console.error(err)
        res.send('<h1>Deu ruim :(</h1>')
    }
})

app.listen(3000, async () => {
    const db = await mysql.createConnection(mysqlConfig)
    const query = util.promisify(db.query).bind(db)

    await query('CREATE TABLE IF NOT EXISTS people (id int not null auto_increment, name varchar (255), PRIMARY KEY (id))')
    await query('DELETE FROM people')
    await query(`INSERT INTO people (name) values ('Luiz')`)

    db.end()

    console.log('Rodando na porta 3000')
});
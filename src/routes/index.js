const {Router} = require('express');
const router = Router();
const {mySqlConnection, pgSqlConnection, msSqlConnection} = require('../database')


router.get('/mysql', (req, res) => {
    mySqlConnection.query('select * from database_connection', (err, rows, fileds) => {
        if (!err) {
            res.json(rows)
        } else {
            console.log(err)
        }
    })
});


router.get('/pgsql', (req, res) => {
    pgSqlConnection.query('SELECT * FROM users', (err, rows) => {
        if (err) {
            res.json(err)
        } else {
            res.json(rows.rows)
        }
        pgSqlConnection.end()
    })
})

router.get('/mssql', (req, res) => {
    setTimeout(
        async () => {
            const result = await msSqlConnection.executeQuery('select * from [user]');
            console.log(result)
            res.json(result.data)
        }, 1500)
})

module.exports = router;
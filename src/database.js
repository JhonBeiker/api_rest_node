const mysql = require('mysql')
const {Client} = require('pg')
const sql = require('mssql')

const msSqlConnection = new (require('rest-mssql-nodejs'))({
    user: 'jhon',
    password: '123456',
    server: 'LAPTOP-RAK5M3HP\\SQLEXPRESS',
    database: 'prueba',
    port: 49812
})

const mySqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: ""
})

const pgSqlConnection = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'homewor',
    password: 12345678,
    port: 5432,
})

// const msSqlConnection = new sql.ConnectionPool({
//     user: 'jhon',
//     password: '123456',
//     server: 'LAPTOP-RAK5M3HP\\SQLEXPRESS',
//     database: 'prueba',
//     port: 49812
// })
//
// msSqlConnection.connect(err => {
//     if (err) {
//         console.error('connection error', err.stack)
//     } else {
//         console.log('connected MsSql')
//     }
// })

mySqlConnection.connect(function (err) {
    if (err) {
        console.error('connection error', err.stack)
    } else {
        console.log('connected MySql')
    }
})

pgSqlConnection.connect(err => {
    if (err) {
        console.error('connection error', err.stack)
    } else {
        console.log('connected PgSql')
    }
})

module.exports = {mySqlConnection, pgSqlConnection, msSqlConnection}
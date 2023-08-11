import mysql from 'mysql'

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Eyasin3162$",
    database: "resultdb"
})


const mysql = require('mysql');

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'mydb'
})

conn.connect((err)=>{
    if(err) throw err;
    console.log("terkoneksi");
});

module.exports = conn;
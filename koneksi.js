const mysql = require('mysql');

const conn = mysql.createConnection({
    host:'containers-us-west-30.railway.app',
    user:'root',
    password:'P8BLjmauqeQHe0joN2dA',
    database:'railway'
})
// const conn = mysql.createConnection('mysql://root:P8BLjmauqeQHe0joN2dA@containers-us-west-30.railway.app:6542/railway');
conn.connect((err)=>{
    if(err) throw err;
    console.log("terkoneksi");
});

module.exports = conn;
'use strict';

let response = require('./res');
let connection = require('./koneksi');

exports.index = (req, res)=>{
    response.ok("starting",res)
}

exports.getData = (req,res)=>{
    connection.query("SELECT * FROM data", (error, rows,filed)=>{
        if(error) console.log(error);
        response.ok(rows,res)
    })
}

exports.getDataById = (req,res)=>{
    let id = req.params.id;
    connection.query("SELECT * FROM data WHERE id = ?",[id], (error, rows,filed)=>{
        if(error) console.log(error);
        response.ok(rows,res)
    })
}

exports.insertData = (req,res) =>{
    let id      = req.body.id;
    let nama    = req.body.nama;
    let resolusi= req.body.resolusi;
    let tanggal = req.body.tahun;

    connection.query('INSERT INTO data (id,nama,resolusi,tahun) VALUES(?,?,?,?)',[id,nama,resolusi,tanggal], (error,rows,filed)=>{
        if(error) response.gagal(error);
        response.ok("Berhasil menambahkan data",res)
    })
}
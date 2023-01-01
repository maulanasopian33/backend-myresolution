'use strict';

exports.ok = (value, res)=>{
    let data = {
        'status':200,
        'value':value
    };
     res.json(data);
     res.end();
};
exports.gagal = (value,res)=>{
    let data = {
        'status':404,
        'value':value
    };
     res.json(data);
     res.end();
}
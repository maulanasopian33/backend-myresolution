'use strict';

exports.ok = (value, res)=>{
    let data = {
        'status':200,
        'value':value
    };
     res.json(data);
     res.end();
};
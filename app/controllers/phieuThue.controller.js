const PhieuThue = require('../models/phieuThue.model');

exports.getAll=(req, res)=>{
    PhieuThue.getAll((result)=>{res.send(result)});
}

exports.get=(req, res)=>{
    const id = req.params.id;
    PhieuThue.get(id, (result)=>{res.send(result)});
}

exports.insert=(req, res)=>{
    const phieuThue = req.body;
    PhieuThue.insert(phieuThue,(result)=>{res.send(result)});
}

exports.update=(req, res)=>{
    const phieuThue = req.body;
    PhieuThue.update(phieuThue,(result)=>{res.send(result)});
}

exports.delete=(req, res)=>{
    const id = req.params.id;
    PhieuThue.delete(id,(result)=>{res.send(result)});
}
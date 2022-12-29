const Admin = require('../models/AdminModel');

module.exports.index = (req,res) => {
    return res.render('index');
}

module.exports.addrecord = (req,res) => {
    Admin.create({
        email : req.body.email,
        password : req.body.password,
    },(err)=>{
        if(err){
            console.log("Record not insert");
            return false;
        }
        console.log("Record successfully insert");
        return res.redirect('back');
    })
}

module.exports.viewdata = (req,res) => {

    Admin.find({},(err,record)=>{
        return res.render('view',{
            allrecord : record
        });
    })
    
}
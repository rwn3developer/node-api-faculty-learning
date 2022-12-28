module.exports.index = (req,res) => {
    return res.render('index');
}

module.exports.addrecord = (req,res) => {
    console.log(req.body);
}
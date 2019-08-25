module.exports.createproduct = function(req,res,next){
    var errors = [];
    if(!req.body.name)
    {
        errors.push('Name is required');
    }
    if(!req.body.description)
    {
        errors.push('Phone is required');
    }
    if(errors.length)
    {
        res.render('users/createproduct',{
            errors:errors,
            values:req.body
        });
        return;
    }
    next();
};
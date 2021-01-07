const {User} = require('../../postgres/models/user');

const add_user = (req, res)=>{
    let body = req.body;
    User.create({
       first_name: body.firstName,
       last_name:  body.lastName ,
       company: body.company,
       email: body.email,
       phone: body.phone,
    })
    .then((result)=>{
        res.send(JSON.stringify(result.id))
    })
    .catch((err)=>{
        res.send(err)
    })
}

module.exports ={
    add_user,
}
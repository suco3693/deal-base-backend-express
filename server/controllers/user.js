const {User} = require('../../postgres/models/user');

const add_user = (req, res)=>{
    let body = req.body;
    User.upsert({ 
        first_name: body.firstName,
        last_name:  body.lastName ,
        company: body.company,
        email: body.email,
        phone: body.phone,
    }, {email: body.email})
    .then((result)=>{
        res.status(200)
        res.json(result)
    })
    .catch((err)=>{
        console.log(err)
        res.status(500)
        res.send(err)
    })
}

module.exports ={
    add_user,
}
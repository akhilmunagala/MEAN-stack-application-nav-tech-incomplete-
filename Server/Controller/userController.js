const User = require('../Models/User');

exports.login = (req,res)=>{

    let data = req.body;
    console.log('data',data);
    const user = new User();

    user.login(data, (response,err)=>{
       if(response){
           console.log('response',response);
           if(response.password == data.password){
                res.status(200).send('User logged in');
           }else{
               res.status(400).send('Passwords do not match');
           }
       }else{
           res.status(400).send(err);
       }
    });
}
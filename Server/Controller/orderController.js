const Order = require('../Models/Order');

exports.createOrder = (req,res)=>{
    const order = new Order();
    let data = req.body;
    // console.log('body data',data);
    order.add(data, (response,err)=>{
        if(response){
            res.status(200).send(response);
        }else{
            res.status(400).send(err);
        }
    });
    // res.status(200).send();
}

exports.getAllOrders = (req,res)=>{
    const order = new Order();
    order.fetchAll((response,err)=>{
        if(response){
            console.log('response',response);
            res.status(200).send(response);
        }else{
            res.status(400).send(err);
        }
    });
}

exports.deleteOrder = (req,res)=>{
    const id = req.params.id;
    const order = new Order();
    order.delete(id, (response, err)=>{
        if(response){
            res.status(200).send('Order deleted');
        }else{
            res.status(400).send(err);
        }
    })
}

exports.updateOrder = (req,res)=>{
    const id = req.params.id;
    let data = req.body;
    data['id'] = id; //TODO: can do more validation here.
    const order = new Order();
    order.update(data, (response, err)=>{
        if(response){
            res.status(200).send('Order updated');
        }else{
            res.status(400).send(err);
        }
    })
}
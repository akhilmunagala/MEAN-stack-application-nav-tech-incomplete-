const Schema = require('../Models/OrderSchema');

module.exports = class Order {
    constructor(){}

    add(obj,cb){
        console.log('Add obj',obj);

        let order = new Schema({
            orderNo: obj.orderNo,
            dueDate: obj.dueDate,
            customer: obj.customer,
            address: obj.address,
            phone: obj.phone,
            total: obj.total
        });

        order.save()
            .then(doc => {
                console.log('doc',doc);
                cb(doc,undefined);
            })
            .catch(err=>{
                console.log('err',err);
                cb(undefined,err);
            });
    }

    delete(id, cb){
        Schema.findOneAndDelete({orderNo: id}, (err,result)=>{
            if(err){
                cb(undefined, err);
            }else{
                cb(result,undefined);
            }
        })
    }

    update(obj, cb){
        Schema.findOneAndUpdate(
            {
                orderNo: obj.id
            },
            {
                orderNo: obj.orderNo,
                dueDate: obj.dueDate,
                customer: obj.customer,
                address: obj.address,
                phone: obj.phone,
                total: obj.total
            },
            {new: true},
            (err, result)=>{
                if(err){
                    cb(undefined,err);
                }else{
                    cb(result,undefined);
                }
            }
        
        )
    }

    fetchAll(cb){
        Schema.find({}, (err,result)=>{
            if(err){
                cb(undefined, err);
            }else{
                cb(result, err);
            }
        });
    }
}
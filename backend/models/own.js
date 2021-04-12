//import  mongoose from 'mongoose';

var mongoose  = require ('mongoose');

const Schema = mongoose.Schema;
//const _id = Schema._id;

var own = new Schema ( {
    name : {
        default: "No This require",
        type: String
    },
    add : {
        type: String
    }
    
});
module.exports = mongoose.model ('own' , own , 'own');

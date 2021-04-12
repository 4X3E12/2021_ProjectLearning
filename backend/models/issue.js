//import  mongoose from 'mongoose';

var mongoose  = require ('mongoose');

const Schema = mongoose.Schema;
const _id = Schema._id;

var Issues = new Schema ( {
    title : {
        type: String
    },
    responsebile : {
        type: String
    },
    description: {
        type: String,
        default: "Hello This Default"
    },
    severity: {
        type: String
    },
    status: {
        type: String,
        default: 'Open'
    }
    
});

const IssuesTable = mongoose.model ('Issues' , Issues , 'issues');
module.exports = IssuesTable;

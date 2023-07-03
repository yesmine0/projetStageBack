const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BoxSchema = new Schema({
message : String 
});

module.exports = mongoose.model('Box', BoxSchema);
var mongoose = require('mongoose');

// Setup schema
var personaSchema = mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    arcana: {
        type: String,
        required: true
    },
    gender: String,
    origin: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

// Export contact model to make it accessable
var Contact = module.exports = mongoose.model('persona', 
personaSchema);

module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}
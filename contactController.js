// import contact model
Contact = require('./contactModel');

// Handle index actions
exports.index = function (req, res) {
    Contact.get(function (err, personas) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Persona information retrieved successfully",
            data: personas
        });
    });
}

// Handle create new persona
exports.new = function (req, res) {
    var persona = new Contact();
    persona.name = req.body.name ? req.body.name : persona.name;
    persona.gender = req.body.gender;
    persona.arcana = req.body.arcana;
    persona.origin = req.body.origin;

    // Save the contact and check for erros
    persona.save (function (err) {
        if (err) {
            res.json(err);
        }

        // Logging for successful contact saved
        res.json({
            message: 'New persona created!',
            data: persona
        });
    });
}

// Handle viewing persona information
exports.view = function (req, res) {
    Contact.findById(req.params.id, function(err, persona) {
        if (err) {
            res.send(err);
        }
        res.json({
            message: "Persona details loading..",
            data: persona
        });
    });
}

// Handle updating persona information
exports.update = function (req, res) {
    Contact.findById(req.params.id, function (err, persona) {
        if (err) {
            res.send(err);
        }

        persona.name = req.body.name ? req.body.name : persona.name;
        persona.gender = req.body.gender;
        persona.arcana = req.body.arcana;
        persona.origin = req.body.origin;

        // Save updated persona information and check for errors
        persona.save(function (err) {
            if (err) {
                res.json(err);
            }
            res.json({
                message: 'Persona information updated',
                data: persona
            });
        });
    });   
}

// handle delete persona
exports.delete = function (req, res) {
    Contact.remove({
        _id: req.params.id
    }, function (err, contact) {
        if (err) {
            res.send(err);
        }
        res.json({
            status: "success",
            message: "Persona has been deleted"
        });
    });
}

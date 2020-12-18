var consultModel = require('../models/consultModel.js');

/**
 * consultController.js
 *
 * @description :: Server-side logic for managing consults.
 */
module.exports = {

    /**
     * consultController.list()
     */
    list: function (req, res) {
        consultModel.find(function (err, consults) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting consult.',
                    error: err
                });
            }
            return res.json(consults);
        });
    },

    /**
     * consultController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        consultModel.findOne({_id: id}, function (err, consults) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting consults.',
                    error: err
                });
            }
            if (!consults) {
                return res.status(404).json({
                    message: 'No such consults'
                });
            }
            return res.json(consults);
        });
    },

    /**
     * consultsController.create()
     */
    create: function (req, res) {
        var consults = new consultModel({
			dateDebut : req.body.dateDebut,
			dateFin : req.body.dateFin

        });

        consults.save(function (err, consults) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating consults',
                    error: err
                });
            }
            return res.status(201).json(consults) ;
        });
    },

    /**
     * consultsController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        consultModel.findOne({_id: id}, function (err, consults) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting consults',
                    error: err
                });
            }
            if (!consults) {
                return res.status(404).json({
                    message: 'No such consults'
                });
            }

            consults.dateDebut = req.body.dateDebut ? req.body.dateDebut:  consults.dateDebut;
			consults.dateFin = req.body.dateFin ? req.body.dateFin :  consults.dateFin;
			
            consults.save(function (err, consults) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating consults.',
                        error: err
                    });
                }

                return res.json(consults);
            });
        });
    },

    /**
     * consultController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        consultModel.findByIdAndRemove(id, function (err, consults) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the consults.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};

var doctorModel = require('../models/doctorModel.js');

/**
 * doctorController.js
 * 
 * @description :: Server-side logic for managing doctors.
 */
module.exports = {

    /**
     * doctorController.list()
     */
    list: function (req, res) {
        doctorModel.find(function (err, doctors) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting doctors.',
                    error: err
                });
            }
            return res.json(doctors);
        });
    },

    /**
     * doctorController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        doctorModel.findOne({_id: id}, function (err, doctors) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting doctors.',
                    error: err
                });
            }
            if (!doctors) {
                return res.status(404).json({
                    message: 'No such doctors'
                });
            }
            return res.json(doctors);
        });
    },

    /**
     * doctorController.create()
     */
    create: function (req, res) {
        var doctors = new doctorModel({
			name : req.body.name,
            birthday : req.body.birthday,
	        tel: req.body.tel,
	        hospitalName : req.body.hospitalName

        });

        doctors.save(function (err, doctors) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating doctors',
                    error: err
                });
            }
            return res.status(201).json(doctors) ;
        });
    },

    /**
     * doctorsController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        doctorModel.findOne({_id: id}, function (err, doctors) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting doctors',
                    error: err
                });
            }
            if (!doctors) {
                return res.status(404).json({
                    message: 'No such doctors'
                });
            }

            doctors.name = req.body.name ? req.body.name : doctors.name;
            doctors.birthday = req.body.birthday ? req.body.birthday : doctors.birthday;
            doctors.tel = req.body.tel?req.body.tel:doctors.tel;
            doctors.hospitalName = req.body.hospitalName ? req.body.hospitalName:doctors.hospitalName;

			
            doctors.save(function (err, doctors) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating doctors.',
                        error: err
                    });
                }

                return res.json(doctors);
            });
        });
    },

    /**
     * doctorsController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        doctorModel.findByIdAndRemove(id, function (err, doctors) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the doctors.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};

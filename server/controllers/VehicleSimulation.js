import VehicleSimulation from '../models/VehicleSimulation';

class VehicleSimulationController {

    create = (req, res) => {
        const newVehicleSimulation = new VehicleSimulation(req.body);
        newVehicleSimulation.save()
            .then((createdVehicleSimulation) => {
                res.send(createdVehicleSimulation);
            })
            .catch((err) => {
                res.status(500).send(err);
            })
    };

    readList = (req, res) => {
        VehicleSimulation.find(req.body, (err, list) => {
            if (!err) {
                res.send(list);
            } else {
                res.status(500).send(err);
            }
        });
    };

    readOne = (req, res) => {
        VehicleSimulation.findById(req.params.id, (err, user) => {
            if (!err && user) {
                res.send(user);
            } else {
                res.status(404).send();
            }
        });
    };

    update = (req, res) => {
        VehicleSimulation.updateOne({ _id: req.params.id }, req.body, (err, dbResult) => {
            if (!err) {
                res.send(dbResult);
            } else {
                res.status(404).send(err);
            }
        });
    };

    delete = (req, res) => {
        VehicleSimulation.deleteOne({ _id: req.params.id })
            .then((dbResult) => {
                res.send(dbResult);
            })
            .catch((err) => {
                res.status(404).send(err);
            });
    };

}

export default new VehicleSimulationController();

import VehicleSimulation from '../models/VehicleSimulation';
import CarType from '../models/CarType';

class VehicleSimulationController {

    create = (req, res) => {
        const newVehicleSimulation = new VehicleSimulation(req.body);
        newVehicleSimulation.save()
            .then((createdVehicleSimulation) => {
                res.send(createdVehicleSimulation);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
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
        VehicleSimulation.findById(req.params.id, (err, vehicleSimulation) => {
            if (!err && vehicleSimulation) {
                res.send(vehicleSimulation);
            } else {
                res.status(404).send();
            }
        });
    };

    update = (req, res) => {
        CarType.findOne({ name: req.body.car_type.name }, (err1, car_type) => {
            if (!err1 && car_type) {
                req.body.car_type = car_type._id;
                VehicleSimulation.updateOne({ _id: req.params.id }, req.body, (err2, dbResult) => {
                    if (!err2) {
                        res.send(dbResult);
                    } else {
                        res.status(404).send(err2);
                    }
                });
            } else {
                res.status(500).send(err1);
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

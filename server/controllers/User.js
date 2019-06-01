import User from '../models/User';
import VehicleSimulation from "../models/VehicleSimulation";
import CarType from "../models/CarType";
import {Schema} from "mongoose";

class UserController {

    create = (req, res) => {
        CarType.findOne({}, (err1, carType) => {
            if (!err1 && carType) {
                const newVehicleSimulation = new VehicleSimulation({
                    car_type: carType._id,
                    latitude: 28.511474,
                    longitude: 77.091263,
                    charging: 99
                });
                newVehicleSimulation.save()
                    .then((createdVehicleSimulation) => {
                        const newUser = new User(req.body);
                        newUser.vehicle_simulation = createdVehicleSimulation;
                        newUser.save()
                            .then((createdUser) => {
                                res.send(createdUser);
                            })
                            .catch((err3) => {
                                res.status(500).send(err3);
                            });
                    })
                    .catch((err2) => {
                        res.status(500).send(err2);
                    });
            } else {
                res.status(500).send();
            }
        });
    };

    readList = (req, res) => {
        User.find(req.body).populate({
            path: 'vehicle_simulation',
            populate: {
                path: 'car_type'
            }
        }).exec((err, list) => {
            if (!err) {
                res.send(list);
            } else {
                res.status(500).send(err);
            }
        });
    };

    readOne = (req, res) => {
        User.findById(req.params.id).populate({
            path: 'vehicle_simulation',
            populate: {
                path: 'car_type'
            }
        }).exec((err, user) => {
            if (!err && user) {
                res.send(user);
            } else {
                res.status(404).send();
            }
        });
    };

    update = (req, res) => {
        User.updateOne({ _id: req.params.id }, req.body, (err, dbResult) => {
            if (!err) {
                res.send(dbResult);
            } else {
                res.status(404).send(err);
            }
        });
    };

    delete = (req, res) => {
        User.deleteOne({ _id: req.params.id })
            .then((dbResult) => {
                res.send(dbResult);
            })
            .catch((err) => {
                res.status(404).send(err);
            });
    };

    login = (req, res) => {
        User.findOne({ username: req.body.username }, (err, user) => {
            if (!err && user) {
                res.send(user);
            } else {
                res.status(500).send(err);
            }
        });
    }

}

export default new UserController();

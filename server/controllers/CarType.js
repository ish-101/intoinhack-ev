import CarType from '../models/CarType';

class CarTypeController {

    create = (req, res) => {
        const newCarType = new CarType(req.body);
        newCarType.save()
            .then((createdCarType) => {
                res.send(createdCarType);
            })
            .catch((err) => {
                res.status(500).send(err);
            })
    };

    readList = (req, res) => {
        CarType.find(req.body, (err, list) => {
            if (!err) {
                res.send(list);
            } else {
                res.status(500).send(err);
            }
        });
    };

    readOne = (req, res) => {
        CarType.findById(req.params.id, (err, carType) => {
            if (!err && carType) {
                res.send(carType);
            } else {
                res.status(404).send();
            }
        });
    };

    update = (req, res) => {
        CarType.updateOne({ _id: req.params.id }, req.body, (err, dbResult) => {
            if (!err) {
                res.send(dbResult);
            } else {
                res.status(404).send(err);
            }
        });
    };

    delete = (req, res) => {
        CarType.deleteOne({ _id: req.params.id })
            .then((dbResult) => {
                res.send(dbResult);
            })
            .catch((err) => {
                res.status(404).send(err);
            });
    };

}

export default new CarTypeController();

import User from '../models/User';

class UserController {

    create = (req, res) => {
        const newUser = new User(req.body);
        newUser.save()
            .then((createdUser) => {
                res.send(createdUser);
            })
            .catch((err) => {
                res.status(500).send(err);
            })
    };

    readList = (req, res) => {
        User.find(req.body, (err, list) => {
            if (!err) {
                res.send(list);
            } else {
                res.status(500).send(err);
            }
        });
    };

    readOne = (req, res) => {
        User.findById(req.params.id, (err, user) => {
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

}

export default new UserController();

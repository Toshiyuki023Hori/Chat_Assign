const User = require("../models/User.model");

module.exports = {
    register(req, res) => {
        User.create(req.body)
            .then(user => {
                res.json({msg : "Success", user : user});
            })
            .catch(err => res.json(err))
    }
}
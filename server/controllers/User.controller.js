const User = require("../models/User.model");
const jwt = require("jsonwebtoken");

module.exports = {
    register(req, res){
        User.create(req.body)
            .then(user => {
                const token = jwt.sign({
                    id : user._id,
                    email : user.email
                }, process.env.SECRET_KEY);

                res
                .cookie("token", token, {
                    httpOnly: true
                }).json({status:"Success", token})
            })
            .catch(err => {
                console.log("Error in Registration");
                console.log(res);
                res.status(400).json(err)
            });
    },

    async login(req, res){
        const { email, password } = req.body;
    }
}

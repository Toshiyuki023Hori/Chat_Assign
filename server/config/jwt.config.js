const jwt = require("jsonwebtoken");

const payload = {
    id : user._id
};

const userToken = jwt.sign(payload, process.env.SECRET_KEY)
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : [
            true,
            "You should enter first name."
        ]
    },
    lastName : {
        type : String,
        required : [
            true,
            "You should enter last name."
        ]
    },
    email : {
        type : String,
        required : [
            true,
            "You should enter email."
        ],
        validate : {
            validator : val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message : "Please combine number with symbols."
        }
    },
    password : {
        type : String,
        required : [
            true,
            "You should enter password."
        ]
    }
}, {
    timestamps:true
})

UserSchema.virtual("confirmPW")
    .get(() => this._confirmPW)
    .set(value => this._confirmPW = value);

UserSchema.pre("validate", function(next) {
    if(this.password !== this._confirmPW){
        this.invalidate("confirmPW", "You should enter the same password.")
    }
    next()
});

UserSchema.pre("save", function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            newt();
        });
})
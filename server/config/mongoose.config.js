const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/chat",{
    useNewUrlParser : true,
    useUnifiedTopology : true,
})
.then(() => console.log("You succeeded!"))
.catch(() => console.log("Please check details",err))
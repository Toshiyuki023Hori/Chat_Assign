const express = require("express");

const cookieParser = require("cookie-parser")

const app = express();


const server = app.listen(8000)
const io = require("socket.io")(server)

app.use(cookieParser());
app.use(cors({credentials:true, origin : "http://localhost:3000"}));

require("dotenv").config();
const myFirstSecret = process.env.SECRET_KEY

// "connecton" is the name of an event.
io.on("connection", socket => {
    console.log("Nice to meet you. (shake hand)")
    socket.on("event_from_client", data => {
        socket.broadcast.emit("send_data_to_all_other_clients", data);
    })
})


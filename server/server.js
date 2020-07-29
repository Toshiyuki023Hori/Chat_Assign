const express = require("express");

const app = express();


const server = app.listen(8000)
const io = require("socket.io")(server)


// "connecton" is the name of an event.
io.on("connection", socket => {
    console.log("Nice to meet you. (shake hand)")
    socket.on("event_from_client", data => {
        socket.broadcast.emit("send_data_to_all_other_clients", data);
    })
})


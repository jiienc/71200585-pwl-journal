const express = require('express');
const app = express();
const PORT = 4000;

const http = require('http').Server(app);
const cors = require('cors');

app.use(cors());
app.use(cors());

const socketIO = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000"
    }
});

socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
    socket.on('disconnect', () => {
        console.log('🔥: A user disconnected');
    });

    socket.on("message", (data) => {
        socketIO.emit("messageResponse", data);
    });

    console.log(`⚡: ${socket.id} user just connected!`);
    socket.on("newUser", (data) => {
        users.push(data);
        socketIO.emit("newUserResponse", users);
    });

    socket.on("disconnect", () => {
        console.log("🔥: A user disconnected");
        //Updates the list of users when a user disconnects from the server
        users = users.filter((user) => user.socketID !== socket.id);
        // console.log(users);
        //Sends the list of users to the client
        socketIO.emit("newUserResponse", users);
        socket.disconnect();
    });
});


app.get('/api', (req, res) => {
    res.json({
        message: 'Hello world',
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
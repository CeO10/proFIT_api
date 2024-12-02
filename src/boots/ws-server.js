import express from "express";
import mongoose from "mongoose";
import {createServer} from 'http';
import { Socket } from "socket.io";
import router from "../routes/goal-route.js";
import { WebSocket } from "http";


const app = express();
const server = new WebSocket.Server({port});
// const io = socketIo(server);

let goals = []

mongoose.connect("mongodb://localhost:27017/proFIT")

app.use('/api', goalRoutes);

// starting the server
const PORT = process.env.PORT || 12323
server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
});

// WebSocket connection
server.on('new client connected');
// send existing goals to the client
socket.send(json.stringify(goals));

// handle incoming messages
socket.on('message', (message) => {
    const goal = json.parse(message);
    goals.push(goal);
    // broadcast the updated goals
    server.client.foEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(json.stringify(goals))
        }
    });
});

socket.on('close', () => {
    console.log('client disconnected');
});

console.log('WebSocket server is running on ws://localhost.12323')



// // socket io connection
// io.on('connection', (socket) => {
//     console.log('new client connected');

//     socket.on('update-goal', (data) => {
//         socket.broadcast.emit('goal-updated', data);
//     });

//     socket.on('disconnect', () => {
//         console.log('client disconnected');
//     });
// });
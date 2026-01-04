import cors from "cors";
import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";

const app = express();
const port = 5000;
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});
app.use(cors());

io.on("connection", (socket) => {
  console.log(`${socket.id} connected`);

  // socket.emit("welcome" , `welcome to the server ${socket.id}`)

  // socket.broadcast.emit("welcome" , `${socket.id} joined the server`)

  socket.on("message", (data) => {
    console.log(data);
    io.emit("receive-message", data);
  });

  const count = io.engine.clientsCount

  const count2 = io.of('/').sockets.size;

  console.log('count2: ' , count2)

  console.log("Count: " , count)

  socket.on("disconnect", () => {
    console.log(`user disconnected ${socket.id}`);
  });
});

server.listen(port, () => {
  console.log(`app is running at ${port}`);
});

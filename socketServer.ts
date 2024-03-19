import {Server as SocketIOServer} from "socket.io";
import http from 'http';

export const initSocketServer = (server: http.Server) => {
    const io = new SocketIOServer(server);

    io.on("connection", (socket) => {
        console.log('A user connected');

        // Listen for 'notification' event from frontend
        socket.on("notification", (data) => {
            // Braodcast the notification data to all connected clients (admin dashboard)
            io.emit("newNotification", data);
        });

        socket.on("disconnect", () => {
            console.log("A user disconnected");
        });
    });
};
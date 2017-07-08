const express = require('express');
const path = require('path');
const app = express();

const PORT = 8000;

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './node_modules/jquery/dist')));

const server = app.listen(PORT, () => {
  console.log('listening on port 8000');
});

const io = require('socket.io').listen(server);

io.on("connection", (socket) => {
  console.log("New connection", socket.id);

  socket.on("submit", (form_data) => {
    let form_results = JSON.stringify(form_data);
    let number = Math.floor(Math.random() * 1000) + 1;
    socket.emit('display', form_results);
    socket.emit('number', number);
  })
})
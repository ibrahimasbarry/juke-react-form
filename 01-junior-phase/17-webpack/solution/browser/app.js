// const whiteboard = require('./whiteboard');
// const io = require('socket.io-client');
import whiteboard from './whiteboard';
import io from 'socket.io-client';

const socket = io(window.location.origin);

socket.on('connect', function () {
  console.log('Connected!');
});

socket.on('load', function (strokes) {

  strokes.forEach(function (stroke) {
    var { start, end, color } = stroke;
    whiteboard.draw(start, end, color, false);
  });

});

socket.on('draw', function (start, end, color) {
  whiteboard.draw(start, end, color, false);
});

whiteboard.on('draw', function (start, end, color) {
  socket.emit('draw', start, end, color);
});

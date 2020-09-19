const {io} = require('../app');

//Sockets message
io.on('connection', client => {
    console.log('Client connected');

    client.on('disconnect', () => {
        console.log('Client disconnected');
    });

    client.on('message', (data) => {
        console.log('message', data);
        //Message to every user
        io.emit('message', {admin: "hello everyone"});
    });

});
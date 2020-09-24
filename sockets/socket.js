const {io} = require('../app');
const VideoGames = require('../models/videogames');
const VideoGame = require('../models/videogame');

const videogames = new VideoGames();

videogames.addVideoGame(new VideoGame('GTA 4'));
videogames.addVideoGame(new VideoGame('Fortnite'));
videogames.addVideoGame(new VideoGame('COD MW'));
videogames.addVideoGame(new VideoGame('GTA 5'));

//Sockets message
io.on('connection', client => {
    console.log('Client connected');

    client.on('disconnect', () => {
        console.log('Client disconnected');
    });

    client.emit('videogames', videogames.getVideoGames());

    client.on('message', (data) => {
        console.log('message', data);
        //Message to every user
        io.emit('message', {admin: "hello everyone"}); //emit to every client
        io.emit('message', data);
    });

    client.on('vote-videogame', (data) => {
        videogames.voteVideoGame(data.id);
        io.emit('videogames', videogames.getVideoGames());
    });

    client.on('add-videogame', (data) => {
        const newVideogame = new VideoGame(data.name);
        videogames.addVideoGame(newVideogame);
        io.emit('videogames', videogames.getVideoGames());
    });

    client.on('delete-videogame', (data) => {
        videogames.deleteVideoGame(data.id);
        io.emit('videogames', videogames.getVideoGames());
    });

    /*client.on('emit-message', (data) => {
        //io.emit('new-message', data); //emit to every client
        //client.broadcast.emit('new-message', data); //emit to ebery client except who emitted
        client.broadcast.emit('emit-message', data);
    });*/
});
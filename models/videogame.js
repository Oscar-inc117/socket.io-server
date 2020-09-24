const { v4: uuidv4 } = require('uuid');

class VideoGame {
    constructor (name = 'nm') {
        this.id = uuidv4();
        this.name = name;
        this.votes = 0;
    }
}

module.exports = VideoGame;
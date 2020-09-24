
class VideoGames {
    constructor() {
        this.videogames = [];
    }

    addVideoGame(videogame = new VideoGame()) {
        this.videogames.push(videogame);
    }

    getVideoGames() {
        return this.videogames;
    }

    deleteVideoGame(id = '') {
        this.videogames = this.videogames.filter(videogame => videogame.id !== id);
    }

    voteVideoGame(id = '') {
        this.videogames = this.videogames.map(videogame => {
            if(videogame.id === id) {
                videogame.votes++;
                return videogame;
            } else {
                return videogame;
            }
        });
    }
}

module.exports = VideoGames;
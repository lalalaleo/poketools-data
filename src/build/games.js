const GAME = require('../class/game');
const gamesData = require('../data/games');
const create = require('../util/createJSON');

let arr = [];
gamesData.forEach((row, rowId) => {
    if(rowId > 0) arr.push(new GAME(row, gamesData[0]));
});

create('lib/games.json', arr);
const POKEMON = require('../class/pokemon');
const pokemonsData = require('../data/pokemons');
const create = require('../util/createJSON');

let arr = [];
pokemonsData['Normal'].forEach((row, rowId) => {
    if(rowId > 0) arr.push(new POKEMON(row, pokemonsData.Normal[0]));
});

create('lib/pokemons.json', arr);
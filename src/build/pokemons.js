const POKEMON = require('../class/pokemon');
const pokemonsData = require('../data/pokemons');
const create = require('../util/createJSON');

let arr = [];
pokemonsData.normal.forEach((row, rowId) => {
    if(rowId > 0) arr.push(new POKEMON(row, pokemonsData.normal[0]));
});
pokemonsData.regional.forEach((row, rowId) => {
    if(rowId > 0) arr.push(new POKEMON(row, pokemonsData.regional[0]));
});

create('lib/pokemons.json', arr);
const xlsx = require('node-xlsx');
const source = xlsx.parse(`${__dirname}/../../source/pokemons.xlsx`);
let data = {};
source.forEach(sheet => {
    data[sheet.name] = sheet.data;
});

module.exports = data;
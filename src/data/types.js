const xlsx = require('node-xlsx');
const source = xlsx.parse(`${__dirname}/../../source/types.xlsx`);
const data = source[0]['data'];


module.exports = data;
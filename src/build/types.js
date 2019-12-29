const TYPE = require('../class/type');
const typesData = require('../data/types');
const create = require('../util/createJSON');

let arr = [];
typesData.forEach((row, rowId) => {
    if(rowId > 0) arr.push(new TYPE(row, typesData[0]));
});

create('lib/types.json', arr);
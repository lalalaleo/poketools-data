class POKEMON {
    constructor(data, keys) {
        keys.forEach((key, index) => {
            this[key] = data[index];
        });
    }
};

module.exports = POKEMON;
#!/bin/bash
rm -rf ./lib
mkdir lib
node ./src/build/games.js
node ./src/build/pokemons.js
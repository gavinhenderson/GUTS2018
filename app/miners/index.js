const DataStore = require('../data');

miners = [];

/**
 * Adds a data miner
 */
function addMiner(miner) {
    if (typeof (miner) != 'function') throw new Error('Miners must be a function');
    miners.push(miner);
}

/**
 * Mines data from a string
 */
function mineData(data) {
    miners.forEach(miner => {
        eval(miner);
        miner(data);
    });
    DataStore.incrementNumMessages();
}

function getMiners() { return miners };

var nlp = require('./nlp');
addMiner(nlp);

module.exports = {
    addMiner, mineData, getMiners
};

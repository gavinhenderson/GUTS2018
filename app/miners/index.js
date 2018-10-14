const DataStore = require('../data');

miners = [];

/**
 * Adds a data miner
 */
function addMiner(miner) {
    if (typeof (miner) != 'function') throw new Error('Miners must be a function');
    miners.push(miner);
}


var nlp = require('./nlp');
addMiner(nlp);

/**
 * Mines data from a string
 */
function mineData(data, cb) {
    // var responseData = {};
    // miners.forEach(miner => {
    //     eval(miner);
    //     miner(data, (minedData) => {
            
    //     });
    // });
    // // ^ because of hackathon hax, i'm just gonna bodge this:
    nlp(data, cb);
    DataStore.incrementNumMessages();
}

function getMiners() { return miners };


module.exports = {
    addMiner, mineData, getMiners
};

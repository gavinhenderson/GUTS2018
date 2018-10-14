var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./phoney_data');

module.exports = {
    getData: () => { return localStorage.getItem('phoneyData'); },
}
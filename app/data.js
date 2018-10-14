var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./phoney_data');

function getData() {
    return localStorage.getItem('phoneyData');
}

function getNumMessages() {
    let num = localStorage.getItem('phoneyNumMessages') || '0';
    return parseInt(num);
}

function incrementNumMessages() {
    localStorage.setItem('phoneyNumMessages', getNumMessages() + 1);
}

function getSentiment() {
    let sentimentJson = localStorage.getItem('phoneySentiment') || '[]';
    let sentiment = JSON.parse(sentimentJson);

    return sentiment;
}

function setSentiment(newSentiment) {
    let sentiment = getJson('phoneySentiment', '[]');

    sentiment.push(newSentiment);

    localStorage.setItem('phoneySentiment', JSON.stringify(sentiment));
}

function getAllEmotion() {
    let emotion = getJson('phoneyEmotion', '{"sadness":0,"joy":0,"fear":0,"disgust":0,"anger":0}')
    return emotion;
}

function setEmotion(emotion) {
    let savedEmotion = getAllEmotion();

    Object.keys(emotion).forEach(key => {
        let savedVal = savedEmotion[key] * getNumMessages();
        savedVal += emotion[key];
        savedVal /= (getNumMessages() + 1);
        savedEmotion[key] = savedVal;
    });

    setJson('phoneyEmotion', savedEmotion);
}

function getJson(key, def = '') {
    let json = localStorage.getItem(key) || def;
    return JSON.parse(json);
}

function setJson(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
}

function addEntity(entity) {
    let entities = getJson('phoneyEntities', '{}');

    if (entities[entity] != undefined) entities[entity]++;
    else entities[entity] = 1;

    setJson('phoneyEntities', entities);
}

function getEntities() {
    return getJson('phoneyEntities', '{}');
}

module.exports = {
    getData, getNumMessages, incrementNumMessages,
    getSentiment, setSentiment, getAllEmotion,
    setEmotion, getEntities, addEntity
}
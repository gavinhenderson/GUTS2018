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
    let sentimentJson = localStorage.getItem('phoneySentiment') || '[]';
    let sentiment = JSON.parse(sentimentJson);

    sentiment.push(newSentiment);

    localStorage.setItem('phoneySentiment', JSON.stringify(sentiment));
}

function getAllEmotion() {
    let emotionJson = localStorage.getItem('phoneyEmotion') || '{"sadness":0,"joy":0,"fear":0,"disgust":0,"anger":0}';
    let emotion = JSON.parse(emotionJson);

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

    localStorage.setItem('phoneyEmotion', JSON.stringify(savedEmotion));
}

module.exports = {
    getData, getNumMessages, incrementNumMessages,
    getSentiment, setSentiment, getAllEmotion,
    setEmotion
}
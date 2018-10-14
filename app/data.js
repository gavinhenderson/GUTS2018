var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./phoney_data');

module.exports = {
    getData: () => { return localStorage.getItem('phoneyData'); },

    getNumMessages: () => {
        return localStorage.getItem('phoneyNumMessages') || 0;
    },

    getSentiment: () => {
        let sentimentJson = localStorage.getItem('phoneySentiment') || '[]';
        let sentiment = JSON.parse(sentimentJson);

        return sentiment;
    },

    setSentiment: (newSentiment) => {
        let sentimentJson = localStorage.getItem('phoneySentiment') || '[]';
        let sentiment = JSON.parse(sentimentJson);

        sentiment.push(newSentiment);

        localStorage.setItem('phoneySentiment', JSON.stringify(sentiment));
    },

    getAllEmotion: () => {

    },

    setEmotion: (emotion) => {
        Object.keys(emotion).forEach(key => {
            
        });
    }
}
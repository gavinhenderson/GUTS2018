var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

var nlu = new NaturalLanguageUnderstandingV1({
  username: 'a349aae4-b173-4071-9bc0-51a83aff00bb',
  password: 'bkHaTOkAv6R2',
  version: '2018-04-05',
  url: 'https://gateway.watsonplatform.net/natural-language-understanding/api/'
});

const DataStore = require('../data');

module.exports = function(string, cb) {

    // Mine string
    nlu.analyze(
        {
            html: string,
            features: {
                "entities": {
                    "limit": 5
                },
                "emotion": {},
                "keywords": {
                    "emotion": true,
                    "sentiment": true,
                    "limit": 5
                },
                "sentiment": {}
            }
        },
        function(err, response) {
            if (err) console.log(err);
            else {
                console.log(JSON.stringify(response, null, 2));

                DataStore.setSentiment({ sentimentScore: response.sentiment.document.score, timestamp: + new Date() })
                DataStore.setEmotion(response.emotion.document.emotion);
                
                var entities = [];
                response.entities.forEach(entity => {
                    DataStore.addEntity(entity.text);
                });
                
                response.keywords.forEach(entity => {
                    entities.push(entity.text);
                });


                cb(entities);
            }
        }
    );

    return {};

};
const ClientCapability = require("twilio").jwt.ClientCapability;
const VoiceResponse = require("twilio").twiml.VoiceResponse;

const watson = require("watson-developer-cloud");
const watsonServiceUrl = "https://stream.watsonplatform.net/speech-to-text/api";
const watsonSpeech = new watson.SpeechToTextV1({
  username: "f182886f-e467-498c-92e2-794df620d6bc",
  password: "2KKVwBs8KJLq",
  url: watsonServiceUrl,
});
const watsonTokenManager = new watson.AuthorizationV1(
  watsonSpeech.getCredentials(),
);

const accountSid = "ACad0e3dada136e6d4e80b6311ef74903e";
const authToken = "1be34ed20265a15d8a05224c2273a384";

module.exports = (app, passport) => {
  app.get("/", (req, res) => {
    if (!req.user) {
      res.redirect("/login");
      return;
    }

    if (req.user.admin) {
      res.redirect("/admin");
      return;
    }

    res.render("home", { world: "world", user: req.user });
  });

  app.get("/admin", (req, res) => {
    if (!req.user) {
      res.redirect("/login");
      return;
    }
    if (!req.user.admin) {
      res.redirect("/");
      return;
    }
    res.render("admin", { user: req.user });
  });

  app.get("/watson/credentials", (req, res, next) => {
    watsonTokenManager.getToken((err, token) => {
    if (err) {
        next(err);
      } else {
        let credentials = {
          token,
          watsonServiceUrl,
        };
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.json(credentials);
      }
    });
  });

  app.get("/login", (req, res) => {
    if (req.user) res.redirect("/");
    res.render("login");
  });

  app.post("/login", (req, res) => {
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/",
    })(req, res);
  });

  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/login");
  });

  app.get("/token/:operator", (req, res) => {
    // put your Twilio API credentials here

    // put your Twilio Application Sid here
    const appSid = "AP17ffb925909af0668c0d61f985f448ee";
    //83eLSkyjvFRAcks5AWqaIdQ0a7LVnzCK

    const capability = new ClientCapability({
      accountSid: accountSid,
      authToken: authToken,
    });
    capability.addScope(
      new ClientCapability.OutgoingClientScope({
        applicationSid: appSid,
        clientName: req.params.operator,
      }),
    );
    capability.addScope(
      new ClientCapability.IncomingClientScope(req.params.operator),
    );
    const token = capability.toJwt();

    res.set("Content-Type", "application/jwt");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.send(token);
  });

  app.post("/voice", (req, res) => {
    // Use the Twilio Node.js SDK to build an XML response
    const twiml = new VoiceResponse();
    twiml.enqueue(
      {
        waitUrl: "/joinQueue",
      },
      "support",
    );
    // dial.client('adam');

    // dial.number('+447843531071');

    console.log(twiml.toString());

    // Render the response as XML in reply to the webhook request
    res.type("text/xml");
    res.send(twiml.toString());
  });

  app.post("/joinQueue", (req, res) => {
    // Use the Twilio Node.js SDK to build an XML response
    const twiml = new VoiceResponse();
    const dial = twiml.dial();
    twiml.say(
      { voice: "Polly.Brian" },
      "Welcome to Phony! We'll be putting you through to an operator shortly.",
    );
    twiml.enqueue(
      {
        waitUrl: "/music",
      },
      "support",
    );

    console.log(twiml.toString());

    // Render the response as XML in reply to the webhook request
    res.type("text/xml");
    res.send(twiml.toString());
  });

  app.post("/music", (req, res) => {
    console.log(req.body);

    // Use the Twilio Node.js SDK to build an XML response
    const twiml = new VoiceResponse();
    twiml.play(
      {
        loop: 0,
      },
      "wait.mp3",
    );

    console.log(twiml.toString());

    // Render the response as XML in reply to the webhook request
    res.type("text/xml");
    res.send(twiml.toString());
  });

  app.get('/connect/:operator', (req, res) => {
    
    var twilio = require('twilio');
    var client = twilio(accountSid, authToken);

    client.queues('QUa43f0558674af49083e1afeb88a6efa1')
     .fetch()
     .then(queue => {
       
      if(queue.currentSize > 0) {
        
        client.calls.create({
          from: '+441412806922',
          to: 'client:' + req.params.operator,
          url: 'https://handler.twilio.com/twiml/EH09e689e9bca54cef2725c8e3f0750edf'
          }).then(function () {
            console.log('Your phone should be ringing');
          }).catch(function (err) {
            console.error(err.message);
          });
          res.send('Connected');
      } else {
        res.send('Empty Queue');
      }

     })
     .done();

  });
};

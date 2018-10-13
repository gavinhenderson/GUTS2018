const uuidv4 = require("uuid/v4");

const users = [{
    number: "1",
    name: "Mitchell McJannett",
    title: "Forward Operator",
    clientName: "MitchellMcJannett",
  },
  {
    name: "Gavin Henderson",
    number: "2",
    title: "Backward Operator",
    clientName: "GavinHenderson",
  },
  {
    name: "Jay Bennett",
    number: "3",
    title: "Head Operator",
    clientName: "JayBennett",
  },
  {
    name: "Dean Beggs",
    number: "4",
    title: "The Operator",
    clientName: "DeanBeggs",
  },
];

users.forEach((user) => {
  user.id = uuidv4();
});

module.exports = users;
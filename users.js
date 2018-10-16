const uuidv4 = require("uuid/v4");

const users = [
  {
    number: "1",
    name: "Mitchell McJannett",
    title: "Forward Operator",
    clientName: "MitchellMcJannett",
    admin: false,
  },
  {
    name: "Gavin Henderson",
    number: "2",
    title: "Backward Operator",
    clientName: "GavinHenderson",
    admin: true,
  },
  {
    name: "Jay Bennett",
    number: "3",
    title: "Head Operator",
    clientName: "JayBennett",
    admin: false,
  },
  {
    name: "Dean Beggs",
    number: "4",
    title: "The Operator",
    clientName: "DeanBeggs",
    admin: false,
  },
  {
    name: "Conor Haining",
    number: "5",
    title: "The Big Man",
    clientName: "ConorHaining",
    admin: false,
  },
];

users.forEach((user) => {
  user.id = uuidv4();
});

module.exports = users;

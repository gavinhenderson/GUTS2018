const uuidv4 = require("uuid/v4");

const users = [
  {
    number: "07597347312",
    name: "Mitchell McJannett",
    title: "Forward Operator",
    clientName: "MitchellMcJannett",
    admin: false,
  },
  {
    name: "Gavin Henderson",
    number: "07414525394",
    title: "Backward Operator",
    clientName: "GavinHenderson",
    admin: true,
  },
  {
    name: "Jay Bennett",
    number: "07754611783",
    title: "Head Operator",
    clientName: "JayBennett",
    admin: false,
  },
  {
    name: "Dean Beggs",
    number: "07495462969",
    title: "The Operator",
    clientName: "DeanBeggs",
    admin: false,
  },
  {
    name: "Conor Haining",
    number: "07412939773",
    title: "The Big Man",
    clientName: "ConorHaining",
    admin: false,
  },
];

users.forEach((user) => {
  user.id = uuidv4();
});

module.exports = users;

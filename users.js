const uuidv4 = require("uuid/v4");

const users = [{
    number: "07597347312",
    name: "Mitchell McJannett",
    title: "Forward Operator",
    clientName: "MitchellMcJannett",
  },
  {
    name: "Gavin Henderson",
    number: "07414525394",
    title: "Backward Operator",
    clientName: "GavinHenderson",
  },
  {
    name: "Jay Bennett",
    number: "07754611783",
    title: "Head Operator",
    clientName: "JayBennett",
  },
  {
    name: "Dean Beggs",
    number: "07495462969",
    title: "The Operator",
    clientName: "DeanBeggs",
  },
];

users.forEach((user) => {
  user.id = uuidv4();
});

module.exports = users;
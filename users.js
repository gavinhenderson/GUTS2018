const uuidv4 = require("uuid/v4");

const users = [
  {
    number: "07597347312",
    name: "Mitchell McJannett",
    title: "Forward Operator",
  },
  {
    name: "Gavin Henderson",
    number: "07414525394",
    title: "Backward Operator",
  },
  {
    name: "Jay Bennett",
    number: "07754611783",
    title: "Middle Operator",
  },
  {
    name: "Dean Beggs",
    number: "07495462969",
    title: "The Operator",
  },
];

users.forEach((user) => {
  user.id = uuidv4();
});

module.exports = users;

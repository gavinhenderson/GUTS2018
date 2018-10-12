const uuidv4 = require("uuid/v4");

const users = [
  {
    number: "07597347312",
    name: "Mitchell McJannett",
  },
  {
    name: "Gavin Henderson",
    number: "07414525394",
  },
  {
    name: "Jay Bennett",
    number: "07754611783",
  },
  {
    name: "Dean Beggs",
    number: "07495462969",
  },
];

users.forEach((user) => {
  user.id = uuidv4();
});

module.exports = { users };

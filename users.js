const uuidv4 = require("uuid/v4");

const users = [
  {
    number: "1",
    name: "Mitchell McJannett",
  },
  {
    name: "Gavin Henderson",
    number: "2",
  },
  {
    name: "Jay Bennett",
    number: "3",
  },
  {
    name: "Dean Beggs",
    number: "4",
  },
];

users.forEach((user) => {
  user.id = uuidv4();
});

module.exports = users;

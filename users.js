const uuidv4 = require("uuid/v4");

const users = [
  {
    number: "1",
    name: "Mitchell McJannett",
    title: "Forward Operator",
  },
  {
    name: "Gavin Henderson",
    number: "2",
    title: "Backward Operator",
  },
  {
    name: "Jay Bennett",
    number: "3",
    title: "Middle Operator",
  },
  {
    name: "Dean Beggs",
    number: "4",
    title: "The Operator",
  },
];

users.forEach((user) => {
  user.id = uuidv4();
});

module.exports = users;

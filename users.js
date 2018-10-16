const uuidv4 = require("uuid/v4");

const users = [
  {
<<<<<<< HEAD
    number: "1",
=======
    number: "07597347312",
>>>>>>> b8d09c395f7f8cf9a45eff428c861369c0698700
    name: "Mitchell McJannett",
    title: "Forward Operator",
    clientName: "MitchellMcJannett",
    admin: false,
  },
  {
    name: "Gavin Henderson",
<<<<<<< HEAD
    number: "2",
=======
    number: "07414525394",
>>>>>>> b8d09c395f7f8cf9a45eff428c861369c0698700
    title: "Backward Operator",
    clientName: "GavinHenderson",
    admin: true,
  },
  {
    name: "Jay Bennett",
<<<<<<< HEAD
    number: "3",
=======
    number: "07754611783",
>>>>>>> b8d09c395f7f8cf9a45eff428c861369c0698700
    title: "Head Operator",
    clientName: "JayBennett",
    admin: false,
  },
  {
    name: "Dean Beggs",
<<<<<<< HEAD
    number: "4",
=======
    number: "07495462969",
>>>>>>> b8d09c395f7f8cf9a45eff428c861369c0698700
    title: "The Operator",
    clientName: "DeanBeggs",
    admin: false,
  },
  {
    name: "Conor Haining",
<<<<<<< HEAD
    number: "5",
=======
    number: "07412939773",
>>>>>>> b8d09c395f7f8cf9a45eff428c861369c0698700
    title: "The Big Man",
    clientName: "ConorHaining",
    admin: false,
  },
];

users.forEach((user) => {
  user.id = uuidv4();
});

module.exports = users;

const router = require("express").Router();
const bcrypt = require("bcryptjs");
const generateToken = require("../middleware/generateToken");

const users = require('../data/models/usersModel')

router.post("/register", (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
    user.password = hash;
  
    users
      .add(user)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
        console.error(error);
        res.status(500).json(error);
      });
  });
  
  router.post("/login", (req, res) => {
    let { username, password } = req.body;
    users
      .findByUsername({username})
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user);
          res.status(200).json({
            id: user.id,
            message: `Welcome ${user.username}`,
            token,
          });
        } else {
          res.status(401).json({ message: "Invalid Credentials" });
        }
      });
  });
  
  module.exports = router;
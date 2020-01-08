const router = require("express").Router();
const bcrypt = require("bcryptjs");
const generateToken = require("./generateToken");

// TODO: Login && Register Routes
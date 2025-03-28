const express = require('express');
const UserCtrl = require('../controllers/user.controller');

const userRoute = express.Router();

userRoute.post("/signup", UserCtrl.getUser)
userRoute.post("/login", () => { })
userRoute.get("/auth/:token", () => { })

module.exports = userRoute;
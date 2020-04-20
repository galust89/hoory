const jwt = require("jwt-simple");
const config = require("../config");
const mongoose = require("mongoose");

const User = mongoose.model("user");

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.getOne = (req, res) => {
  const { user } = req;
  User.findOne({ _id: user._id })
    .then((user) => {
      res.json({
        error: false,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      });
    })
    .catch((e) => {
      console.log(e);
      res.json({ error: "There is no user by this token", assistants: [] });
    });
};

exports.signin = function (req, res) {
  res.send({ token: tokenForUser(req.user), user: req.user });
};

exports.signup = function (req, res, send) {
  const email = req.body.email;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  if (!email || !password || !firstName || !lastName) {
    return res.status(422).send({
      error: "You must provide firstName, lastName, email and password",
    });
  }
  User.findOne({ email: email }, function (err, existingUser) {
    if (err) {
      return next(err);
    }
    if (existingUser) {
      return res.status(422).send({ error: "Email is in use" });
    }

    const user = new User({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });

    user.save(function (err) {
      if (err) {
        return next(err);
      }
      res.json({ token: tokenForUser(user) });
    });
  });
};

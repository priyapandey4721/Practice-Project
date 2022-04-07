const userModel = require("../models/UserSchema");
const bcrypt = require("bcrypt");
const UserControllers = {
  
  register: async (req, res) => {
    console.log(req.body);
    let username = req.body.username;
    let email = req.body.email;
    let contactnumber = req.body.contactnumber;
    let password = req.body.password;
    const passwordHash = await bcrypt.hash(password, 10);
    let ins = new userModel({
      username: username,
      email: email,
      contactnumber:contactnumber,
      password: passwordHash,
    });
    const user = await userModel.findOne({ email: email });
    if (user) {
      res.send({ err: "User Already Exixts" });
    } else {
      ins.save((err) => {
        if (err) {
          throw err
        } else {
          res.send({ msg: "Registered Successfully" });
        }
      });
    }
  },
  };
module.exports = UserControllers;
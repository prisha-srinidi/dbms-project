const UserLoginHandler = (app, db) => {
  app.get("/login/user", (req, res) => {
    //variables
    const userUserName = req.body.userUserName;
    const userPassword = req.body.userPassword;

    //query
    const sqlSelect =
      "SELECT * FROM users WHERE username = ? AND pwd = ? AND user_type='user'";

    //
    db.query(sqlSelect, [userUserName, userPassword], (err, result) => {
      if (err) {
        res.send({ err: err });
        console.log("**ERROR**");
      }
      if (result.length > 0) {
        console.log("user logged in");
        res.json("user logged in!");
      } else {
        res.send({ message: "wrong username/password combination!" });
        console.log("**INVALID COMBINATION**");
      }
    });
  });
};

export default UserLoginHandler;

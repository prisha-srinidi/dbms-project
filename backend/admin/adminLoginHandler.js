//only allowing admin to login, not to register.
//only one admin that already exists in the database can login
import bodyParser from "body-parser";
var urlencodedParser = bodyParser.urlencoded({ extended: false }); //middileware

//module export
const adminLoginHandler = (app, db) => {
  app.post("/login/admin", (req, res) => {
    //variables
    const userName = req.body.adminName;
    const password = req.body.adminPwd;

    //query
    sqlSelect =
      "SELECT * FROM users WHERE username= ? AND pwd=? AND user_type='Admin'";

    //
    db.query(sqlSelect, [userName, password], (err, result) => {
      if (err) {
        res.send({ err: err });
        console.log("**ERROR**");
      }
      /////
      if (result.length > 0) {
        res.send(result);
        console.log("**RESULT SENT TO FRONT END**");
      } else {
        res.send({ message: "wrong username/password combination!" });
        console.log("**INVALID COMBINATION**");
      }
    });
  });
};

export default adminLoginHandler;

//module export
const userRegisterHandler = (app, db) => {
  app.post("/reg/user", (req, res) => {
    //variables
    const userFName = req.body.userFName;
    const userLName = req.body.userLName;
    const userMail = req.body.userMail;
    const userPhone = req.body.userPhone;
    const userUserName = req.body.userUserName;
    const userPassword = req.body.userPassword;

    //query
    const sqlInsert1 =
      "INSERT INTO Customer (FirstName, LastName, Email,Phone, password, userID) VALUES (?,?,?,?,?)";

    const sqlInsert2 = "INSERT INTO users (username,pwd) VALUES (?,?)";

    const sqlDelete1 = "DELETE  FROM Customers WHERE user_id= ?";

    /////
    db.query(sqlInsert2, [userUserName, userPassword], (err, result) => {
      if (err) console.log(err + " **ERROR INSERTING USER** ");
      else {
        var user_id = result.insertId;
        //////
        db.query(
          sqlInsert1,
          [userFName, userLName, userMail, userPhone, userPassword, user_id],
          (err, result1) => {
            if (err) {
              console.log(err + "**ERROR INSERTING TO USER-DETAILS**");
              //////
              db.query(sqlDelete1, [user_id], (err, result2) => {
                if (err) console.log(err);
                else {
                  console.log("**DELETED DUE TO DUPLICATION**");
                  res.send({ message: "Username already exist" });
                }
              });
            } else {
              res.send({ message: "User Registration Successfull!" });
              console.log("**USER REGISTRATION SUCCESSFULL**");
            }
          }
        );
      }
    });
  });
};

export default UserRegisterHandler;

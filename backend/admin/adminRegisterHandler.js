// //var popup =require('popups')

// //module export
// const EmployeeRegisterHandler = (app, db) => {
//     app.post("/reg/admin", (req, res) => {
//       //variables
//       const userFname = req.body.userFname;
//       const userLname = req.body.userLname;
//       const userMail = req.body.userMail;
//       const userPhone = req.body.userPhone;
//       //   const userAddress = req.body.userAddress;
//       const userName = req.body.userName;
//       const userPassword = req.body.userPassword;

//       //query
//       const sqlInsert1 =
//         "INSERT INTO  (FirstName,LastName, Email,Phone, password) VALUES (?,?,?,?,?)";

//       const sqlInsert2 = "INSERT INTO users (userName,pwd) VALUES (?,?)";

//       const sqlDelete = "DELETE  FROM users WHERE userID= ?";

//       //s
//       db.query(
//         sqlInsert1,
//         [userFname, userLname, userMail, userPhone, userPassword],
//         (err, result) => {
//           if (err) {
//             console.log(err + "THAT'S AN ERROR!!!");
//           } else {
//             var userID = result.insertId;
//             //
//             db.query(sqlInsert2, [userName, userPassword], (err, result1) => {
//               if (err) {
//                 //
//                 console.log(err);
//                 db.query(sqlDelete, [userID], (err, result2) => {
//                   if (err) console.log(err);
//                   else {
//                     console.log("user already exists!");
//                     res.send({ message: "USER ALREADY EXISTS!" });
//                   }
//                 });
//               } else {
//                 console.log("Customer Registered Successfully");
//                 res.send({ message: "CUSTOMER REGISTRATION SUCCESSFULL!" });
//               }
//             });
//           }
//         }
//       );
//     });
//   };

//   export default userRegisterHandler;

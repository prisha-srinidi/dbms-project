import mysql from "mysql";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

//user login and registration
import userLoginHandler from "./user/userLoginHandler.js";
import userRegisterHandler from "./user/userRegisterHandler.js";

//admin login
import adminLoginHandler from "./admin/adminLoginHandler.js";

//dashboard handler
import dashboardHandler from "./database/dashboardHandler.js";

//routes
import adminSide from "./routes/adminSide.js";
import search from "./routes/search.js";

//booking
import booking from "./booking/booking.js"

var app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "C1@55r00m",
  database: "exploraquest",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

//user authentication
userRegisterHandler(app, db);
userLoginHandler(app, db);

//admin authentication
adminLoginHandler(app, db);

//dashboard authentication
dashboardHandler(app, db);

//routes
adminSide(app, db);
search(app, db);

//booking
booking(app,db);

app.listen(8800, () => {
  console.log("Connected to backend.");
});

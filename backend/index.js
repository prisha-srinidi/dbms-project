import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "C1@55r00m",
  database: "exploraquest",
});

app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/packages", (req, res) => {
  const q = "SELECT * FROM package";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/packages", (req, res) => {
  const q =
    "INSERT INTO packages(`name`, `destination`, `duration`, `cost`,`description`) VALUES (?)";

  const values = [
    req.body.name,
    req.body.destination,
    req.body.duration,
    req.body.cost,
    req.body.description,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete("/packages/:id", (req, res) => {
  const pId = req.params.id;
  const q = " DELETE FROM packages WHERE id = ? ";

  db.query(q, [pId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put("/packages/:id", (req, res) => {
  const pId = req.params.id;
  const q =
    "UPDATE packages SET `name`= ?, `destination`= ?, `duration`= ?, `cost`= ?, `description`=? WHERE id = ?";

  const values = [
    req.body.name,
    req.body.destination,
    req.body.duration,
    req.body.cost,
    req.body.description,
  ];

  db.query(q, [...values, pId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Connected to backend.");
});

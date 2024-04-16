const dashboardHandler = (app, db) => {
  app.get("/home", (req, res) => {
    //query
    const sqlSelect = "SELECT * from package;";

    //db search
    db.query(sqlSelect, (err, result) => {
      res.send(result);
      //console.log("blood from server", result);
    });
  });
};

export default dashboardHandler;

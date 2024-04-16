const search = (app, db) => {
  app.get("/login/user/package", (req, res) => {
    const sqlSelect = "select * from package";
    db.query(sqlSelect, (err, result) => {
      if (err) {
        console.log("**ERROR**" + err);
      }
      if (result.length > 0) {
        res.send(result);
      }
    });
  });
};

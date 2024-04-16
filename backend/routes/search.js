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

  app.get("/login/user/package/:pname", (req, res) => {
    const pname = req.params.pname;
    const sqlSelect = "select * from package where name=?";
    db.query(sqlSelect, pname, (err, result) => {
      if (err) {
        console.log("**ERROR**" + err);
      }
      if (result.length > 0) {
        res.send(result);
      }
    });
  });

  app.get("/login/user/package/:dname", (req, res) => {
    const dname = req.params.dname;
    const sqlSelect = "select * from package where destination=?";
    db.query(sqlSelect, dname, (err, result) => {
      if (err) {
        console.log("**ERROR**" + err);
      }
      if (result.length > 0) {
        res.send(result);
      }
    });
  });

  app.get("/login/user/package/:amt", (req, res) => {
    const amt = req.params.amt;
    const sqlSelect = "select * from package where cost<=?";
    db.query(sqlSelect, amt, (err, result) => {
      if (err) {
        console.log("**ERROR**" + err);
      }
      if (result.length > 0) {
        res.send(result);
      }
    });
  });

  app.get("/login/user/package/:dur", (req, res) => {
    const dur = req.params.dur;
    const sqlSelect = "select * from package where dur<=?";
    db.query(sqlSelect, dur, (err, result) => {
      if (err) {
        console.log("**ERROR**" + err);
      }
      if (result.length > 0) {
        res.send(result);
      }
    });
  });

  app.get("/login/user/flight/:pid", (req, res) => {
    const pid = req.params.pid;
    const sqlSelect = "select * from flight f, package_details p where p.";
    db.query(sqlSelect, pname, (err, result) => {
      if (err) {
        console.log("**ERROR**" + err);
      }
      if (result.length > 0) {
        res.send(result);
      }
    });
  });
};

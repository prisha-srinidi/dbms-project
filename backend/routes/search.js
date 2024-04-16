const search = (app, db) => {
  app.get("/user/package", (req, res) => {
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

  app.get("/user/package/:pname", (req, res) => {
    const pname = req.params.pname;
    console.log(pname);
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

  app.get("/user/package/destination/:dname", (req, res) => {
    const dname = req.params.dname;
    console.log(dname);
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

  app.get("/user/package/cost/:amt", (req, res) => {
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

  app.get("/user/package/duration/:dur", (req, res) => {
    const dur = req.params.dur;
    const sqlSelect = "select * from package where duration=?";
    db.query(sqlSelect, dur, (err, result) => {
      if (err) {
        console.log("**ERROR**" + err);
      }
      if (result.length > 0) {
        res.send(result);
      }
    });
  });

  app.get("/user/flight/:pid", (req, res) => {
    const pid = req.params.pid;
    const sqlSelect =
      "select * from flight f, package_details p where p.FlightID=f.FlightID and p.PackageID=?";
    db.query(sqlSelect, pid, (err, result) => {
      if (err) {
        console.log("**ERROR**" + err);
      }
      if (result.length > 0) {
        res.send(result);
      }
    });
  });

  app.get("/user/hotel/:pid", (req, res) => {
    const pid = req.params.pid;
    const sqlSelect =
      "select * from hotel h, package_details p where p.HotelID=h.HotelID and p.PackageID=?";
    db.query(sqlSelect, pid, (err, result) => {
      if (err) {
        console.log("**ERROR**" + err);
      }
      if (result.length > 0) {
        res.send(result);
      }
    });
  });

  app.get("/user/activity/:pid", (req, res) => {
    const pid = req.params.pid;
    const sqlSelect =
      "select * from activity a, package_details p where a.ActivityID=p.ActivityID and p.PackageID=?";
    db.query(sqlSelect, pid, (err, result) => {
      if (err) {
        console.log("**ERROR**" + err);
      }
      if (result.length > 0) {
        res.send(result);
      }
    });
  });
};

export default search;

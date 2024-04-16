const adminSide = (app, db) => {
  app.get("/admin/package", (req, res) => {
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

  app.delete("/admin/package/:pid", (req, res) => {
    const pid = req.params.pid;

    const sqlDelete = "DELETE FROM package WHERE PackageID= ?";
    db.query(sqlDelete, pid, (err, result) => {
      if (err) {
        console.log("**ERROR**" + err);
        res.json("error in deleting package");
      } else {
        res.send({ message: "package deleted!" });
      }
    });
  });

  app.post("/admin/package", (req, res) => {
    const q =
      "insert into package (name,Destination,Duration,Cost,Description) values (?)";

    // const qu =
    //   "insert into package_details ('packageid','activityid','hotelid','flightid','departuredate','returndate') values (?)";

    const values = [
      req.body.name,
      req.body.Destination,
      req.body.Duration,
      req.body.Cost,
      req.body.Description,
    ];
    db.query(q, [values], (err, data) => {
      if (err) res.json(err);
      return res.json("package has been created successfully");
    });
  });

  app.get("/admin/hotel", (req, res) => {
    const q = "select * from hotel";

    db.query(q, (err, result) => {
      if (err) res.json(err);
      if (result.length > 0) {
        res.send(result);
      }
    });
  });

  app.post("/admin/hotel", (req, res) => {
    const q =
      "insert into hotel (name,City,Rating,RoomType,PricePerNight) values (?)";

    // const qu =
    //   "insert into package_details ('packageid','activityid','hotelid','flightid','departuredate','returndate') values (?)";

    const values = [
      req.body.name,
      req.body.City,
      req.body.Rating,
      req.body.RoomType,
      req.body.PricePerNight,
    ];
    db.query(q, [values], (err, data) => {
      if (err) res.json(err);
      return res.json("hotel has been added successfully");
    });
  });

  app.delete("/admin/hotel/:hid", (req, res) => {
    const hid = req.params.hid;
    const q = "DELETE FROM hotel WHERE HotelID= ?";

    db.query(q, hid, (err, result) => {
      if (err) res.json(err);
      else {
        res.send({ message: "hotel deleted!" });
      }
    });
  });

  app.get("/admin/flight", (req, res) => {
    const q = "select * from flight";

    db.query(q, (err, result) => {
      if (err) res.json(err);
      if (result.length > 0) {
        res.send(result);
      }
    });
  });

  app.post("/admin/flight", (req, res) => {
    const q =
      "insert into flight (Airline,DepartureCity,ArrivalCity,DepartureTime,ArrivalTime) values (?)";

    // const qu =
    //   "insert into package_details ('packageid','activityid','hotelid','flightid','departuredate','returndate') values (?)";

    const values = [
      req.body.Airline,
      req.body.DepartureCity,
      req.body.ArrivalCity,
      req.body.DepartureTime,
      req.body.ArrivalTime,
    ];
    db.query(q, [values], (err, data) => {
      if (err) res.json(err);
      return res.json("flight has been added successfully");
    });
  });

  app.delete("/admin/flight/:fid", (req, res) => {
    const fid = req.params.fid;
    const q = "DELETE FROM flight WHERE FlightID= ?";

    db.query(q, fid, (err, result) => {
      if (err) res.json(err);
      else {
        res.send({ message: "flight deleted!" });
      }
    });
  });

  app.get("/admin/activity", (req, res) => {
    const q = "select * from activity";

    db.query(q, (err, result) => {
      if (err) res.json(err);
      if (result.length > 0) {
        res.send(result);
      }
    });
  });

  app.post("/admin/activity", (req, res) => {
    const q =
      "insert into activity (Name,Location,Description,Cost) values (?)";

    // const qu =
    //   "insert into package_details ('packageid','activityid','hotelid','flightid','departuredate','returndate') values (?)";

    const values = [
      req.body.Name,
      req.body.Location,
      req.body.Description,
      req.body.Cost,
    ];
    db.query(q, [values], (err, data) => {
      if (err) res.json(err);
      return res.json("activity has been added successfully");
    });
  });

  app.delete("/admin/activity/:aid", (req, res) => {
    const aid = req.params.aid;
    const q = "DELETE FROM activity WHERE ActivityID= ?";

    db.query(q, aid, (err, result) => {
      if (err) res.json(err);
      else {
        res.send({ message: "activity deleted!" });
      }
    });
  });

  app.get("/admin/packagedetails", (req, res) => {
    const q = "select * from package_details";

    db.query(q, (err, result) => {
      if (err) res.json(err);
      if (result.length > 0) {
        res.send(result);
      }
    });
  });

  app.post("/admin/packagedetails", (req, res) => {
    const q =
      "insert into package_details ('PackageID','ActivityID','HotelID','FlightID','DepartureDate','ReturnDate') values (?)";

    // const qu =
    //   "insert into package_details ('packageid','activityid','hotelid','flightid','departuredate','returndate') values (?)";

    const values = [
      req.body.PackageID,
      req.body.ActivityID,
      req.body.HotelID,
      req.body.FlightID,
      req.body.DepartureDate,
      req.body.ReturnDate,
    ];
    db.query(q, [values], (err, data) => {
      if (err) res.json(err);
      return res.json("package detail has been added successfully");
    });
  });

  app.get("/admin/booking", (req, res) => {
    const q = "select * from booking";

    db.query(q, (err, result) => {
      if (err) res.json(err);
      if (result.length > 0) {
        res.send(result);
      }
    });
  });

  app.get("/admin/payment", (req, res) => {
    const q = "select * from payment";

    db.query(q, (err, result) => {
      if (err) res.json(err);
      if (result.length > 0) {
        res.send(result);
      }
    });
  });

  app.delete("/admin/user/:uid", (req, res) => {
    const uid = req.params.uid;
    const q = "DELETE FROM users WHERE userID= ? and user_type='user'";

    db.query(q, uid, (err, result) => {
      if (err) res.json(err);
      else {
        res.send({ message: "user deleted!" });
      }
    });
  });
};

export default adminSide;

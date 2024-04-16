const booking =(app,db)=>{
    app.post("/user/booking", (req, res) => {
        const q1 = "insert into booking (CustomerID, PackageID, BookingDate, Status, TotalCost) values (?) ";
        const q2="select CustomerID from customer where email=? ";
        const q4="select cost from package where packageid=?";
        const val1=req.body.email;
        var status="Confirmed";
        var totcost=0;
        


        db.query(q2,val1, (err, result) => {
            if (err) {
                console.log("**ERROR**" + err);
            }
            if (result.length > 0) {
                //means that we have got the customerid
                
                  var vala=result.CustomerID;
                  

                  db.query(q4,req.body.PackageID, (err,resb)=>{
                    if(err) {
                        console.log(err);
                        res.json(err);
                    }
                    if(resb>0){
                        totcost=resb.cost;
                    }
                });
                const val2 = [
                    result.CustomerID,
                    req.body.PackageID,
                    req.body.BookingDate,
                    status,
                    totcost
                  ];
                db.query(q1,[val2],(err,res2) => {
                    if(err){
                        console.log("**ERROR**" + err);
                        res.json(err);
                    }
                    else{
                        res.json("booking successfully registered");
                    }  
                });
            }
        });
    });
    
}

export default booking;
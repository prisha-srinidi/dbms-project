ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'C1@55r00m';
CREATE TABLE Customer (
  CustomerID int NOT NULL AUTO_INCREMENT,
  FirstName varchar(255) NOT NULL,
  LastName varchar(255) NOT NULL,
  Email varchar(255) UNIQUE, -- Ensures unique email addresses
  Phone bigint NOT NULL,
  password varchar(255) NOT NULL,
  userID int,
  PRIMARY KEY (CustomerID),
  FOREIGN KEY (userID) REFERENCES Users(userID) ON DELETE CASCADE ON UPDATE CASCADE
);
-- drop table customer;
-- drop table booking;
-- drop table users;
-- drop table package;
-- drop table package_details;
-- drop table flight;
-- drop table hotel;
-- drop table activity;
-- drop table payment;

CREATE TABLE Package (
  PackageID int NOT NULL AUTO_INCREMENT,
  Name varchar(255) NOT NULL,
  Destination varchar(255) NOT NULL,
  Duration int NOT NULL,
  Cost decimal(10,2) NOT NULL,
  Description text,
  PRIMARY KEY (PackageID)
);

CREATE TABLE Booking (
  BookingID int NOT NULL AUTO_INCREMENT,
  CustomerID int NOT NULL,
  PackageID int NOT NULL,
  BookingDate datetime NOT NULL,
  Status varchar(255) NOT NULL,
  TotalCost decimal(10,2) NOT NULL,
  PRIMARY KEY (BookingID),
  FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (PackageID) REFERENCES Package(PackageID) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Package_Details (
  PackageID int NOT NULL,
  ActivityID int,
  HotelID int,
  FlightID int,
  DepartureDate date,
  ReturnDate date,
  FOREIGN KEY (PackageID) REFERENCES Package(PackageID) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (ActivityID) REFERENCES Activity(ActivityID) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (HotelID) REFERENCES Hotel(HotelID) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (FlightID) REFERENCES Flight(FlightID) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Flight (
  FlightID int NOT NULL AUTO_INCREMENT,
  Airline varchar(255) NOT NULL,
  DepartureCity varchar(255) NOT NULL,
  ArrivalCity varchar(255) NOT NULL,
  DepartureTime time NOT NULL,
  ArrivalTime time NOT NULL,
  PRIMARY KEY (FlightID)
);

CREATE TABLE Hotel (
  HotelID int NOT NULL AUTO_INCREMENT,
  Name varchar(255) NOT NULL,
  City varchar(255) NOT NULL,
  Rating decimal(2,1) NOT NULL,
  RoomType varchar(255) NOT NULL,
  PricePerNight decimal(10,2) NOT NULL,
  PRIMARY KEY (HotelID)
);

CREATE TABLE Activity (
  ActivityID int NOT NULL AUTO_INCREMENT,
  Name varchar(255) NOT NULL,
  Location varchar(255) NOT NULL,
  Description text,
  Cost decimal(10,2) NOT NULL,
  PRIMARY KEY (ActivityID)
);

CREATE TABLE Payment (
  PaymentID int NOT NULL AUTO_INCREMENT,
  BookingID int NOT NULL,
  Amount decimal(10,2) NOT NULL,
  PaymentDate datetime NOT NULL,
  Method varchar(255) NOT NULL,
  Status varchar(255) NOT NULL,
  PRIMARY KEY (PaymentID),
  FOREIGN KEY (BookingID) REFERENCES Booking(BookingID) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Users (
  userID int NOT NULL AUTO_INCREMENT,
  user_type varchar(255) NOT NULL,
  username varchar(255) NOT NULL,
  pwd varchar(255) NOT NULL,
  PRIMARY KEY (userID)
);

ALTER TABLE Users
ALTER COLUMN user_type SET DEFAULT 'user';



-- Users (Ensure valid user_type values: example 'Admin', 'Customer')
INSERT INTO Users (user_type, username, pwd) VALUES ('Admin', 'admin_user', 'securepassword');
INSERT INTO Users (user_type, username, pwd) VALUES ('Customer', 'jane_doe', 'janespwd');

-- Flight
INSERT INTO Flight (Airline, DepartureCity, ArrivalCity, DepartureTime, ArrivalTime) 
VALUES ('JetStar', 'Sydney', 'Melbourne', '08:00:00', '09:30:00');

-- Hotel
INSERT INTO Hotel (Name, City, Rating, RoomType, PricePerNight) 
VALUES ('Grand View', 'Melbourne', 4.5, 'Deluxe', 150.00);

-- Activity
INSERT INTO Activity (Name, Location, Description, Cost) 
VALUES ('Skydiving', 'Melbourne', 'Experience a thrilling freefall', 250.00);

-- Customer
INSERT INTO Customer (FirstName, LastName, Email, Phone, password, userID)
VALUES ('Jane', 'Doe', 'jane.doe@email.com', 1234567890, 'janespwd', 2); -- Reference existing userID 

-- Package
INSERT INTO Package (Name, Destination, Duration, Cost, Description)
VALUES ('Melbourne Getaway', 'Melbourne', 3, 500.00, 'City escape with activities'); 

-- Package_Details
-- Assume FlightID 1, HotelID 1, ActivityID 1 exist 
INSERT INTO Package_Details (PackageID, ActivityID, HotelID, FlightID, DepartureDate, ReturnDate)
VALUES (1, 1, 1, 1, '2024-04-20', '2024-04-23');

-- Booking
INSERT INTO Booking (CustomerID, PackageID, BookingDate, Status, TotalCost)
VALUES (1, 1, '2024-04-15', 'Confirmed', 600.00); -- Adjust TotalCost if needed

-- Payment
INSERT INTO Payment (BookingID, Amount, PaymentDate, Method, Status)
VALUES (1, 600.00, '2024-04-15', 'Credit Card', 'Paid');

select * from users;
update users
set user_type='user' where userID=2;

CREATE TABLE Contact (
    ContactID INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(255) NOT NULL,
    LastName VARCHAR(255) NOT NULL,
    Email VARCHAR(255),
    Phone VARCHAR(50),
    Address VARCHAR(255),
    DateTimeCreated DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    DateTimeModified DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE Disciplines (
    DisciplineID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Description TEXT,
    DateTimeCreated DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    DateTimeModified DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE Positions (
    PositionID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    OpeningDate DATE NOT NULL,
    ClosingDate DATE,
    Description TEXT,
    DisciplineID INT,
    DateTimeCreated DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    DateTimeModified DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (DisciplineID) REFERENCES Disciplines(DisciplineID)
);

CREATE TABLE Applications (
    ApplicationID INT AUTO_INCREMENT PRIMARY KEY,
    ContactID INT,
    PositionID INT UNIQUE,
    Status VARCHAR(255) NOT NULL,
    DateTimeCreated DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    DateTimeModified DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (ContactID) REFERENCES Contact(ContactID),
    FOREIGN KEY (PositionID) REFERENCES Positions(PositionID)
);

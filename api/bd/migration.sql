CREATE TABLE room (
    id INT NOT NULL AUTO_INCREMENT,
    level INT NOT NULL,
    division VARCHAR(1) NULL,
    createdAt DATETIME NULL,
    updatedAt DATETIME NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE student (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NULL,
    lastname VARCHAR(255) NULL,
    gender VARCHAR(255) NULL,
    birthDate DATETIME NULL,
    createdAt DATETIME NULL,
    updatedAt DATETIME NULL,
    roomId INT NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_room` FOREIGN KEY (`roomId`) REFERENCES `room` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) NULL,
    createdAt DATETIME NULL,
    updatedAt DATETIME NULL,
    PRIMARY KEY (`id`)
);
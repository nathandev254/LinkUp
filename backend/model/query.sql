CREATE TABLE users (
    user_id INT PRIMARY KEY IDENTITY(1,1),
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
	firstname VARCHAR(255),
	lastname VARCHAR(255),
    created_at DATETIME DEFAULT GETDATE()
);


CREATE TABLE posts (
    post_id INT IDENTITY(1,1) PRIMARY KEY,
    user_id INT,
    description NVARCHAR(MAX),
    timestamp DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE comments (
    comment_id INT IDENTITY(1,1) PRIMARY KEY,
    user_id INT,
    post_id INT,
    description NVARCHAR(MAX),
    Timestamp DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (post_id) REFERENCES posts(post_id)
);

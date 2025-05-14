CREATE TABLE IF NOT EXISTS movie (
                       id BIGINT AUTO_INCREMENT PRIMARY KEY,
                       title VARCHAR(255) NOT NULL,
                       genre VARCHAR(255),
                       release_year INT,
                       plot_description TEXT,
                       price INT
);
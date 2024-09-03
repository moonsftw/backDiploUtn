Empezar en: [Clase 7 terminada](https://d1lb3lf90ja1l2.cloudfront.net/81041065767/81041065767-meeting-235478af-3baf-4dcd-ad9f-0c95f622c88d.mp4)

CREATE TABLE usuarios (
	usuario_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(80) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    creado_en DATE DEFAULT CURRENT_DATE
)

en esta clase creamos la carpeta mysql
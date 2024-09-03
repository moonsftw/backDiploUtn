CREATE TABLE usuarios (
	usuario_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(80) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    creado_en DATE DEFAULT CURRENT_DATE
)

CREATE TABLE contactos(
	contacto_id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT NOT NULL UNIQUE,
    contacto_usuario_id INT NOT NULL UNIQUE,
    creado_en DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(usuario_id),
    FOREIGN KEY (contacto_usuario_id) REFERENCES usuarios(usuario_id)
)

CREATE TABLE mensajes ( 
    chat_id INT PRIMARY KEY AUTO_INCREMENT, 
    enviado_por_fk INT NOT NULL, 
    recibido_por_fk INT NOT NULL, 
    mensaje TEXT, creado_en DATE DEFAULT CURRENT_DATE, 
    FOREIGN KEY (enviado_por_fk) REFERENCES usuarios(usuario_id),
    FOREIGN KEY (recibido_por_fk) REFERENCES usuarios(usuario_id) 
)

INSERT INTO usuarios (`username`, `email`, `password_hash`) VALUES
('faculuna', 'nfacundoluna@gmail.com', 'facuLuna123'),
INSERT INTO usuarios (`username`, `email`, `password_hash`) VALUES
('meliespinosa', 'meliv@gmail.com', 'meliV123'),

INSERT INTO mensajes (`enviado_por_fk`, `recibido_por_fk`, `mensaje`) VALUES (
    1, 2, 'Hola pichi!'
)
INSERT INTO contactos (`usuario_id`,`contacto_usuario_id`) VALUES (1, 2)

DELETE FROM usuarios WHERE usuarios.username = "pepe"

UPDATE usuarios
SET email = 'lunafacundonicolas02@gmail.com'
WHERE usuarios_id = 1

/* para cambiar el nombre de la tabla */
ALTER TABLE usuarios RENAME to users
/* cambiar el nombre de la columna */
ALTER TABLE usuarios CHANGE `password_hash` `password` VARCHAR(255) NOT NULL

/* Trae todos los datos */
SELECT * FROM usuarios 

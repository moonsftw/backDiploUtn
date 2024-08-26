En el caso que no podamos correr MySql desde xammp debemos abrir la terminal como administrador y ver si ese puerto está siendo usado, utilizando el comando: 
netstat -ano | findstr :3306
Si nos sale que hay un LISTENING vemos el PID (id del proceso) que es la última columna
y ahí matamos el proceso usando:
taskkill /PID nro_proceso /F 

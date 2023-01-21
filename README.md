APLICACIÓN DE BUSQUEDA DE COMIDA

Para poder correr la aplicación se debe seguir estos pasos:
1-Descargar el repositorio de GitHub
2-Correr el comando "npm i" para instalar todos los paquetes usados.
3-El archivo .env.example cambiar el nombre a .env
4-Ejecutar el comando "npm run start"
5-La aplicación correra sobre la siguiente url: http://localhost:4009/api/docs/
6-Tambien puede ser vista en: https://ms-search-food-cfhlfedkyq-uc.a.run.app/


DECISIONES TOMADAS:
1-Se utiliza interceptors con el fin de mejorar el formato en el que se dan las respuestas
2-Como base de datos se utiliza Mongo a traves de Atlas lo cual nos permite tener la información en la nube de mongo
3-Como ORM se utiliza prisma, que nos da facilidad al momento de crear y hacer consultas sobre la base de datos
4-El proyecto se divide en:
4.1 Categorias: Las categorias de comida, inicialmente se configuran(Vegetariana, desayuno, pollo pizza y hamburguesa)
4.2 Restaurantes: El restaurante principal, que contiene algunos datos
4.3 Subsidiary: Las sucursales del restaurante para que el cliente escoja donde puede solicitar la comida
4.4 Menu: Los diferentes menus de cada resturante con estrellas y precio. Inicialmente se configuro (Utilizar el enpoint GET de menus para ver los platos)
5-Se realizo una integración continua con Google cloud run, cada vez que se realiza un despliegue en la rama dev de Github este empieza el despliegue en Google.

FUNCIONAMIENTO:
Nota: 
-Por categoria: La respuesta es el restaurante con el plato de mejor calificación, si son dos platos con la misma calificación devuelve el de mejor precio. 
-Por menu: En caso de que ingrese una palabra que no es categoria pero si esta dentro del nombre de algun menu regresa el restaurante con el plato de mejor calificación y si existe algun otro plato que contenta esa palabra ese plato tambien se retornara en order de calidad y precio.


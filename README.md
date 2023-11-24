#Develoment
Paos para levantar la app desarrollo

1. Levantar base de datos
````
docker compose up - 
````
2. crear una copia de  el .env.tempalte  y renombrarlo a .env
3. Reemplazar las variables de entorno
4. Ejcutar el comando  ```npm install```
5. Ejecutar el comando ```npm run dev```
6. Ejecutar el SEED para [crear la  base de datos de manera local] (http://localhost:3000/api/seed)
 # Prisma commands
 ````
 npx prisma init
 npx prisma migrate dev
 npx prisma generate

 ````



#prod

#Stage
# Usar una imagen base de Node.js
FROM node:16

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Instalar las herramientas necesarias para compilar dependencias nativas
RUN apt-get update && apt-get install -y \
  build-essential \
  python3 \
  && rm -rf /var/lib/apt/lists/*

# Copiar los archivos de package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar todo el código de la aplicación al contenedor
COPY . .

# Asegurarse de que nodemon tenga permisos de ejecución
RUN chmod +x ./node_modules/.bin/nodemon

# Exponer el puerto que usará la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación con nodemon
CMD ["npm", "run", "dev"]
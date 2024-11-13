# Construcción de la aplicación Angular
FROM node:18 AS build

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el package.json y package-lock.json e instala dependencias
COPY package*.json ./
RUN npm install

# Copia el resto de los archivos y construye la aplicación Angular
COPY . .
RUN npm run build --prod

# Angular en Nginx
FROM nginx:alpine

# Copia el archivo de configuración de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia los archivos de construcción al directorio 
COPY --from=build /app/dist/frontend-recipe/browser /usr/share/nginx/html
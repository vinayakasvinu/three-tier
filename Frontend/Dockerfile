# Use the official Node.js image as the base image
FROM node:latest as build

WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY frontend/ .

# Build the Angular app
RUN npm run build

# Use a lightweight HTTP server to serve the built Angular app
FROM nginx:latest

COPY --from=build /app/dist/*/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# Use the official MySQL image as the base image
FROM mysql:latest

# Set the environment variables for MySQL
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=userdata

# Copy SQL initialization scripts to the container
COPY *.sql /docker-entrypoint-initdb.d/

EXPOSE 3306

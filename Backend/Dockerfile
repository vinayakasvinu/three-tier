# Use the official OpenJDK image as the base image
FROM openjdk:latest

WORKDIR /app

# Copy the packaged WAR file from the local machine into the container
COPY target/*.war .

EXPOSE 8080

CMD ["java", "-jar", "*.war"]

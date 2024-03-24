# Use the official OpenJDK image as the base image
FROM openjdk:latest

WORKDIR /app

# Copy the packaged WAR file from the local machine into the container
COPY target/userProject-0.0.1-SNAPSHOT.war .

EXPOSE 8080

CMD ["java", "-jar", "userProject-0.0.1-SNAPSHOT.war"]

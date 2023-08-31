# Use a lightweight HTTP server to serve the built Angular app
FROM nginx:latest

COPY dist/*/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

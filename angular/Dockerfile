### Stage 1: build ###
FROM node:20.10-alpine as builder

# Set working directory
RUN mkdir /app
WORKDIR /app

# Copy app dependencies.
COPY angular/angular-app/package.json angular/angular-app/package-lock.json /app/angular-app/

# Install app dependencies.
RUN npm install --prefix angular-app

# Copy .env
COPY env/ng /app/.env

# Copy app files.
COPY angular/ /app

# Build app
WORKDIR /app/angular-app
RUN npm run build

### Stage 2: delivery ###

FROM nginx:stable-alpine

# copy django static files
RUN mkdir -p /usr/share/nginx/html/static
COPY django/static/ /usr/share/nginx/static/
# remove the default NGINX website
RUN rm -rf /usr/share/nginx/html/*

# copy the compiled app from the builder image to the NGINX public folder
COPY --from=builder /app/angular-app/dist/out/ /usr/share/nginx/html/

# copy the NGINX configuration file to the Docker
COPY angular/nginx/ /etc/nginx/conf.d/

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]

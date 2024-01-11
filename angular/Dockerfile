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

# Default build configuration
ARG configuration=production

# Build app
RUN npm run build --prefix angular-app -- --output-path=./dist/out

### Stage 2: delivery ###

FROM nginx:stable-alpine

# remove the default NGINX website
RUN rm -rf /usr/share/nginx/html/*

# copy the compiled app from the builder image to the NGINX public folder
COPY --from=builder /app/angular-app/dist/out /usr/share/nginx/html

# copy the NGINX configuration file to the Docker
COPY angular/nginx/nginx.conf /etc/nginx/conf.d/default.conf


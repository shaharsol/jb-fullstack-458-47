# stage 1: we want to produce the react build:
FROM node:15-alpine AS builder

# go to /app
WORKDIR /app

# copy package.json from our source to /app
COPY package.json ./

# npm install
RUN npm i

# now copy the source code
COPY ./ ./

# now we can ask react to build our code to production
# the result will be in the /app/build directory
RUN npm run build

# Now we start over with a fresh nginx machine
# nginx is 2nd most popular web server after apache
# it is not neccessarily CGI
FROM nginx:alpine

# we go to this directory
WORKDIR /usr/share/nginx/html

# and we empty it totally
RUN rm -rf *

# now we copy the react build products from the 1st stage, to here
COPY --from=builder /app/build .
COPY nginx.conf ../sites-available/

# and now we can start nginx, which will serve our react app to any browser
# that access this server
# CMD nginx -g daemon off;
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]

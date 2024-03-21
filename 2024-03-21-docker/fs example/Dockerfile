# Which given Image I am starting to build upon
FROM node:18-alpine3.19

# I want to create a directory for my app to reside in
# WORKDIR does 2 things:
# 1. creates the directory
# 2. every command from now on (unless specified otherwise) will run in this directory
WORKDIR /app

# Now I want to copy only the package.json file to the image
# this copies package.json from the same directory where Dockerfile is run
# into the directory we created in WORKDIR command
COPY package.json ./

# Now we want to run npm install
RUN npm i

# Now we want to add the source code of our app
COPY ./ ./

# We want to expose the port the app will listen to
EXPOSE 8080

# Now I want to provide some command to start the app 
# in Node.js we usually use "npm start" for this
#CMD [ "npm", "start" ]
CMD npm start




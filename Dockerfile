# Pull base image.
FROM node:18.16.1
LABEL MANTAINER="Steplix <developers@steplix.com>"

# Setting working directory. All the path will be relative to WORKDIR
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json, package-lock.json and yarn.lock are copied.
# It's done before anything to create a reusable docker layer for dependencies
COPY package*.json ./
RUN npm ci --production && npm cache clean --force

# Copying source files
COPY . .

# Build
RUN npm run build

# Define an entry point.
CMD ["npm", "start"]

# Mapping through port
EXPOSE ${PORT}

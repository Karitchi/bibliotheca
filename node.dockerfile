# Base stage for development and production
# This Dockerfile sets up a base image for a Node.js application.
# It uses the official Node.js image with version 20.12.2 as the base.
# The working directory is set to /app and port 3000 is exposed.

FROM node:20.12.2 as base
WORKDIR /app
EXPOSE 3000

# Development stage
# This Dockerfile is used for the development environment of the Bibliotheca project.
# It sets up the necessary dependencies and configurations for running the project in a development environment.

FROM base as dev

# Expose port 9229 for debugging purposes
EXPOSE 9229

# Mount the package.json and package-lock.json files from the host machine to the container
# and perform a clean installation of the dependencies specified in the package.json file
RUN --mount=type=bind,source=package.json,target=package.json \
  --mount=type=bind,source=package-lock.json,target=package-lock.json \
  --mount=type=cache,target=/root/.npm \
  npm clean-install --include=dev

# Change the ownership of the node_modules directory to the 'node' user
RUN chown -R node:node ./node_modules

# Set the user to 'node' for running subsequent commands
USER node

# Start a tail command to keep the container running indefinitely
CMD tail -f /dev/null

# Production stage
# This Dockerfile is used to build a production image for a Node.js application.

# Use the "base" image as the starting point for the production image.
FROM base as prod

# Mount the package.json and package-lock.json files from the host machine to the container.
# This allows the container to access the dependencies specified in these files.
# The --mount flag is used to bind mount the files, and the --omit=dev flag is used to exclude devDependencies.
RUN --mount=type=bind,source=package.json,target=package.json \
  --mount=type=bind,source=package-lock.json,target=package-lock.json \
  --mount=type=cache,target=/root/.npm \
  npm ci --omit=dev

# Set the user to "node" for running the application.
USER node

# Copy the application code from the host machine to the container.
COPY . .

# Run the "start" script defined in the package.json file.
CMD npm run start
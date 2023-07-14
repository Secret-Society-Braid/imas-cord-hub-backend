FROM node:latest

# Copy files to container
COPY . /app

# Set working directory
WORKDIR /app

# Install dependencies
RUN npm install

# Expose port
EXPOSE 3000

# build app
RUN npm run build

# Run app production
CMD ["npm", "run", "start:prod"]

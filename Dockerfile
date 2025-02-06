# Dockerfile for React frontend
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app for production
RUN npm run build

# Install serve to serve the static files
RUN npm install -g serve

# Expose port for the React app
EXPOSE 5001

# Start the application using serve
CMD ["serve", "-s", "build", "-l", "5001"]

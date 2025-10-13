# Stage 1: Build the Next.js app
FROM node:18-alpine AS builder
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy project files and build
COPY . .
RUN npm run build

# Stage 2: Run the app
FROM node:18-alpine
WORKDIR /app

ENV NODE_ENV=production

# Copy build and node_modules from builder
COPY --from=builder /app ./

EXPOSE 3000
CMD ["npm", "start"]
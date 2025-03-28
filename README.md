# Express Hit Counter


This is a Node.js Express version of the Hit Counter service

## Contents

This application contains a Node.js Express backend that demonstrates a simple hit counter API. It's a RESTful service that tracks the number of hits to a URL.

## Features

- Express.js web framework
- Swagger UI for API documentation
- Mocha/Chai for testing
- Docker support for development and deployment

## Running the Application

### Local Development

1. Install dependencies:
   ```
   npm install
   ```

2. Start the server:
   ```
   npm start
   ```
   
   Or for development with auto-reload:
   ```
   npm run dev
   ```

3. Access the application at http://localhost:8000

### Using Docker

1. Build the Docker image:
   ```
   docker build -t express-hit-counter .
   ```

2. Run the container:
   ```
   docker run -p 8000:8000 express-hit-counter
   ```

## API Endpoints

- `GET /hits` - Get the current hit count
- `PUT /hits` - Increment the hit counter by 1

## Running Tests

```
npm test
```

For coverage report:
```
npm run coverage
```

## License

Copyright (c) IBM Corporation. All rights reserved.



---

## <h3 align="center"> © IBM Corporation 2025. All rights reserved. <h3/>
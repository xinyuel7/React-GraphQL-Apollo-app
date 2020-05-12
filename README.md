rocket launch dashboard is a full-stack web application modeled after Airbnb and geared toward solo travelers. It uses React with GraphQL database on the back-end, and React.js and Redux on the front-end. For image hosting, it utilizes Amazon Web Services. For live messaging, it uses Action Cable to integrate WebSockets with the rest of the Rails application.
I implement my own GraphQL Express server and fetch data from spaceX API
Homepage
![homepage-spaceX](https://user-images.githubusercontent.com/47007712/81637558-49e42c80-93dc-11ea-9394-6ddebec657e4.PNG)
Detail Page
![detail page-spaceX](https://user-images.githubusercontent.com/47007712/81637597-5b2d3900-93dc-11ea-900e-9990737fdc51.PNG)
API Testing
![API-testing-spaceX](https://user-images.githubusercontent.com/47007712/81637947-3dac9f00-93dd-11ea-82d7-be0f713cdf5c.PNG)

# Install dependencies (server & client)
npm install
cd client && npm install

# Run server & client (:3000 & :4000)
npm run dev

# Server only (:4000)
npm run server

# Client only (:3000)
npm run client

# Build for production (Builds into server ./public)
cd client && npm run build

# Graphiql - http://localhost:4000/graphql

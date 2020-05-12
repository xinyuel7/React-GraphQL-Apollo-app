# Technologies:
**Use React Apollo to fetch data from our GraphQL server<br />
Use React Router for routing<br />
Use Axios for API calls<br />**

![homepage-spaceX](https://user-images.githubusercontent.com/47007712/81637558-49e42c80-93dc-11ea-9394-6ddebec657e4.PNG)
Detail Page
![detail page-spaceX](https://user-images.githubusercontent.com/47007712/81637597-5b2d3900-93dc-11ea-900e-9990737fdc51.PNG)
API Testing
![API-testing-spaceX](https://user-images.githubusercontent.com/47007712/81637947-3dac9f00-93dd-11ea-82d7-be0f713cdf5c.PNG)
Query Schema
![query-spaceX](https://user-images.githubusercontent.com/47007712/81639270-11931d00-93e1-11ea-974f-728717fe2484.PNG)
Caching query results<br />
Whenever Apollo Client fetches query results from your server, it automatically caches those results locally. This makes subsequent executions of the same query extremely fast.
![query_render-spaceX](https://user-images.githubusercontent.com/47007712/81639304-253e8380-93e1-11ea-8cd9-5150f989e3ff.PNG)
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

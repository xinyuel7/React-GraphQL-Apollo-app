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

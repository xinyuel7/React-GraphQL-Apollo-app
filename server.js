const express=require('express');
const graphqlHTTP=require('express-graphql');
const cors = require('cors');
const schema = require('./schema');
const path = require('path');

const app = express();

//Allow cross-origin
app.use(cors());


app.use('/graphql', graphqlHTTP({ //only one endpoint
      schema,
      graphiql: true,
    }));
    
app.use(express.static('public'));//public is our static folder
app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})
const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
});
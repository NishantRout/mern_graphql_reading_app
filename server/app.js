const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema
}));

app.listen('3000', () => {
    console.log("Now listening for requests on port 3000");
})

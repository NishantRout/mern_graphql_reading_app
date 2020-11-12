const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

//allow cross-origin requests
app.use(cors());

//connect to mongodb
const connection_url =
  "mongodb+srv://Nishant_Rout:nishant1999@cluster0.y1abj.mongodb.net/reading_app?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("Connected to DB");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen("4000", () => {
  console.log("Now listening for requests on port 4000");
});

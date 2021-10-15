// const express = require('express');
// const graphqlExpress =require('apollo-server-express');
// const graphiqlExpress = require('apollo-server-express');
// const cors  =  require('cors');
// const bodyParser =require('body-parser');
// const {makeExecutableSchema} = require('@graphql-tools/schema');
// const {graphql} = require('graphql');

// const typeDefs=`
// schema{
//     query:Query
// }

// type Query{
//     hello:String
//     name : String
// }
// `;

// const resolvers = {
//     Query:{
//         hello:()=>'World',
//         name:()=>"James"
//     }
// };

// const schema = makeExecutableSchema({typeDefs,resolvers})
// const app = express();
// app.use(cors());

// app.use('/graphql',bodyParser.json,graphqlExpress({schema}));
// app.use('/graphiql' ,graphiqlExpress({endPointURL:'/graphql'}));

// app.listen(4000 ,()=>{
// console.log("Go to http://localhost:4000/graphiql to run queries!!");
// });

// const query = process.argv[2];

// graphql(schema,query).then(result=>{
//     console.log(JSON.stringify(result , null, 2))
// })

var express = require('express');
const {graphqlHTTP}= require('express-graphql');
const { buildSchema } = require('graphql');
var resolver = require('./resolver.js');
var typeDefs = require('./typedefs.js');
const { buildASTSchema } = require('graphql');
const gql = require('graphql-tag');
var allBooks = require('./books.js');
//var makeExecutableSchema=require('@graphql-tools/schema');

//var schema  = buildSchema(typeDefs);

// var schema = buildSchema(
//   `
// schema {
//     query : Query
// }
// type Query
// {
//     books : [Book]
// }

// type Book
// {
//     id:ID!
//     title:String!
//     description:String!
//     bookImageURL :String!
//     rating : Float!
// }
// `
// )
//console.log(schema);
//var root = resolver;


var root = {
  books: ({id,title,description , bookImageURL,rating,price}) => {
      console.log("i am in ");
        return allBooks();
       
    }

};

console.log(root);

var app = express();




//app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema: buildSchema(typeDefs),
  rootValue: root,
  graphiql: true
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
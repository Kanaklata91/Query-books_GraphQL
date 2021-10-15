const typeDefs =`
schema {
    query : Query
}
type Query
{
    books : [Book]
}

type Book
{
    id:ID!
    title:String!
    description:String!
    bookImageURL :String!
    rating : Float,
    price:String
   
}
`;

//export default typeDefs;
module.exports=typeDefs;





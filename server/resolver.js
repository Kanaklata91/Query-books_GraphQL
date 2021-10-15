// The root provides a resolver function for each API endpoint
var allBooks= require('./books.js');
const resolver = {
    Query: {
        books: () => {
            return allBooks();
        }
    }
}
//export default resolver;
module.exports= resolver;
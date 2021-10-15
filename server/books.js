//data access layer code must be written here , we mustn not have much of login in resolver
var books = [
    {
        id:1,
        title:'Atomic Habits',
        description:'Book on  good habits by James Clear',
        bookImageURL : 'https://jamesclear.com/wp-content/uploads/2019/02/atomic-habits_gallery_hi-res_04.jpg',
        rating:4.5,
        price:'USD 30'

    } , 

    {
        id:2,
        title:'How to win friends and influence people!!',
        description:'Book on building friendships and a ground breaking personality',
        bookImageURL : 'https://jamesclear.com/wp-content/uploads/2019/02/atomic-habits_gallery_hi-res_04.jpg',
        rating:5.0,
        price:'USD 40'

    } ,

    {
        id:3,
        title:'Unfinished',
        description:'Priyanka Chopra Autobiography',
        bookImageURL : 'https://jamesclear.com/wp-content/uploads/2019/02/atomic-habits_gallery_hi-res_04.jpg',
        rating:3.0,
        price:'USD 60'

    } 
]


function allBooks()
{
    //todo: to write query to get data from DB
    return books;
}

module.exports= allBooks;
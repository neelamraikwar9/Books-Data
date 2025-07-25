import useFetch from '../useFetch';
const BooksByAuthor = ({author}) => {
const {data, loading, error} = useFetch(`https://book-data-iota.vercel.app/books/director/${author}`)
// console.log(data)
return(
    <div>
        <ul>
        <h2>Books by Harper Lee</h2>
        {data?.map(book => (
            <li key={book._id}>{book.title}</li>
        ))}
        </ul>
        </div>
)
}

export default BooksByAuthor
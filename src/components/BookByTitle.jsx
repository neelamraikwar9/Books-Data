import useFetch from "../useFetch";
const BookByTitle = ({title}) => {
 const {data, loading, error} = useFetch(`https://book-data-iota.vercel.app/books/${title}`)
//  console.log(data,'ikjdsofijwoefi')
    return data?(
        <div key={data.id}>
        <h2>{data.title}</h2>
        <p>Author: {data.author}</p>
        <p>Release Year: {data.
publishedYear}</p>
        <p>Genre: {data.
genre.join(", ")}</p>
        </div>
        ) : (loading && <p>Loading...</p>);
}

export default BookByTitle
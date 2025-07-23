import useFetch from '../useFetch';
import { useState } from "react";
const Books = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const {data, loading, error} = useFetch("https://book-data-iota.vercel.app/books");

    console.log(data, 'fjieorjfgoir', error)

    const handleDelete = async(bookId) => {
        try{
            const response = await fetch(`http://localhost:4000/books/delete/${bookId}`,
                {method: "DELETE"}
            );
            
            if(!response.ok){
                throw "Failed to delete movie."
            }

            const data = await response.json()
            if(data){
                setSuccessMessage("Movie delete successfully.")
                window.location.reload();
            }
        } catch(error){
            console.log(error)
        }
    }
    return (
        <div>
        <ul>
        <h2>All Books</h2>
        {data?.map(book => (
            <li key={book._id}>{book.title}{""}<button onClick={() => handleDelete(book._id)}>Delete</button></li>
        ))}
        </ul>
        <p>{successMessage}</p>
        </div>
    )
}

export default Books;
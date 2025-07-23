import React, { useState } from "react";

const AddBookForm = () => {
    const [formData, setFormData] = useState({
        title: "", 
        author: "", 
        publishedYear: "",
        genre: "",
        language: "",
        country: "",
        rating: "",
        summary: "",
        coverImageUrl: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        setFormData((prevState) => ({
            ...prevState, [name]: name === "publishedYear" || name === "rating" ? parseInt(value) : value,
        }));
    };


    const handleBookSubmit = async (event) => {
        event.preventDefault()

        try{
            const response = await fetch("https://book-data-iota.vercel.app/books", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            }
        );

            if(!response.ok){
                throw "Failed to add book."
            }
         console.log(response.json)
            const data = await response.json()
            console.log("Added book", data)
            

        } catch(error){
            console.log(error)
        }
    }

    return(
        <div>
            <h2>Add New Book</h2>
            <form onSubmit={handleBookSubmit}>
                <label>Title:</label>
                <br/>
                <input type="text" name="title" value={formData.title} onChange={handleChange} />
                <br/>
                <br/>

                <label>Author:</label>
                <br/>
                <input type="text" name="author" value={formData.author} onChange={handleChange} />
                <br/>
                <br/>

                <label>Published Year:</label>
                <br/>
                <input type="number" name="publishedYear" value={formData.publishedYear} onChange={handleChange} />
                <br/>
                <br/>

                <label>Genre:</label>
            <br/>
            <select name="genre" value={formData.genre} onChange={handleChange}>
                <option value="Fiction">Fiction</option>
                <option value="Non-Fiction">Non-Fiction</option>
                <option value="Mystery">Mystery</option>
                <option value="Thriller">Thriller</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Romance">Romance</option>
                <option value="Historical">Historical</option>
                <option value="Biography">Biography</option>
                <option value="Self-help">Self-help</option>
                <option value="Business">Business</option>
                <option value="Autobiography">Biography</option>
                <option value="Other">Other</option>
            </select>
            <br/>
            <br/>

                <label>Language:</label>
                <br/>
                <input type="text" name="language" value={formData.language} onChange={handleChange} />
                <br/>
                <br/>

                <label>Country:</label>
                <br/>
                <input type="text" name="country" value={formData.country} onChange={handleChange} />
                <br/>
                <br/>

                <label>Rating:</label>
                <br/>
                <input type="number" name="rating" value={formData.rating} onChange={handleChange} />
                <br/>
                <br/>

                <label>Summary:</label>
                <br/>
                <input type="text" name="summary" value={formData.summary} onChange={handleChange} />
                <br/>
                <br/>

                <label>Cover Image Url:</label>
                <br/>
                <input type="text" name="coverImageUrl" value={formData.coverImageUrl} onChange={handleChange} />
                <br/>
                <br/>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};


export default AddBookForm;
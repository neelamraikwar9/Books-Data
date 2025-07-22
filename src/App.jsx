
import './App.css'
import Books from './components/Books'
import BookByTitle from './components/BookByTitle'
import BooksByAuthor from './components/BooksByAuthor'
import AddBookForm from './components/AddBookForm'

function App() {
  
  return (
    <main>
    <AddBookForm/>
    <br/>
    <Books />
    <br/>
    <BookByTitle title="Shoe Dog"/>
    <br/>
    <BooksByAuthor author="Harper Lee"/>

      
    </main>
  )
}

export default App

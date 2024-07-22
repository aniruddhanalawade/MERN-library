import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Book from './Book'


const URL = "http://localhost:5000/books";

const fetchBoks = async () => {
  return axios.get(URL).then((res) => res.data)
}

const Books = () => {

  const [books,setBooks] = useState();
  console.log(books)

  useEffect(() => {
    fetchBoks().then(data => setBooks(data))
  }, [])

  return (
    <>

    <ul>
      {
       books && books.map((book,i) => {
        return(
          <li key={i}>
            <Book book={book}/>
          </li>
        )
       })
      }
    </ul>
    
    </>
  )
}

export default Books
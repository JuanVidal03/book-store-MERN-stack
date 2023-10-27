// compopnents and dependencies
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Spinner from "../components/Spinner.jsx";
import BooksCard from '../components/home/BooksCard.jsx';
// react router dom
import { Link } from "react-router-dom";
// font awesome for icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus, faCircleInfo, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'


const Home = () => {

  // create state of books and loading
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  // get the data
  useEffect(() => {
    setLoading(true);

    axios
      .get('http://localhost:8080/api/books')
        .then((res) => {
          const allBooks = res.data.books;
          setLoading(false);
          setBooks(allBooks);

        })
        .catch(err => {
          console.log(err);
          setLoading(false);
        })
  }, []);

  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8 font-bold uppercase'>Books List</h1>
        <Link to='/books/create' className='flex justify-center items-center gap-x-4 bg-sky-500 py-3 px-5 rounded-xl transition-all hover:bg-sky-600'>
          <p className='text-xl'>Add Book</p>
          <FontAwesomeIcon icon={faSquarePlus} className='text-4xl'/>
        </Link>
      </div>
      {
        loading ? (
          <Spinner />
        ) : (
          <div className='flex w-full gap-4 justify-center items-center mt-9'>
            {
              books.map((book) => {
                return (
                  <BooksCard
                    key={book._id}
                    title={book.title}
                    author={book.author}
                    publishYear={book.publishYear}
                    _id={book._id}/>
                )
              })
          }
          </div>
        )
      }
    </div>
  );
}

export default Home;

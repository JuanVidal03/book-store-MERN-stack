// compopnents and dependencies
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Spinner from "../components/Spinner.jsx";
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
          <table className='w-full border-separate border-spacing-2'>
            <thead>
              <tr>
                <th className='border border-slate-600 rounded-md'>No</th>
                <th className='border border-slate-600 rounded-md'>Title</th>
                <th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>
                <th className='border border-slate-600 rounded-md max-md:hidden'>Publish Year</th>
                <th className='border border-slate-600 rounded-md'>Operations</th>
              </tr>
            </thead>
            <tbody>
              {
                books.map((book, index) => {

                  return ( 
                    <tr key={book._id} className='h-8'>
                      <th className='border border-slate-700 rounded-md text-center'>
                        {index + 1}
                      </th>
                      <th className='border border-slate-700 rounded-md text-center'>
                        {book.title}
                      </th>
                      <th className='border border-slate-700 rounded-md text-center max-md:hidden'>
                        {book.author}
                      </th>
                      <th className='border border-slate-700 rounded-md text-center max-md:hidden'>
                        {book.publishYear}
                      </th>
                      <th className='border border-slate-700 rounded-md text-center flex justify-center items-center gap-x-4'>
                        <div className='flex justify-center'>
                          <Link to={`/books/details/${book._id}`}>
                            <FontAwesomeIcon icon={faCircleInfo} className='text-2xl py-2'/>
                          </Link>
                        </div>
                        <div className='flex justify-center'>
                          <Link to={`/books/edit/${book._id}`}>
                            <FontAwesomeIcon icon={faPenToSquare} className='text-2xl py-2'/>
                          </Link>
                        </div>
                        <div className='flex justify-center py-2'>
                          <Link to={`/books/delete/${book._id}`}>
                            <FontAwesomeIcon icon={faTrash} className='text-2xl'/>
                          </Link>
                        </div>
                      </th>
                      
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        )
      }
    </div>
  );
}

export default Home;

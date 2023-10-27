import { useState, useEffect } from 'react';
import BackButton from '../components/BackButton.jsx';
import Spinner from '../components/Spinner.jsx';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteBook = () => {

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const {id} = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:8080/api/books/${id}`)
      .then(() => {
        navigate('/');
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      })
  }

  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Delete Book</h1>
      { loading ? <Spinner/> : ''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] mx-auto p-8'>
        <h3>Are you sure to delete this book?</h3>
        <button
        className='p-4 bg-red-800 text-white m-8 w-full'
        onClick={handleDeleteBook}>
          Delete Book
        </button>
      </div>
    </div>
  );
}

export default DeleteBook;

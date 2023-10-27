import { useState, useEffect } from 'react';
import BackButton from '../components/BackButton.jsx';
import Spinner from '../components/Spinner.jsx';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBook = () => {

  // setting the form states
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const {id} = useParams();

  // getting the book mto update
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/api/books/${id}`)
      .then(res => {
        setTitle(res.data.book.title);
        setAuthor(res.data.book.author);
        setPublishYear(res.data.book.publishYear);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      })

  }, []);

  // updating the book
  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    }
    setLoading(true);
    axios
      .put(`http://localhost:8080/api/books/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch(err => {
        setLoading(false);
        alert('An error happend, please check teh console');
        console.log(err);
      })
  }


  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4 font-bold'>Edit a Book</h1>
      {loading ? <Spinner/> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='py-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='py-4'>
          <label className='text-xl mr-4 text-gray-500'>Author</label>
          <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='py-4'>
          <label className='text-xl mr-4 text-gray-500'>Publissh Year</label>
          <input
          type="text"
          value={publishYear}
          onChange={(e) => setPublishYear(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>
          Update Book
        </button>
      </div>
    </div>
  );
}

export default UpdateBook;

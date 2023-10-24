// import react
import { useEffect, useState } from "react";
// import components
import BackButton from "../components/BackButton.jsx";
import Spinner from "../components/Spinner.jsx";
// import libraries
import axios from "axios";
import { useParams } from "react-router-dom";


const ShowBooks = () => {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);
  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/api/books/${id}`)
        .then(res => {
          setBook(res.data.book);
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
          setLoading(false);
        })

  }, []);

  return (
    <div className="p-4">
      <BackButton/>
      <h1 className="font-bold my-3 uppercase text-3xl">Showing Book</h1>

      {
        loading ? (
          <Spinner/>
        ) : (
          <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 my-5">
            <div className="my-4 flex flex-col">
              <span className="text-xl mr-4 text-gray-500">ID</span>
              <span>{book._id}</span>
            </div>
            <div className="my-4 flex flex-col">
              <span className="text-xl mr-4 text-gray-500">Title</span>
              <span>{book.title}</span>
            </div>
            <div className="my-4 flex flex-col">
              <span className="text-xl mr-4 text-gray-500">Author</span>
              <span>{book.author}</span>
            </div>
            <div className="my-4 flex flex-col">
              <span className="text-xl mr-4 text-gray-500">Publish Year</span>
              <span>{book.publishYear}</span>
            </div>
            <div className="my-4 flex flex-col">
              <span className="text-xl mr-4 text-gray-500">Created At</span>
              <span>{new Date(book.createdAt).toString()}</span>
            </div>
            <div className="my-4 flex flex-col">
              <span className="text-xl mr-4 text-gray-500">Updated At</span>
              <span>{new Date(book.updatedAt).toString()}</span>
            </div>
          </div>
        )
      }


    </div>
  );
}

export default ShowBooks;

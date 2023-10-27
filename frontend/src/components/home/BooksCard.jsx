import React from "react";
// font awesome for icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
// import react router dom
import { Link } from "react-router-dom";


const BooksCard = ({title, author, publishYear, _id}) => {
  return (
    <div className="flex flex-col border-2 border-sky-600 w-full rounded-lg p-6 items-center justify-center hover:bg-sky-500 transition-all">
      <h5 className="text-2xl font-bold w-[200px] text-center">{title}</h5>
      <h6>{author}</h6>
      <p>{publishYear}</p>
      <div className="flex gap-4 mt-3">
        <div className='flex justify-center'>
          <Link to={`/books/details/${_id}`}>
            <FontAwesomeIcon icon={faCircleInfo} className='text-2xl py-2'/>
          </Link>
        </div>
        <div className='flex justify-center'>
          <Link to={`/books/edit/${_id}`}>
            <FontAwesomeIcon icon={faPenToSquare} className='text-2xl py-2'/>
          </Link>
        </div>
        <div className='flex justify-center py-2'>
          <Link to={`/books/delete/${_id}`}>
            <FontAwesomeIcon icon={faTrash} className='text-2x'/>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BooksCard;

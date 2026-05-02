
import React from 'react';
import Book from '../components/Book';
import Fetch from '../components/Fetch';

const AllBooksPage  = async () => {
   const res = await fetch("https://books-store-rho.vercel.app/book.json");
  const books = await res.json();
     



    return (
        <div>
           <div className='flex my-10  justify-center'>
         <Fetch books={books}></Fetch>
           </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-10'>
            {
                books.map((book) => (
                    <Book key={book.id} book={book} />
                ))
            }
           
        </div>
        </div>
    );
};

export default AllBooksPage ;
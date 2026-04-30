import React from 'react';
import Book from '../components/Book';

const AllBooksPage  = async () => {
      const res = await fetch("https://books-store-rho.vercel.app/book.json");
  const books = await res.json();
    return (
        <div className='grid grid-cols-3 gap-5 my-10'>
            {
                books.map((book) => (
                    <Book key={book.id} book={book} />
                ))
            }
           
        </div>
    );
};

export default AllBooksPage ;
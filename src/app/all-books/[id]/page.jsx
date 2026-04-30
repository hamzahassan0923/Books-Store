import React from 'react';

const BooksDetailsPage = async ({params}) => {
    const {id} = params;
        const res = await fetch("https://books-store-rho.vercel.app/book.json");
  const books = await res.json();

  const book = books.find((b) => b.id == id);
  console.log(book);
   
    return (
        <div>
            
          
        </div>
    );
};

export default BooksDetailsPage;
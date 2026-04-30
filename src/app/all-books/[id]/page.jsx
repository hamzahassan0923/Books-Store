
import Book from '@/app/components/Book';
import BookDetails from '@/app/components/BookDetails';
import Image from 'next/image';
import React from 'react';

const BooksDetailsPage = async ({params}) => {
    const {id} = await params;
        const res = await fetch("https://books-store-rho.vercel.app/book.json");
  const books = await res.json();

  const book = books.find((b) => b.id == id);
  const { title, author, description ,category,available_quantity } = book;

      
          
   
    return (
         <BookDetails book={book} />
    );
};


export default BooksDetailsPage;
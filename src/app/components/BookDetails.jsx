'use client';
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";


const BookDetails = ({ book }) => {
    const { title, author, description, category, available_quantity, image_url } = book;
     const handleBorrow = () => {
        
            toast("You have borrowed this book successfully!");
        
    }
    return (
        <div className=''>
                     <div className='flex gap-10 p-10  rounded-lg shadow-lg'>
                         <div className='rounded-lg overflow-hidden'>
                        <Image src={image_url} alt={title}   width={250} height={300} />
                      </div>
                      <div>
                        <h2 className='font-bold text-3xl my-2'>{title}</h2>
                        <p className='mb-10'>by <span className='font-semibold text-green-900'>{author}</span></p>
                        
                        <p className='mb-5'><span className='font-bold'>Category: </span><span className='font-semibold'>{category}</span></p>
                        <p className='font-bold text-xl'>Description:</p>
                        <p className='w-md text-gray-500 mb-2'>{description}</p>
                        <p className='font-semibold text-lg'><span className='font-bold'>Available Quantity: </span>{available_quantity} Copies left</p>
        
                        <button onClick={()=>handleBorrow()}
                        className=
                        'bg-blue-500 hover:bg-blue-700 text-white font-bold my-3 py-2 px-4 rounded'>
                          Borrow this book
                        </button>
                      </div>
                     </div>
                      <ToastContainer />
                </div>
    );
};


export default BookDetails;
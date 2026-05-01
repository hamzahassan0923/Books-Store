import Image from "next/image";
import Link from "next/link";


const Book = ({ book }) => {
    return (
        <div >
            <div className="card card-border bg-base-100  transition-transform duration-300 
            hover:scale-105 cursor-pointer border-2 border-gray-200">
  <div className="card-body">
   <div className="relative w-full aspect-square">
     <Image src={book.image_url} sizes="1" alt={book.title} fill className="rounded-lg" />
   </div>
    <h2 className="card-title">{book.title}</h2>
  
    <div className="card-actions justify-end">
      <Link href={`/all-books/${book.id}`}>
        <button className="btn btn-warning  hover:bg-yellow-300">Details</button>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Book;
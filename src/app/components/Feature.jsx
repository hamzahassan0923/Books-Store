import Book from "./Book";


const Feature = async () => {
    const res = await fetch("https://books-store-rho.vercel.app/book.json");
  const books = await res.json();
  const topBooks = books.slice(0, 4);
  
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
            {
                topBooks.map((book) => (
                    <Book key={book.id} book={book} />
                ))
            }
        </div>
    );
};

export default Feature;
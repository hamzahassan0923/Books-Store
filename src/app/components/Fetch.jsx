'use client'

import { useState } from "react";


const Fetch =({books}) => {
    
    const [page, setPage] = useState([]);

    const pages =() =>{
        setPage(books);
    }

 
      const [search,setSearch] =useState("");
      console.log(search);
        const handleSearch = () => {
            const expectedBooks = books.filter(book =>book.title.includes(search));
            setSearch(expectedBooks);
            
             
        }


    return (
        <div className="flex gap-1">
          <div>    <label className="input ">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input value={search} onChange={e=>setSearch(e.target.value)}
  
  type="search" required placeholder="Search" />
 
</label></div>
<div><button onClick={handleSearch} className="btn btn-neutral">Search</button></div>


        </div>
    );
};

export default Fetch;
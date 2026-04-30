import Link from "next/link";


export default function Home() {
  return (
    <div >
      <div className="hero bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div>
      <h1 className="text-5xl font-bold">This is our Books Store</h1>
      <p className="py-6">
       This books are so good. You can read them and get more knowledge about programming. We have a lot of books for you. You can choose any book you want. 
      </p>
     <Link href="/all-books"> <button className="btn btn-primary">Get Books</button></Link>
  </div>
</div>

    </div>
    </div>
  );
}

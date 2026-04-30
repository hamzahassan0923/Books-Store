import Marquee from "react-fast-marquee";
import Hero from "./components/Hero";


export default function Home() {
  return (
    <div >
     <Hero></Hero>
     <Marquee gradient={false} speed={50} className="bg-blue-500 text-base-content py-2">
     
      <span className="mx-4 text-lg font-bold">Welcome to our Book Store</span>
      <span className="mx-4 text-lg font-bold">we have discounts 10% off all books</span>
      
      <span className="mx-4 text-lg font-bold">You can choose any book you want</span>
</Marquee>
        <div className="container mx-auto my-8">
          <h2 className="text-2xl font-bold mb-4">Featured Books</h2>
          
           </div>
        </div>
  );
}

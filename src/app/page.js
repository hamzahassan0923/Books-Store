import Marquee from "react-fast-marquee";
import Hero from "./components/Hero";
import Feature from "./components/Feature";



export default function  Home() {
 
  return (
    <div >
     <Marquee gradient={false} speed={50} className="bg-gray-200 text-base-content py-1">
     
      <span className="mx-4 text-lg font-bold text-red-500">Welcome to our Book Store</span>
      <span className="mx-4 text-lg font-bold text-red-500">we have discounts 10% off all books</span>
  
      <span className="mx-4 text-lg font-bold text-red-500">You can choose any book you want</span>
</Marquee>
     <Hero></Hero>
        <h1 className="font-bold text-3xl my-4">Feature Books </h1>
        <Feature></Feature>

           
        </div>
  );
}

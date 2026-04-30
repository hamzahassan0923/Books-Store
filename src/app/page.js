import Marquee from "react-fast-marquee";
import Hero from "./components/Hero";
import Feature from "./components/Feature";



export default function  Home() {
 
  return (
    <div >
     <Hero></Hero>
     <Marquee gradient={false} speed={50} className="bg-blue-500 text-base-content py-2">
     
      <span className="mx-4 text-lg font-bold">Welcome to our Book Store</span>
      <span className="mx-4 text-lg font-bold">we have discounts 10% off all books</span>
      
      <span className="mx-4 text-lg font-bold">You can choose any book you want</span>
</Marquee>
        <h1 className="font-bold text-3xl my-4">Feature Books </h1>
        <Feature></Feature>

           
        </div>
  );
}

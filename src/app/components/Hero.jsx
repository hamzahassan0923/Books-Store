import Image from "next/image";
import Link from "next/link";
import img from "../../asset/hero_img.jpg"

const Hero = () => {
    return (
        <div className="hero bg-base-200 py-10">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <Image src={img} alt="Books" priority width={400} height={300}></Image>
    
    <div>
      <h1 className="text-5xl font-bold">This is our Books Store</h1>
      <p className="py-6">
       This books are so good. You can read them and get more knowledge.
        <br></br> about programming. We have a lot of books for you. You can choose any book you want. 
      </p>
     <Link href="/all-books"> <button className="btn  btn-secondary
     ">More Books</button></Link>
  </div>
</div>

    </div>
    );
};

export default Hero;
'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { authClient } from '../lib/auth-client';
import { FaEye } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';




const RegisterPage = () => {
       const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      const router = useRouter();

      const handleGoogle = async () => {
        const data = await authClient.signIn.social({
    provider: "google",
  });
     console.log(data);
      };

      const [show , setShow] = React.useState(false);
    
        const handleRegister = async (data) => {
            console.log(data);

            const { data:res, error } = await authClient.signUp.email({
    name: data.name,
    email: data.email, 
    password: data.password, 
    image: data.photoUrl,
    callbackURL: "/",
});
    console.log(res,error);
     if(    error){
        toast(error.message);
     }

     if(res){
        toast("Registration successful!");
      
        router.push('/login');
     }



           };


    return (
        <div className='flex justify-center items-center  bg-[#f4f7f6e8] min-h-[80vh]'>
      
                    <form onSubmit={handleSubmit(handleRegister)}>
                  <fieldset className="fieldset bg-base-100 border-base-100 rounded-box  border p-6 w-xs">
                    <p className='text-xl font-bold'>Register</p>

                    <label className="label">Name</label>
                    <input type="text" {...register("name" ,{ required: "Name is required" })} className="input" placeholder="Name"  />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                    <label className="label">Photo URL</label>
                    <input type="text" {...register("photoUrl" ,{ required: "Photo URL is required" })} className="input" placeholder="Photo URL"  />
                    {errors.photoUrl && <p className='text-red-500'>{errors.photoUrl.message}</p>}

                    <label className="label">Email</label>
                    <input type="email" {...register("email" ,{ required: "Email is required" })} className="input" placeholder="Email"  />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                    <fieldset className='relative'>
                        <label className="label">Password</label>
                    <input type={show ? "text" : "password"}
                     {...register("password", { required: "Password is required" })} className="input" placeholder="Password" />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                    <span onClick={() => setShow(!show)} className="cursor-pointer absolute right-2 top-8">
                        <FaEye />
                    </span>
                    </fieldset>

                    <button className="btn btn-neutral mt-4">Register</button>

                    <p className='text-center my-2 font-semibold'>OR</p>
                    <button onClick={handleGoogle} className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
                       </button> 
                    
                        </fieldset>
                    </form>
            <ToastContainer />
        </div>
        
    );
};

export default RegisterPage;
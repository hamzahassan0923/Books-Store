'use client'
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
     const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

    const handleLogin = (data) => {
        console.log(data);
       
    }
    return (
        <div className='flex justify-center items-center  bg-[#f4f7f6e8] min-h-[80vh]'>
      
                    <form onSubmit={handleSubmit(handleLogin)}>
                  <fieldset className="fieldset bg-base-100 border-base-100 rounded-box  border p-6 w-xs">
                    <p className='text-xl font-bold'>Login</p>

                    <label className="label">Email</label>
                    <input type="email" {...register("email" ,{ required: "Email is required" })} className="input" placeholder="Email"  />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                    <label className="label">Password</label>
                    <input type="password" {...register("password", { required: "Password is required" })} className="input" placeholder="Password" />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
        
                    <button className="btn btn-neutral mt-4">Login</button>
                    <p className='mt-1'>Don't have an account? <Link href="/register" className="link link-primary">Register</Link></p>
                        </fieldset>
                    </form>
            
        </div>
    );
};

export default LoginPage;
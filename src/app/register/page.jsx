'use client'
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
       const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
        const handleRegister = (data) => {
            console.log(data);
           
        }
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

                    <label className="label">Password</label>
                    <input type="password" {...register("password", { required: "Password is required" })} className="input" placeholder="Password" />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
        
                    <button className="btn btn-neutral mt-4">Register</button>
                    
                        </fieldset>
                    </form>
            
        </div>
        
    );
};

export default RegisterPage;
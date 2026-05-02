'use client'
import React from 'react';
import { authClient } from '../lib/auth-client';
import Image from 'next/image';

const ProfilePage = () => {
     const { data: session } = authClient.useSession()
      const user = session?.user
      console.log(user);

    //   console.log(user.image, "hamza");
    
    return (
        <div>
           <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-md p-7 w-80 text-center hover:shadow-lg transition">       <img
            src={user.image}
          alt="profile"
          className="w-24 h-24 rounded-full mx-auto border-2 border-gray-200"
        />
        <h2 className="mt-4 text-xl font-semibold text-gray-900">
          {user.name}
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          {user.email}
        </p></div>
    </div>
         
        </div>
    );
};

export default ProfilePage;
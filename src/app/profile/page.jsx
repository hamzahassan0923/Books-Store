'use client'
import React from 'react';
import { authClient } from '../lib/auth-client';


const ProfilePage = () => {
     const { data: session } = authClient.useSession()
      const user = session?.user;
   
     

    

    return (
        <div>
           <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-md p-7 w-80 text-center hover:shadow-lg transition">      
        <h2 className="mt-4 text-xl font-semibold text-gray-900">
            {user ? `${user.name}` : 'No user logged in'}
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          {user ? `Email: ${user.email}` : 'Please log in to see your profile information.'}
        </p>
        </div>
    </div>
         
        </div>
    );
};

export default ProfilePage;
"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { HomeIcon } from 'lucide-react';

const NotFound = () => {
  const router = useRouter();

  const handleReturn = () => {
    toast.success('Redirecting to dashboard...', {
      duration: 2000,
      position: 'top-center',
    });
    router.push('/admin/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-50">
      <div className="text-center">
        <h1 className="font-bold text-gray-800 text-9xl">404</h1>
        
        <div className="mt-4">
          <div className="relative">
            <div className="w-48 h-2 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-blue-500" />
          </div>
        </div>
        
        <h2 className="mt-8 text-3xl font-semibold text-gray-700">
          Page Not Found
        </h2>
        
        <p className="mt-4 text-gray-500">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <button
          onClick={handleReturn}
          className="flex items-center justify-center px-6 py-3 mx-auto mt-8 space-x-2 text-white transition-opacity rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90"
        >
          <HomeIcon size={20} />
          <span>Return to Dashboard</span>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
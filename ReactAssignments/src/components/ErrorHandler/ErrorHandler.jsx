import React from 'react'

function ErrorHandler({message}) {
  return (
    <div className="flex justify-center items-center h-screen bg-black shadow-lg text-white">
    {
        message || "Failed to fetch data. Please try again later." 
    }
    </div>
  );
}

export default ErrorHandler
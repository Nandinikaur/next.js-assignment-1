import React from 'react';


const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center w-[100%] h-[1200px] gap-[20px]">
      <h2 className="text-2xl text-red-600">Something went wrong!</h2>
      <button
        className="w-[200px] h-[60px] bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400"
      >
        Try Again
      </button>
    </div>
  );
};
export default Error;

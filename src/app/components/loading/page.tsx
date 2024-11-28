import React from 'react'

const Loading = () => {
  return (
    <div className='flex flex-col justify-center items-center w-[100%] h-[1200px]  gap-[20px]'>

        <div className="text-center">
      <p className="text-lg">Loading...</p>
    </div>
    <div className="items-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>
    </div>
  );
};

export default Loading;
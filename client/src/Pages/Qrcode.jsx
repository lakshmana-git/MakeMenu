import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode.react';
import { useSelector } from 'react-redux';
export const Qrcode = () => {
  const [webpageURL, setWebpageURL] = useState('');
  const {theme,currentUser} = useSelector((state)=>state.user)
  console.log(currentUser.username)
  useEffect(() => {
 
    const url = `https://make-menu.onrender.com/display/${currentUser._id}/${currentUser.username}/${theme}`; 
    setWebpageURL(url);
  }, []);

  const handleDownload = () => {
   
    const link = document.createElement('a');
    link.download = 'qrcode.png'; 
    link.href = document.querySelector('canvas').toDataURL('image/png'); 
    link.click();
  };

  return (
    <div className='h-[70vh] flex flex-col justify-center items-center'>
      <div className='w-[80%] h-[40vh] shadow-2xl mb-3 flex justify-center items-center rounded-lg'>
        <QRCode value={webpageURL} size={200} className='mb-3' />
      </div>

      <button
        className='bg-blue-700 text-white font-bold py-2 px-4 w-80 rounded hover:bg-blue-800'
        onClick={handleDownload}
      >
        Download
      </button>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'
import { BallTriangle, Oval, ThreeDots } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [formData,setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })

  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(false)
  const handleChange = (e)=>{
          setFormData({
            ...formData,[e.target.id]:e.target.value
          })
  }
  console.log(formData)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        setLoading(true)
        
       console.log(formData)
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false)
      setError(false)
      if(data.success===false){
        setError(true)
        toast.info('User already exist!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        
      }else{
        toast.success('Account Added Successfully 🥳', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });

      }
      console.log(data);
 
   
    } catch (error) {
      setLoading(false)
      setError(true)
      toast.error(`Something went Wrong!`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    }
  };
  

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     if (!process.env.REACT_APP_ENV?.includes("prod")) {
//       // Handle the "Guest Login" logic here
//     }
//     setIsLoading(true);
//     // Perform the login logic with email
//     setEmail("");
//     setIsLoading(false);
//   };

//   const handleLoginGuest = async () => {
//     if (process.env.REACT_APP_ENV?.includes("prod")) return;
//     // Handle the "Guest Login" logic here
//   };

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     document.title = "Sign in to FormEasy";
//   }, []);

  return (
    <div className="flex h-screen w-screen items-center justify-center gradient-custom">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl  shadow-2xl">
        <div className="flex flex-col items-center justify-center space-y-1 bg-white px-4 py-6 pt-8 text-center sm:px-16">
      
            <Link to='/'><img src="./logo.png" alt="logo"  className='w-[30vw] md:w-[16vw] lg:w-[6vw]'/></Link>
            <p>Welcome</p>
          {/* <h3 className="text-2xl font-semibold">Sign In</h3> */}
          
          <a href="#" className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
      <div className="px-4 py-3">
        <svg className="h-6 w-6" viewBox="0 0 40 40">
          <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
          <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
          <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
          <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
        </svg>
      </div>
      <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign Up with Google</h1>
    </a>
        </div>
        <div className=" flex items-center justify-between bg-white">
                <span className="border-b w-1/5 lg:w-1/4"></span>
                <a href="#" className="text-xs text-center text-gray-500 uppercase">or Create Account</a>
                <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
        
        <form
          className="flex flex-col space-y-4 bg-white px-4 py-4 sm:px-16 w-full"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name" className="block text-xs text-gray-600 font-bold">
              User Name
            </label>
            <input
              type="text"
              placeholder="Username"
              id="username"
              name="username"
              onChange={handleChange}
              required
              className='bg-gray-200 text-gray-700  border border-gray-300 rounded py-2 px-4 block w-full appearance-none mx-auto'
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs text-gray-600 font-bold">
              Email Address
            </label>
            <input
              type="text"
              placeholder="example@email.com"
              id="email"
              name="email"
              onChange={handleChange}
              required
              className='bg-gray-200 text-gray-700  border border-gray-300 rounded py-2 px-4 block w-full appearance-none mx-auto'
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-xs text-gray-600 font-bold">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              onChange={handleChange}
              required
              className='bg-gray-200 text-gray-700  border border-gray-300 rounded py-2 px-4 block w-full appearance-none mx-auto'
            />
          </div>
          <button disabled={loading} className='bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-800 flex justify-center disabled:opacity-80'>
          {loading ?<div><ThreeDots
height="25 " 
width="25" 
radius="9"
color="white" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}

 /></div>: 'Sign Up'}
          
          </button>
          <p className="text-center text-sm text-gray-600">
          Already registered?{' '}
           
              <Link to='/login'><span className='text-blue-900 text-underline font-semibold'>Sign in</span></Link>
         
          </p>
        </form>
        <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
      </div>
    </div>
  );
};
export default Signup

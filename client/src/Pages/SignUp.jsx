import React, { useState, useEffect } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import '../index.css'
import { ThreeDots } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OAuth from '../Components/OAuth';




const Signup = () => {
  const navigate = useNavigate()
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
      navigate('/login')

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
  



  return (
    <div className="flex h-screen w-screen items-center justify-center gradient-custom">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl  shadow-2xl">
        <div className="flex flex-col items-center justify-center space-y-1 bg-white px-4 py-6 pt-8 text-center sm:px-16">
      
            <Link to='/'><img src="./logo.png" alt="logo"  className='w-[30vw] md:w-[16vw] lg:w-[6vw]'/></Link>
            <p>Welcome</p>
          {/* <h3 className="text-2xl font-semibold">Sign In</h3> */}
          
    <OAuth/>
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

import React, { useState, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom'; // Assuming you're using React Router for the Link component
import { ThreeDots } from 'react-loader-spinner';
import '../index.css'
import { ToastContainer, toast } from 'react-toastify';
import { signInFailure,signInStart,signInSuccess } from '../redux/user/userSlice';
import { useDispatch,useSelector } from 'react-redux';
import OAuth from '../Components/OAuth';





export const Login = () => {
const [formData,setFormData]  = useState({})
const dispatch = useDispatch()
const navigate = useNavigate();
const {loading,error} = useSelector((state)=>state.user)

  const handleChange = (e)=>{
    setFormData({
      ...formData,[e.target.id] : e.target.value
    })
  }
  const handleSubmit = async(e)=>{
    e.preventDefault()

    try{   dispatch(signInStart())
            const res = await fetch('/api/auth/signin',{
              "method":"POST",
              headers:{
                'Content-Type':"application/json",
              },
              body:JSON.stringify(formData)
             })

             const data =await res.json()
           
             if(data.success===false){
              dispatch(signInFailure(data.error))
              toast.error(`${data.error}`, {
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
             
             dispatch(signInSuccess(data.rest))
             navigate('/dashboard');
             
             
    }catch(error){
       dispatch(signInFailure(error))
          toast.error(`${data.error}`, {
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
    }

  

  return (
    <div className="flex h-screen w-screen items-center justify-center gradient-custom">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl  shadow-2xl">
        <div className="flex flex-col items-center justify-center space-y-1 bg-white px-4 py-6 pt-8 text-center sm:px-16">
      
            <Link to='/'><img src="./logo.png" alt="logo"  className='w-[30vw]  md:w-[16vw] lg:w-[6vw]'/></Link>
            <p>Welcome Back!</p>
          {/* <h3 className="text-2xl font-semibold">Sign In</h3> */}
          
        <OAuth/>
        </div>
        <div className=" flex items-center justify-between bg-white">
                <span className="border-b w-1/5 lg:w-1/4"></span>
                <a href="#" className="text-xs text-center text-gray-500 uppercase">or login with email</a>
                <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
        
        <form
          className="flex flex-col space-y-4 bg-white px-4 py-4 sm:px-16 w-full"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="email" className="block text-xs text-gray-600 font-bold">
              Email Address
            </label>
            <input
              type="text"
              placeholder="example@email.com"
              id="email"
              name="email"
              required
              onChange={handleChange}
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
               required
               onChange={handleChange}
              className='bg-gray-200 text-gray-700  border border-gray-300 rounded py-2 px-4 block w-full appearance-none mx-auto'
            />
          </div>
          <button className='bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-800 flex justify-center'>
          {loading ?<div><ThreeDots
height="25 " 
width="25" 
radius="9"
color="white" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}

 /></div>: 'Login'}
          </button>
          <p className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
           
              <Link to='/signup'><span className='text-blue-900 text-underline font-semibold'>SignUp</span></Link>
         
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

          }

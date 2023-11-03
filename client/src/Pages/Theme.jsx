import React from 'react'
import { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { setTheme } from '../redux/user/userSlice';


const RadioButton = ({ id, name, value, checked, label, text, onSelect }) => {
  return (
    <div className={`relative radio mt-4`}>
    <input
      type="radio"
      id={id}
      name={name}
      value={value}
      checked={checked}
      onChange={onSelect}
      className="hidden"
    />
    <label
      htmlFor={id}
      className={`border-2 border-gray-300 mx-4 bg-white block shadow-md rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 ${
        checked ? 'border-green-600 bg-green-500' : ''
      }`}
    >
      <div className="flex justify-between items-center px-4 pt-6">
        <div className="uppercase tracking-wide">
          <strong>{label}</strong>
        </div>
        <svg className="w-8 h-8 flex-no-shrink bg-green-100 rounded-full opacity-50" fill="#4caf50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </svg>
      </div>
      <div className="pl-4 text-3xl font-semibold text-blue-900 pt-4 flex justify-center p-3">
        <strong className="text-5xl mr-2">{text}</strong>
      </div>
    </label>
  </div>
  );
};
const Theme = () => {
   const {currentUser} = useSelector((state)=>state.user)
   const [currentTheme, setCurrentTheme] = useState(null);
  
  const dispatch = useDispatch()
  const handleThemeChange = (e) => {
    const newTheme = e.target.value;
   console.log(newTheme)
   
    // Send the updated theme to the server
    fetch('/api/item/theme/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({  theme: newTheme ,user: currentUser._id}), 
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); 
        dispatch(setTheme(newTheme)); 
      })
     
      .catch((error) => {
        console.error('Error updating user theme:', error);
      });
  };


useEffect(() => {
  
  fetch(`/api/item/theme/current/${currentUser._id}`) 
    .then((response) => response.json())
    .then((data) => {
      const theme = data.currentTheme; 
      console.log(theme)
      setCurrentTheme(theme);
      dispatch(setTheme(theme));
    })
    .catch((error) => {
      console.error('Error fetching current theme:', error);
    });
}, [dispatch]);
          console.log(currentTheme)
    
  return (
    <div>
  

  <div className="flex justify-center mt-12 flex-wrap">
      <RadioButton id="theme1" name="theme" value="theme1" checked={currentTheme === 'theme1'} label="Theme1" text={1} onSelect={handleThemeChange} />
      <RadioButton id="theme2" name="theme" value="theme2" checked={currentTheme === 'theme2'} label="Theme2" text={2}  onSelect={handleThemeChange} />
      <RadioButton id="theme3" name="theme" value="theme3" checked={currentTheme === 'theme3'} label="Theme3" text={3}  onSelect={handleThemeChange} />
    </div>
</div>

  )



  }



export default Theme
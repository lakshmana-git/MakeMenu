import { useEffect, useState } from "react";
import '../themes/theme1.css'
import { Link, useParams } from "react-router-dom";
import { current } from "@reduxjs/toolkit";




 export default function Display() {
  const [items,setItems] = useState([])
  const { theme, userId,name } = useParams();
  
  
   useEffect(()=>{
      fetchItems()
 },[theme])
 const [faqSelected, setFaqSelected] = useState(null);

const handleFaqClick = (index) => {
  if (faqSelected === index) {
    setFaqSelected(null);
  } else {
    setFaqSelected(index);
  }
};

  const fetchItems = async () => {
    
    try {
      const response = await fetch(`/api/item/${userId}`); 
      if (response.ok) {
        const data = await response.json();
     
        setItems(data.items);
        
      }
      else{
        setItems([])
      }
     
    } catch (error) {
      console.error('Error fetching items:', error);
      setItems([])
    }
  };
    
  
  const groupedItems = items.reduce((result, item) => {
    const { category, ...rest } = item;
    const categoryName = category.name;
    if (!result[categoryName]) {
      result[categoryName] = [];
    }
    result[categoryName].push(rest);
    return result;
  }, {});

 
  return (<>
    {
      (typeof theme !== "undefined" && theme !== 'theme3') && (<div className={`flex flex-col justify-start items-center c-${theme} md:hidden lg:hidden`}>

     
      <h1 className={`name-${theme} text-center`}>{name}</h1>

        <h1 className={`h-${theme}`}>Menu</h1>
     
        <div className="menu text-2xl">
          {Object.keys(groupedItems).map((category) => (
            
            <div key={category}>
              <h2 className={`text-3xl h2-${theme} text-center mt-2`}>{category}</h2>
              <ul className="w-[80vw]">
                {groupedItems[category].map((item) => (
                 
                  <div  key={item._id} className={`flex justify-between gap-1 p-1`}>
                  <li  className={`l-${theme}`}>{item.name}</li>
                  <li  className={`l-${theme}`}>{item.price}
                  
                  
                  
                  </li>
                  </div>
  
                ))}
              </ul>
            </div>
          ))}
          
  
          
         
          
        </div>
      </div>)
    }
    <div className='hidden md:block lg:block h-[100vh]'>
           <div className='flex flex-col justify-center items-center h-[60vh]'>
                 <img className='h-[400px]' src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg?w=740&t=st=1698480017~exp=1698480617~hmac=3c3afa46a1adec14f79c986ce930d86b1dec259f5979468fb5eaa1a289276ed9" alt="View on Mobile"/>
                 <h1 className='font-bold text-xl'>Designed for mobile devices</h1>
           </div>
    </div>
    {
      typeof theme=== "undefined" && (
        <div className='flex justify-center items-center h-[75vh]'>
       <div className='bg-blue-100 w-[80%] p-4 h-[30%] rounded-lg flex justify-center items-center'>
           <h1 className='text-3xl font-bold'>Select <span className='inline-block bg-blue-800 bg-clip-text text-4xl text-transparent'>Theme</span></h1>
    </div>
      
  </div>
      )
    }
    
    
    {
      theme !== "undefined" && theme === 'theme3' && ( <div>
        <div className='md:hidden lg:hidden flex flex-col justify-center items-center  bg-white min-h-screen'>
        
        <div className=" bg-orange-400 text-white text-center w-[80%] mx-auto p-2 rounded-md mt-4">
       
       <h1 className="font-bold text-3xl mb-3">{name}</h1>
       <h1 className="font-semibold text-xl">Menu</h1>
      
     </div>
      
      
      <div className="pt-10 px-3 pb-20 custom-gradient-background">
   
  
   <div className="my-10 max-w-2xl mx-auto space-y-4 lg:space-y-6">
  {Object.keys(groupedItems).map((category, index) => (
    <div
      key={`category-${index}`}
      className={`item bg-white shadow-md rounded-md p-3 transition-max-h ${
        faqSelected === index ? 'open-accordion' : ''
      }`}
    >
      <div
        className="flex items-center cursor-pointer"
        onClick={() => handleFaqClick(index)}
      >
        <div className="bg-indigo-100 text-blue-400 w-8 h-8 md:w-10 md:h-10 rounded-md flex items-center justify-center font-bold text-lg font-display">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
        <div className="ml-3 text-blue-600 font-bold">
          {category}
        </div>
      </div>
      <div
        className={`relative overflow-hidden max-h-0 duration-700 ${
          faqSelected === index ? 'max-h-full' : ''
        }`}
      >
        <div className="text-black ml-8 md:ml-10 pl-3 md:pl-4 lg:pl-6 py-2 space-y-3">
          {groupedItems[category].map((item, itemIndex) => (
            <div key={`item-${itemIndex} flex flex-col`}>
              <ul className="flex justify-between text-xl">
                <li>{item.name}</li>
                <li>{item.price}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
    </div>

     </div>
  )
 

    }
    
  <div className=' p-3 bg-slate-200 rounded-md flex justify-center items-center'>
                  <h3 className='text-[4vw] md:text-[3vw] lg:text-[1.5vw]'>Made with ❤️ by <Link className='text-blue-800'>Make Menu</Link> </h3>
            </div>

    </>








  )
}
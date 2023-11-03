import { useState ,useEffect} from "react";
import { useSelector } from "react-redux";

export default function Items() {
  const [popup, setPopup] = useState(false);
  const {currentUser} = useSelector(state=>state.user)
 
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [category, setCategory] = useState("");
  const [allcategories,setAllCategories] = useState([])
  const [edit, setEdit] = useState(false);
  const [items,setItems] = useState([])
  const [editState, setEditState] = useState({});
  const [editName, setEditName] = useState("");
const [editNumber, setEditNumber] = useState("");
const [editCategory, setEditCategory] = useState("");
  console.log(category)
  useEffect(() => {
    fetchItems()
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch("/api/item/allcategories", {
        headers: {
          'Content-Type': 'application/json', 
        },
      });
      if (response.ok) {
        const data = await response.json();
        setAllCategories(data.categories);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  
  const fetchItems = async () => {
    try {
      const response = await fetch(`/api/item/${currentUser._id}`, {
        headers: {
          'Content-Type': 'application/json', 
        
        },
      });
      if (response.ok) {
        const data = await response.json();
        setItems(data.items);
        console.log(items);
      }
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };
  

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const newItemData = {
        name,
        price: parseFloat(number), 
        category, 
        user:currentUser._id,
      };
      console.log(newItemData)

      
      const response = await fetch('/api/item/additem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItemData),
      });
      console.log(response)
      if (response.ok) {
      
        const newItem = await response.json();
        console.log('Item added:', newItem);
        fetchItems()
         setPopup(false)
      } else {
        
        console.error('Error adding item:', response.statusText);
      }
    } catch (error) {
     
      console.error('Error adding item:', error);
    }
  };

  
  const handleEditFormSubmit = async (itemId) => {
   
  
    try {
      
      const updatedItemData = {
        name:editName, 
        price: parseFloat(editNumber), 
        category:editCategory, 
      };
  
     
      const response = await fetch(`/api/item/edit/${itemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedItemData),
      });
  
      if (response.ok) {
       
        const updatedItem = await response.json();
       
        fetchItems(); 
        setEditState({});
      } else {
       
        console.error('Error editing item:', response.statusText);
      }
    } catch (error) {
     
      console.error('Error editing item:', error);
    }
  };
  
  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleClick = () => {
    console.log(popup);
    setPopup(!popup);
  };
  

  const initialEditState = {};
items.forEach((item) => {
  initialEditState[item._id] = false;
});





const handleOpenEdit = (item) => {
  setEditName(item.name);
  setEditNumber(item.price);
  setEditCategory(item.category.name);
  setEditState((prevState) => ({
    ...prevState, // Spread the previous state
    [item._id]: true, // Update the specific item's state
  }));
  console.log(editState)
};


const handleCloseEdit = (itemId) => {
  setEditState({});
};
const handleDeleteItem = async (itemId) => {
  try {
    const response = await fetch(`/api/item/delete/${itemId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      console.log('Item deleted successfully');
      // Optionally, update the UI to reflect the deleted item
      fetchItems(); // Re-fetch the items after successful deletion
    } else {
      console.error('Error deleting item:', response.statusText);
    }
  } catch (error) {
    console.error('Error deleting item:', error);
  }
}

  return (
    <div className="main  flex flex-col items-center relative">
      
      <div className="w-11/12">
        <div className="inner flex justify-between items-center">
          <h2 className="text-lg md:text-2xl font-semibold">Add your menu Items</h2>
          <button onClick={handleClick} className="add bg-green-500 text-white px-4 py-2 rounded flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
</svg>

            
          </button>
        </div>
        
        {popup ? (
          <div className="card w-96 bg-white border border-gray-300 rounded shadow-lg mx-auto p-5 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="card-header text-center">
              <h2 className="text-2xl">Enter Item</h2>
            </div>
            <div className="card-content mt-5">
              <form onSubmit={handleFormSubmit}>
                <div className="form-group mb-5">
                  <label htmlFor="name" className="font-bold mb-2 block">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Item name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="form-group mb-5">
                  <label htmlFor="price" className="font-bold mb-2 block">Price</label>
                  <input
                    type="number"
                    id="price"
                    required
                    placeholder="Enter price"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="form-group mb-5">
  <label htmlFor="category" className="font-bold mb-2 block">
    Category
  </label>
  <select
    id="category"
    required
    value={category}
    onChange={(e) => setCategory(e.target.value)}
    className="w-full px-4 py-2 border border-gray-300 rounded"
  >
    <option value="">Select</option>
    {allcategories.map((cat) => (
      <option key={cat._id} value={cat.name}>
        {cat.name}
      </option>
    ))}
  </select>
</div>

                <div className="card-footer flex justify-between">
                  <button className="deploy-button bg-blue-500 text-white px-4 py-2 rounded">
                    
                    Add Item
                  </button>

                  <button
                    type="button"
                    className="cancel-button bg-gray-400 text-white px-4 py-2 rounded"
                    onClick={handleClick}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          ""
        )}
        
      </div>
     <div className="overflow-y-auto w-11/12 h-[80vh] mt-5 rounded-md">
     {
  items.length ===0 &&(<div className="flex justify-center p-10">

    <img src="https://img.freepik.com/free-vector/list-concept-illustration_114360-1320.jpg?w=740&t=st=1698899386~exp=1698899986~hmac=283adcf47ffd4a221090917c2d5bd93ffe4d6fb8307295f786f63a523b506c6a"  alt="add itmes" className="lg:h-[30vw]"/>
  </div>)
}
   
           
      {
       items.map((item)=>(
         <div className="item bg-seashell p-5  bg-slate-100 rounded flex justify-between mb-3" key={item._id}>
         <div className="item-tag">
           <h4 className="font-semibold">{item.name}</h4>
           <p className="text-blue">{item.category.name}</p>
           <p className="text-2xl font-semibold">{item.price}</p>
           
         </div>
         <div className="item-button flex items-center space-x-7">

         <svg onClick={()=>handleOpenEdit(item)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursior-pointer">
 <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
</svg>

           <svg onClick={()=>handleDeleteItem(item._id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600">
 <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg> 
     
        
         </div>
         {editState[item._id] && (
     <div className="card w-96 bg-white border border-gray-300 rounded shadow-lg mx-auto p-5 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
       <div className="card-header text-center">
         <h2 className="text-2xl">Update Item</h2>
       </div>
       <div className="card-content mt-5">
         <form onSubmit={()=>handleEditFormSubmit(item._id)}>
           <div className="form-group mb-5">
             <label htmlFor="name" className="font-bold mb-2 block">Name</label>
             <input
               type="text"
               id="name"
              
               value={editName}
               onChange={(e) => setEditName(e.target.value)}
               className="w-full px-4 py-2 border border-gray-300 rounded"
             />
           </div>
           <div className="form-group mb-5">
             <label htmlFor="price" className="font-bold mb-2 block">Price</label>
             <input
               type="number"
               id="price"
            
               value={editNumber}
               onChange={(e) => setEditNumber(e.target.value)}
               className="w-full px-4 py-2 border border-gray-300 rounded"
             />
           </div>
           <div className="form-group mb-5">
<label htmlFor="category" className="font-bold mb-2 block">
Category
</label>
<select
id="category"
value={editCategory}
onChange={(e) => setEditCategory(e.target.value)}
className="w-full px-4 py-2 border border-gray-300 rounded"
>
<option value="">Select</option>
{allcategories.map((cat) => (
 <option key={cat._id} value={cat.name}>
   {cat.name}
 </option>
))}
</select>
</div>

           <div className="card-footer flex justify-between">
             <button className="deploy-button bg-blue-500 text-white px-4 py-2 rounded">
               
               Edit Item
             </button>

             <button
               type="button"
               className="cancel-button bg-gray-400 text-white px-4 py-2 rounded"
               onClick={()=>handleCloseEdit(item._id)}
             >
               Cancel
             </button>
           </div>
         </form>
       </div>
     </div>
   ) }
 
       </div>
       ))
      }
      

</div>
 </div>



  );
}

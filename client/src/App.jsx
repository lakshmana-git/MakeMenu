import { BrowserRouter,Routes,Route } from "react-router-dom"
import { Login } from "./Pages/Login"
import Signup from "./Pages/SignUp"
import Wrapper from "./Pages/Wrapper"
import { Home } from "./Pages/Home"
import Example from "./Components/Dashboard"
import PrivateRoute from "./Components/PrivateRoute"
import Display from "./Pages/Display"


function App() {
  

  return (
    <> 
         <BrowserRouter>

            <Routes>
                  <Route path="/login" element={<Login/>} />
                  <Route path="/signup" element={<Signup/>} />
                  <Route
                    path="/"
                    element={
                        <Wrapper>
                            <Home/>
                        </Wrapper>
                       
                     
                    }
                  />
                  <Route element={<PrivateRoute/>}>
                             <Route path="/dashboard" element={<Example/>}/>
                  </Route>
                  <Route path='/display/:userId/:name/:theme' element={<Display />} />

                </Routes>
         </BrowserRouter>
    </>
  )
}

export default App

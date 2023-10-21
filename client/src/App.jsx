import { BrowserRouter,Routes,Route } from "react-router-dom"
import { Login } from "./Pages/Login"
import Signup from "./Pages/SignUp"
import Wrapper from "./Pages/Wrapper"
import { Home } from "./Pages/Home"

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
                </Routes>
         </BrowserRouter>
    </>
  )
}

export default App

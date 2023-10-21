import Header from "../Components/Nav";
import Footer from "../Components/Footer";



const Wrapper = ({children}) => {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default Wrapper
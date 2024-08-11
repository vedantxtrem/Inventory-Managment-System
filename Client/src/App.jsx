import { Route, Routes } from "react-router-dom"
import HomePage from "./component/HomePage";
import AddProduct from "./component/product/AddProduct";

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage/>}/>

          <Route path="/addproduct" element={ <AddProduct/> }/>
          
      </Routes>
    </>
  )
}

export default App;

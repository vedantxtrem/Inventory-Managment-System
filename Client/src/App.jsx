import { Route, Routes } from "react-router-dom"
import HomePage from "./component/HomePage";
import AddProduct from "./component/product/AddProduct";
import AllProduct from "./component/product/AllProduct";

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage/>}/>

          <Route path="/addproduct" element={ <AddProduct/> }/>
          <Route path="getproduct"  element={<AllProduct/>}/>

      </Routes>
    </>
  )
}

export default App;

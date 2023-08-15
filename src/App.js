
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componants/Header/NavHeader/Header";
import SignUp from "./componants/profile/signup/SignUp";
import LogIn from "./componants/profile/login/LogIn"
import Product from './Pages/Products/Products'
import ProductDescription from './Pages/productDescription/ProductDescription'
import CartPage from "./Pages/Cart/CartPage";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import HomeContent from "./Pages/HomeContent/HomeContent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<HomeContent />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/product" element={<Product/>}></Route>
          <Route path="/productdetail/:id" element={<ProductDescription/>}></Route>
          <Route path="/cart" element={<CartPage/>}></Route>

          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

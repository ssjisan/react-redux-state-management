import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/User Interface/Header";
import ProductDetails from "./Components/User Interface/ProductDetails";
import ProductList from "./Components/User Interface/ProductList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductList />} />
          <Route path="product/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

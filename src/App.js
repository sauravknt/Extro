import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/Enquiry";
import LoginSignup from "./Pages/LoginSignup";
import Cart from "./Pages/Cart";
import SCategories from "./Pages/Categories";
import Home from "./Pages/Home";
import Ptmtalive from "./Pages/Ptmtalive";
import Ptmtfusion from "./Pages/Ptmtfusion";
import Ppstone from "./Pages/Ppstone";
import Ppfusion from "./Pages/Ppfusion";
import Pproyal from "./Pages/Pproyal";
import Cpturbo from "./Pages/Cpturbo";
import Cpchoco from "./Pages/Cpchoco";
import Cpkia from "./Pages/Cpkia";
import Cpfusion from "./Pages/Cpfusion";
import Cpvignet from "./Pages/Cpvignet";
import Ptmtstone from "./Pages/Ptmtstone";
import Cpmatrix from "./Pages/Cpmatrix";
import Shower from "./Pages/Shower";
import Divartorupper from "./Pages/Divartorupper";
import Sinkmixar from "./Pages/Sinkmixar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/Ptmtstone"
            element={<Ptmtstone category="Ptmtstone" />}
          />
          <Route
            path="/Divartorupper"
            element={<Divartorupper category="Divartorupper" />}
          />
          <Route
            path="/Sinkmixar"
            element={<Sinkmixar category="Sinkmixar" />}
          />
          <Route path="/Shower" element={<Shower category="Shower" />} />
          <Route path="/Cpmatrix" element={<Cpmatrix category="Cpmatrix" />} />
          <Route path="/Cpvignet" element={<Cpvignet category="Cpvignet" />} />
          <Route path="/Cpfusion" element={<Cpfusion category="Cpfusion" />} />
          <Route path="/Cpkia" element={<Cpkia category="Cpkia" />} />
          <Route path="/Cpchoco" element={<Cpchoco category="Cpchoco" />} />
          <Route path="/Cpturbo" element={<Cpturbo category="Cpturbo" />} />
          <Route path="/Pproyal" element={<Pproyal category="Pproyal" />} />
          <Route path="/Ppfusion" element={<Ppfusion category="Ppfusion" />} />
          <Route path="/Ppstone" element={<Ppstone category="Ppstone" />} />
          <Route
            path="/Ptmtfusion"
            element={<Ptmtfusion category="Ptmtfusion" />}
          />
          <Route
            path="/Ptmtalive"
            element={<Ptmtalive category="Ptmtalive" />}
          />
          <Route path="/Home" element={<Home category="Home" />} />
          <Route path="/" element={<Shop />} />
          <Route
            path="/Categories"
            element={<SCategories category="Categories" />}
          />
          <Route
            path="/New_Arival"
            element={<ShopCategory category="New_Arival" />}
          />
          <Route path="/product" element={<product />}>
            <Route path=":productId" element={<product />} />
          </Route>
          <Route
            path="/Enquiry"
            element={<ShopCategory category="Enquiry" />}
          />

          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./view/Home";
import Contact from "./view/Contact";
import NotFound from "./view/NotFound";


export default function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>        
      </main>
    </div>
  );
}

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Library from "./pages/Library";
import BookDetails from "./pages/BookDetails";
import Reader from "./pages/Reader";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
       <main className="pt-[76px]">
        <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/read/:id" element={<Reader />} />
      </Routes>
      </main>
      
    </div>
    
  );
}

export default App;
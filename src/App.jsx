import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Library from "./pages/Library";
import BookDetails from "./pages/BookDetails";
import Reader from "./pages/Reader";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-[#F3F3F2] text-[#222222]">
      <Navbar />

      <main className="pt-[76px]">
        <Routes>
          {/* HOME */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* LIBRARY */}
          <Route
            path="/library"
            element={<Library />}
          />

          {/* BOOK DETAILS */}
          <Route
            path="/books/:id"
            element={<BookDetails />}
          />

          {/* READER */}
          <Route
            path="/read/:id"
            element={<Reader />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
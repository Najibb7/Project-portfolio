import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Knowledges from "./pages/Knowledges";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/competences" element={<Knowledges/>} />
        <Route path="/contacts" element={<Contact/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

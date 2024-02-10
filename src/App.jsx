import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import CardSections from './components/CardSections';
import ChoiceListPage from './components/PageWithChoiceList'; 
import './App.css'
import sectionsJSON from './menu.json';
import { useState } from 'react';

function App() {
  const [sections, setSections] = useState(sectionsJSON.sections);
  return (
    <BrowserRouter>
      <div className="main-container">
        <Navbar />
      
        <Routes>
        <Route path="/" element={<CardSections />} />
        <Route path="/choice-list/:category" element={<ChoiceListPage sections={sections} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
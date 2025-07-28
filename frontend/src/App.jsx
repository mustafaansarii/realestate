import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropertyList from './components/PropertyList';
import PropertyDetail from './components/PropertyDetail';
import AdminPanel from './components/AdminPanel';
import PropertyForm from './components/PropertyForm';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<PropertyList />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/admin/new" element={<PropertyForm />} />
          <Route path="/admin/edit/:id" element={<PropertyForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

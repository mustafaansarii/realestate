import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  createProperty, 
  updateProperty, 
  getProperty 
} from '../services/api';

const PropertyForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = !!id;
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    address: '',
    city: '',
    state: '',
    bedrooms: 1,
    bathrooms: 1,
    areaSqft: '',
    propertyType: 'APARTMENT'
  });

  useEffect(() => {
    if (isEdit) {
      const fetchProperty = async () => {
        const { data } = await getProperty(id);
        setFormData(data);
      };
      fetchProperty();
    }
  }, [id, isEdit]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const propertyData = {
      ...formData,
      price: parseFloat(formData.price),
      bedrooms: parseInt(formData.bedrooms),
      bathrooms: parseInt(formData.bathrooms),
      areaSqft: parseInt(formData.areaSqft)
    };
    
    if (isEdit) {
      await updateProperty(id, propertyData);
    } else {
      await createProperty(propertyData);
    }
    
    navigate('/admin');
  };

  return (
    <div className="container mt-5 bg-white rounded-lg p-4">
      <h2 className="text-3xl font-bold">{isEdit ? 'Edit Property' : 'Add New Property'}</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
          <input 
            type="text" 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-200"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
          <textarea 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-200"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
          />
        </div>
        
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2">Price (₹)</label>
          <input 
            type="number" 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-200"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2">Property Type</label>
          <select 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-200"
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
          >
            <option value="APARTMENT">Apartment</option>
            <option value="VILLA">Villa</option>
            <option value="PLOT">Plot</option>
            <option value="COMMERCIAL">Commercial</option>
          </select>
        </div>
        
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2">Area (sq.ft)</label>
          <input 
            type="number" 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-200"
            name="areaSqft"
            value={formData.areaSqft}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2">Address</label>
          <input 
            type="text" 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-200"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2">City</label>
          <input 
            type="text" 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-200"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2">State</label>
          <input 
            type="text" 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-200"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2">Bedrooms</label>
          <input 
            type="number" 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-200"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            min="1"
            required
          />
        </div>
        
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2">Bathrooms</label>
          <input 
            type="number" 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-200"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
            min="1"
            required
          />
        </div>
        
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {isEdit ? 'Update Property' : 'Add Property'}
        </button>
      </form>
    </div>
  );
};

export default PropertyForm;

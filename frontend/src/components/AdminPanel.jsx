import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProperties, deleteProperty } from '../services/api';

const AdminPanel = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const { data } = await getProperties();
      setProperties(data);
    };
    fetchProperties();
  }, []);

  const handleDelete = async (id) => {
    await deleteProperty(id);
    setProperties(properties.filter(property => property.id !== id));
  };

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 md:pt-12 mt-24 dark:bg-gray-900 dark:text-white">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-3xl font-bold">Property Management</h2>
        <Link to="/admin/new" className="btn btn-success dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-2 dark:focus:ring-green-200">
          Add New Property
        </Link>
      </div>
      
      <table className="table table-striped dark:border-gray-700">
        <thead>
          <tr>
            <th className="px-6 py-3">Title</th>
            <th className="px-6 py-3">Price</th>
            <th className="px-6 py-3">Location</th>
            <th className="px-6 py-3">Type</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {properties.map(property => (
            <tr key={property.id} className="dark:bg-gray-800">
              <td className="px-6 py-4">{property.title}</td>
              <td className="px-6 py-4">₹{property.price.toLocaleString()}</td>
              <td className="px-6 py-4">{property.city}</td>
              <td className="px-6 py-4">{property.propertyType}</td>
              <td className="px-6 py-4">
                <Link 
                  to={`/admin/edit/${property.id}`} 
                  className="btn btn-sm btn-primary me-2 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-2 dark:focus:ring-blue-200">
                  Edit
                </Link>
                <button 
                  onClick={() => handleDelete(property.id)}
                  className="btn btn-sm btn-danger dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-2 dark:focus:ring-red-200">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;

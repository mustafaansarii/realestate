import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProperties } from '../services/api';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const { data } = await getProperties();
      setProperties(data);
    };
    fetchProperties();
  }, []);

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 md:pt-12 dark:bg-gray-900 dark:text-white mt-24">
      <h2 className="text-3xl font-bold mb-4">Featured Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map(property => (
          <div key={property.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
            <h5 className="text-2xl font-bold">{property.title}</h5>
            <p className="text-lg">
              <strong>₹{property.price.toLocaleString()}</strong>
              <br />
              {property.bedrooms} BHK • {property.areaSqft} sq.ft.
              <br />
              {property.city}, {property.state}
            </p>
            <Link to={`/property/${property.id}`} className="block w-full text-center text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 py-2 px-4 rounded-lg">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProperty } from '../services/api';

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      const { data } = await getProperty(id);
      setProperty(data);
    };
    fetchProperty();
  }, [id]);

  if (!property) return <div className="text-white">Loading...</div>;

  return (
    <div className="container dark:bg-gray-900 dark:text-white mt-24">
      <div className="card dark:bg-gray-800 dark:border-gray-700">
        <div className="card-body">
          <h2 className="card-title dark:text-white">{property.title}</h2>
          <p className="text-muted dark:text-gray-400">{property.address}, {property.city}</p>
          
          <div className="row mt-4">
            <div className="col-md-6">
              <p className="dark:text-gray-300"><strong>Price:</strong> ₹{property.price.toLocaleString()}</p>
              <p className="dark:text-gray-300"><strong>Property Type:</strong> {property.propertyType}</p>
              <p className="dark:text-gray-300"><strong>Bedrooms:</strong> {property.bedrooms}</p>
            </div>
            <div className="col-md-6">
              <p className="dark:text-gray-300"><strong>Bathrooms:</strong> {property.bathrooms}</p>
              <p className="dark:text-gray-300"><strong>Area:</strong> {property.areaSqft} sq.ft.</p>
              <p className="dark:text-gray-300"><strong>State:</strong> {property.state}</p>
            </div>
          </div>
          
          <div className="mt-4">
            <h4 className="dark:text-white">Description</h4>
            <p className="dark:text-gray-400">{property.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;

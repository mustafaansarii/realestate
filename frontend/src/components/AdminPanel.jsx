import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DataGrid, GridToolbarContainer, GridToolbarExport, GridToolbarFilterButton } from '@mui/x-data-grid';
import { getProperties, deleteProperty } from '../services/api';
import { Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

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

  const columns = [
    { field: 'title', headerName: 'Title', flex: 1, minWidth: 150 },
    { field: 'price', headerName: 'Price', flex: 1, minWidth: 100, type: 'number' },
    { field: 'city', headerName: 'Location', flex: 1, minWidth: 150 },
    { field: 'propertyType', headerName: 'Type', flex: 1, minWidth: 100 },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      minWidth: 150,
      renderCell: (params) => (
        <div className="flex gap-2">
          <Link to={`/admin/edit/${params.row.id}`}>
            <Button variant="contained" color="primary">
              Edit
            </Button>
          </Link>
          <IconButton onClick={() => handleDelete(params.row.id)}>
            <DeleteIcon color="error" />
          </IconButton>
        </div>
      )
    }
  ];

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 md:pt-12 mt-2 dark:bg-gray-900 dark:text-white">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-3xl font-bold">Property Management</h2>
        <Link to="/admin/new">
          <Button variant="contained" color="success">
            Add New Property
          </Button>
        </Link>
      </div>
      
      <DataGrid
        rows={properties}
        columns={columns}
        components={{
          Toolbar: GridToolbarContainer,
          FilterButton: GridToolbarFilterButton,
          ExportButton: GridToolbarExport
        }}
      />
    </div>
  );
};

export default AdminPanel;

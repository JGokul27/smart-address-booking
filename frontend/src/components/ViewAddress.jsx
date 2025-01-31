import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditAddress from './EditAddress';
import SearchBar from './SearchBar';

const ViewAddress = () => {
  const [addresses, setAddresses] = useState([]);
  const [filteredAddresses, setFilteredAddresses] = useState([]);
  const [editingAddress, setEditingAddress] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchAddresses();
  }, [page]);

  const fetchAddresses = async () => {
    const res = await axios.get(`http://localhost:5000/api/addresses?page=${page}&limit=10`);
    setAddresses(res.data.addresses);
    setFilteredAddresses(res.data.addresses); 
    setTotalPages(res.data.pages);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/addresses/${id}`);
      fetchAddresses(); 
    } catch (err) {
      alert('Error deleting address');
    }
  };

  const handleSearch = (searchTerm) => {
    const filtered = addresses.filter(
      (address) =>
        address.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        address.state.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredAddresses(filtered);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Saved Addresses</h2>
      <SearchBar onSearch={handleSearch} />
      <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">Address Line 1</th>
            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">City</th>
            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">State</th>
            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">Country</th>
            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">PIN Code</th>
            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredAddresses.map((address) => (
            <tr key={address._id} className="hover:bg-gray-50">
              <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{address.addressLine1}</td>
              <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{address.city}</td>
              <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{address.state}</td>
              <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{address.country}</td>
              <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{address.pinCode}</td>
              <td className="px-6 py-4 border-b border-gray-200 text-sm">
                <button onClick={() => setEditingAddress(address)} className="text-blue-500 hover:text-blue-700 mr-2">Edit</button>
                <button onClick={() => handleDelete(address._id)} className="text-red-500 hover:text-red-700">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button onClick={() => setPage(page - 1)} disabled={page === 1} className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50">
          Previous
        </button>
        <span className="text-sm text-gray-600"> Page {page} of {totalPages} </span>
        <button onClick={() => setPage(page + 1)} disabled={page === totalPages} className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50">
          Next
        </button>
      </div>

      {editingAddress && (
        <EditAddress
          address={editingAddress}
          onClose={() => setEditingAddress(null)}
          fetchAddresses={fetchAddresses}
        />
      )}
    </div>
  );
};

export default ViewAddress;
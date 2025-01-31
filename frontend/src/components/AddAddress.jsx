import React, { useState } from 'react';
import axios from 'axios';

const AddAddress = ({ fetchAddresses }) => {
  const [formData, setFormData] = useState({
    addressLine1: '',
    city: '',
    state: '',
    pinCode: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePinCodeChange = async (e) => {
    const pinCode = e.target.value;
    setFormData({ ...formData, pinCode });

    if (pinCode.length === 6) {
      try {
        const res = await axios.get(`https://api.postalpincode.in/pincode/${pinCode}`);
        const data = res.data[0];
        if (data.Status === 'Success') {
          setFormData({
            ...formData,
            city: data.PostOffice[0].District,
            state: data.PostOffice[0].State,
            pinCode,
          });
        } else {
          alert('Invalid PIN code');
        }
      } catch (err) {
        alert('Error fetching PIN code details');
      }
    }
  };

  const handleSubmit = async (e) => {
    try {
      const res = await axios.post('http://localhost:5000/api/addresses', {
        ...formData,
        country: 'India',
      });
      alert('Address added successfully!');
      setFormData({ addressLine1: '', city: '', state: '', pinCode: '' });
    } catch (err) {
      alert('Error adding address');
    }
  };

  return (
    <div className='flex flex-col items-center w-full'>
    <form onSubmit={handleSubmit} className='flex flex-col h-[450px] items-center justify-center gap-8 w-[400px] px-12 py-4 rounded-4xl shadow-2xl'>
      <input
        type="text"
        name="addressLine1"
        placeholder="Address Line 1"
        value={formData.addressLine1}
        onChange={handleChange}
        required
        className='border-b border-slate-800 py-2 px-2 h-12 focus:outline-0 text-lg w-full placeholder:text-lg'
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
        required
        className='border-b border-slate-800 py-2 px-2 h-12 focus:outline-0 text-lg w-full placeholder:text-lg'
      />
      <input
        type="text"
        name="state"
        placeholder="State"
        value={formData.state}
        onChange={handleChange}
        required
        className='border-b border-slate-800 py-2 px-2 h-12 focus:outline-0 text-lg w-full placeholder:text-lg'
      />
      <input
        type="text"
        name="pinCode"
        placeholder="PIN Code"
        value={formData.pinCode}
        onChange={handlePinCodeChange}
        required
        className='border-b border-slate-800 py-2 px-2 h-12 focus:outline-0 text-lg w-full placeholder:text-lg'
      />
      <button type="submit" className='bg-blue-400 text-white font-semibold text-md px-4 py-3 rounded-xl'>Add Address</button>
    </form>
  </div>
  );
};

export default AddAddress;
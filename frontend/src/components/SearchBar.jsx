import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="w-[300px] my-5 h-10 flex items-center justify-center text-center">
      <input
        type="text"
        placeholder="Search by city or state..."
        value={searchTerm}
        onChange={handleChange}
        className='h-10 w-full border-2 border-slate-500 focus:outline-0 caret-slate-500 text-slate-600 pl-3 rounded-sm'
      />
    </div>
  );
};

export default SearchBar;
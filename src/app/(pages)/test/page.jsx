'use client'
import React, { useState } from 'react';
import Navbar from '@/Components/Navbar';
import SearchMovieComponent from '@/Components/SearchComponents/SearchMovieComponent';
import SearchTVShowComponent from '@/Components/SearchComponents/SearchTvShowComponent';

const Test = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <Navbar setSearchQuery={setSearchQuery} />
      
      <div className="">
        <SearchMovieComponent searchQuery={searchQuery} /> 
      </div>

      <div className="hidden">
        <SearchTVShowComponent />
      </div>
    </div>
  );
};

export default Test;

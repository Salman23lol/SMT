'use client'


import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { FaSearch } from 'react-icons/fa';

const Navbar = ({
  setDisplayTrendingMovies,
  setDisplayTrendingTVShows,
  setDisplayTopRatedMovies,
  setDisplayTopRatedTVShows,
  setSearchQuery
}) => {
  const handleTrendingMoviesClick = () => {
    setDisplayTrendingMovies(true);
    setDisplayTopRatedMovies(false);
    setDisplayTrendingTVShows(false);
    setDisplayTopRatedTVShows(false);
    setSearchQuery(''); // Clear search query
  };

  const handleTopRatedMoviesClick = () => {
    setDisplayTrendingMovies(false);
    setDisplayTopRatedMovies(true);
    setDisplayTrendingTVShows(false);
    setDisplayTopRatedTVShows(false);
    setSearchQuery(''); // Clear search query
  };

  const handleTrendingTVShowsClick = () => {
    setDisplayTrendingMovies(false);
    setDisplayTopRatedMovies(false);
    setDisplayTrendingTVShows(true);
    setDisplayTopRatedTVShows(false);
    setSearchQuery(''); // Clear search query
  };

  const handleTopRatedTVShowsClick = () => {
    setDisplayTrendingMovies(false);
    setDisplayTopRatedMovies(false);
    setDisplayTrendingTVShows(false);
    setDisplayTopRatedTVShows(true);
    setSearchQuery(''); // Clear search query
  };

  const [bgColor, setBgColor] = useState('bg-gray-200');
  const [inputColor, setInputColor] = useState('bg-gray-300');
  const [borderColor, setBorderColor] = useState('border-gray-300');
  const [textColor, setTextColor] = useState('');
  const [iconBg, setIconBg] = useState('');
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (resolvedTheme === 'dark') {
      setBgColor('bg-gray-800');
      setInputColor('bg-gray-600');
      setTextColor('text-gray-200');
      setBorderColor('border-gray-400');
      setIconBg('bg-gray-700')
    } else {
      setBgColor('bg-gray-200');
      setInputColor('bg-gray-300');
      setTextColor('text-gray-600');
      setBorderColor('border-gray-300');
      setIconBg('bg-gray-300')
    }
  }, [resolvedTheme]);

  const handleSearchClick = () => {
    const searchInput = document.getElementById('user-search').value;
    setSearchQuery(searchInput); // Update the search query using setSearchQuery
  };


  return (
    <div className="w-full">
      <div className={`w-full mx-auto flex justify-center p-2 ${bgColor}`}>
        <div className="flex items-center justify-between gap-4 md:justify-center md:gap-10">
          <Link href={'/'} className="primary-text-btn inline-flex flex-col items-center md:inline-block" onClick={handleTrendingMoviesClick}>
            <span>TRENDING</span>
            <span> MOVIES</span>
          </Link>
          <Link href={'/'} className="primary-text-btn inline-flex flex-col items-center md:inline-block" onClick={handleTopRatedMoviesClick}>
          <span>TOP</span>
          <span> MOVIES</span>
          </Link>
          <Link href={'/'} className="primary-text-btn inline-flex flex-col items-center md:inline-block" onClick={handleTrendingTVShowsClick}>
          <span>TRENDING</span>
          <span> TV-SHOWS</span>
          </Link>
          <Link href={'/'} className="primary-text-btn inline-flex flex-col items-center md:inline-block" onClick={handleTopRatedTVShowsClick}>
          <span>TOP</span>
          <span> TV-SHOWS</span>
          </Link>
        </div>
      </div>
      <div className={`w-full px-8 ${bgColor} flex items-center justify-between md:justify-center gap-2 md:gap-6 h-14 p-2`}>
        <button id='search-btn' onClick={handleSearchClick} className={`p-2 md:p-[10px] rounded-sm cursor-pointer ${iconBg}`}>
          <FaSearch className={`${textColor} text-sm md:text-lg`} />
        </button>
        <input
          id='user-search'
          placeholder='Search Movies....'
          type="text"
          className={`px-3 py-0.5 rounded-sm ${inputColor} outline-none w-full md:w-1/2 h-8 md:h-full`} />
      </div>
    </div>
  );
};

export default Navbar;

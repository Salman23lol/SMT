'use client'


import React, { useState, useEffect } from 'react';
import { FaEllipsisH } from 'react-icons/fa';
import { useTheme } from 'next-themes';

const SearchTVShowComponent = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchdisplay, setSearchdisplay] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      try {
        const key = '410cd1de96c4951f3a870c63bf7be8ad';
        let search = 'supra';
        setSearchdisplay(search)
        const url = `https://api.themoviedb.org/3/search/tv?api_key=${key}&query=${encodeURIComponent(search)}`

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSearchResults(data.results); // Store search results in state
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        setLoading(false); // Set loading to false in case of error
      }
    };
    fetchData();
  }, []);
  const { resolvedTheme } = useTheme();
  const textColor = resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-600';
  const bgColor = resolvedTheme === 'dark' ? 'bg-gray-800' : 'bg-gray-300';
  const borderColor = resolvedTheme === 'dark' ? 'border-gray-400' : 'border-gray-300';
  return (
    <div className="w-full flex flex-col gap-4 p-8">
      <div className={`border-b-[1px] ${borderColor} w-1/5 p-2`}>
        <h1 className="text-[22px] font-normal">{searchdisplay}</h1>
      </div>
      <div className="w-full flex flex-row h-[420px] overflow-x-scroll customScrollbar px-1">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="flex gap-4">
            {searchResults.map((movie, index) => (
              <div key={index} className="w-[220px] h-[360px] bg-gray-400 flex flex-col justify-between ">
                <div className="h-[300px]">
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.name} className="rounded-sm w-[100%] h-full object-cover" />
                </div>
                <div className={`p-2 ${bgColor} rounded-sm`}>
                  <h1 className={`text-[15px] font-medium ${textColor}`}>{movie.name}</h1>
                  <div className="flex justify-between items-center">
                    <p className='text-[13px]'>{movie.first_air_date}</p>
                    <a href={`/movie/${movie.id}`} id='movie-infoBtn'>
                      <FaEllipsisH className={`text-gray-500 hover:text-gray-400`} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchTVShowComponent;

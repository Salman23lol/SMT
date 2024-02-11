'use client'
import React, { useState, useEffect } from 'react';
import { FaEllipsisH } from 'react-icons/fa';
import { useTheme } from 'next-themes';

const TopRatedMovieSlider = () => {
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    const key = "410cd1de96c4951f3a870c63bf7be8ad"
    const fetchMovies = async () => {

      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchMovies();
  }, []);


  const { resolvedTheme } = useTheme();
  const textColor = resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-600';
  const bgColor = resolvedTheme === 'dark' ? 'bg-gray-800' : 'bg-gray-300';
  const borderColor = resolvedTheme === 'dark' ? 'border-gray-400' : 'border-gray-300';

  return (
    <div className="w-full flex flex-col gap-4">
    <div className={`border-b-[1px] ${borderColor} w-full md:w-1/5 md:p-2`}>
    <h1 className="text-[22px] font-normal">Top Rated Movies</h1>
    </div>
    <div className="w-full flex flex-row h-[410px] overflow-x-scroll customScrollbar px-1">
      <div className="flex gap-4">
        {movies.map((movie, index) => (
          <div key={index} className="w-[220px] h-[320px] bg-gray-400 flex flex-col justify-between ">
            <div className="h-[300px]">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="rounded-sm w-[100%] h-full object-cover" />
            </div>
            <div className={`p-2 ${bgColor} rounded-sm`}>
              <h1 className={`text-[15px] font-medium ${textColor}`}>{movie.title}</h1>
              <div className="flex justify-between items-center">
              <p className='text-sm'>{movie.release_date}</p>
                <a href={`/movie/${movie.id}`} id='movie-infoBtn'>
                    <FaEllipsisH className={`text-gray-500 hover:text-gray-400`} />
                  </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default TopRatedMovieSlider;

'use client'

import React, { useState, useEffect } from 'react';
const MovieDetails = () => {
  const [foundedM, setFoundedM] = useState(null);
  useEffect(() => {
    const movie_Id = window.location.pathname.split('/')[2]; // Assuming the movie ID is in the second part of the URL
    console.log(movie_Id);
    const fetchData = async () => {
      try {
        const key = '410cd1de96c4951f3a870c63bf7be8ad';
        const url = `https://api.themoviedb.org/3/movie/${movie_Id}?api_key=${key}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setFoundedM(data); // Set the fetched data to the state variable
        console.log(data); // Log the data after fetching
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='w-full h-auto'>
      <div className="w-full space-y-4 p-8">
        {foundedM && (
          <div className="w-full flex flex-col md:flex-row gap-4">
            <div className="md:w-1/4">
              <img src={`https://image.tmdb.org/t/p/w500${foundedM.poster_path}`} alt={foundedM.title} className="rounded-sm w-full" />
            </div>
            <div className="md:border-l-[1px] md:p-6 md:w-2/3 flex flex-col gap-4 border-t md:border-t-0 border-gray-200 pt-4 md:pt-0">
              <h1 className="text-3xl font-medium">{foundedM.title}</h1>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-2">
                  <h1 className="text-[17px] font-normal">Rating :</h1>
                  <p className="text-[15px] font-light">{foundedM.vote_average.toFixed(2)} / 10</p>
                </div>
                <div className="flex flex-row gap-2">
                  <h1 className="text-[17px] font-normal">Release-Date :</h1>
                  <p className="text-[15px] font-light">{foundedM.release_date}</p>
                </div>
                <div className="flex flex-row gap-2">
                  <h1 className="text-[17px] font-normal">Run-Time :</h1>
                  <p className="text-[15px] font-light">{foundedM.runtime} min</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-2">
                  <h1 className="text-[17px] font-normal">Adult :</h1>
                  <p className="text-[15px] font-light">{foundedM.adult ? 'Yes' : 'No'}</p>
                </div>
                <div className="flex flex-row gap-2">
                  <h1 className="text-[17px] font-normal">Original-Language :</h1>
                  <p className="text-[15px] font-light">{foundedM.original_language}</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-2 items-start">
                  <h1 className="text-[17px] font-normal">Type :</h1>
                  <p className="text-[15px] font-light">
                    {foundedM.genres.map((language, index) => (
                      <span key={language.iso_639_1} className='flex flex-col items-center'>
                        {language.name}
                      </span>
                    ))}
                  </p>
                </div>
                <div className="flex flex-row gap-2">
                  <h1 className="text-[17px] font-normal">Available in :</h1>
                  <p className="text-[15px] font-light">
                    {foundedM.spoken_languages.map((language, index) => (
                      <span key={language.iso_639_1}>
                        {language.name}
                        {index < foundedM.spoken_languages.length - 1 && ', '}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-[17px] font-normal">Overview :</h1>
                <p className="leading-relaxed font-light">" {foundedM.overview} "</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>

  );
};

export default MovieDetails;


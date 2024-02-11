'use client'
import { React, useState, useEffect } from 'react'

const page = () => {
  const [foundedM, setFoundedM] = useState(null);


  useEffect(() => {
    const tvshow_id = window.location.pathname.split('/')[2]; // Assuming the movie ID is in the second part of the URL
    console.log(tvshow_id);
    const fetchData = async () => {
      try {
        const key = '410cd1de96c4951f3a870c63bf7be8ad';
        const url = `https://api.themoviedb.org/3/tv/${tvshow_id}?api_key=${key}`

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
    <div className="w-full">
      {foundedM && (
        <div className="w-full p-6 md:flex md:items-start md:justify-center md:space-x-6">
          <div className="md:flex-shrink-0 h-[560px]">
            <img
              src={`https://image.tmdb.org/t/p/w500${foundedM.poster_path}`}
              alt={foundedM.name}
              className="rounded-lg h-full w-full md:w-92"
            />
          </div>
          <div className="sm:border-l-[1px] p-3 mt-4 py-3 md:mt-0  inline-flex flex-col items-center text-center sm:inline-block sm:text-start sm:items-start ">
            <h1 className="text-3xl font-semibold">{foundedM.name}</h1>
            <div className="flex items-center mt-2">
              <span className="text-gray-500">Rating:</span>
              <span className="ml-2 text-lg font-medium">{foundedM.vote_average.toFixed(2)} / 10</span>
            </div>
            <div className="flex items-center mt-2">
              <span className="text-gray-500">Release Date:</span>
              <span className="ml-2 text-lg font-medium">{foundedM.first_air_date}</span>
            </div>
            <div className="flex items-center mt-2">
              <span className="text-gray-500">Run Time:</span>
              <span className="ml-2 text-lg font-medium">Seasons: {foundedM.number_of_seasons} | Episodes: {foundedM.number_of_episodes}</span>
            </div>
            <div className="flex items-center mt-2">
              <span className="text-gray-500">Adult:</span>
              <span className="ml-2 text-lg font-medium">{foundedM.adult ? 'Yes' : 'No'}</span>
            </div>
            <div className="flex items-center mt-2">
              <span className="text-gray-500">Original Language:</span>
              <span className="ml-2 text-lg font-medium">{foundedM.original_language}</span>
            </div>
            <div className="flex items-center mt-2">
              <span className="text-gray-500">Genres:</span>
              <span className="ml-2 text-lg font-medium">{foundedM.genres.map((genre, index) => (
                <span key={index}>{genre.name}{index < foundedM.genres.length - 1 && ', '}</span>
              ))}</span>
            </div>
            <div className="flex items-center mt-2">
              <span className="text-gray-500">Languages:</span>
              <span className="ml-2 text-lg font-medium">{foundedM.spoken_languages.map((language, index) => (
                <span key={index}>{language.name}{index < foundedM.spoken_languages.length - 1 && ', '}</span>
              ))}</span>
            </div>



            <div className="w-full flex items-center justify-between">
              <div className="mt-4 inline-flex flex-col items-center sm:inline-block w-[80%]">
                <h2 className="text-xl font-semibold">Overview:</h2>
                <p className="mt-2 text-[16px] w-full">" {foundedM.overview} "</p>
              </div>

              <div className="w-full flex flex-col gap-3 justify-center text-center" key={foundedM.id}>
                <h1 className='text-xl font-semibold'>Cast:</h1>
                <div className='flex justify-center gap-2'>
                  {foundedM.created_by.map((castinfo) => (
                    <div key={castinfo.id} className="flex flex-col items-center mx-4 gap-2">
                      <img src={`https://image.tmdb.org/t/p/w500${castinfo.profile_path}`} alt="" className="w-16 h-26 rounded-sm" />
                      <span>{castinfo.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>


  );
}

export default page
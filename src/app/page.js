'use client'

import React, { useState } from 'react';
import Navbar from '@/Components/Navbar';
import TrendingMovieSlider from '@/Components/MoviesTypeComponents/TrendingMoviesSlider';
import TopRatedMovieSlider from '@/Components/MoviesTypeComponents/TopRatedMovies';
import { TrendingTVShows } from '@/Components/TVShowsTypeComponents/TrendingTVShows';
import { TopRatedTVShows } from '@/Components/TVShowsTypeComponents/TopRatedTvShows';
import SearchMovieComponent from '@/Components/SearchComponents/SearchMovieComponent';

export default function Home() {
  const [displayTrendingMovies, setDisplayTrendingMovies] = useState(true);
  const [displayTrendingTVShows, setDisplayTrendingTVShows] = useState(true);
  const [displayTopRatedMovies, setDisplayTopRatedMovies] = useState(false);
  const [displayTopRatedTVShows, setDisplayTopRatedTVShows] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="customScrollbarY">
      <Navbar 
        setDisplayTrendingMovies={setDisplayTrendingMovies} 
        setDisplayTrendingTVShows={setDisplayTrendingTVShows}
        setDisplayTopRatedMovies={setDisplayTopRatedMovies} 
        setDisplayTopRatedTVShows={setDisplayTopRatedTVShows}
        setSearchQuery={setSearchQuery} // Pass setSearchQuery to Navbar
      />
      <div className='px-2 md:px-10 p-3 flex flex-col gap-3 overflow-y-hidden'>
        {searchQuery ? (
          <SearchMovieComponent searchQuery={searchQuery} />
        ) : (
          <div>
            {displayTrendingMovies && <TrendingMovieSlider />}
            {displayTopRatedMovies && <TopRatedMovieSlider />}
            {displayTrendingTVShows && <TrendingTVShows />}
            {displayTopRatedTVShows && <TopRatedTVShows />}
          </div>
        )}
      </div>
    </div>
  );
}

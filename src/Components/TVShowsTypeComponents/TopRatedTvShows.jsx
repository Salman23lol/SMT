'use client'
import React, { useState, useEffect } from 'react';
import { FaEllipsisH } from 'react-icons/fa';
import { useTheme } from 'next-themes';


export const TopRatedTVShows = () => {


    const [topTVshow, setTopTVshow] = useState([])
    useEffect(() => {
        const key = '410cd1de96c4951f3a870c63bf7be8ad';
        const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}`;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setTopTVshow(data.results)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    const { resolvedTheme } = useTheme();
    const textColor = resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-600';
    const bgColor = resolvedTheme === 'dark' ? 'bg-gray-800' : 'bg-gray-300';
    const borderColor = resolvedTheme === 'dark' ? 'border-gray-400' : 'border-gray-300';

    return (
        <div className="w-full flex flex-col gap-4">
        <div className={`border-b-[1px] ${borderColor}  w-full md:w-1/5 md:p-2`}>
        <h1 className="text-[22px] font-normal">Top-Rated TV-Shows</h1>
        </div>
            <div className="w-full flex flex-row h-[410px] overflow-x-scroll customScrollbar px-1">
                <div className="flex gap-4">
                    {topTVshow.map((tvshow, index) => (
                        <div key={index} className="w-[220px] h-[320px] bg-gray-400 flex flex-col justify-between ">
                            <div className="h-[300px]">
                                <img src={`https://image.tmdb.org/t/p/w500${tvshow.poster_path}`} alt={tvshow.name} className="rounded-sm w-[100%] h-full object-cover" />
                            </div>
                            <div className={`p-2 ${bgColor} rounded-sm`}>
                                <h1 className={`text-[15px] font-medium ${textColor}`}>{tvshow.name}</h1>
                                <div className="flex justify-between items-center">
                                    <p className='text-[13px]'>{tvshow.first_air_date}</p>
                                    <a href={`/tvshow/${tvshow.id}`} id='tvshow-infoBtn'>
                                        <FaEllipsisH className={`text-gray-500 hover:text-gray-400`} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

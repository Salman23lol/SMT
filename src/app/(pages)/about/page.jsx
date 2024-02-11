'use client'
import { React, useState, useEffect } from 'react'
import { useTheme } from 'next-themes';
import Navbar from '@/Components/Navbar';

function About() {
    const [borderColor, setBorderColor] = useState('border-gray-300');
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        // Determine background color based on the system theme
        if (resolvedTheme === 'dark') {
            setBorderColor('border-gray-400');
        } else {
            setBorderColor('border-gray-400');
        }
    }, [resolvedTheme]);
    return (
        <div className="">
            <Navbar />

            <div className="flex flex-col p-10 items-center">
            <div className={`mb-8 border-b-[1px] ${borderColor} p-4`}>
                <h1 className="text-2xl mb-4 text-center">About STM</h1>
                <p className="text-base max-w-3xl text-center">Welcome to STM - your ultimate destination for all things movies and TV shows! STM stands for Streaming Movies and TV Shows, and our mission is to provide you with an immersive and dynamic experience in the world of entertainment.</p>
            </div>
        
            <div className={`mb-8 border-b-[1px] ${borderColor} p-4`}>
                <h1 className="text-2xl mb-4 text-center">Our Vision</h1>
                <p className="text-base max-w-3xl text-center">At STM, we believe in the power of cinema and television to captivate, inspire, and entertain audiences worldwide. Our vision is to create a platform that brings the magic of movies and TV shows right to your fingertips, offering a seamless and personalized viewing experience for every user.</p>
            </div>
        
            <div className={`mb-8 border-b-[1px] ${borderColor} p-4`}>
                <h1 className="text-2xl mb-4 text-center">What Sets Us Apart</h1>
                <div className="mb-4">
                    <h2 className="text-lg font-light mb-2 text-center">Dynamic Cards from TMDB API</h2>
                    <p className="text-base max-w-3xl text-center">STM harnesses the power of the TMDB API to bring you the latest and most comprehensive information about movies and TV shows. Our dynamic cards feature stunning visuals, detailed synopses, and essential details to help you discover your next favorite watch.</p>
                </div>
            </div>
        
            <div className={`mb-8 border-b-[1px] ${borderColor} p-4`}>
                <h1 className="text-2xl mb-4 text-center">Responsive Design</h1>
                <p className="text-base max-w-3xl text-center">We understand the importance of accessibility, which is why STM boasts a completely responsive design. Whether you're browsing on your computer, tablet, or smartphone, our platform adapts effortlessly to provide you with an optimal viewing experience.</p>
            </div>
        
            <div className={`mb-8 border-b-[1px] ${borderColor} p-4`}>
                <h1 className="text-2xl mb-4 text-center">Two Theme Options</h1>
                <p className="text-base max-w-3xl text-center">Personalization is key, which is why STM offers two theme options for our users. Whether you prefer a light or dark theme, you can easily switch between them with the click of a button, ensuring a visually pleasing experience that suits your preferences.</p>
            </div>
        
            <div className={`mb-8 border-b-[1px] ${borderColor} p-4`}>
                <h1 className="text-2xl mb-4 text-center">High-Sensitive Search Functionality</h1>
                <p className="text-base max-w-3xl text-center">Finding the perfect movie or TV show has never been easier thanks to our highly sensitive search functionality. With support for 10 different filters, you can quickly narrow down your search and discover content that matches your interests and criteria.</p>
            </div>
        
            <div>
                <h1 className="text-2xl mb-4 text-center">Get Started Today</h1>
                <p className="text-base max-w-3xl text-center">Ready to embark on your cinematic journey? Dive into the world of movies and TV shows with STM! Whether you're a casual viewer or a die-hard cinephile, there's something for everyone to enjoy.</p>
                </div>
        </div>
        

        </div>
    )
}

export default About
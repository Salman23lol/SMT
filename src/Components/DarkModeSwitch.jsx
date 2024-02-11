'use client'
import React from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useTheme } from 'next-themes';

export default function DarkModeSwitch() {
    const themeContext = useTheme();
    const theme = themeContext?.theme; // Access theme directly
    const setTheme = themeContext?.setTheme; // Access setTheme directly
    const systemTheme = themeContext?.systemTheme; // Access systemTheme directly

    const currentTheme = theme === 'system' ? systemTheme : theme;

    let iconcolor = 'system'

    if (theme === 'dark') {
        iconcolor = 'text-white'
    } else if(theme === 'light') {
        iconcolor = 'text-dark'
    }

    return (
        <div>
            {currentTheme === 'dark' ? 
                <MdDarkMode size={24} className={`hover:text-orange-500 ${iconcolor}`} onClick={() => setTheme('light')} /> 
                :
                <MdLightMode size={24} className={`hover:text-orange-500 ${iconcolor}`} onClick={() => setTheme('dark')} />
            }
        </div>
    );
}

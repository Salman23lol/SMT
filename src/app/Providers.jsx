'use client'
import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="
      text-gray-600 dark:text-gray-300 dark:bg-gray-700 
      min-h-screen select-none transition-colors duration-100 bg-gray-500 bg-opacity-50">
        {children}
      </div>
    </ThemeProvider>
  );
}

import React from "react";

function About() {
  return (
    <div className="min-h-screen flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center m-10 md:m-20">
        <div className="ease-in duration-300 p-10 rounded-md hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] hover:scale-105">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline mb-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>

          <h3 className="text-2xl font-bold mb-5">EASY</h3>
          <p>Easy to use and navigate</p>
        </div>
        <div className="ease-in duration-300 p-10 rounded-md hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] hover:scale-105">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline mb-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
          </svg>

          <h3 className="text-2xl font-bold mb-5">MODERN</h3>
          <p>Modern looks with minimalist style</p>
        </div>
        <div className="ease-in duration-300 p-10 rounded-md hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] hover:scale-105">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline mb-2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
            />
          </svg>

          <h3 className="text-2xl font-bold mb-5">INTUITIVE</h3>
          <p>No need to be confused, juse use it as usual</p>
        </div>
      </div>
    </div>
  );
}

export default About;

import React from 'react';

const Hero = () => {
  return(
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
              <div>
                  <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">Start your journey with <span class="text-blue-600">Preline</span></h1>
                  <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">Hand-picked professionals and expertly crafted components, designed for any kind of entrepreneur.</p>

              </div>
          </div>
      </div>

  );
};
export default Hero;
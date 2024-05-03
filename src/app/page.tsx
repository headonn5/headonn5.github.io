import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <main className="container mx-auto py-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Hi, I am Nishant</h1>
        <p className="text-xl mb-8">
          I am a passionate Senior iOS Engineer with a knack for crafting exceptional mobile experiences.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/projects" className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-200">
            View My Projects
          </Link>
          <Link href="/contact" className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-200">
            Get in Touch
          </Link>
        </div>
      </section>
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              With over 10 years of experience in iOS development, I have honed my skills in creating intuitive, high-performance, and visually stunning apps. I specialize in Swift, Objective-C, and leveraging the latest iOS frameworks and technologies.
            </p>
            <p className="mb-4">
              Throughout my career, I have collaborated with diverse teams to deliver innovative solutions for both startups and established enterprises. I am passionate about writing clean, maintainable code and staying up-to-date with industry best practices.
            </p>
            <Link href="/about" className="text-blue-500 hover:underline">
              Read More About Me &rarr;
            </Link>
          </div>
          <div>
            {/* Add your profile picture or a relevant image */}
            <img
              src="/profile-picture.jpg"
              alt="[Nishant]"
              className="w-full md:w-1/2 lg:w-1/6 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
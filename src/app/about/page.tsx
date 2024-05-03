import React from 'react';

const About: React.FC = () => {
  return (
    <main className="container mx-auto py-8">
      <section>
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <div className="space-y-4">
          <p>
            Hi there! I am a Senior iOS Engineer with over 10 years of experience in developing high-quality iOS applications. I have a passion for creating intuitive and visually appealing user experiences.
          </p>
          <p>
            Throughout my career, I have worked on a diverse range of projects, from small-scale apps to large enterprise-level solutions. I have expertise in Swift, Objective-C, and various iOS frameworks such as UIKit, SwiftUI, and Core Data.
          </p>
          <p>
            I believe in writing clean, maintainable, and efficient code while following best practices and industry standards. I enjoy collaborating with cross-functional teams, including designers, product managers, and backend developers, to deliver exceptional mobile experiences.
          </p>
          <p>
            When I am not coding, you can find me exploring the latest tech trends, attending iOS meetups, or contributing to open-source projects. I am always eager to learn and stay up-to-date with the ever-evolving iOS ecosystem.
          </p>
          <p>
            If you have any exciting iOS projects or opportunities, feel free to reach out. I am open to new challenges and would love to contribute my skills and expertise to create amazing apps.
          </p>
        </div>
      </section>
      <section className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Skills</h3>
        <ul className="list-disc list-inside">
          <li>Swift</li>
          <li>Objective-C</li>
          <li>UIKit</li>
          <li>SwiftUI</li>
          <li>Core Data</li>
          <li>RESTful APIs</li>
          <li>GraphQL</li>
          <li>Python</li>
          <li>Git</li>
          <li>Agile Development</li>
        </ul>
      </section>
    </main>
  );
};

export default About;
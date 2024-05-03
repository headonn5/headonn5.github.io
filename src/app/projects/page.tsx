import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'PayPal',
      description: "As a Senior iOS Engineer at PayPal, I contributed to the development of the core PayPal mobile app. My work focused on enhancing the Onboarding and Privacy verticals to ensure GDPR compliance and integrating the Global Pay Later feature into the Activities domain. Through collaboration with cross-functional teams, I helped deliver a seamless and secure user experience for millions of users worldwide.",
      image: '/paypal.png',
      link: 'https://apps.apple.com/us/app/paypal-send-shop-manage/id283646709',
    },
    {
      id: 2,
      title: 'Dream 11',
      description: "As a key member of the Infra team at Dream 11, I collaborated on multiple facets of the iOS app, from design systems to managing the leaderboard component. I played a significant role in migrating native components, such as the leaderboard, scorecard, and team compare screens, to React Native via bridges. Additionally, I led the integration of the Language Selection feature for user preferences in the Onboarding vertical, enhancing user experience and accessibility.",
      image: '/dream11.png',
      link: 'https://apps.apple.com/in/app/dream11-fantasy-cricket-app/id1077286074?l=hi',
    },
    {
      id: 2,
      title: 'Resy',
      description: "As a Senior iOS Engineer at Resy, spearheaded the revamp of the core Venue Detail screen, implementing intricate UI/UX enhancements and complex business logic. Collaborated cross-functionally to ensure smooth app releases and maintain consistent logic throughout the app, including favoriting venues and enhancing the Global Dining Access experience for Amex customers.",
      image: '/resy.png',
      link: 'https://apps.apple.com/us/app/resy/id866163372',
    },
    {
      id: 2,
      title: 'Wowcher',
      description: "As a Senior Mobile Engineer at Wowcher, single-handedly maintained the entire Android and iOS app codebase, handling both simple and complex features. Optimized table view performance with efficient image loading. Implemented new enhancements like scrollable top bar tabs, elevating the overall user experience. Demonstrated expertise in end-to-end app maintenance and feature development.",
      image: '/wowcher.png',
      link: 'https://apps.apple.com/gb/app/wowcher-deals-vouchers-uk/id469033575',
    },
    // Add more projects as needed
  ];

  return (
    <main className="container mx-auto py-8">
      <section>
        <h2 className="text-3xl font-bold mb-4 text-center">Please scroll to see some of my work</h2>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-58 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-4 inline-block">
                  View {project.title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;
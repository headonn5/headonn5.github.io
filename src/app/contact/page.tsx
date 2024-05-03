import React from 'react';

const Contact: React.FC = () => {
  return (
    <main className="container mx-auto py-8">
      <section>
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="mb-8">
          If you have any questions, project proposals, or just want to say hello, feel free to reach out to me. I'll do my best to respond as soon as possible.
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p>
              <a href="mailto:nishant@paulenggworks.com" className="text-blue-500 hover:underline">
              nishant@paulenggworks.com
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Social Media</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.linkedin.com/in/nishantpaul" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/headonn5" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
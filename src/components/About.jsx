import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-[var(--dark-bg)]">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="card p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-4 text-[var(--secondary)]">
                My Journey
              </h3>
              <p className="text-gray-300 mb-4">
                I'm a passionate multidisciplinary professional with expertise
                in web development, data science, and mechanical engineering.
                Currently in my 3rd year at Makerere University, I'm constantly
                exploring the intersection of technology and engineering.
              </p>
              <p className="text-gray-300 mb-4">
                My diverse background allows me to approach problems from
                multiple angles, combining technical knowledge with creative
                solutions. I'm particularly interested in how web technologies
                and data science can enhance engineering applications.
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-semibold mb-3 text-[var(--accent)]">
                  Education
                </h4>
                <div className="mb-3">
                  <div className="font-medium">
                    Bachelor of Mechanical Engineering
                  </div>
                  <div className="text-sm text-gray-400">
                    Makerere University, 3rd Year
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-6 md:p-8 mt-6">
              <h3 className="text-xl font-bold mb-4 text-[var(--secondary)]">
                Work Experience
              </h3>
              <ul className="space-y-4">
                <li>
                  <div className="font-medium text-[var(--text)]">
                    Research Assistant
                  </div>
                  <div className="text-sm text-gray-400">
                    Marconi Research and Innovation Laboratory
                  </div>
                </li>
                <li>
                  <div className="font-medium text-[var(--text)]">Intern</div>
                  <div className="text-sm text-gray-400">
                    Uganda National Airlines Company
                  </div>
                </li>
                <li>
                  <div className="font-medium text-[var(--text)]">
                    Ambassador
                  </div>
                  <div className="text-sm text-gray-400">NSSF Hi Innovator</div>
                </li>
                <li>
                  <div className="font-medium text-[var(--text)]">
                    Volunteer|Developer
                  </div>
                  <div className="text-sm text-gray-400">OTIC Foundation</div>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3 text-[var(--secondary)]">
                What I Do
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-[var(--secondary)] mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Frontend Development with React & Next.js</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-[var(--secondary)] mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Data Analysis & Machine Learning</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-[var(--secondary)] mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>3D Modeling with SolidWorks & AutoCAD</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-[var(--secondary)] mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Public Speaking & Technical Presentations</span>
                </li>
              </ul>
            </div>

            {/* <div className="relative">
              <div className="w-full h-48 bg-[var(--card-bg)] rounded-lg shadow-lg flex items-center justify-center text-[var(--secondary)]">
                <p className="text-center">Profile</p>
              </div>
            </div> */}

            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3 text-[var(--secondary)]">
                Personal Interests
              </h3>
              <p className="text-gray-300">
                When I'm not coding or designing, I enjoy exploring new
                technologies, participating in hackathons, and contributing to
                open-source projects. I'm passionate about using technology to
                solve real-world problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";
// import contactImage from '../assets/contact.jpg';

const ContactInfo = ({ icon, title, value }) => {
  return (
    <div className="flex items-start">
      <div className="p-3 rounded-full bg-[var(--accent-transparent)] bg-opacity-10 mr-4 shadow-md">
        {React.cloneElement(icon, {
          className: "h-6 w-6 ",
        })}
      </div>
      <div>
        <h4 className="font-medium mb-1">{title}</h4>
        <p className="text-gray-400">{value}</p>
      </div>
    </div>
  );
};

const SocialLink = ({ href, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-[var(--accent-transparent)] hover:bg-[var(--accent)] hover:bg-opacity-30 transition-all duration-300"
    >
      {icon}
    </a>
  );
};

const Contact = () => {
  const contactInfo = [
    {
      title: "Email",
      value: "enov3ri@gmail.com",
      icon: <FaEnvelope className="h-6 w-6 text-[var(--accent)]" />,
    },
    {
      title: "Phone",
      value: "+256 755 017 437 / +256 761 238 019",
      icon: <FaPhone className="h-6 w-6 text-blue-500" />,
    },
    {
      title: "Location",
      value: "Kampala, Uganda",
      icon: <FaMapMarkerAlt className="h-6 w-6 text-[var(--accent)]" />,
    },
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/mutaawe-enock-58008528a",
      icon: <FaLinkedin className="h-5 w-5 text-[var(--accent)]" />,
    },
    {
      href: "https://twitter.com/your-handle",
      icon: <FaTwitter className="h-5 w-5 text-[var(--accent)]" />,
    },
    {
      href: "https://github.com/enoveri",
      icon: <FaGithub className="h-5 w-5 text-[var(--accent)]" />,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-[var(--primary)]">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="card p-8">
            <h3 className="text-2xl font-bold mb-6 text-[var(--secondary)]">
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <ContactInfo
                  key={index}
                  title={info.title}
                  value={info.value}
                  icon={info.icon}
                />
              ))}
            </div>
            <div className="mt-8">
              <h4 className="font-medium mb-4">Connect with me:</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <SocialLink key={index} href={link.href} icon={link.icon} />
                ))}
              </div>
            </div>

            <div className="mt-8">
              <div className="w-full h-48 bg-[var(--card-bg)] rounded-lg shadow-lg flex items-center justify-center text-[var(--secondary)]">
                <p className="text-center">Contact Me</p>
              </div>
            </div>
          </div>
          <div className="card p-8">
            <h3 className="text-2xl font-bold mb-6 text-[var(--secondary)]">
              Send a Message
            </h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-[var(--dark-bg)] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--secondary)]"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-[var(--dark-bg)] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--secondary)]"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-[var(--dark-bg)] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--secondary)]"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full bg-[var(--dark-bg)] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--secondary)]"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

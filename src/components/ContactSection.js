import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaMediumM, FaYoutube } from 'react-icons/fa';
import { useSpring, animated } from '@react-spring/web';

const quotes = [
  "The best way to predict the future is to create it. - Peter Drucker",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
  "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
  "The only way to do great work is to love what you do. - Steve Jobs"
];

const ContactSection = () => {
  const [index, setIndex] = React.useState(0);

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
    reverse: true,
    config: { duration: 3000 },
    onRest: () => setIndex((index + 1) % quotes.length)
  });

  return (
    <div id="contact" className="py-40 bg-gray-100 h-screen">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact</h2>
        <p className="text-lg mb-8 text-gray-700">Feel free to connect with me through the following platforms:</p>

        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://github.com/csiitian" target="_blank" className="text-gray-800 hover:text-blue-600 transition-colors duration-300" aria-label="GitHub">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/vishal7663/" target="_blank" className="text-gray-800 hover:text-blue-700 transition-colors duration-300" aria-label="LinkedIn">
            <FaLinkedin size={30} />
          </a>
          <a href="https://www.instagram.com/cs_iitian/" target="_blank" className="text-gray-800 hover:text-pink-500 transition-colors duration-300" aria-label="Instagram">
            <FaInstagram size={30} />
          </a>
          <a href="https://twitter.com/cs_iitian" target="_blank" className="text-gray-800 hover:text-blue-400 transition-colors duration-300" aria-label="Twitter">
            <FaTwitter size={30} />
          </a>
          <a href="https://medium.com/@csiitian" target="_blank" className="text-gray-800 hover:text-black transition-colors duration-300" aria-label="Medium">
            <FaMediumM size={30} />
          </a>
          <a href="https://www.youtube.com/channel/UCuxmikkhqbmBOUVxf-61hxw" target="_blank" className="text-gray-800 hover:text-red-500 transition-colors duration-300" aria-label="YouTube">
            <FaYoutube size={30} />
          </a>
        </div>

        <animated.blockquote
          className="text-lg italic text-gray-600 mx-auto max-w-2xl m-20 px-4 py-6 border-l-4 border-blue-500 bg-white shadow-lg rounded-lg"
          style={props}
        >
          {quotes[index]}
        </animated.blockquote>
      </div>
    </div>
  );
}

export default ContactSection;

import React from "react";
import { FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactMe = () => {
  return (
    <div className="py-12 bg-black text-white flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-lg text-center space-y-8"
      >
        <h2 className="text-4xl font-bold text-[#CA8A04]">Contact Me</h2>
        <p className="text-lg text-gray-300">
          Explore my portfolio and get in touch to discuss how we can turn your
          ideas into reality!
        </p>
        <div className="space-y-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center justify-center space-x-4 bg-[#CA8A04] p-3 rounded-lg shadow-lg"
          >
            <FaEnvelope className="text-white text-2xl" />
            <a
              href="mailto:mouryasonu07@gmail.com"
              className="text-lg text-white"
            >
              mouryasonu07@gmail.com
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center justify-center space-x-4 bg-[#CA8A04] p-3 rounded-lg shadow-lg"
          >
            <FaLinkedin className="text-white text-2xl" />
            <a
              href="https://www.linkedin.com/in/sonu-mourya-55384291/"
              className="text-lg text-white"
            >
              LinkedIn: Sonu Mourya
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center justify-center space-x-4 bg-[#CA8A04] p-3 rounded-lg shadow-lg"
          >
            <FaInstagram className="text-white text-2xl" />
            <a
              href="https://www.instagram.com/sonumourya"
              className="text-lg text-white"
            >
              Instagram: @sonumourya
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactMe;

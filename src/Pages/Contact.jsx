import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import Navbar from "../Navcomp/Headert";
import Footer from "../Footer";
import ContactMe from "../Contactme/Contactme";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone number is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission logic here
      console.log(formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <Navbar />

      <main className="relative py-28 bg-black">
        <div className="relative z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8">
          <div className="flex flex-col items-center space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
            <FaEnvelope className="text-6xl text-[#CA8A04]" />
            <h3 className="text-[#CA8A04] font-semibold">Contact</h3>
            <p className="text-white text-3xl font-semibold sm:text-4xl">
              Get in touch
            </p>
            <p className="text-gray-300 max-w-md">
              We’d love to hear from you! Please fill out the form below with
              your details and message.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between mt-12">
            <div className="w-full lg:w-1/2 px-4">
              <iframe
                title="Google Map"
                className="w-full h-full rounded-lg lg:min-h-[500px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5783.0549511896625!2d-80.28099868778231!3d43.55389087098651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b907673ec2217%3A0x91df120ee1d7ddd6!2s28%20Brentwood%20Dr%2C%20Guelph%2C%20ON%20N1H%205M7!5e0!3m2!1sen!2sca!4v1720367377479!5m2!1sen!2sca"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            <ContactMe />
          </div>
        </div>
        <div
          className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
          style={{
            background:
              "linear-gradient(106.89deg, #CA8A04 15.73%, ##4C1D95 15.74%, #CA8A04 56.49%, #4C1D95 115.91%)",
          }}
        ></div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;

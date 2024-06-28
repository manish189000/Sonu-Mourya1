import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

const Contactus = () => {
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
    <main className="relative py-28 bg-gray-900">
      <div className="relative z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8">
        <div className="flex flex-col items-center space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
          <FaEnvelope className="text-6xl text-cyan-400" />
          <h3 className="text-cyan-400 font-semibold">Contact</h3>
          <p className="text-white text-3xl font-semibold sm:text-4xl">
            Get in touch
          </p>
          <p className="text-gray-300 max-w-md">
            We’d love to hear from you! Please fill out the form below with your
            details and message.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between mt-12">
          <div className="w-full lg:w-1/2 px-4">
            <iframe
              title="Google Map"
              className="w-full h-full rounded-lg lg:min-h-[500px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0868365240314!2d-122.4194154846813!3d37.77492967975881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085817c8d7aab69%3A0xb349fe4c52d5bdb7!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1614123202781!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 px-4 p-8 bg-white sm:max-w-lg sm:px-8 sm:rounded-xl lg:min-h-[500px]">
            <form
              onSubmit={handleSubmit}
              className="space-y-5 h-full flex flex-col justify-between"
            >
              <div>
                <label className="font-medium">Full name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border ${
                    errors.fullName
                      ? "border-red-500"
                      : "focus:border-violet-600"
                  } shadow-sm rounded-lg`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border ${
                    errors.email ? "border-red-500" : "focus:border-violet-600"
                  } shadow-sm rounded-lg`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="font-medium">Phone number</label>
                <div className="relative mt-2">
                  <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                    <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                      <option>US</option>
                      <option>ES</option>
                      <option>MR</option>
                    </select>
                  </div>
                  <input
                    type="number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-000"
                    required
                    className={`w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border ${
                      errors.phoneNumber
                        ? "border-red-500"
                        : "focus:border-violet-600"
                    } shadow-sm rounded-lg`}
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex-grow">
                <label className="font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`w-full mt-2 h-full px-3 py-2 resize-none appearance-none bg-transparent outline-none border ${
                    errors.message
                      ? "border-red-500"
                      : "focus:border-violet-600"
                  } shadow-sm rounded-lg`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white font-medium bg-violet-600 hover:bg-violet-500 active:bg-violet-700 rounded-lg duration-150"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      ></div>
    </main>
  );
};

export default Contactus;

import React from "react";

/**
 * Traditional Footer component for the application.
 * @returns {JSX.Element} The traditional footer component.
 */
const Footer = () => {
  return (
    <footer className="bg-[#251b27] text-white p-8">
      <div className="container mx-auto grid grid-cols-4 gap-8">
        {/* Quick Links Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul className="list-none p-0 m-0">
            <li className="mb-2"><a href="/about">About Us</a></li>
            <li className="mb-2"><a href="/services">Services</a></li>
            <li className="mb-2"><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Company</h2>
          <ul className="list-none p-0 m-0">
            <li className="mb-2"><a href="/privacy">Privacy Policy</a></li>
            <li className="mb-2"><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Contact Us</h2>
          <p>123 Main St, Cityville</p>
          <p>Email: info@example.com</p>
          <p>Phone: (555) 555-5555</p>
        </div>

        {/* Copyright and Attribution Section */}
        <div className="col-span-4 md:col-span-1 text-right">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          <p>Created by sidjha57@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

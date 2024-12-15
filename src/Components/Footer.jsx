import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900  border-t py-8 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Tentang Kami</h2>
            <p className="text-gray-600">
              Toci adalah toko perlengkapan badminton dan olahraga favorit Anda. 
              Kami menyediakan produk berkualitas tinggi untuk kebutuhan olahraga Anda.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Hubungi Kami</h2>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-center space-x-2">
                <HiLocationMarker className="text-yellow-500" />
                <span>Alamat: Jl. Badminton No. 123, Rancaekek</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-yellow-500" />
                <span>Email: Toci@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="text-yellow-500" />
                <a 
                  href="tel:+6281220995629" 
                  className="hover:underline"
                >
                  Telepon: +62 812 2099 5629
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Ikuti Kami</h2>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center border-t border-gray-300 pt-4">
          <p className="text-gray-600">
            &copy; 2008 Toci. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

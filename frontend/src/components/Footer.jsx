import { useSelector } from "react-redux";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const { user } = useSelector((state) => state.auth);

  // HANDLESCROLL
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {!user ? (
        <footer className="bg-[#1d215f]">
          <div className="upperFooter bg-[#ECECFB]">
            <div className="px-5 sm:px-10 pt-10 sm:pb-10 pb-10 mx-auto">
              {/* DETAILS */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-y-10 lg:grid-cols-6">
                <div className="sm:col-span-2">
                  <h1
                    onClick={handleScroll}
                    className="max-w-lg text-3xl cursor-pointer font-semibold tracking-wider text-gray-900"
                  >
                    Octa Tech
                  </h1>
                  <p className="mt-5 text-sm w-[100%] sm:w-[80%] text-gray-900">
                    Octa Tech is your go-to destination for cutting-edge IT
                    solutions, including infrastructure, software development,
                    cloud services, cybersecurity, and digital transformation.
                    Our team's expertise and commitment to client success make
                    us the ideal partner for your technology needs.
                  </p>
                </div>

                <div className="mt-4 sm:mt-8 sm:col-span-2">
                  <p className="font-semibold text-gray-900">Contact</p>
                  <div className="flex flex-col items-start mt-3 space-y-2">
                    <a className="text-gray-900 transition-colors duration-300 cursor-pointer hover:underline hover:text-blue-500">
                      Phone: +1 (281) 607-5120
                    </a>
                    <a
                      href="mailto:info@octatechsolution.com"
                      target="_blank"
                      className="text-gray-900 transition-colors duration-300 cursor-pointer hover:underline hover:text-blue-500"
                    >
                      Mail: info@octatechsolution.com
                    </a>
                    <a className="text-gray-900 transition-colors duration-300 cursor-pointer hover:underline hover:text-blue-500">
                      Location: Katy TX 77493 USA
                    </a>
                    <a className="text-gray-900 transition-colors duration-300 cursor-pointer hover:underline hover:text-blue-500">
                      Whatsapp: +1 (281) 607-5120
                    </a>
                  </div>
                </div>

                <div className="mt-4 sm:mt-8">
                  <p className="font-semibold text-gray-900 tracking-wider">
                    Company
                  </p>
                  <div className="flex flex-col items-start mt-3 space-y-2">
                    <Link
                      to="/services"
                      onClick={handleScroll}
                      className="text-gray-900 transition-colors duration-300 cursor-pointer hover:underline hover:text-blue-500"
                    >
                      Services
                    </Link>
                    <Link
                      to="/about"
                      onClick={handleScroll}
                      className="text-gray-900 transition-colors duration-300 cursor-pointer hover:underline hover:text-blue-500"
                    >
                      About Us
                    </Link>
                    <Link
                      to="/contact"
                      onClick={handleScroll}
                      className="text-gray-900 transition-colors duration-300 cursor-pointer hover:underline hover:text-blue-500"
                    >
                      Contact Us
                    </Link>
                    <Link
                      to="/privacy-policy"
                      onClick={handleScroll}
                      className="text-gray-900 transition-colors duration-300 cursor-pointer hover:underline hover:text-blue-500"
                    >
                      Privacy policy
                    </Link>
                  </div>
                </div>

                <div className="mt-4 sm:mt-4">
                  <div className="flex flex-wrap flex-row lg:flex-col gap-2 sm:gap-5 mx-auto mt-6">
                    <a
                      href="https://www.linkedin.com/company/octa-tech-solutionn"
                      target="_blank"
                    >
                      <FaLinkedin
                        size={24}
                        className="mr-5 cursor-pointer text-[#0073AF]"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/octatechsolutions"
                      target="_blank"
                    >
                      <BsInstagram
                        size={24}
                        className="mr-5 cursor-pointer text-[#E83274]"
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/people/Octa-Tech-Solution/61557413701455/"
                      target="_blank"
                    >
                      <FaFacebookF
                        size={24}
                        className="mr-5 cursor-pointer text-[#1C9CEA]"
                      />
                    </a>
                    <a
                      href="https://www.youtube.com/@octatechsolution"
                      target="_blank"
                    >
                      <IoLogoYoutube
                        size={24}
                        className="mr-5 cursor-pointer text-[#FF0000]"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 text-sm px-3 bg-[#ECECFB] text-center text-gray-800">
            <h2 className="text-center text-2xl font-semibold uppercase">Payment Mehtods</h2>
            <div className="cont ">
              <div className="images_container py-8 max-w-5xl mx-auto flex justify-center flex-wrap items-center gap-12">
                <img
                  className="w-[4rem]"
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/American_Express.png?v=1713215529"
                  alt=""
                />

                <img
                  className="w-[4rem]"
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/visa.png?v=1713215529"
                  alt=""
                />

                <img
                  className="w-[4rem]"
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/MasterCard_Logo_svg.png?v=1713215530"
                  alt=""
                />

                <img
                  className="w-[4rem]"
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Discover-logo.png?v=1713215529"
                  alt=""
                />

                <img
                  className="w-[4rem]"
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Zelle_logo.png?v=1713215528"
                  alt=""
                />

                <img
                  className="w-[5rem]"
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Paypal_logo.png?v=1713217299"
                  alt=""
                />

                <img
                  className="w-[4rem]"
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Venmo-Logo.png?v=1713215529"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="text-sm py-8 px-3 border-t text-center text-white">
            <p>
              Copyrights © 2024 All Rights Reserved by Octa Tech Solutions LLC
            </p>
          </div>
        </footer>
      ) : null}
    </>
  );
};

export default Footer;

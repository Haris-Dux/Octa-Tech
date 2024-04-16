import React from 'react'
import Stats from '../../homepage/Stats';
import { FaLocationArrow } from "react-icons/fa";
import Testimonial from '../../homepage/Testimonial';
import Button from "../../../components/Button";


const DigitalMarketing = () => {

    return (
        <>
            <section className='relative pt-3 lg:pt-20 lg:pb-12 bg-gray-50'>
                {/* GRADIENT */}
                <div className="absolute inset-x-0 bottom-0 z-0 transform-gpu overflow-hidden blur-3xl">
                    <svg
                        className="h-[21.1875rem] sm:h-[42.375rem]"
                        viewBox="0 0 1155 678"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                            fillOpacity=".3"
                            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                        />
                        <defs>
                            <linearGradient
                                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                                x1="1155.49"
                                x2="-78.208"
                                y1=".177"
                                y2="474.645"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#5c55d9" />
                                <stop offset={1} stopColor="#e8c8d5" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="max-w-6xl px-4 z-50 sm:px-6 pt-16 pb-2 lg:pt-0 lg:pb-0 mx-auto">
                    <div className="items-center lg:flex lg:min-h-[60vh]">
                        <div className="w-full pt-3 sm:pt-0 lg:w-1/2">
                            <div className="lg:max-w-xl">
                                <h2 className="mt-3 w-[100%]  xl:w-[90%] text-4xl font-semibold capitalize text-black lg:text-5xl xl:text-5xl">Digital Marketing Services</h2>
                                <h2 className="mt-4 text-md font-normal text-black md:w-[80%] lg:w-[70%]">
                                    Boost your online presence and reach your target audience effectively
                                </h2>

                                <div className="hero_section_buttons flex items-start xs:items-center flex-col sm:flex-row gap-10 mt-6 mb-10 sm:mb-0 lg:mt-7">
                                    <Button text="Let's Talk" />
                                </div>
                            </div>
                        </div>

                        <div className="user_select flex items-center justify-center px-0 sm:px-10 xl:px-0 w-full mt-16 lg:mt-10 lg:w-1/2">
                            <img className="w-full h-full rounded-xl object-contain" src="https://res.cloudinary.com/dezi0bct4/image/upload/v1712528715/Rectangle_10370_gzpr9d.png" alt="Catalogue-pana.svg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ----------- BOLD TEXT -----------  */}
            <section className='bg-blue-700 flex justify-center items-center'>
                <h2 className='baloo text-white text-center text-md md:text-xl xl:text-3xl py-3 tracking-wider lg:tracking-widest'>
                    Innovative IT solutions for a dynamic world - Octa Tech leads the way
                </h2>
            </section>

            {/* ----------- DETAILS -----------  */}
            <section className='my-10 sm:my-16'>
                <div className="px-5 sm:px-10 lg:px-0">
                    <h2 className='baloo mb-3 text-black font-semibold text-4xl sm:text-4xl xl:text-5xl text-center'>Thrive’s Digital Marketing Services</h2>
                    <p className='mb-5 text-black w-[100%] sm:w-[90%] md:w-[80%] xl:w-[70%] mx-auto font-medium text-sm sm:text-md lg:text-md xl:text-lg text-center'>Build Brand Recognition as an Industry Leader and Increase Profitabilityz</p>


                    <div className="mt-20 max-w-7xl mx-auto flex justify-center items-center gap-8 flex-wrap">

                        {/* CARD 1 */}
                        <div className="my-3 relative min-h-[18rem] text-center px-5 py-7 bg-white shadow-xl border-2 border-gray-100 hover:border-blue-600 w-[100%] md:w-[70%] lg:w-[40%] xl:w-[35%] rounded-xl">
                            <div className='absolute -top-8 flex justify-center items-center h-16 w-16 inset-0 mx-auto'>
                                <img className='mid_img h-16 w-16' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2235.png?v=1711394864" alt="" />
                            </div>
                            <h2 className='mt-3 text-2xl font-semibold'>Pay Per Click (PPC)</h2>
                            <p className='mt-2 text-sm sm:text-md'>Reach your customers quickly and with precision with a data-driven PPC campaign. Our PPC Specialists are AdWords certified, so you can rest easy knowing your campaign is in the hands of professionals. Our team creates targeted ad copies, optimizes your bidding strategies and device targeting tactics and monitors your ROI for each keyword. We also take advantage of seasonal trends to promote your products and drive high-volume leads and traffic.</p>
                        </div>

                        {/* CARD 2 */}
                        <div className="my-3 relative min-h-[18rem] text-center px-5 py-7 bg-white shadow-xl border-2 border-gray-100 hover:border-blue-600 w-[100%] md:w-[70%] lg:w-[40%] xl:w-[35%] rounded-xl">
                            <div className='absolute -top-8 flex justify-center items-center h-16 w-16 inset-0 mx-auto'>
                                <img className='mid_img h-16 w-16' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2235.png?v=1711394864" alt="" />
                            </div>
                            <h2 className='mt-3 text-2xl font-semibold'>Search Engine Optimization (SEO)</h2>
                            <p className='mt-2 text-sm sm:text-md'>Through careful keyword research and white hat SEO practices, we can help you achieve higher organic rankings and increased visibility in search results. Our internet marketing company performs extensive keyword research, conducts on-page and off-page optimization and tracks your results with Google Search Console. These practices allow us to attract high-quality leads and traffic and increase your conversions as part of your digital marketing solutions.
                            </p>
                        </div>

                        {/* CARD 3 */}
                        <div className="my-3 relative min-h-[18rem] text-center px-5 py-7 bg-white shadow-xl border-2 border-gray-100 hover:border-blue-600 w-[100%] md:w-[70%] lg:w-[40%] xl:w-[35%] rounded-xl">
                            <div className='absolute -top-8 flex justify-center items-center h-16 w-16 inset-0 mx-auto'>
                                <img className='mid_img h-16 w-16' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2235.png?v=1711394864" alt="" />
                            </div>
                            <h2 className='mt-3 text-2xl font-semibold'>Social Media Marketing</h2>
                            <p className='mt-2 text-sm sm:text-md'>Ready to expand and market to your audiences on social media? We build social media campaigns to help your business grow and engage your followers. Our digital marketing agency identifies your goals, performs competitor benchmarking and evaluates your customers' online behavior. Using data and analytics, we develop custom social media brand management and paid advertising strategies tailored to your business.
                            </p>
                        </div>

                        {/* CARD 4 */}
                        <div className="my-3 relative min-h-[18rem] text-center px-5 py-7 bg-white shadow-xl border-2 border-gray-100 hover:border-blue-600 w-[100%] md:w-[70%] lg:w-[40%] xl:w-[35%] rounded-xl">
                            <div className='absolute -top-8 flex justify-center items-center h-16 w-16 inset-0 mx-auto'>
                                <img className='mid_img h-16 w-16' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2235.png?v=1711394864" alt="" />
                            </div>
                            <h2 className='mt-3 text-2xl font-semibold'>Content Writing</h2>
                            <p className='mt-2 text-sm sm:text-md'>Your website's content is crucial: it's the foundation of your SEO and the reason many people visit your site. Entrust your content creation with Thrive, and we'll write it with precision. Our content specialists stay abreast of the latest news and market trends to ensure we adhere to Google standards when developing content. We write headlines that pack a punch, utilize high-performing keywords, incorporate imagery and structure your posts to promote easy reading.
                            </p>
                        </div>

                        {/* CARD 5 */}
                        <div className="my-3 relative min-h-[18rem] text-center px-5 py-7 bg-white shadow-xl border-2 border-gray-100 hover:border-blue-600 w-[100%] md:w-[70%] lg:w-[40%] xl:w-[35%] rounded-xl">
                            <div className='absolute -top-8 flex justify-center items-center h-16 w-16 inset-0 mx-auto'>
                                <img className='mid_img h-16 w-16' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2235.png?v=1711394864" alt="" />
                            </div>
                            <h2 className='mt-3 text-2xl font-semibold'>Email Marketing</h2>
                            <p className='mt-2 text-sm sm:text-md'>How many emails from businesses do you delete every day? Choose Thrive and let's make your email marketing campaigns stand out and work for your business. We create personalized email newsletters to keep your emails out of spam folders and encourage your customers to take your desired action. Our team builds your subscriber list, tests email campaigns before delivery, utilizes power words on your content and creates a curiosity gap in your emails.
                            </p>
                        </div>

                    </div>

                </div>
            </section>


            {/* ----------- WHY YOUR BUSSINESS -----------  */}

            <section className='py-20 bg-[#f5f5f5]'>
                <div className="max-w-5xl mx-auto px-5 sm:px-10 lg:px-0">
                    <h2 className='baloo mb-3 text-black font-semibold text-4xl sm:text-4xl xl:text-4xl text-start sm:text-center'>Why Your Business Should Be Using Digital Marketing Service</h2>
                    <p className='mb-5 text-black w-[100%] sm:w-[90%] md:w-[80%] xl:w-[70%] mx-auto font-medium text-md sm:text-md lg:text-md xl:text-lg text-start sm:text-center'>
                        Engage More Clients And Rank High On Seacrch Results
                    </p>


                    <div className="mt-4 sm:mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2 place-items-center lg:gap-8">
                        <div className="">
                            <p className='my-3 text-md sm:text-lg font-medium'><span className='text-blue-600 mr-2 font-semibold'>01</span>Promote greater consumer engagement</p>
                            <p className='my-3 text-md sm:text-lg font-medium'><span className='text-blue-600 mr-2 font-semibold'>02</span>Adjust your strategies based on analytics and data</p>
                            <p className='my-3 text-md sm:text-lg font-medium'><span className='text-blue-600 mr-2 font-semibold'>03</span>Drive profitable long-term growth</p>
                            <p className='my-3 text-md sm:text-lg font-medium'><span className='text-blue-600 mr-2 font-semibold'>04</span>Leverage precise audience targeting</p>
                            <p className='my-3 text-md sm:text-lg font-medium'><span className='text-blue-600 mr-2 font-semibold'>05</span>Improve your conversion rates</p>
                        </div>
                        <div className="">
                            <p className='my-3 text-md sm:text-lg font-medium'><span className='text-blue-600 mr-2 font-semibold'>06</span>Save time, money and resources</p>
                            <p className='my-3 text-md sm:text-lg font-medium'><span className='text-blue-600 mr-2 font-semibold'>07</span>Build your brand reputation across online channels</p>
                            <p className='my-3 text-md sm:text-lg font-medium'><span className='text-blue-600 mr-2 font-semibold'>08</span>Acquire huge ROI</p>
                            <p className='my-3 text-md sm:text-lg font-medium'><span className='text-blue-600 mr-2 font-semibold'>09</span>Maximize various customer touchpoints</p>
                            <p className='my-3 text-md sm:text-lg font-medium'><span className='text-blue-600 mr-2 font-semibold'>10</span>Track your campaign results</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ----------- COMPANY STATS -----------  */}
            <Stats />

            {/* ----------- CONTENT SECION -----------  */}
            <Testimonial />


        </>
    )
}

export default DigitalMarketing;
import React from 'react';

const Blogs = () => {
    return (
        <>
            <div className="mt-10 container mx-auto px-4">
                <div className="flex justify-center items-center bg-green-500 bg-opacity-20 py-6 md:py-10 mb-8 rounded-lg h-24 md:h-32">
                    <h1 className="text-2xl md:text-4xl font-bold text-green-800 playfair-display">
                        READ OUR LATEST <span className="bg-white px-2 rounded-lg">BLOGS</span>
                    </h1>
                </div>
               <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center">
                    {/* Blog 1 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <a href="https://www.linkedin.com/posts/the-fresh-bucket_the-future-of-agritech-lies-in-harnessing-activity-7207335383636799490-nMeU?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" className="block">
                            <img className="h-48 w-full object-cover" src="https://media.licdn.com/dms/image/D4D12AQFQyBEfU7y2bQ/article-cover_image-shrink_423_752/0/1718362241297?e=1725494400&v=beta&t=PxtHTLIQTNtM_K5EkrmjaOzdnMPCZgnl9aop8awS6J0" alt="Blog 1" />
                            <div className="px-6 py-4">
                                <h3 className="font-semibold text-xl mb-2">Innovative Agritech Success</h3>
                                <p className="text-green-800 text-lg visited:text-purple-600">Learn More</p>
                            </div>
                        </a>
                    </div>

                    {/* Blog 2 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <a href="https://www.linkedin.com/posts/the-fresh-bucket_did-you-know-that-the-fresh-bucket-is-not-activity-7204695251314204672-IYW1?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" className="block">
                            <img className="h-48 w-full object-cover" src="https://media.licdn.com/dms/image/D4D12AQHBdxxmXNx_9Q/article-cover_image-shrink_423_752/0/1717733025478?e=1725494400&v=beta&t=4nrLTKprJsyj52PlSzJpW05AqIzZdRUHVmwu4BQwojI" alt="Blog 2" />
                            <div className="px-6 py-4">
                                <h3 className="font-semibold text-xl mb-2">Revolutinizing Agriculture</h3>
                                <p className="text-green-800 text-lg">Learn More</p>
                            </div>
                        </a>
                    </div>

                    {/* Blog 3 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <a href="https://www.linkedin.com/posts/the-fresh-bucket_sustainableagriculture-ecofriendlyfarming-activity-7203961243257171968-qHTv?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" className="block">
                            <img className="h-48 w-full object-cover" src="https://media.licdn.com/dms/image/D4D12AQFy1LLuO4bNng/article-cover_image-shrink_423_752/0/1717557533139?e=1725494400&v=beta&t=4I0vizhIYMiKtzoYnkhzAhMOM2tZEarfmm-jzLhmo_s" alt="Blog 3" />
                            <div className="px-6 py-4">
                                <h3 className="font-semibold text-xl mb-2">Investing in Sustainable Agriculture</h3>
                                <p className="text-green-800 text-lg">Learn More</p>
                            </div>
                        </a>
                    </div>

                    {/* Blog 4 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <a href="https://www.linkedin.com/posts/the-fresh-bucket_the-fresh-bucket-is-dedicated-to-transforming-activity-7203411269490532352-Q0av?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" className="block">
                            <img className="h-48 w-full object-cover" src="https://media.licdn.com/dms/image/D4D12AQHYvRjvgLF0YA/article-cover_image-shrink_423_752/0/1717426774744?e=1725494400&v=beta&t=JjOPmtgXVkm6SsGu7m1xth9cjYw7Z_XFFy13CATr_Q4" alt="Blog 4" />
                            <div className="px-6 py-4">
                                <h3 className="font-semibold text-xl mb-2">Transforming Indian Agriculture</h3>
                                <p className="text-green-800 text-lg">Learn More</p>
                            </div>
                        </a>
                    </div>

                    {/* Blog 5 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <a href="https://www.linkedin.com/posts/the-fresh-bucket_growth-future-environment-activity-7067083349973942273-_Sm8?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" className="block">
                            <img className="h-48 w-full object-cover" src="https://media.licdn.com/dms/image/D4D12AQEHJhk0TA5nJA/article-cover_image-shrink_423_752/0/1684922079662?e=1725494400&v=beta&t=HojyQDqZ0jEKhWrqwG94scDgAzCVHhmTn3Fk-vdRYj8" alt="Blog 5" />
                            <div className="px-6 py-4">
                                <h3 className="font-semibold text-xl mb-2">Exploring Organic Products</h3>
                                <p className="text-green-800 text-lg">Learn More</p>
                            </div>
                        </a>
                    </div>

                    {/* Blog 6 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <a href="https://www.linkedin.com/posts/the-fresh-bucket_future-environment-health-activity-7066688189385588738-ZSpz?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" className="block">
                            <img className="h-48 w-full object-cover" src="https://media.licdn.com/dms/image/D4D12AQH4TZYz-NlEaw/article-cover_image-shrink_423_752/0/1684829530550?e=1725494400&v=beta&t=spKY_aPcjnmgub0lf5M24dES2AuBnGt9xJiWz5ubadU" alt="Blog 6" />
                            <div className="px-6 py-4">
                                <h3 className="font-semibold text-xl mb-2">Embracing Organic Products</h3>
                                <p className="text-green-800 text-lg">Learn More</p>
                            </div>
                        </a>
                    </div>

                    {/* Blog 7 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <a href="https://www.linkedin.com/posts/the-fresh-bucket_growth-future-people-activity-7065944554008395776-H-xh?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" className="block">
                            <img className="h-48 w-full object-cover" src="https://media.licdn.com/dms/image/D4D12AQGOL_NMygQvUw/article-cover_image-shrink_720_1280/0/1684652024286?e=1725494400&v=beta&t=HRIZfa5X4BYRb9_6BRTertMXU80YFFmKzJIUSBHURXY" alt="Blog 7" />
                            <div className="px-6 py-4">
                                <h3 className="font-semibold text-xl mb-2">Organic Market Growth</h3>
                                <p className="text-green-800 text-lg">Learn More</p>
                            </div>
                        </a>
                    </div>

                    {/* Blog 8 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <a href="https://www.linkedin.com/posts/the-fresh-bucket_quality-sustainable-food-activity-7060606795026694144-p_-a?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" className="block">
                            <img className="h-48 w-full object-cover" src="https://media.licdn.com/dms/image/D4D12AQGCM4hEBll7Qg/article-cover_image-shrink_423_752/0/1683379603039?e=1725494400&v=beta&t=LBr5B2E77dnAmsp8o-pC-A3H_efxrmZYPK2Yv5IUs48" alt="Blog 8" />
                            <div className="px-6 py-4">
                                <h3 className="font-semibold text-xl mb-2">What is Organic Farming?</h3>
                                <p className="text-green-800 text-lg">Learn More</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blogs;
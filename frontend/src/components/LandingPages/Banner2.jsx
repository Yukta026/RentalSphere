
import React from 'react';

const Banner2 = () => {
    return (
        <div>
            <section className="bg-gray-100 py-8">
                <div className="container mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold">Most Trusted IT Solution</h2>
                        <h5 className="text-lg text-gray-600">That Provide Secure IT Solution</h5>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                        <div className="bg-white shadow-md p-8">
                            <h3 className="text-xl font-semibold">Trusted Services</h3>
                            <p className="text-gray-700">Hunky dory barney fannaround up the duff no biggie loo cup of tea jolly good ruddy! no biggie loo cup of ruddy!</p>
                            <button className="bg-gray-800 text-white py-2 px-4 mt-4 rounded-full hover:bg-gray-600 font-semibold">View more</button>
                        </div>
                        <div className="bg-white shadow-md p-8">
                            <h3 className="text-xl font-semibold">24/7 Support</h3>
                            <p className="text-gray-700">Hunky dory barney fannaround up the duff no biggie loo cup of tea jolly good ruddy! no biggie loo cup of ruddy!</p>
                            <button className="bg-gray-800 text-white py-2 px-4 mt-4 rounded-full hover:bg-gray-600 font-semibold">View more</button>
                        </div>
                        <div className="bg-white shadow-md p-8">
                            <h3 className="text-xl font-semibold">Expert & Professional</h3>
                            <p className="text-gray-700">Hunky dory barney fannaround up the duff no biggie loo cup of tea jolly good ruddy! no biggie loo cup of ruddy!</p>
                            <button className="bg-gray-800 text-white py-2 px-4 mt-4 rounded-full hover:bg-gray-600 font-semibold">View more</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-200 py-8">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="w-1/2 pr-8">
                            <h5 className="text-lg text-gray-700">Why Choose US ?</h5>
                            <h2 className="text-3xl font-semibold mt-2">Advantages to be with US</h2>
                            <p className="text-gray-700 mt-4">We Provide The Best All Kind IT Solution. We Are known for developing futuristic software and IT solutions that fit your needs perfectly. We have vast experience and knowledge and utilize advanced.</p>
                        </div>
                        <div className="w-1/2 pl-8">
                            <div className="flex justify-between">
                                <div className="w-1/2">
                                    <p className="bg-white shadow-md p-4 rounded-md border-l-2 border-gray-700 mt-4 transition-all hover:bg-gray-700 hover:text-white">Remote IT </p>
                                    <p className="bg-white shadow-md p-4 rounded-md border-l-2 border-gray-700 mt-4 transition-all hover:bg-gray-700 hover:text-white">Solving IT Problems</p>
                                    <p className="bg-white shadow-md p-4 rounded-md border-l-2 border-gray-700 mt-4 transition-all hover:bg-gray-700 hover:text-white">IT Management</p>
                                </div>
                                <div className="w-1/2 pl-2">
                                    <p className="bg-white shadow-md p-4 rounded-md border-l-2 border-gray-700 mt-4 transition-all hover:bg-gray-700 hover:text-white">In-House Training</p>
                                    <p className="bg-white shadow-md p-4 rounded-md border-l-2 border-gray-700 mt-4 transition-all hover:bg-gray-700 hover:text-white">Retention Rate</p>
                                    <p className="bg-white shadow-md p-4 rounded-md border-l-2 border-gray-700 mt-4 transition-all hover:bg-gray-700 hover:text-white">Quality Assurance</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 hidden md:block ml-12">
                        <img src="/img/whywe.gif" alt="Why Choose Us" className="w-full h-auto " />
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banner2;






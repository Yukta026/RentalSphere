import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  BedIcon,
  CarIcon,
  BathIcon,
  CondoIcon,
  PartFurnishIcon,
  SqFtIcon,
  SqFtRateIcon,
} from "../Utils/SVGObjs";
import {sampleListingsData} from '../Utils/SampleData.jsx'

const Home = () => {
  const [listings, setListings] = useState(sampleListingsData);
  const navigate = useNavigate();

  // useEffect(() => {
  //   // Fetch data from endpoints
  //   const fetchData = async () => {
  //     try {
  //       // Example: Fetch data from an API endpoint
  //       const response = await fetch("https://api.example.com/listings");
  //       const data = await response.json();
  //       setListings(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full m-6 p-10">
        {listings.map((listing, index) => (
          <div className="relative mx-auto w-full" key={index}>
            <Link
              to="#"
              className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"
            >
              <div className="shadow p-4 rounded-lg bg-white">
                <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
                  <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                    {/* <div className="absolute inset-0 bg-yellow-300 opacity-10"></div> ????? */}
                    {/* <div className="absolute inset-0" src="./src/assets/Img1.jpeg"></div> */}

                    <img
                      src={listing.imageURL}
                      alt=""
                      className=""
                    />
                  </div>

                  <div className="absolute flex justify-center bottom-0 mb-3">
                    <div className="flex bg-white px-4 py-1 space-x-5 rounded-lg overflow-hidden shadow">
                      <p className="flex items-center font-medium text-gray-800">
                        <BedIcon />{listing.numBedrooms}
                      </p>
                      {/* 
                    <p className="flex items-center font-medium text-gray-800">
                      <CarIcon />2
                    </p> */}

                      <p className="flex items-center font-medium text-gray-800">
                        <BathIcon />{listing.numBathrooms}
                      </p>
                    </div>
                  </div>

                  <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none">
                    Featured
                  </span>
                </div>

                <div className="mt-4">
                  <h2
                    className="font-medium text-base md:text-lg text-gray-800 line-clamp-1"
                    title="New York"
                  >
                    {listing.title}
                  </h2>
                  <p
                    className="mt-2 text-sm text-gray-800 line-clamp-1"
                    title="New York, NY 10004, United States"
                  >
                    
                    {listing.listingAddress}
                  </p>
                </div>

                <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-8">
                  <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                    <CondoIcon />
                    <span className="mt-2 xl:mt-0">{listing.listingType}</span>
                  </p>
                  <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                    <PartFurnishIcon />
                    <span className="mt-2 xl:mt-0">{listing.furnishType}</span>
                  </p>
                  <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                    <SqFtIcon />
                    <span className="mt-2 xl:mt-0">{listing.area}</span>
                  </p>
                  <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                    <SqFtRateIcon />
                    <span className="mt-2 xl:mt-0">{listing.rate}</span>
                  </p>
                </div>

                <div className="grid grid-cols-2 mt-8">
                  <div className="flex items-center">
                    <div className="relative">
                      <div className="rounded-full w-6 h-6 md:w-8 md:h-8 bg-gray-200"></div>
                      <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"></span>
                    </div>

                    <p className="ml-2 text-gray-800 line-clamp-1">{listing.owner}</p>
                  </div>

                  <div className="flex justify-end">
                    <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
                      <span className="text-sm uppercase">$</span>
                      <span className="text-lg">{listing.price}</span>/m
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

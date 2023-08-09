import React from "react";
import { NavLink } from "react-router-dom";
import { aboutUsImages } from "../constants/data";

const About = () => {
  return (
    <div className="bg-gray-200 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:5/12 lg:w-5/12">
                <img
                  src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                  alt="image_"
                />
              </div>
              <div className="md:7/12 lg:w-6/12">
                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                  Nuxt development is carried out by passionate developers
                </h2>
                <p className="mt-6 text-gray-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                  omnis voluptatem accusantium nemo perspiciatis delectus atque
                  autem! Voluptatum tenetur beatae unde aperiam, repellat
                  expedita consequatur! Officiis id consequatur atque
                  doloremque!
                </p>
                <p className="mt-4 text-gray-600">
                  {" "}
                  Nobis minus voluptatibus pariatur dignissimos libero quaerat
                  iure expedita at? Asperiores nemo possimus nesciunt dicta
                  veniam aspernatur quam mollitia.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {aboutUsImages.map((image, index) => (
            <div key={index} className="cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  className="w-full h-[250px] transform transition-all duration-200 hover:scale-105"
                  src={image.src}
                  alt={image.title}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-75 bg-black transition-opacity duration-200">
                  <NavLink to={"/store"}>
                    <p className="text-white hover:text-purple">
                      {image.title}
                    </p>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-lg text-center mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae
          diam non velit semper efficitur. Sed dictum mi non ligula facilisis
          elementum. Mauris semper lorem mi, a ullamcorper tellus tristique
          vitae. Proin porttitor tristique odio, a tincidunt risus mattis ac.
          Integer ultricies massa vitae malesuada malesuada.
        </p>
      </div>
    </div>
  );
};

export default About;

import React, { MouseEvent } from 'react';
// images
import hero from "../assets/Frame 2085663684.png";
import image2 from "../assets/Rectangle 18373.png";
import image3 from "../assets/Rectangle 18374.png";
import image4 from "../assets/Rectangle 18375.png";
import image1 from "../assets/Rectangle18372.png";

export const Hero = () => {
    const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        window.location.href = "/";
    };
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-4 px-6 gap-4">
            <div className='w-full py-4'>
                <button className="rounded-full border-2 border-accentGreen-900 py-0.5 px-2 uppercase font-bold text-xsm text-accentGreen">colabs</button>
                <p className='font-bold text-accentGreen text-2xl py-2'>
                    <span className="text-darkGreen">Start your open-source journey</span>
                    <br />
                    <span className="text-accentGreen">here with your first -m"".</span>
                </p>
                <p className='py-2'>Colabs is a library of open-source projects in the ecosystem which makes it easier for code enthusiasts and beginners to make their contribution to open-source projects.</p>
                <div className="contributors flex items-center py-4">
                    <div className="relative flex">
                        <img className='img-fluid h-10 w-10' alt='contributor-list' src={image1} />
                        <img className='img-fluid h-10 w-10 -ml-4' alt='contributor-list' src={image2} />
                        <img className='img-fluid h-10 w-10 -ml-4' alt='contributor-list' src={image3} />
                        <img className='img-fluid h-10 w-10 -ml-4' alt='contributor-list' src={image4} />

                    </div>
                    <div className="count ml-2">
                        <p className='m-0'>500+ contributors and counting</p>
                    </div>
                </div>
                <button className="bg-darkGreen text-white py-2 w-48 font-semibold text-sm" onClick={handleMouseEvent}>Add a project</button>
            </div>
            <div className='h-[300px]'>
                <img className="img-fluid" alt="hero-image" src={hero} />
            </div>
        </div>
    );
}

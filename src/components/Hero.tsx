import React from 'react';

export const Hero = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-4">
            <div className='w-full py-4'>
                <button className="rounded-full border-2 border-accentGreen-900 px-2 uppercase font-bold text-sm text-accentGreen">colabs</button>
                <p className='font-bold text-accentGreen text-2xl py-2'>Start your open-source journey<br /> here with your first -m.</p>
                <p className='py-2'>Colabs is a library of open-source projects in the ecosystem which makes it easier for code enthusiasts and beginners to make their contribution to open-source projects.</p>
                <div className="contributors flex items-center py-4">
                    <div className="relative flex">
                        <img className='img-fluid rounded-full h-10 w-10' alt='contributor-list' src='https://res.cloudinary.com/dfczhaomn/image/upload/v1712099124/Untitled_design_18_cvblpk.png' />
                        <img className='img-fluid rounded-full h-10 w-10 -ml-2' alt='contributor-list' src='https://res.cloudinary.com/dfczhaomn/image/upload/v1712099124/Untitled_design_18_cvblpk.png' />
                        <img className='img-fluid rounded-full h-10 w-10 -ml-2' alt='contributor-list' src='https://res.cloudinary.com/dfczhaomn/image/upload/v1712099124/Untitled_design_18_cvblpk.png' />
                        <img className='img-fluid rounded-full h-10 w-10 -ml-2' alt='contributor-list' src='https://res.cloudinary.com/dfczhaomn/image/upload/v1712099124/Untitled_design_18_cvblpk.png' />
                    </div>
                    <div className="count ml-2">
                        <p className='m-0'>500+ contributors and counting</p>
                    </div>
                </div>
                <button className="bg-btnColor text-white py-2 w-48 font-semibold text-sm">Add a project</button>
            </div>
            <div className='h-[350px] bg-gray-900 rounded-xl'></div>
        </div>
    );
}

import Image from 'next/image'
import React from 'react'

const HomeHero = () => {
    return (
        <section className=' bg-gray-700 text-white pl-40'>
            {/* left start here */}
            <div className=' w-1/3'>
                <h1 className=" text-sm sm:text-lg md:text-2xl lg:text-4xl xl:text-4xl pt-6">I am a Full Stack Developer</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, quis fugit id libero hic similique odio quibusdam voluptate veritatis quisquam minima a cupiditate maxime laudantium eveniet nemo et facilis aspernatur.</p>
                <button className='bg-red-500 py-2 px-2 rounded-lg <div class="bg-gradient-to-r from-cyan-500 to-blue-500 ..."></div>
            '>Profile</button>
            </div>
            {/* left end here    */}
            <div>
                <Image src={../ profile.webp} height={200} width={200}></Image>
            </div>
        </section>
    )
}

export default HomeHero
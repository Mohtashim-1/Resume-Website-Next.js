import React from 'react'

const Header = () => {
    return (
        <section className=' bg-gray-700 text-white'>
            <div className=' flex justify-between pt-4'>
                <h1 className=" font-autoGraph text-sm sm:text-lg md:text-2xl lg:text-4xl xl:text-6xl">Mohtashim Shoaib</h1>
                <ul className='flex justify-between'>
                    <li className='mx-5 text-2xl font-autoGraph '>Home</li>
                    <li className='mx-5 text-2xl font-autoGraph '>Portfolio</li>
                    <li className='mx-5 text-2xl font-autoGraph '>Skills</li>
                    <li className='mx-5 text-2xl font-autoGraph '>Contact</li>
                    <li className='mx-5 text-2xl font-autoGraph '>About</li>
                </ul>
            </div>
        </section>
    )
}

export default Header
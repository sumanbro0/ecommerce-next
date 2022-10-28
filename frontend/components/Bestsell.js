import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
let count = 0;
const Bestsell = () => {
    const images = [
        '/Drako.png',
        '/Drako1.png',
        '/Drako2.png'
    ]
    const [index, setIndex] = useState(0);
    const slideRef = useRef();
    const handlePrevClick = () => {
        const length = images.length;
        count = (count + length - 1) % length;
        setIndex(count)
        slideRef.current.classList.add("fade-anim");

    }
    const removeAnimation = () => {
        slideRef.current.classList.remove("fade-anim")
    }

    useEffect(() => {
        slideRef.current.addEventListener('animationend', removeAnimation);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const handleNextClick = () => {
        count = (count + 1) % images.length;
        setIndex(count);
        slideRef.current.classList.add("fade-anim");
    }

    return (
        <div className=''>
            <h1 className='text-xl pb-4 font-bold'>Best Sellers</h1>
            <div ref={slideRef} className='relative'>
                <div className="absolute flex flex-col opacity-0 ease-out duration-300 hover:opacity-100 items-center py-8 z-10 w-full h-[250px] bg-[#ffffffc9] rounded-[0.5rem] ">
                    <h1 className='text-xl font-bold pt-8'>Hugo boss Hugo</h1>
                    <span className='text-[#ac7c2d] pt-4 text-lg'>$ 19.3</span>
                    <p className='text-[40px]'>↓</p>
                </div>
                <Image className='rounded-[0.5rem]' src={images[index]} alt={'pic'} width={'250px'} height={'250px'}></Image>
                <div className="flex text-center justify-center pt-4  pb-8">
                    <button onClick={handlePrevClick} className='px-4 py-2 mr-4  bg-[#ac7c2d] text-white text-lg ease duration-200 hover:bg-black'> {`<`}</button>
                    <button onClick={handleNextClick} className='px-4 py-2  bg-[#ac7c2d] text-white text-lg ease duration-200 hover:bg-black'>{`>`}</button>
                </div>
            </div>

        </div>
    )
}

export default Bestsell
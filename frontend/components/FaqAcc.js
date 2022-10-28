import React, { useState, useRef } from 'react'
import { useSpring, animated } from "react-spring";

const FaqAcc = ({ q, a }) => {
    const [show, setShow] = useState(false);
    const handelClick = () => {
        setShow(!show);
    }
    const openAnimation = useSpring({
        from: { opacity: "0", maxHeight: "25px" },
        to: { opacity: "1", maxHeight: show ? "500px" : "30px" },
        config: { duration: "500" }
    });
    //rotate animation
    const iconAnimation = useSpring({
        from: {
            transform: "rotate(90deg)",
        },
        to: {
            transform: show ? "rotate(180deg)" : "rotate(0deg)",
        },
        config: { duration: "500" }
    });
    return (
        <div style={openAnimation} className="flex-col cursor-pointer my-4 w-full flex ">
            <animated.div className={'mt-4'} style={openAnimation}>
                <div onClick={handelClick} className="flex  items-center p-4 text-[#ac7c2d] bg-white">
                    <animated.i style={iconAnimation}>
                        <span style={iconAnimation} className='px-4 text-4xl font-bold '>{show ? '-' : '+'}</span>
                    </animated.i>

                    <h1 className='text-2xl font-semibold'>{q}</h1>
                </div>
                {show && <div className="bg-[#ac7c2d] transition-all duration-1000 ease-in p-8 font-thin text-white  ">
                    <p>{a}</p>
                </div>}
            </animated.div>
        </div>
    )
}

export default FaqAcc
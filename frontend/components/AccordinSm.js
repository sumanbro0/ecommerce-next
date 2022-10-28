import React, { useState } from 'react'
import Link from 'next/link'

const AccordinSm = ({ main, data }) => {
    const [show, setShow] = useState(false)
    return (
        <div className='font-light pt-4 flex flex-col justify-between text-sm '>
            <div className="head flex justify-between items-center hover:text-[#ac7c2d]">
                <Link href={`/category/${main.slug}/`}><a><h1 className=''>{main.name}</h1></a></Link>
                <span className='font-bold  pl-[4rem] text-xl' onClick={() => { setShow(!show) }}>{show ? '-' : '+'}</span>
            </div>
            {data.map((e) =>
                <div key={e.slug}>
                    {e.parent == main.name ? show && <ul className='hover:text-[#ac7c2d] pt-2 pl-8'>
                        <li className='list-disc'>{e.name}</li></ul> : null}

                </div>
            )}
        </div>

    )
}

export default AccordinSm
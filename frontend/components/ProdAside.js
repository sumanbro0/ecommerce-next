import React from 'react'
import AccordinSm from './AccordinSm'
import Link from 'next/link';
const ProdAside = ({ data, cat, parent }) => {

    let stock = 0;
    let nStock = 0;
    data && data.forEach(e => {
        if (e.is_active) {
            stock += 1;
        }
        else {
            nStock += 1
        }
    }
    )
    return (

        <div className=' flex cursor-pointer flex-col justify-start'>
            <div className='flex w-[100%]  justify-between flex-col'>
                <h1 className="text-xl font-[600]">Category</h1>
                {parent.map((e) =>
                    <AccordinSm key={e.slug} data={cat} main={e} />
                )
                }
            </div>
            <div className='pt-4 '>
                <div className="button flex flex-col ">
                    <h1 className="text-xl py-4 font-[600]">Availaility</h1>
                    <div className="flex flex-col  items-start  mb-4">
                        <div className="form-check my-2  ">
                            {stock != 0 ? <Link href="/instock"><a ><label htmlFor="checked-checkbox" className="ml-2 hover:text-[#ac7c2d] text-sm cursor-pointer font-light">in stock ({stock}) </label></a></Link> : <label htmlFor="checked-checkbox" className="ml-2 hover:text-[#ac7c2d]  cursor-not-allowed opacity-50 text-sm  font-light">in stock ({stock}) </label>}

                        </div>
                        {nStock != 0 ? <Link href="/notavailable"><a> <label htmlFor="checked-checkbox" className="ml-2 hover:text-[#ac7c2d] text-sm cursor-pointer font-light">Not in stock ({nStock}) </label></a></Link> : <label htmlFor="checked-checkbox" className="ml-2 hover:text-[#ac7c2d] cursor-not-allowed opacity-50 text-sm  font-light">Not in stock ({nStock}) </label>}
                    </div>

                </div>
            </div>

        </div>

    )
}

export default ProdAside
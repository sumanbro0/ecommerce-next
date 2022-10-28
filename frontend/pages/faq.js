import { ListItemSecondaryAction } from '@mui/material'
import { key } from 'fontawesome'
import React from 'react'
import FaqAcc from '../components/FaqAcc'
import Header from '../components/Header'

const Faq = () => {
    let data = [
        {
            'id': '1',
            'q': 'WHAT DO I NEED TO KNOW?',
            'a': 'Facilisis volutpat est velit egestas dui id ornare. Sed turpis tincidunt id aliquet risus feugiat in. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Non sodales neque sodales ut etiam sit amet. Erat pellentesque adipiscing commodo elit at imperdiet. Enim ut sem viverra aliquet eget sit amet tellus cras. Magna sit amet purus gravida quis blandit turpis cursus in. Fames ac turpis egestas maecenas pharetra convallis posuere.'
        },
        {

            'id': '2',
            'q': 'HOW WILL I KNOW IF ORDER IS PLACED SUCCESSFULLY?',
            'a': 'Amet massa vitae tortor condimentum lacinia quis vel eros donec. Viverra justo nec ultrices dui sapien. Ac tortor dignissim convallis aenean et tortor at risus. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Id neque aliquam vestibulum morbi blandit cursus risus at. Elementum integer enim neque volutpat ac tincidunt. Enim ut sem viverra aliquet eget sit amet tellus cras.'
        },
        {
            'id': '3',
            'q': 'HOW DO I CHECK THE STATUS OF MY ORDER?',
            'a': 'Mattis aliquamfaucibus purus in massa tempor nec feugiat nisl. Ut diam quam nulla porttitor massa id neque. Enim nulla aliquet porttitor lacus. Enim blandit volutpat maecenas volutpat. Sed felis eget velit aliquet sagittis id consectetur purus. Sollicitudin tempor id eu nisl nunc mi ipsum. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Placerat in egestas erat imperdiet sed euismod nisi porta.'
        },

    ]
    return (
        <div className='bg-[#f1f2f6]'>
            <Header path={'faq\'s'} />
            <div className="flex flex-col min-h-screen  py-16 w-[80%]  mx-auto items-start  ">
                {data.map((e) =>
                    <FaqAcc key={e.id} data={data} {...e} />
                )}
            </div>
        </div>
    )
}

export default Faq
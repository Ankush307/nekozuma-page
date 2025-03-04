import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MEDIA_LINKS } from '@/utils/helper'

const Footer = () => {
    return (
        <div className='footer-bg mt-5 d-flex align-items-center justify-content-center flex-column'>
            <p className='text-center fw-normal ff-franklin fs-xl text-white font-franklin'>NEKOZUMA</p>
            <div className="d-flex mt-3 gap-3 align-items-center justify-content-center">
                {MEDIA_LINKS.map((obj, i) => (
                    <Link className='media-links' target='_blank' key={i} href={obj.link}>
                        <Image className='pe-none' src={obj.name} alt='media icon' width={29} height={29} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Footer
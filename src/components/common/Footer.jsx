import { SOCIAL_LIST } from '@/utils/helper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='footer-bg mt-5 d-flex align-items-center justify-content-center flex-column'>
            <p className='text-center fw-normal ff-franklin fs-xl text-white font-franklin'>NEKOZUMA</p>
            <div className="d-flex mt-3 gap-3 align-items-center justify-content-center">
                {SOCIAL_LIST.map((obj, i) => (
                    <Link key={i} href={obj.link}>
                        <Image src={obj.name} alt='media icon' width={29} height={29} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Footer
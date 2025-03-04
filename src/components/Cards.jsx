import { CARDS_IMG_LIST } from '@/utils/helper'
import Image from 'next/image'
import Marquee from "react-fast-marquee";
const Cards = () => {
    return (
        <div id='overview' className="overflow-hidden">
            <Marquee direction="right">
                <div className="d-flex flex-row-reverse align-items-center">
                    {CARDS_IMG_LIST.map((obj, i) => (
                        <Image src={obj} key={i} width={320} height={320} className="w-100 cats-img pe-none " alt='cats' />
                    ))}
                </div>
            </Marquee>
            <Marquee>
                <div className="d-flex align-items-center mx-auto justify-content-center">
                    {CARDS_IMG_LIST.map((obj, i) => (
                        <Image src={obj} key={i} width={320} height={320} className="w-100 cats-img pe-none " alt='cats' />
                    ))}
                </div>
            </Marquee>
        </div>
    );
}

export default Cards
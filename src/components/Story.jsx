import React from 'react'
import Image from 'next/image';
const Story = () => {
    return (
        <div id='story'>
            <div className="container mx-auto mt-5">
                <h2 className="text-center fw-normal font-franklin fs-xl text-blue">Story</h2>
                <p className='text-center ff-franklin text-xs pt-3 fw-normal text-light-blue mx-auto mb-0 story-description '>Nekozuma which means lightning cats in Japanese (Neko = Cats // Inazuma = Lightning) is a collection of 5555 NFTs on the Solana blockchain. The story centers around 3 eras of cats living in different timelines - past, present, future. In each timeline, there are 3 deities that are all powerful and are meant to protect the world of Nekos.</p>
                <p className='text-center ff-franklin text-xs fw-normal text-light-blue mx-auto mb-0 story-description-2 fs-xs'>However at every junction in time, there is always a darkness that is waiting to overthrow the good. Hence, each timeline has its own arch nemesis. This means that there will be a total of 4 godly nekos from each timeline making a total of 12 godly nekos that will be fully animated.</p>
            </div>
            <Image src='/assets/images/webp/about-us-cats.webp' alt='cat-battle' width={1280} height={357} className='w-100 h-auto pe-none' />
        </div>
    );
}

export default Story
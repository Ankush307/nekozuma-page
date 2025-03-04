import { TEAM_LIST } from '@/utils/helper'
import Image from 'next/image'
import React from 'react'

const Team = () => {
    return (
        <div id='team'>
            <div className="container my-5">
                <h2 className="text-center fw-normal font-franklin fs-xl team-heading mx-auto text-blue">Team</h2>
                <div className="d-flex flex-wrap justify-content-center gap-3 mt-4 max-w-2xl mx-auto">
                    {TEAM_LIST.map((obj, i) => (
                        <div key={i} className="team-card justify-content-center align-items-center d-flex flex-column">
                            <Image src={obj.image} alt={obj.name} width={202} height={202} />
                            <p className='text-blue fs-4 text-center mb-2 mt-4 font-franklin'>{obj.tittle}</p>
                            <p className='text-xs text-light-blue text-center mb-2'>{obj.name}</p>
                            <p className='fs-xs text-light-blue text-center'>{obj.description}</p>
                            <Image src={obj.icon} alt={obj.name} width={20} height={20} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Team
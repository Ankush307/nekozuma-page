"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HEADER_LIST, MEDIA_LINKS } from "@/utils/helper";

const Header = () => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        document.body.classList.toggle("overflow-hidden", open);
    });
    return (
        <div className="position-relative w-100 d-flex justify-content-between align-items-center nav-parent">
            <Link href="#" className="position-absolute nav-logo">
                <Image src="/assets/images/png/logo-bg.png" alt="logo" width={420} height={81} />
            </Link>
            <div className="container d-flex justify-content-md-end justify-content-center pt-md-0 pt-2 mt-md-0 mt-4 header-links">
                <div className={`d-flex align-items-center flex-md-row justify-content-center flex-column end-md-0 nav-link-parent z-2 ${open ? "start-0" : "start-100"}`}>
                    {HEADER_LIST.map((obj, i) => (
                        <Link onClick={() => setOpen(!open)} key={i} href={obj.link} className="text-decoration-none text-white fw-normal nav-link"> {obj.tittle}</Link>
                    ))}
                    <div className="d-flex gap-3">
                        {MEDIA_LINKS.map((obj, i) => (
                            <Link className="media-links" key={i} href={obj.link} target="_blank">
                                <Image className="media-icon" src={obj.icon} alt="media icon" width={29} height={29} />
                            </Link>
                        ))}
                    </div>
                </div>
                <div onClick={() => setOpen(!open)} className="w-100 d-flex gap-2 flex-column d-md-none justify-content-center align-items-end z-3">
                    <span className={`menu-buttom menu-buttom-one  ${open ? "menu-open" : "menu-close"}`}></span>
                    <span className={`menu-buttom ${open ? "menu-open-two" : "menu-close"}`}></span>
                </div>
            </div>
        </div>
    );
};

export default Header;

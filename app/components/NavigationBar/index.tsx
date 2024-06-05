'use client'

import {NAVIGATION_PROVIDERS} from "@/app/constants/navigation";
import Link from "next/link";
import React, {useState} from "react";
import './styles.css';
import Image from "@/app/components/Image";

const NavigationBar = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    return (
        <nav>
            <div className="nav-mobile-burger">
                <Image
                    src='img/icons/burger.png'
                    alt='burger'
                    onClick={() => setIsOpenMenu(!isOpenMenu)}
                />
            </div>
            <ul className={`nav-list ${!isOpenMenu && 'hide'}`}>
                {
                    NAVIGATION_PROVIDERS.map((navItem, index) => (
                        <li key={`${navItem.name}-${navItem.path}-${index}`}>
                            <Link
                                href={navItem.path}
                                className='animation-link'
                                onMouseEnter={() => {
                                    if (navItem.children.length > 0) {
                                        console.log(navItem.children[0].name);
                                    }
                                }}
                            >
                                {navItem.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default NavigationBar;
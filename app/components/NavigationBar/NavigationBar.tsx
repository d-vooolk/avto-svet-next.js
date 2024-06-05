'use client'

import {NAVIGATION_PROVIDERS} from "@/app/constants/navigation";
import Link from "next/link";
import React from "react";
import './styles.css';

const NavigationBar = () => {
    return (
        <nav>
            <ul className="nav-list">
                {
                    NAVIGATION_PROVIDERS.map((navItem) => (
                        <li>
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
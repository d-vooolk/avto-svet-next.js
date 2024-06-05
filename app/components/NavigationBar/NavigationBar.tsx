'use client'

import {NAVIGATION_PROVIDERS} from "@/app/constants/navigation";
import Link from "next/link";
import React from "react";

const NavigationBar = () => {
    return (
        <nav>
            <ul>
                {
                    NAVIGATION_PROVIDERS.map((navItem) => (
                        <li>
                            <Link
                                href={navItem.path}
                                onMouseEnter={() => {
                                    if (navItem.children.length > 0) {
                                        alert(navItem.children[0].name);
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
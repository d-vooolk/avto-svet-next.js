'use client'

import React from 'react';
import Link from 'next/link';
import Image from "@/app/components/Image/Image";
import './styles.css';
import {ROOT_CONSTANTS} from "@/app/constants/root";
import NavigationBar from "@/app/components/NavigationBar/NavigationBar";

const Header = () => {
    return (
        <header>
            <div className='logo-container'>
                <Image src='/img/logo.png' alt='logo' />
            </div>

            <NavigationBar />

            <div>
                <div>
                    <span>{ROOT_CONSTANTS.ARTEM_PHONE_NUMBER}</span>
                    <span>{ROOT_CONSTANTS.DIMA_PHONE_NUMBER}</span>
                </div>
                <div className='instagram-container'>
                    <Link
                        href='https://www.instagram.com/avto_svet_by/'
                        target='_blank noopener noreferer'
                    >
                        <Image
                            src='/img/social/inst-black.png'
                            alt='instagram'
                        />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;
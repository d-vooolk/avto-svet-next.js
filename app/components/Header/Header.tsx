import React from 'react';
import Link from 'next/link';
import Image from "@/app/components/Image/Image";
import './styles.css';
import {ROOT_CONSTANTS} from "@/app/constants/root";
import NavigationBar from "@/app/components/NavigationBar/NavigationBar";
import {PAGES_CONFIG} from "@/app/constants/pagesConfig";

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
                        href={ROOT_CONSTANTS.INSTAGRAM_LINK}
                        target={PAGES_CONFIG.images.target.blankNoopener}
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
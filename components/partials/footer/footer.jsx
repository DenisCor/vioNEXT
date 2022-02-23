import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

import ALink from '~/components/features/alink';

function Footer () {
    const router = useRouter( "" );
    const [ isBottomSticky, setIsBottomSticky ] = useState( false );
    const [ containerClass, setContainerClass ] = useState( 'container' );

    useEffect( () => {
        handleBottomSticky();
        setContainerClass( router.asPath.includes( 'fullwidth' ) ? 'container-fluid' : 'container' );
    }, [ router.asPath ] );

    useEffect( () => {
        window.addEventListener( 'resize', handleBottomSticky, { passive: true } );
        return () => {
            window.removeEventListener( 'resize', handleBottomSticky );
        }
    }, [] )

    function handleBottomSticky () {
        setIsBottomSticky( router.pathname.includes( 'product/default' ) && ( window.innerWidth > 991 ) );
    }

    return (
        <footer className="footer footer-2">
            <div className="footer-bottom">
                <div className={ containerClass }>
                    <p className="footer-copyright mb-0">Copyright © { ( new Date() ).getFullYear() } Molla Store. All Rights Reserved.</p>
                    <ul className="footer-menu">
                        <li><ALink href="#">Terms Of Use</ALink></li>
                        <li><ALink href="#">Privacy Policy</ALink></li>
                    </ul>

                    <div className="social-icons social-icons-color">
                        <ALink href="#" className="social-icon social-facebook" rel="noopener noreferrer" title="Facebook"><i className="icon-facebook-f"></i></ALink>
                        <ALink href="#" className="social-icon social-twitter" rel="noopener noreferrer" title="Twitter"><i className="icon-twitter"></i></ALink>
                        <ALink href="#" className="social-icon social-instagram" rel="noopener noreferrer" title="Instagram"><i className="icon-instagram"></i></ALink>
                        <ALink href="#" className="social-icon social-youtube" rel="noopener noreferrer" title="Youtube"><i className="icon-youtube"></i></ALink>
                        <ALink href="#" className="social-icon social-pinterest" rel="noopener noreferrer" title="Pinterest"><i className="icon-pinterest"></i></ALink>
                    </div>
                </div>
            </div>
            {
                isBottomSticky ?
                    <div className="mb-10"></div>
                    : ""
            }
        </footer>
    );
}

export default React.memo( Footer );
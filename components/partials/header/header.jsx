import ALink from '~/components/features/alink';
import HeaderSearch from '~/components/partials/header/partials/header-search';
import CartMenu from '~/components/partials/header/partials/cart-menu';
import WishlistMenu from '~/components/partials/header/partials/wishlist-menu';
import MainMenu from '~/components/partials/header/partials/main-menu';
import StickyHeader from '~/components/features/sticky-header';

function Header () {
    function openMobileMenu () {
        document.querySelector( 'body' ).classList.add( 'mmenu-active' );
    }

    return (
        <header className="header header-7 position-relative">
            <StickyHeader>
                <div className="header-middle sticky-header">
                    <div className="container">
                        <div className="header-left">
                            <button className="mobile-menu-toggler" onClick={ openMobileMenu }>
                                <span className="sr-only">Toggle mobile menu</span>
                                <i className="icon-bars"></i>
                            </button>

                            <ALink href="/" className="logo">
                                <img src="images/logo.png" alt="Molla Logo" width={ 82 } height={ 22 } />
                            </ALink>
                        </div>

                        <div className="header-right">

                            <MainMenu />
                            <HeaderSearch />
                            <WishlistMenu />
                            <CartMenu />
                        </div>
                    </div>
                </div>
            </StickyHeader>
        </header>
    )
}

export default Header;
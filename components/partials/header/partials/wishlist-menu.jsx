import React from 'react';
import { connect } from 'react-redux';

import ALink from '~/components/features/alink';

function WishlistMenu ( props ) {
    const { wishlist } = props;

    return (
        <ALink href="/shop/wishlist" title="Wishlist" className="wishlist-link">
            <i className="icon-heart-o"></i>
            <span className="wishlist-count badge">{ wishlist.length }</span>
        </ALink>
    );
}

function mapStateToProps ( state ) {
    return {
        wishlist: state.wishlist.data
    }
}

export default connect( mapStateToProps, {} )( WishlistMenu );
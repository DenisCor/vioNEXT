import Head from 'next/head';
import { useLazyQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';
import SlideToggle from 'react-slide-toggle';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

import ALink from '~/components/features/alink';

import IntroSlider from '~/components/partials/home/intro-slider';
import ProductTwelve from "~/components/features/products/product-twelve";
import NewsletterModal from "~/components/features/modals/newsletter-modal";

import withApollo from '~/server/apollo';
import { GET_PRODUCTS } from '~/server/queries';
import { scrollToPageContent } from '~/utils';

import { homeData, shopData } from '~/utils/data';

function Home () {
    const [ getProducts, { data, loading, error } ] = useLazyQuery( GET_PRODUCTS );
    const [ loadMoreProducts, { data: newData } ] = useLazyQuery( GET_PRODUCTS );
    const totalCount = data && data.products.totalCount;

    const router = useRouter();
    const query = useRouter().query;
    const ref = useRef();
    const [ products, setProducts ] = useState( [] );
    const [ loadMoreLoading, setLoadMoreLoading ] = useState( false );
    const [ perPage, setPerPage ] = useState( 8 );
    const [ priceRange, setRange ] = useState( { min: 0, max: 1000 } );

    let iso;

    useEffect( () => {
        if ( data ) {
            setProducts( data.products.data );
        }
    }, [ data ] )

    useEffect( () => {
        if ( newData ) {
            setProducts( [ ...products, ...newData.products.data ] );
        }
    }, [ newData ] )

    useEffect( () => {
        getProducts( {
            variables: {
                searchTerm: query.searchTerm,
                color: query.color ? query.color.split( ',' ) : [],
                size: query.size ? query.size.split( ',' ) : [],
                brand: query.brand ? query.brand.split( ',' ) : [],
                minPrice: parseInt( query.minPrice ),
                maxPrice: parseInt( query.maxPrice ),
                category: query.category,
                sortBy: query.sortBy ? query.sortBy : 'default',
                page: query.page ? parseInt( query.page ) : 1,
                perPage: perPage,
            }
        } );

        scrollToPageContent();
    }, [ query, perPage ] )

    useEffect( () => {
        if ( query.minPrice && query.maxPrice ) {
            setRange( { min: parseInt( query.minPrice ), max: parseInt( query.maxPrice ) } );
        } else {
            setRange( { min: 0, max: 1000 } );
        }
    }, [ query ] )

    useEffect( () => {
        executeIsotope();
    }, [ products ] )

    async function executeIsotope () {
        if ( products && products.length > 0 ) {
            const Isotope = ( await import( 'isotope-layout' ) ).default;
            if ( !iso ) {
                iso = new Isotope( ref.current, {
                    itemSelector: '.product-item',
                    layoutMode: 'fitRows'
                } );
            } else {
                iso.layout( 'fitRows' );
            }

            if ( document.querySelector( '.nav-filter li.active' ) ) {
                document.querySelector( '.nav-filter .active a' ).click();
            }
        }
    }

    function onLoadMoreProducts ( e ) {
        e.preventDefault();
        if ( perPage < totalCount ) {
            setLoadMoreLoading( true );

            setTimeout( () => {
                setLoadMoreLoading( false );
                loadMoreProducts( {
                    variables: {
                        searchTerm: query.searchTerm,
                        color: query.color ? query.color.split( ',' ) : [],
                        size: query.size ? query.size.split( ',' ) : [],
                        brand: query.brand ? query.brand.split( ',' ) : [],
                        minPrice: parseInt( query.minPrice ),
                        maxPrice: parseInt( query.maxPrice ),
                        category: query.category,
                        sortBy: query.sortBy ? query.sortBy : 'default',
                        page: 1,
                        from: products.length,
                        perPage: 4
                    }
                } );
            }, 500 );
        }

    }

    function filteredProducts ( products ) {
        // if ( !query.category ) return products.slice( 20 );
        return products;
    }

    function onChangePriceRange ( value ) {
        setRange( value );
    }

    function containsAttrInUrl ( type, value ) {
        const currentQueries = query[ type ] ? query[ type ].split( ',' ) : [];
        return currentQueries && currentQueries.includes( value );
    }

    function getUrlForAttrs ( type, value ) {
        let currentQueries = query[ type ] ? query[ type ].split( ',' ) : [];
        currentQueries = containsAttrInUrl( type, value ) ? currentQueries.filter( item => item !== value ) : [ ...currentQueries, value ];

        return {
            pathname: router.pathname,
            query: {
                ...query,
                page: 1,
                [ type ]: currentQueries.join( ',' )
            }
        }
    }

    function sortByChange ( e, value ) {
        router.push( { query: { ...query, sortBy: value } } );
    }

    function showSidebar ( e ) {
        e.preventDefault();
        document
            .querySelector( 'body' )
            .classList.add( 'sidebar-filter-active' );
        document
            .querySelector( '#product-filter-area' )
            .classList.add( 'active' );
    }

    function hideSidebar ( e ) {
        e.preventDefault();
        document
            .querySelector( 'body' )
            .classList.remove( 'sidebar-filter-active' );

        document
            .querySelector( '#product-filter-area' )
            .classList.remove( 'active' );
    }

    function toggleSidebar ( e ) {
        e.preventDefault();
        if (
            document
                .querySelector( 'body' )
                .classList.contains( 'sidebar-filter-active' )
        ) {
            document
                .querySelector( 'body' )
                .classList.remove( 'sidebar-filter-active' );
            document
                .querySelector( '#product-filter-area' )
                .classList.remove( 'active' );
        } else {
            document
                .querySelector( 'body' )
                .classList.add( 'sidebar-filter-active' );
            document
                .querySelector( '#product-filter-area' )
                .classList.add( 'active' );
        }
    }

    function getProductCategory ( product ) {
        return product.category.reduce( ( acc, cur ) => {
            return acc + " " + cur.slug;
        }, "" );
    }

    function isoFilter ( e, cat ) {
        e.preventDefault();

        e.currentTarget.closest( '.nav-filter' ).querySelector( '.active' ).classList.remove( 'active' );
        e.currentTarget.parentElement.classList.add( 'active' );

        if ( !iso ) {
            executeIsotope();
            return;
        };

        iso.arrange( {
            filter: function ( index, itemElem ) {
                if ( cat == '' ) return true;
                return itemElem.classList.contains( cat );
            }
        } );
    }

    if ( error ) {
        return <div></div>
    }

    return (
        <>
            <Head>
                <title>Violette Store</title>
            </Head>
            <div className="main home-page">
                <IntroSlider />
                <div className={ `page-content container skeleton-body skel-shop-products position-relative bg-white ${loading ? '' : 'loaded'}` } style={ { zIndex: '100' } }>
                    <SlideToggle collapsed={ true }>
                        { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                            <>
                                <div className="toolbox toolbox-filter">
                                    <div className="toolbox-left">
                                        <a href="#" className={ `filter-toggler ${toggleState.toLowerCase() != 'collapsed' ? 'active' : ''}` } onClick={ ( e ) => { onToggle( e ); e.preventDefault() } }>Filters</a>
                                        <button className="button filter-toggler mobile-mode" onClick={ showSidebar }>Filters</button>
                                    </div>
                                    {
                                        toggleState.toLowerCase() == 'collapsed' ?
                                            <div className="toolbox-right">
                                                {
                                                    !query.category ?
                                                        <ul className="nav-filter product-filter">
                                                            <li className="active"><a href="#" onClick={ e => isoFilter( e, '' ) }>All</a></li>
                                                            <li><a href="#" onClick={ e => isoFilter( e, 'furniture' ) }>Furniture</a></li>
                                                            <li><a href="#" onClick={ e => isoFilter( e, 'lighting' ) }>Lighting</a></li>
                                                            <li><a href="#" onClick={ e => isoFilter( e, 'decoration' ) }>Decoration</a></li>
                                                            <li><a href="#" onClick={ e => isoFilter( e, 'electronics' ) }>Electronics</a></li>
                                                        </ul>
                                                        :
                                                        <ul className="nav-filter product-filter">
                                                            <li>
                                                                <ALink href="/" scroll={ false
                                                                }>All</ALink>
                                                            </li>
                                                        </ul>
                                                }
                                            </div>
                                            : ''
                                    }
                                </div>

                                <button className="sidebar-fixed-toggler" onClick={ toggleSidebar }><i className="icon-cog"></i></button>

                                <div className="sidebar-filter-overlay" onClick={ hideSidebar }></div>

                                <div className="widget-filter-area" id="product-filter-area">
                                    <div className="clean-close">
                                        <ALink href="/" className={ `widget-filter-clear ${toggleState.toLowerCase() !== 'collapsed' ? '' : 'd-lg-none'}` } scroll={ false }>Clean All</ALink>
                                        <a href="#" onClick={ hideSidebar } className="widget-close"><i className="icon-close"></i></a>
                                    </div>

                                    <div ref={ setCollapsibleElement } style={ { overflow: 'hidden' } } className="widget-collapse">
                                        <div className="filter-area-wrapper">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <div className="widget">
                                                        <h3 className="widget-title">
                                                            Category:
                                                    </h3>

                                                        <div className="filter-items filter-items-count">
                                                            <div className="filter-item">
                                                                <ALink className={ `${query.category == null || query.category == '' ? 'active' : ''}` } href={ { pathname: router.pathname, query: { category: '' } } } scroll={ false }>All</ALink>
                                                                <span className="item-count">15</span>
                                                            </div>

                                                            {
                                                                homeData.categories.map( ( item, index ) => (
                                                                    <div className="filter-item" key={ `cat_${index}` }>
                                                                        <ALink className={ `${query.category == item.slug ? 'active' : ''}` } href={ { pathname: router.pathname, query: { category: item.slug } } } scroll={ false }>{ item.name }</ALink>
                                                                        <span className="item-count">{ item.count }</span>
                                                                    </div>
                                                                ) )
                                                            }
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-3">
                                                    <div className="widget">
                                                        <h3 className="widget-title">
                                                            Sort by:
                                                        </h3>

                                                        <div className="filter-items">
                                                            <div className="filter-item">
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="radio" className="custom-control-input" id="sort-1" name="sortby" checked={ !query.sortBy || query.sortBy == 'default' } onChange={ e => sortByChange( e, 'default' ) } />
                                                                    <label className="custom-control-label" htmlFor="sort-1">Default</label>
                                                                </div>
                                                            </div>

                                                            <div className="filter-item">
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="radio" className="custom-control-input" id="sort-2" name="sortby" checked={ query.sortBy == 'featured' } onChange={ e => sortByChange( e, 'featured' ) } />
                                                                    <label className="custom-control-label" htmlFor="sort-2">Popularity</label>
                                                                </div>
                                                            </div>

                                                            <div className="filter-item">
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="radio" className="custom-control-input" id="sort-3" name="sortby" checked={ query.sortBy == 'rating' } onChange={ e => sortByChange( e, 'rating' ) } />
                                                                    <label className="custom-control-label" htmlFor="sort-3">Average Rating</label>
                                                                </div>
                                                            </div>

                                                            <div className="filter-item">
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="radio" className="custom-control-input" id="sort-4" name="sortby" checked={ query.sortBy == 'new' } onChange={ e => sortByChange( e, 'new' ) } />
                                                                    <label className="custom-control-label" htmlFor="sort-4">Newness</label>
                                                                </div>
                                                            </div>

                                                            <div className="filter-item">
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="radio" className="custom-control-input" id="sort-5" name="sortby" checked={ query.sortBy == 'low-to-high' } onChange={ e => sortByChange( e, 'low-to-high' ) } />
                                                                    <label className="custom-control-label" htmlFor="sort-5">Price: Low to High</label>
                                                                </div>
                                                            </div>

                                                            <div className="filter-item">
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="radio" className="custom-control-input" id="sort-6" name="sortby" checked={ query.sortBy == 'high-to-low' } onChange={ e => sortByChange( e, 'high-to-low' ) } />
                                                                    <label className="custom-control-label" htmlFor="sort-6">Price: High to Low</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-3">
                                                    <div className="widget">
                                                        <h3 className="widget-title">
                                                            Colour:
                                                        </h3>

                                                        <div className="filter-colors filter-colors-vertical">
                                                            {
                                                                shopData.colors.map( ( item, index ) => (
                                                                    <ALink href={ getUrlForAttrs( 'color', item.color_name ) } className={ containsAttrInUrl( 'color', item.color_name ) ? 'selected' : '' } style={ { backgroundColor: item.color } } key={ index } scroll={ false }>
                                                                        <span>{ item.color_name }</span>
                                                                    </ALink>
                                                                ) )
                                                            }
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-3">
                                                    <div className="widget">
                                                        <h3 className="widget-title">
                                                            Price:
                                                </h3>

                                                        <div className="filter-price">
                                                            <div className="filter-price-text d-flex justify-content-between">
                                                                <span>
                                                                    Price Range:&nbsp;
                                                            <span className="filter-price-range">${ priceRange.min } - ${ priceRange.max }</span>
                                                                </span>

                                                                <ALink href={ { pathname: router.pathname, query: { ...query, minPrice: priceRange.min, maxPrice: priceRange.max, page: 1 } } } className="pr-2" scroll={ false }>Filter</ALink>
                                                            </div>

                                                            <div className="price-slider">
                                                                <InputRange
                                                                    formatLabel={ value => `$${value}` }
                                                                    maxValue={ 1000 }
                                                                    minValue={ 0 }
                                                                    step={ 50 }
                                                                    value={ priceRange }
                                                                    onChange={ onChangePriceRange }
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) }
                    </SlideToggle>

                    {
                        !loading && products && products.length == 0 ?
                            <div className="products-container">
                                <p className="no-results">No products matcing your selection.</p>
                            </div>
                            :
                            <div className="products-container" ref={ ref }>
                                <div className="row">
                                    {
                                        ( loading || !products ) ?
                                            [ 1, 2, 3, 4, 5, 6, 7, 8 ].map( item =>
                                                <div className="col-6 col-md-4 col-lg-3 mb-2" key={ item }>
                                                    <div className="skel-pro"></div>
                                                </div>
                                            )
                                            :
                                            filteredProducts( products ).map( ( product, index ) =>
                                                <div className={ `product-item col-6 col-md-4 col-lg-3${getProductCategory( product )}` } key={ index }>
                                                    <ProductTwelve product={ product } />
                                                </div>
                                            )
                                    }
                                </div>
                            </div>
                    }
                </div>

                {
                    loadMoreLoading || ( products.length < totalCount ) ?
                        <div className="load-more-container text-center mt-0 mb-7 position-relative" style={ { zIndex: '0' } }>
                            <a
                                href="#"
                                className="btn btn-outline-dark-3 btn-load-more"
                                onClick={ onLoadMoreProducts }
                            >
                                <span>More products</span>
                                <i className={ `icon-refresh ${loadMoreLoading ? 'load-more-rotating' : ''}` }></i>
                            </a>
                        </div>
                        : ""
                }
                 
                {/* <NewsletterModal /> */}
            </div>
        </>
    )
}

export default withApollo( { ssr: typeof window == 'undefined' } )( Home );
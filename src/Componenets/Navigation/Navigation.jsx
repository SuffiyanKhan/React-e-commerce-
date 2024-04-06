import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

function Navigation() {
  return (
    <div className="navigation-container container mt-3" style={{ overflowX: 'auto' }}>
        <div className="row">
            <nav className="nav">
                <Link className="nav-link text-capitalize fw-bold text-black active" aria-current="page" to={'/home'} >home</Link>
                <Link className="nav-link text-capitalize fw-bold text-black" to={'/smartphones'} >smartphones</Link>
                <Link className="nav-link text-capitalize fw-bold text-black" to={'/laptops'} >laptops</Link>
                <Link className="nav-link text-capitalize fw-bold text-black" to={'/fragrances'} >fragrances</Link>
                <Link className="nav-link text-capitalize fw-bold text-black" to={'/skincare'} >skincare</Link>
                <Link className="nav-link text-capitalize fw-bold text-black" to={'/groceries'} >groceries</Link>
                <Link className="nav-link text-capitalize fw-bold text-black" to={'/homeDecoration'} >home-decoration</Link>
                <Link className="nav-link text-capitalize fw-bold text-black" to={'/furniture'} >furniture</Link>
                <Link className="nav-link text-capitalize fw-bold text-black" to={'/tops'} >tops</Link>
                <Link className="nav-link text-capitalize fw-bold text-black" to={'/womensDresses'} >womens-dresses</Link>
                <Link className="nav-link text-capitalize fw-bold text-black" to={'/womensShoes'} >womens-shoes</Link>
                <Link className="nav-link text-capitalize fw-bold text-black" to={'/mensshirts'} >mens-shirts</Link>
                <Link className="nav-link text-capitalize fw-bold text-black" to={'/mensshoes'} >mens-shoes</Link>
                <Link className="nav-link text-capitalize fw-bold text-black" to={'/menswatches'} >mens-watches</Link>
                <Link className="nav-link text-capitalize fw-bold text-black" to={'/womenswatches'} >womens-watches</Link>
                <Link className="nav-link text-capitalize fw-bold text-black" to={'/womensbags'} >womens-bags</Link>
                <Link className="nav-link text-capitalize fw-bold text-black" to={'/womensjewellery'} >womens-jewellery</Link>
                <Link className="nav-link text-capitalize fw-bold text-black" to={'/sunglasses'} >sunglasses</Link>
                <Link className="nav-link text-capitalize fw-bold text-black" to={'/automotive'} >automotive</Link>
                <Link className="nav-link text-capitalize fw-bold text-black" to={'/motorcycle'} >motorcycle</Link>
                <Link className="nav-link text-capitalize fw-bold text-black" to={'/lighting'} >lighting</Link>
            </nav>
        </div>
    </div>
  );
}

export default memo(Navigation);

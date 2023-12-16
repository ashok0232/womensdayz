import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../Assets/img/banner.png';
import rightArrowIcon from '../Assets/rightArro_icon.png';

export default function Banner(props) {
  const commonBannerProps = {
    className: 'position-absolute',
    style: { left: '25%', top: '45%' },
  };

  return (
    <>
      <div className="position-relative">
        <img src={banner} width="100%" height="auto" alt="banner" />
        {props.type === 'home_page' ? (
          <div className="position-absolute top-50 translate-middle text-dark bannerRed" style={{ left: '30%' }}>
            <p className="text-danger">Winter Collection</p>
            <p className="banner_heading">New Winter <br />Collections 2022</p>
            <p className="text-dark"><i>There's nothing like trend</i></p>
            <Link to="shop" className="nav-link" style={{ flex: '1' }}>
              <button className="btn btn-outline-dark rounded-0 p-2 bannerBtn" style={{ display: 'flex', alignItems: 'center' }}>
                Shop Now <img src={rightArrowIcon} alt="arrowlogo" className='p-1' />
              </button>
            </Link>
          </div>
        ) : (
          <div {...commonBannerProps}>
            <h1 className="text-center">Shop</h1>
            <nav>
              <ul className='navbar-nav text-center list-group-horizontal mt-4'>
                <li className='nav-item'>
                  <Link to="/best_sellers" className='nav-link ps-4 mx-2' activeClassName='active'><b>Best Seller</b></Link>
                </li>
                <li className='nav-item'>
                  <Link to="/period_care" className='nav-link ps-4 mx-2' activeClassName='active'><b>Period Care</b></Link>
                </li>
                <li className='nav-item'>
                  <Link to="/hair_care" className='nav-link ps-4 mx-2' activeClassName='active'><b>Hair Care</b></Link>
                </li>
                <li className='nav-item'>
                  <Link to="/helth_care" className='nav-link ps-4 mx-2' activeClassName='active'><b>Health Care</b></Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </>
  );
}

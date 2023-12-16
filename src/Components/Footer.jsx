import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cart from '../Pages/Shoping_cart';
import Home from '../Pages/Home';

// image importing section
import Logo_text2 from '../Assets/Logo_text.png';
import logo from '../Assets/Logo.png';
import footerLogo from '../Assets/Womens Dayz_footer.png';
import payment from '../Assets/img/payment.png';

export default function Footer() {
  return (
    <>
      <div className="bg-dark p-2 mt-5">
        <div className="container">
          <div className="row">
            <FooterCard
              logo={logo}
              otherImage={footerLogo}
              textImage={Logo_text2}
              address="No: 15, Krishna Kandha Building,, SA Garden,Saravanampatti, Coimbatore, Tamil Nadu 641026"
              contactInfo="1-202-555-0106\nhelp@shopper.com"
            />

            <FooterCard title="SUPPORTS" links={['Contact Us', 'About Us', 'Size Guide', 'Shipping & Returns', 'FAQ']} />

            <FooterCard title="SHOP" links={['Men\'s Shopping', 'Women\'s Shopping', 'Kids\'s Shopping', 'Furniture', 'Discounts']} />

            <FooterCard title="COMPANY" links={['About', 'Blog', 'Affiliate', 'Login']} />

            <div className="col-sm-3 mt-4">
              <div className="card border-0 bg-dark">
                <h4 className="mt-3 text-white">SECURE PAYMENTS</h4>
                <img src={payment} width={'80%'} className="mt-5" />
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}

const FooterCard = ({ logo, otherImage, textImage, title, address, contactInfo, links }) => (
  <div className="col-sm-3 mt-5">
    <div className="card border-0 bg-dark">
      {logo && otherImage && (
        <div className="row">
          <div className="col-5 p-0">
            <img src={logo} alt="Logo" className="img-fluid d-flex align-items-center" width={'75%'} />
          </div>
          <div className="col p-0 mt-2">
            <img src={otherImage} alt="Other Image" className="img-fluid d-flex align-items-center" width={'75%'} />
            <img src={textImage} alt="Other Image" className="img-fluid d-flex align-items-center" width={'75%'} />
          </div>
        </div>
      )}
      {title && (
        <>
          <h4 className="mt-3 text-white">{title}</h4>
          <div className="mt-5" style={{ color: '#8f8c8c' }}>
            {links.map((link, index) => (
              <p key={index}>{link}</p>
            ))}
          </div>
        </>
      )}
      {address && contactInfo && (
        <div className="" style={{ color: '#8f8c8c' }}>
          <p className="me-2">{address}</p>
          <p>{contactInfo}</p>
        </div>
      )}
    </div>
  </div>
);

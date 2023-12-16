import React from 'react';
import { Link } from 'react-router-dom';
import rightArrowIcon from '../Assets/rightArro_icon.png';
import Styles from '../Styles/Card.css';

const Card = ({ title, itemNumber, cardClassName }) => (
  <div className={`col-4 ${cardClassName}`}>
    <div className={`card text-dark ${cardClassName} border-0 crd`}>
      <div className="card-body p-5">
        <h4 className="card-title">{title}</h4>
        <h6 className='card-title'>{itemNumber} Items</h6>
        <Link to="shop" className="nav-link p-1" style={{ flex: '1' }}>
          <button className="btn btn-transparent btn-outline-dark mt-5 rounded-0 hbtn" style={{ display: 'flex', alignItems: 'center' }}>
            Browse Items
            <img src={rightArrowIcon} alt="arrowlogo" className='p-1' />
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export default function Cards(params) {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <Card title="Period Care" itemNumber="8685" cardClassName="card-1" />
        <Card title="Skin Care" itemNumber="8685" cardClassName="card-2" />
        <Card title="Health Care" itemNumber="32" cardClassName="card-3" />
      </div>
    </div>
  );
}

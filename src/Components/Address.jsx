import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveAddress } from '../Redux/actions/AddressAction';
import { toast } from 'react-toastify';
import editIcon from '../Assets/edit_icon.png';
import closeIcon from '../Assets/close_icon.png';
import WhistlistNav from './WhistlistNav';

export default function Address() {
  const dispatch = useDispatch();
  const addresses = useSelector((state) => state.Address);

  const removeAddress = (e, id) => {
    e.preventDefault();
    dispatch(RemoveAddress(id));
    toast.success('Address Removed', {
      position: 'bottom-right',
      autoClose: 2000,
      theme: 'colored',
    });
  };

  return (
    <div className="p-5">
      <div className="row">
        <div className="col col-md-4 m-2">
          <WhistlistNav />
        </div>
        <div className="col m-2">
          <div className="row border">
            {addresses.map((address, index) => (
              <div key={index} className="col col-md-5 m-4 border">
                <div className="mt-2">
                  <h5 className="p-3 d-inline w-25">{address.addressType}</h5>
                  <p className="w-25 d-inline p-4 m-5">
                    <img
                      src={editIcon}
                      className="border rounded-circle"
                      style={{ cursor: 'pointer' }}
                      width={'16px'}
                      height={'16px'}
                      alt="Edit"
                      onClick={(e) => removeAddress(e, index)}
                    />
                  </p>
                  <p className="w-25 d-inline">
                    <img
                      src={closeIcon}
                      className="border rounded-circle"
                      style={{ cursor: 'pointer' }}
                      width={'12px'}
                      height={'12px'}
                      alt="Close"
                      onClick={(e) => removeAddress(e, index)}
                    />
                  </p>
                </div>
                <hr />
                <div className="ps-3 pb-2">
                  <h6>
                    {address.firstName} {address.lastName}
                  </h6>
                  <p>
                    {address.address1}
                    <br />
                    {address.district}, {address.state} {address.pincode}
                    <br />
                    {address.country}
                  </p>
                  <h6 className="">Email: <span>{address.email}</span></h6>
                  <h6 className="">phone: <span>{address.phone}</span></h6>
                </div>
              </div>
            ))}
          </div>
          <Link to="/add_address">
            <button className="btn btn-outline-dark w-75 rounded-0 ms-5 p-2 m-3">
              Add Address
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

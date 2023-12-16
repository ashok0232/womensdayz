import React from 'react';

// image importing section
import insta1 from '../Assets/img/insta1.png';
import insta2 from '../Assets/img/insta2.png';
import insta3 from '../Assets/img/insta3.png';
import insta4 from '../Assets/img/insta4.png';
import insta5 from '../Assets/img/insta5.png';
import insta6 from '../Assets/img/insta6.png';
import insta7 from '../Assets/img/insta7.png';

const images = [insta1, insta2, insta3, insta4, insta5, insta6, insta7];

export default function InstagramGrid() {
  return (
    <div className="container">
      {Array.from({ length: images.length / 4 }, (_, row) => (
        <div key={row} className="row g-0">
          {Array.from({ length: 4 }, (_, col) => (
            <div key={col} className="col-3">
              <img src={images[row * 4 + col]} alt={`instagram_img_${row * 4 + col + 1}`} className="img-fluid" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

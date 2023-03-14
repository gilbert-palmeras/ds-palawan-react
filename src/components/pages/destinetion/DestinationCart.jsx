import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function DestinationCart(props) {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="destination-card-style-two mb-0">
        <div className="d-card-thumb">
          <Image src={props.image} alt="CartIMG" />
        </div>
        <div className="d-card-content">
          <h4 className="destination-title">
            <Link onClick={scrollTop} href={`/destination-details`}>
              {props.place}
            </Link>
          </h4>
          <div className="place-count">
            <span>{props.placeCount}</span> Places
          </div>
        </div>
      </div>
    </>
  );
}

export default DestinationCart;

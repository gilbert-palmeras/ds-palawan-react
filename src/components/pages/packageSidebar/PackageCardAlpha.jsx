import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function PackageCardAlpha(props) {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <div className="package-card-alpha">
        <div className="package-thumb">
          <Link onClick={scrollTop} href={`/package-details`}>
            <Image src={props.image} alt="PackgerIMG" />
          </Link>
          <p className="card-lavel">
            <i className="bi bi-clock" />
            <span>{props.date}</span>
          </p>
        </div>
        <div className="package-card-body">
          <h3 className="p-card-title">
            <Link onClick={scrollTop} href={`/package-details`}>
              {props.title}
            </Link>
          </h3>
          <div className="p-card-bottom">
            <div className="book-btn">
              <Link onClick={scrollTop} href={`/package-details`}>
                <>
                  Book Now <i className="bx bxs-right-arrow-alt" />
                </>
              </Link>
            </div>
            <div className="p-card-info">
              <span>From</span>
              <h6>
                {props.price} <span>Per Person</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PackageCardAlpha;

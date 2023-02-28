import { useContext } from 'react';
import Link from 'next/link';

import { MockContext } from '../../../context';

function PackageArea() {
  const { data } = useContext(MockContext);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <div className="package-area package-style-two pt-110 chain">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-sm-10">
              <div className="section-head-alpha text-center mx-auto">
                <h2>Popular Adventures</h2>
                <p>
                  Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                  venenatis hendrerit a id lectus. Suspendissendt blandit
                  interdum.
                </p>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center g-4">
            {data.tours.map((tour, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-sm-10">
                <div className="package-card-delta">
                  <div className="package-thumb">
                    <Link href={`/package-details`} onClick={scrollTop}>
                      <Image src={tour.image} alt="" />
                    </Link>
                    <p className="card-lavel">
                      <i className="bi bi-clock" /> <span>{tour.date}</span>
                    </p>
                  </div>
                  <div className="package-card-body">
                    <h3 className="p-card-title">
                      <Link href={`/package-details`} onClick={scrollTop}>
                        {tour.title}
                      </Link>
                    </h3>
                    <div className="p-card-bottom">
                      <div className="book-btn">
                        <Link href={`/package-details`} onClick={scrollTop}>
                          <>
                            Book Now <i className="bx bxs-right-arrow-alt" />
                          </>
                        </Link>
                      </div>
                      <div className="p-card-info">
                        <span>From</span>
                        <h6>
                          {tour.price} <span>Per Person</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="package-page-btn text-center mt-60">
            <Link
              href={`/package`}
              onClick={scrollTop}
              className="button-fill-primary"
            >
              View All Tours
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PackageArea;

import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { MockContext } from '../../../context';

function Tourguide3() {
  const { data } = useContext(MockContext);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <div className="guide-area guide-style-one pt-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-sm-10">
              <div className="section-head-alpha text-center mx-auto">
                <h2>Tour Guide</h2>
                <p>
                  Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                  venenatis hendrerit a id lectus. Suspendissendt blandit
                  interdum.
                </p>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center g-4">
            {data.tourGuides.map((tourGuide, i) => (
              <div key={`tour-${i}`} className="col-lg-4 col-md-6 col-md-10">
                <div className="guide-card-beta">
                  <div className="guide-image">
                    <Image src={tourGuide.image} alt="guide images" />
                    <ul className="guide-social-links d-flex justify-content-center flex-column gap-3">
                      <li>
                        <Link href={'#'}>
                          <i className="bx bxl-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link href={'#'}>
                          <i className="bx bxl-facebook" />
                        </Link>
                      </li>
                      <li>
                        <Link href={'#'}>
                          <i className="bx bxl-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link href={'#'}>
                          <i className="bx bxl-whatsapp" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="guide-content">
                    <Link href={`/guide`} onClick={scrollTop}>
                      <h4 className="guide-name">{tourGuide.name}</h4>
                    </Link>
                    <h6 className="guide-designation">Tour Guide</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Tourguide3;

import Link from 'next/link';
import Image from 'next/image';
import { SRLWrapper } from 'simple-react-lightbox';

function Footer(props) {
  // smooth scrol
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className={props.className}>
        <div className="footer-main-wrapper">
          <div className="footer-vactor">
            <Image src={'/images/banner/footer-bg.png'} alt="FooterIMG" width={100} height={100} />
          </div>
          <div className="container">
            <div className="row justify-content-center g-4">
              <div className="col-lg-4">
                <div className="footer-about text-lg-start text-center">
                  <p>
                   Great experience. Great Places starts here.
                  </p>
                  <div className="footer-social-wrap">
                    <h5>Follow Us On:</h5>
                    <ul className="footer-social-links justify-content-lg-start justify-content-center">
                      <li>
                        <a
                          rel="noopener noreferrer"
                          href="https://www.instagram.com/"
                          target="_blank"
                        >
                          <i className="bx bxl-instagram" />
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          href="https://www.facebook.com/"
                          target="_blank"
                        >
                          <i className="bx bxl-facebook" />
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          href="https://www.twitter.com/"
                          target="_blank"
                        >
                          <i className="bx bxl-twitter" />
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          href="https://www.whatsapp.com/"
                          target="_blank"
                        >
                          <i className="bx bxl-whatsapp" />
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          href="https://www.pinterest.com/"
                          target="_blank"
                        >
                          <i className="bx bxl-pinterest-alt" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4">
                <div className="footer-widget">
                  <h3 className="footer-widget-title">Quick Link</h3>
                  <ul className="footer-links">
                    <li>
                      <Link onClick={scrollTop} href={`/about`}>
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link onClick={scrollTop} href={`/package`}>
                        Tour Package
                      </Link>
                    </li>
                    <li>
                      <Link onClick={scrollTop} href={`/destination`}>
                        Destination
                      </Link>
                    </li>
                    <li>
                      <Link onClick={scrollTop} href={`/guide`}>
                        Tour Guide
                      </Link>
                    </li>
                    <li>
                      <Link onClick={scrollTop} href={`/package-details`}>
                        Booking Process
                      </Link>
                    </li>
                    <li>
                      <Link onClick={scrollTop} href={`/blog`}>
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4">
                <div className="footer-widget">
                  <h4 className="footer-widget-title">Tour Type</h4>
                  <ul className="footer-links">
                    <li>
                      <Link onClick={scrollTop} href={`/package`}>
                        Wild &amp; Adventure Tours
                      </Link>
                    </li>
                    <li>
                      <Link onClick={scrollTop} href={`/package`}>
                        Group Tour
                      </Link>
                    </li>
                    <li>
                      <Link onClick={scrollTop} href={`/package`}>
                        Seasonal Tours
                      </Link>
                    </li>
                    <li>
                      <Link onClick={scrollTop} href={`/package`}>
                        Relaxation Tours
                      </Link>
                    </li>
                    <li>
                      <Link onClick={scrollTop} href={`/package`}>
                        Family Friendly Tours
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <>
                <div className="col-lg-4 col-md-8">
                  <SRLWrapper>
                    <div className="footer-widget">
                      <h4 className="footer-widget-title text-center">
                        Gallery
                      </h4>
                      <div className="footer-gallary-grid">
                        <div className="footer-gallary-item">
                          <a
                            href={'/images/gallary/fullsecrron01.png'}
                            data-fancybox="footer"
                            data-caption="Caption Here"
                          >
                            <Image
                              src={'/images/gallary/fg-1.png'}
                              alt="footerIMG"
                              width={125} height={90}
                            />
                          </a>
                        </div>
                        <div className="footer-gallary-item">
                          <a
                            href={'/images/gallary/fullsecrron02.png'}
                            data-fancybox="footer"
                            data-caption="Caption Here"
                          >
                            <Image
                              src={'/images/gallary/fg-2.png'}
                              alt="footerIMG"
                              width={125} height={90}
                            />
                          </a>
                        </div>
                        <div className="footer-gallary-item">
                          <a
                            href={'/images/gallary/fullsecrron06.png'}
                            data-fancybox="footer"
                            data-caption="Caption Here"
                          >
                            <Image
                              src={'/images/gallary/fg-3.png'}
                              alt="footerIMG"
                              width={125} height={90}
                            />
                          </a>
                        </div>
                        <div className="footer-gallary-item">
                          <a
                            href={'/images/gallary/fullsecrron05.png'}
                            data-fancybox="footer"
                            data-caption="Caption Here"
                          >
                            <Image
                              src={'/images/gallary/fg-4.png'}
                              alt="footerIMG"
                              width={125} height={90}
                            />
                          </a>
                        </div>
                        <div className="footer-gallary-item">
                          <a
                            href={'/images/gallary/fullsecrron03.png'}
                            data-fancybox="footer"
                            data-caption="Caption Here"
                          >
                            <Image
                              src={'/images/gallary/fg-5.png'}
                              alt="footerIMG"
                              width={125} height={90}
                            />
                          </a>
                        </div>
                        <div className="footer-gallary-item">
                          <a
                            href={'/images/gallary/fullsecrron06.png'}
                            data-fancybox="footer"
                            data-caption="Caption Here"
                          >
                            <Image
                              src={'/images/gallary/fg-6.png'}
                              alt="footerIMG"
                              width={125} height={90}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </SRLWrapper>
                </div>
              </>
            </div>
            <div className="footer-contact-wrapper">
              <h5>Contact Us:</h5>
              <ul className="footer-contact-list">
                <li>
                  <i className="bi bi-telephone-x" />{' '}
                  <a rel="noopener noreferrer" href="tel:+63 963 216 0905">
                    +63 963 216 0905
                  </a>
                </li>
                <li>
                  <i className="bi bi-envelope-open" />{' '}
                  <a href="mailto:admin@diskubrepalawan.com">admin@diskubrepalawan.com</a>
                </li>
                <li>
                  <i className="bi bi-geo-alt" />{' '}
                  <Link href={'#'}>
                   Puerto Princesa City, Palawan, Philippines
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-4 col-md-6 order-lg-1 order-3 ">
                <div className="copyright-link text-lg-start text-center">
                  <p>
                   Diskubre Travel ©  {new Date().getFullYear()}
                  </p>
                </div>
              </div>
              <div className="col-lg-4  order-lg-2 order-1">
                <div className="footer-logo text-center">
                  <Link onClick={scrollTop} href={`/`}>
                    <Image src={'/images/logo-w.png'} alt="FooterIMG" width={155} height={20} />
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 order-lg-3 order-2">
                <div className="policy-links">
                  <ul className="policy-list justify-content-lg-end justify-content-center">
                    <li>
                      <Link href={'#'}>Terms &amp; Condition</Link>
                    </li>
                    <li>
                      <Link href={'#'}>Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

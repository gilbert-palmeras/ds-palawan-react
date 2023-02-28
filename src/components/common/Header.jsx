import React, { useState, useReducer, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Select from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

function Header() {
  const [isSearchActive, setSearchActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [isCatagoryActive, setCatagoryActive] = useState(false);
  const [isOpenActive, setOpenActive] = useState(false);

  /*useing reducer to manage the active or inactive menu*/

  useEffect(() => {
    // Add scroll event when the component is loaded
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });
  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector('header');
    const scrollTop = window.scrollY;
    scrollTop >= 200
      ? header.classList.add('sticky')
      : header.classList.remove('sticky');
  };

  const initialState = { activeMenu: '' };
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case 'homeOne':
        return { activeMenu: 'homeOne' };
      case 'page':
        return { activeMenu: 'page' };
      case 'package':
        return { activeMenu: 'package' };
      case 'blog':
        return { activeMenu: 'blog' };
      case 'destination':
        return { activeMenu: 'destination' };
      default:
        return { activeMenu: ' ' };
    }
  }

  const handleSearcghBtn = () => {
    if (isSearchActive === false || isSearchActive === 0) {
      setSearchActive(1);
    } else {
      setSearchActive(false);
    }
  };

  const handleCatagorybtn = () => {
    if (isCatagoryActive === false || isCatagoryActive === 0) {
      setCatagoryActive(1);
    } else {
      setCatagoryActive(false);
    }
  };
  const handleOpenBtn = () => {
    if (isOpenActive === false || isOpenActive === 0) {
      setOpenActive(1);
    } else {
      setOpenActive(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const optionsForDestination = [
    { value: '1', label: 'India' },
    { value: '2', label: 'Sri Lanka' },
    { value: '3', label: 'Solt Lake' },
    { value: '4', label: ' Kolkata' },
    { value: '6', label: ' Mohania' },
    { value: '7', label: ' Mumbai' },
    { value: '8', label: ' New Delhi' },
  ];
  const optionsForTravel = [
    { value: '1', label: 'Adventure Tour' },
    { value: '2', label: 'Group Tour' },
    { value: '3', label: 'Couple Tour' },
    { value: '4', label: 'Sea Beach' },
    { value: '5', label: 'Mountain Tour' },
  ];
  const optionsForPerson = [
    { value: '1', label: '01' },
    { value: '2', label: '02' },
    { value: '3', label: '03' },
    { value: '4', label: '04' },
    { value: '5', label: '05' },
  ];
  return (
    <>
      <div
        className={`${'main-searchbar-wrapper'} ${
          isSearchActive === 1 ? 'search-active' : ''
        }`}
      >
        <div className="container">
          <div className="multi-main-searchber">
            <div
              onClick={handleSearcghBtn}
              className="main-searchbar-close search-toggle"
            >
              <i className="bi bi-x-lg" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} id="main_searchbar">
              <div className="row g-4">
                <div className="col-lg-10">
                  <div className="row gx-0 gy-4">
                    <div className="col-lg-3 col-md-6">
                      <div className="select-box">
                        <div className="searchbox-icons">
                          <i className="bi bi-geo-alt" />
                        </div>
                        <div className="searchbox-input">
                          <label htmlFor="activity-dropdown">Destination</label>
                          <Select
                            placeholder="Whare are you going?"
                            className="selectbox"
                            onChange={setSelectedOption}
                            defaultValue={selectedOption}
                            options={optionsForDestination}
                            touchUi={false}
                            showGroupWheel={true}
                          ></Select>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="select-box">
                        <div className="searchbox-icons">
                          <i className="bi bi-text-paragraph" />
                        </div>
                        <div className="searchbox-input">
                          <label htmlFor="activity-dropdown">Travel Type</label>
                          <Select
                            className="selectbox"
                            placeholder="All activities"
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={optionsForTravel}
                          ></Select>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="select-box">
                        <div className="searchbox-icons">
                          <i className="bi bi-person-plus" />
                        </div>
                        <div className="searchbox-input">
                          <label htmlFor="activity-dropdown">Person</label>
                          <Select
                            className="selectbox"
                            onChange={setSelectedOption}
                            placeholder="Person"
                            defaultValue={selectedOption}
                            options={optionsForPerson}
                          ></Select>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="select-box">
                        <div className="searchbox-icons">
                          <i className="bi bi-capslock" />
                        </div>
                        <div className="searchbox-input">
                          <label htmlFor="activity-dropdown">
                            Journey Date
                          </label>
                          <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="main-form-submit">
                    <Link href={`/package`} onClick={scrollTop}>
                      <button type="submit">Find Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        className={`${'category-sidebar-wrapper'} ${
          isCatagoryActive === 1 ? 'category-active' : ''
        }`}
      >
        <div className="category-sidebar">
          <div className="category-header d-flex justify-content-between align-items-center">
            <h4>Category</h4>
            <div onClick={handleCatagorybtn} className="category-toggle">
              <i className="bi bi-x-lg" />
            </div>
          </div>
          <div className="row row-cols-lg-3 row-cols-2 gy-5 mt-3">
            <div className="col">
              <Link
                className="category-box"
                onClick={scrollTop}
                href={`/package`}
              >
                <>
                  <div className="cate-icon mx-auto">
                    <Image src={'/images/icons/cate1.svg'} alt="catagoryIMG" width={100} height={100} />
                  </div>
                  <h5>Adventure</h5>
                </>
              </Link>
            </div>
            <div className="col">
              <Link
                className="category-box"
                onClick={scrollTop}
                href={`/package`}
              >
                <>
                  <div className="cate-icon mx-auto">
                    <Image src={'/images/icons/cate2.svg'} alt="catagoryIMG" width={100} height={100} />
                  </div>
                  <h5>Group Tour</h5>
                </>
              </Link>
            </div>
            <div className="col">
              <Link
                className="category-box"
                onClick={scrollTop}
                href={`/package`}
              >
                <>
                  <div className="cate-icon mx-auto">
                    <Image src={'/images/icons/cate3.svg'} alt="catagoryIMG" width={100} height={100} />
                  </div>
                  <h5>Couple Tour</h5>
                </>
              </Link>
            </div>
            <div className="col">
              <Link
                className="category-box"
                onClick={scrollTop}
                href={`/package`}
              >
                <>
                  <div className="cate-icon mx-auto">
                    <Image src={'/images/icons/cate4.svg'} alt="catagoryIMG" width={100} height={100} />
                  </div>
                  <h5>Single Tour</h5>
                </>
              </Link>
            </div>
            <div className="col">
              <Link
                className="category-box"
                onClick={scrollTop}
                href={`/package`}
              >
                <>
                  <div className="cate-icon mx-auto">
                    <Image src={'/images/icons/cate5.svg'} alt="catagoryIMG" width={100} height={100} />
                  </div>
                  <h5>Honeymoon</h5>
                </>
              </Link>
            </div>
            <div className="col">
              <Link
                className="category-box"
                onClick={scrollTop}
                href={`/package`}
              >
                <>
                  <div className="cate-icon mx-auto">
                    <Image src={'/images/icons/cate6.svg'} alt="catagoryIMG" width={100} height={100} />
                  </div>
                  <h5>Sea Beach</h5>
                </>
              </Link>
            </div>
            <div className="col">
              <Link
                className="category-box"
                onClick={scrollTop}
                href={`/package`}
              >
                <>
                  <div className="cate-icon mx-auto">
                    <Image src={'/images/icons/cate7.svg'} alt="catagoryIMG" width={100} height={100} />
                  </div>
                  <h5>Mountain Tour</h5>
                </>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="topbar-area topbar-style-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 align-items-center d-xl-flex d-none">
              <div className="topbar-contact-left">
                <ul className="contact-list">
                  <li>
                    <i className="bi bi-telephone-fill" />
                    <a href="tel:+1-847-555-5555"> +63 963 216 0905</a>
                  </li>
                  <li>
                    <i className="bi bi-envelope-fill" />
                    <a href="mailto:someone@example.com">admin@diskubrepalawan.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-6 text-xl-center text-md-start text-center">
              <div className="topbar-ad">
                <Link onClick={scrollTop} href={`/package`}>
                  Black Friday Big Offer
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 d-md-flex  d-none align-items-center justify-content-end">
              <ul className="topbar-social-links">
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.facebook.com/"
                  >
                    <i className="bx bxl-facebook" />
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.instagram.com/"
                  >
                    <i className="bx bxl-instagram-alt" />
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://twitter.com/"
                  >
                    <i className="bx bxl-twitter" />
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.whatsapp.com/"
                  >
                    <i className="bx bxl-whatsapp-square" />
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.pinterest.com/"
                  >
                    <i className="bx bxl-pinterest" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <header>
        <div className="header-area header-style-one">
          <div className="container">
            <div className="row">
              <div className="col-xl-2 col-lg-12 col-md-12 col-sm-12 col-xs-12 align-items-center d-xl-flex d-lg-block">
                <div className="logo d-flex justify-content-between align-items-center">
                  <Link onClick={scrollTop} href={`/`}>
                    <Image src={'/images/logo.png'} alt="logo" width={128} height={16} />
                  </Link>
                  <div className="d-flex align-items-center gap-4">
                    <div className="nav-right d-xl-none">
                      <ul className="nav-actions">
                        <li
                          onClick={handleCatagorybtn}
                          className="category-toggle"
                        >
                          <i className="bx bx-category" />
                        </li>
                        <li
                          className="search-toggle"
                          onClick={handleSearcghBtn}
                        >
                          <i className="bx bx-search-alt" />
                        </li>
                      </ul>
                    </div>
                    <div
                      className="mobile-menu d-flex "
                      onClick={handleOpenBtn}
                    >
                      <Link
                        href={'#'}
                        className={
                          isOpenActive
                            ? 'hamburger d-block d-xl-none h-active'
                            : 'hamburger d-block d-xl-none'
                        }
                      >
                        <>
                          <span className="h-top" />
                          <span className="h-middle" />
                          <span className="h-bottom" />
                        </>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 col-md-8 col-sm-6 col-xs-6">
                <nav
                  className={
                    isOpenActive
                      ? 'main-nav float-end slidenav'
                      : 'main-nav float-end'
                  }
                >
                  <div className="logo d-xl-none text-center">
                    <Link href={'#'}>
                      <Image src={'/images/logo.png'} alt="catagoryIMG" width={100} height={100} />
                    </Link>
                  </div>
                  <ul>
                    <li
                      className="has-child-menu"
                      onClick={() => dispatch({ type: 'homeOne' })}
                    >
                      <Link href={'#'}>Home</Link>
                      <i className="fl flaticon-plus">+</i>
                      <ul
                        className={
                          state.activeMenu === 'homeOne'
                            ? 'sub-menu d-block'
                            : 'sub-menu d-none'
                        }
                      >
                        <li>
                          <Link onClick={scrollTop} href={`/`}>
                            Home Style 1
                          </Link>
                        </li>
                        <li>
                          <Link onClick={scrollTop} href={`/index2`}>
                            Home Style 2
                          </Link>
                        </li>
                        <li>
                          <Link onClick={scrollTop} href={`/index3`}>
                            Home Style 3
                          </Link>
                        </li>
                        <li>
                          <Link onClick={scrollTop} href={`/index4`}>
                            Home Style 4
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link onClick={scrollTop} href={`/about`}>
                        About Us
                      </Link>
                    </li>
                    <li
                      className="has-child-menu"
                      onClick={() => dispatch({ type: 'destination' })}
                    >
                      <Link href={'#'}>Destination</Link>
                      <i className="fl flaticon-plus">+</i>
                      <ul
                        className={
                          state.activeMenu === 'destination'
                            ? 'sub-menu d-block'
                            : 'sub-menu d-none'
                        }
                      >
                        <li>
                          <Link onClick={scrollTop} href={`/destination`}>
                            Destination
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={scrollTop}
                            href={`/destination-details`}
                          >
                            Destination Details
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="has-child-menu"
                      onClick={() => dispatch({ type: 'package' })}
                    >
                      <Link href={'#'}>Package</Link>
                      <i className="fl flaticon-plus">+</i>
                      <ul
                        className={
                          state.activeMenu === 'package'
                            ? 'sub-menu d-block'
                            : 'sub-menu d-none'
                        }
                      >
                        <li>
                          <Link href={`/package`} onClick={scrollTop}>
                            Package Grid
                          </Link>
                        </li>
                        <li>
                          <Link onClick={scrollTop} href={`/package-sidebar`}>
                            Package Sidebar
                          </Link>
                        </li>
                        <li>
                          <Link onClick={scrollTop} href={`/package-standard`}>
                            Package Standard
                          </Link>
                        </li>
                        <li>
                          <Link onClick={scrollTop} href={`/package-details`}>
                            Package Details
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="has-child-menu"
                      onClick={() => dispatch({ type: 'blog' })}
                    >
                      <Link href={'#'}>Blogs</Link>
                      <i className="fl flaticon-plus">+</i>
                      <ul
                        className={
                          state.activeMenu === 'blog'
                            ? 'sub-menu d-block'
                            : 'sub-menu d-none'
                        }
                      >
                        <li>
                          <Link onClick={scrollTop} href={`/blog`}>
                            Blog Grid
                          </Link>
                        </li>
                        <li>
                          <Link onClick={scrollTop} href={`/blog-sidebar`}>
                            Blog Sidebar
                          </Link>
                        </li>
                        <li>
                          <Link onClick={scrollTop} href={`/blog-standard`}>
                            Blog Standard
                          </Link>
                        </li>
                        <li>
                          <Link onClick={scrollTop} href={`/blog-details`}>
                            Blog Details
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="has-child-menu"
                      onClick={() => dispatch({ type: 'page' })}
                    >
                      <Link href={'#'}>Pages</Link>
                      <i className="fl flaticon-plus">+</i>
                      <ul
                        className={
                          state.activeMenu === 'page'
                            ? 'sub-menu d-block'
                            : 'sub-menu d-none'
                        }
                      >
                        <li>
                          <Link onClick={scrollTop} href={`/guide`}>
                            Guide
                          </Link>
                        </li>
                        <li>
                          <Link onClick={scrollTop} href={`/gallery`}>
                            Gallery
                          </Link>
                        </li>
                        <li>
                          <Link onClick={scrollTop} href={`/faq`}>
                            FAQ
                          </Link>
                        </li>
                        <li>
                          <Link onClick={scrollTop} href={`/error`}>
                            404
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link onClick={scrollTop} href={`/contact`}>
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                  <div className="inner-contact-options d-xl-none">
                    <div className="contact-box-inner">
                      <i className="bi bi-telephone-fill" />
                      <Link href="tel:+17632275032">+63 963 216 0905</Link>
                    </div>
                    <div className="contact-box-inner">
                      <i className="bi bi-envelope-fill" />
                      <Link href="mailto:admin@diskubrepalawan.com">
                        admin@diskubrepalawan.com
                      </Link>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="col-xl-2">
                <div className="nav-right float-end d-xl-flex d-none ">
                  <ul className="nav-actions">
                    <li className="category-toggle" onClick={handleCatagorybtn}>
                      <i className="bx bx-category" />
                    </li>
                    <li className="search-toggle" onClick={handleSearcghBtn}>
                      <i className="bx bx-search-alt" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* ===============  header area end =============== */}
    </>
  );
}

export default Header;

import { FunctionComponent, useContext, useEffect } from 'react';

import AboutPage from '@components/pages/about/About';
import Header from '@components/common/Header';
import Footer from '@components/common/Footer';
import { getTourGuides, getBlogs } from '../mock-api';

interface Props {
  tourGuides: Array<string>;
  blogs: Array<string>;
}

const About: FunctionComponent<Props> = (props) => {
  return (
    <>
      <Header />
      <AboutPage />
      <Footer className="footer-area mt-110" />
    </>
  );
};

export async function getServerSideProps() {
  const tourGuides = await getTourGuides();
  const blogs = await getBlogs();

  return {
    props: {
      tourGuides,
      blogs,
    },
  };
}

export default About;

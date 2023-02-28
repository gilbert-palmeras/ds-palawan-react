import { FunctionComponent, useContext, useEffect } from 'react';

import LayoutWrapper from '@components/layout/LayoutWrapper';
import HomePage from '@components/pages/Home/HomePage';
import {
  getTourPackages,
  getTourGuides,
  getBlogs,
  getDestinations,
} from '@app/mock-api';
import { MockContext } from '@app/context';

const MainPage: FunctionComponent = () => {
  return (
    <>
      <LayoutWrapper>
        <HomePage />
      </LayoutWrapper>

      {/* <Header />
      <PackageDetailsPage />
      <Footer className="footer-area mt-110" /> */}
    </>
  );
};

export async function getServerSideProps() {
  const tours = await getTourPackages();
  console.log(tours);
  const tourGuides = await getTourGuides();
  const blogs = await getBlogs();
  const destinations = await getDestinations();

  return {
    props: {
      tours,
      tourGuides,
      blogs,
      destinations,
    },
  };
}

export default MainPage;

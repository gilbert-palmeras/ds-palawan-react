import { FunctionComponent, useEffect } from 'react';
import Link from 'next/link';

import PackageCard from '../packageGrid/PackageCard';

import { RootState } from '@app/store';
import { connect, ConnectedProps } from 'react-redux';

import * as tourPackagesActions from '@modules/tourPackages/action'; 

type Props = ReduxProps;

const OfferArea: FunctionComponent<Props> = ({ tourPackages, getTourPackages }) => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    getTourPackages()
  }, [])

  return (
    <>
      <div className="package-area package-style-one pt-110 ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-head-alpha text-center mx-auto">
                <h2>Choose Holiday Offer</h2>
                <p>
                  Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                  venenatis hendrerit a id lectus. Suspendissendt blandit
                  interdum. Sed pellentesque at nunc eget consectetur.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4">
            {tourPackages.map((tour, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <PackageCard {...tour} />
              </div>
            ))}
          </div>
          <div className="row text-center">
            <div className="package-bottom-btn">
              <Link
                href={`/package`}
                onClick={scrollTop}
                className="button-fill-primary"
              >
                View All Offer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state: RootState) => ({
	tourPackages: state.tourPackages.tourPackage.tours,
});

const mapDispatchToProps = {
	getTourPackages: tourPackagesActions.getTourPackages
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(OfferArea)

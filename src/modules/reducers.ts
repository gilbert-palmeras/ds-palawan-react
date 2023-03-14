import { combineReducers } from 'redux';
import { tourPackageReducers } from '@modules/tourPackages/reducer';
import { transferReducers } from '@modules/transfers/reducer';
import { tourGuideReducers } from '@modules/tourGuides/reducer';
import { destinationReducers } from '@modules/destinations/reducer';
import { blogReducers } from '@modules/blogs/reducer';

const reducers = combineReducers({
	tourPackages: tourPackageReducers,
	transfer: transferReducers,
	tourGuide: tourGuideReducers,
	destination: destinationReducers,
	blog: blogReducers
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
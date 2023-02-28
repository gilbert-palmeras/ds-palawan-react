import { all, fork } from 'redux-saga/effects';
import { tourPackageWatchers } from './tourPackages';
import { transferWatchers } from './transfer';
import { tourGuideWatchers } from './tourGuides';
import { destinationWatchers } from './destinations';
import { blogWatchers } from './blogs';

export function* rootSaga() {
    yield all([
        fork(tourPackageWatchers),
        fork(transferWatchers),
        fork(tourGuideWatchers),
        fork(destinationWatchers),
        fork(blogWatchers)
    ])
}
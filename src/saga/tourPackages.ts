import { call, put, all, takeLatest } from '@redux-saga/core/effects';
import { SagaIterator } from '@redux-saga/types';
import { api, Response } from '@app/helpers/api';
import { Actions, TTourPackage } from '@app/modules/tourPackages/types';

export function* getITTourPackage(): SagaIterator{
    try {
        const { data }: Response<{ data: TTourPackage[] }> = yield call(api, {
            // mema url and method
            url: '/tour/get-all-tour',
            method: 'get'
        })
        yield put({ type: Actions.GET_TOUR_PACKAGE_LIST_FULFILLED, payload: data.data })
    } catch (error) {
        yield put({ type: Actions.GET_TOUR_PACKAGE_LIST_REJECTED, payload: undefined })
    }
}

export function* tourPackageWatchers() {
    yield all([
        takeLatest(Actions.GET_TOUR_PACKAGE_LIST_START, getITTourPackage)
    ])
}
import { call, put, all, takeLatest } from '@redux-saga/core/effects';
import { SagaIterator } from '@redux-saga/types';
import { api, Response } from '@app/helpers/api';
import { Actions, Destination } from '@modules/destinations/types';

export function* getDestination(): SagaIterator{
    try {
        const { data }: Response<{ data: Destination[] }> = yield call(api, {
            url: '/destination/get-destination',
            method: 'get'
        })
        yield put({ type: Actions.GET_DESTINATION_FULFILLED, payload: data.data })
    } catch (error) {
        yield put({ type: Actions.GET_DESTINATION_REJECTED, payload: undefined })
    }
}


export function* destinationWatchers() {
    yield all([
        takeLatest(Actions.GET_DESTINATION_START, getDestination)
    ])
}
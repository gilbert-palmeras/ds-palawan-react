import { call, put, all, takeLatest } from '@redux-saga/core/effects';
import { SagaIterator } from '@redux-saga/types';
import { api, Response } from '@app/helpers/api';
import { Actions, TourGuides } from '@modules/tourGuides/types';

export function* getTourGuide(): SagaIterator{
    try {
        const { data }: Response<{ data: TourGuides[] }> = yield call(api, {
            url: '/tour-guide/get-tour-guide',
            method: 'get'
        })
        yield put({ type: Actions.GET_TOUR_GUIDES_FULFILLED, payload: data.data })
    } catch (error) {
        yield put({ type: Actions.GET_TOUR_GUIDES_REJECTED, payload: undefined })
    }
}


export function* tourGuideWatchers() {
    yield all([
        takeLatest(Actions.GET_TOUR_GUIDES_START, getTourGuide)
    ])
}
import { call, put, all, takeLatest } from '@redux-saga/core/effects';
import { SagaIterator } from '@redux-saga/types';
import { api, Response } from '@app/helpers/api';
import { Actions, Transfer } from '@modules/transfers/types';

export function* getTransfer(): SagaIterator{
    try {
        const { data }: Response<{ data: Transfer[] }> = yield call(api, {
            url: '/transfer/get-transfer',
            method: 'get'
        })
        yield put({ type: Actions.GET_TRANSFER_FULFILLED, payload: data.data })
    } catch (error) {
        yield put({ type: Actions.GET_TRANSFER_REJECTED, payload: undefined })
    }
}


export function* transferWatchers() {
    yield all([
        takeLatest(Actions.GET_TRANSFER_START, getTransfer)
    ])
}